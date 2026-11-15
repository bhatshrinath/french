/* Auto-generated drills. Each build() returns quiz questions for A1.Quiz.
   Keep ids in sync with DRILLS in tools/validate.js. */
(function () {
  'use strict';
  var A1 = window.A1, U = A1.U, F = A1.FR, esc = U.esc;
  var D = A1.Drills = {};

  D.list = [
    { id: 'num20', title: 'Numbers 0–20', sub: 'Hear a number, type it in digits', icon: '🔢', skill: 'Listening' },
    { id: 'num100', title: 'Numbers 0–100', sub: 'The tricky 70s, 80s and 90s', icon: '🔢', skill: 'Listening' },
    { id: 'bignum', title: 'Big numbers & years', sub: '100 to 1,000,000 and years like 2026', icon: '🔢', skill: 'Listening' },
    { id: 'phone', title: 'Phone numbers', sub: 'French numbers are read in pairs: 06 12 34…', icon: '📞', skill: 'Listening' },
    { id: 'prices', title: 'Prices in euros', sub: 'Trois euros cinquante = 3,50 €', icon: '💶', skill: 'Listening' },
    { id: 'time', title: 'Telling the time', sub: 'Official (14 h 30) and everyday (deux heures et demie)', icon: '🕒', skill: 'Listening' },
    { id: 'dates', title: 'Dates', sub: 'Le premier décembre, le quinze novembre…', icon: '📅', skill: 'Listening' },
    { id: 'spell', title: 'Spelling (the alphabet)', sub: 'Hear a word spelled letter by letter, write it', icon: '🔤', skill: 'Listening' },
    { id: 'dictation', title: 'Dictation', sub: 'Hear a sentence, write it down', icon: '📝', skill: 'Writing' },
    { id: 'pairs', title: 'Sound pairs', sub: 'tu or tout? vin or vent? Train your ear', icon: '👂', skill: 'Pronunciation' },
    { id: 'gender', title: 'Le or la?', sub: 'Guess the gender of common nouns', icon: '⚖️', skill: 'Grammar' },
    { id: 'conj-er', title: 'Conjugation: -er verbs', sub: 'Present tense of regular verbs', icon: '🧩', skill: 'Grammar' },
    { id: 'conj-pc', title: 'Conjugation: passé composé', sub: 'avoir or être + past participle', icon: '🧩', skill: 'Grammar' },
    { id: 'conj', title: 'Conjugation: mixed tenses', sub: 'Present, passé composé, near future, imparfait', icon: '🧩', skill: 'Grammar' }
  ];
  D.get = function (id) { return D.list.filter(function (d) { return d.id === id; })[0]; };

  function numQ(n, label) {
    return {
      type: 'type', prompt: label || 'Type the number you hear (in digits).', say: F.num(n), inputmode: 'numeric', placeholder: 'e.g. 42', noSpeak: true,
      answer: [String(n)],
      check: function (v) { return { ok: v.replace(/[^\d]/g, '') === String(n), correct: String(n) }; },
      reveal: '<span class="fr strong" data-say="' + esc(F.num(n)) + '">' + esc(F.num(n)) + '</span> = <b>' + n.toLocaleString('fr-FR') + '</b>'
    };
  }
  function times(n, fn) { var out = []; for (var i = 0; i < n; i++) out.push(fn(i)); return out; }

  var FALLBACK_WORDS = ['bonjour', 'merci', 'maison', 'famille', 'fromage', 'voiture', 'travail', 'soleil', 'livre', 'pomme', 'table', 'café', 'école', 'été', 'hôtel', 'gare', 'ville', 'chaise', 'lundi', 'semaine'];
  var FALLBACK_PAIRS = [['tu', 'tout'], ['rue', 'roue'], ['vu', 'vous'], ['dessus', 'dessous'], ['le', 'les'], ['deux', 'des'], ['vin', 'vent'], ['bon', 'banc'], ['pain', 'pont'], ['poisson', 'poison'], ['dessert', 'désert'], ['cent', 'son'], ['lent', 'long'], ['brin', 'brun'], ['fée', 'fait'], ['ceux', 'ce']];
  var FALLBACK_SENT = ['Je m\'appelle Paul.', 'J\'habite à Paris.', 'Il fait beau aujourd\'hui.', 'Nous sommes en novembre.', 'Je voudrais un café, s\'il vous plaît.', 'Elle a deux frères.', 'Le train part à huit heures.', 'Je ne parle pas allemand.', 'Où est la gare ?', 'Tu as quel âge ?'];
  var FALLBACK_NOUNS = [['le', 'livre', 'book'], ['la', 'table', 'table'], ['le', 'pain', 'bread'], ['la', 'maison', 'house'], ['le', 'train', 'train'], ['la', 'voiture', 'car'], ['le', 'fromage', 'cheese'], ['la', 'gare', 'station'], ['le', 'jardin', 'garden'], ['la', 'semaine', 'week']];

  function exampleSentences() {
    var out = [];
    A1.lessons.forEach(function (l) {
      (l.sections || []).forEach(function (b) {
        (b.examples || []).forEach(function (e) { if (e.fr.length >= 10 && e.fr.length <= 70 && !/[\/()…]/.test(e.fr)) out.push({ fr: e.fr, en: e.en }); });
      });
    });
    return out.length >= 10 ? out : FALLBACK_SENT.map(function (s) { return { fr: s, en: '' }; });
  }
  function pronunciationPairs() {
    var out = [];
    A1.lessons.forEach(function (l) {
      (l.sections || []).forEach(function (b) { (b.pairs || []).forEach(function (p) { if (p[0] !== p[1]) out.push([p[0], p[1]]); }); });
    });
    return out.length >= 8 ? out : FALLBACK_PAIRS;
  }
  function verbsWhere(fn) { return (A1.verbs || []).filter(fn); }

  function conjQ(vb, tense) {
    var forms = F.forms(vb, tense);
    if (!forms) return null;
    var imp = tense === 'imperatif', i = U.rand(0, imp ? 2 : 5), base = forms[i], full = base, who;
    var etrePc = tense === 'pc' && F.usesEtre(vb);
    if (imp) who = ['tu', 'nous', 'vous'][i];
    else if (i === 2) {
      who = U.pick(etrePc ? ['il', 'elle'] : ['il', 'elle', 'on']);
      if (who !== 'il') { full = base.replace(/^il /, who + ' '); if (who === 'elle' && etrePc) full += 'e'; }
    } else if (i === 5) {
      who = U.pick(['ils', 'elles']);
      if (who === 'elles') { full = base.replace(/^ils /, 'elles '); if (etrePc) full = full.replace(/s$/, '') + 'es'; }
    } else who = F.PRON[i];
    var accepted = imp ? [full] : F.variants(full, i, tense);
    if (!imp && (i === 2 || i === 5)) accepted = U.uniq(accepted.concat([full.replace(/^(il|elle|on|ils|elles) /, '')]));
    return {
      type: 'type', noSpeak: true,
      prompt: '<div class="conj-prompt"><span class="pill">' + esc(F.TENSES[tense]) + '</span> <b>' + esc(who) + '</b> + <b class="fr" data-say="' + esc(F.name(vb)) + '">' + esc(F.name(vb)) + '</b> <span class="muted">(' + esc(vb.en) + ')</span></div>',
      answer: accepted,
      check: function (v) { var r = U.checkTyped(v, accepted); r.correct = full; return r; },
      reveal: '<span class="fr strong" data-say="' + esc(A1.Speech.clean(full)) + '">' + esc(full) + '</span>'
    };
  }

  D.build = function (id, n) {
    n = n || 10;
    switch (id) {
      case 'num20': return times(n, function () { return numQ(U.rand(0, 20)); });
      case 'num100': return times(n, function () { return numQ(Math.random() < 0.6 ? U.rand(60, 99) : U.rand(0, 100)); });
      case 'bignum': return times(n, function () {
        var r = Math.random();
        var x = r < 0.3 ? U.rand(1950, 2030) : r < 0.6 ? U.rand(100, 999) : r < 0.85 ? U.rand(1000, 9999) : U.rand(10, 999) * 1000;
        return numQ(x, x >= 1950 && x <= 2030 ? 'A year or a number — type it in digits.' : null);
      });
      case 'phone': return times(n, function () {
        var d = '0' + U.pick(['6', '7', '1', '4', '5']); for (var i = 0; i < 8; i++) d += U.rand(0, 9);
        return { type: 'type', prompt: 'Write down the phone number.', say: F.phone(d), inputmode: 'numeric', placeholder: '06 12 34 56 78', noSpeak: true, answer: [d],
          check: function (v) { return { ok: v.replace(/\D/g, '') === d, correct: F.phoneText(d) }; },
          reveal: '<b>' + F.phoneText(d) + '</b> — <span class="fr" data-say="' + esc(F.phone(d)) + '">' + esc(F.phone(d)) + '</span>' };
      });
      case 'prices': return times(n, function () {
        var e = U.rand(0, 60), c = U.pick([0, 0, 10, 20, 25, 30, 40, 50, 50, 60, 70, 75, 80, 90, 95, 99]);
        if (!e && !c) e = 2;
        var cents = e * 100 + c;
        return { type: 'type', prompt: 'How much? Type the price (e.g. 3,50).', say: 'Ça fait ' + F.price(e, c) + '.', inputmode: 'decimal', placeholder: '3,50', noSpeak: true, answer: [F.priceText(e, c)],
          check: function (v) { var x = parseFloat(v.replace(/[€\s]/g, '').replace(',', '.')); return { ok: Math.round(x * 100) === cents, correct: F.priceText(e, c) }; },
          reveal: '<b>' + F.priceText(e, c) + '</b> — <span class="fr" data-say="' + esc(F.price(e, c)) + '">' + esc(F.price(e, c)) + '</span>' };
      });
      case 'time': return times(n, function () {
        var hh = U.rand(0, 23), mm = U.pick([0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55]), formal = Math.random() < 0.5;
        var said = formal ? F.timeFormal(hh, mm) : F.timeInformal(hh, mm);
        return { type: 'type', prompt: 'What time is it? Type it like 14:30' + (formal ? ' (official 24-hour time).' : ' (everyday time — 2:30 or 14:30 both count).'),
          say: 'Il est ' + said + '.', placeholder: '14:30', inputmode: 'numeric', noSpeak: true, answer: [hh + ':' + U.pad(mm)],
          check: function (v) {
            var m = /(\d{1,2})\s*[:h.\s]?\s*(\d{2})?/i.exec(v.trim());
            if (!m) return { ok: false, correct: hh + ':' + U.pad(mm) };
            var H = +m[1], M = m[2] ? +m[2] : 0;
            var ok = M === mm && (formal ? H % 24 === hh : H % 12 === hh % 12);
            return { ok: ok, correct: hh + ':' + U.pad(mm) };
          },
          reveal: '<b>' + hh + ':' + U.pad(mm) + '</b> — <span class="fr" data-say="Il est ' + esc(said) + '.">Il est ' + esc(said) + '.</span>' };
      });
      case 'dates': return times(n, function () {
        var mo = U.rand(0, 11), dim = new Date(2026, mo + 1, 0).getDate(), d = U.pick([1, 1, U.rand(2, dim), U.rand(2, dim), U.rand(10, dim)]);
        var said = F.date(d, mo);
        return { type: 'type', prompt: 'Type the date as day/month (e.g. 15/11).', say: 'Nous sommes ' + said + '.', placeholder: '15/11', noSpeak: true, answer: [d + '/' + (mo + 1)],
          check: function (v) {
            var t = U.norm(v, true), m = /(\d{1,2})\D+(\d{1,2})/.exec(t), dd, mm;
            if (m) { dd = +m[1]; mm = +m[2] - 1; }
            else { var w = /(\d{1,2}|premier|1er)\s+([a-z]+)/.exec(t); if (w) { dd = /\d/.test(w[1]) ? parseInt(w[1], 10) : 1; mm = F.MONTHS.map(function (x) { return U.stripAccents(x); }).indexOf(w[2]); } }
            return { ok: dd === d && mm === mo, correct: d + '/' + (mo + 1) + ' (' + said + ')' };
          },
          reveal: '<b>' + d + '/' + (mo + 1) + '</b> — <span class="fr" data-say="' + esc(said) + '">' + esc(said) + '</span>' };
      });
      case 'spell': {
        var words = A1.SRS.spellWords();
        if (words.length < 10) words = FALLBACK_WORDS.map(function (w) { return { word: w, en: '' }; });
        return U.shuffle(words).slice(0, n).map(function (w) {
          return { type: 'type', prompt: 'Listen to the spelling and write the word.', say: F.spell(w.word), noSpeak: true, answer: [w.word],
            check: function (v) { var r = U.checkTyped(v, [w.word]); r.correct = w.word; return r; },
            reveal: '<span class="fr strong" data-say="' + esc(w.word) + '">' + esc(w.word) + '</span>' + (w.en ? ' <span class="muted">= ' + esc(w.en) + '</span>' : '') };
        });
      }
      case 'dictation': return U.shuffle(exampleSentences()).slice(0, Math.min(n, 8)).map(function (s) {
        return { type: 'type', prompt: 'Write the sentence you hear. Replay as often as you need.', say: s.fr, noSpeak: true, answer: [s.fr],
          check: function (v) {
            var exact = U.norm(v) === U.norm(s.fr), loose = U.norm(v, true) === U.norm(s.fr, true), sim = U.similarity(s.fr, v);
            return { ok: exact || loose || sim >= 0.93, accentOnly: !exact && loose, correct: s.fr };
          },
          reveal: '<span class="fr strong" data-say="' + esc(s.fr) + '">' + esc(s.fr) + '</span>' + (s.en ? '<div class="muted">' + A1.R.inline(s.en) + '</div>' : '') };
      });
      case 'pairs': return U.shuffle(pronunciationPairs()).slice(0, n).map(function (p) {
        var k = U.rand(0, 1);
        return { type: 'choice', prompt: 'Which one do you hear?', say: p[k], options: [p[0], p[1]], answer: k, noSpeak: true,
          explain: 'Listen to both: <span class="fr" data-say="' + esc(p[0]) + '">' + esc(p[0]) + '</span> · <span class="fr" data-say="' + esc(p[1]) + '">' + esc(p[1]) + '</span>' };
      });
      case 'gender': {
        var nouns = A1.SRS.genderNouns();
        if (nouns.length < 10) nouns = FALLBACK_NOUNS.map(function (x) { return { art: x[0], noun: x[1], en: x[2], fr: x[0] + ' ' + x[1] }; });
        return U.shuffle(nouns).slice(0, n).map(function (x) {
          return { type: 'choice', prompt: '<span class="big-word">… ' + esc(x.noun) + '</span><div class="muted">' + esc(x.en) + '</div>', options: ['le', 'la'], answer: x.art === 'le' ? 0 : 1, noSpeak: true,
            explain: '<span class="fr strong" data-say="' + esc(x.fr) + '">' + esc(x.fr) + '</span> — learn nouns with their article!' };
        });
      }
      case 'conj-er': return times(n, function () { return conjQ(U.pick(verbsWhere(function (v) { return (v.g === 'er' || v.er) && !v.refl; })), 'present'); });
      case 'conj-pc': return times(n, function () { return conjQ(U.pick(verbsWhere(function (v) { return v.core || v.aux === 'être'; })), 'pc'); });
      case 'conj': return times(n, function () {
        var t = U.pick(['present', 'present', 'pc', 'fp', 'imparfait']);
        return conjQ(U.pick(verbsWhere(function (v) { return v.core; })), t);
      });
    }
    return [];
  };
  /* custom conjugation set from the verb trainer */
  D.buildConj = function (keys, tenses, n) {
    var vs = keys.map(F.find).filter(Boolean);
    if (!vs.length) return [];
    return times(n || 10, function () {
      var vb = U.pick(vs), t = U.pick(tenses);
      return conjQ(vb, t) || conjQ(vb, 'present');
    });
  };
})();
