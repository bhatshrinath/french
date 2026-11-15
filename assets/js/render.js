/* Renders lesson content (see tools/CONTENT_SPEC.md) to HTML strings. */
(function () {
  'use strict';
  var A1 = window.A1, U = A1.U, esc = U.esc;
  var R = A1.R = {};

  /* [[français]] / [[français|respelling]] -> tappable spoken French */
  R.inline = function (html) {
    return String(html == null ? '' : html).replace(/\[\[([^\]|]+)(?:\|([^\]]+))?\]\]/g, function (m, fr, say) {
      return '<span class="fr" data-say="' + esc(fr) + '" tabindex="0" role="button" title="Tap to listen">' + esc(fr) +
        (say ? '<span class="say">' + esc(say) + '</span>' : '') + '</span>';
    });
  };
  R.spk = function (text, opts) {
    opts = opts || {};
    return '<button type="button" class="spk' + (opts.cls ? ' ' + opts.cls : '') + '" data-say="' + esc(text) + '"' +
      (opts.voice ? ' data-voice="' + opts.voice + '"' : '') + (opts.slow ? ' data-slow' : '') +
      ' aria-label="' + (opts.slow ? 'Listen slowly' : 'Listen') + '" title="' + (opts.slow ? 'Slowly' : 'Listen') + '">' + (opts.label || (opts.slow ? '🐢' : '🔊')) + '</button>';
  };
  function sayLine(say) { return say ? '<div class="say">' + esc(say) + '</div>' : ''; }

  R.block = function (b) {
    var h = b.h ? '<h3>' + R.inline(b.h) + '</h3>' : '';
    if ('p' in b) return h + '<p>' + R.inline(b.p) + '</p>';
    if ('list' in b) return h + '<ul class="list">' + b.list.map(function (x) { return '<li>' + R.inline(x) + '</li>'; }).join('') + '</ul>';
    if ('table' in b) {
      return h + '<div class="tbl"><table><thead><tr>' + b.table.head.map(function (c) { return '<th>' + R.inline(c) + '</th>'; }).join('') +
        '</tr></thead><tbody>' + b.table.rows.map(function (r) { return '<tr>' + r.map(function (c) { return '<td>' + R.inline(c) + '</td>'; }).join('') + '</tr>'; }).join('') + '</tbody></table></div>';
    }
    if ('examples' in b) {
      return h + '<ul class="ex">' + b.examples.map(function (e) {
        return '<li>' + R.spk(e.fr) + '<div><div class="ex-fr fr" data-say="' + esc(e.fr) + '">' + esc(e.fr) + '</div>' + sayLine(e.say) +
          '<div class="ex-en">' + R.inline(e.en) + '</div></div></li>';
      }).join('') + '</ul>';
    }
    if ('conj' in b) {
      var c = b.conj, all = c.rows.map(function (r) { return r[0]; }).join('. ') + '.';
      return h + '<div class="conj"><div class="conj-h"><b class="fr" data-say="' + esc(c.verb) + '">' + esc(c.verb) + '</b> <span class="muted">' + esc(c.en) + '</span>' +
        R.spk(all, { label: '🔊 all', cls: 'spk-wide' }) + '</div><table>' + c.rows.map(function (r) {
          return '<tr><td><span class="fr strong" data-say="' + esc(r[0]) + '">' + esc(r[0]) + '</span>' + (r[2] ? '<span class="say">' + esc(r[2]) + '</span>' : '') + '</td><td class="muted">' + R.inline(r[1]) + '</td></tr>';
        }).join('') + '</table></div>';
    }
    if ('pairs' in b) {
      return h + '<div class="pairs">' + b.pairs.map(function (p) {
        return '<div class="pair"><button type="button" class="pair-btn" data-say="' + esc(p[0]) + '">🔊 ' + esc(p[0]) + '</button><span class="vs">vs</span>' +
          '<button type="button" class="pair-btn" data-say="' + esc(p[1]) + '">🔊 ' + esc(p[1]) + '</button>' + (p[2] ? '<div class="pair-note">' + R.inline(p[2]) + '</div>' : '') + '</div>';
      }).join('') + '</div>';
    }
    if ('dialogue' in b) return h + R.dialogue(b.dialogue);
    if ('tip' in b) return h + '<div class="callout tip"><b>💡 Tip</b><div>' + R.inline(b.tip) + '</div></div>';
    if ('warn' in b) return h + '<div class="callout warn"><b>⚠️ Common mistake</b><div>' + R.inline(b.warn) + '</div></div>';
    if ('note' in b) return h + '<div class="callout note"><b>🇫🇷 Good to know</b><div>' + R.inline(b.note) + '</div></div>';
    return h;
  };

  /* dialogue lines: [speaker, fr, en] — two voices alternate */
  R.dialogue = function (lines) {
    var speakers = [];
    lines.forEach(function (l) { if (speakers.indexOf(l[0]) < 0) speakers.push(l[0]); });
    var data = lines.map(function (l) { return [speakers.indexOf(l[0]) % 2 ? 'M' : 'F', l[1]]; });
    return '<div class="dlg"><button type="button" class="btn small play-dialogue" data-lines="' + esc(JSON.stringify(data)) + '">▶ Play the dialogue</button>' +
      lines.map(function (l, i) {
        var side = speakers.indexOf(l[0]) % 2 ? 'r' : 'l';
        return '<div class="dl ' + side + '" data-line="' + i + '"><span class="who">' + esc(l[0]) + '</span><div class="bubble fr" data-say="' + esc(l[1]) +
          '" data-voice="' + (side === 'r' ? 'M' : 'F') + '">' + esc(l[1]) + '<div class="en">' + R.inline(l[2]) + '</div></div></div>';
      }).join('') + '</div>';
  };

  R.lessonBody = function (l) { return l.sections.map(R.block).join(''); };

  R.wordRow = function (w) {
    var ex = w[3] ? String(w[3]).split('|') : null;
    return '<li class="word">' + R.spk(w[0]) + '<div class="w-main"><div><span class="fr strong" data-say="' + esc(w[0]) + '">' + esc(w[0]) + '</span>' +
      (w[2] ? ' <span class="say">' + esc(w[2]) + '</span>' : '') + '</div><div class="muted">' + esc(w[1]) + '</div>' +
      (ex ? '<div class="w-ex"><span class="fr" data-say="' + esc(ex[0]) + '">' + esc(ex[0]) + '</span> <span class="muted">— ' + esc(ex[1]) + '</span></div>' : '') + '</div></li>';
  };
  R.wordList = function (words) { return '<ul class="words">' + words.map(R.wordRow).join('') + '</ul>'; };

  /* accent keyboard for an <input>/<textarea> */
  R.accentBar = function (input) {
    var bar = U.h('div.accents', { role: 'group', 'aria-label': 'French letters' });
    'é è ê à ç ù â î ô û ë ï œ'.split(' ').forEach(function (ch) {
      bar.appendChild(U.h('button.acc', {
        type: 'button', text: ch, tabindex: '-1',
        onmousedown: function (e) { e.preventDefault(); },
        onclick: function () {
          var s = input.selectionStart == null ? input.value.length : input.selectionStart, e2 = input.selectionEnd == null ? s : input.selectionEnd;
          input.value = input.value.slice(0, s) + ch + input.value.slice(e2);
          input.focus(); input.setSelectionRange(s + 1, s + 1);
          input.dispatchEvent(new Event('input', { bubbles: true }));
        }
      }));
    });
    return bar;
  };

  /* small helpers for views */
  R.progressBar = function (pct, cls) { return '<div class="bar' + (cls ? ' ' + cls : '') + '" role="progressbar" aria-valuenow="' + pct + '" aria-valuemin="0" aria-valuemax="100"><span style="width:' + U.clamp(pct, 0, 100) + '%"></span></div>'; };
  R.ring = function (pct, size, label) {
    size = size || 120;
    var r = size / 2 - 9, c = 2 * Math.PI * r, off = c * (1 - U.clamp(pct, 0, 100) / 100);
    return '<svg class="ring" width="' + size + '" height="' + size + '" viewBox="0 0 ' + size + ' ' + size + '" role="img" aria-label="' + esc(label || pct + '%') + '">' +
      '<circle cx="' + size / 2 + '" cy="' + size / 2 + '" r="' + r + '" class="ring-bg"/>' +
      '<circle cx="' + size / 2 + '" cy="' + size / 2 + '" r="' + r + '" class="ring-fg" stroke-dasharray="' + c.toFixed(1) + '" stroke-dashoffset="' + off.toFixed(1) + '" transform="rotate(-90 ' + size / 2 + ' ' + size / 2 + ')"/>' +
      '<text x="50%" y="50%" dominant-baseline="central" text-anchor="middle" class="ring-txt">' + Math.round(pct) + '%</text></svg>';
  };
})();
