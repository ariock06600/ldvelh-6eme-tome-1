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
