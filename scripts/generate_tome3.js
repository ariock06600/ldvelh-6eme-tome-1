import fs from 'node:fs';

// Definition of 100 steps for Tome 3: Le Harcèlement Verbal & les Moqueries (Station Orbitale Oxy-Kaelis : Le Venin des Mots)
const tome3Steps = {};

function addStep(id, title, location, act, text, choices, statsImpact, pedagogicalNote, endingType) {
  tome3Steps[id] = {
    id,
    title,
    location,
    act,
    text,
    choices,
    statsImpact: statsImpact || { serenity: 0, solidarity: 0, trust: 0 },
    pedagogicalNote,
    ...(endingType ? { endingType } : {})
  };
}

// 1
addStep(
  1,
  "Le bafouillement au tableau holographique",
  "Amphithéâtre Galilée • Cours d'Astro-Physique",
  1,
  "Debout devant le projecteur holographique, tu tentes d'exposer ton calcul de trajectoire orbitale. Mais l'émotion noue ta gorge. Ton implant d'équilibrage de pression émet un léger grésillement sur ta tempe et tu hésites sur un terme technique : « La... la déviation gravitationnelle s'évalue en... en micro-parsecs... » Au fond de la salle, Jax imite aussitôt ton bégaiement en exagérant une voix de robot cassé : « En... en... micro-panique, ouais ! » Des ricanements fusent dans les rangs. Même certains élèves d'ordinaire calmes sourient bêtement.",
  [
    { text: "Si tu tentes de sourire en faisant semblant de trouver ça drôle pour ne pas passer pour un rabat-joie, va au 2.", targetId: 2, label: "Faire semblant de rire" },
    { text: "Si tu t'arrêtes net et fixes Jax avec fermeté en lui demandant de te laisser terminer, va au 3.", targetId: 3, label: "Demander le silence" }
  ],
  { serenity: -10, solidarity: -5, trust: 0 },
  "Les moqueries verbales s'abritent souvent derrière l'illusion du rire partagé : la cible rit par réflexe de défense, ce qui valide faussement l'agression."
);

// 2
addStep(
  2,
  "Le piège du faux sourire",
  "Amphithéâtre Galilée",
  1,
  "Tu esquisses un rictus gêné pour faire bonne figure, espérant que la plaisanterie s'arrêtera là. Mais ton faux sourire agit comme un feu vert pour Jax. Enhardi par les rires de ses camarades, il renchérit à voix haute : « Regardez, même le Bip-Bip rouillé valide ! Il va bientôt disjoncter ! » Toute la rangée s'esclaffe. La Professeure Vane lève les yeux de son terminal : « Un peu de calme au fond. Corin, terminez sans faire le clown. » La remarque de l'enseignante t'achève : c'est toi qu'on accuse de perturber le cours.",
  [
    { text: "Si tu te dépêches de regagner ta place la tête basse pour disparaître dans ton siège, va au 4.", targetId: 4, label: "Regagner sa place honteux" },
    { text: "Si tu expliques à la professeure que ce sont les imitations de Jax qui t'ont déstabilisé, va au 5.", targetId: 5, label: "Clarifier auprès de la prof" }
  ],
  { serenity: -15, solidarity: -10, trust: -5 },
  "Rire de ses propres humiliations pour plaire au groupe ('auto-dénigrement') renforce la position de l'agresseur et brouille la perception des adultes."
);

// 3
addStep(
  3,
  "Le regard soutenu et la répartie calme",
  "Amphithéâtre Galilée",
  1,
  "Tu gardes la tête haute, poses ta baguette holographique et regardes Jax droit dans les yeux. Dans le silence soudain de la salle, ta voix est parfaitement claire : « Jax, si tu as une remarque scientifique sur mes coordonnées orbitales, je t'écoute. Sinon, tes bruits de couloir n'intéressent personne ici. » Deux élèves au premier rang acquiescent. Jax perd un instant son sourire narquois, surpris de ne pas te voir t'effondrer.",
  [
    { text: "Si tu termines ta démonstration mathématique avec précision, va au 6.", targetId: 6, label: "Terminer avec brio" },
    { text: "If you lose your focus under his mocking stare and stumble on the next slide, go to 7.", targetId: 7, label: "Trébucher sur la formule" }
  ],
  { serenity: 10, solidarity: 10, trust: 10, badge: "Sang-Froid Exemplaire" },
  "Nommer calmement le comportement inapproprié sans s'énerver ni rire désarme l'effet recherché par le moqueur."
);

// 4
addStep(
  4,
  "L'écho blessant de la coursive",
  "Coursive des Casiers • Secteur 3",
  1,
  "La sonnerie retentit. Tu ranges tes affaires à toute vitesse et te glisses dans la coursive métallique. Mais le surnom a déjà voyagé plus vite que toi. En passant devant les casiers de décompression, deux élèves de Cycle Supérieur te lancent en ricanant : « Salut Bip-Bip ! Pas trop de surchauffe aujourd'hui ? » Un étau invisible te compresse la poitrine. Les mots ne laissent pas de bleus sur la peau, mais ils brûlent comme de l'acide à l'intérieur.",
  [
    { text: "Si tu accélères le pas pour te réfugier dans le sas de la bibliothèque orbitale, va au 8.", targetId: 8, label: "Fuir à la bibliothèque" },
    { text: "Si tu t'arrêtes pour crier ta rage contre ceux qui répètent bêtement ce surnom, va au 9.", targetId: 9, label: "Exploser de rage" }
  ],
  { serenity: -15, solidarity: -5, trust: -5 },
  "Les surnoms dégradants collent à la victime et se propagent par mimétisme social, créant un climat d'humiliation permanente."
);

// 5
addStep(
  5,
  "Le recadrage immédiat par la Professeure",
  "Amphithéâtre Galilée",
  1,
  "« Madame, ce n'est pas moi qui fais le clown. Jax se moque de mon hésitation et m'imite pour faire rire la classe », dis-tu d'une voix posée. La professeure Vane fronce les sourcils et se tourne vers Jax : « Jax, vos sarcasmes sont inacceptables. L'amphithéâtre est un lieu de travail et de respect. Vous me ferez une analyse complète de la trajectoire de Corin pour demain matin. » Jax rougit d'embarras, furieux d'avoir été recadré publiquement.",
  [
    { text: "Si tu profites de ce soutien pour achever ton exposé avec sérénité, va au 10.", targetId: 10, label: "Achever l'exposé serein" },
    { text: "Si tu crains que Jax ne se venge à la récréation sur les canaux radio, va au 11.", targetId: 11, label: "Craindre la vengeance radio" }
  ],
  { serenity: 15, solidarity: 10, trust: 20, badge: "Vérité Énoncée" },
  "Interpeller l'enseignant avec calme et précision permet à l'adulte d'intervenir immédiatement contre la violence verbale."
);

// 6
addStep(
  6,
  "La réussite scientifique sous les applaudissements",
  "Amphithéâtre Galilée",
  1,
  "Pendant cinq minutes, tu déroules avec une limpidité exemplaire le calcul d'insertion de la sonde autour de Jupiter. Les graphiques holographiques s'alignent parfaitement. Lorsque tu termines, la professeure Vane applaudit chaleureusement : « Remarquable rigueur, Corin ! C'est exactement le niveau attendu au Cycle Alpha. » Plusieurs camarades se joignent aux applaudissements. Jax ronge son frein dans son coin.",
  [
    { text: "Si tu savoures cette victoire en allant discuter avec Naël et Sylvan après le cours, va au 12.", targetId: 12, label: "Discuter avec Naël et Sylvan" },
    { text: "Si tu lances un regard méprisant à Jax pour lui faire payer sa mesquinerie, va au 13.", targetId: 13, label: "Narguer Jax" }
  ],
  { serenity: 20, solidarity: 20, trust: 20, badge: "Victoire de la Compétence" },
  "Démontrer sa valeur par ses compétences réelles rassure la victime et rappelle à la classe la futilité des attaques verbales."
);

// 7
addStep(
  7,
  "La panique sous le regard moqueur",
  "Amphithéâtre Galilée",
  1,
  "Le rictus provocateur de Jax te déstabilise. Tes mains tremblent sur le pupitre. Tu confonds les équations, les chiffres s'emmêlent sur l'hologramme. « Bon, Corin, asseyez-vous, nous reprendrons cela plus tard », soupire la professeure. Tu retournes à ta place la tête basse. Jax chuchote assez fort pour que toute la rangée entende : « Quel boulet cosmique... » Tu as envie de disparaître sous le plancher de la station.",
  [
    { text: "Si tu t'enfermes dans le silence pour ne plus attirer l'attention de la journée, va au 14.", targetId: 14, label: "S'enfermer dans le silence" },
    { text: "Si tu confies ton désarroi à Lyra qui était assise à côté de toi, va au 15.", targetId: 15, label: "Se confier à Lyra" }
  ],
  { serenity: -20, solidarity: -10, trust: -10 },
  "Le harcèlement verbal produit une anxiété de performance qui paralyse la cible et valide faussement les moqueries."
);

// 8
addStep(
  8,
  "Le sanctuaire de l'Holo-Bibliothèque",
  "Holo-Bibliothèque Centrale • Alcôve 4",
  1,
  "Dans le silence feutré de la bibliothèque, entouré de consoles de savoir aux douces lueurs bleutées, tu retrouves un peu de calme. Tu t'assois dans une alcôve d'étude individuelle. Soudain, ton casque audio d'intégration émet un bip : une note vocale non sollicitée a été envoyée sur le canal de promo `#Oxy-Radio`. Tu cliques par mégarde : c'est un enregistrement audio ralenti de ta voix qui bégaie, mixé avec un bruit de klaxon et le rire gras de Jax.",
  [
    { text: "Si tu enregistres immédiatement le fichier audio comme preuve d'agression sonore, va au 16.", targetId: 16, label: "Sauvegarder l'audio" },
    { text: "Si tu balances ton casque de dégoût et fonds en larmes dans l'alcôve, va au 17.", targetId: 17, label: "Craquer sous la douleur" }
  ],
  { serenity: -20, solidarity: 0, trust: -5 },
  "Le cyber-harcèlement vocal (mémés audios, vocaux déformés) poursuit la cible jusque dans ses moments de solitude."
);

// 9
addStep(
  9,
  "L'explosion de colère dans la coursive",
  "Coursive des Casiers",
  1,
  "« Fermez-la ! Arrêtez de m'appeler comme ça, bandes d'abrutis ! » hurles-tu, les veines du cou gonflées. Les deux aînés sursautent, puis éclatent d'un rire tonitruant : « Ouh là là, la machine s'énerve ! Il va nous envoyer un missile ! » Un surveillant arrive à grands pas : « Corin ! Pas de cris ni d'insultes dans les coursives ! Deux heures de consigne pour vulgarité. » En perdant ton calme, c'est toi qui te retrouves puni.",
  [
    { text: "Si tu tentes d'expliquer au surveillant l'origine de ta crise de nerfs, va au 18.", targetId: 18, label: "Expliquer le débordement" },
    { text: "Si tu t'enfuis furieux vers les sas inférieurs de la station, va au 19.", targetId: 19, label: "Fuir vers les sas" }
  ],
  { serenity: -25, solidarity: -15, trust: -15 },
  "Répondre aux moqueries par la violence verbale inverse les rôles : l'institution ne voit souvent que la réaction visible et sanctionne la victime."
);

// 10
addStep(
  10,
  "La reconnaissance de Maître Olan",
  "Amphithéâtre Galilée • Fin de cours",
  1,
  "À la fin du cours, Maître Olan, qui assistait à la présentation, s'approche de toi : « Bien réagi, Corin. Jax a la mauvaise habitude de tester la résistance de ses camarades avec des blagues douteuses. Si tu ne rentres pas dans son jeu et que tu restes solide sur tes compétences, ses attaques tomberont à plat. Mais si cela continue, viens me voir immédiatement. » Tu te sens soutenu par les adultes.",
  [
    { text: "Si tu lui parles des bruits qui circulent déjà sur les canaux radio, va au 20.", targetId: 20, label: "Signaler les canaux radio" },
    { text: "Si tu le remercies et décides de surveiller comment Jax réagit au prochain intercours, va au 21.", targetId: 21, label: "Observer la récréation" }
  ],
  { serenity: 15, solidarity: 10, trust: 25, badge: "Appui Éducatif" },
  "Les adultes attentifs savent distinguer la provocation masquée du travail sérieux et apportent une caution morale essentielle."
);

// 11
addStep(
  11,
  "La menace sourde des ondes",
  "Sas d'Hydro-Gravité • Niveau 2",
  1,
  "Tu croises Jax près des douches magnétiques. Il te toise avec un air mauvais : « Alors comme ça, monsieur va pleurer dans les jupes de la prof ? Tu ne perds rien pour attendre, Bip-Bip. Dès ce soir sur la radio, tout le monde saura ce que tu vaux vraiment. » La menace d'une campagne de moqueries amplifiée sur le réseau ComNet te glace le sang.",
  [
    { text: "Si tu répliques froidement que tu n'as pas peur de ses menaces d'enfant gâté, va au 22.", targetId: 22, label: "Refuser l'intimidation" },
    { text: "Si la peur te pousse à lui proposer de faire son devoir de calcul pour qu'il te laisse tranquille, va au 23.", targetId: 23, label: "Acheter la paix" }
  ],
  { serenity: -15, solidarity: 0, trust: 5 },
  "La menace de représailles verbales vise à terroriser la cible pour lui interdire de parler à nouveau aux adultes."
);

