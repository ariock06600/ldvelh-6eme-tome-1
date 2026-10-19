import type { StoryStep } from '../types/story.ts';

export const STORY_STEPS_TOME_4: Record<number, StoryStep> = {
  "1": {
    "id": 1,
    "title": "La notification nocturne dans le sas de repos",
    "location": "Cabine de Repos Individuelle • Sas 14-B",
    "act": 1,
    "text": "Il est 23h40 heure orbitale. Les lumières de la station Oxy-Kaelis ont basculé en cycle nuit bleuté. Alors que tu t'apprêtes à t'endormir, ton terminal ComNet fixé à la paroi émet une série inhabituelle de bips stridents. En ouvrant l'écran holographique, tu découvres une notification groupée provenant d'un canal clandestin très populaire parmi les recrues : 'Oxy-Leaks // Sans Filtre'. Un fichier vidéo holo-truqué vient d'y être posté : ton propre visage a été greffé sur une vidéo dégradante te montrant en train de paniquer et de pleurer lors d'un exercice de simulation en gravité zéro. En dessous, déjà 47 réactions moqueuses et des commentaires cruels défilent en direct.",
    "choices": [
      {
        "text": "Si tu réponds immédiatement sur le canal public sous le coup de la colère pour exiger la suppression, va au 2.",
        "targetId": 2,
        "label": "Répondre à chaud"
      },
      {
        "text": "Si tu réalises une capture d'écran horodatée avec les identifiants avant de couper le flux, va au 3.",
        "targetId": 3,
        "label": "Figer la preuve"
      }
    ],
    "statsImpact": {
      "serenity": -15,
      "solidarity": 0,
      "trust": 0
    },
    "pedagogicalNote": "Face à une attaque numérique, répondre sous le coup de l'émotion nourrit le lynchage. Le premier réflexe salutaire est toujours de figer la preuve (capture d'écran, logs)."
  },
  "2": {
    "id": 2,
    "title": "L'escalade du fil de discussion",
    "location": "Cabine de Repos Individuelle • Sas 14-B",
    "act": 1,
    "text": "Les mains tremblantes de rage, tu tapes un message furieux : « Vous êtes des lâches sans courage ! Supprimez ce montage immédiatement, c'est totalement faux ! » En quelques secondes, ta réponse attire une pluie de sarcasmes. L'administrateur anonyme, sous le pseudo 'Spectre-Zero', épingle ton commentaire avec la mention : « Regardez, la victime s'énerve toute seule, ça confirme que c'est vrai ! » Les emojis moqueurs se multiplient et le compteur de partages s'emballe.",
    "choices": [
      {
        "text": "Si tu tentes de supprimer ton message et d'éteindre ton terminal en panique, va au 4.",
        "targetId": 4,
        "label": "Supprimer et paniquer"
      },
      {
        "text": "Si tu cesses immédiatement d'écrire et fais une sauvegarde complète des messages pour prouver l'acharnement, va au 5.",
        "targetId": 5,
        "label": "Stopper et sauvegarder"
      }
    ],
    "statsImpact": {
      "serenity": -20,
      "solidarity": -10,
      "trust": 0
    },
    "pedagogicalNote": "Alimenter un fil de harcèlement procure aux agresseurs la réaction qu'ils recherchent. Ne jamais entrer dans une joute verbale publique sur les réseaux."
  },
  "3": {
    "id": 3,
    "title": "La capture réflexe et la déconnexion protectrice",
    "location": "Cabine de Repos Individuelle • Sas 14-B",
    "act": 1,
    "text": "Le cœur battant, tu respires profondément et actives l'enregistreur de trace du ComNet : tu captures l'hologramme, l'horodatage précis (Cycle 84, 23h42), ainsi que la liste des comptes ayant commenté et relayé le trucage. Puis, malgré l'envie obsédante de rafraîchir la page, tu bascules ton terminal en mode veille hermétique et poses l'appareil face contre table. La pièce retrouve son calme.",
    "choices": [
      {
        "text": "Si la curiosité angoissée te pousse à rallumer l'écran pour surveiller les réactions, va au 6.",
        "targetId": 6,
        "label": "Rallumer l'écran par anxiété"
      },
      {
        "text": "Si tu envoies un message privé sobre à Élior pour lui demander conseil avant de dormir, va au 7.",
        "targetId": 7,
        "label": "Contacter un ami sûr"
      }
    ],
    "statsImpact": {
      "serenity": 5,
      "solidarity": 5,
      "trust": 10,
      "badge": "Sang-Froid Numérique"
    },
    "pedagogicalNote": "Conserver les preuves sans engager le dialogue est la démarche la plus efficace pour préparer un signalement légal et protéger son équilibre mental."
  },
  "4": {
    "id": 4,
    "title": "L'illusion de la suppression",
    "location": "Cabine de Repos Individuelle • Sas 14-B",
    "act": 1,
    "text": "Tu as effacé ton commentaire, mais il est trop tard : plusieurs membres du canal ont fait des captures d'écran de ta colère pour en faire de nouveaux mèmes légendés : « Lyra pète les plombs sur le réseau ». Dans le silence de ta couchette, ton cœur bat la chamade. Tu te sens épiée même à travers les cloisons d'acier de la station spatiale.",
    "choices": [
      {
        "text": "Si tu t'enfermes dans le silence en espérant que tout le monde oubliera demain matin, va au 8.",
        "targetId": 8,
        "label": "S'enfermer dans le silence"
      },
      {
        "text": "Si tu copies les liens du canal pour les envoyer au bureau de régulation de bord, va au 9.",
        "targetId": 9,
        "label": "Préparer le signalement"
      }
    ],
    "statsImpact": {
      "serenity": -15,
      "solidarity": -5,
      "trust": 5
    },
    "pedagogicalNote": "Sur Internet et les réseaux sociaux, ce qui est posté échappe immédiatement à son auteur. Il est essentiel de ne pas rester seul avec ce sentiment d'invasion."
  },
  "5": {
    "id": 5,
    "title": "L'archivage méthodique des logs",
    "location": "Terminal Privé • Sas 14-B",
    "act": 1,
    "text": "Tu interromps net tes réponses. Avec méthode, tu enregistres l'arborescence des messages et exportes le journal de diffusion de Spectre-Zero sur une puce cryptographique amovible. Tu as désormais entre les mains la preuve matérielle d'une campagne organisée de dénigrement numérique.",
    "choices": [
      {
        "text": "Si tu décides de montrer ces preuves à Soa, la médiatrice des pairs, dès la première heure, va au 10.",
        "targetId": 10,
        "label": "Consulter la médiatrice Soa"
      },
      {
        "text": "Si tu prépares un script de contre-piratage pour bloquer le compte de Spectre-Zero toi-même, va au 11.",
        "targetId": 11,
        "label": "Tenter le contre-piratage"
      }
    ],
    "statsImpact": {
      "serenity": 5,
      "solidarity": 10,
      "trust": 15,
      "badge": "Preuves Irréfutables"
    },
    "pedagogicalNote": "L'archivage des faits permet de faire basculer le dossier du statut de simple rumeur impalpable à celui d'infraction caractérisée au règlement."
  },
  "6": {
    "id": 6,
    "title": "Le piège du défilement infini d'angoisse",
    "location": "Cabine de Repos Individuelle • Sas 14-B",
    "act": 1,
    "text": "Impossible de fermer l'œil. Tu rallumes l'écran et fais défiler frénétiquement les commentaires pendant deux heures d'affilée. Chaque nouvelle notification te fait sursauter. Tu découvres que des camarades de ta propre équipe de bio-ingénierie ont 'liké' la publication sans même y penser, simplement pour suivre le mouvement.",
    "choices": [
      {
        "text": "Si tu envoies un message furieux en privé à l'un de ces camarades pour lui reprocher son like, va au 12.",
        "targetId": 12,
        "label": "Reprocher le like en privé"
      },
      {
        "text": "Si tu forces l'extinction complète de l'alimentation électrique de ta cabine pour stopper cette torture, va au 13.",
        "targetId": 13,
        "label": "Forcer la coupure électrique"
      }
    ],
    "statsImpact": {
      "serenity": -20,
      "solidarity": -10,
      "trust": -5
    },
    "pedagogicalNote": "Le 'doomscrolling' (défilement anxieux) amplifie la détresse. Couper les écrans la nuit est une mesure d'hygiène mentale indispensable face au cyber-harcèlement."
  },
  "7": {
    "id": 7,
    "title": "La réponse réconfortante d'Élior",
    "location": "Canal Privé Sécurisé • Sas 14-B",
    "act": 1,
    "text": "Tu rédiges un court message à Élior, qui a lui-même traversé les intimidations de Brannok au trimestre précédent. Sa réponse arrive en moins de trois minutes : « Lyra, ne réponds surtout rien sur Oxy-Leaks. J'ai vu passer cette infamie, c'est un montage grotesque. Garde les preuves, dors, et demain matin on va ensemble voir Madame Orla aux serveurs centraux. Tu n'es pas seule. » Ses mots agissent comme un bouclier contre l'angoisse nocturne.",
    "choices": [
      {
        "text": "Si tu le remercies et éteins ton terminal pour te reposer en sécurité, va au 14.",
        "targetId": 14,
        "label": "Accepter le soutien et dormir"
      },
      {
        "text": "Si tu lui demandes de mobiliser Naël et Corin dès l'aube pour préparer une riposte, va au 15.",
        "targetId": 15,
        "label": "Mobiliser les camarades"
      }
    ],
    "statsImpact": {
      "serenity": 15,
      "solidarity": 20,
      "trust": 15,
      "badge": "Alliance Précieuse"
    },
    "pedagogicalNote": "Trouver un allié de confiance brise instantanément le sentiment de solitude oppressant généré par le cyber-harcèlement."
  },
  "8": {
    "id": 8,
    "title": "Le matin blême dans les coursives",
    "location": "Coursive Principale • Anneau de Gravité",
    "act": 1,
    "text": "Le lendemain matin, tu marches vers l'Amphithéâtre Galilée le regard rivé au sol. En croisant des groupes d'élèves qui pianotent sur leurs terminaux portables, tu es persuadée qu'ils ne parlent que de toi. Deux recrues ricanent en te voyant passer ; tu ne sais même pas si c'est lié au montage, mais la paranoïa te ronge.",
    "choices": [
      {
        "text": "Si tu bifurques pour t'isoler dans les coursives désertes de la maintenance, va au 16.",
        "targetId": 16,
        "label": "Fuir dans les coursives désertes"
      },
      {
        "text": "Si tu gardes la tête haute et rejoins ta table de cours comme d'habitude, va au 17.",
        "targetId": 17,
        "label": "Affronter la salle de cours"
      }
    ],
    "statsImpact": {
      "serenity": -15,
      "solidarity": -10,
      "trust": -5
    },
    "pedagogicalNote": "Le cyber-harcèlement prolonge ses effets dans le monde réel en créant un sentiment persistant d'insécurité et de jugement généralisé."
  },
  "9": {
    "id": 9,
    "title": "Le formulaire de signalement ComNet",
    "location": "Borne Informatique • Couloir Nord",
    "act": 1,
    "text": "Devant une borne publique de la station, tu ouvres l'interface officielle de régulation du ComNet. Il existe un bouton d'urgence : 'Signalement de contenu diffamatoire ou illicite'. Tu hésites : le signalement déclenchera une alerte auprès des administrateurs adultes, mais Spectre-Zero saura-t-il qui a signalé ?",
    "choices": [
      {
        "text": "Si tu valides le signalement officiel en joignant l'identifiant du canal, va au 18.",
        "targetId": 18,
        "label": "Valider le signalement officiel"
      },
      {
        "text": "Si la peur des représailles te fait annuler la procédure au dernier moment, va au 19.",
        "targetId": 19,
        "label": "Annuler par peur des représailles"
      }
    ],
    "statsImpact": {
      "serenity": 5,
      "solidarity": 5,
      "trust": 15
    },
    "pedagogicalNote": "Les plateformes et réseaux scolaires disposent de protocoles de modération. Les signalements sont protégés par le secret professionnel pour garantir la sécurité de la victime."
  },
  "10": {
    "id": 10,
    "title": "Dans le bureau d'écoute de Soa",
    "location": "Module Médic-Éducatif • Niveau 2",
    "act": 1,
    "text": "Soa, élève médiatrice formée à l'écoute bienveillante, t'accueille avec une tasse d'infusion chaude. Tu lui montres la puce contenant les captures de l'holo-montage et les commentaires. Soa regarde attentivement sans porter aucun jugement : « C'est une agression numérique préméditée, Lyra. Tu as eu le réflexe parfait en ne répondant pas et en stockant les traces. Nous allons agir selon le protocole de protection. »",
    "choices": [
      {
        "text": "Si tu acceptes que Soa prenne contact avec l'Officier Kroll pour une enquête discrète, va au 20.",
        "targetId": 20,
        "label": "Activer la médiation officielle"
      },
      {
        "text": "Si tu demandes d'abord à confronter l'administrateur du canal entre élèves sans adultes, va au 21.",
        "targetId": 21,
        "label": "Vouloir régler ça entre élèves"
      }
    ],
    "statsImpact": {
      "serenity": 15,
      "solidarity": 15,
      "trust": 20,
      "badge": "Écoute Bienveillante"
    },
    "pedagogicalNote": "Le recours aux pairs médiateurs permet d'exprimer son désarroi dans un cadre sécurisant avant d'engager les démarches administratives nécessaires."
  },
  "11": {
    "id": 11,
    "title": "La tentation du script pirate",
    "location": "Atelier Informatique • Baie 7",
    "act": 1,
    "text": "Forte de tes compétences avancées en code, tu ouvres la console de diagnostic réseau d'Oxy-Kaelis. En quelques lignes de script, tu pourrais saturer le nœud de transmission de Spectre-Zero par un déni de service (DDoS) ou forcer la suppression de son canal. Mais le règlement d'Oxy-Kaelis punit tout piratage de l'exclusion immédiate.",
    "choices": [
      {
        "text": "Si tu lances l'attaque informatique en secret pour faire justice toi-même, va au 22.",
        "targetId": 22,
        "label": "Lancer le script de piratage"
      },
      {
        "text": "Si tu réalises que devenir pirate ferait de toi une coupable et fermes la console, va au 23.",
        "targetId": 23,
        "label": "Renoncer à l'illégalité"
      }
    ],
    "statsImpact": {
      "serenity": -10,
      "solidarity": -15,
      "trust": -10
    },
    "pedagogicalNote": "La cyber-vengeance par piratage ou doxxing place la victime dans l'illégalité et détruit toute possibilité de recours juridique serein."
  },
  "12": {
    "id": 12,
    "title": "La confrontation par message privé avec le 'likeur'",
    "location": "Canal Privé ComNet",
    "act": 1,
    "text": "Tu écris à Darek, qui a partagé le mème avec un emoji hilare : « Darek, pourquoi tu as partagé cette horreur ? On travaille ensemble sur le projet d'oxygène ! » Sa réponse est froide et désinvolte : « Ouh là calme-toi Lyra, c'est juste un mème rigolo, tout le monde partage ça sur la station, prends pas tout au premier degré ! »",
    "choices": [
      {
        "text": "Si tu lui expliques fermement qu'un partage n'est pas neutre et qu'il participe au harcèlement, va au 24.",
        "targetId": 24,
        "label": "Expliquer la responsabilité du partage"
      },
      {
        "text": "Si tu l'insultes en retour avant de le bloquer sur tous tes réseaux, va au 25.",
        "targetId": 25,
        "label": "Insulter et bloquer sous tension"
      }
    ],
    "statsImpact": {
      "serenity": -10,
      "solidarity": -5,
      "trust": 0
    },
    "pedagogicalNote": "La banalisation ('ce n'est qu'un like') est le moteur du cyber-harcèlement. Rappeler calmement que partager une humiliation équivaut à la commettre réveille souvent la conscience."
  },
  "13": {
    "id": 13,
    "title": "Le répit du silence total",
    "location": "Cabine de Repos Individuelle",
    "act": 1,
    "text": "Tu as coupé le disjoncteur auxiliaire de ta cabine. Plus un bruit de notification, plus d'écran lumineux. Dans l'obscurité paisible d'Oxy-Kaelis, ta respiration ralentit enfin. Tu comprends que la première victoire contre le cyber-harcèlement est de refuser qu'il s'invite dans ton espace intime.",
    "choices": [
      {
        "text": "Si tu passes une nuit réparatrice avant d'agir avec lucidité le matin, va au 14.",
        "targetId": 14,
        "label": "Nuit réparatrice"
      },
      {
        "text": "Si l'angoisse de ce qui se trame en ligne t'empêche de trouver le sommeil, va au 8.",
        "targetId": 8,
        "label": "Sommeil perturbé"
      }
    ],
    "statsImpact": {
      "serenity": 15,
      "solidarity": 0,
      "trust": 5
    },
    "pedagogicalNote": "Le droit à la déconnexion n'est pas une fuite, c'est un bouclier indispensable pour préserver ses capacités de discernement."
  },
  "14": {
    "id": 14,
    "title": "L'aube de la résolution",
    "location": "Cafétéria des Synthèses • Matin",
    "act": 1,
    "text": "Après quelques heures de vrai sommeil, tes idées sont claires. À la cafétéria, Élior et Naël viennent s'asseoir à ta table avec un plateau de fruits synthétiques. Élior te fait un clin d'œil complice : « Prête pour l'offensive légale ? » Savoir que tes amis te croient et se tiennent à tes côtés dissipe le brouillard d'angoisse.",
    "choices": [
      {
        "text": "Si vous allez ensemble déposer la clé de logs chez Madame Orla, va au 26.",
        "targetId": 26,
        "label": "Dépôt des logs en groupe"
      },
      {
        "text": "Si vous préférez d'abord sonder les réactions des autres élèves en classe, va au 27.",
        "targetId": 27,
        "label": "Observer les réactions en classe"
      }
    ],
    "statsImpact": {
      "serenity": 20,
      "solidarity": 25,
      "trust": 20,
      "badge": "Bouclier d'Amitié"
    },
    "pedagogicalNote": "La solidarité en présence physique réelle est le meilleur antidote contre les violences virtuelles."
  },
  "15": {
    "id": 15,
    "title": "Le rassemblement des quatre recrues",
    "location": "Atelier Botanique de Naël • Secteur Vert",
    "act": 1,
    "text": "Au milieu des fougères orbitales et des conduits d'irrigation de Naël, vous vous réunissez : Élior, Naël, Corin et toi. Chacun d'eux a vécu une forme d'épreuve sur Oxy-Kaelis : les coups pour Élior, l'ostracisme pour Naël, les quolibets pour Corin. « Cette fois, c'est le ComNet qu'ils utilisent pour t'atteindre, » dit Corin. « Mais le principe est le même : ils comptent sur la honte et le silence. »",
    "choices": [
      {
        "text": "Si vous organisez une campagne de signalements collectifs du canal toxique, va au 28.",
        "targetId": 28,
        "label": "Signalements collectifs coordonnés"
      },
      {
        "text": "Si vous rédigez un message d'information sur les deepfakes pour le journal de bord, va au 29.",
        "targetId": 29,
        "label": "Sensibilisation aux deepfakes"
      }
    ],
    "statsImpact": {
      "serenity": 25,
      "solidarity": 30,
      "trust": 25,
      "badge": "Quatuor Uni"
    },
    "pedagogicalNote": "Unir les expériences vécues renforce la légitimité de l'action collective et transforme des victimes isolées en bâtisseurs de climat scolaire."
  },
  "16": {
    "id": 16,
    "title": "Le piège de la cachette dans la maintenance",
    "location": "Conduit de Ventilation 4-C",
    "act": 1,
    "text": "Accroupie entre deux générateurs d'oxygène, tu consultes à nouveau ton terminal en cachette. Manquer les cours ne fait qu'aggraver la situation : l'absence de réaction dans la vraie vie laisse le champ libre aux affabulateurs sur le réseau. Un message de ton tuteur d'enseignement s'affiche : « Absence non justifiée en cours de navigation ».",
    "choices": [
      {
        "text": "Si tu sors immédiatement de ta cachette pour rejoindre l'infirmerie et expliquer ton malaise, va au 30.",
        "targetId": 30,
        "label": "Aller à l'infirmerie"
      },
      {
        "text": "Si tu restes prostrée toute la matinée dans le conduit, va au 31.",
        "targetId": 31,
        "label": "Rester cachée"
      }
    ],
    "statsImpact": {
      "serenity": -20,
      "solidarity": -15,
      "trust": -10
    },
    "pedagogicalNote": "L'évitement scolaire est l'une des conséquences les plus graves du cyber-harcèlement. Il pénalise la victime au lieu de sanctionner les auteurs."
  },
  "17": {
    "id": 17,
    "title": "L'entrée courageuse en salle de cours",
    "location": "Laboratoire d'Informatique Orbitale",
    "act": 1,
    "text": "Tu pénètres dans le laboratoire la tête haute et t'installes devant ton pupitre. Au fond, Vael et deux complices chuchotent en ricanant, les yeux fixés sur leur écran de montre. Mais tu gardes ton calme, allumes ton poste de travail et commences les exercices de programmation avec une précision impeccable. Ton assurance déstabilise les moqueurs.",
    "choices": [
      {
        "text": "Si le professeur remarque l'agitation au fond et demande des explications, va au 32.",
        "targetId": 32,
        "label": "Intervention du professeur"
      },
      {
        "text": "Si Vael t'envoie un fichier anonyme par transfert de proximité (AirDrop orbital), va au 33.",
        "targetId": 33,
        "label": "Réception d'un fichier suspect"
      }
    ],
    "statsImpact": {
      "serenity": 10,
      "solidarity": 10,
      "trust": 10
    },
    "pedagogicalNote": "Continuer ses activités quotidiennes avec dignité montre aux agresseurs que leur tentative de déstabilisation ne contrôle pas la vie de leur cible."
  },
  "18": {
    "id": 18,
    "title": "L'accusé de réception des modérateurs",
    "location": "Borne Informatique • Couloir Nord",
    "act": 1,
    "text": "L'écran de la borne affiche un message officiel : « Signalement #784-NET enregistré avec succès. Transmission prioritaire au Délégué à la Protection Numérique. Confidentialité garantie. » Un sentiment de soulagement t'envahit : la machine institutionnelle est enclenchée, tu n'es plus seule à porter le fardeau.",
    "choices": [
      {
        "text": "Si tu imprimes le ticket de signalement pour le garder sur toi, va au 34.",
        "targetId": 34,
        "label": "Garder le ticket de preuve"
      },
      {
        "text": "Si tu rejoins tes camarades pour leur annoncer que la procédure est lancée, va au 26.",
        "targetId": 26,
        "label": "Annoncer la démarche aux amis"
      }
    ],
    "statsImpact": {
      "serenity": 15,
      "solidarity": 10,
      "trust": 20
    },
    "pedagogicalNote": "Faire confiance aux dispositifs de signalement permet d'activer la protection légale sans s'exposer directement aux agresseurs."
  },
  "19": {
    "id": 19,
    "title": "Le poids du renoncement",
    "location": "Borne Informatique • Couloir Nord",
    "act": 1,
    "text": "Tu cliques sur 'Annuler'. La borne s'éteint. Tu te dis que si tu signales, Spectre-Zero et sa bande vont redoubler d'acharnement et te traiter de 'balance'. Mais en ne faisant rien, le canal continue de diffuser le faux montage à des centaines de personnes sans aucune entrave.",
    "choices": [
      {
        "text": "Si tu te ressaisis et relances immédiatement le formulaire de signalement, va au 18.",
        "targetId": 18,
        "label": "Se ressaisir et signaler"
      },
      {
        "text": "Si tu rentres dans ta cabine submergée par l'impuissance, va au 8.",
        "targetId": 8,
        "label": "Submergée par l'impuissance"
      }
    ],
    "statsImpact": {
      "serenity": -15,
      "solidarity": -10,
      "trust": -15
    },
    "pedagogicalNote": "La peur d'être qualifié de 'balance' est une arme classique des harceleurs pour imposer le silence. Signaler une agression, c'est faire respecter la loi, pas dénoncer par jalousie."
  },
  "20": {
    "id": 20,
    "title": "L'activation du protocole 3018 spatial",
    "location": "Module Médic-Éducatif",
    "act": 1,
    "text": "Soa compose sur la console sécurisée le code d'assistance d'urgence d'Oxy-Kaelis : l'équivalent spatial du service national 3018 pour la protection des mineurs contre les violences numériques. En moins de dix minutes, une écoutante spécialisée entre en visioconférence pour t'expliquer tes droits, les recours possibles et les démarches pour exiger la suppression immédiate des contenus auprès de l'hébergeur de bord.",
    "choices": [
      {
        "text": "Si tu rédiges la demande officielle de réquisition et suppression des flux, va au 35.",
        "targetId": 35,
        "label": "Demander la suppression d'urgence"
      },
      {
        "text": "Si tu acceptes un soutien psychologique pour évacuer la pression accumulée, va au 36.",
        "targetId": 36,
        "label": "Accepter l'écoute psychologique"
      }
    ],
    "statsImpact": {
      "serenity": 20,
      "solidarity": 20,
      "trust": 25,
      "badge": "Protocole 3018 Activé"
    },
    "pedagogicalNote": "Le 3018 est le numéro gratuit, anonyme et confidentiel dédié au cyber-harcèlement. Il permet d'obtenir la suppression rapide de contenus illicites et un accompagnement juridique complet."
  },
  "21": {
    "id": 21,
    "title": "La confrontation directe dans le réfectoire",
    "location": "Réfectoire des Synthèses",
    "act": 1,
    "text": "Tu décides d'aller voir directement Vael, que tu soupçonnes d'être derrière le canal. Tu le trouves entouré de ses acolytes : « Vael, arrête tes montages sur Oxy-Leaks, tout le monde sait que c'est toi ! » Vael hausse les épaules avec un sourire ironique : « Prouve-le, Lyra. Sur le ComNet, tout est chiffré. Tu te fais des films toute seule. » Ses amis éclatent de rire.",
    "choices": [
      {
        "text": "Si tu lui montres la signature IP que tu as interceptée sur le réseau, va au 37.",
        "targetId": 37,
        "label": "Brandir la trace technique"
      },
      {
        "text": "Si tu tournes les talons pour confier l'affaire à la régulation officielle, va au 10.",
        "targetId": 10,
        "label": "Préférer la voie institutionnelle"
      }
    ],
    "statsImpact": {
      "serenity": -10,
      "solidarity": -5,
      "trust": 0
    },
    "pedagogicalNote": "Les harceleurs numériques se réfugient derrière le bouclier de l'anonymat. Tenter de les confronter sans preuves officielles validées par les adultes les pousse au déni et aux railleries."
  },
  "22": {
    "id": 22,
    "title": "L'alarme de sécurité réseau",
    "location": "Atelier Informatique • Baie 7",
    "act": 1,
    "text": "Tu as lancé le script d'attaque pour saturer le canal Oxy-Leaks. Mais les systèmes de défense d'Oxy-Kaelis sont impitoyables : une sirène jaune retentit et l'écran se fige en rouge : « INTRUSION NON AUTORISÉE DÉTECTÉE - TERMINAL BLOQUÉ ». Les caméras de la baie pivotent vers toi. Tu viens de commettre une faute lourde qui menace de te faire exclure, alors que tu étais la victime !",
    "choices": [
      {
        "text": "Si tu vas immédiatement trouver Madame Orla pour avouer ta tentative sous l'emprise de la détresse, va au 38.",
        "targetId": 38,
        "label": "Avouer son erreur à l'adulte"
      },
      {
        "text": "Si tu tentes d'effacer les traces de ton piratage pour échapper à la sanction, va au 39.",
        "targetId": 39,
        "label": "Tenter de masquer son intrusion"
      }
    ],
    "statsImpact": {
      "serenity": -30,
      "solidarity": -20,
      "trust": -20
    },
    "pedagogicalNote": "La vengeance numérique se retourne inévitablement contre la victime. Les journaux de connexion enregistrent tout et les sanctions techniques frappent sans distinction morale."
  },
  "23": {
    "id": 23,
    "title": "La sagesse de la retenue éthique",
    "location": "Atelier Informatique • Baie 7",
    "act": 1,
    "text": "Ton doigt reste suspendu au-dessus de la touche d'exécution. Tu te souviens des paroles de ton instructeur de vol : « La maîtrise d'un pilote se mesure à son calme dans la tempête ». Tu fermes le script pirate sans le lancer. Tu as le savoir technique pour détruire, mais tu choisis la voie de la justice et du droit.",
    "choices": [
      {
        "text": "Si tu utilises tes compétences pour analyser proprement les métadonnées du fichier vidéo sans intrusion, va au 40.",
        "targetId": 40,
        "label": "Analyse technique légale"
      },
      {
        "text": "Si tu rejoins tes camarades pour bâtir un contre-discours bienveillant, va au 15.",
        "targetId": 15,
        "label": "Rejoindre le quatuor d'amis"
      }
    ],
    "statsImpact": {
      "serenity": 15,
      "solidarity": 10,
      "trust": 15,
      "badge": "Éthique Numérique"
    },
    "pedagogicalNote": "Résister à la tentation de la loi du talion en ligne est la plus grande preuve de maturité citoyenne."
  },
  "24": {
    "id": 24,
    "title": "La prise de conscience du camarade",
    "location": "Canal Privé ComNet",
    "act": 1,
    "text": "Tu réponds à Darek avec calme : « Darek, imagine que demain quelqu'un truque une vidéo de toi en train d'échouer à tes tests d'astronaute et que toute la station en rie. En likant et en partageant, tu donnes de la force à ceux qui détruisent les autres. » Un long silence suit. Puis un message apparaît : « ... Désolé Lyra. J'avais pas vu les choses comme ça. Je supprime mon partage tout de suite et je quitte ce canal pourri. »",
    "choices": [
      {
        "text": "Si tu le remercies pour sa prise de conscience et lui proposes de témoigner, va au 41.",
        "targetId": 41,
        "label": "Inviter Darek à témoigner"
      },
      {
        "text": "Si tu te réjouis de cette première brèche dans le cercle des suiveurs, va au 42.",
        "targetId": 42,
        "label": "Première victoire éthique"
      }
    ],
    "statsImpact": {
      "serenity": 15,
      "solidarity": 20,
      "trust": 10,
      "badge": "Pédagogie Entre Pairs"
    },
    "pedagogicalNote": "Interpeller individuellement les suiveurs sur leur empathie désamorce l'effet de foule numérique et permet souvent de les détacher du groupe de harceleurs."
  },
  "25": {
    "id": 25,
    "title": "L'échange toxique envenimé",
    "location": "Canal Privé ComNet",
    "act": 1,
    "text": "Sous le coup de la douleur, tu lui as envoyé une bordée d'insultes : « T'es qu'un abruti sans cervelle, je te déteste ! » Darek s'empresse de faire une capture d'écran de tes injures et la publie immédiatement sur le groupe public avec la légende : « Regardez comme Lyra est violente et agressive en privé ! » Tu te retrouves piégée dans une situation où tes propres mots sont retournés contre toi.",
    "choices": [
      {
        "text": "Si tu arrêtes tout échange pour ne plus aggraver ton cas, va au 43.",
        "targetId": 43,
        "label": "Cesser toute communication"
      },
      {
        "text": "Si tu vas tout raconter à la médiatrice pour réparer ton erreur de communication, va au 10.",
        "targetId": 10,
        "label": "Consulter Soa pour réparer l'erreur"
      }
    ],
    "statsImpact": {
      "serenity": -20,
      "solidarity": -15,
      "trust": -10
    },
    "pedagogicalNote": "Les insultes en privé sont presque toujours capturées et instrumentalisées par les harceleurs pour faire passer la victime pour l'agresseur."
  },
  "26": {
    "id": 26,
    "title": "L'alliance des quatre aux Archives Centrales",
    "location": "Centre des Serveurs ComNet • Archives",
    "act": 2,
    "text": "Accompagnée d'Élior, Naël et Corin, tu franchis la porte vitrée des archives. Madame Orla, responsable des communications de la station, vous accueille avec son habituel regard perçant. « Les quatre mousquetaires d'Oxy-Kaelis au grand complet ? Que se passe-t-il ? » Tu déposes ta puce sur le lecteur optique. L'écran principal projette les logs d'Oxy-Leaks.",
    "choices": [
      {
        "text": "Si tu laisses Madame Orla inspecter les flux de données officiellement, va au 44.",
        "targetId": 44,
        "label": "Expertise de Madame Orla"
      },
      {
        "text": "Si tu lui demandes de suspendre immédiatement le compte de Spectre-Zero, va au 45.",
        "targetId": 45,
        "label": "Demande de suspension immédiate"
      }
    ],
    "statsImpact": {
      "serenity": 15,
      "solidarity": 25,
      "trust": 25
    },
    "pedagogicalNote": "S'adresser à un adulte référent avec l'appui de camarades permet de présenter les faits avec sérénité et crédibilité."
  },
  "27": {
    "id": 27,
    "title": "L'observation des clans dans l'amphithéâtre",
    "location": "Amphithéâtre Galilée",
    "act": 2,
    "text": "Assise au milieu de la salle, tu observes la dynamique de groupe. Il y a le noyau dur autour de Vael (3 personnes), les suiveurs qui ricanent pour se faire bien voir (une dizaine), et l'immense majorité silencieuse qui regarde ses écrans sans oser intervenir par peur d'être prise pour cible à son tour.",
    "choices": [
      {
        "text": "Si tu réalises que les harceleurs sont en réalité très minoritaires, va au 46.",
        "targetId": 46,
        "label": "Prendre conscience de la minorité"
      },
      {
        "text": "Si la passivité des témoins te donne envie de tout abandonner, va au 47.",
        "targetId": 47,
        "label": "Découragement face aux témoins"
      }
    ],
    "statsImpact": {
      "serenity": 5,
      "solidarity": 10,
      "trust": 5
    },
    "pedagogicalNote": "Dans le cyber-harcèlement, la majorité silencieuse n'approuve pas les attaques mais n'ose pas bouger par peur de l'isolement. C'est elle qu'il faut mobiliser."
  },
  "28": {
    "id": 28,
    "title": "La vague de signalements bienveillants",
    "location": "Terminal Étudiant • Anneau Central",
    "act": 2,
    "text": "Élior, Naël, Corin et toi rédigez un modèle de signalement citoyen. En moins d'une heure, quinze élèves de votre promotion qui refusaient la toxicité ambiante envoient un rapport concordant au modérateur de bord. Le volume de signalements déclenche automatiquement une mise sous surveillance algorithmique du canal clandestin.",
    "choices": [
      {
        "text": "Si le canal Oxy-Leaks est temporairement gelé par le système, va au 48.",
        "targetId": 48,
        "label": "Gel temporaire du canal"
      },
      {
        "text": "Si l'administrateur riposte en ouvrant un canal miroir sous un autre nom, va au 49.",
        "targetId": 49,
        "label": "Tentative de canal miroir"
      }
    ],
    "statsImpact": {
      "serenity": 20,
      "solidarity": 25,
      "trust": 20,
      "badge": "Signalement Citoyen"
    },
    "pedagogicalNote": "La modération collective montre aux agresseurs que leur comportement n'est pas toléré par la communauté."
  },
  "29": {
    "id": 29,
    "title": "La publication éducative sur les deepfakes",
    "location": "Journal Numérique de Bord • Écran Général",
    "act": 2,
    "text": "Plutôt que de parler de ton cas particulier, vous rédigez avec Corin un article technique passionnant pour le journal de la station : « Comment fonctionnent les deepfakes holographiques et pourquoi leur utilisation malveillante est punie par la loi spatiale ». L'article devient viral pour d'excellentes raisons et plusieurs professeurs le projettent au début de leurs cours.",
    "choices": [
      {
        "text": "Si les élèves commencent à regarder la vidéo moqueuse d'un œil critique et dégoûté, va au 50.",
        "targetId": 50,
        "label": "Regard critique de la classe"
      },
      {
        "text": "Si Vael tente de ridiculiser votre article dans les commentaires, va au 51.",
        "targetId": 51,
        "label": "Dernière riposte de Vael"
      }
    ],
    "statsImpact": {
      "serenity": 25,
      "solidarity": 30,
      "trust": 20,
      "badge": "Éducation Critique"
    },
    "pedagogicalNote": "Sensibiliser aux mécanismes techniques de la désinformation désamorce l'impact des fausses images en redonnant aux élèves leur esprit critique."
  },
  "30": {
    "id": 30,
    "title": "Le refuge bienveillant de l'infirmerie",
    "location": "Infirmerie Centrale • Sas Médical",
    "act": 2,
    "text": "L'Infirmière-Chef Hélène remarque tes cernes prononcés et tes tremblements. Après t'avoir fait boire une tisane sédative légère, elle écoute ton histoire sans t'interrompre : « Tu souffres de surcharge anxieuse induite par agression numérique, Lyra. Ce n'est pas de ta faute. Je valide ton repos médical pour aujourd'hui et je saisis la cellule de veille. »",
    "choices": [
      {
        "text": "Si tu acceptes ce temps de repos pour recharger tes batteries mentales, va au 52.",
        "targetId": 52,
        "label": "Repos médical validé"
      },
      {
        "text": "Si tu demandes à retourner en cours avec le soutien d'un accompagnant, va au 53.",
        "targetId": 53,
        "label": "Retour accompagné en classe"
      }
    ],
    "statsImpact": {
      "serenity": 15,
      "solidarity": 10,
      "trust": 20
    },
    "pedagogicalNote": "Le personnel soignant scolaire est un pilier fondamental pour attester de la souffrance psychique et déclencher la protection institutionnelle."
  },
  "31": {
    "id": 31,
    "title": "L'épuisement dans l'ombre des conduits",
    "location": "Conduit de Ventilation 4-C",
    "act": 2,
    "text": "Tu as passé quatre heures prostrée dans le froid des conduits. Tes muscles sont tétanisés et le sentiment d'humiliation a grandi. Tu reçois un message de tes parents restés sur la colonie minière qui ont reçu une alerte automatique d'absence scolaire et s'inquiètent terriblement.",
    "choices": [
      {
        "text": "Si tu leur réponds en leur avouant toute la vérité par appel sécurisé, va au 54.",
        "targetId": 54,
        "label": "Avouer la vérité aux parents"
      },
      {
        "text": "Si tu mens en disant que tu avais juste mal au ventre, va au 55.",
        "targetId": 55,
        "label": "Mentir par honte"
      }
    ],
    "statsImpact": {
      "serenity": -25,
      "solidarity": -20,
      "trust": -20
    },
    "pedagogicalNote": "Cacher sa situation à sa famille par peur d'inquiéter prive la victime du soutien affectif le plus solide."
  },
  "32": {
    "id": 32,
    "title": "L'interruption nette du professeur d'informatique",
    "location": "Laboratoire d'Informatique Orbitale",
    "act": 2,
    "text": "Monsieur Chen, professeur d'informatique, perçoit les messes basses et le regard mal à l'aise de Lyra. Il suspend soudain son cours et coupe tous les terminaux élèves d'un geste sur son pupitre maître. « Dans ce laboratoire comme partout sur Oxy-Kaelis, les outils de calcul servent à la recherche et à la coopération. Celui qui utilise le réseau pour humilier ses pairs n'a pas sa place derrière un clavier. Vael, fermez votre session et venez à mon bureau. »",
    "choices": [
      {
        "text": "Si tu ressens un immense soulagement de voir l'adulte poser la limite, va au 56.",
        "targetId": 56,
        "label": "Soulagement de l'autorité"
      },
      {
        "text": "Si Vael te lance un regard furieux en sortant de la salle, va au 57.",
        "targetId": 57,
        "label": "Regard noir de Vael"
      }
    ],
    "statsImpact": {
      "serenity": 15,
      "solidarity": 15,
      "trust": 25,
      "badge": "Autorité Protectrice"
    },
    "pedagogicalNote": "L'intervention ferme d'un enseignant en classe casse immédiatement le sentiment d'impunité des harceleurs."
  },
  "33": {
    "id": 33,
    "title": "La notification malveillante de proximité",
    "location": "Laboratoire d'Informatique",
    "act": 2,
    "text": "Un pop-up apparaît sur ton écran : « Oxy-Drop : Accepter le fichier 'Lyra_Pleure_encore.holo' ? ». C'est une provocation directe envoyée depuis la salle même. Vael te regarde avec un sourire narquois, certain que tu vas paniquer.",
    "choices": [
      {
        "text": "Si tu refuses le transfert et actives l'historique d'émission pour prouver l'origine du terminal de Vael, va au 58.",
        "targetId": 58,
        "label": "Refuser et tracer l'émetteur"
      },
      {
        "text": "Si tu acceptes le fichier par curiosité morbide et fonds en larmes, va au 59.",
        "targetId": 59,
        "label": "Accepter le fichier toxique"
      }
    ],
    "statsImpact": {
      "serenity": -10,
      "solidarity": 0,
      "trust": 10
    },
    "pedagogicalNote": "Ne jamais accepter de fichiers non sollicités de source douteuse et régler son terminal en mode 'réception restreinte aux contacts sûrs'."
  },
  "34": {
    "id": 34,
    "title": "Le ticket de signalement en poche",
    "location": "Coursive Centrale",
    "act": 2,
    "text": "Avec ton ticket chiffré #784-NET en poche, tu te sens investie d'une légitimité nouvelle. Tu croises Sylvan, le témoin des bousculades d'Élior au premier trimestre. Il te sourit timidement : « J'ai vu ce qu'ils ont fait sur ComNet. Si tu as besoin d'un témoignage pour dire que cette vidéo est truquée, je suis avec toi. »",
    "choices": [
      {
        "text": "Si tu ajoutes son témoignage au dossier d'enquête, va au 60.",
        "targetId": 60,
        "label": "Intégrer le témoignage de Sylvan"
      },
      {
        "text": "Si tu le remercies chaleureusement pour son courage, va au 26.",
        "targetId": 26,
        "label": "Remercier chaleureusement"
      }
    ],
    "statsImpact": {
      "serenity": 15,
      "solidarity": 25,
      "trust": 20
    },
    "pedagogicalNote": "Un témoignage spontané encourage d'autres témoins à sortir du silence. C'est le début du basculement positif."
  },
  "35": {
    "id": 35,
    "title": "La demande de réquisition d'urgence",
    "location": "Module Médic-Éducatif",
    "act": 2,
    "text": "Avec l'appui de l'écoutante du protocole 3018, vous transmettez une réquisition officielle au Superviseur Technique de la station. En vertu de la directive spatiale de protection des mineurs, le serveur central est sommé de bloquer l'accès au fichier vidéo sur tous les relais d'Oxy-Kaelis sous deux heures.",
    "choices": [
      {
        "text": "Si la vidéo devient inaccessible sur tous les terminaux de la station, va au 61.",
        "targetId": 61,
        "label": "Blocage technique du contenu"
      },
      {
        "text": "Si des copies locales continuent de circuler de main en main par clé physique, va au 62.",
        "targetId": 62,
        "label": "Circulation sous le manteau"
      }
    ],
    "statsImpact": {
      "serenity": 20,
      "solidarity": 15,
      "trust": 30,
      "badge": "Suppression Légale"
    },
    "pedagogicalNote": "La réquisition de retrait de contenu est l'arme juridique la plus puissante pour stopper la diffusion virale d'une humiliation."
  },
  "36": {
    "id": 36,
    "title": "La séance d'écoute et de décompression",
    "location": "Module Médic-Éducatif",
    "act": 2,
    "text": "L'écoutante te guide dans un exercice de respiration synchronisée. Elle met des mots précis sur ce que tu ressens : le sentiment de viol de ton intimité, la sensation que mille yeux te jugent, l'angoisse du lendemain. « Lyra, ce que tu ressens est normal face à une agression anormale. Tu n'as rien fait de mal. » Ces paroles simples te libèrent d'un poids immense.",
    "choices": [
      {
        "text": "Si tu te sens prête à affronter la suite avec une énergie renouvelée, va au 26.",
        "targetId": 26,
        "label": "Énergie retrouvée"
      },
      {
        "text": "Si tu préfères rester encore un peu au calme dans le module, va au 52.",
        "targetId": 52,
        "label": "Prolonger le calme"
      }
    ],
    "statsImpact": {
      "serenity": 25,
      "solidarity": 15,
      "trust": 25,
      "badge": "Libération Émotionnelle"
    },
    "pedagogicalNote": "Mettre des mots sur le traumatisme avec un professionnel brise le sentiment de culpabilité que ressentent souvent les victimes de harcèlement."
  },
  "37": {
    "id": 37,
    "title": "Le piège de la confrontation prématurée",
    "location": "Réfectoire des Synthèses",
    "act": 2,
    "text": "Tu tentes de brandir des arguments techniques devant Vael au milieu du réfectoire. Mais sans l'autorité d'un adulte, Vael inverse la situation en prenant les témoins à partie : « Écoutez-la ! Elle passe sa vie à espionner nos terminaux, c'est elle la vraie parano ! » Plusieurs élèves rient bêtement. Tu repars blessée et furieuse.",
    "choices": [
      {
        "text": "Si tu rejoins Élior et Naël pour reprendre la méthode légale, va au 26.",
        "targetId": 26,
        "label": "Reprendre la méthode légale"
      },
      {
        "text": "Si tu te laisses submerger par les larmes dans les coursives, va au 8.",
        "targetId": 8,
        "label": "Submergée par les larmes"
      }
    ],
    "statsImpact": {
      "serenity": -15,
      "solidarity": -10,
      "trust": 0
    },
    "pedagogicalNote": "Discuter publiquement avec un harceleur dans son arène lui donne l'occasion de manipuler le public. La preuve doit être remise aux adultes, pas négociée avec l'agresseur."
  },
  "38": {
    "id": 38,
    "title": "L'aveu courageux à Madame Orla",
    "location": "Centre des Serveurs ComNet",
    "act": 2,
    "text": "Le cœur serré, tu cours au bureau de Madame Orla et lui montres l'alerte d'intrusion : « Madame, j'ai failli commettre une grave bêtise. J'ai voulu hacker le compte de Spectre-Zero par colère parce qu'il me harcèle sur Oxy-Leaks. » Madame Orla te regarde avec sévérité, puis son regard s'adoucit : « Tu as violé le règlement informatique, Lyra. Mais tu viens me le dire de toi-même avant que le système ne sévisse. Montre-moi ce canal. »",
    "choices": [
      {
        "text": "Si elle prend l'affaire en main en suspendant ta sanction au profit d'une enquête complète, va au 44.",
        "targetId": 44,
        "label": "Enquête prioritaire"
      },
      {
        "text": "Si elle t'impose d'abord un rappel au règlement avant de traiter le harcèlement, va au 63.",
        "targetId": 63,
        "label": "Rappel au règlement"
      }
    ],
    "statsImpact": {
      "serenity": 5,
      "solidarity": 10,
      "trust": 20
    },
    "pedagogicalNote": "Reconnaître ses erreurs auprès des adultes désamorce la sanction et permet de recentrer l'attention sur la cause profonde du passage à l'acte : le harcèlement."
  },
  "39": {
    "id": 39,
    "title": "L'aggravation de la faute technique",
    "location": "Atelier Informatique",
    "act": 2,
    "text": "En tentant d'effacer les traces de ton piratage, tu déclenches une seconde alarme de sécurité. L'Officier de Sécurité Kroll arrive dans la pièce et te surprend les doigts sur le clavier en mode administrateur interdit. Te voilà accusée de sabotage informatique, tandis que Vael jubile en silence.",
    "choices": [
      {
        "text": "Si tu t'effondres en larmes et expliques enfin toute l'histoire de cyber-harcèlement à Kroll, va au 64.",
        "targetId": 64,
        "label": "Tout avouer à Kroll"
      },
      {
        "text": "Si tu t'enfermes dans un mutisme hostile, va au 65.",
        "targetId": 65,
        "label": "Mutisme hostile"
      }
    ],
    "statsImpact": {
      "serenity": -30,
      "solidarity": -20,
      "trust": -25
    },
    "pedagogicalNote": "Tenter de dissimuler une faute informatique sur un réseau supervisé aggrave la situation. La vérité immédiate est toujours la seule issue salvatrice."
  },
  "40": {
    "id": 40,
    "title": "La découverte des métadonnées incriminantes",
    "location": "Atelier Informatique • Poste Sécurisé",
    "act": 2,
    "text": "En analysant proprement le fichier vidéo public sans enfreindre aucune règle, tu inspectes les métadonnées EXIF et les logs de compression. Surprise : le fichier original a été exporté depuis un terminal modèle 'Aero-7' avec le numéro de série #VK-889. C'est exactement le modèle de terminal personnalisé de Vael !",
    "choices": [
      {
        "text": "Si tu enregistres cette preuve formelle pour le dossier officiel, va au 66.",
        "targetId": 66,
        "label": "Preuve formelle du terminal"
      },
      {
        "text": "Si tu montres cette découverte immédiatement à tes amis, va au 26.",
        "targetId": 26,
        "label": "Partager la preuve aux amis"
      }
    ],
    "statsImpact": {
      "serenity": 20,
      "solidarity": 20,
      "trust": 20,
      "badge": "Détective Numérique"
    },
    "pedagogicalNote": "L'analyse rigoureuse des données publiques permet souvent d'identifier les auteurs sans jamais commettre d'acte illégal."
  },
  "41": {
    "id": 41,
    "title": "Le ralliement de Darek",
    "location": "Cafétéria des Synthèses",
    "act": 2,
    "text": "Darek vient s'asseoir à ta table. Devant d'autres élèves, il s'exprime clairement : « J'ai supprimé mon partage et je voulais m'excuser, Lyra. Ce canal Oxy-Leaks est devenu un égout. Si vous faites un signalement, vous pouvez dire que j'étais témoin de la supercherie. » Son changement de camp fait l'effet d'une onde de choc parmi les suiveurs.",
    "choices": [
      {
        "text": "Si d'autres élèves suivent son exemple et quittent le canal toxique, va au 67.",
        "targetId": 67,
        "label": "Défections en masse"
      },
      {
        "text": "Si Vael commence à insulter Darek de traître sur le réseau, va au 68.",
        "targetId": 68,
        "label": "Vael s'en prend à Darek"
      }
    ],
    "statsImpact": {
      "serenity": 20,
      "solidarity": 30,
      "trust": 20,
      "badge": "Cercle Positif"
    },
    "pedagogicalNote": "Quand un suiveur se désolidarise publiquement, il brise l'illusion de consensus du groupe et libère la parole des autres."
  },
  "42": {
    "id": 42,
    "title": "Le retournement d'opinion chez les pairs",
    "location": "Coursive des Casiers",
    "act": 2,
    "text": "Dans les couloirs, plusieurs élèves viennent spontanément te voir : « Franchement Lyra, ce montage était nul », « On sait tous que tu es une des meilleures recrues en navigation ». Le mur de ricanements commence à s'effriter sous le poids de la simple honnêteté.",
    "choices": [
      {
        "text": "Si tu te sens réconfortée et prête à porter l'affaire devant le Conseil, va au 69.",
        "targetId": 69,
        "label": "Cap sur le Conseil d'Éthique"
      },
      {
        "text": "Si tu restes vigilante face aux provocations résiduelles, va au 26.",
        "targetId": 26,
        "label": "Vigilance et consolidation"
      }
    ],
    "statsImpact": {
      "serenity": 15,
      "solidarity": 25,
      "trust": 15
    },
    "pedagogicalNote": "Le soutien des pairs neutralise la toxicité du harcèlement et restaure la confiance en soi."
  },
  "43": {
    "id": 43,
    "title": "La pause nécessaire et la reprise en main",
    "location": "Sas de Décompression • Niveau 1",
    "act": 2,
    "text": "Assise sur un banc métallique, tu respires calmement. Tu as compris la leçon : ne plus jamais céder aux provocations en ligne. Tu contactes la médiatrice Soa pour lui raconter l'incident en toute transparence.",
    "choices": [
      {
        "text": "Si Soa t'aide à recadrer l'échange avec Darek dans un cadre apaisé, va au 41.",
        "targetId": 41,
        "label": "Médiation apaisée avec Darek"
      },
      {
        "text": "Si tu rejoins le groupe de soutien de tes camarades, va au 15.",
        "targetId": 15,
        "label": "Rejoindre les amis"
      }
    ],
    "statsImpact": {
      "serenity": 10,
      "solidarity": 10,
      "trust": 15
    },
    "pedagogicalNote": "Prendre du recul après une erreur de communication permet de corriger le tir avant que les dégâts ne soient irréparables."
  },
  "44": {
    "id": 44,
    "title": "L'enquête informatique officielle de Madame Orla",
    "location": "Centre des Serveurs ComNet",
    "act": 2,
    "text": "Madame Orla branche sa console d'auditrice en chef. Ses doigts parcourent le clavier avec une virtuosité stupéfiante. En trois minutes, elle remonte la trace du protocole de routage d'Oxy-Leaks. « Ce n'est pas un canal crypté indestructible, c'est un simple script masqué hébergé sur le relais du secteur dortoir des Cycles Supérieurs. L'administrateur a laissé sa signature numérique partout. »",
    "choices": [
      {
        "text": "Si elle rédige un rapport formel destiné au Conseil d'Éthique de la station, va au 70.",
        "targetId": 70,
        "label": "Rapport formel d'audit"
      },
      {
        "text": "Si elle convoque immédiatement le titulaire du compte pour une explication, va au 71.",
        "targetId": 71,
        "label": "Convocation immédiate"
      }
    ],
    "statsImpact": {
      "serenity": 25,
      "solidarity": 20,
      "trust": 30,
      "badge": "Vérité Technique"
    },
    "pedagogicalNote": "L'anonymat sur un réseau supervisé est une pure illusion : les administrateurs systèmes ont toujours les moyens techniques d'identifier les auteurs d'infractions."
  },
  "45": {
    "id": 45,
    "title": "La mesure conservatoire de blocage",
    "location": "Centre des Serveurs ComNet",
    "act": 2,
    "text": "Madame Orla active le bouton rouge de modération conservatoire : le flux du canal Oxy-Leaks est instantanément verrouillé sur toute la station. Sur les terminaux de tous les élèves s'affiche désormais un panneau noir officiel : « CANAL SUSPENDU POUR ENQUÊTE DISCIPLINAIRE RELATIVE AU HARCÈLEMENT NUMÉRIQUE ».",
    "choices": [
      {
        "text": "Si ce coup d'arrêt spectaculaire met fin à l'angoisse immédiate, va au 72.",
        "targetId": 72,
        "label": "Coup d'arrêt salutaire"
      },
      {
        "text": "Si les complices de Vael s'agitent dans les coursives, va au 73.",
        "targetId": 73,
        "label": "Agitation des complices"
      }
    ],
    "statsImpact": {
      "serenity": 20,
      "solidarity": 15,
      "trust": 25,
      "badge": "Suspension Conservatoire"
    },
    "pedagogicalNote": "La suspension immédiate des espaces toxiques protège la victime et signale à l'ensemble de l'établissement que l'impunité est terminée."
  },
  "46": {
    "id": 46,
    "title": "La force de la lucidité",
    "location": "Amphithéâtre Galilée",
    "act": 2,
    "text": "En regardant la salle, le voile de peur tombe. Tu réalises que Vael et ses complices ne sont que trois élèves isolés qui utilisent le bruit du réseau pour faire croire qu'ils sont puissants. Le reste de la promotion attendait juste que quelqu'un ose se dresser contre eux.",
    "choices": [
      {
        "text": "Si tu proposes à tes camarades de classe de lancer une initiative positive, va au 74.",
        "targetId": 74,
        "label": "Initiative positive de classe"
      },
      {
        "text": "Si tu te concentres sereinement sur tes révisions, va au 14.",
        "targetId": 14,
        "label": "Retour au travail serein"
      }
    ],
    "statsImpact": {
      "serenity": 20,
      "solidarity": 20,
      "trust": 15
    },
    "pedagogicalNote": "Prendre conscience que les harceleurs sont ultra-minoritaires brise le pouvoir psychologique qu'ils exercent sur le groupe."
  },
  "47": {
    "id": 47,
    "title": "Le réveil par les mots de Naël",
    "location": "Jardin Botanique Orbital",
    "act": 2,
    "text": "Alors que tu es assise près des serres hydroponiques, Naël s'approche : « Lyra, j'ai vécu ce rejet silencieux au premier trimestre. Si tu baisses les bras, ils ont gagné sans combattre. Le silence des autres n'est pas de la haine, c'est de la trouille. Montre-leur qu'on n'a plus peur, et ils te suivront. » Ses paroles résonnent profondément en toi.",
    "choices": [
      {
        "text": "Si tu te redresses prête à agir avec tes amis, va au 15.",
        "targetId": 15,
        "label": "Se redresser avec le quatuor"
      },
      {
        "text": "Si tu vas déposer ton dossier de preuves avec Naël, va au 26.",
        "targetId": 26,
        "label": "Déposer les preuves"
      }
    ],
    "statsImpact": {
      "serenity": 15,
      "solidarity": 25,
      "trust": 20
    },
    "pedagogicalNote": "L'entraide entre ceux qui ont surmonté le harcèlement est une source inestimable de résilience et d'espérance."
  },
  "48": {
    "id": 48,
    "title": "Le gel du canal et la surprise des suiveurs",
    "location": "Anneau Central",
    "act": 2,
    "text": "La nouvelle fait le tour de la station : le canal Oxy-Leaks a été gelé par la modération centrale suite aux signalements massifs. Plusieurs élèves qui participaient 'pour rigoler' paniquent à l'idée que leurs noms figurent dans les logs d'enquête. Le rapport de force s'inverse complètement.",
    "choices": [
      {
        "text": "Si deux élèves viennent s'excuser auprès de toi par crainte des sanctions, va au 75.",
        "targetId": 75,
        "label": "Excuses opportunistes des suiveurs"
      },
      {
        "text": "Si tu te réjouis de voir la justice avancer, va au 70.",
        "targetId": 70,
        "label": "Justice en marche"
      }
    ],
    "statsImpact": {
      "serenity": 20,
      "solidarity": 25,
      "trust": 25
    },
    "pedagogicalNote": "Quand l'institution intervient, la lâcheté des suiveurs apparaît au grand jour et le harceleur principal perd son armée de complices."
  },
  "49": {
    "id": 49,
    "title": "La tentative désespérée de canal miroir",
    "location": "Terminal Privé",
    "act": 2,
    "text": "Dans un dernier sursaut de défi, Spectre-Zero tente d'ouvrir un canal miroir intitulé 'Oxy-Leaks 2.0'. Mais cette fois, le filtre de surveillance algorithmique le bloque en moins de quatre secondes, tout en enregistrant le terminal émetteur sur la liste rouge de la station.",
    "choices": [
      {
        "text": "Si la tentative avortée signe la fin de l'anonymat de l'agresseur, va au 66.",
        "targetId": 66,
        "label": "Fin de l'anonymat"
      },
      {
        "text": "Si tu préviens Madame Orla de cette tentative de récidive, va au 44.",
        "targetId": 44,
        "label": "Alerter de la récidive"
      }
    ],
    "statsImpact": {
      "serenity": 20,
      "solidarity": 20,
      "trust": 25
    },
    "pedagogicalNote": "La récidive sur un réseau surveillé aggrave considérablement le cas des auteurs et facilite leur identification définitive."
  },
  "50": {
    "id": 50,
    "title": "Le changement de regard des élèves",
    "location": "Amphithéâtre Galilée",
    "act": 2,
    "text": "Grâce à votre article technique, les élèves regardent désormais le montage pour ce qu'il est : une manipulation grossière et lâche. Lors d'un atelier pratique, une élève prend la parole : « Franchement, truquer la vidéo de quelqu'un pour le lyncher en ligne, c'est minable. Bravo Lyra pour ton article. » Un tonnerre d'applaudissements éclate dans la salle.",
    "choices": [
      {
        "text": "Si tu savoures cette victoire éclatante de l'intelligence collective, va au 76.",
        "targetId": 76,
        "label": "Victoire de l'intelligence"
      },
      {
        "text": "Si tu prépares la formalisation de la Charte Numérique, va au 77.",
        "targetId": 77,
        "label": "Cap vers la Charte"
      }
    ],
    "statsImpact": {
      "serenity": 30,
      "solidarity": 35,
      "trust": 25,
      "badge": "Reconnaissance des Pairs"
    },
    "pedagogicalNote": "Élever le débat par la pédagogie transforme une agression humiliante en opportunité de progrès moral pour toute une promotion."
  },
  "51": {
    "id": 51,
    "title": "Le commentaire haineux de trop",
    "location": "Canal Public d'Information",
    "act": 3,
    "text": "En rage d'avoir perdu le contrôle, Vael poste sous son propre compte un commentaire haineux visant ton travail : « De toute façon Lyra ne sait que pleurer et se faire plaindre par les profs ! » Cette fois, le commentaire est public, non anonyme, et enfreint directement le règlement de courtoisie d'Oxy-Kaelis.",
    "choices": [
      {
        "text": "If you take a certified capture of this public attack, go to 66.",
        "targetId": 66,
        "label": "Capturer la preuve flagrante"
      },
      {
        "text": "Si les autres élèves recadrent immédiatement Vael dans les réponses, va au 78.",
        "targetId": 78,
        "label": "Recadrage collectif par les élèves"
      }
    ],
    "statsImpact": {
      "serenity": 15,
      "solidarity": 25,
      "trust": 20
    },
    "pedagogicalNote": "Poussés dans leurs retranchements, les harceleurs commettent souvent l'erreur fatale de s'exposer à découvert."
  },
  "52": {
    "id": 52,
    "title": "La parenthèse de sérénité à l'infirmerie",
    "location": "Module Médic-Éducatif • Chambre Calme",
    "act": 3,
    "text": "Allongée dans une cabine insonorisée avec une vue imprenable sur les étoiles, tu as enfin pu dormir profondément. Ton biosenseur émotionnel est repassé au vert. Tu te lèves reposée, lucide, prête à défendre tes droits sans crainte.",
    "choices": [
      {
        "text": "Si tu rejoins tes amis pour finaliser le dossier de signalement, va au 26.",
        "targetId": 26,
        "label": "Finaliser le dossier"
      },
      {
        "text": "Si tu vas directement témoigner devant l'Officier Kroll, va au 70.",
        "targetId": 70,
        "label": "Témoigner devant Kroll"
      }
    ],
    "statsImpact": {
      "serenity": 30,
      "solidarity": 10,
      "trust": 20
    },
    "pedagogicalNote": "Se reposer et retrouver ses forces physiques est indispensable avant d'aborder les démarches de résolution d'un conflit."
  },
  "53": {
    "id": 53,
    "title": "Le retour épaulé en cours",
    "location": "Amphithéâtre Galilée",
    "act": 3,
    "text": "Soa, la médiatrice, t'accompagne jusqu'à la porte de l'amphithéâtre. Sa présence rassurante à tes côtés montre à tous que tu bénéficies d'un soutien institutionnel officiel. Tu t'assois à côté d'Élior qui te garde une place avec un grand sourire.",
    "choices": [
      {
        "text": "Si tu participes activement au cours avec brio, va au 79.",
        "targetId": 79,
        "label": "Participation brillante"
      },
      {
        "text": "Si tu prépares ton intervention pour l'heure de vie de classe, va au 80.",
        "targetId": 80,
        "label": "Préparer l'heure de classe"
      }
    ],
    "statsImpact": {
      "serenity": 20,
      "solidarity": 25,
      "trust": 25
    },
    "pedagogicalNote": "Être accompagné par un médiateur lors du retour en classe sécurise la victime et dissuade les regards malveillants."
  },
  "54": {
    "id": 54,
    "title": "Le soutien inconditionnel de la famille",
    "location": "Cabine de Communication Sub-Spatiale",
    "act": 3,
    "text": "L'hologramme de tes parents apparaît dans la cabine. En voyant ton visage décomposé, ta mère comprend tout de suite. Tu leur racontes tout, sans rien cacher. Ton père te dit d'une voix vibrante d'amour : « Lyra, nous sommes tellement fiers de toi. Ne laisse personne te faire croire que tu as fait une faute. Nous contactons la direction de la station immédiatement pour exiger ta protection. » Tu pleures, mais ce sont des larmes de soulagement.",
    "choices": [
      {
        "text": "Si ce soutien familial te redonne une force immense, va au 26.",
        "targetId": 26,
        "label": "Force retrouvée grâce aux proches"
      },
      {
        "text": "Si les parents saisissent le commandeur d'Oxy-Kaelis, va au 70.",
        "targetId": 70,
        "label": "Saisine du commandeur"
      }
    ],
    "statsImpact": {
      "serenity": 25,
      "solidarity": 15,
      "trust": 30,
      "badge": "Bouclier Familial"
    },
    "pedagogicalNote": "L'amour et le soutien des parents constituent le rempart affectif le plus solide face aux violences scolaires."
  },
  "55": {
    "id": 55,
    "title": "L'enfermement dans le mensonge",
    "location": "Cabine de Repos Individuelle",
    "act": 3,
    "text": "Tu as menti à tes parents en prétendant un simple coup de fatigue. Mais une fois la communication coupée, le sentiment de culpabilité te submerge. Tu es seule avec ton secret, ton terminal qui continue de vibrer et la peur du lendemain.",
    "choices": [
      {
        "text": "Si tu te ravises et rappelles aussitôt tes parents pour leur dire la vérité, va au 54.",
        "targetId": 54,
        "label": "Rappeler et dire la vérité"
      },
      {
        "text": "Si tu tentes de tenir seule sans en parler à personne, va au 81.",
        "targetId": 81,
        "label": "Tenir seule sans aide"
      }
    ],
    "statsImpact": {
      "serenity": -20,
      "solidarity": -15,
      "trust": -20
    },
    "pedagogicalNote": "Garder le secret pour soi protège faussement l'agresseur et épuise la victime. Il faut toujours oser dire la vérité."
  },
  "56": {
    "id": 56,
    "title": "L'entretien disciplinaire de Vael",
    "location": "Bureau de la Direction Pédagogique",
    "act": 3,
    "text": "Monsieur Chen a conduit Vael dans le bureau de l'Officier Kroll. À travers la cloison vitrée, tu vois Vael perdre toute sa superbe face aux journaux de connexion incontestables présentés par Madame Orla. L'illusion du harceleur intouchable s'effondre en quelques minutes.",
    "choices": [
      {
        "text": "Si Kroll te convoque pour recueillir ta déposition sereine, va au 70.",
        "targetId": 70,
        "label": "Déposition sereine"
      },
      {
        "text": "Si Vael tente d'accuser ses complices pour minimiser son rôle, va au 82.",
        "targetId": 82,
        "label": "Effondrement du groupe harceleur"
      }
    ],
    "statsImpact": {
      "serenity": 20,
      "solidarity": 15,
      "trust": 30
    },
    "pedagogicalNote": "Confrontés aux preuves matérielles devant l'autorité, les harceleurs perdent leur arrogance et se rejettent souvent la faute les uns sur les autres."
  },
  "57": {
    "id": 57,
    "title": "Le regard de défi impuissant",
    "location": "Laboratoire d'Informatique",
    "act": 3,
    "text": "Vael te jette un regard plein de haine en quittant la salle. Mais ce regard n'est plus effrayant : c'est celui d'un élève pris la main dans le sac, qui sait que son jeu est terminé. Élior te pose une main réconfortante sur l'épaule : « C'est fini pour lui, Lyra. »",
    "choices": [
      {
        "text": "Si tu te concentres sur la réussite de ton exercice de navigation, va au 79.",
        "targetId": 79,
        "label": "Réussite de l'exercice"
      },
      {
        "text": "Si tu prépares ton témoignage pour l'enquête officielle, va au 70.",
        "targetId": 70,
        "label": "Préparer son témoignage"
      }
    ],
    "statsImpact": {
      "serenity": 15,
      "solidarity": 20,
      "trust": 20
    },
    "pedagogicalNote": "Quand l'agresseur est désarmé par l'autorité, ses menaces ne sont plus que des gesticulations sans pouvoir."
  },
  "58": {
    "id": 58,
    "title": "Le traçage indiscutable du transfert de proximité",
    "location": "Laboratoire d'Informatique",
    "act": 3,
    "text": "En refusant le transfert malveillant, ton terminal a automatiquement consigné l'adresse matérielle MAC de l'émetteur : le poste #4 de la rangée de fond, où se trouve précisément Vael. Tu lèves immédiatement la main : « Monsieur Chen, je viens de recevoir une tentative de transfert non sollicité contenant un fichier diffamatoire depuis le poste 4. »",
    "choices": [
      {
        "text": "Si Monsieur Chen constate le flagrant délit sur le champ, va au 56.",
        "targetId": 56,
        "label": "Flagrant délit constaté"
      },
      {
        "text": "Si Vael tente d'éteindre son terminal en panique, va au 83.",
        "targetId": 83,
        "label": "Panique de Vael"
      }
    ],
    "statsImpact": {
      "serenity": 20,
      "solidarity": 15,
      "trust": 25,
      "badge": "Flagrant Délit"
    },
    "pedagogicalNote": "Alerter l'enseignant immédiatement en situation de flagrant délit permet de figer les preuves matérielles sans contestation possible."
  },
  "59": {
    "id": 59,
    "title": "Le choc émotionnel évité de justesse",
    "location": "Laboratoire d'Informatique",
    "act": 3,
    "text": "Tu as failli cliquer sur accepter, mais la main de Corin s'est posée sur ta souris : « Ne regarde pas ça, Lyra. C'est exactement ce qu'il cherche. Laisse-moi noter le code de son terminal. » Ce geste protecteur de ton camarade t'évite une humiliation inutile.",
    "choices": [
      {
        "text": "Si tu remercies Corin et alertes le professeur avec lui, va au 58.",
        "targetId": 58,
        "label": "Alerter le professeur avec Corin"
      },
      {
        "text": "Si tu reprends ton souffle avec reconnaissance, va au 17.",
        "targetId": 17,
        "label": "Reprendre son souffle"
      }
    ],
    "statsImpact": {
      "serenity": 15,
      "solidarity": 25,
      "trust": 15
    },
    "pedagogicalNote": "Un témoin attentif peut physiquement et moralement protéger une victime en l'empêchant de s'exposer à nouveau aux contenus toxiques."
  },
  "60": {
    "id": 60,
    "title": "Le dossier consolidé par les témoins",
    "location": "Salle des Éclaireurs • Secteur 2",
    "act": 3,
    "text": "Sylvan et Darek rédigent chacun une attestation sur l'honneur certifiant la supercherie et l'origine du trucage. Ton dossier comprend désormais : les captures horodatées, le rapport de suppression 3018, les logs de Madame Orla et deux témoignages d'élèves. C'est un dossier inattaquable.",
    "choices": [
      {
        "text": "Si tu remets le dossier complet à la direction pour l'audience disciplinaire, va au 70.",
        "targetId": 70,
        "label": "Remise du dossier complet"
      },
      {
        "text": "Si vous décidez de proposer une démarche de médiation réparatrice, va au 84.",
        "targetId": 84,
        "label": "Option médiation réparatrice"
      }
    ],
    "statsImpact": {
      "serenity": 25,
      "solidarity": 30,
      "trust": 30,
      "badge": "Dossier Inattaquable"
    },
    "pedagogicalNote": "Un dossier solide et bien documenté garantit que l'institution prendra des mesures justes et proportionnées sans ambiguïté."
  },
  "61": {
    "id": 61,
    "title": "L'écran noir sur toute la station",
    "location": "Tous Terminaux • Oxy-Kaelis",
    "act": 3,
    "text": "L'ordre de réquisition a été appliqué à la vitesse de la lumière. Tous les liens menant à la fausse vidéo renvoient désormais une page d'erreur : « CONTENU SUPPRIMÉ PAR DÉCISION JUDICIAIRE DE LA RÉGULATION SPATIALE ». Les élèves qui tentent d'y accéder comprennent instantanément que la plaisanterie a basculé dans l'infraction pénale.",
    "choices": [
      {
        "text": "Si tu respires enfin en constatant la disparition complète du fichier, va au 85.",
        "targetId": 85,
        "label": "Disparition du contenu toxique"
      },
      {
        "text": "Si tu participes à l'assemblée des délégués pour en tirer les leçons, va au 80.",
        "targetId": 80,
        "label": "Assemblée des délégués"
      }
    ],
    "statsImpact": {
      "serenity": 30,
      "solidarity": 20,
      "trust": 30,
      "badge": "Nettoyage Numérique"
    },
    "pedagogicalNote": "La suppression rapide des contenus diffamatoires est essentielle pour stopper l'hémorragie émotionnelle de la victime."
  },
  "62": {
    "id": 62,
    "title": "La neutralisation des copies physiques",
    "location": "Coursive des Casiers",
    "act": 3,
    "text": "Deux fidèles de Vael tentent de montrer la vidéo sur un mini-projecteur de poche près des casiers. Mais Élior et Corin s'interposent immédiatement avec fermeté : « Cette vidéo a été jugée illégale par la station. Si vous continuez à la diffuser, vous devenez complices d'un délit. Rangez ça. » Face à la détermination d'Élior, les deux élèves rangent leur appareil honteux.",
    "choices": [
      {
        "text": "Si tu es touchée par la protection active de tes amis dans les coursives, va au 85.",
        "targetId": 85,
        "label": "Protection active des amis"
      },
      {
        "text": "Si un surveillant intervient pour confisquer l'appareil, va au 70.",
        "targetId": 70,
        "label": "Confiscation par l'adulte"
      }
    ],
    "statsImpact": {
      "serenity": 20,
      "solidarity": 30,
      "trust": 25
    },
    "pedagogicalNote": "La solidarité active des témoins sur le terrain coupe court aux tentatives de contournement des interdictions numériques."
  },
  "63": {
    "id": 63,
    "title": "Le recadrage pédagogique et l'écoute bienveillante",
    "location": "Centre des Serveurs ComNet",
    "act": 3,
    "text": "Madame Orla te regarde droit dans les yeux : « Lyra, ton intention était de te défendre, mais la loi informatique protège tout le monde, y compris toi. Tu feras deux heures d'intérêt général à m'aider à auditer la sécurité du réseau. Maintenant, occupons-nous de ceux qui t'ont poussée à bout. » Tu acceptes la sanction avec respect car elle est juste.",
    "choices": [
      {
        "text": "Si vous travaillez ensemble à la sécurisation des canaux étudiants, va au 70.",
        "targetId": 70,
        "label": "Sécurisation et enquête"
      },
      {
        "text": "Si tu te sens valorisée par la confiance que t'accorde l'adulte, va au 44.",
        "targetId": 44,
        "label": "Confiance de l'adulte"
      }
    ],
    "statsImpact": {
      "serenity": 15,
      "solidarity": 15,
      "trust": 25
    },
    "pedagogicalNote": "Une sanction éducative juste, assortie d'une écoute sincère, restaure l'alliance de confiance entre l'élève et l'institution."
  },
  "64": {
    "id": 64,
    "title": "Le désarmement par les larmes de vérité",
    "location": "Atelier Informatique",
    "act": 3,
    "text": "Devant l'Officier Kroll, tu craques complètement et dévoiles tout : les nuits sans sommeil, le photomontage truqué, le sentiment de lynchage permanent. Kroll pose son carnet, adoucit sa voix bourrue et s'assoit en face de toi : « Respire, petite. Personne ne va t'exclure. Nous savons maintenant pourquoi tu as paniqué. C'est l'agression que tu subis qui est le problème, et nous allons y mettre bon ordre. »",
    "choices": [
      {
        "text": "Si Kroll prend personnellement en main la protection de ta promotion, va au 70.",
        "targetId": 70,
        "label": "Protection par Kroll"
      },
      {
        "text": "Si tu es reconduite en sécurité à l'infirmerie, va au 52.",
        "targetId": 52,
        "label": "Retour au calme à l'infirmerie"
      }
    ],
    "statsImpact": {
      "serenity": 15,
      "solidarity": 10,
      "trust": 30
    },
    "pedagogicalNote": "Exprimer sa détresse avec authenticité permet aux figures d'autorité de comprendre la dynamique du harcèlement et de protéger la victime."
  },
  "65": {
    "id": 65,
    "title": "L'impasse du silence obstiné",
    "location": "Bureau de Sécurité • Sas Disciplinaire",
    "act": 3,
    "text": "Par fierté et défiance, tu refuses de parler. Kroll n'a sous les yeux que le rapport d'intrusion informatique. Sans explications sur le cyber-harcèlement sous-jacent, la commission te sanctionne d'une exclusion temporaire de trois jours. Dans ta cabine, tu réalises avec effroi que ton mutisme a offert une victoire totale à Vael.",
    "choices": [
      {
        "text": "Si tu te ressaisis et écris une lettre complète à la direction pour tout révéler, va au 86.",
        "targetId": 86,
        "label": "Lettre de vérité salvatrice"
      },
      {
        "text": "Si tu t'enfonces dans la rancœur et l'isolement, va au 87.",
        "targetId": 87,
        "label": "Rancœur et isolement"
      }
    ],
    "statsImpact": {
      "serenity": -30,
      "solidarity": -25,
      "trust": -30
    },
    "pedagogicalNote": "Le mutisme est le meilleur allié du harceleur : en refusant d'expliquer le contexte, la victime prend seule les sanctions destinées aux coupables."
  },
  "66": {
    "id": 66,
    "title": "L'identification irréfutable de Spectre-Zero",
    "location": "Centre des Serveurs • Écran Principal",
    "act": 3,
    "text": "Les preuves concordantes parlent d'elles-mêmes : numéro de série du terminal VK-889, adresse MAC interceptée au laboratoire, logs de connexion nocturnes. Madame Orla clique sur 'Démasquer l'utilisateur'. Le visage de Vael s'affiche en grand sur l'écran d'audit avec la mention : « TITULAIRE DU COMPTE SPECTRE-ZERO ». L'anonymat est brisé.",
    "choices": [
      {
        "text": "Si Madame Orla transmet le dossier au Conseil de Discipline d'Oxy-Kaelis, va au 88.",
        "targetId": 88,
        "label": "Transmission au Conseil de Discipline"
      },
      {
        "text": "Si Soa propose une procédure de Réparation Restaurative avant sanction lourde, va au 84.",
        "targetId": 84,
        "label": "Voie de la réparation restaurative"
      }
    ],
    "statsImpact": {
      "serenity": 30,
      "solidarity": 25,
      "trust": 35,
      "badge": "Masque Tombé"
    },
    "pedagogicalNote": "Faire tomber le masque de l'anonymat numérique transforme l'agresseur en citoyen responsable devant répondre de ses actes devant la loi."
  },
  "67": {
    "id": 67,
    "title": "L'hémorragie des membres du canal clandestin",
    "location": "Réseau ComNet Étudiant",
    "act": 3,
    "text": "Après la prise de position courageuse de Darek, c'est l'effondrement : en deux heures, plus de soixante élèves quittent le canal Oxy-Leaks. Plusieurs postent des messages de soutien à Lyra avant de se désabonner : « Courage Lyra », « Stop à ces mèmes nuls ». Vael se retrouve pratiquement seul sur son propre canal.",
    "choices": [
      {
        "text": "Si cette solidarité spontanée redonne un élan magnifique à ta scolarité, va au 89.",
        "targetId": 89,
        "label": "Élan de solidarité magnifique"
      },
      {
        "text": "Si vous lancez la création d'un canal d'entraide officiel, va au 77.",
        "targetId": 77,
        "label": "Créer un canal d'entraide"
      }
    ],
    "statsImpact": {
      "serenity": 25,
      "solidarity": 35,
      "trust": 25,
      "badge": "Vague Solidaire"
    },
    "pedagogicalNote": "L'effet de meute peut s'inverser très rapidement dès lors que des figures positives osent montrer la voie du respect."
  },
  "68": {
    "id": 68,
    "title": "Le soutien fraternel face à la dernière provocation",
    "location": "Cafétéria des Synthèses",
    "act": 3,
    "text": "Quand Vael tente d'intimider Darek pour avoir parlé, Élior, Naël et Corin se lèvent en même temps et viennent entourer Darek avec calme. Élior regarde Vael : « C'est terminé, Vael. Plus personne n'a peur de tes écrans ici. » Vael baisse les yeux et s'en va sans dire un mot. L'emprise est brisée.",
    "choices": [
      {
        "text": "Si tu rejoins la table pour remercier tous tes camarades, va au 89.",
        "targetId": 89,
        "label": "Table de la fraternité"
      },
      {
        "text": "Si vous préparez ensemble l'heure de médiation collective, va au 80.",
        "targetId": 80,
        "label": "Préparer la médiation"
      }
    ],
    "statsImpact": {
      "serenity": 25,
      "solidarity": 35,
      "trust": 25
    },
    "pedagogicalNote": "La protection mutuelle entre élèves décourage définitivement les tentatives d'intimidation physique ou verbale."
  },
  "69": {
    "id": 69,
    "title": "La préparation du Conseil d'Éthique",
    "location": "Salle des Éclaireurs",
    "act": 3,
    "text": "Avec Soa et Madame Orla, vous mettez en forme votre plaidoyer pour l'audience générale de la station. Il ne s'agit pas seulement de punir Vael, mais d'instaurer une vraie culture du respect sur les réseaux de la station pour toutes les promotions futures.",
    "choices": [
      {
        "text": "Si tu rédiges ton discours avec conviction et clarté, va au 90.",
        "targetId": 90,
        "label": "Rédiger le plaidoyer"
      },
      {
        "text": "Si tu demandes à Élior et Naël de témoigner à tes côtés, va au 91.",
        "targetId": 91,
        "label": "Témoignages conjoints"
      }
    ],
    "statsImpact": {
      "serenity": 20,
      "solidarity": 30,
      "trust": 30,
      "badge": "Plaidoyer Citoyen"
    },
    "pedagogicalNote": "Dépasser la plainte individuelle pour proposer des réformes collectives est le signe d'un engagement citoyen exemplaire."
  },
  "70": {
    "id": 70,
    "title": "L'ouverture officielle de l'instruction disciplinaire",
    "location": "Poste de Commandement Pédagogique",
    "act": 3,
    "text": "L'Officier Kroll rassemble l'ensemble des éléments. Devant la gravité des infractions (usurpation d'image, cyber-harcèlement en meute, diffamation organisée), le Commandeur de la station ordonne la tenue d'un Conseil Extraordinaire de la Promotion 6.",
    "choices": [
      {
        "text": "Si tu te prépares à assister à l'audience avec le soutien de tes proches, va au 92.",
        "targetId": 92,
        "label": "Préparation à l'audience"
      },
      {
        "text": "Si tu participes aux entretiens préalables de la méthode de préoccupation partagée, va au 84.",
        "targetId": 84,
        "label": "Préoccupation partagée préalable"
      }
    ],
    "statsImpact": {
      "serenity": 25,
      "solidarity": 25,
      "trust": 35
    },
    "pedagogicalNote": "La solennité des instances disciplinaires rappelle à chacun que l'espace numérique n'est pas une zone de non-droit."
  },
  "71": {
    "id": 71,
    "title": "La confrontation officielle dans le bureau de Kroll",
    "location": "Bureau de Sécurité",
    "act": 3,
    "text": "Vael entre dans le bureau avec son habituel air arrogant, mais lorsqu'il aperçoit Madame Orla et l'écran projetant ses propres métadonnées personnelles, son visage se décompose. « Monsieur Kroll... c'était juste un défi entre copains... je voulais pas faire de mal... » Le mythe du rebelle virtuel s'évapore instantanément.",
    "choices": [
      {
        "text": "Si Kroll lui rappelle fermement les sanctions pénales encourues pour cyber-harcèlement, va au 88.",
        "targetId": 88,
        "label": "Rappel des sanctions pénales"
      },
      {
        "text": "Si Vael commence à prendre conscience de la gravité de ses actes, va au 84.",
        "targetId": 84,
        "label": "Début de prise de conscience"
      }
    ],
    "statsImpact": {
      "serenity": 20,
      "solidarity": 15,
      "trust": 35
    },
    "pedagogicalNote": "Face à la réalité des sanctions légales, les excuses du type 'c'était juste pour rire' ne tiennent plus une seule seconde."
  },
  "72": {
    "id": 72,
    "title": "La respiration retrouvée de toute la promotion",
    "location": "Anneau de Vie • Oxy-Kaelis",
    "act": 3,
    "text": "La suspension publique du canal envoie un signal puissant : sur Oxy-Kaelis, personne ne sera abandonné aux loups du réseau. Les discussions dans les coursives redeviennent joyeuses, légères, débarrassées de la terreur du mauvais buzz.",
    "choices": [
      {
        "text": "Si tu ressens une paix profonde en te promenant dans la station, va au 85.",
        "targetId": 85,
        "label": "Paix profonde retrouvée"
      },
      {
        "text": "Si tu rejoins le groupe de travail pour la Charte Numérique, va au 77.",
        "targetId": 77,
        "label": "Groupe de travail Charte"
      }
    ],
    "statsImpact": {
      "serenity": 30,
      "solidarity": 25,
      "trust": 30
    },
    "pedagogicalNote": "Assainir le climat numérique rétablit immédiatement la sérénité dans les relations humaines réelles."
  },
  "73": {
    "id": 73,
    "title": "Le désarmement des complices isolés",
    "location": "Coursive Bêta",
    "act": 3,
    "text": "Privés de leur canal et de leur leader, les quelques suiveurs qui tentaient encore de fanfaronner se heurtent à l'indifférence totale des autres élèves. Plus personne ne rit de leurs allusions. Sans public, le harcèlement s'éteint comme une flamme privée d'oxygène.",
    "choices": [
      {
        "text": "Si tu constates la fin définitive des quolibets, va au 85.",
        "targetId": 85,
        "label": "Fin définitive des attaques"
      },
      {
        "text": "Si tu te concentres sur ton avenir de pilote, va au 79.",
        "targetId": 79,
        "label": "Cap vers l'avenir"
      }
    ],
    "statsImpact": {
      "serenity": 25,
      "solidarity": 25,
      "trust": 25
    },
    "pedagogicalNote": "Priver les agresseurs de spectateurs complices est la méthode la plus sûre pour éteindre toute dynamique de harcèlement."
  },
  "74": {
    "id": 74,
    "title": "Le projet 'Oxy-Bienveillance' en classe",
    "location": "Salle Polyvalente • Module Culturel",
    "act": 3,
    "text": "Avec l'accord du professeur principal, tu animes avec Élior un atelier de dix minutes : 'Comment faire du ComNet un espace d'entraide pour réussir ensemble nos examens de vol'. Vingt-cinq élèves adhèrent immédiatement et signent le manifeste initial.",
    "choices": [
      {
        "text": "Si cette initiative devient le modèle officiel de la station, va au 93.",
        "targetId": 93,
        "label": "Modèle officiel de station"
      },
      {
        "text": "Si tu prépares la grande restitution au Conseil, va au 90.",
        "targetId": 90,
        "label": "Préparer la restitution"
      }
    ],
    "statsImpact": {
      "serenity": 30,
      "solidarity": 35,
      "trust": 30,
      "badge": "Leader Positif"
    },
    "pedagogicalNote": "Remplacer un espace toxique par une alternative constructive mobilise l'énergie de la jeunesse vers le bien commun."
  },
  "75": {
    "id": 75,
    "title": "L'accueil des excuses et la fermeté sur les principes",
    "location": "Hall des Pas Perdus",
    "act": 3,
    "text": "Deux élèves viennent timidement vers toi : « Lyra, on est désolés d'avoir partagé le mème. On a été bêtes, on ne voulait pas te blesser. » Tu les écoutes avec calme : « J'accepte vos excuses. Mais sachez que derrière un écran, un partage blesse autant qu'une insulte directe. J'espère que vous vous en souviendrez la prochaine fois. » Les deux élèves hochent la tête, soulagés mais marqués.",
    "choices": [
      {
        "text": "If you welcome their step while demanding true reparation, go to 84.",
        "targetId": 84,
        "label": "Poursuivre vers la réparation"
      },
      {
        "text": "Si tu rejoins tes amis avec fierté, va au 89.",
        "targetId": 89,
        "label": "Fierté partagée"
      }
    ],
    "statsImpact": {
      "serenity": 20,
      "solidarity": 25,
      "trust": 25
    },
    "pedagogicalNote": "Accepter les excuses sans minimiser la gravité de l'acte permet une véritable réintégration éducative."
  },
  "76": {
    "id": 76,
    "title": "Le triomphe de la vérité dans l'Amphithéâtre",
    "location": "Amphithéâtre Galilée",
    "act": 4,
    "text": "L'Amphithéâtre est comble. Devant tous les élèves réunis et l'équipe pédagogique, les faits sont exposés sans passion mais avec une clarté limpide. Le faux montage est définitivement déconstruit, les responsabilités établies, et ton courage salué par tous.",
    "choices": [
      {
        "text": "Si tu te prépares pour la signature de la Charte de Confiance, va au 94.",
        "targetId": 94,
        "label": "Vers la Charte de Confiance"
      },
      {
        "text": "Si tu t'avances vers la Fin Lumineuse, va au 98.",
        "targetId": 98,
        "label": "Vers la Fin Lumineuse"
      }
    ],
    "statsImpact": {
      "serenity": 35,
      "solidarity": 35,
      "trust": 35
    },
    "pedagogicalNote": "La reconnaissance solennelle de la vérité restaure intégralement l'honneur et l'estime de la personne harcelée."
  },
  "77": {
    "id": 77,
    "title": "La rédaction de la Charte Numérique d'Oxy-Kaelis",
    "location": "Salle des Éclaireurs • Secteur 3",
    "act": 4,
    "text": "Autour d'une table holographique, élèves, médiateurs et professeurs rédigent ensemble les articles de la Charte Numérique : respect absolu de l'image d'autrui, interdiction des mèmes humiliants, obligation de modération, sanctuaire de repos la nuit avec droit à la déconnexion.",
    "choices": [
      {
        "text": "Si cette charte est soumise au vote général de la station, va au 94.",
        "targetId": 94,
        "label": "Vote de la Charte"
      },
      {
        "text": "Si tu t'élances vers la Fin Lumineuse, va au 98.",
        "targetId": 98,
        "label": "Vers la Fin Lumineuse"
      }
    ],
    "statsImpact": {
      "serenity": 35,
      "solidarity": 40,
      "trust": 35,
      "badge": "Bâtisseuse de Charte"
    },
    "pedagogicalNote": "Rédiger collectivement les règles de vie numérique garantit leur appropriation et leur respect par l'ensemble des élèves."
  },
  "78": {
    "id": 78,
    "title": "Le front commun des élèves bienveillants",
    "location": "Canal Public d'Information",
    "act": 4,
    "text": "Sous le commentaire amer de Vael, plus de trente réponses d'élèves fusent instantanément : « Arrête Vael », « Ton comportement est indigne d'Oxy-Kaelis », « Respecte Lyra et respecte-toi ». Devant cette muraille de dignité collective, Vael supprime lui-même son message en moins de deux minutes.",
    "choices": [
      {
        "text": "Si cette démonstration de solidarité marque la fin de l'influence toxique, va au 85.",
        "targetId": 85,
        "label": "Fin de l'influence toxique"
      },
      {
        "text": "Si tu te diriges vers la Fin Lumineuse, va au 98.",
        "targetId": 98,
        "label": "Vers la Fin Lumineuse"
      }
    ],
    "statsImpact": {
      "serenity": 30,
      "solidarity": 40,
      "trust": 30
    },
    "pedagogicalNote": "Lorsque les témoins s'expriment en nombre pour défendre la victime, l'agresseur perd immédiatement tout pouvoir de nuisance."
  },
  "79": {
    "id": 79,
    "title": "Le vol parfait dans le simulateur",
    "location": "Simulateur de Navigation Orbitale",
    "act": 4,
    "text": "Aux commandes du simulateur de vol orbital, libérée de la pression toxique des écrans, tu réalises un amarrage parfait au millimètre près sous les acclamations de ton instructeur. Tu prouves à tous, et d'abord à toi-même, que ta valeur professionnelle n'a jamais dépendu des calomnies du ComNet.",
    "choices": [
      {
        "text": "Si tu partages cette victoire avec tes amis au réfectoire, va au 89.",
        "targetId": 89,
        "label": "Partage de victoire"
      },
      {
        "text": "Si tu marches fièrement vers la Fin Lumineuse, va au 98.",
        "targetId": 98,
        "label": "Vers la Fin Lumineuse"
      }
    ],
    "statsImpact": {
      "serenity": 35,
      "solidarity": 30,
      "trust": 30,
      "badge": "Pilote d'Élite"
    },
    "pedagogicalNote": "Retrouver sa concentration et s'épanouir dans ses passions est la plus belle des revanches sur le harcèlement."
  },
  "80": {
    "id": 80,
    "title": "L'Heure de Vie de Classe réparatrice",
    "location": "Amphithéâtre Galilée",
    "act": 4,
    "text": "Animée par Madame Orla et la médiatrice Soa, l'Heure de Vie de Classe permet d'aborder sans fard le fonctionnement du ComNet. Les élèves témoignent de ce qu'ils ont ressenti, des pressions pour 'liker', de la peur d'être exclus. C'est un moment de catharsis collective qui ressoude la promotion entière.",
    "choices": [
      {
        "text": "Si cette prise de conscience collective débouche sur la Fin Lumineuse, va au 98.",
        "targetId": 98,
        "label": "Vers la Fin Lumineuse"
      },
      {
        "text": "Si tu préfères maintenir une distance prudente avec les réseaux, va au 95.",
        "targetId": 95,
        "label": "Vers la Fin Neutre"
      }
    ],
    "statsImpact": {
      "serenity": 25,
      "solidarity": 35,
      "trust": 30
    },
    "pedagogicalNote": "La parole libérée dans un cadre régulé par des adultes permet de guérir les blessures collectives créées par le cyber-harcèlement."
  },
  "81": {
    "id": 81,
    "title": "La chute dans la spirale de l'angoisse",
    "location": "Cabine de Repos Individuelle",
    "act": 4,
    "text": "En refusant d'alerter les adultes et en restant prostrée devant ton écran qui continue de diffuser des moqueries, ton état s'est dégradé de jour en jour. Tu ne manges plus, ne sors plus de ta cabine, et ton biosenseur s'affole en détresse émotionnelle sévère.",
    "choices": [
      {
        "text": "Si dans un sursaut ultime tu composes le code d'urgence 3018, va au 20.",
        "targetId": 20,
        "label": "Appel d'urgence ultime"
      },
      {
        "text": "Si tu t'abandonnes au découragement le plus complet, va au 100.",
        "targetId": 100,
        "label": "Vers la Fin Obscure"
      }
    ],
    "statsImpact": {
      "serenity": -35,
      "solidarity": -30,
      "trust": -35
    },
    "pedagogicalNote": "S'enfermer seul face à la haine en ligne conduit à l'effondrement psychologique. Il faut briser le silence à tout prix."
  },
  "82": {
    "id": 82,
    "title": "La désintégration du groupe de harceleurs",
    "location": "Bureau de Sécurité",
    "act": 4,
    "text": "Paniqué, Vael tente de rejeter la faute sur les élèves qui ont partagé le mème : « C'est eux qui ont insisté, moi j'ai juste fait le montage pour rigoler ! » Entendant cela, ses anciens complices se retournent contre lui avec fureur. Le groupe se disloque sous les yeux de Kroll, illustrant la totale absence de loyauté entre harceleurs.",
    "choices": [
      {
        "text": "Si tu constates que leur prétendu pouvoir n'était qu'un château de cartes, va au 88.",
        "targetId": 88,
        "label": "Effondrement du château de cartes"
      },
      {
        "text": "Si tu t'avances vers la Fin Lumineuse, va au 98.",
        "targetId": 98,
        "label": "Vers la Fin Lumineuse"
      }
    ],
    "statsImpact": {
      "serenity": 25,
      "solidarity": 20,
      "trust": 30
    },
    "pedagogicalNote": "La cohésion des harceleurs est illusoire : dès que les conséquences arrivent, chacun tente de sauver sa peau au détriment des autres."
  },
  "83": {
    "id": 83,
    "title": "La fin piteuse du secret de Vael",
    "location": "Laboratoire d'Informatique",
    "act": 4,
    "text": "En essayant d'éteindre son écran pour cacher son envoi, Vael fait tomber son terminal au sol avec fracas. Monsieur Chen s'avance, ramasse l'appareil et constate le fichier en cours d'émission. Le flagrant délit est irrévocable.",
    "choices": [
      {
        "text": "Si Monsieur Chen suspend immédiatement la session de Vael et l'envoie en direction, va au 56.",
        "targetId": 56,
        "label": "Envoi en direction"
      },
      {
        "text": "Si tu savoures ce dénouement juste et mérité, va au 79.",
        "targetId": 79,
        "label": "Dénouement juste"
      }
    ],
    "statsImpact": {
      "serenity": 20,
      "solidarity": 15,
      "trust": 25
    },
    "pedagogicalNote": "La précipitation et la panique finissent toujours par trahir les comportements malveillants."
  },
  "84": {
    "id": 84,
    "title": "Le protocole de médiation restaurative de Pikas",
    "location": "Module de Médiation • Espace Neutre",
    "act": 4,
    "text": "Selon la méthode de la préoccupation partagée, Soa et un éducateur rencontrent individuellement chaque élève impliqué, sans accusations frontales mais en les interrogeant sur leur inquiétude pour Lyra. Vael, touché dans sa sensibilité enfouie, finit par fondre en larmes : il confie sa propre peur de ne pas être accepté et reconnaît la monstruosité de son acte. Il s'engage formellement à réparer en participant à la campagne de prévention.",
    "choices": [
      {
        "text": "Si cette démarche réparatrice transforme durablement les comportements, va au 98.",
        "targetId": 98,
        "label": "Vers la Fin Lumineuse"
      },
      {
        "text": "Si tu acceptes les excuses tout en préférant garder une distance saine, va au 99.",
        "targetId": 99,
        "label": "Vers la Fin Neutre"
      }
    ],
    "statsImpact": {
      "serenity": 35,
      "solidarity": 40,
      "trust": 35,
      "badge": "Médiation Réparatrice"
    },
    "pedagogicalNote": "La méthode Pikas de préoccupation partagée responsabilise les auteurs sans les braquer, permettant une véritable prise de conscience et un arrêt durable du harcèlement."
  },
  "85": {
    "id": 85,
    "title": "La reconquête de l'espace commun",
    "location": "Coupole Panoramique d'Observation",
    "act": 4,
    "text": "Debout devant la grande verrière qui donne sur la Terre bleue, tu savoures la paix retrouvée. Élior, Naël et Corin te rejoignent. Plus aucun regard torve, plus aucune vibration suspecte dans ta poche. Tu as traversé la tempête numérique et tu en sors grandie, entourée d'amis fidèles.",
    "choices": [
      {
        "text": "Si tu t'avances vers la célébration finale de la Fin Lumineuse, va au 98.",
        "targetId": 98,
        "label": "Vers la Fin Lumineuse"
      },
      {
        "text": "Si tu choisis d'adopter un mode de vie plus déconnecté à l'avenir, va au 95.",
        "targetId": 95,
        "label": "Vers la Fin Neutre"
      }
    ],
    "statsImpact": {
      "serenity": 35,
      "solidarity": 35,
      "trust": 30
    },
    "pedagogicalNote": "Surmonter le cyber-harcèlement grâce à la vérité et à la solidarité forge un sentiment de sécurité et d'estime de soi inaltérable."
  },
  "86": {
    "id": 86,
    "title": "La lettre de vérité envoyée à temps",
    "location": "Cabine de Repos Individuelle",
    "act": 4,
    "text": "Dans un sursaut de survie, tu rédiges une lettre circonstanciée de quatre pages au Conseil de Sécurité d'Oxy-Kaelis, joignant toutes les captures d'écran que tu avais conservées. En découvrant la réalité de l'agression que tu subissais, le Commandeur annule ta sanction disciplinaire et diligente une enquête prioritaire sur le canal Oxy-Leaks.",
    "choices": [
      {
        "text": "Si la justice est enfin rétablie grâce à ton courage d'écrire, va au 70.",
        "targetId": 70,
        "label": "Justice rétablie"
      },
      {
        "text": "Si tu t'élances vers la Fin Neutre de ton aventure, va au 99.",
        "targetId": 99,
        "label": "Vers la Fin Neutre"
      }
    ],
    "statsImpact": {
      "serenity": 15,
      "solidarity": 10,
      "trust": 25
    },
    "pedagogicalNote": "Il n'est jamais trop tard pour dire la vérité. Un écrit factuel et posé permet toujours de rétablir la justice."
  },
  "87": {
    "id": 87,
    "title": "L'escalade désespérée vers le point de non-retour",
    "location": "Sas de Décompression Abandonné",
    "act": 4,
    "text": "Rongée par l'amertume et convaincue que personne ne peut comprendre ta douleur, tu tentes une dernière action de piratage désespérée pour effacer tous les serveurs de communication d'Oxy-Kaelis. L'attaque déclenche l'alarme rouge générale de la station. Cette fois, la rupture avec la communauté spatiale est définitive.",
    "choices": [
      {
        "text": "Si tu franchis les portes de la Fin Obscure, va au 100.",
        "targetId": 100,
        "label": "Vers la Fin Obscure"
      }
    ],
    "statsImpact": {
      "serenity": -50,
      "solidarity": -50,
      "trust": -50
    },
    "pedagogicalNote": "La vengeance aveugle détruit la victime et donne raison à ceux qui voulaient l'abattre."
  },
  "88": {
    "id": 88,
    "title": "Le verdict exemplaire du Conseil de Discipline",
    "location": "Hémicycle Central • Oxy-Kaelis",
    "act": 4,
    "text": "Devant le Conseil réuni, Vael est condamné à un mois de suspension du réseau ComNet, à quarante heures de travaux de réhabilitation d'intérêt général à la maintenance et à un suivi éducatif renforcé. Le Commandeur déclare solennellement : « Celui qui utilise la technologie pour persécuter un camarade déshonore l'humanité spatiale. »",
    "choices": [
      {
        "text": "Si ce verdict pose un cadre protecteur définitif pour toute la station, va au 94.",
        "targetId": 94,
        "label": "Cadre protecteur posé"
      },
      {
        "text": "Si tu rejoins la Fin Lumineuse de ton parcours, va au 98.",
        "targetId": 98,
        "label": "Vers la Fin Lumineuse"
      }
    ],
    "statsImpact": {
      "serenity": 35,
      "solidarity": 30,
      "trust": 40,
      "badge": "Justice Rendue"
    },
    "pedagogicalNote": "La sanction éducative et réparatrice met un point final au sentiment d'impunité et protège durablement la communauté."
  },
  "89": {
    "id": 89,
    "title": "La fraternité scellée du Réfectoire",
    "location": "Réfectoire des Synthèses",
    "act": 4,
    "text": "Ce midi-là, la table où tu es assise avec Élior, Naël, Corin et Darek est la plus vivante du réfectoire. Des dizaines d'élèves viennent vous saluer, échanger des rires francs et partager leurs projets. Le mur invisible est tombé, le venin des mots s'est dissipé, et les écrans ont retrouvé leur juste place d'outils bienveillants.",
    "choices": [
      {
        "text": "Si tu t'avances vers la Fin Lumineuse, va au 98.",
        "targetId": 98,
        "label": "Vers la Fin Lumineuse"
      },
      {
        "text": "Si tu rejoins la Fin Neutre, va au 99.",
        "targetId": 99,
        "label": "Vers la Fin Neutre"
      }
    ],
    "statsImpact": {
      "serenity": 40,
      "solidarity": 45,
      "trust": 35,
      "badge": "Table Fraternelle"
    },
    "pedagogicalNote": "Le bonheur partagé dans le monde réel est la réponse la plus éclatante à toutes les violences virtuelles."
  },
  "90": {
    "id": 90,
    "title": "Le discours d'ouverture au grand forum",
    "location": "Amphithéâtre Galilée",
    "act": 4,
    "text": "Devant les trois cents élèves de la promotion, tu prends la parole sans trembler : « Le ComNet ne doit pas être une arène où l'on jette des boucs émissaires pour amuser la galerie. Il doit être le lien qui nous unit au milieu du vide spatial. Nous avons tous le pouvoir de dire stop d'un simple clic. » Une ovation debout accueille tes paroles.",
    "choices": [
      {
        "text": "Si ton discours inspire l'adoption unanime de la Charte, va au 94.",
        "targetId": 94,
        "label": "Adoption unanime de la Charte"
      },
      {
        "text": "Si tu te diriges vers la Fin Lumineuse, va au 98.",
        "targetId": 98,
        "label": "Vers la Fin Lumineuse"
      }
    ],
    "statsImpact": {
      "serenity": 45,
      "solidarity": 45,
      "trust": 40,
      "badge": "Voix Inspirante"
    },
    "pedagogicalNote": "Le courage de témoigner publiquement transforme une épreuve personnelle en leçon d'émancipation collective."
  },
  "91": {
    "id": 91,
    "title": "Le témoignage croisé des quatre rescapés",
    "location": "Amphithéâtre Galilée",
    "act": 4,
    "text": "Élior parle des bousculades physiques, Naël du rejet et de l'isolement, Corin des quolibets blessants, et toi du harcèlement numérique. L'assemblée écoute dans un silence recueilli. Les quatre formes de harcèlement scolaire sont mises à nu, privant définitivement les harceleurs de leurs excuses favorites.",
    "choices": [
      {
        "text": "Si ce front des quatre héros conduit directement à la Fin Lumineuse, va au 98.",
        "targetId": 98,
        "label": "Vers la Fin Lumineuse"
      }
    ],
    "statsImpact": {
      "serenity": 45,
      "solidarity": 50,
      "trust": 45,
      "badge": "Quatuor Bouclier"
    },
    "pedagogicalNote": "Articuler les différentes formes de harcèlement permet une compréhension globale et durable du phénomène de meute."
  },
  "92": {
    "id": 92,
    "title": "La sérénité devant les juges de bord",
    "location": "Hémicycle Central",
    "act": 4,
    "text": "Assise entre tes parents en hologramme et la médiatrice Soa, tu réponds avec une précision remarquable aux questions de la commission. Tu ne montres ni esprit de vengeance ni faiblesse, seulement la vérité des faits. Les membres du conseil hochent la tête avec un profond respect.",
    "choices": [
      {
        "text": "Si tu rejoins la Fin Lumineuse, va au 98.",
        "targetId": 98,
        "label": "Vers la Fin Lumineuse"
      },
      {
        "text": "Si tu préfères la Fin Neutre, va au 99.",
        "targetId": 99,
        "label": "Vers la Fin Neutre"
      }
    ],
    "statsImpact": {
      "serenity": 35,
      "solidarity": 35,
      "trust": 45
    },
    "pedagogicalNote": "La force de la vérité calme impose le respect de tous les adultes et garantit une justice équitable."
  },
  "93": {
    "id": 93,
    "title": "L'institutionnalisation des Sentinelles du Net",
    "location": "Conseil Pédagogique",
    "act": 4,
    "text": "Le projet initié avec tes amis est officiellement adopté par la direction : chaque année, des élèves volontaires seront formés comme 'Sentinelles du Net' pour modérer les canaux de promo, écouter les victimes et prévenir les débordements avant qu'ils ne dégénèrent. Tu es nommée première Présidente des Sentinelles.",
    "choices": [
      {
        "text": "Si tu franchis le pas vers la Fin Lumineuse, va au 98.",
        "targetId": 98,
        "label": "Vers la Fin Lumineuse"
      }
    ],
    "statsImpact": {
      "serenity": 50,
      "solidarity": 50,
      "trust": 50,
      "badge": "Sentinelle en Chef"
    },
    "pedagogicalNote": "Pérenniser des dispositifs d'élèves sentinelles garantit la protection des futures générations d'élèves."
  },
  "94": {
    "id": 94,
    "title": "La signature solennelle de la Charte de Confiance",
    "location": "Hémicycle Central • Séance Plénière",
    "act": 4,
    "text": "En présence de l'équipage au grand complet, chaque élève de Cycle Alpha appose sa signature biométrique au bas de la grande Charte de Confiance du ComNet. Vael lui-même, sincèrement transformé par sa sanction réparatrice, vient signer sous tes yeux avant de te tendre la main dans un geste de respect silencieux.",
    "choices": [
      {
        "text": "Si tu termines ton aventure dans la gloire de la Fin Lumineuse, va au 98.",
        "targetId": 98,
        "label": "Vers la Fin Lumineuse"
      }
    ],
    "statsImpact": {
      "serenity": 50,
      "solidarity": 50,
      "trust": 50,
      "badge": "Pacte de Confiance Scellé"
    },
    "pedagogicalNote": "La réconciliation sincère scellée par un pacte partagé est l'aboutissement le plus noble de toute démarche éducative."
  },
  "95": {
    "id": 95,
    "title": "Le sanctuaire de la déconnexion vigilante",
    "location": "Cabine de Repos Individuelle",
    "act": 4,
    "text": "Tu as fait le choix de réduire drastiquement ton usage du ComNet : le terminal reste éteint en dehors des heures de cours, et tu as supprimé toutes les applications de messagerie non officielles. Tu as retrouvé le calme et le sommeil, mais au prix d'une certaine distance avec la vie sociale de la station.",
    "choices": [
      {
        "text": "Si tu rejoins la Fin Neutre de ton parcours, va au 99.",
        "targetId": 99,
        "label": "Vers la Fin Neutre"
      }
    ],
    "statsImpact": {
      "serenity": 20,
      "solidarity": 10,
      "trust": 20
    },
    "pedagogicalNote": "La déconnexion stricte protège efficacement mais peut isoler la victime de la vie collective de sa promotion."
  },
  "96": {
    "id": 96,
    "title": "La paix prudente sous haute surveillance",
    "location": "Coursive Centrale",
    "act": 4,
    "text": "Les serveurs d'Oxy-Kaelis sont désormais sous filtrage strict et les canaux sauvages sont systématiquement démantelés. Le calme règne sur les réseaux, mais l'ambiance reste un peu méfiante et formelle entre les élèves.",
    "choices": [
      {
        "text": "Si tu t'orientes vers la Fin Lumineuse, va au 98.",
        "targetId": 98,
        "label": "Vers la Fin Lumineuse"
      },
      {
        "text": "Si tu préfères la Fin Neutre, va au 99.",
        "targetId": 99,
        "label": "Vers la Fin Neutre"
      }
    ],
    "statsImpact": {
      "serenity": 25,
      "solidarity": 20,
      "trust": 30
    },
    "pedagogicalNote": "La surveillance technique sécurise le climat mais ne remplace pas une adhésion du cœur aux valeurs de respect."
  },
  "97": {
    "id": 97,
    "title": "L'insigne d'honneur des Éclaireurs de la Toile",
    "location": "Passerelle de Commandement",
    "act": 4,
    "text": "Le Commandeur en chef de la station Oxy-Kaelis te remet officiellement l'Insigne d'Honneur des Éclaireurs de la Toile pour ton sang-froid, ton refus de la violence illégale et ta contribution majeure à la sécurité numérique de la communauté spatiale.",
    "choices": [
      {
        "text": "Si tu rejoins le dénouement de la Fin Lumineuse, va au 98.",
        "targetId": 98,
        "label": "Vers la Fin Lumineuse"
      }
    ],
    "statsImpact": {
      "serenity": 50,
      "solidarity": 50,
      "trust": 50,
      "badge": "Éclaireuse d'Honneur"
    },
    "pedagogicalNote": "La reconnaissance officielle par les plus hautes autorités valide la victoire du courage éthique sur la lâcheté numérique."
  },
  "98": {
    "id": 98,
    "title": "FIN LUMINEUSE : Dans la Clarté du ComNet & Le Pacte Fraternel",
    "location": "Coupole Panoramique des Éclaireurs • Oxy-Kaelis",
    "act": 4,
    "text": "FIN LUMINEUSE. Le cyber-harcèlement et la lâcheté des attaques numériques ont été totalement terrassés à bord de la Station Orbitale Oxy-Kaelis ! Grâce à ton sang-froid exemplaire, à ton refus absolu de céder à la cyber-vengeance et au réflexe salutaire de figer les preuves, tu as permis à l'institution et aux pairs bienveillants de faire triompher la justice. Le canal clandestin d'humiliation a été démantelé, l'anonymat de Vael est tombé, et une véritable médiation restaurative a permis aux agresseurs de prendre conscience de la gravité de leurs actes et de s'engager dans la réparation. Entourée d'Élior, Naël, Corin et de dizaines de camarades désormais unis, tu contemples les anneaux étincelants de la station spatiale depuis la verrière panoramique. La Charte de Confiance du ComNet garantit désormais à chaque recrue le respect de son image, le droit sacré à la déconnexion et la bienveillance des ondes. Tu as prouvé la plus noble des leçons : face à la tempête des écrans, ce n'est pas en alimentant la haine que l'on se libère, mais en brandissant la vérité avec le bouclier solidaire de la communauté.",
    "choices": [],
    "statsImpact": {
      "serenity": 50,
      "solidarity": 50,
      "trust": 50,
      "badge": "Bouclier d'Or du ComNet"
    },
    "pedagogicalNote": "Félicitations ! Tu as su déjouer le piège de la meute numérique en conservant les preuves, en refusant la surenchère illégale et en mobilisant les tiers de confiance pour bâtir une culture pérenne du respect en ligne.",
    "endingType": "light"
  },
  "99": {
    "id": 99,
    "title": "FIN NEUTRE : Le Terminal Éteint & La Paix Hors-Ligne",
    "location": "Cabine de Repos Individuelle • Sas 14-B",
    "act": 4,
    "text": "FIN NEUTRE. En choisissant d'éteindre définitivement ton terminal ComNet en dehors des cours obligatoires, en bloquant toutes les notifications et en te tenant à l'écart de tous les groupes d'élèves, les attaques directes de Spectre-Zero ont fini par s'éteindre d'elles-mêmes. Faute d'alimenter la polémique et face à ton absence totale des réseaux, les harceleurs ont tourné leur attention vers d'autres sujets. Tu as sauvé ton sommeil et tes résultats scolaires en te réfugiant dans un ermitage numérique strict. Mais cette paix a un goût amer : tu ne participes plus aux projets collectifs, tu ignores les réjouissances de ta promotion et tu as appris à te méfier de chaque écran. La station Oxy-Kaelis reste pour toi un lieu où l'on survit en se déconnectant du monde plutôt qu'en y rayonnant avec confiance.",
    "choices": [],
    "statsImpact": {
      "serenity": 10,
      "solidarity": -15,
      "trust": -10,
      "badge": "Retrait Prudent Hors-Ligne"
    },
    "pedagogicalNote": "Bilan : Éteindre son terminal et fuir les réseaux protège des attaques immédiates mais prive la victime des opportunités sociales et laisse les agresseurs impunis.",
    "endingType": "neutral"
  },
  "100": {
    "id": 100,
    "title": "FIN OBSCURE : Le Naufrage de la Cyber-Guerre & L'Exclusion Conjointe",
    "location": "Sas de Rapatriement Terrestre • Niveau Inférieur",
    "act": 4,
    "text": "FIN OBSCURE. Piégée dans l'escalade de la haine en ligne, emportée par la tentation d'une contre-attaque informatique illégale ou brisée par un silence obstiné qui t'a isolée de toute aide, la situation a basculé dans le désastre. Ton script de piratage a déclenché l'alerte de sécurité majeure de la station, ou tes échanges d'insultes publiques ont conduit la direction à te considérer comme co-responsable d'un trouble grave à l'ordre d'Oxy-Kaelis. Ton biosenseur émotionnel s'est effondré dans une détresse profonde, et le Conseil de Sécurité a signé ton ordre de rapatriement immédiat vers la Terre. Alors que le sas de la navette se referme dans un grincement d'acier glacial, tu regardes s'éloigner les étoiles avec un sentiment d'injustice déchirant. Cette douloureuse aventure démontre la règle d'or du monde numérique : la cyber-vengeance et le silence solitaire ne mènent qu'à la destruction mutuelle ; seule la préservation méthodique des preuves, l'alerte aux adultes référents et le recours à la loi permettent de terrasser les monstres du réseau.",
    "choices": [],
    "statsImpact": {
      "serenity": -50,
      "solidarity": -50,
      "trust": -50,
      "badge": "Naufrage dans la Toile"
    },
    "pedagogicalNote": "Bilan : Répondre au cyber-harcèlement par le piratage, l'escalade d'insultes ou le mutisme isole la victime et la transforme en coupable aux yeux du règlement. Face au harcèlement en ligne, seule la voie légale et l'accompagnement des tiers sauvent.",
    "endingType": "dark"
  }
};
