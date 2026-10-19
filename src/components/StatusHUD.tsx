import React from 'react';
import type { PlayerStats } from '../types/story.ts';
import { Heart, Users, ShieldAlert, Award, Compass } from 'lucide-react';

interface StatusHUDProps {
  stats: PlayerStats;
  currentStepId: number;
  currentLocation: string;
  actTitle: string;
}

export const StatusHUD: React.FC<StatusHUDProps> = ({
  stats,
  currentStepId,
  currentLocation,
  actTitle,
}) => {
  return (
    <div className="bg-slate-900/90 border border-slate-800 rounded-xl p-4 backdrop-blur-md shadow-lg shadow-black/40 text-slate-200 mb-6">
      <div className="flex flex-wrap items-center justify-between gap-3 pb-3 border-b border-slate-800/80">
        <div className="flex items-center gap-2">
          <div className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-pulse" />
          <span className="text-xs uppercase tracking-wider text-cyan-400 font-semibold font-mono-code">
            Terminal Biosensoriel Élior • Cycle Alpha
          </span>
        </div>
        <div className="flex items-center gap-2 text-xs text-slate-400">
          <Compass className="w-3.5 h-3.5 text-indigo-400" />
          <span className="text-slate-300 font-medium">{currentLocation}</span>
          <span className="text-slate-600">•</span>
          <span className="text-slate-400 text-xs hidden sm:inline">{actTitle}</span>
          <span className="text-slate-600">•</span>
          <span className="bg-cyan-950/70 text-cyan-300 border border-cyan-800/60 px-2 py-0.5 rounded font-mono-code font-bold">
            Étape {currentStepId} / 100
          </span>
        </div>
      </div>

      {/* Jauges */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-3">
        {/* Sérénité */}
        <div className="flex flex-col gap-1.5">
          <div className="flex items-center justify-between text-xs">
            <span className="flex items-center gap-1.5 text-emerald-300 font-medium">
              <Heart className="w-3.5 h-3.5 text-emerald-400" /> Sérénité Émotionnelle
            </span>
            <span className="font-mono-code text-xs font-semibold text-emerald-400">
              {stats.serenity}%
            </span>
          </div>
          <div className="h-2 w-full bg-slate-800 rounded-full overflow-hidden">
            <div
              className={`h-full transition-all duration-500 rounded-full ${
                stats.serenity > 50
                  ? 'bg-gradient-to-r from-emerald-500 to-teal-400'
                  : stats.serenity > 25
                  ? 'bg-amber-500'
                  : 'bg-rose-500 animate-pulse'
              }`}
              style={{ width: `${stats.serenity}%` }}
            />
          </div>
        </div>

        {/* Solidarité */}
        <div className="flex flex-col gap-1.5">
          <div className="flex items-center justify-between text-xs">
            <span className="flex items-center gap-1.5 text-cyan-300 font-medium">
              <Users className="w-3.5 h-3.5 text-cyan-400" /> Solidarité des Pairs
            </span>
            <span className="font-mono-code text-xs font-semibold text-cyan-400">
              {stats.solidarity}%
            </span>
          </div>
          <div className="h-2 w-full bg-slate-800 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-cyan-500 to-blue-500 transition-all duration-500 rounded-full"
              style={{ width: `${stats.solidarity}%` }}
            />
          </div>
        </div>

        {/* Confiance Adultes */}
        <div className="flex flex-col gap-1.5">
          <div className="flex items-center justify-between text-xs">
            <span className="flex items-center gap-1.5 text-indigo-300 font-medium">
              <ShieldAlert className="w-3.5 h-3.5 text-indigo-400" /> Recours aux Adultes
            </span>
            <span className="font-mono-code text-xs font-semibold text-indigo-400">
              {stats.trust}%
            </span>
          </div>
          <div className="h-2 w-full bg-slate-800 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-indigo-500 to-purple-500 transition-all duration-500 rounded-full"
              style={{ width: `${stats.trust}%` }}
            />
          </div>
        </div>
      </div>

      {/* Badges / Objets obtenus */}
      {stats.badges.length > 0 && (
        <div className="mt-3 pt-2.5 border-t border-slate-800/80 flex flex-wrap items-center gap-2">
          <span className="text-[11px] text-slate-400 flex items-center gap-1 font-mono-code">
            <Award className="w-3 h-3 text-amber-400" /> Insignes acquis :
          </span>
          {stats.badges.map((badge, idx) => (
            <span
              key={idx}
              className="text-xs bg-amber-500/10 text-amber-300 border border-amber-500/30 px-2.5 py-0.5 rounded-full font-medium flex items-center gap-1"
            >
              ★ {badge}
            </span>
          ))}
        </div>
      )}
    </div>
  );
};
