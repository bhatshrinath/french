/* Plan & task engine: turns content/plan.js into concrete tasks, tracks
   completion, and computes schedule status for the tracker. */
(function () {
  'use strict';
  var A1 = window.A1, U = A1.U, S = A1.S;
  var T = A1.T = {};
  var P = A1.plan;

  /* ---------- lookups ---------- */
  var nlfByN = {}, extraById = {};
  (A1.nlf.videos || []).forEach(function (v) { nlfByN[v[0]] = { n: v[0], id: v[1], secs: v[2], unit: v[3], kind: v[4], ch: v[5], short: v[6], title: v[7] }; });
  Object.keys(A1.nlf.extra || {}).forEach(function (k) {
    var pl = A1.nlf.extra[k];
    pl.videos.forEach(function (v) { if (!extraById[v[0]]) extraById[v[0]] = { id: v[0], secs: v[1], title: v[2], list: pl.title }; });
  });
  T.nlf = function (n) { return nlfByN[n]; };
  T.extra = function (id) { return extraById[id]; };
  T.lesson = function (id) { return A1.lessons.filter(function (l) { return l.id === id; })[0]; };
  T.scenario = function (id) { return A1.scenarios.filter(function (s) { return s.id === id; })[0]; };
  T.exam = function (id) { return A1.exams.filter(function (x) { return x.id === id; })[0]; };
  T.writing = function (id) { return (A1.writing || []).filter(function (w) { return w.id === id; })[0]; };
  T.book = function (id) { return (A1.books || []).filter(function (b) { return b.id === id; })[0]; };

  var KIND_LABEL = { lesson: 'Lesson', homework: 'Homework', exam: 'Unit exam', intro: 'Intro', practice: 'Listening practice', delf: 'DELF A1 exam', meta: 'Course info' };
  T.videoLabel = function (v) {
    var parts = [];
    if (v.unit != null) parts.push('Unité ' + v.unit);
    if (v.ch && (v.kind === 'lesson' || v.kind === 'homework')) parts.push('Ch. ' + v.ch);
    parts.push(KIND_LABEL[v.kind] || 'Video');
    return parts.join(' · ');
  };
  T.ytUrl = function (id, start) { return 'https://www.youtube.com/watch?v=' + id + (start ? '&t=' + start + 's' : ''); };

  /* Cosmopolite ref "1.4" / "6.c" / "delf" -> {label, page (printed), key} */
  T.cosmo = function (ref) {
    var b = T.book('cosmo');
    if (ref === 'delf') return { key: 'cosmo:delf', label: 'DELF A1 complete practice exam', page: 194, focus: 'all four skills' };
    var m = /^(\d)\.(\d|c)$/.exec(ref), d = b.dossiers[+m[1]];
    if (m[2] === 'c') return { key: 'cosmo:' + ref, label: 'Dossier ' + d.n + ' · Cultures', page: d.pdf - b.offset + 14, focus: d.title };
    var n = +m[2], pdf = d.n === 0 ? d.pdf + 2 * (n - 1) : d.pdf + 2 + 2 * (n - 1);
    var ls = d.lessons[n - 1];
    return { key: 'cosmo:' + ref, label: 'Dossier ' + d.n + ' · Leçon ' + n + ' « ' + ls[0] + ' »', page: pdf - b.offset, focus: ls[1] };
  };
  T.pdfHref = function (bookId, printedPage) {
    var b = T.book(bookId);
    if (!b) return null;
    return encodeURI(b.file).replace(/#/g, '%23') + '#page=' + (printedPage + b.offset);
  };

  /* ---------- dates ---------- */
  T.total = function () { return P.days.length; };
  T.start = function () { return U.parseKey(S.state.startDate || P.start); };
  T.dateOf = function (n) { return U.addDays(T.start(), n - 1); };
  T.endDate = function () { return T.dateOf(T.total()); };
  /* plan day for today (can be < 1 before the start or > total after the end) */
  T.calendarDay = function () { return U.daysBetween(T.start(), new Date()) + 1; };
  T.todayN = function () { return U.clamp(T.calendarDay(), 1, T.total()); };

  /* ---------- tasks ---------- */
  var cache = {};
  T.tasks = function (n) {
    if (cache[n]) return cache[n];
    var d = P.days[n - 1], out = [];
    if (!d) return out;
    var add = function (t) { t.day = n; out.push(t); };
    (d.nlf || []).concat((d.nlfBonus || []).map(function (x) { return -x; })).forEach(function (sn) {
      var bonus = sn < 0, v = nlfByN[Math.abs(sn)];
      if (!v) return;
      add({ id: 'd' + n + ':v' + v.n, kind: 'video', core: !bonus, vid: v.id, n: v.n, video: v,
        title: v.short === v.title ? v.title : v.short, sub: 'NLF · ' + T.videoLabel(v), minutes: Math.max(2, Math.round(v.secs / 60)), icon: '▶' });
    });
    (d.learn || []).forEach(function (id) {
      var l = T.lesson(id);
      add({ id: 'd' + n + ':l:' + id, kind: 'lesson', core: true, ref: id, missing: !l,
        title: l ? l.title : 'Lesson coming soon', sub: l ? catLabel(l.cat) + ' · in-app lesson + quiz' : id, minutes: l ? l.minutes : 15, icon: '📘' });
    });
    (d.cards || []).forEach(function (id) {
      var deck = A1.SRS && A1.SRS.deck(id);
      add({ id: 'd' + n + ':c:' + id, kind: 'cards', core: true, ref: id, missing: id !== '*' && !deck,
        title: id === '*' ? 'Review all due flashcards' : 'Flashcards: ' + (deck ? deck.title : id), sub: 'Spaced repetition · ~10 min', minutes: 10, icon: '🃏' });
    });
    (d.speak || []).forEach(function (id) {
      var s = T.scenario(id);
      add({ id: 'd' + n + ':s:' + id, kind: 'speak', core: true, ref: id, missing: !s,
        title: 'Speaking: ' + (s ? s.title : 'scenario coming soon'), sub: 'Listen · shadow · role-play with the mic', minutes: 15, icon: '🗣️' });
    });
    (d.drill || []).forEach(function (id) {
      var dr = A1.Drills && A1.Drills.get(id);
      add({ id: 'd' + n + ':x:' + id, kind: 'drill', core: true, ref: id,
        title: 'Drill: ' + (dr ? dr.title : id), sub: dr ? dr.sub : 'Practice', minutes: 5, icon: '🎯' });
    });
    (d.write || []).forEach(function (id) {
      var w = T.writing(id);
      add({ id: 'd' + n + ':w:' + id, kind: 'write', core: true, ref: id, missing: !w,
        title: 'Writing: ' + (w ? w.title : id), sub: 'DELF-style message, 40–50 words', minutes: 15, icon: '✍️' });
    });
    if (d.review) {
      add({ id: 'd' + n + ':r', kind: 'review', core: true, ref: d.review.lessons, title: d.review.title, sub: 'Mixed quiz from this unit\'s lessons', minutes: 10, icon: '✅' });
    }
    (d.exam || []).forEach(function (id) {
      var x = T.exam(id);
      add({ id: 'd' + n + ':e:' + id, kind: 'exam', core: true, ref: id, missing: !x,
        title: x ? x.title : 'DELF A1 mock exam', sub: 'Listening · reading · writing · speaking', minutes: 100, icon: '🎓' });
    });
    if (d.cando) add({ id: 'd' + n + ':cando', kind: 'cando', core: true, title: 'Rate yourself on the A1 can-do checklist', sub: 'Progress → A1 checklist', minutes: 10, icon: '🏁' });
    (d.cosmo || []).forEach(function (ref) {
      var c = T.cosmo(ref);
      add({ id: 'd' + n + ':b:' + ref, kind: 'book', core: false, book: 'cosmo', key: c.key, page: c.page,
        title: 'Cosmopolite: ' + c.label, sub: 'p. ' + c.page + ' · ' + c.focus, minutes: 20, icon: '📗' });
    });
    (d.yt || []).forEach(function (y) {
      var e = Array.isArray(y) ? { id: y[0], title: y[1], secs: y[2] * 60, list: 'NLF' } : extraById[y];
      if (!e) return;
      add({ id: 'd' + n + ':y:' + e.id, kind: 'video', core: false, vid: e.id, extra: true,
        title: e.title, sub: 'NLF · ' + e.list, minutes: Math.max(2, Math.round(e.secs / 60)), icon: '▶' });
    });
    cache[n] = out;
    return out;
  };
  function catLabel(c) { return { pronunciation: 'Pronunciation', grammar: 'Grammar', topic: 'Vocabulary & phrases', culture: 'Culture' }[c] || 'Lesson'; }
  T.catLabel = catLabel;
  T.invalidate = function () { cache = {}; };

  T.isDone = function (t) {
    var o = S.state.done[t.id];
    if (o === true || o === false) return o;
    switch (t.kind) {
      case 'video': return !!S.state.videos[t.vid];
      case 'lesson': return !!S.state.lessons[t.ref];
      case 'book': return !!S.state.books[t.key];
      case 'cando': return Object.keys(S.state.cando).length >= Math.ceil((A1.cando || []).length * 0.8);
      default: return false;
    }
  };
  T.setDone = function (t, val) {
    var before = T.isDone(t);
    if (t.kind === 'video') { if (val) S.state.videos[t.vid] = new Date().toISOString(); else delete S.state.videos[t.vid]; delete S.state.done[t.id]; }
    else if (t.kind === 'book') { if (val) S.state.books[t.key] = new Date().toISOString(); else delete S.state.books[t.key]; delete S.state.done[t.id]; }
    else if (t.kind === 'lesson' || t.kind === 'cando') { S.state.done[t.id] = !!val; }
    else { if (val) S.state.done[t.id] = true; else delete S.state.done[t.id]; }
    var after = T.isDone(t);
    if (after !== before) {
      S.log('tasks', after ? 1 : -1);
      S.log('min', after ? t.minutes : -t.minutes);
    }
    S.save();
  };
  /* An activity was finished outside a task (e.g. a scenario from the Practice
     tab): tick the earliest open task of that kind+ref up to today's plan day. */
  T.completeMatching = function (kind, ref) {
    var upto = Math.max(T.todayN(), 1);
    for (var n = 1; n <= T.total(); n++) {
      var list = T.tasks(n).filter(function (t) { return t.kind === kind && String(t.ref) === String(ref) && !T.isDone(t); });
      if (list.length && n <= upto) { T.setDone(list[0], true); return list[0]; }
    }
    return null;
  };
  T.byId = function (id) {
    var m = /^d(\d+):/.exec(id || '');
    if (!m) return null;
    return T.tasks(+m[1]).filter(function (t) { return t.id === id; })[0] || null;
  };

  /* ---------- stats ---------- */
  T.dayStats = function (n) {
    var ts = T.tasks(n), s = { coreDone: 0, core: 0, bonusDone: 0, bonus: 0, minCore: 0, minDone: 0, videoMin: 0 };
    ts.forEach(function (t) {
      var done = T.isDone(t);
      if (t.core) { s.core++; s.minCore += t.minutes; if (done) { s.coreDone++; s.minDone += t.minutes; } if (t.kind === 'video') s.videoMin += t.minutes; }
      else { s.bonus++; if (done) s.bonusDone++; }
    });
    s.complete = s.core > 0 && s.coreDone === s.core;
    s.pct = U.pct(s.coreDone, s.core);
    return s;
  };
  T.overall = function () {
    var o = { coreDone: 0, core: 0, minDone: 0, minCore: 0, daysComplete: 0, bonusDone: 0, bonus: 0 };
    for (var n = 1; n <= T.total(); n++) {
      var s = T.dayStats(n);
      o.coreDone += s.coreDone; o.core += s.core; o.minDone += s.minDone; o.minCore += s.minCore;
      o.bonusDone += s.bonusDone; o.bonus += s.bonus;
      if (s.complete) o.daysComplete++;
    }
    o.pct = U.pct(o.coreDone, o.core);
    return o;
  };
  /* first day that still has unfinished core tasks */
  T.nextDay = function () {
    for (var n = 1; n <= T.total(); n++) if (!T.dayStats(n).complete) return n;
    return T.total() + 1;
  };
  /* schedule status relative to the calendar */
  T.status = function () {
    var cal = T.calendarDay(), total = T.total();
    var behind = [];
    for (var n = 1; n < Math.min(cal, total + 1); n++) if (!T.dayStats(n).complete) behind.push(n);
    var o = T.overall();
    var daysLeft = Math.max(0, total - Math.max(cal, 1) + 1);
    var minLeft = o.minCore - o.minDone;
    return {
      cal: cal, behind: behind, notStarted: cal < 1, finished: cal > total,
      ahead: Math.max(0, T.nextDay() - Math.max(cal, 1)),
      daysLeft: daysLeft, minLeft: minLeft,
      pacePerDay: daysLeft ? Math.round(minLeft / daysLeft) : minLeft
    };
  };
  T.videoProgress = function () {
    var all = (A1.nlf.videos || []).filter(function (v) { return v[4] !== 'meta'; });
    var done = all.filter(function (v) { return S.state.videos[v[1]]; });
    return { done: done.length, total: all.length, secsDone: U.sum(done, function (v) { return v[2]; }), secs: U.sum(all, function (v) { return v[2]; }) };
  };
  T.unitProgress = function (u) {
    var all = (A1.nlf.videos || []).filter(function (v) { return v[3] === u && v[4] !== 'meta'; });
    var done = all.filter(function (v) { return S.state.videos[v[1]]; });
    return { done: done.length, total: all.length };
  };
})();
