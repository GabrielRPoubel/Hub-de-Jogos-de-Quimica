/* ---------- [G3-01] configurações ---------- */

const MAPA_SUPER = {
    '⁰': '0', '¹': '1', '²': '2', '³': '3', '⁴': '4',
    '⁵': '5', '⁶': '6', '⁷': '7', '⁸': '8', '⁹': '9'
};

const SUPER_DIGITOS = ['⁰', '¹', '²', '³', '⁴', '⁵', '⁶', '⁷', '⁸', '⁹'];

const ORDEM_AUFBAU = [
    '1s', '2s', '2p', '3s', '3p', '4s', '3d', '4p', '5s', '4d', '5p',
    '6s', '4f', '5d', '6p', '7s', '5f', '6d', '7p'
];

const COLUNAS_ESCADA = { s: 1, p: 2, d: 3, f: 4 };

const TOTAL_LINHAS_ESCADA = Math.max(...ORDEM_AUFBAU.map(chave => Number(chave[0])));

const CAPACIDADE = { s: 2, p: 6, d: 10, f: 14 };

const ROTULOS_DIFICULDADE = { facil: 'Fácil', medio: 'Médio', dificil: 'Difícil' };
const MULTIPLICADORES = { facil: 1, medio: 1.5, dificil: 2 };
const PONTOS_BASE = 100;
const PENALIDADE_DICA = 25;
const MAX_DICAS = 3;
const MAX_ERROS = 3;

function paraNumero(texto) {
    return Number(String(texto).replace(/[⁰¹²³⁴⁵⁶⁷⁸⁹]/g, digito => MAPA_SUPER[digito]));
}

function paraSuper(numero) {
    return String(numero).split('').map(digito => SUPER_DIGITOS[Number(digito)]).join('');
}

function expandirConfiguracao(elemento) {
    const subs = [];
    elemento.config.split(/\s+/).forEach(token => {
        const nucleo = token.match(/^\[(\w+)\]$/);
        if (nucleo) {
            const base = ELEMENTOS_QUIMICOS.find(el => el.symbol === nucleo[1]);
            if (base) {
                subs.push(...expandirConfiguracao(base));
            }
            return;
        }
        const partes = token.match(/^([1-7])([spdf])([⁰¹²³⁴⁵⁶⁷⁸⁹]+)$/);
        if (partes) {
            subs.push({ n: Number(partes[1]), l: partes[2], e: paraNumero(partes[3]) });
        }
    });
    return subs;
}

function ordenarAufbau(subs) {
    return [...subs].sort((a, b) =>
        ORDEM_AUFBAU.indexOf(a.n + a.l) - ORDEM_AUFBAU.indexOf(b.n + b.l));
}

function configuracaoAufbau(total) {
    let restante = total;
    const subs = [];
    for (const chave of ORDEM_AUFBAU) {
        if (restante <= 0) {
            break;
        }
        const n = Number(chave[0]);
        const l = chave[1];
        const e = Math.min(CAPACIDADE[l], restante);
        subs.push({ n, l, e });
        restante -= e;
    }
    return subs;
}

function formatarConfiguracao(subs) {
    return subs.map(sub => `${sub.n}${sub.l}${paraSuper(sub.e)}`).join(' ');
}

function mesmasSubcamadas(a, b) {
    return a.length === b.length && a.every((sub, indice) =>
        sub.n === b[indice].n && sub.l === b[indice].l && sub.e === b[indice].e);
}

/* ---------- [G3-02] estado ---------- */

const areaConfig = document.getElementById('config-area');

let difficulty = null;
let score = 0;
let correctAnswers = 0;
let errors = 0;
let gameDuration = null;
let gameStartTime = null;
let questionStartTime = null;
let timerInterval = null;
let gamePaused = false;
let usados = [];
let elementoAtual = null;
let esperadoAtual = null;
let previsaoAtual = null;
let excecaoAtual = false;
let aguardandoExcecao = false;
let aguardandoEspaco = false;
let indiceEscada = 0;
let dicasUsadas = 0;

/* ---------- [G3-03] dificuldade ---------- */

const FAIXAS = {
    facil: el => el.n <= 20,
    medio: el => el.n > 20 && el.n <= 54,
    dificil: el => el.n > 54
};

function selectDifficulty(diff) {
    difficulty = diff;
    errors = 0;
    usados = [];
    gameDuration = QuizBase.aplicarDificuldade(diff, ROTULOS_DIFICULDADE[diff], MAX_ERROS);
    document.getElementById('pauling-panel').classList.toggle('blurred', diff === 'dificil');
    startTimer();
    nextQuestion();
}

