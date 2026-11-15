/* Writing tasks (DELF A1 "Production écrite" style, 40–50 words).
   The models use different speakers; the `note` explains how to adapt
   masculine/feminine forms to yourself. */
A1.writing = [
  {
    id: 'w-intro', title: 'Introduce yourself', minWords: 40,
    prompt: "Vous vous inscrivez dans un club de français. Présentez-vous : nom, âge, nationalité, ville, profession, langues et loisirs. (40 à 50 mots)",
    promptEn: "You're joining a French club. Introduce yourself: name, age, nationality, city, job, languages and hobbies. (40–50 words)",
    hints: ["Je m'appelle…", "J'ai … ans.", "Je suis indien / indienne.", "J'habite à…", "Je suis + job (no article)", "Je parle…", "J'aime…", "parce que…"],
    model: "Bonjour ! Je m'appelle Priya Nair. J'ai vingt-huit ans et je suis indienne. J'habite à Bangalore, en Inde. Je suis ingénieure dans une entreprise d'informatique. Je parle anglais, hindi, kannada et un peu français. J'aime la musique, le cricket et les voyages. J'apprends le français parce que je voudrais visiter Paris !",
    note: "Written by a woman. A man writes: indien, ingénieur.",
    checklist: ["I gave my name, age and nationality", "I said where I live and what I do", "I listed my languages and hobbies", "I used at least two linking words (et, mais, parce que)", "40–50 words", "Masculine/feminine checked (indien/indienne, ingénieur/ingénieure)"]
  },
  {
    id: 'w-family', title: 'Describe your family', minWords: 40,
    prompt: "Un ami français vous demande de parler de votre famille. Écrivez-lui un message : combien vous êtes, les prénoms, l'âge, la profession et les goûts de chacun. (40 à 50 mots)",
    promptEn: "A French friend asks about your family. Write a message: how many you are, first names, ages, jobs and what each person likes. (40–50 words)",
    hints: ["Dans ma famille, nous sommes…", "Mon père s'appelle…", "Ma mère est…", "J'ai un frère / une sœur.", "Il a … ans.", "Il adore…", "Et toi ?"],
    model: "Salut Lucas ! Dans ma famille, nous sommes cinq. Mon père s'appelle Ravi, il a soixante ans et il est médecin. Ma mère, Meena, est professeure. J'ai un frère et une sœur. Mon frère Arun a vingt-cinq ans, il adore le cricket. Ma sœur est étudiante. Et toi ? Bisous !",
    note: "Possessives agree with the person you talk about: mon père, ma mère, mes parents.",
    checklist: ["I started and ended like a message (Salut… / Bisous !)", "I used mon / ma / mes correctly", "I used avoir for age (il a … ans)", "Jobs without an article (il est médecin)", "I asked a question back", "40–50 words"]
  },
  {
    id: 'w-food', title: 'Your eating habits', minWords: 40,
    prompt: "Sur un forum, on parle des repas. Décrivez vos habitudes : le petit-déjeuner, le déjeuner, le dîner et votre plat préféré. (40 à 50 mots)",
    promptEn: "On a forum, people talk about meals. Describe your habits: breakfast, lunch, dinner and your favourite dish. (40–50 words)",
    hints: ["Le matin, je prends…", "À midi, je mange…", "Le soir, je dîne vers…", "Mon plat préféré, c'est…", "Je ne mange pas de…"],
    model: "Le matin, je prends un thé au lait et des biscuits. À midi, je mange au bureau : du riz, des légumes et du dal. Le soir, je dîne vers vingt heures avec ma famille. Mon plat préféré, c'est le dosa. Je ne mange pas de viande, je suis végétarien.",
    note: "Written by a man. A woman writes: végétarienne.",
    checklist: ["Partitive articles: du riz, de la salade, des légumes", "After a negative: pas de viande", "Times of the meals", "My favourite dish", "40–50 words"]
  },
  {
    id: 'w-city', title: 'Present your city', minWords: 40,
    prompt: "Vous écrivez à un ami français pour présenter votre ville : où elle est, ce qu'il y a, ce que vous aimez et le climat. Invitez votre ami. (40 à 50 mots)",
    promptEn: "Write to a French friend to present your city: where it is, what there is, what you like, the climate. Invite your friend. (40–50 words)",
    hints: ["J'habite à…, une grande / petite ville…", "Il y a beaucoup de…", "J'aime…", "Il fait chaud / froid…", "Il pleut…", "Tu veux venir ?"],
    model: "J'habite à Pune, une grande ville dans l'ouest de l'Inde. Il y a beaucoup d'universités, de parcs et de restaurants. J'aime le vieux quartier et les marchés. Il fait chaud en été, mais il pleut beaucoup pendant la mousson. Tu veux venir me voir ? Je t'invite !",
    note: "beaucoup de + noun, with no article: beaucoup de parcs, beaucoup d'universités.",
    checklist: ["Where the city is", "il y a + places", "beaucoup de / d' (no article after it)", "One sentence about the weather", "An invitation or a question", "40–50 words"]
  },
  {
    id: 'w-routine', title: 'Your daily routine', minWords: 40,
    prompt: "Décrivez une journée normale de travail ou d'études : à quelle heure vous vous levez, ce que vous faites le matin, l'après-midi et le soir. (40 à 50 mots)",
    promptEn: "Describe a normal working or study day: when you get up, what you do in the morning, afternoon and evening. (40–50 words)",
    hints: ["Je me lève à…", "Je me douche, je m'habille…", "Je pars au travail à…", "Je déjeune…", "Je rentre vers…", "Le soir, je…", "Je me couche à…"],
    model: "En semaine, je me lève à six heures et demie. Je me douche, je m'habille et je prends mon petit-déjeuner. Je pars au travail à huit heures en métro. Je déjeune à une heure avec mes collègues. Je rentre vers dix-neuf heures. Le soir, je regarde une série et je me couche à onze heures.",
    note: "Reflexive verbs keep their little pronoun: je me lève, je m'habille.",
    checklist: ["Reflexive verbs with me / m'", "Times with à (à huit heures)", "Sequence words (d'abord, ensuite, puis, le soir)", "At least 40 words"]
  },
  {
    id: 'w-weekend', title: 'Your last weekend', minWords: 40,
    prompt: "Racontez votre dernier week-end à un ami : où vous êtes allé(e), avec qui, ce que vous avez fait et si c'était bien. (40 à 50 mots)",
    promptEn: "Tell a friend about your last weekend: where you went, who with, what you did and whether it was good. (40–50 words)",
    hints: ["Samedi, je suis allé(e)…", "Nous avons vu / mangé…", "C'était super !", "Dimanche, je suis resté(e)…", "J'ai fait…", "Et toi, tu as fait quoi ?"],
    model: "Salut Emma ! Samedi, je suis allée au cinéma avec mes amis. Nous avons vu une comédie française, c'était super ! Après, nous avons mangé une pizza. Dimanche, je suis restée à la maison : j'ai fait le ménage et j'ai étudié le français. Et toi, tu as fait quoi ? Bisous !",
    note: "Written by a woman (allée, restée). A man writes: je suis allé, je suis resté.",
    checklist: ["Passé composé with avoir (j'ai fait, nous avons vu)", "Passé composé with être for movement (je suis allé / allée)", "c'était + adjective for your opinion", "A question for your friend", "40–50 words"]
  },
  {
    id: 'w-wishes', title: 'A holiday greeting card', minWords: 40,
    prompt: "C'est Noël ! Écrivez un message à un ami français : souhaitez-lui de bonnes fêtes, dites ce que vous faites pendant les vacances et proposez de vous appeler. (40 à 50 mots)",
    promptEn: "It's Christmas! Write to a French friend: wish them happy holidays, say what you're doing during the holidays and suggest a phone call. (40–50 words)",
    hints: ["Cher… / Chère…", "Joyeux Noël et bonne année !", "Ici, il fait…", "Pendant les vacances, je vais…", "On s'appelle… ?", "Je te souhaite de bonnes fêtes !", "Amitiés, / Bisous,"],
    model: "Cher Thomas, Joyeux Noël et bonne année ! Ici, à Mumbai, il fait chaud, ce n'est pas comme en France. Pendant les vacances, je vais rester avec ma famille et je vais étudier le français tous les jours. On s'appelle le premier janvier ? Je te souhaite de bonnes fêtes ! Amitiés, Ananya",
    note: "Cher for a man, Chère for a woman.",
    checklist: ["Greeting formula (Cher / Chère…)", "Wishes (Joyeux Noël, bonne année, bonnes fêtes)", "Near future: je vais + infinitive", "A proposal or question", "Closing formula (Amitiés, Bisous…)", "40–50 words"]
  },
  {
    id: 'w-postcard', title: 'A holiday postcard', minWords: 40,
    prompt: "Vous êtes en vacances. Écrivez une carte postale à un ami : où vous êtes, avec qui, le temps qu'il fait, ce que vous avez fait et ce que vous allez faire. (40 à 50 mots)",
    promptEn: "You're on holiday. Write a postcard to a friend: where you are, who with, the weather, what you did and what you're going to do. (40–50 words)",
    hints: ["Je suis à… avec…", "Il fait beau / Il pleut…", "Hier, nous avons visité…", "Demain, nous allons…", "À bientôt !"],
    model: "Salut Hugo ! Je suis à Nice avec ma sœur. Il fait beau et il fait vingt degrés ! Hier, nous avons visité la vieille ville et nous avons mangé une socca. Demain, nous allons prendre le train pour Monaco. La mer est magnifique ! À bientôt, Rahul",
    note: "Three times in one card: present (je suis), past (nous avons visité), near future (nous allons prendre).",
    checklist: ["Present for now", "Passé composé for yesterday", "aller + infinitive for tomorrow", "Weather sentence", "40–50 words"]
  },
  {
    id: 'w-job', title: 'Introduce yourself to a new team', minWords: 40,
    prompt: "Vous commencez un stage dans une entreprise française. Écrivez un e-mail à votre nouvelle équipe : présentez-vous, votre travail ou vos études, depuis quand vous apprenez le français et vos loisirs. (40 à 50 mots)",
    promptEn: "You're starting an internship in a French company. Email your new team: introduce yourself, your job or studies, how long you've been learning French and your hobbies. (40–50 words)",
    hints: ["Bonjour à tous,", "Je m'appelle… et je suis…", "Je viens de…", "Je travaille dans… depuis…", "J'apprends le français depuis…", "Le week-end, je…", "Cordialement,"],
    model: "Bonjour à tous, Je m'appelle Karan et je suis développeur. Je viens de Delhi et je travaille dans l'informatique depuis cinq ans. J'apprends le français depuis six semaines, alors parlez lentement, s'il vous plaît ! Le week-end, je fais du vélo et je cuisine. À lundi ! Cordialement, Karan Mehta",
    note: "depuis + present tense: J'apprends le français depuis six semaines (= I have been learning…).",
    checklist: ["Formal email opening and closing", "Job without article (je suis développeur / développeuse)", "depuis + present", "One polite request", "40–50 words"]
  }
];

