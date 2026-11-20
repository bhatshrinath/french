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

  /* ---------- adaptive schedule ----------
     The 47 plan days are spread over the real calendar from TODAY to the
     end date (default 31 Dec). Weekends carry more work (weekendWeight),
     Christmas Day is half a day. Today's list is frozen once computed so it
     doesn't move while you tick things off; future days re-balance live. */
  T.total = function () { return P.days.length; };
  T.start = function () { return U.parseKey(S.state.startDate || P.start); };
  T.endDate = function () { return U.parseKey(S.get('endDate') || P.end); };
  T.weekendWeight = function () { return S.get('weekendWeight') || 2; };
  T.weight = function (d) {
    var w = (d.getDay() === 0 || d.getDay() === 6) ? T.weekendWeight() : 1;
    if (U.dateKey(d).slice(5) === '12-25') w *= 0.5;
    return w;
  };
  T.remaining = function (n) { var s = T.dayStats(n); return s.complete ? 0 : Math.max(10, s.minCore - s.minDone); };

  /* Split items (in order) over dates: dynamic programming that keeps each
     date's load close to its weighted share. Returns an array of arrays. */
  function partition(items, weights) {
    var N = items.length, D = weights.length, out = weights.map(function () { return []; });
    if (!N) return out;
    if (D <= 1) { out[0] = items.slice(); return out.length ? out : [items.slice()]; }
    var loads = items.map(function (t) { return t.minutes; }), pre = [0];
    /* cutting in the middle of a plan day costs a little extra; cutting a lesson
       video from its homework costs more */
    var cutCost = items.map(function (t, k) {
      if (!k || items[k - 1].day !== t.day) return 0;
      return (t.video && t.video.kind === 'homework') ? 60 : 12;
    });
    cutCost.push(0);
    loads.forEach(function (l) { pre.push(pre[pre.length - 1] + l); });
    var unit = pre[N] / U.sum(weights), INF = 1e18, dp = [], arg = [];
    for (var j = 0; j <= D; j++) { dp.push(new Array(N + 1).fill(INF)); arg.push(new Array(N + 1).fill(-1)); }
    dp[0][0] = 0;
    for (j = 1; j <= D; j++) {
      var t = Math.max(1, weights[j - 1] * unit);
      for (var i = 0; i <= N; i++) {
        for (var k = i; k >= 0; k--) {
          if (dp[j - 1][k] === INF) continue;
          var load = pre[i] - pre[k];
          if (load > t * 3 && k < i - 1) break;
          var d = load - t, c = dp[j - 1][k] + d * d * (d > 0 ? 1.5 : 1) / t + (k > 0 && k < i ? cutCost[k] : 0);
          if (c < dp[j][i]) { dp[j][i] = c; arg[j][i] = k; }
        }
      }
    }
    var e = N;
    for (j = D; j >= 1; j--) { var s0 = arg[j][e]; if (s0 < 0) s0 = 0; out[j - 1] = items.slice(s0, e); e = s0; }
    return out;
  }

  var sched = null;
  function schedKey() { return [S.get('endDate') || P.end, T.weekendWeight(), T.total()].join('|'); }
  T.schedule = function () {
    if (sched) return sched;
    var today = new Date(), tk = U.todayKey(), end = T.endDate();
    var dates = [];
    for (var d = today; U.daysBetween(d, end) >= 0; d = U.addDays(d, 1)) dates.push(d);
    if (!dates.length) dates.push(today); /* past the end date: everything left is due today */
    /* schedule individual core tasks (in plan order), not whole days */
    var pending = [];
    for (var n = 1; n <= T.total(); n++) T.tasks(n).forEach(function (t) { if (t.core && !T.isDone(t)) pending.push(t); });
    var fr = S.state.sched;
    if (!fr || fr.date !== tk || fr.key !== schedKey() || !Array.isArray(fr.tasks)) {
      fr = { date: tk, key: schedKey(), tasks: (partition(pending, dates.map(T.weight))[0] || []).map(function (t) { return t.id; }) };
      S.state.sched = fr;
      S.saveNow();
    }
    var rest = pending.filter(function (t) { return fr.tasks.indexOf(t.id) < 0; });
    var future = dates.slice(1);
    var parts = future.length ? partition(rest, future.map(T.weight)) : [];
    var byDate = {}, byDateTasks = {}, byDay = {};
    function put(key, dt, list) {
      byDateTasks[key] = (byDateTasks[key] || []).concat(list.map(function (t) { return t.id || t; }));
      list.forEach(function (t) {
        var dn = t.day || +/^d(\d+):/.exec(t)[1];
        (byDate[key] = byDate[key] || []);
        if (byDate[key].indexOf(dn) < 0) byDate[key].push(dn);
        (byDay[dn] = byDay[dn] || []);
        if (!byDay[dn].some(function (x) { return U.dateKey(x) === key; })) byDay[dn].push(dt);
      });
    }
    byDate[tk] = []; byDateTasks[tk] = [];
    put(tk, today, fr.tasks);
    if (!future.length && rest.length) put(tk, today, rest);
    future.forEach(function (dt, i) { var key = U.dateKey(dt); byDate[key] = []; byDateTasks[key] = []; put(key, dt, parts[i] || []); });
    var todayDays = byDate[tk].slice().sort(function (a, b) { return a - b; });
    sched = { today: todayDays, todayTasks: byDateTasks[tk], dates: dates, byDate: byDate, byDateTasks: byDateTasks, byDay: byDay };
    return sched;
  };
  T.replan = function () { S.state.sched = null; sched = null; S.save(); };
  /* first date a plan day (still) has work scheduled, or null when done */
  T.dateOf = function (n) { var l = T.schedule().byDay[n]; return l && l.length ? l[0] : null; };
  T.datesOf = function (n) { return T.schedule().byDay[n] || []; };
  T.todayDays = function () { return T.schedule().today; };
  T.todayTasks = function () { return T.schedule().todayTasks; };
  /* the plan day to show first: today's first unfinished one, else the next unfinished day */
  T.todayN = function () {
    var td = T.todayDays().filter(function (n) { return !T.dayStats(n).complete; });
    return td[0] || T.todayDays()[0] || Math.min(T.nextDay(), T.total());
  };

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
  T.invalidate = function () { cache = {}; sched = null; };

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
    sched = null;
    if (after !== before) {
      S.log('tasks', after ? 1 : -1);
      S.log('min', after ? t.minutes : -t.minutes);
    }
    S.save();
  };
  /* An activity was finished outside a task (e.g. a scenario from the Practice
     tab): tick the earliest open task of that kind+ref up to today's plan day. */
  T.completeMatching = function (kind, ref) {
    var upto = Math.max.apply(null, T.todayDays().concat([T.nextDay()]));
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
  /* adaptive status: what's left, and how much per weekday / weekend day */
  T.status = function () {
    var sc = T.schedule(), o = T.overall(), today = new Date(), end = T.endDate();
    var daysLeft = Math.max(0, U.daysBetween(today, end) + 1);
    var W = 0;
    for (var i = 0; i < daysLeft; i++) W += T.weight(U.addDays(today, i));
    var minLeft = o.minCore - o.minDone, unit = W ? minLeft / W : minLeft;
    var tt = sc.todayTasks.map(T.byId).filter(Boolean);
    var todayMin = U.sum(tt, function (t) { return T.isDone(t) ? 0 : t.minutes; });
    return {
      today: sc.today, todayMin: todayMin,
      todayDone: tt.length > 0 && tt.every(T.isDone),
      daysLeft: daysLeft, minLeft: minLeft, allDone: o.core > 0 && o.coreDone === o.core,
      perWeekday: Math.round(unit), perWeekend: Math.round(unit * T.weekendWeight()),
      overdue: daysLeft === 0 && minLeft > 0, heavy: unit > 150
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