/* ---------- [G3-04] popups e reset ---------- */

function showDifficultyPopup() {
    QuizBase.abrirPopupDificuldade([timerInterval]);
    resetGame();
}

function closeDifficultyPopup() {
    QuizBase.fecharPopupDificuldade();
}

function resetGame() {
    score = 0;
    correctAnswers = 0;
    errors = 0;
    usados = [];
    aguardandoExcecao = false;
    aguardandoEspaco = false;
    QuizBase.limparPlacar();
    limparLinhas();
    document.getElementById('gabarito').textContent = '';
    document.getElementById('continuar').hidden = true;
}

/* ---------- [G3-05] cronômetros ---------- */

function startTimer() {
    gameStartTime = Date.now();
    timerInterval = setInterval(updateTimers, 100);
}

function updateTimers() {
    const totalElapsed = Math.floor((Date.now() - gameStartTime) / 1000);
    const totalMin = Math.floor(totalElapsed / 60);
    const totalSec = totalElapsed % 60;
    document.getElementById('game-timer').textContent =
        `${totalMin}:${totalSec.toString().padStart(2, '0')}`;

    if (!gamePaused && questionStartTime) {
        const questionElapsed = Math.floor((Date.now() - questionStartTime) / 1000);

        if (gameDuration) {
            const remaining = gameDuration - questionElapsed;
            if (remaining <= 0) {
                endGame();
                return;
            }
            const min = Math.floor(remaining / 60);
            const sec = remaining % 60;
            document.getElementById('timer').textContent =
                `${min}:${sec.toString().padStart(2, '0')}`;
        } else {
            const min = Math.floor(questionElapsed / 60);
            const sec = questionElapsed % 60;
            document.getElementById('timer').textContent =
                `${min}:${sec.toString().padStart(2, '0')}`;
        }
    }
}

/* ---------- [G3-06] sorteio de elemento ---------- */

function sortearElemento() {
    const pool = ELEMENTOS_QUIMICOS.filter(FAIXAS[difficulty]);
    return QuizBase.escolherReacao(pool, usados);
}

/* ---------- [G3-07] card do elemento ---------- */

function renderElemento() {
    document.getElementById('el-numero').textContent = elementoAtual.n;
    document.getElementById('el-simbolo').textContent = elementoAtual.symbol;
    document.getElementById('el-nome').textContent = elementoAtual.name;
    atualizarProgresso();
}

function atualizarProgresso() {
    const total = coletarLinhas().reduce((soma, item) => soma + item.potencia, 0);
    document.getElementById('progresso').textContent = `${total}/${elementoAtual.n} e⁻`;
}

/* ---------- [G3-08] escada de preenchimento ---------- */

function montarSlots() {
    ORDEM_AUFBAU.forEach(chave => {
        const slot = document.createElement('div');
        slot.className = 'escada-slot';
        slot.style.gridColumn = COLUNAS_ESCADA[chave[1]];
        slot.style.gridRow = chave[0];
        areaConfig.appendChild(slot);
    });
}

function limparLinhas() {
    areaConfig.querySelectorAll('.linha-config').forEach(linha => linha.remove());
}

function posicionarLinha(linha, chave) {
    if (!chave) {
        return;
    }
    linha.style.gridColumn = COLUNAS_ESCADA[chave[1]] || 1;
    linha.style.gridRow = chave[0] || 1;
}

function criarLinha(opcoes) {
    opcoes = opcoes || {};
    const linha = document.createElement('div');
    linha.className = 'linha-config';
    linha.innerHTML =
        '<input class="campo-subnivel" type="text" maxlength="2" autocomplete="off" autocapitalize="off" spellcheck="false" aria-label="Subnível (ex.: 1s)">' +
        '<input class="campo-potencia" type="text" maxlength="2" inputmode="numeric" autocomplete="off" aria-label="Potência (ex.: 2)">';

    const campoSubnivel = linha.querySelector('.campo-subnivel');
    const campoPotencia = linha.querySelector('.campo-potencia');

    if (opcoes.somenteLeitura) {
        campoSubnivel.readOnly = true;
        campoPotencia.readOnly = true;
    } else {
        campoSubnivel.addEventListener('input', () => {
            campoSubnivel.value = campoSubnivel.value.toLowerCase().replace(/[^1-7spdf]/g, '');
            if (/^[1-7][spdf]$/.test(campoSubnivel.value)) {
                campoPotencia.focus();
            }
            atualizarProgresso();
        });

        campoPotencia.addEventListener('input', () => {
            campoPotencia.value = campoPotencia.value.replace(/\D/g, '');
            atualizarProgresso();
            tentarAvancar(linha);
        });

        [campoSubnivel, campoPotencia].forEach(campo => {
            campo.addEventListener('keydown', evento => {
                if (evento.key === 'Enter') {
                    evento.preventDefault();
                    evento.stopPropagation();
                    confirmarLinha(linha, true);
                }
            });
        });

        campoPotencia.addEventListener('blur', () => confirmarLinha(linha, false));
    }

    areaConfig.appendChild(linha);
    if (opcoes.focar !== false && !opcoes.somenteLeitura) {
        campoSubnivel.focus({ preventScroll: true });
        linha.scrollIntoView({ block: 'nearest', inline: 'nearest' });
    }
    return linha;
}

