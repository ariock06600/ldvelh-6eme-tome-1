/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { STORY_STEPS } from './data/storyData.ts';
import { calculateStatsFromHistory, getStepCategory } from './utils/gameState.ts';
import { sound } from './utils/soundEffects.ts';
import { Navbar, NavTab } from './components/Navbar.tsx';
import { LandingPage } from './components/LandingPage.tsx';
import { StatusHUD } from './components/StatusHUD.tsx';
import { StoryPlayer } from './components/StoryPlayer.tsx';
import { PedagogicalGuide } from './components/PedagogicalGuide.tsx';

const STORAGE_KEY = 'oxy_kaelis_progress_v1';

export default function App() {
  const [activeTab, setActiveTab] = useState<NavTab>('home');
  const [currentStepId, setCurrentStepId] = useState<number>(1);
  const [history, setHistory] = useState<number[]>([1]);
  const [soundEnabled, setSoundEnabled] = useState<boolean>(true);
  const [dyslexiaFont, setDyslexiaFont] = useState<boolean>(false);
  const [fontSize, setFontSize] = useState<'normal' | 'large' | 'xlarge'>('normal');

  // Load progress and hash on mount
  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        if (parsed.currentStepId && STORY_STEPS[parsed.currentStepId]) {
          setCurrentStepId(parsed.currentStepId);
        }
        if (Array.isArray(parsed.history) && parsed.history.length > 0) {
          setHistory(parsed.history);
        }
      }
    } catch {
      // Ignore localStorage errors
    }

    // Sync from window.location.hash for direct GitHub Pages linking
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '');
      if (hash.startsWith('step-')) {
        const id = parseInt(hash.replace('step-', ''), 10);
        if (!isNaN(id) && STORY_STEPS[id]) {
          setCurrentStepId(id);
          setActiveTab('play');
        }
      } else if (hash === 'pedagogy') {
        setActiveTab('pedagogy');
      } else if (hash === 'play' || hash === 'aventure') {
        setActiveTab('play');
      } else if (hash === 'home' || hash === 'accueil' || hash === '') {
        setActiveTab('home');
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // Save progress
  useEffect(() => {
    try {
      localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify({ currentStepId, history })
      );
    } catch {
      // Ignore
    }
  }, [currentStepId, history]);

  const handleStepChoice = (targetId: number) => {
    if (!STORY_STEPS[targetId]) return;
    sound.playStepTransition();
    const newHistory = [...history, targetId];
    setHistory(newHistory);
    setCurrentStepId(targetId);
    window.location.hash = `step-${targetId}`;

    const targetStep = STORY_STEPS[targetId];
    if (targetStep.endingType && targetStep.endingType !== 'neutral') {
      sound.playEnding(targetStep.endingType);
    }

    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBacktrack = (targetStepId: number) => {
    if (!STORY_STEPS[targetStepId]) return;
    const targetIndex = history.lastIndexOf(targetStepId);
    const newHistory = targetIndex !== -1 ? history.slice(0, targetIndex + 1) : [targetStepId];
    setHistory(newHistory);
    setCurrentStepId(targetStepId);
    window.location.hash = `step-${targetStepId}`;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleDirectJump = (targetId: number) => {
    if (!STORY_STEPS[targetId]) return;
    sound.playStepTransition();
    setHistory((prev) => (prev.includes(targetId) ? prev : [...prev, targetId]));
    setCurrentStepId(targetId);
    setActiveTab('play');
    window.location.hash = `step-${targetId}`;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleReset = () => {
    setCurrentStepId(1);
    setHistory([1]);
    setActiveTab('play');
    window.location.hash = 'step-1';
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
    if (tab === 'play') {
      window.location.hash = `step-${currentStepId}`;
    } else if (tab === 'pedagogy') {
      window.location.hash = 'pedagogy';
    } else {
      window.location.hash = 'home';
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentStep = STORY_STEPS[currentStepId] || STORY_STEPS[1];
  const playerStats = calculateStatsFromHistory(history);
  const actTitle = getStepCategory(currentStepId);

  return (
    <div className={`min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans ${dyslexiaFont ? 'dyslexia-font' : ''}`}>
      {/* Navbar with Landing Page, Tome 1, and Pedagogical Guide tabs */}
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
            onStartOxyKaelis={() => handleTabChange('play')}
            onOpenPedagogy={() => handleTabChange('pedagogy')}
          />
        )}

        {/* Status HUD shown in adventure mode */}
        {activeTab === 'play' && (
          <>
            <StatusHUD
              stats={playerStats}
              currentStepId={currentStepId}
              currentLocation={currentStep.location}
              actTitle={actTitle}
            />
            <StoryPlayer
              step={currentStep}
              onChoose={handleStepChoice}
              onBacktrack={handleBacktrack}
              history={history}
              fontSize={fontSize}
              dyslexiaFont={dyslexiaFont}
              onDirectJump={handleDirectJump}
              onReset={handleReset}
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
            <strong>Groupe Bouclier</strong> • Collection de fictions interactives de sensibilisation contre le harcèlement scolaire (Cycle 3 / 6e).
          </p>
          <p>
            En cas de besoin, contactez gratuitement et anonymement le <strong className="text-cyan-400 font-mono-code">3018</strong> (Harcèlement et cyberharcèlement).
          </p>
          <p className="text-[11px] text-slate-400 font-medium tracking-wide">
            créé par Pierre NDT groupe bouclier
          </p>
        </div>
      </footer>
    </div>
  );
}
