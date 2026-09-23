const reactions = {
    facil: [
        { equation: "\\ce{NaCl}", bond: "IÔNICA", hint: "Metal + Ametal", explanation: "Na (metal) + Cl (ametal) = ligação iônica" },
        { equation: "\\ce{H2O}", bond: "PONTE DE HIDROGÊNIO", hint: "H ligado a N, O ou F", explanation: "O-H forma pontes de hidrogênio entre moléculas" },
        { equation: "\\ce{CO2}", bond: "COVALENTE", hint: "Ametal + Ametal", explanation: "C (ametal) + O (ametal) = ligação covalente" },
        { equation: "\\ce{KBr}", bond: "IÔNICA", hint: "Metal + Ametal", explanation: "K (metal) + Br (ametal) = ligação iônica" },
        { equation: "\\ce{HCl}", bond: "COVALENTE", hint: "Ametal + Ametal", explanation: "H (ametal) + Cl (ametal) = ligação covalente" },
        { equation: "\\ce{Na2O}", bond: "IÔNICA", hint: "Metal + Ametal", explanation: "Na (metal) + O (ametal) = ligação iônica" },
        { equation: "\\ce{MgCl2}", bond: "IÔNICA", hint: "Metal + Ametal", explanation: "Mg (metal) + Cl (ametal) = ligação iônica" },
        { equation: "\\ce{CH4}", bond: "COVALENTE", hint: "Ametal + Ametal", explanation: "C (ametal) + H (ametal) = ligação covalente" },
        { equation: "\\ce{CaF2}", bond: "IÔNICA", hint: "Metal + Ametal", explanation: "Ca (metal) + F (ametal) = ligação iônica" },
        { equation: "\\ce{NH3}", bond: "PONTE DE HIDROGÊNIO", hint: "H ligado a N, O ou F", explanation: "N-H forma pontes de hidrogênio entre moléculas" },
        { equation: "\\ce{Fe2O3}", bond: "IÔNICA", hint: "Metal + Ametal", explanation: "Fe (metal) + O (ametal) = ligação iônica" },
        { equation: "\\ce{SO2}", bond: "COVALENTE", hint: "Ametal + Ametal", explanation: "S (ametal) + O (ametal) = ligação covalente" },
        { equation: "\\ce{LiF}", bond: "IÔNICA", hint: "Metal + Ametal", explanation: "Li (metal) + F (ametal) = ligação iônica" },
        { equation: "\\ce{H2S}", bond: "COVALENTE", hint: "Ametal + Ametal", explanation: "H (ametal) + S (ametal) = ligação covalente" },
        { equation: "\\ce{Al2O3}", bond: "IÔNICA", hint: "Metal + Ametal", explanation: "Al (metal) + O (ametal) = ligação iônica" },
        { equation: "\\ce{NO2}", bond: "COVALENTE", hint: "Ametal + Ametal", explanation: "N (ametal) + O (ametal) = ligação covalente" },
        { equation: "\\ce{CsI}", bond: "IÔNICA", hint: "Metal + Ametal", explanation: "Cs (metal) + I (ametal) = ligação iônica" },
        { equation: "\\ce{HF}", bond: "PONTE DE HIDROGÊNIO", hint: "H ligado a N, O ou F", explanation: "H-F forma pontes de hidrogênio entre moléculas" },
        { equation: "\\ce{BeO}", bond: "IÔNICA", hint: "Metal + Ametal", explanation: "Be (metal) + O (ametal) = ligação iônica" },
        { equation: "\\ce{PCl3}", bond: "COVALENTE", hint: "Ametal + Ametal", explanation: "P (ametal) + Cl (ametal) = ligação covalente" }
    ],
    medio: [
        { equation: "\\ce{H2SO4}", bond: "PONTE DE HIDROGÊNIO", hint: "H ligado a N, O ou F", explanation: "O-H forma pontes de hidrogênio entre moléculas" },
        { equation: "\\ce{NaOH}", bond: "MISTA", hint: "Metal + Ametal + Ametal", explanation: "Na (metal) + OH (ametal) = ligação mista" },
        { equation: "\\ce{CaCO3}", bond: "MISTA", hint: "Metal + Ametal + Ametal", explanation: "Ca (metal) + CO3 (ametal) = ligação mista" },
        { equation: "\\ce{KMnO4}", bond: "MISTA", hint: "Metal + Ametal + Ametal", explanation: "K (metal) + MnO4 (ametal) = ligação mista" },
        { equation: "\\ce{NH4Cl}", bond: "MISTA", hint: "Cátion + Ânion", explanation: "NH4+ (cátion) + Cl- (ânion) = ligação iônica + covalente" },
        { equation: "\\ce{Fe2(SO4)3}", bond: "MISTA", hint: "Metal + Ametal + Ametal", explanation: "Fe (metal) + SO4 (ametal) = ligação mista" },
        { equation: "\\ce{CuSO4}", bond: "MISTA", hint: "Metal + Ametal + Ametal", explanation: "Cu (metal) + SO4 (ametal) = ligação mista" },
        { equation: "\\ce{AgNO3}", bond: "MISTA", hint: "Metal + Ametal + Ametal", explanation: "Ag (metal) + NO3 (ametal) = ligação mista" },
        { equation: "\\ce{Ba(NO3)2}", bond: "MISTA", hint: "Metal + Ametal + Ametal", explanation: "Ba (metal) + NO3 (ametal) = ligação mista" },
        { equation: "\\ce{ZnCl2}", bond: "IÔNICA", hint: "Metal + Ametal", explanation: "Zn (metal) + Cl (ametal) = ligação iônica" },
        { equation: "\\ce{Mg(OH)2}", bond: "MISTA", hint: "Metal + Ametal + Ametal", explanation: "Mg (metal) + OH (ametal) = ligação mista" },
        { equation: "\\ce{AlCl3}", bond: "IÔNICA", hint: "Metal + Ametal", explanation: "Al (metal) + Cl (ametal) = ligação iônica" },
        { equation: "\\ce{SiO2}", bond: "COVALENTE", hint: "Ametal + Ametal", explanation: "Si (metaloide) + O (ametal) = ligação covalente" },
        { equation: "\\ce{LiAlH4}", bond: "MISTA", hint: "Metal + Metal + Ametal", explanation: "Li, Al (metais) + H (ametal) = ligação mista" },
        { equation: "\\ce{Na2SO4}", bond: "MISTA", hint: "Metal + Ametal + Ametal", explanation: "Na (metal) + SO4 (ametal) = ligação mista" },
        { equation: "\\ce{Ca(OH)2}", bond: "MISTA", hint: "Metal + Ametal + Ametal", explanation: "Ca (metal) + OH (ametal) = ligação mista" },
        { equation: "\\ce{K2CO3}", bond: "MISTA", hint: "Metal + Ametal + Ametal", explanation: "K (metal) + CO3 (ametal) = ligação mista" },
        { equation: "\\ce{(NH4)2SO4}", bond: "MISTA", hint: "Cátion + Ânion", explanation: "NH4+ (cátion) + SO4²- (ânion) = ligação iônica + covalente" },
        { equation: "\\ce{FeCl3}", bond: "IÔNICA", hint: "Metal + Ametal", explanation: "Fe (metal) + Cl (ametal) = ligação iônica" },
        { equation: "\\ce{Pb(NO3)2}", bond: "MISTA", hint: "Metal + Ametal + Ametal", explanation: "Pb (metal) + NO3 (ametal) = ligação mista" },
        { equation: "\\ce{H2O2}", bond: "PONTE DE HIDROGÊNIO", hint: "H ligado a N, O ou F", explanation: "O-H forma pontes de hidrogênio entre moléculas" },
        { equation: "\\ce{CH3OH}", bond: "PONTE DE HIDROGÊNIO", hint: "H ligado a N, O ou F", explanation: "O-H forma pontes de hidrogênio entre moléculas" },
        { equation: "\\ce{C2H5OH}", bond: "PONTE DE HIDROGÊNIO", hint: "H ligado a N, O ou F", explanation: "O-H forma pontes de hidrogênio entre moléculas" },
        { equation: "\\ce{HCOOH}", bond: "PONTE DE HIDROGÊNIO", hint: "H ligado a N, O ou F", explanation: "O-H forma pontes de hidrogênio entre moléculas" },
        { equation: "\\ce{CH3COOH}", bond: "PONTE DE HIDROGÊNIO", hint: "H ligado a N, O ou F", explanation: "O-H forma pontes de hidrogênio entre moléculas" }
    ],
    dificil: [
        { equation: "\\ce{H3PO4}", bond: "PONTE DE HIDROGÊNIO", hint: "H ligado a N, O ou F", explanation: "O-H forma pontes de hidrogênio entre moléculas" },
        { equation: "\\ce{Fe(OH)3}", bond: "MISTA", hint: "Metal + Ametal + Ametal", explanation: "Fe (metal) + OH (ametal) = ligação mista" },
        { equation: "\\ce{Mg3(PO4)2}", bond: "MISTA", hint: "Metal + Ametal + Ametal", explanation: "Mg (metal) + PO4 (ametal) = ligação mista" },
        { equation: "\\ce{K2Cr2O7}", bond: "MISTA", hint: "Metal + Ametal + Ametal", explanation: "K (metal) + Cr2O7 (ametal) = ligação mista" },
        { equation: "\\ce{Na2S2O3}", bond: "MISTA", hint: "Metal + Ametal + Ametal", explanation: "Na (metal) + S2O3 (ametal) = ligação mista" },
        { equation: "\\ce{Ca3(PO4)2}", bond: "MISTA", hint: "Metal + Ametal + Ametal", explanation: "Ca (metal) + PO4 (ametal) = ligação mista" },
        { equation: "\\ce{KMnO4}", bond: "MISTA", hint: "Metal + Ametal + Ametal", explanation: "K (metal) + MnO4 (ametal) = ligação mista" },
        { equation: "\\ce{(NH4)3PO4}", bond: "MISTA", hint: "Cátion + Ânion", explanation: "NH4+ (cátion) + PO4³- (ânion) = ligação iônica + covalente" },
        { equation: "\\ce{BaSO4}", bond: "MISTA", hint: "Metal + Ametal + Ametal", explanation: "Ba (metal) + SO4 (ametal) = ligação mista" },
        { equation: "\\ce{PbCl2}", bond: "IÔNICA", hint: "Metal + Ametal", explanation: "Pb (metal) + Cl (ametal) = ligação iônica" },
        { equation: "\\ce{H2CrO4}", bond: "PONTE DE HIDROGÊNIO", hint: "H ligado a N, O ou F", explanation: "O-H forma pontes de hidrogênio entre moléculas" },
        { equation: "\\ce{Na2HPO4}", bond: "MISTA", hint: "Metal + Ametal + Ametal", explanation: "Na (metal) + HPO4 (ametal) = ligação mista" },
        { equation: "\\ce{Fe2(SO4)3}", bond: "MISTA", hint: "Metal + Ametal + Ametal", explanation: "Fe (metal) + SO4 (ametal) = ligação mista" },
        { equation: "\\ce{K4[Fe(CN)6]}", bond: "MISTA", hint: "Metal + Ametal + Ametal", explanation: "K (metal) + [Fe(CN)6] (ametal) = ligação mista" },
        { equation: "\\ce{Cu2(OH)2CO3}", bond: "MISTA", hint: "Metal + Ametal + Ametal", explanation: "Cu (metal) + OH, CO3 (ametais) = ligação mista" },
        { equation: "\\ce{SnCl4}", bond: "IÔNICA", hint: "Metal + Ametal", explanation: "Sn (metal) + Cl (ametal) = ligação iônica" },
        { equation: "\\ce{H2C2O4}", bond: "PONTE DE HIDROGÊNIO", hint: "H ligado a N, O ou F", explanation: "O-H forma pontes de hidrogênio entre moléculas" },
        { equation: "\\ce{MgNH4PO4}", bond: "MISTA", hint: "Metal + Ametal + Ametal", explanation: "Mg (metal) + NH4, PO4 (ametais) = ligação mista" },
        { equation: "\\ce{K2S2O8}", bond: "MISTA", hint: "Metal + Ametal + Ametal", explanation: "K (metal) + S2O8 (ametal) = ligação mista" },
        { equation: "\\ce{Bi(NO3)3}", bond: "MISTA", hint: "Metal + Ametal + Ametal", explanation: "Bi (metal) + NO3 (ametal) = ligação mista" },
        { equation: "\\ce{H2SO3}", bond: "PONTE DE HIDROGÊNIO", hint: "H ligado a N, O ou F", explanation: "O-H forma pontes de hidrogênio entre moléculas" },
        { equation: "\\ce{HNO3}", bond: "PONTE DE HIDROGÊNIO", hint: "H ligado a N, O ou F", explanation: "O-H forma pontes de hidrogênio entre moléculas" },
        { equation: "\\ce{H3BO3}", bond: "PONTE DE HIDROGÊNIO", hint: "H ligado a N, O ou F", explanation: "O-H forma pontes de hidrogênio entre moléculas" },
        { equation: "\\ce{H2C6H4O4}", bond: "PONTE DE HIDROGÊNIO", hint: "H ligado a N, O ou F", explanation: "O-H forma pontes de hidrogênio entre moléculas" }
    ]
};

