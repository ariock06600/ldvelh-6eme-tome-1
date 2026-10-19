import test from 'node:test';
import assert from 'node:assert/strict';
import { calculateStatsFromHistory, clamp, getStepCategory } from './gameState.ts';

test('clamp restricts numbers within min and max', () => {
  assert.equal(clamp(120, 0, 100), 100);
  assert.equal(clamp(-20, 0, 100), 0);
  assert.equal(clamp(55, 0, 100), 55);
});

test('calculateStatsFromHistory calculates stats and badges properly', () => {
  const stats = calculateStatsFromHistory([1, 3, 6, 12]);
  assert.ok(stats.serenity >= 0 && stats.serenity <= 100);
  assert.ok(stats.solidarity >= 0 && stats.solidarity <= 100);
  assert.ok(stats.trust >= 0 && stats.trust <= 100);
  assert.ok(stats.badges.includes('Journal de Preuves'), 'Badge Journal de Preuves should be unlocked');
});

test('getStepCategory properly classifies acts and endings', () => {
  assert.equal(getStepCategory(98), 'Fin Lumineuse');
  assert.equal(getStepCategory(99), 'Fin Neutre');
  assert.equal(getStepCategory(100), 'Fin Obscure');
  assert.equal(getStepCategory(15), 'Acte 1 : Premières alertes & intimidations');
  assert.equal(getStepCategory(45), 'Acte 2 : Dilemmes & recherche d\'alliés');
  assert.equal(getStepCategory(75), 'Acte 3 : Confrontations décisives');
  assert.equal(getStepCategory(90), 'Acte 4 : Résolutions & leçons');
});