function atualizarAlturaEscada() {
    let ultima = 1;
    areaConfig.querySelectorAll('.linha-config').forEach(linha => {
        ultima = Math.max(ultima, Number(linha.style.gridRow) || 1);
    });
    const limite = Math.min(ultima + 1, TOTAL_LINHAS_ESCADA);
    areaConfig.style.setProperty('--linhas-escada', limite);
    areaConfig.querySelectorAll('.escada-slot').forEach(slot => {
        slot.hidden = Number(slot.style.gridRow) > limite;
    });
}

function adicionarLinha(focar) {
    const linha = criarLinha({ focar: focar });
    posicionarLinha(linha, ORDEM_AUFBAU[indiceEscada]);
    atualizarAlturaEscada();
    return linha;
}

function ultimaLinha() {
    const linhas = areaConfig.querySelectorAll('.linha-config');
    return linhas[linhas.length - 1] || null;
}

function linhaValida(linha) {
    const subnivel = linha.querySelector('.campo-subnivel').value;
    const potencia = Number(linha.querySelector('.campo-potencia').value);
    return /^[1-7][spdf]$/.test(subnivel) && potencia >= 1 && potencia <= 14;
}

function tentarAvancar(linha) {
    if (linha !== ultimaLinha() || !linhaValida(linha)) {
        return;
    }
    const letra = linha.querySelector('.campo-subnivel').value[1];
    const potencia = Number(linha.querySelector('.campo-potencia').value);
    if (potencia === CAPACIDADE[letra] || String(potencia).length === 2) {
        confirmarLinha(linha, true);
    }
}

function confirmarLinha(linha, focar) {
    if (linha !== ultimaLinha() || !linhaValida(linha)) {
        return;
    }
    const chave = linha.querySelector('.campo-subnivel').value;
    posicionarLinha(linha, chave);
    const indice = ORDEM_AUFBAU.indexOf(chave);
    if (indice === -1) {
        showMessage('Esse subnível não faz parte do diagrama de Pauling.', 'hint');
        return;
    }
    areaConfig.querySelectorAll('.linha-config').forEach(outra => {
        if (outra !== linha && ORDEM_AUFBAU.indexOf(outra.querySelector('.campo-subnivel').value) >= indice) {
            outra.remove();
        }
    });
    atualizarProgresso();
    atualizarAlturaEscada();
    if (indice < ORDEM_AUFBAU.length - 1) {
        indiceEscada = indice + 1;
        adicionarLinha(focar);
    } else {
        indiceEscada = indice;
    }
}

function coletarLinhas() {
    return [...areaConfig.querySelectorAll('.linha-config')]
        .map(linha => {
            const campoSubnivel = linha.querySelector('.campo-subnivel');
            const campoPotencia = linha.querySelector('.campo-potencia');
            const potencia = Number(campoPotencia.value);
            return {
                linha,
                subnivel: campoSubnivel.value.trim().toLowerCase(),
                potencia: Number.isFinite(potencia) ? potencia : 0,
                vazia: campoSubnivel.value.trim() === '' && campoPotencia.value.trim() === ''
            };
        })
        .filter(item => !item.vazia);
}

function mostrarDistribuicao(subs) {
    limparLinhas();
    subs.forEach(sub => {
        const linha = criarLinha({ somenteLeitura: true });
        linha.querySelector('.campo-subnivel').value = `${sub.n}${sub.l}`;
        linha.querySelector('.campo-potencia').value = String(sub.e);
        linha.classList.add('revelado');
        posicionarLinha(linha, `${sub.n}${sub.l}`);
    });
    atualizarAlturaEscada();
    document.getElementById('gabarito').textContent = formatarConfiguracao(subs);
    atualizarProgresso();
}

