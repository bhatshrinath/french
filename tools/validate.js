#!/usr/bin/env node
/* Content validator.
   Usage:
     node tools/validate.js                       -> validate every file in /content
     node tools/validate.js content/lessons/x.js  -> validate only the given file(s)
     node tools/validate.js --expect a,b,c FILE   -> also check these ids exist
   Exits with code 1 when there are errors. Warnings never fail the run. */
'use strict';
const fs = require('fs');
const path = require('path');
const vm = require('vm');

const ROOT = path.resolve(__dirname, '..');
const args = process.argv.slice(2);
let expect = [];
const files = [];
for (let i = 0; i < args.length; i++) {
  if (args[i] === '--expect') { expect = (args[++i] || '').split(',').map(s => s.trim()).filter(Boolean); }
  else files.push(path.resolve(args[i]));
}

function walk(dir) {
  let out = [];
  if (!fs.existsSync(dir)) return out;
  for (const f of fs.readdirSync(dir).sort()) {
    const p = path.join(dir, f);
    if (fs.statSync(p).isDirectory()) out = out.concat(walk(p));
    else if (f.endsWith('.js')) out.push(p);
  }
  return out;
}

const targets = files.length ? files : walk(path.join(ROOT, 'content'));
const ctx = { console };
ctx.window = ctx;
vm.createContext(ctx);
const run = (file) => {
  ctx.__A1_FILE__ = path.relative(ROOT, file).replace(/\\/g, '/');
  vm.runInContext(fs.readFileSync(file, 'utf8'), ctx, { filename: file });
};
run(path.join(ROOT, 'assets/js/registry.js'));

const errors = [];
const warnings = [];
const err = (where, msg) => errors.push(`${where}: ${msg}`);
const warn = (where, msg) => warnings.push(`${where}: ${msg}`);

for (const f of targets) {
  try { run(f); } catch (e) { err(path.relative(ROOT, f), 'JavaScript error -> ' + e.message); }
}
const A1 = ctx.A1;

