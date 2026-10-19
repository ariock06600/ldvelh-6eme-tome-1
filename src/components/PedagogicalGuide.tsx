import React, { useState } from 'react';
import { GraduationCap, ShieldCheck, Users, HelpCircle, PhoneCall, Sparkles, BookCheck, AlertCircle, BookOpen, Layers, MessageSquareQuote, Smartphone } from 'lucide-react';

export const PedagogicalGuide: React.FC = () => {
  const [activeGuideTab, setActiveGuideTab] = useState<'tome-1' | 'tome-2' | 'tome-3' | 'tome-4' | 'general'>('tome-4');

  return (
    <div className="max-w-4xl mx-auto space-y-8 pb-12">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-indigo-950/70 via-slate-900 to-slate-950 border border-indigo-800/60 rounded-2xl p-6 sm:p-8 backdrop-blur-md shadow-xl">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-3">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-indigo-600 flex items-center justify-center text-white shadow-md shrink-0">
              <GraduationCap className="w-6 h-6" />
            </div>
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                Guide Pédagogique & Fiches de Médiation (6e)
              </h2>
              <p className="text-xs sm:text-sm text-indigo-300">
                Quadrilogie Complète « Station Orbitale Oxy-Kaelis » • Groupe Bouclier
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-slate-950/70 border border-amber-600/30 self-start sm:self-auto">
            <ShieldCheck className="w-4 h-4 text-amber-400" />
            <span className="text-[11px] font-mono-code text-amber-300 font-semibold tracking-wide">
              GROUPE BOUCLIER
            </span>
          </div>
        </div>

        <p className="text-sm text-slate-300 leading-relaxed mt-3">
          Ce dossier pédagogique accompagne les quatre volumes de la collection <em>Oxy-Kaelis</em>.
          La métaphore spatiale met à distance la charge émotionnelle pour permettre aux élèves de 6e d'analyser
          lucidement les violences physiques (Tome 1), l'isolement social (Tome 2), le harcèlement verbal (Tome 3)
          et le cyber-harcèlement sur les réseaux numériques (Tome 4).
        </p>

        {/* Tab switchers inside Guide */}
        <div className="flex items-center gap-2 mt-6 pt-4 border-t border-indigo-900/50 flex-wrap">
          <button
            onClick={() => setActiveGuideTab('tome-4')}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors cursor-pointer flex items-center gap-1.5 ${
              activeGuideTab === 'tome-4'
                ? 'bg-rose-600 text-white font-bold shadow-sm'
                : 'bg-slate-900/80 text-slate-300 hover:text-white hover:bg-slate-800'
            }`}
          >
            <Smartphone className="w-3.5 h-3.5 text-rose-300" />
            <span>Fiche Tome 4 : Cyber & Réseaux</span>
            <span className="text-[9px] px-1 py-0.2 rounded bg-emerald-500/30 text-emerald-300 font-black">NOUVEAU</span>
          </button>

          <button
            onClick={() => setActiveGuideTab('tome-3')}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors cursor-pointer flex items-center gap-1.5 ${
              activeGuideTab === 'tome-3'
                ? 'bg-amber-500 text-slate-950 font-bold shadow-sm'
                : 'bg-slate-900/80 text-slate-300 hover:text-white hover:bg-slate-800'
            }`}
          >
            <MessageSquareQuote className="w-3.5 h-3.5 text-amber-400" />
            <span>Fiche Tome 3 : Moqueries</span>
          </button>

          <button
            onClick={() => setActiveGuideTab('tome-2')}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors cursor-pointer flex items-center gap-1.5 ${
              activeGuideTab === 'tome-2'
                ? 'bg-purple-600 text-white shadow-sm font-semibold'
                : 'bg-slate-900/80 text-slate-300 hover:text-white hover:bg-slate-800'
            }`}
          >
            <BookOpen className="w-3.5 h-3.5 text-purple-300" />
            <span>Fiche Tome 2 : Isolement</span>
          </button>

          <button
            onClick={() => setActiveGuideTab('tome-1')}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors cursor-pointer flex items-center gap-1.5 ${
              activeGuideTab === 'tome-1'
                ? 'bg-cyan-600 text-white shadow-sm font-semibold'
                : 'bg-slate-900/80 text-slate-300 hover:text-white hover:bg-slate-800'
            }`}
          >
            <BookOpen className="w-3.5 h-3.5 text-cyan-300" />
            <span>Fiche Tome 1 : Intimidations</span>
          </button>

          <button
            onClick={() => setActiveGuideTab('general')}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors cursor-pointer flex items-center gap-1.5 ${
              activeGuideTab === 'general'
                ? 'bg-indigo-600 text-white shadow-sm'
                : 'bg-slate-900/80 text-slate-300 hover:text-white hover:bg-slate-800'
            }`}
          >
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Repères Climat Scolaire & 3018</span>
          </button>
        </div>
      </div>

      {/* Guide Content: Tome 4 (NOUVEAU) */}
      {activeGuideTab === 'tome-4' && (
        <div className="space-y-8 animate-fadeIn">
          <section className="bg-slate-900/90 border border-rose-900/40 rounded-2xl p-6">
            <div className="flex items-center gap-2 mb-4">
              <span className="px-2 py-0.5 rounded font-mono-code font-bold uppercase text-[11px] bg-rose-950 text-rose-300 border border-rose-800">
                Tome 4 • Nouveau
              </span>
              <h3 className="text-lg font-bold text-white">
                Fiche Méthodologique : Le Cyber-Harcèlement & la Pression Numérique 24h/24
              </h3>
            </div>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
              Le cyber-harcèlement transforme le harcèlement scolaire en une agression continue qui pénètre l'espace intime de l'enfant,
              y compris la nuit dans sa chambre. Par l'illusion d'anonymat et la démultiplication des likes et partages, il donne aux agresseurs
              un sentiment d'impunité totale. Le Tome 4 met en scène <strong>Lyra</strong>, élève brillante en programmation ciblée par un faux montage sur le canal 'Oxy-Leaks',
              et démontre avec précision comment adopter les réflexes de survie numérique et mobiliser la loi.
            </p>

            <h4 className="text-xs font-mono-code font-bold uppercase tracking-wider text-rose-400 mb-3 flex items-center gap-1.5">
              <BookCheck className="w-4 h-4" /> Le Lexique de Transposition du Tome 4 :
            </h4>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs sm:text-sm mb-6">
              <div className="p-3.5 bg-slate-950/60 rounded-xl border border-slate-800">
                <span className="font-bold text-rose-300 font-mono-code block mb-1">
                  Le Canal Clandestin 'Oxy-Leaks' & Spectre-Zero
                </span>
                <p className="text-slate-300">
                  Les <strong>groupes de discussion non surveillés</strong> (WhatsApp, Snapchat, Discord) où circulent des attaques sous de faux pseudonymes, créant l'illusion d'un anonymat intouchable.
                </p>
              </div>

              <div className="p-3.5 bg-slate-950/60 rounded-xl border border-slate-800">
                <span className="font-bold text-rose-300 font-mono-code block mb-1">
                  Les Holo-Montages & Deepfakes de Simulation
                </span>
                <p className="text-slate-300">
                  Les <strong>photos détournées, vidéos truquées et mèmes dégradants</strong> diffusés sans le consentement de la personne pour l'humilier devant l'ensemble de ses camarades.
                </p>
              </div>

              <div className="p-3.5 bg-slate-950/60 rounded-xl border border-slate-800">
                <span className="font-bold text-rose-300 font-mono-code block mb-1">
                  Le Bip Nocturne dans le Sas de Repos
                </span>
                <p className="text-slate-300">
                  L'<strong>agression 24h/24</strong> : l'enfant n'a plus de sanctuaire de sécurité chez lui le soir car les notifications le poursuivent jusque dans son lit, entraînant insomnie et anxiété.
                </p>
              </div>

              <div className="p-3.5 bg-slate-950/60 rounded-xl border border-slate-800">
                <span className="font-bold text-rose-300 font-mono-code block mb-1">
                  Les Logs Chiffrés & la Capture Horodatée
                </span>
                <p className="text-slate-300">
                  Les <strong>preuves numériques matérielles</strong> indispensables : ne jamais effacer les messages sans avoir fait de capture d'écran mentionnant la date, l'heure et l'identifiant.
                </p>
              </div>

              <div className="p-3.5 bg-slate-950/60 rounded-xl border border-slate-800">
                <span className="font-bold text-rose-300 font-mono-code block mb-1">
                  Le Droit à la Déconnexion (Mode Veille Hermétique)
                </span>
                <p className="text-slate-300">
                  La <strong>mesure d'hygiène psychologique</strong> : éteindre son terminal et couper les notifications pour briser le défilement d'angoisse ('doomscrolling') et retrouver son calme.
                </p>
              </div>

              <div className="p-3.5 bg-slate-950/60 rounded-xl border border-slate-800">
                <span className="font-bold text-rose-300 font-mono-code block mb-1">
                  La Charte de Confiance du ComNet
                </span>
                <p className="text-slate-300">
                  Le <strong>pacte numérique d'établissement</strong> : règles élaborées avec les élèves pour sanctuariser le respect de l'image, la modération collective et l'interdiction du lynchage.
                </p>
              </div>
            </div>

            <h4 className="text-xs font-mono-code font-bold uppercase tracking-wider text-rose-400 mb-3 flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4" /> Les 4 Réflexes d'Urgence Face au Cyber-Harcèlement :
            </h4>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm mb-6">
              <div className="p-3 bg-slate-950/80 rounded-xl border border-rose-900/40">
                <div className="font-bold text-rose-300 mb-1">1. Ne pas répondre sur le réseau</div>
                <p className="text-slate-400 text-xs">
                  Répondre à chaud fournit aux agresseurs le spectacle qu'ils cherchent et alimente l'algorithme de polémique.
                </p>
              </div>

              <div className="p-3 bg-slate-950/80 rounded-xl border border-rose-900/40">
                <div className="font-bold text-rose-300 mb-1">2. Figer les preuves immédiatement</div>
                <p className="text-slate-400 text-xs">
                  Réaliser des captures d'écran complètes avec l'auteur, l'horodatage et les commentaires avant toute suppression.
                </p>
              </div>

              <div className="p-3 bg-slate-950/80 rounded-xl border border-rose-900/40">
                <div className="font-bold text-rose-300 mb-1">3. Bloquer et se déconnecter</div>
                <p className="text-slate-400 text-xs">
                  Bloquer les comptes toxiques et éteindre son téléphone pour stopper l'invasion psychologique de son espace privé.
                </p>
              </div>

              <div className="p-3 bg-slate-950/80 rounded-xl border border-rose-900/40">
                <div className="font-bold text-rose-300 mb-1">4. En parler et composer le 3018</div>
                <p className="text-slate-400 text-xs">
                  Alerter les parents, les enseignants et contacter le 3018 pour obtenir le retrait d'urgence des contenus illégaux.
                </p>
              </div>
            </div>

            <h4 className="text-xs font-mono-code font-bold uppercase tracking-wider text-rose-400 mb-3 flex items-center gap-1.5">
              <HelpCircle className="w-4 h-4" /> Questions pour le Débat en Classe (Tome 4) :
            </h4>

            <div className="space-y-3 text-xs sm:text-sm">
              <div className="p-3 bg-slate-950/60 rounded-xl border border-slate-800 flex items-start gap-3">
                <span className="w-6 h-6 rounded-full bg-rose-900 text-rose-300 font-bold flex items-center justify-center shrink-0 text-xs">
                  1
                </span>
                <div>
                  <strong className="text-white block">« Pourquoi 'liker' ou repartager une image humiliante équivaut-il à participer au harcèlement ? »</strong>
                  <p className="text-slate-400 text-xs mt-0.5">
                    Le partage multiplie l'audience de l'agression et conforte les auteurs dans leur sentiment d'approbation collective.
                  </p>
                </div>
              </div>

              <div className="p-3 bg-slate-950/60 rounded-xl border border-slate-800 flex items-start gap-3">
                <span className="w-6 h-6 rounded-full bg-rose-900 text-rose-300 font-bold flex items-center justify-center shrink-0 text-xs">
                  2
                </span>
                <div>
                  <strong className="text-white block">« Pourquoi la cyber-vengeance par piratage ou insultes en retour aggrave-t-elle la situation ? »</strong>
                  <p className="text-slate-400 text-xs mt-0.5">
                    Elle transforme la victime en contrevenant pénal, efface la distinction morale et complique l'intervention des adultes.
                  </p>
                </div>
              </div>

              <div className="p-3 bg-slate-950/60 rounded-xl border border-slate-800 flex items-start gap-3">
                <span className="w-6 h-6 rounded-full bg-rose-900 text-rose-300 font-bold flex items-center justify-center shrink-0 text-xs">
                  3
                </span>
                <div>
                  <strong className="text-white block">« Comment briser l'effet de meute sur un groupe de classe en ligne ? »</strong>
                  <p className="text-slate-400 text-xs mt-0.5">
                    Refuser publiquement de rire, envoyer un message de soutien privé à la victime, quitter le canal et prévenir un délégué ou un adulte.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>
      )}

      {/* Guide Content: Tome 3 */}
      {activeGuideTab === 'tome-3' && (
        <div className="space-y-8 animate-fadeIn">
          <section className="bg-slate-900/90 border border-amber-900/40 rounded-2xl p-6">
            <div className="flex items-center gap-2 mb-4">
              <span className="px-2 py-0.5 rounded font-mono-code font-bold uppercase text-[11px] bg-amber-950 text-amber-300 border border-amber-800">
                Tome 3
              </span>
              <h3 className="text-lg font-bold text-white">
                Fiche Méthodologique : Le Harcèlement Verbal & les Moqueries Récurrentes
              </h3>
            </div>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
              « Roh ça va, on peut plus rigoler ! » Le harcèlement verbal est sans doute le plus banalisé au collège : il s'abrite derrière
              l'alibi du second degré et culpabilise la victime en lui reprochant un prétendu manque d'humour.
              Le Tome 3 met en scène <strong>Corin</strong>, jeune élève passionné d'astrophysique ciblé pour son élocution, et démontre comment démonter cette mécanique toxique.
            </p>

            <h4 className="text-xs font-mono-code font-bold uppercase tracking-wider text-amber-400 mb-3 flex items-center gap-1.5">
              <BookCheck className="w-4 h-4" /> Le Lexique de Transposition du Tome 3 :
            </h4>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs sm:text-sm mb-6">
              <div className="p-3.5 bg-slate-950/60 rounded-xl border border-slate-800">
                <span className="font-bold text-amber-300 font-mono-code block mb-1">
                  Le Correcteur de Pression Auditive de Corin
                </span>
                <p className="text-slate-300">
                  Une <strong>particularité physique ou un appareillage médical</strong> (lunettes, appareil dentaire, prothèse) souvent instrumentalisé par les moqueurs pour fabriquer un stigmate.
                </p>
              </div>

              <div className="p-3.5 bg-slate-950/60 rounded-xl border border-slate-800">
                <span className="font-bold text-amber-300 font-mono-code block mb-1">
                  Les Bruits de Robot sur les Ondes Radio
                </span>
                <p className="text-slate-300">
                  Les <strong>imitations blessantes en classe</strong> (bégaiement, accent, tic de langage) amplifiées pour déclencher le rire complice de la classe et déstabiliser la victime à l'oral.
                </p>
              </div>

              <div className="p-3.5 bg-slate-950/60 rounded-xl border border-slate-800">
                <span className="font-bold text-amber-300 font-mono-code block mb-1">
                  Le Surnom Dégradant ('Bip-Bip rouillé')
                </span>
                <p className="text-slate-300">
                  Le <strong>surnom imposé</strong> répété quotidiennement dans les coursives qui enferme l'élève dans une caricature réductrice et détruit son identité personnelle.
                </p>
              </div>

              <div className="p-3.5 bg-slate-950/60 rounded-xl border border-slate-800">
                <span className="font-bold text-amber-300 font-mono-code block mb-1">
                  Le Rictus Forcé / Faux Sourire
                </span>
                <p className="text-slate-300">
                  L'<strong>auto-dénigrement défensif</strong> : sourire pour faire semblant de trouver ça drôle, ce qui valide faussement l'agression auprès du groupe et trompe les enseignants.
                </p>
              </div>
            </div>

            <h4 className="text-xs font-mono-code font-bold uppercase tracking-wider text-amber-400 mb-3 flex items-center gap-1.5">
              <HelpCircle className="w-4 h-4" /> Questions pour le Débat en Classe (Tome 3) :
            </h4>

            <div className="space-y-3 text-xs sm:text-sm">
              <div className="p-3 bg-slate-950/60 rounded-xl border border-slate-800 flex items-start gap-3">
                <span className="w-6 h-6 rounded-full bg-amber-900 text-amber-300 font-bold flex items-center justify-center shrink-0 text-xs">
                  1
                </span>
                <div>
                  <strong className="text-white block">« Pourquoi l'argument 'c'était pour rire' ne rend-il pas une moquerie acceptable ? »</strong>
                  <p className="text-slate-400 text-xs mt-0.5">
                    L'humour est partagé quand tout le monde rit ensemble ; si l'un souffre et que les autres rient de lui, c'est une agression.
                  </p>
                </div>
              </div>

              <div className="p-3 bg-slate-950/60 rounded-xl border border-slate-800 flex items-start gap-3">
                <span className="w-6 h-6 rounded-full bg-amber-900 text-amber-300 font-bold flex items-center justify-center shrink-0 text-xs">
                  2
                </span>
                <div>
                  <strong className="text-white block">« Pourquoi l'insulte en retour aggrave-t-elle la situation ? »</strong>
                  <p className="text-slate-400 text-xs mt-0.5">
                    Elle brouille les rôles, déclenche une escalade de violence et amène les adultes à renvoyer les deux élèves dos à dos.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>
      )}

      {/* Guide Content: Tome 2 */}
      {activeGuideTab === 'tome-2' && (
        <div className="space-y-8 animate-fadeIn">
          <section className="bg-slate-900/90 border border-purple-900/40 rounded-2xl p-6">
            <div className="flex items-center gap-2 mb-4">
              <span className="px-2 py-0.5 rounded font-mono-code font-bold uppercase text-[11px] bg-purple-950 text-purple-300 border border-purple-800">
                Tome 2
              </span>
              <h3 className="text-lg font-bold text-white">
                Fiche Méthodologique : L'Isolement Social, l'Ostracisme & les Rumeurs
              </h3>
            </div>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
              L'ostracisme (ou rejet passif) est la forme de harcèlement la plus courante et la plus difficile à déceler au collège.
              Le Tome 2 met en scène <strong>Naël</strong>, victime du « mur invisible », et décortique les mécanismes de la meute et de la préoccupation partagée (Pikas).
            </p>

            <h4 className="text-xs font-mono-code font-bold uppercase tracking-wider text-purple-400 mb-3 flex items-center gap-1.5">
              <BookCheck className="w-4 h-4" /> Le Lexique de Transposition du Tome 2 :
            </h4>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs sm:text-sm mb-6">
              <div className="p-3.5 bg-slate-950/60 rounded-xl border border-slate-800">
                <span className="font-bold text-purple-300 font-mono-code block mb-1">
                  Les Tables Rejetées au Réfectoire
                </span>
                <p className="text-slate-300">
                  La <strong>cantine scolaire</strong> : poser son sac ou refuser l'accès à une table commune symbolise la territorialisation et l'exclusion spatiale.
                </p>
              </div>

              <div className="p-3.5 bg-slate-950/60 rounded-xl border border-slate-800">
                <span className="font-bold text-purple-300 font-mono-code block mb-1">
                  Le Cercle Orbital de Kaelen
                </span>
                <p className="text-slate-300">
                  Le <strong>groupe dominant de la cour</strong> qui dicte qui a le droit d'exister socialement par la menace implicite de l'exclusion.
                </p>
              </div>
            </div>

            <h4 className="text-xs font-mono-code font-bold uppercase tracking-wider text-purple-400 mb-3 flex items-center gap-1.5">
              <HelpCircle className="w-4 h-4" /> Questions pour le Débat en Classe (Tome 2) :
            </h4>

            <div className="space-y-3 text-xs sm:text-sm">
              <div className="p-3 bg-slate-950/60 rounded-xl border border-slate-800 flex items-start gap-3">
                <span className="w-6 h-6 rounded-full bg-purple-900 text-purple-300 font-bold flex items-center justify-center shrink-0 text-xs">
                  1
                </span>
                <div>
                  <strong className="text-white block">« Pourquoi refuser de parler à quelqu'un est-il aussi violent qu'une gifle ? »</strong>
                  <p className="text-slate-400 text-xs mt-0.5">
                    L'exclusion nie l'existence même de l'élève au sein du groupe et détruit l'estime de soi.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>
      )}

      {/* Guide Content: Tome 1 */}
      {activeGuideTab === 'tome-1' && (
        <div className="space-y-8 animate-fadeIn">
          <section className="bg-slate-900/90 border border-cyan-900/40 rounded-2xl p-6">
            <div className="flex items-center gap-2 mb-4">
              <span className="px-2 py-0.5 rounded font-mono-code font-bold uppercase text-[11px] bg-cyan-950 text-cyan-300 border border-cyan-800">
                Tome 1
              </span>
              <h3 className="text-lg font-bold text-white">
                Fiche Méthodologique : Le Harcèlement Physique & les Intimidations
              </h3>
            </div>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
              Le premier volume de la collection met en scène <strong>Élior</strong> face aux bousculades dans les sas sans caméras,
              au racket de ses capsules vitales et à la terreur exercée par Brannok. Il permet d'aborder la peur des représailles
              et l'importance capitale d'activer les adultes référents.
            </p>

            <h4 className="text-xs font-mono-code font-bold uppercase tracking-wider text-cyan-400 mb-3 flex items-center gap-1.5">
              <HelpCircle className="w-4 h-4" /> Questions pour le Débat en Classe (Tome 1) :
            </h4>

            <div className="space-y-3 text-xs sm:text-sm">
              <div className="p-3 bg-slate-950/60 rounded-xl border border-slate-800 flex items-start gap-3">
                <span className="w-6 h-6 rounded-full bg-cyan-900 text-cyan-300 font-bold flex items-center justify-center shrink-0 text-xs">
                  1
                </span>
                <div>
                  <strong className="text-white block">« Pourquoi prétendre que 'c'était juste un jeu' devant le surveillant aggrave-t-il la situation ? »</strong>
                  <p className="text-slate-400 text-xs mt-0.5">
                    Couvrir son agresseur par peur valide la loi du silence et encourage la surenchère de violences.
                  </p>
                </div>
              </div>

              <div className="p-3 bg-slate-950/60 rounded-xl border border-slate-800 flex items-start gap-3">
                <span className="w-6 h-6 rounded-full bg-cyan-900 text-cyan-300 font-bold flex items-center justify-center shrink-0 text-xs">
                  2
                </span>
                <div>
                  <strong className="text-white block">« Quelle est la différence entre dénoncer par jalousie et alerter pour protéger ? »</strong>
                  <p className="text-slate-400 text-xs mt-0.5">
                    Clarifier la notion de 'mouchard' : signaler une agression est un acte civique de protection de la règle commune.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>
      )}

      {/* General Climat Scolaire & 3018 */}
      <section className="bg-slate-900/90 border border-slate-800 rounded-2xl p-6">
        <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
          <AlertCircle className="w-5 h-5 text-amber-400" />
          Les 3 Critères du Harcèlement Scolaire en 6e
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs sm:text-sm mb-6">
          <div className="bg-slate-950/80 p-4 rounded-xl border border-amber-900/40 space-y-2">
            <div className="text-amber-400 font-bold font-mono-code text-sm">1. La Répétition</div>
            <p className="text-slate-300 leading-relaxed">
              Ce n'est pas un incident isolé. Les actes, moqueries, lynchages ou rejets s'inscrivent dans la durée et se reproduisent régulièrement.
            </p>
          </div>

          <div className="bg-slate-950/80 p-4 rounded-xl border border-amber-900/40 space-y-2">
            <div className="text-amber-400 font-bold font-mono-code text-sm">2. L'Asymétrie des Forces</div>
            <p className="text-slate-300 leading-relaxed">
              Un déséquilibre net : un groupe organisé ou un individu dominant face à une cible isolée incapable de se défendre seule.
            </p>
          </div>

          <div className="bg-slate-950/80 p-4 rounded-xl border border-amber-900/40 space-y-2">
            <div className="text-amber-400 font-bold font-mono-code text-sm">3. L'Intention de Nuire</div>
            <p className="text-slate-300 leading-relaxed">
              L'agression vise à humilier, faire rire à ses dépens ou isoler la victime pour asseoir une domination par la terreur ou le mépris.
            </p>
          </div>
        </div>

        {/* Numéro 3018 d'urgence */}
        <div className="bg-gradient-to-r from-cyan-950/60 to-rose-950/60 border border-cyan-800/60 rounded-xl p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-cyan-600 flex items-center justify-center text-slate-950 font-black shrink-0">
              <PhoneCall className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs font-mono-code text-cyan-300 font-semibold uppercase">
                Numéro National Gratuit & Confidentiel
              </div>
              <div className="text-2xl font-black text-white font-mono-code">
                3018
              </div>
              <div className="text-xs text-slate-300">
                Harcèlement scolaire et cyber-harcèlement (7j/7 de 9h à 23h)
              </div>
            </div>
          </div>
          <div className="text-xs text-slate-400 max-w-xs leading-relaxed">
            Écoute psychologique, conseils juridiques, réquisition de retrait de contenus illicites aux plateformes et signalement direct aux référents académiques.
          </div>
        </div>
      </section>
    </div>
  );
};
