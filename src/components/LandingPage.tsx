import React from 'react';
import { Play, Sparkles, BookOpen, Clock, ShieldAlert, Users, MessageSquareQuote, Smartphone, HeartHandshake, ArrowRight, HelpCircle, Shield, Award, CheckCircle2 } from 'lucide-react';
import type { TomeId } from '../types/story.ts';

interface LandingPageProps {
  onStartTome: (tomeId: TomeId) => void;
  onOpenPedagogy: () => void;
}

export const LandingPage: React.FC<LandingPageProps> = ({
  onStartTome,
  onOpenPedagogy,
}) => {
  return (
    <div className="max-w-6xl mx-auto space-y-16 pb-12">
      {/* Hero Section */}
      <section className="relative overflow-hidden rounded-3xl bg-gradient-to-b from-slate-900 via-slate-900/90 to-slate-950 border border-amber-900/40 p-6 sm:p-12 shadow-2xl">
        {/* Glow Effects */}
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-96 h-96 bg-amber-600/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-rose-600/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-10">
          {/* Text Content */}
          <div className="flex-1 text-center lg:text-left space-y-5">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-mono-code font-semibold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              Quadrilogie Complète de Fictions Interactives (6e)
            </div>

            <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
              GROUPE BOUCLIER
            </h1>

            <p className="text-amber-200/90 text-sm sm:text-base font-serif italic max-w-xl">
              « Laudare, Benedicere, Praedicare » • Protéger, écouter et éveiller les consciences face aux violences scolaires.
            </p>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-2xl">
              Bienvenue sur le portail ludo-pédagogique du <strong>Groupe Bouclier</strong>.
              À travers les 4 tomes de <em>« Livres dont vous êtes le héros »</em>, les élèves de 6e
              explorent les dilemmes réels du climat scolaire dans le cadre de la station spatiale
              <strong> « Oxy-Kaelis »</strong> pour briser le silence, neutraliser les peurs et valoriser l'alliance solidaire.
            </p>

            {/* Launch Buttons for All 4 Tomes */}
            <div className="pt-2 flex flex-wrap items-center justify-center lg:justify-start gap-2.5">
              <button
                onClick={() => onStartTome('tome-1')}
                className="px-3.5 py-2.5 rounded-xl bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white font-bold text-xs shadow-md transition-all duration-200 flex items-center gap-1.5 cursor-pointer group"
              >
                <Play className="w-3.5 h-3.5 fill-current group-hover:scale-110 transition-transform" />
                <span>Tome 1 : Intimidations</span>
              </button>

              <button
                onClick={() => onStartTome('tome-2')}
                className="px-3.5 py-2.5 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white font-bold text-xs shadow-md transition-all duration-200 flex items-center gap-1.5 cursor-pointer group"
              >
                <Users className="w-3.5 h-3.5 group-hover:scale-110 transition-transform" />
                <span>Tome 2 : Isolement</span>
              </button>

              <button
                onClick={() => onStartTome('tome-3')}
                className="px-3.5 py-2.5 rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-slate-950 font-bold text-xs shadow-md transition-all duration-200 flex items-center gap-1.5 cursor-pointer group"
              >
                <MessageSquareQuote className="w-3.5 h-3.5 fill-current group-hover:scale-110 transition-transform" />
                <span>Tome 3 : Moqueries</span>
              </button>

              <button
                onClick={() => onStartTome('tome-4')}
                className="px-4 py-2.5 rounded-xl bg-gradient-to-r from-rose-500 to-pink-600 hover:from-rose-400 hover:to-pink-500 text-white font-bold text-xs shadow-lg shadow-rose-500/25 transition-all duration-200 flex items-center gap-1.5 cursor-pointer group"
              >
                <Smartphone className="w-3.5 h-3.5 group-hover:scale-110 transition-transform" />
                <span>Tome 4 : Cyber-Harcèlement</span>
                <span className="text-[10px] px-1.5 py-0.2 rounded bg-slate-950 text-rose-300 font-black">NOUVEAU</span>
              </button>

              <button
                onClick={onOpenPedagogy}
                className="px-3.5 py-2.5 rounded-xl bg-slate-800/90 hover:bg-slate-700/90 text-slate-200 border border-slate-700 hover:border-slate-500 font-medium text-xs transition-all duration-200 flex items-center gap-1.5 cursor-pointer"
              >
                <HelpCircle className="w-3.5 h-3.5 text-cyan-400" />
                <span>Guide (6e)</span>
              </button>
            </div>

            <div className="pt-4 flex flex-wrap items-center justify-center lg:justify-start gap-4 sm:gap-6 text-xs text-slate-400 font-mono-code">
              <div>✦ 4 Tomes Complets (400 Paragraphes)</div>
              <div>✦ 12 Fins Morales Uniques</div>
              <div>✦ Contexte Station Orbitale Oxy-Kaelis</div>
            </div>
          </div>

          {/* Hero Spotlight: Tome 4 (NOUVEAU) */}
          <div className="shrink-0 w-full lg:w-96 space-y-3">
            <div className="rounded-2xl bg-gradient-to-br from-rose-950/60 via-slate-950 to-slate-900 border-2 border-rose-500/60 p-5 shadow-2xl relative overflow-hidden group hover:border-rose-400 transition-all">
              <div className="absolute -top-12 -right-12 w-32 h-32 bg-rose-500/10 rounded-full blur-xl pointer-events-none" />
              
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono-code font-bold uppercase bg-rose-500/20 text-rose-300 border border-rose-500/40">
                    Tome 4 • Disponible
                  </span>
                  <span className="px-1.5 py-0.2 rounded text-[10px] font-mono-code font-bold uppercase bg-emerald-500/20 text-emerald-300 border border-emerald-500/40">
                    Nouveau
                  </span>
                </div>
                <span className="text-xs font-mono-code text-rose-300 font-bold">100 Paragraphes</span>
              </div>

              <h3 className="text-base font-bold text-white leading-snug group-hover:text-rose-300 transition-colors">
                Le Cyber-Harcèlement & les Réseaux
              </h3>
              <p className="text-xs text-rose-200/80 font-mono-code mt-0.5 mb-2">
                « Station Orbitale Oxy-Kaelis : Dans la Toile du ComNet »
              </p>
              <p className="text-xs text-slate-300 leading-relaxed mb-3">
                Un photomontage truqué tourne en boucle la nuit sur le canal clandestin 'Oxy-Leaks'. Incarnez Lyra, apprenez à figer les preuves sans céder à la cyber-vengeance.
              </p>

              <button
                onClick={() => onStartTome('tome-4')}
                className="w-full py-2 px-3 rounded-lg bg-gradient-to-r from-rose-600 to-pink-600 hover:from-rose-500 hover:to-pink-500 text-white font-bold text-xs shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <Play className="w-3.5 h-3.5 fill-current" />
                <span>Lancer le Tome 4 (Lyra)</span>
              </button>
            </div>

            {/* Quick selectors for Tomes 1, 2 and 3 */}
            <div className="grid grid-cols-3 gap-1.5 text-xs">
              <button
                onClick={() => onStartTome('tome-1')}
                className="p-2 rounded-xl bg-slate-900/80 border border-slate-800 hover:border-cyan-500/60 text-left transition-colors cursor-pointer group"
              >
                <span className="text-[9px] font-mono-code text-cyan-400 block font-semibold">Tome 1</span>
                <span className="font-bold text-white group-hover:text-cyan-300 text-[11px] truncate block">Élior</span>
              </button>

              <button
                onClick={() => onStartTome('tome-2')}
                className="p-2 rounded-xl bg-slate-900/80 border border-slate-800 hover:border-purple-500/60 text-left transition-colors cursor-pointer group"
              >
                <span className="text-[9px] font-mono-code text-purple-400 block font-semibold">Tome 2</span>
                <span className="font-bold text-white group-hover:text-purple-300 text-[11px] truncate block">Naël</span>
              </button>

              <button
                onClick={() => onStartTome('tome-3')}
                className="p-2 rounded-xl bg-slate-900/80 border border-slate-800 hover:border-amber-500/60 text-left transition-colors cursor-pointer group"
              >
                <span className="text-[9px] font-mono-code text-amber-400 block font-semibold">Tome 3</span>
                <span className="font-bold text-white group-hover:text-amber-300 text-[11px] truncate block">Corin</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Les 4 Livres Interactifs de la Collection */}
      <section className="space-y-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-3 pb-3 border-b border-slate-800">
          <div>
            <span className="text-xs font-mono-code text-cyan-400 font-bold uppercase tracking-wider block mb-1">
              La Collection Complète • Groupe Bouclier
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              Les 4 Livres Dont Vous Êtes Le Héros (6e)
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-slate-400 max-w-md">
            Chaque volume aborde une dimension spécifique des atteintes au climat scolaire dans la Station Orbitale Oxy-Kaelis (100 paragraphes chacun).
          </p>
        </div>

        {/* Grille 2x2 des 4 Tomes */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* TOME 1 : Oxy-Kaelis - Harcèlement Physique (DISPONIBLE) */}
          <div className="rounded-2xl bg-gradient-to-br from-cyan-950/50 via-slate-900 to-slate-950 border border-cyan-800/60 p-6 shadow-xl shadow-cyan-950/20 relative flex flex-col justify-between group hover:border-cyan-500/80 transition-all duration-300">
            <div className="space-y-4">
              <div className="flex items-center justify-between gap-3">
                <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-cyan-400" />
                  Disponible • Tome 1
                </span>
                <span className="text-xs font-mono-code text-cyan-400 font-semibold">
                  100 Paragraphes
                </span>
              </div>

              <div>
                <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                  Le Harcèlement Physique & les Intimidations
                </h3>
                <h4 className="text-xs font-semibold text-cyan-400 font-mono-code mt-0.5">
                  « Station Orbitale Oxy-Kaelis »
                </h4>
              </div>

              <p className="text-xs text-slate-300 leading-relaxed">
                Fraîchement arrivé au Cycle Alpha, Élior fait face aux bousculades dans les sas sans caméras,
                à la dépressurisation forcée de son casier et au racket de ses capsules par Brannok.
              </p>

              <div className="p-3 bg-slate-950/70 rounded-xl border border-cyan-900/40 text-xs text-slate-300 space-y-1">
                <div className="font-semibold text-cyan-300 flex items-center gap-1.5">
                  <ShieldAlert className="w-3.5 h-3.5 text-cyan-400" /> Objectifs d'apprentissage :
                </div>
                <p className="text-[11px] text-slate-400">
                  Comprendre que la violence solitaire se retourne contre la victime ; activer les tiers de confiance ; transformer le témoin passif en témoin actif.
                </p>
              </div>

              <div className="text-xs font-mono-code text-slate-400 flex flex-wrap gap-2 pt-1">
                <span>✦ Héros : <strong>Élior</strong></span>
                <span>✦ Antagoniste : <strong>Brannok</strong></span>
              </div>
            </div>

            <div className="pt-6 mt-4 border-t border-slate-800/80 flex items-center justify-between">
              <span className="text-xs text-slate-400 font-mono-code">
                3 Fins Morales
              </span>
              <button
                onClick={() => onStartTome('tome-1')}
                className="px-3.5 py-1.5 rounded-xl bg-cyan-600 hover:bg-cyan-500 text-white font-bold text-xs shadow-md transition-colors flex items-center gap-1.5 cursor-pointer"
              >
                <span>Jouer au Tome 1</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* TOME 2 : Oxy-Kaelis - Isolement Social (DISPONIBLE) */}
          <div className="rounded-2xl bg-gradient-to-br from-purple-950/50 via-slate-900 to-slate-950 border border-purple-800/60 p-6 shadow-xl shadow-purple-950/20 relative flex flex-col justify-between group hover:border-purple-400 transition-all duration-300">
            <div className="space-y-4">
              <div className="flex items-center justify-between gap-3">
                <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-purple-500/20 text-purple-300 border border-purple-500/40 flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-purple-400" />
                  Disponible • Tome 2
                </span>
                <span className="text-xs font-mono-code text-purple-300 font-semibold">
                  100 Paragraphes
                </span>
              </div>

              <div>
                <h3 className="text-xl font-bold text-white group-hover:text-purple-300 transition-colors">
                  L'Isolement Social & les Rumeurs
                </h3>
                <h4 className="text-xs font-semibold text-purple-400 font-mono-code mt-0.5">
                  « Station Orbitale Oxy-Kaelis : Le Mur Invisible »
                </h4>
              </div>

              <p className="text-xs text-slate-300 leading-relaxed">
                Quand les tables du Réfectoire des Synthèses se vident quand vous approchez et que des rumeurs circulent sur le ComNet. Incarnez Naël et faites tomber le mur invisible.
              </p>

              <div className="p-3 bg-slate-950/70 rounded-xl border border-purple-900/40 text-xs text-slate-300 space-y-1">
                <div className="font-semibold text-purple-300 flex items-center gap-1.5">
                  <Users className="w-3.5 h-3.5 text-purple-400" /> Objectifs d'apprentissage :
                </div>
                <p className="text-[11px] text-slate-400">
                  Décoder l'effet de meute et le bouc émissaire ; désamorcer les rumeurs par les faits ; restaurer la communication entre pairs.
                </p>
              </div>

              <div className="text-xs font-mono-code text-slate-400 flex flex-wrap gap-2 pt-1">
                <span>✦ Héros : <strong>Naël</strong></span>
                <span>✦ Antagoniste : <strong>Kaelen</strong></span>
              </div>
            </div>

            <div className="pt-6 mt-4 border-t border-slate-800/80 flex items-center justify-between">
              <span className="text-xs text-slate-400 font-mono-code">
                3 Fins Morales
              </span>
              <button
                onClick={() => onStartTome('tome-2')}
                className="px-3.5 py-1.5 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-bold text-xs shadow-md transition-colors flex items-center gap-1.5 cursor-pointer"
              >
                <span>Jouer au Tome 2</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* TOME 3 : Oxy-Kaelis - Harcèlement Verbal & Moqueries (DISPONIBLE) */}
          <div className="rounded-2xl bg-gradient-to-br from-amber-950/50 via-slate-900 to-slate-950 border border-amber-800/60 p-6 shadow-xl shadow-amber-950/20 relative flex flex-col justify-between group hover:border-amber-400 transition-all duration-300">
            <div className="space-y-4">
              <div className="flex items-center justify-between gap-3">
                <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-amber-500/20 text-amber-300 border border-amber-500/40 flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-amber-400" />
                  Disponible • Tome 3
                </span>
                <span className="text-xs font-mono-code text-amber-300 font-semibold">
                  100 Paragraphes
                </span>
              </div>

              <div>
                <h3 className="text-xl font-bold text-white group-hover:text-amber-300 transition-colors">
                  Le Harcèlement Verbal & les Moqueries
                </h3>
                <h4 className="text-xs font-semibold text-amber-400 font-mono-code mt-0.5">
                  « Station Orbitale Oxy-Kaelis : Le Venin des Mots »
                </h4>
              </div>

              <p className="text-xs text-slate-300 leading-relaxed">
                « Roh ça va, on peut plus rigoler ! » Surnoms humiliants répétés ('Bip-Bip'), bruits d'élocution déformés sur la radio et peur de parler. Incarnez Corin et maîtrisez l'art de désarmer les attaques verbales.
              </p>

              <div className="p-3 bg-slate-950/70 rounded-xl border border-amber-900/40 text-xs text-slate-300 space-y-1">
                <div className="font-semibold text-amber-300 flex items-center gap-1.5">
                  <MessageSquareQuote className="w-3.5 h-3.5 text-amber-400" /> Objectifs d'apprentissage :
                </div>
                <p className="text-[11px] text-slate-400">
                  Distinguer l'humour du rabaissement ; déjouer le piège de l'auto-dénigrement ; s'affirmer avec calme et mobiliser le refus collectif de rire.
                </p>
              </div>

              <div className="text-xs font-mono-code text-slate-400 flex flex-wrap gap-2 pt-1">
                <span>✦ Héros : <strong>Corin</strong></span>
                <span>✦ Antagoniste : <strong>Jax</strong></span>
              </div>
            </div>

            <div className="pt-6 mt-4 border-t border-slate-800/80 flex items-center justify-between">
              <span className="text-xs text-slate-400 font-mono-code">
                3 Fins Morales
              </span>
              <button
                onClick={() => onStartTome('tome-3')}
                className="px-3.5 py-1.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs shadow-md transition-colors flex items-center gap-1.5 cursor-pointer"
              >
                <span>Jouer au Tome 3</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* TOME 4 : Oxy-Kaelis - Cyber-Harcèlement & Réseaux (DISPONIBLE / NOUVEAU) */}
          <div className="rounded-2xl bg-gradient-to-br from-rose-950/50 via-slate-900 to-slate-950 border-2 border-rose-500/70 p-6 shadow-xl shadow-rose-950/25 relative flex flex-col justify-between group hover:border-rose-400 transition-all duration-300">
            <div className="space-y-4">
              <div className="flex items-center justify-between gap-3">
                <div className="flex items-center gap-1.5">
                  <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-rose-500/20 text-rose-300 border border-rose-500/40 flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-rose-400 animate-ping" />
                    Disponible • Tome 4
                  </span>
                  <span className="px-1.5 py-0.5 rounded text-[10px] font-mono-code font-bold uppercase bg-emerald-500/20 text-emerald-300 border border-emerald-500/40">
                    Nouveau
                  </span>
                </div>
                <span className="text-xs font-mono-code text-rose-300 font-semibold">
                  100 Paragraphes
                </span>
              </div>

              <div>
                <h3 className="text-xl font-bold text-white group-hover:text-rose-300 transition-colors">
                  Le Cyber-Harcèlement & les Réseaux
                </h3>
                <h4 className="text-xs font-semibold text-rose-400 font-mono-code mt-0.5">
                  « Station Orbitale Oxy-Kaelis : Dans la Toile du ComNet »
                </h4>
              </div>

              <p className="text-xs text-slate-300 leading-relaxed">
                Notification nocturne dans le sas de repos, photomontage truqué tournant en boucle sur Oxy-Leaks et lynchage 24h/24. Incarnez Lyra, déjouez le piège du piratage et bâtissez la Charte de Confiance.
              </p>

              <div className="p-3 bg-slate-950/70 rounded-xl border border-rose-900/40 text-xs text-slate-300 space-y-1">
                <div className="font-semibold text-rose-300 flex items-center gap-1.5">
                  <Smartphone className="w-3.5 h-3.5 text-rose-400" /> Objectifs d'apprentissage :
                </div>
                <p className="text-[11px] text-slate-400">
                  Comprendre la responsabilité des likes et partages ; figer les preuves numériques ; exercer le droit à la déconnexion et activer le protocole 3018.
                </p>
              </div>

              <div className="text-xs font-mono-code text-slate-400 flex flex-wrap gap-2 pt-1">
                <span>✦ Héroïne : <strong>Lyra</strong></span>
                <span>✦ Antagoniste : <strong>Vael (Spectre-Zero)</strong></span>
              </div>
            </div>

            <div className="pt-6 mt-4 border-t border-slate-800/80 flex items-center justify-between">
              <span className="text-xs text-slate-400 font-mono-code">
                3 Fins Morales
              </span>
              <button
                onClick={() => onStartTome('tome-4')}
                className="px-3.5 py-1.5 rounded-xl bg-rose-600 hover:bg-rose-500 text-white font-bold text-xs shadow-md transition-colors flex items-center gap-1.5 cursor-pointer"
              >
                <span>Jouer au Tome 4</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Guide et principes de médiation scolaire */}
      <section className="rounded-2xl bg-slate-900/60 border border-slate-800 p-6 sm:p-8 text-slate-300 space-y-4">
        <div className="flex items-center gap-3 text-amber-400">
          <Award className="w-6 h-6" />
          <h3 className="text-lg font-bold text-white">
            La Méthodologie Pédagogique du Groupe Bouclier
          </h3>
        </div>
        <p className="text-xs sm:text-sm leading-relaxed text-slate-300">
          Créée par <strong>Pierre NDT</strong>, cette série de 4 fictions interactives s'inspire directement des protocoles
          éprouvés de médiation et de bienveillance scolaire (programme pHARe, méthode de la préoccupation partagée, médiation par les pairs, protocole 3018).
          La transposition spatiale sur <em>Oxy-Kaelis</em> permet aux collégiens de 6e de décortiquer les rôles (auteur, cible, témoin passif, tiers de confiance)
          sans culpabilisation, afin de développer des réflexes concrets de solidarité.
        </p>
      </section>
    </div>
  );
};
