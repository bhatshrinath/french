# Content spec — French A1 app

All learning content lives in `/content/**/*.js`. Each file is a plain browser script
(no modules, no imports) that calls one registry function:

```js
A1.addLessons([ /* lesson objects */ ]);
A1.addDecks([ /* standalone vocabulary decks */ ]);
A1.addScenarios([ /* speaking scenarios */ ]);
A1.addExams([ /* DELF A1 mock exams */ ]);
```

Check your file with: `node tools/validate.js content/path/to/file.js`
(the full run with no argument validates everything). Fix every error.

## Who the learner is
- An adult total beginner, comfortable in English (Indian English context; examples
  with Inde / indien(ne) / Mumbai / Bangalore / Delhi / chai / cricket are welcome).
- Goal: CEFR A1 (DELF A1 level) in ~6 weeks, alongside the NLF Academy YouTube course.
- Explanations in **simple, friendly English**. Short sentences. No linguistics jargon
  without a plain explanation ("a *liaison* = you link a silent final letter to the next word").
- The app speaks every French string aloud (browser text-to-speech), so French text
  must be **clean, correct, natural** French as spoken in France today.

## Absolute quality rules
1. **French must be 100% correct**: accents (é è ê à ù ç î ï ô œ), genders, agreements,
   elision (l', j', n', d', qu', s'il), capitalisation (no capitals for nationalities
   used as adjectives, languages, days, months: *je suis indien, le lundi, en mai*).
2. French punctuation style: a space before `? ! : ;` → `"Comment ça va ?"`.
3. If a sentence depends on the speaker's gender, show both: `"Je suis indien / indienne."`
   (or two examples). Don't assume the learner is male or female.
4. Original writing only. Do not copy text from any textbook.
5. Use straight apostrophes `'` everywhere. Write every JS string with **double quotes**
   so apostrophes need no escaping: `"Je m'appelle Paul."`
6. A1 level only. If you mention something beyond A1, label it "(you'll see this later)".

## Pronunciation respelling (the `say` fields)
A rough guide for English speakers. CAPITALS = the stressed (last) syllable of the group.

| Sound | Write | Examples |
|---|---|---|
| French u (tu, rue) | `ü` | tu → `TÜ`, rue → `RÜ`, une → `ÜN` |
| ou (vous, tout) | `oo` | vous → `VOO`, bonjour → `bohn-ZHOOR` |
| é, er, ez, et (closed e) | `ay` | café → `kah-FAY`, parler → `par-LAY` |
| è, ê, ai, e+2 consonants (open e) | `eh` | mère → `MEHR`, merci → `mehr-SEE`, lait → `LEH` |
| e in le, je, ce; eu, œu | `uh` | le → `luh`, deux → `DUH`, sœur → `SUHR`, heure → `UHR` |
| i, y | `ee` | merci → `mehr-SEE`, il → `EEL` |
| o, au, eau | `oh` | eau → `OH`, beau → `BOH` |
| a | `ah` | papa → `pah-PAH` |
| oi | `wah` | moi → `MWAH`, trois → `TRWAH` |
| nasal an/en/am/em | `ahn` | blanc → `BLAHN`, enfant → `ahn-FAHN` |
| nasal on/om | `ohn` | bon → `BOHN`, maison → `meh-ZOHN` |
| nasal in/ain/ein/un | `ehn` | vin → `VEHN`, pain → `PEHN`, un → `EHN` |
| j, soft g (ge, gi) | `zh` | je → `zhuh`, rouge → `ROOZH` |
| ch | `sh` | chat → `SHAH` |
| gn | `ny` | montagne → `mohn-TAH-nyuh` |
| ill (after vowel), -ille | `y` | fille → `FEE-y`, travail → `trah-VAH-y` |
| French r | `r` | rouge → `ROOZH` (the lesson explains the throat r) |

In nasal respellings the `n` is **not** pronounced — it only marks the nasal vowel.
Keep respellings short and consistent. They are hints; the audio is the reference.

## Inline French markup inside HTML strings
Inside any explanation string (`p`, `tip`, `warn`, `note`, `list` items, table cells,
quiz `q`/`explain`) mark French words/phrases with double brackets so the app renders them
as tappable, spoken French:

- `[[bonjour]]` → tappable "bonjour"
- `[[bonjour|bohn-ZHOOR]]` → tappable "bonjour" with the respelling shown under it

Only these HTML tags are allowed: `b i em strong br s u small sup sub span code mark`.
Fields called `fr` / `say` (examples, dialogue lines, conj rows, vocab, quiz `say`)
are **plain text** — no `[[ ]]`, no HTML.

## Lesson object

```js
{
  id: "g-etre",                 // given to you — use exactly
  cat: "grammar",               // "pronunciation" | "grammar" | "topic" | "culture"
  title: "Être (to be) — and c'est vs il est",
  minutes: 15,                  // realistic study time incl. quiz (5–25)
  summary: "One or two sentences: what you'll be able to do after this lesson.",
  sections: [ /* 5–10 blocks, see below */ ],
  quiz: [ /* 8–12 questions, see below */ ],
  vocab: [ /* ONLY for cat:"topic" lessons — becomes a flashcard deck */ ]
}
```

