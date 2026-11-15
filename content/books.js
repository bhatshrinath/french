/* Your A1 books (the PDFs in the local A1/ folder — they are NOT published,
   see .gitignore). `offset` converts a printed page number to a PDF page:
   pdfPage = printedPage + offset. Links work when you open index.html from
   this folder on your computer (file://). */
A1.books = [
  {
    id: 'cosmo', short: 'Cosmopolite 1', title: 'Cosmopolite 1 (A1) — Hachette FLE',
    file: 'A1/Cosmopolite A1.pdf', offset: 1, icon: '📗',
    role: 'Main coursebook. Each lesson is a 2-page spread with documents, audio and exercises — use it for reading and extra practice on the day the plan says.',
    // Dossier start pages (PDF). Lessons: D0 = start + 2(n-1); D1–D8 = start + 2 + 2(n-1)
    dossiers: [
      { n: 0, pdf: 11, title: 'Nous découvrons le français', lessons: [
        ['Bienvenue !', 's\'appeler, pronoms sujets, se présenter'],
        ['Le français de A à Z', 'l\'alphabet, épeler, les accents'],
        ['Le monde en français', 'les nombres, les noms de pays, l\'article défini'],
        ['La classe et nous', 'jours, mois, saisons, communiquer en classe']] },
      { n: 1, pdf: 19, title: 'Nous apprenons le français pour…', lessons: [
        ['Bonjour !', 'tu ou vous, articles indéfinis, saluer'],
        ['Ça se passe où ?', 'mots interrogatifs, politesse, nombres (2)'],
        ['Ils sont francophones', 'être, nationalités, professions'],
        ['Portraits', 'parler, s\'appeler, c\'est / il est'],
        ['En classe', 'quel(s)/quelle(s), avoir, adjectifs possessifs'],
        ['Je parle français pour…', 'parce que, pour, la ponctuation']] },
      { n: 2, pdf: 37, title: 'Nous faisons connaissance', lessons: [
        ['Aller voir ailleurs', 'prépositions + pays et villes'],
        ['Balade audioguidée', 'articles, prépositions de lieu, article contracté'],
        ['Week-end à Aoste', 'au, à la, aux, aller, prendre, transports'],
        ['Parle avec moi', 'la négation, habiter, faire connaissance'],
        ['Nous couchsurfons', 'adjectifs démonstratifs, venir, l\'hébergement'],
        ['En route !', 'poser des questions, l\'hébergement']] },
      { n: 3, pdf: 55, title: 'Nous parlons la même langue', lessons: [
        ['En famille', 'adjectifs possessifs, la famille'],
        ['Concours de selfies', 'masculin/féminin/pluriel des adjectifs, description'],
        ['La France et nous', 'aimer, adorer, détester + nom/verbe'],
        ['Vive le speak dating !', 'verbes en -er (synthèse), professions'],
        ['Quartier libre', 'faire du/de la, pronoms toniques, activités'],
        ['Vous avez mal où ?', 'avoir mal à, les parties du corps']] },
      { n: 4, pdf: 73, title: 'Nous parlons de notre quotidien', lessons: [
        ['Une journée sur Terre', 'l\'heure, les horaires'],
        ['Une journée « écolo »', 'verbes pronominaux, habitudes'],
        ['Une journée avec…', 'lire, écrire, habitude et fréquence'],
        ['Une journée en Pologne', 'on, pouvoir, devoir, vouloir'],
        ['Sortir « à la française »', 'choisir, sortir, les sorties'],
        ['Soyez les bienvenus !', 'l\'impératif, inviter, accepter, refuser']] },
      { n: 5, pdf: 91, title: 'Nous nous informons en français', lessons: [
        ['Apprendre autrement', 'le passé composé (1)'],
        ['Jeunes talents', 'passé récent, futur proche, dire'],
        ['Écrivains francophones', 'le passé composé (2), marqueurs temporels'],
        ['Un livre, un jour', 'être + adjectif, avoir + nom + adjectif, description'],
        ['Il a choisi la France', 'passé composé / présent, mais'],
        ['Informons-nous !', 'l\'impératif (2), donner des conseils']] },
      { n: 6, pdf: 109, title: 'Nous rêvons d\'aller dans un pays francophone', lessons: [
        ['100 % photo', 'futur simple (later), il faut, le voyage'],
        ['Voyager autrement', 'le pronom y, situer un lieu'],
        ['Tour de France', 'place des adjectifs (1), les couleurs'],
        ['Séjour au Maroc', 'verbes en -ir, place des adjectifs (2), le logement'],
        ['Quand partir ?', 'la météo, le climat, les saisons'],
        ['Carnets de voyages', 'émotions et sensations']] },
      { n: 7, pdf: 127, title: 'Nous allons vivre « à la française »', lessons: [
        ['Manger français à Bogotá', 'articles indéfinis et partitifs, l\'alimentation'],
        ['La France à Budapest', 'quantités, le pronom en, faire des courses'],
        ['Les Français et les livres', 'comparer'],
        ['Retour aux sources', 'l\'imparfait, la gastronomie'],
        ['S\'habiller « à la française »', 'les vêtements, payer, acheter'],
        ['Petits coins de France', 'appréciation positive/négative']] },
      { n: 8, pdf: 145, title: 'Nous organisons une soirée française', lessons: [
        ['Histoires d\'étudiants', 'imparfait, passé composé et présent'],
        ['Un dîner en ville', 'au restaurant, commander'],
        ['Soirée déguisée', 'pronoms COD (le, la, les), vêtements'],
        ['Chez l\'habitant', 'pronoms relatifs qui et que'],
        ['Un peu de culture ?', 'donner des conseils (synthèse), films'],
        ['Une soirée originale', 'pronoms COI (lui, leur) — later']] }
    ],
    extras: [
      ['S\'exercer & Expressions utiles (extra exercises for every dossier)', 162],
      ['DELF A1 — complete practice exam', 194],
      ['Précis de phonétique (sound exercises)', 201],
      ['Précis de grammaire (grammar summary)', 207],
      ['Précis de conjugaison (verb tables)', 217]
    ]
  },
  {
    id: 'alf0', short: 'Apprenons le français 0', title: 'Apprenons le français 0 — Mahitha Ranjit',
    file: 'A1/ALF-0 (TB).pdf', offset: -2, icon: '📘',
    role: 'A very gentle starter book with English instructions. Great as warm-up reading in weeks 1–2.',
    chapters: [
      ['Leçon 0 — Bienvenue en France', 8, 'France and its culture'],
      ['Leçon 1 — Didou apprend le français', 17, 'greetings, alphabet, spelling'],
      ['Leçon 2 — Didou sait compter', 31, 'numbers 1–20'],
      ['Leçon 3 — Didou à l\'école', 38, 'je, tu/vous, il/elle: introductions'],
      ['Leçon 4 — Vous êtes français ?', 47, 'nationalities, adjectives, être'],
      ['Leçon 5 — Didou a un crayon et une règle', 55, 'un/une/des, avoir, classroom'],
      ['Leçon 6 — La famille d\'Éric', 62, 'family, le/la/l\'/les, numbers 21–50'],
      ['Leçon 7 — Vous aimez les fruits et les légumes ?', 72, 'likes & dislikes, -er verbs'],
      ['Leçon 8 — Didou aime les couleurs', 79, 'colours'],
      ['Leçon 9 — Aujourd\'hui c\'est dimanche !', 87, 'days of the week'],
      ['Leçon 10 — L\'anniversaire d\'Éric', 94, 'months of the year']
    ]
  },
  {
    id: 'alf1', short: 'Apprenons le français 1', title: 'Apprenons le français 1',
    file: 'A1/Alf 1.pdf', offset: -4, icon: '📘',
    role: 'Short, clear lessons with English help. Good revision of the basics in weeks 1–3.',
    chapters: [
      ['Leçon 0 — Vous connaissez la France ?', 8, 'French culture'],
      ['Leçon 1 — Les salutations', 14, 'greeting, introducing yourself, politeness'],
      ['Leçon 2 — Comptons ensemble', 25, 'alphabet, numbers 1–20'],
      ['Leçon 3 — Les copains', 37, 'être, un/une/des, subject pronouns, plurals'],
      ['Leçon 4 — Devinez', 47, 'professions, numbers'],
      ['Leçon 5 — Dans la classe', 57, 'avoir, adjectives, describing people'],
      ['Leçon 6 — Les amis de Caroline', 65, 'nationalities, le/la/les, masculine/feminine'],
      ['Leçon 7 — Quel jour sommes-nous ?', 73, 'aller, days of the week'],
      ['Leçon 8 — La famille de Manuel', 79, 'parler, habiter, aimer, family'],
      ['Leçon 9 — Les vacances', 86, 'revision of verbs, months'],
      ['Leçon 10 — Le drapeau de mon pays', 92, 'colours: feminine & plural'],
      ['Lexique (word list)', 110, '']
    ]
  },
  {
    id: 'cfa', short: 'Complete French All-in-One', title: 'Practice Makes Perfect: Complete French All-in-One (McGraw-Hill)',
    file: 'A1/Complete French All-in-One .pdf', offset: 11, icon: '📕',
    role: 'Grammar reference with lots of exercises and an answer key. Only the chapters below are A1 — the rest is for later.',
    chapters: [
      ['Ch. 1 — Articles', 1, 'le/la/les, un/une/des, partitive'],
      ['Ch. 2 — Basic gender endings', 13, 'masculine & feminine nouns'],
      ['Ch. 4 — Numbers', 78, 'cardinal & ordinal numbers'],
      ['Ch. 7 — Asking questions', 129, 'est-ce que, inversion, question words'],
      ['Ch. 8 — Exclamations and commands', 149, 'quel !, the imperative'],
      ['Ch. 10 — The present tense of -er verbs', 174, ''],
      ['Ch. 11 — The present of -ir and -re verbs', 186, ''],
      ['Ch. 12 — Être, avoir and other irregular verbs', 197, ''],
      ['Ch. 13 — Immediate future & immediate past', 211, 'aller + inf., venir de + inf.'],
      ['Ch. 14 — Pronominal verbs', 221, 'se lever, s\'appeler…'],
      ['Ch. 15 — The passé composé', 227, ''],
      ['Ch. 16 — The imparfait', 237, 'first part only'],
      ['Ch. 21 — Prepositions', 285, 'places, countries, time'],
      ['Ch. 23 — The imperative mood', 328, ''],
      ['Ch. 26 — Pronouns', 361, 'stressed & object pronouns (first part)'],
      ['Ch. 27 — Relative pronouns', 384, 'qui, que (first part)'],
      ['Ch. 28 — Adjectives', 394, 'agreement & position'],
      ['Ch. 33 — French in conversation: meeting people', 478, ''],
      ['Ch. 34 — Making conversation and making plans', 491, ''],
      ['Appendix A — French pronunciation', 553, ''],
      ['Appendix C — French verb tables', 561, ''],
      ['Answer key', 611, '']
    ]
  },
  {
    id: 'lib', short: 'Liberté', title: 'Liberté — Gretchen Angelo (CC BY-NC-SA)',
    file: 'A1/Liberte_Aug2014_Student_withcover.pdf', offset: 0, icon: '📙',
    role: 'First-year college textbook with detailed grammar explanations in English (section B of each chapter). Chapters 1–8 cover A1.',
    chapters: [
      ['Ch. 1 — Bonjour ! Ça va ?', 11, 'greetings, alphabet, être, articles, numbers, adjectives (grammar p. 34)'],
      ['Ch. 2 — Ma famille et mes objets personnels', 71, 'family, possessives, avoir, il y a, negation, age (grammar p. 99)'],
      ['Ch. 3 — Le travail et les loisirs', 139, 'time, -er verbs, questions, quel (grammar p. 165)'],
      ['Ch. 4 — Sorties et voyages', 197, 'à/de + article, aller, -ir verbs, faire, weather (grammar p. 218)'],
      ['Ch. 5 — Tant de choses à faire !', 247, '-re verbs, vouloir/pouvoir/devoir, passé composé (grammar p. 269)'],
      ['Ch. 6 — Les voyages de ma famille', 291, 'venir, countries, passé composé with être, dates (grammar p. 309)'],
      ['Ch. 7 — Mon corps', 347, 'body, clothes, reflexive verbs, object pronouns (grammar p. 371)'],
      ['Ch. 8 — À table !', 401, 'food, partitive, negatives, prendre/boire, imperative (grammar p. 415)']
    ]
  },
  {
    id: 'pron', short: 'French pronunciation guide', title: 'Introduction to French Pronunciation — Y. Petitclerc-Evans',
    file: 'A1/French_pronunciation.pdf', offset: 0, icon: '🔊',
    role: 'A 16-page overview of all 37 French sounds with IPA. Read it alongside the pronunciation lessons.',
    chapters: [
      ['Speech sounds & the IPA', 2, ''],
      ['Vowels', 3, ''],
      ['Semi-vowels & nasal vowels', 4, ''],
      ['Consonants', 5, '']
    ]
  }
];

