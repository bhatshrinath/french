/* Grammar, part 2: core A1 verbs and structures.
   aller + à, cities & countries, faire, partitive & quantities, ordering politely,
   demonstratives, -ir / -re verbs, key irregular verbs, prepositions of place,
   stressed pronouns, reflexive verbs, vouloir / pouvoir / devoir. */
A1.addLessons([

  /* ------------------------------------------------------------------ */
  {
    id: "g-aller",
    cat: "grammar",
    title: "Aller (to go) + à: au, à la, à l', aux",
    minutes: 15,
    summary: "Say where you're going in town (au cinéma, à la banque, chez le médecin), ask people how they are with aller, and get moving with On y va !",
    sections: [
      {
        h: "Why aller matters",
        p: "[[aller|ah-LAY]] means <b>to go</b>. It's one of the most useful verbs in French, and one of the most irregular: its forms look nothing like the infinitive, so learn them by heart. You'll use it to say where you're going ([[Je vais à la banque.]]), to ask how someone is (French people literally ask 'How are you going?': [[Comment allez-vous ?]]) and, a bit later in the course, to talk about the future."
      },
      {
        h: "The present tense of aller",
        conj: { verb: "aller", en: "to go", rows: [
          ["je vais", "I go / I'm going", "zhuh VEH"],
          ["tu vas", "you go (a friend, a child)", "tü VAH"],
          ["il / elle / on va", "he / she goes; we go (on = casual 'we')", "eel / ehl / ohn VAH"],
          ["nous allons", "we go", "noo zah-LOHN"],
          ["vous allez", "you go (polite, or more than one person)", "voo zah-LAY"],
          ["ils / elles vont", "they go", "eel / ehl VOHN"]
        ] }
      },
      {
        tip: "In [[nous allons|noo zah-LOHN]] and [[vous allez|voo zah-LAY]], the silent <b>s</b> of nous / vous wakes up as a <b>z</b> sound, because the next word starts with a vowel. This linking is called a <i>liaison</i>. And notice [[ils vont]]: it rhymes with [[ils sont]] (they are) and [[ils ont]] (they have)."
      },
      {
        h: "à + the = au, à la, à l', aux",
        table: { head: ["à + …", "becomes", "Examples"], rows: [
          ["à + le (masculine)", "<b>au</b>", "[[au cinéma]], [[au travail]], [[au marché]]"],
          ["à + la (feminine)", "<b>à la</b> (no change)", "[[à la banque]], [[à la gare]], [[à la piscine]]"],
          ["à + l' (before a vowel or silent h)", "<b>à l'</b> (no change)", "[[à l'hôpital]], [[à l'école]], [[à l'hôtel]]"],
          ["à + les (plural)", "<b>aux</b>", "[[aux toilettes]], [[aux magasins]]"]
        ] }
      },
      {
        h: "Going places in town",
        examples: [
          { fr: "Je vais au cinéma ce soir.", en: "I'm going to the cinema tonight.", say: "zhuh veh oh see-nay-MAH suh SWAHR" },
          { fr: "Tu vas à la banque ?", en: "Are you going to the bank?", say: "tü vah ah lah BAHNK" },
          { fr: "Elle va à l'hôpital.", en: "She's going to the hospital.", say: "ehl vah ah loh-pee-TAHL" },
          { fr: "Les enfants vont à l'école.", en: "The children go to school.", say: "lay zahn-FAHN vohn ah lay-KOHL" },
          { fr: "Nous allons au travail en métro.", en: "We go to work by metro.", say: "noo zah-lohn oh trah-VAH-y ahn may-TROH" },
          { fr: "Excusez-moi, je vais aux toilettes.", en: "Excuse me, I'm going to the toilet.", say: "ehk-skü-zay MWAH, zhuh veh oh twah-LEHT" }
        ]
      },
      {
        h: "chez + a person (at / to someone's place)",
        examples: [
          { fr: "Je vais chez le médecin.", en: "I'm going to the doctor's.", say: "zhuh veh shay luh mayd-SEHN" },
          { fr: "Ce soir, on mange chez Paul.", en: "Tonight we're eating at Paul's.", say: "suh SWAHR, ohn mahnzh shay POHL" },
          { fr: "Tu vas chez tes parents ce week-end ?", en: "Are you going to your parents' place this weekend?" },
          { fr: "Je rentre chez moi.", en: "I'm going home.", say: "zhuh rahn-truh shay MWAH" }
        ]
      },
      {
        warn: "French never says <s>à le</s> or <s>à les</s>: <s>Je vais à le cinéma</s> → [[Je vais au cinéma.]]<br>Use [[à]] for a <b>place</b> and [[chez]] for a <b>person</b>: [[Je vais à la boulangerie.]] = [[Je vais chez le boulanger.]] (I'm going to the bakery / to the baker's). So: <s>Je vais au médecin</s> → [[Je vais chez le médecin.]]"
      },
      {
        h: "Aller for 'How are you?'",
        examples: [
          { fr: "Comment allez-vous ?", en: "How are you? (polite)", say: "koh-mahn tah-lay VOO" },
          { fr: "Je vais bien, merci. Et vous ?", en: "I'm fine, thank you. And you?", say: "zhuh veh BYEHN, mehr-SEE. ay VOO" },
          { fr: "Comment vas-tu ?", en: "How are you? (friendly)", say: "koh-mahn vah TÜ" },
          { fr: "Ça va ? — Ça va bien, et toi ?", en: "How's it going? — Fine, and you?", say: "sah VAH? sah vah BYEHN, ay TWAH" },
          { fr: "Ça ne va pas très bien aujourd'hui.", en: "I'm not doing very well today." }
        ]
      },
      {
        note: "[[On y va !|oh-nee VAH]] = <b>Let's go!</b> Learn it as one block (the little [[y]] means 'there'). You'll hear it everywhere: leaving a café, starting a game, getting on the metro. And [[Allez !|ah-LAY]] on its own means <b>Come on!</b>, perfect for cheering at a cricket match."
      },
      {
        h: "Use it",
        dialogue: [
          ["Léa", "Salut Arjun ! Ça va ?", "Hi Arjun! How's it going?"],
          ["Arjun", "Ça va bien, merci. Et toi ?", "Fine, thanks. And you?"],
          ["Léa", "Très bien ! Tu vas où ?", "Very well! Where are you going?"],
          ["Arjun", "Je vais au cinéma avec Neha. Et toi ?", "I'm going to the cinema with Neha. And you?"],
          ["Léa", "Moi, je vais à la banque, et après, chez le médecin.", "I'm going to the bank, and after that, to the doctor's."],
          ["Neha", "Arjun ! Le film est à sept heures. On y va ?", "Arjun! The film is at seven. Shall we go?"],
          ["Arjun", "On y va ! Au revoir, Léa !", "Let's go! Bye, Léa!"],
          ["Léa", "Au revoir ! Bon film !", "Bye! Enjoy the film!"]
        ]
      }
    ],
    quiz: [
      { type: "mcq", q: "Nous ___ au marché.", options: ["vont", "allons", "allez"], answer: 1, explain: "[[nous allons]]. [[vont]] goes with ils / elles, [[allez]] with vous." },
      { type: "mcq", q: "Je vais ___ cinéma.", options: ["à le", "à la", "au"], answer: 2, explain: "[[le cinéma]] is masculine, and à + le always becomes [[au]]." },
      { type: "fill", q: "Elle va ___ banque. (to the)", answer: ["à la"], explain: "[[la banque]] is feminine, and à la doesn't change: [[Elle va à la banque.]]" },
      { type: "fill", q: "Ils ___ (aller) à l'école.", answer: ["vont"], explain: "[[ils vont]], which rhymes with [[ils sont]] and [[ils ont]]." },
      { type: "mcq", q: "How do you say 'I'm going to the doctor's'?", options: ["Je vais chez le médecin.", "Je vais au médecin.", "Je vais à le médecin."], answer: 0, explain: "For a person, even a doctor, use [[chez]]." },
      { type: "listen", say: "Vous allez à l'hôpital ?", options: ["Are we going to the hospital?", "Are you going to the hotel?", "Are you going to the hospital?"], answer: 2, explain: "[[vous allez]] = you go; [[l'hôpital]] = the hospital ([[l'hôtel]] = the hotel)." },
      { type: "fill", q: "Je vais ___ toilettes.", answer: ["aux"], explain: "[[les toilettes]] is plural: à + les = [[aux]]." },
      { type: "listen", say: "Comment allez-vous ?", options: ["Where are you going?", "How are you?", "Are you going?"], answer: 1, explain: "French asks how you 'go': [[Comment allez-vous ?]] = How are you?" },
      { type: "mcq", q: "A friend asks [[Ça va ?]] What's a good answer?", options: ["Ça va bien, merci. Et toi ?", "Je vais au cinéma.", "Je vais à la banque."], answer: 0 },
      { type: "order", words: ["Je", "vais", "chez", "mes", "parents."], en: "I'm going to my parents' place." },
      { type: "speak", fr: "Ce soir, je vais au cinéma avec Paul.", en: "Tonight I'm going to the cinema with Paul." }
    ]
  },

  /* ------------------------------------------------------------------ */
  {
    id: "g-countries",
    cat: "grammar",
    title: "Cities & countries: à Paris, en France, au Japon",
    minutes: 18,
    summary: "Say where you live, where you're going and where you come from (à Mumbai, en Inde, au Japon, aux États-Unis), and link it to your nationality.",
    sections: [
      {
        h: "One little word for 'in' and 'to'",
        p: "In English you say <i>in</i> or <i>to</i>: <i>I live in India, I'm going to Japan</i>. French uses the <b>same</b> little word for both: [[J'habite en Inde.]] (I live in India) / [[Je vais en Inde.]] (I'm going to India). But it chooses between [[à]], [[en]], [[au]] and [[aux]], and that depends on two things: is it a <b>city</b> or a <b>country</b>? And if it's a country, is it masculine, feminine or plural?"
      },
      {
        h: "Countries have a gender",
        table: { head: ["Gender", "Countries"], rows: [
          ["<b>Feminine</b>: most countries ending in <b>-e</b>", "[[la France]], [[l'Inde]], [[la Chine]], [[l'Italie]], [[l'Espagne]], [[l'Allemagne]], [[l'Angleterre]], [[la Belgique]], [[la Suisse]]"],
          ["<b>Masculine</b>: the others", "[[le Japon]], [[le Canada]], [[le Brésil]], [[le Maroc]], [[le Portugal]], [[le Sénégal]], [[le Pakistan]], [[le Népal]], [[le Royaume-Uni]] (the UK)"],
          ["<b>Masculine exceptions</b> (they end in -e!)", "[[le Mexique]], [[le Cambodge]]"],
          ["<b>Plural</b>", "[[les États-Unis]] (the USA), [[les Pays-Bas]] (the Netherlands), [[les Émirats arabes unis]] (the UAE), [[les Maldives]]"]
        ] }
      },
      {
        h: "In / to: à, en, au, aux",
        table: { head: ["Where?", "Use", "Examples"], rows: [
          ["a city", "<b>à</b>", "[[à Paris]], [[à Mumbai]], [[à Delhi]], [[à Londres]]"],
          ["a feminine country", "<b>en</b>", "[[en France]], [[en Inde]], [[en Chine]], [[en Italie]]"],
          ["a masculine country starting with a vowel", "<b>en</b>", "[[en Iran]], [[en Afghanistan]]"],
          ["a masculine country", "<b>au</b>", "[[au Japon]], [[au Canada]], [[au Brésil]], [[au Maroc]], [[au Mexique]]"],
          ["a plural country", "<b>aux</b>", "[[aux États-Unis]], [[aux Pays-Bas]], [[aux Maldives]]"]
        ] }
      },
      {
        examples: [
          { fr: "J'habite à Bangalore, en Inde.", en: "I live in Bangalore, in India.", say: "zhah-bee-tah bahn-gah-LOR, ahn NEHND" },
          { fr: "Je vais au Japon en avril.", en: "I'm going to Japan in April.", say: "zhuh veh oh zhah-POHN ahn nah-VREEL" },
          { fr: "Ma sœur travaille aux États-Unis.", en: "My sister works in the USA.", say: "mah suhr trah-vah-y oh zay-tah-zü-NEE" },
          { fr: "Il habite au Canada, à Montréal.", en: "He lives in Canada, in Montreal.", say: "ee-lah-bee-toh kah-nah-DAH, ah mohn-ray-AHL" },
          { fr: "Nous partons en vacances en Italie.", en: "We're going on holiday to Italy." },
          { fr: "Tu habites en France ?", en: "Do you live in France?", say: "tü ah-bee-tahn FRAHNS" }
        ]
      },
      {
        tip: "A quick way to guess: does the country end in <b>-e</b>? Then it's feminine → [[en]]. If not, it's masculine → [[au]]. Learn the two famous exceptions by heart: [[au Mexique]], [[au Cambodge]]. And if a country starts with a vowel, it's always [[en]], whatever its gender: [[en Inde]], [[en Iran]]."
      },
      {
        h: "Venir (to come)",
        conj: { verb: "venir", en: "to come", rows: [
          ["je viens", "I come", "zhuh VYEHN"],
          ["tu viens", "you come", "tü VYEHN"],
          ["il / elle / on vient", "he / she comes; we come", "eel / ehl / ohn VYEHN"],
          ["nous venons", "we come", "noo vuh-NOHN"],
          ["vous venez", "you come (polite or plural)", "voo vuh-NAY"],
          ["ils / elles viennent", "they come", "eel / ehl VYEN"]
        ] }
      },
      {
        h: "Coming from: venir de",
        table: { head: ["From…", "Use", "Examples"], rows: [
          ["a city", "<b>de</b> / <b>d'</b>", "[[Je viens de Mumbai.]] [[Il vient d'Agra.]]"],
          ["a feminine country (or one starting with a vowel)", "<b>de</b> / <b>d'</b>", "[[Je viens de France.]] [[Elle vient d'Inde.]] [[Il vient d'Iran.]]"],
          ["a masculine country", "<b>du</b> (de + le)", "[[Je viens du Japon.]] [[Ils viennent du Canada.]]"],
          ["a plural country", "<b>des</b> (de + les)", "[[Je viens des États-Unis.]]"]
        ] }
      },
      {
        warn: "Listen for the <b>n</b>: [[il vient|eel VYEHN]] ends in a nasal sound (the n is silent), but in [[ils viennent|eel VYEN]] you clearly hear an <b>n</b>, like in English <i>ten</i>.<br>With a feminine country, no article after de: <s>Je viens de la France</s> → [[Je viens de France.]] And don't forget the apostrophe: <s>de Inde</s> → [[d'Inde]].<br>Nationalities used as adjectives take <b>no capital letter</b>: [[Je suis indien.]] [[Elle est française.]]"
      },
      {
        h: "Who you are, where you're from, where you live",
        examples: [
          { fr: "Je suis indien / indienne.", en: "I'm Indian. (man / woman)", say: "zhuh swee zehn-DYEHN / zehn-DYEN" },
          { fr: "Je viens d'Inde, de Delhi.", en: "I come from India, from Delhi.", say: "zhuh vyehn DEHND, duh deh-LEE" },
          { fr: "J'habite en France, à Lyon.", en: "I live in France, in Lyon.", say: "zhah-bee-tahn FRAHNS, ah LYOHN" },
          { fr: "Kenji est japonais. Il vient du Japon, mais il habite au Canada.", en: "Kenji is Japanese. He comes from Japan, but he lives in Canada." },
          { fr: "Emma est américaine. Elle vient des États-Unis.", en: "Emma is American. She comes from the USA." }
        ]
      },
      {
        h: "Use it",
        dialogue: [
          ["Léa", "Bonjour ! Tu viens d'où ?", "Hi! Where are you from?"],
          ["Rohan", "Je viens d'Inde, de Bangalore. Et toi ?", "I'm from India, from Bangalore. And you?"],
          ["Léa", "Je suis française, mais j'habite au Canada, à Montréal.", "I'm French, but I live in Canada, in Montreal."],
          ["Rohan", "Ah, super ! Moi, j'habite en France, à Lyon.", "Oh, great! I live in France, in Lyon."],
          ["Léa", "Et ta famille ?", "And your family?"],
          ["Rohan", "Mes parents habitent à Bangalore, et ma sœur travaille aux États-Unis.", "My parents live in Bangalore, and my sister works in the USA."],
          ["Léa", "Tu vas en Inde cet été ?", "Are you going to India this summer?"],
          ["Rohan", "Oui, je vais à Bangalore en juillet !", "Yes, I'm going to Bangalore in July!"]
        ]
      }
    ],
    quiz: [
      { type: "mcq", q: "J'habite ___ Delhi.", options: ["en", "au", "à"], answer: 2, explain: "Delhi is a city → [[à Delhi]]." },
      { type: "mcq", q: "Ils vont ___ Japon.", options: ["au", "en", "à"], answer: 0, explain: "[[le Japon]] is masculine → [[au Japon]]." },
      { type: "fill", q: "Elle travaille ___ Inde.", answer: ["en"], explain: "[[l'Inde]] is feminine (and starts with a vowel) → [[en Inde]]." },
      { type: "fill", q: "Nous allons ___ États-Unis.", answer: ["aux"], explain: "A plural country → [[aux États-Unis]]." },
      { type: "mcq", q: "Je viens ___ Canada.", options: ["de", "des", "du"], answer: 2, explain: "[[le Canada]] is masculine: de + le = [[du]] → [[Je viens du Canada.]]" },
      { type: "fill", q: "Tu ___ (venir) d'où ?", answer: ["viens"], explain: "[[tu viens]] sounds just like [[je viens]] and [[il vient]]." },
      { type: "listen", say: "Ils viennent du Maroc.", options: ["He comes from Morocco.", "They come from Morocco.", "They're going to Morocco."], answer: 1, explain: "You can hear the n in [[viennent|VYEN]], so it's plural." },
      { type: "mcq", q: "Which one is correct?", options: ["en Mexique", "au Mexique", "à Mexique"], answer: 1, explain: "[[le Mexique]] ends in -e but is masculine → [[au Mexique]]." },
      { type: "mcq", q: "How do you say 'I come from India'?", options: ["Je viens d'Inde.", "Je viens de Inde.", "Je viens en Inde."], answer: 0, explain: "Feminine country → [[de]] with no article, and de + a vowel = d' → [[d'Inde]]. ([[Je viens en Inde]] means 'I'm coming to India'.)" },
      { type: "listen", say: "Vous allez en Chine ?", options: ["Are you going to Japan?", "Are you from China?", "Are you going to China?"], answer: 2 },
      { type: "order", words: ["Je", "viens", "d'Inde", "et", "j'habite", "en", "France."], en: "I come from India and I live in France." },
      { type: "speak", fr: "Je viens d'Inde, mais j'habite à Paris.", en: "I come from India, but I live in Paris." }
    ]
  },

  /* ------------------------------------------------------------------ */
  {
    id: "g-faire",
    cat: "grammar",
    title: "Faire (to do/make): weather, sports & activities",
    minutes: 15,
    summary: "Talk about the weather, your hobbies and your chores with faire, and know when to say jouer au cricket and when to say jouer de la guitare.",
    sections: [
      {
        h: "One verb, many jobs",
        p: "[[faire|FEHR]] means both <b>to do</b> and <b>to make</b>. It's one of the ten most common French verbs. You need it for the weather, for sports and hobbies, for housework, and for the question everybody asks: [[Qu'est-ce que tu fais ?]] (What are you doing? / What do you do?)."
      },
      {
        h: "The present tense of faire",
        conj: { verb: "faire", en: "to do / to make", rows: [
          ["je fais", "I do / I make", "zhuh FEH"],
          ["tu fais", "you do", "tü FEH"],
          ["il / elle / on fait", "he / she does; we do", "eel / ehl / ohn FEH"],
          ["nous faisons", "we do", "noo fuh-ZOHN"],
          ["vous faites", "you do (polite or plural)", "voo FEHT"],
          ["ils / elles font", "they do", "eel / ehl FOHN"]
        ] }
      },
      {
        warn: "Three traps:<br>• [[nous faisons|noo fuh-ZOHN]]: the <b>ai</b> sounds like <b>uh</b> here, not 'ay'.<br>• [[vous faites|voo FEHT]], never <s>vous faisez</s>. Only three verbs end in -tes with vous: [[vous êtes]], [[vous faites]], [[vous dites]].<br>• [[ils font|eel FOHN]] rhymes with [[ils sont]], [[ils ont]] and [[ils vont]]."
      },
      {
        h: "The weather: il fait…",
        examples: [
          { fr: "Quel temps fait-il ?", en: "What's the weather like?", say: "kehl tahn feh-TEEL" },
          { fr: "Il fait beau.", en: "The weather is nice.", say: "eel feh BOH" },
          { fr: "Il fait chaud à Delhi en mai.", en: "It's hot in Delhi in May.", say: "eel feh SHOH ah deh-LEE ahn MEH" },
          { fr: "Il fait froid à Paris en hiver.", en: "It's cold in Paris in winter.", say: "eel feh FRWAH ah pah-REE ahn nee-VEHR" },
          { fr: "Il fait mauvais aujourd'hui.", en: "The weather is bad today.", say: "eel feh moh-VEH oh-zhoor-DWEE" },
          { fr: "Il fait trente degrés !", en: "It's thirty degrees!", say: "eel feh trahnt duh-GRAY" }
        ]
      },
      {
        note: "Rain and snow don't use faire: [[Il pleut.|eel PLUH]] = It's raining (think of Mumbai in July!) and [[Il neige.|eel NEHZH]] = It's snowing."
      },
      {
        h: "Sports, hobbies and chores with faire",
        table: { head: ["faire + …", "Examples"], rows: [
          ["<b>du</b> + a masculine activity", "[[faire du sport]], [[faire du vélo]] (cycling), [[faire du yoga]]"],
          ["<b>de la</b> + a feminine activity", "[[faire de la natation]] (swimming), [[faire de la musique]], [[faire de la danse]]"],
          ["<b>de l'</b> + a vowel", "[[faire de l'escalade]] (climbing), [[faire de l'exercice]]"],
          ["fixed chores with <b>le / la / les</b>", "[[faire la cuisine]] (to cook), [[faire le ménage]] (to clean the house), [[faire les courses]] (to do the food shopping)"]
        ] }
      },
      {
        h: "Jouer à or jouer de?",
        table: { head: ["For…", "Use", "Examples"], rows: [
          ["a sport or a game", "<b>jouer à</b> (au, à la, aux)", "[[jouer au foot]], [[jouer au tennis]], [[jouer au cricket]], [[jouer aux cartes]]"],
          ["a musical instrument", "<b>jouer de</b> (du, de la)", "[[jouer du piano]], [[jouer de la guitare]], [[jouer du tabla]]"]
        ] }
      },
      {
        h: "Qu'est-ce que tu fais ?",
        examples: [
          { fr: "Qu'est-ce que tu fais ?", en: "What are you doing? / What do you do?", say: "kehs-kuh tü FEH" },
          { fr: "Qu'est-ce que tu fais le week-end ?", en: "What do you do at the weekend?" },
          { fr: "Qu'est-ce que vous faites dans la vie ?", en: "What do you do for a living?" },
          { fr: "Je fais du yoga le matin.", en: "I do yoga in the morning.", say: "zhuh feh dü yoh-GAH luh mah-TEHN" },
          { fr: "Mon frère joue au cricket et ma sœur joue de la guitare.", en: "My brother plays cricket and my sister plays the guitar." }
        ]
      },
      {
        warn: "In the negative, du / de la / de l' become <b>de</b> (or <b>d'</b> before a vowel):<br>[[Je fais du sport.]] → [[Je ne fais pas de sport.]]<br>[[Elle fait de l'escalade.]] → [[Elle ne fait pas d'escalade.]]<br>But the chores keep their article: [[Je ne fais pas la cuisine.]] And [[jouer au]] doesn't change: [[Je ne joue pas au tennis.]]"
      },
      {
        h: "Use it",
        dialogue: [
          ["Inès", "Qu'est-ce que tu fais le week-end ?", "What do you do at the weekend?"],
          ["Karan", "Le samedi, je joue au cricket avec mes amis. Et le dimanche, je fais du yoga.", "On Saturdays, I play cricket with my friends. And on Sundays, I do yoga."],
          ["Inès", "Moi, je fais de la natation. Tu fais de la musique ?", "I go swimming. Do you play any music?"],
          ["Karan", "Oui, je joue de la guitare. Et toi ?", "Yes, I play the guitar. And you?"],
          ["Inès", "Non, je ne fais pas de musique. Mais j'adore faire la cuisine !", "No, I don't do any music. But I love cooking!"],
          ["Karan", "Il fait beau aujourd'hui. On fait du vélo ?", "The weather's nice today. Shall we go cycling?"],
          ["Inès", "Bonne idée ! On y va !", "Good idea! Let's go!"]
        ]
      }
    ],
    quiz: [
      { type: "mcq", q: "Vous ___ du sport ?", options: ["faisez", "fais", "faites"], answer: 2, explain: "[[vous faites]], like [[vous êtes]]. <s>vous faisez</s> doesn't exist." },
      { type: "fill", q: "Nous ___ (faire) la cuisine ensemble.", answer: ["faisons"], explain: "[[nous faisons|noo fuh-ZOHN]]: the ai sounds like 'uh' here." },
      { type: "mcq", q: "Il ___ froid à Paris en janvier.", options: ["est", "fait", "a"], answer: 1, explain: "The weather uses faire: [[Il fait froid.]]" },
      { type: "mcq", q: "Je joue ___ piano.", options: ["du", "au", "de la"], answer: 0, explain: "An instrument → [[jouer de]]. [[le piano]] is masculine: de + le = [[du]]." },
      { type: "fill", q: "Tu joues ___ cricket ?", answer: ["au"], explain: "A sport → [[jouer à]], and à + le = [[au]]: [[jouer au cricket]]." },
      { type: "fill", q: "Elle fait ___ natation.", answer: ["de la"], explain: "[[la natation]] is feminine → [[faire de la natation]]." },
      { type: "mcq", q: "Make it negative: [[Je fais du yoga.]]", options: ["Je ne fais pas du yoga.", "Je ne fais pas de yoga.", "Je fais ne pas yoga."], answer: 1, explain: "After [[pas]], [[du]] becomes [[de]]: [[Je ne fais pas de yoga.]]" },
      { type: "listen", say: "Ils font les courses.", options: ["They're doing the food shopping.", "They're doing the cooking.", "They're playing sport."], answer: 0, explain: "[[faire les courses]] = to do the (food) shopping." },
      { type: "listen", say: "Il fait beau aujourd'hui.", options: ["It's cold today.", "He's handsome today.", "The weather's nice today."], answer: 2, explain: "[[Il fait beau]] is about the weather. 'He's handsome' would be [[Il est beau.]]" },
      { type: "order", words: ["Qu'est-ce", "que", "tu", "fais", "ce", "week-end ?"], en: "What are you doing this weekend?" },
      { type: "speak", fr: "Je fais du yoga et je joue au cricket.", en: "I do yoga and I play cricket." }
    ]
  },

  /* ------------------------------------------------------------------ */
  {
    id: "g-partitive",
    cat: "grammar",
    title: "Some: du, de la, de l', des — and quantities",
    minutes: 18,
    summary: "Talk about food and drink the French way (du pain, de l'eau, pas de viande, un kilo de tomates) and ask Combien de… ? at the market.",
    sections: [
      {
        h: "French needs a little word before food",
        p: "In English you can say <i>I eat bread</i> or <i>I drink water</i> with nothing in front of the noun. French almost never leaves a noun alone. When you mean <b>some</b>, an amount you don't count, use one of these four little words: <b>du</b>, <b>de la</b>, <b>de l'</b>, <b>des</b>. Grammar books call them <i>partitive articles</i> ('a part of something')."
      },
      {
        table: { head: ["Use…", "with…", "Examples"], rows: [
          ["<b>du</b>", "a masculine noun", "[[du pain]], [[du riz]], [[du fromage]], [[du thé]]"],
          ["<b>de la</b>", "a feminine noun", "[[de la salade]], [[de la viande]], [[de la confiture]] (jam)"],
          ["<b>de l'</b>", "a noun starting with a vowel or silent h", "[[de l'eau]] (f.), [[de l'huile]] (oil, f.), [[de l'argent]] (money, m.)"],
          ["<b>des</b>", "a plural noun", "[[des pâtes]] (pasta), [[des fruits]], [[des lentilles]] (lentils)"]
        ] }
      },
      {
        examples: [
          { fr: "Le matin, je mange du pain.", en: "In the morning, I eat (some) bread.", say: "luh mah-TEHN, zhuh mahnzh dü PEHN" },
          { fr: "Tu bois de l'eau ?", en: "Are you drinking (some) water?", say: "tü bwah duh LOH" },
          { fr: "Je prends de la salade.", en: "I'll have some salad.", say: "zhuh prahn duh lah sah-LAHD" },
          { fr: "Ce soir, nous mangeons des pâtes.", en: "Tonight we're having pasta.", say: "suh SWAHR, noo mahn-zhohn day PAHT" },
          { fr: "Il y a du sucre dans ton thé ?", en: "Is there sugar in your tea?", say: "eel yah dü sükr dahn tohn TAY" },
          { fr: "J'achète du riz et des lentilles.", en: "I'm buying rice and lentils.", say: "zhah-sheht dü REE ay day lahn-TEE-y" }
        ]
      },
      {
        h: "Loving it or eating it?",
        p: "After [[aimer]], [[adorer]], [[préférer]] and [[détester]], you talk about a thing <b>in general</b>, so French uses [[le]], [[la]], [[les]] (or <b>l'</b>). After verbs like [[manger]] (to eat), [[boire]] (to drink), [[prendre]] (to have) or [[acheter]] (to buy), you mean <b>some of it</b>, so use du / de la / de l' / des."
      },
      {
        table: { head: ["In general", "Some of it"], rows: [
          ["[[J'aime le café.]]", "[[Je bois du café.]]"],
          ["[[Elle adore la viande.]]", "[[Elle mange de la viande.]]"],
          ["[[Je préfère l'eau.]]", "[[Je bois de l'eau.]]"],
          ["[[Nous adorons les mangues.]]", "[[Nous mangeons des mangues.]]"]
        ] }
      },
      {
        warn: "After a negative (ne… pas), du / de la / de l' / des all become <b>de</b> (<b>d'</b> before a vowel):<br>[[Il boit du café.]] → [[Il ne boit pas de café.]]<br>[[J'ai de l'argent.]] → [[Je n'ai pas d'argent.]]<br>[[J'ai des frères.]] → [[Je n'ai pas de frères.]]<br>[[Je suis végétarien / végétarienne : je ne mange pas de viande.]]<br>But after aimer and co., the article stays: [[Je n'aime pas le café.]]"
      },
      {
        h: "Quantities: always de / d'",
        table: { head: ["Quantity", "Meaning", "Example"], rows: [
          ["[[beaucoup de]]", "a lot of", "[[beaucoup de sucre]]"],
          ["[[un peu de]]", "a little", "[[un peu de lait]]"],
          ["[[trop de]]", "too much / too many", "[[trop de sel]]"],
          ["[[assez de]]", "enough", "[[assez d'eau]]"],
          ["[[un kilo de]]", "a kilo of", "[[un kilo de tomates]]"],
          ["[[500 grammes de]]", "500 grams of", "[[500 grammes de fromage]]"],
          ["[[une bouteille de]]", "a bottle of", "[[une bouteille d'eau]]"],
          ["[[un paquet de]]", "a packet of", "[[un paquet de biscuits]]"],
          ["[[une tranche de]]", "a slice of", "[[une tranche de pain]]"],
          ["[[une boîte de]]", "a box / a tin of", "[[une boîte de chocolats]]"],
          ["[[un verre de]]", "a glass of", "[[un verre de jus d'orange]]"]
        ] }
      },
      {
        h: "Quick check: which little word?",
        list: [
          "After [[aimer]], [[adorer]], [[préférer]], [[détester]] → [[le]], [[la]], [[les]] (things in general).",
          "After [[pas]] or after a quantity → <b>de</b> / <b>d'</b>.",
          "Everywhere else, for 'some' → <b>du</b>, <b>de la</b>, <b>de l'</b>, <b>des</b>."
        ]
      },
      {
        h: "Combien de… ? (How much? How many?)",
        examples: [
          { fr: "Combien de sucre ? — Un peu, s'il vous plaît.", en: "How much sugar? — A little, please." },
          { fr: "Combien de tomates ? — Un kilo, s'il vous plaît.", en: "How many tomatoes? — A kilo, please." },
          { fr: "Combien d'enfants avez-vous ?", en: "How many children do you have?", say: "kohn-byehn dahn-fahn ah-vay-VOO" },
          { fr: "Tu as combien de frères et sœurs ?", en: "How many brothers and sisters have you got?" }
        ]
      },
      {
        h: "Use it: at the market",
        dialogue: [
          ["Vendeur", "Bonjour ! Vous désirez ?", "Hello! What would you like?"],
          ["Cliente", "Bonjour ! Je voudrais un kilo de tomates, s'il vous plaît.", "Hello! I'd like a kilo of tomatoes, please."],
          ["Vendeur", "Voilà. Et avec ça ?", "Here you are. Anything else?"],
          ["Cliente", "Vous avez de la coriandre ?", "Do you have any coriander?"],
          ["Vendeur", "Ah non, désolé, je n'ai pas de coriandre aujourd'hui. Mais j'ai du persil.", "Oh no, sorry, I haven't got any coriander today. But I've got parsley."],
          ["Cliente", "Alors, un bouquet de persil et deux citrons, s'il vous plaît. C'est combien ?", "Then a bunch of parsley and two lemons, please. How much is it?"],
          ["Vendeur", "Ça fait quatre euros cinquante.", "That's four euros fifty."],
          ["Cliente", "Voilà. Merci, bonne journée !", "Here you are. Thanks, have a nice day!"]
        ]
      }
    ],
    quiz: [
      { type: "mcq", q: "Je bois ___ eau.", options: ["du", "de la", "de l'"], answer: 2, explain: "[[eau]] starts with a vowel → [[de l'eau]]." },
      { type: "mcq", q: "Tu manges ___ riz ?", options: ["de la", "du", "des"], answer: 1, explain: "[[le riz]] is masculine → [[du riz]]." },
      { type: "fill", q: "Je ne mange pas ___ viande.", answer: ["de"], explain: "After [[pas]]: [[de]] → [[Je ne mange pas de viande.]]" },
      { type: "mcq", q: "J'adore ___ chocolat.", options: ["le", "du", "de"], answer: 0, explain: "After adorer, you talk about chocolate in general → [[J'adore le chocolat.]]" },
      { type: "fill", q: "Je voudrais un kilo ___ tomates.", answer: ["de"], explain: "After a quantity, always [[de]]: [[un kilo de tomates]]." },
      { type: "listen", say: "Il ne boit pas de café.", options: ["He doesn't like coffee.", "He drinks coffee.", "He doesn't drink coffee."], answer: 2, explain: "[[Il ne boit pas]] = he doesn't drink. 'He doesn't like coffee' would be [[Il n'aime pas le café.]]" },
      { type: "mcq", q: "Il y a beaucoup ___ sucre dans le gâteau.", options: ["de", "du", "des"], answer: 0, explain: "[[beaucoup de]] + noun, with no article." },
      { type: "fill", q: "Elle prend ___ salade.", answer: ["de la"], explain: "[[la salade]] is feminine → [[de la salade]]." },
      { type: "listen", say: "Une bouteille d'eau, s'il vous plaît.", options: ["Some water, please.", "A bottle of water, please.", "A glass of water, please."], answer: 1 },
      { type: "mcq", q: "Combien ___ frères as-tu ?", options: ["des", "de", "du"], answer: 1, explain: "[[Combien de]] + noun: [[Combien de frères as-tu ?]]" },
      { type: "order", words: ["Je", "ne", "mange", "pas", "de", "viande."], en: "I don't eat meat." },
      { type: "speak", fr: "Je voudrais un kilo de pommes, s'il vous plaît.", en: "I'd like a kilo of apples, please." }
    ]
  },

  /* ------------------------------------------------------------------ */
  {
    id: "g-vouloir-prendre",
    cat: "grammar",
    title: "Ordering politely: je voudrais, prendre, boire",
    minutes: 15,
    summary: "Order food and drinks politely in a café or a bakery with je voudrais, je vais prendre and pour moi, and conjugate prendre and boire.",
    sections: [
      {
        h: "The magic phrase: je voudrais",
        p: "In a café, a bakery or a shop, French people are very polite, and they expect the same from you. The magic phrase is [[je voudrais|zhuh voo-DREH]] = <b>I would like</b>. Learn it as one fixed block for now (the grammar behind it, the <i>conditional</i> of vouloir, comes later). Then just add what you want and [[s'il vous plaît|seel voo PLEH]]."
      },
      {
        examples: [
          { fr: "Je voudrais un café, s'il vous plaît.", en: "I'd like a coffee, please.", say: "zhuh voo-dreh ehn kah-FAY, seel voo PLEH" },
          { fr: "Je voudrais une baguette et deux croissants.", en: "I'd like a baguette and two croissants.", say: "zhuh voo-dreh ün bah-GEHT ay duh krwah-SAHN" },
          { fr: "Je voudrais l'addition, s'il vous plaît.", en: "I'd like the bill, please.", say: "zhuh voo-dreh lah-dee-SYOHN, seel voo PLEH" },
          { fr: "On voudrait deux thés, s'il vous plaît.", en: "We'd like two teas, please.", say: "ohn voo-dreh duh TAY, seel voo PLEH" }
        ]
      },
      {
        warn: "[[Je veux|zhuh VUH]] means <b>I want</b>. It's fine with friends ([[Tu veux un thé ? — Oui, je veux bien !]]), but [[Je veux un café.]] said to a waiter or a baker sounds like a child or an order. In shops and cafés, say [[Je voudrais…]] or [[Je vais prendre…]], and always add [[s'il vous plaît]]."
      },
      {
        h: "Prendre (to take, to have)",
        conj: { verb: "prendre", en: "to take / to have (food, drink)", rows: [
          ["je prends", "I take / I'll have", "zhuh PRAHN"],
          ["tu prends", "you take", "tü PRAHN"],
          ["il / elle / on prend", "he / she takes; we take", "eel / ehl / ohn PRAHN"],
          ["nous prenons", "we take", "noo pruh-NOHN"],
          ["vous prenez", "you take (polite or plural)", "voo pruh-NAY"],
          ["ils / elles prennent", "they take", "eel / ehl PREN"]
        ] }
      },
      {
        tip: "With food and drink, [[prendre]] means <b>to have</b>: [[Je prends un thé.]] = I'll have a tea. Two very useful verbs are built on it and follow it exactly: [[apprendre]] (to learn) and [[comprendre]] (to understand). [[J'apprends le français.]] [[Je ne comprends pas.]] [[Vous comprenez ?]] [[Ils apprennent vite.]] Notice the double <b>n</b> in [[ils prennent|eel PREN]]: you can hear it."
      },
      {
        h: "Boire (to drink): watch nous and vous",
        conj: { verb: "boire", en: "to drink", rows: [
          ["je bois", "I drink", "zhuh BWAH"],
          ["tu bois", "you drink", "tü BWAH"],
          ["il / elle / on boit", "he / she drinks; we drink", "eel / ehl / ohn BWAH"],
          ["nous buvons", "we drink", "noo bü-VOHN"],
          ["vous buvez", "you drink (polite or plural)", "voo bü-VAY"],
          ["ils / elles boivent", "they drink", "eel / ehl BWAHV"]
        ] }
      },
      {
        h: "Café and shop phrases",
        table: { head: ["French", "Meaning", "Who says it"], rows: [
          ["[[Qu'est-ce que vous prenez ?]]", "What will you have?", "the waiter"],
          ["[[Je vais prendre…]]", "I'll have…", "you"],
          ["[[Pour moi, un…]]", "For me, a…", "you"],
          ["[[Et comme boisson ?]]", "And to drink?", "the waiter"],
          ["[[Avec ceci ?]]", "Anything else?", "the baker or shop assistant"],
          ["[[C'est tout, merci.]]", "That's all, thank you.", "you"],
          ["[[L'addition, s'il vous plaît.]]", "The bill, please.", "you"]
        ] }
      },
      {
        h: "Use it: at the café",
        dialogue: [
          ["Serveur", "Bonjour ! Qu'est-ce que vous prenez ?", "Hello! What will you have?"],
          ["Ananya", "Bonjour. Je vais prendre un croque-monsieur, s'il vous plaît.", "Hello. I'll have a croque-monsieur, please."],
          ["Vikram", "Et pour moi, une omelette au fromage.", "And for me, a cheese omelette."],
          ["Serveur", "Très bien. Et comme boisson ?", "Very good. And to drink?"],
          ["Ananya", "Je voudrais un jus d'orange.", "I'd like an orange juice."],
          ["Vikram", "Une carafe d'eau, s'il vous plaît. Je ne bois pas d'alcool.", "A jug of tap water, please. I don't drink alcohol."],
          ["Serveur", "Parfait, je vous apporte ça.", "Perfect, I'll bring that for you."],
          ["Vikram", "Merci beaucoup !", "Thank you very much!"]
        ]
      },
      {
        note: "A [[carafe d'eau]] (a jug of tap water) is free with a meal in French restaurants: just ask. To call the waiter, say [[S'il vous plaît !]] or [[Excusez-moi !]], never 'Garçon !', which sounds rude and old-fashioned today. And a [[croque-monsieur]] is a toasted ham and cheese sandwich."
      },
      {
        h: "Use it: at the bakery",
        dialogue: [
          ["Boulangère", "Bonjour ! Vous désirez ?", "Hello! What would you like?"],
          ["Client", "Bonjour ! Je voudrais une baguette et deux croissants, s'il vous plaît.", "Hello! I'd like a baguette and two croissants, please."],
          ["Boulangère", "Voilà. Avec ceci ?", "Here you are. Anything else?"],
          ["Client", "C'est tout, merci. C'est combien ?", "That's all, thanks. How much is it?"],
          ["Boulangère", "Trois euros quarante, s'il vous plaît.", "Three euros forty, please."],
          ["Client", "Voilà. Merci, bonne journée !", "Here you are. Thanks, have a nice day!"],
          ["Boulangère", "Merci, à vous aussi !", "Thank you, you too!"]
        ]
      }
    ],
    quiz: [
      { type: "mcq", q: "What's the most polite way to order?", options: ["Je veux un café.", "Un café !", "Je voudrais un café, s'il vous plaît."], answer: 2, explain: "[[Je voudrais…]] + [[s'il vous plaît]]: polite and natural." },
      { type: "fill", q: "Nous ___ (prendre) le menu du jour.", answer: ["prenons"], explain: "[[nous prenons|noo pruh-NOHN]], with one n." },
      { type: "mcq", q: "Ils ___ un taxi.", options: ["prenent", "prennent", "prends"], answer: 1, explain: "[[ils prennent]]: double n, and you can hear it." },
      { type: "fill", q: "Vous ___ (boire) du thé ?", answer: ["buvez"], explain: "[[vous buvez|voo bü-VAY]]: with nous and vous, boire changes to bu-." },
      { type: "mcq", q: "Elles ___ de l'eau.", options: ["boivent", "buvent", "boient"], answer: 0, explain: "[[elles boivent|ehl BWAHV]]" },
      { type: "listen", say: "Qu'est-ce que vous prenez ?", options: ["How much is it?", "What will you have?", "Where are you going?"], answer: 1 },
      { type: "listen", say: "Et comme boisson ?", options: ["Anything else?", "And for dessert?", "And to drink?"], answer: 2 },
      { type: "fill", q: "Je ne ___ (comprendre) pas.", answer: ["comprends"], explain: "comprendre follows prendre: [[je comprends]]." },
      { type: "mcq", q: "The baker asks [[Avec ceci ?]] and you don't want anything else. You say:", options: ["C'est tout, merci.", "Je vais bien, merci.", "Oui, avec ceci."], answer: 0 },
      { type: "order", words: ["Je", "vais", "prendre", "un", "thé,", "s'il", "vous", "plaît."], en: "I'll have a tea, please." },
      { type: "speak", fr: "Pour moi, un café et un croissant, s'il vous plaît.", en: "For me, a coffee and a croissant, please." }
    ]
  },

  /* ------------------------------------------------------------------ */
  {
    id: "g-demonstratives",
    cat: "grammar",
    title: "This / that: ce, cet, cette, ces",
    minutes: 12,
    summary: "Point at things in a shop (ce pull, cet hôtel, cette robe, ces chaussures), choose between two with -ci and -là, and say ce matin, ce soir, cette semaine.",
    sections: [
      {
        h: "One family for this, that, these, those",
        p: "English has four words: <i>this, that, these, those</i>. French uses one family, [[ce]], [[cet]], [[cette]], [[ces]], for both <i>this</i> and <i>that</i>. You don't choose by distance: you choose by the noun's <b>gender</b> and <b>number</b>, just like with [[le]], [[la]], [[les]]."
      },
      {
        table: { head: ["Form", "Use it with…", "Examples"], rows: [
          ["[[ce|suh]]", "a masculine noun", "[[ce livre]], [[ce pull]] (sweater), [[ce restaurant]]"],
          ["[[cet|SEHT]]", "a masculine noun starting with a vowel or silent h", "[[cet homme]], [[cet hôtel]], [[cet ami]]"],
          ["[[cette|SEHT]]", "a feminine noun", "[[cette robe]] (dress), [[cette ville]], [[cette amie]]"],
          ["[[ces|SAY]]", "any plural noun, masculine or feminine", "[[ces chaussures]] (shoes), [[ces livres]], [[ces amis]]"]
        ] }
      },
      {
        tip: "[[cet]] and [[cette]] sound exactly the same: <b>SEHT</b>. [[cet]] only exists to make masculine words easier to say before a vowel (try saying 'ce ami': it's hard!). With [[ces]] before a vowel, you hear a <b>z</b>: [[ces amis|say zah-MEE]]."
      },
      {
        examples: [
          { fr: "Ce restaurant est très bon.", en: "This restaurant is very good.", say: "suh rehs-toh-RAHN eh treh BOHN" },
          { fr: "Cet hôtel est cher.", en: "This hotel is expensive.", say: "seh-toh-TEHL eh SHEHR" },
          { fr: "Cette ville est magnifique.", en: "This city is beautiful.", say: "seht VEEL eh mah-nyee-FEEK" },
          { fr: "Ces mangues viennent d'Inde.", en: "These mangoes come from India.", say: "say MAHNG vyen DEHND" },
          { fr: "Ces chaussures sont belles.", en: "These shoes are beautiful.", say: "say shoh-SÜR sohn BEHL" }
        ]
      },
      {
        warn: "<s>ce ami</s>, <s>ce hôtel</s> → [[cet ami]], [[cet hôtel]].<br>Feminine nouns always keep [[cette]], even before a vowel: [[cette amie]], [[cette école]].<br>There's only one plural form, [[ces]]. Never <s>cettes</s>."
      },
      {
        h: "This one or that one? Add -ci or -là",
        p: "Usually [[ce pull]] can mean <i>this</i> or <i>that</i> sweater. To contrast two things, add <b>-ci</b> (here) or <b>-là</b> (there) to the noun: [[ce pull-ci]] = this sweater (here), [[ce pull-là]] = that sweater (there). In everyday speech, French people use <b>-là</b> a lot, even for things that are close."
      },
      {
        examples: [
          { fr: "Tu préfères ce pull-ci ou ce pull-là ?", en: "Do you prefer this sweater or that one?", say: "tü pray-fehr suh pül-SEE oo suh pül-LAH" },
          { fr: "Je prends ces chaussures-là.", en: "I'll take those shoes.", say: "zhuh prahn say shoh-sür-LAH" },
          { fr: "Cette robe-ci est trop petite.", en: "This dress is too small." }
        ]
      },
      {
        h: "Time expressions",
        examples: [
          { fr: "ce matin", en: "this morning", say: "suh mah-TEHN" },
          { fr: "cet après-midi", en: "this afternoon", say: "seh-tah-preh-mee-DEE" },
          { fr: "ce soir", en: "this evening / tonight", say: "suh SWAHR" },
          { fr: "cette semaine", en: "this week", say: "seht suh-MEN" },
          { fr: "ce week-end", en: "this weekend", say: "suh wee-KEND" },
          { fr: "ce mois-ci", en: "this month", say: "suh mwah-SEE" },
          { fr: "cet été", en: "this summer", say: "seh-tay-TAY" },
          { fr: "cette année", en: "this year", say: "seh-tah-NAY" }
        ]
      },
      {
        h: "Use it: in a clothes shop",
        dialogue: [
          ["Vendeuse", "Bonjour ! Je peux vous aider ?", "Hello! Can I help you?"],
          ["Client", "Oui, merci. Il coûte combien, ce pull ?", "Yes, thank you. How much is this sweater?"],
          ["Vendeuse", "Ce pull-ci ? Quarante euros.", "This one here? Forty euros."],
          ["Client", "Et ce pull-là, le bleu ?", "And that one, the blue one?"],
          ["Vendeuse", "Trente-cinq euros.", "Thirty-five euros."],
          ["Client", "Alors je prends ce pull-là. Et ces chaussures, elles coûtent combien ?", "Then I'll take that sweater. And these shoes, how much are they?"],
          ["Vendeuse", "Cinquante euros. Elles sont en promotion cette semaine.", "Fifty euros. They're on sale this week."],
          ["Client", "Parfait, je prends aussi ces chaussures !", "Perfect, I'll take these shoes too!"]
        ]
      }
    ],
    quiz: [
      { type: "mcq", q: "___ hôtel est très confortable.", options: ["Ce", "Cet", "Cette"], answer: 1, explain: "[[hôtel]] is masculine and starts with a silent h → [[cet hôtel]]." },
      { type: "fill", q: "___ robe est jolie.", answer: ["Cette", "cette"], explain: "[[la robe]] is feminine → [[cette robe]]." },
      { type: "mcq", q: "Je prends ___ chaussures.", options: ["ces", "cettes", "ce"], answer: 0, explain: "Plural → [[ces]]. <s>cettes</s> doesn't exist." },
      { type: "fill", q: "Qu'est-ce que tu fais ___ soir ?", answer: ["ce"], explain: "[[le soir]] is masculine → [[ce soir]] (tonight)." },
      { type: "mcq", q: "___ ami vient de Delhi.", options: ["Ce", "Cette", "Cet"], answer: 2, explain: "[[ami]] is masculine and starts with a vowel → [[cet ami]]." },
      { type: "listen", say: "Je préfère cette chemise-là.", options: ["I prefer these shirts.", "I prefer that shirt.", "I like this skirt."], answer: 1 },
      { type: "fill", q: "Nous allons en Inde ___ été.", answer: ["cet"], explain: "[[l'été]] is masculine and starts with a vowel → [[cet été]]." },
      { type: "mcq", q: "___ semaine, je travaille beaucoup.", options: ["Cette", "Cet", "Ce"], answer: 0, explain: "[[la semaine]] is feminine → [[cette semaine]]." },
      { type: "listen", say: "Ces amis viennent de Bangalore.", options: ["This friend comes from Bangalore.", "Those friends live in Bangalore.", "These friends come from Bangalore."], answer: 2, explain: "[[ces amis|say zah-MEE]]: the z sound and the n of [[viennent]] tell you it's plural." },
      { type: "order", words: ["Cet", "hôtel", "est", "très", "cher."], en: "This hotel is very expensive." },
      { type: "speak", fr: "Je voudrais ce pull et ces chaussures, s'il vous plaît.", en: "I'd like this sweater and these shoes, please." }
    ]
  },

  /* ------------------------------------------------------------------ */
  {
    id: "g-ir-re",
    cat: "grammar",
    title: "-ir verbs (finir) and -re verbs (attendre)",
    minutes: 15,
    summary: "Conjugate the two other regular verb families (finir, choisir, attendre, vendre) and hear the difference between il finit and ils finissent.",
    sections: [
      {
        h: "Two more regular families",
        p: "You already know the big family of <b>-er</b> verbs ([[parler]], [[habiter]]). There are two smaller <b>regular</b> families: <b>-ir</b> verbs like [[finir]] (to finish) and <b>-re</b> verbs like [[attendre]] (to wait for). Learn one model of each, and you can conjugate dozens of verbs."
      },
      {
        h: "Finir (to finish)",
        conj: { verb: "finir", en: "to finish", rows: [
          ["je finis", "I finish", "zhuh fee-NEE"],
          ["tu finis", "you finish", "tü fee-NEE"],
          ["il / elle / on finit", "he / she finishes; we finish", "eel / ehl / ohn fee-NEE"],
          ["nous finissons", "we finish", "noo fee-nee-SOHN"],
          ["vous finissez", "you finish (polite or plural)", "voo fee-nee-SAY"],
          ["ils / elles finissent", "they finish", "eel / ehl fee-NEES"]
        ] }
      },
      {
        h: "More verbs like finir: choisir, réussir, grandir, remplir",
        examples: [
          { fr: "Je choisis le menu à quinze euros.", en: "I'm choosing the fifteen-euro set menu.", say: "zhuh shwah-zee luh muh-nü ah kehn-zuh-ROH" },
          { fr: "Tu réussis toujours tes examens !", en: "You always pass your exams!", say: "tü ray-ü-see too-zhoor tay zehg-zah-MEHN" },
          { fr: "Les enfants grandissent vite.", en: "Children grow up fast.", say: "lay zahn-fahn grahn-dees VEET" },
          { fr: "Vous remplissez ce formulaire, s'il vous plaît ?", en: "Could you fill in this form, please?" }
        ]
      },
      {
        warn: "Not every -ir verb is like finir! [[partir]], [[sortir]], [[dormir]] and [[venir]] are irregular (see the next lesson). The family sign of finir verbs is the <b>-iss-</b> in the plural: [[nous finissons]], [[vous choisissez]], [[ils réussissent]]."
      },
      {
        h: "Attendre (to wait for)",
        conj: { verb: "attendre", en: "to wait for", rows: [
          ["j'attends", "I wait (for)", "zhah-TAHN"],
          ["tu attends", "you wait", "tü ah-TAHN"],
          ["il / elle / on attend", "he / she waits; we wait", "ee-lah-TAHN / eh-lah-TAHN / oh-nah-TAHN"],
          ["nous attendons", "we wait", "noo zah-tahn-DOHN"],
          ["vous attendez", "you wait (polite or plural)", "voo zah-tahn-DAY"],
          ["ils / elles attendent", "they wait", "eel / ehl zah-TAHND"]
        ] }
      },
      {
        h: "More verbs like attendre: vendre, répondre, entendre, descendre, perdre",
        examples: [
          { fr: "Il vend des fruits au marché.", en: "He sells fruit at the market.", say: "eel vahn day frwee oh mar-SHAY" },
          { fr: "Je réponds à ton message.", en: "I'm answering your message.", say: "zhuh ray-pohn ah tohn meh-SAHZH" },
          { fr: "Tu entends la musique ?", en: "Can you hear the music?", say: "tü ahn-tahn lah mü-ZEEK" },
          { fr: "Nous descendons du bus ici.", en: "We get off the bus here.", say: "noo day-sahn-dohn dü büs ee-SEE" },
          { fr: "Ils perdent toujours leurs clés !", en: "They always lose their keys!", say: "eel pehrd too-zhoor luhr KLAY" }
        ]
      },
      {
        h: "Listen: he or they?",
        p: "Good news for your ears: the three singular forms sound the same ([[je finis]], [[tu finis]], [[il finit]] are all <b>fee-NEE</b>). In the <b>ils / elles</b> form, a consonant appears at the end: [[ils finissent|eel fee-NEES]], [[ils attendent|eel zah-TAHND]], [[ils vendent|eel VAHND]]. That's how you hear <i>he</i> or <i>they</i>. Tap both sides of each pair below."
      },
      {
        pairs: [
          ["il finit", "ils finissent", "he finishes / they finish"],
          ["il attend", "ils attendent", "he waits / they wait"],
          ["elle vend", "elles vendent", "she sells / they sell"],
          ["il répond", "ils répondent", "he answers / they answer"]
        ]
      },
      {
        warn: "[[attendre]] already contains the 'for': <s>J'attends pour le bus</s> → [[J'attends le bus.]]<br>But [[répondre]] needs [[à]]: [[Je réponds à Paul.]] [[Il répond au téléphone.]]<br>And don't add a -t in [[il attend]], [[il vend]], [[il répond]]: the d is already there (and it's silent)."
      },
      {
        h: "Use it: at the bus stop",
        dialogue: [
          ["Tom", "Pardon, vous attendez le bus 38 ?", "Excuse me, are you waiting for the number 38 bus?"],
          ["Priya", "Oui, j'attends depuis dix minutes !", "Yes, I've been waiting for ten minutes!"],
          ["Tom", "Vous descendez où ?", "Where are you getting off?"],
          ["Priya", "À la gare. Et vous ?", "At the station. And you?"],
          ["Tom", "Je descends au musée. Je vends des billets là-bas.", "I'm getting off at the museum. I sell tickets there."],
          ["Priya", "Ah, vous entendez ? Voilà le bus !", "Oh, can you hear that? Here comes the bus!"],
          ["Tom", "Enfin ! Allez, on y va !", "At last! Come on, let's go!"]
        ]
      }
    ],
    quiz: [
      { type: "mcq", q: "Nous ___ le travail à six heures.", options: ["finons", "finisons", "finissons"], answer: 2, explain: "[[nous finissons]]: double s, with the -iss- of the finir family." },
      { type: "fill", q: "Ils ___ (choisir) un restaurant.", answer: ["choisissent"], explain: "[[ils choisissent]], like [[ils finissent]]." },
      { type: "fill", q: "J'___ (attendre) le bus.", answer: ["attends"], explain: "[[j'attends]]: the d and the s are silent." },
      { type: "mcq", q: "Elle ___ sa voiture.", options: ["vend", "vends", "vende"], answer: 0, explain: "[[elle vend]], with no -t: the d is already there." },
      { type: "listen", say: "Ils attendent le train.", options: ["He's waiting for the train.", "They're waiting for the train.", "They can hear the train."], answer: 1, explain: "You hear the d at the end of [[attendent]], so it's plural." },
      { type: "listen", say: "Vous répondez au téléphone ?", options: ["Can you hear the phone?", "Are you selling the phone?", "Are you answering the phone?"], answer: 2 },
      { type: "mcq", q: "How do you say 'I'm waiting for Paul'?", options: ["J'attends Paul.", "J'attends pour Paul.", "J'attends à Paul."], answer: 0, explain: "[[attendre]] = to wait <b>for</b>, with no extra word." },
      { type: "fill", q: "Vous ___ (descendre) ici ?", answer: ["descendez"], explain: "[[vous descendez|voo day-sahn-DAY]]" },
      { type: "mcq", q: "Which verb does NOT follow finir?", options: ["choisir", "partir", "réussir"], answer: 1, explain: "[[partir]] is irregular: [[nous partons]], with no -iss-." },
      { type: "order", words: ["Les", "enfants", "grandissent", "vite."], en: "Children grow up fast." },
      { type: "speak", fr: "Je finis mon travail et j'attends le bus.", en: "I finish my work and I wait for the bus." }
    ]
  },

  /* ------------------------------------------------------------------ */
  {
    id: "g-irregular",
    cat: "grammar",
    title: "Key irregular verbs: venir, partir, sortir, dormir, mettre, lire, écrire, dire, voir, savoir, connaître",
    minutes: 25,
    summary: "Learn eleven everyday irregular verbs in small families, from je pars to ils connaissent, and finally get savoir vs connaître right.",
    sections: [
      {
        h: "Irregular, but not random",
        p: "These eleven verbs are irregular, but most of them come in small families that share a pattern. One thing helps with all of them: the <b>singular</b> forms (je, tu, il) are short and sound the same, while the <b>plural</b> forms (nous, vous, ils) are longer and often bring back a 'hidden' consonant: [[je pars]] → [[nous partons]]. Don't try to learn them all in one day. Take one family a day and say every form out loud. Tap any form in the tables to hear it."
      },
      {
        h: "Family 1: partir, sortir, dormir",
        table: { head: ["", "partir (to leave)", "sortir (to go out)", "dormir (to sleep)"], rows: [
          ["je", "[[je pars|zhuh PAR]]", "[[je sors|zhuh SOR]]", "[[je dors|zhuh DOR]]"],
          ["tu", "[[tu pars|tü PAR]]", "[[tu sors|tü SOR]]", "[[tu dors|tü DOR]]"],
          ["il / elle / on", "[[il part|eel PAR]]", "[[il sort|eel SOR]]", "[[il dort|eel DOR]]"],
          ["nous", "[[nous partons|noo par-TOHN]]", "[[nous sortons|noo sor-TOHN]]", "[[nous dormons|noo dor-MOHN]]"],
          ["vous", "[[vous partez|voo par-TAY]]", "[[vous sortez|voo sor-TAY]]", "[[vous dormez|voo dor-MAY]]"],
          ["ils / elles", "[[ils partent|eel PART]]", "[[ils sortent|eel SORT]]", "[[ils dorment|eel DORM]]"]
        ] }
      },
      {
        h: "Family 2: venir, revenir, devenir",
        table: { head: ["", "venir (to come)", "revenir (to come back)", "devenir (to become)"], rows: [
          ["je", "[[je viens|zhuh VYEHN]]", "[[je reviens|zhuh ruh-VYEHN]]", "[[je deviens|zhuh duh-VYEHN]]"],
          ["tu", "[[tu viens|tü VYEHN]]", "[[tu reviens|tü ruh-VYEHN]]", "[[tu deviens|tü duh-VYEHN]]"],
          ["il / elle / on", "[[il vient|eel VYEHN]]", "[[il revient|eel ruh-VYEHN]]", "[[il devient|eel duh-VYEHN]]"],
          ["nous", "[[nous venons|noo vuh-NOHN]]", "[[nous revenons|noo ruh-vuh-NOHN]]", "[[nous devenons|noo duh-vuh-NOHN]]"],
          ["vous", "[[vous venez|voo vuh-NAY]]", "[[vous revenez|voo ruh-vuh-NAY]]", "[[vous devenez|voo duh-vuh-NAY]]"],
          ["ils / elles", "[[ils viennent|eel VYEN]]", "[[ils reviennent|eel ruh-VYEN]]", "[[ils deviennent|eel duh-VYEN]]"]
        ] }
      },
      {
        h: "Family 3: lire, dire, écrire",
        table: { head: ["", "lire (to read)", "dire (to say)", "écrire (to write)"], rows: [
          ["je", "[[je lis|zhuh LEE]]", "[[je dis|zhuh DEE]]", "[[j'écris|zhay-KREE]]"],
          ["tu", "[[tu lis|tü LEE]]", "[[tu dis|tü DEE]]", "[[tu écris|tü ay-KREE]]"],
          ["il / elle / on", "[[il lit|eel LEE]]", "[[il dit|eel DEE]]", "[[il écrit|ee-lay-KREE]]"],
          ["nous", "[[nous lisons|noo lee-ZOHN]]", "[[nous disons|noo dee-ZOHN]]", "[[nous écrivons|noo zay-kree-VOHN]]"],
          ["vous", "[[vous lisez|voo lee-ZAY]]", "[[vous dites|voo DEET]] (!)", "[[vous écrivez|voo zay-kree-VAY]]"],
          ["ils / elles", "[[ils lisent|eel LEEZ]]", "[[ils disent|eel DEEZ]]", "[[ils écrivent|eel zay-KREEV]]"]
        ] }
      },
      {
        h: "Two more: mettre and voir",
        table: { head: ["", "mettre (to put, to put on)", "voir (to see)"], rows: [
          ["je", "[[je mets|zhuh MEH]]", "[[je vois|zhuh VWAH]]"],
          ["tu", "[[tu mets|tü MEH]]", "[[tu vois|tü VWAH]]"],
          ["il / elle / on", "[[il met|eel MEH]]", "[[il voit|eel VWAH]]"],
          ["nous", "[[nous mettons|noo meh-TOHN]]", "[[nous voyons|noo vwah-YOHN]]"],
          ["vous", "[[vous mettez|voo meh-TAY]]", "[[vous voyez|voo vwah-YAY]]"],
          ["ils / elles", "[[ils mettent|eel MEHT]]", "[[ils voient|eel VWAH]]"]
        ] }
      },
      {
        h: "How to use them",
        examples: [
          { fr: "Je pars à huit heures.", en: "I leave at eight o'clock.", say: "zhuh par ah wee-TUHR" },
          { fr: "Le train part de Delhi à midi.", en: "The train leaves Delhi at noon." },
          { fr: "Tu sors ce soir ?", en: "Are you going out tonight?", say: "tü sor suh SWAHR" },
          { fr: "Le bébé dort.", en: "The baby is sleeping.", say: "luh bay-bay DOR" },
          { fr: "Je reviens dans cinq minutes.", en: "I'll be back in five minutes." },
          { fr: "Elle devient médecin.", en: "She's becoming a doctor." },
          { fr: "Je mets un pull : il fait froid.", en: "I'm putting on a sweater: it's cold." },
          { fr: "Il lit le journal et elle écrit un e-mail.", en: "He's reading the newspaper and she's writing an email." },
          { fr: "Comment dit-on « merci » en hindi ?", en: "How do you say 'merci' in Hindi?" },
          { fr: "Tu vois la tour Eiffel ?", en: "Can you see the Eiffel Tower?" }
        ]
      },
      {
        h: "Savoir or connaître? Both mean 'to know'",
        table: { head: ["", "savoir", "connaître"], rows: [
          ["je", "[[je sais|zhuh SEH]]", "[[je connais|zhuh koh-NEH]]"],
          ["tu", "[[tu sais|tü SEH]]", "[[tu connais|tü koh-NEH]]"],
          ["il / elle / on", "[[il sait|eel SEH]]", "[[il connaît|eel koh-NEH]]"],
          ["nous", "[[nous savons|noo sah-VOHN]]", "[[nous connaissons|noo koh-neh-SOHN]]"],
          ["vous", "[[vous savez|voo sah-VAY]]", "[[vous connaissez|voo koh-neh-SAY]]"],
          ["ils / elles", "[[ils savent|eel SAHV]]", "[[ils connaissent|eel koh-NEHS]]"],
          ["<b>Use it for…</b>", "<b>facts</b> and information, and <b>how to do</b> something (+ an infinitive)", "<b>people, places and things</b> you're familiar with (+ a noun)"]
        ] }
      },
      {
        examples: [
          { fr: "Je sais nager.", en: "I can swim. (I know how to swim.)", say: "zhuh seh nah-ZHAY" },
          { fr: "Je ne sais pas.", en: "I don't know.", say: "zhuh nuh seh PAH" },
          { fr: "Tu sais où est la gare ?", en: "Do you know where the station is?", say: "tü seh oo eh lah GAR" },
          { fr: "Il sait jouer au cricket.", en: "He knows how to play cricket." },
          { fr: "Je connais Paris.", en: "I know Paris.", say: "zhuh koh-neh pah-REE" },
          { fr: "Tu connais Marie ?", en: "Do you know Marie?", say: "tü koh-neh mah-REE" },
          { fr: "Vous connaissez un bon restaurant indien ?", en: "Do you know a good Indian restaurant?" }
        ]
      },
      {
        warn: "<s>vous disez</s> → [[vous dites]], like [[vous faites]] and [[vous êtes]].<br>Someone asks [[Où est la gare ?]] and you have no idea: say [[Je ne sais pas.]], not 'Je ne connais pas' (that's for a person or a place you don't know).<br>In [[il part]], [[il dort]], [[il met]], the final t is silent, but in [[ils partent]], [[ils dorment]], [[ils mettent]] you hear the last consonant."
      },
      {
        h: "Use it",
        dialogue: [
          ["Hugo", "Tu sors ce soir, Meera ?", "Are you going out tonight, Meera?"],
          ["Meera", "Non, je pars tôt demain : je vais à Lyon.", "No, I'm leaving early tomorrow: I'm going to Lyon."],
          ["Hugo", "Tu connais Lyon ?", "Do you know Lyon?"],
          ["Meera", "Non, je ne connais pas la ville. Tu sais où est la gare Part-Dieu ?", "No, I don't know the city. Do you know where Part-Dieu station is?"],
          ["Hugo", "Oui, je sais : c'est près du centre-ville. Tu reviens quand ?", "Yes, I do: it's near the city centre. When are you coming back?"],
          ["Meera", "Dimanche soir. Et toi, qu'est-ce que tu fais ce soir ?", "Sunday evening. And you, what are you doing tonight?"],
          ["Hugo", "Je reste à la maison. Je lis un bon livre, et après, je dors !", "I'm staying in. I'm reading a good book, and after that, I'm sleeping!"],
          ["Meera", "Bonne soirée, alors !", "Have a good evening, then!"]
        ]
      }
    ],
    quiz: [
      { type: "mcq", q: "Le train ___ à midi.", options: ["pars", "part", "partons"], answer: 1, explain: "[[il part]], so [[le train part]]. The t is silent." },
      { type: "fill", q: "Nous ___ (sortir) ce soir.", answer: ["sortons"], explain: "[[nous sortons|noo sor-TOHN]]: the t comes back in the plural." },
      { type: "fill", q: "Ils ___ (venir) de Chennai.", answer: ["viennent"], explain: "[[ils viennent|eel VYEN]], with a double n." },
      { type: "mcq", q: "Qu'est-ce que vous ___ ? (dire)", options: ["disez", "disent", "dites"], answer: 2, explain: "[[vous dites]], like [[vous faites]] and [[vous êtes]]." },
      { type: "mcq", q: "How do you say 'I don't know where the bank is'?", options: ["Je ne connais pas où est la banque.", "Je ne sais pas où est la banque.", "Je ne sais pas la banque."], answer: 1, explain: "Information (where something is) → [[savoir]]." },
      { type: "mcq", q: "Tu ___ Marie ?", options: ["connais", "sais", "connaît"], answer: 0, explain: "A person → [[connaître]]: [[tu connais]]." },
      { type: "fill", q: "J'___ (écrire) une lettre.", answer: ["écris"], explain: "[[j'écris|zhay-KREE]]" },
      { type: "listen", say: "Ils lisent le journal.", options: ["He reads the newspaper.", "They write for the newspaper.", "They're reading the newspaper."], answer: 2, explain: "You hear the z sound in [[lisent|LEEZ]], so it's plural." },
      { type: "listen", say: "Je mets un pull.", options: ["I'm putting on a sweater.", "I'm buying a sweater.", "I can see a sweater."], answer: 0 },
      { type: "mcq", q: "Vous ___ la tour Eiffel ? (voir)", options: ["voiez", "voyez", "voyons"], answer: 1, explain: "[[vous voyez|voo vwah-YAY]]: the i becomes y with nous and vous." },
      { type: "order", words: ["Je", "ne", "sais", "pas", "nager."], en: "I can't swim." },
      { type: "speak", fr: "Tu sais où est la gare ? Je ne connais pas la ville.", en: "Do you know where the station is? I don't know the town." }
    ]
  },

  /* ------------------------------------------------------------------ */
  {
    id: "g-prepositions-place",
    cat: "grammar",
    title: "Where is it? Prepositions of place & il y a",
    minutes: 15,
    summary: "Say where things are (sur la table, à côté du lit, en face de la gare), ask Où est… ? and describe a room or a street with il y a.",
    sections: [
      {
        h: "Little words of place",
        p: "To find your way, describe your home or answer DELF questions about a picture, you need little words like <b>on, under, next to, opposite</b>. Most of them are easy. The only trick is the ones that end in [[de]]: just like [[à]], [[de]] merges with [[le]] and [[les]]."
      },
      {
        h: "The simple ones",
        table: { head: ["French", "English", "Example"], rows: [
          ["[[sur|SÜR]]", "on", "[[Le livre est sur la table.]]"],
          ["[[sous|SOO]]", "under", "[[Le chat est sous le lit.]]"],
          ["[[dans|DAHN]]", "in", "[[Mon téléphone est dans mon sac.]]"],
          ["[[devant|duh-VAHN]]", "in front of", "[[Le taxi est devant l'hôtel.]]"],
          ["[[derrière|deh-RYEHR]]", "behind", "[[Le jardin est derrière la maison.]]"],
          ["[[entre|AHN-truh]]", "between", "[[La pharmacie est entre la banque et la poste.]]"]
        ] }
      },
      {
        h: "The ones with de",
        table: { head: ["French", "English"], rows: [
          ["[[à côté de|ah koh-TAY duh]]", "next to"],
          ["[[en face de|ahn FAHS duh]]", "opposite"],
          ["[[près de|PREH duh]]", "near"],
          ["[[loin de|LWEHN duh]]", "far from"],
          ["[[à gauche de|ah GOHSH duh]]", "to the left of"],
          ["[[à droite de|ah DRWAHT duh]]", "to the right of"],
          ["[[au milieu de|oh mee-LYUH duh]]", "in the middle of"],
          ["[[au coin de|oh KWEHN duh]]", "at the corner of"]
        ] }
      },
      {
        h: "de + the = du, de la, de l', des",
        table: { head: ["de + …", "becomes", "Example"], rows: [
          ["de + le", "<b>du</b>", "[[à côté du lit]] (next to the bed)"],
          ["de + la", "<b>de la</b> (no change)", "[[en face de la gare]] (opposite the station)"],
          ["de + l'", "<b>de l'</b> (no change)", "[[près de l'école]] (near the school)"],
          ["de + les", "<b>des</b>", "[[en face des magasins]] (opposite the shops)"]
        ] }
      },
      {
        warn: "<s>à côté de le lit</s> → [[à côté du lit]]; <s>en face de les magasins</s> → [[en face des magasins]].<br>With a city or a person's name, there's no article: [[près de Paris]], [[à côté de Paul]].<br>With no noun after it, drop the [[de]]: [[La pharmacie est à droite.]] [[C'est loin ?]]"
      },
      {
        h: "Il y a = there is / there are",
        examples: [
          { fr: "Il y a un lit et une armoire dans ma chambre.", en: "There's a bed and a wardrobe in my bedroom." },
          { fr: "Il y a des magasins dans ma rue.", en: "There are shops in my street.", say: "eel yah day mah-gah-ZEHN dahn mah RÜ" },
          { fr: "Il n'y a pas de télévision.", en: "There's no TV.", say: "eel nyah pah duh tay-lay-vee-ZYOHN" },
          { fr: "Il n'y a pas d'ascenseur.", en: "There's no lift.", say: "eel nyah pah dah-sahn-SUHR" },
          { fr: "Est-ce qu'il y a une pharmacie près d'ici ?", en: "Is there a pharmacy near here?", say: "ehs-keel yah ün far-mah-SEE preh dee-SEE" }
        ]
      },
      {
        tip: "[[Il y a|eel YAH]] never changes: [[il y a un chat]], [[il y a trois chats]]. In the negative, [[un]], [[une]] and [[des]] become [[de]] (or <b>d'</b> before a vowel): [[Il y a une banque.]] → [[Il n'y a pas de banque.]]"
      },
      {
        h: "Où est… ? / Où sont… ?",
        examples: [
          { fr: "Où est la gare ? — Elle est en face du musée.", en: "Where's the station? — It's opposite the museum." },
          { fr: "Où sont mes clés ? — Sur la table !", en: "Where are my keys? — On the table!" },
          { fr: "Où est le chat ? — Il est sous le lit.", en: "Where's the cat? — It's under the bed." },
          { fr: "Où sont les toilettes, s'il vous plaît ?", en: "Where are the toilets, please?", say: "oo sohn lay twah-LEHT, seel voo PLEH" }
        ]
      },
      {
        h: "Describe a room: ma chambre",
        examples: [
          { fr: "Dans ma chambre, il y a un lit, une table et une chaise.", en: "In my bedroom, there's a bed, a table and a chair." },
          { fr: "Le lit est à côté de la fenêtre.", en: "The bed is next to the window." },
          { fr: "La table est en face du lit.", en: "The table is opposite the bed." },
          { fr: "Sur la table, il y a mon ordinateur et des livres.", en: "On the table, there's my computer and some books." },
          { fr: "Au milieu de la chambre, il y a un grand tapis.", en: "In the middle of the room, there's a big rug." },
          { fr: "Sous le lit, il y a mes chaussures !", en: "Under the bed, there are my shoes!" }
        ]
      },
      {
        h: "Use it: in the street",
        dialogue: [
          ["Touriste", "Excusez-moi, est-ce qu'il y a une banque près d'ici ?", "Excuse me, is there a bank near here?"],
          ["Passante", "Oui, il y a une banque rue Victor-Hugo, à cinq minutes.", "Yes, there's a bank on Victor Hugo Street, five minutes away."],
          ["Touriste", "Et où est la rue Victor-Hugo ?", "And where is Victor Hugo Street?"],
          ["Passante", "Allez tout droit, puis tournez à gauche. La banque est en face de la poste, entre le café et la pharmacie.", "Go straight on, then turn left. The bank is opposite the post office, between the café and the pharmacy."],
          ["Touriste", "En face de la poste… D'accord. Ce n'est pas loin ?", "Opposite the post office… OK. It's not far?"],
          ["Passante", "Non, c'est tout près !", "No, it's very close!"],
          ["Touriste", "Merci beaucoup, madame !", "Thank you very much!"],
          ["Passante", "De rien. Bonne journée !", "You're welcome. Have a nice day!"]
        ]
      }
    ],
    quiz: [
      { type: "mcq", q: "Le chat est ___ la table. (under)", options: ["sur", "sous", "dans"], answer: 1, explain: "[[sous|SOO]] = under, [[sur|SÜR]] = on." },
      { type: "fill", q: "La pharmacie est à côté ___ cinéma.", answer: ["du"], explain: "de + le = [[du]]: [[à côté du cinéma]]." },
      { type: "fill", q: "J'habite en face ___ magasins.", answer: ["des"], explain: "de + les = [[des]]: [[en face des magasins]]." },
      { type: "mcq", q: "Il n'y a pas ___ ascenseur.", options: ["d'", "un", "de l'"], answer: 0, explain: "In the negative → de, and d' before a vowel: [[Il n'y a pas d'ascenseur.]]" },
      { type: "listen", say: "La banque est en face de la gare.", options: ["The bank is next to the station.", "The bank is far from the station.", "The bank is opposite the station."], answer: 2 },
      { type: "listen", say: "Où sont les toilettes ?", options: ["Where are the toilets?", "Where is the station?", "Are there any toilets?"], answer: 0 },
      { type: "mcq", q: "Mes clés ___ dans mon sac.", options: ["est", "sont", "a"], answer: 1, explain: "[[mes clés]] is plural → [[sont]]: [[Mes clés sont dans mon sac.]]" },
      { type: "fill", q: "Il y a une école près ___ l'hôpital.", answer: ["de"], explain: "de + l' doesn't change: [[près de l'hôpital]]." },
      { type: "mcq", q: "L'école est ___ la banque et la poste.", options: ["sur", "devant", "entre"], answer: 2, explain: "[[entre]] … [[et]] … = between … and …" },
      { type: "order", words: ["Le", "livre", "est", "sur", "la", "table."], en: "The book is on the table." },
      { type: "speak", fr: "Il y a une pharmacie à côté de la gare.", en: "There's a pharmacy next to the station." }
    ]
  },

  /* ------------------------------------------------------------------ */
  {
    id: "g-stressed",
    cat: "grammar",
    title: "Moi, toi, lui… (stressed pronouns)",
    minutes: 12,
    summary: "Use moi, toi, lui, elle, nous, vous, eux, elles to add emphasis, after avec / pour / chez, in quick answers like Moi aussi ! and in comparisons.",
    sections: [
      {
        h: "A second set of 'I, you, he…'",
        p: "You know the first set of pronouns: [[je]], [[tu]], [[il]]… They must stand right in front of a verb. French has a second set, [[moi]], [[toi]], [[lui]]…, called <b>stressed pronouns</b> because they carry weight. They can stand on their own, come after a little word like [[avec]] (with), or start a sentence for emphasis."
      },
      {
        table: { head: ["Subject", "Stressed", "Example"], rows: [
          ["je", "[[moi|MWAH]]", "[[avec moi]] (with me)"],
          ["tu", "[[toi|TWAH]]", "[[pour toi]] (for you)"],
          ["il", "[[lui|LWEE]]", "[[chez lui]] (at his place)"],
          ["elle", "[[elle|EHL]]", "[[sans elle]] (without her)"],
          ["nous", "[[nous|NOO]]", "[[chez nous]] (at our place)"],
          ["vous", "[[vous|VOO]]", "[[avec vous]] (with you)"],
          ["ils", "[[eux|UH]]", "[[pour eux]] (for them)"],
          ["elles", "[[elles|EHL]]", "[[avec elles]] (with them, all female)"]
        ] }
      },
      {
        tip: "Only four are really new: [[moi]], [[toi]], [[lui]] and [[eux]]. [[elle]], [[nous]], [[vous]] and [[elles]] look the same in both sets."
      },
      {
        h: "1. For emphasis",
        examples: [
          { fr: "Moi, je m'appelle Sara. Et toi ?", en: "Me, I'm Sara. What about you?", say: "MWAH, zhuh mah-pehl sah-RAH. ay TWAH" },
          { fr: "Toi, tu es toujours en retard !", en: "You're always late!" },
          { fr: "Lui, il est indien, et elle, elle est française.", en: "He's Indian, and she's French." },
          { fr: "Nous, nous habitons à Delhi.", en: "We live in Delhi." },
          { fr: "Eux, ils adorent le cricket.", en: "They love cricket." }
        ]
      },
      {
        h: "2. After avec, pour, chez, sans…",
        examples: [
          { fr: "Tu viens avec moi ?", en: "Are you coming with me?", say: "tü vyehn ah-vehk MWAH" },
          { fr: "Ce cadeau est pour toi.", en: "This present is for you.", say: "suh kah-doh eh poor TWAH" },
          { fr: "Ce soir, je dîne chez lui.", en: "Tonight I'm having dinner at his place." },
          { fr: "Je ne pars pas sans elle.", en: "I'm not leaving without her." },
          { fr: "Vous venez chez nous dimanche ?", en: "Are you coming to our place on Sunday?" }
        ]
      },
      {
        h: "3. Quick answers",
        table: { head: ["Someone says…", "You agree", "You disagree"], rows: [
          ["[[J'aime le cricket.]] (positive)", "[[Moi aussi.]] (Me too.)", "[[Pas moi.]] (Not me.)"],
          ["[[Je n'aime pas le froid.]] (negative)", "[[Moi non plus.]] (Me neither.)", "[[Moi, si !]] (I do!)"]
        ] }
      },
      {
        tip: "[[aussi]] answers a <b>positive</b> sentence; [[non plus]] answers a <b>negative</b> one. To bounce a question back, just say [[Et toi ?]] or [[Et vous ?]]: it's the easiest conversation trick in French."
      },
      {
        h: "4. After c'est, and in comparisons",
        examples: [
          { fr: "Qui est-ce ? — C'est moi !", en: "Who is it? — It's me!", say: "kee EHS? seh MWAH" },
          { fr: "C'est toi, Paul ?", en: "Is that you, Paul?" },
          { fr: "Mon frère est plus grand que moi.", en: "My brother is taller than me.", say: "mohn frehr eh plü grahn kuh MWAH" },
          { fr: "Ma sœur est plus jeune que lui.", en: "My sister is younger than him." }
        ]
      },
      {
        warn: "A subject pronoun can never stand alone: <s>Je aussi</s> → [[Moi aussi.]]; <s>avec je</s> → [[avec moi]]; <s>C'est je</s> → [[C'est moi.]]<br>And [[moi]] doesn't replace [[je]] in front of a verb, it comes in addition: <s>Moi suis indien</s> → [[Moi, je suis indien / indienne.]]"
      },
      {
        h: "Use it",
        dialogue: [
          ["Nina", "Tu aimes le cricket ?", "Do you like cricket?"],
          ["Dev", "Oui, j'adore ça ! Et toi ?", "Yes, I love it! And you?"],
          ["Nina", "Moi aussi ! Mais mon frère, lui, il préfère le foot.", "Me too! But my brother prefers football."],
          ["Dev", "Moi, je n'aime pas beaucoup le foot.", "I don't like football much."],
          ["Nina", "Moi non plus ! Ce soir, il y a un match de cricket à la télé. Tu viens chez moi ?", "Me neither! There's a cricket match on TV tonight. Do you want to come to my place?"],
          ["Dev", "Avec plaisir ! Et Arjun ? Je viens avec lui ?", "I'd love to! And Arjun? Shall I come with him?"],
          ["Nina", "Bien sûr, viens avec lui ! À ce soir !", "Of course, come with him! See you tonight!"]
        ]
      }
    ],
    quiz: [
      { type: "mcq", q: "Tu viens avec ___ ?", options: ["je", "me", "moi"], answer: 2, explain: "After [[avec]], use the stressed pronoun: [[avec moi]]." },
      { type: "fill", q: "J'adore le thé. — ___ aussi ! (Me)", answer: ["Moi", "moi"], explain: "[[Moi aussi !]] = Me too!" },
      { type: "mcq", q: "Je n'aime pas le froid. — Moi ___ !", options: ["non plus", "aussi", "pas"], answer: 0, explain: "Agreeing with a negative sentence → [[Moi non plus.]]" },
      { type: "fill", q: "Ce soir, je vais chez ___. (him)", answer: ["lui"], explain: "[[chez lui]] = at / to his place." },
      { type: "mcq", q: "What's the stressed pronoun for [[ils]]?", options: ["ils", "eux", "leur"], answer: 1, explain: "[[ils]] → [[eux]]; [[elles]] stays [[elles]]." },
      { type: "listen", say: "C'est pour toi.", options: ["It's for you.", "It's for me.", "It's you."], answer: 0 },
      { type: "listen", say: "Elle est plus grande que lui.", options: ["He's taller than her.", "She's taller than him.", "She's as tall as him."], answer: 1 },
      { type: "fill", q: "Qui est-ce ? — C'est ___ ! (me)", answer: ["moi"], explain: "[[C'est moi !]] (never 'c'est je')." },
      { type: "mcq", q: "Which sentence is correct?", options: ["Moi suis de Mumbai.", "Je, moi suis de Mumbai.", "Moi, je suis de Mumbai."], answer: 2, explain: "[[moi]] adds emphasis, but you still need [[je]] before the verb." },
      { type: "order", words: ["Elle", "dîne", "chez", "nous."], en: "She's having dinner at our place." },
      { type: "speak", fr: "Moi, j'habite à Mumbai. Et toi ?", en: "Me, I live in Mumbai. And you?" }
    ]
  },

  /* ------------------------------------------------------------------ */
  {
    id: "g-reflexive",
    cat: "grammar",
    title: "Reflexive verbs: se lever, s'appeler (daily routine)",
    minutes: 18,
    summary: "Describe your daily routine (je me réveille, je me lève, je me douche, je me couche) and use reflexive verbs in the negative and after aller.",
    sections: [
      {
        h: "Verbs you do to yourself",
        p: "A <b>reflexive verb</b> describes something you do to yourself. English often hides the 'myself': <i>I wash, I get dressed</i>. French always shows it with a small pronoun: [[je me lave]] (literally 'I wash myself'). In the dictionary, these verbs have [[se]] in front: [[se laver]], [[se lever]]. Most daily-routine verbs are reflexive, and you've used one since day one: [[Je m'appelle…]] (literally 'I call myself…')."
      },
      {
        h: "The pattern: se laver (to wash)",
        conj: { verb: "se laver", en: "to wash (yourself)", rows: [
          ["je me lave", "I wash", "zhuh muh LAHV"],
          ["tu te laves", "you wash", "tü tuh LAHV"],
          ["il / elle / on se lave", "he / she washes; we wash", "eel / ehl / ohn suh LAHV"],
          ["nous nous lavons", "we wash", "noo noo lah-VOHN"],
          ["vous vous lavez", "you wash (polite or plural)", "voo voo lah-VAY"],
          ["ils / elles se lavent", "they wash", "eel / ehl suh LAHV"]
        ] }
      },
      {
        h: "Your daily routine",
        table: { head: ["Verb", "Meaning", "I…"], rows: [
          ["[[se réveiller]]", "to wake up", "[[je me réveille|zhuh muh ray-VEH-y]]"],
          ["[[se lever]]", "to get up", "[[je me lève|zhuh muh LEHV]]"],
          ["[[se doucher]]", "to have a shower", "[[je me douche|zhuh muh DOOSH]]"],
          ["[[se laver]]", "to wash", "[[je me lave|zhuh muh LAHV]]"],
          ["[[se brosser les dents]]", "to brush your teeth", "[[je me brosse les dents|zhuh muh bros lay DAHN]]"],
          ["[[s'habiller]]", "to get dressed", "[[je m'habille|zhuh mah-BEE-y]]"],
          ["[[se promener]]", "to go for a walk", "[[je me promène|zhuh muh proh-MEN]]"],
          ["[[se reposer]]", "to rest", "[[je me repose|zhuh muh ruh-POHZ]]"],
          ["[[s'amuser]]", "to have fun", "[[je m'amuse|zhuh mah-MÜZ]]"],
          ["[[se coucher]]", "to go to bed", "[[je me couche|zhuh muh KOOSH]]"]
        ] }
      },
      {
        h: "S'appeler: two l or one l?",
        conj: { verb: "s'appeler", en: "to be called", rows: [
          ["je m'appelle", "my name is", "zhuh mah-PEHL"],
          ["tu t'appelles", "your name is", "tü tah-PEHL"],
          ["il / elle / on s'appelle", "his / her name is", "eel / ehl / ohn sah-PEHL"],
          ["nous nous appelons", "our names are", "noo noo zah-PLOHN"],
          ["vous vous appelez", "your name is / your names are", "voo voo zah-PLAY"],
          ["ils / elles s'appellent", "their names are", "eel / ehl sah-PEHL"]
        ] }
      },
      {
        h: "Se lever (to get up): è or e?",
        conj: { verb: "se lever", en: "to get up", rows: [
          ["je me lève", "I get up", "zhuh muh LEHV"],
          ["tu te lèves", "you get up", "tü tuh LEHV"],
          ["il / elle / on se lève", "he / she gets up; we get up", "eel / ehl / ohn suh LEHV"],
          ["nous nous levons", "we get up", "noo noo luh-VOHN"],
          ["vous vous levez", "you get up (polite or plural)", "voo voo luh-VAY"],
          ["ils / elles se lèvent", "they get up", "eel / ehl suh LEHV"]
        ] }
      },
      {
        tip: "Three spelling points:<br>• Before a vowel or a silent h, [[me]], [[te]], [[se]] become <b>m'</b>, <b>t'</b>, <b>s'</b>: [[je m'appelle]], [[tu t'habilles]], [[il s'amuse]].<br>• [[s'appeler]] has <b>two l</b> when the ending is silent ([[je m'appelle]], [[ils s'appellent]]) and <b>one l</b> with nous and vous ([[nous nous appelons]], [[vous vous appelez]]). The sound changes too.<br>• [[se lever]] and [[se promener]] take an <b>è</b> in the same places: [[je me lève]], [[ils se promènent]], but [[nous nous levons]], [[vous vous promenez]]."
      },
      {
        warn: "In the negative, [[ne]] goes <b>before</b> the little pronoun and [[pas]] goes <b>after</b> the verb. The pronoun stays glued to its verb:<br>[[Je ne me lève pas tôt.]] (not <s>Je me ne lève pas</s>)<br>[[Tu ne te reposes pas ?]]<br>[[Nous ne nous couchons pas tard.]]"
      },
      {
        h: "With aller + infinitive: the pronoun matches the person",
        examples: [
          { fr: "Je vais me coucher.", en: "I'm going to bed. (I'm going to go to bed.)", say: "zhuh veh muh koo-SHAY" },
          { fr: "Tu vas te doucher ?", en: "Are you going to have a shower?", say: "tü vah tuh doo-SHAY" },
          { fr: "Nous allons nous promener dans le parc.", en: "We're going to go for a walk in the park." },
          { fr: "Ce week-end, ils vont s'amuser !", en: "This weekend, they're going to have fun!" }
        ]
      },
      {
        note: "With parts of the body, French says <b>the</b>, not <i>my</i>: the [[me]] already tells you whose hands they are. [[Je me lave les mains.]] (I wash my hands.) [[Elle se brosse les dents.]] (She brushes her teeth.) [[Je me lave les cheveux.]] (I wash my hair.) Not <s>Je me lave mes mains</s>."
      },
      {
        h: "Ma journée (my day)",
        examples: [
          { fr: "Je me réveille à six heures et demie.", en: "I wake up at half past six." },
          { fr: "Je ne me lève pas tout de suite !", en: "I don't get up straight away!" },
          { fr: "Je me douche, je me brosse les dents et je m'habille.", en: "I have a shower, brush my teeth and get dressed." },
          { fr: "Je prends un thé chaï et je pars au travail.", en: "I have a chai and leave for work." },
          { fr: "Le soir, je me repose ou je me promène dans le parc.", en: "In the evening, I rest or go for a walk in the park." },
          { fr: "Le week-end, je m'amuse avec mes amis.", en: "At the weekend, I have fun with my friends." },
          { fr: "Je me couche à onze heures.", en: "I go to bed at eleven." }
        ]
      }
    ],
    quiz: [
      { type: "mcq", q: "Je ___ lève à sept heures.", options: ["te", "me", "se"], answer: 1, explain: "[[je]] goes with [[me]]: [[je me lève]]." },
      { type: "fill", q: "Nous ___ couchons tard.", answer: ["nous"], explain: "[[nous nous couchons]]: yes, nous twice!" },
      { type: "mcq", q: "Elle ___ habille.", options: ["se", "me", "s'"], answer: 2, explain: "Before a vowel or a silent h, [[se]] becomes <b>s'</b>: [[elle s'habille]]." },
      { type: "fill", q: "Vous vous ___ comment ? (s'appeler)", answer: ["appelez"], explain: "[[vous vous appelez]], with one l." },
      { type: "mcq", q: "Which sentence is correct?", options: ["Je ne me lève pas tôt.", "Je me ne lève pas tôt.", "Je ne lève pas me tôt."], answer: 0, explain: "[[ne]] + pronoun + verb + [[pas]]." },
      { type: "listen", say: "Ils se couchent à minuit.", options: ["They wake up at midnight.", "They get up at midnight.", "They go to bed at midnight."], answer: 2, explain: "[[se coucher]] = to go to bed." },
      { type: "listen", say: "Tu te brosses les dents ?", options: ["Are you brushing your teeth?", "Are you washing your hands?", "Are you getting dressed?"], answer: 0 },
      { type: "fill", q: "Je vais ___ coucher.", answer: ["me"], explain: "After aller, the pronoun still matches the person: [[je vais me coucher]]." },
      { type: "mcq", q: "Ils s'___ Léa et Tom.", options: ["appelent", "appellent", "appelons"], answer: 1, explain: "Silent ending → two l: [[ils s'appellent]]." },
      { type: "order", words: ["Je", "me", "lave", "les", "mains."], en: "I wash my hands." },
      { type: "speak", fr: "Je me lève à sept heures et je me douche.", en: "I get up at seven and I have a shower." }
    ]
  },

  /* ------------------------------------------------------------------ */
  {
    id: "g-modals",
    cat: "grammar",
    title: "Vouloir, pouvoir, devoir + infinitive",
    minutes: 18,
    summary: "Say what you want to do, can do and must do (je veux partir, je peux venir, je dois travailler), make polite requests and say no to an invitation nicely.",
    sections: [
      {
        h: "Want, can, must",
        p: "Three verbs do a lot of work in everyday French: [[vouloir]] (to want), [[pouvoir]] (can, to be able to) and [[devoir]] (must, to have to). They're irregular, but they share a pattern, and they're usually followed by a second verb in the <b>infinitive</b>, the dictionary form: [[partir]], [[venir]], [[travailler]]. Just like English: <i>I want <b>to leave</b>, I can <b>come</b></i>."
      },
      {
        h: "Vouloir (to want)",
        conj: { verb: "vouloir", en: "to want", rows: [
          ["je veux", "I want", "zhuh VUH"],
          ["tu veux", "you want", "tü VUH"],
          ["il / elle / on veut", "he / she wants; we want", "eel / ehl / ohn VUH"],
          ["nous voulons", "we want", "noo voo-LOHN"],
          ["vous voulez", "you want (polite or plural)", "voo voo-LAY"],
          ["ils / elles veulent", "they want", "eel / ehl VUHL"]
        ] }
      },
      {
        h: "Pouvoir (can, to be able to)",
        conj: { verb: "pouvoir", en: "can / to be able to", rows: [
          ["je peux", "I can", "zhuh PUH"],
          ["tu peux", "you can", "tü PUH"],
          ["il / elle / on peut", "he / she can; we can", "eel / ehl / ohn PUH"],
          ["nous pouvons", "we can", "noo poo-VOHN"],
          ["vous pouvez", "you can (polite or plural)", "voo poo-VAY"],
          ["ils / elles peuvent", "they can", "eel / ehl PUHV"]
        ] }
      },
      {
        h: "Devoir (must, to have to)",
        conj: { verb: "devoir", en: "must / to have to", rows: [
          ["je dois", "I must / I have to", "zhuh DWAH"],
          ["tu dois", "you must", "tü DWAH"],
          ["il / elle / on doit", "he / she must; we must", "eel / ehl / ohn DWAH"],
          ["nous devons", "we must", "noo duh-VOHN"],
          ["vous devez", "you must (polite or plural)", "voo duh-VAY"],
          ["ils / elles doivent", "they must", "eel / ehl DWAHV"]
        ] }
      },
      {
        tip: "Spot the shared pattern. The je, tu and il forms all sound the same: [[je veux]], [[tu veux]], [[il veut]] are all <b>VUH</b>. Note the <b>x</b> in [[je veux]] and [[je peux]]. In the ils form, a consonant appears at the end: [[ils veulent|eel VUHL]], [[ils peuvent|eel PUHV]], [[ils doivent|eel DWAHV]]."
      },
      {
        h: "Verb + infinitive",
        examples: [
          { fr: "Je veux partir.", en: "I want to leave.", say: "zhuh vuh par-TEER" },
          { fr: "Je peux venir demain.", en: "I can come tomorrow.", say: "zhuh puh vuh-neer duh-MEHN" },
          { fr: "Je dois travailler.", en: "I have to work.", say: "zhuh dwah trah-vah-YAY" },
          { fr: "Nous devons partir à six heures.", en: "We have to leave at six." },
          { fr: "Ils peuvent dormir chez nous.", en: "They can sleep at our place." },
          { fr: "Tu veux un thé chaï ?", en: "Do you want a chai? (vouloir + a noun works too)" }
        ]
      },
      {
        h: "Polite requests with pouvoir",
        table: { head: ["French", "English"], rows: [
          ["[[Vous pouvez répéter, s'il vous plaît ?]]", "Could you repeat that, please?"],
          ["[[Vous pouvez parler plus lentement ?]]", "Could you speak more slowly?"],
          ["[[Je peux entrer ?]]", "May I come in?"],
          ["[[Tu peux m'aider ?]]", "Can you help me?"],
          ["[[Est-ce que je peux payer par carte ?]]", "Can I pay by card?"]
        ] }
      },
      {
        note: "[[Je voudrais]] is the polite form of [[je veux]] (it's the <i>conditional</i>; you'll see this later). With strangers, in shops or at work, say [[Je voudrais réserver une table.]] rather than [[Je veux réserver une table.]] With friends, [[je veux]] is fine, and [[Oui, je veux bien !]] is a warm way to say 'Yes, I'd love to!'"
      },
      {
        warn: "Put <b>ne… pas</b> around the <b>first</b> verb, and keep the second verb in the infinitive:<br>[[Je ne peux pas venir ce soir, je dois travailler.]]<br>[[Elle ne veut pas manger.]]<br>Never conjugate the second verb: <s>Je dois travaille</s> → [[Je dois travailler.]]"
      },
      {
        h: "Use it: saying no nicely",
        dialogue: [
          ["Chloé", "Salut Arjun ! Tu veux venir au cinéma ce soir ?", "Hi Arjun! Do you want to come to the cinema tonight?"],
          ["Arjun", "Ce soir ? Désolé, je ne peux pas. Je dois travailler.", "Tonight? Sorry, I can't. I have to work."],
          ["Chloé", "Dommage ! Et demain, tu peux ?", "Shame! And tomorrow, can you?"],
          ["Arjun", "Oui, demain, je peux. On peut voir un film indien ?", "Yes, tomorrow I can. Can we see an Indian film?"],
          ["Chloé", "Bonne idée ! Tu veux dîner avant ?", "Good idea! Do you want to have dinner before?"],
          ["Arjun", "Oui, je veux bien ! Mais on doit réserver, non ?", "Yes, I'd love to! But we have to book, don't we?"],
          ["Chloé", "Pas de problème, je peux appeler le restaurant.", "No problem, I can call the restaurant."],
          ["Arjun", "Super ! À demain !", "Great! See you tomorrow!"]
        ]
      }
    ],
    quiz: [
      { type: "mcq", q: "Nous ___ partir à huit heures. (devoir)", options: ["doivons", "devons", "devez"], answer: 1, explain: "[[nous devons|noo duh-VOHN]]" },
      { type: "fill", q: "Tu ___ (pouvoir) m'aider ?", answer: ["peux"], explain: "[[tu peux]], with an x." },
      { type: "mcq", q: "Ils ___ venir avec nous. (vouloir)", options: ["voulent", "veut", "veulent"], answer: 2, explain: "[[ils veulent|eel VUHL]]" },
      { type: "fill", q: "Vous ___ (pouvoir) répéter, s'il vous plaît ?", answer: ["pouvez"], explain: "[[Vous pouvez répéter, s'il vous plaît ?]] will save you in every conversation!" },
      { type: "mcq", q: "Je dois ___ ce soir.", options: ["travailler", "travaille", "travaillé"], answer: 0, explain: "After devoir, the second verb stays in the infinitive: [[Je dois travailler.]]" },
      { type: "listen", say: "Je ne peux pas venir, je dois travailler.", options: ["I don't want to come, I'm working.", "I can't come, I have to work.", "I can come, but I have to work."], answer: 1 },
      { type: "listen", say: "Vous voulez un café ?", options: ["Can I have a coffee?", "Do you have a coffee?", "Would you like a coffee?"], answer: 2 },
      { type: "fill", q: "Elle ___ (devoir) partir.", answer: ["doit"], explain: "[[elle doit|ehl DWAH]]" },
      { type: "mcq", q: "Which is the most polite in a shop?", options: ["Je voudrais une baguette, s'il vous plaît.", "Je veux une baguette.", "Une baguette !"], answer: 0 },
      { type: "order", words: ["Je", "ne", "peux", "pas", "venir", "ce", "soir."], en: "I can't come tonight." },
      { type: "speak", fr: "Vous pouvez répéter, s'il vous plaît ?", en: "Could you repeat that, please?" }
    ]
  }

]);
