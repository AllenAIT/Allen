/* ============================================================
   LIFF Quiz — Scalp Care × Sleep Wellness
   ============================================================ */

// ─── Configuration ──────────────────────────────────────────
// Update these values before deploying to production.
const CONFIG = {
    LIFF_ID: '',                         // LINE LIFF ID (e.g. '1234567890-aBcDeFgH')
    SALES_URL: 'https://your-sales-page.com', // Destination sales page
    TRACKING_ENDPOINT: '',               // Optional: POST beacon URL (webhook / GA Measurement Protocol)
    GA_MEASUREMENT_ID: '',               // Optional: Google Analytics 4 Measurement ID
};

// ─── 15 Questions ───────────────────────────────────────────
// Score keys: S = 頭皮壓力型, Z = 睡眠困擾型, M = 頭皮敏感型, C = 綜合養護型
const QUESTIONS = [
    {
        id: 1,
        text: '你最近的睡眠品質如何？',
        options: [
            { text: '經常失眠，難以入睡', scores: { S: 0, Z: 3, M: 0, C: 0 } },
            { text: '睡眠品質不穩定，時好時壞', scores: { S: 0, Z: 2, M: 0, C: 1 } },
            { text: '壓力大時才會睡不好', scores: { S: 2, Z: 1, M: 0, C: 0 } },
            { text: '大致上還算不錯', scores: { S: 0, Z: 0, M: 0, C: 2 } },
        ],
    },
    {
        id: 2,
        text: '你的頭皮最常出現什麼狀況？',
        options: [
            { text: '經常出油，容易有頭皮屑', scores: { S: 3, Z: 0, M: 0, C: 0 } },
            { text: '頭皮容易泛紅、有刺痛感', scores: { S: 0, Z: 0, M: 3, C: 0 } },
            { text: '偶爾會發癢或感到緊繃', scores: { S: 1, Z: 0, M: 1, C: 1 } },
            { text: '目前沒有特別困擾', scores: { S: 0, Z: 0, M: 0, C: 2 } },
        ],
    },
    {
        id: 3,
        text: '一天中你最容易感到疲憊的時段是？',
        options: [
            { text: '早上起床就覺得很累', scores: { S: 0, Z: 3, M: 0, C: 0 } },
            { text: '下午工作到一半精神不濟', scores: { S: 2, Z: 0, M: 0, C: 1 } },
            { text: '晚上回家後感到身心俱疲', scores: { S: 2, Z: 1, M: 0, C: 0 } },
            { text: '整天都還算有精神', scores: { S: 0, Z: 0, M: 0, C: 2 } },
        ],
    },
    {
        id: 4,
        text: '你洗完頭後，頭皮通常的感覺是？',
        options: [
            { text: '沒多久又開始出油', scores: { S: 3, Z: 0, M: 0, C: 0 } },
            { text: '會感到乾燥、有點緊繃', scores: { S: 0, Z: 0, M: 3, C: 0 } },
            { text: '偶爾會有些敏感不適', scores: { S: 0, Z: 0, M: 2, C: 1 } },
            { text: '清爽舒適', scores: { S: 0, Z: 0, M: 0, C: 2 } },
        ],
    },
    {
        id: 5,
        text: '你平時的壓力指數大約是？',
        options: [
            { text: '經常感到壓力很大', scores: { S: 3, Z: 0, M: 0, C: 0 } },
            { text: '工作時壓力大，休息時還好', scores: { S: 2, Z: 1, M: 0, C: 0 } },
            { text: '偶爾有壓力，但能自我調適', scores: { S: 1, Z: 0, M: 0, C: 2 } },
            { text: '目前生活壓力不大', scores: { S: 0, Z: 0, M: 0, C: 2 } },
        ],
    },
    {
        id: 6,
        text: '你入睡前通常需要多長時間？',
        options: [
            { text: '超過一小時', scores: { S: 0, Z: 3, M: 0, C: 0 } },
            { text: '30 分鐘到一小時', scores: { S: 1, Z: 2, M: 0, C: 0 } },
            { text: '15 到 30 分鐘', scores: { S: 0, Z: 1, M: 0, C: 1 } },
            { text: '通常很快就能入睡', scores: { S: 0, Z: 0, M: 0, C: 2 } },
        ],
    },
    {
        id: 7,
        text: '你是否有掉髮的困擾？',
        options: [
            { text: '最近掉髮明顯增多', scores: { S: 2, Z: 0, M: 1, C: 0 } },
            { text: '換季時掉髮會比較嚴重', scores: { S: 0, Z: 0, M: 2, C: 1 } },
            { text: '偶爾會注意到掉髮', scores: { S: 0, Z: 0, M: 0, C: 2 } },
            { text: '目前沒有掉髮困擾', scores: { S: 0, Z: 0, M: 0, C: 2 } },
        ],
    },
    {
        id: 8,
        text: '睡覺時你是否容易做夢或中途醒來？',
        options: [
            { text: '經常做夢且容易驚醒', scores: { S: 0, Z: 3, M: 0, C: 0 } },
            { text: '偶爾會中途醒來', scores: { S: 1, Z: 2, M: 0, C: 0 } },
            { text: '做夢但不影響睡眠品質', scores: { S: 0, Z: 1, M: 0, C: 1 } },
            { text: '很少做夢，一覺到天亮', scores: { S: 0, Z: 0, M: 0, C: 2 } },
        ],
    },
    {
        id: 9,
        text: '你多久進行一次頭皮護理（如頭皮按摩、去角質）？',
        options: [
            { text: '從來沒有特別護理過', scores: { S: 0, Z: 0, M: 0, C: 3 } },
            { text: '偶爾想到才做', scores: { S: 1, Z: 0, M: 0, C: 2 } },
            { text: '大約一個月做一次', scores: { S: 1, Z: 0, M: 1, C: 0 } },
            { text: '每週都有固定護理', scores: { S: 0, Z: 0, M: 1, C: 0 } },
        ],
    },
    {
        id: 10,
        text: '你的日常飲食習慣如何？',
        options: [
            { text: '經常外食，較少注意營養均衡', scores: { S: 2, Z: 0, M: 0, C: 1 } },
            { text: '飲食不規律，有時會忘記吃飯', scores: { S: 1, Z: 2, M: 0, C: 0 } },
            { text: '盡量均衡，但偶爾放縱', scores: { S: 0, Z: 0, M: 0, C: 2 } },
            { text: '非常注重飲食健康', scores: { S: 0, Z: 0, M: 1, C: 1 } },
        ],
    },
    {
        id: 11,
        text: '你每天使用 3C 產品的時間大約是？',
        options: [
            { text: '超過 10 小時', scores: { S: 2, Z: 1, M: 0, C: 0 } },
            { text: '8 到 10 小時', scores: { S: 2, Z: 0, M: 0, C: 0 } },
            { text: '5 到 8 小時', scores: { S: 1, Z: 0, M: 0, C: 1 } },
            { text: '5 小時以下', scores: { S: 0, Z: 0, M: 0, C: 2 } },
        ],
    },
    {
        id: 12,
        text: '你最近是否有以下身體狀況？（選擇最符合的）',
        options: [
            { text: '肩頸僵硬、頭痛', scores: { S: 3, Z: 0, M: 0, C: 0 } },
            { text: '眼睛乾澀、容易疲勞', scores: { S: 1, Z: 2, M: 0, C: 0 } },
            { text: '皮膚乾燥、容易過敏', scores: { S: 0, Z: 0, M: 3, C: 0 } },
            { text: '以上都沒有', scores: { S: 0, Z: 0, M: 0, C: 2 } },
        ],
    },
    {
        id: 13,
        text: '你睡前通常在做什麼？',
        options: [
            { text: '滑手機或看影片', scores: { S: 1, Z: 2, M: 0, C: 0 } },
            { text: '工作或處理事情', scores: { S: 3, Z: 0, M: 0, C: 0 } },
            { text: '看書或聽音樂放鬆', scores: { S: 0, Z: 0, M: 0, C: 2 } },
            { text: '進行睡前保養程序', scores: { S: 0, Z: 0, M: 1, C: 1 } },
        ],
    },
    {
        id: 14,
        text: '你對目前使用的洗髮 / 頭皮產品滿意嗎？',
        options: [
            { text: '不太滿意，覺得沒什麼效果', scores: { S: 1, Z: 0, M: 0, C: 2 } },
            { text: '用了容易敏感或不舒服', scores: { S: 0, Z: 0, M: 3, C: 0 } },
            { text: '還可以，但想找更好的', scores: { S: 0, Z: 0, M: 0, C: 2 } },
            { text: '很滿意目前的產品', scores: { S: 0, Z: 0, M: 0, C: 1 } },
        ],
    },
    {
        id: 15,
        text: '如果可以改善一個問題，你最想改善什麼？',
        options: [
            { text: '減輕壓力，讓頭皮更健康', scores: { S: 3, Z: 0, M: 0, C: 0 } },
            { text: '提升睡眠品質，一夜好眠', scores: { S: 0, Z: 3, M: 0, C: 0 } },
            { text: '改善頭皮敏感，不再搔癢泛紅', scores: { S: 0, Z: 0, M: 3, C: 0 } },
            { text: '整體提升生活品質與養護習慣', scores: { S: 0, Z: 0, M: 0, C: 3 } },
        ],
    },
];