// 12
addStep(
  12,
  "L'échange réconfortant avec les camarades bienveillants",
  "Sphère Panoramique • Sas 4",
  1,
  "Tu rejoins Naël et Sylvan près de la baie vitrée qui donne sur la nébuleuse d'Orion. Naël te sourit chaleureusement : « Superbe exposé Corin ! Franchement, laisse tomber les remarques de Jax. Il fait le malin parce qu'il n'a rien pigé à la formule de Lagrange. » Sylvan hoche la tête : « C'est vrai, il se moque de tout le monde dès qu'il se sent inférieur. Ne le laisse pas te voler ta réussite. »",
  [
    { text: "Si tu leur proposes de réviser ensemble le grand devoir d'astrophysique, va au 24.", targetId: 24, label: "Former un groupe d'étude" },
    { text: "Si tu leur confies que ses mots te blessent quand même au fond de toi, va au 25.", targetId: 25, label: "Exprimer sa vulnérabilité" }
  ],
  { serenity: 20, solidarity: 25, trust: 20, badge: "Alliance Fraternelle" },
  "Partager ses émotions avec des pairs lucides permet de relativiser la portée des moqueries et de restaurer la confiance."
);

// 13
addStep(
  13,
  "L'escalade par la provocation réciproque",
  "Amphithéâtre Galilée",
  1,
  "En regagnant ta place, tu lances à Jax avec un sourire narquois : « Alors, le cancre ? Tu as besoin que je t'explique les équations à deux inconnues ou c'est trop pour ton petit cerveau ? » Jax serre les dents, vexé devant ses copains. « Tu vas voir qui est le cancre, face de robot ! » Tu as peut-être eu un éclair de satisfaction, mais tu viens de transformer un incident en guerre personnelle déclarée.",
  [
    { text: "Si tu réalises ton erreur et tentes de désamorcer la tension avant le cours suivant, va au 26.", targetId: 26, label: "Tenter de désamorcer" },
    { text: "Si tu t'entêtes dans cette guerre d'égo pour lui prouver que tu n'as pas peur, va au 27.", targetId: 27, label: "Guerre d'égo" }
  ],
  { serenity: -15, solidarity: -10, trust: -10 },
  "Rabaisser à son tour l'agresseur enferme les protagonistes dans une surenchère verbale sans issue où chacun cherche à détruire l'autre."
);

// 14
addStep(
  14,
  "La prison du silence et la peur de parler",
  "Salle du Cycle Alpha",
  1,
  "Pendant les trois cours suivants, tu gardes les yeux rivés sur tes chaussures. Chaque fois que le professeur pose une question dont tu connais pertinemment la réponse, ta main refuse de se lever. Tu as trop peur de bafouiller à nouveau et de déclencher les rires de Jax et de sa bande. Tu te transformes progressivement en ombre silencieuse. Tes notes commencent à s'en ressentir.",
  [
    { text: "Si tu décides de briser ce mutisme en demandant un rendez-vous avec la Conseillère d'Orientation, va au 28.", targetId: 28, label: "Consulter la Conseillère" },
    { text: "Si tu t'installes dans ce silence en espérant que l'année passera vite, va au 29.", targetId: 29, label: "Résignation silencieuse" }
  ],
  { serenity: -20, solidarity: -15, trust: -10 },
  "La peur des moqueries entraîne l'inhibition scolaire : l'élève renonce à participer pour se protéger du regard des autres."
);

// 15
addStep(
  15,
  "L'écoute bienveillante de Lyra",
  "Coursive Principale • Près des Sas",
  1,
  "« Corin, attends ! », t'appelle Lyra en te rattrapant. « Jax est un crétin. Il fait rire deux ou trois suiveurs, mais le reste de la classe sait très bien que tu es le plus fort en calcul. Ne le laisse pas te faire douter de toi. Si tu veux, au prochain exposé, on le présentera à deux. Je ferai l'intro et tu feras les maths ! » Sa proposition généreuse met du baume sur ton cœur blessé.",
  [
    { text: "Si tu acceptes son aide pour former un binôme solide, va au 30.", targetId: 30, label: "Accepter le binôme avec Lyra" },
    { text: "Si tu refuses par fierté mal placée en disant que tu dois te débrouiller seul, va au 31.", targetId: 31, label: "Refuser par fierté" }
  ],
  { serenity: 15, solidarity: 25, trust: 20, badge: "Main Tendue" },
  "Le soutien spontané d'un camarade brise l'isolement provoqué par la moquerie et redonne courage à la victime."
);

// 16
addStep(
  16,
  "La conservation rigoureuse des preuves audio",
  "Holo-Bibliothèque • Console 4",
  1,
  "Tu branches ta clé d'intégration sur le terminal de la bibliothèque et sauvegardes la note vocale insultante, le fichier source, l'horodatage et l'identifiant de transmission de Jax. Tu imprimes également le journal des messages du canal `#Oxy-Radio`. Tu possèdes maintenant la preuve matérielle d'un harcèlement verbal répété avec intention d'humilier.",
  [
    { text: "Si tu apportes ce dossier audio au Conseiller Principal de la station, va au 32.", targetId: 32, label: "Déposer le dossier audio" },
    { text: "Si tu décides d'en parler d'abord à tes parents/tuteurs lors de la liaison familiale du soir, va au 33.", targetId: 33, label: "Parler aux parents" }
  ],
  { serenity: 10, solidarity: 5, trust: 25, badge: "Preuve Numérique Sauvegardée" },
  "Garder les messages vocaux et écrits permet de prouver la récurrence et la gravité des attaques devant la direction."
);

// 17
addStep(
  17,
  "Les larmes dans l'alcôve et la main de la bibliothécaire",
  "Holo-Bibliothèque",
  1,
  "Les larmes coulent silencieusement sur tes joues. Tu as l'impression que ta voix est une malédiction. Une silhouette douce s'approche : c'est Madame Orla, la responsable de la bibliothèque. Elle s'accroupit à tes côtés, te tend un mouchoir et écoute le son qui tourne encore en boucle sur ton casque. Son regard devient indigné : « C'est indigne et odieux. Tu n'as pas à subir cela, Corin. Viens avec moi dans mon bureau, nous allons stopper cette infamie tout de suite. »",
  [
    { text: "Si tu la suis dans son bureau pour rédiger un signalement officiel, va au 34.", targetId: 34, label: "Rédiger le signalement avec Orla" },
    { text: "Si la honte te paralyse et que tu demandes à retourner dans ta cabine, va au 35.", targetId: 35, label: "Demander à fuir en cabine" }
  ],
  { serenity: 15, solidarity: 10, trust: 25, badge: "Écoute Bienveillante" },
  "Le personnel non enseignant (bibliothécaires, surveillants, agents) constitue souvent un relais protecteur essentiel pour recueillir la parole."
);

// 18
addStep(
  18,
  "L'explication franche avec le surveillant",
  "Poste de Veilleur • Niveau 3",
  1,
  "Le surveillant t'emmène dans le bureau de veille. Tu prends une profonde inspiration et lui montres ton implant : « Monsieur, je sais que j'ai crié, mais je n'en peux plus. Jax et sa bande se moquent de mon bégaiement tous les jours, m'appellent 'Bip-Bip' et diffusent des bruits dans les coursives. J'ai craqué. » Le surveillant s'adoucit : « Je comprends ta détresse. Ta réaction n'était pas la bonne, mais la cause est très grave. Nous allons annuler la punition et convoquer Jax dès cet après-midi. »",
  [
    { text: "Si tu participes à l'entretien de régulation avec le surveillant, va au 36.", targetId: 36, label: "Participer à l'entretien" },
    { text: "Si tu demandes à ce que la Médiatrice Soa intervienne également, va au 37.", targetId: 37, label: "Solliciter Soa" }
  ],
  { serenity: 15, solidarity: 15, trust: 25, badge: "Justice Restaurée" },
  "Reconnaître son emportement tout en expliquant le harcèlement continu permet aux adultes de réajuster la sanction."
);

// 19
addStep(
  19,
  "La fuite dangereuse dans les sas inférieurs",
  "Sas d'Évacuation B • Niveau -1",
  1,
  "Les larmes de rage aux yeux, tu cours vers les niveaux inférieurs désaffectés d'Oxy-Kaelis. L'air y est plus froid, les lumières tamisées. Tu t'assois contre une valve de dépressurisation, le cœur battant la chamade. Tu te dis que si tu disparais, ils comprendront peut-être enfin le mal qu'ils font. Mais la fugue ne punit que toi-même et fait paniquer ceux qui t'aiment.",
  [
    { text: "Si tu réalises ton imprudence et remontes vers les quartiers habités, va au 12.", targetId: 12, label: "Remonter vers la vie" },
    { text: "Si tu t'enfermes dans ce sas isolé jusqu'au déclenchement des alarmes, va au 38.", targetId: 38, label: "Attendre les alarmes" }
  ],
  { serenity: -30, solidarity: -20, trust: -20 },
  "La tentation de la fugue ou de la disparition est un signal d'alerte critique lié à l'épuisement émotionnel causé par les insultes répétées."
);

// 20
addStep(
  20,
  "La régulation des canaux de communication",
  "Bureau de Maître Olan",
  1,
  "Maître Olan écoute attentivement l'extrait audio sur ton datapad. « C'est une infraction formelle à la Charte Numérique de la station. Le canal `#Oxy-Radio` a été détourné pour du harcèlement de meute. » Il contacte immédiatement l'administrateur réseau d'Oxy-Kaelis pour geler le canal pirate et identifie l'adresse de diffusion de Jax. La machine administrative protectrice se met en marche.",
  [
    { text: "Si tu acceptes que l'affaire soit traitée selon le protocole officiel de l'établissement, va au 39.", targetId: 39, label: "Valider le protocole officiel" },
    { text: "Si tu demandes à ce qu'une heure de vie de classe soit consacrée au respect verbal, va au 40.", targetId: 40, label: "Demander une heure de vie de classe" }
  ],
  { serenity: 20, solidarity: 15, trust: 30, badge: "Régulation des Réseaux" },
  "Fermer les canaux de diffusion toxiques et identifier les auteurs numériques coupe l'oxygène du cyber-harcèlement."
);

// 21
addStep(
  21,
  "L'épreuve de la récréation sous haute surveillance",
  "Dôme Récréatif • Secteur Central",
  1,
  "Pendant la récréation orbitale, tu remarques que Maître Olan et deux Veilleurs patrouillent activement au centre du dôme. Jax te croise avec sa clique habituelle, mais n'ose pas ouvrir la bouche sous le regard acéré des adultes. Tu réalises que la présence vigilante des éducateurs suffit à museler les intimidateurs lâches.",
  [
    { text: "Si tu profites de cette accalmie pour rejoindre le groupe de révision de Lyra, va au 30.", targetId: 30, label: "Rejoindre Lyra" },
    { text: "Si tu t'isoles par habitude sur un banc en apesanteur, va au 14.", targetId: 14, label: "Rester isolé sur le banc" }
  ],
  { serenity: 15, solidarity: 10, trust: 20 },
  "La surveillance active des adultes dans les zones de récréation dissuade immédiatement les agressions verbales directes."
);

// 22
addStep(
  22,
  "Le courage de poser ses limites sans trembler",
  "Sas d'Hydro-Gravité",
  2,
  "Tu regardes Jax sans reculer d'un pouce : « Tes menaces prouvent juste que tu n'as aucun argument, Jax. Si tu postes quoi que ce soit sur moi, les modérateurs et la direction ont déjà ton identifiant. Alors réfléchis bien avant de creuser ton propre trou. » Jax ouvre la bouche pour répliquer, mais tes mots calmes et lucides l'ont pris de court. Il pivote sur ses talons et s'éloigne en maugréant.",
  [
    { text: "Si tu vas tout de même signaler l'échange à un adulte pour tracer la menace, va au 20.", targetId: 20, label: "Tracer la menace" },
    { text: "Si tu rejoins tes amis fort de cette victoire psychologique, va au 12.", targetId: 12, label: "Rejoindre ses amis" }
  ],
  { serenity: 25, solidarity: 15, trust: 20, badge: "Front Posé" },
  "Poser des limites claires et rappeler la loi désamorce la posture de toute-puissance du harceleur."
);

// 23
addStep(
  23,
  "Le piège du chantage consenti",
  "Sas d'Hydro-Gravité",
  2,
  "Pris de panique, tu murmures : « Jax... si tu effaces le vocal et arrêtes de m'appeler comme ça, je te rédige ton rapport de physique pour demain. » Un grand sourire carnassier illumine le visage de Jax : « Marché conclu, le Bip-Bip ! Et tâche d'avoir 18, sinon la vidéo sort quand même. » Tu viens d'entrer dans un engrenage infernal. En cédant au chantage, tu lui as donné les clés de ta liberté.",
  [
    { text: "Si tu passes la nuit à faire son devoir la mort dans l'âme, va au 41.", targetId: 41, label: "Faire le devoir de Jax" },
    { text: "Si tu réalises ton erreur et vas tout avouer à la Médiatrice Soa dès le matin, va au 42.", targetId: 42, label: "Tout avouer à Soa" }
  ],
  { serenity: -30, solidarity: -20, trust: -25 },
  "Céder au chantage pour faire cesser les moqueries ne résout rien : cela transforme la moquerie en extorsion permanente."
);

