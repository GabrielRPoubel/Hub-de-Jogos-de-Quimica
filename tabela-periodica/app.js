const FAMILY_LABELS = {
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

const FBLOCK_START = { lanthanide: 57, actinide: 89 };

function renderLegend() {
    const legend = document.getElementById('legend');
    Object.keys(FAMILY_LABELS).forEach(family => {
        const chip = document.createElement('div');
        chip.className = 'legend-chip family-' + family;
        chip.innerHTML = `<span class="legend-dot"></span><span>${FAMILY_LABELS[family][1]}</span>`;
        chip.addEventListener('mouseenter', () => highlightFamily(family));
        chip.addEventListener('mouseleave', clearHighlight);
        legend.appendChild(chip);
    });
}

function renderTable() {
    const table = document.getElementById('periodic-table');

    ELEMENTS.forEach((el, index) => {
        const cell = document.createElement('button');
        cell.type = 'button';
        cell.className = 'element family-' + el.family;
        cell.dataset.n = el.n;

        if (el.group === null) {
            cell.classList.add('f-block');
            cell.style.gridColumn = 3 + el.n - FBLOCK_START[el.family];
            cell.style.gridRow = el.family === 'lanthanide' ? 9 : 10;
        } else {
            cell.style.gridColumn = el.group;
            cell.style.gridRow = el.period;
        }

        cell.style.animationDelay = (index * 6) + 'ms';
        cell.title = `${el.name} — ${el.mass} u`;
        cell.innerHTML =
            `<span class="atomic-number">${el.n}</span>` +
            `<span class="symbol">${el.symbol}</span>` +
            `<span class="name">${el.name}</span>`;

        cell.addEventListener('click', () => openDetails(el.n));
        table.appendChild(cell);
    });

    addPlaceholder(table, 6, '57-71', 'Série dos Lantanídeos', 'lanthanide');
    addPlaceholder(table, 7, '89-103', 'Série dos Actinídeos', 'actinide');
}

function addPlaceholder(table, row, range, text, family) {
    const placeholder = document.createElement('button');
    placeholder.type = 'button';
    placeholder.className = 'placeholder family-' + family;
    placeholder.style.gridColumn = 3;
    placeholder.style.gridRow = row;
    placeholder.innerHTML = `<span class="ph-range">${range}</span><span class="ph-text">${text}</span>`;
    placeholder.addEventListener('mouseenter', () => highlightFamily(family));
    placeholder.addEventListener('mouseleave', clearHighlight);
    table.appendChild(placeholder);
}

function highlightFamily(family) {
    const table = document.getElementById('periodic-table');
    table.dataset.hl = family;
    table.querySelectorAll('.element, .placeholder').forEach(cell => {
        cell.classList.toggle('hl', cell.classList.contains('family-' + family));
    });
}

function clearHighlight() {
    const table = document.getElementById('periodic-table');
    delete table.dataset.hl;
    table.querySelectorAll('.hl').forEach(cell => cell.classList.remove('hl'));
}

function formatValue(value, unit) {
    if (value === null || value === undefined || value === '') {
        return '—';
    }
    return unit ? `${value} ${unit}` : value;
}

function openDetails(n) {
    const el = ELEMENTS.find(item => item.n === n);
    if (!el) return;

    const groupLabel = el.group === null
        ? (el.family === 'lanthanide' ? 'Série dos Lantanídeos' : 'Série dos Actinídeos')
        : el.group;

    document.getElementById('details-content').innerHTML = `
        <div class="detail-head family-${el.family}">
            <div class="detail-number">Z = ${el.n}</div>
            <div class="detail-symbol">${el.symbol}</div>
            <div class="detail-name">${el.name}</div>
            <div class="detail-family">${FAMILY_LABELS[el.family][0]}</div>
        </div>
        <div class="detail-grid">
            <div class="detail-item">
                <span class="label">Massa atômica</span>
                <span class="value">${formatValue(el.mass, 'u')}</span>
            </div>
            <div class="detail-item">
                <span class="label">Grupo</span>
                <span class="value">${groupLabel}</span>
            </div>
            <div class="detail-item">
                <span class="label">Período</span>
                <span class="value">${el.period}</span>
            </div>
            <div class="detail-item">
                <span class="label">Eletronegatividade</span>
                <span class="value">${formatValue(el.electronegativity)}</span>
            </div>
            <div class="detail-item">
                <span class="label">Raio atômico</span>
                <span class="value">${formatValue(el.radius, 'pm')}</span>
            </div>
            <div class="detail-item">
                <span class="label">Densidade</span>
                <span class="value">${formatValue(el.density, 'g/cm³')}</span>
            </div>
            <div class="detail-item">
                <span class="label">Ponto de fusão</span>
                <span class="value">${formatValue(el.melting, '°C')}</span>
            </div>
            <div class="detail-item">
                <span class="label">Ponto de ebulição</span>
                <span class="value">${formatValue(el.boiling, '°C')}</span>
            </div>
        </div>
        <div class="detail-config">
            <span class="label">Configuração eletrônica</span>
            <span class="value config">${el.config || '—'}</span>
        </div>
        <div class="detail-desc">
            <span class="label">Descrição</span>
            <p>${el.desc}</p>
        </div>
    `;

    document.getElementById('details-panel').classList.add('show');
    document.getElementById('overlay').classList.add('show');
    document.querySelectorAll('.element.selected').forEach(cell => cell.classList.remove('selected'));
    const cell = document.querySelector(`.element[data-n="${n}"]`);
    if (cell) cell.classList.add('selected');
    history.replaceState(null, '', '#' + el.symbol);
}

function closeDetails() {
    document.getElementById('details-panel').classList.remove('show');
    document.getElementById('overlay').classList.remove('show');
    document.querySelectorAll('.element.selected').forEach(cell => cell.classList.remove('selected'));
    history.replaceState(null, '', location.pathname + location.search);
}

document.addEventListener('keydown', event => {
    if (event.key === 'Escape') {
        closeDetails();
    }
});

renderLegend();
renderTable();

const hash = decodeURIComponent(location.hash.slice(1));
if (hash) {
    const el = ELEMENTS.find(item =>
        item.symbol.toLowerCase() === hash.toLowerCase() || String(item.n) === hash);
    if (el) {
        openDetails(el.n);
    }
}
