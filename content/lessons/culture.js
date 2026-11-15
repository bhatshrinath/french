/* Culture lessons: France & francophonie, politeness, food culture, holidays. */
A1.addLessons([
  {
    id: "c-france",
    cat: "culture",
    title: "France & the French-speaking world",
    minutes: 10,
    summary: "Know the basics about France and where else French is spoken (including India!), and say where you come from.",
    sections: [
      {
        h: "France in a nutshell",
        p: "France ([[la France]]) is the largest country in the European Union by area, with about 68 million people. Its capital is [[Paris|pah-REE]]. On a map, mainland France has six sides, so the French often call it [[l'Hexagone|leh-gzah-GON]] (the hexagon). Mainland France is divided into 13 regions, such as [[la Bretagne]] (Brittany), [[la Normandie]] and [[l'Île-de-France]], the region around Paris."
      },
      {
        h: "Big cities you should know",
        table: {
          head: ["City", "Where", "Famous for"],
          rows: [
            ["[[Paris]]", "north", "the capital: the Eiffel Tower, museums, fashion"],
            ["[[Marseille|mar-SEH-y]]", "south, on the Mediterranean", "the oldest city in France, a big port, sunshine"],
            ["[[Lyon|lee-OHN]]", "south-east", "food: it's often called the capital of French cooking"],
            ["[[Lille|LEEL]]", "north, near Belgium", "a student city with Flemish-style houses"],
            ["[[Bordeaux|bor-DOH]]", "south-west", "wine and elegant stone buildings"],
            ["[[Toulouse|too-LOOZ]]", "south-west", "planes (Airbus) and pink bricks: [[la ville rose]] (the pink city)"]
          ]
        }
      },
      {
        h: "La francophonie: French around the world",
        p: "French is not only the language of France. About <b>320 million people</b> speak French on five continents, and more than half of the people who use it every day live in Africa. The French-speaking world is called [[la francophonie|lah frahn-koh-foh-NEE]], and it has its own day every year on <b>20 March</b>."
      },
      {
        h: "Where French is spoken",
        table: {
          head: ["Where", "Good to know"],
          rows: [
            ["[[le Québec]] (Canada)", "French is the official language of Québec. Montréal is one of the biggest French-speaking cities in the world."],
            ["[[la Belgique]], [[la Suisse]], [[le Luxembourg]]", "French is one of several official languages. In Belgium and Switzerland, 70 is [[septante]] and 90 is [[nonante]]!"],
            ["Africa", "[[le Sénégal]], [[la Côte d'Ivoire]], [[le Cameroun]], [[la République démocratique du Congo]] and many more. Kinshasa (DR Congo) is often called the biggest French-speaking city in the world."],
            ["Overseas France", "[[la Guadeloupe]] and [[la Martinique]] (Caribbean), [[la Guyane]] (South America), [[La Réunion]] and [[Mayotte]] (Indian Ocean) are part of France. They even use the euro!"],
            ["[[l'île Maurice]] (Mauritius)", "Not part of France, but French is spoken everywhere, and many Mauritians have Indian roots."]
          ]
        }
      },
      {
        note: "France in India! [[Pondichéry|pohn-dee-shay-REE]] (today Puducherry), Karikal, Mahé and Yanam were French until 1954, and Chandernagor, near Kolkata, until 1950. In Puducherry's White Town you can still see French street names (rue Dumas, rue Romain Rolland), a French consulate, a French high school, and policemen in red kepis (French-style caps). Today the <b>Alliance Française</b> has centres in many Indian cities (Delhi, Mumbai, Bengaluru, Chennai, Kolkata, Pune and more), and that's usually where you sit the DELF exam."
      },
      {
        h: "Talking about where you're from",
        examples: [
          { fr: "Vous venez d'où ?", en: "Where are you from? (polite)", say: "voo vuh-nay DOO" },
          { fr: "Tu viens d'où ?", en: "Where are you from? (friendly)", say: "tü vyehn DOO" },
          { fr: "Je viens d'Inde.", en: "I come from India.", say: "zhuh vyehn DEHND" },
          { fr: "Je suis indien. / Je suis indienne.", en: "I'm Indian. (man / woman)", say: "zhuh swee-zehn-DYEHN / zhuh swee-zehn-DYEN" },
          { fr: "Je suis de Delhi, mais j'habite à Mumbai.", en: "I'm from Delhi, but I live in Mumbai.", say: "zhuh swee duh deh-LEE, meh zhah-bee-tah moom-BAH-y" },
          { fr: "On parle français au Québec, en Belgique et au Sénégal.", en: "People speak French in Québec, in Belgium and in Senegal.", say: "ohn parl frahn-SEH oh kay-BEHK, ahn behl-ZHEEK ay oh say-nay-GAHL" }
        ]
      },
      {
        tip: "Countries have a gender too. Use <b>en</b> for feminine countries (most of them end in -e): [[en France]], [[en Inde]], [[en Belgique]]. Use <b>au</b> for masculine ones: [[au Canada]], [[au Sénégal]], [[au Japon]]. And use <b>à</b> for cities: [[à Paris]], [[à Montréal]], [[à Mumbai]]."
      },
      {
        h: "Use it: meeting at the Alliance Française",
        dialogue: [
          ["Camille", "Bonjour ! Tu viens d'où ?", "Hello! Where are you from?"],
          ["Rohan", "Je viens d'Inde, de Mumbai. Et toi ?", "I'm from India, from Mumbai. And you?"],
          ["Camille", "Moi, je suis française. Je suis de Lyon.", "I'm French. I'm from Lyon."],
          ["Rohan", "Ah, Lyon ! La ville de la gastronomie !", "Ah, Lyon! The city of good food!"],
          ["Camille", "Exactement ! Et tu parles très bien français.", "Exactly! And you speak French very well."],
          ["Rohan", "Merci ! J'apprends à l'Alliance Française.", "Thanks! I'm learning at the Alliance Française."]
        ]
      }
    ],
    quiz: [
      { type: "mcq", q: "Why do the French call France <b>l'Hexagone</b>?", options: ["Mainland France has six sides on the map", "France has six big cities", "France has six regions"], answer: 0, explain: "A hexagon has six sides, like the shape of mainland France." },
      { type: "mcq", q: "About how many people speak French in the world?", options: ["about 32 million", "about 320 million", "about 3 billion"], answer: 1, explain: "About 320 million, on five continents: that's [[la francophonie]]." },
      { type: "mcq", q: "Which Indian town was French until 1954?", options: ["Goa", "Kochi", "Pondichéry (Puducherry)"], answer: 2, explain: "Goa was Portuguese. [[Pondichéry]] was French until 1954." },
      { type: "listen", say: "Je viens d'Inde.", options: ["I live in India.", "I come from India.", "I'm going to India."], answer: 1, explain: "[[Je viens de…]] = I come from… [[J'habite à / en…]] = I live in…" },
      { type: "listen", say: "Vous venez d'où ?", options: ["Where are you from?", "Where do you live?", "Where are you going?"], answer: 0, explain: "[[Vous venez d'où ?]] is the polite form. With a friend: [[Tu viens d'où ?]]" },
      { type: "listen", say: "septante", options: ["17", "70", "60"], answer: 1, explain: "In Belgium and Switzerland, [[septante]] = 70. In France, 70 is [[soixante-dix]]." },
      { type: "fill", q: "Priya: « Je suis ___. » (Indian)", answer: ["indienne"], explain: "Priya is a woman, so: [[Je suis indienne.]] A man says [[Je suis indien.]]" },
      { type: "fill", q: "Rohan habite ___ Canada. (in)", answer: ["au"], explain: "[[le Canada]] is masculine, so: [[au Canada]]. Feminine countries take en: [[en Inde]]." },
      { type: "order", words: ["Je", "viens", "d'Inde", "et", "j'habite", "à", "Mumbai."], en: "I come from India and I live in Mumbai." },
      { type: "speak", fr: "Je viens d'Inde et j'apprends le français.", en: "I'm from India and I'm learning French." }
    ]
  }
,
  {
    id: "c-politeness",
    cat: "culture",
    title: "Politeness & everyday social codes",
    minutes: 10,
    summary: "Greet people the French way, choose between tu and vous, and use the polite words and habits that make French people warm to you.",
    sections: [
      {
        h: "Rule number one: Bonjour first",
        p: "In France, <b>Bonjour</b> is not just 'hello': it's the key that opens every interaction. Say it when you walk into a shop, a bakery, a pharmacy or a doctor's waiting room, to the bus driver, in a lift with other people, and <b>before</b> you ask anyone a question. Asking 'Where is the station?' without a bonjour first sounds rude to French ears. In the evening (from about 6 pm), say [[Bonsoir|bohn-SWAHR]]."
      },
      {
        h: "Greeting and leaving",
        examples: [
          { fr: "Bonjour, madame.", en: "Hello (to a woman).", say: "bohn-zhoor, mah-DAHM" },
          { fr: "Bonjour, monsieur.", en: "Hello (to a man).", say: "bohn-zhoor, muh-SYUH" },
          { fr: "Bonsoir !", en: "Good evening!", say: "bohn-SWAHR" },
          { fr: "Au revoir, bonne journée !", en: "Goodbye, have a nice day!", say: "oh ruh-VWAHR, bon zhoor-NAY" },
          { fr: "Bonne soirée !", en: "Have a nice evening!", say: "bon swah-RAY" },
          { fr: "Merci, vous aussi !", en: "Thank you, you too!", say: "mehr-SEE, voo-zoh-SEE" }
        ]
      },
      {
        h: "Tu or vous?",
        table: {
          head: ["", "[[tu]]", "[[vous]]"],
          rows: [
            ["Who", "friends, family, children, classmates, young people among themselves", "strangers, shop staff, older people, your boss, officials, the DELF examiner, and any group of people"],
            ["Like Hindi…", "<i>tum</i>: friendly, never rude among friends", "<i>aap</i>: respectful (and also 'you all')"],
            ["Example", "[[Tu vas bien ?|tü vah BYEHN]]", "[[Vous allez bien ?|voo-zah-lay BYEHN]]"]
          ]
        }
      },
      {
        tip: "If in doubt, use <b>vous</b>: it's never rude. When a French person wants to switch, they'll say [[On se tutoie ?|ohn suh tü-TWAH]] (Shall we say tu to each other?). And use [[madame]] for any woman: [[mademoiselle]] is old-fashioned and is no longer used on official forms."
      },
      {
        note: "<b>La bise or a handshake?</b> Friends and family often greet each other with [[la bise|lah BEEZ]]: you touch cheeks and make a small kiss sound in the air, usually twice, once on each side (the number changes from region to region!). At work, and with people you meet for the first time, a handshake ([[une poignée de main]]) is normal. Not comfortable with la bise? A warm smile, a handshake and a clear [[Bonjour !]] are perfectly fine. Just follow the other person's lead."
      },
      {
        h: "The magic words",
        table: {
          head: ["French", "English", "When to use it"],
          rows: [
            ["[[s'il vous plaît|seel voo PLEH]] / [[s'il te plaît|seel tuh PLEH]]", "please", "vous form / tu form"],
            ["[[merci|mehr-SEE]], [[merci beaucoup|mehr-see boh-KOO]]", "thank you, thank you very much", "all the time!"],
            ["[[de rien|duh RYEHN]]", "you're welcome", "friendly, everyday"],
            ["[[je vous en prie|zhuh voo-zahn PREE]]", "you're welcome; please, go ahead", "polite (with tu: [[je t'en prie]])"],
            ["[[excusez-moi|ehks-kü-zay-MWAH]]", "excuse me", "to get someone's attention, or to apologise: [[Excusez-moi, madame…]]"],
            ["[[pardon|par-DOHN]]", "sorry, excuse me", "when you bump into someone, need to get past, or didn't hear: [[Pardon ?]]"],
            ["[[désolé|day-zoh-LAY]] / [[désolée|day-zoh-LAY]]", "sorry", "to apologise (man / woman: same sound)"]
          ]
        }
      },
      {
        h: "Small talk, time and the table",
        list: [
          "<b>Good small-talk topics</b>: the weather ([[Il fait beau aujourd'hui !]]), food, travel, the weekend, films, sport.",
          "<b>Avoid</b> with people you've just met: salary ([[Combien tu gagnes ?]] is very rude), religion, and personal questions about age or marriage. In India these can be friendly questions; in France they feel private.",
          "<b>Time</b>: be on time for work, appointments and trains. But for dinner at someone's home, arrive about 10 to 15 minutes late ([[le quart d'heure de politesse]]), and never early!",
          "<b>At the table</b>: say [[Bon appétit !|boh-nah-pay-TEE]] before eating. When you raise your glass, say [[Santé !|sahn-TAY]] or [[À votre santé !|ah voh-truh sahn-TAY]] and look the other person in the eyes.",
          "<b>Invited to someone's home?</b> Bring flowers, chocolates or a dessert. But not chrysanthemums: in France they're for cemeteries!"
        ]
      },
      {
        h: "Use it: at the bakery",
        dialogue: [
          ["Boulangère", "Bonjour, monsieur !", "Hello, sir!"],
          ["Client", "Bonjour, madame. Une baguette, s'il vous plaît.", "Hello, madam. A baguette, please."],
          ["Boulangère", "Voilà. Avec ceci ?", "Here you are. Anything else?"],
          ["Client", "C'est tout, merci. Ça fait combien ?", "That's all, thanks. How much is it?"],
          ["Boulangère", "Un euro vingt, s'il vous plaît.", "One euro twenty, please."],
          ["Client", "Voilà. Merci, au revoir !", "Here you go. Thank you, goodbye!"],
          ["Boulangère", "Merci à vous. Bonne journée !", "Thank you. Have a nice day!"],
          ["Client", "Vous aussi !", "You too!"]
        ]
      }
    ],
    quiz: [
      { type: "mcq", q: "You walk into a small shop in France. What do you say first?", options: ["Nothing: just look around", "Salut !", "Bonjour !"], answer: 2, explain: "Always [[Bonjour !]] (or [[Bonjour, madame / monsieur.]]). [[Salut !]] is only for friends." },
      { type: "mcq", q: "You meet your friend's grandmother for the first time. You use…", options: ["vous", "tu"], answer: 0, explain: "An older person you don't know: [[vous]], like <i>aap</i> in Hindi." },
      { type: "listen", say: "Je vous en prie.", options: ["Please repeat.", "Excuse me.", "You're welcome."], answer: 2, explain: "[[Je vous en prie.]] is a polite 'You're welcome'. Friendlier: [[De rien.]]" },
      { type: "listen", say: "Excusez-moi, madame, où est la gare ?", options: ["Sorry, madam, I'm late.", "Excuse me, madam, where is the station?", "Thank you, madam, here is the station."], answer: 1, explain: "[[Excusez-moi]] gets someone's attention politely. [[la gare]] = the train station." },
      { type: "mcq", q: "A friend invites you for dinner at 8 pm. When should you arrive?", options: ["at 7.45 pm, to be safe", "between 8 and 8.15 pm", "at 9.30 pm"], answer: 1, explain: "On time or a little late ([[le quart d'heure de politesse]]), but never early." },
      { type: "mcq", q: "Which topic is best for small talk with someone you've just met?", options: ["the weather", "their salary", "their religion"], answer: 0, explain: "Weather, food, travel and the weekend are safe. Money and religion feel private." },
      { type: "fill", q: "Before eating, the French say: « Bon ___ ! »", answer: ["appétit"], explain: "[[Bon appétit !]] The usual reply: [[Merci, vous aussi !]]" },
      { type: "fill", q: "— Merci ! — De ___ !", answer: ["rien"], explain: "[[De rien !]] = You're welcome!" },
      { type: "order", words: ["Excusez-moi,", "où", "sont", "les", "toilettes ?"], en: "Excuse me, where are the toilets?" },
      { type: "speak", fr: "Bonjour, madame. Une baguette, s'il vous plaît.", en: "Hello, madam. A baguette, please." }
    ]
  }
,
  {
    id: "c-meals",
    cat: "culture",
    title: "Food culture & meal times",
    minutes: 10,
    summary: "Know when and how the French eat, order at the bakery and the restaurant, ask for tap water and the bill, and explain that you're vegetarian.",
    sections: [
      {
        h: "A day of French meals",
        table: {
          head: ["Meal", "When", "What"],
          rows: [
            ["[[le petit-déjeuner|luh puh-tee-day-zhuh-NAY]] (breakfast)", "7 h – 9 h", "light and sweet: bread with butter and jam ([[une tartine]]), cereal, coffee, tea or hot chocolate. Croissants are more of a weekend treat."],
            ["[[le déjeuner|luh day-zhuh-NAY]] (lunch)", "12 h – 14 h", "a real meal, often the main one of the day. Many small shops close for lunch."],
            ["[[le goûter|luh goo-TAY]] (afternoon snack)", "around 16 h 30", "for children after school: a pain au chocolat, biscuits, fruit. A bit like our chai-time snack!"],
            ["[[le dîner|luh dee-NAY]] (dinner)", "around 20 h", "the evening family meal, often a little earlier than in many Indian homes"]
          ]
        }
      },
      {
        h: "Lunch is taken seriously",
        p: "French people rarely eat at their desk. A meal usually has courses: [[l'entrée|lahn-TRAY]] (starter), [[le plat|luh PLAH]] (main course), then [[le fromage|luh froh-MAHZH]] (cheese) and/or [[le dessert|luh deh-SEHR]], and often [[un café]] to finish. France has hundreds of cheeses (some say more than 1,000!), like camembert, brie, comté and roquefort. Cheese comes after the main course, before dessert, and is eaten with bread. At lunchtime, many restaurants offer [[une formule]]: a fixed-price deal such as starter + main, or main + dessert. Remember that times use the 24-hour clock: 20 h = 8 pm."
      },
      {
        warn: "In France, [[l'entrée]] is the <b>starter</b>, not the main course as in American English. The main course is [[le plat principal|luh plah prehn-see-PAHL]]."
      },
      {
        note: "Most French people buy fresh bread every day at the [[boulangerie|boo-lahn-zhuh-REE]] (bakery). The star is [[la baguette|lah bah-GEHT]]: in 2022, UNESCO added the craft and culture of the French baguette to its list of intangible cultural heritage. Bread is on the table at every meal, often placed straight on the tablecloth, and many people nibble the crunchy tip of their baguette on the way home! A friendly fight: in the south-west, a pain au chocolat is called [[une chocolatine]]."
      },
      {
        h: "At the bakery",
        examples: [
          { fr: "Une baguette, s'il vous plaît.", en: "A baguette, please.", say: "ün bah-GEHT, seel voo PLEH" },
          { fr: "Une baguette pas trop cuite, s'il vous plaît.", en: "A baguette, not too well baked, please.", say: "ün bah-geht pah troh KWEET, seel voo PLEH" },
          { fr: "Deux croissants et un pain au chocolat.", en: "Two croissants and a pain au chocolat.", say: "duh krwah-SAHN ay ehn pehn oh shoh-koh-LAH" },
          { fr: "Ça fait combien ?", en: "How much is it?", say: "sah feh kohn-BYEHN" }
        ]
      },
      {
        h: "Restaurant habits",
        list: [
          "Tap water is free: ask for [[une carafe d'eau|ün kah-rahf DOH]]. If you only ask for water, you may get a bottle that you pay for.",
          "To call the waiter, catch their eye and say [[S'il vous plaît !]] or [[Excusez-moi !]], never 'Garçon !', which is old-fashioned and rude.",
          "Nobody will rush you. The waiter brings the bill only when you ask for it: [[L'addition, s'il vous plaît.|lah-dee-SYOHN, seel voo PLEH]]",
          "[[Service compris]]: service is always included in the price. A tip ([[un pourboire]]) is optional: leave a few euros, or round up, if you were happy.",
          "Vegetarian? Check the dish: salads and quiches often contain [[des lardons]] (small pieces of bacon), soups may use meat stock, and many traditional cheeses are made with animal rennet."
        ]
      },
      {
        h: "Eating vegetarian",
        examples: [
          { fr: "Je suis végétarien. / Je suis végétarienne.", en: "I'm vegetarian. (man / woman)", say: "zhuh swee vay-zhay-tah-RYEHN / vay-zhay-tah-RYEN" },
          { fr: "Je ne mange pas de viande.", en: "I don't eat meat.", say: "zhuh nuh mahnzh pah duh VYAHND" },
          { fr: "Je ne mange ni viande ni poisson.", en: "I eat neither meat nor fish.", say: "zhuh nuh mahnzh nee vyahnd nee pwah-SOHN" },
          { fr: "Je ne mange pas d'œufs.", en: "I don't eat eggs.", say: "zhuh nuh mahnzh pah DUH" },
          { fr: "Vous avez un plat végétarien ?", en: "Do you have a vegetarian dish?", say: "voo-zah-vay ehn plah vay-zhay-tah-RYEHN" },
          { fr: "Il y a de la viande dedans ?", en: "Is there any meat in it?", say: "ee-lyah duh lah vyahnd duh-DAHN" }
        ]
      },
      {
        h: "Use it: at the restaurant",
        dialogue: [
          ["Serveur", "Bonsoir ! Vous avez choisi ?", "Good evening! Have you chosen?"],
          ["Ananya", "Oui. Je suis végétarienne. Vous avez un plat sans viande ?", "Yes. I'm vegetarian. Do you have a dish without meat?"],
          ["Serveur", "Oui, il y a les lasagnes aux légumes.", "Yes, there's the vegetable lasagne."],
          ["Ananya", "Parfait, je vais prendre ça. Et une carafe d'eau, s'il vous plaît.", "Perfect, I'll have that. And a jug of tap water, please."],
          ["Serveur", "Très bien.", "Very good."],
          ["Ananya", "Excusez-moi ! L'addition, s'il vous plaît.", "Excuse me! The bill, please."],
          ["Serveur", "Tout de suite, madame.", "Right away, madam."]
        ]
      }
    ],
    quiz: [
      { type: "mcq", q: "In France, <b>l'entrée</b> on a menu is…", options: ["the main course", "the starter", "the dessert"], answer: 1, explain: "[[l'entrée]] = starter, [[le plat]] = main course." },
      { type: "mcq", q: "When do most French people have lunch?", options: ["between 12 h and 14 h", "between 15 h and 16 h", "after 21 h"], answer: 0, explain: "[[Le déjeuner]] is between 12 h and 14 h." },
      { type: "mcq", q: "<b>Le goûter</b> is…", options: ["a late dinner", "a breakfast drink", "an afternoon snack, around 16 h 30"], answer: 2, explain: "[[le goûter]]: the after-school snack." },
      { type: "listen", say: "Une carafe d'eau, s'il vous plaît.", options: ["A bottle of mineral water, please.", "A jug of tap water, please.", "A glass of wine, please."], answer: 1, explain: "[[une carafe d'eau]] = a jug of tap water, and it's free." },
      { type: "listen", say: "L'addition, s'il vous plaît.", options: ["The menu, please.", "The address, please.", "The bill, please."], answer: 2, explain: "[[l'addition]] = the bill. (The address is [[l'adresse]].)" },
      { type: "mcq", q: "Do you have to tip in a French restaurant?", options: ["No: service is included, and a small tip is optional", "Yes, 15 to 20%", "Yes, exactly 10%"], answer: 0, explain: "[[Service compris]]: service is included. [[Un pourboire]] is a small extra, if you like." },
      { type: "fill", q: "Ananya: « Je suis ___. » (vegetarian)", answer: ["végétarienne"], explain: "Ananya is a woman: [[Je suis végétarienne.]] A man says [[Je suis végétarien.]]" },
      { type: "fill", q: "Je ne mange pas de ___. (meat)", answer: ["viande"], explain: "[[Je ne mange pas de viande.]] = I don't eat meat." },
      { type: "order", words: ["Je", "voudrais", "une", "baguette,", "s'il", "vous", "plaît."], en: "I'd like a baguette, please." },
      { type: "speak", fr: "Je ne mange pas de viande. Vous avez un plat végétarien ?", en: "I don't eat meat. Do you have a vegetarian dish?" }
    ]
  }
,
  {
    id: "c-holidays",
    cat: "culture",
    title: "Holidays & celebrations",
    minutes: 10,
    summary: "Know the big French celebrations, from Christmas and the galette des rois to 14 July, and give the right wishes at the right time.",
    sections: [
      {
        h: "The French calendar of celebrations",
        table: {
          head: ["Date", "Name", "What happens"],
          rows: [
            ["24–25 December", "[[Noël|noh-EHL]]", "a big family dinner on the evening of the 24th, and presents"],
            ["31 December", "[[la Saint-Sylvestre|lah sehn-seel-VEHS-truh]]", "New Year's Eve, usually a party with friends"],
            ["6 January (or the first Sunday)", "[[l'Épiphanie|lay-pee-fah-NEE]]", "the galette des rois (kings' cake)"],
            ["2 February", "[[la Chandeleur|lah shahn-duh-LUHR]]", "crêpes!"],
            ["21 June", "[[la Fête de la musique]]", "free concerts in every street"],
            ["14 July", "[[le 14 Juillet]], [[la fête nationale]]", "the national day: a parade and fireworks"],
            ["July and August", "[[les grandes vacances]]", "the long summer holidays"]
          ]
        }
      },
      {
        h: "Noël",
        p: "For most French families, the big moment is the evening of <b>24 December</b>: [[le réveillon|luh ray-veh-YOHN]], a long, festive dinner (oysters, smoked salmon, foie gras, turkey…). Children put their shoes under [[le sapin|luh sah-PEHN]] (the Christmas tree), and [[le Père Noël|luh pehr noh-EHL]] (Father Christmas) brings the presents during the night. On <b>25 December</b>, families share another big meal. The classic dessert is [[la bûche de Noël|lah büsh duh noh-EHL]], a cake shaped like a log."
      },
      {
        h: "Wishes for every occasion",
        examples: [
          { fr: "Joyeux Noël !", en: "Merry Christmas!", say: "zhwah-yuh noh-EHL" },
          { fr: "Bonnes fêtes !", en: "Happy holidays! (at the end of the year)", say: "bon FEHT" },
          { fr: "Bonne année !", en: "Happy New Year!", say: "boh-nah-NAY" },
          { fr: "Bonne année, bonne santé !", en: "Happy New Year, and good health!", say: "boh-nah-NAY, bon sahn-TAY" },
          { fr: "Meilleurs vœux !", en: "Best wishes! (for the new year)", say: "meh-yuhr VUH" },
          { fr: "Joyeux anniversaire !", en: "Happy birthday!", say: "zhwah-yuh-zah-nee-vehr-SEHR" }
        ]
      },
      {
        h: "New Year",
        p: "On <b>31 December</b>, [[la Saint-Sylvestre]], people celebrate with friends: a party or a dinner, and at midnight everyone kisses and says [[Bonne année !]] Traditionally, the French kiss under the mistletoe ([[le gui|luh GEE]]) at New Year, not at Christmas. Then, all through January, you say [[Bonne année !]] the first time you see someone, and you send [[Meilleurs vœux !]] in cards and emails."
      },
      {
        note: "<b>The kings' cake and the crêpes.</b> Around <b>6 January</b> ([[l'Épiphanie]]) and all through January, the French share [[la galette des rois|lah gah-leht day RWAH]], a flat puff-pastry cake, often filled with almond cream. A tiny charm, [[la fève|lah FEHV]], is hidden inside. The youngest child sits under the table and says who gets each slice, so nobody can cheat. Whoever finds the fève becomes king or queen ([[le roi|luh RWAH]] / [[la reine|lah REN]]) and wears the paper crown! On <b>2 February</b>, [[la Chandeleur]], everybody makes crêpes. Tradition says that if you flip a crêpe while holding a coin in your other hand, you'll have money all year."
      },
      {
        h: "Summer: music and fireworks",
        p: "On <b>21 June</b>, the longest day of the year, [[la Fête de la musique]] fills the streets with free concerts: anyone can play, from rock bands to grandmothers with accordions. It started in France in 1982 and is now celebrated in many countries, including India (look out for events at your Alliance Française!). On <b>14 July</b>, [[la fête nationale]] remembers the storming of the Bastille in 1789: there's a big military parade on the Champs-Élysées in Paris, fireworks ([[le feu d'artifice]]) all over France, and dances at fire stations ([[les bals des pompiers]])."
      },
      {
        h: "School holidays: les vacances",
        table: {
          head: ["Name", "When", "Good to know"],
          rows: [
            ["[[les vacances de la Toussaint]]", "late October", "2 weeks"],
            ["[[les vacances de Noël]]", "Christmas and New Year", "2 weeks"],
            ["[[les vacances d'hiver]]", "February", "2 weeks; the dates depend on the zone (A, B or C); ski time!"],
            ["[[les vacances de printemps]]", "April", "2 weeks, also by zone"],
            ["[[les grandes vacances]]", "July and August", "about 8 weeks; many people go away in August, and some small shops close"],
            ["[[la rentrée]]", "early September", "back to school and back to work: a big moment in France"]
          ]
        }
      },
      {
        h: "Use it: before the Christmas holidays",
        dialogue: [
          ["Julie", "Tu pars en vacances pour Noël ?", "Are you going away for Christmas?"],
          ["Vikram", "Oui, je vais chez des amis à Lyon. Et toi ?", "Yes, I'm going to stay with friends in Lyon. And you?"],
          ["Julie", "Je reste à Paris, avec ma famille.", "I'm staying in Paris, with my family."],
          ["Vikram", "Alors, joyeux Noël et bonnes fêtes !", "Well then, Merry Christmas and happy holidays!"],
          ["Julie", "Merci ! Joyeux Noël à toi aussi. Et bonne année !", "Thanks! Merry Christmas to you too. And Happy New Year!"]
        ]
      }
    ],
    quiz: [
      { type: "mcq", q: "When do most French families have their big Christmas dinner, <b>le réveillon</b>?", options: ["on the evening of 24 December", "at lunchtime on 26 December", "on 6 January"], answer: 0, explain: "[[le réveillon de Noël]] is on the evening of 24 December." },
      { type: "mcq", q: "What is hidden inside the <b>galette des rois</b>?", options: ["a coin", "a ring", "a fève, a tiny charm"], answer: 2, explain: "Find [[la fève]] and you're the king or queen for the day!" },
      { type: "mcq", q: "On <b>la Chandeleur</b> (2 February), the French eat…", options: ["a bûche de Noël", "crêpes", "a galette des rois"], answer: 1, explain: "[[la Chandeleur]] = crêpe day." },
      { type: "mcq", q: "When is the <b>Fête de la musique</b>?", options: ["21 June", "14 July", "1 January"], answer: 0, explain: "On 21 June, the longest day of the year." },
      { type: "listen", say: "Bonne année et meilleurs vœux !", options: ["Merry Christmas!", "Happy New Year and best wishes!", "Happy holidays!"], answer: 1, explain: "[[Bonne année !]] = Happy New Year! [[Meilleurs vœux !]] = Best wishes!" },
      { type: "listen", say: "Joyeux Noël !", options: ["Happy birthday!", "Happy New Year!", "Merry Christmas!"], answer: 2, explain: "[[Joyeux Noël !]] Happy birthday is [[Joyeux anniversaire !]]" },
      { type: "fill", q: "Le 14 juillet, c'est la fête ___. (national)", answer: ["nationale"], explain: "[[la fête nationale]]: fête is feminine, so nationale takes an e." },
      { type: "fill", q: "Bonnes ___ ! (Have a good holiday!)", answer: ["vacances"], explain: "[[Bonnes vacances !]] Vacances is always plural." },
      { type: "order", words: ["Bonne", "année,", "bonne", "santé !"], en: "Happy New Year, and good health!" },
      { type: "speak", fr: "Joyeux Noël et bonne année !", en: "Merry Christmas and Happy New Year!" }
    ]
  }

]);
