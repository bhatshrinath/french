/* Grammar, part 3: near future, passé composé, imperative, obligation, object pronouns, comparisons, imparfait, time words, qui/que, y/en. */
A1.addLessons([
{
    id: "g-futur-proche",
    cat: "grammar",
    title: "Near future: aller + infinitive (and venir de)",
    minutes: 15,
    summary: "Talk about your plans with aller + infinitive (Je vais voyager.) and say what you have just done with venir de (Je viens de manger.).",
    sections: [
      { h: "Why it matters", p: "In English you say <i>I'm going to</i> + verb to talk about plans. French does exactly the same thing: [[aller|ah-LAY]] + a verb in the infinitive (the dictionary form, like [[manger]], [[faire]], [[partir]]). You already know [[aller]], so you can talk about the future today. It is the future French people use most in everyday speech." },
      { h: "The form: aller + infinitive", conj: { verb: "aller + manger", en: "to be going to eat", rows: [
        ["je vais manger", "I'm going to eat", "zhuh veh mahn-ZHAY"],
        ["tu vas manger", "you're going to eat", "tü vah mahn-ZHAY"],
        ["il / elle / on va manger", "he / she is going to eat (on = we)", "eel / ehl / ohn vah mahn-ZHAY"],
        ["nous allons manger", "we're going to eat", "noo zah-lohn mahn-ZHAY"],
        ["vous allez manger", "you're going to eat", "voo zah-lay mahn-ZHAY"],
        ["ils / elles vont manger", "they're going to eat", "eel / ehl vohn mahn-ZHAY"]
      ] } },
      { h: "Examples", examples: [
        { fr: "Je vais regarder le match de cricket ce soir.", en: "I'm going to watch the cricket match tonight." },
        { fr: "Nous allons visiter Paris l'année prochaine.", en: "We're going to visit Paris next year." },
        { fr: "Elle va appeler sa mère demain.", en: "She's going to call her mother tomorrow." },
        { fr: "Il va pleuvoir.", en: "It's going to rain.", say: "eel vah pluh-VWAR" },
        { fr: "Je vais aller à Mumbai la semaine prochaine.", en: "I'm going to go to Mumbai next week." }
      ] },
      { h: "Time words for the future", table: { head: ["French", "English"], rows: [
        ["[[demain|duh-MEHN]]", "tomorrow"],
        ["[[ce soir|suh SWAR]]", "this evening / tonight"],
        ["[[ce week-end|suh wee-KEND]]", "this weekend"],
        ["[[la semaine prochaine|lah suh-men proh-SHEN]]", "next week"],
        ["[[le mois prochain|luh mwah proh-SHEHN]]", "next month"],
        ["[[l'année prochaine|lah-nay proh-SHEN]]", "next year"],
        ["[[bientôt|byehn-TOH]]", "soon"],
        ["[[dans deux jours|dahn duh ZHOOR]]", "in two days"]
      ] } },
      { h: "Saying no and asking questions", examples: [
        { fr: "Je ne vais pas travailler demain.", en: "I'm not going to work tomorrow." },
        { fr: "On ne va pas sortir ce soir, il pleut.", en: "We're not going out tonight, it's raining." },
        { fr: "Qu'est-ce que tu vas faire ce week-end ?", en: "What are you going to do this weekend?" },
        { fr: "Vous allez rester combien de temps ?", en: "How long are you going to stay?" },
        { fr: "Où est-ce que tu vas fêter Diwali ?", en: "Where are you going to celebrate Diwali?" }
      ] },
      { warn: "In the negative, [[ne… pas]] goes around <b>aller</b> (the verb that changes), not around the infinitive. Say [[Je ne vais pas sortir.]] — never <s>Je vais ne pas sortir</s> or <s>Je ne vais sortir pas</s>." },
      { h: "Just done: venir de + infinitive", p: "To say you have <b>just</b> done something, use [[venir|vuh-NEER]] (to come) + [[de]] + infinitive. Funny detail: French uses the <b>present</b> tense here, while English says <i>have just</i>. [[Je viens de manger.]] = I've just eaten." },
      { conj: { verb: "venir de + manger", en: "to have just eaten", rows: [
        ["je viens de manger", "I've just eaten", "zhuh vyehn duh mahn-ZHAY"],
        ["tu viens de manger", "you've just eaten", "tü vyehn duh mahn-ZHAY"],
        ["il / elle / on vient de manger", "he / she has just eaten (on = we)", "eel / ehl / ohn vyehn duh mahn-ZHAY"],
        ["nous venons de manger", "we've just eaten", "noo vuh-nohn duh mahn-ZHAY"],
        ["vous venez de manger", "you've just eaten", "voo vuh-nay duh mahn-ZHAY"],
        ["ils / elles viennent de manger", "they've just eaten", "eel / ehl vyen duh mahn-ZHAY"]
      ] } },
      { tip: "Before a vowel, [[de]] becomes [[d']]: [[Il vient d'arriver.]] (He has just arrived.) And keep the two apart: [[Je vais manger.]] = I'm <b>going to</b> eat (future). [[Je viens de manger.]] = I've <b>just</b> eaten (past). Also, [[Je vais aller…]] (I'm going to go…) is perfectly normal French." },
      { h: "Use it: weekend plans", dialogue: [
        ["Rahul", "Salut Claire ! Qu'est-ce que tu vas faire ce week-end ?", "Hi Claire! What are you going to do this weekend?"],
        ["Claire", "Je vais aller à Lyon avec ma sœur. Et toi ?", "I'm going to go to Lyon with my sister. And you?"],
        ["Rahul", "Moi, je ne vais pas sortir. Je vais regarder le cricket à la télé.", "Me, I'm not going out. I'm going to watch the cricket on TV."],
        ["Claire", "Le match commence à quelle heure ?", "What time does the match start?"],
        ["Rahul", "Il vient de commencer ! L'Inde joue contre l'Australie.", "It has just started! India is playing against Australia."],
        ["Claire", "Alors, bon match ! On va se voir lundi ?", "Well, enjoy the match! Shall we meet on Monday?"],
        ["Rahul", "Oui, à lundi !", "Yes, see you on Monday!"]
      ] }
    ],
    quiz: [
      { type: "mcq", q: "Demain, nous ___ visiter le Taj Mahal.", options: ["vont", "allons", "allez"], answer: 1, explain: "nous → [[allons]]. The second verb stays in the infinitive: [[visiter]]." },
      { type: "fill", q: "Je ___ (aller) travailler ce soir.", answer: ["vais"], explain: "je → [[vais]]: [[Je vais travailler ce soir.]]" },
      { type: "mcq", q: "Which sentence is correct?", options: ["Je vais ne pas sortir.", "Je ne vais sortir pas.", "Je ne vais pas sortir."], answer: 2, explain: "[[ne… pas]] goes around the conjugated verb [[vais]]: [[Je ne vais pas sortir.]]" },
      { type: "listen", say: "Je viens de manger.", options: ["I've just eaten.", "I'm going to eat.", "I'm coming to eat."], answer: 0, explain: "[[venir de]] + infinitive = to have just done something." },
      { type: "order", words: ["Qu'est-ce", "que", "tu", "vas", "faire", "ce", "week-end ?"], en: "What are you going to do this weekend?" },
      { type: "fill", q: "Il ___ (venir) d'arriver.", answer: ["vient"], explain: "il → [[vient]]: [[Il vient d'arriver.]] = He has just arrived." },
      { type: "mcq", q: "[[la semaine prochaine]] means…", options: ["last week", "this week", "next week"], answer: 2, explain: "[[prochain / prochaine]] = next." },
      { type: "listen", say: "Nous allons partir dans deux jours.", options: ["We left two days ago.", "We are going to leave in two days.", "We are going to stay for two days."], answer: 1, explain: "[[allons partir]] = going to leave; [[dans deux jours]] = in two days." },
      { type: "mcq", q: "She has just finished her homework. → Elle ___ de finir ses devoirs.", options: ["va", "venir", "viens", "vient"], answer: 3, explain: "elle → [[vient]]. [[Elle va finir]] would mean <i>she is going to finish</i>." },
      { type: "speak", fr: "Ce week-end, je vais voir mes amis.", en: "This weekend, I'm going to see my friends." }
    ]
  },

{
    id: "g-pc-avoir",
    cat: "grammar",
    title: "Passé composé (1): with avoir",
    minutes: 20,
    summary: "Say what you did yesterday or last week: avoir + past participle (J'ai mangé, j'ai vu, j'ai fait), plus the negative, questions and past time words.",
    sections: [
      { h: "Why it matters", p: "The <b>passé composé</b> (literally the <i>compound past</i>) is the past tense for <b>finished actions</b>. One French form covers two English ones: [[J'ai mangé.|zhay mahn-ZHAY]] = <i>I ate</i> or <i>I have eaten</i>. It has two pieces: <b>avoir</b> in the present (which you know) + the <b>past participle</b>, the <i>past form</i> of the verb, like <i>eaten, finished, waited</i> in English." },
      { h: "The form: avoir + past participle", conj: { verb: "manger (passé composé)", en: "to eat — I ate / I have eaten", rows: [
        ["j'ai mangé", "I ate / I have eaten", "zhay mahn-ZHAY"],
        ["tu as mangé", "you ate", "tü ah mahn-ZHAY"],
        ["il / elle / on a mangé", "he / she ate (on = we)", "ee-lah / eh-lah / ohn-nah mahn-ZHAY"],
        ["nous avons mangé", "we ate", "noo zah-vohn mahn-ZHAY"],
        ["vous avez mangé", "you ate", "voo zah-vay mahn-ZHAY"],
        ["ils / elles ont mangé", "they ate", "eel zohn / ehl zohn mahn-ZHAY"]
      ] } },
      { h: "Regular past participles", table: { head: ["Infinitive ends in…", "Participle ends in…", "Examples"], rows: [
        ["-er", "-é", "[[manger]] → [[mangé]], [[parler]] → [[parlé]], [[regarder]] → [[regardé]]"],
        ["-ir", "-i", "[[finir]] → [[fini]], [[choisir]] → [[choisi]], [[dormir]] → [[dormi]]"],
        ["-re", "-u", "[[attendre]] → [[attendu]], [[vendre]] → [[vendu]], [[répondre]] → [[répondu]]"]
      ] } },
      { h: "The essential irregular participles", table: { head: ["Verb", "Participle", "Example"], rows: [
        ["[[avoir]] (to have)", "[[eu|Ü]]", "[[J'ai eu de la chance.]] — I was lucky."],
        ["[[être]] (to be)", "[[été|ay-TAY]]", "[[J'ai été malade.]] — I was ill."],
        ["[[faire]] (to do, make)", "[[fait|FEH]]", "[[J'ai fait les courses.]] — I did the shopping."],
        ["[[prendre]] (to take)", "[[pris|PREE]]", "[[J'ai pris le train.]] — I took the train."],
        ["[[mettre]] (to put)", "[[mis|MEE]]", "[[J'ai mis du sucre dans mon chai.]] — I put sugar in my chai."],
        ["[[dire]] (to say)", "[[dit|DEE]]", "[[Il a dit oui.]] — He said yes."],
        ["[[écrire]] (to write)", "[[écrit|ay-KREE]]", "[[J'ai écrit un e-mail.]] — I wrote an email."],
        ["[[lire]] (to read)", "[[lu|LÜ]]", "[[J'ai lu un livre.]] — I read a book."],
        ["[[voir]] (to see)", "[[vu|VÜ]]", "[[J'ai vu un bon film.]] — I saw a good film."],
        ["[[boire]] (to drink)", "[[bu|BÜ]]", "[[J'ai bu un chai.]] — I drank a chai."],
        ["[[pouvoir]] (can)", "[[pu|PÜ]]", "[[Je n'ai pas pu venir.]] — I couldn't come."],
        ["[[vouloir]] (to want)", "[[voulu|voo-LÜ]]", "[[Elle a voulu partir.]] — She wanted to leave."],
        ["[[devoir]] (must)", "[[dû|DÜ]]", "[[J'ai dû travailler.]] — I had to work."],
        ["[[savoir]] (to know)", "[[su|SÜ]]", "[[Je n'ai pas su répondre.]] — I didn't know how to answer."],
        ["[[connaître]] (to know a person)", "[[connu|koh-NÜ]]", "[[J'ai connu Paul à Bangalore.]] — I got to know Paul in Bangalore."],
        ["[[ouvrir]] (to open)", "[[ouvert|oo-VEHR]]", "[[J'ai ouvert la fenêtre.]] — I opened the window."],
        ["[[recevoir]] (to receive)", "[[reçu|ruh-SÜ]]", "[[J'ai reçu un message.]] — I got a message."]
      ] } },
      { tip: "Learn them in sound families. Most end in <b>-u</b>: [[eu]], [[lu]], [[vu]], [[bu]], [[pu]], [[voulu]], [[dû]], [[su]], [[connu]], [[reçu]]. Two end in <b>-is</b>: [[pris]], [[mis]]. Three end in <b>-it</b>: [[fait]], [[dit]], [[écrit]]. Then just [[été]] and [[ouvert]]. Say each one aloud with [[j'ai]] in front: [[j'ai eu]], [[j'ai vu]], [[j'ai pris]]…" },
      { h: "Negative and questions", examples: [
        { fr: "Je n'ai pas mangé.", en: "I didn't eat. / I haven't eaten.", say: "zhuh nay pah mahn-ZHAY" },
        { fr: "Nous n'avons pas fini.", en: "We haven't finished." },
        { fr: "Tu as bien dormi ?", en: "Did you sleep well?", say: "tü ah byehn dor-MEE" },
        { fr: "Vous avez trouvé l'hôtel ?", en: "Did you find the hotel?" },
        { fr: "Qu'est-ce que tu as fait hier ?", en: "What did you do yesterday?" }
      ] },
      { warn: "[[ne… pas]] goes around <b>avoir</b>, and the participle comes after [[pas]]: [[Je n'ai pas vu le film.]] Not <s>Je n'ai vu pas</s>. And listen carefully: [[ils ont|eel ZOHN]] (they have, with a <b>z</b> sound) is not [[ils sont|eel SOHN]] (they are, with an <b>s</b> sound)." },
      { h: "Past time words", table: { head: ["French", "English"], rows: [
        ["[[hier|YEHR]]", "yesterday"],
        ["[[avant-hier|ah-vahn-TYEHR]]", "the day before yesterday"],
        ["[[ce matin|suh mah-TEHN]]", "this morning"],
        ["[[la semaine dernière|lah suh-men dehr-NYEHR]]", "last week"],
        ["[[le mois dernier|luh mwah dehr-NYAY]]", "last month"],
        ["[[l'année dernière|lah-nay dehr-NYEHR]]", "last year"],
        ["[[il y a deux jours|eel yah duh ZHOOR]]", "two days ago"]
      ] } },
      { h: "Use it: Monday morning", dialogue: [
        ["Ananya", "Salut Marc ! Tu as passé un bon week-end ?", "Hi Marc! Did you have a good weekend?"],
        ["Marc", "Oui, très bon ! Samedi, j'ai joué au cricket avec des collègues indiens.", "Yes, very good! On Saturday I played cricket with some Indian colleagues."],
        ["Ananya", "Ah bon ? Vous avez gagné ?", "Really? Did you win?"],
        ["Marc", "Non, nous avons perdu ! Et toi, qu'est-ce que tu as fait ?", "No, we lost! And you, what did you do?"],
        ["Ananya", "Dimanche, j'ai fait un gâteau et j'ai regardé un film.", "On Sunday I made a cake and watched a film."],
        ["Marc", "Tu as vu quel film ?", "Which film did you see?"],
        ["Ananya", "Un film indien. Mais je n'ai pas aimé la fin !", "An Indian film. But I didn't like the ending!"]
      ] }
    ],
    quiz: [
      { type: "mcq", q: "Hier, j'___ regardé un film.", options: ["as", "ai", "a"], answer: 1, explain: "je → [[j'ai]]: [[Hier, j'ai regardé un film.]]" },
      { type: "fill", q: "J'ai ___ (finir) mes devoirs.", answer: ["fini"], explain: "-ir verbs → -i: [[finir]] → [[fini]]." },
      { type: "mcq", q: "The past participle of [[prendre]] is…", options: ["prendu", "prené", "pris", "prit"], answer: 2, explain: "[[prendre]] → [[pris]]: [[J'ai pris le bus.]]" },
      { type: "fill", q: "Nous avons ___ (boire) du chai.", answer: ["bu"], explain: "[[boire]] → [[bu]]." },
      { type: "listen", say: "Je n'ai pas mangé ce matin.", options: ["I didn't eat this morning.", "I'm not eating this morning.", "I'm going to eat this morning."], answer: 0, explain: "[[n'ai pas mangé]] = didn't eat (finished action in the past)." },
      { type: "order", words: ["Je", "n'ai", "pas", "vu", "le", "film."], en: "I didn't see the film." },
      { type: "mcq", q: "[[il y a deux jours]] means…", options: ["in two days", "two days ago", "for two days"], answer: 1, explain: "[[il y a]] + time = ago." },
      { type: "listen", say: "Tu as bien dormi ?", options: ["Are you going to sleep well?", "Are you sleeping well?", "Did you sleep well?"], answer: 2, explain: "[[as dormi]] = passé composé → <i>did you sleep</i>." },
      { type: "fill", q: "Elle a ___ (faire) les courses hier.", answer: ["fait"], explain: "[[faire]] → [[fait]]." },
      { type: "mcq", q: "Ils ___ attendu le bus. (They waited for the bus.)", options: ["sont", "a", "ont"], answer: 2, explain: "ils → [[ont]] (avoir). [[Ils sont]] is être." },
      { type: "speak", fr: "Hier soir, j'ai mangé un biryani.", en: "Last night I ate a biryani." }
    ]
  },

{
    id: "g-pc-etre",
    cat: "grammar",
    title: "Passé composé (2): with être",
    minutes: 20,
    summary: "Use être instead of avoir with the 16 movement and change verbs and all reflexive verbs (Je suis allé / allée, Elle s'est levée), and make the participle agree.",
    sections: [
      { h: "Why it matters", p: "Most verbs make the passé composé with [[avoir]]. But a small, very common group uses [[être]] instead: [[Je suis allé.]] (I went), not <s>J'ai allé</s>. These verbs are mostly about <b>movement</b> (going, coming, arriving, leaving) or a <b>change of state</b> (being born, dying, becoming). There are about 16 of them, plus every reflexive verb." },
      { h: "The être verbs, in partner pairs", table: { head: ["Verb", "Participle", "Partner verb", "Participle"], rows: [
        ["[[aller]] to go", "[[allé]]", "[[venir]] to come", "[[venu]]"],
        ["[[arriver]] to arrive", "[[arrivé]]", "[[partir]] to leave", "[[parti]]"],
        ["[[entrer]] to go in", "[[entré]]", "[[sortir]] to go out", "[[sorti]]"],
        ["[[monter]] to go up", "[[monté]]", "[[descendre]] to go down", "[[descendu]]"],
        ["[[naître]] to be born", "[[né]]", "[[mourir]] to die", "[[mort]]"],
        ["[[rester]] to stay", "[[resté]]", "[[tomber]] to fall", "[[tombé]]"],
        ["[[retourner]] to go back", "[[retourné]]", "[[rentrer]] to go / come home", "[[rentré]]"],
        ["[[revenir]] to come back", "[[revenu]]", "[[devenir]] to become", "[[devenu]]"]
      ] } },
      { tip: "Memory trick: picture a house. You <b>arrive</b>, <b>go in</b>, <b>go up</b> the stairs, <b>come down</b>, <b>go out</b>, <b>leave</b>, <b>come back</b>, <b>go home</b>… and maybe you <b>fall</b> on the stairs or <b>stay</b> in bed! Then a whole life: you are <b>born</b>, you <b>become</b> something, you <b>die</b>. Movement from A to B or a change of state → think [[être]]." },
      { h: "aller in the passé composé", conj: { verb: "aller (passé composé)", en: "to go — I went", rows: [
        ["je suis allé / allée", "I went (m. / f.)", "zhuh swee zah-LAY"],
        ["tu es allé / allée", "you went (m. / f.)", "tü eh zah-LAY"],
        ["il est allé", "he went", "ee-leh tah-LAY"],
        ["elle est allée", "she went", "eh-leh tah-LAY"],
        ["nous sommes allés / allées", "we went", "noo sohm zah-LAY"],
        ["vous êtes allés / allées", "you went (plural)", "voo zeht zah-LAY"],
        ["ils sont allés", "they went (m. or mixed group)", "eel sohn tah-LAY"],
        ["elles sont allées", "they went (all f.)", "ehl sohn tah-LAY"]
      ] } },
      { h: "Agreement: the participle follows the subject", p: "With [[être]], the participle behaves like an adjective: it agrees with the subject. Add <b>-e</b> for a woman, <b>-s</b> for plural, <b>-es</b> for a group of women. [[Elle est allée à Delhi.]] [[Ils sont partis hier.]] [[Elles sont arrivées en retard.]] Good news: most of the time you can't hear it — [[allé]], [[allée]], [[allés]], [[allées]] all sound the same. It matters in writing (and in the DELF writing test!)." },
      { h: "Reflexive verbs: always être", examples: [
        { fr: "Je me suis levé / levée à sept heures.", en: "I got up at seven o'clock. (m. / f.)" },
        { fr: "Elle s'est couchée tard.", en: "She went to bed late." },
        { fr: "Tu t'es réveillé / réveillée à quelle heure ?", en: "What time did you wake up? (m. / f.)" },
        { fr: "Nous nous sommes promenés au bord de la mer.", en: "We went for a walk by the sea." }
      ] },
      { warn: "In the negative, [[ne… pas]] goes around [[être]]: [[Je ne suis pas sorti / sortie hier soir.]] With a reflexive verb, [[ne]] comes before the little pronoun: [[Je ne me suis pas levé / levée tôt.]] And never mix the helpers: <s>J'ai allé</s>, <s>Je suis mangé</s>." },
      { h: "avoir or être?", table: { head: ["avoir (most verbs)", "être (movement, change, reflexive)"], rows: [
        ["[[J'ai mangé.]] — I ate.", "[[Je suis allé / allée au restaurant.]] — I went to the restaurant."],
        ["[[J'ai pris le train.]] — I took the train.", "[[Je suis parti / partie à huit heures.]] — I left at eight."],
        ["[[Elle a visité Paris.]] — She visited Paris.", "[[Elle est arrivée à Paris.]] — She arrived in Paris."],
        ["[[Nous avons dormi à l'hôtel.]] — We slept at the hotel.", "[[Nous sommes restés deux nuits.]] — We stayed two nights."]
      ] } },
      { h: "Use it: Meera's trip to Paris", examples: [
        { fr: "Le mois dernier, je suis allée à Paris.", en: "Last month, I went to Paris." },
        { fr: "Je suis partie de Mumbai le soir et je suis arrivée à Paris le matin.", en: "I left Mumbai in the evening and arrived in Paris in the morning." },
        { fr: "Je suis restée dix jours chez mon amie Julie.", en: "I stayed ten days at my friend Julie's place." },
        { fr: "Un jour, nous sommes montées à la tour Eiffel.", en: "One day, we went up the Eiffel Tower." },
        { fr: "Le soir, nous sommes sorties et nous avons mangé dans un petit restaurant.", en: "In the evening, we went out and ate in a little restaurant." },
        { fr: "Je ne suis pas tombée malade et je suis rentrée en Inde très contente !", en: "I didn't fall ill, and I went home to India very happy!" }
      ] },
      { note: "Meera is a woman, so she writes [[allée]], [[partie]], [[arrivée]], [[restée]]. If Arjun wrote the same text, he would write [[je suis allé]], [[je suis parti]], [[je suis arrivé]], [[je suis resté]] — same sound, different spelling. Notice the mix: [[nous sommes sorties]] (être) but [[nous avons mangé]] (avoir)." }
    ],
    quiz: [
      { type: "mcq", q: "Hier, je ___ allé au cinéma.", options: ["ai", "suis", "es"], answer: 1, explain: "[[aller]] uses être: [[je suis allé / allée]]." },
      { type: "mcq", q: "Which verb uses être in the passé composé?", options: ["manger", "regarder", "arriver", "prendre"], answer: 2, explain: "[[arriver]] is a movement verb: [[je suis arrivé / arrivée]]." },
      { type: "fill", q: "Elle est ___ (partir) ce matin.", answer: ["partie"], explain: "elle → add <b>-e</b>: [[Elle est partie.]]" },
      { type: "fill", q: "Ils sont ___ (arriver) en retard.", answer: ["arrivés"], explain: "ils (plural) → add <b>-s</b>: [[Ils sont arrivés.]]" },
      { type: "listen", say: "Nous sommes rentrés très tard.", options: ["We went out very late.", "We came home very late.", "We are going home very late."], answer: 1, explain: "[[rentrer]] = to go / come home; [[sommes rentrés]] = came home." },
      { type: "order", words: ["Elle", "n'est", "pas", "venue", "à", "la", "fête."], en: "She didn't come to the party." },
      { type: "mcq", q: "Priya ___ à Bangalore en 1998.", options: ["a né", "est né", "est née", "a née"], answer: 2, explain: "[[naître]] uses être, and Priya is a woman: [[Priya est née à Bangalore.]]" },
      { type: "fill", q: "Nous nous sommes ___ (lever) à six heures.", answer: ["levés", "levées"], explain: "Reflexive verb → être → agreement: [[levés]] (men or mixed group) or [[levées]] (women only)." },
      { type: "listen", say: "Elle est tombée dans la rue.", options: ["She fell in the street.", "She stayed in the street.", "She went down the street."], answer: 0, explain: "[[tomber]] = to fall; [[elle est tombée]] = she fell." },
      { type: "mcq", q: "Which is correct for <i>I stayed at home</i>?", options: ["J'ai resté à la maison.", "Je suis resté à la maison.", "Je suis restée à la maison.", "Both 2 and 3 — it depends on who is speaking."], answer: 3, explain: "[[rester]] uses être. A man writes [[resté]], a woman writes [[restée]]." },
      { type: "speak", fr: "Nous sommes allés au marché et nous avons acheté des mangues.", en: "We went to the market and bought some mangoes." }
    ]
  },

{
    id: "g-imperative",
    cat: "grammar",
    title: "Giving instructions: the imperative",
    minutes: 15,
    summary: "Give orders, instructions, directions and advice (Écoutez ! Tournez à gauche. Ne touchez pas.), and understand the instructions in your DELF exam.",
    sections: [
      { h: "Why it matters", p: "The <b>imperative</b> is the form for instructions: <i>Come! Listen! Turn left.</i> You hear it everywhere: in the street, in recipes, in class and in every DELF exam paper ([[Lisez le texte.]], [[Cochez la bonne réponse.]]). It's easy: take the present-tense form for [[tu]], [[nous]] or [[vous]] and simply <b>drop the subject</b>. The [[nous]] form means <i>Let's…</i>" },
      { h: "Three forms: tu, nous, vous", table: { head: ["Verb", "tu (a friend)", "nous (let's…)", "vous (polite / a group)"], rows: [
        ["[[parler]] to speak", "[[Parle !]]", "[[Parlons !]]", "[[Parlez !]]"],
        ["[[écouter]] to listen", "[[Écoute !]]", "[[Écoutons !]]", "[[Écoutez !]]"],
        ["[[finir]] to finish", "[[Finis !]]", "[[Finissons !]]", "[[Finissez !]]"],
        ["[[prendre]] to take", "[[Prends !]]", "[[Prenons !]]", "[[Prenez !]]"],
        ["[[venir]] to come", "[[Viens !]]", "[[Venons !]]", "[[Venez !]]"],
        ["[[faire]] to do", "[[Fais !]]", "[[Faisons !]]", "[[Faites !]]"],
        ["[[aller]] to go", "[[Va !]]", "[[Allons !]]", "[[Allez !]]"]
      ] } },
      { warn: "<b>-er verbs drop the -s</b> in the tu-form: [[tu parles]] → [[Parle !]], [[tu manges]] → [[Mange !]], [[tu écoutes]] → [[Écoute !]]. Same for [[aller]]: [[tu vas]] → [[Va !]] Other verbs <b>keep</b> their -s: [[Finis !]] [[Prends !]] [[Viens !]] [[Fais !]] (One fixed exception you'll meet later: [[Vas-y !]] = Go on!)" },
      { h: "Two irregular ones: être and avoir", table: { head: ["Verb", "tu", "nous", "vous", "Example"], rows: [
        ["[[être]]", "[[sois|SWAH]]", "[[soyons|swah-YOHN]]", "[[soyez|swah-YAY]]", "[[Sois prudent / prudente !]] — Be careful! [[Soyez à l'heure.]] — Be on time."],
        ["[[avoir]]", "[[aie|EH]]", "[[ayons|eh-YOHN]]", "[[ayez|eh-YAY]]", "[[N'aie pas peur !]] — Don't be afraid! [[Ayez de la patience.]] — Be patient."]
      ] } },
      { h: "Don't…! The negative", examples: [
        { fr: "Ne parle pas !", en: "Don't speak!", say: "nuh parl PAH" },
        { fr: "Ne touchez pas.", en: "Don't touch.", say: "nuh too-shay PAH" },
        { fr: "N'oublie pas ton passeport !", en: "Don't forget your passport!" },
        { fr: "Ne mangeons pas trop tard.", en: "Let's not eat too late." }
      ] },
      { h: "Reflexive verbs", examples: [
        { fr: "Lève-toi !", en: "Get up!", say: "lehv-TWAH" },
        { fr: "Dépêche-toi !", en: "Hurry up!", say: "day-pehsh-TWAH" },
        { fr: "Asseyez-vous.", en: "Sit down.", say: "ah-seh-yay-VOO" },
        { fr: "Ne te lève pas.", en: "Don't get up." },
        { fr: "Ne vous inquiétez pas.", en: "Don't worry." }
      ] },
      { tip: "In a positive order, the little pronoun goes <b>after</b> the verb with a hyphen, and [[te]] becomes [[toi]]: [[Lève-toi !]] In the negative, it goes back to its normal place, <b>before</b> the verb: [[Ne te lève pas.]] The same happens with [[me]] → [[moi]]: [[Passe-moi le sel, s'il te plaît.]] (Pass me the salt, please.)" },
      { h: "Where you'll hear it", table: { head: ["Situation", "French", "English"], rows: [
        ["Directions", "[[Tournez à gauche.]] [[Continuez tout droit.]] [[Prenez la deuxième rue à droite.]]", "Turn left. Go straight on. Take the second street on the right."],
        ["Class and exam", "[[Écoutez et répétez.]] [[Lisez le texte.]] [[Cochez la bonne réponse.]] [[Complétez le formulaire.]]", "Listen and repeat. Read the text. Tick the right answer. Fill in the form."],
        ["Recipes", "[[Coupez les oignons.]] [[Ajoutez le sel.]] [[Mélangez bien.]]", "Cut the onions. Add the salt. Mix well."],
        ["Advice", "[[Buvez beaucoup d'eau.]] [[Repose-toi !]]", "Drink lots of water. Get some rest!"]
      ] } },
      { note: "Politeness: an order alone can sound rude. With strangers, use the [[vous]] form and add [[s'il vous plaît]]: [[Fermez la porte, s'il vous plaît.]] With a friend: [[Attends-moi, s'il te plaît !]] (Wait for me, please!)" },
      { h: "Use it: asking the way", dialogue: [
        ["Vikram", "Pardon, madame. La gare, s'il vous plaît ?", "Excuse me, madam. The station, please?"],
        ["La dame", "Alors… Continuez tout droit, puis tournez à gauche au feu.", "So… Go straight on, then turn left at the traffic lights."],
        ["Vikram", "Au feu, à gauche. D'accord.", "At the lights, left. OK."],
        ["La dame", "Ensuite, prenez la deuxième rue à droite. La gare est en face de la poste.", "Then take the second street on the right. The station is opposite the post office."],
        ["Vikram", "Merci beaucoup, madame !", "Thank you very much, madam!"],
        ["La dame", "Je vous en prie. Et ne traversez pas ici : prenez le passage piéton !", "You're welcome. And don't cross here: use the pedestrian crossing!"]
      ] }
    ],
    quiz: [
      { type: "mcq", q: "[[Tu manges.]] → the imperative is…", options: ["Manges !", "Tu mange !", "Mange !"], answer: 2, explain: "-er verbs drop the -s in the tu-form: [[Mange !]]" },
      { type: "fill", q: "___ la fenêtre, s'il vous plaît. (ouvrir, vous)", answer: ["Ouvrez", "ouvrez"], explain: "[[vous ouvrez]] → [[Ouvrez la fenêtre, s'il vous plaît.]]" },
      { type: "mcq", q: "The tu-imperative of [[prendre]] is…", options: ["Prends !", "Prend !", "Prenez !"], answer: 0, explain: "Not an -er verb, so it keeps the -s: [[Prends !]]" },
      { type: "listen", say: "Tournez à droite, puis continuez tout droit.", options: ["Turn left, then go straight on.", "Turn right, then go straight on.", "Go straight on, then turn right."], answer: 1, explain: "[[à droite]] = right, [[tout droit]] = straight on. Don't mix them up!" },
      { type: "fill", q: "Ne ___ pas ! (toucher, vous)", answer: ["touchez"], explain: "[[Ne touchez pas !]] = Don't touch!" },
      { type: "mcq", q: "Be on time! (vous)", options: ["Ayez à l'heure !", "Êtes à l'heure !", "Soyez à l'heure !"], answer: 2, explain: "[[être]] is irregular: [[sois, soyons, soyez]]." },
      { type: "order", words: ["Ne", "te", "lève", "pas", "tout", "de", "suite."], en: "Don't get up right away." },
      { type: "mcq", q: "Get up! (tu)", options: ["Te lève !", "Lève-te !", "Toi lève !", "Lève-toi !"], answer: 3, explain: "Positive order: pronoun after the verb, and [[te]] → [[toi]]: [[Lève-toi !]]" },
      { type: "listen", say: "Écoutez et cochez la bonne réponse.", options: ["Read and write the answer.", "Listen and tick the right answer.", "Listen and repeat the answer."], answer: 1, explain: "[[Écoutez]] = listen, [[cochez]] = tick. A classic DELF instruction." },
      { type: "fill", q: "___-nous ! On va être en retard. (se dépêcher, nous)", answer: ["Dépêchons", "dépêchons"], explain: "[[Dépêchons-nous !]] = Let's hurry!" },
      { type: "speak", fr: "Asseyez-vous, s'il vous plaît.", en: "Sit down, please." }
    ]
  },

{
    id: "g-il-faut",
    cat: "grammar",
    title: "Obligation & advice: il faut, devoir, il ne faut pas",
    minutes: 15,
    summary: "Talk about rules and obligations (Il faut réserver. Je dois travailler.), understand signs (Il est interdit de fumer.) and give friendly advice.",
    sections: [
      { h: "Why it matters", p: "Rules, signs, travel tips, a doctor's advice: they all use the same few phrases. The star is [[il faut|eel FOH]] + infinitive = <i>you have to / we must / it's necessary to</i>. It is <b>impersonal</b>: here [[il]] means <i>it</i>, not <i>he</i>, and [[il faut]] never changes. There is no <s>je faut</s> or <s>tu faut</s>." },
      { h: "il faut + infinitive (or + a noun)", examples: [
        { fr: "Il faut réserver une table.", en: "You have to book a table." },
        { fr: "Il faut partir maintenant.", en: "We have to leave now." },
        { fr: "Il faut parler français en classe.", en: "You have to speak French in class." },
        { fr: "Pour aller en France, il faut un visa.", en: "To go to France, you need a visa." },
        { fr: "Qu'est-ce qu'il faut faire ?", en: "What do we have to do?" }
      ] },
      { warn: "[[Il ne faut pas…|eel nuh foh PAH]] means <b>you must NOT</b>, not <i>you don't need to</i>! [[Il ne faut pas fumer ici.]] = You must not smoke here. To say <i>you don't need to</i>, use [[avoir besoin de]]: [[Tu n'as pas besoin de réserver.]] = You don't need to book." },
      { h: "devoir: review", conj: { verb: "devoir", en: "must / to have to", rows: [
        ["je dois", "I must / I have to", "zhuh DWAH"],
        ["tu dois", "you must", "tü DWAH"],
        ["il / elle / on doit", "he / she must (on = we)", "eel / ehl / ohn DWAH"],
        ["nous devons", "we must", "noo duh-VOHN"],
        ["vous devez", "you must", "voo duh-VAY"],
        ["ils / elles doivent", "they must", "eel / ehl DWAHV"]
      ] } },
      { h: "il faut or devoir?", p: "Both are followed by an infinitive. [[Il faut]] is general: everybody, people, us. [[Devoir]] says <b>who</b>: [[Je dois travailler samedi.]] (I have to work on Saturday.) [[Vous devez remplir ce formulaire.]] (You have to fill in this form.) In the negative, [[Tu ne dois pas…]] also means <i>you must not</i>: [[Tu ne dois pas conduire vite.]]" },
      { h: "Rules and signs", table: { head: ["French", "English"], rows: [
        ["[[Il est interdit de fumer.]]", "Smoking is forbidden."],
        ["[[Défense de stationner.]]", "No parking."],
        ["[[Défense d'entrer.]]", "No entry."],
        ["[[Il est interdit de prendre des photos.]]", "Taking photos is not allowed."],
        ["[[Le port du casque est obligatoire.]]", "Wearing a helmet is compulsory."],
        ["[[Ne pas marcher sur la pelouse.]]", "Keep off the grass. (signs often use [[ne pas]] + infinitive)"]
      ] } },
      { h: "Giving advice", examples: [
        { fr: "Il faut boire de l'eau.", en: "You should drink some water." },
        { fr: "Tu dois te reposer.", en: "You must rest." },
        { fr: "Je te conseille de dormir un peu.", en: "I advise you to sleep a little. (to a friend)" },
        { fr: "Je vous conseille de prendre le métro.", en: "I advise you to take the metro. (polite)" },
        { fr: "Pourquoi tu ne vas pas chez le médecin ?", en: "Why don't you go to the doctor?" },
        { fr: "Bois un thé au gingembre !", en: "Drink a ginger tea!" }
      ] },
      { tip: "Three friendly ways to give advice: [[Je te conseille de…]] (I advise you to…), [[Pourquoi tu ne… pas ?]] (Why don't you…?) around the verb — [[Pourquoi tu ne prends pas un taxi ?]] — and the imperative: [[Repose-toi !]] [[Va au lit !]] (You'll see [[tu devrais]] = <i>you should</i> later.)" },
      { h: "Use it: before the exam", dialogue: [
        ["Sophie", "Ça ne va pas ? Tu as l'air fatigué.", "Are you OK? You look tired."],
        ["Aditya", "J'ai mal à la tête. Je dois réviser pour le DELF.", "I've got a headache. I have to revise for the DELF."],
        ["Sophie", "Tu dois te reposer ! Et il faut boire beaucoup d'eau.", "You must rest! And you need to drink lots of water."],
        ["Aditya", "Mais l'examen est samedi !", "But the exam is on Saturday!"],
        ["Sophie", "Oui, mais il ne faut pas travailler toute la nuit. Pourquoi tu ne fais pas une pause ?", "Yes, but you mustn't work all night. Why don't you take a break?"],
        ["Aditya", "D'accord. Je vais faire une pause et boire un chai.", "OK. I'm going to take a break and drink a chai."],
        ["Sophie", "Bonne idée ! Et je te conseille de dormir avant minuit.", "Good idea! And I advise you to sleep before midnight."]
      ] }
    ],
    quiz: [
      { type: "mcq", q: "[[Il ne faut pas fumer ici.]] means…", options: ["You don't need to smoke here.", "You must not smoke here.", "He doesn't smoke here."], answer: 1, explain: "[[Il ne faut pas]] = must NOT. It's a ban, not a choice." },
      { type: "fill", q: "Pour entrer dans le musée, il ___ un billet.", answer: ["faut"], explain: "[[il faut]] + noun = you need: [[il faut un billet]]." },
      { type: "mcq", q: "Nous ___ partir à six heures.", options: ["devez", "doit", "devons"], answer: 2, explain: "nous → [[devons]]." },
      { type: "listen", say: "Il est interdit de prendre des photos.", options: ["Taking photos is not allowed.", "You have to take photos.", "Photos are free here."], answer: 0, explain: "[[Il est interdit de…]] = It is forbidden to…" },
      { type: "fill", q: "Tu ___ (devoir) te reposer.", answer: ["dois"], explain: "tu → [[dois]]: [[Tu dois te reposer.]]" },
      { type: "order", words: ["Il", "ne", "faut", "pas", "oublier", "ton", "passeport."], en: "You mustn't forget your passport." },
      { type: "mcq", q: "You don't need to book. →", options: ["Il ne faut pas réserver.", "Tu n'as pas besoin de réserver.", "Tu ne dois pas réserver."], answer: 1, explain: "[[Il ne faut pas]] and [[tu ne dois pas]] both mean <i>must not</i>. <i>No need</i> = [[ne pas avoir besoin de]]." },
      { type: "listen", say: "Pourquoi tu ne prends pas un taxi ?", options: ["Why are you taking a taxi?", "Why didn't you take a taxi?", "Why don't you take a taxi?"], answer: 2, explain: "[[Pourquoi tu ne… pas ?]] = Why don't you…? A friendly suggestion." },
      { type: "mcq", q: "Il ___ un visa pour aller en France.", options: ["faut", "fait", "doit"], answer: 0, explain: "[[Il faut un visa]] = You need a visa. [[il faut]] never changes." },
      { type: "fill", q: "Je te ___ de dormir un peu. (I advise you…)", answer: ["conseille"], explain: "[[conseiller de]] + infinitive: [[Je te conseille de dormir.]]" },
      { type: "speak", fr: "Il faut boire beaucoup d'eau quand il fait chaud.", en: "You have to drink lots of water when it's hot." }
    ]
  },

{
    id: "g-cod",
    cat: "grammar",
    title: "Direct object pronouns: le, la, l', les",
    minutes: 15,
    summary: "Stop repeating nouns: replace them with le, la, l', les (and me, te, nous, vous) and put them in the right place: Je la vois. Je vais le faire.",
    sections: [
      { h: "Why it matters", p: "Nobody says <i>Do you see Marie? Yes, I see Marie.</i> We say <i>Yes, I see <b>her</b>.</i> English uses <i>him, her, it, them</i>. French uses [[le]], [[la]], [[l']] and [[les]]. They replace a person or a thing that comes straight after the verb, with no little word like [[à]] in between (that's what <b>direct object</b> means)." },
      { h: "The pronouns", table: { head: ["Pronoun", "Replaces", "Example"], rows: [
        ["[[le]] = him / it", "a masculine noun", "[[Tu vois Paul ?]] → [[Oui, je le vois.]]"],
        ["[[la]] = her / it", "a feminine noun", "[[Tu vois Marie ?]] → [[Oui, je la vois.]]"],
        ["[[l']] = him / her / it", "le or la before a vowel or silent h", "[[Tu aimes le chai ?]] → [[Oui, je l'aime.]]"],
        ["[[les]] = them", "a plural noun (m. or f.)", "[[Tu prends les billets ?]] → [[Oui, je les prends.]]"]
      ] } },
      { h: "Where does it go?", p: "This is the big difference with English: the pronoun goes <b>before</b> the conjugated verb. English: <i>I eat <b>it</b>.</i> French: [[Je le mange.]] (word for word: <i>I it eat</i>). It feels strange for a week, then it feels natural." },
      { examples: [
        { fr: "Tu regardes le match ? — Oui, je le regarde.", en: "Are you watching the match? — Yes, I'm watching it." },
        { fr: "Tu connais Mme Dupont ? — Oui, je la connais bien.", en: "Do you know Mrs Dupont? — Yes, I know her well." },
        { fr: "Où sont mes clés ? Je les cherche partout !", en: "Where are my keys? I'm looking for them everywhere!" },
        { fr: "Il adore cette chanson. Il l'écoute tous les jours.", en: "He loves this song. He listens to it every day." }
      ] },
      { warn: "In the negative, [[ne]] goes before the pronoun and [[pas]] after the verb: [[Je ne le connais pas.]] (I don't know him.) [[Elle ne les aime pas.]] (She doesn't like them.) Not <s>Je ne connais le pas</s>. The pronoun and the verb stay glued together." },
      { h: "With two verbs: before the infinitive", examples: [
        { fr: "Je vais le faire.", en: "I'm going to do it." },
        { fr: "Je peux la prendre ?", en: "Can I take it? (la chaise, the chair)" },
        { fr: "Tu dois les appeler.", en: "You must call them." },
        { fr: "Je ne veux pas le voir.", en: "I don't want to see him." }
      ] },
      { h: "me, te, nous, vous", table: { head: ["Pronoun", "Example", "English"], rows: [
        ["[[me]] / [[m']] = me", "[[Tu m'appelles ce soir ?]]", "Will you call me tonight?"],
        ["[[te]] / [[t']] = you", "[[Je t'aime.]] [[Je te vois demain.]]", "I love you. See you tomorrow."],
        ["[[nous]] = us", "[[Il nous invite à dîner.]]", "He's inviting us to dinner."],
        ["[[vous]] = you", "[[Je vous remercie.]]", "Thank you. (literally: I thank you)"]
      ] } },
      { tip: "Don't confuse them with the articles! Before a <b>noun</b>, [[le]], [[la]], [[les]] mean <i>the</i>: [[le livre]]. Before a <b>verb</b>, they are pronouns: [[je le lis]]. Both in one sentence: [[Je prends le livre et je le lis.]] Also, some verbs take a direct object in French where English adds a little word: [[écouter]] (listen <b>to</b>), [[regarder]] (look <b>at</b>), [[chercher]] (look <b>for</b>), [[attendre]] (wait <b>for</b>): [[Je l'attends.]] = I'm waiting for him / her." },
      { h: "Use it: leaving for Paris", dialogue: [
        ["Maman", "Karan, tu prends ton passeport ?", "Karan, are you taking your passport?"],
        ["Karan", "Oui, je le prends. Il est dans mon sac.", "Yes, I'm taking it. It's in my bag."],
        ["Maman", "Et les billets ?", "And the tickets?"],
        ["Karan", "Je les ai sur mon téléphone.", "I have them on my phone."],
        ["Maman", "Tu appelles ta tante quand tu arrives à Paris ?", "Will you call your aunt when you arrive in Paris?"],
        ["Karan", "Oui, je vais l'appeler de l'aéroport.", "Yes, I'm going to call her from the airport."],
        ["Maman", "Et tu nous appelles aussi, d'accord ?", "And you call us too, OK?"],
        ["Karan", "Promis, je vous appelle ce soir !", "Promise, I'll call you tonight!"]
      ] }
    ],
    quiz: [
      { type: "mcq", q: "Tu vois Marie ? — Oui, je ___ vois.", options: ["le", "la", "les"], answer: 1, explain: "Marie is feminine → [[la]]: [[Je la vois.]]" },
      { type: "mcq", q: "Tu aimes le cricket ? — Oui, je ___ adore.", options: ["le", "la", "l'"], answer: 2, explain: "[[adore]] starts with a vowel → [[l']]: [[Je l'adore.]]" },
      { type: "fill", q: "Tu prends les clés ? — Oui, je ___ prends.", answer: ["les"], explain: "Plural → [[les]]: [[Je les prends.]]" },
      { type: "order", words: ["Je", "ne", "le", "connais", "pas."], en: "I don't know him." },
      { type: "listen", say: "Ma chambre ? Je vais la ranger demain.", options: ["My room? I'm going to tidy it tomorrow.", "My room? I tidied it yesterday.", "My room? I don't want to tidy it."], answer: 0, explain: "[[Je vais la ranger]] = I'm going to tidy it ([[la]] = [[la chambre]])." },
      { type: "mcq", q: "Can I take it? (the bag) →", options: ["Je peux prendre le ?", "Je le peux prendre ?", "Je peux le prendre ?"], answer: 2, explain: "With two verbs, the pronoun goes before the infinitive: [[Je peux le prendre ?]]" },
      { type: "fill", q: "Tu ___ appelles ce soir ? (me)", answer: ["m'", "m’"], explain: "[[me]] → [[m']] before a vowel: [[Tu m'appelles ?]]" },
      { type: "listen", say: "Il nous attend devant la gare.", options: ["We're waiting for him in front of the station.", "He's waiting for us in front of the station.", "He's waiting for you behind the station."], answer: 1, explain: "[[nous]] before the verb = <i>us</i>. [[attendre]] = to wait for." },
      { type: "mcq", q: "In [[Je le lis le matin.]], which [[le]] is a pronoun?", options: ["the first one (before lis)", "the second one (before matin)", "both"], answer: 0, explain: "Before a verb = pronoun (it). Before a noun = article (the)." },
      { type: "fill", q: "Cette robe ? Je ___ adore !", answer: ["l'", "l’"], explain: "[[la]] → [[l']] before a vowel: [[Je l'adore !]]" },
      { type: "speak", fr: "Le chai ? Je le bois tous les matins.", en: "Chai? I drink it every morning." }
    ]
  },

{
    id: "g-comparatives",
    cat: "grammar",
    title: "Comparing: plus, moins, aussi … que",
    minutes: 15,
    summary: "Compare people, places, food and prices (plus grand que, moins cher que, aussi bon que, meilleur, mieux) and say what's the best or the biggest.",
    sections: [
      { h: "Why it matters", p: "India or France? Tea or coffee? Train or plane? Comparing is everywhere, and French makes it simple with three words: [[plus|PLÜ]] (more), [[moins|MWEHN]] (less) and [[aussi|oh-SEE]] (as). Put [[que]] (than / as) before the second thing you compare." },
      { h: "The pattern", table: { head: ["Structure", "Meaning", "Example"], rows: [
        ["[[plus]] + adjective + [[que]]", "more … than / -er than", "[[L'Inde est plus grande que la France.]]"],
        ["[[moins]] + adjective + [[que]]", "less … than", "[[Le train est moins rapide que l'avion.]]"],
        ["[[aussi]] + adjective + [[que]]", "as … as", "[[Mon frère est aussi grand que mon père.]]"]
      ] } },
      { h: "The adjective still agrees", examples: [
        { fr: "Ma sœur est plus âgée que moi.", en: "My sister is older than me." },
        { fr: "Les mangues sont moins chères en Inde qu'en France.", en: "Mangoes are cheaper in India than in France." },
        { fr: "En été, il fait plus chaud à Delhi qu'à Paris.", en: "In summer, it's hotter in Delhi than in Paris." },
        { fr: "Le français est aussi difficile que l'anglais ?", en: "Is French as difficult as English?" }
      ] },
      { warn: "<b>bon → meilleur</b>, never <s>plus bon</s>: [[Le chai est meilleur que le café.]] It agrees: [[meilleure]] for a feminine noun ([[Cette pizza est meilleure.]]). <b>bien → mieux</b>, never <s>plus bien</s>: [[Elle chante mieux que moi.]] Simple test: [[meilleur]] describes a <b>thing or person</b> (a better film), [[mieux]] describes an <b>action</b> (she sings better). [[Ça va mieux ?]] = Feeling better?" },
      { h: "Comparing amounts: plus de, moins de, autant de", table: { head: ["Structure", "Example", "English"], rows: [
        ["[[plus de]] + noun + [[que]]", "[[Mumbai a plus d'habitants que Paris.]]", "Mumbai has more inhabitants than Paris."],
        ["[[moins de]] + noun + [[que]]", "[[J'ai moins de temps que toi.]]", "I have less time than you."],
        ["[[autant de]] + noun + [[que]]", "[[Nous avons autant de vacances que vous.]]", "We have as many holidays as you."]
      ] } },
      { h: "The best, the biggest (a first look)", table: { head: ["Form", "English", "Example"], rows: [
        ["[[le plus grand]] / [[la plus grande]]", "the biggest / tallest", "[[Mon frère est le plus grand de la famille.]]"],
        ["[[le plus beau]] / [[la plus belle]]", "the most beautiful", "[[Pour moi, c'est la plus belle ville du monde.]]"],
        ["[[le moins cher]] / [[la moins chère]]", "the cheapest", "[[Quel est le moins cher ?]]"],
        ["[[le meilleur]] / [[la meilleure]]", "the best", "[[C'est le meilleur film de l'année !]]"]
      ] } },
      { tip: "After [[que]], use the strong pronouns [[moi]], [[toi]], [[lui]], [[elle]], [[nous]], [[vous]], [[eux]], [[elles]]: [[Il est plus grand que moi.]] (not <s>que je</s>). [[que]] becomes [[qu']] before a vowel: [[plus jeune qu'elle]], [[moins cher qu'en France]]. And with the superlative, <i>in</i> is [[de]]: [[le plus grand de la famille]], [[la plus belle du monde]]." },
      { h: "Use it: France or India?", dialogue: [
        ["Julien", "Alors, tu préfères la France ou l'Inde ?", "So, do you prefer France or India?"],
        ["Neha", "C'est difficile ! La cuisine indienne est plus épicée et, pour moi, elle est meilleure.", "That's hard! Indian food is spicier and, for me, it's better."],
        ["Julien", "Et le climat ?", "And the climate?"],
        ["Neha", "En été, il fait plus chaud à Delhi qu'à Paris. Mais en hiver, il fait plus froid à Paris !", "In summer, it's hotter in Delhi than in Paris. But in winter, it's colder in Paris!"],
        ["Julien", "Et les villes ?", "And the cities?"],
        ["Neha", "Mumbai a beaucoup plus d'habitants que Paris. Mais Paris, c'est la plus belle ville du monde !", "Mumbai has many more inhabitants than Paris. But Paris is the most beautiful city in the world!"],
        ["Julien", "En tout cas, tu parles français de mieux en mieux !", "Anyway, your French is getting better and better!"]
      ] }
    ],
    quiz: [
      { type: "mcq", q: "L'Inde est ___ grande que la France.", options: ["plus", "moins", "aussi"], answer: 0, explain: "India is about five times bigger than France: [[plus grande que]]." },
      { type: "fill", q: "Ce restaurant est ___ que l'autre. (better — bon)", answer: ["meilleur"], explain: "[[bon]] → [[meilleur]], never <s>plus bon</s>." },
      { type: "mcq", q: "Elle chante ___ que moi. (better)", options: ["meilleur", "plus bien", "mieux", "meilleure"], answer: 2, explain: "Singing is an action → [[mieux]]." },
      { type: "fill", q: "J'ai ___ de frères que toi. (more)", answer: ["plus"], explain: "With a noun: [[plus de]] + noun + [[que]]." },
      { type: "listen", say: "Le train est moins rapide que l'avion.", options: ["The train is faster than the plane.", "The train is as fast as the plane.", "The train is slower than the plane."], answer: 2, explain: "[[moins rapide que]] = less fast than = slower than." },
      { type: "order", words: ["Ma", "sœur", "est", "plus", "grande", "que", "moi."], en: "My sister is taller than me." },
      { type: "mcq", q: "Il est plus âgé que ___.", options: ["je", "moi", "me"], answer: 1, explain: "After [[que]], use the strong pronoun: [[que moi]]." },
      { type: "mcq", q: "C'est ___ ville du monde ! (the most beautiful)", options: ["le plus beau", "plus belle", "la plus beau", "la plus belle"], answer: 3, explain: "[[ville]] is feminine → [[la plus belle]]." },
      { type: "listen", say: "J'ai autant de travail que toi.", options: ["I have more work than you.", "I have as much work as you.", "I have less work than you."], answer: 1, explain: "[[autant de]] = as much / as many." },
      { type: "fill", q: "Les mangues sont moins ___ en Inde. (cher)", answer: ["chères"], explain: "[[les mangues]] is feminine plural → [[chères]]." },
      { type: "speak", fr: "Pour moi, le chai est meilleur que le café.", en: "For me, chai is better than coffee." }
    ]
  },
  {
    id: "g-imparfait",
    cat: "grammar",
    title: "The imparfait (intro): describing the past",
    minutes: 20,
    summary: "Describe how things were (C'était super ! Il faisait beau.) and what you used to do (Je jouais au cricket.), and know when to use the imparfait instead of the passé composé.",
    sections: [
      { h: "Why it matters", p: "The passé composé tells <b>what happened</b>: [[J'ai mangé.]] The [[imparfait|ehn-par-FEH]] paints <b>how things were</b>: the weather, the place, your feelings, and what you <b>used to</b> do. English often says <i>was …-ing</i> or <i>used to</i>: [[Il pleuvait.]] = It was raining. [[Je jouais au cricket.]] = I used to play cricket." },
      { h: "How to make it", p: "One recipe for almost every verb: take the [[nous]] form of the present, remove <b>-ons</b>, and add the endings <b>-ais, -ais, -ait, -ions, -iez, -aient</b>. [[nous parlons]] → <b>parl-</b> → [[je parlais]]. Good news: four of the six forms sound exactly the same." },
      { conj: { verb: "parler (imparfait)", en: "to speak — I was speaking / I used to speak", rows: [
        ["je parlais", "I was speaking / I used to speak", "zhuh par-LEH"],
        ["tu parlais", "you were speaking", "tü par-LEH"],
        ["il / elle / on parlait", "he / she was speaking (on = we)", "eel / ehl / ohn par-LEH"],
        ["nous parlions", "we were speaking", "noo par-LYOHN"],
        ["vous parliez", "you were speaking", "voo par-LYAY"],
        ["ils / elles parlaient", "they were speaking", "eel / ehl par-LEH"]
      ] } },
      { h: "Same recipe for other verbs", table: { head: ["Present (nous)", "Stem", "Imparfait (je)"], rows: [
        ["[[nous finissons]]", "<b>finiss-</b>", "[[je finissais]]"],
        ["[[nous faisons]]", "<b>fais-</b>", "[[je faisais]]"],
        ["[[nous avons]]", "<b>av-</b>", "[[j'avais]]"],
        ["[[nous allons]]", "<b>all-</b>", "[[j'allais]]"],
        ["[[nous prenons]]", "<b>pren-</b>", "[[je prenais]]"],
        ["[[nous mangeons]]", "<b>mange-</b> (keeps the e)", "[[je mangeais]]"],
        ["[[nous sommes]] — <b>être</b> is the only exception", "<b>ét-</b>", "[[j'étais]]"]
      ] } },
      { h: "The six forms you'll use every day", table: { head: ["French", "English", "Example"], rows: [
        ["[[c'était|say-TEH]]", "it was", "[[C'était super !]] — It was great!"],
        ["[[il y avait|eel yah-VEH]]", "there was / there were", "[[Il y avait beaucoup de monde.]] — There were lots of people."],
        ["[[il faisait|eel fuh-ZEH]]", "the weather was…", "[[Il faisait beau.]] — The weather was nice."],
        ["[[il pleuvait|eel pluh-VEH]]", "it was raining", "[[Il pleuvait quand le train est arrivé.]] — It was raining when the train arrived."],
        ["[[j'avais|zhah-VEH]]", "I had / I was (age)", "[[J'avais dix ans.]] — I was ten."],
        ["[[j'étais|zhay-TEH]]", "I was", "[[J'étais fatigué / fatiguée.]] — I was tired."]
      ] } },
      { h: "Past habits: used to…", examples: [
        { fr: "Quand j'étais petit / petite, je jouais au cricket tous les jours.", en: "When I was little, I used to play cricket every day." },
        { fr: "Le dimanche, nous allions chez mes grands-parents.", en: "On Sundays, we used to go to my grandparents' place." },
        { fr: "Ma grand-mère faisait le meilleur chai du monde.", en: "My grandmother used to make the best chai in the world." },
        { fr: "Avant, j'habitais à Delhi.", en: "Before, I used to live in Delhi." }
      ] },
      { h: "Imparfait or passé composé?", table: { head: ["Imparfait = the scene", "Passé composé = the event"], rows: [
        ["[[Il pleuvait…]] (it was raining…)", "[[… quand je suis arrivé / arrivée.]] (…when I arrived.)"],
        ["[[Je regardais la télé…]] (I was watching TV…)", "[[… quand le téléphone a sonné.]] (…when the phone rang.)"],
        ["[[C'était un samedi. Il faisait chaud.]] (It was a Saturday. It was hot.)", "[[Nous sommes allés à la plage.]] (We went to the beach.)"]
      ] } },
      { tip: "One simple rule: think of a film. The <b>imparfait</b> is the background — weather, time, place, feelings, what was going on, what used to happen. The <b>passé composé</b> is the single action that happens in front of it, once, and is finished. [[Il pleuvait quand je suis arrivé / arrivée.]] = background + event." },
      { warn: "Don't use the imparfait for a single finished action. <i>Yesterday I ate a pizza</i> = [[Hier, j'ai mangé une pizza.]] If you say <s>Hier, je mangeais une pizza</s>, it means <i>I was eating a pizza…</i> and your listener waits for the rest of the story!" },
      { h: "Use it: childhood memories", dialogue: [
        ["Léa", "Tu habitais où quand tu étais petit ?", "Where did you live when you were little?"],
        ["Arjun", "J'habitais à Pune, dans une grande maison avec mes grands-parents.", "I lived in Pune, in a big house with my grandparents."],
        ["Léa", "C'était comment ?", "What was it like?"],
        ["Arjun", "C'était génial ! Il y avait un jardin et il faisait toujours beau.", "It was great! There was a garden and the weather was always nice."],
        ["Léa", "Qu'est-ce que tu faisais le week-end ?", "What did you use to do at the weekend?"],
        ["Arjun", "Je jouais au cricket avec mes cousins. Un jour, j'ai cassé une fenêtre !", "I used to play cricket with my cousins. One day, I broke a window!"],
        ["Léa", "Oh non ! Ta grand-mère était fâchée ?", "Oh no! Was your grandmother angry?"],
        ["Arjun", "Non, elle riait ! Elle adorait le cricket.", "No, she was laughing! She loved cricket."]
      ] }
    ],
    quiz: [
      { type: "mcq", q: "[[nous finissons]] → je ___", options: ["finis", "finissais", "finissait"], answer: 1, explain: "Stem <b>finiss-</b> + <b>-ais</b> for je: [[je finissais]]. [[finissait]] is the il / elle form." },
      { type: "fill", q: "Quand j'___ (être) petit / petite, j'habitais à Delhi.", answer: ["étais"], explain: "[[être]] → stem <b>ét-</b>: [[j'étais]]." },
      { type: "mcq", q: "It was great! →", options: ["C'est super !", "Ça a super !", "C'était super !"], answer: 2, explain: "[[c'était]] = it was. You'll use it all the time." },
      { type: "listen", say: "Il pleuvait quand je suis arrivé.", options: ["It was raining when I arrived.", "It rained after I arrived.", "It's raining, so I'm arriving."], answer: 0, explain: "[[il pleuvait]] = background (imparfait), [[je suis arrivé]] = event (passé composé)." },
      { type: "fill", q: "Avant, nous ___ (habiter) à Mumbai.", answer: ["habitions"], explain: "nous → <b>-ions</b>: [[nous habitions]]." },
      { type: "order", words: ["Il", "y", "avait", "beaucoup", "de", "monde."], en: "There were lots of people." },
      { type: "mcq", q: "Hier soir, elle ___ un film, puis elle est allée se coucher. (one finished action)", options: ["regardait", "a regardé", "regarde"], answer: 1, explain: "A single, finished action → passé composé: [[elle a regardé]]." },
      { type: "mcq", q: "Which is the imparfait of [[avoir]] for je?", options: ["j'avais", "j'ai eu", "j'avait"], answer: 0, explain: "je → <b>-ais</b>: [[j'avais]]. <s>j'avait</s> is a spelling mistake (that's the il ending)." },
      { type: "listen", say: "Le dimanche, nous allions chez ma grand-mère.", options: ["This Sunday, we're going to my grandmother's.", "On Sundays, we used to go to my grandmother's.", "Last Sunday, we went to my grandmother's."], answer: 1, explain: "[[le dimanche]] (every Sunday) + imparfait [[allions]] = a habit: <i>used to go</i>." },
      { type: "fill", q: "Avant, ils ___ (aller) au marché le samedi.", answer: ["allaient"], explain: "ils → <b>-aient</b>: [[ils allaient]]. It sounds just like [[il allait]]." },
      { type: "speak", fr: "C'était super ! Il faisait beau et il y avait beaucoup de monde.", en: "It was great! The weather was nice and there were lots of people." }
    ]
  },
  {
    id: "g-time-markers",
    cat: "grammar",
    title: "Time words: depuis, pendant, il y a, dans, en",
    minutes: 15,
    summary: "Say how long, since when, how long ago and how soon: depuis, pendant, il y a, dans, en, à, de… à…, jusqu'à — and ask the matching questions.",
    sections: [
      { h: "Why it matters", p: "English <i>for</i> can be [[depuis]] or [[pendant]] in French, and <i>in</i> can be [[dans]] or [[en]]. These little words change the whole meaning, and the DELF examiner will ask you [[Depuis combien de temps… ?]] for sure. Let's start with the trickiest one: [[depuis|duh-PWEE]] = <i>since / for</i>, for something that <b>started in the past and is still true now</b>. French uses the <b>present</b> tense here, where English says <i>have been …-ing</i>." },
      { h: "depuis + present tense", examples: [
        { fr: "J'apprends le français depuis trois semaines.", en: "I have been learning French for three weeks." },
        { fr: "J'habite à Bangalore depuis 2020.", en: "I have lived in Bangalore since 2020." },
        { fr: "Je t'attends depuis une heure !", en: "I've been waiting for you for an hour!" },
        { fr: "Elle travaille ici depuis lundi.", en: "She has been working here since Monday." }
      ] },
      { warn: "With [[depuis]], don't translate the English tense word for word. <i>I have lived here for two years</i> (and I still do) = [[J'habite ici depuis deux ans.]] Not <s>J'ai habité ici depuis deux ans</s>." },
      { h: "pendant, il y a, dans", table: { head: ["Word", "Meaning", "Example"], rows: [
        ["[[pendant|pahn-DAHN]]", "for / during (a period, often finished)", "[[J'ai habité à Pune pendant deux ans.]] — I lived in Pune for two years (I don't live there now). [[pendant les vacances]] — during the holidays."],
        ["[[il y a|eel YAH]]", "ago", "[[Je suis arrivé / arrivée il y a trois jours.]] — I arrived three days ago."],
        ["[[dans|DAHN]]", "in (from now, in the future)", "[[Le train part dans dix minutes.]] — The train leaves in ten minutes."]
      ] } },
      { h: "en and à", table: { head: ["Word", "Used with", "Example"], rows: [
        ["[[en]]", "years", "[[en 2026]], [[Je suis né / née en 1998.]]"],
        ["[[en]]", "months", "[[en novembre]], [[en mai]]"],
        ["[[en]]", "seasons (but not spring!)", "[[en été]], [[en automne]], [[en hiver]] — but [[au printemps]]"],
        ["[[en]]", "how long something takes", "[[J'ai fait le trajet en deux heures.]] — I did the journey in two hours."],
        ["[[à]]", "clock times and some holidays", "[[à huit heures]] (written 8 h), [[à midi]], [[à Noël]]"]
      ] } },
      { h: "From… to…, until", examples: [
        { fr: "Je travaille de neuf heures à dix-sept heures.", en: "I work from 9 a.m. to 5 p.m. (written: de 9 h à 17 h)" },
        { fr: "J'ai cours du lundi au vendredi.", en: "I have classes from Monday to Friday." },
        { fr: "Le magasin est ouvert jusqu'à vingt heures.", en: "The shop is open until 8 p.m." },
        { fr: "Je suis en vacances jusqu'à lundi.", en: "I'm on holiday until Monday." }
      ] },
      { h: "Asking about time", examples: [
        { fr: "Depuis quand tu habites ici ?", en: "Since when have you lived here?" },
        { fr: "Depuis combien de temps tu apprends le français ?", en: "How long have you been learning French?" },
        { fr: "Pendant combien de temps il a habité à Paris ?", en: "How long did he live in Paris?" },
        { fr: "Le film commence dans combien de temps ?", en: "How long until the film starts?" }
      ] },
      { tip: "Picture a timeline. [[il y a]] points back to a moment in the past (<i>ago</i>). [[depuis]] is an arrow from the past that reaches <b>now</b> (still true → present tense). [[pendant]] is a closed box of time (<i>for two years</i>, then it stopped). [[dans]] points forward from now (<i>in ten minutes</i>). Answer a [[depuis]] question with [[depuis]]: [[Depuis combien de temps… ?]] → [[Depuis six mois.]]" },
      { h: "Use it: the DELF speaking test", dialogue: [
        ["L'examinatrice", "Vous habitez en France depuis combien de temps ?", "How long have you been living in France?"],
        ["Ravi", "J'habite à Lyon depuis six mois. Je suis arrivé en mai.", "I've been living in Lyon for six months. I arrived in May."],
        ["L'examinatrice", "Et vous apprenez le français depuis quand ?", "And since when have you been learning French?"],
        ["Ravi", "Depuis un an. J'ai commencé en Inde, à Bangalore. J'ai pris des cours pendant six mois.", "For a year. I started in India, in Bangalore. I took classes for six months."],
        ["L'examinatrice", "Vous rentrez en Inde quand ?", "When are you going back to India?"],
        ["Ravi", "Dans trois mois, en février. Je vais rester à Bangalore pendant un mois, puis je reviens à Lyon.", "In three months, in February. I'm going to stay in Bangalore for a month, then I'm coming back to Lyon."]
      ] }
    ],
    quiz: [
      { type: "mcq", q: "J'apprends le français ___ trois semaines. (and I'm still learning)", options: ["il y a", "depuis", "dans"], answer: 1, explain: "Started in the past, still true → [[depuis]] + present." },
      { type: "mcq", q: "He arrived three days ago. →", options: ["Il est arrivé depuis trois jours.", "Il est arrivé dans trois jours.", "Il est arrivé il y a trois jours."], answer: 2, explain: "<i>ago</i> = [[il y a]]." },
      { type: "fill", q: "Le train part ___ dix minutes. (in)", answer: ["dans"], explain: "<i>in</i> + time from now = [[dans]]." },
      { type: "fill", q: "Je suis né / née ___ 1998.", answer: ["en"], explain: "Years: [[en]]: [[en 1998]], [[en 2026]]." },
      { type: "listen", say: "J'ai habité à Pune pendant deux ans.", options: ["I lived in Pune for two years.", "I've been living in Pune for two years.", "I'm going to live in Pune in two years."], answer: 0, explain: "[[pendant]] + passé composé = a finished period. Now this person lives somewhere else." },
      { type: "order", words: ["Depuis", "combien", "de", "temps", "tu", "apprends", "le", "français ?"], en: "How long have you been learning French?" },
      { type: "mcq", q: "Which sentence is correct? (You still live there.)", options: ["J'ai habité ici depuis deux ans.", "J'habite ici pendant deux ans.", "J'habite ici depuis deux ans."], answer: 2, explain: "Still true now → [[depuis]] + present: [[J'habite ici depuis deux ans.]]" },
      { type: "fill", q: "Le magasin est ouvert ___ 20 heures. (until)", answer: ["jusqu'à", "jusqu’à"], explain: "<i>until</i> = [[jusqu'à]]." },
      { type: "listen", say: "On se voit dans une heure ?", options: ["We met an hour ago.", "Shall we meet in an hour?", "We've been waiting for an hour."], answer: 1, explain: "[[dans une heure]] = in an hour (from now)." },
      { type: "mcq", q: "___ été, il fait très chaud à Delhi.", options: ["Au", "En", "Dans"], answer: 1, explain: "Seasons: [[en été]], [[en automne]], [[en hiver]] — but [[au printemps]]." },
      { type: "speak", fr: "J'apprends le français depuis un mois.", en: "I've been learning French for a month." }
    ]
  },
  {
    id: "g-qui-que",
    cat: "grammar",
    title: "Joining sentences: qui and que",
    minutes: 15,
    summary: "Join two short sentences into one with qui and que (J'ai un ami qui habite à Paris. Le livre que je lis est super.) and use C'est… qui / que to highlight things.",
    sections: [
      { h: "Why it matters", p: "Short sentences are fine, but joining them makes your French sound much more natural. [[J'ai un ami. Il habite à Paris.]] → [[J'ai un ami qui habite à Paris.]] [[qui|KEE]] and [[que|KUH]] work like English <i>who, which, that</i>, for people <b>and</b> things." },
      { h: "The idea", p: "[[qui]] replaces the <b>subject</b>: the person or thing that <b>does</b> the action. So [[qui]] is followed directly by a verb. [[que]] replaces the <b>object</b>: the person or thing the action is <b>done to</b>. So [[que]] is followed by a new subject + verb." },
      { h: "qui = the one doing the action", examples: [
        { fr: "J'ai un ami qui habite à Paris.", en: "I have a friend who lives in Paris." },
        { fr: "C'est un film qui est très drôle.", en: "It's a film that is very funny." },
        { fr: "Je cherche un bus qui va à la gare.", en: "I'm looking for a bus that goes to the station." },
        { fr: "La femme qui parle avec Paul est ma prof.", en: "The woman who is talking to Paul is my teacher." }
      ] },
      { h: "que = the one receiving the action", examples: [
        { fr: "Le livre que je lis est super.", en: "The book (that) I'm reading is great." },
        { fr: "Le chai que tu fais est délicieux.", en: "The chai (that) you make is delicious." },
        { fr: "L'ami qu'elle aime habite à Delhi.", en: "The friend (that) she loves lives in Delhi." },
        { fr: "Les films que nous regardons sont en français.", en: "The films (that) we watch are in French." }
      ] },
      { tip: "Quick test — look at the next word. <b>qui + verb</b>: [[qui habite]], [[qui est]], [[qui va]]. <b>que + subject + verb</b>: [[que je lis]], [[que tu fais]], [[qu'elle aime]]. If a verb comes right after the gap, it's [[qui]]." },
      { warn: "English can drop <i>that</i>: <i>the book I'm reading</i>. French can <b>never</b> drop [[que]]: [[le livre que je lis]], not <s>le livre je lis</s>. And [[que]] becomes [[qu']] before a vowel ([[qu'elle]], [[qu'il]], [[qu'on]]), but [[qui]] <b>never</b> changes: [[l'ami qui arrive]], not <s>l'ami qu'arrive</s>." },
      { h: "Two sentences → one", table: { head: ["Two sentences", "One sentence"], rows: [
        ["[[J'ai une sœur. Elle parle quatre langues.]]", "[[J'ai une sœur qui parle quatre langues.]]"],
        ["[[Le restaurant est près de la gare. Il est très bon.]]", "[[Le restaurant qui est près de la gare est très bon.]]"],
        ["[[Je lis un livre. Il est super.]]", "[[Le livre que je lis est super.]]"],
        ["[[Ma mère prépare un plat. J'adore ce plat.]]", "[[J'adore le plat que ma mère prépare.]]"]
      ] } },
      { h: "C'est… qui / C'est… que: pointing at something", examples: [
        { fr: "Diwali, c'est la fête que je préfère.", en: "Diwali is the festival I like best." },
        { fr: "C'est mon frère qui cuisine à la maison.", en: "It's my brother who cooks at home." },
        { fr: "C'est le train qui va à Lyon ?", en: "Is this the train that goes to Lyon?" },
        { fr: "C'est la ville que je préfère.", en: "It's the city I like best." }
      ] },
      { h: "Use it: looking at photos", dialogue: [
        ["Chloé", "C'est qui, la fille qui porte un sari bleu ?", "Who's the girl wearing a blue sari?"],
        ["Kavya", "C'est ma cousine Diya. C'est elle qui habite à Londres.", "That's my cousin Diya. She's the one who lives in London."],
        ["Chloé", "Et le garçon qui danse ?", "And the boy who's dancing?"],
        ["Kavya", "C'est mon frère. Et ça, ce sont les sucreries que ma mère prépare pour Diwali.", "That's my brother. And these are the sweets my mother makes for Diwali."],
        ["Chloé", "Elles ont l'air délicieuses ! C'est une recette que je peux faire ?", "They look delicious! Is it a recipe I can make?"],
        ["Kavya", "Oui, c'est une recette qui est très facile. Je l'envoie ce soir !", "Yes, it's a recipe that's very easy. I'll send it tonight!"]
      ] }
    ],
    quiz: [
      { type: "mcq", q: "J'ai un ami ___ habite à Paris.", options: ["que", "qui", "qu'"], answer: 1, explain: "A verb comes next ([[habite]]) → [[qui]]." },
      { type: "mcq", q: "Le livre ___ je lis est super.", options: ["que", "qui", "quoi"], answer: 0, explain: "A subject comes next ([[je]]) → [[que]]." },
      { type: "fill", q: "C'est la ville ___ je préfère.", answer: ["que"], explain: "[[que]] + subject + verb: [[que je préfère]]." },
      { type: "fill", q: "Je cherche un bus ___ va à la gare.", answer: ["qui"], explain: "The bus does the action (goes) → [[qui va]]." },
      { type: "mcq", q: "L'ami ___ elle aime habite à Delhi.", options: ["qui", "que", "qu'"], answer: 2, explain: "[[que]] + [[elle]] → [[qu'elle]]." },
      { type: "listen", say: "C'est une actrice qui est très connue en Inde.", options: ["She's an actress I know in India.", "She's an actress who is very famous in India.", "She's an Indian actress who knows me."], answer: 1, explain: "[[qui est très connue]] = who is very famous." },
      { type: "order", words: ["Le", "chai", "que", "tu", "fais", "est", "délicieux."], en: "The chai you make is delicious." },
      { type: "mcq", q: "the friend who is arriving →", options: ["l'ami qu'arrive", "l'ami que arrive", "l'ami qui arrive"], answer: 2, explain: "A verb comes next → [[qui]], and [[qui]] never becomes <s>qu'</s>." },
      { type: "listen", say: "Le film qu'on a vu hier était super.", options: ["The film we saw yesterday was great.", "The film that's on tomorrow is great.", "We didn't see the film yesterday."], answer: 0, explain: "[[qu'on a vu]] = that we saw ([[on]] = we)." },
      { type: "fill", q: "Voici le cadeau ___ Anil a acheté pour toi.", answer: ["qu'", "qu’"], explain: "A subject comes next ([[Anil]]) → [[que]], and before a vowel → [[qu']]." },
      { type: "speak", fr: "J'ai une amie qui habite à Bangalore.", en: "I have a friend who lives in Bangalore." }
    ]
  },
  {
    id: "g-y-en",
    cat: "grammar",
    title: "Little pronouns y and en (intro)",
    minutes: 15,
    summary: "Recognise and use y (there) and en (some, of it, of them) in everyday phrases: On y va ! J'y vais. J'en veux. J'en ai deux. Il y en a beaucoup.",
    sections: [
      { h: "Why it matters", p: "[[y|EE]] and [[en|AHN]] are two tiny words that French people use all the time — you already know one: [[il y a]]! They save you from repeating a place or a thing. At A1, the goal is simple: <b>recognise</b> them when you hear them and <b>use</b> the common fixed expressions. You'll go deeper later." },
      { h: "y = there", p: "[[y]] replaces a <b>place</b> that was just mentioned (after [[à]], [[en]], [[chez]], [[dans]]…). Like [[le]], [[la]], [[les]], it goes <b>before</b> the verb: [[Tu vas à Paris ?]] → [[Oui, j'y vais.|wee zhee VEH]] (Yes, I'm going there.)" },
      { examples: [
        { fr: "Tu vas à Paris ? — Oui, j'y vais demain.", en: "Are you going to Paris? — Yes, I'm going (there) tomorrow." },
        { fr: "Tu habites à Mumbai ? — Oui, j'y habite depuis cinq ans.", en: "Do you live in Mumbai? — Yes, I've lived there for five years." },
        { fr: "Elle est chez elle ? — Non, elle n'y est pas.", en: "Is she at home? — No, she isn't (there)." }
      ] },
      { h: "Fixed expressions with y", table: { head: ["French", "English"], rows: [
        ["[[On y va !|ohn-nee VAH]]", "Let's go! / Here we go!"],
        ["[[Allons-y !|ah-lohn-ZEE]]", "Let's go!"],
        ["[[Vas-y !|vah-ZEE]]", "Go on! / Go for it!"],
        ["[[J'y vais.|zhee VEH]]", "I'm off. / I'm going (there)."],
        ["[[Ça y est !|sah YEH]]", "That's it! / Done!"],
        ["[[il y a|eel YAH]]", "there is / there are"]
      ] } },
      { h: "en = some, any, of it, of them", p: "[[en]] replaces [[du]], [[de la]], [[de l']], [[des]] + a thing — an amount of something. English says <i>some</i>, <i>any</i> or often nothing at all. It also goes <b>before</b> the verb: [[Tu veux du café ?]] → [[Oui, j'en veux.|wee zhahn VUH]] (Yes, I'd like some.)" },
      { examples: [
        { fr: "Il y a du lait ? — Non, il n'y en a pas.", en: "Is there any milk? — No, there isn't any." },
        { fr: "Tu as des enfants ? — Oui, j'en ai.", en: "Do you have children? — Yes, I do." },
        { fr: "Vous voulez de l'eau ? — Non merci, je n'en veux pas.", en: "Would you like some water? — No thanks, I don't want any." }
      ] },
      { h: "en with numbers and quantities", table: { head: ["Question", "Answer with en", "English"], rows: [
        ["[[Tu as des frères ?]]", "[[Oui, j'en ai deux.]]", "Yes, I have two."],
        ["[[Combien de pommes voulez-vous ?]]", "[[J'en prends deux.]]", "I'll take two."],
        ["[[Il y a beaucoup de monde ?]]", "[[Oui, il y en a beaucoup.]]", "Yes, there are lots (of people)."],
        ["[[Tu bois du chai ?]]", "[[Oui, j'en bois trois tasses par jour !]]", "Yes, I drink three cups a day!"]
      ] } },
      { warn: "Don't forget [[en]] when you give a number! English says <i>I have two</i>, but French needs [[en]]: [[J'ai deux frères.]] → [[J'en ai deux.]] Never <s>J'ai deux.</s> And [[un]] / [[une]] count as numbers: [[Tu as une voiture ? — Oui, j'en ai une.]]" },
      { tip: "Position, in short: before the conjugated verb, glued to it. Negative: [[Je n'y vais pas.]] [[Je n'en veux pas.]] With an infinitive, before the infinitive: [[Je vais y aller.]] [[Tu peux en acheter ?]] (Can you buy some?) Listen for the links: [[on y va]] sounds like <i>ohn-nee-vah</i> and [[il y en a]] like <i>eel-yahn-nah</i>." },
      { h: "Use it: at the market", dialogue: [
        ["Le vendeur", "Bonjour ! Qu'est-ce que vous voulez ?", "Hello! What would you like?"],
        ["Meera", "Bonjour ! Vous avez des mangues ?", "Hello! Do you have any mangoes?"],
        ["Le vendeur", "Oui, j'en ai. Elles viennent d'Inde ! Vous en voulez combien ?", "Yes, I have some. They come from India! How many would you like?"],
        ["Meera", "J'en prends trois, s'il vous plaît. Et du fromage, vous en avez ?", "I'll take three, please. And cheese, do you have any?"],
        ["Le vendeur", "Ah non, désolé, je n'en ai pas. Mais il y a une fromagerie à côté.", "Ah no, sorry, I don't have any. But there's a cheese shop next door."],
        ["Meera", "Super, j'y vais tout de suite. Merci !", "Great, I'll go there right away. Thanks!"]
      ] }
    ],
    quiz: [
      { type: "mcq", q: "Tu vas à Paris ? — Oui, j'___ vais.", options: ["en", "y", "le"], answer: 1, explain: "A place → [[y]]: [[J'y vais.]]" },
      { type: "mcq", q: "Tu veux du café ? — Oui, j'___ veux.", options: ["y", "le", "en"], answer: 2, explain: "[[du café]] (an amount) → [[en]]: [[J'en veux.]]" },
      { type: "fill", q: "J'ai deux frères. → J'___ ai deux.", answer: ["en"], explain: "With a number, keep the number and add [[en]]: [[J'en ai deux.]]" },
      { type: "listen", say: "On y va !", options: ["Let's go!", "We're there!", "Go away!"], answer: 0, explain: "[[On y va !]] = Let's go! You'll hear it every day in France." },
      { type: "order", words: ["Il", "n'y", "en", "a", "pas."], en: "There isn't any." },
      { type: "fill", q: "Tu habites à Delhi ? — Oui, j'___ habite depuis deux ans.", answer: ["y"], explain: "A place (à Delhi) → [[y]]: [[J'y habite.]]" },
      { type: "mcq", q: "Des pommes ? I'll take three. →", options: ["J'y prends trois.", "Je prends trois en.", "J'en prends trois."], answer: 2, explain: "[[en]] before the verb, the number at the end: [[J'en prends trois.]]" },
      { type: "listen", say: "Il y en a beaucoup.", options: ["There isn't any.", "There are lots of them.", "He has a lot of them."], answer: 1, explain: "[[il y en a]] = there is / are some; [[beaucoup]] = lots." },
      { type: "mcq", q: "Tu vas au marché ? — Non, je ___ vais pas.", options: ["n'en", "n'y", "ne le"], answer: 1, explain: "A place → [[y]]; negative: [[Je n'y vais pas.]]" },
      { type: "fill", q: "Tu as une voiture ? — Oui, j'en ai ___.", answer: ["une"], explain: "[[une]] counts as a number: [[J'en ai une.]]" },
      { type: "speak", fr: "Du chai ? Oui, j'en bois tous les jours.", en: "Chai? Yes, I drink some every day." }
    ]
  }
]);
