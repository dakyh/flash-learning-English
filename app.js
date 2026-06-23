/* ============================================================
   FlashCards 500 — app.js
   Encodage : UTF-8
   Tous les accents sont écrits directement (fichier UTF-8)
   ============================================================ */

"use strict";

/* ---- Données des mots (UTF-8, accents directs) ---- */
const WORDS = [
  /* Noms — animaux & nature */
  {
    en: "animal",
    fr: "animal",
    cat: "Noms",
    ex: "The animal ran across the field.",
  },
  {
    en: "bird",
    fr: "oiseau",
    cat: "Noms",
    ex: "A bird is singing in the tree.",
  },
  { en: "dog", fr: "chien", cat: "Noms", ex: "My dog loves to play outside." },
  { en: "fish", fr: "poisson", cat: "Noms", ex: "The fish swam in the river." },
  {
    en: "food",
    fr: "nourriture",
    cat: "Noms",
    ex: "This food is very delicious.",
  },
  { en: "horse", fr: "cheval", cat: "Noms", ex: "The horse runs very fast." },
  { en: "tail", fr: "queue", cat: "Noms", ex: "The dog wagged its tail." },
  { en: "light", fr: "lumière", cat: "Noms", ex: "Turn on the light please." },
  { en: "sun", fr: "soleil", cat: "Noms", ex: "The sun is shining today." },
  { en: "snow", fr: "neige", cat: "Noms", ex: "Children play in the snow." },
  { en: "tree", fr: "arbre", cat: "Noms", ex: "The tree is very tall." },
  { en: "sea", fr: "mer", cat: "Noms", ex: "We swam in the sea." },
  { en: "water", fr: "eau", cat: "Noms", ex: "Drink plenty of water." },
  {
    en: "river",
    fr: "rivière",
    cat: "Noms",
    ex: "The river flows to the sea.",
  },
  { en: "land", fr: "terre", cat: "Noms", ex: "The land was dry." },
  {
    en: "island",
    fr: "île",
    cat: "Noms",
    ex: "We visited a beautiful island.",
  },
  { en: "moon", fr: "lune", cat: "Noms", ex: "The moon is full tonight." },
  {
    en: "mountain",
    fr: "montagne",
    cat: "Noms",
    ex: "We climbed the mountain.",
  },
  {
    en: "star",
    fr: "étoile",
    cat: "Noms",
    ex: "You can see many stars tonight.",
  },
  { en: "wind", fr: "vent", cat: "Noms", ex: "The wind is blowing strongly." },
  { en: "fire", fr: "feu", cat: "Noms", ex: "Be careful near fire." },
  { en: "wood", fr: "bois", cat: "Noms", ex: "The table is made of wood." },
  { en: "ground", fr: "sol", cat: "Noms", ex: "Sit on the ground." },
  /* Noms — ville & transport */
  {
    en: "boat",
    fr: "bateau",
    cat: "Noms",
    ex: "We took a boat to the island.",
  },
  { en: "car", fr: "voiture", cat: "Noms", ex: "She drives a red car." },
  { en: "door", fr: "porte", cat: "Noms", ex: "Please close the door." },
  { en: "city", fr: "ville", cat: "Noms", ex: "Paris is a beautiful city." },
  { en: "home", fr: "maison", cat: "Noms", ex: "I feel safe at home." },
  { en: "house", fr: "maison", cat: "Noms", ex: "They bought a new house." },
  { en: "room", fr: "chambre / pièce", cat: "Noms", ex: "This is my room." },
  { en: "bed", fr: "lit", cat: "Noms", ex: "I go to bed at ten." },
  { en: "road", fr: "route", cat: "Noms", ex: "The road is very long." },
  { en: "street", fr: "rue", cat: "Noms", ex: "Cross the street carefully." },
  {
    en: "school",
    fr: "école",
    cat: "Noms",
    ex: "She goes to school every day.",
  },
  { en: "plane", fr: "avion", cat: "Noms", ex: "The plane landed safely." },
  { en: "port", fr: "port", cat: "Noms", ex: "The ship is at the port." },
  { en: "town", fr: "village", cat: "Noms", ex: "It is a small town." },
  /* Noms — personnes & famille */
  { en: "boy", fr: "garçon", cat: "Noms", ex: "The boy is playing football." },
  {
    en: "children",
    fr: "enfants",
    cat: "Noms",
    ex: "The children are laughing.",
  },
  {
    en: "family",
    fr: "famille",
    cat: "Noms",
    ex: "My family is very important to me.",
  },
  { en: "friend", fr: "ami", cat: "Noms", ex: "She is my best friend." },
  { en: "girl", fr: "fille", cat: "Noms", ex: "The girl reads a book." },
  { en: "man", fr: "homme", cat: "Noms", ex: "The man is very tall." },
  { en: "men", fr: "hommes", cat: "Noms", ex: "The men work hard." },
  { en: "mother", fr: "mère", cat: "Noms", ex: "My mother cooks every day." },
  { en: "people", fr: "gens", cat: "Noms", ex: "Many people live here." },
  { en: "person", fr: "personne", cat: "Noms", ex: "She is a kind person." },
  { en: "king", fr: "roi", cat: "Noms", ex: "The king ruled the land." },
  { en: "group", fr: "groupe", cat: "Noms", ex: "We work as a group." },
  /* Noms — corps */
  {
    en: "body",
    fr: "corps",
    cat: "Noms",
    ex: "Exercise is good for the body.",
  },
  { en: "eye", fr: "yeux", cat: "Noms", ex: "She has beautiful eyes." },
  { en: "face", fr: "visage", cat: "Noms", ex: "He has a kind face." },
  { en: "hand", fr: "main", cat: "Noms", ex: "Give me your hand." },
  { en: "head", fr: "tête", cat: "Noms", ex: "She shook her head." },
  { en: "feet", fr: "pieds (pluriel)", cat: "Noms", ex: "My feet are tired." },
  { en: "foot", fr: "pied", cat: "Noms", ex: "He hurt his foot." },
  { en: "age", fr: "âge", cat: "Noms", ex: "What is your age?" },
  /* Noms — monde & temps */
  { en: "world", fr: "monde", cat: "Noms", ex: "Travel around the world." },
  { en: "year", fr: "année", cat: "Noms", ex: "A year has twelve months." },
  { en: "day", fr: "jour", cat: "Noms", ex: "It is a beautiful day." },
  { en: "morning", fr: "matin", cat: "Noms", ex: "Good morning everyone!" },
  { en: "night", fr: "nuit", cat: "Noms", ex: "The night was very dark." },
  {
    en: "country",
    fr: "pays",
    cat: "Noms",
    ex: "France is a beautiful country.",
  },
  { en: "East", fr: "l'est", cat: "Noms", ex: "The sun rises in the East." },
  { en: "West", fr: "l'ouest", cat: "Noms", ex: "The sun sets in the West." },
  { en: "North", fr: "le nord", cat: "Noms", ex: "It is cold in the North." },
  { en: "South", fr: "le sud", cat: "Noms", ex: "Birds fly South in winter." },
  /* Noms — objets & concepts */
  { en: "book", fr: "livre", cat: "Noms", ex: "I read a good book." },
  {
    en: "color",
    fr: "couleur",
    cat: "Noms",
    ex: "What is your favorite color?",
  },
  { en: "music", fr: "musique", cat: "Noms", ex: "I love listening to music." },
  { en: "number", fr: "numéro", cat: "Noms", ex: "What is your phone number?" },
  { en: "game", fr: "jeu", cat: "Noms", ex: "We played a board game." },
  { en: "word", fr: "mot", cat: "Noms", ex: "What does this word mean?" },
  { en: "story", fr: "histoire", cat: "Noms", ex: "Tell me a story." },
  {
    en: "picture",
    fr: "image",
    cat: "Noms",
    ex: "She drew a beautiful picture.",
  },
  { en: "song", fr: "chanson", cat: "Noms", ex: "This is my favorite song." },
  { en: "sound", fr: "son", cat: "Noms", ex: "I heard a strange sound." },
  { en: "time", fr: "temps", cat: "Noms", ex: "I don't have enough time." },
  { en: "money", fr: "argent", cat: "Noms", ex: "Money isn't everything." },
  { en: "work", fr: "travail", cat: "Noms", ex: "He has a lot of work." },
  { en: "problem", fr: "problème", cat: "Noms", ex: "There is a big problem." },
  { en: "idea", fr: "idée", cat: "Noms", ex: "That's a great idea!" },
  { en: "love", fr: "amour", cat: "Noms", ex: "Love is a beautiful feeling." },
  { en: "beauty", fr: "beauté", cat: "Noms", ex: "Nature has so much beauty." },
  {
    en: "question",
    fr: "question",
    cat: "Noms",
    ex: "Do you have a question?",
  },
  { en: "help", fr: "aide", cat: "Noms", ex: "Can I ask for your help?" },
  { en: "end", fr: "fin", cat: "Noms", ex: "It was a happy end." },
  { en: "fact", fr: "fait", cat: "Noms", ex: "That is a well-known fact." },
  { en: "mind", fr: "esprit", cat: "Noms", ex: "Keep an open mind." },
  { en: "idea", fr: "idée", cat: "Noms", ex: "That's a great idea!" },
  { en: "force", fr: "force", cat: "Noms", ex: "Use the force wisely." },
  { en: "power", fr: "pouvoir", cat: "Noms", ex: "Knowledge is power." },
  { en: "war", fr: "guerre", cat: "Noms", ex: "War destroys everything." },
  { en: "voice", fr: "voix", cat: "Noms", ex: "She has a beautiful voice." },
  { en: "paper", fr: "papier", cat: "Noms", ex: "Write it on paper." },
  { en: "letter", fr: "lettre", cat: "Noms", ex: "I received a letter today." },
  { en: "map", fr: "carte", cat: "Noms", ex: "Use the map to find the way." },
  { en: "line", fr: "ligne", cat: "Noms", ex: "Draw a straight line." },
  { en: "table", fr: "table", cat: "Noms", ex: "Put it on the table." },
  { en: "hour", fr: "heure", cat: "Noms", ex: "Wait one hour please." },
  { en: "minute", fr: "minute", cat: "Noms", ex: "Just one minute!" },
  { en: "week", fr: "semaine", cat: "Noms", ex: "I'll see you next week." },
  {
    en: "measure",
    fr: "mesure",
    cat: "Noms",
    ex: "Take the measure carefully.",
  },
  { en: "size", fr: "taille", cat: "Noms", ex: "What size do you wear?" },
  {
    en: "place",
    fr: "endroit / place",
    cat: "Noms",
    ex: "This is a nice place.",
  },
  { en: "part", fr: "partie", cat: "Noms", ex: "This is part of the plan." },
  { en: "product", fr: "produit", cat: "Noms", ex: "This is a great product." },
  {
    en: "science",
    fr: "science",
    cat: "Noms",
    ex: "Science explains the world.",
  },
  {
    en: "sentence",
    fr: "phrase",
    cat: "Noms",
    ex: "Write a complete sentence.",
  },
  { en: "state", fr: "état", cat: "Noms", ex: "What state are you in?" },
  /* Verbes */
  {
    en: "be / is / are / was",
    fr: "être",
    cat: "Verbes",
    ex: "I am happy today.",
  },
  {
    en: "have / has / had",
    fr: "avoir",
    cat: "Verbes",
    ex: "I have a new phone.",
  },
  { en: "do / does / did", fr: "faire", cat: "Verbes", ex: "What do you do?" },
  { en: "say / said", fr: "dire", cat: "Verbes", ex: "She said hello." },
  { en: "go / went", fr: "aller", cat: "Verbes", ex: "Let's go to the park." },
  { en: "get / got", fr: "obtenir", cat: "Verbes", ex: "I got a new job." },
  {
    en: "make / made",
    fr: "faire / fabriquer",
    cat: "Verbes",
    ex: "She made a cake.",
  },
  { en: "know / knew", fr: "savoir", cat: "Verbes", ex: "I know the answer." },
  { en: "think", fr: "penser", cat: "Verbes", ex: "What do you think?" },
  { en: "see / saw", fr: "voir", cat: "Verbes", ex: "I can see you clearly." },
  { en: "come / came", fr: "venir", cat: "Verbes", ex: "Come here please." },
  { en: "give / gave", fr: "donner", cat: "Verbes", ex: "Give me your hand." },
  { en: "look", fr: "regarder", cat: "Verbes", ex: "Look at this picture." },
  { en: "find", fr: "trouver", cat: "Verbes", ex: "I can't find my keys." },
  { en: "want", fr: "vouloir", cat: "Verbes", ex: "I want a coffee please." },
  {
    en: "tell / told",
    fr: "dire / raconter",
    cat: "Verbes",
    ex: "Tell me the truth.",
  },
  { en: "ask", fr: "demander", cat: "Verbes", ex: "Can I ask you something?" },
  { en: "use", fr: "utiliser", cat: "Verbes", ex: "Use this tool." },
  { en: "feel", fr: "ressentir", cat: "Verbes", ex: "I feel happy today." },
  { en: "try", fr: "essayer", cat: "Verbes", ex: "Try again!" },
  { en: "call", fr: "appeler", cat: "Verbes", ex: "Call me tonight." },
  { en: "keep", fr: "garder", cat: "Verbes", ex: "Keep trying!" },
  {
    en: "begin / began",
    fr: "commencer",
    cat: "Verbes",
    ex: "Let's begin the lesson.",
  },
  { en: "show", fr: "montrer", cat: "Verbes", ex: "Show me your work." },
  {
    en: "hear / heard",
    fr: "entendre",
    cat: "Verbes",
    ex: "I can hear music.",
  },
  { en: "play", fr: "jouer", cat: "Verbes", ex: "Children love to play." },
  {
    en: "run / ran",
    fr: "courir",
    cat: "Verbes",
    ex: "She can run very fast.",
  },
  { en: "move", fr: "bouger", cat: "Verbes", ex: "Move your chair please." },
  { en: "live", fr: "vivre", cat: "Verbes", ex: "I live in Dakar." },
  { en: "write", fr: "écrire", cat: "Verbes", ex: "Write your name here." },
  { en: "read", fr: "lire", cat: "Verbes", ex: "I read every morning." },
  {
    en: "learn",
    fr: "apprendre",
    cat: "Verbes",
    ex: "I want to learn English.",
  },
  { en: "change", fr: "changer", cat: "Verbes", ex: "Things always change." },
  {
    en: "take / took",
    fr: "prendre",
    cat: "Verbes",
    ex: "Take this medicine.",
  },
  {
    en: "bring / brought",
    fr: "apporter",
    cat: "Verbes",
    ex: "Bring me a glass of water.",
  },
  { en: "help", fr: "aider", cat: "Verbes", ex: "Can you help me?" },
  { en: "talk", fr: "parler", cat: "Verbes", ex: "Let's talk about it." },
  { en: "stop", fr: "arrêter", cat: "Verbes", ex: "Stop talking please." },
  { en: "follow", fr: "suivre", cat: "Verbes", ex: "Follow the instructions." },
  {
    en: "build",
    fr: "construire",
    cat: "Verbes",
    ex: "They build new houses.",
  },
  {
    en: "stand / stood",
    fr: "se tenir debout",
    cat: "Verbes",
    ex: "Stand up straight.",
  },
  { en: "start", fr: "commencer", cat: "Verbes", ex: "Let's start now." },
  { en: "walk", fr: "marcher", cat: "Verbes", ex: "I walk to school." },
  { en: "put", fr: "mettre", cat: "Verbes", ex: "Put it on the table." },
  { en: "sleep", fr: "dormir", cat: "Verbes", ex: "I sleep eight hours." },
  { en: "eat", fr: "manger", cat: "Verbes", ex: "We eat at seven." },
  { en: "drive", fr: "conduire", cat: "Verbes", ex: "She drives carefully." },
  { en: "open", fr: "ouvrir", cat: "Verbes", ex: "Open the window please." },
  { en: "close", fr: "fermer", cat: "Verbes", ex: "Close the door." },
  {
    en: "remember",
    fr: "se souvenir",
    cat: "Verbes",
    ex: "I remember that day.",
  },
  { en: "wait", fr: "attendre", cat: "Verbes", ex: "Please wait for me." },
  { en: "study", fr: "étudier", cat: "Verbes", ex: "I study every evening." },
  { en: "teach", fr: "enseigner", cat: "Verbes", ex: "She teaches English." },
  { en: "check", fr: "vérifier", cat: "Verbes", ex: "Check your work again." },
  {
    en: "decide",
    fr: "décider",
    cat: "Verbes",
    ex: "You must decide quickly.",
  },
  {
    en: "develop",
    fr: "développer",
    cat: "Verbes",
    ex: "We develop new products.",
  },
  { en: "fall", fr: "tomber", cat: "Verbes", ex: "Leaves fall in autumn." },
  {
    en: "fill",
    fr: "remplir",
    cat: "Verbes",
    ex: "Fill the glass with water.",
  },
  { en: "fly", fr: "voler", cat: "Verbes", ex: "Birds can fly." },
  {
    en: "grow",
    fr: "grandir / pousser",
    cat: "Verbes",
    ex: "Plants grow fast.",
  },
  { en: "happen", fr: "se passer", cat: "Verbes", ex: "What happened?" },
  { en: "hold", fr: "tenir", cat: "Verbes", ex: "Hold my hand." },
  {
    en: "lay",
    fr: "poser / coucher",
    cat: "Verbes",
    ex: "Lay the book on the table.",
  },
  {
    en: "lead",
    fr: "mener / diriger",
    cat: "Verbes",
    ex: "She leads the team.",
  },
  {
    en: "like",
    fr: "aimer / apprécier",
    cat: "Verbes",
    ex: "I like chocolate.",
  },
  { en: "listen", fr: "écouter", cat: "Verbes", ex: "Listen to the music." },
  { en: "miss", fr: "manquer", cat: "Verbes", ex: "I miss my family." },
  { en: "need", fr: "avoir besoin", cat: "Verbes", ex: "I need your help." },
  { en: "note", fr: "noter", cat: "Verbes", ex: "Note this down." },
  { en: "own", fr: "posséder", cat: "Verbes", ex: "I own a small house." },
  { en: "pass", fr: "passer", cat: "Verbes", ex: "Pass me the salt please." },
  {
    en: "produce",
    fr: "produire",
    cat: "Verbes",
    ex: "We produce fresh food.",
  },
  { en: "pull", fr: "tirer", cat: "Verbes", ex: "Pull the door open." },
  { en: "reach", fr: "atteindre", cat: "Verbes", ex: "We reached the top." },
  { en: "record", fr: "enregistrer", cat: "Verbes", ex: "Record this video." },
  { en: "rest", fr: "se reposer", cat: "Verbes", ex: "Rest after exercise." },
  { en: "seem", fr: "sembler", cat: "Verbes", ex: "You seem tired." },
  { en: "serve", fr: "servir", cat: "Verbes", ex: "Serve the food hot." },
  {
    en: "set",
    fr: "mettre en place",
    cat: "Verbes",
    ex: "Set the table please.",
  },
  { en: "sing", fr: "chanter", cat: "Verbes", ex: "She sings beautifully." },
  { en: "sit", fr: "s'asseoir", cat: "Verbes", ex: "Sit down please." },
  { en: "spell", fr: "épeler", cat: "Verbes", ex: "Spell your name." },
  { en: "stay", fr: "rester", cat: "Verbes", ex: "Stay here with me." },
  { en: "travel", fr: "voyager", cat: "Verbes", ex: "I love to travel." },
  { en: "turn", fr: "tourner", cat: "Verbes", ex: "Turn left here." },
  {
    en: "watch",
    fr: "regarder (TV)",
    cat: "Verbes",
    ex: "Let's watch a movie.",
  },
  {
    en: "wonder",
    fr: "se demander",
    cat: "Verbes",
    ex: "I wonder what happened.",
  },
  /* Modaux */
  {
    en: "can / could",
    fr: "capacité / permission",
    cat: "Modaux",
    ex: "I can speak French.",
  },
  {
    en: "must",
    fr: "obligation / certitude",
    cat: "Modaux",
    ex: "You must study hard.",
  },
  {
    en: "should",
    fr: "suggestion / conseil",
    cat: "Modaux",
    ex: "You should eat well.",
  },
  {
    en: "would",
    fr: "volonté / politesse",
    cat: "Modaux",
    ex: "Would you like some tea?",
  },
  {
    en: "may / might",
    fr: "permission / éventualité",
    cat: "Modaux",
    ex: "It might rain today.",
  },
  /* Adjectifs — qualités */
  { en: "good", fr: "bon, bien", cat: "Adjectifs", ex: "That's a good idea." },
  { en: "new", fr: "nouveau", cat: "Adjectifs", ex: "I have a new phone." },
  {
    en: "big",
    fr: "grand, gros",
    cat: "Adjectifs",
    ex: "It's a big decision.",
  },
  { en: "long", fr: "long", cat: "Adjectifs", ex: "It was a long day." },
  {
    en: "great",
    fr: "génial / formidable",
    cat: "Adjectifs",
    ex: "You did a great job!",
  },
  {
    en: "little",
    fr: "peu, petit",
    cat: "Adjectifs",
    ex: "Just a little water.",
  },
  {
    en: "old",
    fr: "vieux, âgé",
    cat: "Adjectifs",
    ex: "This is an old building.",
  },
  {
    en: "right",
    fr: "correct, juste",
    cat: "Adjectifs",
    ex: "That's the right answer.",
  },
  {
    en: "large",
    fr: "large, grand",
    cat: "Adjectifs",
    ex: "The room is very large.",
  },
  { en: "small", fr: "petit", cat: "Adjectifs", ex: "My apartment is small." },
  { en: "fast", fr: "rapide", cat: "Adjectifs", ex: "He is a fast runner." },
  {
    en: "hard",
    fr: "difficile, dur",
    cat: "Adjectifs",
    ex: "This exam is very hard.",
  },
  {
    en: "free",
    fr: "libre, gratuit",
    cat: "Adjectifs",
    ex: "Are you free tonight?",
  },
  { en: "full", fr: "plein", cat: "Adjectifs", ex: "The glass is full." },
  { en: "strong", fr: "fort", cat: "Adjectifs", ex: "She is very strong." },
  { en: "simple", fr: "simple", cat: "Adjectifs", ex: "Keep it simple." },
  {
    en: "real",
    fr: "réel, vrai",
    cat: "Adjectifs",
    ex: "Is this a real story?",
  },
  { en: "ready", fr: "prêt", cat: "Adjectifs", ex: "Are you ready?" },
  { en: "clear", fr: "clair, net", cat: "Adjectifs", ex: "Make it clear." },
  {
    en: "hot",
    fr: "chaud (brûlant)",
    cat: "Adjectifs",
    ex: "This soup is hot.",
  },
  {
    en: "warm",
    fr: "chaud (agréable)",
    cat: "Adjectifs",
    ex: "The weather is warm.",
  },
  { en: "deep", fr: "profond", cat: "Adjectifs", ex: "The lake is deep." },
  { en: "dry", fr: "sec", cat: "Adjectifs", ex: "The weather is dry." },
  { en: "far", fr: "loin", cat: "Adjectifs", ex: "The school is far." },
  {
    en: "final",
    fr: "final, dernier",
    cat: "Adjectifs",
    ex: "This is the final answer.",
  },
  {
    en: "fine",
    fr: "bien, agréable",
    cat: "Adjectifs",
    ex: "Everything is fine.",
  },
  { en: "half", fr: "demi", cat: "Adjectifs", ex: "Half an hour later." },
  { en: "kind", fr: "gentil", cat: "Adjectifs", ex: "She is very kind." },
  {
    en: "last",
    fr: "dernier",
    cat: "Adjectifs",
    ex: "This is the last chance.",
  },
  { en: "late", fr: "en retard, tard", cat: "Adjectifs", ex: "Don't be late!" },
  { en: "low", fr: "bas, faible", cat: "Adjectifs", ex: "The price is low." },
  {
    en: "next",
    fr: "suivant, prochain",
    cat: "Adjectifs",
    ex: "See you next week.",
  },
  {
    en: "possible",
    fr: "possible",
    cat: "Adjectifs",
    ex: "Anything is possible.",
  },
  { en: "quick", fr: "rapide", cat: "Adjectifs", ex: "That was quick!" },
  { en: "rich", fr: "riche", cat: "Adjectifs", ex: "He is very rich." },
  {
    en: "same",
    fr: "même, identique",
    cat: "Adjectifs",
    ex: "We have the same opinion.",
  },
  {
    en: "several",
    fr: "plusieurs",
    cat: "Adjectifs",
    ex: "Several people came.",
  },
  { en: "slow", fr: "lent", cat: "Adjectifs", ex: "The turtle is slow." },
  { en: "special", fr: "spécial", cat: "Adjectifs", ex: "Today is special." },
  {
    en: "usual",
    fr: "habituel",
    cat: "Adjectifs",
    ex: "As usual, she arrived early.",
  },
  { en: "whole", fr: "entier", cat: "Adjectifs", ex: "I ate the whole cake." },
  { en: "young", fr: "jeune", cat: "Adjectifs", ex: "She looks young." },
  {
    en: "short",
    fr: "court, petit",
    cat: "Adjectifs",
    ex: "The story is short.",
  },
  {
    en: "common",
    fr: "commun, ordinaire",
    cat: "Adjectifs",
    ex: "It's a common mistake.",
  },
  { en: "done", fr: "terminé, cuit", cat: "Adjectifs", ex: "Are you done?" },
  /* Couleurs */
  { en: "blue", fr: "bleu", cat: "Couleurs", ex: "The sky is blue." },
  { en: "black", fr: "noir", cat: "Couleurs", ex: "She wears black." },
  { en: "white", fr: "blanc", cat: "Couleurs", ex: "The snow is white." },
  { en: "red", fr: "rouge", cat: "Couleurs", ex: "He drives a red car." },
  { en: "green", fr: "vert", cat: "Couleurs", ex: "The grass is green." },
  { en: "gold", fr: "or, doré", cat: "Couleurs", ex: "The medal is gold." },
  {
    en: "dark",
    fr: "sombre, foncé",
    cat: "Couleurs",
    ex: "It's very dark outside.",
  },
  /* Chiffres */
  { en: "one", fr: "un", cat: "Chiffres", ex: "I have one sister." },
  { en: "two", fr: "deux", cat: "Chiffres", ex: "I have two cats." },
  { en: "three", fr: "trois", cat: "Chiffres", ex: "Three minutes left." },
  { en: "four", fr: "quatre", cat: "Chiffres", ex: "Four seasons in a year." },
  { en: "five", fr: "cinq", cat: "Chiffres", ex: "Five fingers on a hand." },
  { en: "six", fr: "six", cat: "Chiffres", ex: "Six days a week." },
  { en: "ten", fr: "dix", cat: "Chiffres", ex: "I count to ten." },
  { en: "first", fr: "premier", cat: "Chiffres", ex: "I came first!" },
  { en: "second", fr: "deuxième", cat: "Chiffres", ex: "Wait a second." },
  { en: "hundred", fr: "cent", cat: "Chiffres", ex: "A hundred people came." },
  { en: "thousand", fr: "mille", cat: "Chiffres", ex: "A thousand thanks!" },
  /* Déterminants */
  {
    en: "the",
    fr: "le, la, les",
    cat: "Déterminants",
    ex: "The cat is sleeping.",
  },
  { en: "a / an", fr: "un, une", cat: "Déterminants", ex: "I have a cat." },
  {
    en: "this",
    fr: "ce, cet, cette",
    cat: "Déterminants",
    ex: "This is my bag.",
  },
  {
    en: "that",
    fr: "ce, cette (là-bas)",
    cat: "Déterminants",
    ex: "That car is fast.",
  },
  {
    en: "these",
    fr: "ceux-ci, celles-ci",
    cat: "Déterminants",
    ex: "These are my books.",
  },
  {
    en: "those",
    fr: "ceux-là, celles-là",
    cat: "Déterminants",
    ex: "Those shoes are nice.",
  },
  {
    en: "every",
    fr: "tous, chaque",
    cat: "Déterminants",
    ex: "Every day is different.",
  },
  {
    en: "some",
    fr: "quelques, certains",
    cat: "Déterminants",
    ex: "I need some water.",
  },
  {
    en: "any",
    fr: "tout, n'importe lequel",
    cat: "Déterminants",
    ex: "Do you have any questions?",
  },
  {
    en: "each",
    fr: "chaque",
    cat: "Déterminants",
    ex: "Each student answered.",
  },
  {
    en: "one",
    fr: "un (pronom)",
    cat: "Déterminants",
    ex: "One day, I will travel.",
  },
  /* Pronoms */
  { en: "I", fr: "je", cat: "Pronoms", ex: "I am a student." },
  { en: "you", fr: "toi, vous", cat: "Pronoms", ex: "How are you?" },
  { en: "he", fr: "il", cat: "Pronoms", ex: "He works hard." },
  { en: "she", fr: "elle", cat: "Pronoms", ex: "She sings well." },
  {
    en: "they",
    fr: "ils, elles, eux",
    cat: "Pronoms",
    ex: "They are my friends.",
  },
  { en: "we", fr: "nous", cat: "Pronoms", ex: "We love learning." },
  { en: "it", fr: "il, elle (objet)", cat: "Pronoms", ex: "It is raining." },
  { en: "my", fr: "mon, ma, mes", cat: "Pronoms", ex: "This is my book." },
  { en: "your", fr: "ton, ta, tes", cat: "Pronoms", ex: "What is your name?" },
  { en: "his", fr: "son, sa (masc.)", cat: "Pronoms", ex: "His car is red." },
  { en: "her", fr: "son, sa (fém.)", cat: "Pronoms", ex: "Her dress is blue." },
  { en: "our", fr: "notre, nos", cat: "Pronoms", ex: "Our team won." },
  { en: "their", fr: "leur, leurs", cat: "Pronoms", ex: "Their house is big." },
  { en: "me", fr: "moi", cat: "Pronoms", ex: "Give it to me." },
  { en: "him", fr: "lui", cat: "Pronoms", ex: "Help him please." },
  { en: "us", fr: "nous (objet)", cat: "Pronoms", ex: "Join us." },
  { en: "them", fr: "eux, elles (objet)", cat: "Pronoms", ex: "I know them." },
  /* Interrogatifs */
  { en: "how", fr: "comment", cat: "Interrogatifs", ex: "How are you today?" },
  {
    en: "what",
    fr: "quoi, que, quel",
    cat: "Interrogatifs",
    ex: "What is your name?",
  },
  { en: "when", fr: "quand", cat: "Interrogatifs", ex: "When does it start?" },
  { en: "where", fr: "où", cat: "Interrogatifs", ex: "Where do you live?" },
  { en: "who", fr: "qui", cat: "Interrogatifs", ex: "Who is that person?" },
  {
    en: "why",
    fr: "pourquoi",
    cat: "Interrogatifs",
    ex: "Why did you do that?",
  },
  {
    en: "which",
    fr: "quel, quelle",
    cat: "Interrogatifs",
    ex: "Which one do you prefer?",
  },
  {
    en: "while",
    fr: "tandis que, pendant",
    cat: "Interrogatifs",
    ex: "Do it while you can.",
  },
  /* Prépositions */
  { en: "in", fr: "dans, en", cat: "Prépositions", ex: "I live in Dakar." },
  { en: "on", fr: "sur, dans", cat: "Prépositions", ex: "It's on the table." },
  { en: "at", fr: "à, en train de", cat: "Prépositions", ex: "I'm at school." },
  { en: "to", fr: "à, vers", cat: "Prépositions", ex: "Go to the door." },
  { en: "for", fr: "pour", cat: "Prépositions", ex: "This is for you." },
  { en: "of", fr: "de", cat: "Prépositions", ex: "The end of the road." },
  { en: "with", fr: "avec", cat: "Prépositions", ex: "Come with me." },
  {
    en: "from",
    fr: "de, à partir de",
    cat: "Prépositions",
    ex: "I come from Dakar.",
  },
  { en: "by", fr: "par, de", cat: "Prépositions", ex: "Made by hand." },
  {
    en: "about",
    fr: "sur, au sujet de",
    cat: "Prépositions",
    ex: "Tell me about yourself.",
  },
  {
    en: "above",
    fr: "au-dessus",
    cat: "Prépositions",
    ex: "Above the clouds.",
  },
  {
    en: "after",
    fr: "après",
    cat: "Prépositions",
    ex: "After school, I play.",
  },
  { en: "against", fr: "contre", cat: "Prépositions", ex: "Against the wall." },
  { en: "before", fr: "avant", cat: "Prépositions", ex: "Before midnight." },
  { en: "behind", fr: "derrière", cat: "Prépositions", ex: "Behind the door." },
  {
    en: "between",
    fr: "entre",
    cat: "Prépositions",
    ex: "Between you and me.",
  },
  {
    en: "during",
    fr: "pendant",
    cat: "Prépositions",
    ex: "During the summer.",
  },
  { en: "near", fr: "près de", cat: "Prépositions", ex: "Near the school." },
  { en: "over", fr: "sur, plus de", cat: "Prépositions", ex: "Over the hill." },
  {
    en: "through",
    fr: "par, à travers",
    cat: "Prépositions",
    ex: "Walk through the park.",
  },
  {
    en: "toward",
    fr: "vers",
    cat: "Prépositions",
    ex: "Walk toward the exit.",
  },
  { en: "under", fr: "sous", cat: "Prépositions", ex: "Under the table." },
  {
    en: "until",
    fr: "jusqu'à",
    cat: "Prépositions",
    ex: "Wait until tomorrow.",
  },
  /* Adverbes & conjonctions */
  { en: "and", fr: "et", cat: "Adverbes", ex: "Black and white." },
  { en: "but", fr: "mais", cat: "Adverbes", ex: "I want to, but I can't." },
  { en: "or", fr: "ou", cat: "Adverbes", ex: "Tea or coffee?" },
  { en: "if", fr: "si", cat: "Adverbes", ex: "If you study, you succeed." },
  {
    en: "so",
    fr: "donc, si bien que",
    cat: "Adverbes",
    ex: "I was tired, so I slept.",
  },
  { en: "also", fr: "aussi", cat: "Adverbes", ex: "I also want some." },
  { en: "now", fr: "maintenant", cat: "Adverbes", ex: "Do it now." },
  { en: "very", fr: "très", cat: "Adverbes", ex: "She is very kind." },
  { en: "not", fr: "ne... pas", cat: "Adverbes", ex: "I do not understand." },
  {
    en: "just",
    fr: "juste, seulement",
    cat: "Adverbes",
    ex: "Just one more minute.",
  },
  {
    en: "more",
    fr: "plus, davantage",
    cat: "Adverbes",
    ex: "I need more time.",
  },
  {
    en: "always",
    fr: "toujours",
    cat: "Adverbes",
    ex: "I always try my best.",
  },
  { en: "never", fr: "jamais", cat: "Adverbes", ex: "I never give up." },
  { en: "often", fr: "souvent", cat: "Adverbes", ex: "I often read at night." },
  {
    en: "still",
    fr: "encore, toujours",
    cat: "Adverbes",
    ex: "She is still learning.",
  },
  { en: "here", fr: "ici", cat: "Adverbes", ex: "Come here please." },
  { en: "there", fr: "là", cat: "Adverbes", ex: "He is over there." },
  { en: "then", fr: "puis, ensuite", cat: "Adverbes", ex: "Eat, then rest." },
  { en: "again", fr: "encore, de nouveau", cat: "Adverbes", ex: "Try again." },
  { en: "back", fr: "arrière, retour", cat: "Adverbes", ex: "Come back soon." },
  {
    en: "much",
    fr: "beaucoup (incompt.)",
    cat: "Adverbes",
    ex: "Thank you very much.",
  },
  {
    en: "many",
    fr: "beaucoup (compt.)",
    cat: "Adverbes",
    ex: "Many people agree.",
  },
  { en: "too", fr: "aussi, trop", cat: "Adverbes", ex: "Me too!" },
  { en: "only", fr: "seulement", cat: "Adverbes", ex: "Only one person came." },
  {
    en: "both",
    fr: "tous les deux",
    cat: "Adverbes",
    ex: "Both of them agree.",
  },
  { en: "even", fr: "même", cat: "Adverbes", ex: "Even better!" },
  { en: "once", fr: "une fois", cat: "Adverbes", ex: "Once upon a time." },
  { en: "since", fr: "depuis", cat: "Adverbes", ex: "Since last year." },
  { en: "soon", fr: "bientôt", cat: "Adverbes", ex: "See you soon!" },
  {
    en: "though",
    fr: "bien que, quand même",
    cat: "Adverbes",
    ex: "It's hard, though.",
  },
  { en: "together", fr: "ensemble", cat: "Adverbes", ex: "We work together." },
  { en: "yes", fr: "oui", cat: "Adverbes", ex: "Yes, I can do it." },
  { en: "no", fr: "non", cat: "Adverbes", ex: "No, thank you." },
  { en: "nothing", fr: "rien", cat: "Adverbes", ex: "Nothing happened." },
  { en: "perhaps", fr: "peut-être", cat: "Adverbes", ex: "Perhaps tomorrow." },
  { en: "ago", fr: "il y a, depuis", cat: "Adverbes", ex: "Two years ago." },
  { en: "all", fr: "tout, tous", cat: "Adverbes", ex: "All is well." },
  { en: "down", fr: "en bas", cat: "Adverbes", ex: "Sit down." },
  { en: "up", fr: "en haut", cat: "Adverbes", ex: "Stand up." },
  { en: "off", fr: "éteint, absent", cat: "Adverbes", ex: "Turn it off." },
  { en: "out", fr: "dehors", cat: "Adverbes", ex: "Go out." },
  { en: "self", fr: "soi, soi-même", cat: "Adverbes", ex: "Be yourself." },
  {
    en: "such",
    fr: "tel, tellement",
    cat: "Adverbes",
    ex: "Such a great idea!",
  },
  {
    en: "than",
    fr: "que (comparaison)",
    cat: "Adverbes",
    ex: "Better than before.",
  },
  {
    en: "though",
    fr: "bien que",
    cat: "Adverbes",
    ex: "Though it's hard, try.",
  },
  { en: "yet", fr: "encore, déjà", cat: "Adverbes", ex: "Not yet!" },
];

