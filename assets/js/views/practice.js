/* Practice hub, drills, verb trainer, writing, flashcards. */
(function () {
  'use strict';
  var A1 = window.A1, U = A1.U, S = A1.S, T = A1.T, R = A1.R, F = A1.FR, Sp = A1.Speech, h = U.h, esc = U.esc;
  var V = A1.V = A1.V || {};

  function finishTask(query, kind, ref) {
    var t = query && query.task ? T.byId(query.task) : null;
    if (t) { if (!T.isDone(t)) T.setDone(t, true); return t; }
    return T.completeMatching(kind, ref);
  }
  V.finishTask = finishTask;

  V.practice = function (root) {
    root.appendChild(h('div.page-head', h('h1', { text: 'Practice' }), h('p.muted', { text: 'Speaking, listening, flashcards, verbs, writing and DELF A1 mock exams.' })));

    /* speaking */
    var sp = h('section.sec');
    sp.appendChild(h('div.row.between', h('h2', { text: '🗣️ Speaking' }), h('a.btn.small', { href: '#/lab', text: '🎙️ Pronunciation lab' })));
    if (!Sp.srSupported) sp.appendChild(h('p.muted.small', { text: 'Tip: open this app in Chrome or Edge to get automatic speech scoring. In other browsers you can still listen, record yourself and compare.' }));
    var g = h('div.tile-grid');
    A1.scenarios.forEach(function (s) {
      var best = S.state.speak[s.id];
      g.appendChild(h('a.tile' + (best ? '.done' : ''), { href: '#/scenario/' + s.id }, h('div.tile-ic', { text: s.icon || '🗣️' }), h('b', { text: s.title }), h('div.muted.small', { text: best ? 'Best ' + best.best + '%' : s.goal })));
    });
    if (A1.scenarios.length < 16) g.appendChild(h('div.tile.missing', h('div.tile-ic', { text: '⏳' }), h('b', { text: 'More scenarios coming' }), h('div.muted.small', { text: 'train, hotel, doctor, phone…' })));
    sp.appendChild(g);
    root.appendChild(sp);

    /* drills */
    var dr = h('section.sec', h('h2', { text: '🎯 Listening & grammar drills' }), h('p.muted.small', { text: 'Endless auto-generated questions — perfect for 5-minute sessions.' }));
    var dg = h('div.tile-grid');
    A1.Drills.list.forEach(function (d) {
      var r = S.state.drills[d.id];
      dg.appendChild(h('a.tile', { href: '#/drill/' + d.id }, h('div.tile-ic', { text: d.icon }), h('b', { text: d.title }), h('div.muted.small', { text: r ? 'Best ' + r.best + '% · ' + r.n + '×' : d.sub })));
    });
    dg.appendChild(h('a.tile', { href: '#/conj' }, h('div.tile-ic', { text: '📖' }), h('b', { text: 'Verb tables & trainer' }), h('div.muted.small', { text: A1.verbs.length + ' verbs, 5 tenses' })));
    dr.appendChild(dg);
    root.appendChild(dr);

    /* flashcards */
    var tot = A1.SRS.totals();
    var fc = h('section.sec', h('div.row.between', h('h2', { text: '🃏 Flashcards' }), h('a.btn.small.primary', { href: '#/cards/*', text: 'Review all due (' + tot.due + ')' })),
      h('p.muted.small', { text: tot.learned + ' words learned · ' + tot.seen + ' seen · ' + tot.total + ' available. New words come in gently: up to ' + (S.get('newPerSession') || 12) + ' per session.' }));
    var fg = h('div.deck-list');
    A1.SRS.decks().forEach(function (d) {
      var s = A1.SRS.stats(d.id);
      fg.appendChild(h('a.deck', { href: '#/cards/' + d.id }, h('span.deck-ic', { text: d.icon }), h('span.deck-t', { text: d.title }),
        h('span.deck-s.muted.small', { text: s.seen + '/' + s.total + (s.due ? ' · ' + s.due + ' due' : '') }), h('span', { html: R.progressBar(U.pct(s.learned, s.total), 'thin') })));
    });
    fc.appendChild(fg);
    root.appendChild(fc);

    /* writing */
    var wr = h('section.sec', h('h2', { text: '✍️ Writing (DELF A1 style)' }));
    var wg = h('div.tile-grid');
    (A1.writing || []).forEach(function (w) {
      var mine = S.state.writing[w.id];
      wg.appendChild(h('a.tile' + (mine && mine.words >= w.minWords ? '.done' : ''), { href: '#/write/' + w.id }, h('div.tile-ic', { text: '✍️' }), h('b', { text: w.title }), h('div.muted.small', { text: mine ? mine.words + ' words written' : w.minWords + '+ words' })));
    });
    wr.appendChild(wg);
    root.appendChild(wr);

    /* exams */
    var ex = h('section.sec', h('h2', { text: '🎓 DELF A1 mock exams' }));
    var eg = h('div.tile-grid');
    A1.exams.forEach(function (x) {
      var r = S.state.exams[x.id];
      eg.appendChild(h('a.tile' + (r ? '.done' : ''), { href: '#/exam/' + x.id }, h('div.tile-ic', { text: '🎓' }), h('b', { text: x.title }), h('div.muted.small', { text: r ? 'Score ' + r.total + '/100' : 'Listening · reading · writing · speaking' })));
    });
    if (!A1.exams.length) eg.appendChild(h('div.tile.missing', h('div.tile-ic', { text: '⏳' }), h('b', { text: 'Mock exams coming soon' }), h('div.muted.small', { text: 'Scheduled for Days 46–47' })));
    ex.appendChild(eg);
    root.appendChild(ex);
  };

  V.drill = function (root, params, query) {
    var d = A1.Drills.get(params[0]);
    if (!d) { root.appendChild(h('p', { text: 'Unknown drill.' })); return; }
    root.appendChild(h('div.crumbs', h('a', { href: '#/practice', text: '← Practice' })));
    var box = h('section.card');
    root.appendChild(box);
    function run() {
      box.innerHTML = '';
      box.appendChild(h('h1', { text: d.icon + ' ' + d.title }));
      box.appendChild(h('p.muted', { text: d.sub }));
      var qd = h('div');
      box.appendChild(qd);
      A1.Quiz.mount(qd, A1.Drills.build(d.id, 10), {
        title: d.title,
        onFinish: function (score, total) {
          var pct = U.pct(score, total), prev = S.state.drills[d.id] || { best: 0, n: 0 };
          S.state.drills[d.id] = { best: Math.max(prev.best, pct), last: pct, n: prev.n + 1, at: new Date().toISOString() };
          S.addQuiz('drill:' + d.id, d.title, score, total);
          finishTask(query, 'drill', d.id);
        },
        doneLabel: '↻ New round', onDone: run
      });
    }
    run();
  };

  /* ---------- verbs ---------- */
  V.conj = function (root, params, query) {
    root.appendChild(h('div.crumbs', h('a', { href: '#/practice', text: '← Practice' })));
    var box = h('section.card');
    root.appendChild(box);
    box.appendChild(h('h1', { text: '📖 Verb tables' }));
    var sel = h('select.select', { 'aria-label': 'Choose a verb' });
    var groups = { 'Irregular': [], 'Regular -er': [], '-ir / -re': [], 'Reflexive': [] };
    A1.verbs.forEach(function (v) {
      var gname = v.refl ? 'Reflexive' : (v.g === 'er' || v.er) ? 'Regular -er' : (v.g === 'ir' || v.g === 're') ? '-ir / -re' : 'Irregular';
      groups[gname].push(v);
    });
    Object.keys(groups).forEach(function (gname) {
      var og = h('optgroup', { label: gname });
      groups[gname].forEach(function (v) { og.appendChild(h('option', { value: F.key(v), text: F.name(v) + ' — ' + v.en })); });
      sel.appendChild(og);
    });
    if (params[0]) sel.value = decodeURIComponent(params[0]);
    var table = h('div.conj-tables');
    box.appendChild(h('div.row', sel));
    box.appendChild(table);
    function drawTables() {
      var vb = F.find(sel.value);
      table.innerHTML = '';
      ['present', 'pc', 'fp', 'imparfait', 'imperatif'].forEach(function (t) {
        var forms = F.forms(vb, t);
        if (!forms) return;
        var all = forms.map(Sp.clean).join('. ') + '.';
        table.appendChild(h('div.conj-card', h('div.row.between', h('b', { text: F.TENSES[t] }), h('span', { html: R.spk(all, { label: '🔊' }) })),
          h('div.muted.small', { text: F.TENSES_EN[t] + (t === 'pc' ? ' · aux. ' + (F.usesEtre(vb) ? 'être' : 'avoir') : '') }),
          h('ul.conj-list', forms.map(function (f) { return h('li', { html: '<span class="fr" data-say="' + esc(Sp.clean(f)) + '">' + esc(f) + '</span>' }); }))));
      });
    }
    sel.addEventListener('change', drawTables);
    drawTables();

    /* trainer */
    var tr = h('section.card');
    root.appendChild(tr);
    tr.appendChild(h('h2', { text: '🧩 Conjugation trainer' }));
    tr.appendChild(h('p.muted', { text: 'Pick verbs and tenses, then answer 10 questions. You can type just the verb ("finissons") or the whole thing ("nous finissons").' }));
    var vbox = h('div.check-grid');
    A1.verbs.forEach(function (v) {
      vbox.appendChild(h('label.check-item', h('input', { type: 'checkbox', value: F.key(v), checked: !!v.core }), ' ' + F.name(v)));
    });
    var tbox = h('div.row');
    Object.keys(F.TENSES).forEach(function (t) { tbox.appendChild(h('label.check-item', h('input', { type: 'checkbox', value: t, checked: t === 'present' }), ' ' + F.TENSES[t])); });
    tr.appendChild(h('details', h('summary', { text: 'Verbs (' + A1.verbs.filter(function (v) { return v.core; }).length + ' core verbs selected)' }), vbox));
    tr.appendChild(h('div', h('b', { text: 'Tenses: ' }), tbox));
    var qd = h('div');
    tr.appendChild(h('div.row', h('button.btn.primary', { type: 'button', text: 'Start 10 questions', onclick: function () {
      var keys = U.$$('input:checked', vbox).map(function (i) { return i.value; });
      var tenses = U.$$('input:checked', tbox).map(function (i) { return i.value; });
      if (!keys.length || !tenses.length) { U.toast('Choose at least one verb and one tense.', 'warn'); return; }
      A1.Quiz.mount(qd, A1.Drills.buildConj(keys, tenses, 10), { title: 'Verbs', onFinish: function (s, t) { S.addQuiz('drill:conj', 'Verb trainer', s, t); finishTask(query, 'drill', 'conj'); }, doneLabel: false });
    } })));
    tr.appendChild(qd);
  };

  /* ---------- writing ---------- */
  V.write = function (root, params, query) {
    var w = T.writing(params[0]);
    if (!w) { root.appendChild(h('p', { text: 'Writing task not found.' })); return; }
    var mine = S.state.writing[w.id] || {};
    root.appendChild(h('div.crumbs', h('a', { href: '#/practice', text: '← Practice' })));
    var box = h('section.card');
    root.appendChild(box);
    box.appendChild(h('h1', { text: '✍️ ' + w.title }));
    box.appendChild(h('div.prompt', h('p.fr.strong', { 'data-say': w.prompt, tabindex: '0', role: 'button', text: w.prompt }), h('p.muted', { text: w.promptEn })));
    box.appendChild(h('div.chips-row', w.hints.map(function (x) { return h('span.chip.static', { text: x }); })));
    var ta = h('textarea.writer', { rows: 8, placeholder: 'Écrivez ici… (write here)', spellcheck: 'false', 'aria-label': 'Your text' });
    ta.value = mine.text || '';
    var count = h('div.muted.small');
    function upd() {
      var n = U.wordCount(ta.value);
      count.textContent = n + ' words' + (n < w.minWords ? ' · aim for ' + w.minWords + '–50' : ' ✓');
      S.state.writing[w.id] = { text: ta.value, words: n, at: new Date().toISOString() };
      S.save();
    }
    ta.addEventListener('input', U.debounce(upd, 300));
    box.appendChild(ta);
    box.appendChild(R.accentBar(ta));
    box.appendChild(count);
    upd();
    var model = h('div.model', { hidden: true },
      h('h3', { text: 'Model answer' }),
      h('p.fr', { 'data-say': w.model, tabindex: '0', role: 'button', text: w.model }),
      h('p.muted.small', { text: w.note }),
      h('h3', { text: 'Check your text' }),
      h('ul.checklist', w.checklist.map(function (c) { return h('li', h('label', h('input', { type: 'checkbox' }), ' ' + c)); })));
    box.appendChild(h('div.row',
      h('button.btn', { type: 'button', text: '🔊 Read my text', onclick: function () { if (ta.value.trim()) Sp.speak(ta.value); } }),
      h('button.btn', { type: 'button', text: 'Show model & checklist', onclick: function () { model.hidden = !model.hidden; } }),
      h('button.btn.primary', { type: 'button', text: '✓ Done', onclick: function () {
        if (U.wordCount(ta.value) < w.minWords && !confirm('Your text is shorter than ' + w.minWords + ' words. Mark as done anyway?')) return;
        finishTask(query, 'write', w.id); U.toast('Saved. Bien écrit ! ✍️', 'ok');
      } })));
    box.appendChild(model);
  };

  /* ---------- flashcards ---------- */
  V.cards = function (root, params, query) {
    var deckId = params[0] ? decodeURIComponent(params[0]) : null;
    if (!deckId) { location.hash = '#/practice'; return; }
    var deck = deckId === '*' ? { id: '*', title: 'All due cards', icon: '🃏' } : A1.SRS.deck(deckId);
    if (!deck) { root.appendChild(h('div.card', h('h2', { text: 'Deck coming soon' }), h('a.btn', { href: '#/practice', text: '← Practice' }))); return; }
    root.appendChild(h('div.crumbs', h('a', { href: '#/practice', text: '← Practice' })));
    var box = h('section.card.cards');
    root.appendChild(box);
    var mode = sessionStorageGet('cardMode') || 'fr';
    var queue = A1.SRS.session(deckId), reviewed = 0, initial = queue.length, again = 0;
    function head() {
      var s = A1.SRS.stats(deckId);
      return h('div.cards-head',
        h('h1', { text: deck.icon + ' ' + deck.title }),
        h('p.muted.small', { text: s.seen + '/' + s.total + ' seen · ' + s.learned + ' learned · ' + s.due + ' due today' }),
        h('div.chips-row', [['fr', 'French → English'], ['en', 'English → French'], ['listen', 'Listening'], ['type', 'Type it']].map(function (m) {
          return h('button.chip' + (m[0] === mode ? '.on' : ''), { type: 'button', text: m[1], onclick: function () { mode = m[0]; sessionStorageSet('cardMode', mode); draw(); } });
        })));
    }
    function draw() {
      box.innerHTML = '';
      box.appendChild(head());
      if (!queue.length) {
        box.appendChild(h('div.empty',
          h('p', { text: initial ? '🎉 Session complete — ' + reviewed + ' cards reviewed.' : 'Nothing due right now. 👌' }),
          deckId !== '*' ? h('button.btn', { type: 'button', text: 'Practise this deck anyway (no scheduling)', onclick: function () { queue = U.shuffle(A1.SRS.cards(deckId)).slice(0, 20).map(function (c) { c.practice = true; return c; }); initial = queue.length; draw(); } }) : null,
          deckId !== '*' ? h('details', h('summary', { text: 'Browse all words' }), h('div', { html: R.wordList(A1.SRS.deck(deckId).words) })) : null));
        if (reviewed >= Math.min(10, initial || 10) || (initial && reviewed >= initial)) finishTask(query, 'cards', deckId);
        return;
      }
      var c = queue[0], st = A1.SRS.state(c.key);
      box.appendChild(h('div.muted.small.center', { text: queue.length + ' left' + (st ? '' : ' · ✨ new word') + (c.practice ? ' · practice' : '') }));
      var card = h('div.flash');
      var front = h('div.flash-front'), back = h('div.flash-back', { hidden: true });
      var frHtml = '<div class="flash-fr fr" data-say="' + esc(c.fr) + '">' + esc(c.fr) + '</div>' + (c.say ? '<div class="say">' + esc(c.say) + '</div>' : '');
      var exHtml = c.exFr ? '<div class="flash-ex"><span class="fr" data-say="' + esc(c.exFr) + '">' + esc(c.exFr) + '</span><div class="muted small">' + esc(c.exEn) + '</div></div>' : '';
      if (mode === 'fr') { front.innerHTML = frHtml; back.innerHTML = '<div class="flash-en">' + esc(c.en) + '</div>' + exHtml; setTimeout(function () { Sp.speak(c.fr); }, 150); }
      else if (mode === 'en' || mode === 'type') { front.innerHTML = '<div class="flash-en">' + esc(c.en) + '</div>'; back.innerHTML = frHtml + exHtml; }
      else { front.innerHTML = '<button class="btn big" type="button" data-say="' + esc(c.fr) + '">🔊 Play again</button><p class="muted">What does it mean?</p>'; back.innerHTML = frHtml + '<div class="flash-en">' + esc(c.en) + '</div>' + exHtml; setTimeout(function () { Sp.speak(c.fr); }, 150); }
      card.appendChild(front); card.appendChild(back);
      box.appendChild(card);
      var actions = h('div.flash-actions');
      box.appendChild(actions);
      function reveal(autoGrade) {
        back.hidden = false;
        if (mode !== 'fr' && mode !== 'listen') Sp.speak(c.fr);
        actions.innerHTML = '';
        var labels = [['Again', 0, '1'], ['Hard', 1, '2'], ['Good', 2, '3'], ['Easy', 3, '4']];
        labels.forEach(function (l) {
          var b = h('button.btn.grade.g' + l[1], { type: 'button', html: '<b>' + l[0] + '</b><small>' + l[2] + '</small>', onclick: function () { grade(l[1]); } });
          if (autoGrade === l[1]) b.classList.add('suggested');
          actions.appendChild(b);
        });
        keys = function (e) { var k = parseInt(e.key, 10); if (k >= 1 && k <= 4) grade(k - 1); };
      }
      var keys = null;
      if (mode === 'type') {
        var inp = h('input.blank.wide', { type: 'text', autocomplete: 'off', autocapitalize: 'off', spellcheck: 'false', placeholder: 'Type the French…', 'aria-label': 'French word' });
        actions.appendChild(h('div.fill-line', inp));
        actions.appendChild(R.accentBar(inp));
        var chk = h('button.btn.primary', { type: 'button', text: 'Check' });
        actions.appendChild(chk);
        var doCheck = function () {
          var answers = U.uniq([c.fr, c.fr.replace(/^(le|la|les|l'|un|une|des) ?/i, ''), Sp.clean(c.fr)].concat(c.fr.split(' / ')));
          var r = U.checkTyped(inp.value, answers);
          inp.disabled = true;
          inp.classList.add(r.ok ? 'right' : 'wrong');
          reveal(r.ok ? (r.accentOnly ? 1 : 2) : 0);
        };
        chk.addEventListener('click', doCheck);
        inp.addEventListener('keydown', function (e) { if (e.key === 'Enter') { e.preventDefault(); e.stopPropagation(); doCheck(); } });
        setTimeout(function () { inp.focus(); }, 60);
      } else {
        actions.appendChild(h('button.btn.primary.big', { type: 'button', text: 'Show answer (space)', onclick: function () { reveal(); } }));
        keys = function (e) { if (e.key === ' ' || e.key === 'Enter') { e.preventDefault(); reveal(); } };
      }
      setKeyHandler(function (e) { if (e.target.matches('input,textarea,select')) return; if (keys) keys(e); });
      function grade(g) {
        setKeyHandler(null);
        if (!c.practice) A1.SRS.grade(c, g);
        else S.log('cards', 1);
        reviewed++;
        queue.shift();
        if (g === 0) { again++; queue.splice(Math.min(queue.length, 3 + Math.floor(Math.random() * 3)), 0, c); }
        draw();
      }
    }
    draw();
  };
  var keyHandler = null;
  function setKeyHandler(fn) { if (keyHandler) document.removeEventListener('keydown', keyHandler); keyHandler = fn; if (fn) document.addEventListener('keydown', fn); }
  V.cleanupKeys = function () { setKeyHandler(null); };
  function sessionStorageGet(k) { try { return sessionStorage.getItem('a1-' + k); } catch (e) { return null; } }
  function sessionStorageSet(k, v) { try { sessionStorage.setItem('a1-' + k, v); } catch (e) { /* ignore */ } }
})();
