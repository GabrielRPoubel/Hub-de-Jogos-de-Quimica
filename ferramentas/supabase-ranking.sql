-- ==========================================================================
-- Hub de Jogos de Química — cadastro + ranking (Supabase / Postgres)
-- Cole este arquivo no SQL Editor do projeto Supabase e execute uma vez.
-- Depois preencha comum/ranking/config.js com a URL e a anon key.
-- ==========================================================================

-- ---------- [SR-01] perfis ----------

create table if not exists public.perfis (
    id        uuid primary key references auth.users(id) on delete cascade,
    apelido   text not null,
    criado_em timestamptz not null default now(),
    constraint apelido_tam check (char_length(apelido) between 3 and 20)
);

create unique index if not exists perfis_apelido_ci on public.perfis (lower(apelido));

-- ---------- [SR-02] pontuações ----------

create table if not exists public.pontuacoes (
    id          bigint generated always as identity primary key,
    usuario_id  uuid not null references public.perfis(id) on delete cascade,
    jogo        text not null,
    dificuldade text not null,
    pontos      int  not null,
    acertos     int  not null,
    duracao_seg int  not null,
    criado_em   timestamptz not null default now(),
    constraint jogo_ok    check (jogo in ('equilibrio', 'ligacoes', 'distribuicao')),
    constraint dif_ok     check (dificuldade in ('facil', 'medio', 'dificil')),
    constraint pontos_ok  check (pontos >= 0),
    constraint acertos_ok check (acertos >= 0),
    constraint dur_ok     check (duracao_seg >= 0)
);

create index if not exists pontuacoes_jogo_criado on public.pontuacoes (jogo, criado_em desc);
create index if not exists pontuacoes_usuario     on public.pontuacoes (usuario_id);
create index if not exists pontuacoes_criado      on public.pontuacoes (criado_em desc);

-- ---------- [SR-03] perfil automático ao registrar ----------

create or replace function public.criar_perfil()
returns trigger
language plpgsql
security definer
set search_path = public
as $$
declare
    v_apelido text;
begin
    v_apelido := coalesce(nullif(trim(new.raw_user_meta_data->>'apelido'), ''),
                          'jogador_' || left(new.id::text, 8));
    while exists (select 1 from public.perfis where lower(apelido) = lower(v_apelido)) loop
        v_apelido := left(v_apelido, 15) || floor(random() * 1000)::text;
    end loop;
    insert into public.perfis (id, apelido) values (new.id, v_apelido);
    return new;
end;
$$;

drop trigger if exists ao_criar_usuario on auth.users;
create trigger ao_criar_usuario
after insert on auth.users
for each row execute function public.criar_perfil();

-- ---------- [SR-04] janela de período (America/Sao_Paulo) ----------

create or replace function public.inicio_periodo(p_periodo text)
returns timestamptz
language sql
stable
as $$
    select (case p_periodo
        when 'semana' then date_trunc('week',  now() at time zone 'America/Sao_Paulo')
        when 'mes'    then date_trunc('month', now() at time zone 'America/Sao_Paulo')
        else               date_trunc('day',   now() at time zone 'America/Sao_Paulo')
    end) at time zone 'America/Sao_Paulo';
$$;

-- ---------- [SR-05] registro de pontuação (anti-cheat) ----------

revoke insert on public.pontuacoes from anon, authenticated;

create or replace function public.registrar_pontuacao(
    p_jogo text,
    p_dificuldade text,
    p_pontos int,
    p_acertos int,
    p_duracao_seg int
)
returns bigint
language plpgsql
security definer
set search_path = public
as $$
declare
    v_uid uuid := auth.uid();
    v_id bigint;
    v_recentes int;
begin
    if v_uid is null then
        raise exception 'nao_autenticado';
    end if;
    if p_jogo not in ('equilibrio', 'ligacoes', 'distribuicao') then
        raise exception 'jogo_invalido';
    end if;
    if p_dificuldade not in ('facil', 'medio', 'dificil') then
        raise exception 'dificuldade_invalida';
    end if;
    if p_pontos < 0 or p_acertos < 0 or p_duracao_seg < 0 then
        raise exception 'valores_invalidos';
    end if;

    if p_jogo = 'ligacoes' and p_pontos <> p_acertos * 100 then
        raise exception 'pontuacao_inconsistente';
    elsif p_jogo = 'equilibrio' and (p_pontos < p_acertos * 10 or p_pontos > p_acertos * 300) then
        raise exception 'pontuacao_inconsistente';
    elsif p_jogo = 'distribuicao' and (p_pontos < p_acertos * 20 or p_pontos > p_acertos * 200) then
        raise exception 'pontuacao_inconsistente';
    end if;

    if p_acertos > (p_duracao_seg + 1) * 2 then
        raise exception 'tempo_inconsistente';
    end if;

    if exists (select 1 from public.pontuacoes
               where usuario_id = v_uid and criado_em > now() - interval '3 seconds') then
        raise exception 'aguarde_antes_de_enviar';
    end if;

    select count(*) into v_recentes from public.pontuacoes
     where usuario_id = v_uid and criado_em > now() - interval '1 hour';
    if v_recentes >= 60 then
        raise exception 'limite_horario';
    end if;

    insert into public.pontuacoes (usuario_id, jogo, dificuldade, pontos, acertos, duracao_seg)
    values (v_uid, p_jogo, p_dificuldade, p_pontos, p_acertos, p_duracao_seg)
    returning id into v_id;

    return v_id;
end;
$$;

grant execute on function public.registrar_pontuacao(text, text, int, int, int) to authenticated;

-- ---------- [SR-06] ranking (dia/semana/mês · por jogo/geral) ----------

create or replace function public.ranking(
    p_periodo text default 'dia',
    p_jogo text default null,
    p_limite int default 20
)
returns table (posicao bigint, usuario_id uuid, apelido text, pontos int)
language sql
stable
security definer
set search_path = public
as $$
    with melhores as (
        select p.usuario_id, p.jogo, max(p.pontos) as pontos
        from public.pontuacoes p
        where p.criado_em >= public.inicio_periodo(p_periodo)
          and (p_jogo is null or p.jogo = p_jogo)
        group by p.usuario_id, p.jogo
    ),
    base as (
        select m.usuario_id,
               case when p_jogo is null then sum(m.pontos) else max(m.pontos) end as pontos
        from melhores m
        group by m.usuario_id
    )
    select row_number() over (order by b.pontos desc, pr.apelido) as posicao,
           b.usuario_id,
           pr.apelido,
           b.pontos::int
    from base b
    join public.perfis pr on pr.id = b.usuario_id
    order by b.pontos desc, pr.apelido
    limit least(p_limite, 100);
$$;

grant execute on function public.ranking(text, text, int) to anon, authenticated;

-- ---------- [SR-07] RLS ----------

alter table public.perfis     enable row level security;
alter table public.pontuacoes enable row level security;

drop policy if exists perfis_select on public.perfis;
create policy perfis_select on public.perfis
    for select using (true);

drop policy if exists perfis_update on public.perfis;
create policy perfis_update on public.perfis
    for update using (auth.uid() = id) with check (auth.uid() = id);

grant select on public.perfis to anon, authenticated;
grant update on public.perfis to authenticated;
