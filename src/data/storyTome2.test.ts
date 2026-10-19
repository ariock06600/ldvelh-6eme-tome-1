import test from 'node:test';
import assert from 'node:assert/strict';
import { STORY_STEPS_TOME_2 } from './storyDataTome2.ts';

test('Tome 2 contains exactly 100 numbered steps from 1 to 100', () => {
  const stepIds = Object.keys(STORY_STEPS_TOME_2).map(Number).sort((a, b) => a - b);
  assert.equal(stepIds.length, 100, `Expected 100 steps, found ${stepIds.length}`);
  
  for (let i = 1; i <= 100; i++) {
    assert.ok(STORY_STEPS_TOME_2[i], `Step ${i} must exist in Tome 2`);
    assert.equal(STORY_STEPS_TOME_2[i].id, i, `Step ${i} ID must equal ${i}`);
    assert.ok(STORY_STEPS_TOME_2[i].title.length > 0, `Step ${i} must have a title`);
    assert.ok(STORY_STEPS_TOME_2[i].text.length > 50, `Step ${i} text must be substantial`);
  }
});

test('Tome 2 has three mandatory endings with correct types and positions', () => {
  assert.equal(STORY_STEPS_TOME_2[98].endingType, 'light', 'Step 98 must be Fin Lumineuse');
  assert.equal(STORY_STEPS_TOME_2[99].endingType, 'neutral', 'Step 99 must be Fin Neutre');
  assert.equal(STORY_STEPS_TOME_2[100].endingType, 'dark', 'Step 100 must be Fin Obscure');
});

test('Tome 2 choices point to valid step IDs between 1 and 100', () => {
  for (let i = 1; i <= 97; i++) {
    const step = STORY_STEPS_TOME_2[i];
    assert.ok(step.choices.length >= 1, `Step ${i} must have at least 1 choice`);
    for (const choice of step.choices) {
      assert.ok(choice.targetId >= 1 && choice.targetId <= 100, `Step ${i} choice target ${choice.targetId} is out of bounds (1-100)`);
      assert.ok(STORY_STEPS_TOME_2[choice.targetId], `Choice target ${choice.targetId} from step ${i} does not exist`);
      assert.ok(choice.text.length > 10, `Choice text in step ${i} must be descriptive`);
    }
  }
});

test('Tome 2 all three endings (98, 99, 100) are reachable from Step 1', () => {
  const visited = new Set<number>();
  const queue: number[] = [1];
  visited.add(1);

  while (queue.length > 0) {
    const currentId = queue.shift()!;
    const step = STORY_STEPS_TOME_2[currentId];
    if (!step || !step.choices) continue;

    for (const choice of step.choices) {
      if (!visited.has(choice.targetId)) {
        visited.add(choice.targetId);
        queue.push(choice.targetId);
      }
    }
  }

  assert.ok(visited.has(98), 'Step 98 (Fin Lumineuse) must be reachable from Step 1');
  assert.ok(visited.has(99), 'Step 99 (Fin Neutre) must be reachable from Step 1');
  assert.ok(visited.has(100), 'Step 100 (Fin Obscure) must be reachable from Step 1');
});
