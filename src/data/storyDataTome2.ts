import type { StoryStep } from '../types/story.ts';

export const STORY_STEPS_TOME_2: Record<number, StoryStep> = {
  "1": {
    "id": 1,
    "title": "Le plateau rejeté au Réfectoire des Synthèses",
    "location": "Réfectoire des Synthèses • Secteur B",
    "act": 1,
    "text": "Ton plateau de nutriments en mains, tu cherches une place dans le vaste Réfectoire d'Oxy-Kaelis où résonne le bourdonnement des réacteurs. Tu aperçois une place libre à la table de ta classe de Cycle Alpha, à côté de Kaelen et Darek. Mais dès que tu t'approches, Kaelen pose délibérément ses jambes et son sac de cours sur la banquette. « C'est complet ici, Naël », lance-t-il avec un rictus narquois. Autour de lui, Darek et Mira éclatent de rire en détournant le regard. Un silence gêné s'installe parmi les autres élèves.",
    "choices": [
      {
        "text": "Si tu décides de chercher une autre place à l'écart pour éviter d'attirer l'attention, va au 2.",
        "targetId": 2,
        "label": "S'éloigner discrètement"
      },
      {
        "text": "Si tu répliques fermement qu'il y a de la place et demandes calmement de t'asseoir, va au 3.",
        "targetId": 3,
        "label": "Faire valoir sa place"
      }
    ],
    "statsImpact": {
      "serenity": -10,
      "solidarity": -5,
      "trust": 0
    },
    "pedagogicalNote": "Le rejet visible à la cantine ou au réfectoire est souvent la première arme de l'ostracisme de groupe : il teste la passivité des témoins."
  },
  "2": {
    "id": 2,
    "title": "La table isolée près des sas de recyclage",
    "location": "Angle Mort • Réfectoire B",
    "act": 1,
    "text": "Tu t'installes tout seul au fond du réfectoire, près des bruyants compacteurs de déchets. Tu fixes ton écuelle de pâte protéinée, l'estomac noué. Tu sens des regards peser dans ton dos : des rires étouffés fusent depuis la table de Kaelen. Quelques tables plus loin, Lyra, d'habitude si souriante en cours de bio-ingénierie, baisse les yeux sur sa tablette dès que tes yeux croisent les siens. Personne ne vient s'asseoir avec toi.",
    "choices": [
      {
        "text": "Si tu décides de finir rapidement ton repas pour te réfugier dans les serres hydroponiques, va au 4.",
        "targetId": 4,
        "label": "Partir aux serres"
      },
      {
        "text": "Si tu décides d'attendre la fin du repas pour demander des explications à Lyra, va au 5.",
        "targetId": 5,
        "label": "Attendre Lyra"
      }
    ],
    "statsImpact": {
      "serenity": -15,
      "solidarity": 0,
      "trust": -5
    },
    "pedagogicalNote": "Manger seul par contrainte est vécu comme une profonde humiliation. L'isolement forcé crée un sentiment d'illégitimité."
  },
  "3": {
    "id": 3,
    "title": "La réplique glaciale et le regard des autres",
    "location": "Réfectoire des Synthèses • Table Alpha",
    "act": 1,
    "text": "« Cette banquette appartient à la station, Kaelen. Il y a deux places libres », affirmes-tu d'une voix posée. Kaelen lève les yeux au ciel et prend une moue de dégoût exagérée : « Tu n'as pas senti l'odeur de terreau moisi qui te colle aux bottes ? Va aérer tes spores ailleurs. » Darek renchérit : « Ouais, t'as passé trop de temps dans les cuves végétales, t'es contaminé ! » Deux élèves hésitent, esquissent un sourire embarrassé, puis se renfrognent pour ne pas être associés à toi.",
    "choices": [
      {
        "text": "Si tu décides de ne pas insister et de t'éloigner la tête haute vers un autre module, va au 6.",
        "targetId": 6,
        "label": "Quitter la table dignement"
      },
      {
        "text": "Si la colère monte et que tu hausses le ton pour dénoncer leur méchanceté puérile, va au 7.",
        "targetId": 7,
        "label": "Dénoncer leur bêtise"
      }
    ],
    "statsImpact": {
      "serenity": -10,
      "solidarity": 5,
      "trust": 0
    },
    "pedagogicalNote": "L'ostracisme utilise souvent un prétexte superficiel (l'apparence, une passion, une origine) pour justifier l'exclusion arbitraire."
  },
  "4": {
    "id": 4,
    "title": "Le refuge silencieux des Serres Hydroponiques",
    "location": "Serres Hydroponiques Bêta",
    "act": 1,
    "text": "Tu pénètres dans l'atmosphère tiède et humide des serres de la station. Au milieu des fougères orbitales et des canaux d'irrigation fluorescents, tu retrouves un semblant de calme. Ici au moins, les plantes ne jugent pas. Tu t'assois sur une caisse d'engrais, ton datapad sur les genoux. Soudain, une notification vibre sur ton terminal : une invitation à rejoindre le groupe de classe `#CycleAlpha-ComNet` vient d'être révoquée par un administrateur anonyme.",
    "choices": [
      {
        "text": "Si tu tentes de vérifier qui a restreint tes accès au réseau de classe, va au 8.",
        "targetId": 8,
        "label": "Vérifier le canal ComNet"
      },
      {
        "text": "Si tu décides de couper la connexion pour ne plus voir ces messages et rester dans ta bulle, va au 9.",
        "targetId": 9,
        "label": "Couper les communications"
      }
    ],
    "statsImpact": {
      "serenity": -10,
      "solidarity": -10,
      "trust": -10
    },
    "pedagogicalNote": "L'exclusion numérique (être banni d'un groupe WhatsApp ou d'un canal d'élèves) amplifie l'ostracisme physique de la cour."
  },
  "5": {
    "id": 5,
    "title": "Le regard fuyant de Lyra dans le sas",
    "location": "Sas de Transition • Niveau 2",
    "act": 1,
    "text": "Tu interceptes Lyra alors qu'elle dépose son plateau au tapis roulant. « Lyra ! Pourquoi tu as détourné le regard tout à l'heure ? On devait réviser ensemble le contrôle de gravitation. » Lyra sursaute, l'air terrorisée à l'idée qu'on les voie parler ensemble. « Naël... s'il te plaît, pas ici. Kaelen a dit sur le ComNet que quiconque traînait avec toi serait boycotté pour la sortie orbitale du solstice. Je ne peux pas me mettre tout le groupe à dos... »",
    "choices": [
      {
        "text": "Si tu tentes de la convaincre que céder à Kaelen ne fait que renforcer son pouvoir, va au 10.",
        "targetId": 10,
        "label": "Raisonner Lyra"
      },
      {
        "text": "Si tu te sens trahi et blessé, et décides de lui tourner le dos sans un mot, va au 11.",
        "targetId": 11,
        "label": "Rompre le contact"
      }
    ],
    "statsImpact": {
      "serenity": -10,
      "solidarity": 10,
      "trust": 5
    },
    "pedagogicalNote": "La peur d'être soi-même exclu pousse souvent les camarades à devenir des 'suiveurs passifs' malgré leur désaccord moral."
  },
  "6": {
    "id": 6,
    "title": "Le cours de bio-ingénierie et la formation des binômes",
    "location": "Laboratoire d'Astro-Biologie",
    "act": 1,
    "text": "La cloche de la station retentit. Tous les élèves s'installent aux consoles du laboratoire. Maître Olan, le professeur à la barbe argentée, tape dans ses mains : « Aujourd'hui, manipulation délicate sur les cultures d'algues spirales. Mettez-vous par binômes ! Vous avez trente secondes. » En un éclair, les duos se forment dans un brouhaha excité. Tu regardes autour de toi : les regards s'esquivent, les têtes se penchent sur les pupitres. En quelques secondes, tout le monde est casé... sauf toi.",
    "choices": [
      {
        "text": "Si tu lèves la main pour signaler discrètement au professeur que tu n'as pas de binôme, va au 12.",
        "targetId": 12,
        "label": "Lever la main vers le prof"
      },
      {
        "text": "Si tu fais mine de préférer travailler seul pour sauver la face, va au 13.",
        "targetId": 13,
        "label": "Prétendre vouloir être seul"
      }
    ],
    "statsImpact": {
      "serenity": -15,
      "solidarity": -5,
      "trust": 0
    },
    "pedagogicalNote": "L'exercice 'mettez-vous par deux' est l'une des épreuves les plus anxiogènes pour une cible d'isolement social."
  },
  "7": {
    "id": 7,
    "title": "L'esclandre au réfectoire et l'avertissement du Veilleur",
    "location": "Réfectoire des Synthèses",
    "act": 1,
    "text": "« Vous n'avez pas honte d'inventer des imbécilités pour vous donner un genre ? » cries-tu, les poings serrés. Un grand silence se fait. Kaelen esquisse un sourire triomphant : « Regardez-le, il pète un plomb tout seul ! » Le Veilleur de table, alerté par le bruit, intervient promptement : « Pas de cris au réfectoire ! Toi là-bas, le nouveau, baisse d'un ton ou c'est consigne au sas d'entretien. » Personne ne prend ta défense.",
    "choices": [
      {
        "text": "Si tu expliques posément au Veilleur l'attitude délibérée d'exclusion de Kaelen, va au 14.",
        "targetId": 14,
        "label": "Expliquer au Veilleur"
      },
      {
        "text": "Si tu ravales ta colère et pars t'asseoir dans un coin sombre sans rien dire, va au 15.",
        "targetId": 15,
        "label": "Se taire sous l'injustice"
      }
    ],
    "statsImpact": {
      "serenity": -20,
      "solidarity": -10,
      "trust": -10
    },
    "pedagogicalNote": "La colère impulsive donne souvent l'avantage aux harceleurs sournois, qui font passer la victime pour l'élément perturbateur."
  },
  "8": {
    "id": 8,
    "title": "Le poison des rumeurs sur le canal #OxyPulse",
    "location": "Serres Hydroponiques Bêta",
    "act": 1,
    "text": "Tu te connectes au forum public des élèves d'Oxy-Kaelis via un compte invité. Ce que tu y découvres te glace le sang. Un fil de discussion intitulé *« Le Parasite des Serres »* a été créé par un pseudonyme. On y prétend faussement que tu aurais saboté les filtres d'oxygène par négligence et que tu serais porteur de germes martiens. Les réactions s'enchaînent : des émojis moqueurs, des photomontages ridicules de ton visage sur des racines pourries.",
    "choices": [
      {
        "text": "If you take screenshots (captures d'écran horodatées) of the cyber-rumors to keep proof, go to 16.",
        "targetId": 16,
        "label": "Capturer les preuves"
      },
      {
        "text": "If you reply on the forum to defend yourself against the lies, go to 17.",
        "targetId": 17,
        "label": "Répondre sur le forum"
      }
    ],
    "statsImpact": {
      "serenity": -20,
      "solidarity": 0,
      "trust": -10
    },
    "pedagogicalNote": "Les rumeurs numériques prospèrent sur l'anonymat et le sensationnalisme. Conserver des captures d'écran est le premier réflexe indispensable."
  },
  "9": {
    "id": 9,
    "title": "L'enfermement dans le silence végétal",
    "location": "Serres Hydroponiques • Zone C",
    "act": 1,
    "text": "Tu éteins l'écran de ton datapad et enfouis ta tête dans tes bras. L'obscurité relative des serres t'enveloppe. Tu te dis que si tu disparais complètement, ils finiront par t'oublier. Mais l'isolement complet n'arrête jamais les commérages : il leur laisse simplement le champ libre. Soudain, un bruit de pas résonne sur la passerelle métallique. C'est Maître Olan qui vient inspecter les cultures de blé spatial.",
    "choices": [
      {
        "text": "Si tu profites de sa présence pour lui confier le malaise qui te ronge, va au 18.",
        "targetId": 18,
        "label": "Parler à Maître Olan"
      },
      {
        "text": "Si tu te caches derrière les bacs de culture pour éviter d'être vu, va au 19.",
        "targetId": 19,
        "label": "Se dissimuler"
      }
    ],
    "statsImpact": {
      "serenity": -10,
      "solidarity": -10,
      "trust": 0
    },
    "pedagogicalNote": "Fuir la réalité et se cacher ne dissipe pas la rumeur ; cela isole davantage la victime de toute aide possible."
  },
  "10": {
    "id": 10,
    "title": "L'amitié mise à l'épreuve de la pression sociale",
    "location": "Sas de Transition • Niveau 2",
    "act": 1,
    "text": "« Lyra, écoute-moi ! Si tout le monde se tait, Kaelen décidera qui a le droit d'exister sur cette station ! Aujourd'hui c'est moi, mais demain ce sera toi ou un autre ! » Tes mots frappent juste. Les yeux de Lyra se troublent d'hésitation. « Je sais... c'est injuste. Mais tu ne sais pas de quoi il est capable. Il a le contrôle des invitations pour le simulateur de vol du week-end. Laisse-moi un peu de temps... » Elle te glisse néanmoins discrètement sa fiche d'exercices annotée avant de partir.",
    "choices": [
      {
        "text": "Si tu acceptes son aide discrète en lui proposant de se revoir hors de la vue des autres, va au 20.",
        "targetId": 20,
        "label": "Rendez-vous secret"
      },
      {
        "text": "Si tu refuses cette charité clandestine en exigeant qu'elle assume son amitié au grand jour, va au 21.",
        "targetId": 21,
        "label": "Exiger un soutien public"
      }
    ],
    "statsImpact": {
      "serenity": 5,
      "solidarity": 15,
      "trust": 10,
      "badge": "Éveil de la Conscience"
    },
    "pedagogicalNote": "La libération de la parole chez un témoin est un processus progressif : exiger un héroïsme immédiat peut le faire reculer."
  },
  "11": {
    "id": 11,
    "title": "La solitude amère dans la coursive déserte",
    "location": "Coursive Dorsale 4",
    "act": 1,
    "text": "« Très bien, Lyra. Fais comme tout le monde, baisse la tête », réponds-tu froidement avant de t'éloigner. La douleur de cette trahison perçue te brûle la gorge. Dans la longue coursive bordée de hublots donnant sur l'immensité noire de l'espace, tu réalises que tu n'as plus un seul ami sur Oxy-Kaelis. Les étoiles scintillantes paraissent froides et hostiles. Tu te sens minuscule et insignifiant.",
    "choices": [
      {
        "text": "Si tu te rends à l'infirmerie pour signaler ton angoisse et tes maux de ventre croissants, va au 22.",
        "targetId": 22,
        "label": "Aller à l'infirmerie"
      },
      {
        "text": "Si tu décides de ne compter que sur toi-même et de préparer une riposte secrète, va au 23.",
        "targetId": 23,
        "label": "Méditer une vengeance"
      }
    ],
    "statsImpact": {
      "serenity": -25,
      "solidarity": -20,
      "trust": -20
    },
    "pedagogicalNote": "Le rejet par un proche ou un allié est l'une des blessures les plus vives de l'ostracisme, poussant souvent au repli nihiliste."
  },
  "12": {
    "id": 12,
    "title": "L'intervention maladroite en plein cours",
    "location": "Laboratoire d'Astro-Biologie",
    "act": 1,
    "text": "Tu lèves la main timidement : « Maître Olan... je n'ai pas de partenaire. » Le professeur relève la tête, surpris. « Tiens donc ? Personne n'a intégré Naël ? Kaelen, vous étiez censés faire tourner les équipes. » Kaelen répond d'une voix mielleuse : « On est déjà complets monsieur, et puis Naël préfère toujours ses petites plantes bizarres. » Maître Olan fronce les sourcils, sentant la tension, et désigne Mira : « Mira, vous vous mettrez à trois avec Naël. » Mira pousse un soupir démonstratif et roule des yeux.",
    "choices": [
      {
        "text": "Si tu fais l'effort de t'installer à leur console avec professionnalisme et courtoisie, va au 24.",
        "targetId": 24,
        "label": "Collaborer calmement"
      },
      {
        "text": "Si le mépris affiché de Mira te blesse trop et que tu demandes à faire l'expérience seul, va au 25.",
        "targetId": 25,
        "label": "Préférer travailler seul"
      }
    ],
    "statsImpact": {
      "serenity": -5,
      "solidarity": 5,
      "trust": 5
    },
    "pedagogicalNote": "Forcer un binôme sans régulation préalable peut accentuer le malaise si le climat d'hostilité n'est pas explicité."
  },
  "13": {
    "id": 13,
    "title": "L'illusion de l'autonomie et le mépris silencieux",
    "location": "Laboratoire d'Astro-Biologie",
    "act": 1,
    "text": "« Ce n'est pas grave monsieur, je préfère analyser l'échantillon tout seul », dis-tu en tentant de garder une voix ferme. Maître Olan hoche la tête avec un demi-sourire navré : « Très bien, mais la station orbitale repose sur la coopération d'équipage, Naël. Ne l'oubliez pas. » Pendant tout le cours, tu manipules tes éprouvettes sous les ricanements feutrés de la console voisine. Travailler seul te protège des moqueries directes, mais creuse encore davantage le fossé.",
    "choices": [
      {
        "text": "Si tu réalises une analyse parfaite pour prouver ta valeur aux yeux de tous, va au 26.",
        "targetId": 26,
        "label": "Briller par le travail"
      },
      {
        "text": "Si la tristesse t'empêche de te concentrer et que tu manques ta manipulation, va au 27.",
        "targetId": 27,
        "label": "Échec de manipulation"
      }
    ],
    "statsImpact": {
      "serenity": -10,
      "solidarity": -15,
      "trust": 0
    },
    "pedagogicalNote": "Se replier sur le travail individuel est une stratégie fréquente de protection, mais elle ne règle pas la dynamique d'exclusion."
  },
  "14": {
    "id": 14,
    "title": "L'écoute du Veilleur de table",
    "location": "Réfectoire des Synthèses",
    "act": 1,
    "text": "Tu respires profondément et t'adresses au surveillant sans agressivité : « Monsieur, Kaelen et sa bande bloquent délibérément les sièges et inventent des moqueries pour m'interdire de m'asseoir depuis plusieurs jours. » Le Veilleur, intrigué par ton calme, observe la table de Kaelen qui a soudain rabattu ses jambes. « Kaelen, ôte ce sac immédiatement. Les banquettes sont collectives. Et surveille ton vocabulaire. » Kaelen obtempère en grommelant, te lançant un regard assassin.",
    "choices": [
      {
        "text": "Si tu t'assois à la place libérée pour affirmer ton droit légitime à l'espace commun, va au 28.",
        "targetId": 28,
        "label": "S'asseoir à la table"
      },
      {
        "text": "Si tu préfères aller à une autre table maintenant que le principe est rappelé, va au 29.",
        "targetId": 29,
        "label": "Choisir la paix"
      }
    ],
    "statsImpact": {
      "serenity": 10,
      "solidarity": 5,
      "trust": 15,
      "badge": "Recours Légitime"
    },
    "pedagogicalNote": "Faire appel à l'autorité adulte de manière posée réaffirme la loi commune sans tomber dans le piège de la provocation."
  },
  "15": {
    "id": 15,
    "title": "La capitulation dans le sas d'évacuation",
    "location": "Sas d'Évacuation B",
    "act": 1,
    "text": "Tu baisses les yeux, prends ton plateau d'une main tremblante et vas t'asseoir par terre, contre la porte coupe-feu du sas d'évacuation. La nourriture a un goût de cendre. Chaque rire venant de la salle résonne comme une flèche dans ta poitrine. Tu as l'impression d'être invisible, une anomalie que tout le monde préfère ignorer. Ton biosenseur personnel émet une vibration jaune : rythme cardiaque anormalement élevé, stress de niveau 2.",
    "choices": [
      {
        "text": "Si tu consultes le journal de santé de ton biosenseur pour comprendre ce qui t'arrive, va au 30.",
        "targetId": 30,
        "label": "Consulter le biosenseur"
      },
      {
        "text": "Si tu envoies un message de détresse à la permanence d'écoute de la station, va au 31.",
        "targetId": 31,
        "label": "Contacter l'écoute"
      }
    ],
    "statsImpact": {
      "serenity": -20,
      "solidarity": -10,
      "trust": -10
    },
    "pedagogicalNote": "Le sentiment d'invisibilité use la santé physique et psychologique : le corps réagit au stress chronique du rejet social."
  },
  "16": {
    "id": 16,
    "title": "La sauvegarde des données sur ta clé cryptée",
    "location": "Terminal Privé • Serres",
    "act": 1,
    "text": "Avec méthode, tu captures chaque message diffamatoire, les pseudonymes des expéditeurs, les horodatages précis et les images partagées sur le canal `#OxyPulse`. Tu les sauvegardes dans un dossier sécurisé de ton datapad d'intégration. En observant les identifiants réseaux, tu remarques que le compte principal est lié à la borne d'accès du module de Kaelen. Tu détiens désormais des faits irréfutables.",
    "choices": [
      {
        "text": "Si tu décides de présenter ces preuves numériques au Conseiller de Bord dès cet après-midi, va au 32.",
        "targetId": 32,
        "label": "Alerter le Conseiller"
      },
      {
        "text": "Si tu décides de confronter Kaelen en tête-à-tête en lui montrant les preuves pour qu'il cesse, va au 33.",
        "targetId": 33,
        "label": "Confronter Kaelen seul"
      }
    ],
    "statsImpact": {
      "serenity": 10,
      "solidarity": 5,
      "trust": 20,
      "badge": "Rigueur des Faits"
    },
    "pedagogicalNote": "Sauvegarder les preuves horodatées sans répondre aux provocations est l'action la plus efficace pour faire cesser les violences numériques."
  },
  "17": {
    "id": 17,
    "title": "Le piège de la riposte en ligne",
    "location": "Réseau ComNet • OxyPulse",
    "act": 1,
    "text": "Piqué au vif, tu tapes une réponse furieuse sur le fil de discussion : *« Vous êtes tous des lâches et des menteurs ! Je n'ai jamais saboté quoi que ce soit, Kaelen est juste jaloux de mes notes en bio ! »* Dès que ton message est posté, une cascade de réactions déferle. *« Regardez qui rage ! »*, *« Il avoue à demi-mot ! »*, *« Trop suspect ! »*. En voulant te justifier publiquement sur leur terrain, tu as jeté de l'huile sur le brasier.",
    "choices": [
      {
        "text": "Si tu supprimes immédiatement ton message et te déconnectes du réseau, va au 34.",
        "targetId": 34,
        "label": "Supprimer et déconnecter"
      },
      {
        "text": "If you continue arguing to try to clear your name at all costs, go to 35.",
        "targetId": 35,
        "label": "S'entêter à répondre"
      }
    ],
    "statsImpact": {
      "serenity": -25,
      "solidarity": -15,
      "trust": -15
    },
    "pedagogicalNote": "Débattre avec des harceleurs sur un réseau anonyme valide leur jeu et amplifie le lynchage numérique."
  },
  "18": {
    "id": 18,
    "title": "L'écoute bienveillante de Maître Olan",
    "location": "Serres Hydroponiques • Allée Centrale",
    "act": 1,
    "text": "« Maître Olan... est-ce que je peux vous parler un instant ? » Le professeur s'arrête, pose son sécateur laser et te regarde attentivement. En voyant tes mains trembler, son visage s'adoucit. « Assieds-toi, Naël. Quelque chose ne va pas depuis plusieurs cycles. Tu as perdu ton entrain habituel. Que se passe-t-il dans les coursives ? » Tu sens la digue céder : les mots sortent enfin, racontant le réfectoire, les binômes impossibles et les moqueries.",
    "choices": [
      {
        "text": "Si tu lui décris précisément le mécanisme d'isolement sans exagération, va au 36.",
        "targetId": 36,
        "label": "Décrire l'ostracisme"
      },
      {
        "text": "Si tu minimises l'affaire par peur de passer pour une 'balance', va au 37.",
        "targetId": 37,
        "label": "Minimiser par pudeur"
      }
    ],
    "statsImpact": {
      "serenity": 20,
      "solidarity": 10,
      "trust": 25,
      "badge": "Parole Libératrice"
    },
    "pedagogicalNote": "Confier son calvaire à un adulte de référence est le premier pas décisif pour briser le mur de l'isolement."
  },
  "19": {
    "id": 19,
    "title": "L'ombre et la honte dans les conduits",
    "location": "Conduits d'Aération • Niveau Sub-3",
    "act": 1,
    "text": "Tu te faufiles derrière les bacs de culture et glisses dans un conduit de ventilation tiède. Recroquevillé dans la pénombre, tu entends Maître Olan appeler ton nom au loin, puis ses pas s'éloigner. La solitude s'épaissit. Tu te dis que personne ne se soucie vraiment de toi sur cette station orbitale. L'envie de ne plus jamais retourner en classe te submerge.",
    "choices": [
      {
        "text": "Si tu sors du conduit et décides de rejoindre l'infirmerie pour demander de l'aide, va au 22.",
        "targetId": 22,
        "label": "Rejoindre l'infirmerie"
      },
      {
        "text": "Si tu restes prostré dans le conduit jusqu'à la fin de la journée orbitale, va au 38.",
        "targetId": 38,
        "label": "Rester caché"
      }
    ],
    "statsImpact": {
      "serenity": -25,
      "solidarity": -20,
      "trust": -20
    },
    "pedagogicalNote": "La tentation du décrochage et de la fuite physique est un signal d'alarme critique dans les situations de harcèlement scolaire."
  },
  "20": {
    "id": 20,
    "title": "L'alliance discrète dans la Sphère Panoramique",
    "location": "Sphère Panoramique • Sas 7",
    "act": 1,
    "text": "En fin de journée, tu rejoins Lyra sous la verrière géante de la Sphère Panoramique, où défile la silhouette majestueuse de la Terre bleue en contrebas. Lyra t'attend, l'air soulagé. « Merci d'être venu, Naël. Je me sentais tellement coupable de mon silence. Kaelen monte tout le monde contre toi parce qu'il a peur que tu sois choisi comme délégué de promotion aux serres. J'ai parlé à Sylvan et Corin : ils trouvent tous que ça va trop loin. »",
    "choices": [
      {
        "text": "Si tu proposes d'unir vos voix pour former un groupe solidaire de soutien, va au 39.",
        "targetId": 39,
        "label": "Former un collectif"
      },
      {
        "text": "Si tu lui demandes d'aller parler ensemble à la Médiatrice des Pairs, va au 40.",
        "targetId": 40,
        "label": "Consulter la Médiatrice"
      }
    ],
    "statsImpact": {
      "serenity": 25,
      "solidarity": 30,
      "trust": 25,
      "badge": "Première Brèche dans le Mur"
    },
    "pedagogicalNote": "Identifier des témoins lucides et bâtir une alliance bienveillante permet de désamorcer l'illusion d'une unanimité hostile."
  },
  "21": {
    "id": 21,
    "title": "L'exigence abrupte et le repli de Lyra",
    "location": "Sas de Transition • Niveau 2",
    "act": 1,
    "text": "« Si tu ne m'aides pas publiquement devant tout le monde dès demain matin au sas, alors tu vaux pas mieux que Kaelen ! », lui lances-tu avec amertume. Lyra pâlit, blessée. « Tu ne comprends rien à la pression que je subis... Si je m'expose seule, ils vont me détruire aussi. Je voulais t'aider à mon échelle, mais visiblement tu préfères l'agressivité. » Elle reprend sa fiche et s'en va à grands pas, laissant le silence retomber.",
    "choices": [
      {
        "text": "Si tu regrettes tes propos et lui envoies un message d'excuse sincère sur son canal personnel, va au 41.",
        "targetId": 41,
        "label": "S'excuser auprès de Lyra"
      },
      {
        "text": "Si tu t'enfermes dans ta fierté blessée en te disant que tu n'as besoin de personne, va au 42.",
        "targetId": 42,
        "label": "S'enfermer dans sa fierté"
      }
    ],
    "statsImpact": {
      "serenity": -15,
      "solidarity": -20,
      "trust": -15
    },
    "pedagogicalNote": "Braquer un témoin hésitant en exigeant qu'il se sacrifie immédiatement referme souvent la porte du dialogue."
  },
  "22": {
    "id": 22,
    "title": "Le refuge du Pôle Médical & Biosenseurs",
    "location": "Pôle Médical • Unité de Soutien",
    "act": 1,
    "text": "Les jambes lourdes et l'estomac noué, tu franchis le sas aseptisé du Pôle Médical. L'Infirmière-Major Veda t'accueille avec un regard attentif. Elle pose son analyseur biométrique sur ton poignet : « Tension élevée, cortisol au plafond, sommeil fragmenté... Naël, ton organisme est en état d'alerte permanente depuis deux semaines. Qu'est-ce qui te pèse ainsi à l'école de la station ? »",
    "choices": [
      {
        "text": "Si tu lui racontes l'exclusion quotidienne, les rumeurs et le sentiment d'être un fantôme, va au 43.",
        "targetId": 43,
        "label": "Exprimer la souffrance"
      },
      {
        "text": "Si tu prétends avoir simplement attrapé un virus des systèmes de ventilation, va au 44.",
        "targetId": 44,
        "label": "Prétendre une maladie"
      }
    ],
    "statsImpact": {
      "serenity": 15,
      "solidarity": 10,
      "trust": 25,
      "badge": "Alerte Santé Activée"
    },
    "pedagogicalNote": "L'infirmerie scolaire est un lieu neutre et protecteur essentiel pour faire constater l'impact somatique du harcèlement."
  },
  "23": {
    "id": 23,
    "title": "Le pacte dangereux de la contre-rumeur",
    "location": "Module Personnel • Quartier Dortoir",
    "act": 1,
    "text": "Seul dans ta cabine exiguë, une idée sombre commence à germer. Tu sais que Kaelen a falsifié son badge d'accès pour aller dans la salle d'arcade orbitale après le couvre-feu. Si tu diffuses cette information sur le canal anonyme `#OxyLeaks`, Kaelen perdra son statut de leader intouchable et connaîtra à son tour la honte et le rejet. Mais est-ce vraiment la solution ?",
    "choices": [
      {
        "text": "Si tu décides de diffuser anonymement la faute de Kaelen pour te venger de son mépris, va au 45.",
        "targetId": 45,
        "label": "Lancer la contre-attaque"
      },
      {
        "text": "Si tu renonces à utiliser les mêmes armes déloyales que tes harceleurs, va au 46.",
        "targetId": 46,
        "label": "Renoncer à la vengeance"
      }
    ],
    "statsImpact": {
      "serenity": -20,
      "solidarity": -25,
      "trust": -25
    },
    "pedagogicalNote": "Répondre au harcèlement par la calomnie ou la délation sauvage transforme la victime en agresseur et brouille la vérité."
  },
  "24": {
    "id": 24,
    "title": "L'expérience partagée malgré les réticences",
    "location": "Laboratoire d'Astro-Biologie",
    "act": 1,
    "text": "Tu prends place à la console de manipulation à côté de Mira. Ignorant ses soupirs, tu calibres avec précision le flux d'oligo-éléments sur les algues. Mira observe tes gestes rapides et experts. « Tu... tu sais vraiment doser le potassium sans faire saturer la cellule ? », murmure-t-elle, étonnée. Tu lui montres calmement le réglage : « Oui, c'est simple si tu compenses la gravité résiduelle. » Pour la première fois, la carapace se fissure.",
    "choices": [
      {
        "text": "Si tu poursuis le travail en équipe avec pédagogie sans rancœur, va au 47.",
        "targetId": 47,
        "label": "Poursuivre avec pédagogie"
      },
      {
        "text": "Si tu lui lances une remarque ironique sur les rumeurs idiotes de Kaelen, va au 48.",
        "targetId": 48,
        "label": "Lancer un pique ironique"
      }
    ],
    "statsImpact": {
      "serenity": 15,
      "solidarity": 20,
      "trust": 15,
      "badge": "Pont de Compétence"
    },
    "pedagogicalNote": "Partager ses compétences réelles lors d'un projet commun permet de briser les stéréotypes absurdes véhiculés par les rumeurs."
  },
  "25": {
    "id": 25,
    "title": "L'échec de la manipulation solitaire",
    "location": "Laboratoire d'Astro-Biologie",
    "act": 1,
    "text": "Vexé par le soupir de Mira, tu t'éloignes pour travailler sur un établi isolé. Mais l'expérience nécessite quatre mains : pendant que tu ajustes la pipette, le tube de réactif se renverse sur la console chauffante, déclenchant une alerte sonore stridente. Kaelen éclate de rire : « Vous voyez ! Il est incapable de toucher une éprouvette sans faire sauter le pont ! » Maître Olan soupire et t'envoie nettoyer les filtres.",
    "choices": [
      {
        "text": "Si tu acceptes la corvée en silence la tête basse, va au 49.",
        "targetId": 49,
        "label": "Accepter la corvée"
      },
      {
        "text": "Si tu profites du nettoyage après le cours pour parler en tête-à-tête avec Maître Olan, va au 18.",
        "targetId": 18,
        "label": "Parler après le cours"
      }
    ],
    "statsImpact": {
      "serenity": -15,
      "solidarity": -10,
      "trust": -10
    },
    "pedagogicalNote": "Le stress induit par l'exclusion perturbe la concentration et favorise les maladresses, que les harceleurs utilisent aussitôt contre la victime."
  },
  "26": {
    "id": 26,
    "title": "La note parfaite qui attise la jalousie",
    "location": "Laboratoire d'Astro-Biologie",
    "act": 1,
    "text": "En travaillant avec acharnement, tu rends un rapport d'analyse impeccable. Maître Olan annonce fièrement : « 19 sur 20 pour Naël ! Une rigueur scientifique exemplaire. » Tu espérais que ce succès te vaudrait le respect de tes pairs. Au lieu de cela, Kaelen ricane dans la coursive : « Quel fayot prétentieux... Monsieur je-sais-tout n'a pas besoin d'amis puisqu'il a ses fiches. » Le mur ne tombe pas avec les bonnes notes : il s'épaissit de ressentiment.",
    "choices": [
      {
        "text": "Si tu comprends que la performance scolaire ne remplace pas le règlement relationnel du conflit, va au 50.",
        "targetId": 50,
        "label": "Comprendre l'impasse"
      },
      {
        "text": "Si tu tentes d'acheter la paix en proposant à Kaelen de faire ses devoirs, va au 51.",
        "targetId": 51,
        "label": "Proposer de faire ses devoirs"
      }
    ],
    "statsImpact": {
      "serenity": -5,
      "solidarity": -5,
      "trust": 0
    },
    "pedagogicalNote": "Briller scolairement ne protège pas du harcèlement et peut même susciter de la jalousie si la dynamique de meute n'est pas traitée."
  },
  "27": {
    "id": 27,
    "title": "La spirale de la dévalorisation personnelle",
    "location": "Laboratoire d'Astro-Biologie",
    "act": 1,
    "text": "Tétanisé par le regard des autres, tes doigts tremblent sur le clavier holographique. Tu commets une erreur de calcul grossière. Le simulateur affiche un signal rouge clignotant. Les rires étouffés retentissent derrière toi. Tu te sens nul, incapable, indigne d'être sur cette station d'élite. Tu commences à croire que Kaelen a raison et que tu ne mérites pas d'être ici.",
    "choices": [
      {
        "text": "Si tu réalises que cette autocritique excessive est le résultat du harcèlement et cherches de l'aide, va au 22.",
        "targetId": 22,
        "label": "Prendre conscience et consulter"
      },
      {
        "text": "Si tu t'enfermes dans le découragement le plus complet, va au 52.",
        "targetId": 52,
        "label": "Sombrer dans le découragement"
      }
    ],
    "statsImpact": {
      "serenity": -25,
      "solidarity": -20,
      "trust": -20
    },
    "pedagogicalNote": "Le harcèlement moral détruit l'estime de soi au point que la victime finit par internaliser les mensonges de ses agresseurs."
  },
  "28": {
    "id": 28,
    "title": "Le courage de s'asseoir à la table commune",
    "location": "Réfectoire des Synthèses",
    "act": 1,
    "text": "Sous le regard médusé de toute la rangée, tu t'assois sur la banquette libérée par Kaelen. Tu poses ton plateau calmement et commences à manger. Kaelen fulmine en silence, incapable de répliquer devant le surveillant qui reste posté à quelques mètres. Deux tables plus loin, Sylvan et Lyra t'adressent un hochement de tête respectueux. Tu as prouvé que l'espace commun n'appartient à aucun tyran.",
    "choices": [
      {
        "text": "Si tu engages une conversation polie avec le voisin de gauche qui n'avait rien dit, va au 53.",
        "targetId": 53,
        "label": "Parler au voisin neutre"
      },
      {
        "text": "If you finish your meal calmly without provoking anyone, go to 54.",
        "targetId": 54,
        "label": "Manger sereinement"
      }
    ],
    "statsImpact": {
      "serenity": 15,
      "solidarity": 15,
      "trust": 20,
      "badge": "Reconquête de l'Espace"
    },
    "pedagogicalNote": "Occuper légitimement les espaces communs avec l'appui des règles montre à tous que l'intimidateur n'a aucun pouvoir légal."
  },
  "29": {
    "id": 29,
    "title": "Le choix de la tranquillité stratégique",
    "location": "Réfectoire des Synthèses",
    "act": 1,
    "text": "Maintenant que le Veilleur a rappelé les règles et humilié la prétention de Kaelen, tu choisis de t'installer à une autre table où se trouvent des élèves plus discrets. Tu ne cherches pas la confrontation frontale inutile. Un élève de la section propulsion te sourit timidement : « Bien joué d'avoir parlé au pion. Kaelen se prend pour le commandant de bord depuis le début du cycle. » La glace commence à se briser.",
    "choices": [
      {
        "text": "Si tu profites de cet échange pour nouer une nouvelle amitié hors du cercle toxique, va au 55.",
        "targetId": 55,
        "label": "Nouer une nouvelle amitié"
      },
      {
        "text": "Si tu restes méfiant par peur d'une nouvelle déception, va au 56.",
        "targetId": 56,
        "label": "Rester sur ses gardes"
      }
    ],
    "statsImpact": {
      "serenity": 15,
      "solidarity": 15,
      "trust": 15,
      "badge": "Ouverture vers les Pairs"
    },
    "pedagogicalNote": "S'ouvrir à d'autres cercles d'amis hors du groupe harceleur est une excellente façon de sortir du piège de l'obsession d'intégration."
  },
  "30": {
    "id": 30,
    "title": "L'avertissement chiffré du biosenseur",
    "location": "Sas d'Évacuation B",
    "act": 1,
    "text": "Tu fais défiler les graphiques de ton biosenseur d'intégration. Depuis trois semaines, ton indice de bien-être est passé de 85% à 32%. Ta courbe de stress atteint des sommets chaque matin à 8h00, pile au moment de l'ouverture des coursives. Ces données objectives prouvent que ce que tu subis n'est pas 'juste des taquineries' ou 'un manque d'humour' : c'est une agression chronique qui met ta santé en péril.",
    "choices": [
      {
        "text": "Si tu exportes ce rapport biométrique pour l'apporter au pôle médical de la station, va au 57.",
        "targetId": 57,
        "label": "Transmettre au médecin"
      },
      {
        "text": "Si tu effaces les alertes en espérant que ça passera tout seul, va au 58.",
        "targetId": 58,
        "label": "Ignorer les alertes"
      }
    ],
    "statsImpact": {
      "serenity": 10,
      "solidarity": 5,
      "trust": 15,
      "badge": "Prise de Conscience Réelle"
    },
    "pedagogicalNote": "Prendre conscience des signaux physiques d'épuisement aide à déculpabiliser et à demander une protection légitime."
  },
  "31": {
    "id": 31,
    "title": "Le message d'urgence au Service d'Écoute 3018",
    "location": "Sas d'Évacuation B • Canal Sécurisé",
    "act": 1,
    "text": "Sur le terminal mural de communication, tu composes le code d'assistance d'urgence d'Oxy-Kaelis (équivalent du 3018). En quelques secondes, une voix chaleureuse et posée te répond : « Service d'Écoute et de Protection des Élèves. Tu es en sécurité ici, nous t'écoutons de manière totalement confidentielle. Qu'est-ce qui t'arrive ? » Pour la première fois depuis des semaines, tu n'es plus seul face au vide.",
    "choices": [
      {
        "text": "Si tu expliques la mise à l'écart systématique et la rumeur lancée par Kaelen, va au 59.",
        "targetId": 59,
        "label": "Confier la situation au 3018"
      },
      {
        "text": "Si la panique te saisit et que tu raccroches avant d'avoir parlé, va au 60.",
        "targetId": 60,
        "label": "Raccrocher par panique"
      }
    ],
    "statsImpact": {
      "serenity": 20,
      "solidarity": 15,
      "trust": 30,
      "badge": "Ligne de Vie Activée"
    },
    "pedagogicalNote": "Les lignes d'écoute gratuites et anonymes (comme le 3018) offrent un espace de parole sans jugement pour savoir comment agir."
  },
  "32": {
    "id": 32,
    "title": "Le dossier déposé chez le Conseiller de Bord",
    "location": "Bureau du Conseiller de Promotion",
    "act": 2,
    "text": "Tu te rends au bureau du Conseiller de Bord, Monsieur Thorne. Tu déposes ta clé cryptée sur son bureau holographique. En voyant les captures d'écran, les menaces d'exclusion et l'adresse IP associée au module de Kaelen, son expression devient très grave. « C'est un dossier très solide, Naël. Ce que tu subis s'appelle de l'ostracisme numérique organisé et de la diffamation. C'est formellement interdit par le Code Spatial de l'Éducation. Nous allons déclencher le protocole d'intervention sans te mettre en danger. »",
    "choices": [
      {
        "text": "Si tu demandes la mise en place de la 'Méthode de la Préoccupation Partagée' pour désamorcer le groupe, va au 61.",
        "targetId": 61,
        "label": "Méthode de préoccupation partagée"
      },
      {
        "text": "Si tu réclames une sanction disciplinaire immédiate et spectaculaire contre Kaelen, va au 62.",
        "targetId": 62,
        "label": "Exiger une sanction dure"
      }
    ],
    "statsImpact": {
      "serenity": 20,
      "solidarity": 15,
      "trust": 30,
      "badge": "Preuves Irréfutables"
    },
    "pedagogicalNote": "Présenter des faits objectifs et datés permet à l'équipe pédagogique d'intervenir avec autorité et discernement."
  },
  "33": {
    "id": 33,
    "title": "Le tête-à-tête houleux dans la coursive",
    "location": "Coursive de Maintenance 5",
    "act": 2,
    "text": "Tu bloques le passage de Kaelen devant son casier et lui montres ton datapad : « J'ai toutes les captures du canal #OxyPulse, Kaelen. Si tu ne supprimes pas le fil et n'arrêtes pas de liguer tout le monde contre moi, j'envoie tout à la direction ! » Kaelen blêmit une seconde, puis un sourire mauvais revient : « Tu me menaces ? Essaie un peu, personne ne te croira. Ils diront tous que tu as monté ces faux screens toi-même parce que tu n'as pas d'amis. »",
    "choices": [
      {
        "text": "Si tu comprends qu'il bluffe pour cacher sa peur et vas directement voir les responsables, va au 32.",
        "targetId": 32,
        "label": "Ne pas céder au bluff"
      },
      {
        "text": "Si ses paroles te font douter et que tu hésites à porter plainte, va au 63.",
        "targetId": 63,
        "label": "Douter de sa légitimité"
      }
    ],
    "statsImpact": {
      "serenity": -10,
      "solidarity": 0,
      "trust": 5
    },
    "pedagogicalNote": "Confronter seul son harceleur l'incite souvent à la surenchère ou au déni pour protéger son statut au sein de la bande."
  },
  "34": {
    "id": 34,
    "title": "La déconnexion réparatrice",
    "location": "Module Personnel • Lit d'Apesanteur",
    "act": 2,
    "text": "Tu supprimes immédiatement ton message impulsif et actives le mode 'Silence Numérique' sur ton terminal. Pendant deux heures, tu lis un manuel de pilotage et écoutes de la musique relaxante. La tempête virtuelle continue sans toi, mais sans ton carburant, l'incendie perd de sa vigueur. En reprenant tes esprits, tu prépares un plan d'action bien plus mature.",
    "choices": [
      {
        "text": "Si tu décides de contacter Lyra pour voir comment la situation est perçue par les élèves calmes, va au 20.",
        "targetId": 20,
        "label": "Contacter Lyra sereinement"
      },
      {
        "text": "Si tu prépares ton dossier de signalement à froid avec des captures d'écran, va au 16.",
        "targetId": 16,
        "label": "Préparer le dossier à froid"
      }
    ],
    "statsImpact": {
      "serenity": 15,
      "solidarity": 5,
      "trust": 10,
      "badge": "Maîtrise Émotionnelle"
    },
    "pedagogicalNote": "Le droit à la déconnexion permet de calmer la vague émotionnelle et d'éviter les réactions impulsives contre-productives."
  },
  "35": {
    "id": 35,
    "title": "L'enlisement dans le cyber-lynchage",
    "location": "Réseau ComNet • OxyPulse",
    "act": 2,
    "text": "Pendant toute la soirée, tu réponds à chaque message insultant. Tu t'épuises à justifier chaque minute de ton emploi du temps. Mais chaque mot que tu écris est découpé, détourné en stickers moqueurs et partagé sur d'autres canaux. À 2 heures du matin, tes yeux brûlent, ton biosenseur s'affole et tu te retrouves isolé face à une meute de 30 comptes anonymes.",
    "choices": [
      {
        "text": "Si tu coupes enfin tout et cours au pôle médical au petit matin en état de détresse, va au 22.",
        "targetId": 22,
        "label": "Appel de détresse matinal"
      },
      {
        "text": "Si tu t'enfermes dans la rancœur la plus noire en jurant de faire payer tout le monde, va au 23.",
        "targetId": 23,
        "label": "Spirale de la rancœur"
      }
    ],
    "statsImpact": {
      "serenity": -30,
      "solidarity": -30,
      "trust": -30
    },
    "pedagogicalNote": "Le harcèlement en ligne se nourrit de la détresse visible de la victime : ne jamais s'épuiser à argumenter contre une meute."
  },
  "36": {
    "id": 36,
    "title": "Le diagnostic éclairé de Maître Olan",
    "location": "Serres Hydroponiques • Allée Centrale",
    "act": 2,
    "text": "Maître Olan écoute sans t'interrompre, prenant des notes sur sa tablette. « Ce que tu décris, Naël, s'appelle l'ostracisme de groupe. Kaelen utilise la peur du rejet pour soumettre les autres. Beaucoup d'élèves comme Lyra ou Sylvan n'adhèrent pas à ses idées, mais ils ont peur de devenir la prochaine cible s'ils te parlent. Ce n'est pas toi le problème : c'est la dynamique toxique de la meute. Nous allons agir sans te désigner comme bouc émissaire. »",
    "choices": [
      {
        "text": "Si tu acceptes son plan d'action progressif pour responsabiliser la classe, va au 64.",
        "targetId": 64,
        "label": "Valider le plan d'action"
      },
      {
        "text": "Si tu as peur que son intervention n'aggrave les représailles contre toi, va au 65.",
        "targetId": 65,
        "label": "Exprimer la peur des représailles"
      }
    ],
    "statsImpact": {
      "serenity": 20,
      "solidarity": 15,
      "trust": 30,
      "badge": "Compréhension de la Meute"
    },
    "pedagogicalNote": "Comprendre que l'ostracisme est un phénomène systémique de groupe décharge la victime du fardeau injuste de la culpabilité."
  },
  "37": {
    "id": 37,
    "title": "L'occasion manquée par pudeur",
    "location": "Serres Hydroponiques",
    "act": 2,
    "text": "« Non... rien de spécial monsieur. Juste un peu de fatigue avec les cours de navigation », bafouilles-tu en fixant le sol. Maître Olan te scrute avec inquiétude, mais ne peut deviner ce que tu caches. « Prends soin de toi, Naël. Si tu as un souci, ma porte est toujours ouverte. » Dès qu'il s'éloigne, tu te maudis intérieurement d'avoir laissé passer cette chance d'obtenir de l'aide.",
    "choices": [
      {
        "text": "Si tu te ravises et cours le rattraper avant qu'il ne quitte le secteur des serres, va au 18.",
        "targetId": 18,
        "label": "Rattraper le professeur"
      },
      {
        "text": "Si tu t'enfonces à nouveau dans ton mutisme solitaire, va au 19.",
        "targetId": 19,
        "label": "Retourner au mutisme"
      }
    ],
    "statsImpact": {
      "serenity": -10,
      "solidarity": -10,
      "trust": -10
    },
    "pedagogicalNote": "La honte et la peur de déranger empêchent souvent les victimes de parler lors de la première opportunité offerte par un adulte."
  },
  "38": {
    "id": 38,
    "title": "La nuit dans les conduits et l'alerte d'absence",
    "location": "Conduits d'Aération • Secteur Abandonné",
    "act": 2,
    "text": "Tu as séché tous les cours de l'après-midi. Le froid des conduits commence à t'engourdir les membres. Soudain, les haut-parleurs généraux de la station crépitent : *« Avis de recherche pour l'élève Naël du Cycle Alpha. Absence anormale constatée au contrôle d'oxygène. »* Tu te rends compte que ta fugue déclenche une alerte de sécurité orbitale majeure qui risque d'inquiéter toute la station.",
    "choices": [
      {
        "text": "Si tu sors immédiatement du conduit pour te signaler au premier poste de sécurité, va au 66.",
        "targetId": 66,
        "label": "Se signaler au poste"
      },
      {
        "text": "Si la panique de la punition te pousse à t'enfoncer plus loin vers les sas dépressurisés, va au 67.",
        "targetId": 67,
        "label": "Fuite vers la zone interdite"
      }
    ],
    "statsImpact": {
      "serenity": -30,
      "solidarity": -20,
      "trust": -25
    },
    "pedagogicalNote": "Sécher les cours ou fuguer transforme un problème de harcèlement en incident disciplinaire et met la sécurité de la victime en péril."
  },
  "39": {
    "id": 39,
    "title": "La naissance du Collectif des Sentinelles",
    "location": "Sphère Panoramique • Sas 7",
    "act": 2,
    "text": "Autour de la table d'observation, vous êtes maintenant quatre : toi, Lyra, Sylvan et Corin. Corin avoue : « Kaelen m'a menacé de m'éjecter de l'équipe de sport si je révisais avec Naël. J'en ai marre d'avoir peur. » Ensemble, vous décidez d'une stratégie : dès demain, vous mangerez tous ensemble au centre du réfectoire, et vous vous soutiendrez systématiquement lors du choix des binômes.",
    "choices": [
      {
        "text": "Si vous officialisez cette alliance en créant un groupe ComNet d'entraide ouvert à tous, va au 68.",
        "targetId": 68,
        "label": "Créer le groupe d'entraide"
      },
      {
        "text": "Si vous allez ensemble informer le Conseiller de Bord pour sécuriser votre démarche, va au 69.",
        "targetId": 69,
        "label": "Informer le Conseiller ensemble"
      }
    ],
    "statsImpact": {
      "serenity": 25,
      "solidarity": 35,
      "trust": 30,
      "badge": "Force du Collectif"
    },
    "pedagogicalNote": "Quand deux ou trois élèves s'unissent pour refuser l'exclusion, l'effet de meute commence à s'effondrer comme un château de cartes."
  },
  "40": {
    "id": 40,
    "title": "La médiation par les pairs avec Soa",
    "location": "Espace Médiation • Quartier Éducatif",
    "act": 2,
    "text": "Accompagné de Lyra, tu rencontres Soa, une élève de Cycle Supérieur formée à la médiation par les pairs. Dans ce bureau chaleureux décoré de plantes et de coussins d'apesanteur, Soa écoute les deux points de vue : ta souffrance d'être mis au ban, et la peur de Lyra d'être rejetée à son tour. « L'ostracisme fonctionne sur l'illusion que tout le monde est d'accord pour exclure. Dès qu'un tiers neutre intervient, la pression baisse d'un coup », explique Soa.",
    "choices": [
      {
        "text": "Si tu acceptes que Soa organise un entretien individuel confidentiel avec Mira et Darek, va au 70.",
        "targetId": 70,
        "label": "Entretiens avec les suiveurs"
      },
      {
        "text": "Si tu préfères une confrontation directe entre Kaelen et toi arbitrée par Soa, va au 71.",
        "targetId": 71,
        "label": "Médiation face à Kaelen"
      }
    ],
    "statsImpact": {
      "serenity": 20,
      "solidarity": 25,
      "trust": 25,
      "badge": "Médiation Active"
    },
    "pedagogicalNote": "La médiation par les pairs offre une passerelle de dialogue entre jeunes avant que les situations ne dégénèrent en sanctions lourdes."
  },
  "41": {
    "id": 41,
    "title": "Le message d'apaisement envoyé à Lyra",
    "location": "Module Personnel • Canal Privé",
    "act": 2,
    "text": "Tu rédiges un message sincère : *« Lyra, je te demande pardon pour mes mots tout à l'heure. J'ai eu tort d'exiger que tu prennes tous les risques à ma place. J'avais juste tellement mal d'être seul. Ton soutien compte pour moi, même si c'est discret. »* Cinq minutes plus tard, sa réponse arrive : *« Merci Naël. C'est courageux de ta part. Demain midi, je viens manger avec toi au réfectoire, quoi qu'en dise Kaelen. »*",
    "choices": [
      {
        "text": "Si tu prépares cette journée du lendemain avec confiance et sérénité, va au 72.",
        "targetId": 72,
        "label": "Préparer le lendemain sereinement"
      },
      {
        "text": "Si tu lui proposes d'arriver ensemble au sas pour ne pas être séparés, va au 73.",
        "targetId": 73,
        "label": "Arriver ensemble au sas"
      }
    ],
    "statsImpact": {
      "serenity": 20,
      "solidarity": 25,
      "trust": 20,
      "badge": "Pardon & Réconciliation"
    },
    "pedagogicalNote": "Reconnaître ses excès émotionnels et exprimer ses besoins avec sincérité permet de rétablir les liens de confiance solides."
  },
  "42": {
    "id": 42,
    "title": "La forteresse d'amertume et le mur intérieur",
    "location": "Module Personnel • Quartier Dortoir",
    "act": 2,
    "text": "Tu bloques le contact de Lyra et verrouilles la porte de ta couchette orbitale. Tu te dis que sur cette station comme partout ailleurs, les gens ne sont que des lâches et des hypocrites. Tu te construis une forteresse mentale impénétrable. Mais en refusant la main hésitante qui se tendait, c'est toi qui finis par sceller ta propre cellule d'isolement.",
    "choices": [
      {
        "text": "Si tu réalises que cette amertume te détruit de l'intérieur et tentes de débloquer Lyra, va au 41.",
        "targetId": 41,
        "label": "Débloquer Lyra"
      },
      {
        "text": "Si tu t'enfonces dans un mutisme agressif envers toute la promotion, va au 74.",
        "targetId": 74,
        "label": "Mutisme agressif"
      }
    ],
    "statsImpact": {
      "serenity": -25,
      "solidarity": -30,
      "trust": -30
    },
    "pedagogicalNote": "Rejeter les alliés imparfaits par ressentiment isole la victime dans son malheur et sert les intérêts des harceleurs."
  },
  "43": {
    "id": 43,
    "title": "Le bilan médical et le protocole de signalement",
    "location": "Pôle Médical • Salle d'Entretien",
    "act": 2,
    "text": "L'infirmière Veda écoute attentivement ton récit tout en tapant un rapport médical circonstancié. « Ce que tu vis porte atteinte à ton droit fondamental à la sécurité physique et psychique au sein de l'école. Je consigne ce rapport d'épuisement réactionnel et je préviens immédiatement la direction et le médecin référent de la station. Tu n'as plus à porter ce fardeau tout seul. » Un immense soulagement t'envahit.",
    "choices": [
      {
        "text": "If you agree to take a 24-hour sensory rest before the mediation meeting, go to 75.",
        "targetId": 75,
        "label": "Repos sensoriel et médiation"
      },
      {
        "text": "Si tu souhaites assister aux cours dès demain avec le suivi d'un tuteur adulte, va au 76.",
        "targetId": 76,
        "label": "Retour tutoré en classe"
      }
    ],
    "statsImpact": {
      "serenity": 25,
      "solidarity": 15,
      "trust": 35,
      "badge": "Prise en Charge Officielle"
    },
    "pedagogicalNote": "La reconnaissance médicale du préjudice psychologique valide la souffrance de l'élève et déclenche l'obligation légale d'agir."
  },
  "44": {
    "id": 44,
    "title": "Le diagnostic biaisé et le retour au néant",
    "location": "Pôle Médical",
    "act": 2,
    "text": "« C'est juste un coup de froid avec la climatisation du secteur 3 », murmures-tu. L'infirmière te donne une pastille d'oligo-éléments et te signe un billet de retour en classe. Tu ressors dans la coursive avec ton mal de ventre inchangé. En dissimulant la cause réelle de ton angoisse, tu laisses le terrain libre aux intimidateurs qui poursuivent leur harcèlement invisible sans être inquiétés.",
    "choices": [
      {
        "text": "Si tu fais demi-tour pour avouer à l'infirmière que c'est le harcèlement qui te rend malade, va au 43.",
        "targetId": 43,
        "label": "Faire demi-tour et avouer"
      },
      {
        "text": "Si tu retournes en cours la boule au ventre en attendant la prochaine cloche, va au 6.",
        "targetId": 6,
        "label": "Retourner en cours"
      }
    ],
    "statsImpact": {
      "serenity": -10,
      "solidarity": -5,
      "trust": -10
    },
    "pedagogicalNote": "Masquer la violence psychologique sous des symptômes banals retarde la prise en charge et prolonge inutilement le calvaire."
  },
  "45": {
    "id": 45,
    "title": "L'effet boomerang de la diffamation anonyme",
    "location": "Réseau ComNet • OxyLeaks",
    "act": 2,
    "text": "Tu postes les images du badge falsifié de Kaelen sur le réseau. L'effet est immédiat, mais catastrophique : Kaelen est convoqué par la direction, mais l'administrateur système retrouve l'empreinte réseau de ta cabine. Dès le lendemain, la classe entière te perçoit comme un délateur sournois et toxique. Kaelen joue les martyrs persécutés et gagne encore plus de soutiens. Tu as tout perdu.",
    "choices": [
      {
        "text": "Si tu tentes d'avouer ta détresse pour expliquer cet acte désespéré devant le Conseil de Classe, va au 77.",
        "targetId": 77,
        "label": "Avouer sa détresse au Conseil"
      },
      {
        "text": "Si tu fuis la honte en t'enfermant définitivement dans les quartiers dortoirs, va au 100.",
        "targetId": 100,
        "label": "Vers la Fin Obscure"
      }
    ],
    "statsImpact": {
      "serenity": -35,
      "solidarity": -40,
      "trust": -40
    },
    "pedagogicalNote": "La vengeance anonyme détruit toute l'empathie que la communauté scolaire aurait pu avoir pour la victime et valide la rumeur."
  },
  "46": {
    "id": 46,
    "title": "Le choix de l'intégrité morale",
    "location": "Module Personnel • Quartier Dortoir",
    "act": 2,
    "text": "Tu effaces le fichier compromettant sur Kaelen. « Non. Je ne vais pas devenir comme lui pour prouver que j'existe. » Ce choix courageux raffermit ta dignité intérieure. Tu as peut-être perdu l'approbation d'un groupe superficiel, mais tu as sauvé ton respect de toi-même. Le lendemain, tu te réveilles avec les idées claires, prêt à utiliser les voies légales et collectives.",
    "choices": [
      {
        "text": "Si tu décides de monter un projet exemplaire pour le Forum d'Astro-Biologie de la station, va au 78.",
        "targetId": 78,
        "label": "Préparer le Forum"
      },
      {
        "text": "Si tu vas trouver le Conseiller de Bord avec tes preuves numériques légitimes, va au 32.",
        "targetId": 32,
        "label": "Alerter avec intégrité"
      }
    ],
    "statsImpact": {
      "serenity": 20,
      "solidarity": 20,
      "trust": 25,
      "badge": "Bouclier d'Intégrité"
    },
    "pedagogicalNote": "Refuser les armes de l'agresseur préserve la crédibilité morale de la victime et lui donne la force d'agir justement."
  },
  "47": {
    "id": 47,
    "title": "La fissure dans le mur de Mira",
    "location": "Laboratoire d'Astro-Biologie",
    "act": 3,
    "text": "La séance de manipulation se termine avec succès. L'échantillon d'algues spirales brille d'une lueur émeraude éclatante. Maître Olan félicite chaleureusement votre binôme. En rangeant le matériel, Mira te glisse à voix basse : « Désolée pour les rumeurs sur le ComNet, Naël... Kaelen est lourd quand il s'y met. Tu veux qu'on fasse le compte-rendu ensemble demain midi ? »",
    "choices": [
      {
        "text": "Si tu acceptes sa proposition avec bienveillance pour sceller la réconciliation, va au 79.",
        "targetId": 79,
        "label": "Accepter l'ouverture de Mira"
      },
      {
        "text": "Si tu lui demandes de s'excuser publiquement avant d'accepter son aide, va au 80.",
        "targetId": 80,
        "label": "Exiger des excuses de Mira"
      }
    ],
    "statsImpact": {
      "serenity": 20,
      "solidarity": 25,
      "trust": 20,
      "badge": "Alliance Imprévue"
    },
    "pedagogicalNote": "Permettre aux suiveurs de faire un pas vers la réconciliation sans humiliation publique permet de dissoudre la meute."
  },
  "48": {
    "id": 48,
    "title": "La rechute dans l'animosité",
    "location": "Laboratoire d'Astro-Biologie",
    "act": 3,
    "text": "« Alors Mira, tu n'as pas peur d'attraper mes prétendues spores martiennes ? », lances-tu d'un ton sarcastique. Mira se fige, se renfrogne aussitôt et range ses affaires sans un mot. « Tu vois, on ne peut pas être sympa deux minutes avec toi sans que tu sois agressif ! » Elle quitte la paillasse pour rejoindre Kaelen. Une opportunité de dialogue vient de s'envoler par rancœur.",
    "choices": [
      {
        "text": "Si tu reconnais ton erreur et tentes de rattraper le coup au prochain cours, va au 24.",
        "targetId": 24,
        "label": "Rattraper l'erreur"
      },
      {
        "text": "Si tu te résignes amèrement en pensant qu'aucun pont n'est possible, va au 13.",
        "targetId": 13,
        "label": "Résignation amère"
      }
    ],
    "statsImpact": {
      "serenity": -10,
      "solidarity": -15,
      "trust": -10
    },
    "pedagogicalNote": "L'ironie blessante referme les portes entrouvertes : sortir de l'isolement demande de désarmer son propre ressentiment."
  },
  "49": {
    "id": 49,
    "title": "La leçon d'humilité dans les filtres",
    "location": "Secteur Maintenance • Filtres d'Oxygène",
    "act": 3,
    "text": "Pendant une heure, tu nettoies les filtres à poussière sous la surveillance d'un robot d'entretien. L'effort physique calme le tumulte de tes pensées. Tu réalises que s'enfermer dans le rôle de victime impuissante ne mènera à rien. Tu as besoin d'alliés adultes et pairs pour changer la dynamique de la station. Tu décides que c'est le dernier jour où tu te laisses maltraiter en silence.",
    "choices": [
      {
        "text": "Si tu te rends directement au bureau de Maître Olan pour vider ton sac, va au 18.",
        "targetId": 18,
        "label": "Aller voir Maître Olan"
      },
      {
        "text": "Si tu rejoins la réunion des délégués du Cycle Alpha pour poser la question du climat scolaire, va au 81.",
        "targetId": 81,
        "label": "Participer au Conseil des délégués"
      }
    ],
    "statsImpact": {
      "serenity": 10,
      "solidarity": 10,
      "trust": 15
    },
    "pedagogicalNote": "Transformer un moment d'injustice en décision ferme de chercher des soutiens marque le début de la résilience active."
  },
  "50": {
    "id": 50,
    "title": "La lucidité sur les dynamiques sociales",
    "location": "Coursive Principale • Carrefour Alpha",
    "act": 3,
    "text": "Tu t'assois sur un banc holographique et observes les allées et venues de tes camarades. Tu comprends enfin : Kaelen a peur de perdre son statut d'élève le plus populaire, alors il fabrique un bouc émissaire pour souder son groupe autour d'un ennemi commun imaginaire. Ce mécanisme est vieux comme l'humanité. Le démanteler ne demande pas de la force physique ou des 20/20, mais de la solidarité et de la médiation.",
    "choices": [
      {
        "text": "Si tu partages cette analyse avec Lyra et les autres élèves modérés, va au 39.",
        "targetId": 39,
        "label": "Partager l'analyse avec Lyra"
      },
      {
        "text": "Si tu vas proposer à Maître Olan d'organiser un débat de classe sur les rumeurs, va au 82.",
        "targetId": 82,
        "label": "Proposer un débat de classe"
      }
    ],
    "statsImpact": {
      "serenity": 20,
      "solidarity": 20,
      "trust": 25,
      "badge": "Lucidité Sociologique"
    },
    "pedagogicalNote": "Comprendre le rôle du bouc émissaire permet de ne plus vivre l'attaque comme une tare personnelle, mais comme un dysfonctionnement de groupe."
  },
  "51": {
    "id": 51,
    "title": "Le piège de la soumission consentie",
    "location": "Modules de Rechargement • Secteur Alpha",
    "act": 3,
    "text": "« Kaelen... si tu veux, je peux relire et compléter ton projet d'hydro-gravité pour demain », proposes-tu timidement. Kaelen esquisse un sourire satisfait : « Ah, enfin tu te rends utile ! Prends mon datapad et termine tout pour 20h. Et peut-être que je te laisserai t'asseoir à notre table. » Tu passes ta soirée à faire son devoir. Mais le lendemain au réfectoire, Kaelen éclate de rire : « Merci pour le 18, le larbin ! Maintenant file avant que tu nous fasses honte. »",
    "choices": [
      {
        "text": "Si cette trahison ultime te réveille et te pousse à dénoncer son chantage au Conseiller, va au 32.",
        "targetId": 32,
        "label": "Dénoncer le chantage"
      },
      {
        "text": "Si tu t'effondres moralement sous le poids de l'humiliation, va au 83.",
        "targetId": 83,
        "label": "Effondrement moral"
      }
    ],
    "statsImpact": {
      "serenity": -30,
      "solidarity": -25,
      "trust": -35
    },
    "pedagogicalNote": "Acheter des amis par des services ou des devoirs ne génère jamais de respect : cela installe un rapport de soumission et d'exploitation."
  },
  "52": {
    "id": 52,
    "title": "La chute dans le piège de l'autodépréciation",
    "location": "Module Personnel • Quartier Dortoir",
    "act": 3,
    "text": "Tu restes prostré sur ton lit, volets magnétiques fermés. Tu n'as plus la force d'aller aux révisions, ni même de manger. Ton esprit répète en boucle les moqueries du réfectoire. Le silence de la cabine devient assourdissant. Si personne n'intervient à ce stade, le risque de décrochage scolaire total et de détresse psychologique aiguë devient maximal.",
    "choices": [
      {
        "text": "Si tu rassembles un ultime filet de courage pour appuyer sur le bouton d'appel médical d'urgence, va au 22.",
        "targetId": 22,
        "label": "Bouton d'appel médical"
      },
      {
        "text": "Si tu laisses la nuit s'épaissir sans appeler personne, va au 100.",
        "targetId": 100,
        "label": "Vers la Fin Obscure"
      }
    ],
    "statsImpact": {
      "serenity": -40,
      "solidarity": -30,
      "trust": -40
    },
    "pedagogicalNote": "L'isolement chronique profond anéantit l'élan vital : il est impératif d'activer les secours médicaux ou d'écoute dès les premiers signaux."
  },
  "53": {
    "id": 53,
    "title": "Le dialogue constructif avec le camarade neutre",
    "location": "Réfectoire des Synthèses",
    "act": 3,
    "text": "Tu te tournes vers ton voisin de gauche, un élève nommé Tarek : « Pas facile de trouver de l'oxygène calme sur cette station, n'est-ce pas ? » Tarek sourit timidement : « C'est clair. Kaelen fait la loi parce que personne n'ose le contredire, mais en réalité la moitié de la classe en a marre de ses blagues cruelles. Si quelqu'un montrait l'exemple, beaucoup suivraient. » Vous échangez vos identifiants pour réviser le prochain cours de propulsion.",
    "choices": [
      {
        "text": "Si tu l'invites à rejoindre le groupe de travail solidaire avec Lyra, va au 39.",
        "targetId": 39,
        "label": "Intégrer Tarek au collectif"
      },
      {
        "text": "Si tu consolides cette amitié naissante pas à pas, va au 84.",
        "targetId": 84,
        "label": "Consolider l'amitié"
      }
    ],
    "statsImpact": {
      "serenity": 20,
      "solidarity": 25,
      "trust": 25,
      "badge": "Pont vers la Majorité Silencieuse"
    },
    "pedagogicalNote": "S'adresser aux camarades neutres révèle souvent que la majorité silencieuse réprouve le harcèlement mais n'osait pas faire le premier pas."
  },
  "54": {
    "id": 54,
    "title": "La sérénité retrouvée dans la posture digne",
    "location": "Réfectoire des Synthèses",
    "act": 3,
    "text": "Tu manges ton repas lentement, sans arrogance mais sans crainte. Kaelen, décontenancé par ton calme absolu et la présence des surveillants, finit par ranger ses affaires et quitter la table avec Darek. Tu as démontré à tous les élèves présents qu'une intimidation ne fonctionne que si la cible accepte de se sentir inférieure. Plusieurs regards bienveillants se tournent vers toi.",
    "choices": [
      {
        "text": "Si tu profites de ce moment pour aller saluer Lyra et Sylvan à leur table, va au 85.",
        "targetId": 85,
        "label": "Rejoindre Lyra et Sylvan"
      },
      {
        "text": "Si tu quittes le réfectoire l'esprit apaisé pour te rendre au laboratoire, va au 78.",
        "targetId": 78,
        "label": "Aller au laboratoire serein"
      }
    ],
    "statsImpact": {
      "serenity": 20,
      "solidarity": 15,
      "trust": 20,
      "badge": "Calme & Dignité"
    },
    "pedagogicalNote": "Adopter une posture calme et assurée désamorce l'effet recherché par l'intimidateur, qui cherche le spectacle de la détresse."
  },
  "55": {
    "id": 55,
    "title": "L'expansion du réseau bienveillant",
    "location": "Atelier de Propulsion • Niveau 4",
    "act": 3,
    "text": "Avec ton nouvel ami Tarek, vous formez un binôme efficace pour l'atelier de propulsion orbitale. Vos résultats sur la simulation de rentrée atmosphérique sont excellents. D'autres élèves viennent observer vos calculs et demandent des conseils. L'aura de 'pestiféré' que Kaelen tentait de t'imposer s'évapore sous la réalité de tes compétences et de ta gentillesse.",
    "choices": [
      {
        "text": "Si tu accueilles chaque camarade avec ouverture et sans rancune, va au 86.",
        "targetId": 86,
        "label": "Accueil bienveillant"
      },
      {
        "text": "Si tu proposes d'organiser un groupe d'étude ouvert à toute la promotion, va au 87.",
        "targetId": 87,
        "label": "Groupe d'étude ouvert"
      }
    ],
    "statsImpact": {
      "serenity": 25,
      "solidarity": 30,
      "trust": 25,
      "badge": "Rayonnement Positif"
    },
    "pedagogicalNote": "Créer des espaces de coopération concrète dissout naturellement les rumeurs par la démonstration vivante du contraire."
  },
  "56": {
    "id": 56,
    "title": "La méfiance excessive qui isole encore",
    "location": "Atelier de Propulsion",
    "act": 3,
    "text": "Quand Tarek te propose de faire le TP ensemble, tu hésites, soupçonneux : « Pourquoi tu me parles soudain ? Kaelen t'a envoyé pour te moquer de moi ? » Tarek recule, surpris et un peu vexé : « Pas du tout, je voulais juste être sympa... tant pis pour toi. » Il va s'asseoir ailleurs. En projetant la malveillance de Kaelen sur tous tes camarades, tu risques de rejeter ceux qui souhaitent sincèrement t'aider.",
    "choices": [
      {
        "text": "Si tu réalises ton erreur et t'excuses immédiatement auprès de Tarek, va au 55.",
        "targetId": 55,
        "label": "S'excuser auprès de Tarek"
      },
      {
        "text": "Si tu t'enfermes dans ta paranoïa défensive, va au 13.",
        "targetId": 13,
        "label": "Paranoïa défensive"
      }
    ],
    "statsImpact": {
      "serenity": -10,
      "solidarity": -15,
      "trust": -15
    },
    "pedagogicalNote": "Être victime d'ostracisme peut développer une hyper-méfiance : il est important de savoir distinguer les agresseurs des mains tendues."
  },
  "57": {
    "id": 57,
    "title": "L'action concertée de l'équipe médicale",
    "location": "Pôle Médical • Unité de Coordination",
    "act": 3,
    "text": "Le Docteur Alistair examine les données de ton biosenseur avec l'infirmière. « L'angoisse d'un élève ne ment pas. Ce relevé est une preuve matérielle de stress post-traumatique lié à un climat scolaire hostile. » Il convoque immédiatement le Responsable de Niveau et la Médiatrice Soa pour déclencher une intervention protectrice sans révéler l'origine médicale de l'alerte pour te préserver.",
    "choices": [
      {
        "text": "Si tu participes à l'élaboration du plan de médiation avec le médecin, va au 88.",
        "targetId": 88,
        "label": "Plan de médiation médicale"
      },
      {
        "text": "Si tu demandes à être soutenu par un délégué de confiance lors des entretiens, va au 89.",
        "targetId": 89,
        "label": "Soutien par un délégué"
      }
    ],
    "statsImpact": {
      "serenity": 25,
      "solidarity": 20,
      "trust": 35,
      "badge": "Protection Institutionnelle"
    },
    "pedagogicalNote": "L'intervention médicale permet d'agir sans exposer la victime à des représailles directes grâce au secret professionnel."
  },
  "58": {
    "id": 58,
    "title": "Le déni des symptômes et le malaise au sas",
    "location": "Coursive Centrale",
    "act": 3,
    "text": "Tu effaces les alarmes de ton datapad et tentes d'avancer dans la coursive principale. Mais le corps a ses limites : la vision se trouble, tes jambes se dérobent et tu fais un malaise vagal en plein milieu du carrefour d'Oxy-Kaelis. Deux élèves s'arrêtent, paniqués, pendant que les Veilleurs accourent avec un brancard magnétique. Ton calvaire éclate au grand jour dans l'urgence médicale.",
    "choices": [
      {
        "text": "Si tu profites de ton réveil à l'infirmerie pour tout révéler en toute franchise, va au 43.",
        "targetId": 43,
        "label": "Tout révéler au réveil"
      },
      {
        "text": "Si tu continues de nier l'évidence et refuses de parler, va au 100.",
        "targetId": 100,
        "label": "Vers la Fin Obscure"
      }
    ],
    "statsImpact": {
      "serenity": -20,
      "solidarity": 0,
      "trust": 5
    },
    "pedagogicalNote": "Nier sa détresse psychologique conduit inévitablement à la somatisation aiguë : écouter son corps avant le malaise est vital."
  },
  "59": {
    "id": 59,
    "title": "Les précieux conseils du service d'écoute 3018",
    "location": "Sas d'Évacuation B • Canal Sécurisé",
    "act": 3,
    "text": "L'écoutante du 3018 prend le temps de décortiquer la situation avec toi. « Naël, ce que tu décris est classique : l'effet de meute. Kaelen n'a de pouvoir que par le silence des témoins. Voici les trois étapes : 1) Ne jamais rester seul dans les coursives ; 2) Documenter les faits ; 3) Nous allons contacter le chef d'établissement de la station pour qu'un protocole officiel soit ouvert dès demain sans te mettre en danger. » Tu te sens enfin épaulé par des experts.",
    "choices": [
      {
        "text": "Si tu suis scrupuleusement ces trois recommandations dès demain matin, va au 90.",
        "targetId": 90,
        "label": "Appliquer le protocole 3018"
      },
      {
        "text": "Si tu préviens tes tuteurs de la station pour qu'ils t'accompagnent au rendez-vous, va au 91.",
        "targetId": 91,
        "label": "Impliquer les tuteurs légaux"
      }
    ],
    "statsImpact": {
      "serenity": 30,
      "solidarity": 25,
      "trust": 40,
      "badge": "Conseils d'Experts Activés"
    },
    "pedagogicalNote": "Le 3018 offre une méthodologie claire et rassurante qui permet de reprendre le contrôle de la situation étape par étape."
  },
  "60": {
    "id": 60,
    "title": "La solitude reconduite par la peur d'appeler",
    "location": "Sas d'Évacuation B",
    "act": 3,
    "text": "Tu raccroches le combiné, le cœur battant à tout rompre. Tu as eu peur que Kaelen l'apprenne, ou que les adultes n'en fassent qu'à leur tête en empirant les choses. Tu restes seul dans le sas froid. Mais le silence n'a jamais protégé personne : sans aide extérieure, l'exclusion continuera dès la prochaine sonnerie.",
    "choices": [
      {
        "text": "Si tu reprends ton souffle et recomposes le numéro avec courage, va au 59.",
        "targetId": 59,
        "label": "Recomposer avec courage"
      },
      {
        "text": "Si tu te tournes vers un camarade que tu sais bienveillant, comme Lyra, va au 20.",
        "targetId": 20,
        "label": "Se tourner vers Lyra"
      }
    ],
    "statsImpact": {
      "serenity": -10,
      "solidarity": -10,
      "trust": -10
    },
    "pedagogicalNote": "Hésiter à appeler à l'aide est naturel, mais surmonter cette appréhension est la clé indispensable du déblocage."
  },
  "61": {
    "id": 61,
    "title": "Le déclenchement de la méthode de la préoccupation partagée",
    "location": "Bureau du Conseiller de Promotion",
    "act": 3,
    "text": "Monsieur Thorne acquiesce : « La méthode de la préoccupation partagée est exactement ce qu'il faut. Nous n'allons pas faire de procès public accusateur qui braquerait Kaelen et ses copains. Nous allons recevoir Darek, Mira, puis Kaelen individuellement, en leur disant : 'Nous sommes inquiets pour Naël qui semble isolé et triste sur la station. Que peux-tu faire, toi, pour que la situation s'améliore ?' » Cette approche responsabilisante désarme la meute.",
    "choices": [
      {
        "text": "Si tu laisses l'équipe éducative mener ces entretiens individuels en restant en sécurité, va au 92.",
        "targetId": 92,
        "label": "Suivre la méthode partagée"
      },
      {
        "text": "Si tu demandes à assister en personne à l'entretien de Kaelen, va au 62.",
        "targetId": 62,
        "label": "Vouloir assister à l'entretien"
      }
    ],
    "statsImpact": {
      "serenity": 25,
      "solidarity": 30,
      "trust": 35,
      "badge": "Méthode Pikas Déployée"
    },
    "pedagogicalNote": "La méthode de la préoccupation partagée responsabilise les membres du groupe individuellement sans les braquer dans une posture défensive."
  },
  "62": {
    "id": 62,
    "title": "Le piège de la confrontation punitive brutale",
    "location": "Bureau de la Direction d'Oxy-Kaelis",
    "act": 3,
    "text": "Kaelen est convoqué dans le bureau de la direction sous la menace de trois jours d'exclusion orbitale. Pris de panique et de colère, il crie à l'injustice, nie tout en bloc et accuse Naël d'avoir tout inventé par jalousie. À la sortie du bureau, ses partisans murmurent dans les coursives : « Kaelen s'est fait balancer ! » La tension monte d'un cran dans la promotion.",
    "choices": [
      {
        "text": "Si la médiatrice Soa intervient pour calmer les esprits et rétablir le cadre réparateur, va au 93.",
        "targetId": 93,
        "label": "Intervention de Soa"
      },
      {
        "text": "Si la peur des représailles te pousse à nouveau à te cacher, va au 15.",
        "targetId": 15,
        "label": "Peur des représailles"
      }
    ],
    "statsImpact": {
      "serenity": -15,
      "solidarity": -10,
      "trust": 10
    },
    "pedagogicalNote": "Une punition brutale non accompagnée d'un travail pédagogique sur le climat de classe peut temporairement attiser l'esprit de vengeance."
  },
  "63": {
    "id": 63,
    "title": "La paralysie du doute semé par l'agresseur",
    "location": "Coursive de Maintenance 5",
    "act": 3,
    "text": "« Personne ne te croira... » Les mots de Kaelen résonnent dans ta tête comme un poison. Tu regardes ta clé cryptée. Et s'il avait raison ? Et si tout le monde se rangeait derrière le garçon populaire plutôt que derrière le nouveau solitaire ? Cette tactique de manipulation psychologique (le 'gaslighting') cherche à te faire douter de ta propre réalité.",
    "choices": [
      {
        "text": "Si tu secoues la tête et refuses de te laisser manipuler par ses mensonges, va au 32.",
        "targetId": 32,
        "label": "Refuser la manipulation"
      },
      {
        "text": "Si tu cherches le réconfort d'un témoin neutre pour valider tes souvenirs, va au 20.",
        "targetId": 20,
        "label": "Valider avec un témoin"
      }
    ],
    "statsImpact": {
      "serenity": -10,
      "solidarity": 0,
      "trust": 5
    },
    "pedagogicalNote": "L'agresseur tente souvent de faire douter la victime de la gravité des faits : s'appuyer sur des preuves tangibles aide à garder le cap."
  },
  "64": {
    "id": 64,
    "title": "L'atelier pédagogique sur les rumeurs spatiales",
    "location": "Salle Polyvalente du Cycle Alpha",
    "act": 3,
    "text": "Sans jamais citer ton nom pour ne pas t'exposer, Maître Olan organise un atelier immersif : « Simulation d'Équipage : Comment une rumeur non vérifiée peut faire crasher une navette orbitale ». Les élèves doivent analyser comment une fausse nouvelle se propage et comment le silence des témoins met en danger toute la mission. Au fil des exercices, Darek et Mira baissent la tête, mal à l'aise, prenant conscience de leurs actes.",
    "choices": [
      {
        "text": "Si tu prends la parole lors du débat pour expliquer calmement ce que ressent une personne exclue, va au 94.",
        "targetId": 94,
        "label": "Témoigner avec dignité"
      },
      {
        "text": "Si tu laisses la dynamique de groupe faire son travail de prise de conscience, va au 95.",
        "targetId": 95,
        "label": "Laisser la classe réfléchir"
      }
    ],
    "statsImpact": {
      "serenity": 25,
      "solidarity": 30,
      "trust": 30,
      "badge": "Éveil Collectif"
    },
    "pedagogicalNote": "Les ateliers de simulation et les débats guidés permettent aux élèves de ressentir l'impact de l'exclusion sans esprit punitif."
  },
  "65": {
    "id": 65,
    "title": "L'assurance d'une protection discrète",
    "location": "Serres Hydroponiques",
    "act": 3,
    "text": "« Monsieur... j'ai peur qu'en intervenant, ils se vengent encore plus fort après », confies-tu la gorge serrée. Maître Olan pose une main rassurante sur ton épaule : « C'est une peur légitime, Naël. Mais nous avons un protocole éprouvé : nous augmentons la présence adulte dans les zones aveugles, nous surveillons les sas et les réfectoires, et nous intervenons sur le climat global sans jamais dire 'Naël est venu nous voir'. Tu es sous la protection intégrale du Conseil d'Éducation. »",
    "choices": [
      {
        "text": "Si tu lui accordes ta confiance pour enclencher la démarche protectrice, va au 64.",
        "targetId": 64,
        "label": "Accorder sa confiance"
      },
      {
        "text": "Si tu demandes à avoir un camarade tuteur désigné pour t'accompagner, va au 89.",
        "targetId": 89,
        "label": "Demander un tuteur de classe"
      }
    ],
    "statsImpact": {
      "serenity": 20,
      "solidarity": 15,
      "trust": 30,
      "badge": "Bouclier Protecteur"
    },
    "pedagogicalNote": "Garantir la sécurité et la discrétion de l'intervention est le devoir des équipes éducatives pour lever la peur des représailles."
  },
  "66": {
    "id": 66,
    "title": "La reddition au poste de sécurité et l'explication",
    "location": "Poste de Sécurité Alpha",
    "act": 3,
    "text": "Tu te présentes au poste de contrôle du Capitaine Vane, les yeux rougis par les larmes et la poussière des conduits. « Capitaine... je me suis caché parce que je n'en pouvais plus d'être rejeté et insulté en classe. » Le Capitaine désactive aussitôt l'alerte générale. Son regard sévère fait place à une profonde compassion : « Aucun élève ne devrait avoir à se cacher dans les tuyaux pour survivre sur cette station. Assieds-toi, bois ce chocolat chaud. Tes tuteurs et la direction arrivent. Nous allons régler cela ensemble. »",
    "choices": [
      {
        "text": "Si tu participes à l'entretien officiel avec tes tuteurs et les responsables, va au 91.",
        "targetId": 91,
        "label": "Entretien officiel d'apaisement"
      },
      {
        "text": "Si tu t'enfermes dans le refus de retourner en classe, va au 99.",
        "targetId": 99,
        "label": "Vers la Fin Neutre"
      }
    ],
    "statsImpact": {
      "serenity": 15,
      "solidarity": 15,
      "trust": 25,
      "badge": "Fin de la Fugue"
    },
    "pedagogicalNote": "Se signaler aux adultes met fin au danger immédiat et transforme une fugue désespérée en prise en charge institutionnelle."
  },
  "67": {
    "id": 67,
    "title": "Le danger mortel du Sas Dépressurisé",
    "location": "Secteur Interdit • Sas de Dépressurisation",
    "act": 3,
    "text": "Paniqué, tu franchis la grille d'avertissement du Secteur 9 en travaux. La porte se referme lourdement derrière toi dans un grincement sinistre. L'air se raréfie rapidement : la pression chute à 0,4 bar ! Les sirènes hurlent en rouge clignotant. Tu réalises ta folie : pour fuir le regard moqueur de quelques camarades, tu as mis ta propre vie en danger mortel dans le vide spatial !",
    "choices": [
      {
        "text": "Si tu déclenches la balise d'évacuation d'urgence de ta combinaison, va au 96.",
        "targetId": 96,
        "label": "Balise d'urgence spatiale"
      },
      {
        "text": "Si la panique te fait perdre connaissance avant d'atteindre le bouton, va au 100.",
        "targetId": 100,
        "label": "Vers la Fin Obscure"
      }
    ],
    "statsImpact": {
      "serenity": -40,
      "solidarity": -30,
      "trust": -30
    },
    "pedagogicalNote": "La fuite en zone interdite montre à quel point l'isolement peut altérer le jugement : aucun harcèlement ne vaut de risquer sa vie."
  },
  "68": {
    "id": 68,
    "title": "Le canal #Sentinelles d'Oxy-Kaelis",
    "location": "Réseau ComNet • Espace d'Entraide",
    "act": 3,
    "text": "Avec Lyra, Sylvan et Corin, vous lancez le canal `#Sentinelles-Alpha`. Sa charte est simple : entraide aux devoirs, révision en binômes pour quiconque est seul, et signalement bienveillant des moqueries. En 48 heures, plus de la moitié de la classe rejoint le canal ! Les élèves découvrent qu'ils étaient nombreux à souffrir de la tyrannie de Kaelen. Le canal toxique `#OxyPulse` perd toute son audience.",
    "choices": [
      {
        "text": "Si vous organisez une grande tablée solidaire au réfectoire pour officialiser le changement, va au 97.",
        "targetId": 97,
        "label": "Grande tablée solidaire"
      },
      {
        "text": "Si vous proposez d'inviter Kaelen à rejoindre les règles communes sans rancune, va au 98.",
        "targetId": 98,
        "label": "Vers la Fin Lumineuse"
      }
    ],
    "statsImpact": {
      "serenity": 35,
      "solidarity": 45,
      "trust": 40,
      "badge": "Sentinelle Bienveillante"
    },
    "pedagogicalNote": "Créer une alternative positive et accueillante assèche l'influence des groupes harceleurs en fédérant la majorité silencieuse."
  },
  "69": {
    "id": 69,
    "title": "La démarche de groupe auprès de la direction",
    "location": "Bureau du Conseiller de Promotion",
    "act": 3,
    "text": "Vous entrez à quatre dans le bureau de Monsieur Thorne. Lyra prend la parole la première : « Monsieur, nous venons ensemble témoigner de l'ambiance pesante que Kaelen impose à Naël et à toute la classe. Nous refusons de continuer à cautionner ce rejet par notre silence. » Monsieur Thorne regarde le groupe avec émotion : « Vous faites honneur aux valeurs d'Oxy-Kaelis. Quand les élèves s'allient pour la justice, aucune intimidation ne peut résister. »",
    "choices": [
      {
        "text": "Si vous participez à la mise en place de la Charte du Climat d'Équipage, va au 97.",
        "targetId": 97,
        "label": "Charte du Climat d'Équipage"
      },
      {
        "text": "Si vous préparez le Forum Annuel d'Astro-Biologie ensemble, va au 98.",
        "targetId": 98,
        "label": "Vers la Fin Lumineuse"
      }
    ],
    "statsImpact": {
      "serenity": 35,
      "solidarity": 45,
      "trust": 45,
      "badge": "Délégation Citoyenne"
    },
    "pedagogicalNote": "La parole collective des témoins débloque instantanément la situation : l'agresseur perd toute emprise quand la meute se dissout."
  },
  "70": {
    "id": 70,
    "title": "Les aveux libérateurs de Mira et Darek",
    "location": "Espace Médiation • Entretien Individuel",
    "act": 3,
    "text": "Soa reçoit Mira et Darek séparément, sans les accuser. Questionnés avec douceur sur leur propre ressenti, tous deux craquent : « On ne voulait pas faire de mal à Naël... mais Kaelen se moque de tout le monde, et si on ne riait pas avec lui, il disait qu'on serait les prochains exclus. » Soa les aide à comprendre qu'ils ont le pouvoir de dire non. Tous deux s'engagent à présenter des excuses à Naël et à refuser les futures moqueries.",
    "choices": [
      {
        "text": "Si tu accueilles leurs excuses sincères lors de la séance plénière de réconciliation, va au 97.",
        "targetId": 97,
        "label": "Séance plénière de réconciliation"
      },
      {
        "text": "Si tu demandes à ce que Kaelen participe lui aussi à la réparation, va au 98.",
        "targetId": 98,
        "label": "Vers la Fin Lumineuse"
      }
    ],
    "statsImpact": {
      "serenity": 30,
      "solidarity": 35,
      "trust": 35,
      "badge": "Désarmement des Suiveurs"
    },
    "pedagogicalNote": "Isoler les suiveurs de l'influence du meneur permet de réveiller leur empathie naturelle et d'obtenir des regrets sincères."
  },
  "71": {
    "id": 71,
    "title": "La confrontation réparatrice en médiation",
    "location": "Espace Médiation",
    "act": 3,
    "text": "Assis face à Kaelen en présence de Soa, tu as l'occasion d'exprimer ton ressenti sans hurler ni insulter : « Kaelen, quand tu bloques les sièges, quand tu inventes des rumeurs sur mon hygiène et que tu m'exclues des binômes, tu ne fais pas de l'humour. Tu me fais vivre un enfer chaque matin. » Kaelen tente de ricaner, mais sans son public de suiveurs, son assurance s'effondre. Confronté à tes mots posés et aux rappels de Soa, il baisse les yeux.",
    "choices": [
      {
        "text": "Si tu acceptes sa proposition de réparation par des excuses écrites sur le réseau, va au 97.",
        "targetId": 97,
        "label": "Excuses écrites et réparation"
      },
      {
        "text": "Si tu l'invites à coopérer sur le grand projet des serres, va au 98.",
        "targetId": 98,
        "label": "Vers la Fin Lumineuse"
      }
    ],
    "statsImpact": {
      "serenity": 30,
      "solidarity": 30,
      "trust": 35,
      "badge": "Courage Dialogique"
    },
    "pedagogicalNote": "La médiation en tête-à-tête prive le harceleur de son spectacle et l'oblige à regarder en face la souffrance réelle qu'il a causée."
  },
  "72": {
    "id": 72,
    "title": "Le matin du renouveau au sas principal",
    "location": "Sas Principal • Cycle Alpha",
    "act": 4,
    "text": "Le lendemain matin, tu franchis le sas d'entrée le cœur léger. Lyra est là, t'attendant avec un grand sourire. Elle te tend un gobelet de jus d'agrumes spatial : « Prêt pour le cours de navigation, partenaire ? » Kaelen arrive avec sa bande habituelle, mais quand il voit Lyra à tes côtés et Sylvan qui te fait signe de la main, il comprend que le vent a tourné. Son pouvoir fond à vue d'œil.",
    "choices": [
      {
        "text": "Si vous avancez ensemble d'un pas assuré vers la salle de classe, va au 97.",
        "targetId": 97,
        "label": "Avancer ensemble vers la classe"
      },
      {
        "text": "Si vous franchissez l'étape ultime vers la consécration lumineuse d'Oxy-Kaelis, va au 98.",
        "targetId": 98,
        "label": "Vers la Fin Lumineuse"
      }
    ],
    "statsImpact": {
      "serenity": 30,
      "solidarity": 35,
      "trust": 35,
      "badge": "Équipage Retrouvé"
    },
    "pedagogicalNote": "La présence visible d'un seul allié fidèle suffit souvent à briser l'emprise intimidatrice du harceleur."
  },
  "73": {
    "id": 73,
    "title": "La traversée collective des coursives",
    "location": "Coursive Centrale",
    "act": 4,
    "text": "Vous marchez à deux, puis trois avec Sylvan qui vous rejoint au carrefour des modules. Les rires moqueurs qui accueillaient d'ordinaire tes pas se sont tus. Les autres élèves vous saluent normalement. Le mur invisible qui t'isolait du reste de la station s'est effondré dès que la solidarité a pris corps dans la réalité quotidienne.",
    "choices": [
      {
        "text": "Si tu savoures cette victoire pacifique en préparant l'atelier de l'après-midi, va au 97.",
        "targetId": 97,
        "label": "Préparer l'atelier solidaire"
      },
      {
        "text": "Si tu te diriges vers la conclusion exemplaire de ton parcours, va au 98.",
        "targetId": 98,
        "label": "Vers la Fin Lumineuse"
      }
    ],
    "statsImpact": {
      "serenity": 30,
      "solidarity": 35,
      "trust": 35,
      "badge": "Le Mur Effondré"
    },
    "pedagogicalNote": "Le harcèlement moral s'évanouit dès lors que la norme sociale du groupe valorise la bienveillance plutôt que la cruauté."
  },
  "74": {
    "id": 74,
    "title": "L'escalade de l'hostilité et le rejet mutuel",
    "location": "Coursive Dorsale",
    "act": 4,
    "text": "Enveloppé dans ton armure d'agressivité, tu réponds désormais par des regards noirs et des insultes à quiconque croise ton chemin. Même les élèves bienveillants finissent par s'écarter de toi, te trouvant imprévisible et menaçant. Tu t'es enfermé dans une posture de guerre contre le monde entier. Ton exclusion n'est plus seulement imposée : elle est désormais entretenue par ton propre comportement défensif.",
    "choices": [
      {
        "text": "Si tu réalises cette tragique dérive et demandes l'aide d'un médiateur pour désarmer ta colère, va au 40.",
        "targetId": 40,
        "label": "Désarmer la colère avec Soa"
      },
      {
        "text": "Si tu t'enfermes définitivement dans cette hostilité solitaire, va au 99.",
        "targetId": 99,
        "label": "Vers la Fin Neutre"
      }
    ],
    "statsImpact": {
      "serenity": -30,
      "solidarity": -30,
      "trust": -35
    },
    "pedagogicalNote": "L'agressivité réactive transforme la victime en agresseur et justifie aux yeux des autres son isolement : c'est un piège redoutable."
  },
  "75": {
    "id": 75,
    "title": "La pause réparatrice et le retour accompagné",
    "location": "Pôle Médical • Espace Repos",
    "act": 4,
    "text": "Après 24 heures de repos sensoriel au pôle médical, ton biosenseur est repassé au vert. L'infirmière Veda et Maître Olan viennent te chercher. « Tout a été préparé en classe, Naël. Nous avons clarifié les règles de respect mutuel et reçu les élèves concernés. Tu n'es plus seul. » Tu retournes dans les coursives la tête haute, accompagné par l'équipe éducative qui veille au grain.",
    "choices": [
      {
        "text": "Si tu rejoins tes camarades pour sceller cette nouvelle alliance, va au 97.",
        "targetId": 97,
        "label": "Rejoindre l'alliance réparatrice"
      },
      {
        "text": "Si tu avances vers l'inauguration du nouveau climat scolaire d'Oxy-Kaelis, va au 98.",
        "targetId": 98,
        "label": "Vers la Fin Lumineuse"
      }
    ],
    "statsImpact": {
      "serenity": 35,
      "solidarity": 30,
      "trust": 40,
      "badge": "Rétablissement Complet"
    },
    "pedagogicalNote": "Prendre le temps de se soigner et de laisser les adultes préparer le terrain garantit un retour en classe sécurisé et durable."
  },
  "76": {
    "id": 76,
    "title": "Le tutorat bienveillant en classe",
    "location": "Laboratoire d'Astro-Biologie",
    "act": 4,
    "text": "Tu réintègres le cours sous la bienveillance discrète de Maître Olan, qui a réorganisé les tables en îlots de quatre élèves. Tu es placé avec Lyra, Tarek et Corin. Le travail en équipe est stimulant, joyeux et productif. Kaelen, isolé dans son coin, constate que plus personne ne rit de ses remarques perfides. La classe a choisi son camp : celui du respect.",
    "choices": [
      {
        "text": "Si vous finalisez votre projet de bio-ingénierie ensemble avec brio, va au 97.",
        "targetId": 97,
        "label": "Finaliser le projet d'équipe"
      },
      {
        "text": "Si tu franchis le cap vers le dénouement radieux d'Oxy-Kaelis, va au 98.",
        "targetId": 98,
        "label": "Vers la Fin Lumineuse"
      }
    ],
    "statsImpact": {
      "serenity": 35,
      "solidarity": 40,
      "trust": 40,
      "badge": "Îlot de Solidarité"
    },
    "pedagogicalNote": "L'organisation spatiale et pédagogique de la classe (îlots, projets coopératifs) est un rempart majeur contre l'isolement."
  },
  "77": {
    "id": 77,
    "title": "La mise au point salutaire devant le Conseil",
    "location": "Salle du Conseil Pédagogique",
    "act": 4,
    "text": "Devant le Conseil, les larmes aux yeux mais avec une dignité touchante, tu expliques ton geste : « J'ai eu tort de diffuser ce badge sur le réseau, c'était lâche. Mais j'étais tellement désespéré d'être traité comme un fantôme et insulté chaque jour que je ne savais plus quoi faire pour qu'on m'entende. » Le silence qui suit est lourd de sens. Le Principal prend la parole : « Nous comprenons ta détresse, Naël. Tu auras une sanction réparatrice pour le piratage, mais l'ostracisme dont tu as été victime est intolérable et sera traité avec la plus grande fermeté. »",
    "choices": [
      {
        "text": "Si tu effectues tes heures de travail réparateur aux serres en reconstruisant des liens sains, va au 97.",
        "targetId": 97,
        "label": "Travaux réparateurs aux serres"
      },
      {
        "text": "Si tu choisis la conclusion neutre en restant discret jusqu'à la fin de l'année, va au 99.",
        "targetId": 99,
        "label": "Vers la Fin Neutre"
      }
    ],
    "statsImpact": {
      "serenity": 15,
      "solidarity": 10,
      "trust": 20,
      "badge": "Franchise & Réparation"
    },
    "pedagogicalNote": "Reconnaître ses fautes tout en explicitant la souffrance subie permet à l'institution de rétablir une justice équitable."
  },
  "78": {
    "id": 78,
    "title": "Le chef-d'œuvre du Forum d'Astro-Biologie",
    "location": "Dôme Central d'Exposition",
    "act": 4,
    "text": "Pour le Forum des Sciences d'Oxy-Kaelis, tu as conçu une maquette vivante de recyclage d'oxygène par micro-algues luminescentes. L'installation est magnifique. Élèves, professeurs et ingénieurs de bord s'attroupent autour de ton stand, fascinés. Kaelen tente de faire une remarque sarcastique, mais un élève de 3e cycle lui lance : « Tais-toi un peu, c'est génial ce qu'il a fait ! » Le talent et la passion l'emportent sur la mesquinerie.",
    "choices": [
      {
        "text": "Si tu invites Lyra et d'autres camarades à partager la présentation de la maquette avec toi, va au 97.",
        "targetId": 97,
        "label": "Partager la présentation"
      },
      {
        "text": "Si tu savoures cette consécration collective vers la Fin Lumineuse, va au 98.",
        "targetId": 98,
        "label": "Vers la Fin Lumineuse"
      }
    ],
    "statsImpact": {
      "serenity": 35,
      "solidarity": 35,
      "trust": 40,
      "badge": "Triomphe de la Créativité"
    },
    "pedagogicalNote": "S'investir dans des projets valorisants restaure l'estime de soi et permet aux autres de découvrir la valeur réelle de l'élève."
  },
  "79": {
    "id": 79,
    "title": "La réconciliation sincère avec Mira",
    "location": "Réfectoire des Synthèses",
    "act": 4,
    "text": "Le lendemain midi, Mira vient s'asseoir à côté de toi au réfectoire avec son plateau. Sans un mot de trop, elle te montre ses notes de cours. En voyant Mira faire cette démarche, Darek hésite, puis s'installe à son tour en face de vous. Kaelen se retrouve tout seul à sa table, médusé de voir sa cour s'évaporer. La solidarité et le pardon ont été plus forts que la peur.",
    "choices": [
      {
        "text": "Si tu accueilles ce basculement sans arrogance et avec générosité, va au 97.",
        "targetId": 97,
        "label": "Accueil généreux"
      },
      {
        "text": "Si tu te tournes vers la Fin Lumineuse d'Oxy-Kaelis, va au 98.",
        "targetId": 98,
        "label": "Vers la Fin Lumineuse"
      }
    ],
    "statsImpact": {
      "serenity": 35,
      "solidarity": 40,
      "trust": 40,
      "badge": "Dissolution de la Meute"
    },
    "pedagogicalNote": "Quand les suiveurs quittent le harceleur pour rejoindre la table de l'exclu, le harcèlement s'éteint de lui-même faute de spectateurs."
  },
  "80": {
    "id": 80,
    "title": "La demande légitime de respect",
    "location": "Laboratoire d'Astro-Biologie",
    "act": 4,
    "text": "« Mira, je veux bien qu'on travaille ensemble, mais j'aimerais d'abord que tu me dises franchement pourquoi tu as ri aux blagues de Kaelen hier. » Mira rougit, hésite, puis avoue : « J'avais honte... J'ai ri parce que j'avais peur d'être sa prochaine cible. Je suis désolée Naël. » Cette franchise mutuelle pose les bases d'une relation authentique et durable, débarrassée des faux-semblants.",
    "choices": [
      {
        "text": "Si tu acceptes ses excuses et scelles cette amitié nouvelle, va au 97.",
        "targetId": 97,
        "label": "Sceller l'amitié nouvelle"
      },
      {
        "text": "Si tu t'élances vers l'apothéose lumineuse de l'aventure, va au 98.",
        "targetId": 98,
        "label": "Vers la Fin Lumineuse"
      }
    ],
    "statsImpact": {
      "serenity": 30,
      "solidarity": 35,
      "trust": 35,
      "badge": "Authenticité Retrouvée"
    },
    "pedagogicalNote": "Exprimer ses limites et demander des explications calmes permet de nouer des amitiés saines sans rancœur résiduelle."
  },
  "81": {
    "id": 81,
    "title": "La voix des sans-voix au Conseil des Délégués",
    "location": "Hémicycle des Délégués Orbitaux",
    "act": 4,
    "text": "Profitant de la séance ouverte du Conseil, tu demandes la parole : « Sur notre station, nous apprenons à piloter des vaisseaux, mais nous laissons des élèves se faire rejeter des tables et des groupes de travail sans que personne n'intervienne. L'oxygène ne manque pas sur Oxy-Kaelis, mais l'empathie, oui. Je propose la création d'une charte anti-ostracisme. » Des applaudissements nourris éclatent sur les bancs.",
    "choices": [
      {
        "text": "Si tu participes à la rédaction de la Charte avec les délégués, va au 97.",
        "targetId": 97,
        "label": "Rédiger la Charte d'Équipage"
      },
      {
        "text": "Si tu avances vers la Fin Lumineuse de la station, va au 98.",
        "targetId": 98,
        "label": "Vers la Fin Lumineuse"
      }
    ],
    "statsImpact": {
      "serenity": 35,
      "solidarity": 45,
      "trust": 45,
      "badge": "Porte-Parole Civique"
    },
    "pedagogicalNote": "Porter la question du climat scolaire dans les instances démocratiques de l'établissement transforme une souffrance individuelle en progrès collectif."
  },
  "82": {
    "id": 82,
    "title": "Le débat de classe régulateur",
    "location": "Salle du Cycle Alpha",
    "act": 4,
    "text": "Maître Olan consacre deux heures à un cercle de parole régulateur. Chacun s'exprime sur ce qu'il ressent face aux rumeurs et aux exclusions. Plusieurs élèves confient leur malaise face à l'attitude de Kaelen. Démasqué et privé de son statut de dominant, Kaelen prend la parole d'une voix mal assurée : « Je pensais que c'était juste un jeu... je ne savais pas que ça faisait si mal. » La prise de conscience est générale.",
    "choices": [
      {
        "text": "Si tu acceptes ses regrets et proposes une charte collective de vivre-ensemble, va au 97.",
        "targetId": 97,
        "label": "Charte collective de vivre-ensemble"
      },
      {
        "text": "Si tu franchis le pas vers le dénouement radieux d'Oxy-Kaelis, va au 98.",
        "targetId": 98,
        "label": "Vers la Fin Lumineuse"
      }
    ],
    "statsImpact": {
      "serenity": 35,
      "solidarity": 40,
      "trust": 45,
      "badge": "Prise de Conscience Collective"
    },
    "pedagogicalNote": "Le cercle de parole régulateur permet d'entendre la souffrance sans humiliation et d'ouvrir le chemin de la réparation."
  },
  "83": {
    "id": 83,
    "title": "Le signalement d'urgence par un tiers bienveillant",
    "location": "Modules de Rechargement Alpha",
    "act": 4,
    "text": "En voyant Kaelen se moquer de toi après t'avoir extorqué tes devoirs, Lyra, n'y tenant plus, court chercher Maître Olan. Le professeur arrive à l'instant où Kaelen tente de dissimuler le datapad. Les faits sont flagrants : chantage, harcèlement moral et abus de confiance. Kaelen est immédiatement sanctionné, et la vérité éclate devant toute la promotion.",
    "choices": [
      {
        "text": "Si tu acceptes le soutien chaleureux de Lyra et des autres camarades enfin réveillés, va au 97.",
        "targetId": 97,
        "label": "Accepter le soutien de Lyra"
      },
      {
        "text": "Si tu choisis la conclusion neutre en restant prudent, va au 99.",
        "targetId": 99,
        "label": "Vers la Fin Neutre"
      }
    ],
    "statsImpact": {
      "serenity": 20,
      "solidarity": 30,
      "trust": 25,
      "badge": "Témoin Courageux"
    },
    "pedagogicalNote": "Quand un témoin ose enfin alerter un adulte, la supercherie du harceleur s'effondre en un instant."
  },
  "84": {
    "id": 84,
    "title": "L'enracinement des liens solides",
    "location": "Sphère Panoramique",
    "act": 4,
    "text": "Les semaines passent. Avec Tarek, Lyra et Sylvan, vous formez désormais une équipe inséparable. Vos révisions sous la Sphère Panoramique sont devenues des moments de joie et de rires partagés. Kaelen a perdu son pouvoir de nuisance : ses piques tombent dans l'indifférence générale. Tu as découvert que l'amitié véritable ne s'achète pas : elle se construit dans le respect et l'écoute.",
    "choices": [
      {
        "text": "Si tu participes à la fête de fin de cycle avec tes véritables amis, va au 97.",
        "targetId": 97,
        "label": "Fête de fin de cycle"
      },
      {
        "text": "Si tu franchis le pas vers la Fin Lumineuse, va au 98.",
        "targetId": 98,
        "label": "Vers la Fin Lumineuse"
      }
    ],
    "statsImpact": {
      "serenity": 40,
      "solidarity": 45,
      "trust": 45,
      "badge": "Cercle de Confiance"
    },
    "pedagogicalNote": "S'entourer de véritables amis bienveillants est le bouclier le plus résistant contre toute tentative d'intimidation future."
  },
  "85": {
    "id": 85,
    "title": "La table de la réconciliation",
    "location": "Réfectoire des Synthèses",
    "act": 4,
    "text": "Tu rejoins Lyra et Sylvan à leur table. « On t'attendait, Naël ! Viens t'asseoir avec nous ! » D'autres élèves s'approchent et ajoutent des chaises pour agrandir la tablée. Le rire franc résonne sous les verrières du réfectoire. Tu n'es plus le garçon rejeté au fond des sas : tu es devenu le cœur battant d'une classe solidaire et unie.",
    "choices": [
      {
        "text": "Si tu partages ce repas de fête avant la grande conclusion lumineuse, va au 98.",
        "targetId": 98,
        "label": "Vers la Fin Lumineuse"
      }
    ],
    "statsImpact": {
      "serenity": 40,
      "solidarity": 45,
      "trust": 45,
      "badge": "Table Unie"
    },
    "pedagogicalNote": "La tablée ouverte et accueillante est le symbole le plus fort de la défaite définitive de l'ostracisme."
  },
  "86": {
    "id": 86,
    "title": "L'esprit d'ouverture sans rancune",
    "location": "Atelier de Propulsion",
    "act": 4,
    "text": "Même lorsque d'anciens suiveurs de Kaelen viennent timidement te demander de l'aide pour leurs calculs, tu les accueilles avec gentillesse et patience. Cette absence totale de rancœur désarme les dernières méfiances. Tu prouves à toute la station orbitale qu'on peut être fort sans écraser les autres, et brillant sans mépriser personne.",
    "choices": [
      {
        "text": "Si tu te diriges vers la consécration lumineuse d'Oxy-Kaelis, va au 98.",
        "targetId": 98,
        "label": "Vers la Fin Lumineuse"
      }
    ],
    "statsImpact": {
      "serenity": 40,
      "solidarity": 45,
      "trust": 45,
      "badge": "Grandeur d'Âme"
    },
    "pedagogicalNote": "Répondre au rejet passé par la générosité et l'ouverture parachève la guérison du climat scolaire de tout le groupe."
  },
  "87": {
    "id": 87,
    "title": "L'Académie Solidaire d'Oxy-Kaelis",
    "location": "Holo-Bibliothèque Centrale",
    "act": 4,
    "text": "Le groupe d'étude que tu as initié devient officiel : 'L'Académie des Étoiles Solidaires'. Deux soirs par semaine, des élèves de tous niveaux s'y retrouvent pour réviser, échanger des conseils et s'assurer que personne ne reste seul dans son coin. Le Directeur de la station te remet personnellement la Médaille du Mérite Civique Orbital.",
    "choices": [
      {
        "text": "Si tu reçois cette distinction aux côtés de tes camarades pour la Fin Lumineuse, va au 98.",
        "targetId": 98,
        "label": "Vers la Fin Lumineuse"
      }
    ],
    "statsImpact": {
      "serenity": 45,
      "solidarity": 50,
      "trust": 50,
      "badge": "Médaille du Mérite Civique"
    },
    "pedagogicalNote": "Transformer une épreuve subie en projet collectif d'utilité publique est le plus bel accomplissement de la citoyenneté scolaire."
  },
  "88": {
    "id": 88,
    "title": "Le plan de veille bienveillante du Dr Alistair",
    "location": "Pôle Médical • Passerelle Supérieure",
    "act": 4,
    "text": "Grâce au protocole du Dr Alistair, une équipe de médiateurs adultes et d'élèves référents veille discrètement sur chaque pause et chaque intercours. Kaelen a été reçu et responsabilisé sans éclat public destructeur ; il a compris les limites à ne pas franchir. La station retrouve un climat de calme et de sécurité où chacun peut grandir sans crainte.",
    "choices": [
      {
        "text": "Si tu franchis le pas final vers l'apothéose lumineuse, va au 98.",
        "targetId": 98,
        "label": "Vers la Fin Lumineuse"
      }
    ],
    "statsImpact": {
      "serenity": 40,
      "solidarity": 40,
      "trust": 45,
      "badge": "Veille Bienveillante"
    },
    "pedagogicalNote": "La coordination entre soignants, enseignants et élèves crée un maillage protecteur permanent et rassurant."
  },
  "89": {
    "id": 89,
    "title": "Le binôme de parrainage spatial",
    "location": "Salle Polyvalente",
    "act": 4,
    "text": "Le Conseil d'Éducation met en place un système de parrainage : chaque élève du Cycle Alpha est jumelé avec un aîné bienveillant de Cycle Supérieur pour les trois premiers mois. Ton parrain, un futur pilote enthousiaste, t'invite à visiter les passerelles de commandement. Cette reconnaissance par les aînés balaie définitivement les mesquineries des coursives.",
    "choices": [
      {
        "text": "Si tu te tournes vers la Fin Lumineuse d'Oxy-Kaelis, va au 98.",
        "targetId": 98,
        "label": "Vers la Fin Lumineuse"
      }
    ],
    "statsImpact": {
      "serenity": 40,
      "solidarity": 45,
      "trust": 45,
      "badge": "Parrainage d'Élite"
    },
    "pedagogicalNote": "Le parrainage par des élèves plus âgés apporte un sentiment de sécurité et de valorisation inestimable pour les 6e."
  },
  "90": {
    "id": 90,
    "title": "L'efficacité du protocole national appliqué en orbite",
    "location": "Bureau de la Direction",
    "act": 4,
    "text": "Grâce aux démarches guidées par le 3018, la direction d'Oxy-Kaelis a appliqué le protocole officiel : écoute sans jugement, sécurisation immédiate de l'élève cible, entretiens avec les auteurs et témoins selon la méthode Pikas, et suivi régulier à J+7 et J+30. Kaelen a cessé toute provocation et le climat de classe est redevenu propice au travail.",
    "choices": [
      {
        "text": "Si tu avances vers la conclusion lumineuse de cette épreuve surmontée, va au 98.",
        "targetId": 98,
        "label": "Vers la Fin Lumineuse"
      }
    ],
    "statsImpact": {
      "serenity": 40,
      "solidarity": 40,
      "trust": 45,
      "badge": "Protocole Réussi"
    },
    "pedagogicalNote": "Les protocoles officiels de lutte contre le harcèlement scolaire ont prouvé leur efficacité quand ils sont rigoureusement appliqués."
  },
  "91": {
    "id": 91,
    "title": "Le soutien inconditionnel de la famille et des tuteurs",
    "location": "Salon d'Accueil des Familles Orbitaires",
    "act": 4,
    "text": "Tes tuteurs de la station sont à tes côtés, tenant ta main avec affection. « Nous sommes tellement fiers de toi, Naël. Tu as eu le courage de parler et de ne pas baisser les bras. Rien n'est plus important que ta sécurité et ton bonheur. » Savoir que tes proches te soutiennent inconditionnellement dissout les dernières traces de doute et d'angoisse.",
    "choices": [
      {
        "text": "Si tu te diriges vers la Fin Lumineuse avec la force de ce soutien, va au 98.",
        "targetId": 98,
        "label": "Vers la Fin Lumineuse"
      }
    ],
    "statsImpact": {
      "serenity": 45,
      "solidarity": 45,
      "trust": 50,
      "badge": "Bouclier Familial"
    },
    "pedagogicalNote": "Le soutien inconditionnel des parents ou tuteurs restaure le socle de sécurité affective indispensable pour surmonter l'épreuve."
  },
  "92": {
    "id": 92,
    "title": "L'engagement réparateur de Kaelen",
    "location": "Salle de Régulation Réparatrice",
    "act": 4,
    "text": "Au terme des entretiens de préoccupation partagée, Kaelen a fini par exprimer des regrets sincères. Il a proposé lui-même de participer à l'entretien des serres aux côtés de Naël pendant deux semaines pour apprendre à le connaître. Entre les rangées de fougères orbitales, une complicité inattendue et respectueuse commence même à naître entre vous.",
    "choices": [
      {
        "text": "Si tu franchis le pas final vers la Fin Lumineuse d'Oxy-Kaelis, va au 98.",
        "targetId": 98,
        "label": "Vers la Fin Lumineuse"
      }
    ],
    "statsImpact": {
      "serenity": 45,
      "solidarity": 45,
      "trust": 45,
      "badge": "Réconciliation Authentique"
    },
    "pedagogicalNote": "La justice réparatrice permet à l'auteur de réparer sa faute par des actes positifs concrets plutôt que par la rancœur d'une exclusion stérile."
  },
  "93": {
    "id": 93,
    "title": "L'apaisement par la médiation de Soa",
    "location": "Coursive Principale",
    "act": 4,
    "text": "Grâce à l'intervention de Soa et des Veilleurs, l'esprit de représailles est étouffé dans l'œuf. Soa rappelle fermement la loi de la station : toute menace contre un élève ayant signalé des faits constitue une circonstance aggravante passible de rapatriement immédiat. Le calme revient définitivement dans les coursives.",
    "choices": [
      {
        "text": "Si tu choisis la voie de la réconciliation générale pour la Fin Lumineuse, va au 98.",
        "targetId": 98,
        "label": "Vers la Fin Lumineuse"
      },
      {
        "text": "Si tu préfères en rester à une trêve prudente et discrète, va au 99.",
        "targetId": 99,
        "label": "Vers la Fin Neutre"
      }
    ],
    "statsImpact": {
      "serenity": 25,
      "solidarity": 25,
      "trust": 30,
      "badge": "Loi Réaffirmée"
    },
    "pedagogicalNote": "Rappeler fermement la règle de droit et protéger la victime de tout retour de bâton est indispensable pour maintenir la paix scolaire."
  },
  "94": {
    "id": 94,
    "title": "Le témoignage poignant qui bouleverse la classe",
    "location": "Salle Polyvalente du Cycle Alpha",
    "act": 4,
    "text": "Debout au milieu du cercle, ta voix tremble un peu au début, puis s'affermit : « Être rejeté d'une table, voir les gens détourner le regard, c'est comme être privé d'oxygène petit à petit sans que personne n'appelle les secours. Je ne souhaite cela à aucun d'entre vous. » Un silence bouleversé règne dans la pièce. Plusieurs élèves ont les larmes aux yeux. Kaelen baisse la tête, terrassé par la réalité de ce qu'il a provoqué.",
    "choices": [
      {
        "text": "Si tu scelles ce moment historique en invitant toute la classe à signer le pacte de bienveillance, va au 98.",
        "targetId": 98,
        "label": "Vers la Fin Lumineuse"
      }
    ],
    "statsImpact": {
      "serenity": 45,
      "solidarity": 50,
      "trust": 50,
      "badge": "Courage de l'Authenticité"
    },
    "pedagogicalNote": "La parole authentique de la victime, partagée dans un cadre sécurisé, a une puissance de transformation empathique incomparable."
  },
  "95": {
    "id": 95,
    "title": "La trêve silencieuse et la prise de distance",
    "location": "Coursive Bêta",
    "act": 4,
    "text": "Sans grand éclat public, les tensions s'apaisent peu à peu. Kaelen a compris qu'il n'avait plus le soutien du groupe et garde ses distances. Mira et Darek ne rient plus à ses provocations. Tu as retrouvé un quotidien sans moqueries, mais les amitiés restent timides et distantes. Tu as sauvé ta tranquillité, même si la grande fraternité orbitale reste encore à construire.",
    "choices": [
      {
        "text": "Si tu termines ton cycle dans cette trêve calme mais solitaire, va au 99.",
        "targetId": 99,
        "label": "Vers la Fin Neutre"
      }
    ],
    "statsImpact": {
      "serenity": 20,
      "solidarity": 10,
      "trust": 15,
      "badge": "Trêve Silencieuse"
    },
    "pedagogicalNote": "L'apaisement sans réconciliation profonde permet de retrouver le calme, mais laisse souvent un goût de solitude inachevée."
  },
  "96": {
    "id": 96,
    "title": "Le sauvetage in extremis par les Veilleurs",
    "location": "Infirmerie d'Urgence • Caisson Hyperbare",
    "act": 4,
    "text": "Alertés par la balise d'urgence, les Veilleurs en scaphandre ont forcé le sas et t'ont extirpé in extremis de la zone dépressurisée. Tu te réveilles dans un caisson à oxygène, entouré des médecins et de Maître Olan. Tu es vivant, mais profondément choqué par cette folle imprudence. L'enquête qui suit révèle toute la chaîne du harcèlement qui t'a poussé à cette extrémité désespérée.",
    "choices": [
      {
        "text": "Si tu acceptes les soins psychologiques et l'accompagnement réparateur pour la Fin Neutre, va au 99.",
        "targetId": 99,
        "label": "Vers la Fin Neutre"
      },
      {
        "text": "Si tu t'enfonces dans le refus d'exister et demandes ton rapatriement vers la Terre, va au 100.",
        "targetId": 100,
        "label": "Vers la Fin Obscure"
      }
    ],
    "statsImpact": {
      "serenity": -10,
      "solidarity": 10,
      "trust": 15,
      "badge": "Rescapé du Vide"
    },
    "pedagogicalNote": "Le sauvetage d'urgence rappelle la gravité extrême des actes de désespoir et l'urgence absolue de repérer les signaux de détresse bien avant."
  },
  "97": {
    "id": 97,
    "title": "La Charte du Vivre-Ensemble d'Oxy-Kaelis",
    "location": "Hémicycle Central d'Oxy-Kaelis",
    "act": 4,
    "text": "Réunis en séance plénière sous le patronage du Capitaine Vane et de la Médiatrice Soa, les élèves du Cycle Alpha votent à l'unanimité la 'Charte de l'Équipage Solidaire'. Ses principes fondateurs : aucune table réservée ou interdite, aucun élève laissé sans binôme en travaux pratiques, suppression immédiate des canaux de rumeurs et obligation d'alerter pour les témoins. Kaelen a signé le document en premier, tirant un trait définitif sur ses dérives passées.",
    "choices": [
      {
        "text": "Si tu franchis le pas final vers l'apothéose lumineuse de ton aventure, va au 98.",
        "targetId": 98,
        "label": "Vers la Fin Lumineuse"
      }
    ],
    "statsImpact": {
      "serenity": 50,
      "solidarity": 50,
      "trust": 50,
      "badge": "Charte de l'Équipage"
    },
    "pedagogicalNote": "Formaliser des règles claires co-construites par les élèves donne un cadre pérenne qui protège l'ensemble de la communauté."
  },
  "98": {
    "id": 98,
    "title": "FIN LUMINEUSE : L'Aurore d'Oxy-Kaelis & Le Mur Effondré",
    "location": "Passerelle Panoramique des Éclaireurs",
    "act": 4,
    "text": "FIN LUMINEUSE. Le mur invisible de l'ostracisme et du rejet s'est totalement effondré sur la Station Orbitale Oxy-Kaelis grâce à ton refus de la vengeance, à la parole partagée avec les adultes et à l'alliance courageuse forgée avec Lyra, Sylvan et Tarek. La rumeur toxique a été balayée par la vérité éclatante de tes projets aux serres hydroponiques et la mobilisation de toute la classe. Kaelen, responsabilisé par la méthode réparatrice, a présenté des excuses publiques sincères et participe désormais aux travaux de bio-culture avec humilité. Au réfectoire, les tables sont ouvertes à tous et le réseau ComNet vibre d'entraide et de rires partagés. Portant avec fierté l'insigne d'Or des 'Sentinelles Bienveillantes' d'Oxy-Kaelis, tu contemples la Terre depuis la verrière panoramique, le cœur apaisé. Tu as appris la plus belle leçon de navigation spatiale : aucun vaisseau ne peut voyager loin si l'un de ses membres est laissé dans l'ombre du rejet ; la force d'un équipage se mesure à sa capacité d'inclure chacun avec respect et bienveillance.",
    "choices": [],
    "statsImpact": {
      "serenity": 50,
      "solidarity": 50,
      "trust": 50,
      "badge": "Étoile de Bienveillance & Inclusion"
    },
    "pedagogicalNote": "Félicitations ! Tu as su surmonter l'épreuve du rejet social et de la calomnie en activant les témoins lucides, les adultes de confiance et l'intégrité morale pour rebâtir une communauté fraternelle et solidaire.",
    "endingType": "light"
  },
  "99": {
    "id": 99,
    "title": "FIN NEUTRE : L'Exil Silencieux dans les Sas",
    "location": "Coursive de Transit Secondaire",
    "act": 4,
    "text": "FIN NEUTRE. En évitant les zones centrales, en changeant tes horaires de repas et en limitant tes contacts au strict minimum, les moqueries directes ont fini par cesser. Kaelen s'est lassé de te provoquer et la classe t'accorde une indifférence polie. Mais rien n'a été résolu sur le fond. Tu n'as pas osé faire confiance aux équipes éducatives ni chercher d'amis sincères parmi tes camarades. Tu manges encore souvent tout seul face à une cloison métallique, comptant les cycles avant ton transfert vers une autre colonie. Ton biosenseur reste en vigilance jaune : la paix sur Oxy-Kaelis n'est pour toi qu'un cessez-le-feu précaire dans une station où tu te sens encore comme un passager clandestin.",
    "choices": [],
    "statsImpact": {
      "serenity": -10,
      "solidarity": -15,
      "trust": -10,
      "badge": "Solitude Tolérée"
    },
    "pedagogicalNote": "Bilan : Fuir et se faire oublier permet de faire cesser les attaques directes à court terme, mais laisse intacte la blessure de la solitude et prive l'élève de la joie des liens d'amitié partagés.",
    "endingType": "neutral"
  },
  "100": {
    "id": 100,
    "title": "FIN OBSCURE : La Rupture d'Oxygène & L'Exil du Silence",
    "location": "Sas de Rapatriement Terrestre",
    "act": 4,
    "text": "FIN OBSCURE. Broyé par l'ostracisme silencieux, enfermé dans un mutisme destructeur ou emporté par des ripostes anonymes qui se sont retournées contre toi, tu te retrouves totalement isolé, exclu et sanctionné par les autorités de la station qui n'ont vu que tes dérapages sans comprendre ton désespoir. Ton biosenseur personnel clignote en alerte rouge d'épuisement nerveux sévère. Jugé inapte à poursuivre le Cycle Alpha d'Oxy-Kaelis, tes tuteurs ont signé ton ordre de rapatriement définitif vers la Terre. Alors que le sas d'embarquement de la navette se referme, tu aperçois au loin Kaelen et sa bande parader fièrement dans la coursive principale, prêts à choisir leur prochaine victime. Cette douloureuse aventure démontre la terrible vérité : face au poison de l'isolement social et des rumeurs, le silence, la fuite solitaire et la vengeance masquée conduisent au naufrage ; seule la rupture du silence avec l'aide des tiers de confiance et la solidarité des témoins peuvent abattre le mur invisible du rejet.",
    "choices": [],
    "statsImpact": {
      "serenity": -50,
      "solidarity": -50,
      "trust": -50,
      "badge": "Exil & Rupture Totale"
    },
    "pedagogicalNote": "Bilan : Le silence et la rancœur solitaire face à l'ostracisme mènent au décrochage scolaire et à la rupture psychologique. Parler aux adultes et s'allier aux pairs est le seul salut.",
    "endingType": "dark"
  }
};