// 24
addStep(
  24,
  "L'Alliance des Navigateurs d'Orion",
  "Sphère Panoramique",
  2,
  "Autour de la table d'orientation stellaire, vous êtes désormais trois : toi, Naël et Sylvan. Vous partagez vos fiches de calcul. Sylvan admire ta rapidité d'esprit : « Tu trouves les dérivées orbitales en deux secondes ! Pourquoi tu doutes autant de toi en classe ? » Naël ajoute : « Dès demain, quand Jax ouvrira sa grande bouche, on sera là pour lui dire que ses vannes sont pourries. Tu ne seras plus jamais seul au tableau. »",
  [
    { text: "Si vous organisez une réponse collective bienveillante pour le prochain cours, va au 43.", targetId: 43, label: "Préparer la réponse collective" },
    { text: "Si vous préparez ensemble l'atelier d'expression orale de la semaine, va au 44.", targetId: 44, label: "Préparer l'atelier d'expression" }
  ],
  { serenity: 25, solidarity: 35, trust: 25, badge: "Bouclier des Navigateurs" },
  "L'alliance de pairs bienveillants est le bouclier le plus efficace pour redonner confiance à un élève ciblé par les moqueries."
);

// 25
addStep(
  25,
  "L'expression du venin invisible",
  "Sphère Panoramique",
  2,
  "« Vous savez... le pire, ce n'est pas le bégaiement », leur confies-tu les yeux fixés sur la Terre. « Le pire, c'est l'alibi du 'c'était pour rire'. Dès que je dis que ça me blesse, tout le monde me dit que je n'ai aucun humour, que je prends tout au premier degré. Du coup, je finis par me sentir coupable de souffrir. » Naël pose une main fraternelle sur ton épaule : « C'est la tactique classique des manipulateurs, Corin. On va t'aider à démonter ce mensonge. »",
  [
    { text: "Si tu t'engages à ne plus jamais rire par politesse aux moqueries de Jax, va au 45.", targetId: 45, label: "Refuser le rire de politesse" },
    { text: "Si tu participes à l'atelier de communication non-violente de la station, va au 46.", targetId: 46, label: "Atelier CNV" }
  ],
  { serenity: 20, solidarity: 30, trust: 25, badge: "Prise de Conscience du Venin" },
  "Identifier le mécanisme pervers du 'c'était pour rire' libère la victime de la fausse culpabilité du manque d'humour."
);

// 26
addStep(
  26,
  "La tentative d'apaisement diplomatique",
  "Coursive Centrale",
  2,
  "Tu t'approches de Jax avant le cours d'hydro-statique : « Jax, pour tout à l'heure, je n'aurais pas dû te traiter de cancre. Mais toi non plus, tu ne devrais pas te moquer de mon élocution. On peut repartir sur des bases saines ? » Jax ricane avec condescendance : « T'as peur, hein ? Maintenant c'est trop tard, mon pote. T'as voulu jouer au grand, assume. » Tu comprends que la négociation solitaire avec un harceleur sans cadre adulte est vouée à l'échec.",
  [
    { text: "Si tu constates son refus et décides d'activer le protocole de médiation officielle, va au 37.", targetId: 37, label: "Activer la médiation officielle" },
    { text: "Si tu te replies sur ton groupe d'amis fidèles sans plus lui accorder d'importance, va au 24.", targetId: 24, label: "Rejoindre ses amis" }
  ],
  { serenity: 5, solidarity: 10, trust: 15 },
  "La tentative de conciliation montre la bonne foi de la cible, mais face à un agresseur endurci, l'intervention d'un tiers est indispensable."
);

// 27
addStep(
  27,
  "L'escalade des insultes et le lynchage réciproque",
  "Coursive Centrale",
  2,
  "Pendant deux jours, les insultes volent à chaque changement de coursive. Tu répliques par des piques sur son physique, il réplique sur ton implant. L'ambiance devient irrespirable. La classe entière se divise en deux clans hostiles qui s'invectivent sur les réseaux. Tu n'arrives plus à dormir, ton biosenseur passe en vigilance orange. La guerre verbale est en train de détruire ton équilibre.",
  [
    { text: "Si tu décides de siffler la fin de la récréation toxique en allant voir la Direction, va au 32.", targetId: 32, label: "Aller à la Direction" },
    { text: "Si tu t'enfermes dans ta chambre en refusant de sortir pour le contrôle de maths, va au 47.", targetId: 47, label: "Sécher le contrôle" }
  ],
  { serenity: -30, solidarity: -20, trust: -20 },
  "L'escalade d'invectives pollue tout le climat de classe et détourne l'attention de la responsabilité initiale de l'agresseur."
);

// 28
addStep(
  28,
  "Le diagnostic éclairant de la Conseillère de Bord",
  "Pôle Orientation & Écoute • Bureau 2",
  2,
  "Madame Varis, la Conseillère de Bord, t'écoute sans t'interrompre. « Corin, le harcèlement verbal produit ce qu'on appelle la 'sidération psychique'. Quand on t'attaque sur ta voix, ton cerveau se met en mode survie et bloque tes capacités d'élocution. Ce n'est pas ton implant qui a un problème, c'est l'agression qui te paralyse. Nous allons t'apprendre des techniques de respiration et recadrer le groupe immédiatement. »",
  [
    { text: "Si tu suis ses exercices de respiration et de réaffirmation vocale, va au 48.", targetId: 48, label: "Exercices de voix" },
    { text: "Si tu lui demandes d'organiser une séance de régulation avec la classe, va au 40.", targetId: 40, label: "Séance de régulation" }
  ],
  { serenity: 20, solidarity: 15, trust: 30, badge: "Compréhension Psychique" },
  "Comprendre que le bégaiement ou le blocage est une réaction somatique normale au stress du harcèlement restaure l'estime de soi."
);

// 29
addStep(
  29,
  "La chute lente des résultats scolaires",
  "Quartier dortoir",
  2,
  "En refusant de participer et en restant muet en classe, tes moyennes chutent de 17 à 9. Sur ton bulletin d'évaluation orbitale, les professeurs écrivent : *« Corin semble absent, éteint, ne participe plus. Que se passe-t-il ? »* En subissant les moqueries en silence, tu laisses l'injustice détruire tes rêves d'avenir sans que personne ne sache pourquoi.",
  [
    { text: "Si ce bulletin d'alerte te pousse à avoir une conversation sincère avec tes tuteurs, va au 33.", targetId: 33, label: "Conversation avec les tuteurs" },
    { text: "Si tu t'enfonces dans la certitude que tu es voué à l'échec sur Oxy-Kaelis, va au 49.", targetId: 49, label: "Sombrer dans l'échec" }
  ],
  { serenity: -25, solidarity: -15, trust: -15 },
  "L'effondrement des résultats scolaires chez un bon élève est l'un des symptômes majeurs d'un harcèlement moral ou verbal caché."
);

// 30
addStep(
  30,
  "Le binôme exemplaire avec Lyra",
  "Laboratoire d'Hydro-Dynamique",
  2,
  "Pour le TP de propulsion ionique, Lyra s'installe d'emblée à tes côtés sous les yeux de Jax. Pendant la séance, vous travaillez en parfaite harmonie : Lyra gère les commandes mécaniques et tu calcules les flux de plasma. Quand Jax tente une imitation sarcastique depuis sa paillasse, Lyra se retourne et lâche d'une voix limpide : « Jax, t'es lourd. Trouve-toi une personnalité au lieu de répéter les mêmes vannes depuis trois semaines. » La classe ricane... mais de Jax cette fois.",
  [
    { text: "Si tu remercies chaleureusement Lyra pour son intervention décisive, va au 50.", targetId: 50, label: "Remercier Lyra" },
    { text: "Si tu profites de cet élan pour reprendre confiance en ta voix, va au 51.", targetId: 51, label: "Reprendre confiance en sa voix" }
  ],
  { serenity: 25, solidarity: 35, trust: 25, badge: "Défenseuse de Paire" },
  "Quand un camarade populaire prend publiquement la défense de la cible, le harceleur perd instantanément son statut de 'comique'."
);

// 31
addStep(
  31,
  "L'amertume de l'orgueil blessé",
  "Coursive Dorsale",
  2,
  "« Je n'ai pas besoin de ton aide, Lyra. Je ne suis pas un bébé », réponds-tu d'un ton sec avant de t'éloigner. Lyra soupire, déçue par ton agressivité défensive. En repoussant les mains tendues par fierté, tu te retrouves à nouveau seul face à la meute de Jax. L'orgueil est un très mauvais conseiller face au harcèlement de groupe.",
  [
    { text: "Si tu regrettes tes paroles et lui envoies un message d'excuse sincère, va au 52.", targetId: 52, label: "S'excuser auprès de Lyra" },
    { text: "Si tu t'enfermes dans ta solitude farouche, va au 14.", targetId: 14, label: "Retourner à la solitude" }
  ],
  { serenity: -10, solidarity: -20, trust: -10 },
  "Rejeter les alliés par peur de paraître faible prive la victime des soutiens indispensables pour faire cesser les agressions."
);

// 32
addStep(
  32,
  "Le signalement officiel auprès du Directeur",
  "Bureau de la Direction • Passerelle Supérieure",
  2,
  "Tu es assis dans le bureau du Directeur de la station, Monsieur Thorne, en compagnie de Madame Varis. Tu déposes ta clé contenant les captures de messages, les enregistrements audio du canal `#Oxy-Radio` et la liste des sobriquets quotidiens. Monsieur Thorne écoute les fichiers avec un visage grave : « Ce n'est ni de l'humour, ni de la camaraderie. C'est du harcèlement moral aggravé par voie électronique. Jax et ses complices vont être immédiatement soumis à la procédure disciplinaire et réparatrice. »",
  [
    { text: "Si tu demandes la mise en œuvre de la médiation réparatrice avec la Médiatrice Soa, va au 53.", targetId: 53, label: "Médiation réparatrice avec Soa" },
    { text: "Si tu laisses la direction appliquer les sanctions prévues par le Code de la station, va au 54.", targetId: 54, label: "Laisser agir la direction" }
  ],
  { serenity: 25, solidarity: 20, trust: 40, badge: "Signalement Institutionnel" },
  "Fournir des éléments précis et vérifiables permet à l'institution scolaire de qualifier juridiquement le harcèlement et d'agir avec fermeté."
);

// 33
addStep(
  33,
  "Le soutien inconditionnel de la famille orbitale",
  "Cabine Personnelle • Liaison Holo-Familiale",
  2,
  "Sur l'écran holographique de communication, tes parents t'écoutent vider ton sac. Ta mère a les larmes aux yeux, ton père serre les poings : « Corin, mon garçon, tu n'es coupable de rien. Ton bégaiement est lié à l'adaptation de pression et tu es un élève brillant. Demain matin, nous contactons la direction de la station pour exiger que ta sécurité morale soit garantie. Tu n'es plus seul. » Cet amour inconditionnel fait tomber le fardeau de tes épaules.",
  [
    { text: "If you attend the appointment with your parents and the headmaster the next day, go to 55.", targetId: 55, label: "Rendez-vous tripartite" },
    { text: "Si tu prépares ton retour en classe avec le moral retrouvé, va au 51.", targetId: 51, label: "Retour revigoré" }
  ],
  { serenity: 30, solidarity: 25, trust: 45, badge: "Bouclier Parental" },
  "La famille est le premier refuge protecteur : le dialogue avec les parents déculpabilise l'enfant et déclenche l'action des adultes."
);

// 34
addStep(
  34,
  "L'accompagnement bienveillant de Madame Orla",
  "Bureau de la Bibliothèque",
  2,
  "Madame Orla t'offre une tasse de thé chaud aux herbes martiennes. Elle t'aide à rédiger calmement une déclaration d'incident sans haine, en rapportant uniquement les faits : les dates, les heures, les mots prononcés et l'impact sur ton travail scolaire. « Les écrits restent, Corin. Quand les faits sont posés noir sur blanc, les harceleurs ne peuvent plus se cacher derrière le prétexte de la rigolade. »",
  [
    { text: "Si tu transmets cette fiche d'incident au bureau de la vie scolaire, va au 32.", targetId: 32, label: "Transmettre à la vie scolaire" },
    { text: "Si tu t'entraînes avec elle à la lecture à voix haute pour reprendre confiance, va au 56.", targetId: 56, label: "Entraînement de lecture" }
  ],
  { serenity: 20, solidarity: 20, trust: 30, badge: "Déclaration Factuelle" },
  "Rédiger un écrit factuel avec l'aide d'un adulte bienveillant structure la démarche et protège la victime de la confusion émotionnelle."
);

