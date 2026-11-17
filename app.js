let currentQuestionIndex = 0;
let userScores = { M: 0, W: 0, S: 0, R: 0 };

const introScreen = document.getElementById('intro-screen');
const quizScreen = document.getElementById('quiz-screen');
const loadingScreen = document.getElementById('loading-screen');
const resultScreen = document.getElementById('result-screen');

const startBtn = document.getElementById('start-btn');
const restartBtn = document.getElementById('restart-btn');
const shareBtn = document.getElementById('share-btn');

const questionCounter = document.getElementById('question-counter');
const questionDimension = document.getElementById('question-dimension');
const progressFill = document.getElementById('progress-fill');
const questionText = document.getElementById('question-text');
const optionsContainer = document.getElementById('options-container');

startBtn.addEventListener('click', () => {
    currentQuestionIndex = 0;
    userScores = { M: 0, W: 0, S: 0, R: 0 };
    switchScreen(introScreen, quizScreen);
    renderQuestion();
});

restartBtn.addEventListener('click', () => {
    currentQuestionIndex = 0;
    userScores = { M: 0, W: 0, S: 0, R: 0 };
    switchScreen(resultScreen, introScreen);
});

function switchScreen(from, to) {
    from.classList.add('hidden');
    from.classList.remove('active');
    to.classList.remove('hidden');
    to.classList.add('active');
}

function renderQuestion() {
    const q = QUESTIONS[currentQuestionIndex];
    questionCounter.textContent = `SORU ${currentQuestionIndex + 1} / ${QUESTIONS.length}`;
    questionDimension.textContent = q.dimension;
    progressFill.style.width = `${((currentQuestionIndex + 1) / QUESTIONS.length) * 100}%`;
    questionText.textContent = q.text;

    optionsContainer.innerHTML = '';
    const letters = ['A', 'B', 'C', 'D'];

    q.options.forEach((opt, idx) => {
        const btn = document.createElement('button');
        btn.className = 'option-btn';
        btn.innerHTML = `
            <span class="option-letter">${letters[idx]}</span>
            <span>${opt.text}</span>
        `;
        btn.addEventListener('click', () => handleAnswer(opt.scores));
        optionsContainer.appendChild(btn);
    });
}

function handleAnswer(scores) {
    userScores.M += scores.M;
    userScores.W += scores.W;
    userScores.S += scores.S;
    userScores.R += scores.R;

    currentQuestionIndex++;

    if (currentQuestionIndex < QUESTIONS.length) {
        renderQuestion();
    } else {
        finishQuiz();
    }
}

function finishQuiz() {
    switchScreen(quizScreen, loadingScreen);

    const loadingMessages = [
        "Kuantum frekansların taranıyor...",
        "Ruhsal izlerin 20 kadim arketip ile eşleştiriliyor...",
        "Altera Konseyi kehanet mührünü kırıyor..."
    ];

    let msgIdx = 0;
    const msgInterval = setInterval(() => {
        msgIdx++;
        if (msgIdx < loadingMessages.length) {
            document.getElementById('loading-text').textContent = loadingMessages[msgIdx];
        }
    }, 800);

    setTimeout(() => {
        clearInterval(msgInterval);
        const matchedCharacter = findBestCharacter(userScores);
        displayResult(matchedCharacter);
        switchScreen(loadingScreen, resultScreen);
    }, 2400);
}

function findBestCharacter(scores) {
    let bestMatch = CHARACTERS[0];
    let lowestDistance = Infinity;

    CHARACTERS.forEach(char => {
        const dM = scores.M - char.vector.M;
        const dW = scores.W - char.vector.W;
        const dS = scores.S - char.vector.S;
        const dR = scores.R - char.vector.R;

        const distance = Math.sqrt(dM * dM + dW * dW + dS * dS + dR * dR);

        if (distance < lowestDistance) {
            lowestDistance = distance;
            bestMatch = char;
        }
    });

    return bestMatch;
}

