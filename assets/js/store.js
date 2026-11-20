/* Progress storage. Everything lives in localStorage on this device/browser.
   Use Progress → Backup to move it between devices. */
(function () {
  'use strict';
  var A1 = window.A1, U = A1.U;
  var KEY = 'a1-french-progress-v1';
  var S = A1.S = {};
  var MAPS = ['done', 'videos', 'lessons', 'books', 'srs', 'log', 'speak', 'writing', 'exams', 'cando', 'drills'];

  function defaults() {
    return {
      v: 1,
      created: new Date().toISOString(),
      startDate: (A1.plan && A1.plan.start) || U.todayKey(),
      done: {},      // taskId -> true/false (manual override or activity completion)
      videos: {},    // youtubeId -> ISO time watched
      lessons: {},   // lessonId -> {best, last, at, n}
      books: {},     // 'cosmo:1.1' -> ISO time
      srs: {},       // 'deckId|french' -> {due, ivl, ease, reps, lapses, seen}
      log: {},       // 'YYYY-MM-DD' -> {min, tasks, cards, quiz, speak, ...}
      quiz: [],      // [{id, title, score, total, at}]
      speak: {},     // scenarioId -> {best, at, n}
      writing: {},   // writingId -> {text, at, words}
      exams: {},     // examId -> {at, scores:{listening, reading, writing, speaking}, total}
      cando: {},     // canDoId -> 0|1|2
      drills: {},    // drillId -> {best, last, n}
      sched: null,   // today's frozen plan days {date, key, days}
      settings: {
        voiceF: '', voiceM: '', rate: 0.95, theme: 'auto', showSay: true,
        newPerSession: 12, videoRate: 1, embed: true, autoplay: true,
        endDate: (A1.plan && A1.plan.end) || '2026-12-31', weekendWeight: 2
      }
    };
  }

  function read() {
    try { var raw = window.localStorage.getItem(KEY); return raw ? JSON.parse(raw) : null; }
    catch (e) { return null; }
  }
  function write(s) {
    try { window.localStorage.setItem(KEY, JSON.stringify(s)); return true; }
    catch (e) { return false; }
  }
  function merge(def, s) {
    var out = Object.assign({}, def, s || {});
    out.settings = Object.assign({}, def.settings, (s && s.settings) || {});
    MAPS.forEach(function (k) { if (!out[k] || typeof out[k] !== 'object' || Array.isArray(out[k])) out[k] = {}; });
    if (!Array.isArray(out.quiz)) out.quiz = [];
    if (!/^\d{4}-\d{2}-\d{2}$/.test(out.startDate || '')) out.startDate = def.startDate;
    return out;
  }

  S.state = merge(defaults(), read());
  S.storageOk = write(S.state);

  var listeners = [];
  S.on = function (fn) { listeners.push(fn); };
  var flush = U.debounce(function () { S.storageOk = write(S.state); }, 200);
  S.save = function () {
    flush();
    listeners.forEach(function (fn) { try { fn(); } catch (e) { console.error(e); } });
  };
  S.saveNow = function () { S.storageOk = write(S.state); };
  window.addEventListener('pagehide', S.saveNow);
  document.addEventListener('visibilitychange', function () { if (document.hidden) S.saveNow(); });

  S.set = function (k, v) { S.state.settings[k] = v; S.save(); };
  S.get = function (k) { return S.state.settings[k]; };

  /* activity log for the heatmap, streak and study time */
  S.log = function (kind, amount) {
    var k = U.todayKey();
    var d = S.state.log[k] || (S.state.log[k] = {});
    d[kind] = Math.max(0, (d[kind] || 0) + (amount == null ? 1 : amount));
    S.save();
  };
  S.activeDays = function () {
    return Object.keys(S.state.log).filter(function (k) {
      var d = S.state.log[k];
      return Object.keys(d).some(function (x) { return d[x] > 0; });
    }).sort();
  };
  S.streak = function () {
    var set = new Set(S.activeDays());
    var d = new Date(), n = 0;
    if (!set.has(U.dateKey(d))) d = U.addDays(d, -1); /* today not done yet: count up to yesterday */
    while (set.has(U.dateKey(d))) { n++; d = U.addDays(d, -1); }
    return n;
  };
  S.bestStreak = function () {
    var days = S.activeDays(), best = 0, run = 0, prev = null;
    days.forEach(function (k) {
      var d = U.parseKey(k);
      run = prev && U.daysBetween(prev, d) === 1 ? run + 1 : 1;
      best = Math.max(best, run); prev = d;
    });
    return best;
  };

  S.addQuiz = function (id, title, score, total) {
    S.state.quiz.push({ id: id, title: title, score: score, total: total, at: new Date().toISOString() });
    if (S.state.quiz.length > 500) S.state.quiz = S.state.quiz.slice(-500);
    S.log('quiz', 1);
  };

  S.exportText = function () {
    return JSON.stringify(Object.assign({ app: 'french-a1', exported: new Date().toISOString() }, S.state));
  };
  S.importText = function (text) {
    var obj = JSON.parse(text);
    if (!obj || typeof obj !== 'object' || !obj.settings || !obj.done) throw new Error('This is not a progress backup from this app.');
    delete obj.app; delete obj.exported;
    S.state = merge(defaults(), obj);
    S.saveNow(); S.save();
  };
  S.reset = function () {
    var keep = S.state.settings;
    S.state = defaults();
    S.state.settings = Object.assign(S.state.settings, keep);
    S.saveNow(); S.save();
  };
})();
