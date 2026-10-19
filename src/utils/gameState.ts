import type { PlayerStats, StoryStep } from '../types/story.ts';
import { STORY_STEPS } from '../data/storyData.ts';

export const INITIAL_PLAYER_STATS: PlayerStats = {
  serenity: 70,
  solidarity: 40,
  trust: 50,
  badges: [],
  history: [1],
};

export function clamp(value: number, min: number = 0, max: number = 100): number {
  return Math.min(Math.max(value, min), max);
}

export function calculateStatsFromHistory(
  history: number[],
  steps: Record<number, StoryStep> = STORY_STEPS
): PlayerStats {
  let serenity = 70;
  let solidarity = 40;
  let trust = 50;
  const badgesSet = new Set<string>();

  for (const stepId of history) {
    const step = steps[stepId];
    if (step && step.statsImpact) {
      if (typeof step.statsImpact.serenity === 'number') {
        serenity += step.statsImpact.serenity;
      }
      if (typeof step.statsImpact.solidarity === 'number') {
        solidarity += step.statsImpact.solidarity;
      }
      if (typeof step.statsImpact.trust === 'number') {
        trust += step.statsImpact.trust;
      }
      if (step.statsImpact.badge) {
        badgesSet.add(step.statsImpact.badge);
      }
    }
  }

  return {
    serenity: clamp(serenity),
    solidarity: clamp(solidarity),
    trust: clamp(trust),
    badges: Array.from(badgesSet),
    history,
  };
}

export function getStepCategory(id: number): string {
  if (id === 98) return 'Fin Lumineuse';
  if (id === 99) return 'Fin Neutre';
  if (id === 100) return 'Fin Obscure';
  if (id <= 25) return 'Acte 1 : Premières alertes & signaux de rejet';
  if (id <= 55) return 'Acte 2 : Dilemmes & recherche d\'alliés';
  if (id <= 85) return 'Acte 3 : Confrontations décisives & médiation';
  return 'Acte 4 : Résolutions & leçons durables';
}
