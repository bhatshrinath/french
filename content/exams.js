/* DELF A1 mock exams — original practice material (not taken from any real exam paper).

   Shape of one exam object (read by assets/js/views/exam.js):
   {
     id: "mock1",
     title: "DELF A1 — Mock exam 1",
     intro: "Plain English text: how the exam works, timing, pass mark.",
     sections: [                       // exactly 4, in this order
       { skill: "listening", title: "Compréhension de l'oral", minutes: 20,
         instructions: "Plain text, English + French",
         parts: [                      // 4 parts, 3–6 questions each
           { title: "Exercice 1 — …", instructions: "…",
             audio: [["F", "plain French text"], ["M", "…"], ["N", "…"]],   // F female, M male, N narrator; the app plays it twice
             questions: [ { q: "French question", qEn: "English translation", options: ["…", "…", "…"], answer: 1 } ] }
         ] },
       { skill: "reading", title: "Compréhension des écrits", minutes: 30, instructions: "…",
         parts: [                      // 4 parts
           { title: "…", instructions: "…", text: "HTML document: email, notice, ad, timetable (only <b>, <br> etc.)",
             questions: [ { q, qEn, options, answer } ] }
         ] },
       { skill: "writing", title: "Production écrite", minutes: 30, instructions: "…",
         parts: [
           { title: "Exercice 1 — Compléter une fiche", type: "form", instructions: "…", context: "HTML situation text",
             fields: [ { label: "Nom", hint: "English hint", example: "example answer" } ] },          // 8–10 fields
           { title: "Exercice 2 — Écrire un message", type: "text", instructions: "…",
             prompt: "French task (40–50 words)", promptEn: "English translation", minWords: 40,
             model: "model answer of about 50 words", checklist: ["English self-check items"] }
         ] },
       { skill: "speaking", title: "Production orale", minutes: 10, instructions: "…",
         parts: [
           { title: "Partie 1 — Entretien dirigé", instructions: "…", prompts: ["question", …], model: ["model answer per prompt", …] },
           { title: "Partie 2 — Échange d'informations", instructions: "…", prompts: ["Keyword ?", …], model: ["a question built from each keyword", …] },
           { title: "Partie 3 — Dialogue simulé", instructions: "…", prompts: ["French situation with prices"],
             model: [["A", "examiner line"], ["B", "candidate line"], …] }      // A = examiner, B = candidate
         ] }
     ]
   }
   - answer = 0-based index of the right option (the app does not shuffle, so vary it).
   - Audio, prompts and models are plain text (they are read aloud). Times and prices in audio
     are written in words so that text-to-speech reads them correctly.
   - Scoring: each skill is marked out of 25. Pass = 50/100 overall AND at least 5/25 in every skill. */
