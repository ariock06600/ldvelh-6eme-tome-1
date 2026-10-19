import React from 'react';
import { Play, Sparkles, BookOpen, Clock, ShieldAlert, Users, MessageSquareQuote, Smartphone, HeartHandshake, ArrowRight, HelpCircle, Shield } from 'lucide-react';

interface LandingPageProps {
  onStartOxyKaelis: () => void;
  onOpenPedagogy: () => void;
}

export const LandingPage: React.FC<LandingPageProps> = ({
  onStartOxyKaelis,
  onOpenPedagogy,
}) => {
  return (
    <div className="max-w-6xl mx-auto space-y-16 pb-12">
      {/* Hero Section */}
      <section className="relative overflow-hidden rounded-3xl bg-gradient-to-b from-slate-900 via-slate-900/90 to-slate-950 border border-amber-900/40 p-6 sm:p-12 shadow-2xl">
        {/* Glow Effects */}
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-96 h-96 bg-amber-600/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-cyan-600/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-10">
          {/* Text Content */}
          <div className="flex-1 text-center lg:text-left space-y-5">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-mono-code font-semibold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              Collection de Fictions Interactives (6e)
            </div>

            <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
              GROUPE BOUCLIER
            </h1>

            <p className="text-amber-200/90 text-sm sm:text-base font-serif italic max-w-xl">
              « Laudare, Benedicere, Praedicare » • Protéger, écouter et éveiller les consciences face aux violences scolaires.
            </p>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-2xl">
              Bienvenue sur le portail ludo-pédagogique du <strong>Groupe Bouclier</strong>.
              À travers une collection de <em>« Livres dont vous êtes le héros »</em>, les élèves de 6e
              explorent les dilemmes réels du milieu scolaire dans des univers fictionnels immersifs
              pour briser le silence, neutraliser les peurs et valoriser l'alliance solidaire.
            </p>

            <div className="pt-2 flex flex-wrap items-center justify-center lg:justify-start gap-4">
              <button
                onClick={onStartOxyKaelis}
                className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-bold text-sm shadow-lg shadow-cyan-500/25 transition-all duration-200 flex items-center gap-2.5 group cursor-pointer"
              >
                <Play className="w-4 h-4 fill-current group-hover:scale-110 transition-transform" />
                <span>Lancer le Tome 1 : Oxy-Kaelis</span>
              </button>

              <button
                onClick={onOpenPedagogy}
                className="px-5 py-3.5 rounded-xl bg-slate-800/90 hover:bg-slate-700/90 text-slate-200 border border-slate-700 hover:border-slate-500 font-medium text-sm transition-all duration-200 flex items-center gap-2 cursor-pointer"
              >
                <HelpCircle className="w-4 h-4 text-cyan-400" />
                <span>Guide Pédagogique (6e)</span>
              </button>
            </div>

            <div className="pt-4 flex items-center justify-center lg:justify-start gap-6 text-xs text-slate-400 font-mono-code">
              <div>✦ 4 Thématiques Clés</div>
              <div>✦ 100 Étapes par Aventure</div>
              <div>✦ Conforme Climat Scolaire</div>
            </div>
          </div>

          {/* Carte mission Tome 1 (Sans image) */}
          <div className="shrink-0 w-full lg:w-84">
            <div className="rounded-2xl bg-gradient-to-br from-slate-900/90 via-slate-950 to-slate-900 border border-amber-600/30 p-6 shadow-2xl relative overflow-hidden group hover:border-amber-500/60 transition-all">
              <div className="absolute -top-12 -right-12 w-32 h-32 bg-amber-500/10 rounded-full blur-xl pointer-events-none" />
              
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-500 to-amber-700 flex items-center justify-center text-slate-950 shadow-lg shadow-amber-950/40 font-black">
                  <Shield className="w-7 h-7 text-slate-950 fill-current" />
                </div>
                <span className="px-2.5 py-1 rounded-full text-[11px] font-mono-code font-bold uppercase bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                  Disponible
                </span>
              </div>

              <div className="space-y-1.5 mb-4">
                <span className="text-[11px] font-mono-code text-cyan-400 font-semibold uppercase tracking-wider block">
                  Aventure Interactive • Tome 1
                </span>
                <h3 className="text-lg font-bold text-white leading-snug">
                  Station Orbitale Oxy-Kaelis
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Incarnez Élior et traversez les sas du collège orbital face aux intimidations de Brannok.
                </p>
              </div>

              <div className="space-y-2 py-3 border-y border-slate-800 text-xs font-mono-code text-slate-300">
                <div className="flex items-center justify-between">
                  <span className="text-slate-400">Longueur :</span>
                  <span className="text-cyan-300 font-semibold">100 paragraphes</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-400">Fins possibles :</span>
                  <span className="text-amber-300 font-semibold">3 issues morales</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-400">Niveau visé :</span>
                  <span className="text-white font-semibold">Cycle 3 / 6e</span>
                </div>
              </div>

              <button
                onClick={onStartOxyKaelis}
                className="w-full mt-4 py-2.5 px-4 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-bold text-xs shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer group-hover:scale-[1.02]"
              >
                <Play className="w-3.5 h-3.5 fill-current" />
                <span>Commencer à Jouer</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Les 4 Livres Dont Vous Êtes Le Héros */}
      <section className="space-y-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-3 pb-3 border-b border-slate-800">
          <div>
            <span className="text-xs font-mono-code text-cyan-400 font-bold uppercase tracking-wider block mb-1">
              La Collection de Prévention
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              Les 4 Livres Interactifs
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-slate-400 max-w-md">
            Chaque volume aborde une dimension spécifique des atteintes au climat scolaire en 6e.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* TOME 1 : Oxy-Kaelis (DISPONIBLE) */}
          <div className="rounded-2xl bg-gradient-to-br from-cyan-950/40 via-slate-900 to-slate-950 border-2 border-cyan-500/60 p-6 sm:p-7 shadow-xl shadow-cyan-950/20 relative flex flex-col justify-between group hover:border-cyan-400 transition-all duration-300">
            <div className="space-y-4">
              <div className="flex items-center justify-between gap-3">
                <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                  Disponible • Tome 1
                </span>
                <span className="text-xs font-mono-code text-cyan-400 font-semibold">
                  100 Paragraphes
                </span>
              </div>

              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                  Le Harcèlement Physique & les Intimidations
                </h3>
                <h4 className="text-sm font-semibold text-cyan-400 font-mono-code mt-0.5">
                  « Station Orbitale Oxy-Kaelis »
                </h4>
              </div>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Fraîchement arrivé au Cycle Alpha, Élior fait face aux bousculades dans les sas sans caméras,
                à la dépressurisation forcée de son casier et au racket de ses capsules d'énergie vitale par Brannok.
                Fuir, répliquer violemment ou rompre l'omerta avec Sylvan ? Vos choix déterminent l'issue.
              </p>

              <div className="p-3 bg-slate-950/70 rounded-xl border border-cyan-900/40 text-xs text-slate-300 space-y-1">
                <div className="font-semibold text-cyan-300 flex items-center gap-1.5">
                  <ShieldAlert className="w-3.5 h-3.5 text-cyan-400" /> Objectifs d'apprentissage :
                </div>
                <p className="text-[11px] text-slate-400">
                  Comprendre que la violence solitaire se retourne contre la victime ; activer les tiers de confiance ; transformer le témoin passif en témoin actif.
                </p>
              </div>
            </div>

            <div className="pt-6 mt-4 border-t border-slate-800/80 flex items-center justify-between">
              <span className="text-xs text-slate-400 font-mono-code">
                3 Fins : Lumineuse, Neutre, Obscure
              </span>
              <button
                onClick={onStartOxyKaelis}
                className="px-4 py-2 rounded-xl bg-cyan-600 hover:bg-cyan-500 text-white font-bold text-xs shadow-md transition-colors flex items-center gap-1.5 cursor-pointer"
              >
                <span>Commencer l'Aventure</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          {/* TOME 2 : L'Isolement Social (À VENIR) */}
          <div className="rounded-2xl bg-slate-900/70 border border-slate-800/80 p-6 sm:p-7 relative flex flex-col justify-between hover:border-slate-700 transition-all duration-200">
            <div className="space-y-4">
              <div className="flex items-center justify-between gap-3">
                <span className="px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-slate-800 text-slate-400 border border-slate-700 flex items-center gap-1.5">
                  <Clock className="w-3 h-3 text-amber-400" />
                  Prochainement • Tome 2
                </span>
                <span className="text-xs font-mono-code text-slate-500">
                  En préparation
                </span>
              </div>

              <div>
                <h3 className="text-xl font-bold text-slate-200">
                  L'Isolement Social & le Rejet
                </h3>
                <h4 className="text-sm font-medium text-slate-400 font-mono-code mt-0.5">
                  « Le Mur Invisible »
                </h4>
              </div>

              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                Quand personne ne vous parle, que les tables du réfectoire s'écartent et que les équipes de sport se forment sans vous.
                Une fiction interactive sensible pour comprendre la douleur invisible de l'exclusion scolaire et apprendre à tendre la main.
              </p>

              <div className="p-3 bg-slate-950/50 rounded-xl border border-slate-800/60 text-xs text-slate-400 space-y-1">
                <div className="font-semibold text-slate-300 flex items-center gap-1.5">
                  <Users className="w-3.5 h-3.5 text-blue-400" /> Thématiques abordées :
                </div>
                <p className="text-[11px] text-slate-500">
                  Le sentiment d'invisibilité, l'ostracisme de groupe, la reconstruction de l'estime de soi et les gestes simples d'inclusion.
                </p>
              </div>
            </div>

            <div className="pt-6 mt-4 border-t border-slate-800/60 flex items-center justify-between text-xs text-slate-500">
              <span className="font-mono-code">100 Paragraphes interconnectés</span>
              <span className="italic">Bientôt disponible</span>
            </div>
          </div>

          {/* TOME 3 : Le Harcèlement Verbal (À VENIR) */}
          <div className="rounded-2xl bg-slate-900/70 border border-slate-800/80 p-6 sm:p-7 relative flex flex-col justify-between hover:border-slate-700 transition-all duration-200">
            <div className="space-y-4">
              <div className="flex items-center justify-between gap-3">
                <span className="px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-slate-800 text-slate-400 border border-slate-700 flex items-center gap-1.5">
                  <Clock className="w-3 h-3 text-purple-400" />
                  Prochainement • Tome 3
                </span>
                <span className="text-xs font-mono-code text-slate-500">
                  En préparation
                </span>
              </div>

              <div>
                <h3 className="text-xl font-bold text-slate-200">
                  Le Harcèlement Verbal & les Moqueries
                </h3>
                <h4 className="text-sm font-medium text-slate-400 font-mono-code mt-0.5">
                  « Le Venin des Mots »
                </h4>
              </div>

              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                « C'était juste pour rire ! » Les surnoms dégradants répétés chaque jour, les ricanements à chaque prise de parole en classe,
                les attaques sur le physique ou l'origine. Où s'arrête la taquinerie et où commence le harcèlement destructeur ?
              </p>

              <div className="p-3 bg-slate-950/50 rounded-xl border border-slate-800/60 text-xs text-slate-400 space-y-1">
                <div className="font-semibold text-slate-300 flex items-center gap-1.5">
                  <MessageSquareQuote className="w-3.5 h-3.5 text-purple-400" /> Thématiques abordées :
                </div>
                <p className="text-[11px] text-slate-500">
                  La désensibilisation à l'insulte, l'impact sur la confiance en soi, la répartie sans escalade et la régulation par les pairs.
                </p>
              </div>
            </div>

            <div className="pt-6 mt-4 border-t border-slate-800/60 flex items-center justify-between text-xs text-slate-500">
              <span className="font-mono-code">100 Paragraphes interconnectés</span>
              <span className="italic">Bientôt disponible</span>
            </div>
          </div>

          {/* TOME 4 : Le Cyber-harcèlement (À VENIR) */}
          <div className="rounded-2xl bg-slate-900/70 border border-slate-800/80 p-6 sm:p-7 relative flex flex-col justify-between hover:border-slate-700 transition-all duration-200">
            <div className="space-y-4">
              <div className="flex items-center justify-between gap-3">
                <span className="px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-slate-800 text-slate-400 border border-slate-700 flex items-center gap-1.5">
                  <Clock className="w-3 h-3 text-rose-400" />
                  Prochainement • Tome 4
                </span>
                <span className="text-xs font-mono-code text-slate-500">
                  En préparation
                </span>
              </div>

              <div>
                <h3 className="text-xl font-bold text-slate-200">
                  Le Cyber-harcèlement & les Réseaux
                </h3>
                <h4 className="text-sm font-medium text-slate-400 font-mono-code mt-0.5">
                  « Dans la Toile des Écrans »
                </h4>
              </div>

              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                Un groupe WhatsApp de classe qui dérape, une photo volée partagée dans les stories, un flot de messages haineux jusque dans
                l'intimité de la chambre le soir. Comment sauvegarder les preuves, bloquer et alerter les adultes sans se priver de son téléphone ?
              </p>

              <div className="p-3 bg-slate-950/50 rounded-xl border border-slate-800/60 text-xs text-slate-400 space-y-1">
                <div className="font-semibold text-slate-300 flex items-center gap-1.5">
                  <Smartphone className="w-3.5 h-3.5 text-rose-400" /> Thématiques abordées :
                </div>
                <p className="text-[11px] text-slate-500">
                  L'effet de meute numérique, la capture de preuves horodatées, le rôle de l'application 3018 et le droit à la déconnexion sereine.
                </p>
              </div>
            </div>

            <div className="pt-6 mt-4 border-t border-slate-800/60 flex items-center justify-between text-xs text-slate-500">
              <span className="font-mono-code">100 Paragraphes interconnectés</span>
              <span className="italic">Bientôt disponible</span>
            </div>
          </div>
        </div>
      </section>

      {/* Les Principes Pédagogiques du Groupe Bouclier */}
      <section className="bg-slate-900/80 border border-slate-800 rounded-3xl p-6 sm:p-10 space-y-6">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-mono-code text-amber-400 uppercase tracking-wider font-bold">
            Médiation & Climat Scolaire
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
            Pourquoi le format « Livre Dont Vous Êtes Le Héros » ?
          </h2>
          <p className="text-xs sm:text-sm text-slate-400">
            Une approche innovante qui remplace les cours magistraux moralisateurs par l'expérimentation vécue des conséquences.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
          <div className="bg-slate-950/60 p-5 rounded-2xl border border-slate-800 space-y-2.5">
            <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-300">
              <BookOpen className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-white text-base">La Transposition Métaphorique</h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              Placer l'intrigue dans une station orbitale permet aux élèves d'analyser le harcèlement sans aucune stigmatisation d'élèves réels de leur classe.
            </p>
          </div>

          <div className="bg-slate-950/60 p-5 rounded-2xl border border-slate-800 space-y-2.5">
            <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-300">
              <HeartHandshake className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-white text-base">L'Éveil du Témoin Actif</h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              La fiction démontre que le témoin silencieux alimente l'agresseur, tandis que le témoin solidaire (Sylvan) est la clé de voûte de la résolution.
            </p>
          </div>

          <div className="bg-slate-950/60 p-5 rounded-2xl border border-slate-800 space-y-2.5">
            <div className="w-10 h-10 rounded-xl bg-indigo-500/10 border border-indigo-500/30 flex items-center justify-center text-indigo-300">
              <ShieldAlert className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-white text-base">L'Impartialité de la Règle</h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              L'élève constate de lui-même que la vengeance violente solitaire le disqualifie, alors que l'appui sur les adultes et les preuves le protège durablement.
            </p>
          </div>
        </div>
      </section>

      {/* Dispositif National 3018 */}
      <section className="bg-gradient-to-r from-cyan-950/60 via-slate-900 to-indigo-950/60 border border-cyan-700/50 rounded-3xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
        <div className="space-y-2 text-center md:text-left">
          <div className="flex items-center justify-center md:justify-start gap-2">
            <span className="text-3xl font-black text-cyan-400 font-mono-code">3018</span>
            <span className="text-xs px-2.5 py-0.5 rounded-full bg-cyan-950 text-cyan-300 border border-cyan-800 font-bold uppercase">
              Numéro Unique
            </span>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-white">
            Besoin d'aide ou témoin d'une situation difficile ?
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 max-w-xl leading-relaxed">
            Le <strong>3018</strong> est le numéro national gratuit, anonyme et confidentiel pour les élèves, parents et professionnels.
            Disponible 7j/7 de 9h à 23h par téléphone, tchat ou application mobile.
          </p>
        </div>

        <div className="shrink-0 flex flex-col sm:flex-row gap-3">
          <button
            onClick={onStartOxyKaelis}
            className="px-5 py-3 rounded-xl bg-cyan-600 hover:bg-cyan-500 text-white font-bold text-xs shadow-md transition-colors cursor-pointer"
          >
            Jouer à Oxy-Kaelis
          </button>
          <button
            onClick={onOpenPedagogy}
            className="px-5 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 font-medium text-xs transition-colors cursor-pointer"
          >
            Fiche Débat 6e
          </button>
        </div>
      </section>
    </div>
  );
};
