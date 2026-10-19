import fs from 'node:fs';

// Definition of 100 steps for Tome 4: Le Cyber-Harcèlement & les Réseaux Numériques (Station Orbitale Oxy-Kaelis : Dans la Toile du ComNet)
const tome4Steps = {};

function addStep(id, title, location, act, text, choices, statsImpact, pedagogicalNote, endingType) {
  tome4Steps[id] = {
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

// ==========================================
// ACTE 1 : L'ÉTINCELLE SUR LE COMNET (Étapes 1 à 25)
// ==========================================

// 1
addStep(
  1,
  "La notification nocturne dans le sas de repos",
  "Cabine de Repos Individuelle • Sas 14-B",
  1,
  "Il est 23h40 heure orbitale. Les lumières de la station Oxy-Kaelis ont basculé en cycle nuit bleuté. Alors que tu t'apprêtes à t'endormir, ton terminal ComNet fixé à la paroi émet une série inhabituelle de bips stridents. En ouvrant l'écran holographique, tu découvres une notification groupée provenant d'un canal clandestin très populaire parmi les recrues : 'Oxy-Leaks // Sans Filtre'. Un fichier vidéo holo-truqué vient d'y être posté : ton propre visage a été greffé sur une vidéo dégradante te montrant en train de paniquer et de pleurer lors d'un exercice de simulation en gravité zéro. En dessous, déjà 47 réactions moqueuses et des commentaires cruels défilent en direct.",
  [
    { text: "Si tu réponds immédiatement sur le canal public sous le coup de la colère pour exiger la suppression, va au 2.", targetId: 2, label: "Répondre à chaud" },
    { text: "Si tu réalises une capture d'écran horodatée avec les identifiants avant de couper le flux, va au 3.", targetId: 3, label: "Figer la preuve" }
  ],
  { serenity: -15, solidarity: 0, trust: 0 },
  "Face à une attaque numérique, répondre sous le coup de l'émotion nourrit le lynchage. Le premier réflexe salutaire est toujours de figer la preuve (capture d'écran, logs)."
);

// 2
addStep(
  2,
  "L'escalade du fil de discussion",
  "Cabine de Repos Individuelle • Sas 14-B",
  1,
  "Les mains tremblantes de rage, tu tapes un message furieux : « Vous êtes des lâches sans courage ! Supprimez ce montage immédiatement, c'est totalement faux ! » En quelques secondes, ta réponse attire une pluie de sarcasmes. L'administrateur anonyme, sous le pseudo 'Spectre-Zero', épingle ton commentaire avec la mention : « Regardez, la victime s'énerve toute seule, ça confirme que c'est vrai ! » Les emojis moqueurs se multiplient et le compteur de partages s'emballe.",
  [
    { text: "Si tu tentes de supprimer ton message et d'éteindre ton terminal en panique, va au 4.", targetId: 4, label: "Supprimer et paniquer" },
    { text: "Si tu cesses immédiatement d'écrire et fais une sauvegarde complète des messages pour prouver l'acharnement, va au 5.", targetId: 5, label: "Stopper et sauvegarder" }
  ],
  { serenity: -20, solidarity: -10, trust: 0 },
  "Alimenter un fil de harcèlement procure aux agresseurs la réaction qu'ils recherchent. Ne jamais entrer dans une joute verbale publique sur les réseaux."
);

// 3
addStep(
  3,
  "La capture réflexe et la déconnexion protectrice",
  "Cabine de Repos Individuelle • Sas 14-B",
  1,
  "Le cœur battant, tu respires profondément et actives l'enregistreur de trace du ComNet : tu captures l'hologramme, l'horodatage précis (Cycle 84, 23h42), ainsi que la liste des comptes ayant commenté et relayé le trucage. Puis, malgré l'envie obsédante de rafraîchir la page, tu bascules ton terminal en mode veille hermétique et poses l'appareil face contre table. La pièce retrouve son calme.",
  [
    { text: "Si la curiosité angoissée te pousse à rallumer l'écran pour surveiller les réactions, va au 6.", targetId: 6, label: "Rallumer l'écran par anxiété" },
    { text: "Si tu envoies un message privé sobre à Élior pour lui demander conseil avant de dormir, va au 7.", targetId: 7, label: "Contacter un ami sûr" }
  ],
  { serenity: 5, solidarity: 5, trust: 10, badge: "Sang-Froid Numérique" },
  "Conserver les preuves sans engager le dialogue est la démarche la plus efficace pour préparer un signalement légal et protéger son équilibre mental."
);

// 4
addStep(
  4,
  "L'illusion de la suppression",
  "Cabine de Repos Individuelle • Sas 14-B",
  1,
  "Tu as effacé ton commentaire, mais il est trop tard : plusieurs membres du canal ont fait des captures d'écran de ta colère pour en faire de nouveaux mèmes légendés : « Lyra pète les plombs sur le réseau ». Dans le silence de ta couchette, ton cœur bat la chamade. Tu te sens épiée même à travers les cloisons d'acier de la station spatiale.",
  [
    { text: "Si tu t'enfermes dans le silence en espérant que tout le monde oubliera demain matin, va au 8.", targetId: 8, label: "S'enfermer dans le silence" },
    { text: "Si tu copies les liens du canal pour les envoyer au bureau de régulation de bord, va au 9.", targetId: 9, label: "Préparer le signalement" }
  ],
  { serenity: -15, solidarity: -5, trust: 5 },
  "Sur Internet et les réseaux sociaux, ce qui est posté échappe immédiatement à son auteur. Il est essentiel de ne pas rester seul avec ce sentiment d'invasion."
);

// 5
addStep(
  5,
  "L'archivage méthodique des logs",
  "Terminal Privé • Sas 14-B",
  1,
  "Tu interromps net tes réponses. Avec méthode, tu enregistres l'arborescence des messages et exportes le journal de diffusion de Spectre-Zero sur une puce cryptographique amovible. Tu as désormais entre les mains la preuve matérielle d'une campagne organisée de dénigrement numérique.",
  [
    { text: "Si tu décides de montrer ces preuves à Soa, la médiatrice des pairs, dès la première heure, va au 10.", targetId: 10, label: "Consulter la médiatrice Soa" },
    { text: "Si tu prépares un script de contre-piratage pour bloquer le compte de Spectre-Zero toi-même, va au 11.", targetId: 11, label: "Tenter le contre-piratage" }
  ],
  { serenity: 5, solidarity: 10, trust: 15, badge: "Preuves Irréfutables" },
  "L'archivage des faits permet de faire basculer le dossier du statut de simple rumeur impalpable à celui d'infraction caractérisée au règlement."
);

// 6
addStep(
  6,
  "Le piège du défilement infini d'angoisse",
  "Cabine de Repos Individuelle • Sas 14-B",
  1,
  "Impossible de fermer l'œil. Tu rallumes l'écran et fais défiler frénétiquement les commentaires pendant deux heures d'affilée. Chaque nouvelle notification te fait sursauter. Tu découvres que des camarades de ta propre équipe de bio-ingénierie ont 'liké' la publication sans même y penser, simplement pour suivre le mouvement.",
  [
    { text: "Si tu envoies un message furieux en privé à l'un de ces camarades pour lui reprocher son like, va au 12.", targetId: 12, label: "Reprocher le like en privé" },
    { text: "Si tu forces l'extinction complète de l'alimentation électrique de ta cabine pour stopper cette torture, va au 13.", targetId: 13, label: "Forcer la coupure électrique" }
  ],
  { serenity: -20, solidarity: -10, trust: -5 },
  "Le 'doomscrolling' (défilement anxieux) amplifie la détresse. Couper les écrans la nuit est une mesure d'hygiène mentale indispensable face au cyber-harcèlement."
);

// 7
addStep(
  7,
  "La réponse réconfortante d'Élior",
  "Canal Privé Sécurisé • Sas 14-B",
  1,
  "Tu rédiges un court message à Élior, qui a lui-même traversé les intimidations de Brannok au trimestre précédent. Sa réponse arrive en moins de trois minutes : « Lyra, ne réponds surtout rien sur Oxy-Leaks. J'ai vu passer cette infamie, c'est un montage grotesque. Garde les preuves, dors, et demain matin on va ensemble voir Madame Orla aux serveurs centraux. Tu n'es pas seule. » Ses mots agissent comme un bouclier contre l'angoisse nocturne.",
  [
    { text: "Si tu le remercies et éteins ton terminal pour te reposer en sécurité, va au 14.", targetId: 14, label: "Accepter le soutien et dormir" },
    { text: "Si tu lui demandes de mobiliser Naël et Corin dès l'aube pour préparer une riposte, va au 15.", targetId: 15, label: "Mobiliser les camarades" }
  ],
  { serenity: 15, solidarity: 20, trust: 15, badge: "Alliance Précieuse" },
  "Trouver un allié de confiance brise instantanément le sentiment de solitude oppressant généré par le cyber-harcèlement."
);

// 8
addStep(
  8,
  "Le matin blême dans les coursives",
  "Coursive Principale • Anneau de Gravité",
  1,
  "Le lendemain matin, tu marches vers l'Amphithéâtre Galilée le regard rivé au sol. En croisant des groupes d'élèves qui pianotent sur leurs terminaux portables, tu es persuadée qu'ils ne parlent que de toi. Deux recrues ricanent en te voyant passer ; tu ne sais même pas si c'est lié au montage, mais la paranoïa te ronge.",
  [
    { text: "Si tu bifurques pour t'isoler dans les coursives désertes de la maintenance, va au 16.", targetId: 16, label: "Fuir dans les coursives désertes" },
    { text: "Si tu gardes la tête haute et rejoins ta table de cours comme d'habitude, va au 17.", targetId: 17, label: "Affronter la salle de cours" }
  ],
  { serenity: -15, solidarity: -10, trust: -5 },
  "Le cyber-harcèlement prolonge ses effets dans le monde réel en créant un sentiment persistant d'insécurité et de jugement généralisé."
);

// 9
addStep(
  9,
  "Le formulaire de signalement ComNet",
  "Borne Informatique • Couloir Nord",
  1,
  "Devant une borne publique de la station, tu ouvres l'interface officielle de régulation du ComNet. Il existe un bouton d'urgence : 'Signalement de contenu diffamatoire ou illicite'. Tu hésites : le signalement déclenchera une alerte auprès des administrateurs adultes, mais Spectre-Zero saura-t-il qui a signalé ?",
  [
    { text: "Si tu valides le signalement officiel en joignant l'identifiant du canal, va au 18.", targetId: 18, label: "Valider le signalement officiel" },
    { text: "Si la peur des représailles te fait annuler la procédure au dernier moment, va au 19.", targetId: 19, label: "Annuler par peur des représailles" }
  ],
  { serenity: 5, solidarity: 5, trust: 15 },
  "Les plateformes et réseaux scolaires disposent de protocoles de modération. Les signalements sont protégés par le secret professionnel pour garantir la sécurité de la victime."
);

// 10
addStep(
  10,
  "Dans le bureau d'écoute de Soa",
  "Module Médic-Éducatif • Niveau 2",
  1,
  "Soa, élève médiatrice formée à l'écoute bienveillante, t'accueille avec une tasse d'infusion chaude. Tu lui montres la puce contenant les captures de l'holo-montage et les commentaires. Soa regarde attentivement sans porter aucun jugement : « C'est une agression numérique préméditée, Lyra. Tu as eu le réflexe parfait en ne répondant pas et en stockant les traces. Nous allons agir selon le protocole de protection. »",
  [
    { text: "Si tu acceptes que Soa prenne contact avec l'Officier Kroll pour une enquête discrète, va au 20.", targetId: 20, label: "Activer la médiation officielle" },
    { text: "Si tu demandes d'abord à confronter l'administrateur du canal entre élèves sans adultes, va au 21.", targetId: 21, label: "Vouloir régler ça entre élèves" }
  ],
  { serenity: 15, solidarity: 15, trust: 20, badge: "Écoute Bienveillante" },
  "Le recours aux pairs médiateurs permet d'exprimer son désarroi dans un cadre sécurisant avant d'engager les démarches administratives nécessaires."
);

// 11
addStep(
  11,
  "La tentation du script pirate",
  "Atelier Informatique • Baie 7",
  1,
  "Forte de tes compétences avancées en code, tu ouvres la console de diagnostic réseau d'Oxy-Kaelis. En quelques lignes de script, tu pourrais saturer le nœud de transmission de Spectre-Zero par un déni de service (DDoS) ou forcer la suppression de son canal. Mais le règlement d'Oxy-Kaelis punit tout piratage de l'exclusion immédiate.",
  [
    { text: "Si tu lances l'attaque informatique en secret pour faire justice toi-même, va au 22.", targetId: 22, label: "Lancer le script de piratage" },
    { text: "Si tu réalises que devenir pirate ferait de toi une coupable et fermes la console, va au 23.", targetId: 23, label: "Renoncer à l'illégalité" }
  ],
  { serenity: -10, solidarity: -15, trust: -10 },
  "La cyber-vengeance par piratage ou doxxing place la victime dans l'illégalité et détruit toute possibilité de recours juridique serein."
);

// 12
addStep(
  12,
  "La confrontation par message privé avec le 'likeur'",
  "Canal Privé ComNet",
  1,
  "Tu écris à Darek, qui a partagé le mème avec un emoji hilare : « Darek, pourquoi tu as partagé cette horreur ? On travaille ensemble sur le projet d'oxygène ! » Sa réponse est froide et désinvolte : « Ouh là calme-toi Lyra, c'est juste un mème rigolo, tout le monde partage ça sur la station, prends pas tout au premier degré ! »",
  [
    { text: "Si tu lui expliques fermement qu'un partage n'est pas neutre et qu'il participe au harcèlement, va au 24.", targetId: 24, label: "Expliquer la responsabilité du partage" },
    { text: "Si tu l'insultes en retour avant de le bloquer sur tous tes réseaux, va au 25.", targetId: 25, label: "Insulter et bloquer sous tension" }
  ],
  { serenity: -10, solidarity: -5, trust: 0 },
  "La banalisation ('ce n'est qu'un like') est le moteur du cyber-harcèlement. Rappeler calmement que partager une humiliation équivaut à la commettre réveille souvent la conscience."
);

// 13
addStep(
  13,
  "Le répit du silence total",
  "Cabine de Repos Individuelle",
  1,
  "Tu as coupé le disjoncteur auxiliaire de ta cabine. Plus un bruit de notification, plus d'écran lumineux. Dans l'obscurité paisible d'Oxy-Kaelis, ta respiration ralentit enfin. Tu comprends que la première victoire contre le cyber-harcèlement est de refuser qu'il s'invite dans ton espace intime.",
  [
    { text: "Si tu passes une nuit réparatrice avant d'agir avec lucidité le matin, va au 14.", targetId: 14, label: "Nuit réparatrice" },
    { text: "Si l'angoisse de ce qui se trame en ligne t'empêche de trouver le sommeil, va au 8.", targetId: 8, label: "Sommeil perturbé" }
  ],
  { serenity: 15, solidarity: 0, trust: 5 },
  "Le droit à la déconnexion n'est pas une fuite, c'est un bouclier indispensable pour préserver ses capacités de discernement."
);

// 14
addStep(
  14,
  "L'aube de la résolution",
  "Cafétéria des Synthèses • Matin",
  1,
  "Après quelques heures de vrai sommeil, tes idées sont claires. À la cafétéria, Élior et Naël viennent s'asseoir à ta table avec un plateau de fruits synthétiques. Élior te fait un clin d'œil complice : « Prête pour l'offensive légale ? » Savoir que tes amis te croient et se tiennent à tes côtés dissipe le brouillard d'angoisse.",
  [
    { text: "Si vous allez ensemble déposer la clé de logs chez Madame Orla, va au 26.", targetId: 26, label: "Dépôt des logs en groupe" },
    { text: "Si vous préférez d'abord sonder les réactions des autres élèves en classe, va au 27.", targetId: 27, label: "Observer les réactions en classe" }
  ],
  { serenity: 20, solidarity: 25, trust: 20, badge: "Bouclier d'Amitié" },
  "La solidarité en présence physique réelle est le meilleur antidote contre les violences virtuelles."
);

// 15
addStep(
  15,
  "Le rassemblement des quatre recrues",
  "Atelier Botanique de Naël • Secteur Vert",
  1,
  "Au milieu des fougères orbitales et des conduits d'irrigation de Naël, vous vous réunissez : Élior, Naël, Corin et toi. Chacun d'eux a vécu une forme d'épreuve sur Oxy-Kaelis : les coups pour Élior, l'ostracisme pour Naël, les quolibets pour Corin. « Cette fois, c'est le ComNet qu'ils utilisent pour t'atteindre, » dit Corin. « Mais le principe est le même : ils comptent sur la honte et le silence. »",
  [
    { text: "Si vous organisez une campagne de signalements collectifs du canal toxique, va au 28.", targetId: 28, label: "Signalements collectifs coordonnés" },
    { text: "Si vous rédigez un message d'information sur les deepfakes pour le journal de bord, va au 29.", targetId: 29, label: "Sensibilisation aux deepfakes" }
  ],
  { serenity: 25, solidarity: 30, trust: 25, badge: "Quatuor Uni" },
  "Unir les expériences vécues renforce la légitimité de l'action collective et transforme des victimes isolées en bâtisseurs de climat scolaire."
);

// 16
addStep(
  16,
  "Le piège de la cachette dans la maintenance",
  "Conduit de Ventilation 4-C",
  1,
  "Accroupie entre deux générateurs d'oxygène, tu consultes à nouveau ton terminal en cachette. Manquer les cours ne fait qu'aggraver la situation : l'absence de réaction dans la vraie vie laisse le champ libre aux affabulateurs sur le réseau. Un message de ton tuteur d'enseignement s'affiche : « Absence non justifiée en cours de navigation ».",
  [
    { text: "Si tu sors immédiatement de ta cachette pour rejoindre l'infirmerie et expliquer ton malaise, va au 30.", targetId: 30, label: "Aller à l'infirmerie" },
    { text: "Si tu restes prostrée toute la matinée dans le conduit, va au 31.", targetId: 31, label: "Rester cachée" }
  ],
  { serenity: -20, solidarity: -15, trust: -10 },
  "L'évitement scolaire est l'une des conséquences les plus graves du cyber-harcèlement. Il pénalise la victime au lieu de sanctionner les auteurs."
);

// 17
addStep(
  17,
  "L'entrée courageuse en salle de cours",
  "Laboratoire d'Informatique Orbitale",
  1,
  "Tu pénètres dans le laboratoire la tête haute et t'installes devant ton pupitre. Au fond, Vael et deux complices chuchotent en ricanant, les yeux fixés sur leur écran de montre. Mais tu gardes ton calme, allumes ton poste de travail et commences les exercices de programmation avec une précision impeccable. Ton assurance déstabilise les moqueurs.",
  [
    { text: "Si le professeur remarque l'agitation au fond et demande des explications, va au 32.", targetId: 32, label: "Intervention du professeur" },
    { text: "Si Vael t'envoie un fichier anonyme par transfert de proximité (AirDrop orbital), va au 33.", targetId: 33, label: "Réception d'un fichier suspect" }
  ],
  { serenity: 10, solidarity: 10, trust: 10 },
  "Continuer ses activités quotidiennes avec dignité montre aux agresseurs que leur tentative de déstabilisation ne contrôle pas la vie de leur cible."
);

// 18
addStep(
  18,
  "L'accusé de réception des modérateurs",
  "Borne Informatique • Couloir Nord",
  1,
  "L'écran de la borne affiche un message officiel : « Signalement #784-NET enregistré avec succès. Transmission prioritaire au Délégué à la Protection Numérique. Confidentialité garantie. » Un sentiment de soulagement t'envahit : la machine institutionnelle est enclenchée, tu n'es plus seule à porter le fardeau.",
  [
    { text: "Si tu imprimes le ticket de signalement pour le garder sur toi, va au 34.", targetId: 34, label: "Garder le ticket de preuve" },
    { text: "Si tu rejoins tes camarades pour leur annoncer que la procédure est lancée, va au 26.", targetId: 26, label: "Annoncer la démarche aux amis" }
  ],
  { serenity: 15, solidarity: 10, trust: 20 },
  "Faire confiance aux dispositifs de signalement permet d'activer la protection légale sans s'exposer directement aux agresseurs."
);

// 19
addStep(
  19,
  "Le poids du renoncement",
  "Borne Informatique • Couloir Nord",
  1,
  "Tu cliques sur 'Annuler'. La borne s'éteint. Tu te dis que si tu signales, Spectre-Zero et sa bande vont redoubler d'acharnement et te traiter de 'balance'. Mais en ne faisant rien, le canal continue de diffuser le faux montage à des centaines de personnes sans aucune entrave.",
  [
    { text: "Si tu te ressaisis et relances immédiatement le formulaire de signalement, va au 18.", targetId: 18, label: "Se ressaisir et signaler" },
    { text: "Si tu rentres dans ta cabine submergée par l'impuissance, va au 8.", targetId: 8, label: "Submergée par l'impuissance" }
  ],
  { serenity: -15, solidarity: -10, trust: -15 },
  "La peur d'être qualifié de 'balance' est une arme classique des harceleurs pour imposer le silence. Signaler une agression, c'est faire respecter la loi, pas dénoncer par jalousie."
);

// 20
addStep(
  20,
  "L'activation du protocole 3018 spatial",
  "Module Médic-Éducatif",
  1,
  "Soa compose sur la console sécurisée le code d'assistance d'urgence d'Oxy-Kaelis : l'équivalent spatial du service national 3018 pour la protection des mineurs contre les violences numériques. En moins de dix minutes, une écoutante spécialisée entre en visioconférence pour t'expliquer tes droits, les recours possibles et les démarches pour exiger la suppression immédiate des contenus auprès de l'hébergeur de bord.",
  [
    { text: "Si tu rédiges la demande officielle de réquisition et suppression des flux, va au 35.", targetId: 35, label: "Demander la suppression d'urgence" },
    { text: "Si tu acceptes un soutien psychologique pour évacuer la pression accumulée, va au 36.", targetId: 36, label: "Accepter l'écoute psychologique" }
  ],
  { serenity: 20, solidarity: 20, trust: 25, badge: "Protocole 3018 Activé" },
  "Le 3018 est le numéro gratuit, anonyme et confidentiel dédié au cyber-harcèlement. Il permet d'obtenir la suppression rapide de contenus illicites et un accompagnement juridique complet."
);

// 21
addStep(
  21,
  "La confrontation directe dans le réfectoire",
  "Réfectoire des Synthèses",
  1,
  "Tu décides d'aller voir directement Vael, que tu soupçonnes d'être derrière le canal. Tu le trouves entouré de ses acolytes : « Vael, arrête tes montages sur Oxy-Leaks, tout le monde sait que c'est toi ! » Vael hausse les épaules avec un sourire ironique : « Prouve-le, Lyra. Sur le ComNet, tout est chiffré. Tu te fais des films toute seule. » Ses amis éclatent de rire.",
  [
    { text: "Si tu lui montres la signature IP que tu as interceptée sur le réseau, va au 37.", targetId: 37, label: "Brandir la trace technique" },
    { text: "Si tu tournes les talons pour confier l'affaire à la régulation officielle, va au 10.", targetId: 10, label: "Préférer la voie institutionnelle" }
  ],
  { serenity: -10, solidarity: -5, trust: 0 },
  "Les harceleurs numériques se réfugient derrière le bouclier de l'anonymat. Tenter de les confronter sans preuves officielles validées par les adultes les pousse au déni et aux railleries."
);

// 22
addStep(
  22,
  "L'alarme de sécurité réseau",
  "Atelier Informatique • Baie 7",
  1,
  "Tu as lancé le script d'attaque pour saturer le canal Oxy-Leaks. Mais les systèmes de défense d'Oxy-Kaelis sont impitoyables : une sirène jaune retentit et l'écran se fige en rouge : « INTRUSION NON AUTORISÉE DÉTECTÉE - TERMINAL BLOQUÉ ». Les caméras de la baie pivotent vers toi. Tu viens de commettre une faute lourde qui menace de te faire exclure, alors que tu étais la victime !",
  [
    { text: "Si tu vas immédiatement trouver Madame Orla pour avouer ta tentative sous l'emprise de la détresse, va au 38.", targetId: 38, label: "Avouer son erreur à l'adulte" },
    { text: "Si tu tentes d'effacer les traces de ton piratage pour échapper à la sanction, va au 39.", targetId: 39, label: "Tenter de masquer son intrusion" }
  ],
  { serenity: -30, solidarity: -20, trust: -20 },
  "La vengeance numérique se retourne inévitablement contre la victime. Les journaux de connexion enregistrent tout et les sanctions techniques frappent sans distinction morale."
);

// 23
addStep(
  23,
  "La sagesse de la retenue éthique",
  "Atelier Informatique • Baie 7",
  1,
  "Ton doigt reste suspendu au-dessus de la touche d'exécution. Tu te souviens des paroles de ton instructeur de vol : « La maîtrise d'un pilote se mesure à son calme dans la tempête ». Tu fermes le script pirate sans le lancer. Tu as le savoir technique pour détruire, mais tu choisis la voie de la justice et du droit.",
  [
    { text: "Si tu utilises tes compétences pour analyser proprement les métadonnées du fichier vidéo sans intrusion, va au 40.", targetId: 40, label: "Analyse technique légale" },
    { text: "Si tu rejoins tes camarades pour bâtir un contre-discours bienveillant, va au 15.", targetId: 15, label: "Rejoindre le quatuor d'amis" }
  ],
  { serenity: 15, solidarity: 10, trust: 15, badge: "Éthique Numérique" },
  "Résister à la tentation de la loi du talion en ligne est la plus grande preuve de maturité citoyenne."
);

// 24
addStep(
  24,
  "La prise de conscience du camarade",
  "Canal Privé ComNet",
  1,
  "Tu réponds à Darek avec calme : « Darek, imagine que demain quelqu'un truque une vidéo de toi en train d'échouer à tes tests d'astronaute et que toute la station en rie. En likant et en partageant, tu donnes de la force à ceux qui détruisent les autres. » Un long silence suit. Puis un message apparaît : « ... Désolé Lyra. J'avais pas vu les choses comme ça. Je supprime mon partage tout de suite et je quitte ce canal pourri. »",
  [
    { text: "Si tu le remercies pour sa prise de conscience et lui proposes de témoigner, va au 41.", targetId: 41, label: "Inviter Darek à témoigner" },
    { text: "Si tu te réjouis de cette première brèche dans le cercle des suiveurs, va au 42.", targetId: 42, label: "Première victoire éthique" }
  ],
  { serenity: 15, solidarity: 20, trust: 10, badge: "Pédagogie Entre Pairs" },
  "Interpeller individuellement les suiveurs sur leur empathie désamorce l'effet de foule numérique et permet souvent de les détacher du groupe de harceleurs."
);

// 25
addStep(
  25,
  "L'échange toxique envenimé",
  "Canal Privé ComNet",
  1,
  "Sous le coup de la douleur, tu lui as envoyé une bordée d'insultes : « T'es qu'un abruti sans cervelle, je te déteste ! » Darek s'empresse de faire une capture d'écran de tes injures et la publie immédiatement sur le groupe public avec la légende : « Regardez comme Lyra est violente et agressive en privé ! » Tu te retrouves piégée dans une situation où tes propres mots sont retournés contre toi.",
  [
    { text: "Si tu arrêtes tout échange pour ne plus aggraver ton cas, va au 43.", targetId: 43, label: "Cesser toute communication" },
    { text: "Si tu vas tout raconter à la médiatrice pour réparer ton erreur de communication, va au 10.", targetId: 10, label: "Consulter Soa pour réparer l'erreur" }
  ],
  { serenity: -20, solidarity: -15, trust: -10 },
  "Les insultes en privé sont presque toujours capturées et instrumentalisées par les harceleurs pour faire passer la victime pour l'agresseur."
);

// ==========================================
// ACTE 2 : L'AMPLIFICATION ET LE PIÈGE DU RÉSEAU (Étapes 26 à 50)
// ==========================================

// 26
addStep(
  26,
  "L'alliance des quatre aux Archives Centrales",
  "Centre des Serveurs ComNet • Archives",
  2,
  "Accompagnée d'Élior, Naël et Corin, tu franchis la porte vitrée des archives. Madame Orla, responsable des communications de la station, vous accueille avec son habituel regard perçant. « Les quatre mousquetaires d'Oxy-Kaelis au grand complet ? Que se passe-t-il ? » Tu déposes ta puce sur le lecteur optique. L'écran principal projette les logs d'Oxy-Leaks.",
  [
    { text: "Si tu laisses Madame Orla inspecter les flux de données officiellement, va au 44.", targetId: 44, label: "Expertise de Madame Orla" },
    { text: "Si tu lui demandes de suspendre immédiatement le compte de Spectre-Zero, va au 45.", targetId: 45, label: "Demande de suspension immédiate" }
  ],
  { serenity: 15, solidarity: 25, trust: 25 },
  "S'adresser à un adulte référent avec l'appui de camarades permet de présenter les faits avec sérénité et crédibilité."
);

// 27
addStep(
  27,
  "L'observation des clans dans l'amphithéâtre",
  "Amphithéâtre Galilée",
  2,
  "Assise au milieu de la salle, tu observes la dynamique de groupe. Il y a le noyau dur autour de Vael (3 personnes), les suiveurs qui ricanent pour se faire bien voir (une dizaine), et l'immense majorité silencieuse qui regarde ses écrans sans oser intervenir par peur d'être prise pour cible à son tour.",
  [
    { text: "Si tu réalises que les harceleurs sont en réalité très minoritaires, va au 46.", targetId: 46, label: "Prendre conscience de la minorité" },
    { text: "Si la passivité des témoins te donne envie de tout abandonner, va au 47.", targetId: 47, label: "Découragement face aux témoins" }
  ],
  { serenity: 5, solidarity: 10, trust: 5 },
  "Dans le cyber-harcèlement, la majorité silencieuse n'approuve pas les attaques mais n'ose pas bouger par peur de l'isolement. C'est elle qu'il faut mobiliser."
);

// 28
addStep(
  28,
  "La vague de signalements bienveillants",
  "Terminal Étudiant • Anneau Central",
  2,
  "Élior, Naël, Corin et toi rédigez un modèle de signalement citoyen. En moins d'une heure, quinze élèves de votre promotion qui refusaient la toxicité ambiante envoient un rapport concordant au modérateur de bord. Le volume de signalements déclenche automatiquement une mise sous surveillance algorithmique du canal clandestin.",
  [
    { text: "Si le canal Oxy-Leaks est temporairement gelé par le système, va au 48.", targetId: 48, label: "Gel temporaire du canal" },
    { text: "Si l'administrateur riposte en ouvrant un canal miroir sous un autre nom, va au 49.", targetId: 49, label: "Tentative de canal miroir" }
  ],
  { serenity: 20, solidarity: 25, trust: 20, badge: "Signalement Citoyen" },
  "La modération collective montre aux agresseurs que leur comportement n'est pas toléré par la communauté."
);

// 29
addStep(
  29,
  "La publication éducative sur les deepfakes",
  "Journal Numérique de Bord • Écran Général",
  2,
  "Plutôt que de parler de ton cas particulier, vous rédigez avec Corin un article technique passionnant pour le journal de la station : « Comment fonctionnent les deepfakes holographiques et pourquoi leur utilisation malveillante est punie par la loi spatiale ». L'article devient viral pour d'excellentes raisons et plusieurs professeurs le projettent au début de leurs cours.",
  [
    { text: "Si les élèves commencent à regarder la vidéo moqueuse d'un œil critique et dégoûté, va au 50.", targetId: 50, label: "Regard critique de la classe" },
    { text: "Si Vael tente de ridiculiser votre article dans les commentaires, va au 51.", targetId: 51, label: "Dernière riposte de Vael" }
  ],
  { serenity: 25, solidarity: 30, trust: 20, badge: "Éducation Critique" },
  "Sensibiliser aux mécanismes techniques de la désinformation désamorce l'impact des fausses images en redonnant aux élèves leur esprit critique."
);

// 30
addStep(
  30,
  "Le refuge bienveillant de l'infirmerie",
  "Infirmerie Centrale • Sas Médical",
  2,
  "L'Infirmière-Chef Hélène remarque tes cernes prononcés et tes tremblements. Après t'avoir fait boire une tisane sédative légère, elle écoute ton histoire sans t'interrompre : « Tu souffres de surcharge anxieuse induite par agression numérique, Lyra. Ce n'est pas de ta faute. Je valide ton repos médical pour aujourd'hui et je saisis la cellule de veille. »",
  [
    { text: "Si tu acceptes ce temps de repos pour recharger tes batteries mentales, va au 52.", targetId: 52, label: "Repos médical validé" },
    { text: "Si tu demandes à retourner en cours avec le soutien d'un accompagnant, va au 53.", targetId: 53, label: "Retour accompagné en classe" }
  ],
  { serenity: 15, solidarity: 10, trust: 20 },
  "Le personnel soignant scolaire est un pilier fondamental pour attester de la souffrance psychique et déclencher la protection institutionnelle."
);

// 31
addStep(
  31,
  "L'épuisement dans l'ombre des conduits",
  "Conduit de Ventilation 4-C",
  2,
  "Tu as passé quatre heures prostrée dans le froid des conduits. Tes muscles sont tétanisés et le sentiment d'humiliation a grandi. Tu reçois un message de tes parents restés sur la colonie minière qui ont reçu une alerte automatique d'absence scolaire et s'inquiètent terriblement.",
  [
    { text: "Si tu leur réponds en leur avouant toute la vérité par appel sécurisé, va au 54.", targetId: 54, label: "Avouer la vérité aux parents" },
    { text: "Si tu mens en disant que tu avais juste mal au ventre, va au 55.", targetId: 55, label: "Mentir par honte" }
  ],
  { serenity: -25, solidarity: -20, trust: -20 },
  "Cacher sa situation à sa famille par peur d'inquiéter prive la victime du soutien affectif le plus solide."
);

// 32
addStep(
  32,
  "L'interruption nette du professeur d'informatique",
  "Laboratoire d'Informatique Orbitale",
  2,
  "Monsieur Chen, professeur d'informatique, perçoit les messes basses et le regard mal à l'aise de Lyra. Il suspend soudain son cours et coupe tous les terminaux élèves d'un geste sur son pupitre maître. « Dans ce laboratoire comme partout sur Oxy-Kaelis, les outils de calcul servent à la recherche et à la coopération. Celui qui utilise le réseau pour humilier ses pairs n'a pas sa place derrière un clavier. Vael, fermez votre session et venez à mon bureau. »",
  [
    { text: "Si tu ressens un immense soulagement de voir l'adulte poser la limite, va au 56.", targetId: 56, label: "Soulagement de l'autorité" },
    { text: "Si Vael te lance un regard furieux en sortant de la salle, va au 57.", targetId: 57, label: "Regard noir de Vael" }
  ],
  { serenity: 15, solidarity: 15, trust: 25, badge: "Autorité Protectrice" },
  "L'intervention ferme d'un enseignant en classe casse immédiatement le sentiment d'impunité des harceleurs."
);

// 33
addStep(
  33,
  "La notification malveillante de proximité",
  "Laboratoire d'Informatique",
  2,
  "Un pop-up apparaît sur ton écran : « Oxy-Drop : Accepter le fichier 'Lyra_Pleure_encore.holo' ? ». C'est une provocation directe envoyée depuis la salle même. Vael te regarde avec un sourire narquois, certain que tu vas paniquer.",
  [
    { text: "Si tu refuses le transfert et actives l'historique d'émission pour prouver l'origine du terminal de Vael, va au 58.", targetId: 58, label: "Refuser et tracer l'émetteur" },
    { text: "Si tu acceptes le fichier par curiosité morbide et fonds en larmes, va au 59.", targetId: 59, label: "Accepter le fichier toxique" }
  ],
  { serenity: -10, solidarity: 0, trust: 10 },
  "Ne jamais accepter de fichiers non sollicités de source douteuse et régler son terminal en mode 'réception restreinte aux contacts sûrs'."
);

// 34
addStep(
  34,
  "Le ticket de signalement en poche",
  "Coursive Centrale",
  2,
  "Avec ton ticket chiffré #784-NET en poche, tu te sens investie d'une légitimité nouvelle. Tu croises Sylvan, le témoin des bousculades d'Élior au premier trimestre. Il te sourit timidement : « J'ai vu ce qu'ils ont fait sur ComNet. Si tu as besoin d'un témoignage pour dire que cette vidéo est truquée, je suis avec toi. »",
  [
    { text: "Si tu ajoutes son témoignage au dossier d'enquête, va au 60.", targetId: 60, label: "Intégrer le témoignage de Sylvan" },
    { text: "Si tu le remercies chaleureusement pour son courage, va au 26.", targetId: 26, label: "Remercier chaleureusement" }
  ],
  { serenity: 15, solidarity: 25, trust: 20 },
  "Un témoignage spontané encourage d'autres témoins à sortir du silence. C'est le début du basculement positif."
);

// 35
addStep(
  35,
  "La demande de réquisition d'urgence",
  "Module Médic-Éducatif",
  2,
  "Avec l'appui de l'écoutante du protocole 3018, vous transmettez une réquisition officielle au Superviseur Technique de la station. En vertu de la directive spatiale de protection des mineurs, le serveur central est sommé de bloquer l'accès au fichier vidéo sur tous les relais d'Oxy-Kaelis sous deux heures.",
  [
    { text: "Si la vidéo devient inaccessible sur tous les terminaux de la station, va au 61.", targetId: 61, label: "Blocage technique du contenu" },
    { text: "Si des copies locales continuent de circuler de main en main par clé physique, va au 62.", targetId: 62, label: "Circulation sous le manteau" }
  ],
  { serenity: 20, solidarity: 15, trust: 30, badge: "Suppression Légale" },
  "La réquisition de retrait de contenu est l'arme juridique la plus puissante pour stopper la diffusion virale d'une humiliation."
);

// 36
addStep(
  36,
  "La séance d'écoute et de décompression",
  "Module Médic-Éducatif",
  2,
  "L'écoutante te guide dans un exercice de respiration synchronisée. Elle met des mots précis sur ce que tu ressens : le sentiment de viol de ton intimité, la sensation que mille yeux te jugent, l'angoisse du lendemain. « Lyra, ce que tu ressens est normal face à une agression anormale. Tu n'as rien fait de mal. » Ces paroles simples te libèrent d'un poids immense.",
  [
    { text: "Si tu te sens prête à affronter la suite avec une énergie renouvelée, va au 26.", targetId: 26, label: "Énergie retrouvée" },
    { text: "Si tu préfères rester encore un peu au calme dans le module, va au 52.", targetId: 52, label: "Prolonger le calme" }
  ],
  { serenity: 25, solidarity: 15, trust: 25, badge: "Libération Émotionnelle" },
  "Mettre des mots sur le traumatisme avec un professionnel brise le sentiment de culpabilité que ressentent souvent les victimes de harcèlement."
);

// 37
addStep(
  37,
  "Le piège de la confrontation prématurée",
  "Réfectoire des Synthèses",
  2,
  "Tu tentes de brandir des arguments techniques devant Vael au milieu du réfectoire. Mais sans l'autorité d'un adulte, Vael inverse la situation en prenant les témoins à partie : « Écoutez-la ! Elle passe sa vie à espionner nos terminaux, c'est elle la vraie parano ! » Plusieurs élèves rient bêtement. Tu repars blessée et furieuse.",
  [
    { text: "Si tu rejoins Élior et Naël pour reprendre la méthode légale, va au 26.", targetId: 26, label: "Reprendre la méthode légale" },
    { text: "Si tu te laisses submerger par les larmes dans les coursives, va au 8.", targetId: 8, label: "Submergée par les larmes" }
  ],
  { serenity: -15, solidarity: -10, trust: 0 },
  "Discuter publiquement avec un harceleur dans son arène lui donne l'occasion de manipuler le public. La preuve doit être remise aux adultes, pas négociée avec l'agresseur."
);

// 38
addStep(
  38,
  "L'aveu courageux à Madame Orla",
  "Centre des Serveurs ComNet",
  2,
  "Le cœur serré, tu cours au bureau de Madame Orla et lui montres l'alerte d'intrusion : « Madame, j'ai failli commettre une grave bêtise. J'ai voulu hacker le compte de Spectre-Zero par colère parce qu'il me harcèle sur Oxy-Leaks. » Madame Orla te regarde avec sévérité, puis son regard s'adoucit : « Tu as violé le règlement informatique, Lyra. Mais tu viens me le dire de toi-même avant que le système ne sévisse. Montre-moi ce canal. »",
  [
    { text: "Si elle prend l'affaire en main en suspendant ta sanction au profit d'une enquête complète, va au 44.", targetId: 44, label: "Enquête prioritaire" },
    { text: "Si elle t'impose d'abord un rappel au règlement avant de traiter le harcèlement, va au 63.", targetId: 63, label: "Rappel au règlement" }
  ],
  { serenity: 5, solidarity: 10, trust: 20 },
  "Reconnaître ses erreurs auprès des adultes désamorce la sanction et permet de recentrer l'attention sur la cause profonde du passage à l'acte : le harcèlement."
);

// 39
addStep(
  39,
  "L'aggravation de la faute technique",
  "Atelier Informatique",
  2,
  "En tentant d'effacer les traces de ton piratage, tu déclenches une seconde alarme de sécurité. L'Officier de Sécurité Kroll arrive dans la pièce et te surprend les doigts sur le clavier en mode administrateur interdit. Te voilà accusée de sabotage informatique, tandis que Vael jubile en silence.",
  [
    { text: "Si tu t'effondres en larmes et expliques enfin toute l'histoire de cyber-harcèlement à Kroll, va au 64.", targetId: 64, label: "Tout avouer à Kroll" },
    { text: "Si tu t'enfermes dans un mutisme hostile, va au 65.", targetId: 65, label: "Mutisme hostile" }
  ],
  { serenity: -30, solidarity: -20, trust: -25 },
  "Tenter de dissimuler une faute informatique sur un réseau supervisé aggrave la situation. La vérité immédiate est toujours la seule issue salvatrice."
);

// 40
addStep(
  40,
  "La découverte des métadonnées incriminantes",
  "Atelier Informatique • Poste Sécurisé",
  2,
  "En analysant proprement le fichier vidéo public sans enfreindre aucune règle, tu inspectes les métadonnées EXIF et les logs de compression. Surprise : le fichier original a été exporté depuis un terminal modèle 'Aero-7' avec le numéro de série #VK-889. C'est exactement le modèle de terminal personnalisé de Vael !",
  [
    { text: "Si tu enregistres cette preuve formelle pour le dossier officiel, va au 66.", targetId: 66, label: "Preuve formelle du terminal" },
    { text: "Si tu montres cette découverte immédiatement à tes amis, va au 26.", targetId: 26, label: "Partager la preuve aux amis" }
  ],
  { serenity: 20, solidarity: 20, trust: 20, badge: "Détective Numérique" },
  "L'analyse rigoureuse des données publiques permet souvent d'identifier les auteurs sans jamais commettre d'acte illégal."
);

// 41
addStep(
  41,
  "Le ralliement de Darek",
  "Cafétéria des Synthèses",
  2,
  "Darek vient s'asseoir à ta table. Devant d'autres élèves, il s'exprime clairement : « J'ai supprimé mon partage et je voulais m'excuser, Lyra. Ce canal Oxy-Leaks est devenu un égout. Si vous faites un signalement, vous pouvez dire que j'étais témoin de la supercherie. » Son changement de camp fait l'effet d'une onde de choc parmi les suiveurs.",
  [
    { text: "Si d'autres élèves suivent son exemple et quittent le canal toxique, va au 67.", targetId: 67, label: "Défections en masse" },
    { text: "Si Vael commence à insulter Darek de traître sur le réseau, va au 68.", targetId: 68, label: "Vael s'en prend à Darek" }
  ],
  { serenity: 20, solidarity: 30, trust: 20, badge: "Cercle Positif" },
  "Quand un suiveur se désolidarise publiquement, il brise l'illusion de consensus du groupe et libère la parole des autres."
);

// 42
addStep(
  42,
  "Le retournement d'opinion chez les pairs",
  "Coursive des Casiers",
  2,
  "Dans les couloirs, plusieurs élèves viennent spontanément te voir : « Franchement Lyra, ce montage était nul », « On sait tous que tu es une des meilleures recrues en navigation ». Le mur de ricanements commence à s'effriter sous le poids de la simple honnêteté.",
  [
    { text: "Si tu te sens réconfortée et prête à porter l'affaire devant le Conseil, va au 69.", targetId: 69, label: "Cap sur le Conseil d'Éthique" },
    { text: "Si tu restes vigilante face aux provocations résiduelles, va au 26.", targetId: 26, label: "Vigilance et consolidation" }
  ],
  { serenity: 15, solidarity: 25, trust: 15 },
  "Le soutien des pairs neutralise la toxicité du harcèlement et restaure la confiance en soi."
);

// 43
addStep(
  43,
  "La pause nécessaire et la reprise en main",
  "Sas de Décompression • Niveau 1",
  2,
  "Assise sur un banc métallique, tu respires calmement. Tu as compris la leçon : ne plus jamais céder aux provocations en ligne. Tu contactes la médiatrice Soa pour lui raconter l'incident en toute transparence.",
  [
    { text: "Si Soa t'aide à recadrer l'échange avec Darek dans un cadre apaisé, va au 41.", targetId: 41, label: "Médiation apaisée avec Darek" },
    { text: "Si tu rejoins le groupe de soutien de tes camarades, va au 15.", targetId: 15, label: "Rejoindre les amis" }
  ],
  { serenity: 10, solidarity: 10, trust: 15 },
  "Prendre du recul après une erreur de communication permet de corriger le tir avant que les dégâts ne soient irréparables."
);

// 44
addStep(
  44,
  "L'enquête informatique officielle de Madame Orla",
  "Centre des Serveurs ComNet",
  2,
  "Madame Orla branche sa console d'auditrice en chef. Ses doigts parcourent le clavier avec une virtuosité stupéfiante. En trois minutes, elle remonte la trace du protocole de routage d'Oxy-Leaks. « Ce n'est pas un canal crypté indestructible, c'est un simple script masqué hébergé sur le relais du secteur dortoir des Cycles Supérieurs. L'administrateur a laissé sa signature numérique partout. »",
  [
    { text: "Si elle rédige un rapport formel destiné au Conseil d'Éthique de la station, va au 70.", targetId: 70, label: "Rapport formel d'audit" },
    { text: "Si elle convoque immédiatement le titulaire du compte pour une explication, va au 71.", targetId: 71, label: "Convocation immédiate" }
  ],
  { serenity: 25, solidarity: 20, trust: 30, badge: "Vérité Technique" },
  "L'anonymat sur un réseau supervisé est une pure illusion : les administrateurs systèmes ont toujours les moyens techniques d'identifier les auteurs d'infractions."
);

// 45
addStep(
  45,
  "La mesure conservatoire de blocage",
  "Centre des Serveurs ComNet",
  2,
  "Madame Orla active le bouton rouge de modération conservatoire : le flux du canal Oxy-Leaks est instantanément verrouillé sur toute la station. Sur les terminaux de tous les élèves s'affiche désormais un panneau noir officiel : « CANAL SUSPENDU POUR ENQUÊTE DISCIPLINAIRE RELATIVE AU HARCÈLEMENT NUMÉRIQUE ».",
  [
    { text: "Si ce coup d'arrêt spectaculaire met fin à l'angoisse immédiate, va au 72.", targetId: 72, label: "Coup d'arrêt salutaire" },
    { text: "Si les complices de Vael s'agitent dans les coursives, va au 73.", targetId: 73, label: "Agitation des complices" }
  ],
  { serenity: 20, solidarity: 15, trust: 25, badge: "Suspension Conservatoire" },
  "La suspension immédiate des espaces toxiques protège la victime et signale à l'ensemble de l'établissement que l'impunité est terminée."
);

// 46
addStep(
  46,
  "La force de la lucidité",
  "Amphithéâtre Galilée",
  2,
  "En regardant la salle, le voile de peur tombe. Tu réalises que Vael et ses complices ne sont que trois élèves isolés qui utilisent le bruit du réseau pour faire croire qu'ils sont puissants. Le reste de la promotion attendait juste que quelqu'un ose se dresser contre eux.",
  [
    { text: "Si tu proposes à tes camarades de classe de lancer une initiative positive, va au 74.", targetId: 74, label: "Initiative positive de classe" },
    { text: "Si tu te concentres sereinement sur tes révisions, va au 14.", targetId: 14, label: "Retour au travail serein" }
  ],
  { serenity: 20, solidarity: 20, trust: 15 },
  "Prendre conscience que les harceleurs sont ultra-minoritaires brise le pouvoir psychologique qu'ils exercent sur le groupe."
);

// 47
addStep(
  47,
  "Le réveil par les mots de Naël",
  "Jardin Botanique Orbital",
  2,
  "Alors que tu es assise près des serres hydroponiques, Naël s'approche : « Lyra, j'ai vécu ce rejet silencieux au premier trimestre. Si tu baisses les bras, ils ont gagné sans combattre. Le silence des autres n'est pas de la haine, c'est de la trouille. Montre-leur qu'on n'a plus peur, et ils te suivront. » Ses paroles résonnent profondément en toi.",
  [
    { text: "Si tu te redresses prête à agir avec tes amis, va au 15.", targetId: 15, label: "Se redresser avec le quatuor" },
    { text: "Si tu vas déposer ton dossier de preuves avec Naël, va au 26.", targetId: 26, label: "Déposer les preuves" }
  ],
  { serenity: 15, solidarity: 25, trust: 20 },
  "L'entraide entre ceux qui ont surmonté le harcèlement est une source inestimable de résilience et d'espérance."
);

// 48
addStep(
  48,
  "Le gel du canal et la surprise des suiveurs",
  "Anneau Central",
  2,
  "La nouvelle fait le tour de la station : le canal Oxy-Leaks a été gelé par la modération centrale suite aux signalements massifs. Plusieurs élèves qui participaient 'pour rigoler' paniquent à l'idée que leurs noms figurent dans les logs d'enquête. Le rapport de force s'inverse complètement.",
  [
    { text: "Si deux élèves viennent s'excuser auprès de toi par crainte des sanctions, va au 75.", targetId: 75, label: "Excuses opportunistes des suiveurs" },
    { text: "Si tu te réjouis de voir la justice avancer, va au 70.", targetId: 70, label: "Justice en marche" }
  ],
  { serenity: 20, solidarity: 25, trust: 25 },
  "Quand l'institution intervient, la lâcheté des suiveurs apparaît au grand jour et le harceleur principal perd son armée de complices."
);

// 49
addStep(
  49,
  "La tentative désespérée de canal miroir",
  "Terminal Privé",
  2,
  "Dans un dernier sursaut de défi, Spectre-Zero tente d'ouvrir un canal miroir intitulé 'Oxy-Leaks 2.0'. Mais cette fois, le filtre de surveillance algorithmique le bloque en moins de quatre secondes, tout en enregistrant le terminal émetteur sur la liste rouge de la station.",
  [
    { text: "Si la tentative avortée signe la fin de l'anonymat de l'agresseur, va au 66.", targetId: 66, label: "Fin de l'anonymat" },
    { text: "Si tu préviens Madame Orla de cette tentative de récidive, va au 44.", targetId: 44, label: "Alerter de la récidive" }
  ],
  { serenity: 20, solidarity: 20, trust: 25 },
  "La récidive sur un réseau surveillé aggrave considérablement le cas des auteurs et facilite leur identification définitive."
);

// 50
addStep(
  50,
  "Le changement de regard des élèves",
  "Amphithéâtre Galilée",
  2,
  "Grâce à votre article technique, les élèves regardent désormais le montage pour ce qu'il est : une manipulation grossière et lâche. Lors d'un atelier pratique, une élève prend la parole : « Franchement, truquer la vidéo de quelqu'un pour le lyncher en ligne, c'est minable. Bravo Lyra pour ton article. » Un tonnerre d'applaudissements éclate dans la salle.",
  [
    { text: "Si tu savoures cette victoire éclatante de l'intelligence collective, va au 76.", targetId: 76, label: "Victoire de l'intelligence" },
    { text: "Si tu prépares la formalisation de la Charte Numérique, va au 77.", targetId: 77, label: "Cap vers la Charte" }
  ],
  { serenity: 30, solidarity: 35, trust: 25, badge: "Reconnaissance des Pairs" },
  "Élever le débat par la pédagogie transforme une agression humiliante en opportunité de progrès moral pour toute une promotion."
);

// ==========================================
// ACTE 3 : L'ENQUÊTE ET LA RUPTURE DU SILENCE (Étapes 51 à 75)
// ==========================================

// 51
addStep(
  51,
  "Le commentaire haineux de trop",
  "Canal Public d'Information",
  3,
  "En rage d'avoir perdu le contrôle, Vael poste sous son propre compte un commentaire haineux visant ton travail : « De toute façon Lyra ne sait que pleurer et se faire plaindre par les profs ! » Cette fois, le commentaire est public, non anonyme, et enfreint directement le règlement de courtoisie d'Oxy-Kaelis.",
  [
    { text: "If you take a certified capture of this public attack, go to 66.", targetId: 66, label: "Capturer la preuve flagrante" },
    { text: "Si les autres élèves recadrent immédiatement Vael dans les réponses, va au 78.", targetId: 78, label: "Recadrage collectif par les élèves" }
  ],
  { serenity: 15, solidarity: 25, trust: 20 },
  "Poussés dans leurs retranchements, les harceleurs commettent souvent l'erreur fatale de s'exposer à découvert."
);

// 52
addStep(
  52,
  "La parenthèse de sérénité à l'infirmerie",
  "Module Médic-Éducatif • Chambre Calme",
  3,
  "Allongée dans une cabine insonorisée avec une vue imprenable sur les étoiles, tu as enfin pu dormir profondément. Ton biosenseur émotionnel est repassé au vert. Tu te lèves reposée, lucide, prête à défendre tes droits sans crainte.",
  [
    { text: "Si tu rejoins tes amis pour finaliser le dossier de signalement, va au 26.", targetId: 26, label: "Finaliser le dossier" },
    { text: "Si tu vas directement témoigner devant l'Officier Kroll, va au 70.", targetId: 70, label: "Témoigner devant Kroll" }
  ],
  { serenity: 30, solidarity: 10, trust: 20 },
  "Se reposer et retrouver ses forces physiques est indispensable avant d'aborder les démarches de résolution d'un conflit."
);

// 53
addStep(
  53,
  "Le retour épaulé en cours",
  "Amphithéâtre Galilée",
  3,
  "Soa, la médiatrice, t'accompagne jusqu'à la porte de l'amphithéâtre. Sa présence rassurante à tes côtés montre à tous que tu bénéficies d'un soutien institutionnel officiel. Tu t'assois à côté d'Élior qui te garde une place avec un grand sourire.",
  [
    { text: "Si tu participes activement au cours avec brio, va au 79.", targetId: 79, label: "Participation brillante" },
    { text: "Si tu prépares ton intervention pour l'heure de vie de classe, va au 80.", targetId: 80, label: "Préparer l'heure de classe" }
  ],
  { serenity: 20, solidarity: 25, trust: 25 },
  "Être accompagné par un médiateur lors du retour en classe sécurise la victime et dissuade les regards malveillants."
);

// 54
addStep(
  54,
  "Le soutien inconditionnel de la famille",
  "Cabine de Communication Sub-Spatiale",
  3,
  "L'hologramme de tes parents apparaît dans la cabine. En voyant ton visage décomposé, ta mère comprend tout de suite. Tu leur racontes tout, sans rien cacher. Ton père te dit d'une voix vibrante d'amour : « Lyra, nous sommes tellement fiers de toi. Ne laisse personne te faire croire que tu as fait une faute. Nous contactons la direction de la station immédiatement pour exiger ta protection. » Tu pleures, mais ce sont des larmes de soulagement.",
  [
    { text: "Si ce soutien familial te redonne une force immense, va au 26.", targetId: 26, label: "Force retrouvée grâce aux proches" },
    { text: "Si les parents saisissent le commandeur d'Oxy-Kaelis, va au 70.", targetId: 70, label: "Saisine du commandeur" }
  ],
  { serenity: 25, solidarity: 15, trust: 30, badge: "Bouclier Familial" },
  "L'amour et le soutien des parents constituent le rempart affectif le plus solide face aux violences scolaires."
);

// 55
addStep(
  55,
  "L'enfermement dans le mensonge",
  "Cabine de Repos Individuelle",
  3,
  "Tu as menti à tes parents en prétendant un simple coup de fatigue. Mais une fois la communication coupée, le sentiment de culpabilité te submerge. Tu es seule avec ton secret, ton terminal qui continue de vibrer et la peur du lendemain.",
  [
    { text: "Si tu te ravises et rappelles aussitôt tes parents pour leur dire la vérité, va au 54.", targetId: 54, label: "Rappeler et dire la vérité" },
    { text: "Si tu tentes de tenir seule sans en parler à personne, va au 81.", targetId: 81, label: "Tenir seule sans aide" }
  ],
  { serenity: -20, solidarity: -15, trust: -20 },
  "Garder le secret pour soi protège faussement l'agresseur et épuise la victime. Il faut toujours oser dire la vérité."
);

// 56
addStep(
  56,
  "L'entretien disciplinaire de Vael",
  "Bureau de la Direction Pédagogique",
  3,
  "Monsieur Chen a conduit Vael dans le bureau de l'Officier Kroll. À travers la cloison vitrée, tu vois Vael perdre toute sa superbe face aux journaux de connexion incontestables présentés par Madame Orla. L'illusion du harceleur intouchable s'effondre en quelques minutes.",
  [
    { text: "Si Kroll te convoque pour recueillir ta déposition sereine, va au 70.", targetId: 70, label: "Déposition sereine" },
    { text: "Si Vael tente d'accuser ses complices pour minimiser son rôle, va au 82.", targetId: 82, label: "Effondrement du groupe harceleur" }
  ],
  { serenity: 20, solidarity: 15, trust: 30 },
  "Confrontés aux preuves matérielles devant l'autorité, les harceleurs perdent leur arrogance et se rejettent souvent la faute les uns sur les autres."
);

// 57
addStep(
  57,
  "Le regard de défi impuissant",
  "Laboratoire d'Informatique",
  3,
  "Vael te jette un regard plein de haine en quittant la salle. Mais ce regard n'est plus effrayant : c'est celui d'un élève pris la main dans le sac, qui sait que son jeu est terminé. Élior te pose une main réconfortante sur l'épaule : « C'est fini pour lui, Lyra. »",
  [
    { text: "Si tu te concentres sur la réussite de ton exercice de navigation, va au 79.", targetId: 79, label: "Réussite de l'exercice" },
    { text: "Si tu prépares ton témoignage pour l'enquête officielle, va au 70.", targetId: 70, label: "Préparer son témoignage" }
  ],
  { serenity: 15, solidarity: 20, trust: 20 },
  "Quand l'agresseur est désarmé par l'autorité, ses menaces ne sont plus que des gesticulations sans pouvoir."
);

// 58
addStep(
  58,
  "Le traçage indiscutable du transfert de proximité",
  "Laboratoire d'Informatique",
  3,
  "En refusant le transfert malveillant, ton terminal a automatiquement consigné l'adresse matérielle MAC de l'émetteur : le poste #4 de la rangée de fond, où se trouve précisément Vael. Tu lèves immédiatement la main : « Monsieur Chen, je viens de recevoir une tentative de transfert non sollicité contenant un fichier diffamatoire depuis le poste 4. »",
  [
    { text: "Si Monsieur Chen constate le flagrant délit sur le champ, va au 56.", targetId: 56, label: "Flagrant délit constaté" },
    { text: "Si Vael tente d'éteindre son terminal en panique, va au 83.", targetId: 83, label: "Panique de Vael" }
  ],
  { serenity: 20, solidarity: 15, trust: 25, badge: "Flagrant Délit" },
  "Alerter l'enseignant immédiatement en situation de flagrant délit permet de figer les preuves matérielles sans contestation possible."
);

// 59
addStep(
  59,
  "Le choc émotionnel évité de justesse",
  "Laboratoire d'Informatique",
  3,
  "Tu as failli cliquer sur accepter, mais la main de Corin s'est posée sur ta souris : « Ne regarde pas ça, Lyra. C'est exactement ce qu'il cherche. Laisse-moi noter le code de son terminal. » Ce geste protecteur de ton camarade t'évite une humiliation inutile.",
  [
    { text: "Si tu remercies Corin et alertes le professeur avec lui, va au 58.", targetId: 58, label: "Alerter le professeur avec Corin" },
    { text: "Si tu reprends ton souffle avec reconnaissance, va au 17.", targetId: 17, label: "Reprendre son souffle" }
  ],
  { serenity: 15, solidarity: 25, trust: 15 },
  "Un témoin attentif peut physiquement et moralement protéger une victime en l'empêchant de s'exposer à nouveau aux contenus toxiques."
);

// 60
addStep(
  60,
  "Le dossier consolidé par les témoins",
  "Salle des Éclaireurs • Secteur 2",
  3,
  "Sylvan et Darek rédigent chacun une attestation sur l'honneur certifiant la supercherie et l'origine du trucage. Ton dossier comprend désormais : les captures horodatées, le rapport de suppression 3018, les logs de Madame Orla et deux témoignages d'élèves. C'est un dossier inattaquable.",
  [
    { text: "Si tu remets le dossier complet à la direction pour l'audience disciplinaire, va au 70.", targetId: 70, label: "Remise du dossier complet" },
    { text: "Si vous décidez de proposer une démarche de médiation réparatrice, va au 84.", targetId: 84, label: "Option médiation réparatrice" }
  ],
  { serenity: 25, solidarity: 30, trust: 30, badge: "Dossier Inattaquable" },
  "Un dossier solide et bien documenté garantit que l'institution prendra des mesures justes et proportionnées sans ambiguïté."
);

// 61
addStep(
  61,
  "L'écran noir sur toute la station",
  "Tous Terminaux • Oxy-Kaelis",
  3,
  "L'ordre de réquisition a été appliqué à la vitesse de la lumière. Tous les liens menant à la fausse vidéo renvoient désormais une page d'erreur : « CONTENU SUPPRIMÉ PAR DÉCISION JUDICIAIRE DE LA RÉGULATION SPATIALE ». Les élèves qui tentent d'y accéder comprennent instantanément que la plaisanterie a basculé dans l'infraction pénale.",
  [
    { text: "Si tu respires enfin en constatant la disparition complète du fichier, va au 85.", targetId: 85, label: "Disparition du contenu toxique" },
    { text: "Si tu participes à l'assemblée des délégués pour en tirer les leçons, va au 80.", targetId: 80, label: "Assemblée des délégués" }
  ],
  { serenity: 30, solidarity: 20, trust: 30, badge: "Nettoyage Numérique" },
  "La suppression rapide des contenus diffamatoires est essentielle pour stopper l'hémorragie émotionnelle de la victime."
);

// 62
addStep(
  62,
  "La neutralisation des copies physiques",
  "Coursive des Casiers",
  3,
  "Deux fidèles de Vael tentent de montrer la vidéo sur un mini-projecteur de poche près des casiers. Mais Élior et Corin s'interposent immédiatement avec fermeté : « Cette vidéo a été jugée illégale par la station. Si vous continuez à la diffuser, vous devenez complices d'un délit. Rangez ça. » Face à la détermination d'Élior, les deux élèves rangent leur appareil honteux.",
  [
    { text: "Si tu es touchée par la protection active de tes amis dans les coursives, va au 85.", targetId: 85, label: "Protection active des amis" },
    { text: "Si un surveillant intervient pour confisquer l'appareil, va au 70.", targetId: 70, label: "Confiscation par l'adulte" }
  ],
  { serenity: 20, solidarity: 30, trust: 25 },
  "La solidarité active des témoins sur le terrain coupe court aux tentatives de contournement des interdictions numériques."
);

// 63
addStep(
  63,
  "Le recadrage pédagogique et l'écoute bienveillante",
  "Centre des Serveurs ComNet",
  3,
  "Madame Orla te regarde droit dans les yeux : « Lyra, ton intention était de te défendre, mais la loi informatique protège tout le monde, y compris toi. Tu feras deux heures d'intérêt général à m'aider à auditer la sécurité du réseau. Maintenant, occupons-nous de ceux qui t'ont poussée à bout. » Tu acceptes la sanction avec respect car elle est juste.",
  [
    { text: "Si vous travaillez ensemble à la sécurisation des canaux étudiants, va au 70.", targetId: 70, label: "Sécurisation et enquête" },
    { text: "Si tu te sens valorisée par la confiance que t'accorde l'adulte, va au 44.", targetId: 44, label: "Confiance de l'adulte" }
  ],
  { serenity: 15, solidarity: 15, trust: 25 },
  "Une sanction éducative juste, assortie d'une écoute sincère, restaure l'alliance de confiance entre l'élève et l'institution."
);

// 64
addStep(
  64,
  "Le désarmement par les larmes de vérité",
  "Atelier Informatique",
  3,
  "Devant l'Officier Kroll, tu craques complètement et dévoiles tout : les nuits sans sommeil, le photomontage truqué, le sentiment de lynchage permanent. Kroll pose son carnet, adoucit sa voix bourrue et s'assoit en face de toi : « Respire, petite. Personne ne va t'exclure. Nous savons maintenant pourquoi tu as paniqué. C'est l'agression que tu subis qui est le problème, et nous allons y mettre bon ordre. »",
  [
    { text: "Si Kroll prend personnellement en main la protection de ta promotion, va au 70.", targetId: 70, label: "Protection par Kroll" },
    { text: "Si tu es reconduite en sécurité à l'infirmerie, va au 52.", targetId: 52, label: "Retour au calme à l'infirmerie" }
  ],
  { serenity: 15, solidarity: 10, trust: 30 },
  "Exprimer sa détresse avec authenticité permet aux figures d'autorité de comprendre la dynamique du harcèlement et de protéger la victime."
);

// 65
addStep(
  65,
  "L'impasse du silence obstiné",
  "Bureau de Sécurité • Sas Disciplinaire",
  3,
  "Par fierté et défiance, tu refuses de parler. Kroll n'a sous les yeux que le rapport d'intrusion informatique. Sans explications sur le cyber-harcèlement sous-jacent, la commission te sanctionne d'une exclusion temporaire de trois jours. Dans ta cabine, tu réalises avec effroi que ton mutisme a offert une victoire totale à Vael.",
  [
    { text: "Si tu te ressaisis et écris une lettre complète à la direction pour tout révéler, va au 86.", targetId: 86, label: "Lettre de vérité salvatrice" },
    { text: "Si tu t'enfonces dans la rancœur et l'isolement, va au 87.", targetId: 87, label: "Rancœur et isolement" }
  ],
  { serenity: -30, solidarity: -25, trust: -30 },
  "Le mutisme est le meilleur allié du harceleur : en refusant d'expliquer le contexte, la victime prend seule les sanctions destinées aux coupables."
);

// 66
addStep(
  66,
  "L'identification irréfutable de Spectre-Zero",
  "Centre des Serveurs • Écran Principal",
  3,
  "Les preuves concordantes parlent d'elles-mêmes : numéro de série du terminal VK-889, adresse MAC interceptée au laboratoire, logs de connexion nocturnes. Madame Orla clique sur 'Démasquer l'utilisateur'. Le visage de Vael s'affiche en grand sur l'écran d'audit avec la mention : « TITULAIRE DU COMPTE SPECTRE-ZERO ». L'anonymat est brisé.",
  [
    { text: "Si Madame Orla transmet le dossier au Conseil de Discipline d'Oxy-Kaelis, va au 88.", targetId: 88, label: "Transmission au Conseil de Discipline" },
    { text: "Si Soa propose une procédure de Réparation Restaurative avant sanction lourde, va au 84.", targetId: 84, label: "Voie de la réparation restaurative" }
  ],
  { serenity: 30, solidarity: 25, trust: 35, badge: "Masque Tombé" },
  "Faire tomber le masque de l'anonymat numérique transforme l'agresseur en citoyen responsable devant répondre de ses actes devant la loi."
);

// 67
addStep(
  67,
  "L'hémorragie des membres du canal clandestin",
  "Réseau ComNet Étudiant",
  3,
  "Après la prise de position courageuse de Darek, c'est l'effondrement : en deux heures, plus de soixante élèves quittent le canal Oxy-Leaks. Plusieurs postent des messages de soutien à Lyra avant de se désabonner : « Courage Lyra », « Stop à ces mèmes nuls ». Vael se retrouve pratiquement seul sur son propre canal.",
  [
    { text: "Si cette solidarité spontanée redonne un élan magnifique à ta scolarité, va au 89.", targetId: 89, label: "Élan de solidarité magnifique" },
    { text: "Si vous lancez la création d'un canal d'entraide officiel, va au 77.", targetId: 77, label: "Créer un canal d'entraide" }
  ],
  { serenity: 25, solidarity: 35, trust: 25, badge: "Vague Solidaire" },
  "L'effet de meute peut s'inverser très rapidement dès lors que des figures positives osent montrer la voie du respect."
);

// 68
addStep(
  68,
  "Le soutien fraternel face à la dernière provocation",
  "Cafétéria des Synthèses",
  3,
  "Quand Vael tente d'intimider Darek pour avoir parlé, Élior, Naël et Corin se lèvent en même temps et viennent entourer Darek avec calme. Élior regarde Vael : « C'est terminé, Vael. Plus personne n'a peur de tes écrans ici. » Vael baisse les yeux et s'en va sans dire un mot. L'emprise est brisée.",
  [
    { text: "Si tu rejoins la table pour remercier tous tes camarades, va au 89.", targetId: 89, label: "Table de la fraternité" },
    { text: "Si vous préparez ensemble l'heure de médiation collective, va au 80.", targetId: 80, label: "Préparer la médiation" }
  ],
  { serenity: 25, solidarity: 35, trust: 25 },
  "La protection mutuelle entre élèves décourage définitivement les tentatives d'intimidation physique ou verbale."
);

// 69
addStep(
  69,
  "La préparation du Conseil d'Éthique",
  "Salle des Éclaireurs",
  3,
  "Avec Soa et Madame Orla, vous mettez en forme votre plaidoyer pour l'audience générale de la station. Il ne s'agit pas seulement de punir Vael, mais d'instaurer une vraie culture du respect sur les réseaux de la station pour toutes les promotions futures.",
  [
    { text: "Si tu rédiges ton discours avec conviction et clarté, va au 90.", targetId: 90, label: "Rédiger le plaidoyer" },
    { text: "Si tu demandes à Élior et Naël de témoigner à tes côtés, va au 91.", targetId: 91, label: "Témoignages conjoints" }
  ],
  { serenity: 20, solidarity: 30, trust: 30, badge: "Plaidoyer Citoyen" },
  "Dépasser la plainte individuelle pour proposer des réformes collectives est le signe d'un engagement citoyen exemplaire."
);

// 70
addStep(
  70,
  "L'ouverture officielle de l'instruction disciplinaire",
  "Poste de Commandement Pédagogique",
  3,
  "L'Officier Kroll rassemble l'ensemble des éléments. Devant la gravité des infractions (usurpation d'image, cyber-harcèlement en meute, diffamation organisée), le Commandeur de la station ordonne la tenue d'un Conseil Extraordinaire de la Promotion 6.",
  [
    { text: "Si tu te prépares à assister à l'audience avec le soutien de tes proches, va au 92.", targetId: 92, label: "Préparation à l'audience" },
    { text: "Si tu participes aux entretiens préalables de la méthode de préoccupation partagée, va au 84.", targetId: 84, label: "Préoccupation partagée préalable" }
  ],
  { serenity: 25, solidarity: 25, trust: 35 },
  "La solennité des instances disciplinaires rappelle à chacun que l'espace numérique n'est pas une zone de non-droit."
);

// 71
addStep(
  71,
  "La confrontation officielle dans le bureau de Kroll",
  "Bureau de Sécurité",
  3,
  "Vael entre dans le bureau avec son habituel air arrogant, mais lorsqu'il aperçoit Madame Orla et l'écran projetant ses propres métadonnées personnelles, son visage se décompose. « Monsieur Kroll... c'était juste un défi entre copains... je voulais pas faire de mal... » Le mythe du rebelle virtuel s'évapore instantanément.",
  [
    { text: "Si Kroll lui rappelle fermement les sanctions pénales encourues pour cyber-harcèlement, va au 88.", targetId: 88, label: "Rappel des sanctions pénales" },
    { text: "Si Vael commence à prendre conscience de la gravité de ses actes, va au 84.", targetId: 84, label: "Début de prise de conscience" }
  ],
  { serenity: 20, solidarity: 15, trust: 35 },
  "Face à la réalité des sanctions légales, les excuses du type 'c'était juste pour rire' ne tiennent plus une seule seconde."
);

// 72
addStep(
  72,
  "La respiration retrouvée de toute la promotion",
  "Anneau de Vie • Oxy-Kaelis",
  3,
  "La suspension publique du canal envoie un signal puissant : sur Oxy-Kaelis, personne ne sera abandonné aux loups du réseau. Les discussions dans les coursives redeviennent joyeuses, légères, débarrassées de la terreur du mauvais buzz.",
  [
    { text: "Si tu ressens une paix profonde en te promenant dans la station, va au 85.", targetId: 85, label: "Paix profonde retrouvée" },
    { text: "Si tu rejoins le groupe de travail pour la Charte Numérique, va au 77.", targetId: 77, label: "Groupe de travail Charte" }
  ],
  { serenity: 30, solidarity: 25, trust: 30 },
  "Assainir le climat numérique rétablit immédiatement la sérénité dans les relations humaines réelles."
);

// 73
addStep(
  73,
  "Le désarmement des complices isolés",
  "Coursive Bêta",
  3,
  "Privés de leur canal et de leur leader, les quelques suiveurs qui tentaient encore de fanfaronner se heurtent à l'indifférence totale des autres élèves. Plus personne ne rit de leurs allusions. Sans public, le harcèlement s'éteint comme une flamme privée d'oxygène.",
  [
    { text: "Si tu constates la fin définitive des quolibets, va au 85.", targetId: 85, label: "Fin définitive des attaques" },
    { text: "Si tu te concentres sur ton avenir de pilote, va au 79.", targetId: 79, label: "Cap vers l'avenir" }
  ],
  { serenity: 25, solidarity: 25, trust: 25 },
  "Priver les agresseurs de spectateurs complices est la méthode la plus sûre pour éteindre toute dynamique de harcèlement."
);

// 74
addStep(
  74,
  "Le projet 'Oxy-Bienveillance' en classe",
  "Salle Polyvalente • Module Culturel",
  3,
  "Avec l'accord du professeur principal, tu animes avec Élior un atelier de dix minutes : 'Comment faire du ComNet un espace d'entraide pour réussir ensemble nos examens de vol'. Vingt-cinq élèves adhèrent immédiatement et signent le manifeste initial.",
  [
    { text: "Si cette initiative devient le modèle officiel de la station, va au 93.", targetId: 93, label: "Modèle officiel de station" },
    { text: "Si tu prépares la grande restitution au Conseil, va au 90.", targetId: 90, label: "Préparer la restitution" }
  ],
  { serenity: 30, solidarity: 35, trust: 30, badge: "Leader Positif" },
  "Remplacer un espace toxique par une alternative constructive mobilise l'énergie de la jeunesse vers le bien commun."
);

// 75
addStep(
  75,
  "L'accueil des excuses et la fermeté sur les principes",
  "Hall des Pas Perdus",
  3,
  "Deux élèves viennent timidement vers toi : « Lyra, on est désolés d'avoir partagé le mème. On a été bêtes, on ne voulait pas te blesser. » Tu les écoutes avec calme : « J'accepte vos excuses. Mais sachez que derrière un écran, un partage blesse autant qu'une insulte directe. J'espère que vous vous en souviendrez la prochaine fois. » Les deux élèves hochent la tête, soulagés mais marqués.",
  [
    { text: "If you welcome their step while demanding true reparation, go to 84.", targetId: 84, label: "Poursuivre vers la réparation" },
    { text: "Si tu rejoins tes amis avec fierté, va au 89.", targetId: 89, label: "Fierté partagée" }
  ],
  { serenity: 20, solidarity: 25, trust: 25 },
  "Accepter les excuses sans minimiser la gravité de l'acte permet une véritable réintégration éducative."
);

// ==========================================
// ACTE 4 : LE CONSEIL D'ÉTHIQUE & LES TROIS DÉNOUEMENTS (Étapes 76 à 100)
// ==========================================

// 76
addStep(
  76,
  "Le triomphe de la vérité dans l'Amphithéâtre",
  "Amphithéâtre Galilée",
  4,
  "L'Amphithéâtre est comble. Devant tous les élèves réunis et l'équipe pédagogique, les faits sont exposés sans passion mais avec une clarté limpide. Le faux montage est définitivement déconstruit, les responsabilités établies, et ton courage salué par tous.",
  [
    { text: "Si tu te prépares pour la signature de la Charte de Confiance, va au 94.", targetId: 94, label: "Vers la Charte de Confiance" },
    { text: "Si tu t'avances vers la Fin Lumineuse, va au 98.", targetId: 98, label: "Vers la Fin Lumineuse" }
  ],
  { serenity: 35, solidarity: 35, trust: 35 },
  "La reconnaissance solennelle de la vérité restaure intégralement l'honneur et l'estime de la personne harcelée."
);

// 77
addStep(
  77,
  "La rédaction de la Charte Numérique d'Oxy-Kaelis",
  "Salle des Éclaireurs • Secteur 3",
  4,
  "Autour d'une table holographique, élèves, médiateurs et professeurs rédigent ensemble les articles de la Charte Numérique : respect absolu de l'image d'autrui, interdiction des mèmes humiliants, obligation de modération, sanctuaire de repos la nuit avec droit à la déconnexion.",
  [
    { text: "Si cette charte est soumise au vote général de la station, va au 94.", targetId: 94, label: "Vote de la Charte" },
    { text: "Si tu t'élances vers la Fin Lumineuse, va au 98.", targetId: 98, label: "Vers la Fin Lumineuse" }
  ],
  { serenity: 35, solidarity: 40, trust: 35, badge: "Bâtisseuse de Charte" },
  "Rédiger collectivement les règles de vie numérique garantit leur appropriation et leur respect par l'ensemble des élèves."
);

// 78
addStep(
  78,
  "Le front commun des élèves bienveillants",
  "Canal Public d'Information",
  4,
  "Sous le commentaire amer de Vael, plus de trente réponses d'élèves fusent instantanément : « Arrête Vael », « Ton comportement est indigne d'Oxy-Kaelis », « Respecte Lyra et respecte-toi ». Devant cette muraille de dignité collective, Vael supprime lui-même son message en moins de deux minutes.",
  [
    { text: "Si cette démonstration de solidarité marque la fin de l'influence toxique, va au 85.", targetId: 85, label: "Fin de l'influence toxique" },
    { text: "Si tu te diriges vers la Fin Lumineuse, va au 98.", targetId: 98, label: "Vers la Fin Lumineuse" }
  ],
  { serenity: 30, solidarity: 40, trust: 30 },
  "Lorsque les témoins s'expriment en nombre pour défendre la victime, l'agresseur perd immédiatement tout pouvoir de nuisance."
);

// 79
addStep(
  79,
  "Le vol parfait dans le simulateur",
  "Simulateur de Navigation Orbitale",
  4,
  "Aux commandes du simulateur de vol orbital, libérée de la pression toxique des écrans, tu réalises un amarrage parfait au millimètre près sous les acclamations de ton instructeur. Tu prouves à tous, et d'abord à toi-même, que ta valeur professionnelle n'a jamais dépendu des calomnies du ComNet.",
  [
    { text: "Si tu partages cette victoire avec tes amis au réfectoire, va au 89.", targetId: 89, label: "Partage de victoire" },
    { text: "Si tu marches fièrement vers la Fin Lumineuse, va au 98.", targetId: 98, label: "Vers la Fin Lumineuse" }
  ],
  { serenity: 35, solidarity: 30, trust: 30, badge: "Pilote d'Élite" },
  "Retrouver sa concentration et s'épanouir dans ses passions est la plus belle des revanches sur le harcèlement."
);

// 80
addStep(
  80,
  "L'Heure de Vie de Classe réparatrice",
  "Amphithéâtre Galilée",
  4,
  "Animée par Madame Orla et la médiatrice Soa, l'Heure de Vie de Classe permet d'aborder sans fard le fonctionnement du ComNet. Les élèves témoignent de ce qu'ils ont ressenti, des pressions pour 'liker', de la peur d'être exclus. C'est un moment de catharsis collective qui ressoude la promotion entière.",
  [
    { text: "Si cette prise de conscience collective débouche sur la Fin Lumineuse, va au 98.", targetId: 98, label: "Vers la Fin Lumineuse" },
    { text: "Si tu préfères maintenir une distance prudente avec les réseaux, va au 95.", targetId: 95, label: "Vers la Fin Neutre" }
  ],
  { serenity: 25, solidarity: 35, trust: 30 },
  "La parole libérée dans un cadre régulé par des adultes permet de guérir les blessures collectives créées par le cyber-harcèlement."
);

// 81
addStep(
  81,
  "La chute dans la spirale de l'angoisse",
  "Cabine de Repos Individuelle",
  4,
  "En refusant d'alerter les adultes et en restant prostrée devant ton écran qui continue de diffuser des moqueries, ton état s'est dégradé de jour en jour. Tu ne manges plus, ne sors plus de ta cabine, et ton biosenseur s'affole en détresse émotionnelle sévère.",
  [
    { text: "Si dans un sursaut ultime tu composes le code d'urgence 3018, va au 20.", targetId: 20, label: "Appel d'urgence ultime" },
    { text: "Si tu t'abandonnes au découragement le plus complet, va au 100.", targetId: 100, label: "Vers la Fin Obscure" }
  ],
  { serenity: -35, solidarity: -30, trust: -35 },
  "S'enfermer seul face à la haine en ligne conduit à l'effondrement psychologique. Il faut briser le silence à tout prix."
);

// 82
addStep(
  82,
  "La désintégration du groupe de harceleurs",
  "Bureau de Sécurité",
  4,
  "Paniqué, Vael tente de rejeter la faute sur les élèves qui ont partagé le mème : « C'est eux qui ont insisté, moi j'ai juste fait le montage pour rigoler ! » Entendant cela, ses anciens complices se retournent contre lui avec fureur. Le groupe se disloque sous les yeux de Kroll, illustrant la totale absence de loyauté entre harceleurs.",
  [
    { text: "Si tu constates que leur prétendu pouvoir n'était qu'un château de cartes, va au 88.", targetId: 88, label: "Effondrement du château de cartes" },
    { text: "Si tu t'avances vers la Fin Lumineuse, va au 98.", targetId: 98, label: "Vers la Fin Lumineuse" }
  ],
  { serenity: 25, solidarity: 20, trust: 30 },
  "La cohésion des harceleurs est illusoire : dès que les conséquences arrivent, chacun tente de sauver sa peau au détriment des autres."
);

// 83
addStep(
  83,
  "La fin piteuse du secret de Vael",
  "Laboratoire d'Informatique",
  4,
  "En essayant d'éteindre son écran pour cacher son envoi, Vael fait tomber son terminal au sol avec fracas. Monsieur Chen s'avance, ramasse l'appareil et constate le fichier en cours d'émission. Le flagrant délit est irrévocable.",
  [
    { text: "Si Monsieur Chen suspend immédiatement la session de Vael et l'envoie en direction, va au 56.", targetId: 56, label: "Envoi en direction" },
    { text: "Si tu savoures ce dénouement juste et mérité, va au 79.", targetId: 79, label: "Dénouement juste" }
  ],
  { serenity: 20, solidarity: 15, trust: 25 },
  "La précipitation et la panique finissent toujours par trahir les comportements malveillants."
);

// 84
addStep(
  84,
  "Le protocole de médiation restaurative de Pikas",
  "Module de Médiation • Espace Neutre",
  4,
  "Selon la méthode de la préoccupation partagée, Soa et un éducateur rencontrent individuellement chaque élève impliqué, sans accusations frontales mais en les interrogeant sur leur inquiétude pour Lyra. Vael, touché dans sa sensibilité enfouie, finit par fondre en larmes : il confie sa propre peur de ne pas être accepté et reconnaît la monstruosité de son acte. Il s'engage formellement à réparer en participant à la campagne de prévention.",
  [
    { text: "Si cette démarche réparatrice transforme durablement les comportements, va au 98.", targetId: 98, label: "Vers la Fin Lumineuse" },
    { text: "Si tu acceptes les excuses tout en préférant garder une distance saine, va au 99.", targetId: 99, label: "Vers la Fin Neutre" }
  ],
  { serenity: 35, solidarity: 40, trust: 35, badge: "Médiation Réparatrice" },
  "La méthode Pikas de préoccupation partagée responsabilise les auteurs sans les braquer, permettant une véritable prise de conscience et un arrêt durable du harcèlement."
);

// 85
addStep(
  85,
  "La reconquête de l'espace commun",
  "Coupole Panoramique d'Observation",
  4,
  "Debout devant la grande verrière qui donne sur la Terre bleue, tu savoures la paix retrouvée. Élior, Naël et Corin te rejoignent. Plus aucun regard torve, plus aucune vibration suspecte dans ta poche. Tu as traversé la tempête numérique et tu en sors grandie, entourée d'amis fidèles.",
  [
    { text: "Si tu t'avances vers la célébration finale de la Fin Lumineuse, va au 98.", targetId: 98, label: "Vers la Fin Lumineuse" },
    { text: "Si tu choisis d'adopter un mode de vie plus déconnecté à l'avenir, va au 95.", targetId: 95, label: "Vers la Fin Neutre" }
  ],
  { serenity: 35, solidarity: 35, trust: 30 },
  "Surmonter le cyber-harcèlement grâce à la vérité et à la solidarité forge un sentiment de sécurité et d'estime de soi inaltérable."
);

// 86
addStep(
  86,
  "La lettre de vérité envoyée à temps",
  "Cabine de Repos Individuelle",
  4,
  "Dans un sursaut de survie, tu rédiges une lettre circonstanciée de quatre pages au Conseil de Sécurité d'Oxy-Kaelis, joignant toutes les captures d'écran que tu avais conservées. En découvrant la réalité de l'agression que tu subissais, le Commandeur annule ta sanction disciplinaire et diligente une enquête prioritaire sur le canal Oxy-Leaks.",
  [
    { text: "Si la justice est enfin rétablie grâce à ton courage d'écrire, va au 70.", targetId: 70, label: "Justice rétablie" },
    { text: "Si tu t'élances vers la Fin Neutre de ton aventure, va au 99.", targetId: 99, label: "Vers la Fin Neutre" }
  ],
  { serenity: 15, solidarity: 10, trust: 25 },
  "Il n'est jamais trop tard pour dire la vérité. Un écrit factuel et posé permet toujours de rétablir la justice."
);

// 87
addStep(
  87,
  "L'escalade désespérée vers le point de non-retour",
  "Sas de Décompression Abandonné",
  4,
  "Rongée par l'amertume et convaincue que personne ne peut comprendre ta douleur, tu tentes une dernière action de piratage désespérée pour effacer tous les serveurs de communication d'Oxy-Kaelis. L'attaque déclenche l'alarme rouge générale de la station. Cette fois, la rupture avec la communauté spatiale est définitive.",
  [
    { text: "Si tu franchis les portes de la Fin Obscure, va au 100.", targetId: 100, label: "Vers la Fin Obscure" }
  ],
  { serenity: -50, solidarity: -50, trust: -50 },
  "La vengeance aveugle détruit la victime et donne raison à ceux qui voulaient l'abattre."
);

// 88
addStep(
  88,
  "Le verdict exemplaire du Conseil de Discipline",
  "Hémicycle Central • Oxy-Kaelis",
  4,
  "Devant le Conseil réuni, Vael est condamné à un mois de suspension du réseau ComNet, à quarante heures de travaux de réhabilitation d'intérêt général à la maintenance et à un suivi éducatif renforcé. Le Commandeur déclare solennellement : « Celui qui utilise la technologie pour persécuter un camarade déshonore l'humanité spatiale. »",
  [
    { text: "Si ce verdict pose un cadre protecteur définitif pour toute la station, va au 94.", targetId: 94, label: "Cadre protecteur posé" },
    { text: "Si tu rejoins la Fin Lumineuse de ton parcours, va au 98.", targetId: 98, label: "Vers la Fin Lumineuse" }
  ],
  { serenity: 35, solidarity: 30, trust: 40, badge: "Justice Rendue" },
  "La sanction éducative et réparatrice met un point final au sentiment d'impunité et protège durablement la communauté."
);

// 89
addStep(
  89,
  "La fraternité scellée du Réfectoire",
  "Réfectoire des Synthèses",
  4,
  "Ce midi-là, la table où tu es assise avec Élior, Naël, Corin et Darek est la plus vivante du réfectoire. Des dizaines d'élèves viennent vous saluer, échanger des rires francs et partager leurs projets. Le mur invisible est tombé, le venin des mots s'est dissipé, et les écrans ont retrouvé leur juste place d'outils bienveillants.",
  [
    { text: "Si tu t'avances vers la Fin Lumineuse, va au 98.", targetId: 98, label: "Vers la Fin Lumineuse" },
    { text: "Si tu rejoins la Fin Neutre, va au 99.", targetId: 99, label: "Vers la Fin Neutre" }
  ],
  { serenity: 40, solidarity: 45, trust: 35, badge: "Table Fraternelle" },
  "Le bonheur partagé dans le monde réel est la réponse la plus éclatante à toutes les violences virtuelles."
);

// 90
addStep(
  90,
  "Le discours d'ouverture au grand forum",
  "Amphithéâtre Galilée",
  4,
  "Devant les trois cents élèves de la promotion, tu prends la parole sans trembler : « Le ComNet ne doit pas être une arène où l'on jette des boucs émissaires pour amuser la galerie. Il doit être le lien qui nous unit au milieu du vide spatial. Nous avons tous le pouvoir de dire stop d'un simple clic. » Une ovation debout accueille tes paroles.",
  [
    { text: "Si ton discours inspire l'adoption unanime de la Charte, va au 94.", targetId: 94, label: "Adoption unanime de la Charte" },
    { text: "Si tu te diriges vers la Fin Lumineuse, va au 98.", targetId: 98, label: "Vers la Fin Lumineuse" }
  ],
  { serenity: 45, solidarity: 45, trust: 40, badge: "Voix Inspirante" },
  "Le courage de témoigner publiquement transforme une épreuve personnelle en leçon d'émancipation collective."
);

// 91
addStep(
  91,
  "Le témoignage croisé des quatre rescapés",
  "Amphithéâtre Galilée",
  4,
  "Élior parle des bousculades physiques, Naël du rejet et de l'isolement, Corin des quolibets blessants, et toi du harcèlement numérique. L'assemblée écoute dans un silence recueilli. Les quatre formes de harcèlement scolaire sont mises à nu, privant définitivement les harceleurs de leurs excuses favorites.",
  [
    { text: "Si ce front des quatre héros conduit directement à la Fin Lumineuse, va au 98.", targetId: 98, label: "Vers la Fin Lumineuse" }
  ],
  { serenity: 45, solidarity: 50, trust: 45, badge: "Quatuor Bouclier" },
  "Articuler les différentes formes de harcèlement permet une compréhension globale et durable du phénomène de meute."
);

// 92
addStep(
  92,
  "La sérénité devant les juges de bord",
  "Hémicycle Central",
  4,
  "Assise entre tes parents en hologramme et la médiatrice Soa, tu réponds avec une précision remarquable aux questions de la commission. Tu ne montres ni esprit de vengeance ni faiblesse, seulement la vérité des faits. Les membres du conseil hochent la tête avec un profond respect.",
  [
    { text: "Si tu rejoins la Fin Lumineuse, va au 98.", targetId: 98, label: "Vers la Fin Lumineuse" },
    { text: "Si tu préfères la Fin Neutre, va au 99.", targetId: 99, label: "Vers la Fin Neutre" }
  ],
  { serenity: 35, solidarity: 35, trust: 45 },
  "La force de la vérité calme impose le respect de tous les adultes et garantit une justice équitable."
);

// 93
addStep(
  93,
  "L'institutionnalisation des Sentinelles du Net",
  "Conseil Pédagogique",
  4,
  "Le projet initié avec tes amis est officiellement adopté par la direction : chaque année, des élèves volontaires seront formés comme 'Sentinelles du Net' pour modérer les canaux de promo, écouter les victimes et prévenir les débordements avant qu'ils ne dégénèrent. Tu es nommée première Présidente des Sentinelles.",
  [
    { text: "Si tu franchis le pas vers la Fin Lumineuse, va au 98.", targetId: 98, label: "Vers la Fin Lumineuse" }
  ],
  { serenity: 50, solidarity: 50, trust: 50, badge: "Sentinelle en Chef" },
  "Pérenniser des dispositifs d'élèves sentinelles garantit la protection des futures générations d'élèves."
);

// 94
addStep(
  94,
  "La signature solennelle de la Charte de Confiance",
  "Hémicycle Central • Séance Plénière",
  4,
  "En présence de l'équipage au grand complet, chaque élève de Cycle Alpha appose sa signature biométrique au bas de la grande Charte de Confiance du ComNet. Vael lui-même, sincèrement transformé par sa sanction réparatrice, vient signer sous tes yeux avant de te tendre la main dans un geste de respect silencieux.",
  [
    { text: "Si tu termines ton aventure dans la gloire de la Fin Lumineuse, va au 98.", targetId: 98, label: "Vers la Fin Lumineuse" }
  ],
  { serenity: 50, solidarity: 50, trust: 50, badge: "Pacte de Confiance Scellé" },
  "La réconciliation sincère scellée par un pacte partagé est l'aboutissement le plus noble de toute démarche éducative."
);

// 95 - Transition
addStep(
  95,
  "Le sanctuaire de la déconnexion vigilante",
  "Cabine de Repos Individuelle",
  4,
  "Tu as fait le choix de réduire drastiquement ton usage du ComNet : le terminal reste éteint en dehors des heures de cours, et tu as supprimé toutes les applications de messagerie non officielles. Tu as retrouvé le calme et le sommeil, mais au prix d'une certaine distance avec la vie sociale de la station.",
  [
    { text: "Si tu rejoins la Fin Neutre de ton parcours, va au 99.", targetId: 99, label: "Vers la Fin Neutre" }
  ],
  { serenity: 20, solidarity: 10, trust: 20 },
  "La déconnexion stricte protège efficacement mais peut isoler la victime de la vie collective de sa promotion."
);

// 96 - Transition
addStep(
  96,
  "La paix prudente sous haute surveillance",
  "Coursive Centrale",
  4,
  "Les serveurs d'Oxy-Kaelis sont désormais sous filtrage strict et les canaux sauvages sont systématiquement démantelés. Le calme règne sur les réseaux, mais l'ambiance reste un peu méfiante et formelle entre les élèves.",
  [
    { text: "Si tu t'orientes vers la Fin Lumineuse, va au 98.", targetId: 98, label: "Vers la Fin Lumineuse" },
    { text: "Si tu préfères la Fin Neutre, va au 99.", targetId: 99, label: "Vers la Fin Neutre" }
  ],
  { serenity: 25, solidarity: 20, trust: 30 },
  "La surveillance technique sécurise le climat mais ne remplace pas une adhésion du cœur aux valeurs de respect."
);

// 97 - Transition
addStep(
  97,
  "L'insigne d'honneur des Éclaireurs de la Toile",
  "Passerelle de Commandement",
  4,
  "Le Commandeur en chef de la station Oxy-Kaelis te remet officiellement l'Insigne d'Honneur des Éclaireurs de la Toile pour ton sang-froid, ton refus de la violence illégale et ta contribution majeure à la sécurité numérique de la communauté spatiale.",
  [
    { text: "Si tu rejoins le dénouement de la Fin Lumineuse, va au 98.", targetId: 98, label: "Vers la Fin Lumineuse" }
  ],
  { serenity: 50, solidarity: 50, trust: 50, badge: "Éclaireuse d'Honneur" },
  "La reconnaissance officielle par les plus hautes autorités valide la victoire du courage éthique sur la lâcheté numérique."
);

// ==========================================
// LES TROIS FINS MORALES (98, 99, 100)
// ==========================================

// 98 - FIN LUMINEUSE
addStep(
  98,
  "FIN LUMINEUSE : Dans la Clarté du ComNet & Le Pacte Fraternel",
  "Coupole Panoramique des Éclaireurs • Oxy-Kaelis",
  4,
  "FIN LUMINEUSE. Le cyber-harcèlement et la lâcheté des attaques numériques ont été totalement terrassés à bord de la Station Orbitale Oxy-Kaelis ! Grâce à ton sang-froid exemplaire, à ton refus absolu de céder à la cyber-vengeance et au réflexe salutaire de figer les preuves, tu as permis à l'institution et aux pairs bienveillants de faire triompher la justice. Le canal clandestin d'humiliation a été démantelé, l'anonymat de Vael est tombé, et une véritable médiation restaurative a permis aux agresseurs de prendre conscience de la gravité de leurs actes et de s'engager dans la réparation. Entourée d'Élior, Naël, Corin et de dizaines de camarades désormais unis, tu contemples les anneaux étincelants de la station spatiale depuis la verrière panoramique. La Charte de Confiance du ComNet garantit désormais à chaque recrue le respect de son image, le droit sacré à la déconnexion et la bienveillance des ondes. Tu as prouvé la plus noble des leçons : face à la tempête des écrans, ce n'est pas en alimentant la haine que l'on se libère, mais en brandissant la vérité avec le bouclier solidaire de la communauté.",
  [],
  { serenity: 50, solidarity: 50, trust: 50, badge: "Bouclier d'Or du ComNet" },
  "Félicitations ! Tu as su déjouer le piège de la meute numérique en conservant les preuves, en refusant la surenchère illégale et en mobilisant les tiers de confiance pour bâtir une culture pérenne du respect en ligne.",
  "light"
);

// 99 - FIN NEUTRE
addStep(
  99,
  "FIN NEUTRE : Le Terminal Éteint & La Paix Hors-Ligne",
  "Cabine de Repos Individuelle • Sas 14-B",
  4,
  "FIN NEUTRE. En choisissant d'éteindre définitivement ton terminal ComNet en dehors des cours obligatoires, en bloquant toutes les notifications et en te tenant à l'écart de tous les groupes d'élèves, les attaques directes de Spectre-Zero ont fini par s'éteindre d'elles-mêmes. Faute d'alimenter la polémique et face à ton absence totale des réseaux, les harceleurs ont tourné leur attention vers d'autres sujets. Tu as sauvé ton sommeil et tes résultats scolaires en te réfugiant dans un ermitage numérique strict. Mais cette paix a un goût amer : tu ne participes plus aux projets collectifs, tu ignores les réjouissances de ta promotion et tu as appris à te méfier de chaque écran. La station Oxy-Kaelis reste pour toi un lieu où l'on survit en se déconnectant du monde plutôt qu'en y rayonnant avec confiance.",
  [],
  { serenity: 10, solidarity: -15, trust: -10, badge: "Retrait Prudent Hors-Ligne" },
  "Bilan : Éteindre son terminal et fuir les réseaux protège des attaques immédiates mais prive la victime des opportunités sociales et laisse les agresseurs impunis." ,
  "neutral"
);

// 100 - FIN OBSCURE
addStep(
  100,
  "FIN OBSCURE : Le Naufrage de la Cyber-Guerre & L'Exclusion Conjointe",
  "Sas de Rapatriement Terrestre • Niveau Inférieur",
  4,
  "FIN OBSCURE. Piégée dans l'escalade de la haine en ligne, emportée par la tentation d'une contre-attaque informatique illégale ou brisée par un silence obstiné qui t'a isolée de toute aide, la situation a basculé dans le désastre. Ton script de piratage a déclenché l'alerte de sécurité majeure de la station, ou tes échanges d'insultes publiques ont conduit la direction à te considérer comme co-responsable d'un trouble grave à l'ordre d'Oxy-Kaelis. Ton biosenseur émotionnel s'est effondré dans une détresse profonde, et le Conseil de Sécurité a signé ton ordre de rapatriement immédiat vers la Terre. Alors que le sas de la navette se referme dans un grincement d'acier glacial, tu regardes s'éloigner les étoiles avec un sentiment d'injustice déchirant. Cette douloureuse aventure démontre la règle d'or du monde numérique : la cyber-vengeance et le silence solitaire ne mènent qu'à la destruction mutuelle ; seule la préservation méthodique des preuves, l'alerte aux adultes référents et le recours à la loi permettent de terrasser les monstres du réseau.",
  [],
  { serenity: -50, solidarity: -50, trust: -50, badge: "Naufrage dans la Toile" },
  "Bilan : Répondre au cyber-harcèlement par le piratage, l'escalade d'insultes ou le mutisme isole la victime et la transforme en coupable aux yeux du règlement. Face au harcèlement en ligne, seule la voie légale et l'accompagnement des tiers sauvent.",
  "dark"
);

// Generation to file
const fileContent = `import type { StoryStep } from '../types/story.ts';

export const STORY_STEPS_TOME_4: Record<number, StoryStep> = ${JSON.stringify(tome4Steps, null, 2)};
`;

fs.writeFileSync('src/data/storyDataTome4.ts', fileContent, 'utf-8');
console.log('Successfully generated src/data/storyDataTome4.ts with 100 steps!');