// 3D Gölgeli ve Işık Efektli Oyun Karakteri Figürü Üretici (Anında Yüklenir, Asla Kırılmaz)
function buildCharacter3DArtwork(char) {
    const v = char.visual;
    const uid = `char_${char.id}`;

    let backHair = '';
    let frontHair = '';
    if (v.hairStyle === 'long') {
        backHair = `<path d="M55,85 C45,140 42,200 50,245 L190,245 C198,200 195,140 185,85 Z" fill="${v.hair}" filter="url(#shadow_${uid})"/>`;
        frontHair = `<path d="M72,92 C75,52 165,52 168,92 C168,75 145,68 120,76 C95,68 72,75 72,92 Z" fill="${v.hair}"/>
                     <path d="M72,90 C68,130 74,175 82,210 L92,210 C84,165 82,125 84,95 Z" fill="${v.hair}" opacity="0.9"/>
                     <path d="M168,90 C172,130 166,175 158,210 L148,210 C156,165 158,125 156,95 Z" fill="${v.hair}" opacity="0.9"/>`;
    } else if (v.hairStyle === 'spiky') {
        backHair = `<polygon points="65,105 55,60 85,75 100,40 120,68 140,38 155,75 185,58 175,105" fill="${v.hair}"/>`;
        frontHair = `<polygon points="72,95 85,62 105,82 120,55 138,82 155,62 168,95 148,78 120,86 92,78" fill="${v.hair}"/>`;
    } else if (v.hairStyle === 'beard') {
        backHair = `<path d="M70,95 C70,55 170,55 170,95 Z" fill="${v.hair}"/>`;
        frontHair = `<path d="M72,92 C78,58 162,58 168,92 C150,74 90,74 72,92 Z" fill="${v.hair}"/>
                     <path d="M78,132 C82,175 105,198 120,205 C135,198 158,175 162,132 C148,148 92,148 78,132 Z" fill="${v.hair}"/>`;
    } else {
        backHair = `<path d="M68,110 C65,55 175,55 172,110 Z" fill="${v.hair}"/>`;
        frontHair = `<path d="M72,96 C74,56 166,56 168,96 C155,74 125,72 108,88 C92,74 78,80 72,96 Z" fill="${v.hair}"/>`;
    }

    let accessoryLayer = '';
    if (v.accessory === 'hat') {
        accessoryLayer = `<ellipse cx="120" cy="68" rx="78" ry="16" fill="#111827" stroke="${v.trim}" stroke-width="2"/>
                          <path d="M84,68 L94,34 L146,34 L156,68 Z" fill="#1f2937"/>
                          <rect x="88" y="60" width="64" height="6" fill="${v.trim}"/>`;
    } else if (v.accessory === 'crown') {
        accessoryLayer = `<polygon points="82,66 92,42 106,58 120,36 134,58 148,42 158,66" fill="none" stroke="${v.trim}" stroke-width="3.5"/>
                          <circle cx="120" cy="36" r="4" fill="${v.eye}"/>`;
    } else if (v.accessory === 'goggles') {
        accessoryLayer = `<rect x="82" y="58" width="76" height="18" rx="8" fill="#292524" stroke="${v.trim}" stroke-width="2"/>
                          <circle cx="102" cy="67" r="10" fill="${v.eye}" opacity="0.85" stroke="#d97706" stroke-width="3"/>
                          <circle cx="138" cy="67" r="10" fill="${v.eye}" opacity="0.85" stroke="#d97706" stroke-width="3"/>`;
    } else if (v.accessory === 'visor') {
        accessoryLayer = `<path d="M78,96 L162,96 L156,112 L84,112 Z" fill="${v.eye}" opacity="0.65" stroke="${v.trim}" stroke-width="2"/>`;
    } else if (v.accessory === 'rune') {
        accessoryLayer = `<polygon points="120,74 125,83 120,92 115,83" fill="${v.eye}" filter="url(#glow_${uid})"/>`;
    } else if (v.accessory === 'scar') {
        accessoryLayer = `<path d="M92,114 L104,128" stroke="${v.trim}" stroke-width="2.5" stroke-linecap="round"/>`;
    } else if (v.accessory === 'hood') {
        accessoryLayer = `<path d="M56,155 C52,55 188,55 184,155 L168,145 C170,75 70,75 72,145 Z" fill="${v.armor}" stroke="${v.trim}" stroke-width="2"/>`;
    }

    return `
    <svg viewBox="0 0 240 240" xmlns="http://www.w3.org/2000/svg">
        <defs>
            <radialGradient id="bg_${uid}" cx="50%" cy="35%" r="70%">
                <stop offset="0%" stop-color="${v.bg1}"/>
                <stop offset="100%" stop-color="${v.bg2}"/>
            </radialGradient>
            <linearGradient id="skin_${uid}" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stop-color="${v.skin}"/>
                <stop offset="100%" stop-color="#9a6b42"/>
            </linearGradient>
            <linearGradient id="armor_${uid}" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stop-color="${v.armor}"/>
                <stop offset="100%" stop-color="#05070c"/>
            </linearGradient>
            <filter id="glow_${uid}" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur stdDeviation="3.5" result="blur"/>
                <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
            </filter>
            <filter id="shadow_${uid}">
                <feDropShadow dx="0" dy="6" stdDeviation="6" flood-color="#000000" flood-opacity="0.65"/>
            </filter>
        </defs>

        <!-- Arka Plan ve Enerji Halesi -->
        <rect width="240" height="240" fill="url(#bg_${uid})"/>
        <circle cx="120" cy="110" r="78" fill="none" stroke="${v.trim}" stroke-width="1.5" stroke-dasharray="6 4" opacity="0.5"/>
        <circle cx="120" cy="110" r="64" fill="${v.trim}" opacity="0.12" filter="url(#glow_${uid})"/>

        <!-- Arka Saç Katmanı -->
        ${backHair}

        <!-- Zırh ve Omuzluklar (3D Derinlikli) -->
        <path d="M35,240 C40,185 75,168 120,168 C165,168 200,185 205,240 Z" fill="url(#armor_${uid})" stroke="${v.trim}" stroke-width="2.5" filter="url(#shadow_${uid})"/>
        <path d="M42,198 L82,174 L92,205 L52,225 Z" fill="${v.armor}" stroke="${v.trim}" stroke-width="2"/>
        <path d="M198,198 L158,174 L148,205 L188,225 Z" fill="${v.armor}" stroke="${v.trim}" stroke-width="2"/>
        <polygon points="120,178 134,202 120,226 106,202" fill="${v.eye}" opacity="0.85" filter="url(#glow_${uid})"/>

        <!-- Boyun ve Yüz (3D Gölgelendirme) -->
        <rect x="104" y="142" width="32" height="34" rx="8" fill="url(#skin_${uid})"/>
        <path d="M78,96 C78,62 162,62 162,96 C162,134 142,158 120,162 C98,158 78,134 78,96 Z" fill="url(#skin_${uid})" filter="url(#shadow_${uid})"/>

        <!-- Parlayan Gözler ve Keskin Kaşlar -->
        <path d="M90,98 L108,103" stroke="#111827" stroke-width="3" stroke-linecap="round"/>
        <path d="M150,98 L132,103" stroke="#111827" stroke-width="3" stroke-linecap="round"/>
        <ellipse cx="100" cy="107" rx="7" ry="4.5" fill="#ffffff"/>
        <circle cx="100" cy="107" r="3.8" fill="${v.eye}" filter="url(#glow_${uid})"/>
        <ellipse cx="140" cy="107" rx="7" ry="4.5" fill="#ffffff"/>
        <circle cx="140" cy="107" r="3.8" fill="${v.eye}" filter="url(#glow_${uid})"/>

        <!-- Burun ve Karakteristik İfade -->
        <path d="M120,108 L117,124 L123,125" fill="none" stroke="#7c4d2b" stroke-width="2" stroke-linecap="round"/>
        <path d="M110,138 Q120,142 130,138" fill="none" stroke="#6b3e21" stroke-width="2.2" stroke-linecap="round"/>

        <!-- Ön Saç ve Aksesuar Katmanı -->
        ${frontHair}
        ${accessoryLayer}
    </svg>`;
}

