/* Pronunciation lessons: alphabet, accents, vowels, nasals, silent letters, linking, consonants, rhythm. */
A1.addLessons([
  {
    id: "p-alphabet",
    cat: "pronunciation",
    title: "The alphabet & spelling your name",
    minutes: 15,
    summary: "Say the 26 French letters, spell your name and email address aloud, and ask someone to spell a word for you.",
    sections: [
      {
        h: "Why spelling matters",
        p: "In France people ask you to spell all the time: at a hotel desk, at the doctor's, on the phone, at the bank. In the DELF A1 speaking test you may be asked to spell your name too. Indian names are new to French ears, so <b>spelling your name clearly</b> is one of the most useful things you can learn this week. Good news: French uses the same 26 letters as English. Only their <i>names</i> change."
      },
      {
        h: "The 26 letters (tap to hear)",
        table: {
          head: ["Letter", "Sounds like", "Letter", "Sounds like"],
          rows: [
            ["[[A]]", "ah", "[[N]]", "en"],
            ["[[B]]", "bay", "[[O]]", "oh"],
            ["[[C]]", "say", "[[P]]", "pay"],
            ["[[D]]", "day", "[[Q]]", "kü"],
            ["[[E]]", "uh", "[[R]]", "ehr <small>(soft throat r)</small>"],
            ["[[F]]", "ef", "[[S]]", "es"],
            ["[[G]]", "zhay", "[[T]]", "tay"],
            ["[[H]]", "ahsh", "[[U]]", "ü"],
            ["[[I]]", "ee", "[[V]]", "vay"],
            ["[[J]]", "zhee", "[[W]]", "doo-bluh-VAY"],
            ["[[K]]", "kah", "[[X]]", "eeks"],
            ["[[L]]", "el", "[[Y]]", "ee-GREK"],
            ["[[M]]", "em", "[[Z]]", "zed"]
          ]
        }
      },
      {
        h: "The letters that trick English speakers",
        list: [
          "<b>E and I</b>: E sounds like <i>uh</i>, and I sounds like <i>ee</i>. So when a French person says 'ee', they mean <b>I</b>, not E!",
          "<b>G and J</b>: G is <i>zhay</i> and J is <i>zhee</i>. They feel swapped compared with English: the French G sounds a bit like the English letter J, and the French J sounds a bit like the English letter G.",
          "<b>U</b>: the special French u. Say 'ee', keep your tongue still and round your lips (more in the vowels lesson).",
          "<b>R</b>: <i>ehr</i> with a soft r from the throat, never a rolled r.",
          "<b>W</b>: [[double vé|doo-bluh-VAY]], literally 'double V', not 'double U'.",
          "<b>Y</b>: [[i grec|ee-GREK]], literally 'Greek i'.",
          "<b>H</b>: [[ache|AHSH]]. Inside words, the h itself is silent."
        ]
      },
      {
        warn: "The classic trap is <b>G</b> and <b>J</b>. Spell <b>Gita</b> as [[G, I, T, A|zhay, ee, tay, ah]] and <b>Jay</b> as [[J, A, Y|zhee, ah, ee-GREK]]. Say them slowly: this is where most English speakers go wrong."
      },
      {
        h: "Accents, double letters and capitals",
        table: {
          head: ["You see", "You say"],
          rows: [
            ["é", "[[e accent aigu|uh ahk-sahn ay-GÜ]]"],
            ["è", "[[e accent grave|uh ahk-sahn GRAHV]]"],
            ["ê", "[[e accent circonflexe|uh ahk-sahn seer-kohn-FLEKS]]"],
            ["ç", "[[c cédille|say say-DEE-y]]"],
            ["ll, nn, ss", "[[deux L|duh-ZEL]], [[deux N|duh-ZEN]], [[deux S|duh-ZES]]"],
            ["K (capital)", "[[K majuscule|kah mah-zhüs-KÜL]]"],
            ["k (small letter)", "[[k minuscule|kah mee-nüs-KÜL]]"],
            ["written as one word", "[[en un mot|ahn-nehn MOH]]"]
          ]
        }
      },
      {
        h: "Spelling an email address",
        table: {
          head: ["Symbol", "French", "Sounds like"],
          rows: [
            ["@", "[[arobase]]", "ah-roh-BAHZ"],
            [".", "[[point]]", "PWEHN"],
            ["-", "[[tiret]]", "tee-REH"],
            ["_", "[[tiret bas]]", "tee-reh BAH"]
          ]
        }
      },
      {
        h: "Questions you will hear (and ask)",
        examples: [
          { fr: "Ça s'écrit comment ?", en: "How do you spell that? (literally: 'That is written how?')", say: "sah say-kree koh-MAHN" },
          { fr: "Comment ça s'écrit ?", en: "How is that spelled? (same question)", say: "koh-mahn sah say-KREE" },
          { fr: "Vous pouvez épeler, s'il vous plaît ?", en: "Can you spell it, please?", say: "voo poo-vay ay-puh-LAY, seel voo PLEH" },
          { fr: "Vous pouvez répéter, s'il vous plaît ?", en: "Can you repeat, please?", say: "voo poo-vay ray-pay-TAY, seel voo PLEH" },
          { fr: "Plus lentement, s'il vous plaît.", en: "More slowly, please.", say: "plü lahnt-MAHN, seel voo PLEH" },
          { fr: "Ça s'écrit avec deux L.", en: "It's spelled with two Ls.", say: "sah say-kree ah-vehk duh-ZEL" }
        ]
      },
      {
        h: "Use it: at the Alliance Française front desk",
        dialogue: [
          ["Accueil", "Bonjour ! Votre nom, s'il vous plaît ?", "Hello! Your surname, please?"],
          ["Arjun", "Bonjour. Iyer.", "Hello. Iyer."],
          ["Accueil", "Pardon ? Ça s'écrit comment ?", "Sorry? How do you spell that?"],
          ["Arjun", "I, i grec, E, R.", "I, Y, E, R."],
          ["Accueil", "Merci. Et votre prénom ?", "Thank you. And your first name?"],
          ["Arjun", "Arjun. A, R, J, U, N.", "Arjun. A, R, J, U, N."],
          ["Accueil", "Et votre adresse e-mail ?", "And your email address?"],
          ["Arjun", "arjun point iyer arobase gmail point com.", "arjun.iyer@gmail.com"],
          ["Accueil", "Parfait, merci !", "Perfect, thank you!"]
        ]
      },
      {
        tip: "On French forms, [[nom|NOHN]] means your <b>surname</b> (family name) and [[prénom|pray-NOHN]] means your <b>first name</b>. Practise spelling your full name, your city and your email aloud every day this week, until you can do it without thinking."
      }
    ],
    quiz: [
      { type: "listen", say: "B, O, N, J, O, U, R", options: ["bongour", "bonjour", "bonjeur"], answer: 1, explain: "J is <i>zhee</i> and G is <i>zhay</i>. You heard J, then O and U." },
      { type: "listen", say: "P, A, R, I, S", options: ["Parys", "Pares", "Paris"], answer: 2, explain: "The last letters were I (<i>ee</i>) and S. Y would be <i>ee-GREK</i>, and E would be <i>uh</i>." },
      { type: "listen", say: "G, E, N, T, I, L", options: ["gentil", "jentil", "gantil"], answer: 0, explain: "G (<i>zhay</i>), then E (<i>uh</i>): [[gentil|zhahn-TEE]] means kind." },
      { type: "listen", say: "Y, O, G, A", options: ["ioga", "yoga", "joga"], answer: 1, explain: "The first letter was Y, [[i grec|ee-GREK]]." },
      { type: "listen", say: "rohan point das arobase gmail point com", options: ["rohan.das@gmail.com", "rohan-das@gmail.com", "rohan_das@gmail.com"], answer: 0, explain: "[[point]] = . &nbsp; [[tiret]] = - &nbsp; [[tiret bas]] = _ &nbsp; [[arobase]] = @" },
      { type: "mcq", q: "How do you say the letter W in French?", options: ["double vé", "double U", "vé vé"], answer: 0, explain: "W is 'double V': [[double vé|doo-bluh-VAY]]." },
      { type: "mcq", q: "A receptionist spells your name and says 'ee'. Which letter is it?", options: ["E", "Y", "I"], answer: 2, explain: "I is <i>ee</i>. E is <i>uh</i>, and Y is <i>ee-GREK</i>." },
      { type: "mcq", q: "When you spell 'é' aloud, you say…", options: ["e accent grave", "e cédille", "e accent aigu"], answer: 2, explain: "é = [[e accent aigu]]. è = [[e accent grave]]." },
      { type: "mcq", q: "On a French form, <b>prénom</b> means…", options: ["first name", "surname", "nickname"], answer: 0, explain: "[[prénom]] = first name, [[nom]] = surname." },
      { type: "fill", q: "Ça s'___ comment ? (How do you spell that?)", answer: ["écrit"], explain: "[[Ça s'écrit comment ?]] literally means 'That is written how?'" },
      { type: "order", words: ["Vous", "pouvez", "épeler,", "s'il", "vous", "plaît ?"], en: "Can you spell it, please?" },
      { type: "speak", fr: "Ça s'écrit comment ?", en: "How do you spell that?" }
    ]
  }
,
  {
    id: "p-accents",
    cat: "pronunciation",
    title: "Accents & special letters",
    minutes: 15,
    summary: "Recognise every French accent, know which ones change the sound and which only change the meaning, and type them on your phone or laptop.",
    sections: [
      {
        h: "Accents are part of the spelling",
        p: "French puts small marks on some letters. They are <b>not decoration</b>: a missing accent is a spelling mistake, and it costs points in the DELF writing test. Some accents change the <b>sound</b> of a letter. Others only change the <b>meaning</b> of a word. This lesson shows you which is which."
      },
      {
        h: "The marks at a glance",
        table: {
          head: ["Mark", "Name", "What it does"],
          rows: [
            ["é", "[[accent aigu|ahk-sahn ay-GÜ]]", "Only on e. Always the sound <i>ay</i>: [[café|kah-FAY]]"],
            ["è à ù", "[[accent grave|ahk-sahn GRAHV]]", "è = open <i>eh</i>: [[mère|MEHR]]. On à and ù the sound does not change, only the meaning."],
            ["ê â î ô û", "[[accent circonflexe|ahk-sahn seer-kohn-FLEKS]]", "ê = <i>eh</i>: [[fête|FEHT]]. ô = <i>oh</i>: [[hôtel|oh-TEHL]]. â, î, û: little or no change."],
            ["ç", "[[cédille|say-DEE-y]]", "Makes c sound like <i>s</i> before a, o, u: [[ça|SAH]]"],
            ["ë ï", "[[tréma|tray-MAH]]", "Say this vowel separately from the one before it: [[Noël|noh-EHL]]"],
            ["œ", "[[e dans l'o|uh dahn LOH]]", "o and e joined together. Sounds <i>uh</i>: [[sœur|SUHR]]"]
          ]
        }
      },
      {
        h: "é is always 'ay'",
        p: "A plain <b>e</b> at the end of a word is usually silent: [[Marie|mah-REE]]. Add an accent aigu and the e is <b>always pronounced</b>, even at the very end: [[marié|mah-RYAY]] (married). That is why you clearly hear the end of [[café]], [[thé]] (tea) and [[été]] (summer)."
      },
      {
        h: "Hear the difference: e or é?",
        pairs: [
          ["Marie", "marié", "Marie (a name) / married"],
          ["parle", "parlé", "speak / spoken"],
          ["de", "dé", "of / a dice"],
          ["ne", "né", "not / born"]
        ]
      },
      {
        h: "è and ê: the open 'eh'",
        examples: [
          { fr: "ma mère", en: "my mother", say: "mah MEHR" },
          { fr: "mon père", en: "my father", say: "mohn PEHR" },
          { fr: "très bien", en: "very well", say: "treh BYEHN" },
          { fr: "une fête", en: "a party, a celebration", say: "ün FEHT" },
          { fr: "être", en: "to be", say: "EH-truh" },
          { fr: "la forêt", en: "the forest", say: "lah foh-REH" }
        ]
      },
      {
        tip: "A circumflex often marks an old <b>s</b> that disappeared. Put the s back and you can often guess the English word: [[la forêt]] → forest, [[l'hôpital]] → hospital, [[une fête]] → feast, [[une île]] → isle, [[un hôtel]] → hostel, [[la pâte]] → paste."
      },
      {
        h: "ç, the tréma and œ",
        examples: [
          { fr: "Ça va ?", en: "How are you? / Is that OK?", say: "sah VAH" },
          { fr: "français", en: "French", say: "frahn-SEH" },
          { fr: "un garçon", en: "a boy", say: "ehn gar-SOHN" },
          { fr: "Noël", en: "Christmas (no-el: two sounds)", say: "noh-EHL" },
          { fr: "le maïs", en: "corn, maize (ma-ees: two sounds)", say: "luh mah-EES" },
          { fr: "mais", en: "but (one sound: meh)", say: "MEH" },
          { fr: "ma sœur", en: "my sister", say: "mah SUHR" },
          { fr: "un œuf", en: "an egg", say: "ehn-NUHF" }
        ]
      },
      {
        h: "Same sound, different meaning",
        table: {
          head: ["Without accent", "With accent"],
          rows: [
            ["[[a]] = has: [[Il a un frère.]]", "[[à]] = to, at, in: [[à Mumbai]]"],
            ["[[ou]] = or: [[thé ou café ?]]", "[[où]] = where: [[Tu habites où ?]]"],
            ["[[la]] = the: [[la gare]]", "[[là]] = there: [[Il est là.]]"],
            ["[[sur]] = on: [[sur la table]]", "[[sûr]] = sure: [[Bien sûr !]]"],
            ["[[du]] = some, of the: [[du thé]]", "[[dû]] = had to, owed <small>(you'll see this later)</small>"]
          ]
        }
      },
      {
        note: "Fun fact: the letter <b>ù</b> is used in just one French word, [[où]] (where). Capital letters keep their accents too ([[École]], [[État]]), although you will often see them dropped on signs."
      },
      {
        h: "How to type accents",
        list: [
          "<b>Phone</b>: long-press the letter. Hold <b>e</b> to get é è ê ë, hold <b>c</b> for ç, hold <b>o</b> for ô and œ. Adding a French keyboard also gives you French autocorrect.",
          "<b>Windows laptop</b>: add the <b>United States-International</b> keyboard (Settings → Time &amp; language → Language &amp; region). Then type <code>'</code> + e = é, <code>`</code> + a = à, <code>^</code> + e = ê, <code>&quot;</code> + i = ï, <code>'</code> + c = ç.",
          "With that keyboard, <code>'</code> waits for the next letter. For a plain apostrophe (as in [[l'ami]]), press <code>'</code> and then the space bar.",
          "<b>In this app</b>: use the accent buttons when you type an answer."
        ]
      }
    ],
    quiz: [
      { type: "mcq", q: "Which accent ALWAYS gives the sound 'ay'?", options: ["é (accent aigu)", "è (accent grave)", "ê (accent circonflexe)"], answer: 0, explain: "é = <i>ay</i> ([[café]]). è and ê = <i>eh</i> ([[mère]], [[fête]])." },
      { type: "listen", say: "marié", options: ["Marie", "marié", "mari"], answer: 1, explain: "You heard <i>ay</i> at the end, so it's [[marié]] (married). [[Marie]] and [[mari]] (husband) both end in <i>ee</i>." },
      { type: "listen", say: "maïs", options: ["mais (but)", "maïs (corn)"], answer: 1, explain: "Two sounds, <i>ma-ees</i>: the tréma on ï separates the vowels. [[mais]] is one sound: <i>meh</i>." },
      { type: "listen", say: "Bien sûr !", options: ["Well done!", "Very well!", "Of course!"], answer: 2, explain: "[[Bien sûr !]] = Of course! [[sûr]] (sure) has a circumflex; [[sur]] (on) does not." },
      { type: "mcq", q: "Which one means 'where'?", options: ["où", "ou"], answer: 0, explain: "[[où]] = where, [[ou]] = or. They sound exactly the same." },
      { type: "fill", q: "J'habite ___ Mumbai. (in)", answer: ["à"], explain: "[[à]] (with an accent) = to, at, in. [[a]] (no accent) = has." },
      { type: "mcq", q: "In <b>garçon</b>, the ç sounds like…", options: ["k", "g", "s"], answer: 2, explain: "The cédille turns c into <i>s</i> before a, o, u: [[garçon|gar-SOHN]]." },
      { type: "mcq", q: "Hôpital = hospital. So <b>la forêt</b> means…", options: ["the fort", "the fruit", "the forest"], answer: 2, explain: "Put back the hidden s: forêt → forest." },
      { type: "mcq", q: "On a phone, how do you type é?", options: ["Type e twice", "Long-press the letter e", "Press Shift + e"], answer: 1, explain: "Long-press e and choose é from the little menu." },
      { type: "order", words: ["Ma", "sœur", "est", "très", "gentille."], en: "My sister is very kind." },
      { type: "speak", fr: "Mon père et ma mère vont très bien.", en: "My father and my mother are very well." }
    ]
  }
,
  {
    id: "p-vowels",
    cat: "pronunciation",
    title: "Key vowels: u vs ou, é vs è, eu, and the little e",
    minutes: 18,
    summary: "Make the French u, hear the difference between ay and eh, say eu correctly, and catch the little e that French speakers often swallow.",
    sections: [
      {
        h: "Why these vowels matter",
        p: "English speakers can get away with fuzzy vowels. In French, one vowel can change the whole meaning: [[tu]] (you) vs [[tout]] (all), [[le livre]] (the book) vs [[les livres]] (the books). This lesson trains four key contrasts. Tap the speaker buttons a lot, and repeat every word out loud."
      },
      {
        h: "u vs ou: the mouth recipe",
        list: [
          "<b>ou</b>, as in [[vous|VOO]], is easy: it's the 'oo' of 'food'.",
          "<b>u</b>, as in [[tu|TÜ]], does not exist in English. Step 1: say a long 'ee', as in 'see'.",
          "Step 2: keep your tongue exactly where it is, with the tip touching your bottom teeth.",
          "Step 3: now push your lips forward into a small, tight circle, as if you were going to whistle. Don't move your tongue! That sound is the French u.",
          "Check: if it sounds like 'too', your tongue slid back. Go back to 'ee' and try again."
        ]
      },
      {
        h: "Hear the difference: u vs ou",
        pairs: [
          ["tu", "tout", "you / all"],
          ["rue", "roue", "street / wheel"],
          ["vu", "vous", "seen / you"],
          ["du", "doux", "some / soft"],
          ["dessus", "dessous", "on top / underneath"]
        ]
      },
      {
        h: "é vs è: closed 'ay' and open 'eh'",
        table: {
          head: ["Closed: ay", "Open: eh"],
          rows: [
            ["é: [[café|kah-FAY]], [[été|ay-TAY]]", "è, ê: [[mère|MEHR]], [[fête|FEHT]]"],
            ["-er, -ez at the end: [[parler|par-LAY]], [[chez|SHAY]]", "ai: [[lait|LEH]], [[français|frahn-SEH]]"],
            ["the little word [[et|AY]] (and)", "the little word [[est|EH]] (is)"],
            ["[[les|LAY]], [[des|DAY]], [[mes|MAY]], [[ces|SAY]]", "e + two consonants: [[merci|mehr-SEE]], [[elle|EHL]]"],
            ["exception: [[j'ai|ZHAY]] (I have)", "-et at the end of a longer word: [[un billet|ehn bee-YEH]] (a ticket)"]
          ]
        }
      },
      {
        h: "Hear the difference: ay vs eh",
        pairs: [
          ["et", "est", "and / is"],
          ["les", "lait", "the (plural) / milk"],
          ["mes", "mais", "my (plural) / but"],
          ["ces", "c'est", "these / it is"]
        ]
      },
      {
        h: "eu and eur",
        p: "<b>eu</b> at the end of a syllable, as in [[deux|DUH]], [[bleu|BLUH]], [[jeudi|zhuh-DEE]] and [[un peu|ehn PUH]], is a closed sound: say 'ay', then round your lips without moving your tongue. Before a pronounced consonant, as in [[heure|UHR]], [[sœur|SUHR]], [[neuf|NUHF]] or [[jeune|ZHUHN]], the mouth opens a little more, a bit like the 'ur' of 'fur' said without any r."
      },
      {
        h: "Hear the difference: eu vs ou vs é",
        pairs: [
          ["peu", "peur", "a little / fear"],
          ["deux", "douze", "two / twelve"],
          ["jeu", "joue", "game / plays"],
          ["deux", "des", "two / some"]
        ]
      },
      {
        h: "The little e (uh)",
        p: "The e in [[le|luh]], [[je|zhuh]], [[ce|suh]], [[de|duh]], [[ne|nuh]] and [[que|kuh]] is a short, relaxed <i>uh</i>. In everyday speech it often <b>disappears</b>: [[samedi|sam-DEE]] is said in two syllables, not three; [[maintenant|mehnt-NAHN]] (now) in two; and [[Je ne sais pas.|zhuhn seh PAH]] (I don't know) often sounds like 'zhuhn seh pah'. As a learner you can pronounce every e, but expect French people to swallow them."
      },
      {
        h: "Hear the difference: one or many?",
        pairs: [
          ["le", "les", "the (one) / the (several)"],
          ["je", "j'ai", "I / I have"],
          ["ce", "ces", "this / these"],
          ["de", "des", "of / some"]
        ]
      },
      {
        warn: "In speech, the plural -s of a noun is silent, so <b>le</b> vs <b>les</b> is often your only clue: [[le livre|luh LEE-vruh]] (the book) vs [[les livres|lay LEE-vruh]] (the books). Say <i>luh</i> and <i>lay</i> clearly, and listen out for them."
      }
    ],
    quiz: [
      { type: "listen", say: "tout", options: ["tu", "tout"], answer: 1, explain: "[[tout]] = 'oo' (all). [[tu]] = the French u (you)." },
      { type: "listen", say: "la rue", options: ["la rue", "la roue"], answer: 0, explain: "French u: [[la rue|lah RÜ]] = the street. [[la roue|lah ROO]] = the wheel." },
      { type: "listen", say: "les livres", options: ["le livre", "les livres"], answer: 1, explain: "You heard <i>lay</i>: plural. The -s of [[livres]] is silent, so the article is the clue." },
      { type: "listen", say: "J'ai deux sœurs.", options: ["J'ai deux sœurs.", "J'ai douze sœurs."], answer: 0, explain: "[[deux|DUH]] (2) has eu. [[douze|DOOZ]] (12) has ou." },
      { type: "listen", say: "peur", options: ["peu", "peur"], answer: 1, explain: "You heard an r at the end: [[peur|PUHR]] = fear. [[peu|PUH]] = a little." },
      { type: "mcq", q: "To make the French u (as in <b>tu</b>), you…", options: ["say 'oo' with your lips spread", "say 'uh' with your mouth wide open", "say 'ee' and round your lips"], answer: 2, explain: "Tongue in the 'ee' position, lips rounded as for a whistle." },
      { type: "mcq", q: "Which word has the closed 'ay' sound?", options: ["mère", "parler", "fête"], answer: 1, explain: "-er at the end of a verb = <i>ay</i>: [[parler|par-LAY]]. è and ê = <i>eh</i>." },
      { type: "mcq", q: "You hear <i>luh</i> before a noun. Is it one thing or several?", options: ["one thing (le)", "several things (les)"], answer: 0, explain: "<i>luh</i> = [[le]] (one). <i>lay</i> = [[les]] (several)." },
      { type: "fill", q: "In everyday speech, <b>samedi</b> has ___ syllables. (write a number)", answer: ["2", "two", "deux"], explain: "The little e drops: [[samedi|sam-DEE]]." },
      { type: "order", words: ["Je", "ne", "sais", "pas."], en: "I don't know." },
      { type: "speak", fr: "Tu es où ? Je suis dans la rue.", en: "Where are you? I'm in the street." }
    ]
  }
,
  {
    id: "p-nasals",
    cat: "pronunciation",
    title: "Nasal vowels: an, in, on (and un)",
    minutes: 15,
    summary: "Make the three French nasal vowels, tell vin, vent and vont apart, and know when the n is pronounced after all.",
    sections: [
      {
        h: "What is a nasal vowel?",
        p: "In [[bon|BOHN]], [[vin|VEHN]] and [[blanc|BLAHN]], you do <b>not</b> say the n. The n (or m) is only a signal that means 'send this vowel through your nose'. Your tongue never touches the top of your mouth. In the respellings, <i>ahn</i>, <i>ehn</i> and <i>ohn</i> mean a nasal vowel with no n sound at all."
      },
      {
        h: "How to make them",
        list: [
          "Say the vowel and, at the same time, let some air flow out through your nose.",
          "Stop before the n: keep your tongue down and your mouth open. No 'n' at the end!",
          "Test: pinch your nose while you say [[bon]]. If the sound changes, the air really is going through your nose. Good!",
          "Good news for Hindi speakers: the nasal 'aa' of माँ (maa) or हाँ (haan, yes) is very close to the French <i>ahn</i> of [[enfant]]."
        ]
      },
      {
        h: "The three nasal sounds",
        table: {
          head: ["Sound", "Spellings", "Examples"],
          rows: [
            ["<b>ahn</b>", "an, am, en, em", "[[enfant|ahn-FAHN]], [[blanc|BLAHN]], [[la chambre|lah SHAHN-bruh]], [[le temps|luh TAHN]]"],
            ["<b>ehn</b>", "in, im, ain, ein, un, and en after i", "[[vin|VEHN]], [[important|ehn-por-TAHN]], [[pain|PEHN]], [[plein|PLEHN]], [[un|EHN]], [[bien|BYEHN]]"],
            ["<b>ohn</b>", "on, om", "[[bon|BOHN]], [[le nom|luh NOHN]], [[onze|OHNZ]]"]
          ]
        }
      },
      {
        tip: "Before p or b, the n is written m: [[important]], [[la chambre]], [[simple|SEHN-pluh]]. The sound does not change. And <b>un</b>: most French people today say it exactly like <i>in</i>, so you can too."
      },
      {
        h: "Hear the difference",
        pairs: [
          ["vin", "vent", "wine / wind"],
          ["vent", "vont", "wind / (they) go"],
          ["bain", "banc", "bath / bench"],
          ["banc", "bon", "bench / good"],
          ["lin", "lent", "linen / slow"],
          ["lent", "long", "slow / long"]
        ]
      },
      {
        h: "Everyday nasal words",
        examples: [
          { fr: "bonjour", en: "hello", say: "bohn-ZHOOR" },
          { fr: "le pain", en: "bread", say: "luh PEHN" },
          { fr: "le vin", en: "wine", say: "luh VEHN" },
          { fr: "un enfant", en: "a child", say: "ehn-nahn-FAHN" },
          { fr: "onze", en: "eleven", say: "OHNZ" },
          { fr: "cinq", en: "five", say: "SEHNK" },
          { fr: "la maison", en: "the house", say: "lah meh-ZOHN" },
          { fr: "important", en: "important", say: "ehn-por-TAHN" }
        ]
      },
      {
        h: "When it is NOT nasal",
        p: "The vowel is <b>not</b> nasal, and you <b>do</b> say the n or m, when:<br>1) a vowel comes right after it: [[une|ÜN]], [[fine|FEEN]], [[ami|ah-MEE]], [[madame|mah-DAHM]];<br>2) the n or m is doubled: [[bonne|BON]], [[Anne|AN]], [[année|ah-NAY]], [[homme|OM]], [[comme|KOM]].<br>In the respellings, a plain n or m after a vowel (BON, FEEN) is a real n or m: say it!"
      },
      {
        h: "Nasal or not? Masculine vs feminine",
        pairs: [
          ["un", "une", "a (m.) / a (f.)"],
          ["bon", "bonne", "good (m.) / good (f.)"],
          ["indien", "indienne", "Indian (m.) / Indian (f.)"],
          ["américain", "américaine", "American (m.) / American (f.)"],
          ["voisin", "voisine", "neighbour (m.) / neighbour (f.)"]
        ]
      },
      {
        warn: "Two classic mistakes. 1) Adding an n: [[bon]] is <i>BOHN</i>, never 'bonn'. 2) Forgetting the n in the feminine: [[Elle est indienne.|eh-leh-tehn-DYEN]] ends with a clear n, but [[Il est indien.|ee-leh-tehn-DYEHN]] does not. That's how you hear whether someone is talking about a man or a woman!"
      },
      {
        h: "Use it",
        examples: [
          { fr: "Bonjour, un pain, s'il vous plaît.", en: "Hello, a loaf of bread, please.", say: "bohn-ZHOOR, ehn PEHN, seel voo PLEH" },
          { fr: "Le vin blanc est bon.", en: "The white wine is good.", say: "luh vehn BLAHN eh BOHN" },
          { fr: "Mon cousin habite en Inde.", en: "My cousin lives in India.", say: "mohn koo-zehn ah-bee-tahn-NEHND" },
          { fr: "J'ai onze ans.", en: "I'm eleven (years old).", say: "zhay ohn-ZAHN" }
        ]
      }
    ],
    quiz: [
      { type: "listen", say: "vent", options: ["vin", "vent", "vont"], answer: 1, explain: "[[vent|VAHN]] (wind) has the <i>ahn</i> sound." },
      { type: "listen", say: "bon", options: ["bain", "banc", "bon"], answer: 2, explain: "[[bon|BOHN]] has the <i>ohn</i> sound: lips rounded." },
      { type: "listen", say: "lin", options: ["lin", "lent", "long"], answer: 0, explain: "[[lin|LEHN]] has the <i>ehn</i> sound, like [[vin]] and [[pain]]." },
      { type: "listen", say: "indienne", options: ["indien", "indienne"], answer: 1, explain: "You heard a real n at the end: [[indienne|ehn-DYEN]] (feminine)." },
      { type: "listen", say: "un", options: ["un", "une"], answer: 0, explain: "No n sound: nasal [[un|EHN]]. [[une|ÜN]] ends with a clear n." },
      { type: "mcq", q: "In <b>bon</b>, do you pronounce the n?", options: ["Yes, clearly", "No: it only tells you the vowel is nasal"], answer: 1, explain: "[[bon|BOHN]]: the n is silent. In [[bonne|BON]] you do say it." },
      { type: "mcq", q: "Which word is NOT nasal?", options: ["pain", "enfant", "bonne"], answer: 2, explain: "Double n = no nasal: [[bonne|BON]]." },
      { type: "mcq", q: "Which spelling gives the same sound as <b>in</b> in vin?", options: ["on, as in bon", "ain, as in pain", "an, as in blanc"], answer: 1, explain: "in, im, ain, ein (and un) all sound <i>ehn</i>." },
      { type: "fill", q: "Before p and b, n is written ___ (as in important).", answer: ["m"], explain: "[[important]], [[la chambre]], [[le temps]]: same nasal sound, written with m." },
      { type: "order", words: ["Mon", "enfant", "a", "onze", "ans."], en: "My child is eleven." },
      { type: "speak", fr: "Bonjour, je voudrais du pain et du vin blanc.", en: "Hello, I'd like some bread and some white wine." }
    ]
  }
,
  {
    id: "p-silent",
    cat: "pronunciation",
    title: "Silent letters: what you don't pronounce",
    minutes: 15,
    summary: "Know which final letters to drop, which ones to keep (CaReFuL), and avoid the famous traps like fils, monsieur and ils parlent.",
    sections: [
      {
        h: "The golden rule",
        p: "The end of a French word is usually quiet. Most final consonants are written but <b>not pronounced</b>: [[Paris|pah-REE]], [[petit|puh-TEE]], [[grand|GRAHN]], [[trop|TROH]], [[deux|DUH]], [[le nez|luh NAY]]. A final <b>e</b> is silent too: [[Marie|mah-REE]], [[elle|EHL]], [[rouge|ROOZH]], [[la porte|lah PORT]]. But watch this: an <b>e</b> after a consonant makes that consonant heard. That's why many feminine words sound different."
      },
      {
        h: "The final e wakes up the consonant",
        pairs: [
          ["petit", "petite", "small (m. / f.)"],
          ["grand", "grande", "big, tall (m. / f.)"],
          ["français", "française", "French (m. / f.)"],
          ["vert", "verte", "green (m. / f.)"],
          ["étudiant", "étudiante", "student (m. / f.)"]
        ]
      },
      {
        h: "Be CaReFuL: c, r, f, l",
        table: {
          head: ["Final letter", "Usually pronounced"],
          rows: [
            ["c", "[[avec|ah-VEHK]], [[un sac|ehn SAHK]]"],
            ["r", "[[bonjour|bohn-ZHOOR]], [[pour|POOR]], [[la mer|lah MEHR]]"],
            ["f", "[[neuf|NUHF]], [[un chef|ehn SHEHF]]"],
            ["l", "[[il|EEL]], [[avril|ah-VREEL]], [[le sel|luh SEHL]]"]
          ]
        }
      },
      {
        warn: "The big exception is <b>-er</b>. In verbs like [[parler|par-LAY]] and [[manger|mahn-ZHAY]], and in many other words like [[premier|pruh-MYAY]], [[janvier|zhahn-VYAY]] and [[le boulanger|luh boo-lahn-ZHAY]], -er sounds <i>ay</i> and the r is silent. A few short words keep the r: [[la mer|lah MEHR]], [[cher|SHEHR]], [[hier|YEHR]], [[l'hiver|lee-VEHR]]. Also note [[blanc|BLAHN]] and [[gentil|zhahn-TEE]]: their final c and l are silent."
      },
      {
        h: "ils parlent = il parle",
        p: "With <b>ils</b> and <b>elles</b>, the verb ending <b>-ent</b> is completely silent. So [[il parle]] and [[ils parlent]] sound exactly the same. Only the context tells you it's plural. Careful: in other words, -ent is a normal nasal <i>ahn</i>: [[comment|koh-MAHN]], [[souvent|soo-VAHN]], [[un appartement|ehn-nah-par-tuh-MAHN]]."
      },
      {
        h: "Same sound, singular or plural",
        examples: [
          { fr: "Il parle français.", en: "He speaks French.", say: "eel parl frahn-SEH" },
          { fr: "Ils parlent français.", en: "They speak French.", say: "eel parl frahn-SEH" },
          { fr: "Elle mange.", en: "She eats.", say: "ehl MAHNZH" },
          { fr: "Elles mangent.", en: "They (f.) eat.", say: "ehl MAHNZH" }
        ]
      },
      {
        h: "Plural -s, -x and the silent h",
        list: [
          "Plural -s and -x are silent: [[le livre]] / [[les livres]], [[un gâteau]] / [[deux gâteaux]]. Listen to the little word in front (le / les) instead.",
          "h is always silent: [[l'hôtel|loh-TEHL]], [[l'homme|LOM]], [[l'heure|LUHR]], [[j'habite|zhah-BEET]]. And th is just t: [[le thé|luh TAY]].",
          "A few words starting with h don't take l' ([[le héros]]), but their h is still silent <small>(more in the 'Linking words' lesson)</small>."
        ]
      },
      {
        h: "Numbers six, dix, huit, cinq (just recognise them)",
        table: {
          head: ["Number", "Alone", "Before a consonant", "Before a vowel"],
          rows: [
            ["6", "[[six|SEES]]", "[[six jours|see ZHOOR]]", "[[six ans|see-ZAHN]]"],
            ["10", "[[dix|DEES]]", "[[dix jours|dee ZHOOR]]", "[[dix ans|dee-ZAHN]]"],
            ["8", "[[huit|WEET]]", "[[huit jours|wee ZHOOR]]", "[[huit ans|wee-TAHN]]"],
            ["5", "[[cinq|SEHNK]]", "[[cinq jours|sehn ZHOOR]] (many people keep the k)", "[[cinq ans|sehn-KAHN]]"]
          ]
        }
      },
      {
        h: "Famous traps",
        table: {
          head: ["Word", "Say", "Why it's tricky"],
          rows: [
            ["[[Paris]]", "pah-REE", "silent s"],
            ["[[beaucoup]]", "boh-KOO", "silent p"],
            ["[[vingt]]", "VEHN", "20: silent g and t"],
            ["[[le fils]]", "luh FEES", "son: the l is silent, but the s is pronounced!"],
            ["[[monsieur]]", "muh-SYUH", "the 'on' sounds <i>uh</i>, and the r is silent"],
            ["[[plus]]", "PLÜ / PLÜS", "PLÜ in [[Je n'ai plus de pain.]] (no more); PLÜS in [[deux plus deux]] (plus)"],
            ["[[tous]]", "TOO / TOOS", "TOO in [[tous les jours]] (every day); TOOS when it means 'all of them' <small>(you'll see this later)</small>"]
          ]
        }
      },
      {
        tip: "When you learn a new word, tap it and listen carefully to the <b>last</b> sound. Don't trust the spelling at the end of a French word!"
      }
    ],
    quiz: [
      { type: "listen", say: "Ils parlent français.", options: ["Il parle français.", "Ils parlent français.", "Both are possible: they sound the same"], answer: 2, explain: "The s of [[ils]] and the -ent of [[parlent]] are silent, so you can't hear the difference." },
      { type: "listen", say: "petite", options: ["petit", "petite"], answer: 1, explain: "You heard the t, so there's an e after it: [[petite|puh-TEET]]." },
      { type: "listen", say: "grand", options: ["grand", "grande"], answer: 0, explain: "No d sound at the end: [[grand|GRAHN]]. [[grande|GRAHND]] ends with a d." },
      { type: "listen", say: "dix", options: ["six", "dix", "dis"], answer: 1, explain: "Alone, [[dix|DEES]] (10) keeps its final sound. [[dis|DEE]] (say) has none." },
      { type: "mcq", q: "How do you say <b>fils</b> (son)?", options: ["FEELS", "FEE", "FEES"], answer: 2, explain: "[[le fils|luh FEES]]: silent l, pronounced s." },
      { type: "mcq", q: "Which final letter IS pronounced?", options: ["the t in petit", "the c in avec", "the s in Paris"], answer: 1, explain: "CaReFuL: final c, r, f and l are usually pronounced: [[avec|ah-VEHK]]." },
      { type: "mcq", q: "In <b>parler</b>, the final -er sounds…", options: ["ay (the r is silent)", "air (with the r)", "er, as in 'her'"], answer: 0, explain: "[[parler|par-LAY]]: -er verbs end in <i>ay</i>." },
      { type: "fill", q: "Je parle, il parle, ils ___ : they all sound the same! (parler)", answer: ["parlent"], explain: "The -ent of [[ils parlent]] is silent." },
      { type: "order", words: ["Il", "fait", "beaucoup", "de", "sport."], en: "He does a lot of sport." },
      { type: "speak", fr: "Bonjour monsieur, un petit café, s'il vous plaît.", en: "Hello sir, a small coffee, please." }
    ]
  }
,
  {
    id: "p-liaison",
    cat: "pronunciation",
    title: "Linking words: liaison, enchaînement & élision",
    minutes: 16,
    summary: "Shorten words with an apostrophe (j'aime, l'ami), link words the French way (les‿amis, vous‿avez), and know when not to link.",
    sections: [
      {
        h: "French glues words together",
        p: "Spoken French flows like one long word. That makes it sound smooth, but it also makes it hard to hear where one word ends and the next begins. Three tools do the gluing: <b>élision</b> (a vowel drops and becomes an apostrophe), <b>liaison</b> (a silent final consonant wakes up before a vowel) and <b>enchaînement</b> (a final sound slides into the next word). Learn to hear them, and French becomes much easier to understand."
      },
      {
        h: "Élision: le → l', je → j'…",
        table: {
          head: ["Before a vowel or h", "Becomes", "Example"],
          rows: [
            ["<b>le</b>, <b>la</b>", "<b>l'</b>", "[[l'ami|lah-MEE]], [[l'école|lay-KOL]], [[l'hôtel|loh-TEHL]]"],
            ["<b>je</b>", "<b>j'</b>", "[[j'aime|ZHEHM]], [[j'habite|zhah-BEET]]"],
            ["<b>ne</b>", "<b>n'</b>", "[[Je n'aime pas.|zhuh nehm PAH]]"],
            ["<b>de</b>", "<b>d'</b>", "[[d'accord|dah-KOR]], [[un verre d'eau|ehn vehr DOH]]"],
            ["<b>que</b>", "<b>qu'</b>", "[[Qu'est-ce que c'est ?|kes-kuh SEH]]"],
            ["<b>ce</b>", "<b>c'</b>", "[[C'est bon.|seh BOHN]]"],
            ["<b>me</b>, <b>te</b>, <b>se</b>", "<b>m'</b>, <b>t'</b>, <b>s'</b>", "[[Je m'appelle Ravi.|zhuh mah-pehl rah-VEE]]"],
            ["<b>si</b> + il / ils", "<b>s'il</b>, <b>s'ils</b>", "[[s'il vous plaît|seel voo PLEH]]"]
          ]
        }
      },
      {
        warn: "Élision is not optional: never say 'je aime' or 'le ami'. But <b>si</b> only shortens before il and ils: [[s'il]], but [[si elle]] stays as it is. Also, <b>l'</b> hides the gender: [[l'école]] is feminine, [[l'hôtel]] is masculine. Learn new words with [[un]] or [[une]]."
      },
      {
        h: "Liaison: the silent letter wakes up",
        p: "Normally the last consonant of [[les]], [[vous]] or [[un]] is silent. But when the next word starts with a vowel sound (or a silent h), that consonant is pronounced and joins the next word. Watch out: the sound can change. A written s or x sounds like <b>z</b>, and a d sounds like <b>t</b>."
      },
      {
        table: {
          head: ["Written", "Sounds", "Examples"],
          rows: [
            ["s, x, z", "z", "[[les amis|lay-zah-MEE]], [[vous avez|voo-zah-VAY]], [[deux heures|duh-ZUHR]], [[trois enfants|trwah-zahn-FAHN]]"],
            ["n", "n", "[[un ami|ehn-nah-MEE]], [[on a|ohn-NAH]], [[mon école|mohn-nay-KOL]]"],
            ["t, d", "t", "[[un petit ami|ehn puh-tee-tah-MEE]] (a boyfriend), [[C'est un ami.|seh-tehn-nah-MEE]], [[Comment allez-vous ?|koh-mahn-tah-lay-VOO]], [[Quand il fait beau…|kahn-teel feh BOH]]"],
            ["f", "v (only in neuf + ans / heures)", "[[neuf heures|nuh-VUHR]], [[neuf ans|nuh-VAHN]]"]
          ]
        }
      },
      {
        h: "When to link (and when not to)",
        list: [
          "<b>Always link</b> after [[les]], [[des]], [[un]], [[mon]], [[ton]], [[son]], [[mes]], [[ces]]: [[les enfants|lay-zahn-FAHN]], [[mon ami|mohn-nah-MEE]].",
          "<b>Always link</b> [[nous]], [[vous]], [[ils]], [[elles]] and [[on]] to a verb that starts with a vowel: [[nous avons|noo-zah-VOHN]], [[ils ont|eel-ZOHN]], [[on est|ohn-NEH]].",
          "<b>Almost always</b> link after [[très]]: [[très important|treh-zehn-por-TAHN]].",
          "<b>Never</b> link after [[et]] (and): [[un homme et une femme|ehn-NOM ay ün FAHM]]. The t of et is always silent.",
          "<b>Never</b> link before an 'h aspiré', a small group of words starting with h: [[les héros|lay ay-ROH]], [[les haricots|lay ah-ree-KOH]]. No z sound, and no l' either: [[le héros]]."
        ]
      },
      {
        h: "Hear the difference",
        pairs: [
          ["ils sont", "ils ont", "they are (s sound) / they have (z sound)"],
          ["elles sont", "elles ont", "they are / they have (f.)"],
          ["un ami", "une amie", "a friend (m.) / a friend (f.)"],
          ["les hôtels", "les héros", "the hotels (linked) / the heroes (not linked)"]
        ]
      },
      {
        h: "Enchaînement: sliding into the next word",
        p: "When a word ends with a consonant you <b>always</b> pronounce, that consonant slides into the next vowel, as if the two words were one: [[elle est|eh-LEH]], [[il a|ee-LAH]], [[avec elle|ah-veh-KEHL]]. Unlike liaison, nothing 'wakes up' here: the sound was already there."
      },
      {
        h: "Use it",
        examples: [
          { fr: "Elle est indienne.", en: "She is Indian.", say: "eh-leh-tehn-DYEN" },
          { fr: "Il a une sœur.", en: "He has a sister.", say: "ee-lah-ün SUHR" },
          { fr: "Il habite à Delhi avec elle.", en: "He lives in Delhi with her.", say: "ee-lah-bee-tah deh-LEE ah-veh-KEHL" },
          { fr: "Vous avez une adresse e-mail ?", en: "Do you have an email address?", say: "voo-zah-vay ü-nah-drehs ee-MEHL" }
        ]
      },
      {
        tip: "Listening trick: a <b>z</b> sound between two words usually means a plural, or vous / nous: [[les amis]], [[vous avez]]. A z before [[ont]] tells you it's [[ils ont]] (they have), not [[ils sont]] (they are)."
      }
    ],
    quiz: [
      { type: "mcq", q: "Je + aime = ?", options: ["Je aime", "J'aime", "Jaime"], answer: 1, explain: "Before a vowel, <b>je</b> becomes <b>j'</b>: [[J'aime le thé.]]" },
      { type: "fill", q: "Je ___ appelle Priya. (me, shortened)", answer: ["m'", "m’"], explain: "[[Je m'appelle Priya.]] me + vowel = m'." },
      { type: "fill", q: "___ vous plaît. (si + il)", answer: ["S'il", "s'il", "S’il", "s’il"], explain: "si + il = [[s'il]]. But si + elle stays [[si elle]]." },
      { type: "listen", say: "ils ont", options: ["ils sont", "ils ont"], answer: 1, explain: "A z sound = [[ils ont|eel-ZOHN]] (they have). An s sound = [[ils sont|eel SOHN]] (they are)." },
      { type: "listen", say: "les amis", options: ["les amis", "l'ami"], answer: 0, explain: "You heard <i>lay-z</i>: plural, [[les amis|lay-zah-MEE]]." },
      { type: "listen", say: "Il est deux heures.", options: ["It's 12 o'clock.", "It's 2 o'clock.", "It's 10 o'clock."], answer: 1, explain: "[[deux heures|duh-ZUHR]]. Compare [[douze heures|doo-ZUHR]] and [[dix heures|dee-ZUHR]]." },
      { type: "mcq", q: "Where must you NOT make a liaison?", options: ["les amis", "vous avez", "after et: un homme et une femme"], answer: 2, explain: "Never link after [[et]]." },
      { type: "mcq", q: "In <b>neuf heures</b>, the f sounds like…", options: ["f", "v", "nothing: it's silent"], answer: 1, explain: "[[neuf heures|nuh-VUHR]] and [[neuf ans|nuh-VAHN]]." },
      { type: "order", words: ["Vous", "avez", "un", "ami", "indien ?"], en: "Do you have an Indian friend?" },
      { type: "speak", fr: "Vous avez deux enfants ?", en: "Do you have two children?" }
    ]
  }
,
  {
    id: "p-consonants",
    cat: "pronunciation",
    title: "The French R and other tricky consonants",
    minutes: 16,
    summary: "Make a soft French r from the throat, and read ch, j, gn, qu, th, ill, s/ss, c/g and -tion the French way.",
    sections: [
      {
        h: "The French r",
        p: "The French r is made at the <b>back</b> of the mouth, not with the tip of the tongue. It's a light, soft friction, like a very gentle gargle. The rolled or tapped r of Hindi, Tamil or Spanish sounds foreign in French, and so does the English r with the tongue curled back. It feels strange at first, but everyone can learn it."
      },
      {
        h: "Step by step",
        list: [
          "Step 1: say 'k' and 'g' a few times. Feel where the back of your tongue touches the roof of your mouth. That's where the French r lives.",
          "Step 2: keep the tip of your tongue <b>down</b>, touching your bottom teeth. It stays there for every French r.",
          "Step 3: say 'aaa', then slowly raise the back of your tongue towards that spot, without touching it, until you hear a soft friction, like gargling without water. That's it!",
          "If you know Urdu or Hindustani: the <i>gh</i> of ghazal or ghalat (ग़) is very close to the French r, and the <i>kh</i> of khush or khabar (ख़) is close to the r in [[très]].",
          "Start with g + r, because g is already at the back of the mouth: [[grand]], [[gris]], [[gros]]. Then tr and br: [[très]], [[trois]], [[bravo]]. Then r between vowels and at the start of a word: [[Paris]], [[rouge]]."
        ]
      },
      {
        h: "Practise the r",
        examples: [
          { fr: "grand", en: "big, tall", say: "GRAHN" },
          { fr: "très", en: "very", say: "TREH" },
          { fr: "Bravo !", en: "Well done!", say: "brah-VOH" },
          { fr: "Paris", en: "Paris", say: "pah-REE" },
          { fr: "merci", en: "thank you", say: "mehr-SEE" },
          { fr: "rouge", en: "red", say: "ROOZH" },
          { fr: "au revoir", en: "goodbye", say: "oh ruh-VWAHR" },
          { fr: "Trois croissants, s'il vous plaît.", en: "Three croissants, please.", say: "trwah krwah-SAHN, seel voo PLEH" }
        ]
      },
      {
        tip: "At the end of a word or before a consonant, the r is very light, almost just a breath: [[bonjour]], [[merci]], [[au revoir]]. Don't over-gargle! And if your r isn't perfect yet, don't worry: people will still understand you."
      },
      {
        h: "Spellings with their own sound",
        table: {
          head: ["Spelling", "Sound", "Examples"],
          rows: [
            ["ch", "sh", "[[le chat|luh SHAH]], [[le chocolat|luh shoh-koh-LAH]], [[chercher|shehr-SHAY]]"],
            ["j, and g before e / i", "zh (like the s in 'measure')", "[[je|zhuh]], [[le jour|luh ZHOOR]], [[rouge|ROOZH]], [[manger|mahn-ZHAY]]"],
            ["gn", "ny (as in 'canyon')", "[[la montagne|lah mohn-TAH-nyuh]], [[le champagne|luh shahn-PAH-nyuh]], [[l'Espagne|leh-SPAH-nyuh]]"],
            ["qu", "k", "[[qui|KEE]], [[quatre|KAH-truh]], [[quand|KAHN]], [[la musique|lah mü-ZEEK]]"],
            ["th", "t", "[[le thé|luh TAY]], [[le théâtre|luh tay-AH-truh]]"],
            ["h", "silent", "[[l'hôtel|loh-TEHL]], [[l'homme|LOM]]"],
            ["ill (and il after a vowel)", "y", "[[la fille|lah FEE-y]], [[la famille|lah fah-MEE-y]], [[le travail|luh trah-VAH-y]], [[Marseille|mar-SEH-y]]"],
            ["-tion", "syohn ('see-ohn' said fast)", "[[la nation|lah nah-SYOHN]], [[l'attention|lah-tahn-SYOHN]], [[la station|lah stah-SYOHN]]"]
          ]
        }
      },
      {
        warn: "Watch the exceptions. In [[la ville|lah VEEL]] (town), [[mille|MEEL]] (a thousand) and [[tranquille|trahn-KEEL]] (calm), ill sounds <i>eel</i>, not <i>ee-y</i>. After s, -tion keeps a real t: [[une question|ün kehs-TYOHN]]. And j is never 'dj': [[bonjour]] is <i>bohn-ZHOOR</i>, not 'bon-joor'."
      },
      {
        h: "One s or two?",
        p: "A single <b>s</b> between two vowels sounds like <b>z</b>: [[la maison|lah meh-ZOHN]], [[la rose|lah ROHZ]], [[la musique|lah mü-ZEEK]]. A double <b>ss</b> always sounds like <b>s</b>. One letter can change the meaning:"
      },
      {
        pairs: [
          ["poison", "poisson", "poison / fish"],
          ["désert", "dessert", "desert / dessert"],
          ["cousin", "coussin", "cousin / cushion"]
        ]
      },
      {
        h: "Soft and hard c and g",
        table: {
          head: ["Before e, i, y", "Before a, o, u"],
          rows: [
            ["c = s: [[merci|mehr-SEE]], [[le cinéma|luh see-nay-MAH]]", "c = k: [[le café|luh kah-FAY]], [[comment|koh-MAHN]], [[la cuisine|lah kwee-ZEEN]]"],
            ["g = zh: [[manger|mahn-ZHAY]], [[la girafe|lah zhee-RAHF]]", "g = g: [[la gare|lah GAR]], [[la gomme|lah GOM]] (eraser)"],
            ["to keep a hard g, add u (it's silent): [[le guide|luh GEED]], [[la guitare|lah gee-TAR]], [[la baguette|lah bah-GEHT]]", "to get an s sound, use ç: [[ça|SAH]], [[le garçon|luh gar-SOHN]], [[la leçon|lah luh-SOHN]]"]
          ]
        }
      },
      {
        h: "Use it",
        examples: [
          { fr: "Ma fille habite en Espagne.", en: "My daughter lives in Spain.", say: "mah FEE-y ah-bee-tahn-neh-SPAH-nyuh" },
          { fr: "Je voudrais du poisson et un dessert.", en: "I'd like some fish and a dessert.", say: "zhuh voo-dreh dü pwah-SOHN ay ehn deh-SEHR" },
          { fr: "Mon frère regarde la montagne.", en: "My brother is looking at the mountain.", say: "mohn frehr ruh-gard lah mohn-TAH-nyuh" }
        ]
      }
    ],
    quiz: [
      { type: "listen", say: "poisson", options: ["poison", "poisson"], answer: 1, explain: "An s sound: [[poisson|pwah-SOHN]] (fish). [[poison|pwah-ZOHN]] has a z sound." },
      { type: "listen", say: "désert", options: ["désert", "dessert"], answer: 0, explain: "A z sound: [[désert|day-ZEHR]]. [[dessert|deh-SEHR]] has an s sound." },
      { type: "listen", say: "cousin", options: ["cousin", "coussin"], answer: 0, explain: "A z sound: [[cousin|koo-ZEHN]]. [[coussin|koo-SEHN]] (cushion) has an s sound." },
      { type: "mcq", q: "How do you say <b>fille</b> (girl, daughter)?", options: ["FEEL", "FEE-y", "FEE-luh"], answer: 1, explain: "-ille = <i>ee-y</i>: [[la fille|lah FEE-y]]." },
      { type: "mcq", q: "Which word does NOT follow the 'ill = y' rule?", options: ["famille", "fille", "ville"], answer: 2, explain: "[[la ville|lah VEEL]] is an exception, like [[mille]] and [[tranquille]]." },
      { type: "mcq", q: "In <b>le thé</b>, th sounds like…", options: ["s", "the th in 'think'", "t"], answer: 2, explain: "French has no English th sound: [[le thé|luh TAY]]." },
      { type: "mcq", q: "In <b>Espagne</b>, gn sounds like…", options: ["ny, as in 'canyon'", "g + n", "n"], answer: 0, explain: "[[l'Espagne|leh-SPAH-nyuh]], like [[la montagne]]." },
      { type: "fill", q: "To keep the s sound before a, o or u, write ___ (as in garçon).", answer: ["ç"], explain: "c + cédille = ç: [[ça]], [[garçon]], [[leçon]]." },
      { type: "order", words: ["Ma", "fille", "habite", "en", "Espagne."], en: "My daughter lives in Spain." },
      { type: "speak", fr: "Trois croissants, s'il vous plaît.", en: "Three croissants, please." }
    ]
  }
,
  {
    id: "p-rhythm",
    cat: "pronunciation",
    title: "Rhythm, stress & intonation",
    minutes: 14,
    summary: "Speak with an even French rhythm, stress the end of each word group, and use your voice to ask yes/no questions, make statements and read lists.",
    sections: [
      {
        h: "French has an even beat",
        p: "English is <b>stress-timed</b>: some syllables are strong and long, others are squashed (PHO-to-graph, pho-TO-gra-phy). French is <b>syllable-timed</b>: every syllable gets about the same time, like the even ticks of a clock: [[photographie|foh-toh-grah-FEE]]. Good news: many Indian speakers already give syllables more equal time than British or American speakers do. Use that!"
      },
      {
        h: "Don't stress the first syllable",
        table: {
          head: ["English habit", "French"],
          rows: [
            ["<b>PA</b>-ris", "[[Paris|pah-REE]]"],
            ["<b>CA</b>-na-da", "[[Canada|kah-nah-DAH]]"],
            ["<b>CHO</b>-co-late", "[[chocolat|shoh-koh-LAH]]"],
            ["im-<b>POR</b>-tant", "[[important|ehn-por-TAHN]]"],
            ["<b>RES</b>-tau-rant", "[[restaurant|rehs-toh-RAHN]]"],
            ["<b>TA</b>-xi", "[[taxi|tahk-SEE]]"]
          ]
        }
      },
      {
        h: "Stress goes on the last syllable of the group",
        p: "French doesn't stress single words: it stresses <b>groups of words</b>. The last syllable of each group is a little <b>longer</b> (not much louder). Watch the stress move: [[un café|ehn kah-FAY]] → [[un café au lait|ehn kah-fay oh LEH]]. Café loses its stress because it's no longer at the end of the group."
      },
      {
        h: "Build it up",
        examples: [
          { fr: "Je parle.", en: "I speak.", say: "zhuh PARL" },
          { fr: "Je parle français.", en: "I speak French.", say: "zhuh parl frahn-SEH" },
          { fr: "Je parle un peu français.", en: "I speak a little French.", say: "zhuh parl ehn puh frahn-SEH" },
          { fr: "J'habite en Inde.", en: "I live in India.", say: "zhah-bee-tahn-NEHND" },
          { fr: "J'habite en Inde avec ma famille.", en: "I live in India with my family. (two groups, two stresses)", say: "zhah-bee-tahn-NEHND, ah-vehk mah fah-MEE-y" }
        ]
      },
      {
        h: "Statements go down, yes/no questions go up",
        p: "In everyday French you can turn a statement into a yes/no question just by making your voice <b>rise</b> at the end ↗. Same words, different melody. A statement <b>falls</b> at the end ↘. Tap both sides and compare:"
      },
      {
        pairs: [
          ["Tu viens.", "Tu viens ?", "You're coming. ↘ / Are you coming? ↗"],
          ["Ça va.", "Ça va ?", "I'm fine. ↘ / How are you? ↗"],
          ["Vous parlez anglais.", "Vous parlez anglais ?", "You speak English. ↘ / Do you speak English? ↗"],
          ["C'est loin.", "C'est loin ?", "It's far. ↘ / Is it far? ↗"]
        ]
      },
      {
        tip: "Questions with a question word (où, comment, quand, qu'est-ce que…) usually <b>fall</b> ↘, like statements, because the question word already tells people it's a question: [[Où tu vas ?|oo tü VAH]] ↘, [[Comment tu t'appelles ?|koh-mahn tü tah-PEHL]] ↘, [[Qu'est-ce que tu fais ?|kes-kuh tü FEH]] ↘."
      },
      {
        h: "Lists: up, up, up… down",
        examples: [
          { fr: "Je voudrais du pain, du fromage et des tomates.", en: "I'd like some bread ↗, some cheese ↗ and some tomatoes ↘.", say: "zhuh voo-dreh dü PEHN, dü froh-MAHZH ay day toh-MAHT" },
          { fr: "Lundi, mardi, mercredi, jeudi, vendredi.", en: "Monday ↗, Tuesday ↗, Wednesday ↗, Thursday ↗, Friday ↘.", say: "lehn-DEE, mar-DEE, mehr-kruh-DEE, zhuh-DEE, vahn-druh-DEE" },
          { fr: "Je parle hindi, anglais et un peu français.", en: "I speak Hindi ↗, English ↗ and a little French ↘.", say: "zhuh parl een-DEE, ahn-GLEH ay ehn puh frahn-SEH" }
        ]
      },
      {
        h: "Use it: listen to the melody",
        dialogue: [
          ["Léa", "Salut, Rahul ! Ça va ?", "Hi Rahul! How are you?"],
          ["Rahul", "Ça va, merci. Et toi ?", "I'm fine, thanks. And you?"],
          ["Léa", "Très bien ! Tu viens au café ?", "Very well! Are you coming to the café?"],
          ["Rahul", "Oui ! Où est le café ?", "Yes! Where's the café?"],
          ["Léa", "Rue de Rivoli. Ce n'est pas loin.", "On Rue de Rivoli. It isn't far."]
        ]
      },
      {
        warn: "Don't add English-style stress: say [[important|ehn-por-TAHN]] with even syllables, not 'im-POR-tant'. And don't let your voice rise at the end of every sentence, or everything you say will sound like a question!"
      }
    ],
    quiz: [
      { type: "mcq", q: "In French, which syllable of a word group is stressed (a little longer)?", options: ["the first", "the last", "the second"], answer: 1, explain: "The last syllable of each group: [[je parle français|zhuh parl frahn-SEH]]." },
      { type: "mcq", q: "How do French people say <b>Paris</b>?", options: ["pah-REE: even beats, the last one a little longer", "PAH-ree: a strong first syllable", "pah-REES, with an s"], answer: 0, explain: "Even syllables, last one slightly longer, and a silent s: [[Paris|pah-REE]]." },
      { type: "listen", say: "Tu viens ?", options: ["a question ↗", "a statement ↘"], answer: 0, explain: "The voice went up at the end: it's a yes/no question." },
      { type: "listen", say: "Il parle anglais.", options: ["a question ↗", "a statement ↘"], answer: 1, explain: "The voice went down at the end: it's a statement." },
      { type: "listen", say: "Ça va ?", options: ["I'm fine.", "How are you?"], answer: 1, explain: "Rising voice = question: [[Ça va ?]] (How are you?). Falling voice = answer: [[Ça va.]] (I'm fine.)" },
      { type: "mcq", q: "<b>Où tu vas ?</b> At the end, the voice usually…", options: ["rises ↗", "falls ↘"], answer: 1, explain: "With a question word like [[où]], the voice usually falls." },
      { type: "mcq", q: "<b>Je voudrais du pain, du fromage et du vin.</b> Where does the voice fall?", options: ["on pain", "on fromage", "on vin, the last item"], answer: 2, explain: "Up on each item, down on the last one, so people know the list is finished." },
      { type: "fill", q: "To turn 'Tu viens.' into a yes/no question, make your voice go ___ at the end. (up / down)", answer: ["up"], explain: "[[Tu viens ?]] ↗ = Are you coming?" },
      { type: "order", words: ["Je", "parle", "un", "peu", "français."], en: "I speak a little French." },
      { type: "speak", fr: "J'habite en Inde avec ma famille.", en: "I live in India with my family." },
      { type: "speak", fr: "Vous parlez anglais ?", en: "Do you speak English?" }
    ]
  }

]);
