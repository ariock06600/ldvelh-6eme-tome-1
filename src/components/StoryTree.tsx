import React, { useState } from 'react';
import { STORY_STEPS } from '../data/storyData.ts';
import { Network, Search, Filter, Sparkles, AlertTriangle, ShieldX, CheckCircle, ArrowRight } from 'lucide-react';

interface StoryTreeProps {
  currentStepId: number;
  visitedStepIds: number[];
  onSelectStep: (stepId: number) => void;
}

export const StoryTree: React.FC<StoryTreeProps> = ({
  currentStepId,
  visitedStepIds,
  onSelectStep,
}) => {
  const [selectedAct, setSelectedAct] = useState<number | 'all'>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const stepsList = Object.values(STORY_STEPS);

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
              Arborescence Globale des 100 Paragraphes
            </h2>
            <p className="text-xs text-slate-400 mt-1">
              Vue synoptique complète de l'aventure interactive d'Oxy-Kaelis, interconnectée et sans impasse.
            </p>
          </div>

          {/* Indicateurs des 3 fins */}
          <div className="flex flex-wrap items-center gap-2">
            <button
              onClick={() => onSelectStep(98)}
              className="px-2.5 py-1 rounded-lg bg-emerald-950/60 border border-emerald-700/60 text-emerald-300 text-xs font-medium hover:bg-emerald-900/60 flex items-center gap-1.5 transition-colors"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Fin Lumineuse (98)</span>
            </button>
            <button
              onClick={() => onSelectStep(99)}
              className="px-2.5 py-1 rounded-lg bg-amber-950/60 border border-amber-700/60 text-amber-300 text-xs font-medium hover:bg-amber-900/60 flex items-center gap-1.5 transition-colors"
            >
              <AlertTriangle className="w-3.5 h-3.5" />
              <span>Fin Fragile (99)</span>
            </button>
            <button
              onClick={() => onSelectStep(100)}
              className="px-2.5 py-1 rounded-lg bg-rose-950/60 border border-rose-700/60 text-rose-300 text-xs font-medium hover:bg-rose-900/60 flex items-center gap-1.5 transition-colors"
            >
              <ShieldX className="w-3.5 h-3.5" />
              <span>Fin Obscure (100)</span>
            </button>
          </div>
        </div>

        {/* Tableau d'arborescence structurelle */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-3 pt-4 text-xs">
          <div className="bg-slate-950/60 border border-cyan-900/40 p-3 rounded-xl">
            <div className="font-bold text-cyan-300 font-mono-code mb-1">ACTE 1 : ÉTAPES 1 À 30</div>
            <p className="text-slate-400 leading-snug">
              Bousculades, casier forcé, premiers choix : fuite, silence, racket ou premières alertes.
            </p>
          </div>
          <div className="bg-slate-950/60 border border-blue-900/40 p-3 rounded-xl">
            <div className="font-bold text-blue-300 font-mono-code mb-1">ACTE 2 : ÉTAPES 31 À 60</div>
            <p className="text-slate-400 leading-snug">
              Dilemmes critiques : club de robotique, journal de preuves, refus du chantage ou piège de la vengeance.
            </p>
          </div>
          <div className="bg-slate-950/60 border border-indigo-900/40 p-3 rounded-xl">
            <div className="font-bold text-indigo-300 font-mono-code mb-1">ACTE 3 : ÉTAPES 61 À 85</div>
            <p className="text-slate-400 leading-snug">
              Confrontations, rôle du témoin Sylvan, chute au dôme d'hydro-gravité, rassemblement des pairs.
            </p>
          </div>
          <div className="bg-slate-950/60 border border-purple-900/40 p-3 rounded-xl">
            <div className="font-bold text-purple-300 font-mono-code mb-1">ACTE 4 : ÉTAPES 86 À 100</div>
            <p className="text-slate-400 leading-snug">
              Commissions, justice restaurative et les 3 dénouements obligatoires (98, 99, 100).
            </p>
          </div>
        </div>
      </div>

      {/* Barre de filtrage et recherche */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-3 bg-slate-900/70 p-4 rounded-xl border border-slate-800">
        <div className="flex items-center gap-1.5 w-full sm:w-auto overflow-x-auto">
          <span className="text-xs text-slate-400 flex items-center gap-1 mr-1 font-mono-code">
            <Filter className="w-3.5 h-3.5" /> Filtrer :
          </span>
          <button
            onClick={() => setSelectedAct('all')}
            className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${
              selectedAct === 'all'
                ? 'bg-cyan-600 text-white'
                : 'bg-slate-950 text-slate-400 hover:text-white'
            }`}
          >
            Tous (100)
          </button>
          {[1, 2, 3, 4].map((actNum) => (
            <button
              key={actNum}
              onClick={() => setSelectedAct(actNum)}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${
                selectedAct === actNum
                  ? 'bg-cyan-600 text-white'
                  : 'bg-slate-950 text-slate-400 hover:text-white'
              }`}
            >
              Acte {actNum}
            </button>
          ))}
        </div>

        <div className="relative w-full sm:w-72">
          <Search className="w-4 h-4 text-slate-500 absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Rechercher par numéro, lieu ou mot-clé..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-9 pr-3 py-1.5 rounded-lg bg-slate-950 border border-slate-700 text-xs text-slate-200 placeholder-slate-500 focus:outline-none focus:border-cyan-500"
          />
        </div>
      </div>

      {/* Grille des étapes */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5">
        {filteredSteps.map((step) => {
          const isCurrent = step.id === currentStepId;
          const isVisited = visitedStepIds.includes(step.id);

          return (
            <div
              key={step.id}
              onClick={() => onSelectStep(step.id)}
              className={`p-4 rounded-xl border text-left cursor-pointer transition-all duration-200 group relative flex flex-col justify-between ${
                isCurrent
                  ? 'bg-cyan-950/60 border-cyan-400 ring-2 ring-cyan-400/40 shadow-lg shadow-cyan-950/50'
                  : step.endingType === 'light'
                  ? 'bg-emerald-950/30 border-emerald-700/60 hover:border-emerald-500'
                  : step.endingType === 'fragile'
                  ? 'bg-amber-950/30 border-amber-700/60 hover:border-amber-500'
                  : step.endingType === 'dark'
                  ? 'bg-rose-950/30 border-rose-700/60 hover:border-rose-500'
                  : isVisited
                  ? 'bg-slate-900/90 border-slate-700 hover:border-slate-500'
                  : 'bg-slate-950/70 border-slate-800/80 hover:border-slate-700 hover:bg-slate-900/60'
              }`}
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-2">
                  <div className="flex items-center gap-2">
                    <span
                      className={`w-7 h-7 rounded-md font-mono-code font-bold text-xs flex items-center justify-center ${
                        step.endingType === 'light'
                          ? 'bg-emerald-900 text-emerald-200'
                          : step.endingType === 'fragile'
                          ? 'bg-amber-900 text-amber-200'
                          : step.endingType === 'dark'
                          ? 'bg-rose-900 text-rose-200'
                          : isCurrent
                          ? 'bg-cyan-500 text-slate-950'
                          : 'bg-slate-800 text-slate-300'
                      }`}
                    >
                      {step.id}
                    </span>
                    <span className="text-[11px] text-slate-400 font-mono-code">
                      {step.location}
                    </span>
                  </div>

                  {isCurrent && (
                    <span className="text-[10px] bg-cyan-400 text-slate-950 font-bold px-1.5 py-0.5 rounded uppercase">
                      Actuelle
                    </span>
                  )}
                  {isVisited && !isCurrent && (
                    <span className="text-[10px] text-emerald-400 flex items-center gap-0.5">
                      <CheckCircle className="w-3 h-3" /> Exploré
                    </span>
                  )}
                </div>

                <h3 className="font-semibold text-sm text-white group-hover:text-cyan-300 transition-colors line-clamp-1 mb-1.5">
                  {step.title}
                </h3>
                <p className="text-xs text-slate-400 line-clamp-2 leading-relaxed">
                  {step.text}
                </p>
              </div>

              {/* Embranchements / Cibles */}
              <div className="mt-3 pt-2.5 border-t border-slate-800/60 flex items-center justify-between text-[11px]">
                {step.choices.length > 0 ? (
                  <div className="flex items-center gap-1.5 text-slate-400">
                    <span>Mène à :</span>
                    {step.choices.map((c, i) => (
                      <span
                        key={i}
                        className="font-mono-code font-semibold px-1.5 py-0.5 bg-slate-800 rounded text-cyan-300"
                      >
                        #{c.targetId}
                      </span>
                    ))}
                  </div>
                ) : (
                  <span
                    className={`font-bold font-mono-code ${
                      step.endingType === 'light'
                        ? 'text-emerald-400'
                        : step.endingType === 'fragile'
                        ? 'text-amber-400'
                        : 'text-rose-400'
                    }`}
                  >
                    ★ FIN DE L'HISTOIRE
                  </span>
                )}

                <span className="text-cyan-400 group-hover:translate-x-1 transition-transform flex items-center gap-0.5 font-medium">
                  Lire <ArrowRight className="w-3 h-3" />
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
