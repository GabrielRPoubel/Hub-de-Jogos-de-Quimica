const ICONES = {
    'balanca': '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 4v16"/><path d="M8.5 20h7"/><path d="M4 7h16"/><path d="M4 7v4"/><path d="M6.5 11a2.5 2.5 0 0 1-5 0"/><path d="M20 7v4"/><path d="M22.5 11a2.5 2.5 0 0 1-5 0"/></svg>',
    'molecula': '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="6.5" cy="16.5" r="2.4"/><circle cx="12" cy="6.5" r="2.4"/><circle cx="17.5" cy="16.5" r="2.4"/><path d="M8.3 14.9l2.2-5.1"/><path d="M13.5 9.8l2.2 5.1"/><path d="M8.9 16.5h6.2"/></svg>',
    'grade': '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="3.5" y="3.5" width="17" height="17" rx="2.5"/><path d="M3.5 9.2h17"/><path d="M3.5 14.8h17"/><path d="M9.2 3.5v17"/><path d="M14.8 3.5v17"/></svg>',
    'diagrama': '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4 4v16h16"/><path d="M4 17c4.5 0 6-9 16-11"/><circle cx="10.5" cy="12.2" r="1.4"/></svg>',
    'broto': '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 20v-7"/><path d="M12 13C8.5 13 6.5 10.5 6.5 6.5 10.5 6.5 12 9 12 13Z"/><path d="M12 13c3.5 0 5.5-2.5 5.5-6.5C13.5 6.5 12 9 12 13Z"/></svg>',
    'raio': '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M13.2 2.5 6.5 13h4.6l-1.3 8.5L17.5 10.5h-4.6z"/></svg>',
    'chama': '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 21c3.6 0 6.2-2.6 6.2-6.1 0-2.8-1.7-4.6-3.1-6.6-.6 1.4-1.4 2.3-2.4 2.8.1-2.2-.8-4.4-2.9-6.1.2 2.5-1.1 3.9-2.2 5.4-.8 1.1-1.8 2.4-1.8 4.5C5.8 18.4 8.4 21 12 21Z"/></svg>',
    'info': '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="M12 11v5"/><path d="M12 8h.01"/></svg>',
    'seta-esq': '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M14.5 5 7.5 12l7 7"/></svg>',
    'seta-dir': '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M9.5 5l7 7-7 7"/></svg>',
    'jogar': '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M8.5 5.5 18.5 12l-10 6.5z"/></svg>',
    'reiniciar': '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M19.5 12a7.5 7.5 0 1 1-2.2-5.3"/><path d="M19.5 4.2v4.6h-4.6"/></svg>'
};

function montarIcones() {
    document.querySelectorAll('[data-icone]').forEach(elemento => {
        const nome = elemento.dataset.icone;
        if (ICONES[nome]) {
            elemento.innerHTML = ICONES[nome];
        }
    });
}

document.addEventListener('DOMContentLoaded', montarIcones);
