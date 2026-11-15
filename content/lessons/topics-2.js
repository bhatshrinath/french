/* Topic lessons, part 2: food, restaurant, shopping, weather, hobbies,
   daily routine, health, travel, invitations and DELF A1 writing. */
A1.addLessons([
  {
    id: "f-food",
    cat: "topic",
    title: "Food, drinks & food shopping",
    minutes: 18,
    summary: "Name everyday food and drinks, shop at the bakery, the market or the supermarket, ask for quantities (un kilo de…, une bouteille de…) and talk about your meals.",
    sections: [
      { h: "Why this matters", p: "Food is the first topic you will really <b>use</b> in France: at the bakery every morning, at the market every week. It is also a DELF A1 favourite (shopping lists, prices, a short dialogue in a shop). Good news: many words look like English ([[la banane]], [[la tomate]], [[le café]]), so you already know more than you think." },
      { h: "The words, group by group", table: { head: ["Group", "French (tap to hear)"], rows: [
        ["🥖 Bakery", "[[le pain]] bread · [[la baguette]] · [[le croissant]] · [[le pain au chocolat]] chocolate croissant"],
        ["🧀 Dairy & eggs", "[[le lait]] milk · [[le fromage]] cheese · [[le beurre]] butter · [[le yaourt]] yoghurt · [[l'œuf]] (m.) egg"],
        ["🍗 Meat & fish", "[[la viande]] meat · [[le poulet]] chicken · [[le bœuf]] beef · [[le porc]] pork · [[le poisson]] fish"],
        ["🍎 Fruit & veg", "[[la pomme]] apple · [[la banane]] banana · [[l'orange]] (f.) orange · [[la fraise]] strawberry · [[la tomate]] tomato · [[la pomme de terre]] potato · [[la carotte]] carrot · [[la salade]] lettuce, salad · [[l'oignon]] (m.) onion"],
        ["🍚 Staples", "[[le riz]] rice · [[les pâtes]] (f.) pasta · [[le sucre]] sugar · [[le sel]] salt · [[le poivre]] pepper"],
        ["☕ Drinks", "[[l'eau]] (f.) water · [[le café]] coffee · [[le thé]] tea · [[le jus d'orange]] orange juice · [[le vin]] wine · [[la bière]] beer"]
      ] } },
      { h: "Where to buy it", table: { head: ["Shop", "What you buy there"], rows: [
        ["[[la boulangerie|boo-lahn-zhuh-REE]]", "bread, baguettes, croissants (and cakes)"],
        ["[[la boucherie|boo-shuh-REE]]", "meat: chicken, beef, pork…"],
        ["[[l'épicerie|lay-pee-suh-REE]] (f.)", "a small grocery shop: milk, rice, pasta, drinks, often open late"],
        ["[[le marché|mar-SHAY]]", "the open-air market: fruit, vegetables, cheese, fish"],
        ["[[le supermarché|sü-pehr-mar-SHAY]]", "everything in one place"]
      ] } },
      { h: "Saying “some”: du, de la, de l', des", p: "When you buy, eat or drink <b>some</b> of something, French uses <b>du / de la / de l' / des</b>:<br>[[du pain]] (le pain) · [[de la salade]] (la salade) · [[de l'eau]] (l'eau) · [[des pommes]] (les pommes)<br>But for likes and dislikes (things in general), keep <b>le / la / les</b>: [[J'aime le fromage.]] = I like cheese. [[Je mange du fromage.]] = I'm eating (some) cheese." },
      { h: "Asking for a quantity", table: { head: ["French", "English", "Example"], rows: [
        ["[[un kilo de]]", "a kilo of", "[[un kilo de tomates]]"],
        ["[[cinq cents grammes de]]", "500 g of", "[[cinq cents grammes de fraises]]"],
        ["[[un litre de]]", "a litre of", "[[un litre de lait]]"],
        ["[[une bouteille de]]", "a bottle of", "[[une bouteille d'eau]]"],
        ["[[un paquet de]]", "a packet of", "[[un paquet de riz]]"],
        ["[[une tranche de]]", "a slice of", "[[une tranche de fromage]]"],
        ["[[une douzaine de]]", "a dozen", "[[une douzaine d'œufs]]"]
      ] } },
      { warn: "Three classic slips:<br>1. After a quantity, it's plain <b>de</b> (<b>d'</b> before a vowel): <s>un kilo des pommes</s> → [[un kilo de pommes]], <s>une bouteille de l'eau</s> → [[une bouteille d'eau]].<br>2. After a negative, du / de la / des also become <b>de</b>: [[Je ne mange pas de viande.]] [[Je ne bois pas d'alcool.]]<br>3. Silent letters: [[le porc|luh POR]] (no c), [[l'oignon|loh-NYOHN]] (no i sound), and [[un œuf|ehn-NUHF]] but [[des œufs|day-ZUH]]: the f disappears in the plural!" },
      { h: "The meals of the day", table: { head: ["Meal", "When", "Typical in France"], rows: [
        ["[[le petit-déjeuner|puh-tee day-zhuh-NAY]]", "7–8 am", "coffee or tea, bread with butter and jam; croissants at the weekend"],
        ["[[le déjeuner|day-zhuh-NAY]]", "12–1.30 pm", "a real meal: starter, main course, then cheese or dessert"],
        ["[[le goûter|goo-TAY]]", "around 4 pm", "an afternoon snack, mostly for children: fruit, biscuits, a pain au chocolat"],
        ["[[le dîner|dee-NAY]]", "7.30–8.30 pm", "the evening family meal"]
      ] } },
      { h: "At the market", dialogue: [
        ["La marchande", "Bonjour ! Qu'est-ce que je vous sers ?", "Hello! What can I get you?"],
        ["Rohan", "Bonjour ! Un kilo de tomates et trois oignons, s'il vous plaît.", "Hello! A kilo of tomatoes and three onions, please."],
        ["La marchande", "Voilà. Et avec ceci ?", "Here you are. Anything else?"],
        ["Rohan", "Vous avez des fraises ?", "Do you have strawberries?"],
        ["La marchande", "Oui, elles sont très bonnes aujourd'hui !", "Yes, they're very good today!"],
        ["Rohan", "Alors, cinq cents grammes de fraises. C'est tout, merci.", "Then 500 grams of strawberries. That's all, thanks."],
        ["La marchande", "Ça fait sept euros cinquante.", "That's 7.50 euros."],
        ["Rohan", "Voilà. Merci, bonne journée !", "Here you go. Thanks, have a nice day!"],
        ["La marchande", "Merci, à vous aussi !", "Thank you, you too!"]
      ] },
      { h: "Talk about your meals", examples: [
        { fr: "Le matin, je bois du thé avec du lait.", en: "In the morning, I drink tea with milk.", say: "luh mah-TEHN zhuh bwah dü TAY ah-vehk dü LEH" },
        { fr: "À midi, je mange du riz et des légumes.", en: "At lunchtime, I eat rice and vegetables." },
        { fr: "Le soir, nous dînons vers vingt heures.", en: "In the evening, we have dinner around 8 pm." },
        { fr: "J'adore le fromage, mais je n'aime pas le lait.", en: "I love cheese, but I don't like milk." },
        { fr: "Je ne mange pas de viande : je suis végétarien / végétarienne.", en: "I don't eat meat: I'm vegetarian (man / woman)." },
        { fr: "Pour le gâteau, j'achète des œufs, du beurre et du sucre.", en: "For the cake, I'm buying eggs, butter and sugar." }
      ] },
      { tip: "Shop like a local: always start with [[Bonjour !]] (asking for something without it feels rude in France). Then [[Je voudrais…]] + a quantity, ask [[C'est combien ?]] (How much is it?) and finish with [[Merci, bonne journée !]] To say where you're going: [[Je vais à la boulangerie.]] / [[Je vais au marché.]] (à + le = au)." }
    ],
    quiz: [
      { type: "mcq", q: "You want a baguette and two croissants. Where do you go?", options: ["à la boucherie", "à la boulangerie", "à la pharmacie"], answer: 1, explain: "[[la boulangerie]] = the bakery. Careful: [[la boucherie]] (the butcher's) sounds very similar!" },
      { type: "fill", q: "Je voudrais ___ pain, s'il vous plaît. (some)", answer: ["du"], explain: "[[le pain]] → [[du pain]] = some bread." },
      { type: "fill", q: "Un kilo ___ tomates, s'il vous plaît.", answer: ["de"], explain: "After a quantity, always plain <b>de</b>: [[un kilo de tomates]]." },
      { type: "mcq", q: "Je ne mange pas ___ viande.", options: ["de la", "du", "de"], answer: 2, explain: "After a negative, <b>de la</b> becomes <b>de</b>: [[Je ne mange pas de viande.]]" },
      { type: "listen", say: "Une bouteille d'eau et un paquet de riz, s'il vous plaît.", options: ["A glass of water and a kilo of rice, please.", "A bottle of wine and a packet of pasta, please.", "A bottle of water and a packet of rice, please."], answer: 2 },
      { type: "listen", say: "Le soir, on dîne vers vingt heures.", options: ["In the evening, we have dinner around 8 pm.", "At lunchtime, we eat around noon.", "In the morning, we have breakfast at 8."], answer: 0 },
      { type: "order", words: ["Je", "voudrais", "une", "bouteille", "de", "lait."], en: "I'd like a bottle of milk." },
      { type: "mcq", q: "What is [[le goûter]]?", options: ["an afternoon snack", "a late dinner", "the cheese course"], answer: 0, explain: "[[le goûter]] is the 4 pm snack, mostly for children." },
      { type: "speak", fr: "Je voudrais une baguette et deux croissants, s'il vous plaît.", en: "I'd like a baguette and two croissants, please." },
      { type: "mcq", q: "“I love cheese” (in general) is…", options: ["J'adore du fromage.", "J'adore de fromage.", "J'adore le fromage."], answer: 2, explain: "Likes and dislikes are about things in general → <b>le / la / les</b>: [[J'adore le fromage.]]" },
      { type: "fill", q: "Un jus ___ orange, s'il vous plaît. (of)", answer: ["d'", "d’"], explain: "<b>de</b> + vowel → <b>d'</b>: [[un jus d'orange]]." }
    ],
    vocab: [
      ["le pain", "bread", "luh PEHN", "On achète le pain à la boulangerie.|We buy bread at the bakery."],
      ["la baguette", "baguette (long thin loaf)", "lah bah-GEHT", "Une baguette, s'il vous plaît !|A baguette, please!"],
      ["le croissant", "croissant", "luh krwah-SAHN"],
      ["le pain au chocolat", "chocolate croissant", "luh pehn oh shoh-koh-LAH", "Le dimanche, je mange un pain au chocolat.|On Sundays, I eat a pain au chocolat."],
      ["le lait", "milk", "luh LEH"],
      ["le fromage", "cheese", "luh froh-MAHZH", "J'adore le fromage français.|I love French cheese."],
      ["le beurre", "butter", "luh BUHR"],
      ["le yaourt", "yoghurt", "luh yah-OORT"],
      ["l'œuf", "egg (m.)", "LUHF", "Je mange deux œufs le matin.|I eat two eggs in the morning."],
      ["la viande", "meat", "lah VYAHND"],
      ["le poulet", "chicken", "luh poo-LEH", "Je prends du poulet avec du riz.|I'll have chicken with rice."],
      ["le bœuf", "beef", "luh BUHF"],
      ["le poisson", "fish", "luh pwah-SOHN", "À Goa, on mange beaucoup de poisson.|In Goa, people eat a lot of fish."],
      ["la pomme", "apple", "lah POHM"],
      ["la banane", "banana", "lah bah-NAHN"],
      ["l'orange", "orange (f.)", "loh-RAHNZH"],
      ["la fraise", "strawberry", "lah FREHZ"],
      ["la tomate", "tomato", "lah toh-MAHT"],
      ["la pomme de terre", "potato", "lah pohm duh TEHR", "J'achète un kilo de pommes de terre.|I'm buying a kilo of potatoes."],
      ["la carotte", "carrot", "lah kah-ROHT"],
      ["la salade", "salad; lettuce", "lah sah-LAHD"],
      ["l'oignon", "onion (m.)", "loh-NYOHN", "Il y a des oignons dans la soupe.|There are onions in the soup."],
      ["le riz", "rice", "luh REE", "En Inde, on mange beaucoup de riz.|In India, people eat a lot of rice."],
      ["les pâtes", "pasta (f., always plural)", "lay PAHT"],
      ["le sucre", "sugar", "luh SÜ-kruh"],
      ["le sel", "salt", "luh SEHL"],
      ["l'eau", "water (f.)", "LOH", "Une bouteille d'eau, s'il vous plaît.|A bottle of water, please."],
      ["le café", "coffee; café", "luh kah-FAY"],
      ["le thé", "tea", "luh TAY", "Je bois du thé avec du lait.|I drink tea with milk."],
      ["le jus d'orange", "orange juice", "luh zhü doh-RAHNZH"],
      ["le vin", "wine", "luh VEHN"],
      ["la bière", "beer", "lah BYEHR"],
      ["la boulangerie", "bakery", "lah boo-lahn-zhuh-REE", "La boulangerie ouvre à sept heures.|The bakery opens at seven."],
      ["la boucherie", "butcher's shop", "lah boo-shuh-REE"],
      ["l'épicerie", "grocery shop (f.)", "lay-pee-suh-REE"],
      ["le marché", "market", "luh mar-SHAY", "Le samedi, je vais au marché.|On Saturdays, I go to the market."],
      ["le supermarché", "supermarket", "luh sü-pehr-mar-SHAY"],
      ["le petit-déjeuner", "breakfast", "luh puh-tee day-zhuh-NAY", "Le petit-déjeuner est à huit heures.|Breakfast is at eight."],
      ["le déjeuner", "lunch", "luh day-zhuh-NAY"],
      ["le dîner", "dinner", "luh dee-NAY"]
    ]
  }
]);