A1.addExams([
  {
    id: "mock1",
    title: "DELF A1 — Mock exam 1",
    intro: "This mock exam has the same four parts as the real DELF A1, each marked out of 25: listening (about 20 minutes), reading (30 minutes), writing (30 minutes) and speaking (5 to 7 minutes, after 10 minutes of preparation). To pass, you need 50/100 in total and at least 5/25 in each skill. In the listening part, each recording is played twice, so read the questions before you listen. Work without a dictionary and keep to the time limits.",
    sections: [
      {
        skill: "listening",
        title: "Compréhension de l'oral",
        minutes: 20,
        instructions: "You will hear four short recordings. Each one is played twice. Read the questions first, then choose the right answer. — Vous allez entendre quatre documents. Chaque document est lu deux fois. Lisez les questions, écoutez, puis choisissez la bonne réponse.",
        parts: [
          {
            title: "Exercice 1 — Un message sur le répondeur",
            instructions: "Vous écoutez un message sur votre répondeur. Répondez aux questions. (You hear a voicemail from a friend.)",
            audio: [
              ["F", "Bonjour Karim, c'est Sophie. Je t'appelle pour samedi : on fête l'anniversaire de Marc chez moi, à dix-neuf heures. Est-ce que tu peux apporter une boisson ? Moi, je fais un gâteau au chocolat. Mon adresse, c'est quatorze, rue des Lilas, au troisième étage. Si tu as un problème, appelle-moi au zéro six, quarante-cinq, trente-deux, dix-huit, soixante-dix. À samedi !"]
            ],
            questions: [
              { q: "La fête a lieu quel jour ?", qEn: "Which day is the party?", options: ["Vendredi.", "Samedi.", "Dimanche."], answer: 1 },
              { q: "À quelle heure commence la fête ?", qEn: "What time does the party start?", options: ["À 17 h.", "À 18 h.", "À 19 h."], answer: 2 },
              { q: "Qu'est-ce que Karim doit apporter ?", qEn: "What does Karim have to bring?", options: ["Une boisson.", "Un gâteau.", "Des fleurs."], answer: 0 },
              { q: "Sophie habite à quel étage ?", qEn: "Which floor does Sophie live on?", options: ["Au premier étage.", "Au deuxième étage.", "Au troisième étage."], answer: 2 },
              { q: "Quel est le numéro de téléphone de Sophie ?", qEn: "What is Sophie's phone number?", options: ["06 45 32 18 70", "06 45 23 18 17", "06 54 32 80 70"], answer: 0 }
            ]
          },
          {
            title: "Exercice 2 — Une annonce à la gare",
            instructions: "Vous êtes à la gare. Vous entendez cette annonce. Répondez aux questions. (A station announcement.)",
            audio: [
              ["N", "Mesdames et messieurs, votre attention, s'il vous plaît. Le TGV à destination de Marseille, prévu au départ à quatorze heures douze, partira avec un retard d'environ vingt minutes. Il partira voie sept. Le bar se trouve en voiture quatre. Nous vous prions de nous excuser pour ce retard."]
            ],
            questions: [
              { q: "Ce train va à…", qEn: "This train is going to…", options: ["Lyon.", "Marseille.", "Montpellier."], answer: 1 },
              { q: "Le train a combien de minutes de retard ?", qEn: "How many minutes late is the train?", options: ["10 minutes.", "15 minutes.", "20 minutes."], answer: 2 },
              { q: "Le train part de quelle voie ?", qEn: "Which track does the train leave from?", options: ["Voie 7.", "Voie 4.", "Voie 17."], answer: 0 },
              { q: "Où est le bar ?", qEn: "Where is the bar?", options: ["En voiture 2.", "En voiture 4.", "En voiture 7."], answer: 1 }
            ]
          },
          {
            title: "Exercice 3 — Une annonce au supermarché",
            instructions: "Vous faites vos courses. Vous entendez cette annonce dans le magasin. Répondez aux questions. (A supermarket announcement.)",
            audio: [
              ["F", "Chers clients, bonjour ! Cette semaine, au rayon fruits et légumes, les fraises sont à trois euros la barquette. Au rayon boulangerie, pour deux baguettes achetées, la troisième est offerte. Et attention : aujourd'hui, votre magasin ferme exceptionnellement à dix-huit heures. Les caisses automatiques se trouvent à côté de la sortie. Merci et bonnes courses !"]
            ],
            questions: [
              { q: "Combien coûte une barquette de fraises ?", qEn: "How much is a punnet of strawberries?", options: ["2 €.", "3 €.", "4 €."], answer: 1 },
              { q: "Pour deux baguettes achetées, le magasin offre…", qEn: "When you buy two baguettes, the shop gives you…", options: ["un croissant.", "une boisson.", "une baguette."], answer: 2 },
              { q: "Aujourd'hui, le magasin ferme à quelle heure ?", qEn: "What time does the shop close today?", options: ["À 18 h.", "À 19 h.", "À 20 h."], answer: 0 },
              { q: "Où sont les caisses automatiques ?", qEn: "Where are the self-service checkouts?", options: ["À l'entrée.", "Au rayon boulangerie.", "À côté de la sortie."], answer: 2 }
            ]
          },
          {
            title: "Exercice 4 — Quatre petits dialogues",
            instructions: "Vous entendez quatre petits dialogues. Répondez aux questions. (Four short everyday dialogues.)",
            audio: [
              ["N", "Dialogue un."],
              ["M", "Bonjour, je voudrais un kilo de carottes, s'il vous plaît."],
              ["F", "Voilà. Ça fait deux euros."],
              ["N", "Dialogue deux."],
              ["F", "Pardon, monsieur, la rue Victor-Hugo, s'il vous plaît ?"],
              ["M", "C'est la première rue à droite, après la poste."],
              ["N", "Dialogue trois."],
              ["F", "Alors, vous avez mal où ?"],
              ["M", "J'ai mal au dos depuis trois jours, docteur."],
              ["N", "Dialogue quatre."],
              ["M", "Deux places pour le film de vingt heures, s'il vous plaît."],
              ["F", "Voilà. Ça fait vingt-quatre euros."]
            ],
            questions: [
              { q: "Dialogue 1 : où sont ces personnes ?", qEn: "Dialogue 1: where are these people?", options: ["Au marché.", "À la pharmacie.", "À la gare."], answer: 0 },
              { q: "Dialogue 2 : qu'est-ce que la femme cherche ?", qEn: "Dialogue 2: what is the woman looking for?", options: ["La poste.", "Une rue.", "Un taxi."], answer: 1 },
              { q: "Dialogue 3 : où est l'homme ?", qEn: "Dialogue 3: where is the man?", options: ["À la banque.", "Chez le médecin.", "Au cinéma."], answer: 1 },
              { q: "Dialogue 4 : combien paie l'homme ?", qEn: "Dialogue 4: how much does the man pay?", options: ["12 €.", "20 €.", "24 €."], answer: 2 },
              { q: "Dialogue 4 : le film commence à quelle heure ?", qEn: "Dialogue 4: what time does the film start?", options: ["À 18 h.", "À 20 h.", "À 22 h."], answer: 1 }
            ]
          }
        ]
      },
      {
        skill: "reading",
        title: "Compréhension des écrits",
        minutes: 30,
        instructions: "Read the four documents and answer the questions by choosing the right answer. — Lisez les documents, puis répondez aux questions.",
        parts: [
          {
            title: "Exercice 1 — Un courriel",
            instructions: "Vous recevez ce courriel d'une amie française. Répondez aux questions. (An email from a French friend.)",
            text: "<b>De :</b> Julie<br><b>À :</b> Anjali<br><b>Objet :</b> Week-end à Annecy<br><br>Salut Anjali,<br><br>Tu es libre le week-end du 14 juin ? Avec Paul, on va à Annecy, à la montagne. On part samedi matin à 8 heures, en voiture. Samedi après-midi, on fait une randonnée et le soir, on dort chez ma tante. Dimanche, on fait du bateau sur le lac. Apporte des chaussures de marche et un maillot de bain ! On rentre dimanche vers 19 heures.<br><br>Réponds-moi avant mercredi, s'il te plaît.<br><br>Bises,<br>Julie",
            questions: [
              { q: "Julie propose à Anjali…", qEn: "Julie suggests to Anjali…", options: ["une soirée au restaurant.", "un week-end à la montagne.", "un voyage à la mer."], answer: 1 },
              { q: "Comment est-ce qu'ils voyagent ?", qEn: "How are they travelling?", options: ["En train.", "En bus.", "En voiture."], answer: 2 },
              { q: "Où est-ce qu'ils dorment samedi soir ?", qEn: "Where are they sleeping on Saturday night?", options: ["Chez la tante de Julie.", "À l'hôtel.", "Dans un camping."], answer: 0 },
              { q: "Qu'est-ce qu'Anjali doit apporter ?", qEn: "What does Anjali have to bring?", options: ["Un vélo et un sac.", "Des chaussures de marche et un maillot de bain.", "Un manteau et des gants."], answer: 1 },
              { q: "Anjali doit répondre avant…", qEn: "Anjali must reply before…", options: ["samedi.", "lundi.", "mercredi."], answer: 2 }
            ]
          },
          {
            title: "Exercice 2 — Une affiche",
            instructions: "Vous lisez cette affiche à l'entrée de la piscine. Répondez aux questions. (A notice at a swimming pool.)",
            text: "<b>PISCINE MUNICIPALE DES LILAS</b><br><br><b>Horaires d'été (du 1er juillet au 31 août)</b><br>Du lundi au vendredi : de 10 h à 20 h<br>Samedi et dimanche : de 9 h à 19 h<br>Fermée le 14 juillet<br><br><b>Tarifs</b><br>Adultes : 4,50 €<br>Enfants (moins de 12 ans) : 2,50 €<br>Carte de 10 entrées : 38 €<br><br>Bonnet de bain obligatoire.<br>Interdit de manger au bord du bassin.",
            questions: [
              { q: "Le samedi, la piscine ouvre à quelle heure ?", qEn: "On Saturdays, what time does the pool open?", options: ["À 9 h.", "À 10 h.", "À 19 h."], answer: 0 },
              { q: "Quel jour est-ce que la piscine est fermée ?", qEn: "Which day is the pool closed?", options: ["Le 1er juillet.", "Le 14 juillet.", "Le 31 août."], answer: 1 },
              { q: "Un adulte et un enfant de 8 ans paient…", qEn: "An adult and an 8-year-old child pay…", options: ["5 €.", "6 €.", "7 €."], answer: 2 },
              { q: "Dans la piscine, il faut porter…", qEn: "In the pool, you must wear…", options: ["un bonnet de bain.", "des lunettes.", "un tee-shirt."], answer: 0 }
            ]
          },
          {
            title: "Exercice 3 — Une petite annonce",
            instructions: "Vous cherchez un logement. Vous lisez cette annonce. Répondez aux questions. (A flat-to-rent ad.)",
            text: "<b>À LOUER — Studio meublé, centre-ville de Rennes</b><br>25 m², 2e étage avec ascenseur<br>Cuisine équipée, salle de bains avec douche<br>À 5 minutes à pied de la gare et du métro<br>Loyer : 520 € par mois, charges comprises<br>Libre le 1er septembre<br>Idéal pour un étudiant ou une étudiante<br>Pas d'animaux<br>Visites le samedi, de 10 h à 12 h<br>Contact : M. Leroy, 02 99 45 61 23 (après 18 h)",
            questions: [
              { q: "Le studio est à quel étage ?", qEn: "Which floor is the studio on?", options: ["Au rez-de-chaussée.", "Au premier étage.", "Au deuxième étage."], answer: 2 },
              { q: "Combien coûte le studio par mois ?", qEn: "How much does the studio cost per month?", options: ["250 €.", "520 €.", "525 €."], answer: 1 },
              { q: "Qu'est-ce qui est interdit ?", qEn: "What is not allowed?", options: ["Les animaux.", "Les étudiants.", "Les visites."], answer: 0 },
              { q: "Quand est-ce qu'on peut visiter le studio ?", qEn: "When can you visit the studio?", options: ["Le dimanche matin.", "Le samedi après-midi.", "Le samedi matin."], answer: 2 },
              { q: "On peut téléphoner à M. Leroy…", qEn: "You can phone Mr Leroy…", options: ["avant 18 h.", "après 18 h.", "seulement à midi."], answer: 1 }
            ]
          },
          {
            title: "Exercice 4 — Un programme",
            instructions: "Vous lisez le programme de la médiathèque de votre ville. Répondez aux questions. (A library's events programme.)",
            text: "<b>MÉDIATHÈQUE MUNICIPALE — SEMAINE DE L'INDE</b><br>Du lundi 5 au samedi 10 octobre<br><br><b>Lundi, 18 h 30 :</b> film indien en hindi, sous-titré en français (salle 1)<br><b>Mercredi, 15 h :</b> atelier cuisine pour les enfants de 8 à 12 ans : on prépare un chai ! (salle 3)<br><b>Jeudi, 20 h :</b> concert de sitar (auditorium)<br><b>Samedi, de 10 h à 17 h :</b> marché indien : épices, livres et vêtements (jardin de la médiathèque)<br><br>Toutes les activités sont gratuites.<br>Atelier cuisine : inscription obligatoire à l'accueil (12 places).",
            questions: [
              { q: "Quel jour est le concert ?", qEn: "Which day is the concert?", options: ["Lundi.", "Mercredi.", "Jeudi."], answer: 2 },
              { q: "Le film est en quelle langue ?", qEn: "What language is the film in?", options: ["En hindi.", "En français.", "En anglais."], answer: 0 },
              { q: "L'atelier cuisine est pour…", qEn: "The cooking workshop is for…", options: ["les adultes.", "les enfants.", "les familles."], answer: 1 },
              { q: "Pour participer à l'atelier cuisine, il faut…", qEn: "To take part in the cooking workshop, you must…", options: ["payer 12 €.", "apporter du thé.", "s'inscrire à l'accueil."], answer: 2 },
              { q: "Où est le marché indien ?", qEn: "Where is the Indian market?", options: ["Dans le jardin.", "Dans la salle 1.", "À l'auditorium."], answer: 0 }
            ]
          }
        ]
      },
      {
        skill: "writing",
        title: "Production écrite",
        minutes: 30,
        instructions: "Two tasks: fill in a form, then write a short message of 40 to 50 words. Keep a few minutes at the end to check accents and verb endings. — Complétez la fiche, puis écrivez un message de 40 à 50 mots.",
        parts: [
          {
            title: "Exercice 1 — Compléter une fiche",
            type: "form",
            instructions: "Complétez la fiche d'inscription avec vos informations personnelles. (Fill in the registration form with your own details.)",
            context: "<b>École de langues du Centre — Fiche d'inscription</b><br>Vous habitez à Lyon depuis un mois. Vous voulez suivre un cours de français pour adultes, le soir. Vous complétez la fiche d'inscription de l'école.",
            fields: [
              { label: "Nom", hint: "Your surname", example: "SHARMA" },
              { label: "Prénom", hint: "Your first name", example: "Kiran" },
              { label: "Date de naissance", hint: "Day / month / year", example: "12/03/1994" },
              { label: "Nationalité", hint: "Choose the form that matches you; no capital letter", example: "indien (m.) / indienne (f.)" },
              { label: "Adresse", hint: "Number, street, postcode, town", example: "8, rue Victor-Hugo, 69002 Lyon" },
              { label: "Téléphone", hint: "Written in pairs of digits", example: "06 12 34 56 78" },
              { label: "Adresse e-mail", hint: "Your email address", example: "prenom.nom@exemple.fr" },
              { label: "Profession", hint: "Your job, or étudiant / étudiante", example: "comptable" },
              { label: "Langues parlées", hint: "The languages you speak", example: "hindi, anglais, un peu français" },
              { label: "Pourquoi apprenez-vous le français ?", hint: "One short reason", example: "Pour travailler en France." }
            ]
          },
          {
            title: "Exercice 2 — Écrire un message",
            type: "text",
            instructions: "Écrivez un message de 40 à 50 mots. (Write 40 to 50 words.)",
            prompt: "Vous partez en vacances une semaine. Vous écrivez un message à votre voisine, Madame Petit. Vous lui demandez d'arroser vos plantes et de prendre votre courrier. Vous donnez les dates de votre absence et vous la remerciez.",
            promptEn: "You are going on holiday for a week. Write a message to your neighbour, Madame Petit. Ask her to water your plants and to take in your post. Give the dates when you will be away and thank her.",
            minWords: 40,
            model: "Bonjour Madame Petit, je pars en vacances en Bretagne du 12 au 19 juillet. Est-ce que vous pouvez arroser mes plantes deux fois par semaine et prendre mon courrier, s'il vous plaît ? La clé est dans votre boîte aux lettres. Merci beaucoup et à bientôt ! Kiran",
            checklist: [
              "I started with a greeting (Bonjour Madame Petit) and signed my message.",
              "I gave the dates when I am away (du … au …).",
              "I asked for both things politely (Est-ce que vous pouvez… ? / s'il vous plaît).",
              "I thanked my neighbour (Merci beaucoup !).",
              "I used vous, not tu, for a neighbour.",
              "I wrote at least 40 words and checked my accents and verb endings."
            ]
          }
        ]
      },
      {
        skill: "speaking",
        title: "Production orale",
        minutes: 17,
        instructions: "Three parts, 5 to 7 minutes in all. You have 10 minutes to prepare parts 2 and 3 (but not part 1). Speak aloud, record yourself if you can, then compare with the model answers. — L'épreuve a trois parties : entretien dirigé, échange d'informations et dialogue simulé.",
        parts: [
          {
            title: "Partie 1 — Entretien dirigé",
            instructions: "The examiner asks you questions about yourself. Answer each one with a full sentence. — Répondez aux questions de l'examinateur.",
            prompts: [
              "Bonjour. Comment vous appelez-vous ?",
              "Comment ça s'écrit ?",
              "Quel âge avez-vous ?",
              "Quelle est votre nationalité ?",
              "Où est-ce que vous habitez ?",
              "Qu'est-ce que vous faites dans la vie ?",
              "Quelles langues est-ce que vous parlez ?",
              "Qu'est-ce que vous aimez faire le week-end ?",
              "Pourquoi est-ce que vous apprenez le français ?"
            ],
            model: [
              "Bonjour. Je m'appelle Kiran Sharma.",
              "Kiran, ça s'écrit K, I, R, A, N, et Sharma, S, H, A, R, M, A.",
              "J'ai trente ans.",
              "Je suis de nationalité indienne.",
              "J'habite à Pune, en Inde, avec ma famille.",
              "Je travaille dans une entreprise d'informatique.",
              "Je parle marathi, hindi, anglais et un peu français.",
              "Le week-end, j'aime faire du vélo, regarder des films et voir mes amis.",
              "J'apprends le français parce que je voudrais étudier en France."
            ]
          },
          {
            title: "Partie 2 — Échange d'informations",
            instructions: "You get cards with one word on each. For each card, ask the examiner a question using that word. Use vous. — Posez une question à l'examinateur avec chaque mot.",
            prompts: ["Travail ?", "Sport ?", "Enfants ?", "Musique ?", "Habiter ?", "Week-end ?", "Animal ?", "Cuisine ?", "Vacances ?"],
            model: [
              "Qu'est-ce que vous faites comme travail ?",
              "Vous faites du sport ?",
              "Vous avez des enfants ?",
              "Quelle musique est-ce que vous aimez ?",
              "Où est-ce que vous habitez ?",
              "Qu'est-ce que vous faites le week-end ?",
              "Vous avez un animal ?",
              "Vous aimez faire la cuisine ?",
              "Où est-ce que vous partez en vacances ?"
            ]
          },
          {
            title: "Partie 3 — Dialogue simulé",
            instructions: "Act out the situation with the examiner, who plays the stallholder. Greet, ask prices, choose quantities, pay and say goodbye. — Jouez la situation avec l'examinateur.",
            prompts: [
              "Vous êtes au marché. Vous achetez des produits pour un pique-nique. Les pommes sont à deux euros cinquante le kilo, les tomates à trois euros le kilo, les fraises à quatre euros la barquette et le fromage à cinq euros le morceau. Vous demandez les prix, vous choisissez les quantités et vous payez."
            ],
            model: [
              ["A", "Bonjour ! Vous désirez ?"],
              ["B", "Bonjour. Elles sont à combien, les pommes ?"],
              ["A", "Deux euros cinquante le kilo."],
              ["B", "Je voudrais un kilo de pommes et un kilo de tomates, s'il vous plaît."],
              ["A", "Voilà. Et avec ceci ?"],
              ["B", "Une barquette de fraises et un morceau de fromage."],
              ["A", "Très bien. Ce sera tout ?"],
              ["B", "Oui, c'est tout. Ça fait combien ?"],
              ["A", "Ça fait quatorze euros cinquante."],
              ["B", "Voilà quinze euros."],
              ["A", "Et voici cinquante centimes. Bon pique-nique !"],
              ["B", "Merci, au revoir !"]
            ]
          }
        ]
      }
    ]
  },
  {
    id: "mock2",
    title: "DELF A1 — Mock exam 2",
    intro: "This second mock exam uses new situations but follows the same DELF A1 rules: four skills, each marked out of 25. The listening, reading and writing papers take 1 hour 20 minutes in total (20 + 30 + 30 minutes); the speaking test lasts 5 to 7 minutes, after 10 minutes of preparation. You pass with 50/100 overall and at least 5/25 in every skill. Each recording is played twice. Try to do the whole exam in one sitting, as on the real day.",
    sections: [
      {
        skill: "listening",
        title: "Compréhension de l'oral",
        minutes: 20,
        instructions: "You will hear four short recordings. Each one is played twice. Read the questions first, then choose the right answer. — Vous allez entendre quatre documents. Chaque document est lu deux fois. Lisez les questions, écoutez, puis choisissez la bonne réponse.",
        parts: [
          {
            title: "Exercice 1 — Un message sur le répondeur",
            instructions: "Vous écoutez un message sur votre répondeur. Répondez aux questions. (A voicemail from a doctor's surgery.)",
            audio: [
              ["F", "Bonjour, ici le cabinet du docteur Lambert. Je vous appelle pour votre rendez-vous de mardi, à dix heures. Le docteur est absent ce jour-là. Nous vous proposons un nouveau rendez-vous jeudi, à quinze heures quarante-cinq. Si ce n'est pas possible pour vous, rappelez-nous au zéro un, quarante-trois, vingt-sept, soixante-cinq, quatre-vingt-dix, du lundi au vendredi, de neuf heures à dix-huit heures. Merci et bonne journée !"]
            ],
            questions: [
              { q: "Qui appelle ?", qEn: "Who is calling?", options: ["Une amie.", "Le cabinet d'un médecin.", "Une pharmacie."], answer: 1 },
              { q: "Le premier rendez-vous était quel jour ?", qEn: "Which day was the first appointment?", options: ["Mardi.", "Mercredi.", "Jeudi."], answer: 0 },
              { q: "À quelle heure est le nouveau rendez-vous ?", qEn: "What time is the new appointment?", options: ["À 10 h.", "À 15 h 15.", "À 15 h 45."], answer: 2 },
              { q: "Quel est le numéro de téléphone du cabinet ?", qEn: "What is the surgery's phone number?", options: ["01 43 27 65 90", "01 34 27 56 90", "01 43 72 65 19"], answer: 0 },
              { q: "On peut téléphoner au cabinet…", qEn: "You can phone the surgery…", options: ["le samedi.", "tous les jours.", "du lundi au vendredi."], answer: 2 }
            ]
          },
          {
            title: "Exercice 2 — Une annonce à l'aéroport",
            instructions: "Vous êtes à l'aéroport. Vous entendez cette annonce. Répondez aux questions. (An airport announcement.)",
            audio: [
              ["N", "Mesdames et messieurs, votre attention, s'il vous plaît. Les passagers du vol à destination de Nice, départ prévu à dix heures quarante-cinq, sont priés de se présenter porte trente-deux. L'embarquement commence à dix heures quinze. Attention : le départ se fait porte trente-deux, et non porte vingt-trois. Merci de préparer votre carte d'embarquement et une pièce d'identité."]
            ],
            questions: [
              { q: "Ce vol va à…", qEn: "This flight is going to…", options: ["Nantes.", "Nice.", "Nîmes."], answer: 1 },
              { q: "Les passagers doivent aller à quelle porte ?", qEn: "Which gate must the passengers go to?", options: ["Porte 23.", "Porte 22.", "Porte 32."], answer: 2 },
              { q: "L'embarquement commence à quelle heure ?", qEn: "What time does boarding start?", options: ["À 10 h 15.", "À 10 h 45.", "À 11 h 15."], answer: 0 },
              { q: "Qu'est-ce que les passagers doivent préparer ?", qEn: "What must the passengers have ready?", options: ["Leur valise et leur billet de train.", "Leur carte d'embarquement et une pièce d'identité.", "Leur carte bancaire."], answer: 1 },
              { q: "L'avion part à quelle heure ?", qEn: "What time does the plane leave?", options: ["À 10 h 15.", "À 10 h 30.", "À 10 h 45."], answer: 2 }
            ]
          },
          {
            title: "Exercice 3 — La météo à la radio",
            instructions: "Vous écoutez la météo à la radio. Répondez aux questions. (A radio weather forecast.)",
            audio: [
              ["F", "Et voici la météo pour demain, samedi. Dans le nord de la France, il va pleuvoir toute la journée, avec onze degrés à Lille. À Paris, il y a des nuages le matin, mais l'après-midi, il fait beau : dix-huit degrés. Dans le sud, grand soleil ! Il fait vingt-six degrés à Marseille. Attention, à Nice, il y a beaucoup de vent. Bon week-end à tous !"]
            ],
            questions: [
              { q: "Cette météo est pour quel jour ?", qEn: "Which day is this forecast for?", options: ["Vendredi.", "Samedi.", "Dimanche."], answer: 1 },
              { q: "Quel temps fait-il à Lille ?", qEn: "What is the weather like in Lille?", options: ["Il pleut.", "Il fait beau.", "Il neige."], answer: 0 },
              { q: "À Paris, l'après-midi, il fait…", qEn: "In Paris, in the afternoon, it is…", options: ["11 degrés.", "26 degrés.", "18 degrés."], answer: 2 },
              { q: "Dans quelle ville est-ce qu'il y a du vent ?", qEn: "In which city is it windy?", options: ["À Marseille.", "À Nice.", "À Paris."], answer: 1 }
            ]
          },
          {
            title: "Exercice 4 — Quatre petits dialogues",
            instructions: "Vous entendez quatre petits dialogues. Répondez aux questions. (Four short everyday dialogues.)",
            audio: [
              ["N", "Dialogue un."],
              ["F", "Bonjour, je voudrais envoyer ce paquet en Inde, s'il vous plaît."],
              ["M", "Oui. Par avion, ça fait vingt-deux euros."],
              ["N", "Dialogue deux."],
              ["M", "Pardon, madame, je cherche un livre pour apprendre le français."],
              ["F", "Les livres de langues sont au premier étage, à gauche."],
              ["N", "Dialogue trois."],
              ["F", "Tu veux un café ou un thé ?"],
              ["M", "Un thé, s'il te plaît. Avec du lait !"],
              ["N", "Dialogue quatre."],
              ["M", "Un aller simple pour Bordeaux, s'il vous plaît."],
              ["F", "En première ou en seconde classe ?"]
            ],
            questions: [
              { q: "Dialogue 1 : où sont ces personnes ?", qEn: "Dialogue 1: where are these people?", options: ["À la banque.", "À la poste.", "À l'aéroport."], answer: 1 },
              { q: "Dialogue 1 : combien coûte l'envoi du paquet ?", qEn: "Dialogue 1: how much does it cost to send the parcel?", options: ["12 €.", "20 €.", "22 €."], answer: 2 },
              { q: "Dialogue 2 : l'homme est…", qEn: "Dialogue 2: the man is…", options: ["dans une librairie.", "dans une boulangerie.", "dans un musée."], answer: 0 },
              { q: "Dialogue 3 : qu'est-ce que l'homme choisit ?", qEn: "Dialogue 3: what does the man choose?", options: ["Un café.", "Un thé avec du lait.", "Un jus de fruits."], answer: 1 },
              { q: "Dialogue 4 : l'homme achète…", qEn: "Dialogue 4: the man is buying…", options: ["un billet de train.", "un billet d'avion.", "un ticket de métro."], answer: 0 }
            ]
          }
        ]
      },
      {
        skill: "reading",
        title: "Compréhension des écrits",
        minutes: 30,
        instructions: "Read the four documents and answer the questions by choosing the right answer. — Lisez les documents, puis répondez aux questions.",
        parts: [
          {
            title: "Exercice 1 — Un courriel",
            instructions: "Vous partez étudier en France. Votre famille d'accueil vous écrit. Répondez aux questions. (An email from a host family.)",
            text: "<b>De :</b> Nathalie Dubois<br><b>À :</b> Rohan<br><b>Objet :</b> Ton arrivée à Bordeaux<br><br>Bonjour Rohan,<br><br>Nous sommes très contents de t'accueillir dans notre famille ! Ton train arrive à la gare Saint-Jean dimanche à 16 h 20. Michel, mon mari, vient te chercher en voiture. Il porte une veste rouge et il t'attend devant la sortie principale. Ta chambre est au premier étage, à côté de la salle de bains. Chez nous, le dîner est à 19 h 30. Tu as des allergies ? Réponds-nous avant vendredi, s'il te plaît.<br><br>À dimanche !<br>Nathalie",
            questions: [
              { q: "Rohan arrive à Bordeaux…", qEn: "Rohan arrives in Bordeaux…", options: ["en avion.", "en train.", "en bus."], answer: 1 },
              { q: "À quelle heure arrive Rohan ?", qEn: "What time does Rohan arrive?", options: ["À 16 h 20.", "À 19 h 30.", "À 12 h 20."], answer: 0 },
              { q: "Qui va chercher Rohan à la gare ?", qEn: "Who is picking Rohan up at the station?", options: ["Nathalie.", "Le fils de Nathalie.", "Le mari de Nathalie."], answer: 2 },
              { q: "Comment Rohan peut reconnaître Michel ?", qEn: "How can Rohan recognise Michel?", options: ["Il porte une veste rouge.", "Il a un panneau avec le nom de Rohan.", "Il attend devant le café de la gare."], answer: 0 },
              { q: "Avant vendredi, Rohan doit…", qEn: "Before Friday, Rohan must…", options: ["acheter son billet.", "parler de ses allergies.", "réserver une chambre."], answer: 1 }
            ]
          },
          {
            title: "Exercice 2 — Un panneau d'information",
            instructions: "Vous visitez un musée. Vous lisez ce panneau à l'entrée. Répondez aux questions. (An information board at a museum.)",
            text: "<b>MUSÉE DES BEAUX-ARTS</b><br><br><b>Horaires :</b> du mercredi au lundi, de 10 h à 18 h. Fermé le mardi.<br>Le jeudi, ouverture jusqu'à 21 h.<br><br><b>Tarifs :</b><br>Plein tarif : 9 €<br>Étudiants : 5 €<br>Moins de 18 ans : gratuit<br>Le premier dimanche du mois : gratuit pour tous<br><br><b>Dans le musée :</b><br>Photos sans flash autorisées.<br>Interdit de manger et de boire dans les salles.<br>Les grands sacs restent au vestiaire (gratuit).",
            questions: [
              { q: "Quel jour est-ce que le musée est fermé ?", qEn: "Which day is the museum closed?", options: ["Le lundi.", "Le mardi.", "Le dimanche."], answer: 1 },
              { q: "Le jeudi, le musée ferme à quelle heure ?", qEn: "On Thursdays, what time does the museum close?", options: ["À 18 h.", "À 19 h.", "À 21 h."], answer: 2 },
              { q: "Un mercredi, une étudiante de 22 ans paie…", qEn: "On a Wednesday, a 22-year-old student pays…", options: ["5 €.", "9 €.", "rien."], answer: 0 },
              { q: "Dans le musée, on peut…", qEn: "In the museum, you can…", options: ["manger un sandwich.", "prendre des photos sans flash.", "garder un grand sac avec soi."], answer: 1 }
            ]
          },
          {
            title: "Exercice 3 — Une petite annonce",
            instructions: "Vous lisez cette annonce sur le site d'une association. Répondez aux questions. (A language-exchange ad.)",
            text: "<b>ÉCHANGE DE LANGUES</b><br><br>Bonjour ! Je m'appelle Clément, j'ai 26 ans et je suis infirmier à Toulouse. En janvier, je pars travailler six mois à Bangalore, en Inde, et je voudrais mieux parler anglais ! Je propose une heure de conversation en français contre une heure de conversation en anglais, deux fois par semaine : le mardi et le vendredi, après 18 h, dans un café du centre-ville. J'aime le cinéma, la randonnée et la cuisine indienne.<br><br>Écrivez-moi : clement.tandem@exemple.fr",
            questions: [
              { q: "Quelle est la profession de Clément ?", qEn: "What is Clément's job?", options: ["Professeur.", "Infirmier.", "Cuisinier."], answer: 1 },
              { q: "Pourquoi est-ce que Clément cherche un partenaire de conversation ?", qEn: "Why is Clément looking for a conversation partner?", options: ["Il part travailler en Inde.", "Il a des amis anglais.", "Il fait des études à Londres."], answer: 0 },
              { q: "Clément propose de se retrouver…", qEn: "Clément suggests meeting…", options: ["une fois par semaine.", "le week-end.", "deux fois par semaine."], answer: 2 },
              { q: "Où est-ce que les conversations ont lieu ?", qEn: "Where do the conversations take place?", options: ["Chez Clément.", "Dans un café.", "À l'hôpital."], answer: 1 },
              { q: "Clément part en Inde pour combien de temps ?", qEn: "How long is Clément going to India for?", options: ["Six mois.", "Deux mois.", "Un an."], answer: 0 }
            ]
          },
          {
            title: "Exercice 4 — Un horaire",
            instructions: "Vous êtes en vacances. Vous voulez aller à la plage en navette (bus). Lisez l'horaire et répondez aux questions. (A shuttle-bus timetable.)",
            text: "<b>NAVETTE CENTRE-VILLE → PLAGE DES PINS (ligne 12)</b><br><b>Horaires d'été : juillet et août</b><br><br><b>Aller</b> — départ gare routière : 8 h 30, 10 h 30, 12 h 30, 14 h 30, 16 h 30<br>Arrivée plage des Pins : 9 h 05, 11 h 05, 13 h 05, 15 h 05, 17 h 05<br><br><b>Retour</b> — départ plage des Pins : 12 h, 17 h 30, 19 h<br><br>Ticket : 1,80 € (en vente dans la navette)<br>Pass journée : 5 €<br>Pas de navette le dimanche.",
            questions: [
              { q: "Le trajet de la gare routière à la plage dure…", qEn: "The journey from the bus station to the beach takes…", options: ["35 minutes.", "30 minutes.", "1 heure."], answer: 0 },
              { q: "Vous voulez arriver à la plage à 13 h 05. Vous prenez la navette de…", qEn: "You want to arrive at the beach at 1.05 pm. You take the shuttle at…", options: ["10 h 30.", "12 h 30.", "13 h 30."], answer: 1 },
              { q: "Combien coûte un ticket ?", qEn: "How much is one ticket?", options: ["1,80 €.", "5 €.", "8 €."], answer: 0 },
              { q: "Quel jour est-ce qu'il n'y a pas de navette ?", qEn: "Which day is there no shuttle?", options: ["Le samedi.", "Le lundi.", "Le dimanche."], answer: 2 },
              { q: "La dernière navette de la plage vers la gare routière part à…", qEn: "The last shuttle from the beach to the bus station leaves at…", options: ["17 h 30.", "19 h.", "17 h 05."], answer: 1 }
            ]
          }
        ]
      },
      {
        skill: "writing",
        title: "Production écrite",
        minutes: 30,
        instructions: "Two tasks: fill in a form, then write a postcard of 40 to 50 words. Keep a few minutes at the end to check accents and verb endings. — Complétez le formulaire, puis écrivez une carte postale de 40 à 50 mots.",
        parts: [
          {
            title: "Exercice 1 — Compléter une fiche",
            type: "form",
            instructions: "Complétez le formulaire de location avec vos informations personnelles. (Fill in the bike-rental form with your own details.)",
            context: "<b>Vélo-Loisirs — Location de vélos</b><br>Vous passez une semaine de vacances à Nantes. Vous voulez louer un vélo pour visiter la ville. Vous complétez le formulaire de location.",
            fields: [
              { label: "Nom", hint: "Your surname", example: "IYER" },
              { label: "Prénom", hint: "Your first name", example: "Kiran" },
              { label: "Nationalité", hint: "Choose the form that matches you; no capital letter", example: "indien (m.) / indienne (f.)" },
              { label: "Date de naissance", hint: "Day / month / year", example: "05/11/1990" },
              { label: "Adresse pendant le séjour", hint: "Your hotel or flat in Nantes", example: "Hôtel du Parc, 3, rue de la Paix, Nantes" },
              { label: "Téléphone portable", hint: "Written in pairs of digits", example: "06 98 76 54 32" },
              { label: "Adresse e-mail", hint: "Your email address", example: "prenom.nom@exemple.fr" },
              { label: "Dates de location", hint: "From … to …", example: "du 3 au 9 août" },
              { label: "Type de vélo (classique ou électrique)", hint: "Choose one", example: "électrique" },
              { label: "Votre taille (en cm)", hint: "Your height, to choose the size of the bike", example: "172 cm" }
            ]
          },
          {
            title: "Exercice 2 — Écrire une carte postale",
            type: "text",
            instructions: "Écrivez une carte postale de 40 à 50 mots. (Write 40 to 50 words.)",
            prompt: "Vous êtes en vacances au bord de la mer. Vous écrivez une carte postale à un ami français. Vous dites où vous êtes et avec qui, vous parlez du temps et de vos activités, et vous dites quand vous rentrez.",
            promptEn: "You are on holiday by the sea. Write a postcard to a French friend. Say where you are and who you are with, talk about the weather and your activities, and say when you are coming back.",
            minWords: 40,
            model: "Salut Antoine ! Je suis à Goa avec ma sœur. Il fait beau et chaud : trente degrés ! Notre hôtel est près de la plage. Le matin, on nage et l'après-midi, on visite des églises et des marchés. Le soir, on mange du poisson. Je rentre samedi. Bises, Kiran",
            checklist: [
              "I started with a greeting (Salut… / Cher… / Chère…) and finished with Bises or Amitiés and my name.",
              "I said where I am and who I am with.",
              "I described the weather (Il fait beau / chaud…).",
              "I described at least two activities in the present tense.",
              "I said when I am coming back (Je rentre…).",
              "I wrote at least 40 words and checked accents and agreements."
            ]
          }
        ]
      },
      {
        skill: "speaking",
        title: "Production orale",
        minutes: 17,
        instructions: "Three parts, 5 to 7 minutes in all. You have 10 minutes to prepare parts 2 and 3 (but not part 1). Speak aloud, record yourself if you can, then compare with the model answers. — L'épreuve a trois parties : entretien dirigé, échange d'informations et dialogue simulé.",
        parts: [
          {
            title: "Partie 1 — Entretien dirigé",
            instructions: "The examiner asks you questions about yourself. Answer each one with a full sentence. — Répondez aux questions de l'examinateur.",
            prompts: [
              "Bonjour. Vous vous appelez comment ?",
              "Vous pouvez épeler votre prénom, s'il vous plaît ?",
              "Vous avez quel âge ?",
              "Vous venez d'où ?",
              "Vous habitez avec qui ?",
              "Quel est votre métier ?",
              "Qu'est-ce que vous faites le dimanche ?",
              "Quel est votre plat préféré ?",
              "Vous connaissez la France ?",
              "Qu'est-ce que vous voulez visiter en France ?"
            ],
            model: [
              "Bonjour. Je m'appelle Kiran Iyer.",
              "Oui : K, I, R, A, N.",
              "J'ai vingt-sept ans.",
              "Je viens d'Inde. Je suis de Chennai.",
              "J'habite avec mes parents et mon frère.",
              "Je suis employé / employée de banque à Chennai.",
              "Le dimanche, je fais du sport le matin et je vois mes amis l'après-midi.",
              "Mon plat préféré, c'est le biryani. J'aime aussi beaucoup les crêpes !",
              "Non, pas encore, mais je voudrais aller à Paris l'année prochaine.",
              "Je voudrais visiter Paris, le Mont-Saint-Michel et la Provence."
            ]
          },
          {
            title: "Partie 2 — Échange d'informations",
            instructions: "You get cards with one word on each. For each card, ask the examiner a question using that word. Use vous. — Posez une question à l'examinateur avec chaque mot.",
            prompts: ["Frères et sœurs ?", "Petit déjeuner ?", "Transport ?", "Cinéma ?", "Langues ?", "Anniversaire ?", "Voyage ?", "Couleur ?", "Ville ?", "Téléphone ?"],
            model: [
              "Vous avez des frères et sœurs ?",
              "Qu'est-ce que vous mangez au petit déjeuner ?",
              "Comment est-ce que vous allez au travail ?",
              "Vous allez souvent au cinéma ?",
              "Vous parlez quelles langues ?",
              "Quelle est la date de votre anniversaire ?",
              "Où est-ce que vous voulez voyager ?",
              "Quelle est votre couleur préférée ?",
              "Vous habitez dans quelle ville ?",
              "Quel est votre numéro de téléphone ?"
            ]
          },
          {
            title: "Partie 3 — Dialogue simulé",
            instructions: "Act out the situation with the examiner, who plays the shop assistant. Greet, ask prices, size and colour, choose, pay and say goodbye. — Jouez la situation avec l'examinateur.",
            prompts: [
              "Vous êtes dans une boutique de souvenirs à Paris. Vous achetez des cadeaux pour votre famille. Le tee-shirt coûte quinze euros, la tasse huit euros, la carte postale un euro cinquante et le porte-clés quatre euros. Vous demandez les prix, la taille et la couleur, vous choisissez et vous payez."
            ],
            model: [
              ["A", "Bonjour ! Je peux vous aider ?"],
              ["B", "Bonjour. Je cherche des cadeaux pour ma famille. Il coûte combien, ce tee-shirt ?"],
              ["A", "Quinze euros."],
              ["B", "Vous l'avez en taille M ?"],
              ["A", "Oui, en bleu ou en blanc."],
              ["B", "En blanc, s'il vous plaît. Et les tasses, elles sont à combien ?"],
              ["A", "Huit euros."],
              ["B", "Alors, je prends le tee-shirt, deux tasses et cinq cartes postales."],
              ["A", "Très bien. Ça fait trente-huit euros cinquante."],
              ["B", "Je peux payer par carte ?"],
              ["A", "Bien sûr. Voilà votre sac. Bonne journée !"],
              ["B", "Merci, vous aussi. Au revoir !"]
            ]
          }
        ]
      }
    ]
  }
]);
