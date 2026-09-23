const QuizBase = (() => {
    const DURACOES = { facil: null, medio: 600, dificil: 300 };
    const TEMPOS = { facil: '∞', medio: '10:00', dificil: '5:00' };

    function fecharPopupDificuldade() {
        document.getElementById('difficulty-popup').classList.remove('show');
        document.getElementById('overlay').classList.remove('show');
    }

    function abrirPopupDificuldade(intervalos) {
        (intervalos || []).forEach(intervalo => clearInterval(intervalo));
        document.getElementById('modal-final').classList.remove('show');
        document.getElementById('difficulty-popup').classList.add('show');
        document.getElementById('overlay').classList.add('show');
        document.getElementById('game-header').classList.remove('show');
        document.getElementById('game-main').classList.remove('show');
    }

    function aplicarDificuldade(diff, rotulo, erroInicial) {
        document.getElementById('difficulty-popup').classList.remove('show');
        document.getElementById('overlay').classList.remove('show');
        document.getElementById('game-header').classList.add('show');
        document.getElementById('game-main').classList.add('show');
        document.getElementById('difficulty-label').textContent = rotulo;
        document.getElementById('game-timer').textContent = '0:00';
        document.getElementById('timer').textContent = TEMPOS[diff];
        document.getElementById('errors-count').textContent =
            diff === 'facil' ? '∞' : (diff === 'medio' ? erroInicial : '0');
        return DURACOES[diff];
    }

    function limparPlacar() {
        document.getElementById('score').textContent = '0';
        document.getElementById('correct-count').textContent = '0';
        document.getElementById('errors-count').textContent = '-';
        document.getElementById('timer').textContent = '--:--';
        document.getElementById('game-timer').textContent = '0:00';
        document.getElementById('difficulty-label').textContent = '-';
        document.getElementById('message').textContent = '';
    }

    function escolherReacao(lista, usados) {
        const disponiveis = lista.filter((_, indice) => !usados.includes(indice));

        if (disponiveis.length === 0) {
            usados.length = 0;
            return lista[Math.floor(Math.random() * lista.length)];
        }

        const indiceAleatorio = Math.floor(Math.random() * disponiveis.length);
        usados.push(lista.indexOf(disponiveis[indiceAleatorio]));
        return disponiveis[indiceAleatorio];
    }

    return {
        fecharPopupDificuldade,
        abrirPopupDificuldade,
        aplicarDificuldade,
        limparPlacar,
        escolherReacao
    };
})();
