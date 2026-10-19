import React from 'react';
import { Shield, BookOpen, GraduationCap, Volume2, VolumeX, RotateCcw, Type, Sparkles } from 'lucide-react';

export type NavTab = 'home' | 'tome-1' | 'tome-2' | 'tome-3' | 'tome-4' | 'pedagogy';

interface NavbarProps {
  activeTab: NavTab;
  setActiveTab: (tab: NavTab) => void;
  soundEnabled: boolean;
  toggleSound: () => void;
  dyslexiaFont: boolean;
  toggleDyslexiaFont: () => void;
  fontSize: 'normal' | 'large' | 'xlarge';
  cycleFontSize: () => void;
  onReset: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeTab,
  setActiveTab,
  soundEnabled,
  toggleSound,
  dyslexiaFont,
  toggleDyslexiaFont,
  fontSize,
  cycleFontSize,
  onReset,
}) => {
  return (
    <header className="sticky top-0 z-40 bg-slate-950/90 backdrop-blur-md border-b border-slate-800/80 px-4 py-3">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-3">
        {/* Brand / Title */}
        <div
          onClick={() => setActiveTab('home')}
          className="flex items-center gap-3 cursor-pointer group"
          title="Retourner à l'accueil du Groupe Bouclier"
        >
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-500 to-amber-700 flex items-center justify-center shadow-md shadow-amber-500/20 text-slate-950 font-black text-lg group-hover:scale-105 transition-transform shrink-0">
            <Shield className="w-5 h-5 text-slate-950 fill-current" />
          </div>
          <div>
            <h1 className="text-base font-bold text-white tracking-tight flex items-center gap-2">
              GROUPE BOUCLIER <span className="text-[11px] px-2 py-0.5 rounded bg-amber-950/70 text-amber-300 border border-amber-800/60 font-mono-code font-normal">LDVELH 6e</span>
            </h1>
            <p className="text-xs text-slate-400">Prévention du Harcèlement & Climat Scolaire</p>
          </div>
        </div>

        {/* Navigation Tabs */}
        <nav className="flex items-center gap-1 bg-slate-900 p-1 rounded-xl border border-slate-800 text-xs overflow-x-auto max-w-full">
          <button
            onClick={() => setActiveTab('home')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg font-medium transition-colors cursor-pointer shrink-0 ${
              activeTab === 'home'
                ? 'bg-amber-600 text-white shadow-sm'
                : 'text-slate-300 hover:text-white hover:bg-slate-800'
            }`}
          >
            <Shield className="w-3.5 h-3.5" />
            <span>Accueil</span>
          </button>

          <button
            onClick={() => setActiveTab('tome-1')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg font-medium transition-colors cursor-pointer shrink-0 ${
              activeTab === 'tome-1'
                ? 'bg-cyan-600 text-white shadow-sm font-semibold'
                : 'text-slate-300 hover:text-white hover:bg-slate-800'
            }`}
          >
            <BookOpen className="w-3.5 h-3.5 text-cyan-400" />
            <span>Tome 1</span>
          </button>

          <button
            onClick={() => setActiveTab('tome-2')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg font-medium transition-colors cursor-pointer shrink-0 ${
              activeTab === 'tome-2'
                ? 'bg-purple-600 text-white shadow-sm font-semibold'
                : 'text-slate-300 hover:text-white hover:bg-slate-800'
            }`}
          >
            <BookOpen className="w-3.5 h-3.5 text-purple-400" />
            <span>Tome 2</span>
          </button>

          <button
            onClick={() => setActiveTab('tome-3')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg font-medium transition-colors cursor-pointer shrink-0 ${
              activeTab === 'tome-3'
                ? 'bg-amber-500 text-slate-950 shadow-sm font-bold'
                : 'text-slate-300 hover:text-white hover:bg-slate-800'
            }`}
          >
            <BookOpen className="w-3.5 h-3.5 text-amber-400" />
            <span>Tome 3</span>
          </button>

          <button
            onClick={() => setActiveTab('tome-4')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg font-medium transition-colors cursor-pointer shrink-0 ${
              activeTab === 'tome-4'
                ? 'bg-rose-600 text-white shadow-sm font-bold'
                : 'text-slate-300 hover:text-white hover:bg-slate-800'
            }`}
          >
            <BookOpen className="w-3.5 h-3.5 text-rose-400" />
            <span>Tome 4 : Cyber</span>
            <span className="text-[9px] px-1.5 py-0.2 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 font-mono-code uppercase font-bold">
              Nouveau
            </span>
          </button>

          <button
            onClick={() => setActiveTab('pedagogy')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg font-medium transition-colors cursor-pointer shrink-0 ${
              activeTab === 'pedagogy'
                ? 'bg-indigo-600 text-white shadow-sm'
                : 'text-slate-300 hover:text-white hover:bg-slate-800'
            }`}
          >
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Guide Pédagogique (6e)</span>
          </button>
        </nav>

        {/* Utility & Accessibility Buttons */}
        <div className="flex items-center gap-1.5 text-slate-300">
          <button
            onClick={toggleDyslexiaFont}
            title={dyslexiaFont ? "Désactiver la police adaptée à la dyslexie" : "Activer la police adaptée à la dyslexie"}
            className={`px-2 py-1.5 rounded-lg text-xs font-semibold border flex items-center gap-1 transition-colors cursor-pointer ${
              dyslexiaFont
                ? 'bg-amber-500/20 text-amber-300 border-amber-500/40'
                : 'bg-slate-900 text-slate-300 border-slate-800 hover:bg-slate-800'
            }`}
          >
            Dyslexie {dyslexiaFont ? '✓' : ''}
          </button>

          <button
            onClick={cycleFontSize}
            title="Modifier la taille du texte"
            className="p-1.5 bg-slate-900 hover:bg-slate-800 border border-slate-800 rounded-lg text-xs font-mono-code flex items-center gap-1 px-2 text-slate-300 cursor-pointer"
          >
            <Type className="w-3.5 h-3.5 text-cyan-400" />
            <span className="uppercase">{fontSize === 'normal' ? 'A' : fontSize === 'large' ? 'A+' : 'A++'}</span>
          </button>

          <button
            onClick={toggleSound}
            title={soundEnabled ? "Désactiver les effets sonores" : "Activer les effets sonores"}
            className="p-1.5 bg-slate-900 hover:bg-slate-800 border border-slate-800 rounded-lg text-slate-300 cursor-pointer"
          >
            {soundEnabled ? (
              <Volume2 className="w-4 h-4 text-emerald-400" />
            ) : (
              <VolumeX className="w-4 h-4 text-slate-500" />
            )}
          </button>

          {(activeTab === 'tome-1' || activeTab === 'tome-2' || activeTab === 'tome-3') && (
            <button
              onClick={onReset}
              title="Recommencer ce tome depuis le début"
              className="p-1.5 bg-slate-900 hover:bg-slate-800 border border-slate-800 rounded-lg text-slate-400 hover:text-amber-400 transition-colors cursor-pointer"
            >
              <RotateCcw className="w-4 h-4" />
            </button>
          )}
        </div>
      </div>
    </header>
  );
};
