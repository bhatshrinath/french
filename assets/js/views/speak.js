/* Speaking: scenario practice (listen, shadow, role-play, your turn) and the pronunciation lab. */
(function () {
  'use strict';
  var A1 = window.A1, U = A1.U, S = A1.S, T = A1.T, R = A1.R, Sp = A1.Speech, Q = A1.Quiz, h = U.h, esc = U.esc;
  var V = A1.V = A1.V || {};

  function voiceFor(role) { return role === 'A' ? 'F' : 'M'; }

  V.scenario = function (root, params, query) {
    var s = T.scenario(params[0]);
    if (!s) { root.appendChild(h('div.card', h('h2', { text: 'Scenario coming soon' }), h('a.btn', { href: '#/practice', text: '← Practice' }))); return; }
    root.appendChild(h('div.crumbs', h('a', { href: '#/practice', text: '← Practice' })));
    var box = h('section.card');
    root.appendChild(box);
    var best = S.state.speak[s.id];
    box.appendChild(h('div.lesson-head',
      h('div.day-meta', h('span.pill', { text: '🗣️ Speaking' }), best ? h('span.pill.ok', { text: 'Best ' + best.best + '%' }) : null),
      h('h1', { text: (s.icon || '') + ' ' + s.title }),
      h('p.lead', { text: s.goal }),
      h('p.muted.small', { text: 'Roles: A = ' + s.roles.A + ' · B = ' + s.roles.B })));
    if (!Sp.srSupported) box.appendChild(h('div.callout.note', h('div', { text: 'Automatic speech scoring needs Chrome, Edge or Safari. Here you can listen, record yourself and compare.' })));
    var tabs = [['listen', '1 · Listen'], ['shadow', '2 · Shadow'], ['role', '3 · Role-play'], ['turn', '4 · Your turn'], ['phrases', 'Key phrases']];
    var cur = query.mode || 'listen';
    var bar = h('div.chips-row.tabs-row', { role: 'tablist' });
    var pane = h('div.pane');
    tabs.forEach(function (t) {
      bar.appendChild(h('button.chip' + (t[0] === cur ? '.on' : ''), { type: 'button', role: 'tab', text: t[1], onclick: function () { cur = t[0]; Sp.stop(); U.$$('.chip', bar).forEach(function (b) { b.classList.toggle('on', b.textContent === t[1]); }); draw(); } }));
    });
    box.appendChild(bar);
    box.appendChild(pane);

    function draw() {
      pane.innerHTML = '';
      ({ listen: listen, shadow: shadow, role: role, turn: turn, phrases: phrases })[cur]();
    }

    function listen() {
      pane.appendChild(h('p.muted', { text: 'Listen to the whole conversation 2–3 times. First without reading the English, then with it.' }));
      var hide = h('label.small', h('input', { type: 'checkbox' }), ' Hide English');
      var list = h('div.dlg');
      s.dialogue.forEach(function (l, i) {
        list.appendChild(h('div.dl.' + (l[0] === 'A' ? 'l' : 'r'), { 'data-line': i },
          h('span.who', { text: l[0] === 'A' ? s.roles.A : 'Vous' }),
          h('div.bubble.fr', { 'data-say': l[1], 'data-voice': voiceFor(l[0]) }, l[1], h('div.en', { text: l[2] }))));
      });
      hide.querySelector('input').addEventListener('change', function (e) { list.classList.toggle('hide-en', e.target.checked); });
      var play = h('button.btn.primary', { type: 'button', text: '▶ Play conversation' });
      play.addEventListener('click', function () {
        if (Sp.speaking) { Sp.stop(); play.textContent = '▶ Play conversation'; return; }
        play.textContent = '⏹ Stop';
        Sp.speakLines(s.dialogue.map(function (l) { return [voiceFor(l[0]), l[1]]; }), {
          onLine: function (i) {
            U.$$('.dl', list).forEach(function (d) { d.classList.toggle('playing', +d.getAttribute('data-line') === i); });
            if (i >= 0) { var el = U.$('[data-line="' + i + '"]', list); if (el) el.scrollIntoView({ block: 'nearest', behavior: 'smooth' }); }
            else play.textContent = '▶ Play conversation';
          }
        });
      });
      pane.appendChild(h('div.row', play, hide));
      pane.appendChild(list);
      if (s.freeTalk) pane.appendChild(h('div.callout.tip', h('b', { text: '🎭 Free role-play (later)' }), h('div', { text: s.freeTalk })));
    }

    function shadow() {
      var i = 0, scores = [];
      pane.appendChild(h('p.muted', { text: 'Shadowing: listen to each line, then say it with the same rhythm and melody. Slow it down if you need to.' }));
      var stage = h('div');
      pane.appendChild(stage);
      function step() {
        stage.innerHTML = '';
        if (i >= s.dialogue.length) {
          var avg = scores.length ? Math.round(U.sum(scores) / scores.length) : null;
          stage.appendChild(h('div.empty', h('p', { text: '👏 All ' + s.dialogue.length + ' lines shadowed' + (avg != null ? ' · average match ' + avg + '%' : '') + '.' }),
            h('button.btn.primary', { type: 'button', text: 'Next: role-play →', onclick: function () { cur = 'role'; U.$$('.chip', bar).forEach(function (b, k) { b.classList.toggle('on', k === 2); }); draw(); } })));
          return;
        }
        var l = s.dialogue[i];
        stage.appendChild(h('div.muted.small', { text: 'Line ' + (i + 1) + ' of ' + s.dialogue.length + ' · ' + (l[0] === 'A' ? s.roles.A : 'You') }));
        stage.appendChild(h('div.speak-target', h('div.fr.strong', { 'data-say': l[1], 'data-voice': voiceFor(l[0]), text: l[1] }), h('div.muted', { text: l[2] })));
        stage.appendChild(h('div.row', { html: R.spk(l[1], { label: '🔊 Listen', cls: 'btn', voice: voiceFor(l[0]) }) + R.spk(l[1], { slow: true, label: '🐢 Slowly', cls: 'btn', voice: voiceFor(l[0]) }) }));
        Sp.speak(l[1], { voice: voiceFor(l[0]) });
        Q.speakWidget(stage, [l[1]], function (ok, res) { if (res && res.pct != null) scores.push(res.pct); i++; setTimeout(step, ok ? 700 : 0); }, { alwaysAccept: false });
        stage.appendChild(h('div.row', h('button.btn.ghost', { type: 'button', text: 'Next line →', onclick: function () { Sp.stopListening(); i++; step(); } })));
      }
      step();
    }

    function role() {
      var i = 0, scores = [];
      var hideFr = h('label.small', h('input', { type: 'checkbox', checked: true }), ' Hide my French lines (harder)');
      pane.appendChild(h('p.muted', { text: 'You are B (' + s.roles.B + '). The app plays A. When it\'s your turn, read the English and say it in French.' }));
      pane.appendChild(hideFr);
      var log = h('div.dlg.role-log');
      var stage = h('div');
      pane.appendChild(log);
      pane.appendChild(stage);
      function addLine(l, extra) {
        log.appendChild(h('div.dl.' + (l[0] === 'A' ? 'l' : 'r'), h('span.who', { text: l[0] === 'A' ? s.roles.A : 'Vous' }),
          h('div.bubble.fr', { 'data-say': l[1], 'data-voice': voiceFor(l[0]) }, l[1], h('div.en', { text: l[2] }), extra || null)));
      }
      function step() {
        stage.innerHTML = '';
        if (i >= s.dialogue.length) return done();
        var l = s.dialogue[i];
        if (l[0] === 'A') {
          addLine(l);
          Sp.speak(l[1], { voice: 'F' }).then(function () { i++; setTimeout(step, 250); });
          stage.appendChild(h('div.muted.small', { text: '🔊 Listening…' }));
          return;
        }
        var peek = h('div.speak-target', h('div.muted', { text: 'Your line — say in French:' }), h('b', { text: l[2] }));
        var fr = h('div.fr.strong', { text: l[1], 'data-say': l[1], hidden: hideFr.querySelector('input').checked });
        peek.appendChild(fr);
        stage.appendChild(peek);
        stage.appendChild(h('div.row', h('button.btn.ghost.small', { type: 'button', text: '👀 Peek', onclick: function () { fr.hidden = false; } }), h('span', { html: R.spk(l[1], { label: '🔊 Hear it', cls: 'btn small', voice: 'M' }) })));
        Q.speakWidget(stage, [l[1]], function (ok, res) {
          var pct = res && res.pct != null ? res.pct : (ok ? 100 : 0);
          scores.push(pct);
          addLine(l, h('div.match.' + (pct >= 75 ? 'ok' : 'bad'), { text: pct + '%' }));
          i++; step();
        });
      }
      function done() {
        var avg = scores.length ? Math.round(U.sum(scores) / scores.length) : 0;
        var prev = S.state.speak[s.id] || { best: 0, n: 0 };
        S.state.speak[s.id] = { best: Math.max(prev.best, avg), last: avg, n: prev.n + 1, at: new Date().toISOString() };
        S.save();
        V.finishTask(query, 'speak', s.id);
        stage.appendChild(h('div.empty', h('div', { html: R.ring(avg, 100, 'Average ' + avg + '%') }),
          h('p', { text: avg >= 75 ? 'Très bien ! Try it again with "Hide my French lines" on.' : 'Good effort! Shadow the lines once more, then retry.' }),
          h('div.row', h('button.btn', { type: 'button', text: '↻ Again', onclick: draw }), h('button.btn.primary', { type: 'button', text: 'Your turn →', onclick: function () { cur = 'turn'; U.$$('.chip', bar).forEach(function (b, k) { b.classList.toggle('on', k === 3); }); draw(); } }))));
      }
      step();
    }

    function turn() {
      var qs = s.practice.map(function (p) { return { type: 'speak', fr: p.answer, en: p.prompt, alt: p.alt || [] }; });
      pane.appendChild(h('p.muted', { text: 'Real situations: read the task, then say your answer. Other correct ways of saying it also count.' }));
      var qd = h('div');
      pane.appendChild(qd);
      Q.mount(qd, qs, {
        title: s.title,
        onFinish: function (score, total) {
          var pct = U.pct(score, total), prev = S.state.speak[s.id] || { best: 0, n: 0 };
          S.state.speak[s.id] = { best: Math.max(prev.best, pct), last: pct, n: prev.n + 1, at: new Date().toISOString() };
          S.addQuiz('speak:' + s.id, s.title, score, total);
          V.finishTask(query, 'speak', s.id);
        },
        doneLabel: '↻ Again', onDone: draw
      });
    }

    function phrases() {
      pane.appendChild(h('ul.words', s.keyPhrases.map(function (p) {
        return h('li.word', { html: R.spk(p[0]) + '<div class="w-main"><span class="fr strong" data-say="' + esc(p[0]) + '">' + esc(p[0]) + '</span><div class="muted">' + esc(p[1]) + '</div></div>' });
      })));
      pane.appendChild(h('div.row', h('button.btn', { type: 'button', text: '🔊 Play all phrases', onclick: function () { Sp.speakLines(s.keyPhrases.map(function (p) { return ['F', p[0]]; }), { gap: 700 }); } })));
    }
    draw();
  };

  V.lab = function (root) {
    root.appendChild(h('div.crumbs', h('a', { href: '#/practice', text: '← Practice' })));
    var box = h('section.card');
    root.appendChild(box);
    box.appendChild(h('h1', { text: '🎙️ Pronunciation lab' }));
    box.appendChild(h('p.muted', { text: 'Type or paste any French. Listen at normal or slow speed, then say it — the mic will tell you how close you were.' }));
    var ta = h('textarea.writer', { rows: 3, spellcheck: 'false', 'aria-label': 'French text' });
    ta.value = 'Bonjour ! Je m\'appelle Alex. J\'apprends le français.';
    box.appendChild(ta);
    box.appendChild(R.accentBar(ta));
    var res = h('div');
    box.appendChild(h('div.row',
      h('button.btn.primary', { type: 'button', text: '🔊 Listen', onclick: function () { Sp.speak(ta.value); } }),
      h('button.btn', { type: 'button', text: '🐢 Slowly', onclick: function () { Sp.speak(ta.value, { slow: true }); } }),
      h('button.btn', { type: 'button', text: '👨 Male voice', onclick: function () { Sp.speak(ta.value, { voice: 'M' }); } }),
      h('button.btn', { type: 'button', text: '🎤 Say it', onclick: function () { res.innerHTML = ''; Q.speakWidget(res, [ta.value], function () { /* stays open */ }, { alwaysAccept: true }); } })));
    box.appendChild(res);
    var samples = ['Je voudrais un café, s\'il vous plaît.', 'Excusez-moi, où est la gare ?', 'Il fait beau aujourd\'hui.', 'J\'habite en Inde, à Bangalore.', 'Vous pouvez répéter, s\'il vous plaît ?', 'Un bon vin blanc.', 'Tu as vu la rue ? Oui, tout de suite !', 'Le premier janvier, c\'est le Nouvel An.'];
    box.appendChild(h('h3', { text: 'Try these' }));
    box.appendChild(h('div.chips-row', samples.map(function (x) { return h('button.chip', { type: 'button', text: x, onclick: function () { ta.value = x; Sp.speak(x); } }); })));
    if (Sp.recSupported) {
      var audio = h('audio', { controls: true, hidden: true }), rec = null;
      var rb = h('button.btn', { type: 'button', text: '⏺ Record myself' });
      rb.addEventListener('click', function () {
        if (rec) { rec.stop().then(function (url) { audio.src = url; audio.hidden = false; rb.textContent = '⏺ Record again'; rec = null; }); return; }
        Sp.record().then(function (r) { rec = r; rb.textContent = '⏹ Stop recording'; }, function (e) { U.toast(e.message || 'Recording failed', 'warn'); });
      });
      box.appendChild(h('h3', { text: 'Record & compare' }));
      box.appendChild(h('div.row', rb, audio));
    }
    box.appendChild(h('div.row', h('a.btn.ghost', { href: '#/drill/pairs', text: '👂 Sound-pair drill' }), h('a.btn.ghost', { href: '#/learn?cat=pronunciation', text: '👄 Pronunciation lessons' })));
  };
})();
