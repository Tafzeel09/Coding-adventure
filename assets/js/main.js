/* ============================================================
   CODING ADVENTURE — Main UI Engine  (complete, bug-fixed)
   Sounds · Toasts · Nav · Kingdom · Quiz · Challenge · Pages
   ============================================================ */

/* ─── SOUNDS (Web Audio API — zero files needed) ────────────── */
const Sounds = (() => {
  let ctx = null;

  function init() {
    try { ctx = new (window.AudioContext || window.webkitAudioContext)(); } catch {}
  }

  function tone(notes, type = 'sine', vol = 0.14) {
    if (!ctx || !Game.getState().soundEnabled) return;
    notes.forEach(([freq, start, dur]) => {
      try {
        const osc  = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.type = type;
        osc.frequency.setValueAtTime(freq, ctx.currentTime + start);
        gain.gain.setValueAtTime(vol, ctx.currentTime + start);
        gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + start + dur);
        osc.start(ctx.currentTime + start);
        osc.stop(ctx.currentTime + start + dur + 0.05);
      } catch {}
    });
  }

  return {
    init,
    correct:     () => tone([[523,0,.1],[659,.12,.1],[784,.24,.18]], 'sine', .14),
    wrong:       () => tone([[220,0,.18],[180,.12,.2]], 'sawtooth', .09),
    complete:    () => tone([[523,0,.08],[659,.1,.08],[784,.2,.08],[1047,.32,.2]], 'sine', .13),
    levelUp:     () => tone([[523,0,.1],[659,.14,.1],[784,.28,.1],[1047,.42,.28]], 'sine', .18),
    achievement: () => tone([[784,0,.12],[1047,.16,.12],[1319,.32,.22]], 'sine', .16),
    click:       () => tone([[440,0,.04]], 'sine', .06),
    unlock:      () => tone([[659,0,.08],[784,.1,.08],[1047,.2,.15]], 'sine', .12)
  };
})();

/* ─── TOAST NOTIFICATIONS ────────────────────────────────────── */
const Toast = (() => {
  let box;

  function init() {
    box = document.getElementById('toasts');
    if (!box) {
      box = document.createElement('div');
      box.id = 'toasts';
      box.className = 'toast-container';
      document.body.appendChild(box);
    }
  }

  function show({ icon = '✨', title = '', message = '', xp = 0, type = '', dur = 4000 }) {
    if (!box) init();
    const el = document.createElement('div');
    el.className = `toast ${type}`;
    el.innerHTML = `
      <div class="toast-icon">${icon}</div>
      <div class="toast-content">
        <div class="toast-title">${title}</div>
        ${message ? `<div class="toast-msg">${message}</div>` : ''}
        ${xp     ? `<div class="toast-xp">+${xp} XP earned! ⚡</div>` : ''}
      </div>
      <button style="background:none;border:none;color:var(--text2);cursor:pointer;font-size:1rem;padding:4px;line-height:1;align-self:flex-start" onclick="this.closest('.toast').remove()">×</button>`;
    box.appendChild(el);
    const t = setTimeout(() => {
      el.classList.add('hide');
      setTimeout(() => el.remove(), 380);
    }, dur);
    el.querySelector('button').addEventListener('click', () => clearTimeout(t));
  }

  return { init, show };
})();

/* ─── FLOATING XP PARTICLE ──────────────────────────────────── */
function spawnXP(amount, refEl) {
  const p = document.createElement('div');
  p.className = 'particle';
  p.textContent = `+${amount} XP`;
  const rect = refEl
    ? refEl.getBoundingClientRect()
    : { left: window.innerWidth / 2, top: window.innerHeight / 2, width: 0 };
  p.style.left = `${rect.left + rect.width / 2}px`;
  p.style.top  = `${rect.top + window.scrollY}px`;
  document.body.appendChild(p);
  setTimeout(() => p.remove(), 1400);
}

/* ─── UTILS ──────────────────────────────────────────────────── */
function esc(s) {
  return String(s)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function animCount(el, target, ms = 900) {
  if (!el) return;
  const start = performance.now();
  const from  = parseInt(el.textContent) || 0;
  const step  = ts => {
    const p = Math.min((ts - start) / ms, 1);
    const ease = 1 - Math.pow(1 - p, 3);
    el.textContent = Math.round(from + (target - from) * ease);
    if (p < 1) requestAnimationFrame(step);
    else el.textContent = target;
  };
  requestAnimationFrame(step);
}

/* ─── NAV ────────────────────────────────────────────────────── */
function initNav() {
  /* theme */
  const toggle = document.getElementById('themeToggle');
  const applyTheme = t => {
    document.documentElement.setAttribute('data-theme', t);
    if (toggle) toggle.textContent = t === 'light' ? '☀️' : '🌙';
  };
  applyTheme(Game.getState().theme || 'dark');
  if (toggle) {
    toggle.addEventListener('click', () => {
      const t = document.documentElement.getAttribute('data-theme') === 'light' ? 'dark' : 'light';
      applyTheme(t); Game.setTheme(t); Sounds.click();
    });
  }

  /* sound toggle */
  const soundBtn = document.getElementById('soundToggle');
  const applySoundIcon = on => { if (soundBtn) soundBtn.textContent = on ? '🔊' : '🔇'; };
  applySoundIcon(Game.getState().soundEnabled !== false);
  if (soundBtn) {
    soundBtn.addEventListener('click', () => {
      const on = !Game.getState().soundEnabled;
      Game.setSoundEnabled(on);
      applySoundIcon(on);
      Sounds.click();
    });
  }

  /* hamburger */
  const ham  = document.getElementById('hamburger');
  const menu = document.getElementById('mobileMenu');
  if (ham && menu) {
    ham.addEventListener('click', () => { menu.classList.toggle('open'); Sounds.click(); });
    document.addEventListener('click', e => {
      if (!ham.contains(e.target) && !menu.contains(e.target)) menu.classList.remove('open');
    });
  }

  /* active link */
  const page = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-link').forEach(a => {
    if (a.getAttribute('href') === page) a.classList.add('active');
  });

  updateNavStats();
}

function updateNavStats() {
  const st = Game.getState();
  const xp = document.getElementById('nav-xp');
  const lv = document.getElementById('nav-level');
  if (xp) xp.textContent = `⚡ ${st.xp} XP`;
  if (lv) lv.textContent = `Lv.${st.level} ${st.levelName}`;
}

