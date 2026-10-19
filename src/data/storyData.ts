import type { StoryStep } from '../types/story.ts';

export const STORY_STEPS: Record<number, StoryStep> = {
  1: {
    id: 1,
    title: "Bousculade dans la coursive de transit",
    location: "Coursive Alpha-3",
    act: 1,
    text: "Fraîchement débarqué de la colonie minière d'Orion, tu avances dans la coursive métallique d'Oxy-Kaelis, ton datapad d'intégration serré contre ton uniforme. Soudain, une masse imposante te bloque le passage. C'est Brannok, un initié de Cycle Supérieur réputé pour son agressivité, entouré de Tark et Vael. D'un coup d'épaule brutal, Brannok te projette contre la cloison rivetée. Ton sac glisse au sol dans un tintement sourd. Au loin, ton camarade Sylvan baisse immédiatement la tête et fait semblant de consulter l'horloge orbitale.",
    choices: [
      { text: "Si tu décides de ramasser tes affaires en vitesse et de fuir vers tes modules de rechargement, va au 2.", targetId: 2, label: "Fuir vers les casiers" },
      { text: "Si tu décides de te relever et d'exiger calmement qu'il s'excuse pour ce choc violent, va au 3.", targetId: 3, label: "Demander des excuses" }
    ],
    statsImpact: { serenity: -10, trust: 0, solidarity: 0 },
    pedagogicalNote: "L'intimidation physique commence souvent par des 'tests' de vulnérabilité dans les zones de transition."
  },

  2: {
    id: 2,
    title: "Le module de rechargement fracturé",
    location: "Modules de Rechargement Alpha",
    act: 1,
    text: "Le cœur battant la chamade, tu arrives devant la baie des modules de rechargement où sont stockées tes affaires personnelles. Une mauvaise surprise t'attend : le scellé magnétique de ton casier a été forcé par dépressurisation manuelle. Tes cours de propulsion sont éparpillés sur la grille d'aération et tes réserves de nutriments ont été écrasées sous de lourdes semelles magnétiques. Sylvan arrive à pas feutrés derrière toi, le visage blême, jetant des coups d'œil inquiets par-dessus son épaule.",
    choices: [
      { text: "Si tu décides de ramasser tes affaires en silence sans alerter personne, va au 4.", targetId: 4, label: "Ramasser en silence" },
      { text: "Si tu décides d'interroger Sylvan sur ce qu'il a vu lors de la dégradation, va au 5.", targetId: 5, label: "Questionner Sylvan" }
    ],
    statsImpact: { serenity: -15, solidarity: 0, trust: 0 },
    pedagogicalNote: "S'enfermer dans le silence dès la première dégradation matérielle renforce le sentiment de solitude."
  },

  3: {
    id: 3,
    title: "Face à face contre la cloison",
    location: "Coursive Alpha-3",
    act: 1,
    text: "Tu te redresses et le fixes droit dans les yeux : « Ce sas est assez large pour tout le monde, Brannok. Rien ne t'autorisait à me bousculer. » Un ricanement mauvais étire ses lèvres. Il t'attrape par le col de ta tunique et te soulève de quelques centimètres, te plaquant violemment contre la grille d'aération. Tark et Vael s'esclaffent pour former un rideau humain. C'est alors qu'une silhouette en uniforme rouge de Veilleur de Bord apparaît à l'intersection du sas.",
    choices: [
      { text: "Si tu décides d'appeler le Veilleur de Bord pour signaler l'agression physique, va au 6.", targetId: 6, label: "Alerter le Veilleur" },
      { text: "Si tu décides de prétendre que vous chahutiez par peur des représailles futures, va au 7.", targetId: 7, label: "Prétendre un jeu" }
    ],
    statsImpact: { serenity: -10, solidarity: 5, trust: 5 },
    pedagogicalNote: "Face à une menace physique directe, faire appel à un adulte garantit une barrière de protection immédiate."
  },

  4: {
    id: 4,
    title: "Le poids du fardeau secret",
    location: "Secteur de Maintenance Basse",
    act: 1,
    text: "À genoux sur le sol froid, tu tentes d'éponger le liquide nutritif et de recoller tes feuilles d'exercices déchiquetées. La honte et la colère t'oppressent la cage thoracique. Tu refuses que quiconque te voie dans cet état de vulnérabilité. Pourtant, tes mains tremblent d'une impuissance amère. Tu as peur que Brannok revienne si tu restes trop longtemps ici, mais la coursive principale te terrifie désormais.",
    choices: [
      { text: "Si tu décides de te cacher dans le sas de maintenance auxiliaire pour reprendre ton souffle, va au 8.", targetId: 8, label: "Se réfugier dans le sas" },
      { text: "Si tu décides de forcer le pas pour rejoindre le Réfectoire des Synthèses malgré ta boule au ventre, va au 9.", targetId: 9, label: "Aller au réfectoire" }
    ],
    statsImpact: { serenity: -10, solidarity: -5, trust: 0 },
    pedagogicalNote: "Vouloir régler seul les dégradations subies fait porter la culpabilité sur la victime au lieu du coupable."
  },

  5: {
    id: 5,
    title: "Le témoin pétrifié par la peur",
    location: "Modules de Rechargement Alpha",
    act: 1,
    text: "« Sylvan, dis-moi la vérité ! C'est Brannok et sa bande qui ont fracturé mon module, n'est-ce pas ? » Sylvan recule d'un pas, les mains tremblantes. « Tais-toi, Élior ! Ne prononce pas son nom si fort. Ils ont juré de me pousser dans le broyeur de déchets orbitaux si je disais un seul mot. Le cycle dernier, un élève a essayé de parler... ils lui ont rendu la vie impossible. Baisse la tête, c'est le seul moyen de survivre ici. »",
    choices: [
      { text: "Si tu décides d'écouter les conseils de Sylvan et de te faire le plus discret possible, va au 10.", targetId: 10, label: "Se résigner au silence" },
      { text: "Si tu décides de convaincre Sylvan qu'ensemble vous êtes plus forts pour aller voir un responsable, va au 11.", targetId: 11, label: "Convaincre Sylvan" }
    ],
    statsImpact: { serenity: -5, solidarity: 10, trust: 5 },
    pedagogicalNote: "La terreur imposée par les agresseurs paralyse souvent les témoins, qui craignent de devenir les prochaines cibles."
  },

  6: {
    id: 6,
    title: "L'intervention du Veilleur de Bord",
    location: "Carrefour Central Alpha",
    act: 1,
    text: "« Monsieur le Veilleur ! Brannok m'a agressé et m'a plaqué contre le panneau sans aucune raison ! » La voix ferme coupe court à l'agression. Brannok te relâche aussitôt en simulant l'innocence. Le Veilleur s'approche d'un pas lourd, ses capteurs de service clignotant. « Que se passe-t-il ici ? Les contacts physiques violents sont formellement proscrits par le code de la station. Brannok, recule. Élior, si tu souhaites que j'ouvre un dossier, il me faudra un signalement horodaté sur ton terminal. »",
    choices: [
      { text: "Si tu décides de rédiger immédiatement le signalement détaillé sur ton datapad, va au 12.", targetId: 12, label: "Rédiger le signalement" },
      { text: "Si tu décides de renoncer devant le regard menaçant que te lance Brannok derrière le surveillant, va au 13.", targetId: 13, label: "Renoncer par peur" }
    ],
    statsImpact: { serenity: 5, solidarity: 0, trust: 15 },
    pedagogicalNote: "Parler à un adulte n'est pas de la délation, c'est l'activation légitime des règles communes de sécurité."
  },

  7: {
    id: 7,
    title: "Le piège du faux chahut",
    location: "Coursive Alpha-3",
    act: 1,
    text: "« On... on répétait juste un mouvement pour le cours d'hydro-gravité, monsieur le Veilleur », balbuties-tu la gorge serrée. Le Veilleur hausse les sourcils, dubitatif, puis continue sa ronde en lâchant : « Pas de turbulence dans les coursives. » Dès que ses pas s'estompent, Brannok te coince de nouveau le bras d'une torsion douloureuse. « Bien joué, vermine. Pour ta docilité, tu me verseras ta capsule d'énergie vitale chaque matin au sas 4. Sinon, tes cours finiront dans la décharge. »",
    choices: [
      { text: "Si tu décides de lui céder ta capsule d'énergie pour acheter ta tranquillité, va au 14.", targetId: 14, label: "Céder la capsule" },
      { text: "Si tu décides de refuser fermement ce chantage malgré la douleur au poignet, va au 15.", targetId: 15, label: "Refuser le racket" }
    ],
    statsImpact: { serenity: -20, solidarity: -5, trust: -10 },
    pedagogicalNote: "Mentir aux adultes pour couvrir son agresseur aggrave immédiatement le cycle des exigences et du chantage."
  },

  8: {
    id: 8,
    title: "Rencontre dans l'atelier auxiliaire",
    location: "Sas de Maintenance Bêta",
    act: 1,
    text: "Dans la demi-obscurité du sas de maintenance, tu découvres une élève accroupie devant un droïde d'exploration éventré. C'est Lyra, une recrue du Cycle Alpha passionnée de mécanique quantique. En voyant tes mains trembler et ton uniforme froissé, elle dépose sa clé à plasma. « Tu as croisé le trio de choc, je parie ? Brannok a essayé la même chose avec moi le premier mois. Il cherche toujours ceux qui lui semblent isolés. Tu ne devrais pas rester seul avec ça. »",
    choices: [
      { text: "Si tu décides de lui confier toute l'histoire et d'accepter son écoute bienveillante, va au 16.", targetId: 16, label: "Se confier à Lyra" },
      { text: "Si tu décides de feindre que tout va bien et de quitter rapidement le sas, va au 17.", targetId: 17, label: "Partir par fierté" }
    ],
    statsImpact: { serenity: 10, solidarity: 15, trust: 5 },
    pedagogicalNote: "Trouver des pairs qui partagent ou comprennent l'épreuve brise instantanément l'isolement recherché par les harceleurs."
  },

  9: {
    id: 9,
    title: "Tension au Réfectoire des Synthèses",
    location: "Réfectoire des Synthèses",
    act: 1,
    text: "Le réfectoire résonne du brouhaha de centaines de recrues. Tu trouves une table libre et poses ton plateau de concentrés énergétiques. Quelques secondes plus tard, un plateau s'écrase violemment sur le tien, projetant ton bol de soupe synthétique sur ta poitrine. Brannok s'installe face à toi en étalant ses jambes, encadré par Tark et Vael qui ricanent grassement. Plusieurs élèves aux tables voisines tournent la tête, gênés, mais personne n'ose intervenir.",
    choices: [
      { text: "Si tu décides de ramasser tes affaires souillées et de changer de table sans faire de vague, va au 18.", targetId: 18, label: "Changer de table" },
      { text: "Si tu décides de te lever et de dénoncer son geste à voix haute devant tout le réfectoire, va au 19.", targetId: 19, label: "Protester publiquement" }
    ],
    statsImpact: { serenity: -15, solidarity: 0, trust: 0 },
    pedagogicalNote: "L'intimidation en public vise à humilier et à tester la passivité de l'assistance."
  },

  10: {
    id: 10,
    title: "La stratégie de l'invisibilité",
    location: "Couloir d'accès aux Simulateurs",
    act: 1,
    text: "Pendant trois jours, tu tentes de devenir transparent. Tu marches la tête basse, tu évites les coursives principales, tu attends que tout le monde soit parti pour sortir des cours. Mais cette stratégie d'évitement te ronge. Tu sursautes au moindre bruit de botte magnétique. Pire encore, Brannok a remarqué tes détours et semble s'amuser de ta terreur, t'attendant désormais aux carrefours pour des croche-pieds discrets qui t'envoient rouler au sol.",
    choices: [
      { text: "Si tu décides de sécher la séance obligatoire de simulation pour ne pas le croiser, va au 20.", targetId: 20, label: "Sécher le simulateur" },
      { text: "Si tu décides d'emprunter les coursives techniques désertes sous la coque, va au 21.", targetId: 21, label: "Prendre les coursives sombres" }
    ],
    statsImpact: { serenity: -15, solidarity: -10, trust: -5 },
    pedagogicalNote: "L'évitement permanent épuise psychologiquement la victime sans jamais décourager l'agresseur."
  },

  11: {
    id: 11,
    title: "Le refus catégorique de Sylvan",
    location: "Modules de Rechargement Alpha",
    act: 1,
    text: "« Sylvan, s'il te plaît ! Si nous allons voir le Régulateur de Module à deux, il sera obligé de nous écouter ! » Les yeux de Sylvan s'écarquillent de panique. « Tu es fou, Élior ! Brannok est en Cycle Supérieur, son père est ingénieur en chef sur les réacteurs. Si je parle, je deviens le traître de la station. Je ne peux pas, je suis désolé... » Il s'enfuit à toutes jambes vers le sas de décompression, te laissant seul devant ton casier dévasté.",
    choices: [
      { text: "Si tu décides de te rendre seul au bureau du Régulateur de Module dès maintenant, va au 22.", targetId: 22, label: "Aller seul chez le CPE" },
      { text: "Si tu décides de chercher d'abord un enseignant bienveillant qui t'inspire confiance, va au 23.", targetId: 23, label: "Trouver un mentor" }
    ],
    statsImpact: { serenity: -5, solidarity: -5, trust: 10 },
    pedagogicalNote: "Même face à la défection d'un camarade effrayé, la démarche vers les adultes ressources demeure la voie salutaire."
  },

  12: {
    id: 12,
    title: "Le premier enregistrement officiel",
    location: "Terminal de Bord Alpha",
    act: 1,
    text: "Tu t'assois devant le terminal public et actives le formulaire de sécurité de la station. Avec précision, tu décris la bousculade violente, la dégradation de ton casier et les menaces verbales. Tes doigts tremblent, mais rédiger les faits réels te redonne un sentiment de maîtrise. Tu ajoutes l'heure exacte et l'emplacement des caméras du carrefour. Tu hésites un instant sur la façon de protéger ce fichier confidentiel avant de l'envoyer.",
    choices: [
      { text: "Si tu décides de sécuriser le fichier avec une clé cryptée personnelle avant envoi, va au 24.", targetId: 24, label: "Crypter les preuves" },
      { text: "Si tu décides d'aller montrer ce brouillon à Sylvan pour lui prouver que tu agis dans les règles, va au 25.", targetId: 25, label: "Montrer à Sylvan" }
    ],
    statsImpact: { serenity: 10, solidarity: 5, trust: 15, badge: "Journal de Preuves" },
    pedagogicalNote: "Noter méthodiquement les faits, les dates et les lieux permet d'objectiver la situation face aux adultes."
  },

  13: {
    id: 13,
    title: "Le repli dans l'angoisse",
    location: "Sas Sanitaire B-12",
    act: 1,
    text: "Devant le sourire narquois de Brannok, ton courage s'est évanoui. Tu as effacé le formulaire. Réfugié dans un recoin des sanitaires, tu passes de l'eau glacée sur ton visage en sueur. Ton bracelet biosensoriel émet de légers bips stridents indiquant un pic d'angoisse et une tension anormale. Tu as l'impression que la station entière se referme sur toi comme une cage de titane dont tu ne trouveras jamais la clé.",
    choices: [
      { text: "Si tu décides de te rendre au sas médical pour faire vérifier tes constantes par l'infirmier, va au 26.", targetId: 26, label: "Aller à l'infirmerie" },
      { text: "Si tu décides de t'enfermer dans ta cabine de couchage en attendant que l'orage passe, va au 27.", targetId: 27, label: "S'enfermer en cabine" }
    ],
    statsImpact: { serenity: -15, solidarity: -5, trust: -5 },
    pedagogicalNote: "Les signaux corporels (somatisation, angoisse, palpitations) sont des alertes à écouter et à signaler au corps médical."
  },

  14: {
    id: 14,
    title: "Le piège du tribut énergétique",
    location: "Sas Aveugle 4",
    act: 1,
    text: "Tu glisses ta capsule d'énergie vitale dans la paume gantée de Brannok. Il l'examine avec mépris avant de la faire disparaître dans sa poche. « C'est bien, recrue. Tu apprends vite ta place dans la hiérarchie orbitale. Rendez-vous demain au même cycle pour la suivante. Et si tu as le malheur d'oublier, Tark se chargera de tester la résistance de tes côtes contre la décompression. » Tu réalises avec effroi que le calvaire ne fait que commencer.",
    choices: [
      { text: "Si tu décides d'économiser sur tes repas pour continuer à payer en espérant avoir la paix, va au 28.", targetId: 28, label: "Continuer de payer" },
      { text: "Si tu décides que cette soumission est insupportable et qu'il faut briser ce chantage, va au 29.", targetId: 29, label: "Refuser le racket" }
    ],
    statsImpact: { serenity: -20, solidarity: -10, trust: -10 },
    pedagogicalNote: "Céder au racket n'achète jamais la paix : cela confirme à l'agresseur son emprise et augmente ses exigences."
  },

  15: {
    id: 15,
    title: "L'escalade de la violence physique",
    location: "Sas Aveugle 4",
    act: 1,
    text: "« Jamais ! Mes capsules m'appartiennent et je ne te donnerai rien ! » Fou de rage, Brannok te pousse brutalement au sol. Tark te bloque les jambes pendant que Brannok te tord le poignet jusqu'à ce qu'un craquement sinistre te fasse hurler de douleur. « Tu vas apprendre à qui tu as affaire ! » Des bruits de pas lourds résonnent au bout du couloir d'accès. La ronde des Veilleurs approche peut-être.",
    choices: [
      { text: "Si tu décides de crier de toutes tes forces pour attirer l'attention de la ronde, va au 30.", targetId: 30, label: "Crier au secours" },
      { text: "Si tu décides de serrer les dents et d'encaisser en silence par peur d'être frappé plus fort, va au 13.", targetId: 13, label: "Encaisser en silence" }
    ],
    statsImpact: { serenity: -15, solidarity: 0, trust: 5 },
    pedagogicalNote: "Quand l'intégrité physique est menacée, alerter sans délai l'entourage est un réflexe vital de survie."
  },

  16: {
    id: 16,
    title: "L'invitation au club d'astro-robotique",
    location: "Atelier d'Astro-Robotique",
    act: 1,
    text: "Lyra sourit chaleureusement en t'écoutant vider ton sac. « Tu as bien fait d'en parler, Élior. Brannok compte sur l'isolement de ses proies. Viens avec moi à l'atelier d'astro-robotique après le cycle de cours. Nous sommes un groupe soudé de passionnés et le Mentor Corvo est quelqu'un d'incroyablement protecteur et juste. Si tu es entouré, Brannok n'aura plus la même prise sur toi. » Une lueur d'espoir renaît dans ta poitrine.",
    choices: [
      { text: "Si tu décides d'accepter son invitation et de rejoindre l'atelier ce soir, va au 31.", targetId: 31, label: "Rejoindre l'atelier" },
      { text: "Si tu décides de décliner par timidité et peur de déranger son groupe, va au 32.", targetId: 32, label: "Décliner l'invitation" }
    ],
    statsImpact: { serenity: 15, solidarity: 20, trust: 10, badge: "Allié d'Astro-Robotique" },
    pedagogicalNote: "S'investir dans des activités collectives valorisantes permet de reconstruire son estime de soi et son réseau d'amis."
  },

  17: {
    id: 17,
    title: "La solitude des coursives",
    location: "Coursive de Transit Principale",
    act: 1,
    text: "Tu remercies poliment Lyra sans rien lui avouer, prétendant un devoir urgent en astrophysique. De retour dans les coursives baignées d'une lumière blafarde, tu te sens plus vulnérable que jamais. Chaque pas résonne comme un compte à rebours. Des recrues de ton âge rient en groupe vers la passerelle de loisirs, mais tu as l'impression d'appartenir à un autre monde, exclu et traqué par une meute invisible.",
    choices: [
      { text: "Si tu décides de retourner vers ta salle de classe pour attendre le professeur, va au 33.", targetId: 33, label: "Aller en classe tôt" },
      { text: "Si tu décides de monter vers la coupole panoramique pour réfléchir au calme, va au 34.", targetId: 34, label: "Monter à la coupole" }
    ],
    statsImpact: { serenity: -10, solidarity: -10, trust: 0 },
    pedagogicalNote: "Refuser les mains tendues par fierté ou pudeur retarde la sortie de l'engrenage du harcèlement."
  },

  18: {
    id: 18,
    title: "La table des parias",
    location: "Réfectoire des Synthèses",
    act: 1,
    text: "Essuyant ton uniforme maculé de liquide nutritif, tu t'assieds tout au fond de la salle, près des conduits de recyclage de matière. Les rires moqueurs de Brannok et ses acolytes continuent de fuser à travers les rangées de tables. Tu croises le regard de Sylvan, assis trois rangées plus loin avec d'autres camarades du Cycle Alpha. Il te regarde avec une profonde culpabilité, mais n'ose faire le moindre geste de ralliement.",
    choices: [
      { text: "Si tu décides de lui faire un signe discret pour lui proposer de discuter après le repas, va au 35.", targetId: 35, label: "Faire signe à Sylvan" },
      { text: "Si tu décides de manger rapidement les yeux rivés sur ta table sans regarder personne, va au 36.", targetId: 36, label: "Manger prostré" }
    ],
    statsImpact: { serenity: -10, solidarity: 5, trust: 0 },
    pedagogicalNote: "Tendre la main à un témoin sans le culpabiliser peut l'aider à sortir de sa propre tétanie."
  },

  19: {
    id: 19,
    title: "Le cri du cœur en plein réfectoire",
    location: "Réfectoire des Synthèses",
    act: 1,
    text: "« Ça suffit, Brannok ! » Ta voix claque comme une détonation dans le silence soudain du réfectoire. « Tu passes ton temps à bousculer les nouveaux, à dégrader nos casiers et à extorquer nos rations ! Regardez tous ce qu'il fait ! » Brannok blêmit un quart de seconde, décontenancé par ton audace publique. Mais il reprend vite contenance : « Calme-toi, recrue hystérique, tu ne sais même pas tenir un plateau. » Tous les regards convergent vers vous.",
    choices: [
      { text: "Si tu décides de prendre à témoin tes camarades présents autour de la table, va au 37.", targetId: 37, label: "Prendre à témoin la salle" },
      { text: "Si tu décides de ramasser tes affaires et de sortir furieux sous les regards médusés, va au 38.", targetId: 38, label: "Sortir furieux" }
    ],
    statsImpact: { serenity: 5, solidarity: 10, trust: 5 },
    pedagogicalNote: "Rompre l'omerta publique force les témoins à choisir entre complaisance passive et solidarité active."
  },

  20: {
    id: 20,
    title: "L'absentéisme refuge",
    location: "Sas de Décharge Orbitale",
    act: 1,
    text: "Tu t'es réfugié derrière des conteneurs de fret pendant toute l'heure de simulation de pilotage. La sirène de fin d'exercice retentit enfin. Ton bracelet vibre d'un voyant rouge clignotant : l'intelligence artificielle de scolarité a notifié ton absence injustifiée sur le registre de la station. En esquivant Brannok, tu viens d'enfreindre le règlement intérieur d'Oxy-Kaelis, et ton nom est désormais sur la liste des infractions du jour.",
    choices: [
      { text: "Si tu décides d'inventer une défaillance de sas pour justifier ton retard auprès du surveillant, va au 39.", targetId: 39, label: "Mentir sur l'absence" },
      { text: "Si tu décides d'aller voir l'instructeur de vol pour lui expliquer la vraie raison de ton absence, va au 40.", targetId: 40, label: "Avouer à l'instructeur" }
    ],
    statsImpact: { serenity: -15, solidarity: -5, trust: 5 },
    pedagogicalNote: "Le décrochage scolaire ou l'évitement des cours est une conséquence classique du harcèlement qu'il faut enrayer immédiatement."
  },

  21: {
    id: 21,
    title: "Le guet-apens des tuyaux de refroidissement",
    location: "Coursive Technique Zéro-G",
    act: 1,
    text: "Pensant échapper au groupe, tu t'engouffres dans la coursive technique secondaire. Les tuyaux de fluide cryogénique grondent sourdement. Soudain, Tark et Vael surgissent d'un sas d'entretien latéral. Ils te coupent la retraite en riant. « Tu croyais pouvoir te faufiler en douce, la crevette ? Brannok nous a demandé de récupérer les capsules de la semaine d'avance. » Ils s'avancent vers toi les poings serrés, bloquant l'unique issue étroite.",
    choices: [
      { text: "Si tu décides d'activer la balise d'urgence de ton bracelet d'élève, va au 41.", targetId: 41, label: "Activer la balise" },
      { text: "Si tu décides de tenter de forcer le passage en courant de toutes tes forces, va au 42.", targetId: 42, label: "Tenter de forcer" }
    ],
    statsImpact: { serenity: -20, solidarity: 0, trust: 10 },
    pedagogicalNote: "Les lieux isolés et non surveillés sont privilégiés par les agresseurs ; utiliser les alarmes d'urgence y est légitime."
  },

  22: {
    id: 22,
    title: "Le seuil du bureau du Régulateur",
    location: "Module Administratif Central",
    act: 1,
    text: "Le bureau du Régulateur de Module (le CPE de la station) est devant toi. Une plaque lumineuse indique : 'Écoute, Médiation et Régulation des Conflits'. À travers la vitre teintée, tu aperçois le Régulateur consultant des hologrammes de scolarité. Ton estomac se contracte douloureusement. Les menaces de Brannok résonnent dans ton crâne : 'Si tu parles, tu le regretteras toute l'année'. Mais tes forces s'épuisent.",
    choices: [
      { text: "Si tu décides de frapper fermement à la porte et d'entrer pour tout raconter, va au 43.", targetId: 43, label: "Entrer chez le Régulateur" },
      { text: "Si tu décides de faire demi-tour au dernier moment, submergé par le doute, va au 44.", targetId: 44, label: "Faire demi-tour" }
    ],
    statsImpact: { serenity: 0, solidarity: 0, trust: 10 },
    pedagogicalNote: "Le seuil du bureau d'un adulte ressource est le moment le plus difficile, mais aussi le tournant décisif vers la résolution."
  },

  23: {
    id: 23,
    title: "En quête d'un adulte bienveillant",
    location: "Laboratoire de Propulsion",
    act: 1,
    text: "Tu penses au Mentor Corvo, l'instructeur de propulsion stellaire. Pendant ses cours, il insiste toujours sur le respect mutuel et l'esprit d'équipage spatial. Tu te rends vers son laboratoire. Il range des injecteurs de plasma sur son établi tout en sifflotant. En te voyant arriver, il lève les yeux et sourit avec bienveillance. « Bonjour Élior. Tu as une question sur la propulsion à distorsion, ou quelque chose d'autre te tracasse ? »",
    choices: [
      { text: "Si tu décides de lui demander un entretien confidentiel après son rangement, va au 45.", targetId: 45, label: "Demander un entretien" },
      { text: "Si tu décides de lui transmettre un message crypté sur son terminal personnel ce soir, va au 46.", targetId: 46, label: "Message crypté" }
    ],
    statsImpact: { serenity: 10, solidarity: 5, trust: 15 },
    pedagogicalNote: "Chaque élève peut choisir l'adulte de l'établissement avec lequel il se sent le plus à l'aise pour confier son calvaire."
  },

  24: {
    id: 24,
    title: "Le dossier de surveillance crypté",
    location: "Terminal Personnel",
    act: 1,
    text: "Grâce à ta clé cryptographique, tu verrouilles ton datapad. Chaque fois que Brannok te bouscule, chaque fois qu'un casier est forcé ou qu'une capsule est dérobée, tu consignes l'horodatage, le lieu exact et les personnes présentes. En quelques jours, tu disposes d'un rapport irréfutable de dix incidents caractérisés. Ce n'est plus ta parole contre la sienne : c'est un ensemble de faits concordants qui démontrent la répétition.",
    choices: [
      { text: "Si tu décides de conserver ces données sans les montrer en espérant que ça se calme, va au 47.", targetId: 47, label: "Garder sans agir" },
      { text: "Si tu décides de déposer ce dossier de preuves auprès de la direction de station, va au 48.", targetId: 48, label: "Transmettre le dossier" }
    ],
    statsImpact: { serenity: 15, solidarity: 0, trust: 10, badge: "Dossier Horodaté" },
    pedagogicalNote: "La répétition est l'élément constitutif du harcèlement ; colliger les faits permet de le qualifier sans contestation possible."
  },

  25: {
    id: 25,
    title: "La prise de conscience de Sylvan",
    location: "Bibliothèque Holographique",
    act: 1,
    text: "Dans un coin calme de la bibliothèque holographique, tu montres l'écran de ton datapad à Sylvan. En lisant la liste exhaustive des bousculades, des dégradations de casiers et des menaces, Sylvan pâlit. « Je ne me rendais pas compte que c'était devenu aussi systématique... Je croyais que c'étaient des accidents isolés. Élior, ce n'est plus du simple chahut, c'est de l'acharnement pur et simple. »",
    choices: [
      { text: "Si tu décides de lui proposer d'ajouter son témoignage écrit pour renforcer le dossier, va au 49.", targetId: 49, label: "Proposer de témoigner" },
      { text: "Si tu décides de le décharger de toute responsabilité pour ne pas l'exposer, va au 50.", targetId: 50, label: "Le décharger par pitié" }
    ],
    statsImpact: { serenity: 5, solidarity: 15, trust: 10 },
    pedagogicalNote: "Mettre des mots clairs sur la répétition aide les témoins à prendre conscience de la gravité de la situation."
  },

  26: {
    id: 26,
    title: "Le scan du Médiateur Biosensoriel",
    location: "Sas Médical Central",
    act: 1,
    text: "Le Médiateur Biosensoriel passe un faisceau de régénération dermique sur ton poignet tuméfié. L'hologramme médical affiche une contusion profonde et un niveau de cortisol traduisant un stress chronique aigu. Le médecin s'assoit en face de toi et pose doucement sa main sur ton épaule. « Élior, un coup pareil ne provient pas d'une maladresse de porte automatique. Tu es en sécurité ici. Raconte-moi qui t'a fait cela. »",
    choices: [
      { text: "Si tu décides de tout lui révéler en lui accordant ta pleine confiance, va au 51.", targetId: 51, label: "Tout révéler au médecin" },
      { text: "Si tu décides de maintenir le mensonge d'une chute pour ne pas faire d'histoire, va au 52.", targetId: 52, label: "Mentir à l'infirmier" }
    ],
    statsImpact: { serenity: 10, solidarity: 5, trust: 20 },
    pedagogicalNote: "L'infirmier scolaire et le médecin sont tenus au secret professionnel et sont formés pour accompagner et protéger."
  },

  27: {
    id: 27,
    title: "L'engrenage des pensées sombres",
    location: "Cabine Individuelle 104",
    act: 1,
    text: "Assis sur ta couchette étroite, la lumière éteinte, tu fixes le hublot donnant sur l'immensité glacée de l'espace. La colère monte en toi, visqueuse et destructrice. Pourquoi toi ? Pourquoi personne ne bouge ? Une idée toxique commence à germer dans ton esprit : puisque les adultes ne voient rien, tu vas te venger toi-même. Tu pourrais dépressuriser le casier de Brannok ou piéger son harnais au Dôme d'Hydro-gravité.",
    choices: [
      { text: "Si tu décides de préparer un piège artisanal pour faire payer Brannok, va au 53.", targetId: 53, label: "Préparer une vengeance" },
      { text: "Si tu décides de rejeter cette tentation dangereuse et de chercher une vraie solution, va au 54.", targetId: 54, label: "Rejeter la vengeance" }
    ],
    statsImpact: { serenity: -20, solidarity: -15, trust: -10 },
    pedagogicalNote: "La tentation de la vengeance transforme la victime en coupable et aggrave dramatiquement la spirale de violence."
  },

  28: {
    id: 28,
    title: "L'épuisement métabolique",
    location: "Dôme d'Hydro-gravité",
    act: 1,
    text: "Deux semaines ont passé. Privé d'une partie de tes rations énergétiques remises à Brannok, ton corps tire sur ses réserves. Pendant l'exercice de déplacement en apesanteur, un violent vertige t'assaille. Tes bras refusent d'agripper la barre de sustentation. Tu lâches prise et heurtes le filet amortisseur sous les rires de Tark et Vael. L'instructeur siffle l'arrêt de la séance en te regardant d'un air alarmé.",
    choices: [
      { text: "Si tu décides de continuer à subir ce sacrifice pour éviter une nouvelle agression, va au 55.", targetId: 55, label: "Continuer de subir" },
      { text: "Si tu décides de dire stop immédiatement et de refuser de lui donner la prochaine capsule, va au 56.", targetId: 56, label: "Dire stop au racket" }
    ],
    statsImpact: { serenity: -25, solidarity: 0, trust: 0 },
    pedagogicalNote: "Le racket a des conséquences directes sur la santé physique et les capacités d'apprentissage de l'élève."
  },

  29: {
    id: 29,
    title: "La rupture de l'engrenage",
    location: "Passerelle Centrale",
    act: 1,
    text: "En contemplant les constellations, un déclic salutaire s'opère dans ton esprit. Céder ne te protège de rien. Chaque concession n'a fait que nourrir l'arrogance de Brannok. Tu n'es pas coupable de sa cruauté, et tu as le droit fondamental de vivre ton apprentissage en paix sur cette station. Il est temps de changer de stratégie et d'unir tes forces.",
    choices: [
      { text: "Si tu décides de chercher d'autres recrues qui subissent également ses intimidations, va au 57.", targetId: 57, label: "Rassembler les victimes" },
      { text: "Si tu décides de déposer un recours formel auprès du Conseil de Station, va au 58.", targetId: 58, label: "Recours officiel" }
    ],
    statsImpact: { serenity: 15, solidarity: 15, trust: 15 },
    pedagogicalNote: "La prise de conscience que la soumission n'arrêtera jamais le harcèlement est le premier pas vers l'émancipation."
  },

  30: {
    id: 30,
    title: "L'écho salvateur de l'alerte",
    location: "Sas Aveugle 4",
    act: 1,
    text: "« À L'AIDE ! ILS M'AGRESSENT ! » Ton hurlement se répercute contre les parois métalliques du sas comme un coup de tonnerre. Paniqué par le bruit, Brannok te lâche immédiatement. « Cours, imbécile ! » murmure Tark en tirant son chef par la manche. Les deux complices détalent dans la coursive dérobée au moment précis où deux Veilleurs de Bord débouchent au coin du couloir, leurs matraques lumineuses activées.",
    choices: [
      { text: "Si tu décides de leur expliquer exactement qui t'agressait et la tentative de racket physique, va au 59.", targetId: 59, label: "Témoigner aux Veilleurs" },
      { text: "Si tu décides de minimiser l'incident par honte d'avoir crié si fort, va au 60.", targetId: 60, label: "Minimiser l'alerte" }
    ],
    statsImpact: { serenity: 10, solidarity: 5, trust: 15 },
    pedagogicalNote: "Briser le silence par un appel au secours direct met en fuite les agresseurs qui prospèrent dans la clandestinité."
  },

  31: {
    id: 31,
    title: "La force du collectif d'astro-robotique",
    location: "Atelier d'Astro-Robotique",
    act: 2,
    text: "L'atelier bourdonne d'activités joyeuses. Lyra t'accueille avec un grand sourire et te présente Malik et Zephyr, deux recrues passionnées. Mentor Corvo supervise les soudures de propulseurs tout en partageant des anecdotes d'astronavigation. Pour la première fois depuis ton arrivée sur Oxy-Kaelis, tu te sens valorisé et entouré de bienveillance. Tu as l'occasion d'expliquer ce que tu traverses.",
    choices: [
      { text: "Si tu décides de partager ouvertement tes difficultés avec ce nouveau groupe solidaire, va au 61.", targetId: 61, label: "S'ouvrir au groupe" },
      { text: "Si tu préfères te concentrer uniquement sur les pièces de robots sans aborder tes soucis, va au 62.", targetId: 62, label: "Garder pour soi" }
    ],
    statsImpact: { serenity: 20, solidarity: 25, trust: 15 },
    pedagogicalNote: "Les ateliers parascolaires et clubs de découverte sont de précieux refuges pour créer de nouvelles amitiés protectrices."
  },

  32: {
    id: 32,
    title: "Le mur invisible de l'isolement",
    location: "Coursive Alpha-7",
    act: 2,
    text: "Tu as refusé l'invitation de Lyra. Te voilà de nouveau errant seul pendant la pause orbitale. En voyant des groupes rire ensemble, tu te sens étranger à la joie des autres recrues. Ton estime personnelle s'étiole jour après jour. Tu te demandes si ce n'est pas toi qui attires les coups par ta timidité, alors que tu n'es en rien responsable de la violence d'autrui.",
    choices: [
      { text: "Si tu décides de faire un effort pour renouer le contact avec Sylvan malgré ses réticences, va au 63.", targetId: 63, label: "Renouer avec Sylvan" },
      { text: "Si tu décides de t'enfermer dans ta bulle et d'éviter tout contact social, va au 64.", targetId: 64, label: "S'enfermer dans sa bulle" }
    ],
    statsImpact: { serenity: -15, solidarity: -15, trust: -5 },
    pedagogicalNote: "La culpabilité inversée (se croire responsable du harcèlement subi) est une illusion toxique qu'il faut combattre."
  },

  33: {
    id: 33,
    title: "Intimidations insidieuses en classe",
    location: "Salle d'Astrophysique",
    act: 2,
    text: "Pendant le cours d'astrophysique, Brannok est assis juste derrière toi. Dès que le professeur se tourne vers le tableau holographique, il te donne des coups de pied dans le dossier de ton siège, dérègle ton terminal tactile et te jette des petits écrous métalliques dans le cou. Tu peines à suivre les explications sur les orbites géostationnaires. La boule au ventre t'empêche de respirer normalement.",
    choices: [
      { text: "Si tu décides de lever la main pour signaler au professeur les perturbations incessantes, va au 65.", targetId: 65, label: "Signaler au professeur" },
      { text: "Si tu décides de serrer les poings et d'attendre la sonnerie sans rien dire, va au 66.", targetId: 66, label: "Subir le cours" }
    ],
    statsImpact: { serenity: -10, solidarity: 0, trust: 5 },
    pedagogicalNote: "Le harcèlement s'infiltre aussi en classe par des micro-agressions répétées pour déstabiliser la concentration."
  },

  34: {
    id: 34,
    title: "Rencontre sous la verrière stellaire",
    location: "Coupole Panoramique",
    act: 2,
    text: "La coupole offre une vue vertigineuse sur les anneaux de glace de la planète géante autour de laquelle gravite Oxy-Kaelis. Alors que tu contemples le vide infini pour calmer tes angoisses, une silhouette s'approche doucement. C'est Sylvan. Il s'assied à deux mètres de toi, les yeux baissés sur ses bottes de spationaute. « Élior... je me sens tellement lâche de t'avoir laissé tomber l'autre jour. »",
    choices: [
      { text: "Si tu décides de lui exprimer honnêtement ta souffrance tout en lui tendant la main, va au 67.", targetId: 67, label: "Exprimer sa souffrance" },
      { text: "Si tu décides de laisser éclater ta rancœur et de le traiter de traître, va au 68.", targetId: 68, label: "Rejeter Sylvan avec colère" }
    ],
    statsImpact: { serenity: 10, solidarity: 15, trust: 10 },
    pedagogicalNote: "Accueillir les regrets d'un témoin effrayé permet souvent de transformer un spectateur passif en allié actif."
  },

  35: {
    id: 35,
    title: "Le dialogue discret au réfectoire",
    location: "Sas de Sortie du Réfectoire",
    act: 2,
    text: "Sylvan t'a rejoint près de la borne de recyclage des plateaux. À voix très basse, il chuchote : « Élior, Brannok a prévu de te coincer demain au Dôme d'Hydro-gravité pendant l'épreuve de saut sans harnais. Il veut te faire tomber pour que tu sois disqualifié du Cycle Alpha. Je ne peux pas accepter ça. Qu'est-ce qu'on peut faire ? » Pour la première fois, Sylvan envisage d'agir.",
    choices: [
      { text: "Si tu décides de lui expliquer comment il peut t'aider sans s'exposer directement, va au 69.", targetId: 69, label: "Planifier l'aide de Sylvan" },
      { text: "Si tu décides de lui dire que c'est trop risqué pour lui et de refuser son soutien, va au 70.", targetId: 70, label: "Refuser son aide" }
    ],
    statsImpact: { serenity: 15, solidarity: 20, trust: 10 },
    pedagogicalNote: "Les confidences de témoins permettent d'anticiper les pièges et de sécuriser les situations à risque."
  },

  36: {
    id: 36,
    title: "La découverte d'une autre victime",
    location: "Réfectoire des Synthèses",
    act: 2,
    text: "En mangeant ton concentré dans ton coin, tu remarques une scène familière deux tables plus loin. Tark et Vael encadrent une jeune recrue de la colonie de Mars, visiblement terrifiée. Ils s'emparent de son insigne de vol tout en lui tapotant la joue de manière humiliante. Personne ne réagit. Tu ressens au fond de toi une révolte intense : tu sais exactement ce que ressent cet élève.",
    choices: [
      { text: "Si tu décides de te lever pour aller t'asseoir à côté de la jeune recrue et faire bloc, va au 71.", targetId: 71, label: "Soutenir la jeune recrue" },
      { text: "Si tu décides de détourner le regard par soulagement de ne pas être la cible aujourd'hui, va au 72.", targetId: 72, label: "Détourner le regard" }
    ],
    statsImpact: { serenity: 0, solidarity: 15, trust: 5 },
    pedagogicalNote: "Le harcèlement ne s'arrête pas de lui-même : un agresseur impuni reproduit inlassablement son schéma sur d'autres proies."
  },

  37: {
    id: 37,
    title: "Le réveil des témoins",
    location: "Réfectoire des Synthèses",
    act: 2,
    text: "Devant ton interpellation, deux élèves de ta classe se lèvent timidement à la table voisine. « C'est vrai ! Brannok a renversé le bol exprès ! » s'exclame l'un d'eux. Un murmure d'approbation parcourt les rangs. Les Veilleurs de Bord du réfectoire interviennent immédiatement pour séparer les groupes. Brannok jette des regards assassins, mais pour la première fois, la honte a changé de camp sous le regard collectif.",
    choices: [
      { text: "Si tu demandes au Veilleur de consigner immédiatement les identifiants des témoins, va au 73.", targetId: 73, label: "Consigner les témoins" },
      { text: "Si tu décides de laisser retomber la tension sans exiger de suite officielle, va au 74.", targetId: 74, label: "Laisser retomber" }
    ],
    statsImpact: { serenity: 15, solidarity: 25, trust: 15 },
    pedagogicalNote: "Quand les témoins parlent d'une seule voix, le sentiment de toute-puissance de l'agresseur s'effondre instantanément."
  },

  38: {
    id: 38,
    title: "La spirale de la rancœur solitaire",
    location: "Sas des Déchets Orbitaux",
    act: 2,
    text: "Humilié et isolé, tu t'enfuis du réfectoire sous les quolibets. La rage te submerge. Tu as le sentiment que les règles d'Oxy-Kaelis sont une farce qui ne protège que les plus forts. Dans les recoins du sas des déchets, tu trouves des composants électriques et une batterie à haut voltage abandonnée. Une pensée destructrice s'impose : fabriquer un dispositif pour électrocuter le casier de Brannok.",
    choices: [
      { text: "Si tu décides d'assembler cette arme de fortune pour te faire justice toi-même, va au 75.", targetId: 75, label: "Fabriquer l'arme" },
      { text: "Si tu réalises la folie de cet acte et décides d'aller plutôt voir le Médiateur Biosensoriel, va au 51.", targetId: 51, label: "Aller chez le Médiateur" }
    ],
    statsImpact: { serenity: -25, solidarity: -20, trust: -15 },
    pedagogicalNote: "Se faire justice soi-même décrédibilise totalement la victime et conduit à des sanctions sévères et méritées."
  },

  39: {
    id: 39,
    title: "L'impasse du mensonge",
    location: "Bureau des Sanctions Alpha",
    act: 2,
    text: "L'ordinateur de surveillance a vérifié les journaux des portes : aucune défaillance de sas n'a été enregistrée à l'heure indiquée. Le superviseur te regarde d'un air sévère : « Mentir sur un dysfonctionnement de sas est une faute grave contre la sécurité de la station, Élior. Tu écopes de deux heures de corvée de dépoussiérage des filtres cryogéniques. » Tu baisses la tête, piégé par ton propre mensonge.",
    choices: [
      { text: "Si tu décides d'expliquer enfin la vérité sur la traque de Brannok au superviseur, va au 76.", targetId: 76, label: "Avouer au superviseur" },
      { text: "Si tu décides d'effectuer ta punition en silence sans rien dire de plus, va au 77.", targetId: 77, label: "Purger la punition" }
    ],
    statsImpact: { serenity: -15, solidarity: -5, trust: -10 },
    pedagogicalNote: "S'enferrer dans des mensonges pour masquer le harcèlement finit par attirer des sanctions imméritées sur la victime."
  },

  40: {
    id: 40,
    title: "L'écoute bienveillante de l'instructeur",
    location: "Salle des Simulateurs de Vol",
    act: 2,
    text: "L'instructeur de vol écoute ton récit avec attention. Son visage d'ordinaire sévère s'adoucit en découvrant l'angoisse qui te ronge. « Élior, aucun pilote ne peut réussir une mission spatiale s'il subit des menaces physiques dans son propre équipage. Ce n'est pas toi qui es en faute. Je suspends immédiatement ta pénalité d'absence et je t'accompagne au bureau de régulation de ce pas. »",
    choices: [
      { text: "Si tu acceptes son accompagnement bienveillant vers le Régulateur, va au 43.", targetId: 43, label: "Suivre l'instructeur" },
      { text: "Si tu le supplies de ne rien dire par terreur des représailles de Brannok, va au 78.", targetId: 78, label: "Supplier de garder le secret" }
    ],
    statsImpact: { serenity: 15, solidarity: 10, trust: 25 },
    pedagogicalNote: "Les enseignants ont le devoir d'interrompre immédiatement les sanctions lorsqu'elles découlent d'un harcèlement avéré."
  },

  41: {
    id: 41,
    title: "L'alarme retentit dans la coursive technique",
    location: "Coursive Technique Zéro-G",
    act: 2,
    text: "D'un geste vif, tu brises le sceau de ta balise d'urgence. Une alarme stridente retentit et les projecteurs clignotent en rouge éclatant. Les clapets d'isolation commencent à s'abaisser. Pris de panique, Tark et Vael réalisent que la brigade d'intervention arrive dans les trente secondes. « Tu es fou ! On se tire ! » crie Tark en forçant la grille de fuite. Tu te retrouves seul dans le couloir sécurisé.",
    choices: [
      { text: "Si tu décides d'attendre l'équipe de sécurité pour leur donner les noms de tes agresseurs, va au 79.", targetId: 79, label: "Attendre la sécurité" },
      { text: "Si tu décides de filer discrètement par peur d'être interrogé, va au 80.", targetId: 80, label: "Filer discrètement" }
    ],
    statsImpact: { serenity: 10, solidarity: 0, trust: 15 },
    pedagogicalNote: "L'utilisation légitime d'un dispositif d'alerte met fin au piège sans avoir à recourir à la violence physique."
  },

  42: {
    id: 42,
    title: "La chute douloureuse contre les tuyaux",
    location: "Coursive Technique Zéro-G",
    act: 2,
    text: "Tu tentes de charger à travers le passage. Mais Tark te bloque d'un croche-pied impitoyable pendant que Vael te repousse violemment. Tu heurtes la canalisation de vapeur à haute pression. Ta tunique se déchire et une brûlure cuisante marque ton épaule. Les deux harceleurs s'emparent de ton datapad et le projettent contre la grille métallique, fissurant l'écran avant de s'enfuir en ricanant.",
    choices: [
      { text: "Si tu décides de te relever et de te traîner vers le sas médical pour soigner ta brûlure, va au 26.", targetId: 26, label: "Aller au sas médical" },
      { text: "Si tu décides de courir après eux pour leur sauter dessus dans un accès de rage, va au 81.", targetId: 81, label: "Rendre les coups" }
    ],
    statsImpact: { serenity: -25, solidarity: -10, trust: 0 },
    pedagogicalNote: "Tenter d'affronter physiquement plusieurs agresseurs débouche quasi systématiquement sur un surcroît de blessures."
  },

  43: {
    id: 43,
    title: "L'accueil sécurisant du Régulateur",
    location: "Bureau du Régulateur de Module",
    act: 2,
    text: "Le Régulateur ferme soigneusement la porte de son bureau et t'invite à t'asseoir dans un fauteuil confortable. Il t'offre une boisson chaude régénérante. « Élior, respire profondément. Tu as franchi le pas le plus difficile en venant ici. Sur Oxy-Kaelis, aucun élève n'a le droit d'en terroriser un autre. Raconte-moi tout depuis le début, rien de ce que tu diras ne sera divulgué sans que nous préparions chaque étape ensemble. »",
    choices: [
      { text: "Si tu décides de lui présenter ton journal de preuves et les horodatages précis, va au 82.", targetId: 82, label: "Présenter le journal" },
      { text: "Si tu décides de lui faire un récit oral détaillé de ce que tu as vécu au quotidien, va au 83.", targetId: 83, label: "Récit oral sincère" }
    ],
    statsImpact: { serenity: 25, solidarity: 10, trust: 30, badge: "Alliance Régulateur" },
    pedagogicalNote: "Les professionnels de la vie scolaire sont garants du cadre protecteur et savent traiter la situation avec discernement."
  },

  44: {
    id: 44,
    title: "L'embuscade du couloir administratif",
    location: "Couloir des Services Éducatifs",
    act: 2,
    text: "Alors que tu hésitais sur le pas de la porte, tu as fait demi-tour. Malheureusement, Brannok montait la garde au coin de la coursive. Il s'approche avec un sourire venimeux. « Tiens donc... Tu voulais aller pleurnicher chez le Régulateur ? Tu as de la chance que j'aie intercepté ta petite manœuvre. Si tu t'approches encore une fois de cette porte, ce n'est pas seulement ton casier qui sera dépressurisé. »",
    choices: [
      { text: "Si tu décides de lui tenir tête avec fermeté sans te laisser intimider, va au 84.", targetId: 84, label: "Lui tenir tête" },
      { text: "Si tu baisses la tête et fuis en courant vers les recoins les plus sombres de la station, va au 85.", targetId: 85, label: "Fuir dans les recoins" }
    ],
    statsImpact: { serenity: -20, solidarity: -10, trust: -10 },
    pedagogicalNote: "Les agresseurs tentent souvent d'intercepter les démarches de signalement pour maintenir leur emprise par la peur."
  },

  45: {
    id: 45,
    title: "La promesse du Mentor Corvo",
    location: "Laboratoire de Propulsion",
    act: 2,
    text: "Le Mentor Corvo écoute avec gravité ton témoignage. Ses sourcils épais se froncent d'une saine indignation. « Élior, ce que tu décris est inacceptable. Dans l'espace, la confiance entre équipiers est une question de vie ou de mort. Brannok se trompe lourdement sur ce que signifie la force. Je vais contacter immédiatement le Régulateur pour engager la procédure d'intervention coordonnée. Tu as tout mon soutien. »",
    choices: [
      { text: "Si tu lui donnes ton accord complet pour déclencher le protocole d'équipe, va au 86.", targetId: 86, label: "Déclencher le protocole" },
      { text: "Si tu hésites et lui demandes de garder le secret absolu pour l'instant, va au 87.", targetId: 87, label: "Demander le secret" }
    ],
    statsImpact: { serenity: 20, solidarity: 15, trust: 25 },
    pedagogicalNote: "Un enseignant de confiance est un pont solide pour transmettre la situation à toute l'équipe éducative."
  },

  46: {
    id: 46,
    title: "Le message d'alerte crypté",
    location: "Terminal Personnel",
    act: 2,
    text: "Sur ton écran, la réponse du Mentor Corvo s'affiche quelques minutes après ton envoi : 'Message bien reçu, Élior. Ne reste pas seul ce soir. J'ai prévenu le Médiateur Biosensoriel et nous t'attendons demain matin à la première heure dans mon atelier pour faire le point dans un cadre sécurisé. Tu as été très courageux d'écrire.' Tu sens un énorme poids se détacher de tes épaules.",
    choices: [
      { text: "Si tu confirmes le rendez-vous pour préparer la suite de la démarche, va au 88.", targetId: 88, label: "Confirmer le rendez-vous" },
      { text: "Si une bouffée de panique te pousse à effacer le message et à annuler le contact, va au 89.", targetId: 89, label: "Annuler le contact" }
    ],
    statsImpact: { serenity: 15, solidarity: 10, trust: 20 },
    pedagogicalNote: "L'écrit permet de surmonter le blocage de la parole directe et d'amorcer le contact avec bienveillance."
  },

  47: {
    id: 47,
    title: "Le poison de l'attente passive",
    location: "Modules de Rechargement Alpha",
    act: 2,
    text: "Les semaines s'écoulent. Tu as rempli ton datapad de dizaines de notes précises, mais tu n'as jamais osé les transmettre. Entre-temps, Brannok s'est enhardi : ses bousculades sont devenues quotidiennes et Tark te confisque désormais systématiquement tes rations. Avoir des preuves sans jamais les faire valoir ne change rien à ta souffrance. Un incident majeur se prépare au Dôme d'Hydro-gravité.",
    choices: [
      { text: "Si tu décides de transmettre enfin ton dossier complet avant qu'il ne soit trop tard, va au 48.", targetId: 48, label: "Transmettre le dossier" },
      { text: "Si tu continues d'attendre un miracle sans agir, va au 90.", targetId: 90, label: "Attendre passivement" }
    ],
    statsImpact: { serenity: -20, solidarity: -10, trust: -5 },
    pedagogicalNote: "Recueillir des preuves est utile, mais les conserver secrètement sans les partager prolonge la situation."
  },

  48: {
    id: 48,
    title: "L'ouverture du dossier officiel d'intervention",
    location: "Bureau de Régulation et d'Écoute",
    act: 2,
    text: "Le Régulateur examine la clé cryptographique contenant ton journal d'incidents. En faisant défiler les enregistrements horodatés, ses yeux s'écarquillent devant la constance et la gravité des faits. « Élior, ce dossier est d'une clarté exemplaire. Il ne fait plus aucun doute qu'il s'agit d'un harcèlement physique et moral répété. Le protocole officiel de station est activé dès aujourd'hui. Une commission d'intervention va être réunie. »",
    choices: [
      { text: "Si tu demandes à être accompagné d'un mentor lors de la commission d'audition, va au 91.", targetId: 91, label: "Demander accompagnement" },
      { text: "Si tu choisis d'y aller seul pour affronter la situation en face-à-face, va au 92.", targetId: 92, label: "Y aller seul" }
    ],
    statsImpact: { serenity: 20, solidarity: 15, trust: 30, badge: "Dossier Validé" },
    pedagogicalNote: "Un dossier argumenté et horodaté permet à l'institution de déployer toute la puissance de ses règles protectrices."
  },

  49: {
    id: 49,
    title: "Le sursaut de courage de Sylvan",
    location: "Modules de Rechargement Alpha",
    act: 2,
    text: "Sylvan serre les poings. Son regard s'illumine d'une résolution nouvelle. « Tu as raison, Élior. Me taire fait de moi leur complice involontaire. J'ai vu Brannok forcer ton casier et j'ai même enregistré une courte séquence avec mon datapad sans qu'ils s'en aperçoivent. Je viens avec toi témoigner chez le Régulateur. On ne le laissera plus nous piétiner. » Vous échangez une poignée de main chaleureuse.",
    choices: [
      { text: "Si vous partez tous les deux d'un pas décidé vers la Régulation de Module, va au 93.", targetId: 93, label: "Y aller ensemble" },
      { text: "Si tu lui proposes de temporiser encore une journée pour bien réfléchir, va au 94.", targetId: 94, label: "Temporiser" }
    ],
    statsImpact: { serenity: 25, solidarity: 35, trust: 25, badge: "Alliance Fraternelle" },
    pedagogicalNote: "Le passage du statut de témoin passif à celui de témoin actif est l'arme la plus redoutable contre le harcèlement."
  },

  50: {
    id: 50,
    title: "Le témoin reste dans l'ombre",
    location: "Bibliothèque Holographique",
    act: 2,
    text: "« C'est bon, Sylvan. Je comprends ta peur, je ne te forcerai pas. » Sylvan baisse la tête, partagé entre le soulagement immédiat et une honte cuisante qui lui brûle les joues. Il te regarde ranger ton datapad sans oser soutenir ton regard. Vous restez amis, mais une barrière invisible s'est dressée entre vous. Tu réalises qu'il te faudra trouver d'autres appuis solides dans la station.",
    choices: [
      { text: "Si tu décides de bâtir un réseau de soutien solidaire avec d'autres camarades de classe, va au 95.", targetId: 95, label: "Réseau solidaire" },
      { text: "Si tu décides de couper définitivement les ponts avec lui par amertume, va au 96.", targetId: 96, label: "Couper les ponts" }
    ],
    statsImpact: { serenity: -5, solidarity: -10, trust: 5 },
    pedagogicalNote: "Comprendre la peur d'autrui évite la rancœur, mais rappelle l'importance de s'entourer d'alliés courageux."
  },

  51: {
    id: 51,
    title: "La parole libérée chez le médecin",
    location: "Sas Médical Central",
    act: 2,
    text: "Les larmes montent, puis les mots coulent sans retenue. Tu racontes la première bousculade, la peur constante dans les coursives, le casier défoncé, les menaces chuchotées dans les sas aveugles et le chantage aux capsules d'énergie. Le Médiateur Biosensoriel prend des notes scrupuleuses et rédige un certificat médical de constat de violences physiques et de retentissement psychologique.",
    choices: [
      { text: "Si tu acceptes que le Médiateur transmette ce certificat au Régulateur pour convocation d'urgence, va au 97.", targetId: 97, label: "Transmettre au Régulateur" },
      { text: "Si tu préfères que le certificat reste pour l'instant dans ton dossier médical confidentiel, va au 85.", targetId: 85, label: "Garder au dossier médical" }
    ],
    statsImpact: { serenity: 20, solidarity: 10, trust: 30, badge: "Certificat Médical" },
    pedagogicalNote: "Le constat médical officiel établit une preuve objective incontestable des violences physiques et morales subies."
  },

  52: {
    id: 52,
    title: "L'occasion manquée au sas médical",
    location: "Sas Médical Central",
    act: 2,
    text: "« Je me suis juste cogné contre le montant de mon lit en apesanteur », marmonnes-tu. Le médecin te regarde avec une infinie tristesse dans les yeux. Il applique le gel réparateur en silence, conscient que tu lui caches l'essentiel. Faute de signalement explicite de ta part, il ne peut pas déclencher l'enquête de sécurité. Tu repars avec un poignet soigné, mais une âme toujours captive de la terreur.",
    choices: [
      { text: "Si tu fais demi-tour sur le pas de la porte pour revenir et lui avouer la vérité, va au 51.", targetId: 51, label: "Revenir avouer" },
      { text: "Si tu t'en vas dans la coursive en t'enfonçant dans ton silence, va au 64.", targetId: 64, label: "S'enfoncer dans le silence" }
    ],
    statsImpact: { serenity: -15, solidarity: -10, trust: -10 },
    pedagogicalNote: "Mentir aux professionnels de santé empêche ces derniers d'activer les dispositifs de protection légaux."
  },

  53: {
    id: 53,
    title: "Le piège de la vengeance solitaire",
    location: "Sas des Modules de Cycle Supérieur",
    act: 2,
    text: "Profitant de la pause, tu t'es glissé dans le secteur des aînés. Avec une clé magnétique volée, tu sabotes l'injecteur d'oxygène du casier de Brannok. Mais au moment où tu refermes le panneau, une alarme de sécurité anti-intrusion retentit. Deux caméras thermiques pivotent vers toi. Pire encore, un jet de gaz comprimé explose et endommage les casiers voisins. Tu es pris la main dans le sac.",
    choices: [
      { text: "Si tu décides de fuir en courant dans les coursives techniques, va au 81.", targetId: 81, label: "Fuir en panique" },
      { text: "Si tu restes tétanisé alors que les Veilleurs de Bord arrivent pour t'appréhender, va au 96.", targetId: 96, label: "Se faire arrêter" }
    ],
    statsImpact: { serenity: -30, solidarity: -20, trust: -25 },
    pedagogicalNote: "La riposte vengeresse est une impasse destructrice : elle fait perdre à la victime tout statut et toute crédibilité."
  },

  54: {
    id: 54,
    title: "Le choix salvateur de la sagesse",
    location: "Couloir des Énergies",
    act: 2,
    text: "Tu regardes le fil électrique que tu tenais dans la main et tu le jettes avec dégoût dans la benne de recyclage. « Non. Si je deviens sournois et violent comme lui, j'aurai perdu mon âme et je finirai exclu d'Oxy-Kaelis. » Cette décision lucide te redonne toute ta dignité. Tu vaux bien mieux que les intimidations de Brannok. Il existe des voies légales et collectives pour faire triompher la justice.",
    choices: [
      { text: "Si tu décides de te rendre chez Lyra et le groupe d'astro-robotique pour chercher leur soutien, va au 31.", targetId: 31, label: "Rejoindre Lyra" },
      { text: "Si tu décides de te rendre directement chez le Régulateur de Module, va au 43.", targetId: 43, label: "Aller chez le Régulateur" }
    ],
    statsImpact: { serenity: 15, solidarity: 10, trust: 15 },
    pedagogicalNote: "Renoncer à la violence de vengeance est une preuve de grande maturité morale et d'intelligence émotionnelle."
  },

  55: {
    id: 55,
    title: "L'évanouissement au Dôme d'Hydro-gravité",
    location: "Sas d'Urgence Médicale",
    act: 2,
    text: "Le manque chronique de calories a eu raison de ta résistance. En pleine manœuvre d'apesanteur, tu as perdu connaissance. Tu te réveilles perfusé dans un caisson de régénération métabolique, le regard inquiet de tes instructeurs penché sur toi. Le médecin annonce un déficit calorique sévère. « Pourquoi ne t'es-tu pas nourri correctement ces dernières semaines, Élior ? » Tu te trouves au pied du mur.",
    choices: [
      { text: "Si tu décides d'avouer le racket quotidien de tes capsules d'énergie par Brannok, va au 51.", targetId: 51, label: "Avouer le racket" },
      { text: "Si tu persistes à prétendre une simple perte d'appétit par peur des représailles, va au 100.", targetId: 100, label: "Persister dans le mensonge" }
    ],
    statsImpact: { serenity: -20, solidarity: -10, trust: 0 },
    pedagogicalNote: "L'impact corporel du harcèlement finit toujours par éclater : il vaut mieux parler avant l'accident grave."
  },

  56: {
    id: 56,
    title: "Le refus catégorique face à l'oppresseur",
    location: "Sas Aveugle 4",
    act: 2,
    text: "Brannok tend sa main gantée comme d'habitude. Cette fois, tu gardes les bras croisés et le regardes droit dans les yeux. « C'est fini, Brannok. Je ne te donnerai plus jamais une seule capsule. Mes affaires et mes repas m'appartiennent. » Décontenancé par ce refus inattendu, Brannok hausse le ton, mais son hésitation est palpable : le rapport de force psychologique a changé.",
    choices: [
      { text: "Si tu profites de sa surprise pour tourner les talons et rejoindre la rotonde très fréquentée, va au 84.", targetId: 84, label: "Rejoindre la foule" },
      { text: "Si tu restes immobile pour le défier du regard au risque d'une confrontation physique, va au 15.", targetId: 15, label: "Défier du regard" }
    ],
    statsImpact: { serenity: 15, solidarity: 5, trust: 10 },
    pedagogicalNote: "Exprimer un 'NON' clair et posé déstabilise l'agresseur habitué à la soumission craintive de ses proies."
  },

  57: {
    id: 57,
    title: "L'union des recrues du Cycle Alpha",
    location: "Salle d'Étude Bêta",
    act: 2,
    text: "Tu as réuni autour d'une table trois autres recrues du Cycle Alpha qui subissaient également les brimades du trio. Ensemble, vous comparez vos récits : les bousculades dans les sas aveugles, les insultes murmurées, les dégradations de casiers. L'évidence vous frappe : aucun de vous n'était coupable, Brannok ciblait systématiquement les nouveaux arrivants isolés. Une fraternité forte naît de ce partage.",
    choices: [
      { text: "Si vous décidez de rédiger une déclaration collective signée par vos quatre noms, va au 93.", targetId: 93, label: "Déclaration collective" },
      { text: "Si vous mettez en place un protocole de déplacements en groupe solidaire dans les coursives, va au 95.", targetId: 95, label: "Déplacements solidaires" }
    ],
    statsImpact: { serenity: 20, solidarity: 30, trust: 20, badge: "Collectif Alpha" },
    pedagogicalNote: "Se regrouper entre victimes permet de réaliser que le problème réside dans le comportement de l'agresseur."
  },

  58: {
    id: 58,
    title: "Le dépôt du recours officiel de station",
    location: "Guichet des Droits et Devoirs",
    act: 2,
    text: "Accompagné d'un sentiment solennel de justice, tu déposes ton formulaire de saisine officielle auprès du Conseil de Station. La greffière valide le document avec un cachet holographique officiel. « La procédure de protection d'urgence est ouverte, recrue Élior. Une enquête impartiale va être menée. Les contrevenants risquent la suspension de vol et l'exclusion. » La machine institutionnelle se met en branle.",
    choices: [
      { text: "Si tu sollicites le témoignage de Sylvan pour appuyer l'enquête avec une voix tierce, va au 49.", targetId: 49, label: "Solliciter Sylvan" },
      { text: "Si tu transmets tes relevés horodatés comme pièces à conviction principales, va au 82.", targetId: 82, label: "Transmettre les relevés" }
    ],
    statsImpact: { serenity: 15, solidarity: 10, trust: 25 },
    pedagogicalNote: "Le recours aux règlements et procédures légales de l'établissement transforme une souffrance privée en cause publique."
  },

  59: {
    id: 59,
    title: "Le compte rendu précis aux Veilleurs",
    location: "Sas Aveugle 4",
    act: 2,
    text: "Les Veilleurs de Bord écoutent ton rapport détaillé sans t'interrompre. En observant les marques rouges sur tes poignets et ton uniforme froissé, ils enregistrent ton témoignage sur leur caméra de service. « Bien joué d'avoir crié, recrue. Ce sas est un angle mort connu que nous allons désormais équiper de micro-capteurs. Viens avec nous au poste de sécurité pour formaliser le procès-verbal. »",
    choices: [
      { text: "Si tu les suis au poste de sécurité pour finaliser le rapport officiel, va au 86.", targetId: 86, label: "Finaliser le rapport" },
      { text: "Si tu hésites et demandes à retourner d'abord dans ta cabine, va au 60.", targetId: 60, label: "Hésiter et rentrer" }
    ],
    statsImpact: { serenity: 15, solidarity: 5, trust: 20 },
    pedagogicalNote: "Coopérer immédiatement avec les équipes de surveillance permet de sécuriser durablement les lieux à risque."
  },

  60: {
    id: 60,
    title: "Le classement sans suite",
    location: "Poste de Surveillance Central",
    act: 2,
    text: "En minimisant l'incident par honte ou timidité, tu as incité les Veilleurs à classer la main courante comme un simple 'chahut entre recrues'. Brannok, qui s'était caché derrière les sas de ventilation, a tout entendu. En constatant qu'il n'y a aucune suite disciplinaire, il se sent définitivement tout-puissant. Le lendemain, il t'attend avec un regard encore plus cruel.",
    choices: [
      { text: "Si tu comprends ton erreur et décides d'aller immédiatement voir le Médiateur Biosensoriel, va au 51.", targetId: 51, label: "Aller chez le Médiateur" },
      { text: "Si tu baisses les bras et t'enfonces dans un isolement désespéré, va au 64.", targetId: 64, label: "S'enfoncer dans l'isolement" }
    ],
    statsImpact: { serenity: -20, solidarity: -15, trust: -15 },
    pedagogicalNote: "Minimiser les faits devant les surveillants conforte les agresseurs dans leur sentiment d'impunité totale."
  },

  61: {
    id: 61,
    title: "La brigade solidaire des coursives",
    location: "Atelier d'Astro-Robotique",
    act: 3,
    text: "Après avoir écouté ton histoire, Lyra, Malik et Zephyr prennent une décision unanime : « À partir d'aujourd'hui, Élior, tu ne te déplaces plus jamais seul dans les coursives. Nous allons toujours par deux ou trois entre les modules de cours et le réfectoire. S'ils s'approchent, nous serons là pour témoigner et faire rempart. » Pour la première fois, tu découvres la chaleur protectrice de la vraie camaraderie.",
    choices: [
      { text: "Si tu acceptes avec gratitude cette garde solidaire et proposes d'y intégrer Sylvan, va au 93.", targetId: 93, label: "Intégrer Sylvan à la garde" },
      { text: "Si tu préfères ne pas leur imposer cette contrainte et te débrouiller seul, va au 62.", targetId: 62, label: "Refuser la contrainte" }
    ],
    statsImpact: { serenity: 25, solidarity: 30, trust: 20, badge: "Bouclier Solidaire" },
    pedagogicalNote: "La solidarité entre pairs désamorce le harcèlement en supprimant l'isolement physique de la cible."
  },

  62: {
    id: 62,
    title: "Le droïde de surveillance miniature",
    location: "Atelier d'Astro-Robotique",
    act: 3,
    text: "Refusant d'impliquer tes nouveaux camarades, tu te réfugies dans la technologie. Sur l'établi, tu as conçu une petite sonde de reconnaissance optique de la taille d'une bille magnétique. Tu pourrais l'accrocher à ton col pour enregistrer automatiquement toutes les interactions suspectes dans les sas aveugles sans que personne ne s'en aperçoive. Mais utiliser un drone espion sans autorisation viole le protocole de bord.",
    choices: [
      { text: "Si tu décides d'utiliser la sonde pour obtenir des preuves indiscutables des agressions, va au 82.", targetId: 82, label: "Utiliser la sonde" },
      { text: "Si tu renonces à ce gadget clandestin par peur d'aggraver ta situation, va au 64.", targetId: 64, label: "Renoncer à la sonde" }
    ],
    statsImpact: { serenity: 0, solidarity: -5, trust: 10 },
    pedagogicalNote: "Chercher des solutions techniques individuelles est ingénieux, mais ne remplace pas la parole humaine et le droit."
  },

  63: {
    id: 63,
    title: "La preuve secrète de Sylvan",
    location: "Dôme des Synthèses Végétales",
    act: 3,
    text: "Sous les frondaisons hydroponiques du dôme végétal, Sylvan te rejoint d'un pas fébrile. Il sort son datapad et te montre une vidéo enregistrée en haute définition : on y voit clairement Brannok forcer ton casier pendant que Tark et Vael montent la garde. « Je l'ai filmé hier matin, Élior... J'avais trop honte de ne pas bouger. Prends ce fichier, donne-le au Régulateur. Mon nom peut apparaître, je n'ai plus peur. »",
    choices: [
      { text: "Si tu prends le fichier et lui proposes d'aller déposer la vidéo ensemble, va au 93.", targetId: 93, label: "Déposer la vidéo ensemble" },
      { text: "Si tu prends la vidéo mais préfères ne pas mentionner le nom de Sylvan pour le protéger, va au 83.", targetId: 83, label: "Protéger le nom de Sylvan" }
    ],
    statsImpact: { serenity: 20, solidarity: 35, trust: 25, badge: "Preuve Vidéo" },
    pedagogicalNote: "Le témoignage d'un pair complété par une trace matérielle constitue un élément décisif pour la justice scolaire."
  },

  64: {
    id: 64,
    title: "La dérive vers l'obscurité",
    location: "Couloir des Machines Basses",
    act: 3,
    text: "Le repli sur toi-même est devenu une forteresse glacée. Tu ne parles plus à personne, tes notes se sont effondrées, tes repas sont pris en cachette. Chaque bruit de porte te fait sursauter. Tu es épuisé mentalement et physiquement. Tu as le sentiment que personne sur cette immense station spatiale ne se soucie de savoir si tu existes ou si tu souffres. Pourtant, la porte de l'infirmerie n'est qu'à vingt mètres.",
    choices: [
      { text: "Si tu rassembles tes dernières forces pour franchir le sas du Médiateur Biosensoriel, va au 51.", targetId: 51, label: "Franchir l'infirmerie" },
      { text: "Si tu t'enfermes définitivement dans la résignation et le mutisme, va au 99.", targetId: 99, label: "Vers l'évitement permanent" }
    ],
    statsImpact: { serenity: -25, solidarity: -20, trust: -20 },
    pedagogicalNote: "Le sentiment d'abandon est une illusion créée par le silence : des adultes sont prêts à aider dès que la porte est poussée."
  },

  65: {
    id: 65,
    title: "La vigilance de l'enseignant",
    location: "Salle d'Astrophysique",
    act: 3,
    text: "En voyant ta main levée et tes yeux rougis, le professeur interrompt son exposé sur les trous noirs. « Brannok, ramasse immédiatement ces pièces métalliques et change de rangée. Élior, viens t'installer au premier rang. » Après le cours, l'enseignant te retient quelques minutes pour s'assurer que tu vas bien et note le comportement déplacé dans le registre pédagogique.",
    choices: [
      { text: "Si tu profites de cette écoute pour lui confier toute la situation de harcèlement récurrent, va au 45.", targetId: 45, label: "Tout confier à l'enseignant" },
      { text: "Si tu le remercies brièvement et retournes vers ton module sans approfondir, va au 33.", targetId: 33, label: "Retourner au module" }
    ],
    statsImpact: { serenity: 15, solidarity: 5, trust: 20 },
    pedagogicalNote: "Signaler un comportement perturbateur en classe permet à l'enseignant de réagir immédiatement et d'établir un cadre sécurisant."
  },

  66: {
    id: 66,
    title: "Le supplice de la passivité",
    location: "Salle d'Astrophysique",
    act: 3,
    text: "Tu as encaissé les projectiles et les coups dans le dossier pendant cinquante minutes interminables. Brannok a compris que tu n'oserais jamais rien dire devant le groupe. À la sonnerie, il te bouscule délibérément en sortant, faisant voler ton classeur tactile au milieu du couloir sous le regard impassible de tes camarades. Ton humiliation est totale.",
    choices: [
      { text: "Si tu décides que cette situation a assez duré et vas chercher un enseignant de confiance, va au 45.", targetId: 45, label: "Chercher un enseignant" },
      { text: "Si tu t'enfuis vers les sas déserts en pleurant de rage, va au 64.", targetId: 64, label: "Fuir dans les sas" }
    ],
    statsImpact: { serenity: -15, solidarity: -10, trust: -5 },
    pedagogicalNote: "Subir sans réagir donne à l'agresseur l'impression erronée que la victime tolère l'inacceptable."
  },

  67: {
    id: 67,
    title: "La réconciliation sous les étoiles",
    location: "Coupole Panoramique",
    act: 3,
    text: "« Sylvan, j'ai eu tellement peur... Je croyais que tu t'en fichais. » Sylvan a les larmes aux yeux. « Jamais, Élior ! Mais Brannok me terrorisait. Quand j'ai vu à quel point tu souffrais, j'ai compris que mon silence était pire que tout. Je ne veux plus jamais te laisser tomber. On affronte ça ensemble maintenant. » Une amitié indestructible vient de se sceller sous la lumière des galaxies.",
    choices: [
      { text: "Si vous décidez d'aller ensemble dès cet après-midi chez le Régulateur de Module, va au 93.", targetId: 93, label: "Aller chez le Régulateur" },
      { text: "Si vous décidez d'adopter une stratégie de défense collective au sein de la classe, va au 95.", targetId: 95, label: "Défense collective en classe" }
    ],
    statsImpact: { serenity: 25, solidarity: 35, trust: 25, badge: "Amitié Indestructible" },
    pedagogicalNote: "L'empathie et la communication sincère transforment la culpabilité d'un témoin en énergie d'action collective."
  },

  68: {
    id: 68,
    title: "La rupture amère",
    location: "Coupole Panoramique",
    act: 3,
    text: "« Dégage, Sylvan ! Tu n'es qu'un lâche qui préfère regarder ses bottes pendant que tes potes se font démolir ! » Tes mots fusent avec une cruauté blessante. Sylvan encaisse le choc, le visage blême. Il recule lentement, les yeux embués de larmes, puis s'enfuit dans la coursive. En laissant éclater ta colère sur un allié potentiel, tu viens de te priver du soutien le plus précieux de la station.",
    choices: [
      { text: "Si tu cours après lui pour t'excuser et lui expliquer que la peur t'a fait déraper, va au 67.", targetId: 67, label: "Courir s'excuser" },
      { text: "Si tu restes prostré sous la verrière dans ton orgueil blessé, va au 64.", targetId: 64, label: "Rester dans son orgueil" }
    ],
    statsImpact: { serenity: -20, solidarity: -25, trust: -10 },
    pedagogicalNote: "Agresser les témoins bienveillants détruit les passerelles d'aide et renforce l'isolement voulu par le harceleur."
  },

  69: {
    id: 69,
    title: "Le plan de protection mutuelle",
    location: "Sas de Sortie du Réfectoire",
    act: 3,
    text: "« Sylvan, tu n'as pas besoin de te battre. Si Brannok tente quelque chose au Dôme d'Hydro-gravité, reste près de l'instructeur et déclenche l'enregistrement de ton datapad ou appelle immédiatement un Veilleur. C'est tout ce dont nous avons besoin pour prouver la faute. » Sylvan hoche la tête, rassuré d'avoir un rôle précis et protecteur sans risquer d'affrontement physique.",
    choices: [
      { text: "Si vous convenez de prévenir également le Mentor Corvo avant la séance, va au 93.", targetId: 93, label: "Prévenir le Mentor" },
      { text: "Si vous décidez de vous concentrer sur la surveillance au Dôme d'Hydro-gravité, va au 95.", targetId: 95, label: "Surveillance au Dôme" }
    ],
    statsImpact: { serenity: 20, solidarity: 25, trust: 20 },
    pedagogicalNote: "Assigner des rôles précis et pacifiques aux témoins leur permet d'agir efficacement sans s'exposer."
  },

  70: {
    id: 70,
    title: "Le piège de la solitude absolue",
    location: "Réfectoire des Synthèses",
    act: 3,
    text: "En repoussant l'aide de Sylvan, tu le laisses désemparé. Pour éviter de se retrouver lui-même dans le viseur de Brannok, Sylvan finit par accepter de s'asseoir à la table des aînés et de rire à leurs mauvaises plaisanteries. Te voir rejeté par ton propre ami d'arrivée t'anéantit moralement. Tu réalises trop tard que refuser l'aide pousse parfois les plus faibles vers le camp des oppresseurs.",
    choices: [
      { text: "Si tu décides de chercher immédiatement l'aide des adultes référents, va au 43.", targetId: 43, label: "Aller chez les adultes" },
      { text: "Si tu renonces à toute lutte et sombres dans le désespoir total, va au 100.", targetId: 100, label: "Vers la fin obscure" }
    ],
    statsImpact: { serenity: -25, solidarity: -30, trust: -15 },
    pedagogicalNote: "Isoler les autres par défiance fragilise toute la communauté scolaire et favorise les dynamiques de groupe néfastes."
  },

  71: {
    id: 71,
    title: "Le bouclier de l'empathie",
    location: "Réfectoire des Synthèses",
    act: 3,
    text: "Tu t'avances d'un pas ferme et t'assieds juste à côté de la jeune recrue martienne. Tu lui souris et dis à voix haute : « Salut ! On révise la propulsion ensemble pour le devoir de demain ? » Tark et Vael se figent, surpris par ton intrusion sereine. Brannok hésite, déstabilisé par le fait que tu n'aies pas peur de t'interposer pacifiquement. La jeune recrue te serre le bras avec une reconnaissance infinie.",
    choices: [
      { text: "Si tu proposes à cette recrue d'aller ensemble signaler les comportements du trio à la vie scolaire, va au 86.", targetId: 86, label: "Signaler ensemble" },
      { text: "Si vous quittez le réfectoire ensemble d'un pas tranquille pour rejoindre la bibliothèque, va au 95.", targetId: 95, label: "Rejoindre la bibliothèque" }
    ],
    statsImpact: { serenity: 20, solidarity: 35, trust: 15, badge: "Protecteur Solidaire" },
    pedagogicalNote: "Défendre une autre victime renforce sa propre résilience et brise le sentiment d'impuissance."
  },

  72: {
    id: 72,
    title: "Le remords du spectateur passif",
    location: "Réfectoire des Synthèses",
    act: 3,
    text: "Tu as détourné la tête. Tu as regardé la jeune recrue se faire dépouiller de son insigne et pousser contre la table sans bouger le petit doigt. Un goût amer d'infamie t'envahit. Tu te comportes exactement comme ceux qui t'ont regardé souffrir sans intervenir. Ce silence pèse sur ta conscience comme une chape de plomb.",
    choices: [
      { text: "Si tu décides de rattraper ton erreur en allant trouver cette recrue dès la fin du repas pour vous allier, va au 57.", targetId: 57, label: "Rattraper son erreur" },
      { text: "Si tu enfouis ta culpabilité dans le déni en quittant le réfectoire tête basse, va au 99.", targetId: 99, label: "Vers l'évitement passif" }
    ],
    statsImpact: { serenity: -15, solidarity: -15, trust: -10 },
    pedagogicalNote: "Le remords du spectateur passif montre que la lâcheté n'est jamais un état confortable : agir libère la conscience."
  },

  73: {
    id: 73,
    title: "La force du témoignage pluriel",
    location: "Poste de Sécurité du Réfectoire",
    act: 3,
    text: "Les deux camarades qui se sont levés t'accompagnent devant le chef des Veilleurs de Bord. Leurs récits concordent point par point : le bol renversé volontairement, les insultes murmurées, les tentatives d'intimidation. Le Veilleur remplit le dossier officiel avec une rigueur exemplaire. « Trois témoignages concordants et une cible identifiée : ce n'est plus un litige mineur, c'est un dossier d'exclusion disciplinaire. »",
    choices: [
      { text: "Si tu demandes la transmission immédiate au Conseil de Régulation de Station, va au 91.", targetId: 91, label: "Conseil de Régulation" },
      { text: "Si tu acceptes que les Veilleurs organisent une confrontation encadrée avec le Régulateur, va au 86.", targetId: 86, label: "Confrontation encadrée" }
    ],
    statsImpact: { serenity: 25, solidarity: 30, trust: 30, badge: "Vérité Établie" },
    pedagogicalNote: "La pluralité des témoignages réduit à néant les tentatives de l'agresseur de faire passer les violences pour des jeux."
  },

  74: {
    id: 74,
    title: "Le retour insidieux de la menace",
    location: "Coursive Alpha-4",
    act: 3,
    text: "Tu as laissé couler l'incident du réfectoire sans déposer de plainte formelle. Dès la fin de la pause, Brannok te coince dans un passage étroit. « Tu as cru que tes petits copains allaient te sauver la vie ? Tu vas payer cette insolence au centuple. » Ses yeux luisent d'une fureur vengeresse. L'absence de sanction institutionnelle lui a laissé tout le champ libre pour préparer une riposte plus brutale.",
    choices: [
      { text: "Si tu décides de réagir immédiatement en allant trouver le Mentor Corvo, va au 45.", targetId: 45, label: "Trouver le Mentor Corvo" },
      { text: "Si tu t'enfuis vers ta cabine dans une angoisse incontrôlable, va au 64.", targetId: 64, label: "Fuir en cabine" }
    ],
    statsImpact: { serenity: -20, solidarity: -10, trust: -10 },
    pedagogicalNote: "Une alerte sans suite concrète peut attiser la rancœur de l'agresseur s'il n'est pas recadré fermement par l'autorité."
  },

  75: {
    id: 75,
    title: "L'explosion du boîtier électrique",
    location: "Sas Technique Bas",
    act: 3,
    text: "Dans ton délire de représailles, tu as branché l'arc électrique artisanal sur le panneau de commande du casier de Brannok. Une déflagration bleue illumine la coursive dans un nuage âcre d'ozone. Le système incendie se déclenche, inondant le secteur de mousse ignifuge. Les sirènes hurlent. Tu te retrouves couvert de mousse, la main brûlée, alors que trois Veilleurs de Bord te plaquent au sol en criant : 'Saboteur identifié !'",
    choices: [
      { text: "Si tu tentes d'expliquer au poste de sécurité que tu voulais juste te défendre du harcèlement de Brannok, va au 81.", targetId: 81, label: "Plaider la défense" },
      { text: "If tu t'enfermes dans un mutisme total de colère et de désespoir, va au 100.", targetId: 100, label: "Vers l'issue sombre" }
    ],
    statsImpact: { serenity: -30, solidarity: -30, trust: -30 },
    pedagogicalNote: "Le passage à l'acte violent annule le statut de victime et conduit à des sanctions pour fautes graves."
  },

  76: {
    id: 76,
    title: "La vérité éclate lors de la corvée",
    location: "Salle des Filtres Cryogéniques",
    act: 3,
    text: "En nettoyant les tuyaux de fluide, tu craques et racontes tout au superviseur des corvées : les bousculades, la peur des coursives, les menaces de mort métaphoriques. Le superviseur pose sa raclette et t'écoute avec gravité. « Pourquoi ne pas l'avoir dit plus tôt, Élior ? Sur Oxy-Kaelis, aucun élève ne doit purger une sanction causée par la peur d'un tyran. Je suspends ta corvée et j'appelle le Régulateur. »",
    choices: [
      { text: "Si tu acceptes son intervention et le suis vers le bureau de régulation, va au 86.", targetId: 86, label: "Aller chez le Régulateur" },
      { text: "Si tu hésites par crainte que Brannok ne l'apprenne, va au 77.", targetId: 77, label: "Hésiter par peur" }
    ],
    statsImpact: { serenity: 15, solidarity: 10, trust: 25 },
    pedagogicalNote: "Il n'est jamais trop tard pour dire la vérité : même au cœur d'une punition, la parole libère et rectifie l'injustice."
  },

  77: {
    id: 77,
    title: "L'amertume du bagnard silencieux",
    location: "Salle des Filtres Cryogéniques",
    act: 3,
    text: "Tu as frotté les filtres métalliques pendant deux heures dans le froid glacial sans piper mot. Tu te sens sali, humilié, injustement puni pendant que tes agresseurs jouent tranquillement au Dôme d'Hydro-gravité. Cette rancœur s'enkyste dans ton cœur d'adolescent. Tu commences à détester la station, tes études et l'humanité tout entière.",
    choices: [
      { text: "Si tu tentes un dernier sursaut de confiance en te rendant au sas médical, va au 51.", targetId: 51, label: "Dernier sursaut au sas médical" },
      { text: "Si tu te résignes définitivement à ton sort de victime silencieuse, va au 100.", targetId: 100, label: "Vers l'issue sombre" }
    ],
    statsImpact: { serenity: -25, solidarity: -20, trust: -25 },
    pedagogicalNote: "Le sentiment d'injustice non exprimé ronge l'estime de soi et conduit à l'autodestruction scolaire."
  },

  78: {
    id: 78,
    title: "La fuite en avant dans le dédale",
    location: "Sas de Fret Inférieur",
    act: 3,
    text: "Tu as supplié l'instructeur de vol de ne rien dire, terrorisé à l'idée d'être qualifié de mouchard. Mais en refusant l'intervention d'un adulte, tu te retrouves à nouveau sans aucune protection. Les jours suivants sont un enfer : tu te caches dans les soutes à bagages, tu sautes des repas, tes notes dégringolent. Tu n'es plus qu'une ombre errante dans la station orbitale.",
    choices: [
      { text: "Si tu te décides enfin à chercher refuge auprès de Lyra à l'atelier d'astro-robotique, va au 31.", targetId: 31, label: "Refuge chez Lyra" },
      { text: "Si tu t'enfonces toujours plus loin dans les sas déserts, va au 85.", targetId: 85, label: "Sas déserts" }
    ],
    statsImpact: { serenity: -20, solidarity: -15, trust: -10 },
    pedagogicalNote: "La peur d'être qualifié de 'mouchard' est un piège manipulatoire utilisé par les harceleurs pour bâillonner leurs victimes."
  },

  79: {
    id: 79,
    title: "Le rapport d'intervention d'urgence",
    location: "Poste de Sécurité Alpha",
    act: 3,
    text: "La brigade d'intervention arrive en quelques secondes. En constatant le verrouillage des sas et l'activation de la balise, le chef de secteur enregistre ta déposition horodatée. « Recrue Élior, tu as eu le bon réflexe. L'usage de la balise est certifié conforme : agression physique imminente par deux initiés identifiés. Leurs accès aux coursives secondaires sont révoqués immédiatement. »",
    choices: [
      { text: "Si tu demandes à ce que ce rapport soit transmis au Régulateur pour convocation des parents et tuteurs, va au 86.", targetId: 86, label: "Transmettre au Régulateur" },
      { text: "Si tu ajoutes le témoignage et les preuves du datapad de Sylvan au dossier, va au 93.", targetId: 93, label: "Ajouter les preuves de Sylvan" }
    ],
    statsImpact: { serenity: 20, solidarity: 10, trust: 30, badge: "Alerte Certifiée" },
    pedagogicalNote: "Les mesures conservatoires (révocation d'accès, interdiction d'approche) protègent la victime dès l'ouverture de l'enquête."
  },

  80: {
    id: 80,
    title: "La fausse alerte enregistrée",
    location: "Coursive Alpha-8",
    act: 3,
    text: "En fuyant sans attendre les Veilleurs, le système a classé le déclenchement de la balise comme un incident technique sans victime. Les patrouilles ne sont pas renforcées. Tark et Vael ont compris que tu avais eu peur des conséquences et reviennent à la charge dès le lendemain avec un sentiment de supériorité décuplé.",
    choices: [
      { text: "Si tu décides de réparer cette erreur en allant tout raconter au Régulateur de Module, va au 43.", targetId: 43, label: "Tout raconter au Régulateur" },
      { text: "Si tu baisses les bras et te soumets à leur loi, va au 64.", targetId: 64, label: "Se soumettre" }
    ],
    statsImpact: { serenity: -15, solidarity: -10, trust: -10 },
    pedagogicalNote: "Déclencher une alerte sans aller jusqu'au bout de la démarche prive l'institution des informations indispensables pour agir."
  },

  81: {
    id: 81,
    title: "Le piège de la rixe physique",
    location: "Coursive Centrale",
    act: 3,
    text: "Aveuglé par la rage, tu te jettes sur Tark. Mais Brannok et Vael interviennent aussitôt. Une violente empoignade éclate au milieu du couloir. Tu assènes un coup désespéré qui fait saigner le nez de Tark au moment même où trois Veilleurs de Bord débouchent dans le sas. Ils vous séparent sans ménagement. Aux yeux de la sécurité, il s'agit d'une rixe violente entre recrues avec coups mutuels portés.",
    choices: [
      { text: "Si tu exiges une enquête approfondie avec examen des enregistrements des sas pour prouver la provocation continue, va au 92.", targetId: 92, label: "Exiger une enquête vidéo" },
      { text: "Si tu refuses de t'expliquer par fureur et amertume contre le système, va au 100.", targetId: 100, label: "Vers l'issue sombre" }
    ],
    statsImpact: { serenity: -25, solidarity: -20, trust: -20 },
    pedagogicalNote: "Dans une bagarre, les adultes ne voient souvent que le dernier coup porté : la victime se retrouve étiquetée comme co-agresseur."
  },

  82: {
    id: 82,
    title: "Le faisceau de preuves indiscutables",
    location: "Bureau de Régulation et d'Écoute",
    act: 3,
    text: "Sur l'hologramme central du bureau, les vidéos horodatées, les relevés de dépressurisation des casiers et les messages de menace s'affichent avec une netteté chirurgicale. Le Régulateur hoche la tête, impressionné par la rigueur de ton dossier. « C'est un dossier irréfutable, Élior. Brannok ne pourra pas invoquer le simple chahut ou le malentendu. Le protocole d'exclusion conservatoire et de médiation restaurative est enclenché. »",
    choices: [
      { text: "Si tu demandes la tenue d'une commission disciplinaire solennelle avec les délégués, va au 91.", targetId: 91, label: "Commission solennelle" },
      { text: "Si tu préfères une médiation tripartite encadrée par le Médiateur Biosensoriel, va au 86.", targetId: 86, label: "Médiation encadrée" }
    ],
    statsImpact: { serenity: 25, solidarity: 20, trust: 35, badge: "Dossier Incontestable" },
    pedagogicalNote: "La matérialité des preuves protège la victime des retournements d'accusation et des mensonges des harceleurs."
  },

  83: {
    id: 83,
    title: "L'émotion de la vérité sincère",
    location: "Bureau du Régulateur de Module",
    act: 3,
    text: "Ton récit oral est empreint d'une telle sincérité et d'une telle précision dans la souffrance quotidienne que le Régulateur en est profondément touché. « Élior, ta parole a une immense valeur. Nous savons que Brannok a déjà eu des avertissements informels. Ton courage de venir parler aujourd'hui met un terme définitif à ses agissements. Nous allons convoquer les témoins pour sceller la procédure. »",
    choices: [
      { text: "Si tu fais appel à Sylvan pour venir confirmer tes déclarations dès maintenant, va au 93.", targetId: 93, label: "Faire appel à Sylvan" },
      { text: "Si tu laisses le Régulateur mener ses propres vérifications discrètes de son côté, va au 86.", targetId: 86, label: "Laisser vérifier" }
    ],
    statsImpact: { serenity: 20, solidarity: 15, trust: 30 },
    pedagogicalNote: "Une parole sincère et détaillée suffit souvent aux adultes expérimentés pour démêler le vrai du faux."
  },

  84: {
    id: 84,
    title: "Le courage tranquille face au tyran",
    location: "Rotonde Centrale d'Oxy-Kaelis",
    act: 3,
    text: "Tu t'arrêtes au milieu de la foule des recrues, le regard calme et assuré. « Tu n'as aucun pouvoir sur moi, Brannok. Tout le monde voit clair dans ton jeu et ta lâcheté. Si tu me touches, ce sera devant cinquante témoins et trois caméras de sécurité. » Brannok serre les dents, jette un regard anxieux autour de lui et comprend que le public ne le soutient plus. Il recule d'un pas et s'éclipse dans la coursive.",
    choices: [
      { text: "Si tu profites de cet ascendant pour aller immédiatement officialiser ta démarche au bureau d'écoute, va au 43.", targetId: 43, label: "Officialiser la démarche" },
      { text: "Si tu choisis de rester sous la protection de la foule sans entamer de procédure officielle, va au 99.", targetId: 99, label: "Vers l'équilibre neutre" }
    ],
    statsImpact: { serenity: 20, solidarity: 15, trust: 15, badge: "Courage Public" },
    pedagogicalNote: "Le harceleur ne tire sa puissance que du secret et de l'isolement ; en pleine lumière et entouré, il perd tous ses moyens."
  },

  85: {
    id: 85,
    title: "La cachette derrière les conteneurs",
    location: "Soute de Stockage Alpha",
    act: 3,
    text: "Caché derrière d'énormes caisses de titane, tu passes tes récréations à trembler au moindre grincement de porte. Tu as sauvé ta peau pour aujourd'hui, mais à quel prix ? Ta scolarité est devenue une traque perpétuelle. Vivre dans la clandestinité sur une station spatiale n'est pas une vie pour une recrue du Cycle Alpha. Un jour ou l'autre, il faudra briser ce cercle infernal.",
    choices: [
      { text: "Si tu décides de sortir de ta cachette pour aller confier ton détresse au sas médical, va au 51.", targetId: 51, label: "Aller au sas médical" },
      { text: "Si tu choisis de continuer à vivre caché en rasant les murs pour le reste de l'année, va au 99.", targetId: 99, label: "Vers la fin neutre" }
    ],
    statsImpact: { serenity: -20, solidarity: -20, trust: -10 },
    pedagogicalNote: "Se cacher offre un répit précaire mais prive l'élève de toute joie d'apprendre et de se faire des amis."
  },

  86: {
    id: 86,
    title: "Le déploiement du protocole sentinelle",
    location: "Salle du Conseil Éducatif",
    act: 4,
    text: "Le Régulateur de Module réunit d'urgence le Mentor Corvo, le Médiateur Biosensoriel et le chef des Veilleurs de Bord. Le protocole anti-harcèlement d'Oxy-Kaelis est déployé : sécurisation immédiate des trajets d'Élior, affectation d'un tuteur adulte référent et convocation solennelle de Brannok et de ses suiveurs. L'institution prend pleinement ses responsabilités pour protéger son élève.",
    choices: [
      { text: "Si tu participes activement à la réunion préparatoire avec le soutien de tes pairs solidaires, va au 91.", targetId: 91, label: "Réunion préparatoire" },
      { text: "Si tu laisses l'équipe éducative gérer seule les sanctions sans t'impliquer davantage, va au 94.", targetId: 94, label: "Laisser gérer" }
    ],
    statsImpact: { serenity: 25, solidarity: 20, trust: 35, badge: "Protocole Sentinelle" },
    pedagogicalNote: "La réponse institutionnelle coordonnée (direction, vie scolaire, santé, enseignants) est le rempart le plus efficace."
  },

  87: {
    id: 87,
    title: "Le fardeau du secret révélé",
    location: "Laboratoire de Propulsion",
    act: 4,
    text: "Mentor Corvo s'assied en face de toi et prend tes mains dans les siennes. « Élior, écoute-moi bien. Garder le secret sur une agression, ce n'est pas de la loyauté, c'est protéger l'agresseur malgré toi. Si je garde le silence, Brannok continuera avec toi et s'en prendra à une autre recrue demain. L'équipe éducative a besoin de ton autorisation morale pour te protéger. Fais-nous confiance. »",
    choices: [
      { text: "Si tu acceptes de lui faire confiance et l'autorises à enclencher le protocole de protection, va au 86.", targetId: 86, label: "Faire confiance au Mentor" },
      { text: "Si tu t'obstines à refuser toute intervention des adultes par panique irrationnelle, va au 90.", targetId: 90, label: "S'obstiner dans le refus" }
    ],
    statsImpact: { serenity: 10, solidarity: 10, trust: 20 },
    pedagogicalNote: "Garder le secret du harcèlement est le meilleur cadeau fait au harceleur ; briser le secret est un acte de salubrité publique."
  },

  88: {
    id: 88,
    title: "L'alliance thérapeutique et pédagogique",
    location: "Atelier d'Astro-Robotique",
    act: 4,
    text: "La réunion matinale réunit Mentor Corvo et le Médiateur Biosensoriel autour d'Élior. L'atmosphère est calme, rassurante et professionnelle. Les adultes valident les mesures d'accompagnement : aménagement des temps de coursives, accompagnement par des pairs volontaires et écoute psychologique bimensuelle. Tu te sens enfin écouté, respecté et en totale sécurité au sein de la station.",
    choices: [
      { text: "Si tu décides d'inviter Sylvan et le groupe d'astro-robotique à cette démarche protectrice, va au 93.", targetId: 93, label: "Inviter Sylvan et les amis" },
      { text: "Si tu poursuis la procédure officielle vers la commission disciplinaire solennelle, va au 91.", targetId: 91, label: "Commission disciplinaire" }
    ],
    statsImpact: { serenity: 30, solidarity: 25, trust: 35, badge: "Alliance Totale" },
    pedagogicalNote: "L'alliance entre pédagogie, santé et écoute bienveillante répare en profondeur le traumatisme de l'intimidation."
  },

  89: {
    id: 89,
    title: "Le retour de la terreur solitaire",
    location: "Cabine Individuelle 104",
    act: 4,
    text: "Pris de panique à l'idée d'une confrontation, tu as effacé tes messages et annulé le rendez-vous avec le Mentor Corvo. Tu te retrouves à nouveau seul dans ta chambre orbitale. Les bruits de la station te paraissent hostiles. En coupant le lien au moment décisif, tu as laissé la porte entrouverte à de nouveaux chantages.",
    choices: [
      { text: "Si tu reprends ton courage à deux mains pour réactiver immédiatement le canal de confiance, va au 88.", targetId: 88, label: "Réactiver le canal" },
      { text: "Si tu renonces définitivement et choisis d'éviter Brannok en rasant les murs jusqu'à la fin de l'année, va au 99.", targetId: 99, label: "Vers l'évitement précaire" }
    ],
    statsImpact: { serenity: -15, solidarity: -15, trust: -15 },
    pedagogicalNote: "La peur du changement et de la confrontation est normale, mais reculer ne fait que prolonger l'angoisse."
  },

  90: {
    id: 90,
    title: "Le drame évité au Dôme d'Hydro-gravité",
    location: "Dôme d'Hydro-gravité",
    act: 4,
    text: "Pendant l'exercice de voltige spatiale, Tark s'est approché en apesanteur et a décroché le mousqueton magnétique de ton harnais. Tu as fait une chute vertigineuse de huit mètres avant d'être amorti in extremis par le filet de sécurité ionique. La séance est immédiatement interrompue dans un concert d'alarmes. Les instructeurs découvrent le mousqueton trafiqué. Le scandale éclate devant l'ensemble des élèves et des professeurs.",
    choices: [
      { text: "Si tu révèles toute la chaîne des intimidations passées lors de l'enquête immédiate des instructeurs, va au 91.", targetId: 91, label: "Tout révéler aux instructeurs" },
      { text: "Si tu t'enfermes dans le mutisme par dégoût et résignation totale, va au 100.", targetId: 100, label: "Vers la fin obscure" }
    ],
    statsImpact: { serenity: -10, solidarity: 10, trust: 20 },
    pedagogicalNote: "Quand les intimidations ne sont pas stoppées à temps, elles dérivent inéluctablement vers des accidents physiques graves."
  },

  91: {
    id: 91,
    title: "La commission de discipline solennelle",
    location: "Grand Hémicycle d'Oxy-Kaelis",
    act: 4,
    text: "Entouré du Mentor Corvo et du Médiateur Biosensoriel, tu fais face au Conseil de Discipline réuni au complet : le Directeur de Station, le Régulateur, les délégués d'élèves et les représentants des parents. Avec calme et dignité, tu présentes les faits sans animosité mais avec une fermeté inébranlable. Brannok, privé de ses fanfaronnades de couloir, baisse les yeux devant l'accablement des preuves.",
    choices: [
      { text: "Si tu assistes à l'énoncé du protocole de réparation et de restauration de la sérénité, va au 97.", targetId: 97, label: "Séance de réparation" },
      { text: "Si tu savoures l'aboutissement de la justice officielle vers la victoire de la règle commune, va au 98.", targetId: 98, label: "Vers la Fin Lumineuse" }
    ],
    statsImpact: { serenity: 35, solidarity: 30, trust: 40, badge: "Victoire de la Justice" },
    pedagogicalNote: "Le Conseil de Discipline solennel rappelle à toute la communauté que la loi scolaire protège chacun de ses membres."
  },

  92: {
    id: 92,
    title: "Le doute des autorités sans preuves",
    location: "Bureau de Discipline Central",
    act: 4,
    text: "Convoqué seul sans dossier préparé ni témoins pour t'appuyer, tu fais face aux dénégations mielleuses de Brannok : « Monsieur le Régulateur, Élior invente tout cela pour justifier ses mauvaises notes en simulation ! Nous ne l'avons jamais touché ! » Les autorités hésitent, partagées entre deux versions contradictoires. Sans élément extérieur tangible, la sanction risque de se transformer en simple blâme partagé.",
    choices: [
      { text: "Si tu demandes l'intervention d'urgence de Sylvan pour apporter son témoignage visuel, va au 93.", targetId: 93, label: "Intervention de Sylvan" },
      { text: "Si tu baisses les bras et acceptes un compromis insatisfaisant qui te force à l'évitement permanent, va au 99.", targetId: 99, label: "Vers la fin neutre" }
    ],
    statsImpact: { serenity: -5, solidarity: 5, trust: 10 },
    pedagogicalNote: "Sans la voix des témoins ou de preuves objectives, la parole de la victime est souvent mise en doute par des harceleurs manipulateurs."
  },

  93: {
    id: 93,
    title: "Le triomphe du témoin actif",
    location: "Bureau du Régulateur de Module",
    act: 4,
    text: "La porte s'ouvre. Sylvan entre d'un pas assuré, suivi de Lyra et des élèves du club d'astro-robotique. Sylvan dépose son datapad sur le bureau. « Monsieur le Régulateur, j'ai été le témoin direct des agressions. Voici les vidéos de la dégradation des casiers et les enregistrements des menaces dans les coursives. Élior dit la stricte vérité. Et nous sommes tous ici pour certifier qu'il n'a jamais cherché la bagarre. »",
    choices: [
      { text: "Si tu remercies tes camarades et assistes à la décision finale de justice restaurative, va au 97.", targetId: 97, label: "Justice restaurative" },
      { text: "Si tu célèbres cette immense victoire de la parole partagée vers une station apaisée, va au 98.", targetId: 98, label: "Vers la Fin Lumineuse" }
    ],
    statsImpact: { serenity: 40, solidarity: 45, trust: 40, badge: "Triomphe Solidaire" },
    pedagogicalNote: "L'intervention conjointe des témoins met un point final absolu à l'impunité et répare le lien social."
  },

  94: {
    id: 94,
    title: "L'apaisement sous haute surveillance",
    location: "Coursive Principale d'Oxy-Kaelis",
    act: 4,
    text: "Des caméras supplémentaires ont été installées et les rondes de Veilleurs ont été doublées dans les coursives sensibles. Brannok a écopé d'un avertissement officiel et n'ose plus t'approcher directement. Cependant, la relation n'a pas été travaillée sur le fond : des regards froids persistent et une tension sourde flotte toujours dans les couloirs lors des changements de cours.",
    choices: [
      { text: "Si tu souhaites approfondir la démarche par une médiation collective pour assainir durablement le climat, va au 97.", targetId: 97, label: "Médiation collective" },
      { text: "Si tu te contentes de cette paix armée et surveillée, va au 99.", targetId: 99, label: "Vers la fin neutre" }
    ],
    statsImpact: { serenity: 10, solidarity: 10, trust: 15 },
    pedagogicalNote: "La surveillance technique dissuade l'acte, mais seule la médiation et la prise de conscience assainissent le climat scolaire."
  },

  95: {
    id: 95,
    title: "Le bouclier d'amitié indestructible",
    location: "Rotonde d'Hydro-gravité",
    act: 4,
    text: "Désormais, tu te déplaces toujours entouré de Sylvan, de Lyra et des autres recrues du Cycle Alpha. Brannok et sa bande ne peuvent plus rien tenter : chaque tentative d'approche se heurte à un groupe compact, attentif et serein. Vous avez transformé votre vulnérabilité individuelle en une formidable force collective qui inspire d'autres élèves de la station.",
    choices: [
      { text: "Si vous décidez d'officialiser ce groupe en créant les 'Sentinelles de Bienveillance' avec l'accord de la station, va au 98.", targetId: 98, label: "Vers la Fin Lumineuse" },
      { text: "Si vous gardez ce fonctionnement informel sans impliquer la direction, va au 99.", targetId: 99, label: "Vers la fin neutre" }
    ],
    statsImpact: { serenity: 30, solidarity: 40, trust: 25, badge: "Sentinelle Bienveillance" },
    pedagogicalNote: "L'amitié et la solidarité sont les antidotes naturels les plus puissants contre toute forme d'intimidation."
  },

  96: {
    id: 96,
    title: "L'accusation renversée",
    location: "Cellule de Rétention Disciplinaire",
    act: 4,
    text: "Le piège s'est refermé sur toi. Pris en flagrant délit de sabotage de casier ou de dégradation d'équipement, tu es assis dans la cellule de rétention. Le Régulateur arrive, le visage fermé et déçu. « Élior, nous comptions beaucoup sur toi pour ce cycle. Au lieu de cela, tu as choisi le sabotage et la violence clandestine. Tes parents ont été prévenus. » En voulant te venger, tu es devenu le coupable officiel.",
    choices: [
      { text: "Si tu tentes dans un sanglot d'expliquer le calvaire qui t'a poussé à cette extrémité désespérée, va au 92.", targetId: 92, label: "Expliquer son désespoir" },
      { text: "Si tu te mures dans le silence et la haine en refusant tout dialogue, va au 100.", targetId: 100, label: "Vers la Fin Obscure" }
    ],
    statsImpact: { serenity: -30, solidarity: -30, trust: -35 },
    pedagogicalNote: "La vengeance illégale détourne l'attention de la cause initiale et transforme la victime en agresseur aux yeux de tous."
  },

  97: {
    id: 97,
    title: "La médiation restaurative et responsable",
    location: "Salle de Régulation Réparatrice",
    act: 4,
    text: "Sous la direction du Médiateur Biosensoriel et du Régulateur, une séance solennelle de justice restaurative a lieu. Confronté aux témoignages poignants d'Élior et de Sylvan, Brannok craque et admet ses torts. Il réalise pour la première fois la détresse qu'il a infligée pour soigner ses propres frustrations. Des sanctions réparatrices sont prononcées : heures de travaux d'intérêt général au recyclage et suivi psychologique obligatoire. Le Cycle Alpha respire à nouveau.",
    choices: [
      { text: "Si tu franchis le pas final vers la conclusion lumineuse de ton parcours sur Oxy-Kaelis, va au 98.", targetId: 98, label: "Vers la Fin Lumineuse" }
    ],
    statsImpact: { serenity: 40, solidarity: 40, trust: 45, badge: "Réconciliation Réparatrice" },
    pedagogicalNote: "La justice restaurative permet à l'agresseur de prendre conscience du préjudice causé et de réparer ses fautes."
  },

  98: {
    id: 98,
    title: "FIN LUMINEUSE : L'Aube d'Oxy-Kaelis",
    location: "Passerelle Panoramique des Éclaireurs",
    act: 4,
    endingType: "light",
    text: "FIN LUMINEUSE. Le réseau d'intimidation de Brannok a été entièrement démantelé grâce à ton courage d'avoir parlé, aux preuves rigoureuses transmises et au témoignage décisif de Sylvan. Brannok effectue ses travaux de réparation sous l'œil vigilant des Mentors et ne s'approche plus du Cycle Alpha. Tark et Vael ont présenté des excuses publiques sincères. Devenu une référence de courage et d'écoute, tu portes fièrement l'insigne des 'Éclaireurs de Bienveillance' d'Oxy-Kaelis aux côtés de Sylvan et Lyra. Tu as appris la règle d'or de toute communauté humaine : la violence s'épanouit dans l'ombre et le silence ; la parole partagée, le soutien des pairs et la confiance dans les adultes de référence ont le pouvoir d'illuminer l'avenir de tous.",
    choices: [],
    statsImpact: { serenity: 50, solidarity: 50, trust: 50, badge: "Éclaireur de Bienveillance" },
    pedagogicalNote: "Félicitations ! Tu as su éviter les pièges de la soumission et de la vengeance pour bâtir une solution collective, solide et durable."
  },

  99: {
    id: 99,
    title: "FIN NEUTRE : L'Ombre de la Peur",
    location: "Coursive de Transit Secondaire",
    act: 4,
    endingType: "neutral",
    text: "FIN NEUTRE. En rasant les murs et en changeant constamment tes itinéraires, tu as réussi à éviter de nouveaux coups directs. Brannok s'est lassé de te traquer, préférant s'en prendre à d'autres recrues plus isolées dont tu détournes le regard. Les bousculades se sont espacées, mais rien n'a été réglé sur le fond. La peur noue encore ton estomac au moindre pas résonnant dans un sas aveugle. Tu n'as pas osé faire confiance aux adultes ni unir tes forces avec tes camarades. La paix sur Oxy-Kaelis n'est pour toi qu'un cessez-le-feu précaire dans une station où l'intimidation continue de rôder dans les recoins sombres.",
    choices: [],
    statsImpact: { serenity: -10, solidarity: -15, trust: -10, badge: "Trêve Neutre" },
    pedagogicalNote: "Bilan : L'évitement physique et le silence permettent parfois de survivre à court terme, mais laissent l'angoisse intacte et l'injustice impunie."
  },

  100: {
    id: 100,
    title: "FIN OBSCURE : Le Naufrage du Silence",
    location: "Sas de Rapatriement Terrestre",
    act: 4,
    endingType: "dark",
    text: "FIN OBSCURE. Enfermé dans un mutisme destructeur ou emporté par des tentatives de riposte violente qui se sont retournées contre toi, tu te retrouves isolé, blessé et sanctionné par les autorités de la station qui n'ont vu que tes fautes. Ton biosenseur clignote en alerte d'épuisement nerveux sévère. Incapable de poursuivre tes modules de vol, tes tuteurs ont signé ton ordre de rapatriement vers les colonies minières. En franchissant la passerelle d'embarquement, tu vois Brannok parader fièrement dans la coursive principale. Cette douloureuse expérience démontre la cruelle vérité : le silence et la vengeance solitaire nourrissent le harcèlement ; seule la rupture du silence avec l'aide des tiers de confiance peut terrasser la loi du plus fort.",
    choices: [],
    statsImpact: { serenity: -50, solidarity: -50, trust: -50, badge: "Isolement Total" },
    pedagogicalNote: "Bilan : Le silence et la rancœur solitaire mènent au naufrage personnel. Face au harcèlement, parler aux adultes et s'allier aux témoins est le seul salut."
  }
};