// ─── 4 Result Types ─────────────────────────────────────────
const RESULTS = {
    S: {
        key: 'S',
        icon: '🔥',
        badge: '頭皮壓力型',
        title: '壓力山大型',
        subtitle: '你的頭皮正在替你承受壓力！',
        description:
            '長期的工作壓力和高強度生活節奏，已經悄悄反映在你的頭皮健康上。頭皮出油、緊繃甚至掉髮，都可能是壓力的信號。當身體持續處於緊張狀態，頭皮的血液循環會變差，毛囊得不到足夠的養分，進而影響髮質與頭皮環境。',
        recommendation:
            '建議每晚睡前進行 5 分鐘的頭皮按摩，搭配含有薰衣草、茶樹等舒壓精油成分的養護產品，從放鬆頭皮開始，為身心同步減壓。規律的頭皮養護不僅能改善頭皮出油問題，更能幫助你在睡前進入放鬆狀態，提升整體睡眠品質。',
        color: '#E74C6F',
    },
    Z: {
        key: 'Z',
        icon: '🌙',
        badge: '睡眠困擾型',
        title: '夜貓失眠型',
        subtitle: '好好睡一覺，是你最需要的！',
        description:
            '翻來覆去難以入睡、半夜容易驚醒、早上起來依然疲憊⋯⋯這些睡眠問題正在慢慢侵蝕你的健康。長期睡眠不足不僅影響精神狀態，更會導致頭皮環境惡化、油脂分泌失調，甚至加速掉髮。睡眠是身體修復的黃金時段，錯過了就難以彌補。',
        recommendation:
            '建議建立固定的睡前儀式：在睡前 30 分鐘放下手機，使用含有助眠成分（如洋甘菊、薰衣草）的頭皮養護精華進行溫柔按摩。透過嗅覺與觸覺的雙重舒緩，幫助大腦切換到休息模式，讓你每晚都能享受深層好眠。',
        color: '#5B6FE8',
    },
    M: {
        key: 'M',
        icon: '🍃',
        badge: '頭皮敏感型',
        title: '敏感脆弱型',
        subtitle: '你的頭皮需要被溫柔對待！',
        description:
            '你的頭皮比一般人更加敏感，容易受到外在環境刺激而產生泛紅、搔癢、乾燥等不適反應。不當的洗護產品、季節變化、甚至心理壓力都可能成為誘因。敏感型頭皮需要更溫和的照護方式，過度清潔或使用含有刺激成分的產品只會讓情況更嚴重。',
        recommendation:
            '選擇無矽靈、無酒精、pH 值平衡的溫和養護配方是關鍵。建議使用含有積雪草、蘆薈、神經醯胺等修護成分的頭皮精華，每天輕柔塗抹於頭皮，重建頭皮屏障。同時避免過度洗頭（建議每隔一天洗一次），讓頭皮有足夠的時間自我修復。',
        color: '#45B7A0',
    },
    C: {
        key: 'C',
        icon: '✨',
        badge: '綜合養護型',
        title: '全方位養護型',
        subtitle: '預防勝於治療，養護從日常開始！',
        description:
            '雖然目前沒有嚴重的頭皮或睡眠困擾，但日常保養不能忽視。許多頭皮問題都是在不知不覺中慢慢累積的，等到出現明顯症狀時往往已經需要花更多心力來修復。現在開始建立良好的養護習慣，是最聰明的投資。',
        recommendation:
            '建議將頭皮養護納入每日保養流程：每週使用一次頭皮去角質產品，每天使用輕盈的頭皮養護精華維持健康環境，並搭配睡前 3 分鐘的簡單按摩。持之以恆的基礎保養，比臨時抱佛腳的密集治療更有效，也更能讓你維持一頭健康亮麗的秀髮。',
        color: '#F0A030',
    },
};