/* ─── ACHIEVEMENTS / LEVEL UP HANDLING ──────────────────────── */
function handleNewAchievements(ids) {
  ids.forEach((id, i) => {
    const ach = GAME_DATA.achievements.find(a => a.id === id);
    if (!ach) return;
    setTimeout(() => {
      Sounds.achievement();
      Toast.show({ icon: ach.icon, title: 'Achievement Unlocked! 🎉', message: ach.name, type: 'achievement', dur: 6000 });
    }, i * 800 + 400);
  });
}

function handleLevelUp(result) {
  if (!result || !result.leveledUp) return;
  Sounds.levelUp();
  Toast.show({ icon: '⬆️', title: `Level ${result.level}! ${result.levelName}`, message: 'Keep going — the next level awaits!', type: 'level-up', dur: 6000 });
  Game.saveToLeaderboard();
  showLevelUpBanner(result.level, result.levelName);
}

function showLevelUpBanner(level, name) {
  const banner = document.createElement('div');
  banner.style.cssText = `
    position:fixed;inset:0;z-index:9999;display:flex;align-items:center;justify-content:center;
    background:rgba(0,0,0,.7);backdrop-filter:blur(8px);
    animation:fadeIn .3s ease;`;
  banner.innerHTML = `
    <div style="text-align:center;animation:fadeIn .4s ease">
      <div style="font-size:4rem;margin-bottom:16px">⬆️</div>
      <div style="font-family:var(--fd);font-size:2rem;font-weight:900;
                  background:linear-gradient(135deg,var(--gold-l),var(--gold));
                  -webkit-background-clip:text;-webkit-text-fill-color:transparent;
                  background-clip:text;margin-bottom:8px">Level ${level}!</div>
      <div style="font-family:var(--fd);font-size:1rem;color:var(--text2);margin-bottom:28px">${name}</div>
      <button class="btn btn-primary" onclick="this.closest('div[style]').remove()">Continue Adventure →</button>
    </div>`;
  document.body.appendChild(banner);
  setTimeout(() => banner.remove(), 5000);
}

/* ─── SETTINGS MODAL (reset game) ───────────────────────────── */
function openSettings() {
  const modal = document.getElementById('settings-modal');
  if (modal) { modal.classList.add('open'); return; }

  const el = document.createElement('div');
  el.id = 'settings-modal';
  el.className = 'modal-overlay open';
  el.innerHTML = `
    <div class="modal">
      <div class="modal-icon">⚙️</div>
      <div class="modal-title">Settings</div>
      <div class="modal-text">
        Manage your Coding Adventure profile and preferences.
      </div>
      <div style="display:flex;flex-direction:column;gap:10px;margin-bottom:24px;text-align:left">
        <div style="display:flex;align-items:center;justify-content:space-between;padding:12px 16px;background:var(--bg2);border-radius:10px;border:1px solid var(--border)">
          <span style="font-size:.88rem;font-weight:600">🔊 Sound Effects</span>
          <button id="modal-sound-btn" class="btn btn-ghost btn-sm" onclick="toggleSoundFromModal(this)">
            ${Game.getState().soundEnabled !== false ? 'ON 🔊' : 'OFF 🔇'}
          </button>
        </div>
        <div style="display:flex;align-items:center;justify-content:space-between;padding:12px 16px;background:var(--bg2);border-radius:10px;border:1px solid var(--border)">
          <div>
            <span style="font-size:.88rem;font-weight:600">🗑️ Reset All Progress</span>
            <div style="font-size:.75rem;color:var(--text2);margin-top:3px">This cannot be undone</div>
          </div>
          <button class="btn btn-ghost btn-sm" style="border-color:var(--err);color:var(--err)" onclick="confirmReset()">Reset</button>
        </div>
      </div>
      <div class="modal-actions">
        <button class="btn btn-primary" onclick="document.getElementById('settings-modal').classList.remove('open')">Close</button>
      </div>
    </div>`;
  el.addEventListener('click', e => { if (e.target === el) el.classList.remove('open'); });
  document.body.appendChild(el);
}

window.toggleSoundFromModal = btn => {
  const on = !Game.getState().soundEnabled;
  Game.setSoundEnabled(on);
  btn.textContent = on ? 'ON 🔊' : 'OFF 🔇';
  const navBtn = document.getElementById('soundToggle');
  if (navBtn) navBtn.textContent = on ? '🔊' : '🔇';
  Sounds.click();
};

window.confirmReset = () => {
  if (!confirm('⚠️ Reset ALL progress? This will erase XP, lessons, achievements, and leaderboard data. This cannot be undone.')) return;
  Game.resetGame();
  localStorage.removeItem('ca_leaderboard_v2');
  Toast.show({ icon: '🗑️', title: 'Progress reset. Starting fresh!', dur: 3000 });
  setTimeout(() => { window.location.href = 'index.html'; }, 1500);
};

window.openSettings = openSettings;

/* ═══════════════════════════════════════════════════════════
   KINGDOM PAGE
   ═══════════════════════════════════════════════════════════ */
function initKingdomPage(kingdomId) {
  const kingdom = GAME_DATA.kingdoms[kingdomId];
  if (!kingdom) return;

  const sidebar     = document.getElementById('sidebar');
  const contentArea = document.getElementById('content-area');
  if (!sidebar || !contentArea) return;

  renderSidebar(kingdom, sidebar);
  renderWelcome(kingdom, contentArea);

  // Honor ?lesson= URL param
  const startId = new URLSearchParams(window.location.search).get('lesson');
  if (startId) {
    const lesson = kingdom.lessons.find(l => l.id === startId);
    if (lesson) setTimeout(() => openLesson(lesson, kingdom), 150);
  }
}

