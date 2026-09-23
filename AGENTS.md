# Hub de Jogos de Química

Site estático (GitHub Pages, branch `master`) sem build step: HTML/CSS/JS puros.
Publicado em https://gabrielrpoubel.github.io/Hub-de-Jogos-de-Quimica/

## Política de leitura (economia de contexto)

- NUNCA leia `comum/tabela-periodica/elements.js` inteiro: são ~36 KB com 1 elemento por
  linha. Use grep pelo símbolo/número e edite só a linha do elemento.
- Os JS grandes usam marcadores de seção `/* ---------- [XX-NN] nome ---------- */`
  (G1 = jogo1, G2 = jogo2, TP = tabela periódica). Liste com grep `\[G1-` etc. e leia só
  a seção necessária.
- As primeiras seções de `jogo1-equilibrio/game.js` (G1-01) e `jogo2-ligacoes/game.js`
  (G2-01) são bancos de dados grandes; evite lê-las sem necessidade.

## Mapa de arquivos

- `index.html` + `style.css` — home: hero, becker SVG animado, carrossel de jogos.
- `jogo1-equilibrio/` — balanceamento de equações (`game.js`: banco de reações + fluxo).
- `jogo2-ligacoes/` — tipos de ligação (`game.js`: banco de compostos + fluxo).
- `tabela-periodica/` — página da tabela (`style.css`: chrome, layout 100dvh).
- `comum/estilos/base.css` — tokens de design + chrome compartilhado (header, back-link,
  botões, popups, dificuldade, estatísticas, modal, animações).
- `comum/icones/icones.js` — SVGs injetados em `[data-icone]` por `montarIcones()`.
  Chaves: balanca, molecula, grade, diagrama, broto, raio, chama, info, seta-esq,
  seta-dir, jogar, reiniciar.
- `comum/tabela-periodica/` — componente `TabelaPeriodica` (`elements.js`, `.js`, `.css`).
- `comum/jogos/quiz-base.js` — `QuizBase`: popup de dificuldade, placar e sorteio de
  reação compartilhados pelos dois jogos.
- `ferramentas/` — scripts auxiliares (Python 3 + PowerShell).

## Convenções

- Idioma: PT-BR em textos, nomes de funções/variáveis e commits.
- Sem comentários no código, exceto os marcadores de seção.
- Estilo de chrome de jogo vai em `base.css`; estilo específico da página no `style.css` local.
- Prefixos: tabela = `tp-`, home = `hero-`/`carrossel-`/`becker`, ids de jogo = `game-*`.
- Toda referência local de CSS/JS nos HTMLs leva `?v=N` (cache busting). Nunca edite à mão:
  use `ferramentas/versao.py`.
- Dados da tabela: `null` = não medido/inexistente; `previsto: true` para Z ≥ 100; fonte
  base PubChem (massa, fusão/ebulição em °C, densidade) + Wikipedia (raio,
  eletronegatividade, ionização). Não "corrija" valores sem conferir a fonte.

## APIs

- `TabelaPeriodica.montar(alvo, opcoes)` — `opcoes`: `modo` ('completa'|'compacta'),
  `legenda` ('#seletor'|'espaco'|false), `detalhes` (bool), `classificacao`
  ('simples'|'completa'), `categoria` ('familias'|'eletronegatividade'|'raio'|'ionizacao').
  Também: `abrir(simbolo|Z)`, `fechar()`, `elemento(ref)`, `definirCategoria`,
  `definirClassificacao`, `definirVisualizacao({categoria, classificacao})`.
- `QuizBase` — `abrirPopupDificuldade([intervalos])`, `fecharPopupDificuldade()`,
  `aplicarDificuldade(diff, rotulo, erroInicial)` → duração em segundos (null = livre),
  `limparPlacar()`, `escolherReacao(lista, usados)`.
- Tokens principais (`base.css`): `--marfim #faf6ee`, `--papel #fffdf8`, `--areia #f4ecdd`,
  `--bege #ece1cd`, `--borda #e3d8c4`, `--texto #3d3226`, `--terracota #c0664a`,
  `--oliva #7d8c55`, `--ambar #d9a441`, `--raio 14px`. Fontes: Quicksand (títulos),
  Lora (subtextos), Inter (UI).

## Receitas

- Publicar: `python ferramentas/versao.py` (bump do `?v=`) → commit → push em `master`.
- Verificar antes de publicar: `python ferramentas/verificar.py` (BOM, referências
  quebradas, `?v=` consistente).
- Screenshot: `powershell -ExecutionPolicy Bypass -File ferramentas/screenshot.ps1 -Url <url>
  -Saida <png>` (Edge headless; já embute retry; o Bypass é necessário pois .ps1 é bloqueado
  pela política de execução do Windows).
- Corrigir/adicionar dado de elemento: grep o símbolo em `elements.js` e edite a linha única.
- Nova categoria de mapa de calor: adicione em `CATEGORIAS` ([TP-03] em
  `tabela-periodica.js`) com `propriedade` e `unidade`; a escala de cor é automática.
- Nova página: copie o `<head>` de outra página, inclua `base.css`, `icones.js` e os
  arquivos necessários com `?v=`, e adicione o caminho ao array `HTMLS` de
  `ferramentas/versao.py`.

## Observações

- O `AGENTS.md` só é carregado se o opencode for aberto na pasta do projeto (ou subpasta).
- Scripts de auditoria de dados da sessão de preenchimento ficaram em `%TEMP%\opencode\`
  (podem ter sido apagados); as fontes usadas foram PubChem CSV, dataset Bowserinator e
  infoboxes da Wikipedia.
