import React, { useState } from 'react';
import { STORY_STEPS } from '../data/storyData.ts';
import { Printer, Download, Search, Sparkles, BookOpen } from 'lucide-react';

interface FullBookViewProps {
  onJumpToStep: (stepId: number) => void;
  dyslexiaFont: boolean;
}

export const FullBookView: React.FC<FullBookViewProps> = ({ onJumpToStep, dyslexiaFont }) => {
  const [range, setRange] = useState<'all' | '1-20' | '21-40' | '41-60' | '61-80' | '81-100'>('all');
  const [filterQuery, setFilterQuery] = useState('');

  const allSteps = Object.values(STORY_STEPS);

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
    let md = `# OXY-KAELIS : LE LIVRE DONT VOUS ÊTES LE HÉROS\n`;
    md += `*Station Orbitale Oxy-Kaelis • Fiction interactive de sensibilisation contre le harcèlement en milieu scolaire (Cycle 3 / 6e)*\n\n`;
    md += `Auteur : Médiation Éducative Oxy-Kaelis\n\n`;
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
    link.download = 'oxy-kaelis-100-paragraphes-ldvelh.md';
    link.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      {/* Top Banner */}
      <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-6 backdrop-blur-md no-print">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-slate-800">
          <div>
            <h2 className="text-xl font-bold text-white flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-cyan-400" />
              Texte Intégral des 100 Paragraphes
            </h2>
            <p className="text-xs text-slate-400 mt-1">
              Consultez, recherchez ou imprimez le manuscrit complet du livre dont vous êtes le héros.
            </p>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => window.print()}
              className="px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-medium flex items-center gap-1.5 transition-colors border border-slate-700"
            >
              <Printer className="w-3.5 h-3.5 text-cyan-400" /> Imprimer le livret
            </button>
            <button
              onClick={exportAsMarkdown}
              className="px-3 py-1.5 rounded-lg bg-cyan-600 hover:bg-cyan-500 text-white text-xs font-medium flex items-center gap-1.5 transition-colors shadow-sm"
            >
              <Download className="w-3.5 h-3.5" /> Télécharger (.md)
            </button>
          </div>
        </div>

        {/* Filters */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-4 text-xs">
          <div className="flex items-center gap-1.5 overflow-x-auto w-full sm:w-auto">
            <span className="text-slate-400 font-mono-code mr-1">Blocs :</span>
            {(['all', '1-20', '21-40', '41-60', '61-80', '81-100'] as const).map((r) => (
              <button
                key={r}
                onClick={() => setRange(r)}
                className={`px-2.5 py-1 rounded-md font-medium transition-colors ${
                  range === r
                    ? 'bg-cyan-600 text-white'
                    : 'bg-slate-950 text-slate-400 hover:text-white'
                }`}
              >
                {r === 'all' ? '1 à 100' : r}
              </button>
            ))}
          </div>

          <div className="relative w-full sm:w-64">
            <Search className="w-3.5 h-3.5 text-slate-500 absolute left-2.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Rechercher mot ou N°..."
              value={filterQuery}
              onChange={(e) => setFilterQuery(e.target.value)}
              className="w-full pl-8 pr-3 py-1 rounded-lg bg-slate-950 border border-slate-700 text-xs text-slate-200 placeholder-slate-500 focus:outline-none focus:border-cyan-500"
            />
          </div>
        </div>
      </div>

      {/* Liste des Paragraphes au format exact demandé */}
      <div className="space-y-6">
        {displayedSteps.map((step) => (
          <article
            key={step.id}
            id={`step-${step.id}`}
            className={`p-6 rounded-2xl border transition-all duration-200 ${
              step.endingType === 'light'
                ? 'bg-emerald-950/20 border-emerald-800/80'
                : step.endingType === 'fragile'
                ? 'bg-amber-950/20 border-amber-800/80'
                : step.endingType === 'dark'
                ? 'bg-rose-950/20 border-rose-800/80'
                : 'bg-slate-900/90 border-slate-800'
            }`}
          >
            {/* Header du paragraphe */}
            <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-800/70">
              <div className="flex items-center gap-2">
                <span className="font-mono-code text-cyan-400 font-bold text-lg">
                  [{step.id}]
                </span>
                <h3 className="font-bold text-white text-base">
                  {step.title}
                </h3>
              </div>

              <div className="flex items-center gap-2">
                <span className="text-xs text-slate-400 font-mono-code hidden sm:inline">
                  📍 {step.location}
                </span>
                <button
                  onClick={() => onJumpToStep(step.id)}
                  className="px-2.5 py-1 rounded bg-slate-800 hover:bg-cyan-600 text-slate-300 hover:text-white text-xs font-mono-code transition-colors no-print"
                >
                  Jouer ce paragraphe →
                </button>
              </div>
            </div>

            {/* Texte du paragraphe (60 à 100 mots) */}
            <p
              className={`text-slate-200 leading-relaxed text-sm sm:text-base ${
                dyslexiaFont ? 'dyslexia-font' : ''
              }`}
            >
              {step.text}
            </p>

            {/* Choix possibles au format exact */}
            {step.choices.length > 0 ? (
              <div className="mt-4 pt-3 border-t border-slate-800/60">
                <div className="text-xs font-bold text-cyan-400 uppercase tracking-wider font-mono-code mb-2">
                  Choix possibles :
                </div>
                <ul className="space-y-1.5 text-xs sm:text-sm text-slate-300">
                  {step.choices.map((choice, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-cyan-400 font-bold">•</span>
                      <span>{choice.text}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ) : (
              <div className="mt-4 pt-3 border-t border-slate-800/60 flex items-center gap-2 text-xs font-bold font-mono-code uppercase">
                <Sparkles className="w-4 h-4 text-amber-400" />
                <span
                  className={
                    step.endingType === 'light'
                      ? 'text-emerald-400'
                      : step.endingType === 'fragile'
                      ? 'text-amber-400'
                      : 'text-rose-400'
                  }
                >
                  Dénouement atteint : {step.endingType}
                </span>
              </div>
            )}

            {/* Repère pédagogique */}
            {step.pedagogicalNote && (
              <div className="mt-3 text-[11px] text-slate-400 italic">
                💡 <span className="font-semibold text-slate-300">Médiation :</span> {step.pedagogicalNote}
              </div>
            )}
          </article>
        ))}
      </div>
    </div>
  );
};