function displayResult(char) {
    const avatarContainer = document.getElementById('avatar-container');
    avatarContainer.innerHTML = buildCharacter3DArtwork(char) + `<div class="element-badge" id="char-realm">${char.realm}</div>`;

    document.getElementById('char-title').textContent = char.title;
    document.getElementById('char-name').textContent = char.name;
    document.getElementById('char-appearance').textContent = `"${char.appearance}"`;

    document.getElementById('stat-magic').style.width = `${char.stats.magic}%`;
    document.getElementById('stat-power').style.width = `${char.stats.power}%`;
    document.getElementById('stat-wit').style.width = `${char.stats.wit}%`;

    const analysisContainer = document.getElementById('char-analysis');
    analysisContainer.innerHTML = char.analysis
        .split('\n\n')
        .map(p => `<p>${p}</p>`)
        .join('');

    const prophecyContainer = document.getElementById('char-prophecy');
    prophecyContainer.innerHTML = char.prophecy
        .split('\n\n')
        .map(p => `<p>${p}</p>`)
        .join('');

    shareBtn.onclick = () => {
        const shareText = `🌌 ALTERA Paralel Evren Testi sonucum:\n✨ Karakterim: ${char.name} (${char.title})\n🏰 Diyarı: ${char.realm}\nSen de paralel evren kimliğini keşfet!`;
        navigator.clipboard.writeText(shareText).then(() => {
            shareBtn.textContent = "✓ Sonuç Panoya Kopyalandı!";
            setTimeout(() => {
                shareBtn.textContent = "Sonucu Kopyala & Paylaş";
            }, 2500);
        });
    };
}