/* ---------- [G3-09] verificação ---------- */

function showMessage(texto, tipo) {
    const messageEl = document.getElementById('message');
    messageEl.textContent = texto;
    messageEl.className = 'message ' + tipo;
}

function aguardarEspaco() {
    aguardandoEspaco = true;
    gamePaused = true;
    document.getElementById('continuar').hidden = false;
}

function revelarGabarito() {
    document.getElementById('gabarito').textContent = formatarConfiguracao(esperadoAtual);
}

function checkAnswer() {
    if (gamePaused || aguardandoEspaco) {
        return;
    }

    const itens = coletarLinhas();
    if (itens.length === 0) {
        showMessage('Preencha a distribuição antes de verificar.', 'hint');
        return;
    }

    const total = itens.reduce((soma, item) => soma + item.potencia, 0);
    if (total !== elementoAtual.n) {
        showMessage(`Total de elétrons: ${total} — o ${elementoAtual.name} tem ${elementoAtual.n}. Ajuste antes de verificar.`, 'hint');
        return;
    }

    const resposta = itens.map(item => {
        const partes = item.subnivel.match(/^([1-7])([spdf])$/);
        return partes ? { n: Number(partes[1]), l: partes[2], e: item.potencia } : null;
    });

    const acertouReal = resposta.every(Boolean) && mesmasSubcamadas(resposta, esperadoAtual);
    const acertouAufbau = !acertouReal && resposta.every(Boolean) && mesmasSubcamadas(resposta, previsaoAtual);

    itens.forEach((item, indice) => {
        const partes = item.subnivel.match(/^([1-7])([spdf])$/);
        const referencia = acertouAufbau ? previsaoAtual[indice] : esperadoAtual[indice];
        const certo = !!partes && !!referencia &&
            Number(partes[1]) === referencia.n && partes[2] === referencia.l && item.potencia === referencia.e;
        item.linha.classList.toggle('correto', certo);
        item.linha.classList.toggle('incorreto', !certo);
    });

    if (acertouReal || acertouAufbau) {
        correctAnswers++;
        document.getElementById('correct-count').textContent = correctAnswers;
        const pontos = Math.max(20, Math.round(PONTOS_BASE * MULTIPLICADORES[difficulty]) - dicasUsadas * PENALIDADE_DICA);
        score += pontos;
        document.getElementById('score').textContent = score;
        showMessage(`Correto! +${pontos} pontos`, 'success');
        revelarGabarito();
        if (excecaoAtual) {
            mostrarExcecao(acertouAufbau);
        } else {
            aguardarEspaco();
        }
        return;
    }

    errors++;
    if (difficulty === 'medio') {
        const restantes = MAX_ERROS - errors;
        document.getElementById('errors-count').textContent = restantes;
        if (errors >= MAX_ERROS) {
            mostrarDistribuicao(esperadoAtual);
            aguardarEspaco();
            return;
        }
        showMessage(`Incorreto! Erros restantes: ${restantes}`, 'error');
    } else if (difficulty === 'dificil') {
        document.getElementById('errors-count').textContent = errors;
        mostrarDistribuicao(esperadoAtual);
        aguardarEspaco();
    } else {
        showMessage('Incorreto! Ajuste os subníveis destacados e tente novamente.', 'error');
    }
}

/* ---------- [G3-10] dicas ---------- */

function atualizarBotaoDica() {
    document.getElementById('botao-dica').disabled = dicasUsadas >= MAX_DICAS;
}

function usarDica() {
    if (gamePaused || aguardandoEspaco) {
        return;
    }
    if (dicasUsadas >= MAX_DICAS) {
        showMessage('Sem dicas restantes!', 'error');
        return;
    }
    const completos = coletarLinhas().length;
    if (completos >= esperadoAtual.length) {
        showMessage('A distribuição já está completa — verifique!', 'hint');
        return;
    }

    const linha = ultimaLinha();
    const parcial = linha &&
        (linha.querySelector('.campo-subnivel').value.trim() !== '' ||
            linha.querySelector('.campo-potencia').value.trim() !== '');
    const passo = esperadoAtual[parcial ? completos - 1 : completos];
    const campoSubnivel = linha.querySelector('.campo-subnivel');
    const campoPotencia = linha.querySelector('.campo-potencia');
    campoSubnivel.value = `${passo.n}${passo.l}`;
    campoPotencia.value = String(passo.e);
    campoSubnivel.readOnly = true;
    campoPotencia.readOnly = true;
    linha.classList.add('dica');
    dicasUsadas++;
    atualizarBotaoDica();
    atualizarProgresso();
    confirmarLinha(linha, true);
    showMessage(`Dica usada! Restam ${MAX_DICAS - dicasUsadas}.`, 'hint');
}

