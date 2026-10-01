const Ranking = (() => {
    const CHAVE_FILA = 'ranking:fila';
    const MAX_FILA = 10;
    const ESPERA_ENVIO = 3200;

    let cliente = null;
    let usuario = null;
    let configurado = false;
    let interfacePronta = false;
    let ultimoEnvio = null;
    const ouvintes = [];

    function pronto(fn) {
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', fn);
        } else {
            fn();
        }
    }

    function disponivel() {
        return configurado && !!cliente;
    }

    function usuarioAtual() {
        return usuario;
    }

    function estaLogado() {
        return !!usuario;
    }

    function aoMudar(fn) {
        if (typeof fn === 'function') {
            ouvintes.push(fn);
        }
    }

    function lerFila() {
        try {
            const bruto = JSON.parse(localStorage.getItem(CHAVE_FILA) || '[]');
            return Array.isArray(bruto) ? bruto : [];
        } catch (erro) {
            return [];
        }
    }

    function gravarFila(fila) {
        try {
            localStorage.setItem(CHAVE_FILA, JSON.stringify(fila.slice(-MAX_FILA)));
        } catch (erro) {
            /* armazenamento indisponível */
        }
    }

    function enfileirar(dados) {
        const fila = lerFila();
        fila.push(dados);
        gravarFila(fila);
    }

    function esperar(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    async function esvaziarFila() {
        const fila = lerFila();
        if (fila.length === 0) {
            return;
        }
        gravarFila([]);
        for (let i = 0; i < fila.length; i++) {
            try {
                await enviarPontuacao(fila[i]);
            } catch (erro) {
                /* ignora partidas inválidas/duplicadas */
            }
            if (i < fila.length - 1) {
                await esperar(ESPERA_ENVIO);
            }
        }
    }

    async function enviarPontuacao(dados) {
        const { data, error } = await cliente.rpc('registrar_pontuacao', {
            p_jogo: dados.jogo,
            p_dificuldade: dados.dificuldade,
            p_pontos: dados.pontos,
            p_acertos: dados.acertos,
            p_duracao_seg: dados.duracaoSeg
        });
        if (error) {
            throw error;
        }
        return data;
    }

    async function buscarRanking(opcoes) {
        opcoes = opcoes || {};
        if (!disponivel()) {
            return [];
        }
        const { data, error } = await cliente.rpc('ranking', {
            p_periodo: opcoes.periodo || 'dia',
            p_jogo: opcoes.jogo || null,
            p_limite: opcoes.limite || 20
        });
        if (error) {
            throw error;
        }
        return data || [];
    }

    function traduzirErro(erro) {
        const texto = (erro && (erro.message || erro.error_description || erro)) || '';
        const mapa = [
            ['Invalid login credentials', 'E-mail ou senha incorretos.'],
            ['Email not confirmed', 'Confirme seu e-mail antes de entrar.'],
            ['User already registered', 'Este e-mail já está cadastrado.'],
            ['Password should be at least', 'A senha precisa ter ao menos 6 caracteres.'],
            ['Unable to validate email', 'E-mail inválido.'],
            ['nao_autenticado', 'Faça login para enviar sua pontuação.'],
            ['pontuacao_inconsistente', 'Pontuação inconsistente — envio bloqueado.'],
            ['tempo_inconsistente', 'Tempo de partida inconsistente — envio bloqueado.'],
            ['aguarde_antes_de_enviar', 'Aguarde alguns segundos antes de enviar novamente.'],
            ['limite_horario', 'Limite de envios por hora atingido.'],
            ['apelido', 'Escolha outro apelido.'],
            ['duplicate key', 'Este apelido já está em uso.']
        ];
        for (const [trecho, traducao] of mapa) {
            if (texto.includes(trecho)) {
                return traducao;
            }
        }
        return 'Não foi possível concluir. Tente novamente.';
    }

    function atualizarWidget() {
        const widget = document.getElementById('auth-widget');
        if (!widget) {
            return;
        }
        if (usuario) {
            const apelido = (usuario.user_metadata && usuario.user_metadata.apelido) || 'Jogador';
            widget.innerHTML =
                '<span class="auth-user" title="' + apelido + '">' + apelido + '</span>' +
                '<button type="button" class="auth-btn auth-btn--sair" id="auth-sair">Sair</button>';
            widget.querySelector('#auth-sair').addEventListener('click', sair);
        } else {
            widget.innerHTML = '<button type="button" class="auth-btn" id="auth-entrar">Entrar</button>';
            widget.querySelector('#auth-entrar').addEventListener('click', () => abrirAuth());
        }
    }

    function definirUsuario(novo) {
        usuario = novo || null;
        atualizarWidget();
        if (usuario) {
            esvaziarFila().then(() => {
                if (ultimoEnvio && document.getElementById('ranking-envio')) {
                    renderizarSlot('<p class="ranking-envio-texto success">✓ Pontuação enviada ao ranking</p>');
                }
            });
        }
        ouvintes.forEach(fn => {
            try {
                fn(usuario);
            } catch (erro) {
                /* ouvinte com erro não derruba o módulo */
            }
        });
    }

    function garantirInterface() {
        if (interfacePronta) {
            return;
        }
        interfacePronta = true;

        const widget = document.createElement('div');
        widget.className = 'auth-widget';
        widget.id = 'auth-widget';
        document.body.appendChild(widget);

        const overlay = document.createElement('div');
        overlay.className = 'auth-overlay';
        overlay.id = 'auth-overlay';

        const modal = document.createElement('div');
        modal.className = 'auth-modal';
        modal.id = 'auth-modal';
        modal.setAttribute('role', 'dialog');
        modal.setAttribute('aria-modal', 'true');
        modal.setAttribute('aria-labelledby', 'auth-titulo');
        modal.innerHTML =
            '<button class="btn-close-popup" type="button" aria-label="Fechar" id="auth-fechar">✕</button>' +
            '<h2 id="auth-titulo">Entrar</h2>' +
            '<p class="popup-subtitle" id="auth-sub">Acesse para salvar suas pontuações no ranking.</p>' +
            '<div class="auth-tabs" role="tablist">' +
                '<button type="button" class="auth-tab ativo" data-modo="entrar">Entrar</button>' +
                '<button type="button" class="auth-tab" data-modo="criar">Criar conta</button>' +
            '</div>' +
            '<form class="auth-form" id="auth-form" novalidate>' +
                '<label class="auth-campo" id="auth-campo-apelido" hidden>' +
                    '<span>Apelido</span>' +
                    '<input type="text" id="auth-apelido" maxlength="20" autocomplete="nickname">' +
                '</label>' +
                '<label class="auth-campo">' +
                    '<span>E-mail</span>' +
                    '<input type="email" id="auth-email" autocomplete="email" required>' +
                '</label>' +
                '<label class="auth-campo">' +
                    '<span>Senha</span>' +
                    '<input type="password" id="auth-senha" autocomplete="current-password" minlength="6" required>' +
                '</label>' +
                '<p class="auth-erro" id="auth-erro" role="alert"></p>' +
                '<button type="submit" class="btn btn-play" id="auth-submit">Entrar</button>' +
            '</form>' +
            '<button type="button" class="auth-google" id="auth-google">Continuar com Google</button>';

        document.body.appendChild(overlay);
        document.body.appendChild(modal);

        overlay.addEventListener('click', fecharAuth);
        modal.querySelector('#auth-fechar').addEventListener('click', fecharAuth);
        modal.querySelectorAll('.auth-tab').forEach(aba => {
            aba.addEventListener('click', () => definirModo(aba.dataset.modo));
        });
        modal.querySelector('#auth-form').addEventListener('submit', enviarFormulario);
        modal.querySelector('#auth-google').addEventListener('click', entrarComGoogle);

        document.addEventListener('keydown', evento => {
            if (evento.key === 'Escape' && modal.classList.contains('show')) {
                fecharAuth();
            }
        });

        atualizarWidget();
    }

    let modo = 'entrar';

    function definirModo(novo) {
        modo = novo === 'criar' ? 'criar' : 'entrar';
        const modal = document.getElementById('auth-modal');
        if (!modal) {
            return;
        }
        modal.querySelectorAll('.auth-tab').forEach(aba => {
            aba.classList.toggle('ativo', aba.dataset.modo === modo);
        });
        modal.querySelector('#auth-titulo').textContent = modo === 'criar' ? 'Criar conta' : 'Entrar';
        modal.querySelector('#auth-campo-apelido').hidden = modo !== 'criar';
        modal.querySelector('#auth-apelido').required = modo === 'criar';
        modal.querySelector('#auth-submit').textContent = modo === 'criar' ? 'Criar conta' : 'Entrar';
        modal.querySelector('#auth-senha').setAttribute(
            'autocomplete', modo === 'criar' ? 'new-password' : 'current-password');
        modal.querySelector('#auth-erro').textContent = '';
    }

    function abrirAuth(motivo) {
        if (!disponivel()) {
            return;
        }
        garantirInterface();
        const modal = document.getElementById('auth-modal');
        const overlay = document.getElementById('auth-overlay');
        definirModo(estaLogado() ? 'entrar' : (motivo === 'criar' ? 'criar' : 'entrar'));
        modal.querySelector('#auth-sub').textContent = estaLogado()
            ? 'Você já está conectado.'
            : 'Acesse para salvar suas pontuações no ranking.';
        modal.classList.add('show');
        overlay.classList.add('show');
        const foco = modal.querySelector(modo === 'criar' ? '#auth-apelido' : '#auth-email');
        if (foco) {
            foco.focus();
        }
    }

    function fecharAuth() {
        const modal = document.getElementById('auth-modal');
        const overlay = document.getElementById('auth-overlay');
        if (modal) modal.classList.remove('show');
        if (overlay) overlay.classList.remove('show');
    }

    async function enviarFormulario(evento) {
        evento.preventDefault();
        const modal = document.getElementById('auth-modal');
        const erroEl = modal.querySelector('#auth-erro');
        const botao = modal.querySelector('#auth-submit');
        const apelido = modal.querySelector('#auth-apelido').value.trim();
        const email = modal.querySelector('#auth-email').value.trim();
        const senha = modal.querySelector('#auth-senha').value;
        erroEl.textContent = '';

        if (modo === 'criar' && (apelido.length < 3 || apelido.length > 20)) {
            erroEl.textContent = 'O apelido deve ter entre 3 e 20 caracteres.';
            return;
        }
        if (senha.length < 6) {
            erroEl.textContent = 'A senha precisa ter ao menos 6 caracteres.';
            return;
        }

        botao.disabled = true;
        try {
            if (modo === 'criar') {
                const { data, error } = await cliente.auth.signUp({
                    email: email,
                    password: senha,
                    options: { data: { apelido: apelido } }
                });
                if (error) throw error;
                if (!data.session) {
                    erroEl.textContent = 'Conta criada! Confirme o e-mail para entrar.';
                    return;
                }
            } else {
                const { error } = await cliente.auth.signInWithPassword({ email, password: senha });
                if (error) throw error;
            }
            fecharAuth();
        } catch (erro) {
            erroEl.textContent = traduzirErro(erro);
        } finally {
            botao.disabled = false;
        }
    }

    async function entrarComGoogle() {
        const modal = document.getElementById('auth-modal');
        const erroEl = modal.querySelector('#auth-erro');
        erroEl.textContent = '';
        const { error } = await cliente.auth.signInWithOAuth({
            provider: 'google',
            options: { redirectTo: window.location.href.split('#')[0] }
        });
        if (error) {
            erroEl.textContent = traduzirErro(error);
        }
    }

    async function sair() {
        if (!disponivel()) {
            return;
        }
        await cliente.auth.signOut();
    }

    function renderizarSlot(html) {
        const slot = document.getElementById('ranking-envio');
        if (slot) {
            slot.innerHTML = html;
        }
    }

    function renderizarConvite() {
        renderizarSlot(
            '<p class="ranking-envio-texto">Entre para salvar sua pontuação no ranking.</p>' +
            '<button type="button" class="btn btn-play btn-ranking-entrar" id="ranking-entrar">Criar conta / Entrar</button>'
        );
        const botao = document.getElementById('ranking-entrar');
        if (botao) {
            botao.addEventListener('click', () => abrirAuth('criar'));
        }
    }

    function registrarFimDeJogo(dados) {
        if (!disponivel() || !dados || dados.pontos <= 0) {
            renderizarSlot('');
            return;
        }
        ultimoEnvio = dados;
        if (!estaLogado()) {
            enfileirar(dados);
            renderizarConvite();
            return;
        }
        renderizarSlot('<p class="ranking-envio-texto">Enviando pontuação…</p>');
        enviarPontuacao(dados)
            .then(() => {
                renderizarSlot('<p class="ranking-envio-texto success">✓ Pontuação enviada ao ranking</p>');
            })
            .catch(erro => {
                renderizarSlot('<p class="ranking-envio-texto error">' + traduzirErro(erro) + '</p>');
            });
    }

    function iniciar() {
        if (typeof window.supabase === 'undefined') {
            return false;
        }
        if (typeof SUPABASE_URL !== 'string' || typeof SUPABASE_ANON_KEY !== 'string') {
            return false;
        }
        if (!/^https:\/\/.+\.supabase\.co$/.test(SUPABASE_URL) || SUPABASE_ANON_KEY === 'SUA-ANON-KEY') {
            return false;
        }
        cliente = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
        configurado = true;
        garantirInterface();

        cliente.auth.getSession().then(({ data }) => {
            definirUsuario(data && data.session ? data.session.user : null);
        });

        cliente.auth.onAuthStateChange((_evento, sessao) => {
            definirUsuario(sessao ? sessao.user : null);
        });

        return true;
    }

    pronto(iniciar);

    return {
        iniciar,
        disponivel,
        usuarioAtual,
        estaLogado,
        aoMudar,
        abrirAuth,
        fecharAuth,
        sair,
        enviarPontuacao,
        buscarRanking,
        registrarFimDeJogo
    };
})();