// ─── Tracking Module ────────────────────────────────────────
const Tracker = {
    sessionId: null,
    liffUserId: null,

    init() {
        this.sessionId =
            Date.now().toString(36) + Math.random().toString(36).slice(2, 8);
        this._log('quiz_start');
    },

    setUser(userId) {
        this.liffUserId = userId;
    },

    logAnswer(questionId, optionIndex) {
        this._log('answer', { questionId, optionIndex });
    },

    logResult(resultType, scores) {
        this._log('quiz_complete', { resultType, scores });
    },

    logCtaClick(resultType) {
        this._log('cta_click', { resultType });
        this._incrementClickCount(resultType);
    },

    logShare(resultType) {
        this._log('share', { resultType });
    },

    buildSalesUrl(resultType) {
        let base = CONFIG.SALES_URL;
        try {
            const url = new URL(base);
            url.searchParams.set('utm_source', 'line_liff');
            url.searchParams.set('utm_medium', 'quiz');
            url.searchParams.set('utm_campaign', 'scalp_sleep_quiz');
            url.searchParams.set('utm_content', resultType);
            url.searchParams.set('ref', this.sessionId);
            if (this.liffUserId) {
                url.searchParams.set('uid', this.liffUserId);
            }
            return url.toString();
        } catch {
            const sep = base.includes('?') ? '&' : '?';
            return (
                base +
                sep +
                'utm_source=line_liff&utm_medium=quiz&utm_campaign=scalp_sleep_quiz&utm_content=' +
                resultType +
                '&ref=' +
                this.sessionId
            );
        }
    },

    getClickStats() {
        try {
            return JSON.parse(localStorage.getItem('quiz_cta_clicks') || '{}');
        } catch {
            return {};
        }
    },

    _incrementClickCount(resultType) {
        try {
            const stats = this.getClickStats();
            stats[resultType] = (stats[resultType] || 0) + 1;
            stats._total = (stats._total || 0) + 1;
            stats._lastClick = new Date().toISOString();
            localStorage.setItem('quiz_cta_clicks', JSON.stringify(stats));
        } catch { /* storage full or disabled */ }
    },

    _log(event, data) {
        const entry = {
            event,
            sessionId: this.sessionId,
            liffUserId: this.liffUserId,
            timestamp: new Date().toISOString(),
            ...data,
        };

        try {
            const logs = JSON.parse(
                localStorage.getItem('quiz_tracking') || '[]'
            );
            if (logs.length > 500) logs.splice(0, logs.length - 400);
            logs.push(entry);
            localStorage.setItem('quiz_tracking', JSON.stringify(logs));
        } catch { /* storage full or disabled */ }

        if (CONFIG.TRACKING_ENDPOINT) {
            try {
                const blob = new Blob([JSON.stringify(entry)], {
                    type: 'application/json',
                });
                navigator.sendBeacon(CONFIG.TRACKING_ENDPOINT, blob);
            } catch { /* beacon failed */ }
        }

        if (typeof gtag === 'function') {
            gtag('event', event, { ...data, session_id: this.sessionId });
        }

        console.log('[Tracker]', event, data || '');
    },
};

