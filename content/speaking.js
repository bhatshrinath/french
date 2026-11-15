/* Speaking scenarios (role-play). In role-play mode the app plays role A and the
   learner speaks role B. B lines stay within A1 and are gender-neutral where possible;
   when a line depends on the speaker's gender, practice items list both forms. */
A1.addScenarios([
  {
    id: "s-intro",
    title: "Introduce yourself (DELF oral part 1)",
    icon: "🙋",
    goal: "Answer the examiner's personal questions in the DELF A1 oral: name, spelling, age, nationality, city, job, languages, family, hobbies and why you learn French.",
    roles: { A: "L'examinateur / l'examinatrice (examiner)", B: "Vous (you)" },
    dialogue: [
      ["A", "Bonjour. Asseyez-vous, s'il vous plaît. Comment vous appelez-vous ?", "Hello. Please sit down. What's your name?"],
      ["B", "Bonjour. Je m'appelle Kiran Sharma.", "Hello. My name is Kiran Sharma."],
      ["A", "Pouvez-vous épeler votre nom de famille, s'il vous plaît ?", "Can you spell your surname, please?"],
      ["B", "Oui : S, H, A, R, M, A.", "Yes: S, H, A, R, M, A."],
      ["A", "Merci. Quel âge avez-vous ? Et quelle est votre nationalité ?", "Thank you. How old are you? And what is your nationality?"],
      ["B", "J'ai trente-deux ans. Je suis de nationalité indienne.", "I'm thirty-two. My nationality is Indian."],
      ["A", "Où est-ce que vous habitez ? Et qu'est-ce que vous faites dans la vie ?", "Where do you live? And what do you do for a living?"],
      ["B", "J'habite à Mumbai. Je suis comptable dans une banque.", "I live in Mumbai. I'm an accountant in a bank."],
      ["A", "Vous parlez quelles langues ?", "Which languages do you speak?"],
      ["B", "Je parle hindi, marathi et anglais. Et un peu français !", "I speak Hindi, Marathi and English. And a little French!"],
      ["A", "Parlez-moi de votre famille et de vos loisirs.", "Tell me about your family and your hobbies."],
      ["B", "J'ai un frère et une sœur. Le week-end, j'aime jouer au cricket et cuisiner.", "I have a brother and a sister. At the weekend, I like playing cricket and cooking."],
      ["A", "Pourquoi est-ce que vous apprenez le français ?", "Why are you learning French?"],
      ["B", "Parce que je voudrais travailler en France. Et j'adore la culture française !", "Because I would like to work in France. And I love French culture!"]
    ],
    keyPhrases: [
      ["Je m'appelle…", "My name is…"],
      ["Ça s'écrit S, H, A, R, M, A.", "It's spelled S, H, A, R, M, A."],
      ["J'ai trente-deux ans.", "I'm thirty-two (years old)."],
      ["Je suis de nationalité indienne.", "My nationality is Indian. (same for men and women)"],
      ["J'habite à Mumbai, en Inde.", "I live in Mumbai, in India."],
      ["Je suis comptable. / Je suis étudiant / étudiante.", "I'm an accountant. / I'm a student. (m./f.)"],
      ["Je parle hindi, anglais et un peu français.", "I speak Hindi, English and a little French."],
      ["J'ai un frère et une sœur.", "I have a brother and a sister."],
      ["Le week-end, j'aime…", "At the weekend, I like…"],
      ["Parce que je voudrais…", "Because I would like…"]
    ],
    practice: [
      { prompt: "Say that your name is Arjun Mehta.", answer: "Je m'appelle Arjun Mehta.", alt: ["Mon nom est Arjun Mehta.", "Moi, c'est Arjun Mehta."] },
      { prompt: "Say that you are 28 years old.", answer: "J'ai vingt-huit ans.", alt: ["J'ai 28 ans."] },
      { prompt: "Say that you are Indian and that you live in Delhi.", answer: "Je suis de nationalité indienne et j'habite à Delhi.", alt: ["Je suis indien et j'habite à Delhi.", "Je suis indienne et j'habite à Delhi."] },
      { prompt: "Say that you are a student (male or female form).", answer: "Je suis étudiant.", alt: ["Je suis étudiante."] },
      { prompt: "Say that you speak Hindi, English and a little French.", answer: "Je parle hindi, anglais et un peu français.", alt: ["Je parle hindi, anglais et un peu de français.", "Je parle l'hindi, l'anglais et un peu le français."] },
      { prompt: "Say that you have two sisters.", answer: "J'ai deux sœurs.", alt: ["J'ai deux sœurs et pas de frère."] },
      { prompt: "Say that you like cricket and music.", answer: "J'aime le cricket et la musique.", alt: ["J'adore le cricket et la musique."] },
      { prompt: "Say why you are learning French: because you would like to work in France.", answer: "Parce que je voudrais travailler en France.", alt: ["J'apprends le français parce que je voudrais travailler en France.", "Parce que je veux travailler en France."] }
    ],
    freeTalk: "Imagine you are in the DELF oral exam. Introduce yourself for about one minute without stopping: your name (spell your surname), age, nationality, city, job or studies, languages, family, hobbies and why you are learning French. If you don't understand a question, practise saying: Pouvez-vous répéter, s'il vous plaît ?"
  },
  {
    id: "s-meet",
    title: "Meeting someone at a party",
    icon: "🎉",
    goal: "Say hello, introduce yourself and make small talk with tu at a party.",
    roles: { A: "Léa, une invitée (a guest)", B: "Vous (you)" },
    dialogue: [
      ["A", "Salut ! Moi, c'est Léa. Et toi, tu t'appelles comment ?", "Hi! I'm Léa. And you, what's your name?"],
      ["B", "Salut, Léa ! Moi, c'est Kiran.", "Hi, Léa! I'm Kiran."],
      ["A", "Enchantée, Kiran ! Tu connais Thomas comment ?", "Nice to meet you, Kiran! How do you know Thomas?"],
      ["B", "On travaille ensemble. Et toi ?", "We work together. And you?"],
      ["A", "Moi, je suis sa voisine. Tu viens d'où ?", "I'm his neighbour. Where are you from?"],
      ["B", "Je viens d'Inde, de Bangalore. Mais j'habite à Paris depuis deux mois.", "I'm from India, from Bangalore. But I've been living in Paris for two months."],
      ["A", "Super ! Tu aimes Paris ?", "Great! Do you like Paris?"],
      ["B", "Oui, j'adore ! Mais c'est cher.", "Yes, I love it! But it's expensive."],
      ["A", "C'est vrai ! Et tu fais quoi dans la vie ?", "That's true! And what do you do for a living?"],
      ["B", "Je travaille dans l'informatique. Et toi ?", "I work in IT. And you?"],
      ["A", "Je suis prof de musique. Tu aimes la musique ?", "I'm a music teacher. Do you like music?"],
      ["B", "Oui, beaucoup ! J'écoute souvent du jazz et de la musique indienne.", "Yes, a lot! I often listen to jazz and Indian music."],
      ["A", "Génial ! Tu veux boire quelque chose ?", "Great! Do you want something to drink?"],
      ["B", "Oui, avec plaisir. Un jus d'orange, s'il te plaît.", "Yes, with pleasure. An orange juice, please."]
    ],
    keyPhrases: [
      ["Salut ! Ça va ?", "Hi! How are you?"],
      ["Tu t'appelles comment ?", "What's your name? (informal)"],
      ["Moi, c'est Kiran.", "I'm Kiran."],
      ["Enchanté / Enchantée.", "Nice to meet you. (m./f., same sound)"],
      ["Tu viens d'où ? — Je viens d'Inde.", "Where are you from? — I'm from India."],
      ["Tu fais quoi dans la vie ?", "What do you do for a living? (informal)"],
      ["Je travaille dans l'informatique.", "I work in IT."],
      ["Et toi ?", "And you? (informal)"],
      ["Tu veux boire quelque chose ?", "Do you want something to drink?"]
    ],
    practice: [
      { prompt: "Say hi and ask the person's name (informal).", answer: "Salut ! Tu t'appelles comment ?", alt: ["Salut ! Comment tu t'appelles ?", "Bonjour ! Tu t'appelles comment ?"] },
      { prompt: "Say that you are Kiran and that you are pleased to meet them.", answer: "Moi, c'est Kiran. Enchanté.", alt: ["Moi, c'est Kiran. Enchantée.", "Je m'appelle Kiran. Enchanté.", "Je m'appelle Kiran. Enchantée."] },
      { prompt: "Ask where the person is from (informal).", answer: "Tu viens d'où ?", alt: ["D'où tu viens ?", "Tu es d'où ?"] },
      { prompt: "Say that you come from India and that you live in Paris.", answer: "Je viens d'Inde et j'habite à Paris.", alt: ["Je suis indien et j'habite à Paris.", "Je suis indienne et j'habite à Paris."] },
      { prompt: "Ask what the person does for a living (informal).", answer: "Tu fais quoi dans la vie ?", alt: ["Qu'est-ce que tu fais dans la vie ?"] },
      { prompt: "Ask if they like cricket (informal).", answer: "Tu aimes le cricket ?", alt: ["Est-ce que tu aimes le cricket ?"] },
      { prompt: "Accept a drink: yes, with pleasure, an orange juice, please (informal).", answer: "Oui, avec plaisir. Un jus d'orange, s'il te plaît.", alt: ["Oui, merci. Un jus d'orange, s'il te plaît.", "Avec plaisir ! Un jus d'orange, s'il te plaît."] }
    ],
    freeTalk: "You are at a friend's birthday party in Paris and you meet someone new. Use tu: say hi, give your name, ask where they come from and what they do, talk about one thing you like, and offer them a drink. Finish with a friendly goodbye: Bonne soirée !"
  },
  {
    id: "s-cafe",
    title: "At the café",
    icon: "☕",
    goal: "Order a drink and something to eat, ask a price, ask for the bill and pay.",
    roles: { A: "Le serveur (waiter)", B: "Vous (you)" },
    dialogue: [
      ["A", "Bonjour ! Qu'est-ce que je vous sers ?", "Hello! What can I get you?"],
      ["B", "Bonjour. Je voudrais un café crème, s'il vous plaît.", "Hello. I'd like a coffee with milk, please."],
      ["A", "Un petit ou un grand ?", "A small one or a large one?"],
      ["B", "Un grand, s'il vous plaît. C'est combien, un croissant ?", "A large one, please. How much is a croissant?"],
      ["A", "Un euro vingt.", "One euro twenty."],
      ["B", "Alors, un croissant aussi, s'il vous plaît.", "Then a croissant too, please."],
      ["A", "Très bien. Vous désirez autre chose ?", "Very good. Would you like anything else?"],
      ["B", "Non, merci. C'est tout.", "No, thank you. That's all."],
      ["A", "Voilà votre grand crème et votre croissant.", "Here's your large coffee and your croissant."],
      ["B", "Merci. L'addition, s'il vous plaît.", "Thank you. The bill, please."],
      ["A", "Ça fait cinq euros soixante.", "That's five euros sixty."],
      ["B", "Je peux payer par carte ?", "Can I pay by card?"],
      ["A", "Bien sûr. Bonne journée !", "Of course. Have a nice day!"],
      ["B", "Merci, vous aussi. Au revoir !", "Thank you, you too. Goodbye!"]
    ],
    keyPhrases: [
      ["Je voudrais un café, s'il vous plaît.", "I'd like a coffee, please."],
      ["un café / un café crème / un thé", "an espresso / a coffee with milk / a tea"],
      ["C'est combien, un croissant ?", "How much is a croissant?"],
      ["Non, merci. C'est tout.", "No, thank you. That's all."],
      ["L'addition, s'il vous plaît.", "The bill, please."],
      ["Ça fait combien ?", "How much is that?"],
      ["Je peux payer par carte ?", "Can I pay by card?"],
      ["Bonne journée ! — Vous aussi.", "Have a nice day! — You too."]
    ],
    practice: [
      { prompt: "Order a tea, politely.", answer: "Je voudrais un thé, s'il vous plaît.", alt: ["Un thé, s'il vous plaît."] },
      { prompt: "Ask how much a croissant is.", answer: "C'est combien, un croissant ?", alt: ["Combien coûte un croissant ?", "Le croissant, c'est combien ?"] },
      { prompt: "Order a hot chocolate and an orange juice.", answer: "Un chocolat chaud et un jus d'orange, s'il vous plaît.", alt: ["Je voudrais un chocolat chaud et un jus d'orange, s'il vous plaît."] },
      { prompt: "Say no thank you, that's all.", answer: "Non, merci. C'est tout.", alt: ["C'est tout, merci."] },
      { prompt: "Ask for the bill.", answer: "L'addition, s'il vous plaît.", alt: ["Je peux avoir l'addition, s'il vous plaît ?"] },
      { prompt: "Ask if you can pay by card.", answer: "Je peux payer par carte ?", alt: ["Est-ce que je peux payer par carte ?", "Je peux payer avec ma carte ?"] },
      { prompt: "Ask for a jug of tap water (free in France).", answer: "Une carafe d'eau, s'il vous plaît.", alt: ["Je voudrais une carafe d'eau, s'il vous plaît."] }
    ],
    freeTalk: "You are sitting at a café terrace in Lyon with a friend. Order two different drinks and something to eat, ask the price of one item, then ask for the bill and pay by card. Say thank you and goodbye politely."
  },
  {
    id: "s-bakery",
    title: "At the bakery",
    icon: "🥖",
    goal: "Buy bread and pastries, say how many you want, understand the total and pay.",
    roles: { A: "La boulangère (baker)", B: "Vous (you)" },
    dialogue: [
      ["A", "Bonjour ! Vous désirez ?", "Hello! What would you like?"],
      ["B", "Bonjour. Une baguette, s'il vous plaît.", "Hello. A baguette, please."],
      ["A", "Bien cuite ou pas trop cuite ?", "Well baked or not too baked?"],
      ["B", "Pas trop cuite, s'il vous plaît.", "Not too baked, please."],
      ["A", "Voilà. Et avec ceci ?", "Here you are. Anything else?"],
      ["B", "Je voudrais aussi quatre croissants et deux pains au chocolat.", "I'd also like four croissants and two pains au chocolat."],
      ["A", "Désolée, il n'y a plus de pains au chocolat.", "Sorry, there are no pains au chocolat left."],
      ["B", "Ah, dommage ! Alors, six croissants, s'il vous plaît.", "Oh, what a shame! Then six croissants, please."],
      ["A", "Six croissants et une baguette. Ce sera tout ?", "Six croissants and a baguette. Will that be all?"],
      ["B", "Oui, c'est tout. Ça fait combien ?", "Yes, that's all. How much is that?"],
      ["A", "Alors, la baguette, un euro vingt, et les six croissants, sept euros quatre-vingts. Ça fait neuf euros.", "So, the baguette, one euro twenty, and the six croissants, seven euros eighty. That's nine euros."],
      ["B", "Voilà dix euros.", "Here's ten euros."],
      ["A", "Et voici votre monnaie : un euro. Merci, bonne journée !", "And here's your change: one euro. Thank you, have a nice day!"],
      ["B", "Merci, au revoir !", "Thank you, goodbye!"]
    ],
    keyPhrases: [
      ["Une baguette, s'il vous plaît.", "A baguette, please."],
      ["Bien cuite ou pas trop cuite ?", "Well baked or not too baked?"],
      ["Je voudrais quatre croissants.", "I'd like four croissants."],
      ["deux pains au chocolat", "two pains au chocolat (chocolate pastries)"],
      ["Et avec ceci ?", "Anything else? (shop phrase)"],
      ["Il n'y a plus de…", "There's no … left."],
      ["Ce sera tout ? — Oui, c'est tout.", "Will that be all? — Yes, that's all."],
      ["Ça fait combien ?", "How much is that?"],
      ["Voici votre monnaie.", "Here's your change."]
    ],
    practice: [
      { prompt: "Ask for two baguettes.", answer: "Deux baguettes, s'il vous plaît.", alt: ["Je voudrais deux baguettes, s'il vous plaît."] },
      { prompt: "Say you'd like three croissants and one pain au chocolat.", answer: "Je voudrais trois croissants et un pain au chocolat.", alt: ["Trois croissants et un pain au chocolat, s'il vous plaît."] },
      { prompt: "Say: not too baked, please (for your baguette).", answer: "Pas trop cuite, s'il vous plaît.", alt: ["Pas trop cuite, merci."] },
      { prompt: "Say yes, that's all.", answer: "Oui, c'est tout.", alt: ["C'est tout, merci.", "Oui, ce sera tout."] },
      { prompt: "Ask how much it comes to.", answer: "Ça fait combien ?", alt: ["C'est combien ?", "Je vous dois combien ?"] },
      { prompt: "Hand over a 20-euro note: say here's twenty euros.", answer: "Voilà vingt euros.", alt: ["Voici vingt euros.", "Voilà 20 euros."] }
    ],
    freeTalk: "It's Sunday morning and friends are coming for breakfast. Go to the bakery and buy bread and pastries for five people. Say the quantities clearly, react if something is sold out, ask for the total and pay."
  },
  {
    id: "s-market",
    title: "At the market",
    icon: "🍅",
    goal: "Buy fruit and vegetables by the kilo, ask prices and finish your shopping politely.",
    roles: { A: "Le marchand (stallholder)", B: "Vous (you)" },
    dialogue: [
      ["A", "Bonjour ! Qu'est-ce qu'il vous faut aujourd'hui ?", "Hello! What do you need today?"],
      ["B", "Bonjour. Je voudrais un kilo de tomates, s'il vous plaît.", "Hello. I'd like a kilo of tomatoes, please."],
      ["A", "Voilà, un kilo de tomates. Et avec ça ?", "Here's a kilo of tomatoes. Anything else?"],
      ["B", "Elles sont à combien, les pommes ?", "How much are the apples?"],
      ["A", "Deux euros cinquante le kilo.", "Two euros fifty a kilo."],
      ["B", "Alors, deux kilos de pommes, s'il vous plaît.", "Then two kilos of apples, please."],
      ["A", "Très bien. Avec ceci ?", "Very good. Anything else?"],
      ["B", "Un concombre et une salade, s'il vous plaît.", "A cucumber and a lettuce, please."],
      ["A", "Et voilà ! Ce sera tout ?", "There you go! Will that be all?"],
      ["B", "Oui, c'est tout. Ça fait combien ?", "Yes, that's all. How much is that?"],
      ["A", "Les tomates, trois euros ; les pommes, cinq euros ; le concombre et la salade, deux euros. Ça fait dix euros.", "The tomatoes, three euros; the apples, five euros; the cucumber and the lettuce, two euros. That's ten euros."],
      ["B", "Voilà. Vous avez un sac, s'il vous plaît ?", "Here you are. Do you have a bag, please?"],
      ["A", "Bien sûr, tenez. Merci et bon week-end !", "Of course, here you go. Thank you and have a nice weekend!"],
      ["B", "Merci, vous aussi. Au revoir !", "Thank you, you too. Goodbye!"]
    ],
    keyPhrases: [
      ["un kilo de tomates", "a kilo of tomatoes"],
      ["un demi-kilo de fraises", "half a kilo of strawberries"],
      ["Elles sont à combien, les pommes ?", "How much are the apples?"],
      ["deux euros cinquante le kilo", "two euros fifty a kilo"],
      ["Et avec ça ? / Avec ceci ?", "Anything else?"],
      ["Oui, c'est tout.", "Yes, that's all."],
      ["Ça fait combien ?", "How much is that altogether?"],
      ["Vous avez un sac ?", "Do you have a bag?"]
    ],
    practice: [
      { prompt: "Ask for one kilo of potatoes.", answer: "Un kilo de pommes de terre, s'il vous plaît.", alt: ["Je voudrais un kilo de pommes de terre, s'il vous plaît."] },
      { prompt: "Ask how much the bananas are.", answer: "Elles sont à combien, les bananes ?", alt: ["C'est combien, les bananes ?", "Combien coûtent les bananes ?"] },
      { prompt: "Ask for half a kilo of strawberries.", answer: "Un demi-kilo de fraises, s'il vous plaît.", alt: ["Je voudrais un demi-kilo de fraises, s'il vous plaît.", "Cinq cents grammes de fraises, s'il vous plaît."] },
      { prompt: "Say you'd like three lemons and a lettuce.", answer: "Je voudrais trois citrons et une salade.", alt: ["Trois citrons et une salade, s'il vous plaît."] },
      { prompt: "Say that's all and ask for the total.", answer: "C'est tout. Ça fait combien ?", alt: ["Ce sera tout. Ça fait combien ?", "C'est tout, merci. C'est combien ?"] },
      { prompt: "Ask if they have a bag.", answer: "Vous avez un sac ?", alt: ["Est-ce que vous avez un sac ?", "Vous avez un sac, s'il vous plaît ?"] }
    ],
    freeTalk: "You are at a Saturday market and want to cook a vegetable curry for four friends. Buy at least four kinds of fruit and vegetables, ask the price per kilo, choose your quantities (un kilo, un demi-kilo, trois…), then finish with C'est tout and ask for the total."
  },
  {
    id: "s-restaurant",
    title: "At the restaurant",
    icon: "🍽️",
    goal: "Give your reservation name, order a starter, a main course and a dessert, ask for water and the bill.",
    roles: { A: "La serveuse (waitress)", B: "Vous (you)" },
    dialogue: [
      ["A", "Bonsoir ! Vous avez réservé ?", "Good evening! Do you have a reservation?"],
      ["B", "Bonsoir. Oui, une table pour deux, au nom de Patel.", "Good evening. Yes, a table for two, in the name of Patel."],
      ["A", "Patel… Oui, c'est ça. Suivez-moi. Voici la carte.", "Patel… Yes, that's right. Follow me. Here's the menu."],
      ["B", "Merci. Vous avez des plats végétariens ?", "Thank you. Do you have any vegetarian dishes?"],
      ["A", "Oui, le risotto aux champignons. Vous avez choisi ?", "Yes, the mushroom risotto. Are you ready to order?"],
      ["B", "Oui. En entrée, deux soupes de légumes, et en plat, deux risottos.", "Yes. As a starter, two vegetable soups, and as a main course, two risottos."],
      ["A", "Très bien. Et comme boisson ?", "Very good. And to drink?"],
      ["B", "Une carafe d'eau, s'il vous plaît.", "A jug of tap water, please."],
      ["A", "Vous prenez un dessert ?", "Will you have a dessert?"],
      ["B", "Oui, deux mousses au chocolat, s'il vous plaît.", "Yes, two chocolate mousses, please."],
      ["A", "Je vous apporte un café ?", "Shall I bring you a coffee?"],
      ["B", "Non, merci. L'addition, s'il vous plaît.", "No, thank you. The bill, please."],
      ["A", "Voilà. Ça fait cinquante-neuf euros.", "Here you are. That's fifty-nine euros."],
      ["B", "Je paie par carte. Merci, c'était délicieux !", "I'll pay by card. Thank you, it was delicious!"]
    ],
    keyPhrases: [
      ["J'ai réservé au nom de…", "I booked in the name of…"],
      ["une table pour deux", "a table for two"],
      ["Vous avez des plats végétariens ?", "Do you have any vegetarian dishes?"],
      ["en entrée / en plat / en dessert", "as a starter / as a main course / for dessert"],
      ["Je vais prendre le poisson.", "I'll have the fish."],
      ["Une carafe d'eau, s'il vous plaît.", "A jug of tap water, please. (free)"],
      ["L'addition, s'il vous plaît.", "The bill, please."],
      ["C'était délicieux !", "It was delicious!"]
    ],
    practice: [
      { prompt: "Say you have a reservation in the name of Singh.", answer: "J'ai réservé au nom de Singh.", alt: ["J'ai une réservation au nom de Singh.", "Une table au nom de Singh, s'il vous plaît."] },
      { prompt: "Ask if they have vegetarian dishes.", answer: "Vous avez des plats végétariens ?", alt: ["Est-ce que vous avez des plats végétariens ?"] },
      { prompt: "Order a green salad as a starter.", answer: "En entrée, une salade verte, s'il vous plaît.", alt: ["Je vais prendre une salade verte en entrée.", "Une salade verte en entrée, s'il vous plaît."] },
      { prompt: "Order the fish as your main course.", answer: "En plat, le poisson, s'il vous plaît.", alt: ["Je vais prendre le poisson.", "Comme plat, je prends le poisson."] },
      { prompt: "Ask for a jug of tap water.", answer: "Une carafe d'eau, s'il vous plaît.", alt: ["Je voudrais une carafe d'eau, s'il vous plaît."] },
      { prompt: "Order an apple tart for dessert.", answer: "En dessert, une tarte aux pommes, s'il vous plaît.", alt: ["Une tarte aux pommes, s'il vous plaît.", "Je vais prendre une tarte aux pommes."] },
      { prompt: "Ask for the bill.", answer: "L'addition, s'il vous plaît.", alt: ["Je peux avoir l'addition, s'il vous plaît ?"] }
    ],
    freeTalk: "You are having dinner in a small restaurant in Paris. Give your reservation name, ask one question about the menu, order a starter, a main course, a drink and a dessert, then ask for the bill. Finish by saying what you liked."
  },
  {
    id: "s-directions",
    title: "Asking for directions",
    icon: "🧭",
    goal: "Ask where a place is, understand left, right and straight on, and check that you understood.",
    roles: { A: "Une passante (a passer-by)", B: "Vous (you)" },
    dialogue: [
      ["A", "Bonjour ! Vous cherchez quelque chose ?", "Hello! Are you looking for something?"],
      ["B", "Oui, merci. Où est la gare, s'il vous plaît ?", "Yes, thank you. Where is the station, please?"],
      ["A", "La gare ? Vous allez tout droit, puis vous prenez la deuxième rue à gauche.", "The station? You go straight on, then you take the second street on the left."],
      ["B", "Tout droit, puis la deuxième rue à gauche. C'est loin ?", "Straight on, then the second street on the left. Is it far?"],
      ["A", "Non, c'est à dix minutes à pied.", "No, it's ten minutes on foot."],
      ["B", "Merci. Et il y a une pharmacie près d'ici ?", "Thank you. And is there a pharmacy near here?"],
      ["A", "Oui, au bout de la rue, à droite. Elle est en face de la banque.", "Yes, at the end of the street, on the right. It's opposite the bank."],
      ["B", "Pardon, vous pouvez répéter, s'il vous plaît ?", "Sorry, can you repeat, please?"],
      ["A", "Bien sûr. Au bout de la rue, vous tournez à droite. La pharmacie est en face de la banque.", "Of course. At the end of the street, you turn right. The pharmacy is opposite the bank."],
      ["B", "D'accord : à droite, en face de la banque. Merci beaucoup !", "OK: on the right, opposite the bank. Thank you very much!"],
      ["A", "De rien. Bonne journée !", "You're welcome. Have a nice day!"],
      ["B", "Merci, vous aussi. Au revoir !", "Thank you, you too. Goodbye!"]
    ],
    keyPhrases: [
      ["Pardon, où est la gare, s'il vous plaît ?", "Excuse me, where is the station, please?"],
      ["Il y a une pharmacie près d'ici ?", "Is there a pharmacy near here?"],
      ["à gauche / à droite", "on the left / on the right"],
      ["tout droit", "straight on"],
      ["Vous tournez à droite.", "You turn right."],
      ["la deuxième rue à gauche", "the second street on the left"],
      ["en face de / à côté de", "opposite / next to"],
      ["C'est loin ? — C'est à dix minutes à pied.", "Is it far? — It's ten minutes on foot."],
      ["Vous pouvez répéter, s'il vous plaît ?", "Can you repeat, please?"]
    ],
    practice: [
      { prompt: "Politely ask where the station is.", answer: "Pardon, où est la gare, s'il vous plaît ?", alt: ["Excusez-moi, où est la gare, s'il vous plaît ?", "Où est la gare, s'il vous plaît ?"] },
      { prompt: "Ask if there is a pharmacy near here.", answer: "Il y a une pharmacie près d'ici ?", alt: ["Est-ce qu'il y a une pharmacie près d'ici ?", "Où est la pharmacie, s'il vous plaît ?"] },
      { prompt: "Ask if it's far.", answer: "C'est loin ?", alt: ["Est-ce que c'est loin ?", "C'est loin d'ici ?"] },
      { prompt: "Repeat the directions: straight on, then the first street on the right.", answer: "Tout droit, puis la première rue à droite.", alt: ["Tout droit, et la première rue à droite."] },
      { prompt: "Ask the person to repeat, please.", answer: "Vous pouvez répéter, s'il vous plaît ?", alt: ["Pouvez-vous répéter, s'il vous plaît ?", "Pardon ? Vous pouvez répéter ?"] },
      { prompt: "Tell a tourist that the bank is opposite the post office.", answer: "La banque est en face de la poste.", alt: ["C'est en face de la poste."] }
    ],
    freeTalk: "You have just arrived in a French town and need to find the station, a pharmacy and a cash machine (un distributeur). Ask a passer-by for each place, repeat the directions to check you understood, and ask if it's far."
  },
  {
    id: "s-metro",
    title: "Taking the metro",
    icon: "🚇",
    goal: "You are at Gare du Nord in Paris. Buy tickets and ask which line to take, which direction, where to change and where to get off.",
    roles: { A: "L'agent du métro (station agent)", B: "Vous (you)" },
    dialogue: [
      ["A", "Bonjour, je vous écoute.", "Hello, how can I help you?"],
      ["B", "Bonjour. Je voudrais deux tickets de métro, s'il vous plaît.", "Hello. I'd like two metro tickets, please."],
      ["A", "Voilà. Ça fait cinq euros.", "Here you are. That's five euros."],
      ["B", "Merci. Pour aller à la tour Eiffel, c'est quelle ligne ?", "Thank you. To go to the Eiffel Tower, which line is it?"],
      ["A", "Vous prenez la ligne 4, direction Bagneux.", "You take line 4, towards Bagneux."],
      ["B", "La ligne 4, direction Bagneux. Et je change où ?", "Line 4, towards Bagneux. And where do I change?"],
      ["A", "À Montparnasse. Là, vous prenez la ligne 6, direction Charles de Gaulle – Étoile.", "At Montparnasse. There, you take line 6, towards Charles de Gaulle – Étoile."],
      ["B", "D'accord. Et je descends à quelle station ?", "OK. And which station do I get off at?"],
      ["A", "À Bir-Hakeim. La tour Eiffel est à dix minutes à pied.", "At Bir-Hakeim. The Eiffel Tower is ten minutes' walk away."],
      ["B", "C'est long, le trajet ?", "Is the journey long?"],
      ["A", "Non, environ trente minutes.", "No, about thirty minutes."],
      ["B", "Parfait. Merci beaucoup, au revoir !", "Perfect. Thank you very much, goodbye!"]
    ],
    keyPhrases: [
      ["Je voudrais deux tickets, s'il vous plaît.", "I'd like two tickets, please."],
      ["Pour aller à…, c'est quelle ligne ?", "To go to…, which line is it?"],
      ["Vous prenez la ligne 4.", "You take line 4."],
      ["direction Bagneux", "towards Bagneux (the last station of the line)"],
      ["Je change où ?", "Where do I change?"],
      ["Vous changez à Montparnasse.", "You change at Montparnasse."],
      ["Je descends à quelle station ?", "Which station do I get off at?"],
      ["C'est long, le trajet ?", "Is the journey long?"]
    ],
    practice: [
      { prompt: "Ask for one metro ticket.", answer: "Un ticket de métro, s'il vous plaît.", alt: ["Je voudrais un ticket de métro, s'il vous plaît.", "Un ticket, s'il vous plaît."] },
      { prompt: "Ask which line goes to the Louvre.", answer: "Pour aller au Louvre, c'est quelle ligne ?", alt: ["C'est quelle ligne pour le Louvre ?", "Quelle ligne pour aller au Louvre ?"] },
      { prompt: "Ask where you need to change.", answer: "Je change où ?", alt: ["Où est-ce que je change ?", "Où est-ce qu'il faut changer ?"] },
      { prompt: "Repeat the instruction: line 1, towards La Défense.", answer: "La ligne 1, direction La Défense.", alt: ["Ligne 1, direction La Défense.", "La ligne un, direction La Défense."] },
      { prompt: "Ask which station you get off at.", answer: "Je descends à quelle station ?", alt: ["Je descends où ?", "À quelle station je descends ?"] },
      { prompt: "Ask if the journey is long.", answer: "C'est long, le trajet ?", alt: ["Le trajet est long ?", "Le trajet dure combien de temps ?"] }
    ],
    freeTalk: "You are at a metro station in Paris with a friend. Buy tickets, then ask the agent how to get to Montmartre: which line, which direction, where to change and where to get off. Repeat each instruction to check you understood."
  }
  /*NEXT*/
]);