// 35
addStep(
  35,
  "L'enfermement dans la cabine obscure",
  "Cabine Personnelle",
  2,
  "Tu t'enfuis dans ta cabine et verrouilles le sas d'accès. Tu t'enroules dans ta couverture magnétique. Pendant trois jours, tu refuses d'ouvrir, même lorsque tes camarades viennent frapper doucement à la porte. L'isolement complet amplifie la détresse : les rumeurs continuent de circuler sans que personne ne les démente. Ton biosenseur clignote en alerte de repli dépressif.",
  [
    { text: "Si tu acceptes d'ouvrir la porte lorsque la Médiatrice Soa vient te parler à travers le sas, va au 57.", targetId: 57, label: "Ouvrir à Soa" },
    { text: "Si tu t'enfermes dans un refus catégorique de retourner à l'école, va au 100.", targetId: 100, label: "Vers la Fin Obscure" }
  ],
  { serenity: -35, solidarity: -30, trust: -35 },
  "La phobie scolaire et le confinement sont les conséquences ultimes des moqueries non traitées : il faut briser l'enfermement au plus vite."
);

// 36
addStep(
  36,
  "La confrontation cadrée avec Jax",
  "Bureau de la Vie Scolaire",
  3,
  "Jax est convoqué devant toi en présence du surveillant-chef. Dépouillé de son auditoire habituel, Jax n'a plus du tout l'air d'un caïd. Il balbutie : « Mais monsieur... c'était juste pour déconner, tout le monde rigolait... » Le surveillant le coupe d'une voix tranchante : « Non Jax. Tu étais le seul à rire de ta cruauté, et Corin en souffrait chaque jour. Se moquer d'une particularité physique ou vocale est un délit réprimé par le Code spatial. » Jax baisse les yeux, écrasé par la honte.",
  [
    { text: "Si tu acceptes que Jax effectue des travaux d'intérêt général à la bibliothèque en réparation, va au 58.", targetId: 58, label: "Travaux réparateurs" },
    { text: "Si tu demandes à ce qu'il présente des excuses publiques sur le canal radio, va au 59.", targetId: 59, label: "Excuses radio" }
  ],
  { serenity: 25, solidarity: 20, trust: 35, badge: "Démantèlement de l'Alibi" },
  "Confronter l'auteur en tête-à-tête devant un adulte détruit l'alibi du 'pour rire' et fait prendre conscience de la gravité légale des faits."
);

// 37
addStep(
  37,
  "La prise en charge par la Médiation des Pairs",
  "Espace Médiation Soa",
  3,
  "Soa t'accueille avec un grand sourire rassurant. Formée aux méthodes de justice restaurative, elle maîtrise parfaitement la question du harcèlement verbal. « Jax souffre probablement d'un besoin maladif de capter l'attention parce qu'il se sent nul par ailleurs. Mais cela ne lui donne aucun droit de t'écraser. Nous allons mener une médiation en trois temps pour sécuriser ton quotidien et rééduquer le groupe. »",
  [
    { text: "Si tu participes activement au protocole de médiation de Soa, va au 60.", targetId: 60, label: "Protocole de médiation Soa" },
    { text: "Si tu rejoins l'atelier d'éloquence pour transformer ta voix en atout, va au 61.", targetId: 61, label: "Atelier d'éloquence" }
  ],
  { serenity: 25, solidarity: 30, trust: 35, badge: "Médiation des Pairs Activée" },
  "La médiation par les pairs désamorce les conflits relationnels en responsabilisant les élèves sans esprit de vengeance."
);

// 38
addStep(
  38,
  "Le déclenchement de l'alerte d'urgence et le secours",
  "Sas d'Évacuation B",
  3,
  "Les sirènes retentissent soudain : *« Alerte dépressurisation niveau -1. Évacuation immédiate. »* Deux Veilleurs en combinaison pressurisée déboulent dans le couloir et te trouvent prostré contre la valve. Le Capitaine Vane te soulève dans ses bras avec précaution : « Corin ! Qu'est-ce que tu fais là ? Tu aurais pu mourir asphyxié ! » Devant l'angoisse sincère du Capitaine, tu fonds en larmes : « Je voulais juste qu'ils arrêtent de rire de moi... »",
  [
    { text: "Si tu acceptes les soins au pôle médical et révèles toute la vérité au Capitaine, va au 62.", targetId: 62, label: "Révéler toute la vérité au Capitaine" },
    { text: "Si tu te mures dans le refus de parler, va au 99.", targetId: 99, label: "Vers la Fin Neutre" }
  ],
  { serenity: 10, solidarity: 15, trust: 25, badge: "Sauvetage & Prise de Conscience" },
  "Les situations de fugue révèlent la détresse extrême causée par le harcèlement verbal et imposent une intervention globale d'urgence."
);

// 39
addStep(
  39,
  "L'application du protocole pHARe orbital",
  "Salle du Conseil",
  3,
  "L'équipe éducative déploie le protocole officiel : une cellule de veille est constituée, Jax et ses rieurs sont reçus individuellement dans le cadre de la méthode de préoccupation partagée, et un suivi hebdomadaire est mis en place. Privé de la complicité de ses camarades, Jax cesse immédiatement ses provocations. L'atmosphère s'allège d'un coup dans les coursives.",
  [
    { text: "Si tu réintègres la classe avec la certitude d'être protégé, va au 63.", targetId: 63, label: "Retour protégé en classe" },
    { text: "Si tu proposes d'animer le club d'astronomie pour partager ta passion, va au 64.", targetId: 64, label: "Animer le club d'astronomie" }
  ],
  { serenity: 30, solidarity: 25, trust: 40, badge: "Protocole pHARe Réussi" },
  "Le traitement méthodique et coordonné par l'ensemble de l'équipe éducative éteint durablement le harcèlement scolaire."
);

// 40
addStep(
  40,
  "L'Heure de Vie de Classe sur les Mots qui Blessent",
  "Salle du Cycle Alpha",
  3,
  "La professeure Vane consacre l'heure entière à un débat collectif : « Où s'arrête la blague et où commence l'insulte ? » Sans jamais te nommer pour te préserver, elle fait réfléchir les élèves sur l'impact des moqueries répétées. Sylvan prend la parole : « Parfois on rigole juste pour faire comme tout le monde, alors qu'en vrai c'est méchant et pas drôle du tout. » Plusieurs élèves approuvent. Jax, isolé sur sa chaise, réalise que sa cour l'abandonne.",
  [
    { text: "Si tu prends la parole avec courage pour expliquer ton ressenti, va au 65.", targetId: 65, label: "Témoigner lors du débat" },
    { text: "Si tu savoures silencieusement cette prise de conscience collective, va au 66.", targetId: 66, label: "Prise de conscience générale" }
  ],
  { serenity: 30, solidarity: 35, trust: 35, badge: "Débat Éducatif Libérateur" },
  "Les heures de vie de classe permettent à la majorité silencieuse d'exprimer son désaccord avec les intimidateurs et de changer la norme du groupe."
);

// 41
addStep(
  41,
  "L'amère déception du racket intellectuel",
  "Modules de Rechargement",
  3,
  "Après avoir passé la nuit à rédiger le devoir de Jax, tu lui donnes la tablette au sas. Jax regarde la note obtenue : 19/20. « Pas mal, l'esclave ! Mais demain, tu me fais la géographie orbitale, sinon je balance ton enregistrement à la pause de midi ! » Tu réalises l'horreur de ton erreur : en cédant, tu n'as pas acheté la paix, tu as acheté de nouvelles menaces. Tu es devenu le souffre-douleur corvéable de Jax.",
  [
    { text: "Si tu décides de tout casser et d'aller dénoncer ce chantage au Principal immédiatement, va au 32.", targetId: 32, label: "Dénoncer le chantage" },
    { text: "Si tu t'effondres en larmes d'impuissance dans le couloir, va au 67.", targetId: 67, label: "Effondrement dans le couloir" }
  ],
  { serenity: -35, solidarity: -25, trust: -30 },
  "Céder au chantage amplifie les exigences du harceleur : seule la dénonciation courageuse aux adultes brise le cercle de la servitude."
);

// 42
addStep(
  42,
  "La confession libératrice à la Médiatrice",
  "Espace Médiation Soa",
  3,
  "Tu arrives en tremblant dans le bureau de Soa et poses le devoir extorqué sur la table : « Soa... j'ai fait une bêtise. Jax m'a menacé de diffuser un audio moqueur si je ne faisais pas son travail de physique. J'ai eu peur et j'ai cédé... » Soa te prend par les mains : « Tu n'as pas fait de bêtise, Corin. Tu as été victime d'un chantage intolérable sous la contrainte. C'est Jax qui est coupable d'extorsion. Nous allons régler cela ensemble avec le proviseur. »",
  [
    { text: "If you accompany Soa to the management office to file a complaint, go to 68.", targetId: 68, label: "Accompagner Soa à la direction" },
    { text: "Si tu te reposes quelques heures au pôle d'écoute avant la confrontation, va au 69.", targetId: 69, label: "Repos au pôle d'écoute" }
  ],
  { serenity: 20, solidarity: 25, trust: 35, badge: "Vérité Révélée" },
  "Avouer avoir cédé à un chantage n'est pas une honte : les médiateurs savent que la contrainte morale invalide toute faute de la victime."
);

// 43
addStep(
  43,
  "Le front commun lors de la présentation orale",
  "Amphithéâtre Galilée",
  3,
  "C'est l'heure du grand oral de physique. Tu montes sur l'estrade, flanqué de Naël et Sylvan. Dès que Jax esquisse un ricanement, Sylvan se tourne vers lui et dit calmement : « Jax, tais-toi, on veut écouter l'exposé. » Naël renchérit : « Ouais, tes bruits parasites commencent à bien faire. » Déconcerté par cette réplique synchronisée, Jax se tasse sur son siège. Tu prends la parole et, soutenu par tes camarades, ton bégaiement disparaît presque totalement.",
  [
    { text: "Si tu termines ta démonstration sous les bravos de la classe, va au 70.", targetId: 70, label: "Bravos de la classe" },
    { text: "Si tu savoures cette victoire d'équipe vers la conclusion lumineuse, va au 71.", targetId: 71, label: "Vers l'apothéose" }
  ],
  { serenity: 35, solidarity: 45, trust: 30, badge: "Mur de Solidarité" },
  "Quand les témoins s'expriment ensemble pour faire taire l'agresseur, la victime retrouve sa voix et sa pleine sérénité."
);

// 44
addStep(
  44,
  "L'atelier de maîtrise vocale en apesanteur",
  "Sphère d'Éloquence • Niveau 5",
  3,
  "Guidé par le professeur d'expression scénique d'Oxy-Kaelis, tu t'entraînes à projeter ta voix en apesanteur. Tu découvres que ton bégaiement n'est pas une fatalité : c'est une réaction au manque d'ancrage respiratoire. En quelques séances avec tes amis, tu apprends à poser ta voix, à marquer des pauses théâtrales et à transformer ton hésitation en force narrative. Ton éloquence devient captivante.",
  [
    { text: "Si tu t'inscris au concours annuel d'éloquence de la station, va au 72.", targetId: 72, label: "Concours d'éloquence" },
    { text: "Si tu animes la conférence scientifique du solstice, va au 73.", targetId: 73, label: "Conférence du solstice" }
  ],
  { serenity: 35, solidarity: 35, trust: 35, badge: "Maître de la Parole" },
  "Développer ses compétences oratoires dans un cadre bienveillant permet de dépasser les blocages psychologiques et de s'affirmer."
);

// 45
addStep(
  45,
  "Le silence de plomb face aux vannes",
  "Réfectoire des Synthèses",
  3,
  "À midi, Jax s'approche de ta table et lance une nouvelle moquerie : « Alors Corin, t'as fini de recharger tes batteries de robot ? » Ni toi, ni Lyra, ni Naël, ni les autres élèves de la table ne riez. Pas un sourire, pas un regard complice. Un silence glacial et lourd s'abat sur le réfectoire. Jax attend la chute, esquisse un rire nerveux... mais personne ne le suit. Gêné comme jamais, il tourne les talons dans l'indifférence générale. La vanne est morte faute d'écho.",
  [
    { text: "Si tu félicites la tablée pour cette solidarité exemplaire, va au 74.", targetId: 74, label: "Féliciter la tablée" },
    { text: "Si tu profites de ton repas dans le calme le plus complet, va au 75.", targetId: 75, label: "Repas serein" }
  ],
  { serenity: 30, solidarity: 40, trust: 30, badge: "Silence Désarment" },
  "Refuser collectivement de rire aux moqueries prive l'intimidateur de sa récompense sociale et étouffe le harcèlement."
);

// 46
addStep(
  46,
  "La pratique de la communication bienveillante",
  "Salle Polyvalente",
  3,
  "Lors de l'atelier de communication, tu apprends la formule magique du respect : « Quand tu dis cela... je ressens cela... et j'ai besoin de cela. » Le lendemain, quand Jax t'invective, tu réponds posément devant trois témoins : « Jax, quand tu déformes ma voix, je me sens rabaissé, et j'ai besoin de respect pour travailler. Cesse immédiatement. » Ces mots d'adulte désarment totalement l'agressivité puérile de Jax.",
  [
    { text: "Si tu constates que Jax reste sans voix et passe son chemin, va au 76.", targetId: 76, label: "Jax passe son chemin" },
    { text: "Si tu partages cette méthode avec d'autres camarades ciblés, va au 77.", targetId: 77, label: "Partager la méthode" }
  ],
  { serenity: 30, solidarity: 35, trust: 35, badge: "Communication Protectrice" },
  "La communication non-violente permet d'affirmer ses limites sans insulte ni soumission, plaçant l'agresseur face à sa propre responsabilité."
);