/* ---------- [G3-11] avanço de questão ---------- */

function nextQuestion() {
    elementoAtual = sortearElemento();
    esperadoAtual = ordenarAufbau(expandirConfiguracao(elementoAtual));
    previsaoAtual = configuracaoAufbau(elementoAtual.n);
    excecaoAtual = !mesmasSubcamadas(esperadoAtual, previsaoAtual);
    questionStartTime = Date.now();
    gamePaused = false;
    aguardandoEspaco = false;
    aguardandoExcecao = false;
    indiceEscada = 0;
    dicasUsadas = 0;
    atualizarBotaoDica();
    if (difficulty === 'medio') {
        errors = 0;
        document.getElementById('errors-count').textContent = MAX_ERROS;
    }
    renderElemento();
    limparLinhas();
    adicionarLinha();
    document.getElementById('message').textContent = '';
    document.getElementById('message').className = 'message';
    document.getElementById('gabarito').textContent = '';
    document.getElementById('continuar').hidden = true;
}

function skipQuestion() {
    if (gamePaused || aguardandoEspaco) {
        return;
    }
    mostrarDistribuicao(esperadoAtual);
    aguardarEspaco();
}

/* ---------- [G3-12] exceções à regra ---------- */

function mostrarExcecao(usouAufbau) {
    const real = formatarConfiguracao(esperadoAtual);
    const diagrama = formatarConfiguracao(previsaoAtual);
    document.getElementById('excecao-diagrama').textContent = diagrama;
    document.getElementById('excecao-real').textContent = real;
    document.getElementById('excecao-texto').textContent = usouAufbau
        ? `Você seguiu o diagrama de Pauling. Mas o ${elementoAtual.name} é uma exceção: a configuração real é ${real}. As duas respostas foram aceitas!`
        : `O ${elementoAtual.name} é uma exceção à regra: o diagrama de Pauling prevê ${diagrama}, mas a configuração real é ${real}. Você acertou a real!`;
    aguardandoExcecao = true;
    document.getElementById('excecao-popup').classList.add('show');
    document.getElementById('overlay').classList.add('show');
}

function fecharExcecao() {
    document.getElementById('excecao-popup').classList.remove('show');
    document.getElementById('overlay').classList.remove('show');
    if (aguardandoExcecao) {
        aguardandoExcecao = false;
        nextQuestion();
    }
}

/* ---------- [G3-13] fim de jogo ---------- */

function endGame() {
    clearInterval(timerInterval);
    gamePaused = true;
    aguardandoExcecao = false;
    aguardandoEspaco = false;
    const totalTime = Math.floor((Date.now() - gameStartTime) / 1000);
    const minutes = Math.floor(totalTime / 60);
    const seconds = totalTime % 60;

    document.getElementById('final-score').textContent = score;
    document.getElementById('final-total-correct').textContent = correctAnswers;
    document.getElementById('total-time').textContent =
        `${minutes}:${seconds.toString().padStart(2, '0')}`;

    document.getElementById('modal-final').classList.add('show');
}

/* ---------- [G3-14] painel de Pauling ---------- */

const celulasDiagrama = {};

function montarDiagrama() {
    const grade = document.getElementById('pauling-grade');
    const setas = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    setas.setAttribute('class', 'pauling-setas');
    setas.setAttribute('aria-hidden', 'true');
    grade.appendChild(setas);
    ORDEM_AUFBAU.forEach((chave, indice) => {
        const celula = document.createElement('div');
        celula.className = 'pauling-celula';
        celula.style.gridColumn = COLUNAS_ESCADA[chave[1]];
        celula.style.gridRow = chave[0];
        celula.innerHTML =
            `<span class="pauling-ordem">${indice + 1}</span>` +
            `<span class="pauling-subnivel">${chave}</span>`;
        grade.appendChild(celula);
        celulasDiagrama[chave] = celula;
    });
}

