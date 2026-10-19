/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { TOMES, DEFAULT_TOME_ID, getTome } from './data/tomes.ts';
import type { TomeId } from './types/story.ts';
import { calculateStatsFromHistory, getStepCategory } from './utils/gameState.ts';
import { sound } from './utils/soundEffects.ts';
import { Navbar, NavTab } from './components/Navbar.tsx';
import { LandingPage } from './components/LandingPage.tsx';
import { StatusHUD } from './components/StatusHUD.tsx';
import { StoryPlayer } from './components/StoryPlayer.tsx';
import { PedagogicalGuide } from './components/PedagogicalGuide.tsx';

interface TomeProgress {
  currentStepId: number;
  history: number[];
}

export default function App() {
  const [activeTab, setActiveTab] = useState<NavTab>('home');
  const [tome1Progress, setTome1Progress] = useState<TomeProgress>({ currentStepId: 1, history: [1] });
  const [tome2Progress, setTome2Progress] = useState<TomeProgress>({ currentStepId: 1, history: [1] });
  const [tome3Progress, setTome3Progress] = useState<TomeProgress>({ currentStepId: 1, history: [1] });
  const [tome4Progress, setTome4Progress] = useState<TomeProgress>({ currentStepId: 1, history: [1] });
  const [soundEnabled, setSoundEnabled] = useState<boolean>(true);
  const [dyslexiaFont, setDyslexiaFont] = useState<boolean>(false);
  const [fontSize, setFontSize] = useState<'normal' | 'large' | 'xlarge'>('normal');

  // Load progress from localStorage on mount
  useEffect(() => {
    try {
      // Load Tome 1
      const savedTome1 = localStorage.getItem(TOMES['tome-1'].storageKey);
      if (savedTome1) {
        const parsed = JSON.parse(savedTome1);
        if (parsed.currentStepId && TOMES['tome-1'].steps[parsed.currentStepId]) {
          setTome1Progress({
            currentStepId: parsed.currentStepId,
            history: Array.isArray(parsed.history) && parsed.history.length > 0 ? parsed.history : [1],
          });
        }
      }

      // Load Tome 2
      const savedTome2 = localStorage.getItem(TOMES['tome-2'].storageKey);
      if (savedTome2) {
        const parsed = JSON.parse(savedTome2);
        if (parsed.currentStepId && TOMES['tome-2'].steps[parsed.currentStepId]) {
          setTome2Progress({
            currentStepId: parsed.currentStepId,
            history: Array.isArray(parsed.history) && parsed.history.length > 0 ? parsed.history : [1],
          });
        }
      }

      // Load Tome 3
      const savedTome3 = localStorage.getItem(TOMES['tome-3'].storageKey);
      if (savedTome3) {
        const parsed = JSON.parse(savedTome3);
        if (parsed.currentStepId && TOMES['tome-3'].steps[parsed.currentStepId]) {
          setTome3Progress({
            currentStepId: parsed.currentStepId,
            history: Array.isArray(parsed.history) && parsed.history.length > 0 ? parsed.history : [1],
          });
        }
      }

      // Load Tome 4
      const savedTome4 = localStorage.getItem(TOMES['tome-4'].storageKey);
      if (savedTome4) {
        const parsed = JSON.parse(savedTome4);
        if (parsed.currentStepId && TOMES['tome-4'].steps[parsed.currentStepId]) {
          setTome4Progress({
            currentStepId: parsed.currentStepId,
            history: Array.isArray(parsed.history) && parsed.history.length > 0 ? parsed.history : [1],
          });
        }
      }
    } catch {
      // Ignore localStorage errors
    }

    // Sync from window.location.hash for direct linking
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '');
      if (hash.startsWith('tome4-step-')) {
        const id = parseInt(hash.replace('tome4-step-', ''), 10);
        if (!isNaN(id) && TOMES['tome-4'].steps[id]) {
          setTome4Progress((prev) => ({ ...prev, currentStepId: id }));
          setActiveTab('tome-4');
        }
      } else if (hash === 'tome-4' || hash === 'tome4') {
        setActiveTab('tome-4');
      } else if (hash.startsWith('tome3-step-')) {
        const id = parseInt(hash.replace('tome3-step-', ''), 10);
        if (!isNaN(id) && TOMES['tome-3'].steps[id]) {
          setTome3Progress((prev) => ({ ...prev, currentStepId: id }));
          setActiveTab('tome-3');
        }
      } else if (hash === 'tome-3' || hash === 'tome3') {
        setActiveTab('tome-3');
      } else if (hash.startsWith('tome2-step-')) {
        const id = parseInt(hash.replace('tome2-step-', ''), 10);
        if (!isNaN(id) && TOMES['tome-2'].steps[id]) {
          setTome2Progress((prev) => ({ ...prev, currentStepId: id }));
          setActiveTab('tome-2');
        }
      } else if (hash === 'tome-2' || hash === 'tome2') {
        setActiveTab('tome-2');
      } else if (hash.startsWith('step-') || hash.startsWith('tome1-step-')) {
        const cleaned = hash.replace('tome1-step-', '').replace('step-', '');
        const id = parseInt(cleaned, 10);
        if (!isNaN(id) && TOMES['tome-1'].steps[id]) {
          setTome1Progress((prev) => ({ ...prev, currentStepId: id }));
          setActiveTab('tome-1');
        }
      } else if (hash === 'tome-1' || hash === 'tome1' || hash === 'play' || hash === 'aventure') {
        setActiveTab('tome-1');
      } else if (hash === 'pedagogy' || hash === 'guide') {
        setActiveTab('pedagogy');
      } else if (hash === 'home' || hash === 'accueil' || hash === '') {
        setActiveTab('home');
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // Save Tome 1 progress
  useEffect(() => {
    try {
      localStorage.setItem(TOMES['tome-1'].storageKey, JSON.stringify(tome1Progress));
    } catch {
      // Ignore
    }
  }, [tome1Progress]);

  // Save Tome 2 progress
  useEffect(() => {
    try {
      localStorage.setItem(TOMES['tome-2'].storageKey, JSON.stringify(tome2Progress));
    } catch {
      // Ignore
    }
  }, [tome2Progress]);

  // Save Tome 3 progress
  useEffect(() => {
    try {
      localStorage.setItem(TOMES['tome-3'].storageKey, JSON.stringify(tome3Progress));
    } catch {
      // Ignore
    }
  }, [tome3Progress]);

  // Save Tome 4 progress
  useEffect(() => {
    try {
      localStorage.setItem(TOMES['tome-4'].storageKey, JSON.stringify(tome4Progress));
    } catch {
      // Ignore
    }
  }, [tome4Progress]);

  const activeTomeId: TomeId =
    activeTab === 'tome-4'
      ? 'tome-4'
      : activeTab === 'tome-3'
      ? 'tome-3'
      : activeTab === 'tome-2'
      ? 'tome-2'
      : 'tome-1';

  const currentTomeConfig = getTome(activeTomeId);
  const currentProgress =
    activeTomeId === 'tome-4'
      ? tome4Progress
      : activeTomeId === 'tome-3'
      ? tome3Progress
      : activeTomeId === 'tome-2'
      ? tome2Progress
      : tome1Progress;

  const currentStep = currentTomeConfig.steps[currentProgress.currentStepId] || currentTomeConfig.steps[1];

  const handleStepChoice = (targetId: number) => {
    if (!currentTomeConfig.steps[targetId]) return;
    sound.playStepTransition();

    const newHistory = [...currentProgress.history, targetId];
    if (activeTomeId === 'tome-4') {
      setTome4Progress({ currentStepId: targetId, history: newHistory });
      window.location.hash = `tome4-step-${targetId}`;
    } else if (activeTomeId === 'tome-3') {
      setTome3Progress({ currentStepId: targetId, history: newHistory });
      window.location.hash = `tome3-step-${targetId}`;
    } else if (activeTomeId === 'tome-2') {
      setTome2Progress({ currentStepId: targetId, history: newHistory });
      window.location.hash = `tome2-step-${targetId}`;
    } else {
      setTome1Progress({ currentStepId: targetId, history: newHistory });
      window.location.hash = `step-${targetId}`;
    }

    const targetStep = currentTomeConfig.steps[targetId];
    if (targetStep.endingType && targetStep.endingType !== 'neutral') {
      sound.playEnding(targetStep.endingType);
    }

    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBacktrack = (targetStepId: number) => {
    if (!currentTomeConfig.steps[targetStepId]) return;
    const targetIndex = currentProgress.history.lastIndexOf(targetStepId);
    const newHistory = targetIndex !== -1 ? currentProgress.history.slice(0, targetIndex + 1) : [targetStepId];

    if (activeTomeId === 'tome-4') {
      setTome4Progress({ currentStepId: targetStepId, history: newHistory });
      window.location.hash = `tome4-step-${targetStepId}`;
    } else if (activeTomeId === 'tome-3') {
      setTome3Progress({ currentStepId: targetStepId, history: newHistory });
      window.location.hash = `tome3-step-${targetStepId}`;
    } else if (activeTomeId === 'tome-2') {
      setTome2Progress({ currentStepId: targetStepId, history: newHistory });
      window.location.hash = `tome2-step-${targetStepId}`;
    } else {
      setTome1Progress({ currentStepId: targetStepId, history: newHistory });
      window.location.hash = `step-${targetStepId}`;
    }

    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleDirectJump = (targetId: number) => {
    if (!currentTomeConfig.steps[targetId]) return;
    sound.playStepTransition();

    const updateHistory = currentProgress.history.includes(targetId)
      ? currentProgress.history
      : [...currentProgress.history, targetId];

    if (activeTomeId === 'tome-4') {
      setTome4Progress({ currentStepId: targetId, history: updateHistory });
      window.location.hash = `tome4-step-${targetId}`;
    } else if (activeTomeId === 'tome-3') {
      setTome3Progress({ currentStepId: targetId, history: updateHistory });
      window.location.hash = `tome3-step-${targetId}`;
    } else if (activeTomeId === 'tome-2') {
      setTome2Progress({ currentStepId: targetId, history: updateHistory });
      window.location.hash = `tome2-step-${targetId}`;
    } else {
      setTome1Progress({ currentStepId: targetId, history: updateHistory });
      window.location.hash = `step-${targetId}`;
    }

    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleReset = () => {
    if (activeTomeId === 'tome-4') {
      setTome4Progress({ currentStepId: 1, history: [1] });
      window.location.hash = 'tome4-step-1';
    } else if (activeTomeId === 'tome-3') {
      setTome3Progress({ currentStepId: 1, history: [1] });
      window.location.hash = 'tome3-step-1';
    } else if (activeTomeId === 'tome-2') {
      setTome2Progress({ currentStepId: 1, history: [1] });
      window.location.hash = 'tome2-step-1';
    } else {
      setTome1Progress({ currentStepId: 1, history: [1] });
      window.location.hash = 'step-1';
    }
    sound.playClick();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const toggleSound = () => {
    const updated = sound.toggleSound();
    setSoundEnabled(updated);
  };

  const cycleFontSize = () => {
    setFontSize((prev) => (prev === 'normal' ? 'large' : prev === 'large' ? 'xlarge' : 'normal'));
  };

  const handleTabChange = (tab: NavTab) => {
    setActiveTab(tab);
    sound.playClick();
    if (tab === 'tome-1') {
      window.location.hash = `step-${tome1Progress.currentStepId}`;
    } else if (tab === 'tome-2') {
      window.location.hash = `tome2-step-${tome2Progress.currentStepId}`;
    } else if (tab === 'tome-3') {
      window.location.hash = `tome3-step-${tome3Progress.currentStepId}`;
    } else if (tab === 'tome-4') {
      window.location.hash = `tome4-step-${tome4Progress.currentStepId}`;
    } else if (tab === 'pedagogy') {
      window.location.hash = 'pedagogy';
    } else {
      window.location.hash = 'home';
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleStartTome = (tomeId: TomeId) => {
    setActiveTab(tomeId);
    sound.playClick();
    if (tomeId === 'tome-4') {
      window.location.hash = `tome4-step-${tome4Progress.currentStepId}`;
    } else if (tomeId === 'tome-3') {
      window.location.hash = `tome3-step-${tome3Progress.currentStepId}`;
    } else if (tomeId === 'tome-2') {
      window.location.hash = `tome2-step-${tome2Progress.currentStepId}`;
    } else {
      window.location.hash = `step-${tome1Progress.currentStepId}`;
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const playerStats = calculateStatsFromHistory(currentProgress.history, currentTomeConfig.steps);
  const actTitle = getStepCategory(currentProgress.currentStepId);
  const protagonistName =
    currentTomeConfig.number === 4
      ? 'Lyra'
      : currentTomeConfig.number === 3
      ? 'Corin'
      : currentTomeConfig.number === 2
      ? 'Naël'
      : 'Élior';

  return (
    <div className={`min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans ${dyslexiaFont ? 'dyslexia-font' : ''}`}>
      {/* Navbar with Landing Page, Tome 1, Tome 2, Tome 3, Tome 4, and Pedagogical Guide tabs */}
      <Navbar
        activeTab={activeTab}
        setActiveTab={handleTabChange}
        soundEnabled={soundEnabled}
        toggleSound={toggleSound}
        dyslexiaFont={dyslexiaFont}
        toggleDyslexiaFont={() => setDyslexiaFont(!dyslexiaFont)}
        fontSize={fontSize}
        cycleFontSize={cycleFontSize}
        onReset={handleReset}
      />

      {/* Main Content Area */}
      <main className="flex-1 max-w-6xl w-full mx-auto px-4 py-6">
        {/* Landing Page (Portail de la collection Groupe Bouclier) */}
        {activeTab === 'home' && (
          <LandingPage
            onStartTome={handleStartTome}
            onOpenPedagogy={() => handleTabChange('pedagogy')}
          />
        )}

        {/* Adventure Mode (Tome 1, Tome 2, Tome 3, or Tome 4) */}
        {(activeTab === 'tome-1' || activeTab === 'tome-2' || activeTab === 'tome-3' || activeTab === 'tome-4') && (
          <>
            <StatusHUD
              stats={playerStats}
              currentStepId={currentProgress.currentStepId}
              currentLocation={currentStep.location}
              actTitle={actTitle}
              protagonistName={protagonistName}
              tomeNumber={currentTomeConfig.number}
              tomeShortTitle={currentTomeConfig.shortTitle}
              themeColor={currentTomeConfig.themeColor}
            />
            <StoryPlayer
              step={currentStep}
              onChoose={handleStepChoice}
              onBacktrack={handleBacktrack}
              history={currentProgress.history}
              fontSize={fontSize}
              dyslexiaFont={dyslexiaFont}
              onDirectJump={handleDirectJump}
              onReset={handleReset}
              tomeConfig={currentTomeConfig}
              onChangeTome={handleStartTome}
            />
          </>
        )}

        {/* Pedagogical Guide View */}
        {activeTab === 'pedagogy' && (
          <PedagogicalGuide />
        )}
      </main>

      {/* Footer with user requested signature */}
      <footer className="bg-slate-950 border-t border-slate-900 py-6 px-4 text-xs text-slate-500 text-center no-print mt-auto">
        <div className="max-w-4xl mx-auto space-y-2">
          <p className="text-slate-400">
            <strong>Groupe Bouclier</strong> • Quadrilogie de fictions interactives de sensibilisation contre le harcèlement scolaire (Cycle 3 / 6e).
          </p>
          <p>
            En cas de besoin, contactez gratuitement et anonymement le <strong className="text-cyan-400 font-mono-code">3018</strong> (Harcèlement et cyberharcèlement).
          </p>
          <p className="text-[11px] text-slate-400 font-medium tracking-wide">
            Créé par le Groupe Bouclier
          </p>
        </div>
      </footer>
    </div>
  );
}
