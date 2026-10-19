import React, { useState } from 'react';
import type { StoryStep, TomeConfig, TomeId } from '../types/story.ts';
import { ChevronRight, ArrowLeft, Sparkles, AlertTriangle, ShieldX, Info, CornerDownRight, CheckCircle2, BookOpen, Layers } from 'lucide-react';
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
  tomeConfig?: TomeConfig;
  onChangeTome?: (tomeId: TomeId) => void;
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
  tomeConfig,
  onChangeTome,
}) => {
  const [jumpInput, setJumpInput] = useState('');
  const [jumpError, setJumpError] = useState('');

  const isPurple = tomeConfig?.themeColor === 'purple';
  const isAmber = tomeConfig?.themeColor === 'amber';
  const isRose = tomeConfig?.themeColor === 'rose';

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
      {/* Tome Banner & Quick Switcher */}
      {tomeConfig && (
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 bg-slate-900/60 border border-slate-800 rounded-xl px-4 py-2.5 text-xs text-slate-300">
          <div className="flex items-center gap-2.5">
            <span className={`px-2 py-0.5 rounded font-mono-code font-bold uppercase text-[11px] ${
              isRose
                ? 'bg-rose-950/80 text-rose-300 border border-rose-800/60'
                : isAmber
                ? 'bg-amber-950/80 text-amber-300 border border-amber-800/60'
                : isPurple
                ? 'bg-purple-950/80 text-purple-300 border border-purple-800/60'
                : 'bg-cyan-950/80 text-cyan-300 border border-cyan-800/60'
            }`}>
              Tome {tomeConfig.number}
            </span>
            <span className="font-semibold text-white truncate">
              {tomeConfig.title}
            </span>
            <span className="text-slate-500 hidden md:inline">• {tomeConfig.station}</span>
          </div>

          {onChangeTome && (
            <div className="flex items-center gap-1.5 self-end sm:self-auto shrink-0 flex-wrap">
              <span className="text-slate-500 text-[11px]">Changer :</span>
              <button
                onClick={() => onChangeTome('tome-1')}
                className={`px-2 py-1 rounded text-[11px] font-medium transition-colors cursor-pointer ${
                  tomeConfig.id === 'tome-1'
                    ? 'bg-cyan-600 text-white font-bold'
                    : 'bg-slate-800 text-slate-300 hover:text-white hover:bg-slate-700'
                }`}
              >
                Tome 1
              </button>
              <button
                onClick={() => onChangeTome('tome-2')}
                className={`px-2 py-1 rounded text-[11px] font-medium transition-colors cursor-pointer ${
                  tomeConfig.id === 'tome-2'
                    ? 'bg-purple-600 text-white font-bold'
                    : 'bg-slate-800 text-slate-300 hover:text-white hover:bg-slate-700'
                }`}
              >
                Tome 2
              </button>
              <button
                onClick={() => onChangeTome('tome-3')}
                className={`px-2 py-1 rounded text-[11px] font-medium transition-colors cursor-pointer ${
                  tomeConfig.id === 'tome-3'
                    ? 'bg-amber-600 text-slate-950 font-bold'
                    : 'bg-slate-800 text-slate-300 hover:text-white hover:bg-slate-700'
                }`}
              >
                Tome 3
              </button>
              <button
                onClick={() => onChangeTome('tome-4')}
                className={`px-2 py-1 rounded text-[11px] font-medium transition-colors cursor-pointer ${
                  tomeConfig.id === 'tome-4'
                    ? 'bg-rose-600 text-white font-bold'
                    : 'bg-slate-800 text-slate-300 hover:text-white hover:bg-slate-700'
                }`}
              >
                Tome 4
              </button>
            </div>
          )}
        </div>
      )}

      {/* Historique de navigation (Fil d'Ariane / Journal de bord) */}
      <div className="flex items-center justify-between gap-2 overflow-x-auto py-1 text-xs text-slate-400 no-print">
        <div className="flex items-center gap-1.5 shrink-0">
          <span className="font-mono-code text-slate-500 font-semibold">Parcours :</span>
          {history.slice(-5).map((stepId, index, arr) => (
            <React.Fragment key={index}>
              <button
                onClick={() => onBacktrack(stepId)}
                title={`Revenir à l'étape ${stepId}`}
                className={`px-2 py-0.5 rounded font-mono-code transition-colors cursor-pointer ${
                  stepId === step.id
                    ? isRose
                      ? 'bg-rose-500/20 text-rose-300 border border-rose-500/40 font-bold'
                      : isAmber
                      ? 'bg-amber-500/20 text-amber-300 border border-amber-500/40 font-bold'
                      : isPurple
                      ? 'bg-purple-500/20 text-purple-300 border border-purple-500/40 font-bold'
                      : 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 font-bold'
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
            className="flex items-center gap-1 text-xs text-cyan-400 hover:text-cyan-300 font-medium px-2 py-1 rounded bg-slate-900 border border-slate-800 transition-colors shrink-0 cursor-pointer"
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
            : isRose
            ? 'border-rose-900/60 shadow-rose-950/20'
            : isAmber
            ? 'border-amber-900/60 shadow-amber-950/20'
            : isPurple
            ? 'border-purple-900/60 shadow-purple-950/20'
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
              : isRose
              ? 'bg-rose-500'
              : isAmber
              ? 'bg-amber-500'
              : isPurple
              ? 'bg-purple-500'
              : 'bg-cyan-500'
          }`}
        />

        {/* En-tête du paragraphe */}
        <div className="flex flex-wrap items-center justify-between gap-3 pb-4 mb-4 border-b border-slate-800/80">
          <div className="flex items-center gap-2.5">
            <span className={`w-8 h-8 rounded-lg font-mono-code font-bold flex items-center justify-center text-sm shadow-inner border ${
              isRose
                ? 'bg-rose-950 border-rose-800 text-rose-300'
                : isAmber
                ? 'bg-amber-950 border-amber-800 text-amber-300'
                : isPurple
                ? 'bg-purple-950 border-purple-800 text-purple-300'
                : 'bg-cyan-950 border-cyan-800 text-cyan-300'
            }`}>
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
          } bg-slate-950/50 p-5 rounded-xl border border-slate-800/60 leading-relaxed`}
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
                className={`px-4 py-2 rounded-lg font-medium text-xs shadow-md transition-colors flex items-center gap-2 cursor-pointer ${
                  isRose
                    ? 'bg-rose-600 hover:bg-rose-500 text-white font-bold'
                    : isAmber
                    ? 'bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold'
                    : isPurple
                    ? 'bg-purple-600 hover:bg-purple-500 text-white'
                    : 'bg-cyan-600 hover:bg-cyan-500 text-white'
                }`}
              >
                Rejouer depuis l'Étape 1
              </button>
              <button
                onClick={() => onDirectJump(history[Math.max(0, history.length - 3)] || 1)}
                className="px-4 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 font-medium text-xs transition-colors cursor-pointer"
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
              <CornerDownRight className={`w-4 h-4 ${isRose ? 'text-rose-400' : isAmber ? 'text-amber-400' : isPurple ? 'text-purple-400' : 'text-cyan-400'}`} />
              Choix possibles à cette étape :
            </h3>

            <div className="grid grid-cols-1 gap-3">
              {step.choices.map((choice, idx) => (
                <button
                  key={idx}
                  onClick={() => onChoose(choice.targetId)}
                  className={`group w-full text-left p-4 sm:p-5 rounded-xl bg-slate-950 border border-slate-800 transition-all duration-200 shadow-md flex items-start justify-between gap-4 cursor-pointer ${
                    isRose
                      ? 'hover:bg-rose-950/30 hover:border-rose-500/60 hover:shadow-rose-900/20'
                      : isAmber
                      ? 'hover:bg-amber-950/30 hover:border-amber-500/60 hover:shadow-amber-900/20'
                      : isPurple
                      ? 'hover:bg-purple-950/30 hover:border-purple-500/60 hover:shadow-purple-900/20'
                      : 'hover:bg-cyan-950/40 hover:border-cyan-500/60 hover:shadow-cyan-900/20'
                  }`}
                >
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className={`inline-block w-2 h-2 rounded-full transition-transform group-hover:scale-125 ${
                        isRose ? 'bg-rose-400' : isAmber ? 'bg-amber-400' : isPurple ? 'bg-purple-400' : 'bg-cyan-400'
                      }`} />
                      <span className={`font-semibold text-white text-sm sm:text-base ${
                        isRose
                          ? 'group-hover:text-rose-300'
                          : isAmber
                          ? 'group-hover:text-amber-300'
                          : isPurple
                          ? 'group-hover:text-purple-300'
                          : 'group-hover:text-cyan-300'
                      }`}>
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

                  <div className={`shrink-0 flex items-center gap-1.5 bg-slate-900 border border-slate-800 px-3 py-1.5 rounded-lg text-slate-300 group-hover:text-white transition-colors text-xs font-mono-code font-bold ${
                    isRose
                      ? 'group-hover:bg-rose-600 group-hover:border-rose-500 group-hover:text-white'
                      : isAmber
                      ? 'group-hover:bg-amber-600 group-hover:border-amber-500 group-hover:text-slate-950'
                      : isPurple
                      ? 'group-hover:bg-purple-600 group-hover:border-purple-500'
                      : 'group-hover:bg-cyan-600 group-hover:border-cyan-500'
                  }`}>
                    <span>Étape {choice.targetId}</span>
                    <ChevronRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                  </div>
                </button>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Saut direct vers un paragraphe */}
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
            className={`w-24 px-2.5 py-1 rounded-lg bg-slate-950 border border-slate-700 text-slate-200 text-xs font-mono-code focus:outline-none ${
              isRose ? 'focus:border-rose-500' : isAmber ? 'focus:border-amber-500' : isPurple ? 'focus:border-purple-500' : 'focus:border-cyan-500'
            }`}
          />
          <button
            type="submit"
            className={`px-3 py-1 rounded-lg font-medium transition-colors cursor-pointer ${
              isRose
                ? 'bg-rose-600 hover:bg-rose-500 text-white font-bold'
                : isAmber
                ? 'bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold'
                : isPurple
                ? 'bg-purple-600 hover:bg-purple-500 text-white'
                : 'bg-cyan-600 hover:bg-cyan-500 text-white'
            }`}
          >
            Aller au N°
          </button>
        </form>
        {jumpError && <span className="text-rose-400 text-xs w-full">{jumpError}</span>}
      </div>
    </div>
  );
};
