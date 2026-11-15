/* Grammar, part 1 — the 12 core A1 grammar lessons (original content). */
A1.addLessons([
  {
    id: "g-pronouns",
    cat: "grammar",
    title: "Subject pronouns & tu vs vous",
    minutes: 12,
    summary: "Learn the French words for I, you, he, she, we and they — and choose between tu and vous so you always sound friendly, never rude.",
    sections: [
      { p: "Almost every French sentence starts with a <b>subject</b>: the person or thing doing the action. Very often the subject is a <b>pronoun</b> (a short word that replaces a name), like 'I', 'you' or 'she'. You'll use these little words in every sentence you say, so they come first." },
      { h: "The subject pronouns", table: { head: ["French", "English", "Good to know"], rows: [
        ["[[je|zhuh]]", "I", "no capital letter (unlike 'I'); becomes [[j'|zh]] before a vowel or a silent h: [[j'aime|ZHEHM]], [[j'habite|zhah-BEET]]"],
        ["[[tu|TÜ]]", "you (one person you know well)", "the friendly 'you'"],
        ["[[il|EEL]]", "he / it", "'it' for a masculine thing: [[le train]] → [[il]]"],
        ["[[elle|EHL]]", "she / it", "'it' for a feminine thing: [[la voiture]] → [[elle]]"],
        ["[[on|OHN]]", "we (everyday speech) / people, one", "very common in conversation"],
        ["[[nous|NOO]]", "we", "a little more formal than [[on]]"],
        ["[[vous|VOO]]", "you (polite) / you (two or more people)", "the polite 'you' AND the plural 'you'"],
        ["[[ils|EEL]]", "they (men, mixed groups, masculine things)", "sounds exactly like [[il]]"],
        ["[[elles|EHL]]", "they (only women or feminine things)", "sounds exactly like [[elle]]"]
      ] } },
      { examples: [
        { fr: "Je parle anglais et hindi.", en: "I speak English and Hindi.", say: "zhuh parl ahn-gleh ay een-DEE" },
        { fr: "J'habite à Bangalore.", en: "I live in Bangalore.", say: "zhah-beet ah bahn-gah-LOR" },
        { fr: "Tu aimes le cricket ?", en: "Do you like cricket?", say: "tü ehm luh kree-KEHT" },
        { fr: "Il s'appelle Ravi.", en: "His name is Ravi.", say: "eel sah-pehl rah-VEE" },
        { fr: "Elle travaille à Delhi.", en: "She works in Delhi.", say: "ehl trah-vah-y ah deh-LEE" },
        { fr: "Ils regardent un match.", en: "They're watching a match.", say: "eel ruh-gard ehn MAHTSH" }
      ] },
      { h: "Tu or vous?", table: { head: ["Use tu with…", "Use vous with…"], rows: [
        ["a friend, a classmate", "someone you don't know: a shopkeeper, a waiter, a stranger in the street"],
        ["your family: parents, brothers, sisters, cousins", "your boss, a teacher, a doctor, an official"],
        ["a child, a pet", "an older person you don't know well"],
        ["young people of your age, in a relaxed place", "<b>any group</b> of two or more people — even close friends!"]
      ] } },
      { note: "Hindi speakers already know this idea! Hindi has three levels: <i>tu</i>, <i>tum</i> and <i>aap</i>. French has only two. [[tu]] covers <i>tu</i> and <i>tum</i> (friends, family, children), and [[vous]] is your <i>aap</i> (respect). One difference: French [[vous]] is also the normal 'you' for a group — even a group of close friends. And French [[tu]] is never rude with friends; it only sounds rude with a stranger." },
      { tip: "When in doubt, say [[vous]]. It's always polite and never wrong. If a French person wants you to say [[tu]], they will tell you: [[On peut se tutoyer ?]] = 'Can we say tu to each other?'" },
      { h: "On — the everyday 'we'", p: "[[on|OHN]] has two meanings. In everyday conversation it usually means <b>we</b>: [[On mange ?]] = 'Shall we eat?' French people say [[on]] much more often than [[nous]], which sounds more formal. [[on]] can also mean <b>people in general</b>: [[En Inde, on boit beaucoup de chaï.]] = 'In India, people drink a lot of chai.'<br><b>Grammar point:</b> [[on]] always takes the same verb form as [[il]] and [[elle]], even when it means 'we': [[on parle]], [[on est]], [[on a]]." },
      { warn: "[[elles]] is only for a group that is <b>100% female</b> (or for feminine things). If there is one man in the group — even one man with ten women — you must say [[ils]]. Priya, Meera and Ravi → [[ils]]. Priya and Meera → [[elles]]." },
      { h: "Use it: tu, vous and on", dialogue: [
        ["Priya", "Salut, Léo ! Tu vas bien ?", "Hi Léo! Are you OK?"],
        ["Léo", "Oui, très bien. Et toi ?", "Yes, very well. And you?"],
        ["Priya", "Ça va ! Oh, voilà Madame Martin. Bonjour, madame ! Vous allez bien ?", "I'm good! Oh, there's Mrs Martin. Hello, madam! Are you well?"],
        ["Mme Martin", "Très bien, merci. Vous avez cours maintenant ?", "Very well, thank you. Do you two have class now?"],
        ["Léo", "Oui, on a cours de français.", "Yes, we have French class."]
      ] },
      { tip: "Notice: Priya says [[tu]] to her friend Léo but [[vous]] to her teacher. The teacher says [[vous]] to Priya and Léo because they are two people. And Léo says [[on a]] for 'we have' — the everyday 'we'." }
    ],
    quiz: [
      { type: "mcq", q: "You're talking to your new boss. Which 'you' do you use?", options: ["tu", "vous", "on"], answer: 1, explain: "A boss = a polite, professional situation → [[vous]]." },
      { type: "mcq", q: "You're talking to two close friends at the same time. Which 'you' do you use?", options: ["vous", "tu", "ils"], answer: 0, explain: "Two or more people → always [[vous]], even if they are your best friends." },
      { type: "mcq", q: "Ravi, Priya and Meera = ?", options: ["elles", "on", "ils"], answer: 2, explain: "One man in the group → [[ils]]." },
      { type: "fill", q: "___ habite à Delhi. (I)", answer: ["J'", "j'", "J’", "j’"], explain: "[[je]] becomes [[j']] before a vowel or a silent h: [[J'habite à Delhi.]]" },
      { type: "fill", q: "En France, ___ mange beaucoup de pain. (people)", answer: ["on"], explain: "[[on]] = people in general: [[En France, on mange beaucoup de pain.]]" },
      { type: "mcq", q: "Everyday French for 'We speak French':", options: ["On parlons français.", "On parle français.", "On parlent français."], answer: 1, explain: "[[on]] always takes the [[il]] / [[elle]] form of the verb: [[on parle]]." },
      { type: "listen", say: "On parle anglais.", options: ["They speak English.", "You speak English.", "We speak English."], answer: 2, explain: "In everyday speech, [[on]] = we." },
      { type: "listen", say: "Tu habites à Bangalore ?", options: ["I live in Bangalore.", "Do you live in Bangalore?", "We live in Bangalore."], answer: 1, explain: "[[tu habites]] = you live. The voice goes up: it's a question." },
      { type: "order", words: ["Ils", "jouent", "au", "cricket."], en: "They play cricket." },
      { type: "order", words: ["Nous", "habitons", "à", "Delhi."], en: "We live in Delhi." },
      { type: "speak", fr: "Bonjour, madame. Vous allez bien ?", en: "Hello, madam. Are you well?" }
    ]
  },
  {
    id: "g-etre",
    cat: "grammar",
    title: "Être (to be) — and c'est vs il est",
    minutes: 15,
    summary: "Conjugate être, say where you're from, what you do and where you are — and choose correctly between c'est and il est / elle est.",
    sections: [
      { p: "[[être|EH-truh]] means <b>to be</b>. It's the most used verb in French, and it's <b>irregular</b> (it doesn't follow the usual pattern), so learn it by heart. You need it to say who you are, where you're from, your job, where you are and what someone is like." },
      { conj: { verb: "être", en: "to be", rows: [
        ["je suis", "I am", "zhuh SWEE"],
        ["tu es", "you are (friendly)", "tü EH"],
        ["il est / elle est", "he is / she is", "ee-LEH / eh-LEH"],
        ["on est", "we are (everyday)", "ohn-NEH"],
        ["nous sommes", "we are", "noo SOHM"],
        ["vous êtes", "you are (polite / plural)", "voo-ZEHT"],
        ["ils sont / elles sont", "they are", "eel SOHN / ehl SOHN"]
      ] } },
      { tip: "Link the sounds: in [[vous êtes|voo-ZEHT]] the silent s of [[vous]] sounds like a z before the vowel. This is called a <i>liaison</i> (you link a silent final letter to the next word). In [[on est|ohn-NEH]], the n slides into [[est]]. In casual speech you'll often hear [[t'es]] for [[tu es]] — understand it, but write [[tu es]]." },
      { h: "What you can say with être", examples: [
        { fr: "Je suis indien. / Je suis indienne.", en: "I'm Indian. (man / woman)", say: "zhuh swee ehn-DYEHN / ehn-DYEN" },
        { fr: "Je suis de Bangalore.", en: "I'm from Bangalore.", say: "zhuh swee duh bahn-gah-LOR" },
        { fr: "Je suis étudiant. / Je suis étudiante.", en: "I'm a student. (man / woman)", say: "zhuh swee ay-tü-DYAHN / ay-tü-DYAHNT" },
        { fr: "Elle est médecin.", en: "She's a doctor.", say: "eh-leh mayd-SEHN" },
        { fr: "Nous sommes à Paris.", en: "We're in Paris.", say: "noo soh-mah pah-REE" },
        { fr: "Le chaï est chaud.", en: "The chai is hot.", say: "luh shah-y eh SHOH" },
        { fr: "Vous êtes prêts ?", en: "Are you all ready?", say: "voo-zeht PREH" }
      ] },
      { warn: "For jobs, French uses <b>no article</b> after [[être]]: [[Elle est médecin.]] [[Il est professeur.]] The English 'a' disappears — never <s>Il est un professeur</s>." },
      { h: "C'est or il est / elle est?", table: { head: ["c'est + …", "il est / elle est + …"], rows: [
        ["a name: [[C'est Ravi.]]", "an adjective alone: [[Il est sympa.]]"],
        ["un, une, le, la, mon, ma… + noun: [[C'est un ami.]] [[C'est ma sœur.]]", "a job, without an article: [[Elle est médecin.]]"],
        ["a general comment on a situation or a thing: [[C'est super !]] [[C'est cher.]]", "a nationality: [[Il est indien.]] [[Elle est française.]]"]
      ] } },
      { tip: "The quick test: is there a little word like [[un]], [[une]], [[le]], [[la]], [[mon]] or [[ma]] after the verb? Then use [[c'est]]. So [[Il est professeur.]] and [[C'est un professeur.]] are both correct — but <s>Il est un professeur</s> is wrong. For several people or things, use [[Ce sont…]]: [[Ce sont mes amis.]] (In casual speech you'll also hear [[C'est mes amis.]])" },
      { note: "In the negative, [[c'est]] becomes [[ce n'est pas]]: [[Ce n'est pas cher.]] = It's not expensive. [[Ce n'est pas un problème.]] = It's not a problem. (More in the lesson on negation.)" },
      { h: "Use it", dialogue: [
        ["Inès", "Salut, Anil ! C'est qui ?", "Hi Anil! Who's this?"],
        ["Anil", "C'est Nikhil, un ami de Delhi.", "This is Nikhil, a friend from Delhi."],
        ["Inès", "Il est étudiant ?", "Is he a student?"],
        ["Anil", "Non, il est ingénieur. Il est très sympa !", "No, he's an engineer. He's really nice!"],
        ["Inès", "Et vous êtes à Paris pour combien de temps ?", "And how long are you two in Paris for?"],
        ["Anil", "Nous sommes ici pour deux semaines. C'est génial !", "We're here for two weeks. It's great!"]
      ] }
    ],
    quiz: [
      { type: "mcq", q: "Nous ___ en retard.", options: ["sont", "sommes", "êtes"], answer: 1, explain: "[[nous sommes]] = we are. [[en retard]] = late." },
      { type: "fill", q: "Je ___ de Bangalore.", answer: ["suis"], explain: "[[je suis]] = I am. [[Je suis de…]] = I'm from…" },
      { type: "fill", q: "Vous ___ à Paris ? (être)", answer: ["êtes"], explain: "[[vous êtes|voo-ZEHT]] — with a liaison." },
      { type: "fill", q: "Tu ___ en France pour le travail ? (être)", answer: ["es"], explain: "[[tu es]] — never <s>tu est</s>, even though both sound the same." },
      { type: "listen", say: "Ils sont indiens.", options: ["We are Indian.", "He is Indian.", "They are Indian."], answer: 2, explain: "[[ils sont]] = they are." },
      { type: "mcq", q: "___ un ami de Delhi.", options: ["Il est", "C'est", "Elle est"], answer: 1, explain: "[[un]] + noun → [[c'est]]: [[C'est un ami de Delhi.]]" },
      { type: "mcq", q: "Ravi ? ___ très sympa !", options: ["Il est", "C'est un", "Ce sont"], answer: 0, explain: "An adjective alone about a person → [[il est]] / [[elle est]]: [[Il est très sympa !]]" },
      { type: "mcq", q: "How do you say 'She's a doctor'?", options: ["Elle est une médecin.", "C'est médecin.", "Elle est médecin."], answer: 2, explain: "A job after [[être]] takes no article: [[Elle est médecin.]]" },
      { type: "listen", say: "C'est génial !", options: ["It's great!", "He's nice!", "It's expensive!"], answer: 0, explain: "[[génial]] = great, brilliant. [[C'est]] + adjective = a comment on a situation." },
      { type: "order", words: ["Ce", "n'est", "pas", "un", "problème."], en: "It's not a problem." },
      { type: "speak", fr: "Je suis de Bangalore et je suis en France pour le travail.", en: "I'm from Bangalore and I'm in France for work." }
    ]
  },
  {
    id: "g-articles",
    cat: "grammar",
    title: "Nouns, gender & articles (le, la, l', les, un, une, des)",
    minutes: 16,
    summary: "Understand why every French noun is masculine or feminine, and use le, la, l', les, un, une and des correctly — even when you can't hear the plural -s.",
    sections: [
      { p: "In French, every noun (a word for a person, a thing or an idea) is either <b>masculine</b> or <b>feminine</b> — even objects. A table is feminine: [[la table]]. A phone is masculine: [[le téléphone]]. There's usually no logic, so here is the golden rule: <b>always learn a noun together with its article</b>. Don't learn 'maison = house'; learn [[la maison]] or [[une maison]]." },
      { h: "The articles", table: { head: ["", "Masculine", "Feminine", "Plural (m. and f.)"], rows: [
        ["<b>the</b>", "[[le|luh]] — [[le livre]]", "[[la|lah]] — [[la table]]", "[[les|lay]] — [[les livres]], [[les tables]]"],
        ["<b>the</b> + vowel or silent h", "[[l']] — [[l'ami]], [[l'hôtel]]", "[[l']] — [[l'amie]], [[l'école]]", "[[les]] — [[les amis|lay-zah-MEE]]"],
        ["<b>a / an</b>, <b>some</b>", "[[un|EHN]] — [[un livre]]", "[[une|ÜN]] — [[une table]]", "[[des|DAY]] — [[des livres]], [[des tables]]"]
      ] } },
      { p: "<b>le, la, l', les</b> = <b>the</b>. Use them for a specific thing ([[la gare]] = the station) and also for things <b>in general</b>.<br><b>un, une</b> = <b>a / an</b>: one thing, not a specific one ([[une gare]] = a station).<br><b>des</b> = <b>some</b> — or nothing at all in English: [[J'ai des amis à Paris.]] = I have (some) friends in Paris." },
      { tip: "Two things English does differently:<br>1. For likes and general facts, French uses [[le]], [[la]], [[les]] where English uses nothing: [[J'aime le chaï.]] = I like chai. [[Le cricket est très populaire en Inde.]] = Cricket is very popular in India.<br>2. [[des]] can't be dropped: 'I have friends' = [[J'ai des amis]], never <s>J'ai amis</s>." },
      { examples: [
        { fr: "C'est un livre.", en: "It's a book.", say: "seh-tehn LEE-vruh" },
        { fr: "Le livre est sur la table.", en: "The book is on the table.", say: "luh lee-vruh eh sür lah TAH-bluh" },
        { fr: "L'hôtel est près de la gare.", en: "The hotel is near the station.", say: "loh-tehl eh preh duh lah GAR" },
        { fr: "Voilà une banane et des pommes.", en: "Here's a banana and some apples.", say: "vwah-lah ün bah-nahn ay day POHM" },
        { fr: "J'aime le cricket et la musique.", en: "I like cricket and music.", say: "zhehm luh kree-keht ay lah mü-ZEEK" }
      ] },
      { h: "Guessing the gender from the ending", table: { head: ["Usually feminine", "Usually masculine"], rows: [
        ["-tion: [[la nation]], [[la question]]", "-ment: [[le moment]], [[l'appartement]] (m.)"],
        ["-té: [[la liberté]], [[la santé]]", "-age: [[le voyage]], [[le fromage]]"],
        ["-ure: [[la voiture]], [[la culture]]", "-eau: [[le bureau]], [[le gâteau]]"],
        ["-ette: [[la baguette]], [[la fourchette]]", "-isme: [[le tourisme]], [[le cyclisme]]"],
        ["-ence: [[la différence]], [[la science]]", "-oir: [[le soir]], [[le miroir]]"],
        ["-ie: [[la boulangerie]], [[la pharmacie]]", "-ier: [[le papier]], [[le quartier]]"],
        ["-ée: [[la journée]], [[l'idée]] (f.)", "words borrowed from English: [[le week-end]], [[le parking]]"]
      ] } },
      { warn: "Endings are a help, not a law. Famous exceptions: [[la plage]] (beach), [[la page]] (page) and [[l'image]] (f.) (picture) end in -age but are <b>feminine</b>. [[le lycée]] (high school) and [[le musée]] (museum) end in -ée but are <b>masculine</b>. [[l'été]] (summer) is masculine, and [[l'eau]] (water) is feminine." },
      { tip: "The plural -s is <b>silent</b>: [[livre]] and [[livres]] sound exactly the same. So listen to the article — it tells you singular or plural: [[le livre|luh LEE-vruh]] / [[les livres|lay LEE-vruh]], [[un livre|ehn LEE-vruh]] / [[des livres|day LEE-vruh]]. Say [[le]] (luh) and [[les]] (lay) very clearly!" },
      { note: "Because [[l']] hides the gender, dictionaries (and this app) add (m.) or (f.): [[l'ami]] (m.), [[l'eau]] (f.). A good habit: learn these nouns with [[un]] or [[une]] too — [[un hôtel]], [[une école]]." },
      { h: "Use it: at the bakery", dialogue: [
        ["Le client", "Bonjour ! Une baguette et un croissant, s'il vous plaît.", "Hello! A baguette and a croissant, please."],
        ["La boulangère", "Voilà. Et avec ça ?", "Here you are. Anything else?"],
        ["Le client", "Des macarons, s'il vous plaît. Les macarons au chocolat sont délicieux !", "Some macarons, please. The chocolate macarons are delicious!"],
        ["La boulangère", "Oui, c'est la spécialité de la maison !", "Yes, they're the house speciality!"]
      ] }
    ],
    quiz: [
      { type: "mcq", q: "Choose the article: ___ voiture (car)", options: ["le", "la", "les"], answer: 1, explain: "-ure is usually feminine: [[la voiture]]." },
      { type: "mcq", q: "Choose the article: ___ fromage (cheese)", options: ["la", "l'", "le"], answer: 2, explain: "-age is usually masculine: [[le fromage]]." },
      { type: "fill", q: "L'hôtel est près de ___ école. (the)", answer: ["l'", "l’"], explain: "[[école]] starts with a vowel → [[l'école]]." },
      { type: "fill", q: "J'ai ___ amis à Bangalore. (some)", answer: ["des"], explain: "Plural 'some' → [[des]]. English can drop 'some'; French can't drop [[des]]." },
      { type: "fill", q: "C'est ___ bonne idée ! (a)", answer: ["une"], explain: "[[idée]] is feminine (-ée) → [[une bonne idée]]." },
      { type: "mcq", q: "Which noun is feminine?", options: ["voyage", "plage", "fromage"], answer: 1, explain: "[[la plage]] is a famous exception: -age nouns are usually masculine." },
      { type: "mcq", q: "'I love cricket.' in French:", options: ["J'adore le cricket.", "J'adore cricket.", "J'adore un cricket."], answer: 0, explain: "Likes and things in general take [[le]], [[la]], [[les]]: [[J'adore le cricket.]]" },
      { type: "listen", say: "les livres", options: ["the book", "the books", "a book"], answer: 1, explain: "You can't hear the -s, but you can hear [[les]] (lay)." },
      { type: "listen", say: "Des croissants, s'il vous plaît.", options: ["A croissant, please.", "The croissant, please.", "Some croissants, please."], answer: 2, explain: "[[des]] (day) = some → plural." },
      { type: "order", words: ["Le", "livre", "est", "sur", "la", "table."], en: "The book is on the table." },
      { type: "speak", fr: "Une baguette et deux croissants, s'il vous plaît.", en: "A baguette and two croissants, please." }
    ]
  },
  {
    id: "g-plural",
    cat: "grammar",
    title: "Plurals: one croissant, two croissants",
    minutes: 12,
    summary: "Make nouns plural (+s, +x, -aux, and the words that never change) — and learn to hear a plural even when the final -s is silent.",
    sections: [
      { p: "Good news: most French plurals look just like English ones — you add <b>-s</b>. The surprise: in French this -s is <b>silent</b>. [[un croissant|ehn krwah-SAHN]], [[deux croissants|duh krwah-SAHN]] — the noun itself sounds exactly the same." },
      { h: "The rules", table: { head: ["Rule", "Singular", "Plural"], rows: [
        ["most nouns: <b>+ s</b> (silent)", "[[un croissant]], [[une maison]]", "[[des croissants]], [[des maisons]]"],
        ["-eau and -eu: <b>+ x</b> (silent)", "[[un gâteau]], [[un jeu]]", "[[des gâteaux]], [[des jeux]]"],
        ["-al → <b>-aux</b> (you hear this one!)", "[[un journal]], [[un animal]]", "[[des journaux]], [[des animaux]]"],
        ["ending in -s, -x or -z: <b>no change</b>", "[[un bus]], [[un prix]], [[un nez]]", "[[des bus]], [[des prix]], [[des nez]]"],
        ["one strange plural to know", "[[un œil]] (an eye)", "[[des yeux]] (eyes)"]
      ] } },
      { examples: [
        { fr: "Deux croissants, s'il vous plaît.", en: "Two croissants, please.", say: "duh krwah-sahn seel voo PLEH" },
        { fr: "J'adore les gâteaux au chocolat.", en: "I love chocolate cakes.", say: "zhah-dor lay gah-toh oh shoh-koh-LAH" },
        { fr: "Les journaux sont sur la table.", en: "The newspapers are on the table.", say: "lay zhoor-noh sohn sür lah TAH-bluh" },
        { fr: "Les bus sont en retard.", en: "The buses are late.", say: "lay büs sohn-tahn ruh-TAR" },
        { fr: "J'ai les yeux noirs.", en: "I have dark eyes.", say: "zhay lay-zyuh NWAHR" }
      ] },
      { h: "How do you HEAR a plural?", p: "Since the -s is silent, listen to the little word in front of the noun: [[le]] and [[la]] become [[les]]; [[un]] and [[une]] become [[des]]. Tap each side and compare:" },
      { pairs: [
        ["le livre", "les livres", "the book / the books"],
        ["la table", "les tables", "the table / the tables"],
        ["un ami", "des amis", "a friend / friends"],
        ["le journal", "les journaux", "the newspaper / the newspapers"]
      ] },
      { tip: "Plural clue number 2: the <b>liaison</b> (you link a normally silent final letter to the next word when that word starts with a vowel or a silent h). The s of [[les]] and [[des]] then sounds like a <b>z</b>: [[les amis|lay-zah-MEE]], [[des hôtels|day-zoh-TEHL]], [[les enfants|lay-zahn-FAHN]]. Hear a 'z' → think plural!" },
      { warn: "Don't pronounce the -s or -x at the end of plural nouns: [[les croissants]] is 'lay krwah-SAHN', never 'krwah-SAHNS'. The -al → -aux nouns are the ones that really change sound: [[un journal|ehn zhoor-NAHL]] → [[des journaux|day zhoor-NOH]]. (A few -al words just add -s, like [[des festivals]].)" },
      { note: "Family names don't take an -s in French: [[les Sharma]] = the Sharmas, [[les Martin]] = the Martins." },
      { h: "Use it: shopping", dialogue: [
        ["La vendeuse", "Bonjour ! Vous désirez ?", "Hello! What would you like?"],
        ["Neha", "Bonjour ! Trois croissants et deux gâteaux, s'il vous plaît.", "Hello! Three croissants and two cakes, please."],
        ["La vendeuse", "Voilà ! Et avec ça ? Des macarons ?", "Here you are! Anything else? Some macarons?"],
        ["Neha", "Oui, six macarons. Les macarons, c'est pour mes amis !", "Yes, six macarons. The macarons are for my friends!"]
      ] }
    ],
    quiz: [
      { type: "mcq", q: "un gâteau → deux ___", options: ["gâteaus", "gâteaux", "gâteau"], answer: 1, explain: "-eau → + x: [[deux gâteaux]]." },
      { type: "mcq", q: "un journal → des ___", options: ["journals", "journales", "journaux"], answer: 2, explain: "-al → -aux: [[des journaux]]." },
      { type: "fill", q: "un bus → trois ___", answer: ["bus"], explain: "Nouns ending in -s don't change: [[trois bus]]." },
      { type: "fill", q: "un œil → deux ___", answer: ["yeux"], explain: "The strangest plural in French: [[un œil]] → [[deux yeux]]." },
      { type: "fill", q: "un animal → des ___", answer: ["animaux"], explain: "-al → -aux: [[des animaux]]." },
      { type: "mcq", q: "Which two words sound EXACTLY the same?", options: ["livre / livres", "journal / journaux", "œil / yeux"], answer: 0, explain: "The plural -s is silent: [[livre]] and [[livres]] sound the same." },
      { type: "mcq", q: "How do you pronounce 'les amis'?", options: ["lay ah-MEE (no link)", "lay-zah-MEE (with a z sound)", "lehs ah-MEES"], answer: 1, explain: "Liaison: the s of [[les]] sounds like z before a vowel: [[les amis|lay-zah-MEE]]." },
      { type: "listen", say: "Les enfants sont à l'école.", options: ["The children are at school.", "The child is at school.", "A child is at school."], answer: 0, explain: "[[les]] + the z of the liaison + [[sont]] → plural." },
      { type: "listen", say: "des amis", options: ["a friend", "the friend", "some friends"], answer: 2, explain: "[[des]] + a z sound → plural." },
      { type: "order", words: ["Les", "gâteaux", "sont", "délicieux."], en: "The cakes are delicious." },
      { type: "speak", fr: "Deux croissants et trois cafés, s'il vous plaît.", en: "Two croissants and three coffees, please." }
    ]
  },
  {
    id: "g-avoir",
    cat: "grammar",
    title: "Avoir (to have), age, and avoir expressions",
    minutes: 16,
    summary: "Conjugate avoir, give your age the French way, say you're hungry, cold or scared, and use il y a (there is / there are).",
    sections: [
      { p: "[[avoir|ah-VWAHR]] means <b>to have</b>. Like [[être]], it's irregular and you'll use it all the time: to say what you have, how old you are and how you feel. (Later it also helps you build the past tense — you'll see this later.)" },
      { conj: { verb: "avoir", en: "to have", rows: [
        ["j'ai", "I have", "ZHAY"],
        ["tu as", "you have (friendly)", "tü AH"],
        ["il a / elle a", "he has / she has", "ee-LAH / eh-LAH"],
        ["on a", "we have (everyday)", "ohn-NAH"],
        ["nous avons", "we have", "noo-zah-VOHN"],
        ["vous avez", "you have (polite / plural)", "voo-zah-VAY"],
        ["ils ont / elles ont", "they have", "eel-ZOHN / ehl-ZOHN"]
      ] } },
      { warn: "Listen carefully: [[ils ont|eel-ZOHN]] (they <b>have</b>) has a buzzing <b>z</b> sound — that's the liaison. [[ils sont|eel SOHN]] (they <b>are</b>) has a hissing <b>s</b>. One sound changes the whole meaning!" },
      { h: "Hear the difference: z or s?", pairs: [
        ["ils ont", "ils sont", "they have / they are"],
        ["elles ont", "elles sont", "they have / they are (women)"]
      ] },
      { h: "Your age: in French you HAVE years", examples: [
        { fr: "J'ai trente ans.", en: "I'm thirty (years old).", say: "zhay trahn-TAHN" },
        { fr: "Tu as quel âge ?", en: "How old are you? (friendly)", say: "tü ah keh-LAHZH" },
        { fr: "Quel âge avez-vous ?", en: "How old are you? (polite)", say: "keh-lahzh ah-vay-VOO" },
        { fr: "Ma sœur a vingt-deux ans.", en: "My sister is twenty-two.", say: "mah suhr ah vehnt-duh-ZAHN" },
        { fr: "Mon fils a cinq ans.", en: "My son is five.", say: "mohn fees ah sehn-KAHN" }
      ] },
      { h: "Feelings and needs with avoir", table: { head: ["French", "English", "Word for word"], rows: [
        ["[[avoir faim]]", "to be hungry", "to have hunger"],
        ["[[avoir soif]]", "to be thirsty", "to have thirst"],
        ["[[avoir chaud]] / [[avoir froid]]", "to be hot / cold", "to have hot / cold"],
        ["[[avoir sommeil]]", "to be sleepy", "to have sleep"],
        ["[[avoir peur]] (de)", "to be scared (of)", "to have fear"],
        ["[[avoir raison]] / [[avoir tort]]", "to be right / wrong", "to have reason / wrong"],
        ["[[avoir besoin de]]", "to need", "to have need of"],
        ["[[avoir envie de]]", "to feel like, to want", "to have desire of"],
        ["[[avoir mal à]]", "to have a pain in, to hurt", "to have pain at"]
      ] } },
      { examples: [
        { fr: "J'ai faim !", en: "I'm hungry!", say: "zhay FEHN" },
        { fr: "Tu as froid ?", en: "Are you cold?", say: "tü ah FRWAH" },
        { fr: "J'ai besoin d'un taxi.", en: "I need a taxi.", say: "zhay buh-zwehn dehn tahk-SEE" },
        { fr: "J'ai envie d'un chaï.", en: "I feel like a chai.", say: "zhay ahn-vee dehn SHAH-y" },
        { fr: "Elle a peur des chiens.", en: "She's scared of dogs.", say: "eh-lah puhr day SHYEHN" },
        { fr: "J'ai mal à la tête.", en: "I have a headache.", say: "zhay mah-lah lah TEHT" }
      ] },
      { warn: "These use [[avoir]], not [[être]]. Say [[J'ai trente ans.]] — never <s>je suis trente</s>. Say [[J'ai faim.]] and [[J'ai froid.]] — never <s>je suis faim</s>. (Careful: [[Je suis froid]] would mean 'I'm a cold person'!) With [[mal à]], remember <b>à + le = au</b>: [[J'ai mal au dos.]] = My back hurts." },
      { h: "Il y a = there is / there are", p: "[[il y a|eel-YAH]] is a fixed phrase. It means <b>there is</b> AND <b>there are</b> — it never changes: [[Il y a un problème.]] (There's a problem.) [[Il y a des restaurants indiens à Paris.]] (There are Indian restaurants in Paris.) [[Il y a un café près d'ici ?]] (Is there a café near here?)<br><b>After a negative</b>, [[un]], [[une]] and [[des]] become [[de]] — [[d']] before a vowel: [[J'ai une voiture.]] → [[Je n'ai pas de voiture.]] [[Il y a des bus.]] → [[Il n'y a pas de bus.]] (More in the lesson on negation.)" },
      { h: "Use it", dialogue: [
        ["Léa", "Tu as faim ?", "Are you hungry?"],
        ["Dev", "Oui, j'ai très faim ! Et j'ai soif aussi.", "Yes, I'm very hungry! And I'm thirsty too."],
        ["Léa", "Il y a un restaurant indien près d'ici.", "There's an Indian restaurant near here."],
        ["Dev", "Super ! J'ai envie d'un bon biryani.", "Great! I feel like a good biryani."],
        ["Léa", "Moi, je n'ai pas d'argent… Tu as ta carte ?", "I don't have any money... Have you got your card?"],
        ["Dev", "Oui, j'ai ma carte. Pas de problème !", "Yes, I have my card. No problem!"]
      ] }
    ],
    quiz: [
      { type: "mcq", q: "Nous ___ deux enfants.", options: ["avez", "avons", "ont"], answer: 1, explain: "[[nous avons|noo-zah-VOHN]] = we have." },
      { type: "fill", q: "Tu ___ quel âge ? (avoir)", answer: ["as"], explain: "[[tu as]] = you have. [[Tu as quel âge ?]] = How old are you?" },
      { type: "mcq", q: "How do you say 'I'm thirty'?", options: ["Je suis trente ans.", "J'ai trente.", "J'ai trente ans."], answer: 2, explain: "Age = [[avoir]] + number + [[ans]]: [[J'ai trente ans.]]" },
      { type: "mcq", q: "'I'm cold.'", options: ["J'ai froid.", "Je suis froid.", "J'ai chaud."], answer: 0, explain: "Feeling cold → [[avoir froid]]. ([[J'ai chaud]] = I'm hot.)" },
      { type: "fill", q: "J'ai ___ d'un chaï. (I feel like…)", answer: ["envie"], explain: "[[avoir envie de]] = to feel like, to want." },
      { type: "fill", q: "Je n'ai pas ___ voiture.", answer: ["de"], explain: "After a negative, [[une]] → [[de]]: [[Je n'ai pas de voiture.]]" },
      { type: "mcq", q: "'There are two hotels near the station.'", options: ["Ils sont deux hôtels près de la gare.", "Il y a deux hôtels près de la gare.", "Ils ont deux hôtels près de la gare."], answer: 1, explain: "there is / there are = [[il y a]]. ([[Ils ont deux hôtels]] = They own two hotels.)" },
      { type: "listen", say: "Ils ont faim.", options: ["They are hungry.", "He is hungry.", "They are at home."], answer: 0, explain: "Hear the z of [[ils ont|eel-ZOHN]]: it's 'they'. [[avoir faim]] = to be hungry." },
      { type: "listen", say: "Elles ont deux chats.", options: ["She has two cats.", "They have two cats.", "They are with two cats."], answer: 1, explain: "The z sound of [[elles ont]] tells you it's plural: they have." },
      { type: "order", words: ["J'ai", "besoin", "d'un", "taxi."], en: "I need a taxi." },
      { type: "speak", fr: "Il y a un restaurant indien près d'ici ?", en: "Is there an Indian restaurant near here?" }
    ]
  },
  {
    id: "g-er-verbs",
    cat: "grammar",
    title: "Regular -er verbs (present tense)",
    minutes: 18,
    summary: "Conjugate any regular -er verb in the present tense, pronounce the forms correctly, and handle the small spelling changes in verbs like manger, préférer and acheter.",
    sections: [
      { p: "About 90% of French verbs end in <b>-er</b> in the dictionary: [[parler]] (to speak), [[aimer]] (to like, to love), [[habiter]] (to live). Great news: they all follow the same pattern. Learn one, and you can use thousands." },
      { h: "The recipe", p: "1. Take the infinitive (the dictionary form): [[parler]].<br>2. Remove <b>-er</b> to get the <b>stem</b>: <b>parl-</b>.<br>3. Add the ending for each person: <b>-e, -es, -e, -ons, -ez, -ent</b>." },
      { conj: { verb: "parler", en: "to speak", rows: [
        ["je parle", "I speak / I'm speaking", "zhuh PARL"],
        ["tu parles", "you speak", "tü PARL"],
        ["il / elle / on parle", "he / she speaks, we speak", "eel / ehl / ohn PARL"],
        ["nous parlons", "we speak", "noo par-LOHN"],
        ["vous parlez", "you speak (polite / plural)", "voo par-LAY"],
        ["ils / elles parlent", "they speak", "eel / ehl PARL"]
      ] } },
      { tip: "Pronunciation secret: the endings <b>-e</b>, <b>-es</b> and <b>-ent</b> are all <b>silent</b>. So [[je parle]], [[tu parles]], [[il parle]] and [[ils parlent]] all sound exactly the same: 'PARL'. Only [[nous parlons]] (-ohn) and [[vous parlez]] (-ay) sound different. Never pronounce the -ent of [[ils parlent]]!" },
      { h: "A verb that starts with a vowel", conj: { verb: "aimer", en: "to like, to love", rows: [
        ["j'aime", "I like", "ZHEHM"],
        ["tu aimes", "you like", "tü EHM"],
        ["il / elle / on aime", "he / she likes, we like", "ee-LEHM / eh-LEHM / ohn-NEHM"],
        ["nous aimons", "we like", "noo-zeh-MOHN"],
        ["vous aimez", "you like (polite / plural)", "voo-zeh-MAY"],
        ["ils / elles aiment", "they like", "eel-ZEHM / ehl-ZEHM"]
      ] } },
      { h: "Useful -er verbs", table: { head: ["Verb", "Meaning", "Example"], rows: [
        ["[[habiter]]", "to live (in a place)", "[[J'habite à Bangalore.]]"],
        ["[[travailler]]", "to work", "[[Je travaille dans une banque.]]"],
        ["[[étudier]]", "to study", "[[Nous étudions le français.]]"],
        ["[[regarder]]", "to watch, to look at", "[[Ils regardent un film.]]"],
        ["[[écouter]]", "to listen to", "[[Tu écoutes de la musique ?]]"],
        ["[[chercher]]", "to look for", "[[Je cherche la gare.]]"],
        ["[[adorer]]", "to love, to adore", "[[On adore le chaï !]]"],
        ["[[détester]]", "to hate", "[[Elle déteste le froid.]]"]
      ] } },
      { warn: "Two classic mistakes:<br>1. [[je]] → [[j']] before a vowel or a silent h: [[j'aime]], [[j'habite]], [[j'écoute]] — never <s>je aime</s>.<br>2. Don't add an extra little word: [[écouter la radio]] = listen <u>to</u> the radio, [[chercher un hôtel]] = look <u>for</u> a hotel, [[regarder la télé]] = watch TV. The 'to', 'for' and 'at' are already inside the French verb." },
      { h: "Small spelling changes (just to keep the sound)", table: { head: ["Verb", "What changes", "Example"], rows: [
        ["[[manger]] (to eat)", "nous: keep an e after the g → [[mangeons]] (so the g stays soft)", "[[Nous mangeons à midi.]]"],
        ["[[commencer]] (to start)", "nous: c → ç → [[commençons]] (so the c stays soft)", "[[Nous commençons à neuf heures.]]"],
        ["[[préférer]] (to prefer)", "é → è with je, tu, il / elle, ils / elles", "[[Je préfère le thé.]]"],
        ["[[acheter]] (to buy)", "e → è with je, tu, il / elle, ils / elles", "[[J'achète du pain.]]"],
        ["[[appeler]] (to call)", "l → ll with je, tu, il / elle, ils / elles", "[[J'appelle ma mère.]]"]
      ] } },
      { note: "With [[nous]] and [[vous]], the last three keep the normal spelling: [[nous préférons]], [[vous achetez]], [[nous appelons]]. That's also why you write [[Je m'appelle…]] with two l's!<br><b>One present, two English meanings:</b> [[Je regarde la télé.]] = 'I watch TV' AND 'I'm watching TV'. Don't translate 'am' with [[suis]]: <s>je suis regarde</s>." },
      { h: "Use it", dialogue: [
        ["Camille", "Tu habites à Paris ?", "Do you live in Paris?"],
        ["Aditya", "Oui, j'habite à Paris, mais je travaille à La Défense.", "Yes, I live in Paris, but I work at La Défense."],
        ["Camille", "Tu parles bien français !", "You speak French well!"],
        ["Aditya", "Merci ! J'étudie le français le soir et j'écoute des podcasts.", "Thanks! I study French in the evening and I listen to podcasts."],
        ["Camille", "Et le week-end ?", "And at the weekend?"],
        ["Aditya", "Je regarde le cricket et je cuisine avec mes amis. On mange indien !", "I watch cricket and I cook with my friends. We eat Indian food!"]
      ] }
    ],
    quiz: [
      { type: "fill", q: "Nous ___ français. (parler)", answer: ["parlons"], explain: "nous → -ons: [[nous parlons]]." },
      { type: "fill", q: "Vous ___ où ? (habiter)", answer: ["habitez"], explain: "vous → -ez: [[Vous habitez où ?]]" },
      { type: "mcq", q: "Ils ___ un match de cricket. (regarder)", options: ["regardons", "regardent", "regardez"], answer: 1, explain: "ils → -ent (silent!): [[Ils regardent un match de cricket.]]" },
      { type: "mcq", q: "Which sentence is correct?", options: ["J'aime le thé.", "Je aime le thé.", "J'aimes le thé."], answer: 0, explain: "[[je]] → [[j']] before a vowel, and the je ending is -e: [[J'aime le thé.]]" },
      { type: "fill", q: "Nous ___ à midi. (manger)", answer: ["mangeons"], explain: "Keep the e so the g stays soft: [[nous mangeons]]." },
      { type: "fill", q: "Je ___ le café. (préférer)", answer: ["préfère"], explain: "é → è with je: [[je préfère]]." },
      { type: "mcq", q: "How many different sounds do 'je parle, tu parles, il parle, ils parlent' have?", options: ["Four — one for each form", "Two", "Just one — they all sound the same"], answer: 2, explain: "-e, -es and -ent are silent: all four sound like 'PARL'." },
      { type: "mcq", q: "'I'm watching TV.'", options: ["Je suis regarde la télé.", "Je regarde la télé.", "Je suis regarder la télé."], answer: 1, explain: "One French present = 'I watch' and 'I'm watching': [[Je regarde la télé.]]" },
      { type: "listen", say: "Ils travaillent à Delhi.", options: ["We work in Delhi.", "You work in Delhi.", "They work in Delhi."], answer: 2, explain: "[[ils travaillent]] — the -ent is silent." },
      { type: "listen", say: "Nous écoutons la radio.", options: ["We're listening to the radio.", "They're listening to the radio.", "You're listening to the radio."], answer: 0, explain: "[[nous]] + the -ohn ending of [[écoutons]] = we." },
      { type: "order", words: ["Nous", "commençons", "le", "cours", "à", "neuf", "heures."], en: "We start the class at nine o'clock." },
      { type: "speak", fr: "J'habite à Bangalore et je travaille dans une banque.", en: "I live in Bangalore and I work in a bank." }
    ]
  },
  {
    id: "g-negation",
    cat: "grammar",
    title: "Saying no: ne … pas and friends",
    minutes: 15,
    summary: "Make any sentence negative with ne … pas, change un / une / des to de after a negative, say never, not any more, nothing and nobody — and answer 'si'.",
    sections: [
      { p: "To make a sentence negative, French uses <b>two words</b> that go around the verb, like the bread around a sandwich: [[ne]] before the verb and [[pas]] after it. [[Je parle espagnol.]] → [[Je ne parle pas espagnol.]] (I don't speak Spanish.)" },
      { table: { head: ["Positive", "Negative", "English"], rows: [
        ["[[Je travaille.]]", "[[Je ne travaille pas.]]", "I don't work. / I'm not working."],
        ["[[C'est cher.]]", "[[Ce n'est pas cher.]]", "It's not expensive."],
        ["[[Il aime le cricket.]]", "[[Il n'aime pas le cricket.]]", "He doesn't like cricket."],
        ["[[Nous habitons à Paris.]]", "[[Nous n'habitons pas à Paris.]]", "We don't live in Paris."],
        ["[[Tu as faim ?]]", "[[Tu n'as pas faim ?]]", "Aren't you hungry?"]
      ] } },
      { tip: "[[ne]] → [[n']] before a vowel or a silent h: [[je n'aime pas]], [[il n'habite pas]], [[ce n'est pas]]. And there's no 'do / does' in French: 'I <u>don't</u> speak' is simply [[je ne parle pas]] — the verb goes inside the sandwich." },
      { h: "un, une, des → de", warn: "After a negative verb, [[un]], [[une]] and [[des]] (and also [[du]], [[de la]] = some) become [[de]] — or [[d']] before a vowel:<br>[[J'ai une voiture.]] → [[Je n'ai pas de voiture.]]<br>[[Il y a des bus.]] → [[Il n'y a pas de bus.]]<br>[[Je bois du café.]] → [[Je ne bois pas de café.]]<br>[[J'ai des amis ici.]] → [[Je n'ai pas d'amis ici.]]<br>But [[le]], [[la]], [[les]] don't change: [[Je n'aime pas le café.]]" },
      { tip: "One exception: after [[être]], nothing changes. [[C'est un problème.]] → [[Ce n'est pas un problème.]] [[C'est une bonne idée.]] → [[Ce n'est pas une bonne idée.]]" },
      { h: "More negative pairs", table: { head: ["French", "English", "Example"], rows: [
        ["[[ne … jamais]]", "never", "[[Je ne mange jamais de viande.]] (I never eat meat.)"],
        ["[[ne … plus]]", "not any more, no longer", "[[Il n'habite plus à Delhi.]] (He doesn't live in Delhi any more.)"],
        ["[[ne … rien]]", "nothing, not anything", "[[Je ne comprends rien !]] (I don't understand anything!)"],
        ["[[ne … personne]]", "nobody, not anyone", "[[Je ne connais personne ici.]] (I don't know anyone here.)"]
      ] } },
      { h: "Spoken French drops the ne", note: "In everyday conversation, French people often leave out [[ne]]: [[Je sais pas.]] (I don't know — it often sounds like 'shay-PAH'), [[C'est pas grave.]] (It doesn't matter.), [[J'aime pas ça.]] (I don't like that.) Understand it when you hear it — but when you <b>write</b>, and in the DELF exam, always use [[ne]]." },
      { h: "Si — the 'yes' that disagrees", p: "If someone asks a <b>negative</b> question and your answer is yes, say [[si]], not [[oui]]:<br>— [[Tu n'aimes pas le chaï ?]] (Don't you like chai?)<br>— [[Si ! J'adore le chaï !]] (Yes, I do! I love chai!)<br>If your answer is no, say [[non]]: — [[Non, je n'aime pas le chaï.]]" },
      { h: "Use it", dialogue: [
        ["Hugo", "Tu ne manges pas ?", "Aren't you eating?"],
        ["Meera", "Non, je n'ai pas faim. Et je ne mange jamais de viande.", "No, I'm not hungry. And I never eat meat."],
        ["Hugo", "Ah bon ? Tu n'aimes pas le poulet ?", "Really? Don't you like chicken?"],
        ["Meera", "Non, je suis végétarienne.", "No, I'm a vegetarian."],
        ["Hugo", "Pas de problème ! Tu ne veux pas de salade ?", "No problem! Don't you want some salad?"],
        ["Meera", "Si, je veux bien. Merci !", "Yes, I'd love some. Thank you!"]
      ] }
    ],
    quiz: [
      { type: "order", words: ["Je", "ne", "parle", "pas", "espagnol."], en: "I don't speak Spanish." },
      { type: "mcq", q: "Make it negative: J'ai une voiture.", options: ["Je n'ai pas une voiture.", "Je n'ai pas de voiture.", "Je ne pas ai voiture."], answer: 1, explain: "After a negative, [[une]] → [[de]]: [[Je n'ai pas de voiture.]]" },
      { type: "mcq", q: "Make it negative: C'est un problème.", options: ["Ce n'est pas un problème.", "Ce n'est pas de problème.", "C'est ne pas un problème."], answer: 0, explain: "After [[être]], [[un]] stays: [[Ce n'est pas un problème.]]" },
      { type: "fill", q: "Il ___ habite pas à Delhi.", answer: ["n'", "n’"], explain: "[[ne]] → [[n']] before a vowel: [[Il n'habite pas à Delhi.]]" },
      { type: "fill", q: "Je ne mange ___ de viande. (never)", answer: ["jamais"], explain: "[[ne … jamais]] = never." },
      { type: "fill", q: "Il n'y a pas ___ bus le dimanche.", answer: ["de"], explain: "[[des bus]] → [[pas de bus]] after a negative." },
      { type: "mcq", q: "— Tu n'aimes pas le cricket ? — ___ ! J'adore le cricket !", options: ["Oui", "Non", "Si"], answer: 2, explain: "'Yes' to a negative question → [[si]]." },
      { type: "mcq", q: "A French friend says [[Je sais pas.]] What does it mean?", options: ["I don't know.", "I know.", "I'm not sure it's here."], answer: 0, explain: "Spoken French drops [[ne]]: [[Je sais pas.]] = [[Je ne sais pas.]] = I don't know." },
      { type: "listen", say: "Je ne comprends rien.", options: ["I understand everything.", "I don't understand anything.", "I don't understand anyone."], answer: 1, explain: "[[ne … rien]] = nothing, not anything." },
      { type: "listen", say: "Il n'habite plus à Delhi.", options: ["He has never lived in Delhi.", "He still lives in Delhi.", "He doesn't live in Delhi any more."], answer: 2, explain: "[[ne … plus]] = not any more." },
      { type: "speak", fr: "Je ne parle pas bien français, mais j'apprends !", en: "I don't speak French well, but I'm learning!" }
    ]
  },
  {
    id: "g-questions",
    cat: "grammar",
    title: "Asking questions: three ways + question words",
    minutes: 18,
    summary: "Ask yes/no questions in three styles (voice, est-ce que, inversion) and use the key question words: qui, quoi, où, quand, comment, combien, pourquoi.",
    sections: [
      { p: "French has three ways to ask the same yes/no question. All three below mean 'Do you speak French?'. The difference is the <b>style</b>: relaxed, neutral or formal. You need to <b>understand</b> all three, but you can <b>use</b> the first two almost everywhere." },
      { table: { head: ["Style", "Question", "When"], rows: [
        ["1. Voice only: your voice goes up at the end", "[[Tu parles français ?]]", "everyday speech — the most common"],
        ["2. [[Est-ce que|EHS-kuh]] + a normal sentence", "[[Est-ce que tu parles français ?]]", "neutral — always safe, spoken or written"],
        ["3. Inversion: verb first, then subject", "[[Parlez-vous français ?]]", "formal — writing, polite questions, set phrases"]
      ] } },
      { tip: "[[est-ce que|EHS-kuh]] is a 'question starter'. It means nothing by itself (word for word: 'is it that'). Put it in front of any sentence and you have a question: [[Est-ce que vous avez une chambre ?]] (Do you have a room?) Before a vowel, [[que]] becomes [[qu']]: [[Est-ce qu'il est là ?]] [[Est-ce qu'on mange ?]]" },
      { h: "Inversion: the formal way", p: "Swap the subject pronoun and the verb, and join them with a hyphen: [[vous parlez]] → [[Parlez-vous… ?]] With [[il]], [[elle]] or [[on]], if the verb ends in a vowel, add <b>-t-</b> between them — just to make it easier to say: [[il a]] → [[A-t-il… ?]], [[elle parle]] → [[Parle-t-elle… ?]] Many polite set phrases use inversion: [[Comment allez-vous ?]] [[Quel âge avez-vous ?]] [[Où habitez-vous ?]]" },
      { h: "Question words", table: { head: ["Word", "Meaning", "Example"], rows: [
        ["[[qui|KEE]]", "who", "[[Qui est-ce ?]] — Who is it?"],
        ["[[quoi|KWAH]] / [[qu'est-ce que|KEHS-kuh]]", "what", "[[Tu fais quoi ?]] / [[Qu'est-ce que tu fais ?]] — What are you doing?"],
        ["[[où|OO]]", "where", "[[Où est la gare ?]] — Where is the station?"],
        ["[[d'où|DOO]]", "where … from", "[[Tu viens d'où ?]] — Where are you from?"],
        ["[[quand|KAHN]]", "when", "[[Tu arrives quand ?]] — When are you arriving?"],
        ["[[comment|koh-MAHN]]", "how / what (name)", "[[Comment ça va ?]] — How are you? [[Tu t'appelles comment ?]] — What's your name?"],
        ["[[combien|kohn-BYEHN]]", "how much", "[[C'est combien ?]] — How much is it?"],
        ["[[combien de|kohn-BYEHN duh]] + noun", "how many", "[[Tu as combien de frères ?]] — How many brothers do you have?"],
        ["[[pourquoi|poor-KWAH]]", "why", "[[Pourquoi tu apprends le français ?]] — Why are you learning French?"],
        ["[[parce que|PARS-kuh]]", "because (the answer to 'why')", "[[Parce que j'aime la France !]] — Because I love France!"]
      ] } },
      { warn: "[[quoi]] goes at the <b>end</b>; [[qu'est-ce que]] goes at the <b>start</b>: [[Tu manges quoi ?]] = [[Qu'est-ce que tu manges ?]] (What are you eating?) Never start with <s>Quoi tu manges ?</s> And don't mix up [[où]] (where, with an accent) and [[ou]] (or, no accent)." },
      { h: "Where does the question word go?", table: { head: ["Relaxed (spoken)", "Neutral (est-ce que)", "Formal (inversion)"], rows: [
        ["[[Tu habites où ?]]", "[[Où est-ce que tu habites ?]]", "[[Où habites-tu ?]]"],
        ["[[Tu arrives quand ?]]", "[[Quand est-ce que tu arrives ?]]", "[[Quand arrives-tu ?]]"],
        ["[[Tu fais quoi ?]]", "[[Qu'est-ce que tu fais ?]]", "[[Que fais-tu ?]]"]
      ] } },
      { h: "Questions you'll hear in the DELF speaking test", examples: [
        { fr: "Comment vous appelez-vous ?", en: "What's your name?", say: "koh-mahn voo-zah-play VOO" },
        { fr: "Où habitez-vous ?", en: "Where do you live?", say: "oo ah-bee-tay VOO" },
        { fr: "Qu'est-ce que vous faites dans la vie ?", en: "What do you do for a living?", say: "kehs-kuh voo feht dahn lah VEE" },
        { fr: "Pourquoi est-ce que vous apprenez le français ?", en: "Why are you learning French?", say: "poor-kwah ehs-kuh voo-zah-pruh-nay luh frahn-SEH" },
        { fr: "Vous avez des frères et sœurs ?", en: "Do you have any brothers and sisters?", say: "voo-zah-vay day frehr ay SUHR" }
      ] },
      { h: "Use it", dialogue: [
        ["Julie", "Bonjour ! Vous êtes nouvelle ici ?", "Hello! Are you new here?"],
        ["Maya", "Oui, je m'appelle Maya. Je suis indienne.", "Yes, my name is Maya. I'm Indian."],
        ["Julie", "Enchantée ! Vous venez d'où, en Inde ?", "Nice to meet you! Where are you from in India?"],
        ["Maya", "De Bangalore. Et vous, vous habitez où ?", "From Bangalore. And you, where do you live?"],
        ["Julie", "À Lyon. Pourquoi est-ce que vous apprenez le français ?", "In Lyon. Why are you learning French?"],
        ["Maya", "Parce que je travaille ici maintenant !", "Because I work here now!"]
      ] }
    ],
    quiz: [
      { type: "mcq", q: "Which question is the most formal?", options: ["Tu parles anglais ?", "Est-ce que tu parles anglais ?", "Parlez-vous anglais ?"], answer: 2, explain: "Inversion (verb + subject) is the formal style: [[Parlez-vous anglais ?]]" },
      { type: "fill", q: "___ tu habites à Delhi ? (question starter)", answer: ["Est-ce que", "est-ce que"], explain: "[[Est-ce que]] + a normal sentence = a question." },
      { type: "mcq", q: "___ est la gare ?", options: ["Quand", "Où", "Qui"], answer: 1, explain: "[[où]] = where: [[Où est la gare ?]]" },
      { type: "mcq", q: "— ___ tu apprends le français ? — Parce que j'adore Paris !", options: ["Pourquoi", "Comment", "Combien"], answer: 0, explain: "[[pourquoi]] (why) → [[parce que]] (because)." },
      { type: "fill", q: "Tu as ___ de frères ? (how many)", answer: ["combien"], explain: "how many = [[combien de]] + noun." },
      { type: "fill", q: "___ est-ce ? — C'est mon professeur. (who)", answer: ["Qui", "qui"], explain: "[[Qui est-ce ?]] = Who is it?" },
      { type: "mcq", q: "Inversion: 'Does he have a car?'", options: ["A-t-il une voiture ?", "A-il une voiture ?", "Il a-t-il une voiture ?"], answer: 0, explain: "The verb ends in a vowel + [[il]] → add -t-: [[A-t-il une voiture ?]]" },
      { type: "mcq", q: "Which one is NOT correct French?", options: ["Tu manges quoi ?", "Quoi tu manges ?", "Qu'est-ce que tu manges ?"], answer: 1, explain: "[[quoi]] goes at the end; at the start, use [[qu'est-ce que]]." },
      { type: "listen", say: "Tu viens d'où ?", options: ["Where are you going?", "Where are you from?", "When are you coming?"], answer: 1, explain: "[[d'où]] = from where." },
      { type: "listen", say: "Qu'est-ce que tu fais ce soir ?", options: ["Who are you with tonight?", "Where are you tonight?", "What are you doing tonight?"], answer: 2, explain: "[[Qu'est-ce que tu fais ?]] = What are you doing? [[ce soir]] = tonight." },
      { type: "order", words: ["Où", "est-ce", "que", "tu", "habites ?"], en: "Where do you live?" },
      { type: "speak", fr: "Excusez-moi, où est la gare, s'il vous plaît ?", en: "Excuse me, where is the station, please?" }
    ]
  },
  {
    id: "g-quel",
    cat: "grammar",
    title: "Quel, quelle, quels, quelles (which / what)",
    minutes: 12,
    summary: "Ask 'which…?' and 'what…?' with quel, make exclamations like Quelle belle ville !, and know when to use quel and when to use qu'est-ce que.",
    sections: [
      { p: "[[quel|KEHL]] means <b>which</b> or <b>what</b> when you ask about a <b>noun</b>: what time, which train, what's your name. It works like an adjective, so it agrees with its noun: masculine or feminine, singular or plural. The best part: all four forms sound exactly the same — 'KEHL'." },
      { table: { head: ["", "Singular", "Plural"], rows: [
        ["Masculine", "[[quel]] — [[Quel train ?]]", "[[quels]] — [[Quels sports ?]]"],
        ["Feminine", "[[quelle]] — [[Quelle heure ?]]", "[[quelles]] — [[Quelles langues ?]]"]
      ] } },
      { h: "Questions you'll hear again and again", examples: [
        { fr: "Quel est ton nom ?", en: "What's your name?", say: "keh-leh tohn NOHN" },
        { fr: "Quelle heure est-il ?", en: "What time is it?", say: "keh-luhr eh-TEEL" },
        { fr: "Quel âge as-tu ?", en: "How old are you?", say: "keh-lahzh ah-TÜ" },
        { fr: "Quels sports tu aimes ?", en: "Which sports do you like?", say: "kehl spor tü EHM" },
        { fr: "Quelle est ta nationalité ?", en: "What's your nationality?", say: "keh-leh tah nah-syoh-nah-lee-TAY" },
        { fr: "Tu parles quelles langues ?", en: "Which languages do you speak?", say: "tü parl kehl LAHNG" }
      ] },
      { tip: "To choose the right form, find the noun and its gender. [[heure]] is feminine → [[quelle heure]]. [[sports]] is masculine plural → [[quels sports]]. With [[Quel est…]] / [[Quelle est…]], look at the noun after the verb: [[Quelle est ta ville ?]] ([[la ville]] is feminine)." },
      { h: "Exclamations: What a…!", p: "[[quel]] also makes exclamations, like English 'What a…!' or 'How…!': [[Quel beau temps !]] (What lovely weather!) [[Quelle belle ville !]] (What a beautiful city!) [[Quelle chance !]] (How lucky!) [[Quel dommage !]] (What a pity!) Note: no [[un]] or [[une]] after it — never <s>quel un…</s>." },
      { h: "Quel or qu'est-ce que?", table: { head: ["quel / quelle… + noun (or + être)", "qu'est-ce que + subject + verb"], rows: [
        ["[[Quel film tu regardes ?]] (Which film are you watching?)", "[[Qu'est-ce que tu regardes ?]] (What are you watching?)"],
        ["[[Quel est ton plat préféré ?]] (What's your favourite dish?)", "[[Qu'est-ce que tu manges ?]] (What are you eating?)"]
      ] } },
      { warn: "For 'What is your name / address / phone number…?', use [[quel]] + [[être]]: [[Quel est ton nom ?]] [[Quelle est ton adresse ?]] — never <s>Qu'est-ce que est ton nom ?</s> Notice [[ton adresse]]: before a vowel you say [[ton]], not [[ta]] (see the lesson on possessives)." },
      { h: "Use it: filling in a form", dialogue: [
        ["L'employée", "Bonjour ! Quel est votre nom ?", "Hello! What's your name?"],
        ["Asha", "Patel. Asha Patel.", "Patel. Asha Patel."],
        ["L'employée", "Quelle est votre nationalité ?", "What's your nationality?"],
        ["Asha", "Je suis indienne.", "I'm Indian."],
        ["L'employée", "Et quelle est votre adresse ?", "And what's your address?"],
        ["Asha", "12, rue de la Gare, à Lyon.", "12 rue de la Gare, in Lyon."],
        ["L'employée", "Parfait. Vous parlez quelles langues ?", "Perfect. Which languages do you speak?"],
        ["Asha", "Anglais, hindi, kannada… et un peu de français !", "English, Hindi, Kannada… and a little French!"]
      ] }
    ],
    quiz: [
      { type: "mcq", q: "___ heure est-il ?", options: ["Quel", "Quelle", "Quels"], answer: 1, explain: "[[heure]] is feminine → [[Quelle heure est-il ?]]" },
      { type: "mcq", q: "___ sports tu aimes ?", options: ["Quels", "Quelles", "Quel"], answer: 0, explain: "[[sports]] is masculine plural → [[quels]]." },
      { type: "fill", q: "___ âge as-tu ?", answer: ["Quel", "quel"], explain: "[[âge]] is masculine → [[Quel âge as-tu ?]]" },
      { type: "fill", q: "Tu parles ___ langues ? (which)", answer: ["quelles"], explain: "[[langues]] is feminine plural → [[quelles]]." },
      { type: "mcq", q: "___ belle ville !", options: ["Quel", "Qu'est-ce que", "Quelle"], answer: 2, explain: "[[ville]] is feminine → [[Quelle belle ville !]]" },
      { type: "mcq", q: "Which question is correct?", options: ["Qu'est-ce que est ton nom ?", "Quel est ton nom ?", "Quelle est ton nom ?"], answer: 1, explain: "'What is…?' + a noun → [[quel]] + [[être]]; [[nom]] is masculine: [[Quel est ton nom ?]]" },
      { type: "mcq", q: "___ tu manges ?", options: ["Qu'est-ce que", "Quel", "Quelle"], answer: 0, explain: "A subject + verb comes after → [[qu'est-ce que]]." },
      { type: "listen", say: "Quelle heure est-il ?", options: ["How old are you?", "What time is it?", "What's your name?"], answer: 1, explain: "[[heure]] = hour, time." },
      { type: "listen", say: "Quel dommage !", options: ["What luck!", "What lovely weather!", "What a pity!"], answer: 2, explain: "[[Quel dommage !]] = What a pity! ([[Quelle chance !]] = How lucky!)" },
      { type: "order", words: ["Quelle", "est", "ton", "adresse ?"], en: "What's your address?" },
      { type: "speak", fr: "Quel est votre numéro de téléphone ?", en: "What's your phone number?" }
    ]
  },
  {
    id: "g-adjectives",
    cat: "grammar",
    title: "Describing: adjective agreement & position",
    minutes: 20,
    summary: "Make adjectives agree with their noun (masculine / feminine, singular / plural), learn the main patterns and the irregular ones, and put each adjective in the right place.",
    sections: [
      { p: "An adjective describes a noun: small, red, Indian. In French, the adjective changes to match its noun — masculine or feminine, singular or plural. This is called <b>agreement</b>: [[un petit chat]] (a small cat), [[une petite maison]] (a small house), [[des petits chats]] (small cats)." },
      { h: "The basic rule: + e, + s", table: { head: ["", "Singular", "Plural"], rows: [
        ["Masculine", "[[petit|puh-TEE]]", "[[petits|puh-TEE]] (+ s)"],
        ["Feminine", "[[petite|puh-TEET]] (+ e)", "[[petites|puh-TEET]] (+ es)"]
      ] } },
      { tip: "Listen to the feminine! The added -e makes the silent final consonant <b>audible</b>: [[petit|puh-TEE]] → [[petite|puh-TEET]], [[grand|GRAHN]] → [[grande|GRAHND]], [[français|frahn-SEH]] → [[française|frahn-SEHZ]]. The plural -s stays silent. Adjectives that already end in -e don't change in the feminine: [[rouge]], [[facile]], [[sympathique]], [[jeune]]." },
      { h: "Other feminine patterns", table: { head: ["Masculine", "Feminine", "Examples"], rows: [
        ["-eux", "-euse", "[[heureux]] → [[heureuse]] (happy), [[sérieux]] → [[sérieuse]] (serious)"],
        ["-if", "-ive", "[[sportif]] → [[sportive]] (sporty), [[actif]] → [[active]] (active)"],
        ["-en", "-enne", "[[indien|ehn-DYEHN]] → [[indienne|ehn-DYEN]], [[italien]] → [[italienne]]"],
        ["-er", "-ère", "[[cher]] → [[chère]] (expensive, dear), [[premier]] → [[première]] (first)"],
        ["-el", "-elle", "[[naturel]] → [[naturelle]], [[professionnel]] → [[professionnelle]]"],
        ["-on", "-onne", "[[bon]] → [[bonne]] (good), [[mignon]] → [[mignonne]] (cute)"]
      ] } },
      { h: "Irregular — learn these by heart", table: { head: ["Masculine", "Feminine", "Meaning"], rows: [
        ["[[beau]] — [[bel]] before a vowel", "[[belle]]", "beautiful, handsome"],
        ["[[nouveau]] — [[nouvel]] before a vowel", "[[nouvelle]]", "new"],
        ["[[vieux]] — [[vieil]] before a vowel", "[[vieille]]", "old"],
        ["[[blanc]]", "[[blanche]]", "white"],
        ["[[long]]", "[[longue]]", "long"],
        ["[[gentil]]", "[[gentille]]", "kind, nice"]
      ] } },
      { h: "Plurals of adjectives", p: "Add <b>-s</b> (silent): [[petits]], [[petites]]. Adjectives ending in -s or -x don't change: [[un garçon heureux]] → [[des garçons heureux]]; [[un livre français]] → [[des livres français]]. Most adjectives in <b>-al</b> become <b>-aux</b> in the masculine plural: [[un problème national]] → [[des problèmes nationaux]]. [[bel]], [[nouvel]], [[vieil]] become [[beaux]], [[nouveaux]], [[vieux]] in the plural: [[un bel hôtel]] → [[deux beaux hôtels]]. For a mixed group of men and women, use the masculine plural: [[Ravi et Priya sont indiens.]]" },
      { h: "Position: usually AFTER the noun", p: "Most adjectives come <b>after</b> the noun — the opposite of English: [[un film intéressant]] (an interesting film), [[une voiture rouge]] (a red car), [[un restaurant indien]] (an Indian restaurant). But a small group of very common adjectives go <b>before</b> the noun. Remember <b>BAGS</b>: <b>B</b>eauty ([[beau]], [[joli]]), <b>A</b>ge ([[jeune]], [[vieux]], [[nouveau]]), <b>G</b>oodness ([[bon]], [[mauvais]]), <b>S</b>ize ([[grand]], [[petit]], [[gros]])." },
      { examples: [
        { fr: "une jolie maison", en: "a pretty house", say: "ün zhoh-lee meh-ZOHN" },
        { fr: "un bon restaurant indien", en: "a good Indian restaurant", say: "ehn bohn reh-stoh-rahn ehn-DYEHN" },
        { fr: "une grande ville moderne", en: "a big modern city", say: "ün grahnd veel moh-DEHRN" },
        { fr: "un nouvel ami", en: "a new friend", say: "ehn noo-veh-lah-MEE" },
        { fr: "une petite voiture blanche", en: "a small white car", say: "ün puh-teet vwah-tür BLAHNSH" }
      ] },
      { warn: "English writes nationalities with a capital letter; French doesn't when it's an adjective: [[Il est français.]] [[Elle est indienne.]] [[un restaurant indien]]. A capital is only for the noun meaning a person: [[un Français]] (a Frenchman), [[une Indienne]] (an Indian woman). Languages are lowercase too: [[le français]], [[l'hindi]] (m.)." },
      { h: "Use it", dialogue: [
        ["Anaïs", "Ta nouvelle colocataire est comment ?", "What's your new flatmate like?"],
        ["Kavya", "Elle est très gentille ! Elle est italienne.", "She's really kind! She's Italian."],
        ["Anaïs", "Et l'appartement ?", "And the flat?"],
        ["Kavya", "C'est un petit appartement, mais il est beau et lumineux.", "It's a small flat, but it's beautiful and bright."],
        ["Anaïs", "Et le quartier ?", "And the neighbourhood?"],
        ["Kavya", "C'est un vieux quartier très animé, avec des restaurants indiens !", "It's a lively old neighbourhood, with Indian restaurants!"]
      ] }
    ],
    quiz: [
      { type: "mcq", q: "une voiture ___ (white)", options: ["blanc", "blanche", "blanches"], answer: 1, explain: "[[voiture]] is feminine singular → [[une voiture blanche]]." },
      { type: "fill", q: "Elle est ___. (indien)", answer: ["indienne"], explain: "-en → -enne: [[Elle est indienne.]] Lowercase, because it's an adjective." },
      { type: "fill", q: "Les gâteaux sont ___. (délicieux)", answer: ["délicieux"], explain: "Adjectives ending in -x don't change in the masculine plural: [[délicieux]]." },
      { type: "fill", q: "Ma sœur est très ___. (sportif)", answer: ["sportive"], explain: "-if → -ive: [[Ma sœur est très sportive.]]" },
      { type: "mcq", q: "'a good Indian restaurant'", options: ["un restaurant bon indien", "un indien bon restaurant", "un bon restaurant indien"], answer: 2, explain: "[[bon]] (goodness) goes before the noun; a nationality goes after: [[un bon restaurant indien]]." },
      { type: "mcq", q: "'an old friend' = un ___ ami", options: ["vieux", "vieil", "vieille"], answer: 1, explain: "Before a masculine noun starting with a vowel: [[vieil]] → [[un vieil ami]]." },
      { type: "mcq", q: "Which sentence is written correctly?", options: ["Il est français.", "Il est Français.", "Il est France."], answer: 0, explain: "A nationality used as an adjective has no capital: [[Il est français.]]" },
      { type: "mcq", q: "Ravi et Priya sont ___.", options: ["indiennes", "indiens", "indien"], answer: 1, explain: "Mixed group → masculine plural: [[Ravi et Priya sont indiens.]]" },
      { type: "listen", say: "une étudiante française", options: ["un étudiant français", "des étudiants français", "une étudiante française"], answer: 2, explain: "Hear the t of [[étudiante]] and the z sound of [[française]]: feminine." },
      { type: "listen", say: "C'est une petite ville.", options: ["It's a small town.", "It's a pretty town.", "It's a big city."], answer: 0, explain: "[[petite]] = small. ([[jolie]] = pretty, [[grande]] = big.)" },
      { type: "order", words: ["J'ai", "une", "petite", "voiture", "blanche."], en: "I have a small white car." },
      { type: "speak", fr: "Mon ami est indien et ma collègue est italienne.", en: "My friend is Indian and my colleague is Italian." }
    ]
  },
  {
    id: "g-possessives",
    cat: "grammar",
    title: "My, your, his/her: mon, ma, mes…",
    minutes: 15,
    summary: "Say my, your, his, her, our and their in French — and avoid the big trap: the possessive agrees with the thing owned, not with the owner.",
    sections: [
      { p: "Possessives (my, your, his…) work like adjectives: they agree with the noun that comes after them. That's why 'my' has three forms: [[mon père]] (my father), [[ma mère]] (my mother), [[mes parents]] (my parents)." },
      { table: { head: ["", "Masculine", "Feminine", "Plural"], rows: [
        ["my", "[[mon|MOHN]]", "[[ma|MAH]]", "[[mes|MAY]]"],
        ["your (tu)", "[[ton|TOHN]]", "[[ta|TAH]]", "[[tes|TAY]]"],
        ["his / her / its", "[[son|SOHN]]", "[[sa|SAH]]", "[[ses|SAY]]"],
        ["our", "[[notre|NOH-truh]]", "[[notre|NOH-truh]]", "[[nos|NOH]]"],
        ["your (vous)", "[[votre|VOH-truh]]", "[[votre|VOH-truh]]", "[[vos|VOH]]"],
        ["their", "[[leur|LUHR]]", "[[leur|LUHR]]", "[[leurs|LUHR]]"]
      ] } },
      { examples: [
        { fr: "Ton chaï est prêt !", en: "Your chai is ready!", say: "tohn shah-y eh PREH" },
        { fr: "Notre maison est à Goa.", en: "Our house is in Goa.", say: "noh-truh meh-zohn eh-tah goh-AH" },
        { fr: "Vos enfants sont adorables.", en: "Your children are adorable.", say: "voh-zahn-fahn sohn-tah-doh-RAH-bluh" },
        { fr: "Leur fils habite à Londres.", en: "Their son lives in London.", say: "luhr fees ah-beet ah LOHN-druh" },
        { fr: "Leurs amis sont français.", en: "Their friends are French.", say: "luhr-zah-mee sohn frahn-SEH" }
      ] },
      { h: "The big trap: son, sa, ses", warn: "In English, 'his' or 'her' depends on the <b>owner</b>. In French, [[son]], [[sa]] and [[ses]] depend only on the <b>thing owned</b>. [[son père]] = his father OR her father. [[sa mère]] = his mother OR her mother. [[ses amis]] = his friends OR her friends. Whether the owner is a man or a woman doesn't matter at all!" },
      { examples: [
        { fr: "Ravi aime sa mère.", en: "Ravi loves his mother. (mère is feminine → sa)", say: "rah-vee ehm sah MEHR" },
        { fr: "Priya aime son père.", en: "Priya loves her father. (père is masculine → son)", say: "pree-yah ehm sohn PEHR" },
        { fr: "Ses parents habitent à Delhi.", en: "His / Her parents live in Delhi.", say: "say pah-rahn ah-beet ah deh-LEE" }
      ] },
      { tip: "Before a <b>feminine</b> noun that starts with a vowel or a silent h, use [[mon]], [[ton]], [[son]] instead of [[ma]], [[ta]], [[sa]] — simply because it's easier to say: [[mon amie|moh-nah-MEE]] (my female friend), [[mon école]] (my school), [[son adresse]] (his / her address). The noun is still feminine: [[Mon amie est gentille.]]" },
      { note: "[[leur]] = their, for <b>one</b> thing: [[leur maison]]. [[leurs]] = their, for <b>several</b> things: [[leurs enfants]]. Liaison again: before a vowel, the s of the plural forms sounds like z: [[mes amis|may-zah-MEE]], [[nos enfants|noh-zahn-FAHN]], [[leurs amis|luhr-zah-MEE]]. And [[mon]], [[ton]], [[son]] link with an n: [[mon ami|moh-nah-MEE]]." },
      { tip: "Match the possessive to the 'you' you're using: [[ton]], [[ta]], [[tes]] go with [[tu]]; [[votre]], [[vos]] go with [[vous]]. [[Tu as ton passeport ?]] — [[Vous avez votre passeport ?]] Don't mix them!" },
      { h: "Use it: family photos", dialogue: [
        ["Chloé", "C'est ta famille sur la photo ?", "Is that your family in the photo?"],
        ["Rishi", "Oui ! Voici mon père, ma mère et ma sœur, Ananya.", "Yes! Here are my father, my mother and my sister, Ananya."],
        ["Chloé", "Et lui, c'est son mari ?", "And him, is he her husband?"],
        ["Rishi", "Oui, c'est Nikhil, son mari. Et voici leurs enfants.", "Yes, that's Nikhil, her husband. And here are their children."],
        ["Chloé", "Ils sont mignons ! Ta famille habite où ?", "They're cute! Where does your family live?"],
        ["Rishi", "Mes parents habitent à Delhi, et ma sœur habite à Bangalore avec sa famille.", "My parents live in Delhi, and my sister lives in Bangalore with her family."]
      ] }
    ],
    quiz: [
      { type: "mcq", q: "___ mère (my mother)", options: ["mon", "ma", "mes"], answer: 1, explain: "[[mère]] is feminine → [[ma mère]]." },
      { type: "fill", q: "___ parents habitent à Delhi. (my)", answer: ["Mes", "mes"], explain: "[[parents]] is plural → [[mes parents]]." },
      { type: "mcq", q: "Priya and her brother: Priya aime ___ frère.", options: ["son", "sa", "ses"], answer: 0, explain: "[[frère]] is masculine → [[son frère]], even though Priya is a woman." },
      { type: "mcq", q: "Ravi and his sister: Ravi aime ___ sœur.", options: ["son", "ses", "sa"], answer: 2, explain: "[[sœur]] is feminine → [[sa sœur]], even though Ravi is a man." },
      { type: "fill", q: "C'est ___ amie Julie. (my)", answer: ["mon"], explain: "A feminine noun starting with a vowel → [[mon]]: [[mon amie]]." },
      { type: "mcq", q: "'their children' = ___ enfants", options: ["leur", "leurs", "ses"], answer: 1, explain: "Several children → [[leurs]]: [[leurs enfants]]." },
      { type: "fill", q: "Vous avez ___ passeport ? (your)", answer: ["votre"], explain: "With [[vous]]: [[votre]] (one thing) / [[vos]] (several)." },
      { type: "mcq", q: "What does 'son père' mean?", options: ["only 'his father'", "only 'her father'", "his father OR her father"], answer: 2, explain: "[[son]] agrees with [[père]] (masculine), not with the owner." },
      { type: "listen", say: "Ses amis sont sympas.", options: ["My friends are nice.", "Our friends are nice.", "His or her friends are nice."], answer: 2, explain: "[[ses]] (say) = his / her, for several things." },
      { type: "listen", say: "Notre maison est petite.", options: ["Your house is small.", "Our house is small.", "Their house is small."], answer: 1, explain: "[[notre]] = our." },
      { type: "order", words: ["Ma", "sœur", "habite", "avec", "son", "mari."], en: "My sister lives with her husband." },
      { type: "speak", fr: "Mes amis habitent à Bangalore avec leurs enfants.", en: "My friends live in Bangalore with their children." }
    ]
  },
  {
    id: "g-connectors",
    cat: "grammar",
    title: "Linking words: et, mais, ou, parce que, donc, alors, aussi, avec, sans, pour",
    minutes: 15,
    summary: "Join short sentences into longer ones with ten small linking words — the quickest way to sound more fluent in the DELF writing and speaking tests.",
    sections: [
      { p: "At A1 your sentences are short: [[J'habite à Delhi.]] [[J'aime le cricket.]] That's perfectly fine! But small <b>linking words</b> (connectors) join your ideas, make you sound more natural and help you write longer answers. DELF examiners notice them in both the writing and the speaking tests." },
      { h: "The ten connectors", table: { head: ["Word", "Meaning", "Example"], rows: [
        ["[[et|AY]]", "and", "[[J'aime le thé et le café.]]"],
        ["[[mais|MEH]]", "but", "[[Je parle anglais, mais je ne parle pas allemand.]]"],
        ["[[ou|OO]]", "or", "[[Tu veux du thé ou du café ?]]"],
        ["[[parce que|PARS-kuh]]", "because (+ a sentence)", "[[J'apprends le français parce que j'aime voyager.]]"],
        ["[[donc|DOHNK]]", "so, therefore", "[[Il pleut, donc je reste à la maison.]]"],
        ["[[alors|ah-LOR]]", "so, then (very common when speaking)", "[[J'ai sommeil, alors je vais au lit.]]"],
        ["[[aussi|oh-SEE]]", "too, also", "[[Moi aussi !]] [[J'aime aussi le cricket.]]"],
        ["[[avec|ah-VEHK]]", "with", "[[J'habite avec ma famille.]]"],
        ["[[sans|SAHN]]", "without", "[[Un café sans sucre, s'il vous plaît.]]"],
        ["[[pour|POOR]]", "for / (in order) to", "[[C'est pour toi.]] [[Je travaille pour gagner de l'argent.]]"]
      ] } },
      { warn: "[[ou]] (or) has no accent; [[où]] (where) has one. They sound exactly the same, so the accent matters in writing: [[Tu viens ou pas ?]] (Are you coming or not?) / [[Tu habites où ?]] (Where do you live?)" },
      { h: "Parce que or pour?", p: "Both can explain <i>why</i>, but they take different things after them:<br>• [[parce que]] + a full sentence (subject + verb): [[J'étudie parce que j'ai un examen.]] Before a vowel it becomes [[parce qu']]: [[parce qu'il fait beau]].<br>• [[pour]] + an infinitive (the dictionary form of a verb) or + a noun: [[J'étudie pour réussir le DELF.]] [[Je suis en France pour le travail.]]" },
      { h: "Aussi: where does it go?", tip: "Alone, after a pronoun like [[moi]] or [[toi]]: [[Moi aussi !]] (Me too!) [[Toi aussi ?]] (You too?) In a sentence, [[aussi]] goes <b>right after the verb</b>: [[J'aime aussi le thé.]] (I also like tea.) [[Je parle aussi hindi.]] (I speak Hindi too.) And for 'me neither', say [[Moi non plus.]]" },
      { h: "Et toi ? Et vous ?", note: "The easiest way to keep a conversation going: answer, then send the question back with [[Et toi ?]] (friendly) or [[Et vous ?]] (polite). — [[Je m'appelle Ravi. Et toi ?]] — [[Moi, c'est Emma.]]" },
      { h: "From short to long", examples: [
        { fr: "J'aime Paris, mais c'est cher.", en: "I like Paris, but it's expensive.", say: "zhehm pah-ree meh seh SHEHR" },
        { fr: "Je bois du chaï sans sucre.", en: "I drink chai without sugar.", say: "zhuh bwah dü shah-y sahn SÜ-kruh" },
        { fr: "Il pleut, alors on reste à la maison.", en: "It's raining, so we're staying home.", say: "eel pluh ah-loh-rohn rehst ah lah meh-ZOHN" },
        { fr: "Tu préfères le cricket ou le football ?", en: "Do you prefer cricket or football?", say: "tü pray-fehr luh kree-keht oo luh foot-BOHL" },
        { fr: "J'apprends le français pour travailler en France.", en: "I'm learning French to work in France.", say: "zhah-prahn luh frahn-seh poor trah-vah-yay ahn FRAHNS" }
      ] },
      { h: "A model paragraph (DELF style)", examples: [
        { fr: "Je m'appelle Ravi et j'habite à Delhi avec ma famille. Je travaille dans l'informatique, mais j'adore aussi la musique. J'apprends le français parce que je voudrais travailler en France. J'étudie tous les soirs, donc je progresse vite ! Et vous ?", en: "My name is Ravi and I live in Delhi with my family. I work in IT, but I also love music. I'm learning French because I'd like to work in France. I study every evening, so I'm making fast progress! And you?" }
      ] },
      { tip: "Count the linking words in the paragraph: [[et]], [[avec]], [[mais]], [[aussi]], [[parce que]], [[donc]], [[Et vous ?]] — seven links in five sentences. Use the same pattern to talk about yourself: change the name, the city, the job and the reasons." },
      { h: "Use it", dialogue: [
        ["Lucas", "Tu aimes le cricket ?", "Do you like cricket?"],
        ["Diya", "Oui, j'adore le cricket ! Et toi ?", "Yes, I love cricket! And you?"],
        ["Lucas", "Moi, je préfère le football, mais je regarde aussi le tennis.", "I prefer football, but I also watch tennis."],
        ["Diya", "Moi aussi ! On regarde le match ensemble ce soir ?", "Me too! Shall we watch the match together tonight?"],
        ["Lucas", "D'accord ! Avec ou sans samoussas ?", "OK! With or without samosas?"],
        ["Diya", "Avec, bien sûr ! Parce que le cricket sans samoussas, ce n'est pas du cricket !", "With, of course! Because cricket without samosas isn't really cricket!"]
      ] }
    ],
    quiz: [
      { type: "mcq", q: "J'aime le thé, ___ je n'aime pas le café.", options: ["et", "mais", "ou"], answer: 1, explain: "A contrast → [[mais]] (but)." },
      { type: "mcq", q: "J'apprends le français ___ je voudrais vivre en France.", options: ["parce que", "pour", "donc"], answer: 0, explain: "A full sentence (je voudrais…) comes after → [[parce que]]." },
      { type: "fill", q: "Je travaille ___ gagner de l'argent. (in order to)", answer: ["pour"], explain: "[[pour]] + infinitive = in order to." },
      { type: "fill", q: "Tu veux du thé ___ du café ? (or)", answer: ["ou"], explain: "or = [[ou]], without an accent. ([[où]] = where.)" },
      { type: "fill", q: "Un café ___ sucre, s'il vous plaît. (without)", answer: ["sans"], explain: "[[sans]] = without." },
      { type: "mcq", q: "— J'adore Paris ! — ___ aussi !", options: ["Je", "Me", "Moi"], answer: 2, explain: "Me too = [[Moi aussi !]]" },
      { type: "mcq", q: "'I also like tea.'", options: ["J'aussi aime le thé.", "J'aime aussi le thé.", "Aussi j'aime le thé."], answer: 1, explain: "[[aussi]] goes right after the verb: [[J'aime aussi le thé.]]" },
      { type: "mcq", q: "Je suis en France ___ le travail.", options: ["parce que", "sans", "pour"], answer: 2, explain: "[[pour]] + a noun: [[pour le travail]] = for work." },
      { type: "listen", say: "Il pleut, donc je reste à la maison.", options: ["It's raining, so I'm staying home.", "It's raining, but I'm going out.", "It's raining and I'm at work."], answer: 0, explain: "[[donc]] = so, therefore." },
      { type: "listen", say: "J'habite avec mes parents.", options: ["I live near my parents.", "I live without my parents.", "I live with my parents."], answer: 2, explain: "[[avec]] = with. ([[sans]] = without.)" },
      { type: "order", words: ["J'apprends", "le", "français", "parce", "que", "j'aime", "voyager."], en: "I'm learning French because I love travelling." },
      { type: "speak", fr: "J'aime le thé, mais je préfère le café. Et vous ?", en: "I like tea, but I prefer coffee. And you?" }
    ]
  }
]);
