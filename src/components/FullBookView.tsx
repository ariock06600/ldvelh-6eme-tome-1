import React, { useState } from 'react';
import { STORY_STEPS } from '../data/storyData.ts';
import type { StoryStep, TomeConfig } from '../types/story.ts';
import { Printer, Download, Search, Sparkles, BookOpen } from 'lucide-react';

interface FullBookViewProps {
  onJumpToStep: (stepId: number) => void;
  dyslexiaFont: boolean;
  steps?: Record<number, StoryStep>;
  tomeConfig?: TomeConfig;
}

export const FullBookView: React.FC<FullBookViewProps> = ({
  onJumpToStep,
  dyslexiaFont,
  steps = STORY_STEPS,
  tomeConfig,
}) => {
  const [range, setRange] = useState<'all' | '1-20' | '21-40' | '41-60' | '61-80' | '81-100'>('all');
  const [filterQuery, setFilterQuery] = useState('');

  const allSteps = Object.values(steps);

  const displayedSteps = allSteps.filter((step) => {
    if (range === '1-20' && (step.id < 1 || step.id > 20)) return false;
    if (range === '21-40' && (step.id < 21 || step.id > 40)) return false;
    if (range === '41-60' && (step.id < 41 || step.id > 60)) return false;
    if (range === '61-80' && (step.id < 61 || step.id > 80)) return false;
    if (range === '81-100' && (step.id < 81 || step.id > 100)) return false;

    if (filterQuery.trim() !== '') {
      const q = filterQuery.toLowerCase();
      const matchId = `[${step.id}]` === q || step.id.toString() === q;
      const matchText = step.text.toLowerCase().includes(q);
      const matchTitle = step.title.toLowerCase().includes(q);
      return matchId || matchText || matchTitle;
    }
    return true;
  });

  const exportAsMarkdown = () => {
    const bookTitle = tomeConfig ? `${tomeConfig.title} - ${tomeConfig.subtitle}` : 'OXY-KAELIS : LE LIVRE DONT VOUS ÊTES LE HÉROS';
    let md = `# ${bookTitle}\n`;
    md += `*Station Orbitale Oxy-Kaelis • Fiction interactive de sensibilisation contre le harcèlement en milieu scolaire (Cycle 3 / 6e)*\n\n`;
    md += `Collection : Groupe Bouclier\n\n`;
    md += `---\n\n`;

    allSteps.forEach((s) => {
      md += `### [${s.id}] ${s.title}\n`;
      md += `**Lieu :** ${s.location}\n\n`;
      md += `${s.text}\n\n`;
      if (s.choices.length > 0) {
        md += `**Choix possibles :**\n`;
        s.choices.forEach((c) => {
          md += `- ${c.text}\n`;
        });
      } else {
        md += `**★ DÉNOUEMENT :** ${s.endingType?.toUpperCase()}\n`;
      }
      if (s.pedagogicalNote) {
        md += `\n*Note pédagogique : ${s.pedagogicalNote}*\n`;
      }
      md += `\n---\n\n`;
    });

    const blob = new Blob([md], { type: 'text/markdown;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `oxy-kaelis-${tomeConfig ? tomeConfig.id : 'tome1'}-integral.md`;
    link.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      {/* Contrôles de lecture & Export */}
      <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-5 flex flex-wrap items-center justify-between gap-4">
        <div>
          <h2 className="text-xl font-bold text-white flex items-center gap-2">
            <BookOpen className="w-5 h-5 text-cyan-400" />
            {tomeConfig ? tomeConfig.shortTitle : "Texte Intégral du Livre"} (100 Paragraphes)
          </h2>
          <p className="text-xs text-slate-400 mt-1">
            Visualisez et imprimez l'intégralité des paragraphes pour un usage en classe sans écran.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => window.print()}
            className="px-3.5 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-medium border border-slate-700 flex items-center gap-1.5 cursor-pointer transition-colors"
          >
            <Printer className="w-4 h-4 text-cyan-400" />
            <span>Imprimer la Fiche</span>
          </button>
          <button
            onClick={exportAsMarkdown}
            className="px-3.5 py-1.5 rounded-lg bg-cyan-600 hover:bg-cyan-500 text-white text-xs font-semibold flex items-center gap-1.5 cursor-pointer transition-colors shadow-sm"
          >
            <Download className="w-4 h-4" />
            <span>Exporter en Markdown</span>
          </button>
        </div>
      </div>

      {/* Barre de recherche et filtre de paragraphes */}
      <div className="bg-slate-900/60 border border-slate-800/80 rounded-xl p-4 flex flex-wrap items-center justify-between gap-3">
        <div className="relative flex-1 min-w-[240px]">
          <Search className="w-4 h-4 text-slate-500 absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={filterQuery}
            onChange={(e) => setFilterQuery(e.target.value)}
            placeholder="Rechercher par mot-clé, titre ou numéro..."
            className="w-full pl-9 pr-3 py-1.5 rounded-lg bg-slate-950 border border-slate-800 text-slate-200 text-xs focus:outline-none focus:border-cyan-500"
          />
        </div>

        <div className="flex items-center gap-1 text-xs">
          <span className="text-slate-400 font-mono-code mr-1">Plage :</span>
          {(['all', '1-20', '21-40', '41-60', '61-80', '81-100'] as const).map((r) => (
            <button
              key={r}
              onClick={() => setRange(r)}
              className={`px-2 py-1 rounded text-xs font-mono-code transition-colors cursor-pointer ${
                range === r
                  ? 'bg-cyan-600 text-white font-bold'
                  : 'bg-slate-950 text-slate-400 hover:text-white hover:bg-slate-800'
              }`}
            >
              {r}
            </button>
          ))}
        </div>
      </div>

      {/* Liste des paragraphes affichés */}
      <div className="space-y-4">
        {displayedSteps.map((step) => (
          <article
            key={step.id}
            id={`step-${step.id}`}
            className="bg-slate-900/80 border border-slate-800 rounded-xl p-5 hover:border-slate-700 transition-colors"
          >
            <div className="flex items-center justify-between pb-2 mb-2 border-b border-slate-800/80">
              <div className="flex items-center gap-2">
                <span className="px-2 py-0.5 rounded font-mono-code text-xs font-bold bg-cyan-950 text-cyan-300 border border-cyan-800">
                  § {step.id}
                </span>
                <h3 className="font-bold text-white text-base">{step.title}</h3>
              </div>
              <span className="text-xs text-slate-400 font-mono-code">📍 {step.location}</span>
            </div>

            <p className={`text-slate-200 text-sm leading-relaxed mb-3 ${dyslexiaFont ? 'dyslexia-font' : ''}`}>
              {step.text}
            </p>

            {step.choices.length > 0 && (
              <div className="mt-3 pt-2 border-t border-slate-800/60 space-y-1.5 text-xs text-slate-300">
                <div className="font-semibold text-slate-400 uppercase tracking-wider text-[10px] font-mono-code">
                  Choix proposés :
                </div>
                {step.choices.map((c, idx) => (
                  <div key={idx} className="flex items-center justify-between gap-2 pl-2">
                    <span className="text-slate-300 leading-snug">• {c.text}</span>
                    <button
                      onClick={() => onJumpToStep(c.targetId)}
                      className="px-2 py-0.5 rounded bg-slate-950 hover:bg-cyan-950 text-cyan-300 border border-slate-800 hover:border-cyan-800 text-[11px] font-mono-code shrink-0 cursor-pointer"
                    >
                      Aller au {c.targetId}
                    </button>
                  </div>
                ))}
              </div>
            )}

            {step.endingType && (
              <div className="mt-3 p-2.5 rounded-lg bg-amber-950/30 border border-amber-800/50 text-xs text-amber-200 font-semibold">
                ★ Dénouement : Fin {step.endingType.toUpperCase()}
              </div>
            )}
          </article>
        ))}
      </div>
    </div>
  );
};
