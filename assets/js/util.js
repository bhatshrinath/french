/* Small utilities shared by the whole app. */
(function () {
  'use strict';
  var A1 = window.A1;
  var U = A1.U = {};

  U.$ = function (sel, root) { return (root || document).querySelector(sel); };
  U.$$ = function (sel, root) { return Array.prototype.slice.call((root || document).querySelectorAll(sel)); };

  var ESC = { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' };
  U.esc = function (s) { return String(s == null ? '' : s).replace(/[&<>"']/g, function (c) { return ESC[c]; }); };

  /* h('div.card#id', {onclick: fn, 'data-x': 1, html: '<b>x</b>'}, child, 'text', [more]) */
  U.h = function (tag, attrs) {
    var m = /^([a-z0-9-]+)?((?:[.#][\w-]+)*)$/i.exec(tag) || [];
    var el = document.createElement(m[1] || 'div');
    (m[2] || '').replace(/([.#])([\w-]+)/g, function (_, t, v) {
      if (t === '.') el.classList.add(v); else el.id = v;
    });
    var start = 1;
    if (attrs && typeof attrs === 'object' && !(attrs instanceof Node) && !Array.isArray(attrs)) {
      start = 2;
      Object.keys(attrs).forEach(function (k) {
        var v = attrs[k];
        if (v == null || v === false) return;
        if (k === 'html') el.innerHTML = v;
        else if (k === 'text') el.textContent = v;
        else if (k === 'class') el.className += (el.className ? ' ' : '') + v;
        else if (k === 'style' && typeof v === 'object') Object.assign(el.style, v);
        else if (k.slice(0, 2) === 'on' && typeof v === 'function') el.addEventListener(k.slice(2), v);
        else if (v === true) el.setAttribute(k, '');
        else el.setAttribute(k, v);
      });
    }
    for (var i = start; i < arguments.length; i++) append(el, arguments[i]);
    return el;
  };
  function append(el, c) {
    if (c == null || c === false) return;
    if (Array.isArray(c)) { c.forEach(function (x) { append(el, x); }); return; }
    el.appendChild(c instanceof Node ? c : document.createTextNode(String(c)));
  }

  /* ---------- dates (local calendar days, never UTC) ---------- */
  U.pad = function (n) { return (n < 10 ? '0' : '') + n; };
  U.dateKey = function (d) { d = d || new Date(); return d.getFullYear() + '-' + U.pad(d.getMonth() + 1) + '-' + U.pad(d.getDate()); };
  U.todayKey = function () { return U.dateKey(new Date()); };
  U.parseKey = function (k) { var p = String(k).split('-'); return new Date(+p[0], +p[1] - 1, +p[2]); };
  U.addDays = function (d, n) { var x = new Date(d.getFullYear(), d.getMonth(), d.getDate()); x.setDate(x.getDate() + n); return x; };
  U.daysBetween = function (a, b) { /* whole days from a to b */
    var A = Date.UTC(a.getFullYear(), a.getMonth(), a.getDate());
    var B = Date.UTC(b.getFullYear(), b.getMonth(), b.getDate());
    return Math.round((B - A) / 86400000);
  };
  var WD = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  var MO = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  U.fmtDate = function (d, withYear) { return WD[d.getDay()] + ' ' + d.getDate() + ' ' + MO[d.getMonth()] + (withYear ? ' ' + d.getFullYear() : ''); };
  U.fmtShort = function (d) { return d.getDate() + ' ' + MO[d.getMonth()]; };
  U.weekday = function (d) { return WD[d.getDay()]; };
  U.fmtMin = function (min) {
    min = Math.round(min || 0);
    if (min < 60) return min + ' min';
    var h = Math.floor(min / 60), m = min % 60;
    return h + ' h' + (m ? ' ' + U.pad(m) : '');
  };
  U.fmtSecs = function (s) { s = Math.round(s); var h = Math.floor(s / 3600), m = Math.floor(s % 3600 / 60), x = s % 60; return (h ? h + ':' + U.pad(m) : m) + ':' + U.pad(x); };

  /* ---------- arrays ---------- */
  U.shuffle = function (arr) {
    var a = arr.slice();
    for (var i = a.length - 1; i > 0; i--) { var j = Math.floor(Math.random() * (i + 1)); var t = a[i]; a[i] = a[j]; a[j] = t; }
    return a;
  };
  U.pick = function (arr) { return arr[Math.floor(Math.random() * arr.length)]; };
  U.rand = function (lo, hi) { return lo + Math.floor(Math.random() * (hi - lo + 1)); };
  U.sum = function (arr, f) { return arr.reduce(function (s, x) { return s + (f ? f(x) : x); }, 0); };
  U.uniq = function (arr) { var s = new Set(); return arr.filter(function (x) { if (s.has(x)) return false; s.add(x); return true; }); };
  U.clamp = function (x, a, b) { return Math.max(a, Math.min(b, x)); };

  /* ---------- text comparison ---------- */
  U.stripAccents = function (s) { return String(s).normalize('NFD').replace(/[̀-ͯ]/g, '').replace(/œ/g, 'oe').replace(/æ/g, 'ae'); };
  /* lower-case, unify apostrophes/dashes, drop punctuation, collapse spaces */
  U.norm = function (s, loose) {
    var t = String(s == null ? '' : s).toLowerCase()
      .replace(/[’‘`´]/g, "'")
      .replace(/[«»"“”.,!?;:()\[\]…]/g, ' ')
      .replace(/\s*'\s*/g, "'")
      .replace(/[-–—]/g, ' ')
      .replace(/\s+/g, ' ').trim();
    return loose ? U.stripAccents(t) : t;
  };
  /* compare a typed answer with accepted answers.
     returns {ok, accentOnly, best} — accent-only differences count as ok but are flagged */
  U.checkTyped = function (input, answers) {
    var a = U.norm(input);
    var list = [].concat(answers);
    for (var i = 0; i < list.length; i++) if (U.norm(list[i]) === a) return { ok: true, accentOnly: false, best: list[i] };
    for (i = 0; i < list.length; i++) if (U.norm(list[i], true) === U.norm(input, true)) return { ok: true, accentOnly: true, best: list[i] };
    return { ok: false, accentOnly: false, best: list[0] };
  };
  U.lev = function (a, b) {
    var m = a.length, n = b.length;
    if (!m) return n; if (!n) return m;
    var prev = new Array(n + 1), cur = new Array(n + 1);
    for (var j = 0; j <= n; j++) prev[j] = j;
    for (var i = 1; i <= m; i++) {
      cur[0] = i;
      for (j = 1; j <= n; j++) cur[j] = Math.min(prev[j] + 1, cur[j - 1] + 1, prev[j - 1] + (a[i - 1] === b[j - 1] ? 0 : 1));
      var t = prev; prev = cur; cur = t;
    }
    return prev[n];
  };
  /* similarity 0..1 of two sentences, word-based with character tolerance */
  U.similarity = function (target, said) {
    var A = U.norm(target, true), B = U.norm(said, true);
    if (!A && !B) return 1;
    var c = 1 - U.lev(A, B) / Math.max(A.length, B.length, 1);
    return U.clamp(c, 0, 1);
  };
  /* mark which target words were heard: [{w, ok}] */
  U.wordMatch = function (target, said) {
    var heard = U.norm(said, true).split(' ').filter(Boolean);
    var used = new Array(heard.length).fill(false);
    return String(target).split(/\s+/).filter(Boolean).map(function (w) {
      var k = U.norm(w, true);
      if (!k) return { w: w, ok: true };
      for (var i = 0; i < heard.length; i++) {
        if (used[i]) continue;
        var h = heard[i];
        if (h === k || (k.length > 3 && U.lev(h, k) <= 1)) { used[i] = true; return { w: w, ok: true }; }
        /* "j'aime" heard as "j aime" etc. */
        if (k.indexOf("'") > -1 && k.replace("'", '') === h.replace("'", '')) { used[i] = true; return { w: w, ok: true }; }
      }
      return { w: w, ok: false };
    });
  };
  U.wordCount = function (s) { return String(s || '').trim().split(/\s+/).filter(function (w) { return /[a-zà-ÿ0-9]/i.test(w); }).length; };

  /* ---------- misc ---------- */
  U.debounce = function (fn, ms) { var t; return function () { var a = arguments, self = this; clearTimeout(t); t = setTimeout(function () { fn.apply(self, a); }, ms); }; };
  U.download = function (name, text, type) {
    var blob = new Blob([text], { type: type || 'application/json' });
    var a = U.h('a', { href: URL.createObjectURL(blob), download: name });
    document.body.appendChild(a); a.click();
    setTimeout(function () { URL.revokeObjectURL(a.href); a.remove(); }, 1000);
  };
  U.toast = function (msg, kind) {
    var host = U.$('#toasts') || document.body.appendChild(U.h('div#toasts', { 'aria-live': 'polite' }));
    var t = U.h('div.toast' + (kind ? '.' + kind : ''), { text: msg });
    host.appendChild(t);
    setTimeout(function () { t.classList.add('out'); }, 2600);
    setTimeout(function () { t.remove(); }, 3100);
  };
  U.isLocalFile = function () { return location.protocol === 'file:'; };
  U.pct = function (a, b) { return b ? Math.round(100 * a / b) : 0; };
  U.plural = function (n, one, many) { return n + ' ' + (n === 1 ? one : (many || one + 's')); };
})();
