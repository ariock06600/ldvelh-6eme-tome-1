/**
 * Types pour l'aventure interactive LDVELH Oxy-Kaelis
 */

export interface StoryChoice {
  text: string;
  targetId: number;
  label?: string;
  pedagogicalTip?: string;
}

export type EndingType = 'light' | 'neutral' | 'dark' | 'fragile';

export interface StoryStep {
  id: number;
  title: string;
  location: string;
  text: string;
  choices: StoryChoice[];
  act: 1 | 2 | 3 | 4;
  endingType?: EndingType;
  statsImpact?: {
    serenity?: number; // -20 à +20
    solidarity?: number; // -20 à +20
    trust?: number; // -20 à +20
    badge?: string;
  };
  pedagogicalNote?: string;
}

export interface PlayerStats {
  serenity: number; // 0 à 100
  solidarity: number; // 0 à 100
  trust: number; // 0 à 100
  badges: string[];
  history: number[];
}

export type TomeId = 'tome-1' | 'tome-2' | 'tome-3' | 'tome-4';

export interface TomeConfig {
  id: TomeId;
  number: 1 | 2 | 3 | 4;
  title: string;
  shortTitle: string;
  subtitle: string;
  theme: string;
  station: string;
  protagonist: string;
  antagonist: string;
  allies: string;
  summary: string;
  learningObjectives: string;
  themeColor: 'cyan' | 'purple' | 'amber' | 'rose';
  storageKey: string;
  steps: Record<number, StoryStep>;
}
