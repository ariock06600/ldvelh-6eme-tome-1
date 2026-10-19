import React, { useState } from 'react';
import { STORY_STEPS } from '../data/storyData.ts';
import type { StoryStep, TomeConfig } from '../types/story.ts';
import { Network, Search, Filter, Sparkles, AlertTriangle, ShieldX, CheckCircle, ArrowRight } from 'lucide-react';

interface StoryTreeProps {
  currentStepId: number;
  visitedStepIds: number[];
  onSelectStep: (stepId: number) => void;
  steps?: Record<number, StoryStep>;
  tomeConfig?: TomeConfig;
}

export const StoryTree: React.FC<StoryTreeProps> = ({
  currentStepId,
  visitedStepIds,
  onSelectStep,
  steps = STORY_STEPS,
  tomeConfig,
}) => {
  const [selectedAct, setSelectedAct] = useState<number | 'all'>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const stepsList = Object.values(steps);

  const filteredSteps = stepsList.filter((step) => {
    if (selectedAct !== 'all' && step.act !== selectedAct) return false;
    if (searchQuery.trim() !== '') {
      const q = searchQuery.toLowerCase();
      const matchId = step.id.toString() === q;
      const matchTitle = step.title.toLowerCase().includes(q);
      const matchLocation = step.location.toLowerCase().includes(q);
      const matchText = step.text.toLowerCase().includes(q);
      return matchId || matchTitle || matchLocation || matchText;
    }
    return true;
  });

  return (
    <div className="max-w-6xl mx-auto space-y-6">
      {/* Introduction Banner & Arborescence Summary */}
      <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-6 backdrop-blur-md">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-slate-800">
          <div>
            <h2 className="text-xl font-bold text-white flex items-center gap-2">
              <Network className="w-5 h-5 text-cyan-400" />
              Arborescence Globale • {tomeConfig ? tomeConfig.shortTitle : "100 Paragraphes"}
            </h2>
            <p className="text-xs text-slate-400 mt-1">
              Vue synoptique complète de l'aventure interactive d'Oxy-Kaelis, interconnectée et sans impasse.
            </p>
          </div>

          {/* Indicateurs des 3 fins */}
          <div className="flex flex-wrap items-center gap-2">
            <button
              onClick={() => onSelectStep(98)}
              className="px-2.5 py-1 rounded-lg bg-emerald-950/60 border border-emerald-700/60 text-emerald-300 text-xs font-medium hover:bg-emerald-900/60 flex items-center gap-1.5 transition-colors cursor-pointer"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Fin Lumineuse (98)</span>
            </button>
            <button
              onClick={() => onSelectStep(99)}
              className="px-2.5 py-1 rounded-lg bg-amber-950/60 border border-amber-700/60 text-amber-300 text-xs font-medium hover:bg-amber-900/60 flex items-center gap-1.5 transition-colors cursor-pointer"
            >
              <AlertTriangle className="w-3.5 h-3.5" />
              <span>Fin Neutre (99)</span>
            </button>
            <button
              onClick={() => onSelectStep(100)}
              className="px-2.5 py-1 rounded-lg bg-rose-950/60 border border-rose-700/60 text-rose-300 text-xs font-medium hover:bg-rose-900/60 flex items-center gap-1.5 transition-colors cursor-pointer"
            >
              <ShieldX className="w-3.5 h-3.5" />
              <span>Fin Obscure (100)</span>
            </button>
          </div>
        </div>

        {/* Tableau d'arborescence structurelle */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-3 pt-4 text-xs">
          <div className="bg-slate-950/60 border border-cyan-900/40 p-3 rounded-xl">
            <div className="font-bold text-cyan-300 font-mono-code mb-1">ACTE 1 : ÉTAPES 1 À 25</div>
            <p className="text-slate-400 leading-snug">
              Premiers signaux, bousculades ou tables rejetées, tentations de fuite ou réactions impulsives.
            </p>
          </div>
          <div className="bg-slate-950/60 border border-indigo-900/40 p-3 rounded-xl">
            <div className="font-bold text-indigo-300 font-mono-code mb-1">ACTE 2 : ÉTAPES 26 À 55</div>
            <p className="text-slate-400 leading-snug">
              Dilemmes moraux, fausses pistes (racket consenti, contre-attaque) et premières mains tendues.
            </p>
          </div>
          <div className="bg-slate-950/60 border border-purple-900/40 p-3 rounded-xl">
            <div className="font-bold text-purple-300 font-mono-code mb-1">ACTE 3 : ÉTAPES 56 À 85</div>
            <p className="text-slate-400 leading-snug">
              Activation des tiers (adultes, infirmerie, 3018, médiation) et éveil de la majorité silencieuse.
            </p>
          </div>
          <div className="bg-slate-950/60 border border-emerald-900/40 p-3 rounded-xl">
            <div className="font-bold text-emerald-300 font-mono-code mb-1">ACTE 4 : ÉTAPES 86 À 100</div>
            <p className="text-slate-400 leading-snug">
              Résolutions, réconciliation restaurative, justice réparatrice et convergence vers les 3 dénouements.
            </p>
          </div>
        </div>
      </div>

      {/* Filtres et recherche */}
      <div className="bg-slate-900/60 border border-slate-800/80 rounded-xl p-4 flex flex-wrap items-center justify-between gap-3 text-xs">
        <div className="flex items-center gap-1.5 flex-wrap">
          <span className="text-slate-400 font-mono-code mr-1 flex items-center gap-1">
            <Filter className="w-3.5 h-3.5" /> Filtrer par acte :
          </span>
          <button
            onClick={() => setSelectedAct('all')}
            className={`px-2.5 py-1 rounded-lg transition-colors cursor-pointer ${
              selectedAct === 'all'
                ? 'bg-cyan-600 text-white font-bold'
                : 'bg-slate-950 text-slate-400 hover:text-white hover:bg-slate-800'
            }`}
          >
            Tous (100)
          </button>
          {[1, 2, 3, 4].map((actNum) => (
            <button
              key={actNum}
              onClick={() => setSelectedAct(actNum)}
              className={`px-2.5 py-1 rounded-lg transition-colors cursor-pointer ${
                selectedAct === actNum
                  ? 'bg-cyan-600 text-white font-bold'
                  : 'bg-slate-950 text-slate-400 hover:text-white hover:bg-slate-800'
              }`}
            >
              Acte {actNum}
            </button>
          ))}
        </div>

        <div className="relative min-w-[220px]">
          <Search className="w-4 h-4 text-slate-500 absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Rechercher une étape..."
            className="w-full pl-9 pr-3 py-1.5 rounded-lg bg-slate-950 border border-slate-800 text-slate-200 text-xs focus:outline-none focus:border-cyan-500"
          />
        </div>
      </div>

      {/* Grille des 100 étapes */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
        {filteredSteps.map((s) => {
          const isVisited = visitedStepIds.includes(s.id);
          const isCurrent = currentStepId === s.id;
          const isLight = s.endingType === 'light';
          const isNeutral = s.endingType === 'neutral';
          const isDark = s.endingType === 'dark';

          return (
            <div
              key={s.id}
              onClick={() => onSelectStep(s.id)}
              className={`p-3.5 rounded-xl border transition-all cursor-pointer flex flex-col justify-between gap-2 group ${
                isCurrent
                  ? 'bg-cyan-950/60 border-cyan-400 ring-2 ring-cyan-500/30'
                  : isLight
                  ? 'bg-emerald-950/30 border-emerald-700/60 hover:border-emerald-500'
                  : isNeutral
                  ? 'bg-amber-950/30 border-amber-700/60 hover:border-amber-500'
                  : isDark
                  ? 'bg-rose-950/30 border-rose-700/60 hover:border-rose-500'
                  : isVisited
                  ? 'bg-slate-900/90 border-slate-700/80 hover:border-slate-500'
                  : 'bg-slate-950/60 border-slate-800/80 hover:border-slate-700 opacity-80'
              }`}
            >
              <div className="space-y-1">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-mono-code font-bold text-cyan-300">
                    § {s.id}
                  </span>
                  <span className="text-[10px] text-slate-400">
                    Acte {s.act}
                  </span>
                </div>
                <h4 className="text-xs font-semibold text-white group-hover:text-cyan-300 transition-colors line-clamp-1">
                  {s.title}
                </h4>
                <p className="text-[11px] text-slate-400 line-clamp-2 leading-relaxed">
                  {s.text}
                </p>
              </div>

              <div className="pt-2 border-t border-slate-800/60 flex items-center justify-between text-[10px] font-mono-code text-slate-400">
                <span>📍 {s.location}</span>
                <span className="flex items-center gap-0.5 text-cyan-400 group-hover:translate-x-0.5 transition-transform">
                  Aller <ArrowRight className="w-3 h-3" />
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