/* ─── SIDEBAR ────────────────────────────────────────────────── */
function renderSidebar(kingdom, sidebar) {
  const stats = Game.getStats();
  const kp    = stats.kingdomProgress[kingdom.id];

  const lessonsHTML = kingdom.lessons.map((l, i) => {
    const done = Game.isLessonComplete(l.id);
    return `<div class="lesson-item ${done ? 'completed' : ''}" data-lesson="${l.id}" role="button" tabindex="0"
        aria-label="${l.title} — ${done ? 'Completed' : 'Not completed'}">
      <div class="li-num">${done ? '✓' : i + 1}</div>
      <span class="li-name">${l.icon} ${l.title}</span>
      <span class="li-xp">+${l.xp}</span>
    </div>`;
  }).join('');

  const challengesHTML = kingdom.challenges.map(c => {
    const done = Game.isChallengeComplete(c.id);
    return `<div class="ch-item ${done ? 'completed' : ''}" data-challenge="${c.id}" role="button" tabindex="0">
      <span class="ch-icon">${done ? '✅' : c.icon}</span>
      <span>${c.title}</span>
      <span style="margin-left:auto;font-family:var(--fd);font-size:.62rem;color:var(--gold)">+${c.xp}</span>
    </div>`;
  }).join('');

  sidebar.innerHTML = `
    <div class="sidebar-header">
      <div class="sidebar-king-icon">${kingdom.icon}</div>
      <div class="sidebar-king-name">${kingdom.name}</div>
      <div class="sidebar-king-desc">${kingdom.description}</div>
      <div class="k-progress mt-8">
        <div class="progress-track"><div class="progress-fill" id="sb-fill" style="width:0%"></div></div>
        <span class="progress-label" id="sb-pct">${kp.pct}%</span>
      </div>
      <div style="font-size:.72rem;color:var(--text2);margin-top:4px">${kp.completed}/${kp.total} lessons done</div>
    </div>
    <div class="lesson-list" id="lesson-list">${lessonsHTML}</div>
    <div class="challenges-sidebar">
      <div class="ch-title">🎯 Challenges</div>
      ${challengesHTML}
    </div>`;

  // Animate progress fill
  requestAnimationFrame(() => {
    const fill = document.getElementById('sb-fill');
    if (fill) fill.style.width = `${kp.pct}%`;
  });

  // Lesson click / keyboard
  sidebar.querySelectorAll('.lesson-item').forEach(item => {
    const activate = () => {
      sidebar.querySelectorAll('.lesson-item').forEach(i => i.classList.remove('active'));
      item.classList.add('active');
      const lesson = kingdom.lessons.find(l => l.id === item.dataset.lesson);
      if (lesson) openLesson(lesson, kingdom);
      Sounds.click();
      if (window.innerWidth < 1000) window.scrollTo({ top: 0, behavior: 'smooth' });
    };
    item.addEventListener('click', activate);
    item.addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' ') activate(); });
  });

  // Challenge click / keyboard
  sidebar.querySelectorAll('.ch-item').forEach(item => {
    const activate = () => {
      const challenge = kingdom.challenges.find(c => c.id === item.dataset.challenge);
      if (challenge) openChallengeOnly(challenge, kingdom);
      Sounds.click();
      if (window.innerWidth < 1000) window.scrollTo({ top: 0, behavior: 'smooth' });
    };
    item.addEventListener('click', activate);
    item.addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' ') activate(); });
  });
}

/* ─── WELCOME SPLASH ─────────────────────────────────────────── */
function renderWelcome(kingdom, contentArea) {
  const stats = Game.getStats();
  const kp    = stats.kingdomProgress[kingdom.id];
  const col   = { html:'var(--html)', css:'var(--css)', javascript:'var(--js)', python:'var(--py)' }[kingdom.id];

  contentArea.innerHTML = `
    <div class="welcome-content">
      <div class="big-icon" style="animation:fadeIn .6s ease">${kingdom.icon}</div>
      <h2 class="page-title"
        style="background:linear-gradient(135deg,#fff,${col});
               -webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text">
        ${kingdom.name}
      </h2>
      <p class="page-subtitle">${kingdom.description}</p>
      <div style="display:flex;gap:24px;justify-content:center;margin:24px 0;flex-wrap:wrap">
        <div class="stat-card" style="text-align:center;min-width:120px">
          <div class="stat-value" style="font-size:1.4rem">${kp.completed}/${kp.total}</div>
          <div class="stat-label">Lessons Done</div>
        </div>
        <div class="stat-card" style="text-align:center;min-width:120px">
          <div class="stat-value" style="font-size:1.4rem">${kp.pct}%</div>
          <div class="stat-label">Complete</div>
        </div>
        <div class="stat-card" style="text-align:center;min-width:120px">
          <div class="stat-value" style="font-size:1.4rem">${kingdom.challenges.filter(c => Game.isChallengeComplete(c.id)).length}/${kingdom.challenges.length}</div>
          <div class="stat-label">Challenges Done</div>
        </div>
      </div>
      ${kp.pct === 100
        ? `<div style="padding:16px 24px;background:var(--ok-bg);border:1px solid var(--ok);border-radius:14px;margin-bottom:20px">
             <div style="font-weight:700;color:var(--ok);font-size:1rem">🎉 Kingdom Complete!</div>
             <div style="font-size:.83rem;color:var(--text2);margin-top:4px">You've mastered all ${kingdom.name} lessons!</div>
           </div>`
        : `<p class="text-muted" style="margin-bottom:24px">← Select a lesson from the sidebar to begin!</p>`}
      ${kp.completed === 0
        ? `<button class="btn btn-primary" id="start-first-btn">Start First Lesson ▶</button>` : ''}
    </div>`;

  const startBtn = document.getElementById('start-first-btn');
  if (startBtn) {
    startBtn.addEventListener('click', () => {
      const first = document.querySelector('.lesson-item');
      if (first) first.click();
    });
  }
}