// 47
addStep(
  47,
  "La spirale de l'évitement et de l'absentéisme",
  "Sas Secondaire",
  3,
  "Tu as séché le contrôle d'astro-physique. Réfugié derrière les bacs de traitement d'eau, tu trembles de froid et d'angoisse. Ton terminal sonne en boucle : tes parents et la direction s'inquiètent. En fuyant les examens pour échapper aux moqueries, tu es en train de sacrifier ton propre avenir pour quelques imbéciles qui n'en valent pas la peine.",
  [
    { text: "Si tu te ressaisis et cours vers le secrétariat pour avouer la vérité, va au 18.", targetId: 18, label: "Courir au secrétariat" },
    { text: "Si tu t'enfermes dans la honte jusqu'au soir, va au 99.", targetId: 99, label: "Vers la Fin Neutre" }
  ],
  { serenity: -30, solidarity: -20, trust: -25 },
  "L'évitement scolaire prive la victime de son droit à l'éducation : alerter les adultes est le seul moyen de reprendre sa scolarité en main."
);

// 48
addStep(
  48,
  "La respiration ventrale et la voix affirmée",
  "Pôle Orientation & Écoute",
  3,
  "Avec Madame Varis, tu pratiques la cohérence cardiaque orbitale. En trois minutes d'exercices respiratoires, ton rythme cardiaque ralentit de 110 à 68 battements par minute. Ton diaphragme se relâche. Lorsque tu lis à voix haute un passage du Traité de Gravitation, ta voix est ample, posée, sans le moindre accroc. Tu réalises que ton corps avait simplement besoin de calme pour retrouver sa pleine puissance.",
  [
    { text: "Si tu appliques cette respiration avant chaque prise de parole en classe, va au 78.", targetId: 78, label: "Appliquer la respiration" },
    { text: "Si tu prépares ton intervention au Forum des Sciences, va au 79.", targetId: 79, label: "Préparer le Forum" }
  ],
  { serenity: 30, solidarity: 20, trust: 35, badge: "Souffle Retrouvé" },
  "La régulation corporelle du stress aide à surmonter les blocages vocaux causés par l'anxiété sociale."
);

// 49
addStep(
  49,
  "Le naufrage de l'estime de soi dans la pénombre",
  "Cabine Personnelle",
  3,
  "Tu t'assois sur ta couchette, les yeux rivés sur ton datapad éteint. Tu te dis que tu es bon à rien, que ta voix est ridicule et que tu n'aurais jamais dû quitter la Terre pour venir sur cette station orbitale. Les mensonges répétés de Jax sont devenus ta propre vérité intérieure. Si personne n'intervient pour briser cette hypnose destructrice, la rupture scolaire est imminente.",
  [
    { text: "Si tu appelles d'urgence le numéro vert 3018 de soutien psychologique, va au 80.", targetId: 80, label: "Appeler le 3018" },
    { text: "Si tu laisses le silence engloutir tes derniers espoirs, va au 100.", targetId: 100, label: "Vers la Fin Obscure" }
  ],
  { serenity: -45, solidarity: -35, trust: -40 },
  "Le harcèlement verbal détruit l'image de soi : appeler des lignes d'écoute d'urgence permet de sauver des vies en danger de décrochage."
);

// 50
addStep(
  50,
  "La consolidation de l'amitié véritable",
  "Laboratoire d'Hydro-Dynamique",
  3,
  "« Merci Lyra... tu ne peux pas savoir à quel point ton intervention m'a soulagé », lui dis-tu en rangeant les instruments. Lyra sourit franchement : « On est une équipe, Corin. Jax n'a de pouvoir que si on a peur de lui. Maintenant qu'il sait qu'on ne rigole plus à ses bêtises, il va devoir trouver autre chose. Viens, je t'offre une ration de gelée de fruits au réfectoire ! »",
  [
    { text: "Si vous rejoignez la grande tablée avec Sylvan et Naël, va au 81.", targetId: 81, label: "Grande tablée d'amis" },
    { text: "Si vous préparez le projet d'astro-navigation du trimestre, va au 82.", targetId: 82, label: "Projet d'astro-navigation" }
  ],
  { serenity: 35, solidarity: 45, trust: 35, badge: "Amitié Lumineuse" },
  "L'amitié sincère constitue un antidote puissant contre les traumatismes causés par les violences verbales."
);

// 51
addStep(
  51,
  "Le retour victorieux au tableau",
  "Amphithéâtre Galilée",
  3,
  "Deux jours plus tard, la professeure Vane demande un volontaire pour résoudre une équation complexe de rentrée atmosphérique. Le cœur battant mais la tête haute, tu lèves la main. Tu montes sur l'estrade. Tu respires calmement comme te l'a appris Madame Varis. D'une voix claire, ferme et articulée, tu écris la formule et expliques chaque étape sans une seule hésitation. Toute la classe t'écoute en silence.",
  [
    { text: "Si tu reçois les félicitations enthousiastes de l'enseignante, va au 83.", targetId: 83, label: "Félicitations de la prof" },
    { text: "Si tu te tournes vers Jax avec un sourire serein et apaisé, va au 84.", targetId: 84, label: "Sourire serein à Jax" }
  ],
  { serenity: 40, solidarity: 35, trust: 40, badge: "Victoire de la Voix" },
  "Surmonter sa peur de s'exprimer devant le groupe transforme l'angoisse en force d'affirmation personnelle durable."
);

// 52
addStep(
  52,
  "Le pardon et la réconciliation avec Lyra",
  "Coursive Centrale",
  3,
  "Tu rattrapes Lyra devant son casier : « Lyra, pardonne-moi. J'ai été agressif tout à l'heure parce que j'avais honte d'avoir besoin d'aide. Ta proposition de m'aider était formidable et j'aimerais vraiment qu'on fasse ce binôme ensemble. » Lyra sourit, touchée par ton honnêteté : « C'est oublié, Corin. On forme l'équipe pour le TP de demain matin ! »",
  [
    { text: "Si vous préparez le TP ensemble avec succès, va au 30.", targetId: 30, label: "Préparer le TP ensemble" },
    { text: "Si vous officialisez votre binôme auprès du professeur, va au 50.", targetId: 50, label: "Officialiser le binôme" }
  ],
  { serenity: 20, solidarity: 30, trust: 25, badge: "Réconciliation Humble" },
  "Savoir s'excuser de ses mouvements d'humeur défensifs rétablit instantanément les liens de solidarité fraternelle."
);

// 53
addStep(
  53,
  "La médiation réparatrice sous l'égide de Soa",
  "Salle de Régulation Réparatrice",
  4,
  "Réunis autour de Soa et du Directeur, la séance de médiation réparatrice a lieu. Soa demande à Jax d'écouter en silence l'enregistrement de ses moqueries et de lire à voix haute la lettre où Corin exprime la douleur ressentie chaque matin. Jax, confronté à la réalité brute de son impact sans l'effet de meute, s'effondre en larmes : « Je vous jure... je ne pensais pas que ça lui faisait autant de mal. Je croyais que c'était pour rire... »",
  [
    { text: "Si tu acceptes ses regrets et lui proposes de participer à la charte du climat sonore d'Oxy-Kaelis, va au 85.", targetId: 85, label: "Charte du climat sonore" },
    { text: "Si tu franchis le pas vers la conclusion lumineuse de ton parcours, va au 98.", targetId: 98, label: "Vers la Fin Lumineuse" }
  ],
  { serenity: 40, solidarity: 40, trust: 45, badge: "Prise de Conscience Restaurative" },
  "La justice restaurative permet à l'agresseur de mesurer l'impact réel de ses paroles et d'entrer dans une démarche sincère de réparation."
);

// 54
addStep(
  54,
  "La sanction disciplinaire et l'interdiction de réseau",
  "Bureau de la Direction",
  4,
  "Monsieur Thorne prononce des sanctions sévères et éducatives : Jax est suspendu trois jours des canaux de classe, privé d'activités récréatives et astreint à un stage d'empathie et citoyenneté orbitale. Le message envoyé à toute la station est limpide : la violence verbale et les insultes répétées ne sont pas des jeux, mais des atteintes graves sanctionnées sans faiblesse.",
  [
    { text: "Si tu profites de ce cadre protecteur pour t'épanouir pleinement dans tes études, va au 86.", targetId: 86, label: "S'épanouir dans ses études" },
    { text: "Si tu choisis la voie de la Fin Neutre en restant vigilant, va au 99.", targetId: 99, label: "Vers la Fin Neutre" }
  ],
  { serenity: 30, solidarity: 25, trust: 40, badge: "Loi Réaffirmée" },
  "La fermeté institutionnelle rassure l'ensemble des élèves et rétablit l'autorité protectrice des règles de vie commune."
);

// 55
addStep(
  55,
  "Le partenariat tripartite famille-station-élève",
  "Salon d'Honneur d'Oxy-Kaelis",
  4,
  "Tes parents, Monsieur Thorne et Madame Varis sont réunis autour de toi. « Nous avons convenu d'un plan complet de sécurisation », annonce le Directeur. « Présence accrue des surveillants aux intercours, modération stricte des fréquences radio, et aménagement des oraux pour valoriser les progrès de Corin. » Te savoir entouré d'une telle forteresse d'adultes bienveillants balaie tes dernières angoisses.",
  [
    { text: "Si tu t'élances vers l'apothéose lumineuse de l'aventure, va au 98.", targetId: 98, label: "Vers la Fin Lumineuse" },
    { text: "Si tu consolides tes amitiés au sein du Cycle Alpha, va au 81.", targetId: 81, label: "Consolider ses amitiés" }
  ],
  { serenity: 45, solidarity: 40, trust: 50, badge: "Forteresse Protectrice" },
  "L'alliance indéfectible entre l'école et la famille crée le cadre le plus sécurisant pour guérir des blessures du harcèlement."
);

// 56
addStep(
  56,
  "Le triomphe de la poésie orbitale",
  "Holo-Bibliothèque",
  4,
  "Sous l'égide de Madame Orla, tu t'entraînes à lire les grands poèmes de l'exploration spatiale. Ta voix résonne, musicale et émouvante, dans les alcôves de la bibliothèque. Deux élèves venus réviser s'arrêtent, captivés par la beauté de ta déclamation. Tu réalises que ta sensibilité vocale n'est pas un défaut : c'est un talent d'orateur qui ne demandait qu'à s'épanouir.",
  [
    { text: "Si tu acceptes d'animer la cérémonie de clôture du trimestre, va au 87.", targetId: 87, label: "Animer la cérémonie" },
    { text: "Si tu te diriges vers la Fin Lumineuse, va au 98.", targetId: 98, label: "Vers la Fin Lumineuse" }
  ],
  { serenity: 40, solidarity: 35, trust: 40, badge: "Poète des Étoiles" },
  "La pratique artistique et littéraire répare les blessures de l'estime de soi en transformant une fragilité en chef-d'œuvre."
);

// 57
addStep(
  57,
  "La porte entrouverte par Soa",
  "Cabine Personnelle",
  4,
  "Tu déverrouilles le sas d'un doigt tremblant. Soa entre doucement, s'assoit au bord de ta couchette et te pose un gobelet d'infusion chaude entre les mains. « Corin... pleurer n'est pas une honte. Mais rester enfermé ici, c'est laisser Jax gagner. Tu vaux tellement mieux que ses blagues de coursive. Viens, toute la classe t'attend pour le grand projet des étoiles. » Ses mots d'espoir rallument la flamme en toi.",
  [
    { text: "Si tu te lèves et décides de retourner en classe avec elle, va au 63.", targetId: 63, label: "Retourner en classe avec Soa" },
    { text: "Si tu choisis la conclusion neutre en restant prudent, va au 99.", targetId: 99, label: "Vers la Fin Neutre" }
  ],
  { serenity: 20, solidarity: 25, trust: 30, badge: "Renaissance de l'Espoir" },
  "La médiation empathique permet de repêcher les élèves en détresse avant qu'ils ne basculent dans le décrochage définitif."
);

// 58
addStep(
  58,
  "La réconciliation par le travail partagé",
  "Holo-Bibliothèque • Rayonnage Bêta",
  4,
  "Dans le cadre de sa mesure réparatrice, Jax est chargé de reclasser les archives d'astronomie sous ta direction. Au début, le malaise est palpable. Puis, en travaillant côte à côte pendant des heures, Jax découvre ta passion et tes connaissances encyclopédiques. « Dis donc Corin... tu sais vraiment calculer la trajectoire des comètes ? C'est impressionnant... » Pour la première fois, Jax te regarde avec un respect sincère.",
  [
    { text: "Si tu accueilles son respect avec simplicité sans rancœur, va au 88.", targetId: 88, label: "Respect partagé" },
    { text: "Si tu avances vers la Fin Lumineuse d'Oxy-Kaelis, va au 98.", targetId: 98, label: "Vers la Fin Lumineuse" }
  ],
  { serenity: 40, solidarity: 45, trust: 45, badge: "Réparation Réussie" },
  "Les travaux d'intérêt collectif permettent à l'agresseur de découvrir les qualités réelles de sa cible et de dissoudre ses préjugés."
);

