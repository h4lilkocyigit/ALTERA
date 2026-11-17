let currentQuestionIndex = 0;
let userScores = { M: 0, W: 0, S: 0, R: 0 };

// DOM Elementleri
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

// Testi Başlat
startBtn.addEventListener('click', () => {
    currentQuestionIndex = 0;
    userScores = { M: 0, W: 0, S: 0, R: 0 };
    switchScreen(introScreen, quizScreen);
    renderQuestion();
});

// Tekrar Başlat
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
        "Paralel evren frekansların taranıyor...",
        "Ruhsal izlerin 20 kadim arketip ile eşleştiriliyor...",
        "Altera Konseyi kehanet mührünü kırıyor..."
    ];

    let msgIdx = 0;
    const msgInterval = setInterval(() => {
        msgIdx++;
        if (msgIdx < loadingMessages.length) {
            document.getElementById('loading-text').textContent = loadingMessages[msgIdx];
        }
    }, 850);

    setTimeout(() => {
        clearInterval(msgInterval);
        const matchedCharacter = findBestCharacter(userScores);
        displayResult(matchedCharacter);
        switchScreen(loadingScreen, resultScreen);
    }, 2600);
}

// 4 Boyutlu Vektör Uzayında En Yakın Karakteri Bulan Algoritma
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

function displayResult(char) {
    document.getElementById('char-image').src = char.avatarUrl;
    document.getElementById('char-realm').textContent = char.realm;
    document.getElementById('char-title').textContent = char.title;
    document.getElementById('char-name').textContent = char.name;
    document.getElementById('char-appearance').textContent = `"${char.appearance}"`;

    document.getElementById('stat-magic').style.width = `${char.stats.magic}%`;
    document.getElementById('stat-power').style.width = `${char.stats.power}%`;
    document.getElementById('stat-wit').style.width = `${char.stats.wit}%`;

    document.getElementById('char-analysis').textContent = char.analysis;
    document.getElementById('char-prophecy').textContent = char.prophecy;

    // Paylaşım Butonu
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
