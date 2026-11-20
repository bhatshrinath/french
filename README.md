# 🇫🇷 French A1 in 47 days

A personal study app to go from **zero to CEFR A1 (DELF A1)** between **15 November and 31 December 2026**.

**Open the app → https://bhatshrinath.github.io/french/**  (works on phone and laptop, and offline after the first visit — add it to your home screen)

## How it works

The backbone is **NLF Academy's free "Road to A1" course** (156 videos, ~76 h) on YouTube, spread over 47 days. Around each day's videos the app gives you:

| | |
|---|---|
| 🗓️ **Today** | Your tasks for the day with checkboxes, time estimate, catch-up warnings and a coach's tip |
| ▶ **Videos** | NLF lessons play inside the app at your chosen speed (1.25× saves ~20%) and tick themselves at 90%. Chapter timestamps let you jump to the grammar part |
| 📘 **Lessons** | Short explanations in plain English for pronunciation, grammar, vocabulary and culture. Every French word is tappable to hear it, with a pronunciation guide. Each lesson ends with a quiz |
| 🃏 **Flashcards** | Spaced repetition for ~1,000 words across topic decks |
| 🗣️ **Speaking** | Role-play scenarios (café, bakery, directions, hotel, doctor…): listen, shadow line by line, then play your part. Your speech is scored with speech recognition (Chrome / Edge / Safari) |
| 🎯 **Drills** | Unlimited listening drills (numbers, phone numbers, prices, time, dates, spelling, dictation, sound pairs) and a conjugation trainer with 94 verbs and 5 tenses |
| ✍️ **Writing** | DELF-style 40–50 word tasks with model answers and checklists |
| 🎓 **Mock exams** | Two full DELF A1 practice exams (listening, reading, writing, speaking) |
| 📈 **Progress** | Completion %, schedule status, streak, activity calendar, progress by week, NLF unit and skill, quiz history, and the A1 can-do checklist |
| 📚 **Library** | All NLF videos by unit with watched ticks, extra NLF playlists, and your books with per-chapter ticks |

**Adaptive schedule:** every day the app spreads whatever is left of the 47 plan days from *today* to your end date (default **31 December**), with **2× more on weekends** (both adjustable in Settings). Today's list stays fixed for the day; miss a day and the rest re-balances, get ahead and the days get lighter. Long plan days split across two dates at natural break points. From 20 Nov that is ≈ 2 h per weekday and ≈ 4 h per weekend day (less with videos at 1.25×). "Bonus" items are optional.

## Your books (local only)

The PDFs in `A1/` are copyrighted, so they are **not** uploaded (see `.gitignore`). The plan maps each day to the matching **Cosmopolite 1** lesson. Lessons also point to pages in *Apprenons le français 0/1*, *Complete French All-in-One* and *Liberté*.

To get clickable links that open a PDF at the right page, open **`index.html` directly from this folder** on your computer.

## Progress & devices

Progress is saved in your browser. To switch devices, use **Progress → Backup → Download** on one device and **Restore** on the other. Back up once a week.

## Project structure

```
index.html              app entry (static, no build step)
assets/js/              engine: storage, speech, French helpers, quiz, flashcards, drills, views
assets/css/app.css      styles (light/dark)
content/plan.js         the 47-day plan
content/nlf.js          NLF Academy video catalogue (with chapter timestamps)
content/books.js        book contents & page offsets
content/lessons/*.js    lessons (see tools/CONTENT_SPEC.md)
content/speaking.js     speaking scenarios
content/exams.js        DELF A1 mock exams
tools/validate.js       content checker:  node tools/validate.js
```

## Credits

Video course: [NLF Academy](https://www.youtube.com/@NLF-Academy). Lessons, quizzes, drills and dialogues in this app are original. Book references point to your own copies.
