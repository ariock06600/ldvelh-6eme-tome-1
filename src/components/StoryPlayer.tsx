import React, { useState } from 'react';
import type { StoryStep } from '../types/story.ts';
import { ChevronRight, ArrowLeft, Sparkles, AlertTriangle, ShieldX, Info, CornerDownRight, CheckCircle2 } from 'lucide-react';
import { sound } from '../utils/soundEffects.ts';

interface StoryPlayerProps {
  step: StoryStep;
  onChoose: (targetId: number) => void;
  onBacktrack: (stepId: number) => void;
  history: number[];
  fontSize: 'normal' | 'large' | 'xlarge';
  dyslexiaFont: boolean;
  onDirectJump: (stepId: number) => void;
  onReset: () => void;
}

export const StoryPlayer: React.FC<StoryPlayerProps> = ({
  step,
  onChoose,
  onBacktrack,
  history,
  fontSize,
  dyslexiaFont,
  onDirectJump,
  onReset,
}) => {
  const [jumpInput, setJumpInput] = useState('');
  const [jumpError, setJumpError] = useState('');

  const fontClass =
    fontSize === 'xlarge'
      ? 'text-xl sm:text-2xl leading-relaxed'
      : fontSize === 'large'
      ? 'text-lg sm:text-xl leading-relaxed'
      : 'text-base sm:text-lg leading-relaxed';

  const handleJumpSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const id = parseInt(jumpInput.trim(), 10);
    if (!isNaN(id) && id >= 1 && id <= 100) {
      setJumpError('');
      setJumpInput('');
      onDirectJump(id);
    } else {
      setJumpError('Veuillez entrer un numéro entre 1 et 100.');
    }
  };

  const isEnding = !!step.endingType;

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      {/* Historique de navigation (Fil d'Ariane / Journal de bord) */}
      <div className="flex items-center justify-between gap-2 overflow-x-auto py-1 text-xs text-slate-400 no-print">
        <div className="flex items-center gap-1.5 shrink-0">
          <span className="font-mono-code text-slate-500 font-semibold">Parcours :</span>
          {history.slice(-5).map((stepId, index, arr) => (
            <React.Fragment key={index}>
              <button
                onClick={() => onBacktrack(stepId)}
                title={`Revenir à l'étape ${stepId}`}
                className={`px-2 py-0.5 rounded font-mono-code transition-colors ${
                  stepId === step.id
                    ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 font-bold'
                    : 'bg-slate-900 text-slate-400 hover:text-white hover:bg-slate-800'
                }`}
              >
                #{stepId}
              </button>
              {index < arr.length - 1 && <span className="text-slate-600">→</span>}
            </React.Fragment>
          ))}
        </div>

        {history.length > 1 && (
          <button
            onClick={() => {
              sound.playClick();
              onBacktrack(history[history.length - 2]);
            }}
            className="flex items-center gap-1 text-xs text-cyan-400 hover:text-cyan-300 font-medium px-2 py-1 rounded bg-slate-900 border border-slate-800 transition-colors shrink-0"
          >
            <ArrowLeft className="w-3.5 h-3.5" /> Revenir en arrière
          </button>
        )}
      </div>

      {/* Carte du Paragraphe principal */}
      <div
        className={`bg-slate-900/95 border rounded-2xl p-6 sm:p-8 backdrop-blur-md shadow-2xl relative overflow-hidden transition-all duration-300 ${
          step.endingType === 'light'
            ? 'border-emerald-500/50 shadow-emerald-950/40'
            : step.endingType === 'neutral' || step.endingType === 'fragile'
            ? 'border-amber-500/50 shadow-amber-950/40'
            : step.endingType === 'dark'
            ? 'border-rose-500/50 shadow-rose-950/40'
            : 'border-slate-800 shadow-cyan-950/20'
        }`}
      >
        {/* Glow décoratif */}
        <div
          className={`absolute -top-24 -right-24 w-60 h-60 rounded-full blur-3xl pointer-events-none opacity-20 ${
            step.endingType === 'light'
              ? 'bg-emerald-400'
              : step.endingType === 'neutral' || step.endingType === 'fragile'
              ? 'bg-amber-400'
              : step.endingType === 'dark'
              ? 'bg-rose-500'
              : 'bg-cyan-500'
          }`}
        />

        {/* En-tête du paragraphe */}
        <div className="flex flex-wrap items-center justify-between gap-3 pb-4 mb-4 border-b border-slate-800/80">
          <div className="flex items-center gap-2.5">
            <span className="w-8 h-8 rounded-lg bg-cyan-950 border border-cyan-800 text-cyan-300 font-mono-code font-bold flex items-center justify-center text-sm shadow-inner">
              {step.id}
            </span>
            <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-slate-800 text-slate-300 border border-slate-700">
              📍 {step.location}
            </span>
          </div>

          {step.endingType ? (
            <span
              className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider border flex items-center gap-1.5 ${
                step.endingType === 'light'
                  ? 'bg-emerald-950/80 text-emerald-300 border-emerald-700'
                  : step.endingType === 'neutral' || step.endingType === 'fragile'
                  ? 'bg-amber-950/80 text-amber-300 border-amber-700'
                  : 'bg-rose-950/80 text-rose-300 border-rose-700'
              }`}
            >
              {step.endingType === 'light' && <Sparkles className="w-3.5 h-3.5" />}
              {(step.endingType === 'neutral' || step.endingType === 'fragile') && <AlertTriangle className="w-3.5 h-3.5" />}
              {step.endingType === 'dark' && <ShieldX className="w-3.5 h-3.5" />}
              {step.endingType === 'light'
                ? 'Dénouement Lumineux'
                : step.endingType === 'neutral' || step.endingType === 'fragile'
                ? 'Dénouement Neutre'
                : 'Dénouement Obscur'}
            </span>
          ) : (
            <span className="text-xs text-slate-400 font-mono-code">
              Cycle Alpha • Étape {step.id} / 100
            </span>
          )}
        </div>

        {/* Titre du paragraphe */}
        <h2 className="text-xl sm:text-2xl font-bold text-white mb-4 tracking-tight flex items-center gap-2">
          {step.title}
        </h2>

        {/* Corps narratif du paragraphe */}
        <div
          className={`text-slate-200 ${fontClass} ${
            dyslexiaFont ? 'dyslexia-font' : ''
          } bg-slate-950/50 p-5 rounded-xl border border-slate-800/60`}
        >
          {step.text}
        </div>

        {/* Bilan éducatif si fin atteinte */}
        {isEnding && (
          <div
            className={`mt-6 p-5 rounded-xl border ${
              step.endingType === 'light'
                ? 'bg-emerald-950/30 border-emerald-800/60 text-emerald-200'
                : step.endingType === 'neutral' || step.endingType === 'fragile'
                ? 'bg-amber-950/30 border-amber-800/60 text-amber-200'
                : 'bg-rose-950/30 border-rose-800/60 text-rose-200'
            }`}
          >
            <h3 className="font-bold text-base mb-2 flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5" />
              Ce que cette aventure enseigne aux élèves de 6e :
            </h3>
            <p className="text-sm leading-relaxed opacity-95">
              {step.pedagogicalNote}
            </p>
            <div className="mt-4 pt-3 border-t border-slate-800/60 flex flex-wrap gap-3">
              <button
                onClick={onReset}
                className="px-4 py-2 rounded-lg bg-cyan-600 hover:bg-cyan-500 text-white font-medium text-xs shadow-md transition-colors flex items-center gap-2"
              >
                Rejouer depuis l'Étape 1
              </button>
              <button
                onClick={() => onDirectJump(history[Math.max(0, history.length - 3)] || 1)}
                className="px-4 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 font-medium text-xs transition-colors"
              >
                Explorer un autre embranchement précédent
              </button>
            </div>
          </div>
        )}

        {/* Note pédagogique sous chaque étape (hors fin) */}
        {!isEnding && step.pedagogicalNote && (
          <div className="mt-5 p-3.5 rounded-xl bg-indigo-950/30 border border-indigo-800/40 text-indigo-200 text-xs flex items-start gap-2.5">
            <Info className="w-4 h-4 text-indigo-400 shrink-0 mt-0.5" />
            <div>
              <span className="font-bold text-indigo-300 font-mono-code uppercase tracking-wider block mb-0.5">
                Repère de médiation scolaire :
              </span>
              <p className="leading-relaxed">{step.pedagogicalNote}</p>
            </div>
          </div>
        )}

        {/* Choix possibles */}
        {!isEnding && step.choices.length > 0 && (
          <div className="mt-8 space-y-3">
            <h3 className="text-xs uppercase tracking-wider text-slate-400 font-semibold font-mono-code flex items-center gap-1.5">
              <CornerDownRight className="w-4 h-4 text-cyan-400" />
              Choix possibles à cette étape :
            </h3>

            <div className="grid grid-cols-1 gap-3">
              {step.choices.map((choice, idx) => (
                <button
                  key={idx}
                  onClick={() => onChoose(choice.targetId)}
                  className="group w-full text-left p-4 sm:p-5 rounded-xl bg-slate-950 hover:bg-cyan-950/40 border border-slate-800 hover:border-cyan-500/60 transition-all duration-200 shadow-md hover:shadow-cyan-900/20 flex items-start justify-between gap-4"
                >
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="inline-block w-2 h-2 rounded-full bg-cyan-400 group-hover:scale-125 transition-transform" />
                      <span className="font-semibold text-white group-hover:text-cyan-300 text-sm sm:text-base">
                        {choice.label || `Option ${idx + 1}`}
                      </span>
                    </div>
                    <p
                      className={`text-slate-300 text-xs sm:text-sm pl-4 leading-relaxed ${
                        dyslexiaFont ? 'dyslexia-font' : ''
                      }`}
                    >
                      {choice.text}
                    </p>
                  </div>

                  <div className="shrink-0 flex items-center gap-1.5 bg-slate-900 group-hover:bg-cyan-600 border border-slate-800 group-hover:border-cyan-500 px-3 py-1.5 rounded-lg text-slate-300 group-hover:text-white transition-colors text-xs font-mono-code font-bold">
                    <span>Étape {choice.targetId}</span>
                    <ChevronRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                  </div>
                </button>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Saut direct vers un paragraphe (outil pédagogique pour animateurs / profs / élèves) */}
      <div className="bg-slate-900/60 border border-slate-800/80 rounded-xl p-3.5 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-400 no-print">
        <span className="font-medium">
          Accès rapide : Vous travaillez sur un paragraphe précis en classe ?
        </span>
        <form onSubmit={handleJumpSubmit} className="flex items-center gap-2">
          <input
            type="number"
            min="1"
            max="100"
            value={jumpInput}
            onChange={(e) => setJumpInput(e.target.value)}
            placeholder="N° 1 à 100"
            className="w-24 px-2.5 py-1 rounded-lg bg-slate-950 border border-slate-700 text-slate-200 text-xs font-mono-code focus:outline-none focus:border-cyan-500"
          />
          <button
            type="submit"
            className="px-3 py-1 rounded-lg bg-cyan-600 hover:bg-cyan-500 text-white font-medium transition-colors"
          >
            Aller au N°
          </button>
        </form>
        {jumpError && <span className="text-rose-400 text-xs w-full">{jumpError}</span>}
      </div>
    </div>
  );
};
