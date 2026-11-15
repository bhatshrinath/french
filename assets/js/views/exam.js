/* DELF A1 mock exams: listening & reading auto-scored, writing & speaking self-scored. */
(function () {
  'use strict';
  var A1 = window.A1, U = A1.U, S = A1.S, T = A1.T, R = A1.R, Sp = A1.Speech, h = U.h, esc = U.esc;
  var V = A1.V = A1.V || {};
  var ICON = { listening: '🎧', reading: '📖', writing: '✍️', speaking: '🗣️' };
  var SPEAK_CRITERIA = ['I answered every question / prompt', 'My pronunciation was clear enough to understand', 'I used full, simple sentences', 'I asked questions correctly (Partie 2)', 'I handled the role-play: greeting, asking, paying, thanking (Partie 3)'];

  V.exam = function (root, params, query) {
    var x = T.exam(params[0]);
    if (!x) { root.appendChild(h('div.card', h('h2', { text: 'Mock exam coming soon' }), h('p.muted', { text: 'It will be ready before Days 46–47.' }), h('a.btn', { href: '#/practice', text: '← Practice' }))); return; }
    var saved = S.state.exams[x.id];
    var st = { sec: null, scores: {}, answers: {} };
    root.appendChild(h('div.crumbs', h('a', { href: '#/practice', text: '← Practice' })));
    var box = h('section.card');
    root.appendChild(box);
    var timer = null;

    function intro() {
      stopTimer();
      box.innerHTML = '';
      box.appendChild(h('h1', { text: '🎓 ' + x.title }));
      if (x.intro) box.appendChild(h('p', { text: x.intro }));
      if (saved) box.appendChild(h('div.callout.note', h('b', { text: 'Last attempt: ' + saved.total + '/100' }), h('div', { text: x.sections.map(function (s) { return s.title + ' ' + (saved.scores[s.skill] != null ? saved.scores[s.skill] : '–') + '/25'; }).join(' · ') })));
      var ul = h('ul.tasks');
      x.sections.forEach(function (s, i) {
        var done = st.scores[s.skill] != null;
        ul.appendChild(h('li.task' + (done ? '.done' : ''),
          h('span.check' + (done ? '.on' : ''), { text: done ? '✓' : String(i + 1) }),
          h('div.task-main', h('div.task-title', { text: ICON[s.skill] + ' ' + s.title }), h('div.task-sub.muted', { text: s.minutes + ' min' + (done ? ' · ' + st.scores[s.skill] + '/25' : '') })),
          h('div.task-act', h('button.btn.small' + (done ? '' : '.primary'), { type: 'button', text: done ? 'Redo' : 'Start', onclick: function () { section(i); } }))));
      });
      box.appendChild(ul);
      if (Object.keys(st.scores).length === x.sections.length) results();
      else box.appendChild(h('p.muted.small', { text: 'Real exam: listening ~20 min, reading 30 min, writing 30 min, speaking 5–7 min (+10 min preparation). Pass mark 50/100 with at least 5/25 in each part.' }));
    }

    function startTimer(min) {
      stopTimer();
      var end = Date.now() + min * 60000, el = h('div.timer');
      box.insertBefore(el, box.firstChild.nextSibling);
      function tick() { var left = Math.max(0, Math.round((end - Date.now()) / 1000)); el.textContent = '⏱ ' + U.fmtSecs(left) + ' left'; el.classList.toggle('low', left < 120); if (!left) stopTimer(); }
      tick(); timer = setInterval(tick, 1000);
    }
    function stopTimer() { if (timer) clearInterval(timer); timer = null; }

    function section(i) {
      var s = x.sections[i];
      st.sec = i;
      box.innerHTML = '';
      box.appendChild(h('div.row.between', h('h2', { text: ICON[s.skill] + ' ' + s.title }), h('button.btn.ghost.small', { type: 'button', text: '← Exam overview', onclick: intro })));
      startTimer(s.minutes || 20);
      if (s.instructions) box.appendChild(h('p.muted', { text: s.instructions }));
      if (s.skill === 'listening' || s.skill === 'reading') mcqSection(s);
      else if (s.skill === 'writing') writingSection(s);
      else speakingSection(s);
    }

    function mcqSection(s) {
      var showEn = h('label.small', h('input', { type: 'checkbox' }), ' Show questions in English');
      box.appendChild(showEn);
      var all = [];
      s.parts.forEach(function (p, pi) {
        var part = h('section.exam-part');
        part.appendChild(h('h3', { text: p.title }));
        if (p.instructions) part.appendChild(h('p.muted.small', { text: p.instructions }));
        if (s.skill === 'listening') {
          var plays = 2;
          var pb = h('button.btn.primary', { type: 'button', text: '▶ Play (2 plays left)' });
          pb.addEventListener('click', function () {
            if (!plays) return;
            plays--; pb.disabled = true; pb.textContent = '🔊 Playing…';
            Sp.speakLines(p.audio, { gap: 500 }).then(function () { pb.disabled = !plays; pb.textContent = plays ? '▶ Play again (1 left)' : 'No plays left'; });
          });
          part.appendChild(h('div.row', pb));
          part.appendChild(h('details', h('summary.small', { text: 'Transcript (look only after answering!)' }), h('div', { html: p.audio.map(function (a) { return '<p class="fr" data-say="' + esc(a[1]) + '">' + esc(a[1]) + '</p>'; }).join('') })));
        } else {
          part.appendChild(h('div.doc', { html: R.inline(p.text) }));
        }
        (p.questions || []).forEach(function (q, qi) {
          var name = 'q' + pi + '_' + qi;
          var fs = h('fieldset.exam-q', h('legend', h('span', { text: (all.length + 1) + '. ' + q.q }), q.qEn ? h('span.q-en.muted.small', { text: ' — ' + q.qEn }) : null));
          q.options.forEach(function (o, oi) { fs.appendChild(h('label.exam-opt', h('input', { type: 'radio', name: name, value: oi }), ' ', o)); });
          part.appendChild(fs);
          all.push({ q: q, fs: fs, name: name });
        });
        box.appendChild(part);
      });
      showEn.querySelector('input').addEventListener('change', function (e) { box.classList.toggle('show-en', e.target.checked); });
      box.appendChild(h('div.row', h('button.btn.primary', { type: 'button', text: 'Submit section', onclick: function () {
        var correct = 0;
        all.forEach(function (a) {
          var picked = U.$('input[name="' + a.name + '"]:checked', a.fs);
          var ok = picked && +picked.value === a.q.answer;
          if (ok) correct++;
          U.$$('label', a.fs).forEach(function (lab, k) { lab.classList.toggle('right', k === a.q.answer); if (picked && +picked.value === k && !ok) lab.classList.add('wrong'); });
          U.$$('input', a.fs).forEach(function (inp) { inp.disabled = true; });
        });
        var score = Math.round(correct / Math.max(1, all.length) * 50) / 2;
        st.scores[s.skill] = score;
        stopTimer();
        U.toast(s.title + ': ' + correct + '/' + all.length + ' → ' + score + '/25', score >= 12.5 ? 'ok' : 'warn');
        this.disabled = true;
        box.appendChild(h('div.callout.' + (score >= 12.5 ? 'ok' : 'warn'), h('b', { text: (score >= 12.5 ? '✓ ' : '⚠ ') + correct + ' / ' + all.length + ' correct → ' + score + ' / 25' }), h('div.row', h('button.btn', { type: 'button', text: 'Back to overview', onclick: intro }))));
      } })));
    }

    function writingSection(s) {
      var pts = [];
      s.parts.forEach(function (p) {
        var part = h('section.exam-part', h('h3', { text: p.title }));
        if (p.instructions) part.appendChild(h('p.muted.small', { text: p.instructions }));
        if (p.type === 'form') {
          if (p.context) part.appendChild(h('div.doc', { html: R.inline(p.context) }));
          var inputs = p.fields.map(function (f) {
            var inp = h('input.field', { type: 'text', placeholder: f.hint || '', 'aria-label': f.label });
            part.appendChild(h('label.form-row', h('span', { text: f.label }), inp));
            return { f: f, inp: inp };
          });
          pts.push(function () {
            var filled = inputs.filter(function (x2) { return x2.inp.value.trim(); }).length;
            inputs.forEach(function (x2) { if (x2.f.example) x2.inp.insertAdjacentElement('afterend', h('small.muted', { text: ' e.g. ' + x2.f.example })); x2.inp.disabled = true; });
            return filled / inputs.length * 10;
          });
        } else {
          part.appendChild(h('div.prompt', h('p.fr.strong', { 'data-say': p.prompt, text: p.prompt }), p.promptEn ? h('p.muted', { text: p.promptEn }) : null));
          var ta = h('textarea.writer', { rows: 7, spellcheck: 'false', 'aria-label': 'Your text' });
          var cnt = h('div.muted.small', { text: '0 words' });
          ta.addEventListener('input', function () { cnt.textContent = U.wordCount(ta.value) + ' words (min. ' + (p.minWords || 40) + ')'; });
          part.appendChild(ta); part.appendChild(R.accentBar(ta)); part.appendChild(cnt);
          var checks = h('ul.checklist', { hidden: true }, (p.checklist || []).map(function (c) { return h('li', h('label', h('input', { type: 'checkbox' }), ' ' + c)); }));
          var model = h('div.model', { hidden: true }, h('h4', { text: 'Model answer' }), h('p.fr', { 'data-say': p.model, text: p.model }));
          part.appendChild(model); part.appendChild(checks);
          pts.push(function () {
            ta.disabled = true; model.hidden = false; checks.hidden = false;
            return { lazy: function () { var n = U.$$('input:checked', checks).length, tot = Math.max(1, (p.checklist || []).length); return (U.wordCount(ta.value) >= (p.minWords || 40) ? 15 : 10) * n / tot; } };
          });
        }
        box.appendChild(part);
      });
      var submit = h('button.btn.primary', { type: 'button', text: 'Submit & see the models' });
      submit.addEventListener('click', function () {
        stopTimer();
        var fixed = 0, lazies = [];
        pts.forEach(function (fn) { var r2 = fn(); if (typeof r2 === 'number') fixed += r2; else lazies.push(r2.lazy); });
        submit.remove();
        box.appendChild(h('p.muted', { text: 'Tick the checklist honestly for your text, then save your score.' }));
        box.appendChild(h('div.row', h('button.btn.primary', { type: 'button', text: 'Save my writing score', onclick: function () {
          var sc = Math.round((fixed + U.sum(lazies, function (f) { return f(); })) * 2) / 2;
          st.scores.writing = Math.min(25, sc);
          U.toast('Writing: ' + st.scores.writing + '/25', 'ok');
          intro();
        } })));
      });
      box.appendChild(h('div.row', submit));
    }

    function speakingSection(s) {
      s.parts.forEach(function (p) {
        var part = h('section.exam-part', h('h3', { text: p.title }));
        if (p.instructions) part.appendChild(h('p.muted.small', { text: p.instructions }));
        var ul = h('ol.prompts');
        (p.prompts || []).forEach(function (pr) { ul.appendChild(h('li', h('span.fr', { 'data-say': pr, text: pr }))); });
        part.appendChild(ul);
        part.appendChild(h('div.row', h('button.btn', { type: 'button', text: '🔊 Examiner reads the prompts', onclick: function () { Sp.speakLines((p.prompts || []).map(function (x2) { return ['M', x2]; }), { gap: 4000 }); } })));
        if (Sp.recSupported) {
          var audio = h('audio', { controls: true, hidden: true }), rec = null;
          var rb = h('button.btn', { type: 'button', text: '⏺ Record my answers' });
          rb.addEventListener('click', function () {
            if (rec) { rec.stop().then(function (url) { audio.src = url; audio.hidden = false; rb.textContent = '⏺ Record again'; rec = null; }); return; }
            Sp.record().then(function (r) { rec = r; rb.textContent = '⏹ Stop'; }, function (e) { U.toast(e.message || 'Recording failed', 'warn'); });
          });
          part.appendChild(h('div.row', rb, audio));
        }
        if (p.model && p.model.length) {
          var m = Array.isArray(p.model[0]) ? R.dialogue(p.model.map(function (l) { return [l[0] === 'A' ? 'Examinateur' : 'Vous', l[1], '']; }))
            : '<ul class="list">' + p.model.map(function (x2) { return '<li><span class="fr" data-say="' + esc(x2) + '">' + esc(x2) + '</span></li>'; }).join('') + '</ul>';
          part.appendChild(h('details', h('summary', { text: 'Model answers' }), h('div', { html: m })));
        }
        box.appendChild(part);
      });
      var crit = h('ul.checklist', SPEAK_CRITERIA.map(function (c) { return h('li', h('label', h('input', { type: 'checkbox' }), ' ' + c)); }));
      box.appendChild(h('section.exam-part', h('h3', { text: 'Score yourself' }), crit));
      box.appendChild(h('div.row', h('button.btn.primary', { type: 'button', text: 'Save my speaking score', onclick: function () {
        stopTimer();
        st.scores.speaking = U.$$('input:checked', crit).length * 5;
        U.toast('Speaking: ' + st.scores.speaking + '/25', 'ok');
        intro();
      } })));
    }

    function results() {
      var total = U.sum(x.sections, function (s) { return st.scores[s.skill] || 0; });
      total = Math.round(total * 2) / 2;
      var pass = total >= 50 && x.sections.every(function (s) { return (st.scores[s.skill] || 0) >= 5; });
      S.state.exams[x.id] = { at: new Date().toISOString(), scores: Object.assign({}, st.scores), total: total };
      S.save();
      V.finishTask(query, 'exam', x.id);
      box.appendChild(h('div.callout.' + (pass ? 'ok' : 'warn'),
        h('b', { text: (pass ? '✓ PASS — ' : '⚠ Not yet — ') + total + ' / 100' }),
        h('div', { text: pass ? 'Félicitations ! That is a DELF A1 pass. Keep revising the weakest part.' : 'You need 50/100 and at least 5/25 in each part. Redo the weakest section after revising.' })));
    }
    intro();
  };
})();
