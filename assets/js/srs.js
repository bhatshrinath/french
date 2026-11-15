/* Spaced repetition (a light SM-2): decks come from topic lessons' vocab and
   standalone decks. Card state lives in S.state.srs['deck|french']. */
(function () {
  'use strict';
  var A1 = window.A1, U = A1.U, S = A1.S;
  var SRS = A1.SRS = {};
  var decks = null;

  SRS.decks = function () {
    if (decks) return decks;
    decks = [];
    A1.lessons.forEach(function (l) {
      if (Array.isArray(l.vocab) && l.vocab.length) decks.push({ id: l.id, title: l.title, icon: l.icon || '🗂️', words: l.vocab, lesson: l.id });
    });
    A1.decks.forEach(function (d) { decks.push({ id: d.id, title: d.title, icon: d.icon || '🗂️', words: d.words }); });
    return decks;
  };
  SRS.deck = function (id) { return SRS.decks().filter(function (d) { return d.id === id; })[0]; };
  SRS.key = function (deckId, fr) { return deckId + '|' + fr; };
  SRS.cards = function (deckId) {
    var list = deckId === '*' ? SRS.decks() : [SRS.deck(deckId)].filter(Boolean);
    var out = [];
    list.forEach(function (d) {
      d.words.forEach(function (w) {
        var ex = w[3] ? String(w[3]).split('|') : null;
        out.push({ key: SRS.key(d.id, w[0]), deck: d.id, fr: w[0], en: w[1], say: w[2] || '', exFr: ex && ex[0], exEn: ex && ex[1] });
      });
    });
    return out;
  };
  SRS.state = function (key) { return S.state.srs[key]; };
  SRS.isDue = function (key, today) { var s = S.state.srs[key]; return !!s && s.due <= (today || U.todayKey()); };
  SRS.stats = function (deckId) {
    var cards = SRS.cards(deckId), today = U.todayKey(), o = { total: cards.length, seen: 0, due: 0, learned: 0, mastered: 0 };
    cards.forEach(function (c) {
      var s = S.state.srs[c.key];
      if (!s) return;
      o.seen++;
      if (s.due <= today) o.due++;
      if (s.reps >= 2 && s.ivl >= 3) o.learned++;
      if (s.ivl >= 10) o.mastered++;
    });
    return o;
  };
  SRS.totals = function () {
    var o = { total: 0, seen: 0, due: 0, learned: 0, mastered: 0 };
    SRS.decks().forEach(function (d) { var s = SRS.stats(d.id); Object.keys(o).forEach(function (k) { o[k] += s[k]; }); });
    return o;
  };
  /* a session: due cards first (oldest due first), then up to `nNew` new cards */
  SRS.session = function (deckId, nNew) {
    var today = U.todayKey(), cards = SRS.cards(deckId);
    var due = cards.filter(function (c) { return SRS.isDue(c.key, today); })
      .sort(function (a, b) { return S.state.srs[a.key].due < S.state.srs[b.key].due ? -1 : 1; });
    var fresh = cards.filter(function (c) { return !S.state.srs[c.key]; });
    if (deckId === '*') fresh = []; /* "review all" never introduces new words */
    return due.slice(0, 80).concat(fresh.slice(0, nNew == null ? (S.get('newPerSession') || 12) : nNew));
  };
  /* g: 0 again, 1 hard, 2 good, 3 easy */
  SRS.grade = function (card, g) {
    var s = S.state.srs[card.key] || { ivl: 0, ease: 2.5, reps: 0, lapses: 0 };
    var isNew = !S.state.srs[card.key];
    if (g === 0) {
      if (s.reps) s.lapses++;
      s.reps = 0; s.ivl = 0; s.ease = Math.max(1.3, s.ease - 0.2);
    } else {
      if (s.reps === 0) s.ivl = g === 3 ? 3 : 1;
      else if (s.reps === 1) s.ivl = g === 1 ? 2 : g === 2 ? 3 : 5;
      else s.ivl = Math.max(s.ivl + 1, Math.round(s.ivl * (g === 1 ? 1.2 : g === 2 ? s.ease : s.ease * 1.3)));
      if (g === 1) s.ease = Math.max(1.3, s.ease - 0.15);
      if (g === 3) s.ease = Math.min(3.2, s.ease + 0.15);
      s.reps++;
      s.ivl = Math.min(s.ivl, 60);
    }
    s.due = U.dateKey(U.addDays(new Date(), s.ivl));
    s.seen = new Date().toISOString();
    S.state.srs[card.key] = s;
    S.log('cards', 1);
    if (isNew) S.log('newWords', 1);
    S.save();
    return s;
  };
  SRS.invalidate = function () { decks = null; };

  /* nouns with le/la for the gender drill */
  SRS.genderNouns = function () {
    var out = [];
    SRS.decks().forEach(function (d) {
      d.words.forEach(function (w) {
        var m = /^(le|la) ([a-zàâçéèêëîïôûùüÿœ-]+(?: [a-zàâçéèêëîïôûùüÿœ'-]+){0,2})$/i.exec(w[0]);
        if (m && !/[\/()]/.test(w[0])) out.push({ art: m[1].toLowerCase(), noun: m[2], en: w[1], fr: w[0] });
      });
    });
    return out;
  };
  /* single words (letters only) for spelling practice */
  SRS.spellWords = function () {
    var out = [];
    SRS.decks().forEach(function (d) {
      d.words.forEach(function (w) {
        var m = /^(?:(?:le|la|les|un|une|l') ?)?([a-zàâçéèêëîïôûùü]{3,9})$/i.exec(w[0]);
        if (m) out.push({ word: m[1], en: w[1] });
      });
    });
    return out;
  };
})();
