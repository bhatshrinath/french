/* Today, Day and Plan views. */
(function () {
  'use strict';
  var A1 = window.A1, U = A1.U, S = A1.S, T = A1.T, R = A1.R, F = A1.FR, h = U.h, esc = U.esc;
  var V = A1.V = A1.V || {};

  function taskAction(t) {
    var q = '?task=' + encodeURIComponent(t.id);
    switch (t.kind) {
      case 'video': return [
        h('button.btn.small.primary', { type: 'button', text: '▶ Watch', onclick: function () { A1.Player.open(t.vid, { title: t.title, task: t }); } }),
        h('a.btn.small.ghost', { href: T.ytUrl(t.vid), target: '_blank', rel: 'noopener', text: 'YouTube ↗', title: 'Open on YouTube' })];
      case 'lesson': return t.missing ? [h('span.pill.muted', { text: 'Coming soon' })] : [h('a.btn.small.primary', { href: '#/lesson/' + t.ref + q, text: 'Open' })];
      case 'cards': return t.missing ? [h('span.pill.muted', { text: 'Coming soon' })] : [h('a.btn.small.primary', { href: '#/cards/' + encodeURIComponent(t.ref) + q, text: 'Review' })];
      case 'speak': return t.missing ? [h('span.pill.muted', { text: 'Coming soon' })] : [h('a.btn.small.primary', { href: '#/scenario/' + t.ref + q, text: 'Practise' })];
      case 'drill': return [h('a.btn.small.primary', { href: '#/drill/' + t.ref + q, text: 'Start' })];
      case 'write': return [h('a.btn.small.primary', { href: '#/write/' + t.ref + q, text: 'Write' })];
      case 'review': return [h('a.btn.small.primary', { href: '#/review/' + t.day + q, text: 'Start quiz' })];
      case 'exam': return t.missing ? [h('span.pill.muted', { text: 'Coming soon' })] : [h('a.btn.small.primary', { href: '#/exam/' + t.ref + q, text: 'Start' })];
      case 'cando': return [h('a.btn.small.primary', { href: '#/progress?tab=cando', text: 'Open checklist' })];
      case 'book': {
        var href = T.pdfHref(t.book, t.page);
        return U.isLocalFile() ? [h('a.btn.small', { href: href, target: '_blank', rel: 'noopener', text: '📖 Open PDF' })]
          : [h('span.pill', { text: 'p. ' + t.page, title: 'Open this page in your copy of the book. (PDF links work when you open the app from your computer folder.)' })];
      }
    }
    return [];
  }

  function taskRow(t, rerender) {
    var done = T.isDone(t);
    var check = h('button.check' + (done ? '.on' : ''), {
      type: 'button', 'aria-pressed': done ? 'true' : 'false', 'aria-label': (done ? 'Mark not done: ' : 'Mark done: ') + t.title,
      onclick: function () { T.setDone(t, !T.isDone(t)); if (T.isDone(t)) celebrateIfDayDone(t.day); rerender(); }
    }, done ? '✓' : '');
    return h('li.task' + (done ? '.done' : '') + (t.missing ? '.missing' : ''),
      check,
      h('div.task-main',
        h('div.task-title', h('span.task-ic', { text: t.icon, 'aria-hidden': 'true' }), h('span', { text: t.title })),
        h('div.task-sub.muted', { text: t.sub + ' · ' + U.fmtMin(t.minutes) })),
      h('div.task-act', taskAction(t)));
  }
  function celebrateIfDayDone(n) {
    var s = T.dayStats(n);
    if (s.complete) U.toast('🎉 Day ' + n + ' complete! Bravo !', 'ok');
  }

  /* Renders one plan day into `root` */
  V.renderDay = function (root, n, opts) {
    opts = opts || {};
    var d = A1.plan.days[n - 1];
    function draw() {
      root.innerHTML = '';
      var st = T.dayStats(n), tasks = T.tasks(n), tk = U.todayKey();
      var isToday = T.todayDays().indexOf(n) > -1;
      var dates = T.datesOf(n), later = dates.filter(function (x) { return U.dateKey(x) !== tk; });
      var when = dates.map(function (x) { return U.dateKey(x) === tk ? 'today' : U.fmtDate(x); }).join(' + ');
      var head = h('div.day-head',
        h('div.day-meta',
          h('span.pill' + (isToday ? '.accent' : ''), { text: isToday ? 'Today · Day ' + n : 'Day ' + n }),
          h('span.muted', { text: when ? 'Scheduled ' + when : st.complete ? 'Done' : '' }),
          d.unit != null ? h('span.pill', { text: 'NLF Unité ' + d.unit }) : null,
          st.complete ? h('span.pill.ok', { text: '✓ Complete' }) : null),
        h('h2.day-title', { text: d.title }),
        h('p.muted', { text: d.focus }),
        h('div.day-time', { html: '⏱ Core ≈ <b>' + U.fmtMin(st.minCore) + '</b>' + (st.videoMin ? ' <span class="muted">(' + U.fmtMin(st.minCore - st.videoMin * 0.2) + ' with videos at 1.25×)</span>' : '') +
          ' · ' + st.coreDone + '/' + st.core + ' done' }),
        h('div', { html: R.progressBar(st.pct) }));
      root.appendChild(head);
      var only = opts.only || null;
      var core = tasks.filter(function (t) { return t.core && (!only || only.indexOf(t.id) > -1); }), bonus = tasks.filter(function (t) { return !t.core; });
      if (only && core.length < st.core) {
        var part = U.sum(core, function (t) { return T.isDone(t) ? 0 : t.minutes; });
        root.appendChild(h('div.callout.note.small', { text: 'Today’s part of this plan day: ' + core.length + ' of ' + st.core + ' core tasks (≈ ' + U.fmtMin(part) + ' left).' + (later.length ? ' The rest is planned for ' + later.map(U.fmtDate).join(', ') + '.' : '') }));
      }
      var ul = h('ul.tasks');
      core.forEach(function (t) { ul.appendChild(taskRow(t, draw)); });
      root.appendChild(ul);
      if (only && core.length < st.core) root.appendChild(h('a.small', { href: '#/day/' + n, text: 'See all of Day ' + n + ' →' }));
      if (bonus.length) {
        var bul = h('ul.tasks');
        bonus.forEach(function (t) { bul.appendChild(taskRow(t, draw)); });
        var det = h('details.bonus' + (opts.openBonus ? '' : ''), h('summary', { text: 'Bonus (optional) · ' + st.bonusDone + '/' + st.bonus }), bul);
        if (opts.openBonus) det.open = true;
        root.appendChild(det);
      }
      if (d.tip) root.appendChild(h('div.callout.tip', h('b', { text: '💡 Coach\'s tip' }), h('div', { text: d.tip })));
      if (opts.nav !== false) {
        root.appendChild(h('div.day-nav',
          n > 1 ? h('a.btn.ghost', { href: '#/day/' + (n - 1), text: '← Day ' + (n - 1) }) : h('span'),
          h('a.btn.ghost', { href: '#/plan', text: 'Full plan' }),
          n < T.total() ? h('a.btn.ghost', { href: '#/day/' + (n + 1), text: 'Day ' + (n + 1) + ' →' }) : h('span')));
      }
    }
    draw();
    return draw;
  };

  V.today = function (root) {
    var st = T.status(), o = T.overall(), now = new Date();
    var frDate = 'Aujourd\'hui, nous sommes ' + F.fullDate(now) + '.';
    var hero = h('section.hero',
      h('div.hero-text',
        h('h1', { text: greeting() }),
        h('p.fr.hero-date', { 'data-say': frDate, tabindex: '0', role: 'button', title: 'Tap to listen', text: '🔊 ' + frDate }),
        h('p.muted', { text: statusLine(st) })),
      h('div.hero-ring', { html: R.ring(o.pct, 112, 'Course ' + o.pct + '% complete') + '<div class="muted small center">of the plan</div>' }));
    root.appendChild(hero);

    var due = A1.SRS.totals().due, streak = S.streak();
    root.appendChild(h('div.stats-row',
      stat('🔥', streak + (streak === 1 ? ' day' : ' days'), 'streak'),
      stat('✅', o.daysComplete + ' / ' + T.total(), 'plan days done'),
      stat('🃏', String(due), due === 1 ? 'card due' : 'cards due', due ? '#/cards/*' : null),
      stat('⏳', String(st.daysLeft), 'days to ' + U.fmtShort(T.endDate()))));

    if (st.allDone) {
      root.appendChild(h('div.callout.ok', h('b', { text: '🏆 Plan complete — félicitations !' }), h('div', { text: 'Book your DELF A1 and continue with NLF\'s Road to A2. Keep your flashcards going: 10 minutes a day.' })));
    } else if (st.heavy) {
      root.appendChild(h('div.callout.warn', h('b', { text: '⏰ The plan is tight' }),
        h('div', { text: 'To finish by ' + U.fmtDate(T.endDate()) + ' you need about ' + U.fmtMin(st.perWeekday) + ' on weekdays and ' + U.fmtMin(st.perWeekend) + ' on weekend days. Watch videos at 1.25× and skip the bonus items — or move the end date in Settings.' })));
    }
    if (!st.allDone) {
      if (!st.today.length) {
        root.appendChild(h('div.callout.note', h('b', { text: '😌 Nothing scheduled today' }), h('div', { text: 'A lighter day. Review your flashcards — or get ahead with Day ' + T.nextDay() + '.' })));
      } else if (st.todayDone) {
        root.appendChild(h('div.callout.ok', h('b', { text: '🎉 Today\'s plan is done — bravo !' }),
          h('div', { text: 'Want to get ahead? Every extra bit lightens the days to come.' }),
          T.nextDay() <= T.total() ? h('div.row', h('a.btn.small.primary', { href: '#/day/' + T.nextDay(), text: 'Start Day ' + T.nextDay() })) : null));
      }
      st.today.forEach(function (n) {
        var dayBox = h('section.card.day');
        root.appendChild(dayBox);
        V.renderDay(dayBox, n, { nav: st.today.length === 1, only: T.todayTasks() });
      });
      if (!st.today.length && T.nextDay() <= T.total()) {
        var nb = h('section.card.day');
        root.appendChild(nb);
        V.renderDay(nb, T.nextDay());
      }
    }

    root.appendChild(h('section.quick',
      h('h3', { text: 'Quick practice' }),
      h('div.quick-grid',
        quick('#/cards/*', '🃏', 'Due flashcards', due + ' waiting'),
        quick('#/drill/' + U.pick(['num100', 'phone', 'prices', 'time', 'dates']), '🎯', 'Random listening drill', '2 minutes'),
        quick('#/lab', '🎙️', 'Pronunciation lab', 'Type anything, hear it, say it'),
        quick('#/conj', '🧩', 'Verb trainer', A1.verbs.length + ' verbs'))));
  }

  function stat(icon, value, label, href) {
    var inner = [h('div.stat-v', h('span', { text: icon + ' ' }), value), h('div.stat-l.muted', { text: label })];
    return href ? h('a.stat', { href: href }, inner) : h('div.stat', inner);
  }
  function quick(href, icon, title, sub) { return h('a.quick-card', { href: href }, h('div.qi', { text: icon }), h('div', h('b', { text: title }), h('div.muted.small', { text: sub }))); }
  function greeting() {
    var hr = new Date().getHours();
    return hr < 5 ? 'Bonne nuit 🌙' : hr < 12 ? 'Bonjour ! ☀️' : hr < 18 ? 'Bon après-midi ! 👋' : 'Bonsoir ! 🌆';
  }
  function statusLine(st) {
    if (st.allDone) return 'All 47 plan days done — keep reviewing!';
    if (st.overdue) return 'The end date has passed — everything left is due today. Move the end date in Settings if you need more time.';
    var td = st.today.length ? 'Today: Day ' + st.today.join(' + ') + ' (≈ ' + U.fmtMin(st.todayMin) + ' left). ' : '';
    return td + U.plural(st.daysLeft, 'day') + ' to ' + U.fmtShort(T.endDate()) + ' · pace ≈ ' + U.fmtMin(st.perWeekday) + ' on weekdays, ' + U.fmtMin(st.perWeekend) + ' on weekends.';
  }
  function planRow(n, extraCls) {
    var d = A1.plan.days[n - 1], s = T.dayStats(n);
    var cls = 'plan-day' + (s.complete ? '.complete' : '') + (extraCls || '');
    return h('li', h('a.' + cls, { href: '#/day/' + n },
      h('div.pd-date', h('b', { text: 'Day ' + n }), d.unit != null ? h('span.muted', { text: 'Unité ' + d.unit }) : null),
      h('div.pd-main', h('div.pd-title', { text: d.title }), h('div', { html: R.progressBar(s.pct, 'thin') })),
      h('div.pd-side.muted', { text: s.complete ? '✓' : s.coreDone + '/' + s.core + ' · ' + U.fmtMin(T.remaining(n)) })));
  }

  V.day = function (root, params) {
    var n = U.clamp(parseInt(params[0], 10) || 1, 1, T.total());
    var box = h('section.card.day');
    root.appendChild(box);
    V.renderDay(box, n, { openBonus: true });
  };

  V.plan = function (root) {
    var o = T.overall(), st = T.status(), sc = T.schedule(), tk = U.todayKey();
    root.appendChild(h('div.page-head', h('h1', { text: 'Your plan → ' + U.fmtDate(T.endDate()) }),
      h('p.muted', { text: o.coreDone + '/' + o.core + ' core tasks done (' + o.pct + '%) · ' + U.fmtMin(st.minLeft) + ' of core work left · ' + U.plural(st.daysLeft, 'day') + ' to go' })));
    root.appendChild(h('div.callout.note',
      h('div', { html: 'The plan <b>adapts every day</b>: whatever is left is spread from today to <b>' + U.fmtDate(T.endDate(), true) + '</b>, with <b>' + T.weekendWeight() + '× more on Saturdays and Sundays</b>. Right now: about <b>' + U.fmtMin(st.perWeekday) + ' per weekday</b> and <b>' + U.fmtMin(st.perWeekend) + ' per weekend day</b>. Miss a day and the rest re-balances; get ahead and the days get lighter. Built on NLF Academy\'s "Road to A1" (156 videos); bonus items are optional.' }),
      h('div.row', h('a.btn.small', { href: '#/settings', text: '⚙️ End date & weekend load' }), h('button.btn.small.ghost', { type: 'button', text: '↻ Re-plan today', onclick: function () { T.replan(); A1.App.render(); U.toast('Re-planned from today'); } }))));
    var done = [];
    for (var n = 1; n <= T.total(); n++) if (T.dayStats(n).complete) done.push(n);
    if (done.length) {
      root.appendChild(h('details.card', h('summary', { text: '✓ Completed: ' + U.plural(done.length, 'plan day') }), h('ul.plan-days', done.map(function (x) { return planRow(x); }))));
    }
    var sec = null, lastWeek = null;
    sc.dates.forEach(function (dt) {
      var key = U.dateKey(dt), days = sc.byDate[key] || [];
      var mon = U.addDays(dt, -((dt.getDay() + 6) % 7)), wk = U.dateKey(mon);
      if (wk !== lastWeek) {
        lastWeek = wk;
        sec = h('section.week', h('h3', { text: 'Week of ' + U.fmtShort(mon) }), h('ul.plan-dates'));
        root.appendChild(sec);
      }
      var isToday = key === tk, wkend = dt.getDay() === 0 || dt.getDay() === 6;
      var load = U.sum((sc.byDateTasks[key] || []).map(T.byId).filter(Boolean), function (t) { return T.isDone(t) ? 0 : t.minutes; });
      U.$('.plan-dates', sec).appendChild(h('li.plan-date' + (isToday ? '.today' : ''),
        h('div.pdt-h', h('b', { text: (isToday ? 'Today · ' : '') + U.fmtDate(dt) }), wkend ? h('span.pill.accent', { text: 'weekend' }) : null,
          h('span.muted.small', { text: days.length ? '≈ ' + U.fmtMin(load) : 'free · catch-up / flashcards' })),
        days.length ? h('ul.plan-days', days.map(function (x) { return planRow(x, isToday ? '.today' : ''); })) : null));
    });
  };
})();