/* ─── OPEN LESSON ────────────────────────────────────────────── */
function openLesson(lesson, kingdom) {
  const contentArea = document.getElementById('content-area');
  if (!contentArea) return;

  const alreadyDone = Game.isLessonComplete(lesson.id);
  const prevScore   = Game.getQuizScore(lesson.id);
  const lessonIdx   = kingdom.lessons.findIndex(l => l.id === lesson.id);
  const nextLesson  = kingdom.lessons[lessonIdx + 1] || null;

  contentArea.innerHTML = `
    <div class="lesson-view" id="lesson-view">
      <!-- HEADER -->
      <div class="lesson-header">
        <h2>${lesson.icon} ${lesson.title}</h2>
        <div style="display:flex;align-items:center;gap:8px;flex-wrap:wrap">
          ${alreadyDone ? '<span style="font-size:.72rem;background:var(--ok-bg);color:var(--ok);border:1px solid var(--ok);border-radius:99px;padding:4px 10px;font-weight:700">✓ Completed</span>' : ''}
          <div class="xp-reward">⚡ +${lesson.xp} XP</div>
        </div>
      </div>

      <!-- INTRO -->
      <div class="lesson-intro">${lesson.intro}</div>

      <!-- CONCEPTS -->
      <div class="concept-list">
        <h3>📌 Key Concepts</h3>
        ${lesson.concepts.map(c => `<div class="concept-item">${c}</div>`).join('')}
      </div>

      <!-- CODE EXAMPLE -->
      <div class="code-block">
        <div class="code-header">
          <span class="code-lang">${lesson.codeLang}</span>
          <button class="copy-btn" id="copy-code-btn">📋 Copy Code</button>
        </div>
        <pre id="lesson-code">${lesson.code}</pre>
      </div>

      <!-- TIP -->
      <div class="code-tip"><strong>💡 Pro Tip:</strong> ${lesson.tip}</div>

      <!-- QUIZ -->
      <div class="quiz-section" id="quiz-section">
        <div class="quiz-header">
          <span class="quiz-title">🧠 Knowledge Quiz</span>
          <span class="quiz-progress-text" id="quiz-progress-text">
            ${prevScore ? `Best score: ${prevScore.score}/${prevScore.total} ${prevScore.perfect ? '⭐' : ''}` : 'Not attempted yet'}
          </span>
        </div>
        <div class="quiz-track"><div class="quiz-track-fill" id="quiz-track" style="width:0%"></div></div>
        <div id="quiz-container"></div>
      </div>

      <!-- CHALLENGES (rendered after quiz completes) -->
      <div class="challenge-section hidden" id="challenge-section"></div>

      <!-- NEXT LESSON NAV (rendered after quiz) -->
      <div id="lesson-nav"></div>
    </div>`;

  // Copy code button
  document.getElementById('copy-code-btn').addEventListener('click', function () {
    const code = document.getElementById('lesson-code').innerText;
    navigator.clipboard.writeText(code).then(() => {
      this.textContent = '✅ Copied!';
      setTimeout(() => { this.textContent = '📋 Copy Code'; }, 2000);
    }).catch(() => {
      this.textContent = '⚠️ Failed';
      setTimeout(() => { this.textContent = '📋 Copy Code'; }, 2000);
    });
  });

  startQuiz(lesson, kingdom, alreadyDone, nextLesson);
  contentArea.scrollTop = 0;
}

/* ─── QUIZ ENGINE ────────────────────────────────────────────── */
function startQuiz(lesson, kingdom, alreadyDone, nextLesson) {
  const questions  = lesson.quiz;
  let currentQ     = 0;
  let score        = 0;
  let answered     = false;

  const quizCont   = document.getElementById('quiz-container');
  const trackFill  = document.getElementById('quiz-track');
  const progressTx = document.getElementById('quiz-progress-text');

  function renderQuestion(idx) {
    answered = false;
    const q  = questions[idx];

    // Progress bar
    trackFill.style.width = `${(idx / questions.length) * 100}%`;
    progressTx.textContent = `Question ${idx + 1} of ${questions.length}`;

    quizCont.innerHTML = `
      <p class="quiz-question-text">${idx + 1}. ${q.q}</p>
      <div class="quiz-options" id="quiz-opts">
        ${q.opts.map((opt, i) => `
          <button class="quiz-option" data-index="${i}"
            aria-label="Option ${String.fromCharCode(65+i)}: ${opt.replace(/<[^>]+>/g,'')}">
            <span class="option-letter">${String.fromCharCode(65 + i)}</span>
            <span>${opt}</span>
          </button>`).join('')}
      </div>
      <div class="quiz-feedback" id="quiz-feedback"></div>
      <div style="text-align:right;margin-top:14px">
        <button class="btn btn-primary btn-sm hidden" id="next-btn">
          ${idx < questions.length - 1 ? 'Next →' : '🏆 See Results'}
        </button>
      </div>`;

    // Mouse click on option
    quizCont.querySelectorAll('.quiz-option').forEach(btn => {
      btn.addEventListener('click', () => selectAnswer(parseInt(btn.dataset.index)));
    });

    // Keyboard: press 1-4 or A-D to select answer
    const keyHandler = e => {
      if (answered) return;
      const map = { '1': 0, '2': 1, '3': 2, '4': 3, 'a': 0, 'b': 1, 'c': 2, 'd': 3 };
      const idx2 = map[e.key.toLowerCase()];
      if (idx2 !== undefined && idx2 < q.opts.length) {
        document.removeEventListener('keydown', keyHandler);
        selectAnswer(idx2);
      }
    };
    document.addEventListener('keydown', keyHandler);

    document.getElementById('next-btn').addEventListener('click', () => {
      document.removeEventListener('keydown', keyHandler);
      if (currentQ < questions.length - 1) { currentQ++; renderQuestion(currentQ); }
      else finishQuiz();
    });
  }

  function selectAnswer(chosen) {
    if (answered) return;
    answered = true;

    const q       = questions[currentQ];
    const correct = q.ans;
    const ok      = chosen === correct;

    quizCont.querySelectorAll('.quiz-option').forEach((b, i) => {
      b.disabled = true;
      if (i === correct) b.classList.add('correct');
      else if (i === chosen && !ok) b.classList.add('wrong');
    });

    const fb = document.getElementById('quiz-feedback');
    fb.className = `quiz-feedback show ${ok ? 'correct-fb' : 'wrong-fb'}`;
    fb.innerHTML = ok
      ? `✅ <strong>Correct!</strong> ${q.exp}`
      : `❌ <strong>Not quite.</strong> ${q.exp}`;

    if (ok) { score++; Sounds.correct(); } else { Sounds.wrong(); }

    document.getElementById('next-btn').classList.remove('hidden');
  }

  function finishQuiz() {
    const pct     = Math.round((score / questions.length) * 100);
    const perfect = score === questions.length;
    trackFill.style.width = '100%';

    // XP calculation
    let xpEarned = 0;
    Game.saveQuizScore(lesson.id, score, questions.length);
    const isNew = !alreadyDone && Game.completeLesson(lesson.id);
    if (isNew) xpEarned += lesson.xp;
    xpEarned += score * 5;
    if (perfect) xpEarned += 20;

    let result = null;
    if (xpEarned > 0) result = Game.addXP(xpEarned);

    // Score ring
    quizCont.innerHTML = `
      <div class="quiz-result">
        <div class="quiz-score-ring"
          style="background:conic-gradient(var(--gold) ${pct}%, var(--bg3) 0%)">
          <span class="quiz-score-num">${pct}%</span>
        </div>
        <h3 style="font-family:var(--fd);font-size:1rem;margin-bottom:8px;color:var(--white)">
          ${perfect ? '🌟 Perfect Score!' : score >= questions.length * 0.75 ? '🎉 Great Job!' : score >= questions.length * 0.5 ? '👍 Good Try!' : '📚 Keep Studying!'}
        </h3>
        <p style="color:var(--text2);margin-bottom:10px">
          You answered <strong style="color:var(--gold)">${score} of ${questions.length}</strong> correctly
        </p>
        ${xpEarned > 0
          ? `<div class="xp-reward" style="display:inline-flex;margin-bottom:18px">⚡ +${xpEarned} XP Earned!</div>`
          : `<p style="color:var(--text3);font-size:.78rem;margin-bottom:18px">Already completed — score was recorded but no extra XP.</p>`}
        <div style="display:flex;gap:10px;justify-content:center;flex-wrap:wrap">
          <button class="btn btn-outline btn-sm" id="retry-quiz-btn">🔁 Retry Quiz</button>
          ${kingdom.challenges.length > 0
            ? `<button class="btn btn-primary btn-sm" id="go-challenge-btn">🎯 Try Challenge</button>`
            : ''}
        </div>
      </div>`;

    // Retry
    document.getElementById('retry-quiz-btn').addEventListener('click', () => {
      score = 0; currentQ = 0; renderQuestion(0);
    });

    // Go to challenge
    const gcBtn = document.getElementById('go-challenge-btn');
    if (gcBtn) {
      gcBtn.addEventListener('click', () => {
        const cs = document.getElementById('challenge-section');
        if (cs) { cs.classList.remove('hidden'); cs.scrollIntoView({ behavior: 'smooth', block: 'start' }); }
      });
    }

    // Side-effects
    if (xpEarned > 0) {
      Sounds.complete();
      Toast.show({ icon: '⚡', title: `+${xpEarned} XP Earned!`, message: `Quiz: ${score}/${questions.length}${perfect ? ' — Perfect! 🌟' : ''}`, dur: 4000 });
      updateNavStats();
      spawnXP(xpEarned, quizCont);
    }
    if (result?.leveledUp)             handleLevelUp(result);
    if (result?.newAchievements?.length) handleNewAchievements(result.newAchievements);

    // Refresh sidebar to show checkmark
    const sidebar = document.getElementById('sidebar');
    if (sidebar) renderSidebar(kingdom, sidebar);

    // Render ALL challenges below
    const cs = document.getElementById('challenge-section');
    if (cs && kingdom.challenges.length > 0) {
      cs.classList.remove('hidden');
      renderAllChallenges(kingdom.challenges, cs);
    }

    // Next lesson nav
    renderLessonNav(nextLesson, kingdom);
  }

  renderQuestion(0);
}