// ─── Quiz State ─────────────────────────────────────────────
const Quiz = {
    currentIndex: 0,
    answers: [],
    scores: { S: 0, Z: 0, M: 0, C: 0 },
    resultType: null,

    reset() {
        this.currentIndex = 0;
        this.answers = [];
        this.scores = { S: 0, Z: 0, M: 0, C: 0 };
        this.resultType = null;
    },

    answer(optionIndex) {
        const q = QUESTIONS[this.currentIndex];
        const option = q.options[optionIndex];

        this.answers[this.currentIndex] = optionIndex;
        Tracker.logAnswer(q.id, optionIndex);

        for (const key of Object.keys(option.scores)) {
            this.scores[key] += option.scores[key];
        }
    },

    undoAnswer() {
        if (this.currentIndex <= 0) return;
        const prevIndex = this.currentIndex - 1;
        const prevOption = QUESTIONS[prevIndex].options[this.answers[prevIndex]];
        if (prevOption) {
            for (const key of Object.keys(prevOption.scores)) {
                this.scores[key] -= prevOption.scores[key];
            }
        }
        this.currentIndex = prevIndex;
    },

    next() {
        if (this.currentIndex < QUESTIONS.length - 1) {
            this.currentIndex++;
            return true;
        }
        return false;
    },

    calculateResult() {
        let maxKey = 'C';
        let maxScore = -1;
        const priority = ['S', 'Z', 'M', 'C'];
        for (const key of priority) {
            if (this.scores[key] > maxScore) {
                maxScore = this.scores[key];
                maxKey = key;
            }
        }
        this.resultType = maxKey;
        Tracker.logResult(maxKey, { ...this.scores });
        return RESULTS[maxKey];
    },

    get total() {
        return QUESTIONS.length;
    },

    get currentQuestion() {
        return QUESTIONS[this.currentIndex];
    },
};