const bondTypes = ["IÔNICA", "COVALENTE", "MISTA", "PONTE DE HIDROGÊNIO"];

let difficulty = null;
let score = 0;
let correctAnswers = 0;
let errors = 0;
let currentReaction = null;
let gameDuration = null;
let timerInterval = null;
let gameTimerInterval = null;
let elapsed = 0;
let totalElapsed = 0;
let maxErrors = 3;
let gamePaused = false;
let pausedTime = 0;
let usedReactions = [];
let spaceHandler = null;

document.addEventListener('DOMContentLoaded', () => {
    TabelaPeriodica.montar('#periodic-table', { modo: 'compacta', detalhes: false, legenda: '#periodic-legend' });
    const params = new URLSearchParams(window.location.search);
    const diffParam = params.get('diff');
    if (diffParam && reactions[diffParam]) {
        selectDifficulty(diffParam);
    } else {
        showDifficultyPopup();
    }
});


function togglePeriodicPopup() {
    const popup = document.getElementById('periodic-popup');
    popup.classList.toggle('show');
}

function selectDifficulty(diff) {
    difficulty = diff;
    errors = 0;
    usedReactions = [];
    document.getElementById('difficulty-popup').classList.remove('show');
    document.getElementById('overlay').classList.remove('show');
    document.getElementById('game-header').classList.add('show');
    document.getElementById('game-main').classList.add('show');
    
    const labels = { facil: 'FÁCIL', medio: 'MÉDIO', dificil: 'DIFÍCIL' };
    document.getElementById('difficulty-label').textContent = labels[diff];
    
    document.getElementById('periodic-popup').classList.remove('show');
    
    if (diff === 'facil') {
        gameDuration = null;
        document.getElementById('timer').textContent = '∞';
        document.getElementById('errors-count').textContent = '∞';
    } else if (diff === 'medio') {
        gameDuration = 600;
        document.getElementById('timer').textContent = '10:00';
        document.getElementById('errors-count').textContent = '0';
    } else {
        gameDuration = 300;
        document.getElementById('timer').textContent = '5:00';
        document.getElementById('errors-count').textContent = '0';
    }
    
    document.getElementById('game-timer').textContent = '0:00';
    startTimers();
    nextReaction();
}