/* ─── RENDER ALL CHALLENGES (after quiz) ────────────────────── */
function renderAllChallenges(challenges, container) {
  container.innerHTML = `<div class="section-title" style="margin-bottom:16px">🎯 Coding Challenges</div>` +
    challenges.map((c, i) =>
      `<div id="challenge-card-${esc(c.id)}" style="${i > 0 ? 'margin-top:20px' : ''}">
        ${buildChallengeCard(c)}
       </div>`
    ).join('');

  challenges.forEach(c => attachChallengeHandlers(c));
}

/* ─── CHALLENGE OPEN (from sidebar) ─────────────────────────── */
function openChallengeOnly(challenge, kingdom) {
  const contentArea = document.getElementById('content-area');
  if (!contentArea) return;
  contentArea.innerHTML = `
    <div class="lesson-view">
      <div class="lesson-header">
        <h2>${challenge.icon} ${challenge.title}</h2>
        <div class="xp-reward">⚡ +${challenge.xp} XP</div>
      </div>
      <div id="challenge-card-${esc(challenge.id)}">
        ${buildChallengeCard(challenge)}
      </div>
      <div style="margin-top:20px">
        <div class="section-title" style="margin-bottom:12px">🗂️ Other Challenges</div>
        ${kingdom.challenges.filter(c => c.id !== challenge.id).map(c =>
          `<div id="challenge-card-${esc(c.id)}" style="margin-bottom:16px">${buildChallengeCard(c)}</div>`
        ).join('')}
      </div>
    </div>`;
  kingdom.challenges.forEach(c => attachChallengeHandlers(c));
  contentArea.scrollTop = 0;
}

/* ─── BUILD CHALLENGE CARD HTML ──────────────────────────────── */
function buildChallengeCard(challenge) {
  const done = Game.isChallengeComplete(challenge.id);
  const cid  = esc(challenge.id);
  return `
    <div class="challenge-card-inner" data-cid="${cid}">
      <div class="challenge-title-row">
        <h3 class="challenge-title">${challenge.icon} ${challenge.title}</h3>
        <div class="xp-reward">+${challenge.xp} XP</div>
      </div>
      <p class="challenge-desc">${challenge.desc}</p>
      <div class="challenge-requirements">
        <h4>✅ Requirements</h4>
        ${challenge.reqs.map(r => `<div class="req-item">${r}</div>`).join('')}
      </div>
      <div class="hints-row">
        ${challenge.hints.map((_, i) => `
          <button class="hint-btn" data-hint-idx="${i}" data-cid="${cid}" aria-label="Show hint ${i+1}">
            💡 Hint ${i + 1}
          </button>`).join('')}
        <button class="hint-btn solution-btn" data-cid="${cid}"
          style="background:rgba(0,184,148,.08);border-color:rgba(0,184,148,.3);color:var(--ok)">
          👁 Solution
        </button>
      </div>
      <div class="hint-text" id="hint-text-${cid}"></div>
      <div class="solution-block" id="solution-block-${cid}">
        <div class="solution-header">✅ Reference Solution</div>
        <pre style="padding:18px;font-family:var(--fc);font-size:.8rem;line-height:1.75;color:#a6e3a1;background:#050508;overflow-x:auto">${esc(challenge.solution)}</pre>
      </div>
      <div class="challenge-actions">
        <button class="btn-complete-challenge complete-challenge-btn"
          data-cid="${cid}" data-xp="${challenge.xp}"
          ${done ? 'disabled' : ''}>
          ${done ? '✅ Already Completed' : '✅ Mark as Completed (+' + challenge.xp + ' XP)'}
        </button>
      </div>
    </div>`;
}

