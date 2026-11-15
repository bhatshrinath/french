/* Learn: lesson library, lesson page, unit checkpoint quizzes. */
(function () {
  'use strict';
  var A1 = window.A1, U = A1.U, S = A1.S, T = A1.T, R = A1.R, h = U.h, esc = U.esc;
  var V = A1.V = A1.V || {};
  var CAT_ICON = { pronunciation: '👄', grammar: '🧠', topic: '💬', culture: '🇫🇷' };
  var CATS = [['all', 'All'], ['pronunciation', 'Pronunciation'], ['grammar', 'Grammar'], ['topic', 'Vocabulary & phrases'], ['culture', 'Culture']];

  /* plan day where a lesson is scheduled */
  function dayOf(lessonId) {
    var days = A1.plan.days;
    for (var i = 0; i < days.length; i++) if ((days[i].learn || []).indexOf(lessonId) > -1) return days[i].d;
    return null;
  }
  V.lessonDay = dayOf;

  V.learn = function (root, params, query) {
    var cat = query.cat || 'all', term = '';
    root.appendChild(h('div.page-head', h('h1', { text: 'Learn' }),
      h('p.muted', { text: 'Short lessons in plain English. Tap any French word to hear it. Each lesson ends with a quiz.' })));
    var filters = h('div.chips-row', { role: 'tablist' });
    var search = h('input.search', { type: 'search', placeholder: 'Search lessons… (e.g. passé, numbers, café)', 'aria-label': 'Search lessons' });
    var list = h('div.lesson-grid');
    CATS.forEach(function (c) {
      filters.appendChild(h('button.chip' + (c[0] === cat ? '.on' : ''), { type: 'button', role: 'tab', 'aria-selected': c[0] === cat ? 'true' : 'false', text: c[1],
        onclick: function () { cat = c[0]; U.$$('.chip', filters).forEach(function (b) { b.classList.toggle('on', b.textContent === c[1]); b.setAttribute('aria-selected', b.textContent === c[1]); }); draw(); } }));
    });
    search.addEventListener('input', U.debounce(function () { term = U.norm(search.value, true); draw(); }, 120));
    root.appendChild(filters);
    root.appendChild(search);
    root.appendChild(list);
    var planned = [];
    A1.plan.days.forEach(function (d) { (d.learn || []).forEach(function (id) { if (planned.indexOf(id) < 0) planned.push(id); }); });
    function draw() {
      list.innerHTML = '';
      var lessons = planned.map(function (id) { return T.lesson(id) || { id: id, missing: true }; });
      A1.lessons.forEach(function (l) { if (planned.indexOf(l.id) < 0) lessons.push(l); });
      var shown = 0;
      lessons.forEach(function (l) {
        if (!l.missing && cat !== 'all' && l.cat !== cat) return;
        if (l.missing && cat !== 'all') return;
        if (term && (l.missing || U.norm(l.title + ' ' + l.summary, true).indexOf(term) < 0)) return;
        shown++;
        var day = dayOf(l.id);
        if (l.missing) {
          list.appendChild(h('div.lesson-card.missing', h('div.lc-ic', { text: '⏳' }), h('div', h('b', { text: 'Lesson coming soon' }), h('div.muted.small', { text: (day ? 'Day ' + day + ' · ' : '') + l.id }))));
          return;
        }
        var res = S.state.lessons[l.id];
        list.appendChild(h('a.lesson-card' + (res ? '.done' : ''), { href: '#/lesson/' + l.id },
          h('div.lc-ic', { text: l.icon || CAT_ICON[l.cat] || '📘' }),
          h('div.lc-main', h('b', { text: l.title }), h('div.muted.small', { text: T.catLabel(l.cat) + ' · ' + l.minutes + ' min' + (day ? ' · Day ' + day : '') }),
            h('div.small.lc-sum', { text: l.summary })),
          h('div.lc-side', { text: res ? '✓ ' + res.best + '%' : '' })));
      });
      if (!shown) list.appendChild(h('p.muted', { text: 'No lesson matches.' }));
    }
    draw();
  };

  V.lesson = function (root, params, query) {
    var l = T.lesson(params[0]);
    if (!l) { root.appendChild(h('div.card', h('h2', { text: 'Lesson coming soon' }), h('p.muted', { text: 'This lesson is still being written. Watch the NLF video for today, then come back.' }), h('a.btn', { href: '#/learn', text: '← All lessons' }))); return; }
    var day = dayOf(l.id), res = S.state.lessons[l.id];
    root.appendChild(h('div.crumbs', h('a', { href: '#/learn', text: '← Learn' }), day ? h('a', { href: '#/day/' + day, text: 'Day ' + day }) : null));
    var art = h('article.lesson.card');
    art.appendChild(h('div.lesson-head',
      h('div.day-meta', h('span.pill', { text: (CAT_ICON[l.cat] || '') + ' ' + T.catLabel(l.cat) }), h('span.muted', { text: '⏱ ' + l.minutes + ' min' }), res ? h('span.pill.ok', { text: '✓ Best ' + res.best + '%' }) : null),
      h('h1', { text: l.title }),
      h('p.lead', { text: l.summary }),
      h('p.muted.small', { html: 'Tap any <span class="fr">French</span> text to hear it. <span class="say-toggle-hint">Grey text = pronunciation guide (CAPITALS = stressed syllable).</span>' })));
    art.appendChild(h('div.lesson-body', { html: R.lessonBody(l) }));
    if (l.vocab && l.vocab.length) {
      art.appendChild(h('section.vocab-sec',
        h('div.row.between', h('h2', { text: '🗂️ Words to learn (' + l.vocab.length + ')' }), h('a.btn.small.primary', { href: '#/cards/' + l.id, text: 'Study as flashcards' })),
        h('div', { html: R.wordList(l.vocab) })));
    }
    /* related NLF videos (the plan day where this lesson appears) */
    if (day) {
      var vids = T.tasks(day).filter(function (t) { return t.kind === 'video' && t.core; });
      if (vids.length) {
        var vl = h('ul.mini-list');
        vids.forEach(function (t) {
          vl.appendChild(h('li', h('button.linkish', { type: 'button', onclick: function () { A1.Player.open(t.vid, { title: t.title, task: t }); } }, '▶ ' + t.title), h('span.muted.small', { text: ' · ' + t.sub.replace('NLF · ', '') + ' · ' + t.minutes + ' min' + (S.state.videos[t.vid] ? ' · ✓ watched' : '') })));
        });
        art.appendChild(h('section.related', h('h3', { text: '🎬 NLF videos for this topic (Day ' + day + ')' }), vl));
      }
    }
    var refs = (A1.bookRefs || {})[l.id];
    if (refs && refs.length) {
      var rl = h('ul.mini-list');
      refs.forEach(function (r) {
        var b = T.book(r[0]);
        if (!b) return;
        var label = b.icon + ' ' + b.short + ' — ' + r[2] + ', p. ' + r[1];
        rl.appendChild(h('li', U.isLocalFile() ? h('a', { href: T.pdfHref(r[0], r[1]), target: '_blank', rel: 'noopener', text: label }) : h('span', { text: label })));
      });
      art.appendChild(h('section.related', h('h3', { text: '📚 Read more in your books' }), rl,
        U.isLocalFile() ? null : h('p.muted.small', { text: 'Page links open the PDFs directly when you use the app from your computer folder (index.html).' })));
    }
    root.appendChild(art);
    var quizSec = h('section.card.quiz-sec', { id: 'quiz' });
    var start = h('button.btn.primary.big', { type: 'button', text: '✅ Check yourself · ' + l.quiz.length + ' questions' });
    quizSec.appendChild(h('h2', { text: 'Quiz' }));
    quizSec.appendChild(h('p.muted', { text: 'Finish the quiz to complete this lesson. Aim for 70% or more — you can retry as often as you like.' }));
    quizSec.appendChild(start);
    start.addEventListener('click', function () {
      A1.Quiz.mount(quizSec, l.quiz, {
        title: l.title,
        onFinish: function (score, total) {
          var pct = U.pct(score, total), prev = S.state.lessons[l.id] || { best: 0, n: 0 };
          S.state.lessons[l.id] = { best: Math.max(prev.best || 0, pct), last: pct, at: new Date().toISOString(), n: (prev.n || 0) + 1 };
          S.addQuiz('lesson:' + l.id, l.title, score, total);
          if (!prev.at) { S.log('min', l.minutes); S.log('tasks', 1); }
          S.save();
        },
        doneLabel: day ? 'Back to Day ' + day : 'Back to lessons',
        onDone: function () { location.hash = day ? '#/day/' + day : '#/learn'; }
      });
      quizSec.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
    root.appendChild(quizSec);
    if (query.quiz) start.click();
  };

  /* Unit checkpoint: #/review/<day> */
  V.review = function (root, params, query) {
    var n = parseInt(params[0], 10), d = A1.plan.days[n - 1];
    if (!d || !d.review) { root.appendChild(h('p', { text: 'No checkpoint here.' })); return; }
    var qs = A1.Quiz.fromLessons(d.review.lessons, 12);
    root.appendChild(h('div.crumbs', h('a', { href: '#/day/' + n, text: '← Day ' + n })));
    var box = h('section.card');
    box.appendChild(h('h1', { text: d.review.title }));
    root.appendChild(box);
    if (qs.length < 4) { box.appendChild(h('p.muted', { text: 'The lessons for this checkpoint are not available yet. Come back soon!' })); return; }
    var qd = h('div');
    box.appendChild(qd);
    A1.Quiz.mount(qd, qs, {
      title: 'Checkpoint',
      onFinish: function (score, total) {
        S.addQuiz('review:' + n, d.review.title, score, total);
        var t = T.byId(query.task) || T.tasks(n).filter(function (x) { return x.kind === 'review'; })[0];
        if (t) T.setDone(t, true);
      },
      doneLabel: 'Back to Day ' + n,
      onDone: function () { location.hash = '#/day/' + n; }
    });
  };
})();
