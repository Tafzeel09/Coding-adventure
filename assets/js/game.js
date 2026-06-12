/* ============================================================
   CODING ADVENTURE — Game Engine
   XP, Levels, Achievements, Progress, Leaderboard
   ============================================================ */

const Game = (() => {
  const KEY = 'ca_state_v2';
  const LB_KEY = 'ca_leaderboard_v2';

  const DEFAULT = {
    playerName: '',
    xp: 0, level: 1, levelName: 'Beginner',
    completedLessons: [],
    quizScores: {},          // { lessonId: { score, total } }
    completedChallenges: [],
    achievements: [],
    perfectQuizCount: 0,
    dailyChallenge: { date: null, completed: false, streak: 0 },
    soundEnabled: true,
    theme: 'dark',
    createdAt: ''
  };

  let s = { ...DEFAULT };

  /* ── PERSISTENCE ────────────────────────────────────────── */
  function load() {
    try {
      const raw = localStorage.getItem(KEY);
      if (raw) s = { ...DEFAULT, ...JSON.parse(raw) };
    } catch { s = { ...DEFAULT }; }
    return s;
  }

  function save() {
    try { localStorage.setItem(KEY, JSON.stringify(s)); } catch {}
  }

  function getState() { return s; }

  function hasPlayer() { return !!(s.playerName && s.playerName.trim()); }

  /* ── PLAYER INIT ─────────────────────────────────────────── */
  function initPlayer(name) {
    s = { ...DEFAULT, playerName: name.trim(), theme: s.theme || 'dark', createdAt: new Date().toISOString() };
    save();
    return s;
  }

  /* ── LEVEL SYSTEM ────────────────────────────────────────── */
  function getLevelInfo(xp = s.xp) {
    const lvls = GAME_DATA.levels;
    let cur = lvls[0];
    for (const l of lvls) { if (xp >= l.minXP) cur = l; else break; }
    const nxt = lvls.find(l => l.level === cur.level + 1);
    const progress = nxt
      ? Math.min(((xp - cur.minXP) / (nxt.minXP - cur.minXP)) * 100, 100)
      : 100;
    return { ...cur, nextLevel: nxt || null, nextXP: nxt ? nxt.minXP : null, progress: Math.round(progress) };
  }

  /* ── XP SYSTEM ───────────────────────────────────────────── */
  function addXP(amount) {
    const prevLevel = s.level;
    s.xp += amount;
    const info = getLevelInfo();
    s.level = info.level;
    s.levelName = info.name;
    save();
    const leveledUp = s.level > prevLevel;
    const newAchievements = checkAchievements();
    if (leveledUp) saveToLeaderboard();
    return { xpGained: amount, totalXP: s.xp, level: s.level, levelName: s.levelName, leveledUp, newAchievements };
  }

  /* ── LESSON PROGRESS ─────────────────────────────────────── */
  function completeLesson(lessonId) {
    if (s.completedLessons.includes(lessonId)) return false;
    s.completedLessons.push(lessonId);
    save();
    return true;
  }

  function isLessonComplete(lessonId) { return s.completedLessons.includes(lessonId); }

  /* ── QUIZ SCORES ─────────────────────────────────────────── */
  function saveQuizScore(lessonId, score, total) {
    const prev = s.quizScores[lessonId];
    if (!prev || score > prev.score) {
      s.quizScores[lessonId] = { score, total, perfect: score === total };
    }
    s.perfectQuizCount = Object.values(s.quizScores).filter(q => q.perfect).length;
    save();
    return { score, total, perfect: score === total };
  }

  function getQuizScore(lessonId) { return s.quizScores[lessonId] || null; }

  /* ── CHALLENGES ──────────────────────────────────────────── */
  function completeChallenge(challengeId) {
    if (s.completedChallenges.includes(challengeId)) return false;
    s.completedChallenges.push(challengeId);
    save();
    return true;
  }

  function isChallengeComplete(cid) { return s.completedChallenges.includes(cid); }

  /* ── ACHIEVEMENTS ────────────────────────────────────────── */
  function checkAchievements() {
    const newly = [];
    const kd = GAME_DATA.kingdoms;
    const checks = {
      'first-step':    s.completedLessons.length >= 1,
      'html-hero':     kd.html.lessons.every(l => s.completedLessons.includes(l.id)),
      'css-champion':  kd.css.lessons.every(l => s.completedLessons.includes(l.id)),
      'js-wizard':     kd.javascript.lessons.every(l => s.completedLessons.includes(l.id)),
      'python-master': kd.python.lessons.every(l => s.completedLessons.includes(l.id)),
      'quiz-genius':   s.perfectQuizCount >= 5,
      'challenger':    s.completedChallenges.length >= 5,
      'level-up':      s.level >= 3,
      'xp-1000':       s.xp >= 1000,
      'consistency':   s.dailyChallenge.streak >= 3
    };
    for (const [id, cond] of Object.entries(checks)) {
      if (cond && !s.achievements.includes(id)) {
        s.achievements.push(id);
        newly.push(id);
      }
    }
    if (newly.length) save();
    return newly;
  }

  /* ── DAILY CHALLENGE ─────────────────────────────────────── */
  function getDailyChallenge() {
    const d = new Date();
    const seed = d.getDate() + d.getMonth() * 31 + d.getFullYear();
    const pool = GAME_DATA.dailyChallenges;
    return pool[seed % pool.length];
  }

  function isDailyDone() {
    return s.dailyChallenge.date === new Date().toDateString() && s.dailyChallenge.completed;
  }

  function completeDailyChallenge() {
    if (isDailyDone()) return { alreadyDone: true };
    const today = new Date().toDateString();
    const yesterday = new Date(Date.now() - 86400000).toDateString();
    s.dailyChallenge.streak = s.dailyChallenge.date === yesterday
      ? s.dailyChallenge.streak + 1
      : 1;
    s.dailyChallenge.date = today;
    s.dailyChallenge.completed = true;
    save();
    return addXP(25);
  }

  /* ── STATS ───────────────────────────────────────────────── */
  function getStats() {
    const kd = GAME_DATA.kingdoms;
    const totalLessons = Object.values(kd).reduce((n, k) => n + k.lessons.length, 0);
    const totalChallenges = Object.values(kd).reduce((n, k) => n + k.challenges.length, 0);
    const kp = {};
    for (const [id, k] of Object.entries(kd)) {
      const done = k.lessons.filter(l => s.completedLessons.includes(l.id)).length;
      kp[id] = { completed: done, total: k.lessons.length, pct: Math.round((done / k.lessons.length) * 100) };
    }
    return {
      xp: s.xp, level: s.level, levelName: s.levelName,
      completedLessons: s.completedLessons.length, totalLessons,
      completedChallenges: s.completedChallenges.length, totalChallenges,
      achievements: s.achievements.length, totalAchievements: GAME_DATA.achievements.length,
      overallPct: Math.round((s.completedLessons.length / totalLessons) * 100),
      kingdomProgress: kp,
      levelInfo: getLevelInfo(),
      perfectQuizCount: s.perfectQuizCount,
      dailyStreak: s.dailyChallenge.streak
    };
  }

  /* ── LEADERBOARD ─────────────────────────────────────────── */
  function saveToLeaderboard() {
    if (!s.playerName) return;
    let lb = getLeaderboard();
    lb = lb.filter(e => e.name !== s.playerName);
    lb.push({ name: s.playerName, xp: s.xp, level: s.level, levelName: s.levelName, date: new Date().toLocaleDateString() });
    lb.sort((a, b) => b.xp - a.xp);
    lb = lb.slice(0, 15);
    try { localStorage.setItem(LB_KEY, JSON.stringify(lb)); } catch {}
    return lb;
  }

  function getLeaderboard() {
    try { return JSON.parse(localStorage.getItem(LB_KEY) || '[]'); } catch { return []; }
  }

  /* ── SETTINGS ────────────────────────────────────────────── */
  function setTheme(t) { s.theme = t; save(); }
  function setSoundEnabled(v) { s.soundEnabled = v; save(); }
  function resetGame() { localStorage.removeItem(KEY); s = { ...DEFAULT }; }

  return {
    load, save, getState, hasPlayer, initPlayer, getLevelInfo,
    addXP, completeLesson, isLessonComplete,
    saveQuizScore, getQuizScore,
    completeChallenge, isChallengeComplete,
    checkAchievements,
    getDailyChallenge, isDailyDone, completeDailyChallenge,
    getStats, saveToLeaderboard, getLeaderboard,
    setTheme, setSoundEnabled, resetGame
  };
})();