/* ─── ATTACH CHALLENGE EVENT HANDLERS ───────────────────────── */
function attachChallengeHandlers(challenge) {
  const cid = challenge.id;
  const eid = esc(cid);

  // Hint buttons — use data attributes, no inline onclick
  document.querySelectorAll(`.hint-btn[data-cid="${eid}"][data-hint-idx]`).forEach(btn => {
    btn.addEventListener('click', () => {
      const idx     = parseInt(btn.dataset.hintIdx);
      const hintEl  = document.getElementById(`hint-text-${eid}`);
      if (!hintEl) return;
      const showing = hintEl.dataset.showing === String(idx);
      if (showing) {
        hintEl.classList.remove('show');
        hintEl.dataset.showing = '';
      } else {
        hintEl.textContent = `💡 Hint ${idx + 1}: ${challenge.hints[idx]}`;
        hintEl.classList.add('show');
        hintEl.dataset.showing = String(idx);
      }
    });
  });

  // Solution toggle
  const solBtn = document.querySelector(`.solution-btn[data-cid="${eid}"]`);
  const solBlock = document.getElementById(`solution-block-${eid}`);
  if (solBtn && solBlock) {
    solBtn.addEventListener('click', () => {
      const open = solBlock.classList.toggle('show');
      solBtn.textContent = open ? '🙈 Hide Solution' : '👁 Solution';
    });
  }

  // Complete button
  const completeBtn = document.querySelector(`.complete-challenge-btn[data-cid="${eid}"]`);
  if (completeBtn) {
    completeBtn.addEventListener('click', () => {
      if (completeBtn.disabled) return;
      const isNew = Game.completeChallenge(cid);
      if (!isNew) { Toast.show({ icon: '✅', title: 'Already completed!', dur: 2000 }); return; }

      completeBtn.disabled = true;
      completeBtn.textContent = '✅ Completed!';
      completeBtn.style.background = 'linear-gradient(135deg,var(--ok),#00a381)';

      const xp     = parseInt(completeBtn.dataset.xp) || 50;
      const result = Game.addXP(xp);
      Sounds.complete();
      Toast.show({ icon: '🎯', title: 'Challenge Complete!', message: challenge.title, xp, type: 'achievement', dur: 5000 });
      spawnXP(xp, completeBtn);
      updateNavStats();

      if (result.leveledUp)              handleLevelUp(result);
      if (result.newAchievements.length) handleNewAchievements(result.newAchievements);

      // Refresh sidebar
      const page    = document.body.dataset.page;
      const kingdom = GAME_DATA.kingdoms[page];
      const sidebar = document.getElementById('sidebar');
      if (kingdom && sidebar) renderSidebar(kingdom, sidebar);
    });
  }
}

/* ─── LESSON NAVIGATION AFTER QUIZ ──────────────────────────── */
function renderLessonNav(nextLesson, kingdom) {
  const navEl = document.getElementById('lesson-nav');
  if (!navEl) return;

  navEl.innerHTML = `
    <div style="display:flex;justify-content:space-between;align-items:center;margin-top:32px;
                padding-top:24px;border-top:1px solid var(--border);flex-wrap:wrap;gap:12px">
      <a href="dashboard.html" class="btn btn-ghost">← Dashboard</a>
      ${nextLesson
        ? `<button class="btn btn-primary" id="next-lesson-btn">
             Next: ${nextLesson.icon} ${nextLesson.title} →
           </button>`
        : `<a href="achievements.html" class="btn btn-primary">🏅 View Achievements</a>`}
    </div>`;

  if (nextLesson) {
    document.getElementById('next-lesson-btn').addEventListener('click', () => {
      const sidebar = document.getElementById('sidebar');
      // Mark next lesson as active in sidebar
      if (sidebar) {
        sidebar.querySelectorAll('.lesson-item').forEach(item => {
          item.classList.toggle('active', item.dataset.lesson === nextLesson.id);
        });
      }
      openLesson(nextLesson, kingdom);
      window.scrollTo({ top: 0, behavior: 'smooth' });
      Sounds.click();
    });
  }
}

/* ═══════════════════════════════════════════════════════════
   DASHBOARD PAGE
   ═══════════════════════════════════════════════════════════ */
function initDashboard() {
  const state  = Game.getState();
  const stats  = Game.getStats();
  const info   = stats.levelInfo;

  // Welcome
  const welcomeEl = document.getElementById('welcome-msg');
  if (welcomeEl) welcomeEl.textContent = `Welcome back, ${state.playerName}! 👋`;

  // Level label
  const lvLbl = document.getElementById('lv-label');
  if (lvLbl) lvLbl.textContent = `Level ${info.level} — ${info.name}`;

  // XP bar (animate)
  const xpFill = document.getElementById('xp-fill');
  const xpText = document.getElementById('xp-text');
  if (xpFill) setTimeout(() => { xpFill.style.width = `${info.progress}%`; }, 200);
  if (xpText) xpText.textContent = info.nextXP
    ? `${state.xp} / ${info.nextXP} XP to Level ${info.level + 1}`
    : `${state.xp} XP — MAX LEVEL!`;

  // Stat counters (animated)
  const statMap = {
    'stat-xp':      state.xp,
    'stat-level':   info.level,
    'stat-lessons': stats.completedLessons,
    'stat-badges':  stats.achievements
  };
  for (const [id, val] of Object.entries(statMap)) {
    const el = document.getElementById(id);
    if (el) animCount(el, val, 1200);
  }

  // Kingdom progress bars
  for (const [id] of Object.entries(GAME_DATA.kingdoms)) {
    const kp   = stats.kingdomProgress[id];
    const fill = document.getElementById(`kp-fill-${id}`);
    const pct  = document.getElementById(`kp-pct-${id}`);
    const done = document.getElementById(`kp-done-${id}`);
    if (fill) setTimeout(() => { fill.style.width = `${kp.pct}%`; }, 350);
    if (pct)  pct.textContent  = `${kp.pct}%`;
    if (done) done.textContent = `${kp.completed}/${kp.total} lessons`;
  }

  // Daily challenge
  renderDailyChallengeWidget();

  // Recent achievements
  renderRecentAchievements();
}

