/* Library (NLF videos & your books) and Settings. */
(function () {
  'use strict';
  var A1 = window.A1, U = A1.U, S = A1.S, T = A1.T, R = A1.R, Sp = A1.Speech, h = U.h;
  var V = A1.V = A1.V || {};

  function dayOfVideo(n) {
    var days = A1.plan.days;
    for (var i = 0; i < days.length; i++) if ((days[i].nlf || []).concat(days[i].nlfBonus || []).indexOf(n) > -1) return days[i].d;
    return null;
  }
  function watchToggle(id, rerender) {
    var on = !!S.state.videos[id];
    return h('button.check.small' + (on ? '.on' : ''), { type: 'button', 'aria-pressed': on ? 'true' : 'false', 'aria-label': on ? 'Mark not watched' : 'Mark watched',
      onclick: function () { if (S.state.videos[id]) delete S.state.videos[id]; else { S.state.videos[id] = new Date().toISOString(); S.log('tasks', 1); } S.save(); rerender(); } }, on ? '✓' : '');
  }

  V.library = function (root, params, query) {
    root.appendChild(h('div.page-head', h('h1', { text: 'Library' }), h('p.muted', { text: 'NLF Academy videos and your A1 books — tick things off as you go.' })));
    var tabs = h('div.chips-row');
    var pane = h('div');
    var cur = query.tab || 'nlf';
    [['nlf', '🎬 NLF course'], ['more', '📺 More NLF'], ['books', '📚 Your books'], ['web', '🌐 Free resources']].forEach(function (t) {
      tabs.appendChild(h('button.chip' + (t[0] === cur ? '.on' : ''), { type: 'button', text: t[1], onclick: function () { cur = t[0]; U.$$('.chip', tabs).forEach(function (b) { b.classList.toggle('on', b.textContent === t[1]); }); draw(); } }));
    });
    root.appendChild(tabs);
    root.appendChild(pane);
    function draw() {
      pane.innerHTML = '';
      ({ nlf: nlf, more: more, books: books, web: web })[cur](pane, draw);
    }
    draw();
  };

  function nlf(pane, redraw) {
    var vp = T.videoProgress();
    pane.appendChild(h('section.card',
      h('h2', { text: 'Road to A1 — French Course' }),
      h('p.muted', { text: 'by NLF Academy · ' + vp.done + '/' + vp.total + ' videos watched · ' + U.fmtMin(vp.secsDone / 60) + ' of ' + U.fmtMin(vp.secs / 60) }),
      h('div', { html: R.progressBar(U.pct(vp.done, vp.total)) }),
      h('div.row', h('a.btn.small', { href: A1.nlf.channel, target: '_blank', rel: 'noopener', text: 'Channel ↗' }),
        h('a.btn.small', { href: 'https://www.youtube.com/playlist?list=' + A1.nlf.roadA1.list, target: '_blank', rel: 'noopener', text: 'Playlist on YouTube ↗' }))));
    Object.keys(A1.nlf.units).forEach(function (u) {
      var up = T.unitProgress(+u);
      var det = h('details.card.unit', h('summary', h('b', { text: 'Unité ' + u }), h('span.muted', { text: ' · ' + A1.nlf.units[u] }), h('span.pill' + (up.done === up.total ? '.ok' : ''), { text: up.done + '/' + up.total })));
      var ul = h('ul.vids');
      A1.nlf.videos.filter(function (v) { return v[3] === +u; }).forEach(function (v) {
        var vd = T.nlf(v[0]), day = dayOfVideo(v[0]);
        ul.appendChild(h('li.vid' + (S.state.videos[v[1]] ? '.done' : ''), watchToggle(v[1], redraw),
          h('div.vid-main', h('button.linkish', { type: 'button', text: '#' + v[0] + ' ' + (vd.short === vd.title ? vd.title : vd.short), onclick: function () { A1.Player.open(v[1], { title: vd.title }); } }),
            h('div.muted.small', { text: T.videoLabel(vd) + ' · ' + U.fmtSecs(v[2]) + (day ? ' · Day ' + day : '') })),
          h('a.btn.small.ghost', { href: T.ytUrl(v[1]), target: '_blank', rel: 'noopener', text: '↗' })));
      });
      det.appendChild(ul);
      pane.appendChild(det);
    });
  }

  function more(pane, redraw) {
    Object.keys(A1.nlf.extra).forEach(function (k) {
      var pl = A1.nlf.extra[k];
      var done = pl.videos.filter(function (v) { return S.state.videos[v[0]]; }).length;
      var det = h('details.card.unit', h('summary', h('b', { text: pl.title }), h('span.pill', { text: done + '/' + pl.videos.length })));
      var ul = h('ul.vids');
      pl.videos.forEach(function (v) {
        ul.appendChild(h('li.vid' + (S.state.videos[v[0]] ? '.done' : ''), watchToggle(v[0], redraw),
          h('div.vid-main', h('button.linkish', { type: 'button', text: v[2], onclick: function () { A1.Player.open(v[0], { title: v[2] }); } }), h('div.muted.small', { text: U.fmtSecs(v[1]) })),
          h('a.btn.small.ghost', { href: T.ytUrl(v[0]), target: '_blank', rel: 'noopener', text: '↗' })));
      });
      det.appendChild(h('div.row', h('a.btn.small', { href: 'https://www.youtube.com/playlist?list=' + pl.list, target: '_blank', rel: 'noopener', text: 'Open playlist ↗' })));
      det.appendChild(ul);
      pane.appendChild(det);
    });
  }

  function cosmoDay(ref) {
    var days = A1.plan.days;
    for (var i = 0; i < days.length; i++) if ((days[i].cosmo || []).indexOf(ref) > -1) return days[i].d;
    return null;
  }
  function bookCheck(key, redraw) {
    var on = !!S.state.books[key];
    return h('button.check.small' + (on ? '.on' : ''), { type: 'button', 'aria-pressed': on ? 'true' : 'false', 'aria-label': on ? 'Mark not done' : 'Mark done',
      onclick: function () { if (S.state.books[key]) delete S.state.books[key]; else { S.state.books[key] = new Date().toISOString(); S.log('tasks', 1); } S.save(); redraw(); } }, on ? '✓' : '');
  }
  function pageLink(bookId, page, text) {
    return U.isLocalFile() ? h('a', { href: T.pdfHref(bookId, page), target: '_blank', rel: 'noopener', text: text }) : h('span', { text: text });
  }

  function books(pane, redraw) {
    pane.appendChild(h('div.callout.note', h('div', { text: U.isLocalFile()
      ? 'Page links open your PDFs from the A1 folder next to this app.'
      : 'Your PDFs are private and are not published online. To get clickable page links, open index.html from your computer folder; here, use the page numbers.' })));
    A1.books.forEach(function (b) {
      var card = h('details.card.unit' + (b.id === 'cosmo' ? '' : ''));
      var done = 0, total = 0, list = h('ul.vids');
      if (b.dossiers) {
        b.dossiers.forEach(function (d) {
          list.appendChild(h('li.sub-h', h('b', { text: 'Dossier ' + d.n + ' — ' + d.title })));
          d.lessons.forEach(function (l, i) {
            var ref = d.n + '.' + (i + 1), key = 'cosmo:' + ref, c = T.cosmo(ref), day = cosmoDay(ref);
            total++; if (S.state.books[key]) done++;
            list.appendChild(h('li.vid' + (S.state.books[key] ? '.done' : ''), bookCheck(key, redraw),
              h('div.vid-main', pageLink('cosmo', c.page, 'Leçon ' + (i + 1) + ' · ' + l[0] + ' — p. ' + c.page), h('div.muted.small', { text: l[1] + (day ? ' · plan Day ' + day : '') }))));
          });
        });
        (b.extras || []).forEach(function (e) { list.appendChild(h('li.vid', h('span.check.small.ghost', { text: '·' }), h('div.vid-main', pageLink(b.id, e[1], e[0] + ' — p. ' + e[1])))); });
      } else {
        b.chapters.forEach(function (c, i) {
          var key = b.id + ':' + i;
          total++; if (S.state.books[key]) done++;
          list.appendChild(h('li.vid' + (S.state.books[key] ? '.done' : ''), bookCheck(key, redraw),
            h('div.vid-main', pageLink(b.id, c[1], c[0] + ' — p. ' + c[1]), c[2] ? h('div.muted.small', { text: c[2] }) : null)));
        });
      }
      card.appendChild(h('summary', h('span', { text: b.icon + ' ' }), h('b', { text: b.title }), h('span.pill' + (done === total ? '.ok' : ''), { text: done + '/' + total })));
      card.appendChild(h('p.muted.small', { text: b.role }));
      card.appendChild(list);
      pane.appendChild(card);
    });
  }

  function web(pane) {
    var links = [
      ['DELF A1 official sample papers (France Éducation international)', 'https://www.france-education-international.fr/diplome/delf-tout-public/niveau-a1/exemples', 'Real past-style papers with audio — do one in the last week.'],
      ['TV5Monde — Apprendre le français', 'https://apprendre.tv5monde.com/fr', 'Free A1 exercises built on short videos.'],
      ['RFI — Français facile', 'https://francaisfacile.rfi.fr/fr/', 'News in easy French with exercises (A1–B2).'],
      ['WordReference (French ⇄ English)', 'https://www.wordreference.com/fren/', 'Best free dictionary + forums.'],
      ['Forvo', 'https://forvo.com/languages/fr/', 'Hear words pronounced by native speakers.'],
      ['NLF Academy on YouTube', 'https://www.youtube.com/@NLF-Academy', 'Your main course — subscribe!']
    ];
    var ul = h('ul.mini-list');
    links.forEach(function (l) { ul.appendChild(h('li', h('a', { href: l[1], target: '_blank', rel: 'noopener', text: l[0] + ' ↗' }), h('div.muted.small', { text: l[2] }))); });
    pane.appendChild(h('section.card', h('h2', { text: 'Free resources' }), ul));
  }

  /* ---------- settings ---------- */
  V.settings = function (root) {
    root.appendChild(h('div.page-head', h('h1', { text: 'Settings' })));
    var box = h('section.card');
    root.appendChild(box);
    /* adaptive plan */
    var ed = h('input.field', { type: 'date', value: S.get('endDate') || A1.plan.end, 'aria-label': 'Plan end date' });
    var ww = h('select.select', { 'aria-label': 'Weekend load' });
    [[1, 'Same as weekdays (1×)'], [1.5, '1.5× weekdays'], [2, '2× weekdays (default)'], [2.5, '2.5× weekdays'], [3, '3× weekdays']].forEach(function (x) { ww.appendChild(h('option', { value: x[0], text: x[1] })); });
    ww.value = String(T.weekendWeight());
    var paceInfo = h('p.muted.small');
    function updPace() { T.invalidate(); var st = T.status(); paceInfo.textContent = 'Right now: ' + U.plural(st.daysLeft, 'day') + ' left · ≈ ' + U.fmtMin(st.perWeekday) + ' per weekday, ≈ ' + U.fmtMin(st.perWeekend) + ' per weekend day.'; }
    ed.addEventListener('change', function () { if (/^\d{4}-\d{2}-\d{2}$/.test(ed.value)) { S.set('endDate', ed.value); T.replan(); updPace(); U.toast('End date saved — plan re-balanced'); } });
    ww.addEventListener('change', function () { S.set('weekendWeight', parseFloat(ww.value)); T.replan(); updPace(); U.toast('Weekend load saved — plan re-balanced'); });
    box.appendChild(h('h2', { text: '📅 Plan (adapts every day)' }));
    box.appendChild(h('p.muted.small', { text: 'Every day, whatever is left of the 47 plan days is spread from today to your end date. Weekends get more. Today’s list stays fixed for the day; future days re-balance as you go.' }));
    box.appendChild(h('label.form-row', h('span', { text: 'Finish by (end date)' }), ed));
    box.appendChild(h('label.form-row', h('span', { text: 'Weekend load' }), ww));
    box.appendChild(paceInfo);
    box.appendChild(h('div.row', h('button.btn.small', { type: 'button', text: '↻ Re-plan today now', onclick: function () { T.replan(); updPace(); U.toast('Re-planned from today'); } })));
    updPace();

    /* voices */
    box.appendChild(h('h2', { text: '🔊 French voice' }));
    var vf = h('select.select', { 'aria-label': 'Main voice' }), vm = h('select.select', { 'aria-label': 'Second voice' });
    var info = h('p.muted.small');
    Sp.ready.then(function () {
      var list = Sp.voices;
      [vf, vm].forEach(function (sel, i) {
        sel.innerHTML = '';
        sel.appendChild(h('option', { value: '', text: 'Automatic (best available)' }));
        list.forEach(function (v) { sel.appendChild(h('option', { value: v.name, text: v.name + ' (' + v.lang + ')' })); });
        sel.value = S.get(i ? 'voiceM' : 'voiceF') || '';
      });
      info.textContent = list.length ? list.length + ' French voice(s) found. "Natural/Online" voices (Microsoft Edge) and "Google français" (Chrome) sound best.' :
        'No French voice found. On Windows: Settings → Time & language → Speech → Add voices → French. On Android: install Google Text-to-speech French. Or use Microsoft Edge, which has natural online French voices.';
    });
    vf.addEventListener('change', function () { S.set('voiceF', vf.value); Sp.speak('Bonjour ! Je suis votre voix principale.'); });
    vm.addEventListener('change', function () { S.set('voiceM', vm.value); Sp.speak('Bonjour ! Je suis la deuxième voix.', { voice: 'M' }); });
    box.appendChild(h('label.form-row', h('span', { text: 'Main voice' }), vf));
    box.appendChild(h('label.form-row', h('span', { text: 'Second voice (dialogues)' }), vm));
    box.appendChild(info);
    var rate = h('input', { type: 'range', min: '0.6', max: '1.2', step: '0.05', value: String(S.get('rate') || 0.95), 'aria-label': 'Speech speed' });
    var rv = h('span.muted', { text: (S.get('rate') || 0.95) + '×' });
    rate.addEventListener('input', function () { rv.textContent = rate.value + '×'; });
    rate.addEventListener('change', function () { S.set('rate', parseFloat(rate.value)); Sp.speak('Je parle à cette vitesse.'); });
    box.appendChild(h('label.form-row', h('span', { text: 'Speaking speed' }), rate, rv));
    box.appendChild(h('div.row', h('button.btn', { type: 'button', text: '🔊 Test', onclick: function () { Sp.speak('Bonjour ! Comment allez-vous ? Je m\'appelle Claire et j\'habite à Paris.'); } }),
      h('button.btn', { type: 'button', text: '🔊 Test second voice', onclick: function () { Sp.speak('Très bien, merci. Et vous ?', { voice: 'M' }); } })));
    box.appendChild(toggle('Show pronunciation guides (grey text)', 'showSay', function (v) { document.body.classList.toggle('hide-say', !v); }));
    box.appendChild(toggle('Play audio automatically in listening questions', 'autoplay'));
    box.appendChild(h('p.muted.small', { text: 'Speech recognition (scoring your speaking): ' + (Sp.srSupported ? '✓ available in this browser.' : '✗ not available here — use Chrome or Edge.') }));

    /* video */
    box.appendChild(h('h2', { text: '🎬 Videos' }));
    box.appendChild(toggle('Play NLF videos inside the app (when online)', 'embed'));
    var vr = h('select.select', { 'aria-label': 'Video speed' });
    [1, 1.25, 1.5, 1.75].forEach(function (x) { vr.appendChild(h('option', { value: x, text: x + '×' })); });
    vr.value = String(S.get('videoRate') || 1);
    vr.addEventListener('change', function () { S.set('videoRate', parseFloat(vr.value)); });
    box.appendChild(h('label.form-row', h('span', { text: 'Default video speed' }), vr));

    /* cards */
    box.appendChild(h('h2', { text: '🃏 Flashcards' }));
    var nn = h('input.field.short', { type: 'number', min: '3', max: '40', value: String(S.get('newPerSession') || 12), 'aria-label': 'New cards per session' });
    nn.addEventListener('change', function () { S.set('newPerSession', U.clamp(parseInt(nn.value, 10) || 12, 3, 40)); });
    box.appendChild(h('label.form-row', h('span', { text: 'New words per session' }), nn));

    /* theme */
    box.appendChild(h('h2', { text: '🎨 Appearance' }));
    var th = h('select.select', { 'aria-label': 'Theme' });
    [['auto', 'Automatic'], ['light', 'Light'], ['dark', 'Dark']].forEach(function (x) { th.appendChild(h('option', { value: x[0], text: x[1] })); });
    th.value = S.get('theme') || 'auto';
    th.addEventListener('change', function () { S.set('theme', th.value); A1.App.applyTheme(); });
    box.appendChild(h('label.form-row', h('span', { text: 'Theme' }), th));

    root.appendChild(V.backupCard());
    root.appendChild(h('section.card', h('h2', { text: 'About' }),
      h('p.small', { html: 'Built around the free <a href="https://www.youtube.com/@NLF-Academy" target="_blank" rel="noopener">NLF Academy</a> "Road to A1" course. Lessons, quizzes and drills are original. Book references point to your own copies of the books.' }),
      h('p.muted.small', { text: 'Works offline after the first visit (add it to your home screen). Version ' + A1.VERSION + '.' })));
  };

  function toggle(label, key, after) {
    var cb = h('input', { type: 'checkbox', checked: S.get(key) !== false });
    cb.addEventListener('change', function () { S.set(key, cb.checked); if (after) after(cb.checked); });
    return h('label.toggle', cb, h('span', { text: label }));
  }
})();