// 59
addStep(
  59,
  "Le message d'excuses publiques sur le canal radio",
  "Studio Radio d'Oxy-Kaelis",
  4,
  "Devant le micro officiel de la station, Jax prend la parole, la voix blanche : « Ici Jax. Je tiens à présenter des excuses publiques à Corin. J'ai diffusé des sons moqueurs et répété des surnoms blessants en prétextant que c'était pour rire. C'était lâche, injuste et stupide. Les mots ont un poids et je demande pardon à Corin et à tous ceux que j'ai pu blesser. » Ce message diffusé dans toute la station fait l'effet d'une déflagration bienfaisante.",
  [
    { text: "Si tu acceptes publiquement ses excuses avec grandeur, va au 89.", targetId: 89, label: "Accepter les excuses publiques" },
    { text: "Si tu franchis le cap vers la Fin Lumineuse, va au 98.", targetId: 98, label: "Vers la Fin Lumineuse" }
  ],
  { serenity: 45, solidarity: 45, trust: 45, badge: "Excuses Solennelles" },
  "Des excuses publiques claires et sans faux-fuyants réhabilitent la dignité de la victime devant l'ensemble de la communauté."
);

// 60
addStep(
  60,
  "La dynamique du cercle de parole restauratif",
  "Salle Polyvalente",
  4,
  "Soa réunit les élèves du Cycle Alpha en cercle de parole. Le bâton de parole tourne. Chacun exprime ce qu'il a ressenti lors des moqueries : la honte de rire par lâcheté, le malaise de ne pas savoir quoi dire, la peur de devenir la prochaine cible. Pour la première fois, la classe comprend le mécanisme du harcèlement verbal. Un pacte de bienveillance verbale est adopté à l'unanimité.",
  [
    { text: "If you sign the charter with your classmates, go to 90.", targetId: 90, label: "Signer le pacte de bienveillance" },
    { text: "Si tu avances vers la consécration lumineuse, va au 98.", targetId: 98, label: "Vers la Fin Lumineuse" }
  ],
  { serenity: 45, solidarity: 50, trust: 45, badge: "Pacte de Bienveillance" },
  "Le cercle de parole déconstruit la norme de la cruauté et rétablit une culture collective de l'empathie et du respect mutuel."
);

// 61
addStep(
  61,
  "L'orateur émérite du Cycle Alpha",
  "Amphithéâtre Galilée",
  4,
  "Lors de la finale du concours d'éloquence de la station, tu montes sur scène devant 200 personnes. Ton discours sur « La Fraternité des Étoiles » est un chef-d'œuvre de clarté, d'humour bienveillant et d'intelligence. Lorsque tu termines, une ovation debout fait trembler la verrière de l'amphithéâtre. Le jury t'attribue le Premier Prix d'Éloquence d'Oxy-Kaelis.",
  [
    { text: "Si tu reçois ton trophée sous les vivats de toute la station, va au 98.", targetId: 98, label: "Vers la Fin Lumineuse" }
  ],
  { serenity: 50, solidarity: 50, trust: 50, badge: "Premier Prix d'Éloquence" },
  "La reconnaissance publique du talent d'expression guérit définitivement les blessures des moqueries passées."
);

// 62
addStep(
  62,
  "La vérité éclatante devant le Capitaine Vane",
  "Poste de Commandement de Sécurité",
  4,
  "Le Capitaine Vane écoute ton récit avec une attention paternelle. « Corin, sur un vaisseau spatial, si un technicien insulte et déconcentre un pilote lors d'une manœuvre, c'est toute la station qui risque la collision. Les mots qui blessent sont une menace pour la sécurité de notre équipage. Je prends personnellement en charge ce dossier. » Avec l'appui du Capitaine, la protection de ton intégrité devient une affaire d'État.",
  [
    { text: "Si tu retournes en classe sous la protection officielle du commandement, va au 86.", targetId: 86, label: "Retour sous protection" },
    { text: "Si tu choisis la Fin Neutre en restant réservé, va au 99.", targetId: 99, label: "Vers la Fin Neutre" }
  ],
  { serenity: 35, solidarity: 30, trust: 45, badge: "Bouclier du Commandement" },
  "L'implication des plus hautes autorités de l'établissement rappelle que la sécurité psychique est un droit fondamental inaliénable."
);

// 63
addStep(
  63,
  "La rentrée sereine dans la classe apaisée",
  "Salle du Cycle Alpha",
  4,
  "Tu franchis le seuil de la classe la tête haute. Jax est à sa place, silencieux et appliqué. Dès que tu entres, Sylvan et Naël te font signe de venir t'asseoir à leurs côtés. Des sourires chaleureux t'accueillent sur toutes les rangées. L'atmosphère lourde et toxique a laissé place à une camaraderie saine et joyeuse.",
  [
    { text: "Si tu participes activement au cours avec joie et confiance, va au 91.", targetId: 91, label: "Participer avec joie" },
    { text: "Si tu t'élances vers la Fin Lumineuse, va au 98.", targetId: 98, label: "Vers la Fin Lumineuse" }
  ],
  { serenity: 40, solidarity: 45, trust: 45, badge: "Classe Réconciliée" },
  "Quand le climat scolaire est assaini, la classe redevient un lieu d'apprentissage épanouissant pour chacun."
);

// 64
addStep(
  64,
  "Le Club d'Astronomie des Étoiles Vives",
  "Observatoire Panoramique",
  4,
  "Tu crées le 'Club des Étoiles Vives' d'Oxy-Kaelis. Deux fois par semaine, tu réunis une vingtaine d'élèves pour observer les galaxies lointaines à travers le télescope géant. Tes explications claires et passionnées font l'admiration de tous. Même Jax vient timidement assister à une séance pour observer les anneaux de Saturne, découvrant le plaisir d'apprendre sans écraser autrui.",
  [
    { text: "Si tu l'accueilles avec bienveillance et lui prêtes les jumelles stellaires, va au 92.", targetId: 92, label: "Accueillir Jax au club" },
    { text: "Si tu avances vers la Fin Lumineuse d'Oxy-Kaelis, va au 98.", targetId: 98, label: "Vers la Fin Lumineuse" }
  ],
  { serenity: 45, solidarity: 50, trust: 45, badge: "Guide des Étoiles" },
  "Fédérer ses camarades autour d'une passion commune efface les anciennes rancœurs et bâtit une cohésion durable."
);

// 65
addStep(
  65,
  "Le courage de la parole authentique",
  "Salle du Cycle Alpha",
  4,
  "Tu te lèves au milieu du débat et prends la parole. Ta voix tremble une seconde, puis se pose : « Les mots ne s'effacent pas avec un rire. Quand on vous répète dix fois par jour que vous êtes ridicule, vous finissez par le croire. L'humour, c'est quand tout le monde s'amuse ; quand une seule personne souffre et que les autres ricanent, ce n'est pas de l'humour, c'est de la lâcheté. » Un silence bouleversé envahit la salle. Plusieurs élèves ont les larmes aux yeux.",
  [
    { text: "Si toute la classe applaudit spontanément ton courage, va au 90.", targetId: 90, label: "Applaudissements de la classe" },
    { text: "Si tu franchis le cap vers la consécration lumineuse, va au 98.", targetId: 98, label: "Vers la Fin Lumineuse" }
  ],
  { serenity: 45, solidarity: 50, trust: 50, badge: "Courage de l'Orateur" },
  "La parole authentique de la cible a le pouvoir de réveiller les consciences endormies et de transformer un groupe."
);

// 66
addStep(
  66,
  "La métamorphose du climat de groupe",
  "Coursive Centrale",
  4,
  "À la sortie de l'heure de vie de classe, les langues se délient. Darek vient te trouver : « Corin, je te demande pardon d'avoir ri à ses bêtises. J'étais bête et je n'osais rien dire. Désormais, compte sur moi si quelqu'un recommence. » Le mur des moqueries s'est effondré sous le poids de la prise de conscience collective.",
  [
    { text: "Si tu acceptes son soutien chaleureux, va au 91.", targetId: 91, label: "Accepter le soutien de Darek" },
    { text: "Si tu te tournes vers la Fin Lumineuse, va au 98.", targetId: 98, label: "Vers la Fin Lumineuse" }
  ],
  { serenity: 40, solidarity: 45, trust: 45, badge: "Éveil des Consciences" },
  "La désolidarisation des suiveurs sonne la fin définitive du règne des harceleurs."
);

// 67
addStep(
  67,
  "La main secourable de Naël dans la tourmente",
  "Coursive des Casiers",
  4,
  "Alors que tu es en larmes contre ton casier, Naël (qui a surmonté l'isolement du Tome 2) s'assoit à côté de toi sur le sol métallique. « Corin, regarde-moi. J'ai vécu la même chose le mois dernier. On croit qu'on est seul au monde, mais c'est faux. Lève-toi, on va voir Maître Olan et la Médiatrice Soa ensemble. Je viens avec toi. » Ce geste fraternel te redonne la force de te relever.",
  [
    { text: "Si tu le suis pour faire le signalement officiel, va au 42.", targetId: 42, label: "Suivre Naël vers Soa" },
    { text: "Si tu choisis la conclusion neutre en restant discret, va au 99.", targetId: 99, label: "Vers la Fin Neutre" }
  ],
  { serenity: 20, solidarity: 30, trust: 30, badge: "Solidarité des Éprouvés" },
  "Ceux qui ont surmonté le harcèlement deviennent les meilleurs ambassadeurs pour tendre la main aux nouvelles victimes."
);

// 68
addStep(
  68,
  "La fin du chantage devant la Direction",
  "Bureau de la Direction",
  4,
  "Accompagné de Soa et Naël, tu présentes les preuves d'extorsion et de menaces devant le Directeur. Jax est convoqué sur-le-champ. Face à ses parents appelés d'urgence et aux relevés informatiques accablants, il ne peut plus nier. Ses parents, consternés par son comportement, lui confisquent son accès aux réseaux et lui imposent des excuses immédiates. Le chantage est brisé pour toujours.",
  [
    { text: "Si tu savoures cette justice rétablie vers la Fin Lumineuse, va au 98.", targetId: 98, label: "Vers la Fin Lumineuse" },
    { text: "Si tu choisis la voie de la Fin Neutre, va au 99.", targetId: 99, label: "Vers la Fin Neutre" }
  ],
  { serenity: 35, solidarity: 35, trust: 45, badge: "Chaînes Brisées" },
  "Révéler les chantages aux adultes met fin instantanément à l'emprise perverse des intimidateurs."
);

// 69
addStep(
  69,
  "La pause réparatrice au pôle d'écoute",
  "Pôle Médical & Écoute",
  4,
  "Pendant deux heures, tu te reposes dans une alcôve sensorielle apaisante. L'infirmière vérifie ton rythme cardiaque et te sert une boisson vitaminée. « Tu as été très courageux de parler, Corin. Le plus dur est derrière toi. Maintenant, la loi et les adultes veillent sur toi. » Tu te sens lavé de la honte et prêt à reprendre le contrôle de ta vie.",
  [
    { text: "Si tu rejoins la réunion plénière de réconciliation, va au 90.", targetId: 90, label: "Réunion plénière" },
    { text: "Si tu avances vers la Fin Lumineuse, va au 98.", targetId: 98, label: "Vers la Fin Lumineuse" }
  ],
  { serenity: 35, solidarity: 30, trust: 40, badge: "Sérénité Retrouvée" },
  "Prendre un temps de repos et de décompression physique permet de cicatriser les blessures du stress aigu."
);

// 70
addStep(
  70,
  "Le triomphe de la cohésion d'équipage",
  "Amphithéâtre Galilée",
  4,
  "L'exposé terminé, la professeure Vane commente : « Une démonstration magistrale portée par un esprit d'équipe exemplaire. 20/20 pour ce trinôme d'élite ! » Toute la salle applaudit. Jax est assis au fond, silencieux, comprenant qu'il est désormais seul contre la bienveillance unie de la classe. Tu as vaincu le venin des mots par l'excellence et la fraternité.",
  [
    { text: "Si tu franchis le pas vers la Fin Lumineuse d'Oxy-Kaelis, va au 98.", targetId: 98, label: "Vers la Fin Lumineuse" }
  ],
  { serenity: 45, solidarity: 50, trust: 45, badge: "Trinôme d'Élite" },
  "L'excellence collaborative balaie le cynisme des moqueries et fait briller les talents de chacun."
);

// 71
addStep(
  71,
  "La lumière sur la passerelle des étoiles",
  "Passerelle Panoramique",
  4,
  "Entouré de Lyra, Naël et Sylvan, tu regardes la Terre tourner majestueusement sous les verrières de la station. Tu n'as plus peur de parler, tu ne baisses plus les yeux dans les coursives. Ta voix, avec ses nuances et ses émotions, est devenue ta plus belle signature. Tu es prêt pour la consécration lumineuse.",
  [
    { text: "Si tu atteins la Fin Lumineuse d'Oxy-Kaelis, va au 98.", targetId: 98, label: "Vers la Fin Lumineuse" }
  ],
  { serenity: 50, solidarity: 50, trust: 50, badge: "Harmonie des Ondes" },
  "La paix intérieure conquise sur l'adversité permet de contempler l'avenir avec force et sérénité."
);

