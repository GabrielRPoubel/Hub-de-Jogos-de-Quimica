const reactions = {
    facil: [
        { equation: "\\ce{NaCl}", bond: "IÔNICA", hint: "Metal + Ametal", explanation: "Na (metal) + Cl (ametal) = ligação iônica" },
        { equation: "\\ce{H2O}", bond: "COVALENTE", hint: "Ametal + Ametal", explanation: "H (ametal) + O (ametal) = ligação covalente" },
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
        { equation: "\\ce{H2SO4}", bond: "COVALENTE", hint: "Ametal + Ametal", explanation: "H, S, O = todos ametais = ligação covalente" },
        { equation: "\\ce{NaOH}", bond: "MISTA", hint: "Metal + Ametal + Ametal", explanation: "Na (metal) + OH (ametal) = ligação mista" },
        { equation: "\\ce{CaCO3}", bond: "MISTA", hint: "Metal + Ametal + Ametal", explanation: "Ca (metal) + CO3 (ametal) = ligação mista" },
        { equation: "\\ce{KMnO4}", bond: "MISTA", hint: "Metal + Ametal + Ametal", explanation: "K (metal) + MnO4 (ametal) = ligação mista" },
        { equation: "\\ce{NH4Cl}", bond: "MISTA", hint: "Ametal + Ametal + Ametal", explanation: "NH4 (ametal) + Cl (ametal) = ligação mista" },
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
        { equation: "\\ce{(NH4)2SO4}", bond: "MISTA", hint: "Ametal + Ametal + Ametal", explanation: "NH4 (ametal) + SO4 (ametal) = ligação mista" },
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
        { equation: "\\ce{(NH4)3PO4}", bond: "MISTA", hint: "Ametal + Ametal + Ametal", explanation: "NH4 (ametal) + PO4 (ametal) = ligação mista" },
        { equation: "\\ce{BaSO4}", bond: "MISTA", hint: "Metal + Ametal + Ametal", explanation: "Ba (metal) + SO4 (ametal) = ligação mista" },
        { equation: "\\ce{PbCl2}", bond: "IÔNICA", hint: "Metal + Ametal", explanation: "Pb (metal) + Cl (ametal) = ligação iônica" },
        { equation: "\\ce{H2CrO4}", bond: "COVALENTE", hint: "Ametal + Ametal", explanation: "H, Cr, O = todos ametais = ligação covalente" },
        { equation: "\\ce{Na2HPO4}", bond: "MISTA", hint: "Metal + Ametal + Ametal", explanation: "Na (metal) + HPO4 (ametal) = ligação mista" },
        { equation: "\\ce{Fe2(SO4)3}", bond: "MISTA", hint: "Metal + Ametal + Ametal", explanation: "Fe (metal) + SO4 (ametal) = ligação mista" },
        { equation: "\\ce{K4[Fe(CN)6]}", bond: "MISTA", hint: "Metal + Ametal + Ametal", explanation: "K (metal) + [Fe(CN)6] (ametal) = ligação mista" },
        { equation: "\\ce{Cu2(OH)2CO3}", bond: "MISTA", hint: "Metal + Ametal + Ametal", explanation: "Cu (metal) + OH, CO3 (ametais) = ligação mista" },
        { equation: "\\ce{SnCl4}", bond: "IÔNICA", hint: "Metal + Ametal", explanation: "Sn (metal) + Cl (ametal) = ligação iônica" },
        { equation: "\\ce{H2C2O4}", bond: "COVALENTE", hint: "Ametal + Ametal", explanation: "H, C, O = todos ametais = ligação covalente" },
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

const periodicTable = [
    [{n:1,s:"H",name:"Hidrogênio",type:"nonmetal"},{n:"",s:"",name:"",type:"empty"},{n:"",s:"",name:"",type:"empty"},{n:"",s:"",name:"",type:"empty"},{n:"",s:"",name:"",type:"empty"},{n:"",s:"",name:"",type:"empty"},{n:"",s:"",name:"",type:"empty"},{n:"",s:"",name:"",type:"empty"},{n:"",s:"",name:"",type:"empty"},{n:"",s:"",name:"",type:"empty"},{n:"",s:"",name:"",type:"empty"},{n:"",s:"",name:"",type:"empty"},{n:"",s:"",name:"",type:"empty"},{n:"",s:"",name:"",type:"empty"},{n:"",s:"",name:"",type:"empty"},{n:"",s:"",name:"",type:"empty"},{n:"",s:"",name:"",type:"empty"},{n:2,s:"He",name:"Hélio",type:"nonmetal"}],
    [{n:3,s:"Li",name:"Lítio",type:"metal"},{n:4,s:"Be",name:"Berílio",type:"metal"},{n:"",s:"",name:"",type:"empty"},{n:"",s:"",name:"",type:"empty"},{n:"",s:"",name:"",type:"empty"},{n:"",s:"",name:"",type:"empty"},{n:5,s:"B",name:"Boro",type:"metalloid"},{n:6,s:"C",name:"Carbono",type:"nonmetal"},{n:7,s:"N",name:"Nitrogênio",type:"nonmetal"},{n:8,s:"O",name:"Oxigênio",type:"nonmetal"},{n:9,s:"F",name:"Flúor",type:"nonmetal"},{n:10,s:"Ne",name:"Neônio",type:"nonmetal"},{n:"",s:"",name:"",type:"empty"},{n:"",s:"",name:"",type:"empty"},{n:"",s:"",name:"",type:"empty"},{n:"",s:"",name:"",type:"empty"},{n:"",s:"",name:"",type:"empty"},{n:"",s:"",name:"",type:"empty"}],
    [{n:11,s:"Na",name:"Sódio",type:"metal"},{n:12,s:"Mg",name:"Magnésio",type:"metal"},{n:"",s:"",name:"",type:"empty"},{n:13,s:"Al",name:"Alumínio",type:"metal"},{n:14,s:"Si",name:"Silício",type:"metalloid"},{n:15,s:"P",name:"Fósforo",type:"nonmetal"},{n:16,s:"S",name:"Enxofre",type:"nonmetal"},{n:17,s:"Cl",name:"Cloro",type:"nonmetal"},{n:18,s:"Ar",name:"Argônio",type:"nonmetal"},{n:"",s:"",name:"",type:"empty"},{n:"",s:"",name:"",type:"empty"},{n:"",s:"",name:"",type:"empty"},{n:"",s:"",name:"",type:"empty"},{n:"",s:"",name:"",type:"empty"},{n:"",s:"",name:"",type:"empty"},{n:"",s:"",name:"",type:"empty"},{n:"",s:"",name:"",type:"empty"},{n:"",s:"",name:"",type:"empty"}],
    [{n:19,s:"K",name:"Potássio",type:"metal"},{n:20,s:"Ca",name:"Cálcio",type:"metal"},{n:21,s:"Sc",name:"Escândio",type:"metal"},{n:22,s:"Ti",name:"Titânio",type:"metal"},{n:23,s:"V",name:"Vanádio",type:"metal"},{n:24,s:"Cr",name:"Cromo",type:"metal"},{n:25,s:"Mn",name:"Manganês",type:"metal"},{n:26,s:"Fe",name:"Ferro",type:"metal"},{n:27,s:"Co",name:"Cobalto",type:"metal"},{n:28,s:"Ni",name:"Níquel",type:"metal"},{n:29,s:"Cu",name:"Cobre",type:"metal"},{n:30,s:"Zn",name:"Zinco",type:"metal"},{n:31,s:"Ga",name:"Gálio",type:"metal"},{n:32,s:"Ge",name:"Germânio",type:"metalloid"},{n:33,s:"As",name:"Arsênio",type:"metalloid"},{n:34,s:"Se",name:"Selênio",type:"nonmetal"},{n:35,s:"Br",name:"Bromo",type:"nonmetal"},{n:36,s:"Kr",name:"Criptônio",type:"nonmetal"}],
    [{n:37,s:"Rb",name:"Rubídio",type:"metal"},{n:38,s:"Sr",name:"Estrôncio",type:"metal"},{n:39,s:"Y",name:"Ítrio",type:"metal"},{n:40,s:"Zr",name:"Zircônio",type:"metal"},{n:41,s:"Nb",name:"Nióbio",type:"metal"},{n:42,s:"Mo",name:"Molibdênio",type:"metal"},{n:43,s:"Tc",name:"Tecneto",type:"metal"},{n:44,s:"Ru",name:"Rutênio",type:"metal"},{n:45,s:"Rh",name:"Ródio",type:"metal"},{n:46,s:"Pd",name:"Paládio",type:"metal"},{n:47,s:"Ag",name:"Prata",type:"metal"},{n:48,s:"Cd",name:"Cádmio",type:"metal"},{n:49,s:"In",name:"Índio",type:"metal"},{n:50,s:"Sn",name:"Estanho",type:"metal"},{n:51,s:"Sb",name:"Antimônio",type:"metalloid"},{n:52,s:"Te",name:"Telúrio",type:"metalloid"},{n:53,s:"I",name:"Iodo",type:"nonmetal"},{n:54,s:"Xe",name:"Xenônio",type:"nonmetal"}],
    [{n:55,s:"Cs",name:"Césio",type:"metal"},{n:56,s:"Ba",name:"Bário",type:"metal"},{n:57,s:"La",name:"Lantânio",type:"metal"},{n:72,s:"Hf",name:"Háfnio",type:"metal"},{n:73,s:"Ta",name:"Tântalo",type:"metal"},{n:74,s:"W",name:"Tungstênio",type:"metal"},{n:75,s:"Re",name:"Rênio",type:"metal"},{n:76,s:"Os",name:"Ósmio",type:"metal"},{n:77,s:"Ir",name:"Irídio",type:"metal"},{n:78,s:"Pt",name:"Platina",type:"metal"},{n:79,s:"Au",name:"Ouro",type:"metal"},{n:80,s:"Hg",name:"Mercúrio",type:"metal"},{n:81,s:"Tl",name:"Tálio",type:"metal"},{n:82,s:"Pb",name:"Chumbo",type:"metal"},{n:83,s:"Bi",name:"Bismuto",type:"metal"},{n:84,s:"Po",name:"Polônio",type:"metal"},{n:85,s:"At",name:"Astato",type:"nonmetal"},{n:86,s:"Rn",name:"Radônio",type:"nonmetal"}],
    [{n:87,s:"Fr",name:"Frâncio",type:"metal"},{n:88,s:"Ra",name:"Rádio",type:"metal"},{n:89,s:"Ac",name:"Actínio",type:"metal"},{n:104,s:"Rf",name:"Rutherfordium",type:"metal"},{n:105,s:"Db",name:"Dubnium",type:"metal"},{n:106,s:"Sg",name:"Seaborgium",type:"metal"},{n:107,s:"Bh",name:"Bohrium",type:"metal"},{n:108,s:"Hs",name:"Hassium",type:"metal"},{n:109,s:"Mt",name:"Meitnerium",type:"metal"},{n:110,s:"Ds",name:"Darmstadtium",type:"metal"},{n:111,s:"Rg",name:"Roentgenium",type:"metal"},{n:112,s:"Cn",name:"Copernicium",type:"metal"},{n:113,s:"Nh",name:"Nihonium",type:"metal"},{n:114,s:"Fl",name:"Flerovium",type:"metal"},{n:115,s:"Mc",name:"Moscovium",type:"metal"},{n:116,s:"Lv",name:"Livermorium",type:"metal"},{n:117,s:"Ts",name:"Tennessine",type:"nonmetal"},{n:118,s:"Og",name:"Oganesson",type:"nonmetal"}],
    [{n:"",s:"",name:"",type:"empty"},{n:"",s:"",name:"",type:"empty"},{n:"",s:"",name:"",type:"empty"},{n:58,s:"Ce",name:"Cerio",type:"metal"},{n:59,s:"Pr",name:"Praseodímio",type:"metal"},{n:60,s:"Nd",name:"Neodímio",type:"metal"},{n:61,s:"Pm",name:"Promécio",type:"metal"},{n:62,s:"Sm",name:"Samário",type:"metal"},{n:63,s:"Eu",name:"Európio",type:"metal"},{n:64,s:"Gd",name:"Gadolínio",type:"metal"},{n:65,s:"Tb",name:"Térbio",type:"metal"},{n:66,s:"Dy",name:"Disprósio",type:"metal"},{n:67,s:"Ho",name:"Hólmio",type:"metal"},{n:68,s:"Er",name:"Érbio",type:"metal"},{n:69,s:"Tm",name:"Túlio",type:"metal"},{n:70,s:"Yb",name:"Itérbio",type:"metal"},{n:71,s:"Lu",name:"Lutécio",type:"metal"},{n:"",s:"",name:"",type:"empty"}],
    [{n:"",s:"",name:"",type:"empty"},{n:"",s:"",name:"",type:"empty"},{n:"",s:"",name:"",type:"empty"},{n:90,s:"Th",name:"Tório",type:"metal"},{n:91,s:"Pa",name:"Protactínio",type:"metal"},{n:92,s:"U",name:"Urânio",type:"metal"},{n:93,s:"Np",name:"Neptúnio",type:"metal"},{n:94,s:"Pu",name:"Plutônio",type:"metal"},{n:95,s:"Am",name:"Américio",type:"metal"},{n:96,s:"Cm",name:"Curio",type:"metal"},{n:97,s:"Bk",name:"Berkélio",type:"metal"},{n:98,s:"Cf",name:"Califórnio",type:"metal"},{n:99,s:"Es",name:"Einsteinio",type:"metal"},{n:100,s:"Fm",name:"Férmio",type:"metal"},{n:101,s:"Md",name:"Mendelévio",type:"metal"},{n:102,s:"No",name:"Nobélio",type:"metal"},{n:103,s:"Lr",name:"Lawrencio",type:"metal"},{n:"",s:"",name:"",type:"empty"}]
];

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

document.addEventListener('DOMContentLoaded', () => {
    renderPeriodicTable();
    const params = new URLSearchParams(window.location.search);
    const diffParam = params.get('diff');
    if (diffParam && reactions[diffParam]) {
        selectDifficulty(diffParam);
    } else {
        showDifficultyPopup();
    }
});

function renderPeriodicTable() {
    const container = document.getElementById('periodic-table');
    container.innerHTML = '';
    periodicTable.forEach(row => {
        row.forEach(el => {
            const div = document.createElement('div');
            div.className = `element ${el.type}`;
            if (el.type === 'empty') {
                div.innerHTML = '&nbsp;';
            } else {
                div.innerHTML = `
                    <div class="atomic-number">${el.n}</div>
                    <div class="symbol">${el.s}</div>
                    <div class="name">${el.name}</div>
                `;
            }
            container.appendChild(div);
        });
    });
}

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
    
    const spaceHandler = (e) => {
        if (e.code === 'Space') {
            e.preventDefault();
            document.removeEventListener('keydown', spaceHandler);
            nextReaction();
        }
    };
    document.addEventListener('keydown', spaceHandler);
}

function skipQuestion() {
    if (difficulty === 'facil') {
        nextReaction();
    } else if (difficulty === 'medio') {
        nextReaction();
    } else {
        nextReaction();
    }
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