/* ---- Nettoyage UTF-8 : corrige les mauvais encodages courants ---- */
function fixEncoding(str) {
  if (!str) return "";
  return str
    .replace(/Ã©/g, "é")
    .replace(/Ã¨/g, "è")
    .replace(/Ãª/g, "ê")
    .replace(/Ã«/g, "ë")
    .replace(/Ã /g, "à")
    .replace(/Ã¢/g, "â")
    .replace(/Ã¤/g, "ä")
    .replace(/Ã¹/g, "ù")
    .replace(/Ã»/g, "û")
    .replace(/Ã¼/g, "ü")
    .replace(/Ã®/g, "î")
    .replace(/Ã¯/g, "ï")
    .replace(/Ã´/g, "ô")
    .replace(/Ã¶/g, "ö")
    .replace(/Ã§/g, "ç")
    .replace(/Ã‰/g, "É")
    .replace(/Ã€/g, "À")
    .replace(/Ã‡/g, "Ç")
    .replace(/â€™/g, "'")
    .replace(/â€œ/g, '"')
    .replace(/â€/g, '"')
    .replace(/â€"/g, "—")
    .replace(/â€"/g, "–")
    .replace(/Ã/g, "à");
}

/* ---- État de l'application ---- */
let vocab = [];
let currentQueue = [];
let currentIndex = 0;
let sessionCorrect = 0;
let sessionTotal = 0;
let dailyCount = 0;
let dailyGoal = 15;
let weekActivity = [0, 0, 0, 0, 0, 0, 0];
let currentFilter = "all";
let searchQuery = "";

/* ---- Utilitaires ---- */
const today = () => new Date().toDateString();
const save = () => localStorage.setItem("fc_vocab", JSON.stringify(vocab));
const saveDay = () =>
  localStorage.setItem(
    "fc_daily",
    JSON.stringify({ date: today(), count: dailyCount }),
  );
const saveWk = () =>
  localStorage.setItem("fc_week", JSON.stringify(weekActivity));

function catClass(cat) {
  const map = {
    Noms: "cat-Noms",
    Verbes: "cat-Verbes",
    Adjectifs: "cat-Adjectifs",
    Modaux: "cat-Modaux",
    Pronoms: "cat-Pronoms",
    Adverbes: "cat-Adverbes",
    Couleurs: "cat-Adjectifs",
    Chiffres: "cat-Noms",
    Déterminants: "cat-Pronoms",
    Prépositions: "cat-Adverbes",
    Interrogatifs: "cat-Modaux",
  };
  return map[cat] || "cat-default";
}
function dotClass(cat) {
  const map = {
    Noms: "dot-Noms",
    Verbes: "dot-Verbes",
    Adjectifs: "dot-Adjectifs",
    Modaux: "dot-Modaux",
    Pronoms: "dot-Pronoms",
  };
  return map[cat] || "dot-default";
}
function shuffle(arr) {
  return [...arr].sort(() => Math.random() - 0.5);
}

/* ---- Init ---- */
function initVocab() {
  const saved = localStorage.getItem("fc_vocab");
  if (saved) {
    vocab = JSON.parse(saved).map((w) => ({
      ...w,
      en: fixEncoding(w.en),
      fr: fixEncoding(w.fr),
      ex: fixEncoding(w.ex || ""),
    }));
  } else {
    vocab = WORDS.map((w) => ({
      ...w,
      en: fixEncoding(w.en),
      fr: fixEncoding(w.fr),
      ex: fixEncoding(w.ex || ""),
      status: "new",
      ease: 2.5,
      interval: 1,
      nextReview: Date.now(),
      reps: 0,
      correct: 0,
      total: 0,
    }));
    save();
  }
  const dc = localStorage.getItem("fc_daily");
  if (dc) {
    const d = JSON.parse(dc);
    if (d.date === today()) dailyCount = d.count;
  }
  const wa = localStorage.getItem("fc_week");
  if (wa) weekActivity = JSON.parse(wa);
  updateHome();
  renderWordList();
}

/* ---- Navigation ---- */
function showSection(id, btn) {
  document
    .querySelectorAll(".section")
    .forEach((s) => s.classList.remove("active"));
  document
    .querySelectorAll(".nav-btn")
    .forEach((b) => b.classList.remove("active"));
  document.getElementById("sec-" + id).classList.add("active");
  if (btn) btn.classList.add("active");
  else {
    const idx = ["home", "review", "words", "add", "settings"].indexOf(id);
    if (idx >= 0)
      document.querySelectorAll(".nav-btn")[idx].classList.add("active");
  }
  if (id === "home") updateHome();
  if (id === "words") renderWordList();
}

/* ---- Dashboard ---- */
function updateHome() {
  const total = vocab.length;
  const known = vocab.filter((w) => w.status === "known").length;
  const totalQ = vocab.reduce((a, w) => a + w.total, 0);
  const totalC = vocab.reduce((a, w) => a + w.correct, 0);
  const rate = totalQ > 0 ? Math.round((totalC / totalQ) * 100) : 0;
  const pct = Math.round((known / total) * 100) || 0;
  const streak = parseInt(localStorage.getItem("fc_streak") || "0");

  document.getElementById("s-total").textContent = total;
  document.getElementById("s-known").textContent = known;
  document.getElementById("s-rate").textContent = rate + "%";
  document.getElementById("s-streak").textContent = streak;
  document.getElementById("streak-count").textContent = streak;

  document.getElementById("prog-pct").textContent = pct + "%";
  document.getElementById("prog-fill").style.width = pct + "%";
  document.getElementById("prog-label").textContent =
    known + " / " + total + " mots maîtrisés";
  document.getElementById("daily-progress").textContent =
    dailyCount + " / " + dailyGoal + " révisés";

  // Daily ring (SVG stroke-dashoffset)
  const circle = document.getElementById("daily-ring-circle");
  if (circle) {
    const ratio = Math.min(dailyCount / dailyGoal, 1);
    const circ = 2 * Math.PI * 16; // r=16 → ~100.53
    circle.style.strokeDashoffset = (circ * (1 - ratio)).toFixed(2);
  }

  renderWeekChart();
}

function renderWeekChart() {
  const days = ["L", "M", "M", "J", "V", "S", "D"];
  const max = Math.max(...weekActivity, 1);
  document.getElementById("week-chart").innerHTML = weekActivity
    .map((v, i) => {
      const h = Math.round((v / max) * 60);
      const cls = v > 0 ? "bar bar-active" : "bar bar-empty";
      return `<div class="bar-col">
      <div class="${cls}" style="height:${Math.max(h, 4)}px"></div>
      <span class="bar-label">${days[i]}</span>
    </div>`;
    })
    .join("");
}

/* ---- Session ---- */
function getDueWords() {
  return vocab.filter((w) => w.nextReview <= Date.now());
}
function getNewWords() {
  return vocab.filter((w) => w.status === "new").slice(0, dailyGoal);
}

function startSession(mode) {
  sessionCorrect = 0;
  sessionTotal = 0;
  showSection("review");
  let q = mode === "due" ? getDueWords() : getNewWords();
  if (q.length === 0)
    q =
      mode === "due"
        ? vocab.filter((w) => w.status !== "new").slice(0, 15)
        : vocab.slice(0, 15);
  currentQueue = shuffle(q.slice(0, 20));
  currentIndex = 0;
  renderCard();
}

/* ---- Flashcard rendering ---- */
function renderCard() {
  const el = document.getElementById("review-content");
  if (currentIndex >= currentQueue.length) {
    renderDone();
    return;
  }

  const w = currentQueue[currentIndex];
  const pct = Math.round((currentIndex / currentQueue.length) * 100);
  const catCls = catClass(w.cat);

  el.innerHTML = `
    <div class="fc-wrapper">
      <div class="fc-topbar">
        <span class="fc-progress-label">${currentIndex + 1} / ${currentQueue.length}</span>
        <span class="fc-correct">✓ ${sessionCorrect} correct</span>
      </div>
      <div class="fc-progress-bar">
        <div class="fc-progress-fill" style="width:${pct}%"></div>
      </div>
      <span class="cat-pill ${catCls}">${w.cat}</span>

      <div class="card-scene" onclick="flipCard(this)">
        <div class="card-inner" id="crd">
          <div class="card-face card-front">
            <div class="card-word">${w.en}</div>
            <div class="card-hint">— anglais —</div>
            <div class="card-tap">👆 Clique pour voir la traduction</div>
          </div>
          <div class="card-face card-back">
            <div class="card-translation">${w.fr}</div>
            <div class="card-example">${w.ex || ""}</div>
          </div>
        </div>
      </div>

      <div class="answer-btns" id="ans-btns">
        <button class="btn-again" onclick="answer(false)">✗ À revoir</button>
        <button class="btn-know"  onclick="answer(true)">✓ Je sais !</button>
      </div>
      <button class="btn-ghost" onclick="skipCard()" style="margin-top:4px">Passer →</button>
    </div>`;
}

function flipCard(scene) {
  const inner = scene.querySelector(".card-inner");
  inner.classList.toggle("flipped");
  if (inner.classList.contains("flipped")) {
    document.getElementById("ans-btns").style.display = "flex";
  }
}

function answer(correct) {
  const w = currentQueue[currentIndex];
  const idx = vocab.findIndex((v) => v.en === w.en);
  vocab[idx].total++;
  w.total++;

  if (correct) {
    vocab[idx].correct++;
    sessionCorrect++;
    w.reps = Math.min((w.reps || 0) + 1, 6);
    vocab[idx].reps = w.reps;
    const intervals = [1, 3, 7, 14, 30, 60];
    const ni = intervals[Math.min(w.reps - 1, 5)];
    vocab[idx].interval = ni;
    vocab[idx].nextReview = Date.now() + ni * 86400000;
    vocab[idx].status = w.reps >= 4 ? "known" : "learning";
    dailyCount++;
    weekActivity[new Date().getDay()]++;
    saveDay();
    saveWk();
    // Streak
    const lastDate = localStorage.getItem("fc_last_date");
    const yesterday = new Date(Date.now() - 86400000).toDateString();
    let streak = parseInt(localStorage.getItem("fc_streak") || "0");
    if (lastDate === yesterday || lastDate === today()) streak++;
    else streak = 1;
    localStorage.setItem("fc_streak", streak);
    localStorage.setItem("fc_last_date", today());
  } else {
    vocab[idx].reps = 0;
    vocab[idx].interval = 1;
    vocab[idx].nextReview = Date.now() + 3600000;
    vocab[idx].status = "review";
  }
  save();
  sessionTotal++;
  currentIndex++;
  renderCard();
}

function skipCard() {
  currentIndex++;
  renderCard();
}

function renderDone() {
  const pct =
    sessionTotal > 0 ? Math.round((sessionCorrect / sessionTotal) * 100) : 0;
  document.getElementById("review-content").innerHTML = `
    <div class="session-done">
      <div class="done-trophy">🏆</div>
      <div class="done-title">Session terminée !</div>
      <div class="done-sub">${sessionCorrect} / ${sessionTotal} mots corrects</div>
      <div class="done-stats">
        <div class="done-stat done-stat-correct">
          <div class="done-stat-num">${sessionCorrect}</div>
          <div class="done-stat-label">Corrects</div>
        </div>
        <div class="done-stat done-stat-rate">
          <div class="done-stat-num">${pct}%</div>
          <div class="done-stat-label">Réussite</div>
        </div>
      </div>
      <button class="btn-primary btn-full" onclick="startSession('due')">▶ Nouvelle session</button>
      <br><br>
      <button class="btn-ghost" onclick="showSection('home')">← Retour accueil</button>
    </div>`;
  updateHome();
}

/* ---- Liste des mots ---- */
function filterWords(filter, btn) {
  currentFilter = filter;
  document
    .querySelectorAll(".pill")
    .forEach((p) => p.classList.remove("active"));
  if (btn) btn.classList.add("active");
  renderWordList();
}

function searchWords(q) {
  searchQuery = q
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
  renderWordList();
}

function renderWordList() {
  const list = document.getElementById("word-list");
  if (!list) return;
  let words =
    currentFilter === "all"
      ? vocab
      : vocab.filter((w) => w.status === currentFilter);
  if (searchQuery) {
    words = words.filter((w) => {
      const en = w.en.toLowerCase();
      const fr = w.fr
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "");
      return en.includes(searchQuery) || fr.includes(searchQuery);
    });
  }
  document.getElementById("words-count").textContent = words.length + " mots";

  if (words.length === 0) {
    list.innerHTML = `<div class="empty-state">
      <span class="empty-state-icon">🔍</span>Aucun mot trouvé.</div>`;
    return;
  }
  const badges = {
    new: "Nouveau",
    learning: "En cours",
    known: "Maîtrisé",
    review: "À revoir",
  };
  const bcls = {
    new: "badge-new",
    learning: "badge-learning",
    known: "badge-known",
    review: "badge-review",
  };
  list.innerHTML = words
    .slice(0, 100)
    .map(
      (w) => `
    <div class="word-item">
      <div class="word-cat-dot ${dotClass(w.cat)}"></div>
      <span class="word-eng">${w.en}</span>
      <span class="word-fr">${w.fr}</span>
      <span class="word-badge ${bcls[w.status] || "badge-new"}">${badges[w.status] || "Nouveau"}</span>
    </div>`,
    )
    .join("");
}

/* ---- Ajout manuel ---- */
function addCustomWord() {
  const en = fixEncoding(document.getElementById("in-eng").value.trim());
  const fr = fixEncoding(document.getElementById("in-fr").value.trim());
  const ex = fixEncoding(document.getElementById("in-ex").value.trim());
  const cat = document.getElementById("in-cat").value;
  const fb = document.getElementById("add-feedback");

  if (!en || !fr) {
    fb.textContent = "⚠ Remplis le mot et la traduction.";
    fb.className = "add-feedback feedback-err";
    return;
  }
  vocab.push({
    en,
    fr,
    ex,
    cat,
    status: "new",
    ease: 2.5,
    interval: 1,
    nextReview: Date.now(),
    reps: 0,
    correct: 0,
    total: 0,
  });
  save();
  document.getElementById("in-eng").value = "";
  document.getElementById("in-fr").value = "";
  document.getElementById("in-ex").value = "";
  fb.textContent = '✓ Mot "' + en + '" ajouté avec succès !';
  fb.className = "add-feedback feedback-ok";
  setTimeout(() => {
    fb.textContent = "";
  }, 3000);
  updateHome();
}

/* ---- Réglages ---- */
function updateGoal(v) {
  dailyGoal = parseInt(v);
  updateHome();
}

function resetAll() {
  if (
    !confirm(
      "Réinitialiser toute la progression ? Cette action est irréversible.",
    )
  )
    return;
  vocab = WORDS.map((w) => ({
    ...w,
    en: fixEncoding(w.en),
    fr: fixEncoding(w.fr),
    ex: fixEncoding(w.ex || ""),
    status: "new",
    ease: 2.5,
    interval: 1,
    nextReview: Date.now(),
    reps: 0,
    correct: 0,
    total: 0,
  }));
  dailyCount = 0;
  weekActivity = [0, 0, 0, 0, 0, 0, 0];
  localStorage.removeItem("fc_streak");
  localStorage.removeItem("fc_last_date");
  save();
  saveDay();
  saveWk();
  updateHome();
  renderWordList();
  alert("Progression réinitialisée.");
}

/* ---- Lancement ---- */
document.addEventListener("DOMContentLoaded", initVocab);