### Section blocks (each block = one content key + optional `h` heading)

| Key | Shape | Rendered as |
|---|---|---|
| `p` | `"html string"` | paragraph |
| `list` | `["html", "html"]` | bullet list |
| `table` | `{ head: ["A","B"], rows: [["a1","b1"],["a2","b2"]] }` | table (cells are html; use `[[ ]]` for French) |
| `examples` | `[{ fr: "Je suis prêt.", en: "I'm ready.", say: "zhuh swee PREH" }]` (`say` optional) | example list, each with a speaker button |
| `conj` | `{ verb: "être", en: "to be", rows: [["je suis","I am","zhuh SWEE"], ...] }` | conjugation table with audio |
| `pairs` | `[["tu","tout","you / all"], ["rue","roue","street / wheel"]]` | minimal pairs: tap each side to hear the contrast |
| `dialogue` | `[["Léa","Salut !","Hi!"], ["Tom","Salut, ça va ?","Hi, how are you?"]]` | mini dialogue with audio |
| `tip` | `"html"` | green "Tip" box |
| `warn` | `"html"` | amber "Common mistake" box |
| `note` | `"html"` | blue "Good to know / culture" box |

Good lessons usually follow: why it matters → the form (table/conj) → examples →
tip/warn (the classic beginner mistakes) → a short "use it" block (dialogue or examples).

### Quiz questions (8–12 per lesson, at least 3 different types)

```js
{ type: "mcq", q: "Nous ___ en retard.", options: ["sommes","sont","êtes"], answer: 0, explain: "nous → sommes" }
{ type: "fill", q: "Je ___ étudiant.", answer: ["suis"], explain: "je → suis" }
{ type: "listen", say: "Ils sont indiens.", options: ["They are Indian.","He is Indian.","We are Indian."], answer: 0 }
{ type: "order", words: ["Je","ne","suis","pas","fatigué"], en: "I'm not tired." }
{ type: "speak", fr: "Je suis indien et je suis ingénieur.", en: "I'm Indian and I'm an engineer." }
```

- `answer` for `mcq`/`listen` = index of the correct option (0-based). Vary the position of
  the right answer (don't always put it first — the app does NOT shuffle).
- `fill`: the blank is `___`; `answer` lists every acceptable answer (`["suis"]`,
  `["l'", "l’"]`). Keep blanks to one word or a very short chunk. Put a hint in brackets
  in `q` when needed: `"Tu ___ (parler) anglais ?"`.
- `order`: `words` in the **correct** order; the app shuffles them. Choose sentences with
  only one natural word order. Punctuation stays attached to the last word (`"fatigué ?"`).
- `listen`: `say` is spoken by the app; the learner picks the meaning or the written form.
- `speak`: the learner says the sentence; speech recognition scores it.
- `explain` (optional, html) is shown after answering — use it to teach, briefly.

### Vocabulary (topic lessons only, and standalone decks)

Each entry: `[french, english, respelling, "Example sentence.|English translation."]`
(the 4th element is optional but include it for ~1 in 3 entries).

```js
["le pain", "bread", "luh PEHN", "Je voudrais du pain.|I'd like some bread."],
["l'eau", "water (f.)", "LOH"],
["la gare", "train station", "lah GAR"],
["prendre", "to take", "PRAHN-druh"],
["cher / chère", "expensive (m./f.)", "SHEHR"]
```

- Nouns **always** with their article (`le/la/un/une`). When the article is `l'` or `les`,
  add `(m.)` or `(f.)` in the English.
- Adjectives: give masculine / feminine when they differ (`"petit / petite"`).
- 15–35 entries per topic lesson; standalone decks 25–60 entries.

## Standalone deck

```js
A1.addDecks([{ id: "d-verbs", title: "60 essential verbs", icon: "⚡", words: [ /* entries */ ] }]);
```

## Speaking scenario

```js
A1.addScenarios([{
  id: "s-cafe", title: "At the café", icon: "☕",
  goal: "Order drinks, ask for the bill and pay.",
  roles: { A: "Le serveur / la serveuse (waiter)", B: "Vous (you)" },
  dialogue: [
    ["A", "Bonjour ! Qu'est-ce que vous prenez ?", "Hello! What will you have?"],
    ["B", "Bonjour. Un café, s'il vous plaît.", "Hello. A coffee, please."],
    ...                                    // 8–14 lines, A and B alternate
  ],
  keyPhrases: [["Je voudrais…", "I would like…"], ...],      // 5–10
  practice: [                                                // 5–8: learner says it aloud
    { prompt: "Ask for the bill politely.", answer: "L'addition, s'il vous plaît.", alt: ["Je peux avoir l'addition, s'il vous plaît ?"] }
  ],
  freeTalk: "English instructions for an open role-play the learner does alone (2–3 sentences)."
}]);
```
In role-play mode the app plays role A and the learner speaks role B, so B lines must be
things a learner at A1 can realistically say.

## Exam object (DELF A1 mock) — see content/exams.js header comment for the exact shape.