function recuarPonto(ponto, alvo, distancia) {
    const dx = alvo.x - ponto.x;
    const dy = alvo.y - ponto.y;
    const comprimento = Math.hypot(dx, dy) || 1;
    return {
        x: ponto.x + (dx / comprimento) * distancia,
        y: ponto.y + (dy / comprimento) * distancia
    };
}

function desenharSetas() {
    const grade = document.getElementById('pauling-grade');
    const svg = grade.querySelector('.pauling-setas');
    const base = grade.getBoundingClientRect();
    if (!svg || !base.width) {
        return;
    }
    const centros = {};
    Object.keys(celulasDiagrama).forEach(chave => {
        const retangulo = celulasDiagrama[chave].getBoundingClientRect();
        centros[chave] = {
            x: retangulo.left - base.left + retangulo.width / 2,
            y: retangulo.top - base.top + retangulo.height / 2,
            recuo: Math.min(retangulo.width, retangulo.height) * 0.38
        };
    });
    const diagonais = {};
    ORDEM_AUFBAU.forEach(chave => {
        const soma = Number(chave[0]) + COLUNAS_ESCADA[chave[1]];
        diagonais[soma] = diagonais[soma] || [];
        diagonais[soma].push(chave);
    });
    const linhas = [];
    Object.values(diagonais).forEach(caminho => {
        for (let i = 0; i < caminho.length - 1; i++) {
            const inicio = centros[caminho[i]];
            const fim = centros[caminho[i + 1]];
            const de = recuarPonto(inicio, fim, inicio.recuo);
            const ate = recuarPonto(fim, inicio, fim.recuo);
            const ponta = i === caminho.length - 2 ? ' marker-end="url(#seta-pauling)"' : '';
            linhas.push(
                `<line class="pauling-seta" x1="${de.x.toFixed(1)}" y1="${de.y.toFixed(1)}" ` +
                `x2="${ate.x.toFixed(1)}" y2="${ate.y.toFixed(1)}"${ponta}/>`
            );
        }
    });
    svg.setAttribute('viewBox', `0 0 ${base.width} ${base.height}`);
    svg.innerHTML =
        '<defs><marker id="seta-pauling" viewBox="0 0 10 10" refX="7.5" refY="5" ' +
        'markerWidth="5.5" markerHeight="5.5" orient="auto">' +
        '<path d="M 0 1 L 8 5 L 0 9" fill="none" stroke="rgba(192, 102, 74, 0.45)" ' +
        'stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></marker></defs>' +
        linhas.join('');
}

function togglePaulingPanel() {
    const painel = document.getElementById('pauling-panel');
    const botao = document.getElementById('info-btn');
    painel.classList.toggle('show');
    botao.setAttribute('aria-expanded', String(painel.classList.contains('show')));
    if (painel.classList.contains('show')) {
        desenharSetas();
    }
}

window.addEventListener('resize', desenharSetas);

if (document.fonts && document.fonts.ready) {
    document.fonts.ready.then(desenharSetas);
}

/* ---------- [G3-15] inicialização ---------- */

document.addEventListener('keydown', evento => {
    if (evento.key === 'Escape') {
        if (document.getElementById('excecao-popup').classList.contains('show')) {
            fecharExcecao();
            return;
        }
        if (document.getElementById('difficulty-popup').classList.contains('show')) {
            closeDifficultyPopup();
            return;
        }
        document.getElementById('pauling-panel').classList.remove('show');
        return;
    }

    if (evento.key === ' ' || evento.code === 'Space') {
        if (aguardandoEspaco) {
            evento.preventDefault();
            nextQuestion();
        }
        return;
    }

    if (evento.key === 'Enter') {
        if (evento.target.matches('input')) {
            return;
        }
        if (document.getElementById('difficulty-popup').classList.contains('show') ||
            document.getElementById('excecao-popup').classList.contains('show') ||
            document.getElementById('modal-final').classList.contains('show')) {
            return;
        }
        checkAnswer();
    }
});

document.getElementById('overlay').addEventListener('click', () => {
    if (document.getElementById('excecao-popup').classList.contains('show')) {
        fecharExcecao();
        return;
    }
    closeDifficultyPopup();
});

montarSlots();
montarDiagrama();
atualizarBotaoDica();

const parametros = new URLSearchParams(window.location.search);
const diffInicial = parametros.get('diff');

if (diffInicial && ['facil', 'medio', 'dificil'].includes(diffInicial)) {
    selectDifficulty(diffInicial);
} else {
    document.getElementById('difficulty-popup').classList.add('show');
    document.getElementById('overlay').classList.add('show');
}
