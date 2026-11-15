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
      var date = T.dateOf(n), st = T.dayStats(n), tasks = T.tasks(n);
      var isToday = U.dateKey(date) === U.todayKey();
      var head = h('div.day-head',
        h('div.day-meta',
          h('span.pill' + (isToday ? '.accent' : ''), { text: isToday ? 'Today · Day ' + n : 'Day ' + n }),
          h('span.muted', { text: U.fmtDate(date) }),
          d.unit != null ? h('span.pill', { text: 'NLF Unité ' + d.unit }) : null,
          st.complete ? h('span.pill.ok', { text: '✓ Complete' }) : null),
        h('h2.day-title', { text: d.title }),
        h('p.muted', { text: d.focus }),
        h('div.day-time', { html: '⏱ Core ≈ <b>' + U.fmtMin(st.minCore) + '</b>' + (st.videoMin ? ' <span class="muted">(' + U.fmtMin(st.minCore - st.videoMin * 0.2) + ' with videos at 1.25×)</span>' : '') +
          ' · ' + st.coreDone + '/' + st.core + ' done' }),
        h('div', { html: R.progressBar(st.pct) }));
      root.appendChild(head);
      var core = tasks.filter(function (t) { return t.core; }), bonus = tasks.filter(function (t) { return !t.core; });
      var ul = h('ul.tasks');
      core.forEach(function (t) { ul.appendChild(taskRow(t, draw)); });
      root.appendChild(ul);
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
    var st = T.status(), o = T.overall(), n = T.todayN(), now = new Date();
    var frDate = 'Aujourd\'hui, nous sommes ' + F.fullDate(now) + '.';
    var hero = h('section.hero',
      h('div.hero-text',
        h('h1', { text: greeting() }),
        h('p.fr.hero-date', { 'data-say': frDate, tabindex: '0', role: 'button', title: 'Tap to listen', text: '🔊 ' + frDate }),
        h('p.muted', { text: statusLine(st, n) })),
      h('div.hero-ring', { html: R.ring(o.pct, 112, 'Course ' + o.pct + '% complete') + '<div class="muted small center">of the plan</div>' }));
    root.appendChild(hero);

    var due = A1.SRS.totals().due, streak = S.streak();
    root.appendChild(h('div.stats-row',
      stat('🔥', streak + (streak === 1 ? ' day' : ' days'), 'streak'),
      stat('✅', o.daysComplete + ' / ' + T.total(), 'days complete'),
      stat('🃏', String(due), due === 1 ? 'card due' : 'cards due', due ? '#/cards/*' : null),
      stat('⏳', String(Math.max(0, st.daysLeft)), 'days left')));

    if (st.behind.length && !st.notStarted) {
      var first = st.behind[0];
      root.appendChild(h('div.callout.warn',
        h('b', { text: '⏰ Catch up: ' + U.plural(st.behind.length, 'earlier day') + ' still open' }),
        h('div', { text: 'Finish Day ' + first + ' first (' + T.dayStats(first).coreDone + '/' + T.dayStats(first).core + ' done). To finish by ' + U.fmtShort(T.endDate()) + ' you need about ' + U.fmtMin(st.pacePerDay) + ' a day from now on.' }),
        h('div.row', h('a.btn.small.primary', { href: '#/day/' + first, text: 'Go to Day ' + first }))));
    }
    if (st.notStarted) {
      root.appendChild(h('div.callout.note', h('b', { text: 'Your plan starts on ' + U.fmtDate(T.start()) }), h('div', { text: 'You can preview Day 1 below, or change the start date in Settings.' })));
    }
    if (st.finished && o.pct >= 99) {
      root.appendChild(h('div.callout.ok', h('b', { text: '🏆 Plan complete — félicitations !' }), h('div', { text: 'Book your DELF A1 and continue with NLF\'s Road to A2. Keep your flashcards going: 10 minutes a day.' })));
    }
    var dayBox = h('section.card.day');
    root.appendChild(dayBox);
    V.renderDay(dayBox, n);

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
  function statusLine(st, n) {
    if (st.notStarted) return 'Your 47-day plan starts in ' + U.plural(1 - st.cal, 'day') + '.';
    if (st.finished) return 'The 47-day plan is over — keep reviewing!';
    var s = 'Day ' + n + ' of ' + T.total() + ' · ' + U.plural(st.daysLeft - 1, 'day') + ' after today until ' + U.fmtShort(T.endDate()) + '. ';
    if (!st.behind.length) s += st.ahead > 0 ? 'You are ' + U.plural(st.ahead, 'day') + ' ahead. 🚀' : 'You are on track. 👍';
    else s += 'You are ' + U.plural(st.behind.length, 'day') + ' behind.';
    return s;
  }

  V.day = function (root, params) {
    var n = U.clamp(parseInt(params[0], 10) || 1, 1, T.total());
    var box = h('section.card.day');
    root.appendChild(box);
    V.renderDay(box, n, { openBonus: true });
  };

  V.plan = function (root) {
    var o = T.overall(), today = T.todayN(), st = T.status();
    root.appendChild(h('div.page-head', h('h1', { text: 'Your 47-day plan' }),
      h('p.muted', { text: U.fmtDate(T.start(), true) + ' → ' + U.fmtDate(T.endDate(), true) + ' · ' + o.coreDone + '/' + o.core + ' core tasks done (' + o.pct + '%) · ' + U.fmtMin(o.minCore - o.minDone) + ' of core work left' })));
    root.appendChild(h('div.callout.note', h('div', { html: 'Built on <b>NLF Academy\'s "Road to A1"</b> course (156 videos). Every day pairs the NLF videos with a short in-app lesson, flashcards and speaking or listening practice. <b>Weekdays ≈ 2 h, weekends ≈ 3 h</b> (≈ 20% less if you watch the videos at 1.25×). Bonus items (Cosmopolite, extra NLF exercises) are optional.' })));
    var weeks = Math.ceil(T.total() / 7);
    for (var w = 0; w < weeks; w++) {
      var from = w * 7 + 1, to = Math.min(T.total(), from + 6);
      var sec = h('section.week');
      sec.appendChild(h('h3', { text: 'Week ' + (w + 1) + ' · ' + U.fmtShort(T.dateOf(from)) + ' – ' + U.fmtShort(T.dateOf(to)) }));
      var ul = h('ul.plan-days');
      for (var n = from; n <= to; n++) {
        var d = A1.plan.days[n - 1], s = T.dayStats(n), date = T.dateOf(n);
        var cls = 'plan-day' + (n === today ? ' today' : '') + (s.complete ? ' complete' : '') + (n < st.cal && !s.complete ? ' late' : '');
        ul.appendChild(h('li', h('a.' + cls.replace(/ /g, '.'), { href: '#/day/' + n },
          h('div.pd-date', h('b', { text: 'D' + n }), h('span.muted', { text: U.weekday(date) + ' ' + U.fmtShort(date) })),
          h('div.pd-main', h('div.pd-title', { text: d.title }), h('div', { html: R.progressBar(s.pct, 'thin') })),
          h('div.pd-side.muted', { text: s.complete ? '✓' : s.coreDone + '/' + s.core + ' · ' + U.fmtMin(s.minCore) }))));
      }
      sec.appendChild(ul);
      root.appendChild(sec);
    }
  };
})();
