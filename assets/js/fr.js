/* French language helpers: numbers, time, dates, prices, phone numbers,
   spelling, and a conjugation engine driven by content/verbs.js. */
(function () {
  'use strict';
  var A1 = window.A1, U = A1.U;
  var F = A1.FR = {};

  /* ---------- numbers ---------- */
  var UNITS = ['zéro', 'un', 'deux', 'trois', 'quatre', 'cinq', 'six', 'sept', 'huit', 'neuf', 'dix', 'onze', 'douze', 'treize', 'quatorze', 'quinze', 'seize', 'dix-sept', 'dix-huit', 'dix-neuf'];
  var TENS = ['', 'dix', 'vingt', 'trente', 'quarante', 'cinquante', 'soixante', 'soixante', 'quatre-vingt', 'quatre-vingt'];
  function u100(n) {
    if (n < 20) return UNITS[n];
    var t = Math.floor(n / 10), u = n % 10;
    if (t === 7 || t === 9) return (t === 7 && u === 1) ? 'soixante et onze' : TENS[t] + '-' + UNITS[10 + u];
    if (u === 0) return t === 8 ? 'quatre-vingts' : TENS[t];
    if (u === 1 && t !== 8) return TENS[t] + ' et un';
    return TENS[t] + '-' + UNITS[u];
  }
  function u1000(n) {
    var h = Math.floor(n / 100), r = n % 100, s = '';
    if (h) s = h === 1 ? 'cent' : UNITS[h] + ' cent' + (r === 0 ? 's' : '');
    if (r) s += (s ? ' ' : '') + u100(r);
    return s || 'zéro';
  }
  F.num = function (n) {
    n = Math.floor(n);
    if (n < 0) return 'moins ' + F.num(-n);
    if (n < 1000) return u1000(n);
    if (n < 1000000) {
      var th = Math.floor(n / 1000), r = n % 1000;
      var s = th === 1 ? 'mille' : u1000(th).replace(/(cent|vingt)s$/, '$1') + ' mille';
      return r ? s + ' ' + u1000(r) : s;
    }
    var m = Math.floor(n / 1000000), rest = n % 1000000;
    var s2 = m === 1 ? 'un million' : u1000(m) + ' millions';
    return rest ? s2 + ' ' + F.num(rest) : s2;
  };
  /* feminine form for "une heure", "vingt et une minutes" */
  F.numF = function (n) { return F.num(n).replace(/(^|\s|-)un$/, '$1une'); };

  /* ---------- time ---------- */
  F.timeFormal = function (h, m) {
    var s = h === 0 ? 'zéro heure' : F.numF(h) + (h === 1 ? ' heure' : ' heures');
    return m ? s + ' ' + F.numF(m) : s;
  };
  function hourWord(hh) {
    var x = ((hh % 24) + 24) % 24;
    if (x === 0) return 'minuit';
    if (x === 12) return 'midi';
    var y = x % 12;
    return F.numF(y) + (y === 1 ? ' heure' : ' heures');
  }
  F.timeInformal = function (h, m) {
    if (m === 0) return hourWord(h);
    if (m === 15) return hourWord(h) + ' et quart';
    if (m === 30) return hourWord(h) + (h % 12 === 0 ? ' et demi' : ' et demie');
    if (m === 45) return hourWord(h + 1) + ' moins le quart';
    if (m > 30) return hourWord(h + 1) + ' moins ' + F.numF(60 - m);
    return hourWord(h) + ' ' + F.numF(m);
  };

  /* ---------- dates ---------- */
  F.MONTHS = ['janvier', 'février', 'mars', 'avril', 'mai', 'juin', 'juillet', 'août', 'septembre', 'octobre', 'novembre', 'décembre'];
  F.DAYS = ['dimanche', 'lundi', 'mardi', 'mercredi', 'jeudi', 'vendredi', 'samedi'];
  F.date = function (day, monthIdx) { return 'le ' + (day === 1 ? 'premier' : F.num(day)) + ' ' + F.MONTHS[monthIdx]; };
  F.fullDate = function (d) {
    return 'le ' + F.DAYS[d.getDay()] + ' ' + (d.getDate() === 1 ? 'premier' : F.num(d.getDate())) + ' ' + F.MONTHS[d.getMonth()] + ' ' + F.num(d.getFullYear());
  };
  F.dateShort = function (d) { return F.DAYS[d.getDay()] + ' ' + (d.getDate() === 1 ? '1er' : d.getDate()) + ' ' + F.MONTHS[d.getMonth()]; };

  /* ---------- prices & phone numbers ---------- */
  F.price = function (euros, cents) {
    var s = euros ? F.num(euros) + (euros === 1 ? ' euro' : ' euros') : '';
    if (cents) s += (s ? ' ' : '') + F.num(cents) + (euros ? '' : (cents === 1 ? ' centime' : ' centimes'));
    return s || 'zéro euro';
  };
  F.priceText = function (euros, cents) { return euros + ',' + U.pad(cents) + ' €'; };
  F.phone = function (digits) {
    return (String(digits).match(/\d\d/g) || []).map(function (p) {
      return p[0] === '0' ? 'zéro ' + F.num(+p[1]) : F.num(+p);
    }).join(', ');
  };
  F.phoneText = function (digits) { return (String(digits).match(/\d\d/g) || []).join(' '); };

  /* ---------- spelling ---------- */
  var LETTERS = { a: 'a', b: 'bé', c: 'cé', d: 'dé', e: 'e', f: 'effe', g: 'gé', h: 'hache', i: 'i', j: 'ji', k: 'ka', l: 'elle', m: 'emme', n: 'enne', o: 'o', p: 'pé', q: 'ku', r: 'erre', s: 'esse', t: 'té', u: 'u', v: 'vé', w: 'double vé', x: 'iks', y: 'i grec', z: 'zède' };
  var ACCENTED = { 'é': 'e accent aigu', 'è': 'e accent grave', 'ê': 'e accent circonflexe', 'ë': 'e tréma', 'à': 'a accent grave', 'â': 'a accent circonflexe', 'î': 'i accent circonflexe', 'ï': 'i tréma', 'ô': 'o accent circonflexe', 'û': 'u accent circonflexe', 'ù': 'u accent grave', 'ç': 'cé cédille', 'œ': 'o, e collés', '-': 'tiret', "'": 'apostrophe' };
  F.letterName = function (ch) { var c = ch.toLowerCase(); return ACCENTED[c] || LETTERS[c] || c; };
  F.spell = function (word) {
    var out = [], w = String(word);
    for (var i = 0; i < w.length; i++) {
      var c = w[i];
      if (c === ' ') continue;
      if (i + 1 < w.length && w[i + 1].toLowerCase() === c.toLowerCase() && LETTERS[c.toLowerCase()]) { out.push('deux ' + F.letterName(c)); i++; }
      else out.push(F.letterName(c));
    }
    return out.join(', ');
  };

  /* ---------- conjugation ---------- */
  F.PRON = ['je', 'tu', 'il', 'nous', 'vous', 'ils'];
  F.PRON_LABEL = ['je', 'tu', 'il / elle / on', 'nous', 'vous', 'ils / elles'];
  var REFL = ['me', 'te', 'se', 'nous', 'vous', 'se'];
  var AVOIR = ['ai', 'as', 'a', 'avons', 'avez', 'ont'];
  var ETRE = ['suis', 'es', 'est', 'sommes', 'êtes', 'sont'];
  var ALLER = ['vais', 'vas', 'va', 'allons', 'allez', 'vont'];
  var IMP_END = ['ais', 'ais', 'ait', 'ions', 'iez', 'aient'];
  F.TENSES = { present: 'Présent', pc: 'Passé composé', fp: 'Futur proche', imparfait: 'Imparfait', imperatif: 'Impératif' };
  F.TENSES_EN = { present: 'present', pc: 'past (passé composé)', fp: 'near future', imparfait: 'imperfect (imparfait)', imperatif: 'imperative' };

  function startsVowel(s) { return /^[aeiouyéèêëàâîïôûùœh]/i.test(s); }
  function reflPron(i, next) {
    var p = REFL[i];
    return (p === 'me' || p === 'te' || p === 'se') && startsVowel(next) ? p[0] + "'" : p + ' ';
  }
  F.name = function (vb) { return vb.refl ? (startsVowel(vb.v) ? "s'" : 'se ') + vb.v : vb.v; };
  F.key = function (vb) { return (vb.refl ? 'se-' : '') + vb.v; };
  F.find = function (key) { return (A1.verbs || []).filter(function (vb) { return F.key(vb) === key || F.name(vb) === key; })[0]; };
  F.present = function (vb) {
    if (vb.pres) return vb.pres.split(' ');
    var st = vb.v.slice(0, -2);
    if (vb.g === 'er') return [st + 'e', st + 'es', st + 'e', st + 'ons', st + 'ez', st + 'ent'];
    if (vb.g === 'ir') return [st + 'is', st + 'is', st + 'it', st + 'issons', st + 'issez', st + 'issent'];
    return [st + 's', st + 's', st, st + 'ons', st + 'ez', st + 'ent'];
  };
  F.pp = function (vb) {
    if (vb.pp) return vb.pp;
    var st = vb.v.slice(0, -2);
    return vb.g === 'er' ? st + 'é' : vb.g === 'ir' ? st + 'i' : st + 'u';
  };
  F.usesEtre = function (vb) { return vb.aux === 'être' || !!vb.refl; };
  /* subject + (reflexive pronoun) + form, with elision: j'aime, je m'appelle, tu t'es */
  function subj(i, form, vb) {
    if (vb && vb.refl) return F.PRON[i] + ' ' + reflPron(i, form) + form;
    if (i === 0 && startsVowel(form)) return "j'" + form;
    return F.PRON[i] + ' ' + form;
  }
  function agree(pp, i) {
    var s = /s$/.test(pp) ? '' : 's';
    return [pp + '(e)', pp + '(e)', pp, pp + '(e)' + s, pp + '(e)' + (s ? '(s)' : ''), pp + s][i];
  }
  F.forms = function (vb, tense) {
    var p = F.present(vb), i;
    var out = [];
    if (tense === 'present') { for (i = 0; i < 6; i++) out.push(subj(i, p[i], vb)); return out; }
    if (tense === 'pc') {
      var pp = F.pp(vb), etre = F.usesEtre(vb);
      for (i = 0; i < 6; i++) out.push(subj(i, (etre ? ETRE : AVOIR)[i], vb) + ' ' + (etre ? agree(pp, i) : pp));
      return out;
    }
    if (tense === 'fp') {
      for (i = 0; i < 6; i++) out.push(subj(i, ALLER[i]) + ' ' + (vb.refl ? reflPron(i, vb.v) + vb.v : vb.v));
      return out;
    }
    if (tense === 'imparfait') {
      var stem = vb.stem || p[3].replace(/ons$/, '');
      for (i = 0; i < 6; i++) {
        var st = stem, e = IMP_END[i];
        if (e[0] === 'i') { if (/ge$/.test(st)) st = st.slice(0, -1); if (/ç$/.test(st)) st = st.slice(0, -1) + 'c'; }
        out.push(subj(i, st + e, vb));
      }
      return out;
    }
    if (tense === 'imperatif') {
      if (vb.noImp) return null;
      var f = vb.imp ? vb.imp.split(' ') : [/es$/.test(p[1]) ? p[1].slice(0, -1) : p[1], p[3], p[4]];
      return vb.refl ? [f[0] + '-toi', f[1] + '-nous', f[2] + '-vous'] : f;
    }
    return out;
  };
  /* accepted answers: expand (e)/(s) markers and allow the bare verb without its subject */
  F.variants = function (full, i, tense) {
    var base = [full];
    if (/\(/.test(full)) {
      var a = full.replace(/\(e\)/g, '').replace(/\(s\)/g, '');
      var b = full.replace(/\(e\)/g, 'e').replace(/\(s\)/g, '');
      var c = full.replace(/\(e\)/g, '').replace(/\(s\)/g, 's');
      var d = full.replace(/\(e\)/g, 'e').replace(/\(s\)/g, 's');
      base = [a, b, c, d];
    }
    var out = [];
    base.forEach(function (x) {
      out.push(x);
      if (tense !== 'imperatif') {
        var pron = F.PRON[i];
        if (x.indexOf("j'") === 0) out.push(x.slice(2));
        else if (x.indexOf(pron + ' ') === 0) out.push(x.slice(pron.length + 1));
      }
    });
    return U.uniq(out);
  };
})();