// 72
addStep(
  72,
  "L'inscription solennelle au Concours d'Éloquence",
  "Amphithéâtre Galilée",
  4,
  "Sur le tableau d'affichage des inscriptions, tu inscris ton nom en lettres majeurs : CORIN • CYCLE ALPHA. Plusieurs camarades s'attroupent et t'encouragent : « On sera tous dans la salle pour t'applaudir Corin ! » Jax passe à côté, regarde la liste et s'éloigne sans un mot. Tu as transformé ta prétendue faiblesse en défi héroïque.",
  [
    { text: "Si tu te prépares pour la grande finale de la Fin Lumineuse, va au 98.", targetId: 98, label: "Vers la Fin Lumineuse" }
  ],
  { serenity: 45, solidarity: 45, trust: 45, badge: "Audace & Défi" },
  "Oser s'exposer publiquement là où l'on a été blessé est le signe suprême de la résilience victorieuse."
);

// 73
addStep(
  73,
  "La Conférence du Solstice et l'hommage des aînés",
  "Dôme des Sciences",
  4,
  "Devant les élèves de tous les cycles et les scientifiques de bord, tu animes la conférence sur la cartographie des comètes extrasolaires. Ton débit est posé, tes explications claires et ta passion contagieuse. À la fin, le Capitaine Vane te serre la main : « Vous faites honneur à notre station, jeune homme. Continuez de porter haut la voix du savoir. »",
  [
    { text: "Si tu rejoins l'apothéose lumineuse de ton parcours, va au 98.", targetId: 98, label: "Vers la Fin Lumineuse" }
  ],
  { serenity: 50, solidarity: 50, trust: 50, badge: "Voix du Savoir" },
  "L'estime des pairs et des aînés consacre définitivement la victoire de la bienveillance sur la méchanceté."
);

// 74
addStep(
  74,
  "La célébration de la fraternité retrouvée",
  "Réfectoire des Synthèses",
  4,
  "Le repas se poursuit dans une ambiance joyeuse et détendue. Des élèves d'autres tables s'approchent pour féliciter la réaction de votre tablée. « Vous avez trop bien réagi ! Jax se prenait pour le roi du réfectoire, maintenant il a compris qu'il n'était pas drôle. » La solidarité a changé la norme du lieu.",
  [
    { text: "Si tu avances vers la Fin Lumineuse, va au 98.", targetId: 98, label: "Vers la Fin Lumineuse" }
  ],
  { serenity: 45, solidarity: 45, trust: 45, badge: "Norme Restaurée" },
  "Quand le respect devient la norme partagée par tous, les harceleurs perdent toute influence."
);

// 75
addStep(
  75,
  "La paix tranquille du quotidien d'Oxy-Kaelis",
  "Réfectoire des Synthèses",
  4,
  "Tu termines ton écuelle de nutriments en riant avec tes camarades. Les journées ont retrouvé leur saveur d'apprentissage et de camaraderie. Les moqueries ne sont plus qu'un mauvais souvenir dépassé par la force collective de votre amitié.",
  [
    { text: "Si tu franchis le pas final vers la Fin Lumineuse, va au 98.", targetId: 98, label: "Vers la Fin Lumineuse" }
  ],
  { serenity: 45, solidarity: 45, trust: 45, badge: "Sérénité Quotidienne" },
  "Le retour à la normalité sereine est la plus belle récompense d'une situation de harcèlement surmontée."
);

// 76
addStep(
  76,
  "L'émancipation par l'affirmation de soi",
  "Coursive Principale",
  4,
  "Jax ne t'a plus jamais adressé la moindre insulte. En constatant que ses piques n'avaient plus aucune prise sur toi et que tu savais poser tes limites calmement sans agressivité, il a cessé ses enfantillages. Tu as appris la plus précieuse des compétences de vie : l'affirmation sereine de sa dignité.",
  [
    { text: "Si tu te tournes vers la Fin Lumineuse, va au 98.", targetId: 98, label: "Vers la Fin Lumineuse" }
  ],
  { serenity: 45, solidarity: 45, trust: 45, badge: "Dignité Affirmée" },
  "L'affirmation calme de soi désamorce définitivement les provocateurs sans escalade de violence."
);

// 77
addStep(
  77,
  "L'atelier des Sentinelles de la Parole",
  "Salle Polyvalente",
  4,
  "Avec la Médiatrice Soa, tu co-animes désormais un atelier pour apprendre aux 6e à réagir face aux moqueries sans insulter ni se taire. Des dizaines d'élèves viennent y chercher des conseils. Tu es devenu un repère et un modèle de courage pour toute la station.",
  [
    { text: "Si tu reçois l'insigne d'or de Sentinelle de la Parole vers la Fin Lumineuse, va au 98.", targetId: 98, label: "Vers la Fin Lumineuse" }
  ],
  { serenity: 50, solidarity: 50, trust: 50, badge: "Sentinelle de la Parole" },
  "Aider les autres à surmonter les épreuves que l'on a soi-même vécues est le sommet de l'accomplissement citoyen."
);

// 78
addStep(
  78,
  "La maîtrise du souffle et de l'esprit",
  "Amphithéâtre Galilée",
  4,
  "Avant chaque question posée par les professeurs, tu inspires lentement par le nez et expires par la bouche. Ton anxiété s'évapore instantanément. Tes interventions sont précises, limpides et admirées. Tu as dompté le trac et transformé ta sensibilité en éclat scientifique.",
  [
    { text: "Si tu t'élances vers la Fin Lumineuse, va au 98.", targetId: 98, label: "Vers la Fin Lumineuse" }
  ],
  { serenity: 45, solidarity: 40, trust: 45, badge: "Maîtrise du Souffle" },
  "La respiration consciente est une clé fondamentale pour désamorcer les angoisses scolaires."
);

// 79
addStep(
  79,
  "Le stand d'Astro-Physique acclamé au Forum",
  "Dôme Central d'Exposition",
  4,
  "Lors du Forum annuel des Écoles d'Oxy-Kaelis, ton stand de simulation de propulsion gravitationnelle attire une foule impressionnante. Tu animes les démonstrations avec un enthousiasme et une éloquence qui captivent petits et grands. Tu reçois le Prix Spécial de la Médiation Scientifique.",
  [
    { text: "Si tu franchis le seuil vers la Fin Lumineuse, va au 98.", targetId: 98, label: "Vers la Fin Lumineuse" }
  ],
  { serenity: 50, solidarity: 50, trust: 50, badge: "Prix Spécial du Forum" },
  "La passion partagée crée des ponts d'admiration et de respect qui dépassent tous les préjugés."
);

// 80
addStep(
  80,
  "L'écoute salvatrice du numéro 3018",
  "Cabine Personnelle • Ligne d'Écoute d'Urgence",
  4,
  "Sur ton terminal mural, tu composes le 3018 d'Oxy-Kaelis. Une voix posée, chaleureuse et professionnelle t'écoute pendant quarante minutes sans jamais te juger : « Corin, ce que tu décris est du harcèlement verbal destructeur. Ce n'est pas toi le problème. Nous allons contacter l'équipe ressource de ta station dès ce soir pour mettre en place un protocole d'apaisement immédiat. Raccroche serein, nous prenons le relais. » Tu t'endors enfin apaisé.",
  [
    { text: "Si tu accueilles les médiateurs le lendemain matin pour la Fin Lumineuse, va au 98.", targetId: 98, label: "Vers la Fin Lumineuse" },
    { text: "Si tu choisis la conclusion neutre en restant prudent, va au 99.", targetId: 99, label: "Vers la Fin Neutre" }
  ],
  { serenity: 35, solidarity: 30, trust: 45, badge: "Ligne 3018 Activée" },
  "Les lignes d'écoute d'urgence spécialisées offrent un filet de sécurité vital pour débloquer les situations les plus critiques."
);

// 81
addStep(
  81,
  "La table fraternelle du Cycle Alpha",
  "Réfectoire des Synthèses",
  4,
  "Autour de la grande table centrale, vous êtes désormais huit : toi, Lyra, Naël, Sylvan, Tarek, Darek et deux nouveaux élèves. Les rires résonnent, mais ce sont des rires partagés, joyeux et bienveillants. Plus personne ne craint d'être humilié en prenant la parole. La fraternité a vaincu l'ostracisme.",
  [
    { text: "Si tu savoures ce banquet de l'amitié vers la Fin Lumineuse, va au 98.", targetId: 98, label: "Vers la Fin Lumineuse" }
  ],
  { serenity: 50, solidarity: 50, trust: 45, badge: "Banquet Fraternel" },
  "La table ouverte et solidaire est le symbole vivant d'un climat scolaire guéri et protecteur."
);

// 82
addStep(
  82,
  "L'élaboration de la Charte d'Équipage Verbal",
  "Salle du Conseil",
  4,
  "Avec l'ensemble de la classe, vous rédigez la 'Charte de la Parole Respectueuse' : interdiction des surnoms dégradants, fin des rumeurs radio, obligation morale d'interpeller les moqueurs par un 'C'est pas drôle', et célébration des réussites de chacun. Tous les élèves, y compris Jax, apposent leur signature au bas du texte.",
  [
    { text: "Si tu signes ce texte historique vers la Fin Lumineuse, va au 98.", targetId: 98, label: "Vers la Fin Lumineuse" }
  ],
  { serenity: 50, solidarity: 50, trust: 50, badge: "Charte de la Parole" },
  "Établir des règles collectives co-construites responsabilise les élèves et pérennise la bienveillance scolaire."
);

// 83
addStep(
  83,
  "L'ovation de la communauté scientifique",
  "Amphithéâtre Galilée",
  4,
  "La professeure Vane t'applaudit : « Une rigueur exceptionnelle, Corin. Tu es fait pour la recherche de haut niveau. » Tes camarades viennent te féliciter à la fin de l'heure. Jax reste dans son coin, mais tu remarques qu'il ne cherche plus à provoquer personne. La compétence et le respect ont triomphé.",
  [
    { text: "Si tu te tournes vers la Fin Lumineuse d'Oxy-Kaelis, va au 98.", targetId: 98, label: "Vers la Fin Lumineuse" }
  ],
  { serenity: 45, solidarity: 45, trust: 45, badge: "Étoile Scientifique" },
  "La reconnaissance académique et amicale balaye les doutes semés par les agressions passées."
);

// 84
addStep(
  84,
  "Le regard apaisé sans désir de vengeance",
  "Amphithéâtre Galilée",
  4,
  "En descendant de l'estrade, ton regard croise celui de Jax. Tu ne lui lances ni mépris ni rancœur : juste un regard calme, digne et bienveillant. Jax baisse la tête, désarmé par tant de maturité. Tu as compris la plus haute leçon du Groupe Bouclier : vaincre le harcèlement, ce n'est pas détruire son agresseur, c'est l'obliger à devenir meilleur.",
  [
    { text: "Si tu franchis le cap vers la Fin Lumineuse, va au 98.", targetId: 98, label: "Vers la Fin Lumineuse" }
  ],
  { serenity: 50, solidarity: 45, trust: 50, badge: "Grandeur Morale" },
  "Refuser la vengeance tout en exigeant le respect permet la véritable réconciliation humaine."
);

// 85
addStep(
  85,
  "La rédemption de Jax et la réparation sincère",
  "Salle de Régulation",
  4,
  "Jax signe son engagement réparateur : il s'engage à animer avec toi la campagne de sensibilisation contre les violences verbales lors de la Semaine Nationale de Lutte contre le Harcèlement. Entre les anciens ennemis, une collaboration inattendue et respectueuse voit le jour, servant d'exemple à toute la station.",
  [
    { text: "Si tu scelles cette alliance réparatrice vers la Fin Lumineuse, va au 98.", targetId: 98, label: "Vers la Fin Lumineuse" }
  ],
  { serenity: 50, solidarity: 50, trust: 50, badge: "Rédemption & Réparation" },
  "Permettre à l'agresseur de réparer ses fautes par des actions positives utiles à tous transforme le climat scolaire en profondeur."
);

// 86
addStep(
  86,
  "L'épanouissement scolaire sans ombre",
  "Laboratoire d'Astro-Physique",
  4,
  "Les semaines s'écoulent dans la paix. Tes notes atteignent des sommets, ta participation en classe est joyeuse et stimulante. Tu as trouvé ta place légitime au sein de la communauté d'Oxy-Kaelis, respecté pour tes compétences et apprécié pour ta gentillesse.",
  [
    { text: "Si tu franchis le pas vers la Fin Lumineuse, va au 98.", targetId: 98, label: "Vers la Fin Lumineuse" }
  ],
  { serenity: 50, solidarity: 45, trust: 45, badge: "Épanouissement Total" },
  "Un cadre scolaire apaisé et sécurisé permet à chaque élève de donner le meilleur de lui-même."
);