/* CEFR A1 "can-do" self-assessment (based on the Council of Europe A1 descriptors).
   Rate each one in the Progress page: 0 = not yet, 1 = with help, 2 = yes, easily. */
A1.cando = [
  { id: 'l1', skill: 'Listening', text: 'I can understand numbers, prices, dates and times when people speak slowly.' },
  { id: 'l2', skill: 'Listening', text: 'I can understand simple questions about me (name, age, where I live, my job).' },
  { id: 'l3', skill: 'Listening', text: 'I can follow short, simple directions (go straight on, turn left…).' },
  { id: 'l4', skill: 'Listening', text: 'I can get the key information from a short announcement or phone message.' },
  { id: 'l5', skill: 'Listening', text: 'I can understand everyday words about family, shopping, food and the city.' },
  { id: 'r1', skill: 'Reading', text: 'I can understand familiar names, words and very simple sentences on signs and posters.' },
  { id: 'r2', skill: 'Reading', text: 'I can understand a short simple message, text, email or postcard.' },
  { id: 'r3', skill: 'Reading', text: 'I can find information in simple documents: a menu, a timetable, an ad, a programme.' },
  { id: 'r4', skill: 'Reading', text: 'I can follow short written instructions (Complétez, Cochez la bonne réponse…).' },
  { id: 's1', skill: 'Speaking', text: 'I can greet people, say goodbye and use basic polite phrases.' },
  { id: 's2', skill: 'Speaking', text: 'I can introduce myself and someone else.' },
  { id: 's3', skill: 'Speaking', text: 'I can ask and answer simple questions about personal details.' },
  { id: 's4', skill: 'Speaking', text: 'I can buy things in a shop or order in a café: ask for something, the price, pay.' },
  { id: 's5', skill: 'Speaking', text: 'I can ask the way and understand / give simple directions.' },
  { id: 's6', skill: 'Speaking', text: 'I can invite someone, accept or refuse politely, and agree a time and place.' },
  { id: 's7', skill: 'Speaking', text: 'I can talk briefly about my family, my home, my daily routine and what I like.' },
  { id: 's8', skill: 'Speaking', text: 'I can say what I did last weekend and what I am going to do next weekend.' },
  { id: 'w1', skill: 'Writing', text: 'I can fill in a form with my personal details (name, nationality, address…).' },
  { id: 'w2', skill: 'Writing', text: 'I can write a short simple message, postcard or email (40–50 words).' },
  { id: 'w3', skill: 'Writing', text: 'I can write simple sentences about myself and other people, with connectors (et, mais, parce que).' },
  { id: 'g1', skill: 'Language', text: 'I can conjugate être, avoir, aller, faire and regular -er verbs in the present.' },
  { id: 'g2', skill: 'Language', text: 'I know the gender of common nouns and use le/la/un/une/du/de la correctly most of the time.' },
  { id: 'g3', skill: 'Language', text: 'I can make negative sentences and ask questions in three ways.' },
  { id: 'g4', skill: 'Language', text: 'I can pronounce French well enough to be understood (nasals, u/ou, silent letters, liaison).' }
];