// ─── UI Controller ──────────────────────────────────────────
const UI = {
    screens: {},
    els: {},

    init() {
        this.screens = {
            welcome: document.getElementById('screen-welcome'),
            quiz: document.getElementById('screen-quiz'),
            loading: document.getElementById('screen-loading'),
            result: document.getElementById('screen-result'),
        };

        this.els = {
            btnStart: document.getElementById('btn-start'),
            btnBack: document.getElementById('btn-back'),
            btnCta: document.getElementById('btn-cta'),
            btnShare: document.getElementById('btn-share'),
            btnRetry: document.getElementById('btn-retry'),
            qCurrent: document.getElementById('q-current'),
            qTotal: document.getElementById('q-total'),
            progressFill: document.getElementById('progress-fill'),
            questionContainer: document.getElementById('question-container'),
            questionText: document.getElementById('question-text'),
            optionsContainer: document.getElementById('options-container'),
            loadingProgress: document.getElementById('loading-progress'),
            resultBadge: document.getElementById('result-badge'),
            resultIcon: document.getElementById('result-icon'),
            resultTitle: document.getElementById('result-title'),
            resultSubtitle: document.getElementById('result-subtitle'),
            resultDescription: document.getElementById('result-description'),
            resultRecommendation: document.getElementById('result-recommendation'),
            scoreBars: document.getElementById('score-bars'),
        };

        this.els.qTotal.textContent = Quiz.total;
        this.bindEvents();
    },

    bindEvents() {
        this.els.btnStart.addEventListener('click', () => this.startQuiz());
        this.els.btnBack.addEventListener('click', () => this.goBack());
        this.els.btnCta.addEventListener('click', () => this.onCtaClick());
        this.els.btnShare.addEventListener('click', () => this.onShare());
        this.els.btnRetry.addEventListener('click', () => this.retry());
    },

    switchScreen(name) {
        for (const [key, el] of Object.entries(this.screens)) {
            if (key === name) {
                el.classList.add('active');
                el.classList.remove('exit');
            } else {
                el.classList.remove('active');
                el.classList.add('exit');
            }
        }
    },

    startQuiz() {
        Quiz.reset();
        Tracker.init();
        this.switchScreen('quiz');
        this.renderQuestion('enter-right');
    },

    renderQuestion(animClass) {
        const q = Quiz.currentQuestion;
        const idx = Quiz.currentIndex;

        this.els.qCurrent.textContent = idx + 1;
        this.els.progressFill.style.width =
            ((idx / Quiz.total) * 100).toFixed(1) + '%';

        this.els.btnBack.classList.toggle('hidden', idx === 0);

        this.els.questionContainer.className = 'question-container ' + (animClass || 'enter-right');

        this.els.questionText.textContent = 'Q' + (idx + 1) + '. ' + q.text;

        const labels = ['A', 'B', 'C', 'D'];
        this.els.optionsContainer.innerHTML = '';
        q.options.forEach((opt, i) => {
            const btn = document.createElement('button');
            btn.className = 'option-btn';
            btn.innerHTML =
                '<span class="option-label">' + labels[i] + '</span>' +
                '<span class="option-text">' + opt.text + '</span>';
            btn.addEventListener('click', () => this.selectOption(i));
            this.els.optionsContainer.appendChild(btn);
        });
    },

    selectOption(index) {
        const btns = this.els.optionsContainer.querySelectorAll('.option-btn');
        btns.forEach((b) => b.classList.remove('selected'));
        btns[index].classList.add('selected');

        Quiz.answer(index);

        setTimeout(() => {
            if (Quiz.next()) {
                this.renderQuestion('enter-right');
            } else {
                this.showLoading();
            }
        }, 350);
    },

    goBack() {
        Quiz.undoAnswer();
        this.renderQuestion('fadeSlideInFromLeft');
        this.els.questionContainer.className = 'question-container';
        void this.els.questionContainer.offsetWidth;
        this.els.questionContainer.style.animation =
            'fadeSlideInFromLeft .35s var(--ease)';
        this.els.questionContainer.addEventListener(
            'animationend',
            () => {
                this.els.questionContainer.style.animation = '';
            },
            { once: true }
        );
    },

    showLoading() {
        this.switchScreen('loading');
        this.els.progressFill.style.width = '100%';

        let progress = 0;
        const interval = setInterval(() => {
            progress += Math.random() * 12 + 3;
            if (progress >= 100) {
                progress = 100;
                clearInterval(interval);
                setTimeout(() => this.showResult(), 400);
            }
            this.els.loadingProgress.style.width = progress + '%';
        }, 150);
    },

    showResult() {
        const result = Quiz.calculateResult();
        const typeKey = result.key;

        this.els.resultBadge.textContent = result.badge;
        this.els.resultBadge.className = 'result-badge type-' + typeKey;

        this.els.resultIcon.textContent = result.icon;
        this.els.resultTitle.textContent = result.title;
        this.els.resultSubtitle.textContent = result.subtitle;
        this.els.resultDescription.textContent = result.description;
        this.els.resultRecommendation.textContent = result.recommendation;

        this.els.btnCta.className = 'btn-cta type-' + typeKey;

        this.renderScoreBars();

        const isLiff =
            typeof liff !== 'undefined' && liff.isInClient && liff.isInClient();
        this.els.btnShare.classList.toggle('hidden', !isLiff);

        this.switchScreen('result');
    },

    renderScoreBars() {
        const scores = Quiz.scores;
        const maxPossible = Math.max(...Object.values(scores), 1);

        const items = [
            { key: 'S', label: '頭皮壓力' },
            { key: 'Z', label: '睡眠困擾' },
            { key: 'M', label: '頭皮敏感' },
            { key: 'C', label: '綜合養護' },
        ];

        this.els.scoreBars.innerHTML = '';
        items.forEach((item) => {
            const pct = Math.round((scores[item.key] / maxPossible) * 100);
            const row = document.createElement('div');
            row.className = 'score-row';
            row.innerHTML =
                '<span class="score-label">' + item.label + '</span>' +
                '<div class="score-track">' +
                '<div class="score-bar-fill type-' + item.key + '" style="width:0"></div>' +
                '</div>' +
                '<span class="score-value">' + scores[item.key] + '</span>';
            this.els.scoreBars.appendChild(row);
        });

        requestAnimationFrame(() => {
            setTimeout(() => {
                this.els.scoreBars.querySelectorAll('.score-bar-fill').forEach((bar, i) => {
                    const pct = Math.round(
                        (scores[items[i].key] / maxPossible) * 100
                    );
                    bar.style.width = pct + '%';
                });
            }, 100);
        });
    },

    onCtaClick() {
        const typeKey = Quiz.resultType;
        Tracker.logCtaClick(typeKey);
        const url = Tracker.buildSalesUrl(typeKey);

        if (typeof liff !== 'undefined' && liff.isInClient && liff.isInClient()) {
            liff.openWindow({ url, external: true });
        } else {
            window.open(url, '_blank');
        }
    },

    onShare() {
        if (typeof liff === 'undefined' || !liff.isApiAvailable || !liff.isApiAvailable('shareTargetPicker')) {
            alert('分享功能僅在 LINE 中可用');
            return;
        }

        const result = RESULTS[Quiz.resultType];
        Tracker.logShare(Quiz.resultType);

        liff.shareTargetPicker([
            {
                type: 'flex',
                altText: '我的頭皮養護 × 睡眠品質檢測結果：' + result.title,
                contents: {
                    type: 'bubble',
                    hero: {
                        type: 'box',
                        layout: 'vertical',
                        contents: [
                            {
                                type: 'text',
                                text: result.icon,
                                size: 'xxl',
                                align: 'center',
                            },
                        ],
                        paddingAll: '20px',
                        backgroundColor: result.color + '22',
                    },
                    body: {
                        type: 'box',
                        layout: 'vertical',
                        contents: [
                            {
                                type: 'text',
                                text: result.badge,
                                color: result.color,
                                size: 'sm',
                                weight: 'bold',
                            },
                            {
                                type: 'text',
                                text: result.title,
                                size: 'xl',
                                weight: 'bold',
                                margin: 'sm',
                            },
                            {
                                type: 'text',
                                text: result.subtitle,
                                size: 'sm',
                                color: '#888888',
                                margin: 'sm',
                                wrap: true,
                            },
                        ],
                    },
                    footer: {
                        type: 'box',
                        layout: 'vertical',
                        contents: [
                            {
                                type: 'button',
                                action: {
                                    type: 'uri',
                                    label: '我也要測！',
                                    uri: window.location.href.split('?')[0],
                                },
                                style: 'primary',
                                color: '#6B5CE7',
                            },
                        ],
                    },
                },
            },
        ]).catch(() => {});
    },

    retry() {
        this.switchScreen('welcome');
    },
};

// ─── LIFF Integration ───────────────────────────────────────
const LiffApp = {
    async init() {
        if (!CONFIG.LIFF_ID || typeof liff === 'undefined') {
            console.log('[LIFF] No LIFF ID configured — running in standalone mode');
            return;
        }
        try {
            await liff.init({ liffId: CONFIG.LIFF_ID });
            console.log('[LIFF] Initialized. isInClient:', liff.isInClient());
            if (liff.isLoggedIn()) {
                try {
                    const profile = await liff.getProfile();
                    Tracker.setUser(profile.userId);
                    console.log('[LIFF] User:', profile.displayName);
                } catch (e) {
                    console.warn('[LIFF] Could not get profile:', e);
                }
            }
        } catch (err) {
            console.warn('[LIFF] Init failed — running in standalone mode:', err);
        }
    },
};

// ─── Bootstrap ──────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
    UI.init();
    LiffApp.init();
});