// 87
addStep(
  87,
  "La tribune de la Fête du Solstice",
  "Amphithéâtre Galilée",
  4,
  "Devant l'équipage au grand complet, tu prends la parole pour prononcer le discours de clôture du trimestre. Ta voix résonne avec une clarté et une force inspirantes sous les verrières de la station. Des ovations chaleureuses saluent ton parcours exceptionnel.",
  [
    { text: "Si tu t'élances vers l'apothéose lumineuse, va au 98.", targetId: 98, label: "Vers la Fin Lumineuse" }
  ],
  { serenity: 50, solidarity: 50, trust: 50, badge: "Triomphe de l'Orateur" },
  "Le couronnement public d'un parcours de résilience inspire l'ensemble de la communauté éducative."
);

// 88
addStep(
  88,
  "Le respect mutuel enraciné",
  "Holo-Bibliothèque",
  4,
  "Jax et toi terminez de reclasser les archives d'astronomie. Avant de partir, Jax te tend la main : « Merci Corin. J'ai beaucoup appris avec toi. Désolé pour tout ce que j'ai dit avant. » Tu lui serres la main franchement : « Merci Jax. Le passé est derrière nous. » Le respect a remplacé la terreur.",
  [
    { text: "Si tu avances vers la Fin Lumineuse d'Oxy-Kaelis, va au 98.", targetId: 98, label: "Vers la Fin Lumineuse" }
  ],
  { serenity: 50, solidarity: 50, trust: 50, badge: "Poignée de Main Réconciliatrice" },
  "La poignée de main sincère entre l'ancien agresseur et sa cible scelle la fin définitive du harcèlement."
);

// 89
addStep(
  89,
  "Le pardon public et la dignité rétablie",
  "Studio Radio d'Oxy-Kaelis",
  4,
  "À ton tour au micro, tu réponds posément : « Merci Jax pour ces excuses. Elles t'honorent. L'erreur est humaine, mais persister dans la moquerie est une lâcheté. Aujourd'hui, nous tournons la page ensemble pour le respect de tous sur Oxy-Kaelis. » Les élèves de toute la station saluent cette leçon de grandeur d'âme.",
  [
    { text: "Si tu franchis le pas vers la Fin Lumineuse, va au 98.", targetId: 98, label: "Vers la Fin Lumineuse" }
  ],
  { serenity: 50, solidarity: 50, trust: 50, badge: "Grandeur du Pardon" },
  "Accorder son pardon public après des excuses authentiques élève la cible au rang de référence morale."
);

// 90
addStep(
  90,
  "Le serment solennel de bienveillance",
  "Salle du Conseil",
  4,
  "La classe entière se lève et prononce le serment d'équipage : « Nous nous engageons à ne jamais laisser un élève seul face aux moqueries, à ne jamais rire de la souffrance d'autrui et à faire d'Oxy-Kaelis un sanctuaire de respect. » Tu es au premier rang, fier et ému de cette transformation collective.",
  [
    { text: "Si tu savoures cette consécration pour la Fin Lumineuse, va au 98.", targetId: 98, label: "Vers la Fin Lumineuse" }
  ],
  { serenity: 50, solidarity: 50, trust: 50, badge: "Serment de Bienveillance" },
  "L'engagement solennel de toute la communauté sanctuarise le respect comme règle d'or du climat scolaire."
);

// 91
addStep(
  91,
  "La voix libre dans les coursives d'Oxy-Kaelis",
  "Coursive Centrale",
  4,
  "Tu marches dans la coursive principale, entouré de tes amis. Tu salues les élèves croisés, tu ris franchement, tu prends la parole sans la moindre appréhension. Ton implant d'équilibrage fonctionne parfaitement, et ta voix est devenue le symbole de la liberté et du courage.",
  [
    { text: "Si tu atteins le dénouement radieux de ton aventure, va au 98.", targetId: 98, label: "Vers la Fin Lumineuse" }
  ],
  { serenity: 50, solidarity: 50, trust: 50, badge: "Voix Libre" },
  "La reconquête sereine de l'espace public de l'établissement consacre la victoire de la liberté d'expression."
);

// 92
addStep(
  92,
  "L'accueil de l'ancien ennemi au télescope",
  "Observatoire Panoramique",
  4,
  "Tu montres à Jax comment régler la mise au point sur les cratères de la Lune. « Regarde là, Jax, c'est la Mer de la Tranquillité. » Jax contemple l'image avec émerveillement : « C'est magnifique, Corin... Tu as de la chance d'aimer des choses aussi belles. » Tu as transformé un intimidateur en camarade émerveillé.",
  [
    { text: "Si tu te diriges vers la Fin Lumineuse, va au 98.", targetId: 98, label: "Vers la Fin Lumineuse" }
  ],
  { serenity: 50, solidarity: 50, trust: 50, badge: "Étoile Partagée" },
  "Partager le savoir et la beauté désamorce la violence et fait grandir l'humanité de chacun."
);

// 93 - Transition
addStep(
  93,
  "L'apaisement par la médiation officielle",
  "Espace Médiation",
  4,
  "Grâce au protocole engagé, les tensions se sont évanouies. Jax a compris qu'il n'avait plus de public et a cessé toute provocation. Les coursives ont retrouvé leur calme protecteur.",
  [
    { text: "Si tu choisis la voie de la Fin Lumineuse, va au 98.", targetId: 98, label: "Vers la Fin Lumineuse" },
    { text: "Si tu préfères une fin neutre et discrète, va au 99.", targetId: 99, label: "Vers la Fin Neutre" }
  ],
  { serenity: 30, solidarity: 30, trust: 35 },
  "La médiation institutionnelle permet de stabiliser durablement les relations entre élèves."
);

// 94 - Transition
addStep(
  94,
  "Le témoignage de courage qui émeut la station",
  "Amphithéâtre Galilée",
  4,
  "Ton intervention a touché les cœurs. Les professeurs et les élèves ont compris que le respect n'est pas négociable. Tu es devenu une figure inspirante de la lutte contre le harcèlement scolaire sur Oxy-Kaelis.",
  [
    { text: "Si tu t'élances vers la Fin Lumineuse, va au 98.", targetId: 98, label: "Vers la Fin Lumineuse" }
  ],
  { serenity: 50, solidarity: 50, trust: 50, badge: "Figure Inspirante" },
  "Le courage individuel porté par la vérité a le pouvoir de transformer toute une communauté."
);

// 95 - Transition
addStep(
  95,
  "La trêve distante et prudente",
  "Coursive Bêta",
  4,
  "Jax ne te parle plus, tu ne lui parles plus. Les attaques directes ont cessé, mais chacun reste dans son coin. Tu as retrouvé le calme, mais la confiance totale reste encore à conquérir.",
  [
    { text: "Si tu termines ton cycle dans cette paix réservée, va au 99.", targetId: 99, label: "Vers la Fin Neutre" }
  ],
  { serenity: 20, solidarity: 15, trust: 20 },
  "L'évitement poli permet de terminer l'année sans nouvelles violences, mais ne répare pas les liens brisés."
);

// 96 - Transition
addStep(
  96,
  "L'apaisement progressif sous surveillance",
  "Amphithéâtre Galilée",
  4,
  "Sous le regard vigilant des éducateurs, la classe retrouve peu à peu son calme. Les tensions retombent sans éclat, permettant à chacun de se concentrer sur ses examens.",
  [
    { text: "Si tu rejoins la Fin Lumineuse, va au 98.", targetId: 98, label: "Vers la Fin Lumineuse" },
    { text: "Si tu préfères la Fin Neutre, va au 99.", targetId: 99, label: "Vers la Fin Neutre" }
  ],
  { serenity: 25, solidarity: 25, trust: 30 },
  "La surveillance attentive des adultes sécurise le climat scolaire à moyen terme."
);

// 97 - Transition
addStep(
  97,
  "La Charte du Climat des Ondes",
  "Hémicycle Central",
  4,
  "Le Conseil des Éclaireurs adopte la Charte du Climat des Ondes d'Oxy-Kaelis : zéro tolérance pour les moqueries sur le physique ou l'élocution, modération stricte des réseaux, et mise en valeur de la parole de chacun. Corin est désigné comme premier délégué à la Bienveillance des Ondes.",
  [
    { text: "Si tu franchis le pas final vers la Fin Lumineuse de ton aventure, va au 98.", targetId: 98, label: "Vers la Fin Lumineuse" }
  ],
  { serenity: 50, solidarity: 50, trust: 50, badge: "Délégué à la Bienveillance" },
  "Sanctuariser les règles dans les institutions de l'établissement offre une protection pérenne pour les promotions futures."
);

// 98 - FIN LUMINEUSE
addStep(
  98,
  "FIN LUMINEUSE : L'Écho du Respect & La Voix Retrouvée",
  "Passerelle Panoramique des Éclaireurs",
  4,
  "FIN LUMINEUSE. Le venin des moqueries et des humiliations verbales a été totalement neutralisé sur la Station Orbitale Oxy-Kaelis grâce à ton refus de la vengeance, à l'appui indéfectible des adultes référents et à la solidarité active de Lyra, Naël et Sylvan. Jax, responsabilisé par la médiation réparatrice et privé de son public de rieurs passifs, a présenté des excuses publiques sincères et s'est engagé dans la réparation citoyenne. Ta voix, enrichie par les épreuves surmontées, résonne désormais avec clarté et assurance lors des grands forums scientifiques d'Oxy-Kaelis. Portant fièrement l'Insigne d'Or des 'Sentinelles de la Parole', tu contemples l'immensité de l'espace depuis la verrière panoramique. Tu as appris la règle d'or de toute communauté humaine : les mots ont le pouvoir de détruire ou d'élever ; c'est en refusant de rire de la souffrance d'autrui et en osant s'allier pour le respect que l'on construit un équipage digne de voguer vers les étoiles.",
  [],
  { serenity: 50, solidarity: 50, trust: 50, badge: "Sentinelle d'Or de la Parole" },
  "Félicitations ! Tu as su déjouer le piège pervers du 'c'était pour rire' en refusant l'auto-dénigrement et la vengeance violente, pour bâtir avec l'aide des tiers une culture authentique du respect verbal et de la bienveillance.",
  "light"
);

// 99 - FIN NEUTRE
addStep(
  99,
  "FIN NEUTRE : Le Filtre Silencieux dans les Sas",
  "Coursive de Transit Secondaire",
  4,
  "FIN NEUTRE. En apprenant à couper ton casque radio, en évitant les zones de rassemblement et en limitant tes prises de parole en classe au strict minimum, les moqueries directes de Jax ont fini par s'espacer. Jax s'est lassé de provoquer quelqu'un qui ne répond plus et a tourné son attention ailleurs. Tu as sauvé ta tranquillité quotidienne et tes examens, mais au prix d'une prudence permanente. Tu n'oses toujours pas lever la main spontanément par peur de trébucher sur un mot, et tu gardes une méfiance instinctive envers tes camarades. La paix sur Oxy-Kaelis n'est pour toi qu'un cessez-le-feu silencieux dans une station où tu as appris à filtrer ta voix plutôt qu'à la faire entendre avec joie.",
  [],
  { serenity: -10, solidarity: -15, trust: -10, badge: "Silence Prudent" },
  "Bilan : Filtrer sa parole et se taire permet d'éviter les attaques directes à court terme, mais bride l'expression personnelle et laisse intacte la blessure de l'injustice subie.",
  "neutral"
);

// 100 - FIN OBSCURE
addStep(
  100,
  "FIN OBSCURE : Le Naufrage du Mutisme & La Blessure Cachée",
  "Sas de Rapatriement Terrestre",
  4,
  "FIN OBSCURE. Broyé par les quolibets répétés, enfermé dans la honte d'un bégaiement amplifié par le stress ou emporté par un dérapage agressif désespéré qui s'est retourné contre toi, tu as cessé toute communication. Tes résultats scolaires se sont effondrés, ton biosenseur s'est figé en alerte d'inhibition dépressive sévère, et tu as refusé toute main tendue par fierté ou défiance. Jugé inapte aux exigences du Cycle Alpha d'Oxy-Kaelis, tes tuteurs ont signé ton ordre de rapatriement définitif vers la Terre. Alors que le sas d'embarquement de la navette se referme, tu aperçois au loin Jax ricaner dans la coursive, prêt à choisir sa prochaine cible parmi les nouveaux arrivants. Cette douloureuse aventure démontre la terrible vérité : le harcèlement verbal n'est jamais 'juste une blague' ; le silence, l'auto-dénigrement et la vengeance solitaire conduisent au naufrage ; seule la dénonciation courageuse aux adultes et le refus collectif de rire peuvent terrasser le poison des mots.",
  [],
  { serenity: -50, solidarity: -50, trust: -50, badge: "Naufrage du Silence" },
  "Bilan : Le silence et la rancœur face aux moqueries détruisent la scolarité et l'estime de soi. Face au harcèlement verbal, parler aux adultes et s'allier aux témoins est le seul salut.",
  "dark"
);

// Write to file
const fileContent = `import type { StoryStep } from '../types/story.ts';

export const STORY_STEPS_TOME_3: Record<number, StoryStep> = ${JSON.stringify(tome3Steps, null, 2)};
`;

fs.writeFileSync('src/data/storyDataTome3.ts', fileContent, 'utf-8');
console.log('Successfully generated src/data/storyDataTome3.ts with 100 steps!');