/* "Read more" references shown on each in-app lesson: [bookId, printedPage, label] */
A1.bookRefs = {
  'p-alphabet': [['cosmo', 12, 'Dossier 0 · Leçon 2'], ['lib', 34, 'Alphabet & pronunciation'], ['alf1', 25, 'Leçon 2'], ['pron', 2, 'Speech sounds']],
  'p-accents': [['lib', 34, 'Alphabet & accents'], ['pron', 3, 'Vowels']],
  'p-vowels': [['pron', 3, 'Vowels'], ['cfa', 553, 'Appendix A']],
  'p-nasals': [['pron', 4, 'Nasal vowels']],
  'p-silent': [['lib', 34, 'Pronunciation'], ['cfa', 553, 'Appendix A']],
  'p-liaison': [['cfa', 553, 'Appendix A']],
  'p-consonants': [['pron', 5, 'Consonants']],
  'g-pronouns': [['lib', 38, 'Subject pronouns, tu vs vous'], ['alf1', 37, 'Leçon 3']],
  'g-etre': [['lib', 42, 'The verb être'], ['cfa', 197, 'Ch. 12'], ['alf0', 47, 'Leçon 4']],
  'g-articles': [['lib', 45, 'Articles and gender'], ['cfa', 1, 'Ch. 1 Articles'], ['cfa', 13, 'Ch. 2 Gender endings']],
  'g-plural': [['alf1', 37, 'Leçon 3 (plurals)'], ['cfa', 13, 'Ch. 2']],
  'g-avoir': [['lib', 111, 'The verb avoir'], ['lib', 118, 'Age'], ['lib', 120, 'Expressions with avoir'], ['alf1', 57, 'Leçon 5']],
  'g-er-verbs': [['lib', 169, 'Regular verbs in the present'], ['cfa', 174, 'Ch. 10'], ['alf1', 79, 'Leçon 8']],
  'g-negation': [['lib', 116, 'Simple negation'], ['lib', 419, 'Negatives']],
  'g-questions': [['lib', 55, 'Questions'], ['lib', 177, 'Yes/no questions'], ['lib', 279, 'Information questions'], ['cfa', 129, 'Ch. 7']],
  'g-quel': [['lib', 180, 'Quel'], ['lib', 281, 'Quel & que']],
  'g-adjectives': [['lib', 51, 'Gender of adjectives'], ['lib', 377, 'Placement of adjectives'], ['cfa', 394, 'Ch. 28']],
  'g-possessives': [['lib', 105, 'Possessive adjectives'], ['cosmo', 56, 'Dossier 3 · Leçon 1']],
  'g-aller': [['lib', 218, 'à and de + article'], ['lib', 219, 'The verb aller'], ['alf1', 73, 'Leçon 7']],
  'g-countries': [['lib', 311, 'Prepositions with place names'], ['cfa', 285, 'Ch. 21']],
  'g-faire': [['lib', 225, 'The verb faire'], ['lib', 226, 'Faire and weather']],
  'g-partitive': [['lib', 415, 'The partitive article'], ['cfa', 1, 'Ch. 1 (partitive)']],
  'g-vouloir-prendre': [['lib', 423, 'Prendre and boire'], ['lib', 271, 'Vouloir, pouvoir, devoir']],
  'g-demonstratives': [['lib', 458, 'Demonstratives']],
  'g-ir-re': [['lib', 223, '-ir verbs'], ['lib', 269, '-re verbs'], ['cfa', 186, 'Ch. 11']],
  'g-irregular': [['cfa', 197, 'Ch. 12'], ['lib', 309, 'Venir'], ['lib', 382, 'Sortir & mettre'], ['lib', 541, 'Savoir & connaître']],
  'g-prepositions-place': [['lib', 101, 'Prepositions of location'], ['cfa', 285, 'Ch. 21']],
  'g-stressed': [['cfa', 361, 'Ch. 26 Pronouns']],
  'g-reflexive': [['lib', 385, 'Reflexive verbs'], ['cfa', 221, 'Ch. 14']],
  'g-modals': [['lib', 271, 'Vouloir, pouvoir, devoir']],
  'g-futur-proche': [['lib', 450, 'Futur proche'], ['cfa', 211, 'Ch. 13']],
  'g-pc-avoir': [['lib', 273, 'Le passé composé'], ['cfa', 227, 'Ch. 15']],
  'g-pc-etre': [['lib', 313, 'Passé composé with être'], ['lib', 390, 'Reflexive verbs in the passé composé'], ['cfa', 227, 'Ch. 15']],
  'g-imperative': [['lib', 44, 'Commands'], ['lib', 425, 'Imperatives'], ['cfa', 328, 'Ch. 23']],
  'g-cod': [['lib', 371, 'Direct object pronouns'], ['cfa', 361, 'Ch. 26']],
  'g-comparatives': [['lib', 321, 'Comparatives'], ['cosmo', 132, 'Dossier 7 · Leçon 3']],
  'g-imparfait': [['lib', 455, 'L\'imparfait'], ['cfa', 237, 'Ch. 16']],
  'g-qui-que': [['cfa', 384, 'Ch. 27'], ['cosmo', 152, 'Dossier 8 · Leçon 4']],
  'g-y-en': [['lib', 565, 'The pronoun y'], ['lib', 567, 'The pronoun en']],
  'f-greetings': [['alf1', 14, 'Leçon 1'], ['alf0', 17, 'Leçon 1'], ['lib', 12, 'Bonjour !'], ['cfa', 478, 'Ch. 33 Meeting people']],
  'f-classroom': [['lib', 19, 'Le cours de français']],
  'f-numbers': [['lib', 49, 'Numbers'], ['cfa', 78, 'Ch. 4'], ['alf0', 31, 'Leçon 2']],
  'f-time': [['lib', 165, 'Telling time'], ['cosmo', 74, 'Dossier 4 · Leçon 1']],
  'f-dates': [['lib', 319, 'Dates'], ['alf0', 87, 'Leçon 9'], ['alf0', 94, 'Leçon 10'], ['alf1', 86, 'Leçon 9']],
  'f-family': [['lib', 77, 'Ma famille'], ['alf0', 62, 'Leçon 6'], ['alf1', 79, 'Leçon 8']],
  'f-describing': [['lib', 24, 'Descriptions'], ['cosmo', 58, 'Dossier 3 · Leçon 2']],
  'f-home': [['lib', 85, 'Ma maison']],
  'f-city': [['lib', 198, 'En ville'], ['lib', 203, 'Directions']],
  'f-work': [['lib', 152, 'Le travail'], ['alf1', 47, 'Leçon 4']],
  'f-food': [['lib', 402, 'La nourriture']],
  'f-restaurant': [['lib', 410, 'Au restaurant']],
  'f-shopping': [['alf1', 92, 'Leçon 10 (colours)'], ['alf0', 79, 'Leçon 8 (colours)']],
  'f-weather': [['lib', 206, 'Les saisons et le climat']],
  'f-hobbies': [['lib', 155, 'Les loisirs'], ['alf0', 72, 'Leçon 7']],
  'f-routine': [['lib', 356, 'Ma journée']],
  'f-health': [['lib', 348, 'Mon corps'], ['lib', 359, 'Ma santé']],
  'f-travel': [['lib', 210, 'Les voyages']],
  'f-invitations': [['cfa', 491, 'Ch. 34 Making plans']],
  'c-france': [['alf1', 8, 'Leçon 0'], ['alf0', 8, 'Leçon 0']]
};
