const TabelaPeriodica = (() => {
    /* ---------- [TP-01] famílias ---------- */
    const FAMILIAS = {
        alkali: ['Metal alcalino', 'Metais alcalinos'],
        alkaline: ['Metal alcalino-terroso', 'Metais alcalino-terrosos'],
        transition: ['Metal de transição', 'Metais de transição'],
        post: ['Metal pós-transição', 'Metais pós-transição'],
        metalloid: ['Metaloide', 'Metaloides'],
        nonmetal: ['Ametal', 'Ametais'],
        halogen: ['Halogênio', 'Halogênios'],
        noble: ['Gás nobre', 'Gases nobres'],
        lanthanide: ['Lantanídeo', 'Lantanídeos'],
        actinide: ['Actinídeo', 'Actinídeos']
    };

    /* ---------- [TP-02] classificações ---------- */
    const INICIO_FBLOCO = { lanthanide: 57, actinide: 89 };

    const GRUPOS_SIMPLES = {
        alkali: 'metais',
        alkaline: 'metais',
        post: 'metais',
        transition: 'transicao',
        lanthanide: 'transicao',
        actinide: 'transicao',
        metalloid: 'ametais',
        nonmetal: 'ametais',
        halogen: 'ametais',
        noble: 'nobres'
    };

    const LABELS_SIMPLES = {
        metais: ['Metal', 'Metais'],
        transicao: ['Metal de transição', 'Metais de transição'],
        ametais: ['Ametal', 'Ametais'],
        nobres: ['Gás nobre', 'Gases nobres']
    };

    /* ---------- [TP-03] categorias e escala ---------- */
    const CATEGORIAS = {
        familias: { rotulo: 'Famílias', propriedade: null, unidade: '' },
        eletronegatividade: { rotulo: 'Eletronegatividade', propriedade: 'electronegativity', unidade: '' },
        raio: { rotulo: 'Raio atômico', propriedade: 'radius', unidade: 'pm' },
        ionizacao: { rotulo: 'Energia de ionização', propriedade: 'ionization', unidade: 'kJ/mol' }
    };

    const ESCALA_CALOR = [
        [0, [243, 234, 214]],
        [0.35, [224, 178, 96]],
        [0.7, [197, 116, 66]],
        [1, [120, 52, 40]]
    ];

    /* ---------- [TP-04] estado ---------- */
    let classificacaoAtual = 'completa';
    let categoriaAtual = 'familias';
    let ultimoAlvo = null;
    let ultimasOpcoes = null;
    let overlay = null;
    let painel = null;
    let tabelaAtual = null;

    /* ---------- [TP-05] utilitários numéricos ---------- */
    function numeroDe(valor) {
        if (valor === null || valor === undefined || valor === '') return null;
        const numero = parseFloat(String(valor).replace(',', '.'));
        return isNaN(numero) ? null : numero;
    }

    function limitesDe(propriedade) {
        const valores = ELEMENTOS_QUIMICOS
            .map(el => numeroDe(el[propriedade]))
            .filter(v => v !== null);
        return [Math.min(...valores), Math.max(...valores)];
    }

    function corDaEscala(t) {
        const posicao = Math.max(0, Math.min(1, t));
        for (let i = 1; i < ESCALA_CALOR.length; i++) {
            const [t1, c1] = ESCALA_CALOR[i];
            const [t0, c0] = ESCALA_CALOR[i - 1];
            if (posicao <= t1) {
                const fator = t1 === t0 ? 0 : (posicao - t0) / (t1 - t0);
                return c0.map((canal, indice) => Math.round(canal + (c1[indice] - canal) * fator));
            }
        }
        return ESCALA_CALOR[ESCALA_CALOR.length - 1][1].slice();
    }

    function luminancia([r, g, b]) {
        return 0.2126 * r + 0.7152 * g + 0.0722 * b;
    }

    function gradienteDaEscala() {
        const paradas = ESCALA_CALOR.map(([t, [r, g, b]]) => `rgb(${r}, ${g}, ${b}) ${Math.round(t * 100)}%`);
        return `linear-gradient(90deg, ${paradas.join(', ')})`;
    }

    /* ---------- [TP-06] busca e rótulos ---------- */
    function buscarElemento(referencia) {
        if (referencia === null || referencia === undefined) return null;
        const texto = String(referencia).trim().toLowerCase();
        return ELEMENTOS_QUIMICOS.find(el =>
            el.symbol.toLowerCase() === texto || String(el.n) === texto) || null;
    }

    function chaveGrupo(familia) {
        return classificacaoAtual === 'simples' ? GRUPOS_SIMPLES[familia] : familia;
    }

    function labelGrupo(familia, plural) {
        const mapa = classificacaoAtual === 'simples' ? LABELS_SIMPLES : FAMILIAS;
        return mapa[chaveGrupo(familia)][plural ? 1 : 0];
    }

    /* ---------- [TP-07] montagem da grade ---------- */
    function montar(alvo, opcoes) {
        opcoes = opcoes || {};
        const container = typeof alvo === 'string' ? document.querySelector(alvo) : alvo;
        if (!container) return null;

        const modo = opcoes.modo === 'compacta' ? 'compacta' : 'completa';
        const comDetalhes = opcoes.detalhes !== undefined ? !!opcoes.detalhes : modo === 'completa';
        const comLegenda = opcoes.legenda !== undefined ? opcoes.legenda : modo === 'completa';

        classificacaoAtual = opcoes.classificacao === 'simples' ? 'simples' : 'completa';
        categoriaAtual = CATEGORIAS[opcoes.categoria] ? opcoes.categoria : 'familias';
        ultimoAlvo = container;
        ultimasOpcoes = opcoes;

        container.classList.add('tp-table', 'tp-' + modo);
        if (!comDetalhes) {
            container.classList.add('tp-estatico');
        }
        if (CATEGORIAS[categoriaAtual].propriedade) {
            container.classList.add('tp-calor');
        } else {
            container.classList.remove('tp-calor');
        }
        container.dataset.modo = modo;
        container.dataset.categoria = categoriaAtual;
        container.innerHTML = '';
        tabelaAtual = container;

        const categoria = CATEGORIAS[categoriaAtual];
        const limites = categoria.propriedade ? limitesDe(categoria.propriedade) : null;

        ELEMENTOS_QUIMICOS.forEach((el, indice) => {
            const celula = document.createElement(comDetalhes ? 'button' : 'div');
            if (comDetalhes) celula.type = 'button';
            celula.className = 'tp-element tp-familia-' + chaveGrupo(el.family);
            celula.dataset.n = el.n;

            if (el.group === null) {
                celula.classList.add('tp-fbloco');
                celula.style.gridColumn = 3 + el.n - INICIO_FBLOCO[el.family];
                celula.style.gridRow = el.family === 'lanthanide' ? 9 : 10;
            } else {
                celula.style.gridColumn = el.group;
                celula.style.gridRow = el.period;
            }

            celula.style.animationDelay = (indice * 6) + 'ms';

            let textoValor = '—';
            let titulo = `${el.name} — ${el.mass} u`;
            if (el.previsto) {
                titulo += ' · valores previstos';
            }

            if (categoria.propriedade) {
                const valor = numeroDe(el[categoria.propriedade]);
                if (valor === null) {
                    celula.classList.add('tp-sem-dado');
                    textoValor = '—';
                    titulo = `${el.name} — ${categoria.rotulo}: sem dado`;
                } else {
                    const t = (valor - limites[0]) / (limites[1] - limites[0]);
                    const cor = corDaEscala(t);
                    celula.style.setProperty('--c', cor.join(', '));
                    if (luminancia(cor) < 150) {
                        celula.classList.add('tp-calor-escuro');
                    }
                    textoValor = el[categoria.propriedade];
                    titulo = `${el.name} — ${categoria.rotulo}: ${textoValor}${categoria.unidade ? ' ' + categoria.unidade : ''}`;
                    if (el.previsto) {
                        titulo += ' (previsto)';
                    }
                }
            }

            celula.title = titulo;
            celula.innerHTML =
                `<span class="tp-numero">${el.n}</span>` +
                `<span class="tp-simbolo">${el.symbol}</span>` +
                `<span class="tp-nome">${el.name}</span>` +
                `<span class="tp-valor-celula">${textoValor}</span>`;

            if (comDetalhes) {
                celula.addEventListener('click', () => abrir(el.n));
            }

            container.appendChild(celula);
        });

        criarPlaceholder(container, 6, '57-71', 'Série dos Lantanídeos', chaveGrupo('lanthanide'));
        criarPlaceholder(container, 7, '89-103', 'Série dos Actinídeos', chaveGrupo('actinide'));

        if (!container.parentElement || !container.parentElement.classList.contains('tp-scroll')) {
            const rolagem = document.createElement('div');
            rolagem.className = 'tp-scroll';
            container.parentNode.insertBefore(rolagem, container);
            rolagem.appendChild(container);
        }

        if (comLegenda) {
            criarLegenda(comLegenda, container);
        }

        if (comDetalhes) {
            garantirPainel();
            abrirDoHash();
        }

        return container;
    }

    /* ---------- [TP-08] placeholders e legendas ---------- */
    function criarPlaceholder(container, linha, faixa, texto, familia) {
        const placeholder = document.createElement('div');
        placeholder.className = 'tp-placeholder tp-familia-' + familia;
        placeholder.style.gridColumn = 3;
        placeholder.style.gridRow = linha;
        placeholder.innerHTML =
            `<span class="tp-faixa">${faixa}</span>` +
            `<span class="tp-placeholder-texto">${texto}</span>`;
        placeholder.addEventListener('mouseenter', () => destacarFamilia(container, familia));
        placeholder.addEventListener('mouseleave', () => limparDestaque(container));
        container.appendChild(placeholder);
    }

    function criarLegenda(alvo, container) {
        const espaco = alvo === 'espaco';
        const legenda = espaco ? document.createElement('div') : (typeof alvo === 'string' ? document.querySelector(alvo) : alvo);
        if (!legenda) return;

        legenda.classList.add('tp-legenda');
        if (espaco) {
            legenda.classList.add('tp-legenda-espaco');
        }
        legenda.innerHTML = '';

        const categoria = CATEGORIAS[categoriaAtual];

        if (categoria.propriedade) {
            legenda.appendChild(criarEscala(categoria));
        } else {
            const mapa = classificacaoAtual === 'simples' ? LABELS_SIMPLES : FAMILIAS;
            Object.keys(mapa).forEach(grupo => {
                const chip = document.createElement('div');
                chip.className = 'tp-legenda-chip tp-familia-' + grupo;
                chip.innerHTML =
                    `<span class="tp-legenda-ponto"></span>` +
                    `<span>${mapa[grupo][1]}</span>`;
                chip.addEventListener('mouseenter', () => destacarFamilia(container, grupo));
                chip.addEventListener('mouseleave', () => limparDestaque(container));
                legenda.appendChild(chip);
            });
        }

        if (espaco) {
            container.appendChild(legenda);
        }
    }

    /* ---------- [TP-09] escala de cor ---------- */
    function criarEscala(categoria) {
        const limites = limitesDe(categoria.propriedade);
        const escala = document.createElement('div');
        escala.className = 'tp-escala';

        const rotulo = document.createElement('span');
        rotulo.className = 'tp-escala-rotulo';
        rotulo.textContent = categoria.rotulo;
        if (categoria.unidade) {
            const unidade = document.createElement('span');
            unidade.className = 'tp-escala-unidade';
            unidade.textContent = ' (' + categoria.unidade + ')';
            rotulo.appendChild(unidade);
        }

        const graduacao = document.createElement('div');
        graduacao.className = 'tp-escala-graduacao';

        const minimo = document.createElement('span');
        minimo.className = 'tp-escala-limite';
        minimo.textContent = String(limites[0]).replace('.', ',');

        const barra = document.createElement('span');
        barra.className = 'tp-escala-barra';
        barra.style.background = gradienteDaEscala();

        const maximo = document.createElement('span');
        maximo.className = 'tp-escala-limite';
        maximo.textContent = String(limites[1]).replace('.', ',');

        graduacao.appendChild(minimo);
        graduacao.appendChild(barra);
        graduacao.appendChild(maximo);

        const semDado = document.createElement('span');
        semDado.className = 'tp-escala-sem-dado';
        semDado.innerHTML = `<span class="tp-escala-swatch"></span>sem dado`;

        const nota = document.createElement('span');
        nota.className = 'tp-escala-nota';
        nota.textContent = '100–118: previstos';

        const rodape = document.createElement('div');
        rodape.className = 'tp-escala-rodape';
        rodape.appendChild(semDado);
        rodape.appendChild(nota);

        escala.appendChild(rotulo);
        escala.appendChild(graduacao);
        escala.appendChild(rodape);
        return escala;
    }

    /* ---------- [TP-10] destaque ---------- */
    function destacarFamilia(container, familia) {
        if (CATEGORIAS[categoriaAtual].propriedade) return;
        container.dataset.destaque = familia;
        container.querySelectorAll('.tp-element, .tp-placeholder').forEach(celula => {
            celula.classList.toggle('tp-hl', celula.classList.contains('tp-familia-' + familia));
        });
    }

    function limparDestaque(container) {
        delete container.dataset.destaque;
        container.querySelectorAll('.tp-hl').forEach(celula => celula.classList.remove('tp-hl'));
    }

    /* ---------- [TP-11] painel de detalhes ---------- */
    function garantirPainel() {
        if (painel) return;

        overlay = document.createElement('div');
        overlay.className = 'tp-overlay';
        overlay.addEventListener('click', fechar);

        painel = document.createElement('aside');
        painel.className = 'tp-painel';
        painel.innerHTML =
            '<button class="tp-fechar" type="button">✕</button>' +
            '<div class="tp-painel-conteudo"></div>';
        painel.querySelector('.tp-fechar').addEventListener('click', fechar);

        document.body.appendChild(overlay);
        document.body.appendChild(painel);

        document.addEventListener('keydown', evento => {
            if (evento.key === 'Escape') fechar();
        });
    }

    function formatarValor(valor, unidade, alternativo) {
        if (valor === null || valor === undefined || valor === '') return alternativo || '—';
        return unidade ? `${valor} ${unidade}` : valor;
    }

    function abrir(referencia) {
        const el = buscarElemento(referencia);
        if (!el) return null;

        garantirPainel();

        const semMedida = el.previsto ? 'não medido' : '—';
        const grupo = el.group === null
            ? (el.family === 'lanthanide' ? 'Série dos Lantanídeos' : 'Série dos Actinídeos')
            : el.group;

        painel.querySelector('.tp-painel-conteudo').innerHTML = `
            <div class="tp-cabecalho tp-familia-${chaveGrupo(el.family)}">
                <div class="tp-z">Z = ${el.n}</div>
                <div class="tp-grande">${el.symbol}</div>
                <div class="tp-nome-completo">${el.name}</div>
                <div class="tp-etiqueta">${labelGrupo(el.family, false)}</div>
                ${el.previsto ? '<div class="tp-etiqueta tp-etiqueta--previsto">Valores previstos</div>' : ''}
            </div>
            <div class="tp-grade">
                <div class="tp-item">
                    <span class="tp-rotulo">Massa atômica</span>
                    <span class="tp-valor">${formatarValor(el.mass, 'u', semMedida)}</span>
                </div>
                <div class="tp-item">
                    <span class="tp-rotulo">Grupo</span>
                    <span class="tp-valor">${grupo}</span>
                </div>
                <div class="tp-item">
                    <span class="tp-rotulo">Período</span>
                    <span class="tp-valor">${el.period}</span>
                </div>
                <div class="tp-item">
                    <span class="tp-rotulo">Eletronegatividade</span>
                    <span class="tp-valor">${formatarValor(el.electronegativity, '', semMedida)}</span>
                </div>
                <div class="tp-item">
                    <span class="tp-rotulo">Energia de ionização</span>
                    <span class="tp-valor">${formatarValor(el.ionization, 'kJ/mol', semMedida)}</span>
                </div>
                <div class="tp-item">
                    <span class="tp-rotulo">Raio atômico</span>
                    <span class="tp-valor">${formatarValor(el.radius, 'pm', semMedida)}</span>
                </div>
                <div class="tp-item">
                    <span class="tp-rotulo">Densidade</span>
                    <span class="tp-valor">${formatarValor(el.density, 'g/cm³', semMedida)}</span>
                </div>
                <div class="tp-item">
                    <span class="tp-rotulo">Ponto de fusão</span>
                    <span class="tp-valor">${formatarValor(el.melting, '°C', semMedida)}</span>
                </div>
                <div class="tp-item">
                    <span class="tp-rotulo">Ponto de ebulição</span>
                    <span class="tp-valor">${formatarValor(el.boiling, '°C', semMedida)}</span>
                </div>
            </div>
            <div class="tp-config">
                <span class="tp-rotulo">Configuração eletrônica</span>
                <span class="tp-valor">${el.config || '—'}</span>
            </div>
            <div class="tp-descricao">
                <span class="tp-rotulo">Descrição</span>
                <p>${el.desc}</p>
            </div>
        `;

        overlay.classList.add('tp-mostrar');
        painel.classList.add('tp-mostrar');

        if (tabelaAtual) {
            tabelaAtual.querySelectorAll('.tp-selecionado').forEach(celula => celula.classList.remove('tp-selecionado'));
            const celula = tabelaAtual.querySelector(`.tp-element[data-n="${el.n}"]`);
            if (celula) celula.classList.add('tp-selecionado');
        }

        history.replaceState(null, '', '#' + el.symbol);
        return el;
    }

    function fechar() {
        if (!painel) return;
        painel.classList.remove('tp-mostrar');
        overlay.classList.remove('tp-mostrar');

        if (tabelaAtual) {
            tabelaAtual.querySelectorAll('.tp-selecionado').forEach(celula => celula.classList.remove('tp-selecionado'));
        }

        if (location.hash) {
            history.replaceState(null, '', location.pathname + location.search);
        }
    }

    function abrirDoHash() {
        const hash = decodeURIComponent(location.hash.slice(1));
        if (hash) abrir(hash);
    }

    /* ---------- [TP-12] API de visualização ---------- */
    function definirClassificacao(classificacao) {
        if (ultimasOpcoes) {
            ultimasOpcoes.classificacao = classificacao === 'simples' ? 'simples' : 'completa';
        }
        fechar();
        if (ultimoAlvo && ultimasOpcoes) {
            montar(ultimoAlvo, ultimasOpcoes);
        } else {
            classificacaoAtual = classificacao === 'simples' ? 'simples' : 'completa';
        }
        return classificacaoAtual;
    }

    function definirCategoria(categoria) {
        categoriaAtual = CATEGORIAS[categoria] ? categoria : 'familias';
        if (ultimasOpcoes) {
            ultimasOpcoes.categoria = categoriaAtual;
        }
        fechar();
        if (ultimoAlvo && ultimasOpcoes) {
            montar(ultimoAlvo, ultimasOpcoes);
        }
        return categoriaAtual;
    }

    function definirVisualizacao(opcoes) {
        opcoes = opcoes || {};
        if (opcoes.categoria && CATEGORIAS[opcoes.categoria]) {
            categoriaAtual = opcoes.categoria;
        }
        if (opcoes.classificacao) {
            classificacaoAtual = opcoes.classificacao === 'simples' ? 'simples' : 'completa';
        }
        if (ultimasOpcoes) {
            ultimasOpcoes.categoria = categoriaAtual;
            ultimasOpcoes.classificacao = classificacaoAtual;
        }
        fechar();
        if (ultimoAlvo && ultimasOpcoes) {
            montar(ultimoAlvo, ultimasOpcoes);
        }
        return { categoria: categoriaAtual, classificacao: classificacaoAtual };
    }

    /* ---------- [TP-13] API pública ---------- */
    return {
        montar: montar,
        abrir: abrir,
        fechar: fechar,
        elemento: buscarElemento,
        definirClassificacao: definirClassificacao,
        definirCategoria: definirCategoria,
        definirVisualizacao: definirVisualizacao,
        categorias: CATEGORIAS,
        familias: FAMILIAS
    };
})();