/* ─── DAILY CHALLENGE WIDGET ─────────────────────────────────── */
function renderDailyChallengeWidget() {
  const container = document.getElementById('daily-challenge');
  if (!container) return;

  const dc   = Game.getDailyChallenge();
  const done = Game.isDailyDone();
  const streak = Game.getState().dailyChallenge.streak || 0;

  container.innerHTML = `
    <div class="daily-card">
      <div style="display:flex;justify-content:space-between;align-items:flex-start;margin-bottom:12px">
        <div>
          <div class="daily-category">${dc.category} · Daily Challenge</div>
          ${streak > 0 ? `<div style="font-size:.75rem;color:var(--warn);font-weight:700;margin-top:3px">🔥 ${streak}-day streak!</div>` : ''}
        </div>
        <div style="font-family:var(--fd);font-size:.62rem;color:var(--gold);background:var(--glow);
                    border:1px solid var(--border-h);border-radius:99px;padding:4px 10px">+25 XP</div>
      </div>
      <div class="daily-question">${dc.question}</div>
      <div class="quiz-options" id="daily-opts" style="margin:14px 0">
        ${dc.options.map((opt, i) => `
          <button class="quiz-option daily-opt" data-idx="${i}" style="padding:10px 14px;font-size:.83rem"
            ${done ? 'disabled' : ''}>
            <span class="option-letter">${String.fromCharCode(65 + i)}</span>
            <span>${opt}</span>
          </button>`).join('')}
      </div>
      <div class="quiz-feedback ${done ? 'show correct-fb' : ''}" id="daily-feedback">
        ${done ? '✅ Completed today! Come back tomorrow for a new challenge.' : ''}
      </div>
    </div>`;

  if (done) return; // Already done, just show

  const daily = dc; // capture for closure
  container.querySelectorAll('.daily-opt').forEach(btn => {
    btn.addEventListener('click', () => {
      const chosen  = parseInt(btn.dataset.idx);
      const correct = daily.correct;
      const isRight = chosen === correct;

      container.querySelectorAll('.daily-opt').forEach((b, i) => {
        b.disabled = true;
        if (i === correct) b.classList.add('correct');
        else if (i === chosen && !isRight) b.classList.add('wrong');
      });

      const fb = document.getElementById('daily-feedback');
      if (isRight) {
        fb.className = 'quiz-feedback show correct-fb';
        fb.textContent = `✅ Correct! ${daily.answer}`;
        const r = Game.completeDailyChallenge();
        Sounds.correct();
        if (!r.alreadyDone) {
          const newStreak = Game.getState().dailyChallenge.streak;
          Toast.show({ icon: '🔥', title: `Daily Complete! +25 XP`, message: `🔥 Streak: ${newStreak} day${newStreak !== 1 ? 's' : ''}`, dur: 5000 });
          updateNavStats();
          spawnXP(25, btn);
          if (r.leveledUp)               handleLevelUp(r);
          if (r.newAchievements?.length) handleNewAchievements(r.newAchievements);
        }
      } else {
        fb.className = 'quiz-feedback show wrong-fb';
        fb.textContent = `❌ Not quite. Correct answer: ${daily.answer}`;
        Sounds.wrong();
      }
    });
  });
}

/* ─── RECENT ACHIEVEMENTS WIDGET ─────────────────────────────── */
function renderRecentAchievements() {
  const container = document.getElementById('recent-achievements');
  if (!container) return;

  const unlocked = Game.getState().achievements;
  if (unlocked.length === 0) {
    container.innerHTML = `<p class="text-muted" style="font-size:.83rem;padding:8px 0">Complete lessons to earn your first achievement!</p>`;
    return;
  }

  container.innerHTML = unlocked.slice(-4).reverse().map(id => {
    const a = GAME_DATA.achievements.find(x => x.id === id);
    return a ? `
      <div style="display:flex;align-items:center;gap:12px;padding:10px 0;border-bottom:1px solid var(--border)">
        <span style="font-size:1.5rem">${a.icon}</span>
        <div>
          <div style="font-weight:700;font-size:.85rem;color:var(--gold)">${a.name}</div>
          <div style="font-size:.73rem;color:var(--text2)">${a.desc}</div>
        </div>
        <span style="margin-left:auto;font-size:.65rem;background:var(--ok-bg);color:var(--ok);border:1px solid var(--ok);border-radius:99px;padding:2px 8px;font-weight:700">UNLOCKED</span>
      </div>` : '';
  }).join('');
}

/* ═══════════════════════════════════════════════════════════
   ACHIEVEMENTS PAGE
   ═══════════════════════════════════════════════════════════ */
function initAchievementsPage() {
  const grid   = document.getElementById('badge-grid');
  if (!grid) return;

  const unlocked = new Set(Game.getState().achievements);

  grid.innerHTML = GAME_DATA.achievements.map(a => {
    const on = unlocked.has(a.id);
    return `
      <div class="badge-card ${on ? 'unlocked' : 'locked'}" style="${on ? `--badge-color:${a.color}` : ''}">
        <span class="badge-status">${on ? 'UNLOCKED' : 'LOCKED'}</span>
        <span class="badge-icon">${a.icon}</span>
        <div class="badge-name" style="${on ? `color:${a.color}` : ''}">${a.name}</div>
        <div class="badge-desc">${a.desc}</div>
      </div>`;
  }).join('');

  const counter = document.getElementById('ach-count');
  if (counter) counter.textContent = `${unlocked.size} / ${GAME_DATA.achievements.length} Unlocked`;
}

/* ═══════════════════════════════════════════════════════════
   LEADERBOARD PAGE
   ═══════════════════════════════════════════════════════════ */
function initLeaderboardPage() {
  seedLeaderboardIfEmpty();
  Game.saveToLeaderboard();
  renderLeaderboard();

  const form = document.getElementById('lb-form');
  if (form) {
    form.addEventListener('submit', e => {
      e.preventDefault();
      const inp = document.getElementById('lb-name-input');
      const name = inp?.value?.trim();
      if (!name) return;
      let lb = Game.getLeaderboard();
      if (lb.find(e => e.name === name)) {
        Toast.show({ icon: '⚠️', title: 'That name is already on the board!', dur: 2500 });
        return;
      }
      // Simulated friend score
      const fakeXP    = Math.floor(Math.random() * 700) + 80;
      const fakeLevel = GAME_DATA.levels.reduce((lv, l) => fakeXP >= l.minXP ? l : lv, GAME_DATA.levels[0]);
      lb.push({ name, xp: fakeXP, level: fakeLevel.level, levelName: fakeLevel.name, date: new Date().toLocaleDateString() });
      lb.sort((a, b) => b.xp - a.xp);
      try { localStorage.setItem('ca_leaderboard_v2', JSON.stringify(lb.slice(0, 15))); } catch {}
      inp.value = '';
      Sounds.click();
      Toast.show({ icon: '👥', title: `${name} added to the leaderboard!`, dur: 3000 });
      renderLeaderboard();
      buildPodium();
    });
  }

  buildPodium();
}

