/* Progress tracker dashboard. */
(function () {
  'use strict';
  var A1 = window.A1, U = A1.U, S = A1.S, T = A1.T, R = A1.R, h = U.h, esc = U.esc;
  var V = A1.V = A1.V || {};

  function tile(label, value, sub, pct) {
    return h('div.ptile', h('div.ptile-l.muted', { text: label }), h('div.ptile-v', { text: value }), sub ? h('div.ptile-s.muted.small', { text: sub }) : null,
      pct != null ? h('div', { html: R.progressBar(pct, 'thin') }) : null);
  }
  /* single-series horizontal bars with direct labels (one hue, no legend) */
  function hbars(rows) {
    var wrap = h('div.hbars', { role: 'table' });
    rows.forEach(function (r) {
      var pct = U.clamp(r.pct, 0, 100);
      wrap.appendChild(h('div.hbar', { role: 'row', title: r.label + ': ' + r.value },
        h('div.hbar-l', { role: 'rowheader', text: r.label }),
        h('div.hbar-track', { role: 'cell', 'aria-label': r.value }, h('span.hbar-fill', { style: { width: pct + '%' } })),
        h('div.hbar-v.muted', { role: 'cell', text: r.value })));
    });
    return wrap;
  }
  function level(min) { return !min ? 0 : min < 30 ? 1 : min < 60 ? 2 : min < 120 ? 3 : 4; }

  V.progress = function (root, params, query) {
    var o = T.overall(), st = T.status(), vp = T.videoProgress(), cards = A1.SRS.totals();
    root.appendChild(h('div.page-head', h('h1', { text: 'Progress tracker' }),
      h('p.muted', { text: U.fmtDate(T.start(), true) + ' → ' + U.fmtDate(T.endDate(), true) + ' · goal: CEFR A1 / DELF A1' })));

    /* --- headline --- */
    var statusTxt, statusCls;
    if (st.notStarted) { statusTxt = '🗓 Starts ' + U.fmtShort(T.start()); statusCls = 'note'; }
    else if (st.behind.length) { statusTxt = '⚠ ' + U.plural(st.behind.length, 'day') + ' behind'; statusCls = 'warn'; }
    else if (st.ahead > 0) { statusTxt = '🚀 ' + U.plural(st.ahead, 'day') + ' ahead'; statusCls = 'ok'; }
    else { statusTxt = '✓ On track'; statusCls = 'ok'; }
    root.appendChild(h('section.card.headline',
      h('div', { html: R.ring(o.pct, 140, 'Plan ' + o.pct + '% complete') }),
      h('div.headline-text',
        h('div.big-num', { text: o.pct + '%' }),
        h('div.muted', { text: 'of the plan\'s core tasks done (' + o.coreDone + ' / ' + o.core + ')' }),
        h('div.row', h('span.status.' + statusCls, { text: statusTxt }), h('span.pill', { text: '🔥 ' + S.streak() + '-day streak (best ' + S.bestStreak() + ')' })),
        h('div.muted.small', { text: st.finished ? 'Plan period finished.' : 'To finish on time: ≈ ' + U.fmtMin(st.pacePerDay) + ' per day for the next ' + U.plural(st.daysLeft, 'day') + '.' }))));

    /* --- tiles --- */
    var lessonsPlanned = [];
    A1.plan.days.forEach(function (d) { (d.learn || []).forEach(function (id) { if (lessonsPlanned.indexOf(id) < 0) lessonsPlanned.push(id); }); });
    var lessonsDone = lessonsPlanned.filter(function (id) { return S.state.lessons[id]; });
    var avgLesson = lessonsDone.length ? Math.round(U.sum(lessonsDone, function (id) { return S.state.lessons[id].best; }) / lessonsDone.length) : 0;
    var studied = U.sum(Object.keys(S.state.log), function (k) { return S.state.log[k].min || 0; });
    var writes = (A1.writing || []).filter(function (w) { return (S.state.writing[w.id] || {}).words >= w.minWords; }).length;
    var exams = Object.keys(S.state.exams).map(function (k) { return S.state.exams[k].total; });
    var cosmoTotal = 0, cosmoDone = 0;
    T.book('cosmo').dossiers.forEach(function (d) { d.lessons.forEach(function (l, i) { cosmoTotal++; if (S.state.books['cosmo:' + d.n + '.' + (i + 1)]) cosmoDone++; }); });
    root.appendChild(h('section.ptiles',
      tile('Days complete', o.daysComplete + ' / ' + T.total(), null, U.pct(o.daysComplete, T.total())),
      tile('NLF videos watched', vp.done + ' / ' + vp.total, U.fmtMin(vp.secsDone / 60) + ' of ' + U.fmtMin(vp.secs / 60), U.pct(vp.done, vp.total)),
      tile('Lessons completed', lessonsDone.length + ' / ' + lessonsPlanned.length, lessonsDone.length ? 'average quiz ' + avgLesson + '%' : 'quiz at the end of each lesson', U.pct(lessonsDone.length, lessonsPlanned.length)),
      tile('Words learned', cards.learned + ' / ' + cards.total, cards.seen + ' seen · ' + cards.due + ' due today', U.pct(cards.learned, cards.total)),
      tile('Study time logged', U.fmtMin(studied), 'from tasks you ticked'),
      tile('Writing tasks', writes + ' / ' + (A1.writing || []).length, '40+ words each', U.pct(writes, (A1.writing || []).length)),
      tile('Mock exams', exams.length ? 'Best ' + Math.max.apply(null, exams) + '/100' : '—', 'pass = 50/100'),
      tile('Cosmopolite lessons', cosmoDone + ' / ' + cosmoTotal, 'bonus · tick them in the plan or Library', U.pct(cosmoDone, cosmoTotal))));

    /* --- calendar heatmap --- */
    var cal = h('section.card');
    cal.appendChild(h('h2', { text: 'Activity calendar' }));
    cal.appendChild(h('p.muted.small', { text: 'Each square is a day of the plan. Colour = time studied that day (from ticked tasks). ✓ = that plan day is complete.' }));
    var grid = h('div.heat', { role: 'grid', 'aria-label': 'Study activity per day' });
    ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].forEach(function (d) { grid.appendChild(h('div.heat-h.muted', { text: d.slice(0, 2) })); });
    var start = T.start();
    for (var p = 0; p < start.getDay(); p++) grid.appendChild(h('div.heat-pad'));
    var rows = [];
    for (var n = 1; n <= T.total(); n++) {
      var date = T.dateOf(n), key = U.dateKey(date), lg = S.state.log[key] || {}, min = Math.round(lg.min || 0), ds = T.dayStats(n);
      var isToday = key === U.todayKey();
      var label = U.fmtDate(date) + ' · Day ' + n + ' · ' + (min ? U.fmtMin(min) + ' studied' : 'no study logged') + ' · plan day ' + ds.pct + '%';
      rows.push([U.fmtDate(date), 'Day ' + n, min ? U.fmtMin(min) : '—', ds.coreDone + '/' + ds.core]);
      grid.appendChild(h('div.heat-c.l' + level(min) + (isToday ? '.today' : '') + (ds.complete ? '.done' : ''), { role: 'gridcell', title: label, 'aria-label': label, tabindex: '0' },
        h('span.heat-d', { text: date.getDate() }), ds.complete ? h('span.heat-ok', { text: '✓' }) : null));
    }
    cal.appendChild(grid);
    cal.appendChild(h('div.heat-legend.muted.small', 'Less ', h('span.heat-c.l0.sw'), h('span.heat-c.l1.sw'), h('span.heat-c.l2.sw'), h('span.heat-c.l3.sw'), h('span.heat-c.l4.sw'), ' More (0 · <30 · 30–60 · 60–120 · 120+ min)'));
    var tbl = h('table.data-table', h('thead', h('tr', ['Date', 'Plan day', 'Studied', 'Core tasks'].map(function (x) { return h('th', { text: x }); }))),
      h('tbody', rows.map(function (r) { return h('tr', r.map(function (c) { return h('td', { text: c }); })); })));
    cal.appendChild(h('details', h('summary.small', { text: 'Show as a table' }), h('div.tbl', tbl)));
    root.appendChild(cal);

    /* --- weeks & units --- */
    var weeks = [];
    for (var w = 0; w * 7 < T.total(); w++) {
      var a = w * 7 + 1, b = Math.min(T.total(), a + 6), c = 0, t = 0;
      for (var k = a; k <= b; k++) { var s2 = T.dayStats(k); c += s2.coreDone; t += s2.core; }
      weeks.push({ label: 'Week ' + (w + 1) + ' (' + U.fmtShort(T.dateOf(a)) + ')', pct: U.pct(c, t), value: U.pct(c, t) + '%' });
    }
    var units = Object.keys(A1.nlf.units).map(function (u) {
      var up = T.unitProgress(+u);
      return { label: 'Unité ' + u, pct: U.pct(up.done, up.total), value: up.done + '/' + up.total };
    });
    root.appendChild(h('div.two-col',
      h('section.card', h('h2', { text: 'Plan completion by week' }), hbars(weeks)),
      h('section.card', h('h2', { text: 'NLF "Road to A1" by unit' }), hbars(units))));

    /* --- skills --- */
    function kindPct(fn) {
      var tot = 0, done = 0;
      for (var n2 = 1; n2 <= T.total(); n2++) T.tasks(n2).forEach(function (t2) { if (t2.core && fn(t2)) { tot++; if (T.isDone(t2)) done++; } });
      return { pct: U.pct(done, tot), value: done + '/' + tot };
    }
    var LISTEN = ['num20', 'num100', 'bignum', 'phone', 'prices', 'time', 'dates', 'spell', 'pairs'];
    var catPct = function (cat) { return kindPct(function (t2) { return t2.kind === 'lesson' && T.lesson(t2.ref) && T.lesson(t2.ref).cat === cat; }); };
    var skills = [
      Object.assign({ label: '🎧 Listening (videos + drills)' }, kindPct(function (t2) { return t2.kind === 'video' || (t2.kind === 'drill' && LISTEN.indexOf(t2.ref) > -1); })),
      Object.assign({ label: '🗣️ Speaking' }, kindPct(function (t2) { return t2.kind === 'speak'; })),
      Object.assign({ label: '✍️ Writing' }, kindPct(function (t2) { return t2.kind === 'write' || t2.ref === 'dictation'; })),
      Object.assign({ label: '🧠 Grammar lessons' }, catPct('grammar')),
      Object.assign({ label: '👄 Pronunciation lessons' }, catPct('pronunciation')),
      Object.assign({ label: '💬 Vocabulary lessons' }, catPct('topic')),
      Object.assign({ label: '✅ Checkpoints & exams' }, kindPct(function (t2) { return t2.kind === 'review' || t2.kind === 'exam'; }))
    ];
    root.appendChild(h('section.card', h('h2', { text: 'Skills coverage' }), h('p.muted.small', { text: 'Share of each kind of core task you have completed.' }), hbars(skills)));

    /* --- quiz history --- */
    var qh = S.state.quiz.slice(-12).reverse();
    var qsec = h('section.card', h('h2', { text: 'Recent quiz results' }));
    if (!qh.length) qsec.appendChild(h('p.muted', { text: 'No quizzes yet — every lesson ends with one.' }));
    else {
      var avg = Math.round(U.sum(S.state.quiz, function (q) { return U.pct(q.score, q.total); }) / S.state.quiz.length);
      qsec.appendChild(h('p.muted.small', { text: S.state.quiz.length + ' quizzes & drills taken · average ' + avg + '%' }));
      qsec.appendChild(h('div.tbl', h('table.data-table', h('thead', h('tr', ['When', 'What', 'Score'].map(function (x) { return h('th', { text: x }); }))),
        h('tbody', qh.map(function (q) { var d = new Date(q.at); return h('tr', h('td', { text: U.fmtShort(d) }), h('td', { text: q.title }), h('td', { text: q.score + '/' + q.total + ' (' + U.pct(q.score, q.total) + '%)' })); })))));
    }
    root.appendChild(qsec);

    /* --- can-do checklist --- */
    var cd = h('section.card', { id: 'cando' });
    var ready = function () { var tot = (A1.cando || []).length * 2; return U.pct(U.sum(A1.cando || [], function (c) { return S.state.cando[c.id] || 0; }), tot); };
    var readyEl = h('span.pill');
    function updReady() { readyEl.textContent = 'A1 readiness: ' + ready() + '%'; }
    cd.appendChild(h('div.row.between', h('h2', { text: '🏁 A1 can-do checklist' }), readyEl));
    cd.appendChild(h('p.muted.small', { text: 'Be honest — this is how examiners think about A1. Re-rate yourself every week.' }));
    var groups = {};
    (A1.cando || []).forEach(function (c) { (groups[c.skill] = groups[c.skill] || []).push(c); });
    Object.keys(groups).forEach(function (g) {
      cd.appendChild(h('h3', { text: g }));
      var ul = h('ul.cando');
      groups[g].forEach(function (c) {
        var row = h('li');
        var opts = h('div.seg', { role: 'radiogroup', 'aria-label': c.text });
        [['Not yet', 0], ['With help', 1], ['Yes!', 2]].forEach(function (o2) {
          var b2 = h('button.seg-b' + (S.state.cando[c.id] === o2[1] ? '.on' : ''), { type: 'button', role: 'radio', 'aria-checked': S.state.cando[c.id] === o2[1] ? 'true' : 'false', text: o2[0],
            onclick: function () { S.state.cando[c.id] = o2[1]; S.save(); U.$$('.seg-b', opts).forEach(function (x, i) { x.classList.toggle('on', i === o2[1]); x.setAttribute('aria-checked', i === o2[1]); }); updReady(); } });
          opts.appendChild(b2);
        });
        row.appendChild(h('span', { text: c.text }));
        row.appendChild(opts);
        ul.appendChild(row);
      });
      cd.appendChild(ul);
    });
    updReady();
    root.appendChild(cd);

    /* --- backup --- */
    root.appendChild(V.backupCard());
    if (query.tab === 'cando') setTimeout(function () { cd.scrollIntoView({ behavior: 'smooth' }); }, 100);
  };

  V.backupCard = function () {
    var file = h('input', { type: 'file', accept: 'application/json,.json', hidden: true });
    file.addEventListener('change', function () {
      var f = file.files[0];
      if (!f) return;
      var rd = new FileReader();
      rd.onload = function () {
        try { S.importText(rd.result); T.invalidate(); U.toast('Progress restored ✓', 'ok'); A1.App.render(); }
        catch (e) { U.toast(e.message || 'Could not read that file', 'warn'); }
      };
      rd.readAsText(f);
    });
    return h('section.card', h('h2', { text: '💾 Backup & sync' }),
      h('p.muted.small', { text: 'Your progress is saved in this browser only. To continue on another device (phone ↔ laptop), download a backup here and restore it there. Back up once a week.' }),
      h('div.row',
        h('button.btn.primary', { type: 'button', text: '⬇ Download backup', onclick: function () { U.download('french-a1-progress-' + U.todayKey() + '.json', S.exportText()); } }),
        h('button.btn', { type: 'button', text: '⬆ Restore from file', onclick: function () { file.click(); } }),
        h('button.btn.ghost.danger', { type: 'button', text: 'Reset all progress', onclick: function () { if (confirm('Delete ALL progress on this device? Download a backup first if unsure.')) { S.reset(); T.invalidate(); A1.App.render(); U.toast('Progress reset'); } } })),
      file, S.storageOk ? null : h('p.callout.warn', { text: '⚠ This browser is blocking storage (private mode?). Progress will be lost when you close the tab.' }));
  };
})();
