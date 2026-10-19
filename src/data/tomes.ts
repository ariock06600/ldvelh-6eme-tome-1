import { STORY_STEPS } from './storyData.ts';
import { STORY_STEPS_TOME_2 } from './storyDataTome2.ts';
import { STORY_STEPS_TOME_3 } from './storyDataTome3.ts';
import { STORY_STEPS_TOME_4 } from './storyDataTome4.ts';
import type { TomeConfig, TomeId } from '../types/story.ts';

export const TOMES: Record<TomeId, TomeConfig> = {
  'tome-1': {
    id: 'tome-1',
    number: 1,
    title: "Le Harcèlement Physique & les Intimidations",
    shortTitle: "Tome 1 : Intimidations Physiques",
    subtitle: "« Station Orbitale Oxy-Kaelis »",
    theme: "Harcèlement physique, bousculades, racket et violation de casier",
    station: "Station Orbitale Oxy-Kaelis",
    protagonist: "Élior (nouvelle recrue arrivée de la colonie minière d'Orion)",
    antagonist: "Brannok (initié de Cycle Supérieur), Tark & Vael",
    allies: "Sylvan (témoin terrorisé), Lyra, Veilleurs de Bord",
    summary: "Fraîchement débarqué au Cycle Alpha d'Oxy-Kaelis, Élior fait face aux bousculades répétées dans les sas sans caméras, à la dépressurisation forcée de son casier et au racket de ses capsules d'énergie vitale par Brannok. Entre fuite, vengeance illégale et rupture solidaire du silence, vos choix forgent son destin.",
    learningObjectives: "Comprendre que la violence solitaire se retourne contre la victime ; lever la peur des représailles chez les témoins ; activer les adultes référents de manière constructive.",
    themeColor: 'cyan',
    storageKey: 'oxy_kaelis_progress_v1',
    steps: STORY_STEPS,
  },
  'tome-2': {
    id: 'tome-2',
    number: 2,
    title: "L'Isolement Social, l'Ostracisme & les Rumeurs",
    shortTitle: "Tome 2 : Isolement Social & Rejet",
    subtitle: "« Station Orbitale Oxy-Kaelis : Le Mur Invisible »",
    theme: "Ostracisme de groupe, tables refusées, rumeurs ComNet et mise à l'écart",
    station: "Station Orbitale Oxy-Kaelis",
    protagonist: "Naël (élève passionné de botanique et de bio-ingénierie spatiale)",
    antagonist: "Kaelen (leader charismatique du Cercle Orbital), Darek & Mira",
    allies: "Lyra (témoin tiraillée), Tarek, Soa (médiatrice des pairs), Maître Olan",
    summary: "Dans les coursives d'Oxy-Kaelis, Naël est la cible d'une violence insidieuse : personne ne lui parle, les tables du Réfectoire des Synthèses se vident quand il approche, et des rumeurs calomnieuses circulent sur le ComNet. Comment faire tomber ce mur invisible sans s'enfermer dans la haine ou la honte ?",
    learningObjectives: "Décoder l'effet de meute et le phénomène du bouc émissaire ; comprendre l'impact dévastateur du rejet silencieux ; expérimenter la méthode de la préoccupation partagée et l'alliance citoyenne.",
    themeColor: 'purple',
    storageKey: 'oxy_kaelis_tome2_progress_v1',
    steps: STORY_STEPS_TOME_2,
  },
  'tome-3': {
    id: 'tome-3',
    number: 3,
    title: "Le Harcèlement Verbal & les Moqueries",
    shortTitle: "Tome 3 : Moqueries & Harcèlement Verbal",
    subtitle: "« Station Orbitale Oxy-Kaelis : Le Venin des Mots »",
    theme: "Surnoms dégradants, ricanements répétés, alibi du 'c'était pour rire' et peur de parler",
    station: "Station Orbitale Oxy-Kaelis",
    protagonist: "Corin (élève passionné d'astrophysique portant un correcteur de pression auditive)",
    antagonist: "Jax (élève moqueur retranché derrière l'humour toxique) et ses rieurs",
    allies: "Lyra, Naël, Sylvan, Madame Orla (bibliothécaire), Soa (médiatrice)",
    summary: "« Roh ça va, on peut plus rigoler ! » Entre les bruits imités sur les fréquences radio, les surnoms blessants comme 'Bip-Bip rouillé' répétés dans les coursives et la peur de bafouiller au tableau holographique, Corin affronte le venin des mots. Comment désarmer les attaques verbales sans tomber dans le mutisme ou la vengeance stérile ?",
    learningObjectives: "Distinguer l'humour partagé de la moquerie dégradante répétée ; déjouer le piège de l'auto-dénigrement ; s'affirmer avec calme et mobiliser le refus collectif de rire.",
    themeColor: 'amber',
    storageKey: 'oxy_kaelis_tome3_progress_v1',
    steps: STORY_STEPS_TOME_3,
  },
  'tome-4': {
    id: 'tome-4',
    number: 4,
    title: "Le Cyber-Harcèlement & les Réseaux Numériques",
    shortTitle: "Tome 4 : Cyber-Harcèlement & ComNet",
    subtitle: "« Station Orbitale Oxy-Kaelis : Dans la Toile du ComNet »",
    theme: "Canaux sauvages 'Oxy-Leaks', photomontages dégradants, lynchage en ligne 24h/24 et droit à la déconnexion",
    station: "Station Orbitale Oxy-Kaelis",
    protagonist: "Lyra (élève brillante en programmation et interface système)",
    antagonist: "Vael (sous le pseudonyme 'Spectre-Zero') et les suiveurs du réseau",
    allies: "Élior, Naël, Corin, Soa (médiatrice), Madame Orla (responsable ComNet), Officier Kroll",
    summary: "En pleine nuit dans son sas de repos, le terminal de Lyra s'affole : un faux montage holographique humiliant tourne en boucle sur le canal anonyme 'Oxy-Leaks', accumulant likes et partages. Entre la tentation du piratage de vengeance, la terreur du lynchage numérique et la démarche méthodique de conservation des preuves, menez Lyra vers la Charte de Confiance.",
    learningObjectives: "Comprendre que partager ou liker équivaut à harceler ; adopter les réflexes d'urgence (captures d'écran, blocage, droit à la déconnexion, protocole 3018) ; démasquer l'illusion d'anonymat en ligne.",
    themeColor: 'rose',
    storageKey: 'oxy_kaelis_tome4_progress_v1',
    steps: STORY_STEPS_TOME_4,
  },
};

export const DEFAULT_TOME_ID: TomeId = 'tome-1';

export function getTome(id: TomeId): TomeConfig {
  return TOMES[id] || TOMES[DEFAULT_TOME_ID];
}
