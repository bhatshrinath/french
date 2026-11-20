/* App shell: router, navigation, theme, YouTube player, boot. */
(function () {
  'use strict';
  var A1 = window.A1, U = A1.U, S = A1.S, T = A1.T, Sp = A1.Speech, V = A1.V, h = U.h;
  A1.VERSION = '1.1.0';
  var App = A1.App = {};

  var ROUTES = {
    today: V.today, plan: V.plan, day: V.day, learn: V.learn, lesson: V.lesson, review: V.review,
    practice: V.practice, drill: V.drill, conj: V.conj, write: V.write, cards: V.cards,
    scenario: V.scenario, lab: V.lab, exam: V.exam, progress: V.progress, library: V.library, settings: V.settings
  };
  var NAV = [['today', 'Today', '🏠'], ['plan', 'Plan', '🗓️'], ['learn', 'Learn', '📘'], ['practice', 'Practice', '🎯'], ['progress', 'Progress', '📈']];
  var SECTION = { day: 'plan', lesson: 'learn', review: 'learn', drill: 'practice', conj: 'practice', write: 'practice', cards: 'practice', scenario: 'practice', lab: 'practice', exam: 'practice' };
  var TITLES = { today: 'Today', plan: 'Plan', day: 'Day', learn: 'Learn', lesson: 'Lesson', review: 'Checkpoint', practice: 'Practice', drill: 'Drill', conj: 'Verbs', write: 'Writing', cards: 'Flashcards', scenario: 'Speaking', lab: 'Pronunciation lab', exam: 'Mock exam', progress: 'Progress', library: 'Library', settings: 'Settings' };

  function parse() {
    var raw = location.hash.replace(/^#\/?/, ''), q = {}, qi = raw.indexOf('?');
    if (qi > -1) {
      raw.slice(qi + 1).split('&').forEach(function (kv) { if (!kv) return; var p = kv.split('='); q[decodeURIComponent(p[0])] = decodeURIComponent(p[1] || ''); });
      raw = raw.slice(0, qi);
    }
    var parts = raw.split('/').filter(Boolean);
    return { name: parts[0] || 'today', params: parts.slice(1), query: q };
  }

  App.render = function () {
    Sp.stop();
    if (A1.Quiz.cleanup) A1.Quiz.cleanup();
    if (V.cleanupKeys) V.cleanupKeys();
    T.invalidate();
    var r = parse(), fn = ROUTES[r.name];
    if (!fn) { r.name = 'today'; fn = V.today; }
    var main = U.$('#view');
    main.innerHTML = '';
    try { fn(main, r.params, r.query); }
    catch (e) {
      console.error(e);
      main.appendChild(h('div.card', h('h2', { text: 'Something went wrong' }), h('p.muted', { text: String(e && e.message || e) }), h('a.btn', { href: '#/today', text: 'Back to Today' })));
    }
    var sec = SECTION[r.name] || r.name;
    U.$$('.nav a').forEach(function (a) { var on = a.getAttribute('data-r') === sec; a.classList.toggle('on', on); if (on) a.setAttribute('aria-current', 'page'); else a.removeAttribute('aria-current'); });
    document.title = (TITLES[r.name] || 'French A1') + ' · French A1 in 47 days';
    window.scrollTo(0, 0);
    updateTop();
  };

  function updateTop() {
    var st = T.status(), o = T.overall();
    var pill = U.$('#day-pill');
    if (!pill) return;
    pill.textContent = st.allDone ? 'Plan done 🎉' : (st.today.length ? 'Today: Day ' + st.today.join('+') : 'Day ' + T.nextDay() + '/' + T.total()) + ' · ' + o.pct + '%';
    pill.className = 'pill top-pill' + (st.heavy ? ' warn' : '');
    pill.title = st.daysLeft + ' days to the end date · ≈ ' + U.fmtMin(st.perWeekday) + ' per weekday, ' + U.fmtMin(st.perWeekend) + ' per weekend day';
  }

  App.applyTheme = function () {
    var t = S.get('theme') || 'auto';
    if (t === 'auto') document.documentElement.removeAttribute('data-theme');
    else document.documentElement.setAttribute('data-theme', t);
  };

  function layout() {
    var app = U.$('#app');
    app.innerHTML = '';
    app.appendChild(h('header.top',
      h('a.brand', { href: '#/today', 'aria-label': 'French A1 home' }, h('span.flag', { 'aria-hidden': 'true' }), h('span', { text: 'French A1' })),
      h('span#day-pill.pill.top-pill'),
      h('div.top-links',
        h('a.icon-btn', { href: '#/library', title: 'Library: NLF videos & your books', 'aria-label': 'Library' }, '📚'),
        h('a.icon-btn', { href: '#/settings', title: 'Settings', 'aria-label': 'Settings' }, '⚙️'))));
    var nav = h('nav.nav', { 'aria-label': 'Main' });
    NAV.forEach(function (n) { nav.appendChild(h('a', { href: '#/' + n[0], 'data-r': n[0] }, h('span.nav-ic', { text: n[2], 'aria-hidden': 'true' }), h('span.nav-t', { text: n[1] }))); });
    app.appendChild(nav);
    app.appendChild(h('main#view', { tabindex: '-1' }));
    app.appendChild(h('div#toasts', { 'aria-live': 'polite' }));
  }

  /* ---------- YouTube player (modal) ---------- */
  var Player = A1.Player = {};
  var ytLoading = null;
  function loadYT() {
    if (window.YT && window.YT.Player) return Promise.resolve(window.YT);
    if (ytLoading) return ytLoading;
    ytLoading = new Promise(function (resolve, reject) {
      var prev = window.onYouTubeIframeAPIReady;
      window.onYouTubeIframeAPIReady = function () { if (prev) prev(); resolve(window.YT); };
      var s = document.createElement('script');
      s.src = 'https://www.youtube.com/iframe_api';
      s.onerror = function () { ytLoading = null; reject(new Error('YouTube could not load')); };
      document.head.appendChild(s);
      setTimeout(function () { if (!(window.YT && window.YT.Player)) { ytLoading = null; reject(new Error('timeout')); } }, 8000);
    });
    return ytLoading;
  }
  function markWatched(id, task) {
    if (task) { if (!T.isDone(task)) T.setDone(task, true); }
    else if (!S.state.videos[id]) {
      S.state.videos[id] = new Date().toISOString();
      var v = (A1.nlf.videos || []).filter(function (x) { return x[1] === id; })[0];
      S.log('tasks', 1); if (v) S.log('min', Math.round(v[2] / 60));
      S.save();
    }
  }
  Player.open = function (id, opts) {
    opts = opts || {};
    Sp.stop();
    var embed = S.get('embed') !== false && !U.isLocalFile() && navigator.onLine !== false;
    var task = opts.task || null;
    if (!embed) {
      window.open(T.ytUrl(id, opts.start), '_blank', 'noopener');
      askWatched(id, task, opts.title);
      return;
    }
    close();
    var holder = h('div.player-frame', h('div#yt-player'));
    var chaps = (A1.nlf.chapters || {})[id];
    var player = null, poll = null, marked = !!S.state.videos[id];
    var markBtn = h('button.btn.small' + (marked ? '.ok' : '.primary'), { type: 'button', text: marked ? '✓ Watched' : 'Mark as watched',
      onclick: function () { markWatched(id, task); markBtn.textContent = '✓ Watched'; markBtn.className = 'btn small ok'; refresh(); } });
    var speeds = h('div.seg', [1, 1.25, 1.5].map(function (r) {
      return h('button.seg-b' + ((S.get('videoRate') || 1) === r ? '.on' : ''), { type: 'button', text: r + '×', onclick: function (e) {
        S.set('videoRate', r); if (player && player.setPlaybackRate) player.setPlaybackRate(r);
        U.$$('.seg-b', speeds).forEach(function (b) { b.classList.toggle('on', b === e.currentTarget); });
      } });
    }));
    var modal = h('div.modal', { role: 'dialog', 'aria-modal': 'true', 'aria-label': opts.title || 'Video' },
      h('div.modal-box',
        h('div.modal-head', h('b', { text: opts.title || 'NLF Academy' }), h('button.icon-btn', { type: 'button', 'aria-label': 'Close', text: '✕', onclick: close })),
        holder,
        h('div.row.player-ctl', markBtn, h('span.muted.small', { text: 'Speed' }), speeds, h('a.btn.small.ghost', { href: T.ytUrl(id, opts.start), target: '_blank', rel: 'noopener', text: 'YouTube ↗' })),
        chaps ? h('details.chapters', h('summary.small', { text: 'Chapters (' + chaps.length + ')' }), h('div.chips-row', chaps.map(function (c) {
          return h('button.chip', { type: 'button', text: U.fmtSecs(c[0]) + ' ' + c[1], onclick: function () { if (player && player.seekTo) { player.seekTo(c[0], true); player.playVideo(); } } });
        }))) : null,
        h('p.muted.small', { text: 'Ticked automatically when you reach 90% of the video. Tip: watch the "Homework" videos actively — pause and answer before the teacher does.' })));
    modal.addEventListener('click', function (e) { if (e.target === modal) close(); });
    document.addEventListener('keydown', escClose);
    document.body.appendChild(modal);
    document.body.classList.add('modal-open');
    Player.current = { close: function () { if (poll) clearInterval(poll); if (player && player.destroy) try { player.destroy(); } catch (e) { /* ignore */ } } };
    loadYT().then(function (YT) {
      if (!document.body.contains(modal)) return;
      player = new YT.Player('yt-player', {
        videoId: id, host: 'https://www.youtube-nocookie.com',
        playerVars: { rel: 0, modestbranding: 1, playsinline: 1, start: opts.start || 0 },
        events: {
          onReady: function (e) { try { e.target.setPlaybackRate(S.get('videoRate') || 1); e.target.playVideo(); } catch (x) { /* ignore */ } },
          onStateChange: function (e) { if (e.data === 0 && !marked) { marked = true; markWatched(id, task); markBtn.textContent = '✓ Watched'; markBtn.className = 'btn small ok'; refresh(); } }
        }
      });
      poll = setInterval(function () {
        try {
          var d = player.getDuration(), c = player.getCurrentTime();
          if (!marked && d > 0 && c / d >= 0.9) { marked = true; markWatched(id, task); markBtn.textContent = '✓ Watched'; markBtn.className = 'btn small ok'; refresh(); }
        } catch (e) { /* ignore */ }
      }, 4000);
    }, function () {
      /* API blocked: plain embed, manual tick */
      U.$('#yt-player', holder).replaceWith(h('iframe', { src: 'https://www.youtube-nocookie.com/embed/' + id + '?rel=0&modestbranding=1&autoplay=1' + (opts.start ? '&start=' + opts.start : ''), title: opts.title || 'Video', allow: 'autoplay; encrypted-media; picture-in-picture; fullscreen', allowfullscreen: true }));
    });
  };
  function refresh() { var r = parse().name; if (r === 'today' || r === 'day' || r === 'library' || r === 'lesson') { /* re-render under the modal */ var y = window.scrollY; App.render(); window.scrollTo(0, y); } }
  function escClose(e) { if (e.key === 'Escape') close(); }
  function close() {
    var m = U.$('.modal');
    if (Player.current) { Player.current.close(); Player.current = null; }
    if (m) m.remove();
    document.body.classList.remove('modal-open');
    document.removeEventListener('keydown', escClose);
  }
  Player.close = close;
  function askWatched(id, task, title) {
    if (S.state.videos[id]) return;
    var bar = h('div.toast.ask', h('span', { text: 'Finished "' + (title || 'the video') + '"? ' }),
      h('button.btn.small.primary', { type: 'button', text: '✓ Mark watched', onclick: function () { markWatched(id, task); bar.remove(); App.render(); } }),
      h('button.btn.small.ghost', { type: 'button', text: 'Later', onclick: function () { bar.remove(); } }));
    (U.$('#toasts') || document.body).appendChild(bar);
  }

  /* dialogue "play all" buttons inside lessons */
  document.addEventListener('click', function (e) {
    var b = e.target.closest && e.target.closest('.play-dialogue');
    if (!b) return;
    var dlg = b.closest('.dlg');
    if (Sp.speaking) { Sp.stop(); b.textContent = '▶ Play the dialogue'; return; }
    b.textContent = '⏹ Stop';
    Sp.speakLines(JSON.parse(b.getAttribute('data-lines')), {
      onLine: function (i) {
        U.$$('.dl', dlg).forEach(function (d) { d.classList.toggle('playing', +d.getAttribute('data-line') === i); });
        if (i < 0) b.textContent = '▶ Play the dialogue';
      }
    });
  });

  /* ---------- boot ---------- */
  function boot() {
    App.applyTheme();
    document.body.classList.toggle('hide-say', S.get('showSay') === false);
    layout();
    window.addEventListener('hashchange', App.render);
    S.on(U.debounce(updateTop, 100));
    App.render();
    if ('serviceWorker' in navigator && !U.isLocalFile()) {
      navigator.serviceWorker.register('sw.js').catch(function () { /* offline support is optional */ });
    }
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', boot); else boot();
})();