const isStr = (s) => typeof s === 'string' && s.trim().length > 0;
const ALLOWED_TAGS = new Set(['b', 'i', 'em', 'strong', 'br', 's', 'u', 'small', 'sup', 'sub', 'span', 'code', 'mark']);
function checkHtml(where, s) {
  if (typeof s !== 'string') return;
  const open = (s.match(/\[\[/g) || []).length;
  const close = (s.match(/\]\]/g) || []).length;
  if (open !== close) err(where, `unbalanced [[ ]] markup (${open} open, ${close} close): ${s.slice(0, 80)}`);
  if (/\[\[[^\]]*\[\[/.test(s)) err(where, 'nested [[ ]] markup');
  const tags = s.match(/<\/?([a-zA-Z0-9]+)[^>]*>/g) || [];
  for (const t of tags) {
    const name = t.replace(/[<\/]/g, '').split(/[\s>]/)[0].toLowerCase();
    if (!ALLOWED_TAGS.has(name)) err(where, `HTML tag <${name}> is not allowed`);
  }
  if (/TODO|lorem ipsum|FIXME/i.test(s)) err(where, 'placeholder text found');
  if (/\[\[\s*\]\]/.test(s)) err(where, 'empty [[ ]]');
}

const BLOCK_KEYS = ['p', 'list', 'table', 'examples', 'conj', 'pairs', 'dialogue', 'tip', 'warn', 'note'];
function checkBlock(where, b) {
  if (!b || typeof b !== 'object') return err(where, 'section is not an object');
  const keys = BLOCK_KEYS.filter(k => k in b);
  if (keys.length === 0) return err(where, 'section has no content key (' + BLOCK_KEYS.join('/') + ')');
  if (keys.length > 1) err(where, 'section has more than one content key: ' + keys.join(','));
  if ('h' in b) checkHtml(where + '.h', b.h);
  for (const k of Object.keys(b)) if (k !== 'h' && !BLOCK_KEYS.includes(k)) err(where, `unknown key "${k}"`);
  if ('p' in b) { if (!isStr(b.p)) err(where, 'p must be a string'); checkHtml(where + '.p', b.p); }
  if ('tip' in b) { if (!isStr(b.tip)) err(where, 'tip must be a string'); checkHtml(where + '.tip', b.tip); }
  if ('warn' in b) { if (!isStr(b.warn)) err(where, 'warn must be a string'); checkHtml(where + '.warn', b.warn); }
  if ('note' in b) { if (!isStr(b.note)) err(where, 'note must be a string'); checkHtml(where + '.note', b.note); }
  if ('list' in b) {
    if (!Array.isArray(b.list) || !b.list.length) err(where, 'list must be a non-empty array');
    else b.list.forEach((x, i) => { if (!isStr(x)) err(where, `list[${i}] must be a string`); checkHtml(`${where}.list[${i}]`, x); });
  }
  if ('table' in b) {
    const t = b.table;
    if (!t || !Array.isArray(t.head) || !Array.isArray(t.rows) || !t.rows.length) err(where, 'table needs head[] and rows[][]');
    else t.rows.forEach((r, i) => {
      if (!Array.isArray(r) || r.length !== t.head.length) err(where, `table row ${i} has ${r && r.length} cells, head has ${t.head.length}`);
      else r.forEach((c, j) => checkHtml(`${where}.table[${i}][${j}]`, String(c)));
    });
  }
  if ('examples' in b) {
    if (!Array.isArray(b.examples) || !b.examples.length) err(where, 'examples must be a non-empty array');
    else b.examples.forEach((e, i) => {
      if (!e || !isStr(e.fr) || !isStr(e.en)) err(where, `examples[${i}] needs fr and en`);
      if (e && /\[\[|<[a-z]/i.test(e.fr)) err(where, `examples[${i}].fr must be plain French text (no markup)`);
      if (e && e.en) checkHtml(`${where}.examples[${i}].en`, e.en);
    });
  }
  if ('conj' in b) {
    const c = b.conj;
    if (!c || !isStr(c.verb) || !isStr(c.en) || !Array.isArray(c.rows) || !c.rows.length) err(where, 'conj needs verb, en, rows[]');
    else c.rows.forEach((r, i) => { if (!Array.isArray(r) || !isStr(r[0]) || !isStr(r[1])) err(where, `conj.rows[${i}] must be [fr, en, say?]`); });
  }
  if ('pairs' in b) {
    if (!Array.isArray(b.pairs) || !b.pairs.length) err(where, 'pairs must be a non-empty array');
    else b.pairs.forEach((r, i) => { if (!Array.isArray(r) || r.length < 2 || !isStr(r[0]) || !isStr(r[1])) err(where, `pairs[${i}] must be [fr1, fr2, note?]`); });
  }
  if ('dialogue' in b) {
    if (!Array.isArray(b.dialogue) || b.dialogue.length < 2) err(where, 'dialogue must have at least 2 lines');
    else b.dialogue.forEach((r, i) => { if (!Array.isArray(r) || r.length < 3 || !isStr(r[1]) || !isStr(r[2])) err(where, `dialogue[${i}] must be [speaker, fr, en]`); });
  }
}

function checkQuiz(where, quiz) {
  if (!Array.isArray(quiz) || quiz.length < 6) return err(where, 'quiz must have at least 6 questions');
  const types = new Set();
  quiz.forEach((q, i) => {
    const w = `${where}[${i}]`;
    if (!q || typeof q !== 'object') return err(w, 'not an object');
    types.add(q.type);
    if (q.explain) checkHtml(w + '.explain', q.explain);
    switch (q.type) {
      case 'mcq':
        if (!isStr(q.q)) err(w, 'mcq needs q');
        checkHtml(w + '.q', q.q);
        if (!Array.isArray(q.options) || q.options.length < 2) err(w, 'mcq needs >=2 options');
        else if (new Set(q.options).size !== q.options.length) err(w, 'mcq options must be unique');
        if (!Number.isInteger(q.answer) || !q.options || q.answer < 0 || q.answer >= q.options.length) err(w, 'mcq answer must be a valid option index');
        break;
      case 'fill':
        if (!isStr(q.q) || q.q.indexOf('___') === -1) err(w, 'fill q must contain ___');
        checkHtml(w + '.q', q.q);
        if (!Array.isArray(q.answer) || !q.answer.length || !q.answer.every(isStr)) err(w, 'fill answer must be a non-empty array of strings');
        break;
      case 'listen':
        if (!isStr(q.say)) err(w, 'listen needs say (French text to be spoken)');
        if (!Array.isArray(q.options) || q.options.length < 2) err(w, 'listen needs >=2 options');
        else if (new Set(q.options).size !== q.options.length) err(w, 'listen options must be unique');
        if (!Number.isInteger(q.answer) || !q.options || q.answer < 0 || q.answer >= q.options.length) err(w, 'listen answer must be a valid option index');
        break;
      case 'order':
        if (!Array.isArray(q.words) || q.words.length < 3 || !q.words.every(isStr)) err(w, 'order needs words[] (>=3, in the correct order)');
        if (!isStr(q.en)) err(w, 'order needs en (English meaning)');
        break;
      case 'speak':
        if (!isStr(q.fr) || !isStr(q.en)) err(w, 'speak needs fr and en');
        break;
      default:
        err(w, `unknown quiz type "${q.type}"`);
    }
  });
  if (types.size < 3) warn(where, 'use at least 3 different question types');
}

function checkWords(where, words, min) {
  if (!Array.isArray(words) || words.length < min) return err(where, `needs at least ${min} entries`);
  const seen = new Set();
  words.forEach((w, i) => {
    if (!Array.isArray(w) || !isStr(w[0]) || !isStr(w[1])) return err(where, `[${i}] must be [fr, en, say?, "example FR|example EN"?]`);
    if (seen.has(w[0])) err(where, `duplicate entry "${w[0]}"`);
    seen.add(w[0]);
    if (w[3] && String(w[3]).split('|').length !== 2) err(where, `[${i}] example must be "French sentence|English sentence"`);
    if (/\[\[|<[a-z]/i.test(w[0])) err(where, `[${i}] fr must be plain text`);
  });
}

const CATS = ['pronunciation', 'grammar', 'topic', 'culture'];
const ids = new Map();
function claim(id, where) {
  if (ids.has(id)) err(where, `duplicate id "${id}" (also in ${ids.get(id)})`);
  ids.set(id, where);
}

for (const l of A1.lessons) {
  const where = `lesson ${l.id} (${A1.sources['lesson:' + l.id]})`;
  if (!/^[a-z][a-z0-9-]*$/.test(l.id || '')) err(where, 'id must be lowercase letters, digits, dashes');
  claim(l.id, where);
  if (!CATS.includes(l.cat)) err(where, `cat must be one of ${CATS.join(', ')}`);
  if (!isStr(l.title)) err(where, 'needs title');
  if (!isStr(l.summary)) err(where, 'needs summary');
  if (typeof l.minutes !== 'number' || l.minutes < 3 || l.minutes > 60) err(where, 'minutes must be a number 3..60');
  if (!Array.isArray(l.sections) || l.sections.length < 3) err(where, 'needs at least 3 sections');
  else l.sections.forEach((b, i) => checkBlock(`${where} sections[${i}]`, b));
  checkQuiz(`${where} quiz`, l.quiz);
  if (l.vocab !== undefined) checkWords(`${where} vocab`, l.vocab, 12);
  for (const k of Object.keys(l)) if (!['id', 'cat', 'title', 'summary', 'minutes', 'sections', 'quiz', 'vocab', 'icon', 'refs', 'nlf'].includes(k)) err(where, `unknown key "${k}"`);
}

for (const d of A1.decks) {
  const where = `deck ${d.id} (${A1.sources['deck:' + d.id]})`;
  if (!/^d-[a-z0-9-]+$/.test(d.id || '')) err(where, 'standalone deck ids must start with "d-"');
  claim(d.id, where);
  if (!isStr(d.title)) err(where, 'needs title');
  checkWords(`${where} words`, d.words, 15);
}

for (const s of A1.scenarios) {
  const where = `scenario ${s.id} (${A1.sources['scenario:' + s.id]})`;
  if (!/^s-[a-z0-9-]+$/.test(s.id || '')) err(where, 'scenario ids must start with "s-"');
  claim(s.id, where);
  ['title', 'goal'].forEach(k => { if (!isStr(s[k])) err(where, `needs ${k}`); });
  if (!s.roles || !isStr(s.roles.A) || !isStr(s.roles.B)) err(where, 'needs roles {A, B}');
  if (!Array.isArray(s.dialogue) || s.dialogue.length < 6) err(where, 'dialogue needs at least 6 lines');
  else s.dialogue.forEach((r, i) => {
    if (!Array.isArray(r) || r.length < 3 || !['A', 'B'].includes(r[0]) || !isStr(r[1]) || !isStr(r[2])) err(where, `dialogue[${i}] must be ["A"|"B", fr, en]`);
    if (r && /\[\[|<[a-z]/i.test(r[1])) err(where, `dialogue[${i}] fr must be plain text`);
  });
  if (!Array.isArray(s.keyPhrases) || s.keyPhrases.length < 4) err(where, 'needs >=4 keyPhrases [fr, en]');
  else s.keyPhrases.forEach((r, i) => { if (!Array.isArray(r) || !isStr(r[0]) || !isStr(r[1])) err(where, `keyPhrases[${i}] must be [fr, en]`); });
  if (!Array.isArray(s.practice) || s.practice.length < 4) err(where, 'needs >=4 practice items {prompt, answer, alt?}');
  else s.practice.forEach((p, i) => { if (!p || !isStr(p.prompt) || !isStr(p.answer)) err(where, `practice[${i}] needs prompt and answer`); });
}

const SKILLS = ['listening', 'reading', 'writing', 'speaking'];
for (const x of A1.exams) {
  const where = `exam ${x.id} (${A1.sources['exam:' + x.id]})`;
  claim(x.id, where);
  if (!isStr(x.title)) err(where, 'needs title');
  if (!Array.isArray(x.sections) || x.sections.length !== 4) err(where, 'needs 4 sections (listening, reading, writing, speaking)');
  else x.sections.forEach((s, i) => {
    const w = `${where} sections[${i}]`;
    if (!SKILLS.includes(s.skill)) err(w, 'skill must be listening/reading/writing/speaking');
    if (!Array.isArray(s.parts) || !s.parts.length) return err(w, 'needs parts[]');
    s.parts.forEach((p, j) => {
      const pw = `${w}.parts[${j}]`;
      if (!isStr(p.title)) err(pw, 'needs title');
      if (s.skill === 'listening') {
        if (!Array.isArray(p.audio) || !p.audio.length) err(pw, 'audio must be an array of [voice, text] lines');
        else p.audio.forEach((a, k) => { if (!Array.isArray(a) || !['F', 'M', 'N'].includes(a[0]) || !isStr(a[1])) err(pw, `audio[${k}] must be ["F"|"M"|"N", text]`); });
      }
      if (s.skill === 'reading' && !isStr(p.text)) err(pw, 'reading part needs text');
      if (s.skill === 'reading') checkHtml(pw + '.text', p.text);
      if (s.skill === 'listening' || s.skill === 'reading') {
        if (!Array.isArray(p.questions) || !p.questions.length) err(pw, 'needs questions[]');
        else p.questions.forEach((q, k) => {
          if (!isStr(q.q) || !Array.isArray(q.options) || q.options.length < 2 || !Number.isInteger(q.answer) || q.answer < 0 || q.answer >= q.options.length) err(pw, `questions[${k}] needs q, options[], valid answer index`);
        });
      }
      if (s.skill === 'writing') {
        if (!['form', 'text'].includes(p.type)) err(pw, 'writing part type must be form or text');
        if (p.type === 'form' && (!Array.isArray(p.fields) || p.fields.length < 5)) err(pw, 'form needs >=5 fields');
        if (p.type === 'text' && (!isStr(p.prompt) || !isStr(p.model) || !Array.isArray(p.checklist))) err(pw, 'text part needs prompt, model, checklist[]');
      }
      if (s.skill === 'speaking') {
        if (!Array.isArray(p.prompts) || !p.prompts.length) err(pw, 'needs prompts[]');
      }
    });
  });
}

for (const id of expect) if (!ids.has(id)) err('expected ids', `missing "${id}"`);

/* ---------- Plan cross-references (only when the plan is loaded) ---------- */
// Keep in sync with the drill registry in assets/js/drills.js
const DRILLS = ['spell', 'num20', 'num100', 'bignum', 'phone', 'prices', 'time', 'dates', 'dictation', 'gender', 'pairs', 'conj-er', 'conj-pc', 'conj', 'review'];
if (A1.plan && Array.isArray(A1.plan.days)) {
  const P = A1.plan;
  const lessonIds = new Set(A1.lessons.map(l => l.id));
  const deckIds = new Set([...A1.decks.map(d => d.id), ...A1.lessons.filter(l => Array.isArray(l.vocab)).map(l => l.id)]);
  const scenIds = new Set(A1.scenarios.map(s => s.id));
  const writeIds = new Set((A1.writing || []).map(w => w.id));
  const examIds = new Set(A1.exams.map(x => x.id));
  const nlfN = new Set(((A1.nlf && A1.nlf.videos) || []).map(v => v[0]));
  const extraIds = new Set();
  if (A1.nlf && A1.nlf.extra) Object.values(A1.nlf.extra).forEach(pl => pl.videos.forEach(v => extraIds.add(v[0])));
  const scheduled = new Set();
  const seenNlf = new Map();
  const partial = files.length > 0; // when validating single files, content from other files is missing
  const miss = (w, m) => (partial ? warn : err)(w, m);
  if (P.days.length !== 47) err('plan', `expected 47 days, found ${P.days.length}`);
  P.days.forEach((d, i) => {
    const w = `plan day ${d.d}`;
    if (d.d !== i + 1) err(w, 'days must be numbered 1..47 in order');
    if (!isStr(d.title) || !isStr(d.focus) || !isStr(d.tip)) err(w, 'needs title, focus and tip');
    (d.learn || []).forEach(id => { scheduled.add(id); if (!lessonIds.has(id)) miss(w, `lesson "${id}" not found`); });
    (d.cards || []).forEach(id => { if (id !== '*' && !deckIds.has(id)) miss(w, `deck "${id}" not found`); });
    (d.speak || []).forEach(id => { if (!scenIds.has(id)) miss(w, `scenario "${id}" not found`); });
    (d.write || []).forEach(id => { if (!writeIds.has(id)) err(w, `writing task "${id}" not found`); });
    (d.exam || []).forEach(id => { if (!examIds.has(id)) miss(w, `exam "${id}" not found`); });
    (d.drill || []).forEach(id => { if (!DRILLS.includes(id)) err(w, `drill "${id}" unknown`); });
    if (d.review) (d.review.lessons || []).forEach(id => { if (!lessonIds.has(id)) miss(w, `review lesson "${id}" not found`); });
    [...(d.nlf || []), ...(d.nlfBonus || [])].forEach(n => {
      if (!nlfN.has(n)) err(w, `NLF video #${n} not found`);
      if (seenNlf.has(n)) err(w, `NLF video #${n} already scheduled on day ${seenNlf.get(n)}`);
      seenNlf.set(n, d.d);
    });
    (d.yt || []).forEach(y => { const id = Array.isArray(y) ? y[0] : y; if (!Array.isArray(y) && !extraIds.has(id)) err(w, `extra video "${id}" not in A1.nlf.extra`); });
    (d.cosmo || []).forEach(c => {
      if (c === 'delf') return;
      const m = /^(\d)\.(\d|c)$/.exec(c);
      if (!m) return err(w, `cosmo ref "${c}" must look like "1.4", "6.c" or "delf"`);
      const dos = (A1.books || []).find(b => b.id === 'cosmo').dossiers[+m[1]];
      if (!dos || (m[2] !== 'c' && !dos.lessons[+m[2] - 1])) err(w, `cosmo ref "${c}" does not exist`);
    });
  });
  if (nlfN.size) {
    // promo/meta videos (playlist announcements, community ads) may stay unscheduled
    const core = ((A1.nlf && A1.nlf.videos) || []).filter(v => !seenNlf.has(v[0]) && v[4] !== 'meta');
    if (core.length) err('plan', 'NLF videos never scheduled: ' + core.map(v => '#' + v[0]).join(', '));
  }
  for (const id of lessonIds) if (!scheduled.has(id)) warn('plan', `lesson "${id}" is never scheduled in a day's learn list`);
  const bookIds = new Set((A1.books || []).map(b => b.id));
  for (const [lid, refs] of Object.entries(A1.bookRefs || {})) refs.forEach(x => { if (!bookIds.has(x[0])) err('bookRefs', `${lid}: unknown book "${x[0]}"`); });
  console.log(`Plan: ${P.days.length} days, ${seenNlf.size} NLF videos scheduled, ${scheduled.size} lessons scheduled`);
}

const vocabDecks = A1.lessons.filter(l => Array.isArray(l.vocab));
const wordCount = vocabDecks.reduce((n, l) => n + l.vocab.length, 0) + A1.decks.reduce((n, d) => n + (d.words || []).length, 0);
const quizCount = A1.lessons.reduce((n, l) => n + (l.quiz || []).length, 0);
console.log(`Loaded: ${A1.lessons.length} lessons (${quizCount} quiz questions), ${A1.decks.length + vocabDecks.length} decks (${wordCount} words), ${A1.scenarios.length} scenarios, ${A1.exams.length} exams`);
if (warnings.length) { console.log(`\n${warnings.length} warning(s):`); warnings.forEach(w => console.log('  ! ' + w)); }
if (errors.length) { console.log(`\n${errors.length} error(s):`); errors.forEach(e => console.log('  x ' + e)); process.exit(1); }
console.log('OK');