function seedLeaderboardIfEmpty() {
  let lb = Game.getLeaderboard();
  if (lb.length > 1) return; // already has data
  const seeds = [
    { name: 'CodeMaster Ali',  xp: 950,  level: 4, levelName: 'Developer'   },
    { name: 'SaraDevPro',      xp: 820,  level: 4, levelName: 'Developer'   },
    { name: 'HTMLHero Fatima', xp: 680,  level: 3, levelName: 'Coder'       },
    { name: 'JSWizard Hamza',  xp: 560,  level: 3, levelName: 'Coder'       },
    { name: 'PythonQueen',     xp: 420,  level: 2, levelName: 'Explorer'    },
    { name: 'CSSKing Usman',   xp: 310,  level: 2, levelName: 'Explorer'    },
    { name: 'WebDev Zara',     xp: 195,  level: 2, levelName: 'Explorer'    },
    { name: 'NewCoder Bilal',  xp: 90,   level: 1, levelName: 'Beginner'    },
  ];
  seeds.forEach(s => { s.date = new Date().toLocaleDateString(); });
  lb = [...lb, ...seeds].sort((a, b) => b.xp - a.xp).slice(0, 15);
  try { localStorage.setItem('ca_leaderboard_v2', JSON.stringify(lb)); } catch {}
}

function renderLeaderboard() {
  const tbody  = document.getElementById('lb-body');
  if (!tbody) return;
  const entries    = Game.getLeaderboard();
  const playerName = Game.getState().playerName;
  const medals     = ['🥇', '🥈', '🥉'];

  if (entries.length === 0) {
    tbody.innerHTML = `<div style="text-align:center;padding:48px;color:var(--text2)">No entries yet — complete lessons to earn XP!</div>`;
    return;
  }

  tbody.innerHTML = entries.map((e, i) => `
    <div class="lb-row ${i < 3 ? `top-${i+1}` : ''}"
      ${e.name === playerName ? `style="border:1.5px solid var(--gold);border-radius:12px;background:rgba(255,215,0,.04)"` : ''}>
      <div class="lb-rank">${medals[i] || `#${i + 1}`}</div>
      <div>
        <div class="lb-name">${esc(e.name)}${e.name === playerName ? ' <span style="color:var(--gold);font-size:.7rem">(you)</span>' : ''}</div>
        <div style="font-size:.72rem;color:var(--text2)">${e.date || ''}</div>
      </div>
      <div class="lb-level">Lv.${e.level} ${e.levelName}</div>
      <div class="lb-xp">⚡ ${e.xp.toLocaleString()} XP</div>
    </div>`).join('');
}

function buildPodium() {
  const podium  = document.getElementById('lb-podium');
  if (!podium) return;
  const entries = Game.getLeaderboard().slice(0, 3);
  if (entries.length === 0) return;

  const medals  = ['🥈', '🥇', '🥉'];
  const colors  = ['#C0C0C0', '#FFD700', '#CD7F32'];
  const heights = [90, 120, 70];
  const order   = entries.length >= 3 ? [1, 0, 2] : entries.map((_, i) => i);

  podium.innerHTML = order.map(idx => {
    const e = entries[idx];
    if (!e) return '';
    return `
      <div style="text-align:center;width:110px;animation:fadeIn .5s ease ${idx * .15}s both">
        <div style="font-size:1.8rem">${medals[idx]}</div>
        <div style="font-weight:700;font-size:.8rem;margin:6px 0 3px;
                    overflow:hidden;text-overflow:ellipsis;white-space:nowrap;max-width:110px"
          title="${esc(e.name)}">${esc(e.name)}</div>
        <div style="font-family:var(--fd);font-size:.68rem;color:${colors[idx]}">⚡ ${e.xp.toLocaleString()}</div>
        <div style="height:${heights[idx]}px;
                    background:linear-gradient(180deg,${colors[idx]}40,${colors[idx]}10);
                    border-radius:8px 8px 0 0;border-top:2px solid ${colors[idx]};
                    display:flex;align-items:flex-end;justify-content:center;
                    padding-bottom:10px;margin-top:10px">
          <span style="font-family:var(--fd);font-size:.65rem;color:${colors[idx]}">#${idx+1}</span>
        </div>
      </div>`;
  }).join('');
}

/* ═══════════════════════════════════════════════════════════
   HOME PAGE
   ═══════════════════════════════════════════════════════════ */
function initHomePage() {
  const form       = document.getElementById('start-form');
  const nameInput  = document.getElementById('player-name');
  const contBtn    = document.getElementById('continue-btn');

  if (Game.hasPlayer()) {
    const name = Game.getState().playerName;
    if (nameInput) nameInput.value = name;
    if (contBtn) {
      contBtn.classList.remove('hidden');
      contBtn.textContent = `▶ Continue as ${name}`;
    }
  }

  if (form) {
    form.addEventListener('submit', e => {
      e.preventDefault();
      const name = nameInput?.value?.trim();
      if (!name) { nameInput?.focus(); return; }
      if (name.length < 2) {
        Toast.show({ icon: '⚠️', title: 'Name must be at least 2 characters', dur: 2500 });
        nameInput?.focus(); return;
      }
      Game.initPlayer(name);
      Game.saveToLeaderboard();
      Sounds.complete();
      window.location.href = 'dashboard.html';
    });

    // Allow Enter in name input
    nameInput?.addEventListener('keydown', e => { if (e.key === 'Enter') form.requestSubmit?.() || form.dispatchEvent(new Event('submit')); });
  }

  if (contBtn) {
    contBtn.addEventListener('click', () => { Sounds.click(); window.location.href = 'dashboard.html'; });
  }
}

/* ═══════════════════════════════════════════════════════════
   BOOTSTRAP — runs on EVERY page
   ═══════════════════════════════════════════════════════════ */
document.addEventListener('DOMContentLoaded', () => {
  Game.load();
  Sounds.init();
  Toast.init();
  initNav();

  const page = document.body.dataset.page;

  // Redirect to home if no player (except home and about)
  if (page && page !== 'home' && page !== 'about') {
    if (!Game.hasPlayer()) { window.location.href = 'index.html'; return; }
  }

  switch (page) {
    case 'home':         initHomePage();                   break;
    case 'dashboard':    initDashboard();                  break;
    case 'html':         initKingdomPage('html');          break;
    case 'css':          initKingdomPage('css');           break;
    case 'javascript':   initKingdomPage('javascript');    break;
    case 'python':       initKingdomPage('python');        break;
    case 'achievements': initAchievementsPage();           break;
    case 'leaderboard':  initLeaderboardPage();            break;
  }
});
