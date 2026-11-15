/* Quiz engine: mcq, fill, listen, order, speak (+ "type" for drills).
   A1.Quiz.mount(container, questions, {title, onFinish(score, total, results)}) */
(function () {
  'use strict';
  var A1 = window.A1, U = A1.U, R = A1.R, Sp = A1.Speech, h = U.h;
  var Q = A1.Quiz = {};

  Q.mount = function (root, questions, opts) {
    opts = opts || {};
    var st = { i: 0, score: 0, results: [] };
    root.innerHTML = '';
    var box = h('div.quiz');
    root.appendChild(box);
    var keyHandler = null;
    function setKeys(fn) {
      if (keyHandler) document.removeEventListener('keydown', keyHandler);
      keyHandler = fn;
      if (fn) document.addEventListener('keydown', fn);
    }
    Q.cleanup = function () { setKeys(null); };

    function show() {
      setKeys(null);
      if (st.i >= questions.length) return finish();
      var q = questions[st.i];
      box.innerHTML = '';
      box.appendChild(h('div.quiz-top',
        h('span.muted', { text: (opts.title ? opts.title + ' · ' : '') + 'Question ' + (st.i + 1) + ' of ' + questions.length }),
        h('span.quiz-score', { text: '✓ ' + st.score })));
      box.appendChild(h('div', { html: R.progressBar(U.pct(st.i, questions.length), 'thin') }));
      var body = h('div.quiz-body');
      var fb = h('div.feedback', { 'aria-live': 'polite' });
      box.appendChild(body);
      box.appendChild(fb);
      (TYPES[q.type] || TYPES.mcq)(q, body, function (ok, info) { answered(q, ok, info, fb); });
    }

    function answered(q, ok, info, fb) {
      info = info || {};
      st.results.push({ q: q, ok: ok, info: info });
      if (ok) st.score++;
      var correct = info.correct != null ? info.correct : correctText(q);
      fb.className = 'feedback ' + (ok ? 'ok' : 'bad');
      fb.innerHTML = (ok ? '<b>✓ ' + (info.accentOnly ? 'Correct — but mind the accents: ' + U.esc(correct) : U.pick(['Correct!', 'Bravo !', 'Exactly!', 'Très bien !', 'Parfait !'])) + '</b>'
        : '<b>✗ Not quite.</b>' + (correct ? ' Answer: <span class="fr strong" data-say="' + U.esc(Sp.clean(correct)) + '">' + U.esc(correct) + '</span>' : '')) +
        (q.explain ? '<div class="explain">' + R.inline(q.explain) + '</div>' : '') +
        (q.en && q.type === 'order' ? '<div class="explain muted">' + U.esc(q.en) + '</div>' : '');
      var next = h('button.btn.primary', { type: 'button', text: st.i + 1 < questions.length ? 'Next →' : 'See results', onclick: function () { st.i++; show(); } });
      fb.appendChild(h('div.row', next));
      next.focus({ preventScroll: true });
      setKeys(function (e) { if (e.key === 'Enter' && !e.target.matches('textarea')) { e.preventDefault(); st.i++; show(); } });
      if (q.type !== 'listen' && q.type !== 'speak' && correct && /[a-zà-ÿ]/i.test(correct) && opts.speakAnswers !== false && !q.noSpeak) {
        if (q.type === 'fill' || q.type === 'order' || q.type === 'type') Sp.speak(q.speakAfter || fullSentence(q, correct));
      }
    }

    function finish() {
      setKeys(null);
      var total = questions.length, pct = U.pct(st.score, total);
      box.innerHTML = '';
      var wrong = st.results.filter(function (r) { return !r.ok; });
      box.appendChild(h('div.quiz-done',
        h('div', { html: R.ring(pct, 120, 'Score ' + pct + '%') }),
        h('h3', { text: pct >= 90 ? 'Excellent ! 🎉' : pct >= 70 ? 'Bien joué ! 👏' : pct >= 50 ? 'Not bad — review and retry 💪' : 'Keep going — retry the mistakes 💪' }),
        h('p.muted', { text: st.score + ' / ' + total + ' correct' })));
      if (wrong.length) {
        var ul = h('ul.mistakes');
        wrong.forEach(function (r) {
          var c = r.info.correct != null ? r.info.correct : correctText(r.q);
          ul.appendChild(h('li', { html: '<div class="muted">' + R.inline(r.q.q || r.q.prompt || r.q.en || '') + '</div>' + (c ? '<div>→ <span class="fr strong" data-say="' + U.esc(Sp.clean(c)) + '">' + U.esc(c) + '</span></div>' : '') }));
        });
        box.appendChild(h('details.card', h('summary', { text: 'Review your ' + U.plural(wrong.length, 'mistake') }), ul));
      }
      var row = h('div.row');
      if (wrong.length) row.appendChild(h('button.btn', { type: 'button', text: '↻ Retry mistakes', onclick: function () { Q.mount(root, wrong.map(function (r) { return r.q; }), Object.assign({}, opts, { retry: true })); } }));
      if (opts.doneLabel !== false) row.appendChild(h('button.btn.primary', { type: 'button', text: opts.doneLabel || 'Done', onclick: function () { if (opts.onDone) opts.onDone(); } }));
      box.appendChild(row);
      if (opts.onFinish && !opts.retry) opts.onFinish(st.score, total, st.results);
    }
    show();
  };

  function correctText(q) {
    if (q.type === 'mcq' || q.type === 'listen' || q.type === 'choice') return q.options[q.answer];
    if (q.type === 'fill' || q.type === 'type') return [].concat(q.answer)[0];
    if (q.type === 'order') return q.words.join(' ');
    if (q.type === 'speak') return q.fr;
    return '';
  }
  function fullSentence(q, ans) {
    if (q.type === 'fill' && q.q) {
      var plain = String(q.q).replace(/\[\[([^\]|]+)(\|[^\]]*)?\]\]/g, '$1').replace(/<[^>]+>/g, '').replace(/\([^)]*\)/g, '');
      var s = plain.replace(/_{3,}/, ans).trim();
      return /[a-zà-ÿ]/i.test(s) && s.length < 160 ? s : ans;
    }
    return ans;
  }
  Q.correctText = correctText;

  function optionButtons(q, body, done, onPick) {
    var wrap = h('div.options');
    var btns = q.options.map(function (o, i) {
      var b = h('button.opt', { type: 'button', html: '<span class="k">' + (i + 1) + '</span>' + R.inline(o) });
      b.addEventListener('click', function (e) {
        if (e.target.closest('.fr') && wrap.classList.contains('locked')) return;
        if (wrap.classList.contains('locked')) return;
        wrap.classList.add('locked');
        var ok = i === q.answer;
        b.classList.add(ok ? 'right' : 'wrong');
        btns[q.answer].classList.add('right');
        if (onPick) onPick(i);
        done(ok);
      });
      wrap.appendChild(b);
      return b;
    });
    body.appendChild(wrap);
    var kh = function (e) {
      var n = parseInt(e.key, 10);
      if (n >= 1 && n <= btns.length && !wrap.classList.contains('locked') && !e.target.matches('input,textarea')) btns[n - 1].click();
    };
    document.addEventListener('keydown', kh);
    var obs = new MutationObserver(function () { if (!document.body.contains(wrap) || wrap.classList.contains('locked')) { document.removeEventListener('keydown', kh); obs.disconnect(); } });
    obs.observe(document.body, { childList: true, subtree: true, attributes: true, attributeFilter: ['class'] });
  }

  var TYPES = {
    mcq: function (q, body, done) {
      body.appendChild(h('div.q-text', { html: R.inline(q.q) }));
      optionButtons(q, body, done);
    },
    choice: function (q, body, done) { /* drills: prompt html + optional audio */
      body.appendChild(h('div.q-text', { html: q.prompt }));
      if (q.say) listenRow(body, q.say, true);
      optionButtons(q, body, done);
    },
    listen: function (q, body, done) {
      body.appendChild(h('div.q-text', { text: q.q || 'Listen and choose the right answer.' }));
      listenRow(body, q.say, true);
      optionButtons(q, body, done, function () {
        body.appendChild(h('div.reveal', { html: '<span class="muted">You heard:</span> <span class="fr strong" data-say="' + U.esc(q.say) + '">' + U.esc(q.say) + '</span>' }));
      });
    },
    fill: function (q, body, done) {
      var parts = String(q.q).split(/_{3,}/);
      var input = h('input.blank', { type: 'text', autocomplete: 'off', autocapitalize: 'off', spellcheck: 'false', 'aria-label': 'Your answer' });
      var line = h('div.q-text.fill-line');
      line.appendChild(h('span', { html: R.inline(parts[0]) }));
      line.appendChild(input);
      line.appendChild(h('span', { html: R.inline(parts.slice(1).join('___')) }));
      body.appendChild(line);
      typingArea(body, input, q.answer, done);
    },
    type: function (q, body, done) { /* drills: prompt + audio + typed answer, custom checker */
      body.appendChild(h('div.q-text', { html: q.prompt }));
      if (q.say) listenRow(body, q.say, true);
      var input = h('input.blank.wide', { type: 'text', autocomplete: 'off', autocapitalize: 'off', spellcheck: 'false', inputmode: q.inputmode || 'text', placeholder: q.placeholder || 'Type your answer', 'aria-label': 'Your answer' });
      body.appendChild(h('div.fill-line', input));
      typingArea(body, input, q.answer, done, q.check, q.reveal, q.inputmode !== 'numeric');
    },
    order: function (q, body, done) {
      body.appendChild(h('div.q-text', { html: '<span class="muted">Put the words in order:</span> <b>' + U.esc(q.en) + '</b>' }));
      var target = h('div.order-target', { 'aria-label': 'Your sentence' });
      var pool = h('div.order-pool');
      var words = q.words.slice(), sh = U.shuffle(words), tries = 0;
      while (sh.join(' ') === words.join(' ') && tries++ < 5) sh = U.shuffle(words);
      sh.forEach(function (w) {
        var chip = h('button.chip', { type: 'button', text: w });
        chip.addEventListener('click', function () {
          if (target.classList.contains('locked')) return;
          (chip.parentNode === pool ? target : pool).appendChild(chip);
          check.disabled = pool.children.length > 0;
        });
        pool.appendChild(chip);
      });
      body.appendChild(target);
      body.appendChild(pool);
      var check = h('button.btn.primary', { type: 'button', text: 'Check', disabled: true });
      check.addEventListener('click', function () {
        target.classList.add('locked'); check.disabled = true;
        var said = U.$$('.chip', target).map(function (c) { return c.textContent; }).join(' ');
        done(U.norm(said) === U.norm(words.join(' ')));
      });
      body.appendChild(h('div.row', check));
    },
    speak: function (q, body, done) {
      body.appendChild(h('div.q-text', { html: '<span class="muted">Say it in French:</span> <b>' + U.esc(q.en) + '</b>' }));
      var target = h('div.speak-target', { html: '<span class="fr strong" data-say="' + U.esc(q.fr) + '">' + U.esc(q.fr) + '</span>' });
      body.appendChild(target);
      body.appendChild(h('div.row', { html: R.spk(q.fr, { label: '🔊 Listen' , cls: 'btn' }) + R.spk(q.fr, { slow: true, label: '🐢 Slowly', cls: 'btn' }) }));
      Q.speakWidget(body, [q.fr].concat(q.alt || []), function (ok, res) { done(ok, { correct: q.fr, pct: res && res.pct }); });
    }
  };

  function listenRow(body, say, auto) {
    var row = h('div.row.listen-row', { html: R.spk(say, { label: '🔊 Play', cls: 'btn big' }) + R.spk(say, { slow: true, label: '🐢 Slower', cls: 'btn' }) });
    body.appendChild(row);
    if (auto && A1.S.get('autoplay') !== false) setTimeout(function () { if (document.body.contains(row)) Sp.speak(say); }, 250);
  }

  function typingArea(body, input, answers, done, customCheck, reveal, accents) {
    if (accents !== false) body.appendChild(R.accentBar(input));
    var btn = h('button.btn.primary', { type: 'button', text: 'Check' });
    var giveUp = h('button.btn.ghost', { type: 'button', text: 'Show answer' });
    function check(giveup) {
      if (input.disabled) return;
      if (!giveup && !input.value.trim()) { input.focus(); return; }
      input.disabled = true; btn.disabled = true; giveUp.disabled = true;
      var res = giveup ? { ok: false } : customCheck ? customCheck(input.value) : U.checkTyped(input.value, answers);
      input.classList.add(res.ok ? 'right' : 'wrong');
      if (reveal) body.appendChild(h('div.reveal', { html: reveal }));
      done(res.ok, { accentOnly: res.accentOnly, correct: res.correct || res.best || [].concat(answers)[0] });
    }
    btn.addEventListener('click', function () { check(false); });
    giveUp.addEventListener('click', function () { check(true); });
    input.addEventListener('keydown', function (e) { if (e.key === 'Enter') { e.preventDefault(); e.stopPropagation(); check(false); } });
    body.appendChild(h('div.row', btn, giveUp));
    setTimeout(function () { input.focus({ preventScroll: true }); }, 60);
  }

  /* Microphone widget: speech recognition when available, else record & self-check.
     onResult(ok, gradeResult) */
  Q.speakWidget = function (parent, answers, onResult, opts) {
    opts = opts || {};
    var wrap = h('div.speak-widget');
    var status = h('div.speak-status.muted', { 'aria-live': 'polite' });
    var finished = false;
    function result(ok, res) { if (finished) return; finished = true; onResult(ok, res); }
    if (Sp.srSupported) {
      var mic = h('button.btn.mic', { type: 'button', html: '🎤 <span>Tap and speak</span>' });
      var skip = h('button.btn.ghost', { type: 'button', text: 'Skip' });
      mic.addEventListener('click', function () {
        if (mic.classList.contains('listening')) { Sp.stopListening(); return; }
        mic.classList.add('listening'); mic.querySelector('span').textContent = 'Listening… (tap to stop)';
        status.textContent = '';
        Sp.listen({ onInterim: function (t) { status.textContent = '“' + t + '”'; } }).then(function (heard) {
          mic.classList.remove('listening'); mic.querySelector('span').textContent = 'Try again';
          var g = Sp.grade(heard, answers);
          status.innerHTML = '<div>I heard: “' + U.esc(g.heard) + '”</div><div class="words">' + g.words.map(function (w) { return '<span class="' + (w.ok ? 'w-ok' : 'w-miss') + '">' + U.esc(w.w) + '</span>'; }).join(' ') +
            '</div><div class="match ' + (g.ok ? 'ok' : 'bad') + '">' + g.pct + '% match' + (g.ok ? ' ✓' : ' — aim for 75%+') + '</div>';
          A1.S.log('speak', 1);
          if (g.ok || opts.alwaysAccept) result(g.ok, g);
          else if (!wrap.querySelector('.accept')) {
            wrap.appendChild(h('div.row',
              h('button.btn.ghost.accept', { type: 'button', text: 'Move on', onclick: function () { result(false, g); } })));
          }
        }, function (err) {
          mic.classList.remove('listening'); mic.querySelector('span').textContent = 'Tap and speak';
          status.textContent = Sp.srErrorText(err);
        });
      });
      skip.addEventListener('click', function () { Sp.stopListening(); result(false, null); });
      wrap.appendChild(h('div.row', mic, skip));
    } else {
      wrap.appendChild(h('p.muted.small', { text: 'Speech recognition isn\'t available in this browser (use Chrome or Edge for automatic scoring). Say it aloud, compare with the audio, and be honest:' }));
      if (Sp.recSupported) {
        var rec = null, audio = h('audio', { controls: true, style: { display: 'none' } });
        var rb = h('button.btn', { type: 'button', text: '⏺ Record myself' });
        rb.addEventListener('click', function () {
          if (rec) { rec.stop().then(function (url) { audio.src = url; audio.style.display = ''; rb.textContent = '⏺ Record again'; rec = null; }); return; }
          Sp.record().then(function (r) { rec = r; rb.textContent = '⏹ Stop'; }, function (e) { status.textContent = e.message || 'Recording failed'; });
        });
        wrap.appendChild(h('div.row', rb, audio));
      }
      wrap.appendChild(h('div.row',
        h('button.btn.primary', { type: 'button', text: '✓ I said it well', onclick: function () { A1.S.log('speak', 1); result(true, { pct: 100 }); } }),
        h('button.btn', { type: 'button', text: '✗ Not yet', onclick: function () { result(false, null); } })));
    }
    wrap.appendChild(status);
    parent.appendChild(wrap);
    return wrap;
  };

  /* Build a mixed review quiz from several lessons */
  Q.fromLessons = function (ids, n) {
    var pool = [];
    ids.forEach(function (id) {
      var l = A1.T.lesson(id);
      if (l && l.quiz) l.quiz.forEach(function (q) { if (q.type !== 'speak') pool.push(q); });
    });
    return U.shuffle(pool).slice(0, n || 12);
  };
})();