function showDifficultyPopup() {
    clearInterval(timerInterval);
    clearInterval(gameTimerInterval);
    document.getElementById('modal-final').classList.remove('show');
    document.getElementById('difficulty-popup').classList.add('show');
    document.getElementById('overlay').classList.add('show');
    document.getElementById('game-header').classList.remove('show');
    document.getElementById('game-main').classList.remove('show');
    resetGame();
}

function closeDifficultyPopup() {
    document.getElementById('difficulty-popup').classList.remove('show');
    document.getElementById('overlay').classList.remove('show');
}

function resetGame() {
    score = 0;
    correctAnswers = 0;
    errors = 0;
    usedReactions = [];
    document.getElementById('score').textContent = '0';
    document.getElementById('correct-count').textContent = '0';
    document.getElementById('errors-count').textContent = '-';
    document.getElementById('timer').textContent = '--:--';
    document.getElementById('game-timer').textContent = '0:00';
    document.getElementById('difficulty-label').textContent = '-';
    document.getElementById('message').textContent = '';
}

function startTimers() {
    clearInterval(timerInterval);
    clearInterval(gameTimerInterval);
    elapsed = 0;
    totalElapsed = 0;
    gamePaused = false;
    pausedTime = 0;
    
    gameTimerInterval = setInterval(() => {
        if (!gamePaused) {
            totalElapsed++;
            const min = Math.floor(totalElapsed / 60);
            const sec = totalElapsed % 60;
            document.getElementById('game-timer').textContent = 
                `${min}:${sec.toString().padStart(2, '0')}`;
        }
    }, 1000);
    
    if (gameDuration) {
        timerInterval = setInterval(() => {
            if (!gamePaused) {
                elapsed++;
                const remaining = gameDuration - elapsed;
                if (remaining <= 0) {
                    endGame();
                    return;
                }
                const min = Math.floor(remaining / 60);
                const sec = remaining % 60;
                document.getElementById('timer').textContent = 
                    `${min}:${sec.toString().padStart(2, '0')}`;
            }
        }, 1000);
    }
}

function getRandomReaction() {
    const available = reactions[difficulty];
    const unused = available.filter((_, index) => !usedReactions.includes(index));
    
    if (unused.length === 0) {
        usedReactions = [];
        return available[Math.floor(Math.random() * available.length)];
    }
    
    const randomIndex = Math.floor(Math.random() * unused.length);
    const originalIndex = available.indexOf(unused[randomIndex]);
    usedReactions.push(originalIndex);
    
    return unused[randomIndex];
}

function renderEquation(reaction) {
    const display = document.getElementById('equation-display');
    display.innerHTML = '';
    katex.render(reaction.equation, display, { throwOnError: false, displayMode: true });
}

function renderBondOptions() {
    const container = document.getElementById('bond-options');
    container.innerHTML = '';
    bondTypes.forEach(bond => {
        const btn = document.createElement('button');
        btn.className = 'bond-btn';
        btn.textContent = bond;
        btn.onclick = () => checkAnswer(bond, btn);
        container.appendChild(btn);
    });
}

function nextReaction() {
    removeSpaceHandler();
    currentReaction = getRandomReaction();
    renderEquation(currentReaction);
    renderBondOptions();
    document.getElementById('message').textContent = '';
    document.getElementById('message').className = 'message';
}

function checkAnswer(selected, btn) {
    const buttons = document.querySelectorAll('.bond-btn');
    buttons.forEach(b => b.disabled = true);
    
    if (selected === currentReaction.bond) {
        btn.classList.add('correct');
        score += 100;
        correctAnswers++;
        document.getElementById('score').textContent = score;
        document.getElementById('correct-count').textContent = correctAnswers;
        document.getElementById('message').textContent = currentReaction.explanation;
        document.getElementById('message').className = 'message success';
    } else {
        btn.classList.add('incorrect');
        errors++;
        document.getElementById('errors-count').textContent = errors;
        document.getElementById('message').textContent = currentReaction.explanation;
        document.getElementById('message').className = 'message error';
    }
    
    document.getElementById('message').textContent += ' (ESPAÇO para continuar)';
    
    removeSpaceHandler();
    spaceHandler = (e) => {
        if (e.code === 'Space') {
            e.preventDefault();
            nextReaction();
        }
    };
    document.addEventListener('keydown', spaceHandler);
}

function removeSpaceHandler() {
    if (spaceHandler) {
        document.removeEventListener('keydown', spaceHandler);
        spaceHandler = null;
    }
}

function skipQuestion() {
    nextReaction();
}

function endGame() {
    clearInterval(timerInterval);
    clearInterval(gameTimerInterval);
    
    document.getElementById('final-score').textContent = score;
    document.getElementById('final-total-correct').textContent = correctAnswers;
    
    const min = Math.floor(totalElapsed / 60);
    const sec = totalElapsed % 60;
    document.getElementById('total-time').textContent = 
        `${min}:${sec.toString().padStart(2, '0')}`;
    
    document.getElementById('modal-final').classList.add('show');
}
