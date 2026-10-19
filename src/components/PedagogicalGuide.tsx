import React from 'react';
import { GraduationCap, ShieldCheck, Users, HelpCircle, PhoneCall, Sparkles, BookCheck, AlertCircle } from 'lucide-react';

export const PedagogicalGuide: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto space-y-8">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-indigo-950/70 via-slate-900 to-slate-950 border border-indigo-800/60 rounded-2xl p-6 sm:p-8 backdrop-blur-md shadow-xl">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-3">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-indigo-600 flex items-center justify-center text-white shadow-md shrink-0">
              <GraduationCap className="w-6 h-6" />
            </div>
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                Guide Pédagogique & Fiche de Médiation
              </h2>
              <p className="text-xs sm:text-sm text-indigo-300">
                Sensibilisation au harcèlement physique et aux intimidations pour les classes de 6e
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
          Ce « Livre dont vous êtes le héros » a été spécialement pensé pour les élèves de 6e (11-12 ans).
          La transposition spatiale sur la station <em>Oxy-Kaelis</em> permet de mettre à distance la charge émotionnelle
          sans stigmatiser d'élèves réels, tout en décortiquant avec précision les mécanismes psychologiques du harcèlement physique et moral.
        </p>
      </div>

      {/* Le Lexique de Transposition */}
      <section className="bg-slate-900/90 border border-slate-800 rounded-2xl p-6">
        <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
          <BookCheck className="w-5 h-5 text-cyan-400" />
          Le Lexique de Transposition : Décoder l'Univers d'Oxy-Kaelis
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs sm:text-sm">
          <div className="p-3.5 bg-slate-950/60 rounded-xl border border-slate-800">
            <span className="font-bold text-cyan-300 font-mono-code block mb-1">
              Station Oxy-Kaelis & Cycle Alpha
            </span>
            <p className="text-slate-300">
              L'équivalent du <strong>collège</strong> et de l'année de <strong>6e</strong> : une transition vers un environnement plus vaste et impressionnant.
            </p>
          </div>

          <div className="p-3.5 bg-slate-950/60 rounded-xl border border-slate-800">
            <span className="font-bold text-cyan-300 font-mono-code block mb-1">
              Les Modules de Rechargement
            </span>
            <p className="text-slate-300">
              Les <strong>casiers scolaires</strong> d'élèves : leur dégradation (dépressurisation forcée) symbolise le vandalisme et la violation de l'intimité.
            </p>
          </div>

          <div className="p-3.5 bg-slate-950/60 rounded-xl border border-slate-800">
            <span className="font-bold text-cyan-300 font-mono-code block mb-1">
              Le Dôme d'Hydro-gravité & Réfectoire
            </span>
            <p className="text-slate-300">
              Le <strong>cours d'EPS / gymnase</strong> et la <strong>cantine scolaire</strong> : des lieux de sociabilité intense où les bousculades et croche-pieds ont lieu.
            </p>
          </div>

          <div className="p-3.5 bg-slate-950/60 rounded-xl border border-slate-800">
            <span className="font-bold text-cyan-300 font-mono-code block mb-1">
              Les Coursives & Sas aveugles
            </span>
            <p className="text-slate-300">
              Les <strong>couloirs, toilettes et recoins non surveillés</strong> du collège : zones privilégiées par les intimidateurs pour agir à l'abri des regards adultes.
            </p>
          </div>

          <div className="p-3.5 bg-slate-950/60 rounded-xl border border-slate-800">
            <span className="font-bold text-cyan-300 font-mono-code block mb-1">
              Les Veilleurs & le Régulateur de Module
            </span>
            <p className="text-slate-300">
              Les <strong>surveillants (AED)</strong> et le <strong>Conseiller Principal d'Éducation (CPE)</strong> : garants de la règle commune et de la sécurité des élèves.
            </p>
          </div>

          <div className="p-3.5 bg-slate-950/60 rounded-xl border border-slate-800">
            <span className="font-bold text-cyan-300 font-mono-code block mb-1">
              Le Médiateur Biosensoriel & Mentors
            </span>
            <p className="text-slate-300">
              L'<strong>infirmier(ère) scolaire</strong> et les <strong>professeurs</strong> : interlocuteurs de confiance tenus au respect et formés à l'écoute empathique.
            </p>
          </div>
        </div>
      </section>

      {/* Les 3 Piliers du Harcèlement */}
      <section className="bg-slate-900/90 border border-slate-800 rounded-2xl p-6">
        <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
          <AlertCircle className="w-5 h-5 text-amber-400" />
          Comment Définir le Harcèlement Scolaire (Les 3 Critères)
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs sm:text-sm">
          <div className="bg-slate-950/80 p-4 rounded-xl border border-amber-900/40 space-y-2">
            <div className="text-amber-400 font-bold font-mono-code text-sm">1. La Répétition</div>
            <p className="text-slate-300 leading-relaxed">
              Ce n'est pas une simple dispute ponctuelle. Les bousculades, moqueries ou extorsions s'inscrivent dans la durée et se reproduisent régulièrement.
            </p>
          </div>

          <div className="bg-slate-950/80 p-4 rounded-xl border border-amber-900/40 space-y-2">
            <div className="text-amber-400 font-bold font-mono-code text-sm">2. L'Asymétrie des Forces</div>
            <p className="text-slate-300 leading-relaxed">
              Il y a un déséquilibre évident : un élève plus âgé (Brannok), ou un groupe ligué (Tark et Vael), face à une recrue isolée (Élior).
            </p>
          </div>

          <div className="bg-slate-950/80 p-4 rounded-xl border border-amber-900/40 space-y-2">
            <div className="text-amber-400 font-bold font-mono-code text-sm">3. L'Intention d'Isoler</div>
            <p className="text-slate-300 leading-relaxed">
              L'agression vise à humilier la cible, à lui faire peur et à la couper de ses camarades pour asseoir une domination par la terreur.
            </p>
          </div>
        </div>
      </section>

      {/* Le Rôle Crucial du Témoin : Sylvan */}
      <section className="bg-slate-900/90 border border-slate-800 rounded-2xl p-6">
        <h3 className="text-lg font-bold text-white mb-3 flex items-center gap-2">
          <Users className="w-5 h-5 text-indigo-400" />
          Le Rôle Décisif du Témoin : De Spectateur Passif à Acteur Solidaire
        </h3>

        <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
          Dans l'histoire, le personnage de <strong>Sylvan</strong> illustre la réalité vécue par la majorité des collégiens :
          il n'est pas méchant, mais la peur de devenir la prochaine cible le paralyse.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm">
          <div className="p-4 bg-rose-950/20 border border-rose-900/40 rounded-xl">
            <div className="font-bold text-rose-300 mb-1">Le Témoin Passif (Danger) :</div>
            <p className="text-slate-300 leading-relaxed">
              En baissant les yeux, en riant par politesse ou en se taisant, le témoin confirme involontairement à l'agresseur qu'il a le pouvoir absolu.
            </p>
          </div>

          <div className="p-4 bg-emerald-950/20 border border-emerald-900/40 rounded-xl">
            <div className="font-bold text-emerald-300 mb-1">Le Témoin Actif (Levier) :</div>
            <p className="text-slate-300 leading-relaxed">
              Sylvan comprend qu'il peut aider sans se battre : accompagner Élior, consigner des faits ou parler en toute confidentialité à un adulte.
            </p>
          </div>
        </div>
      </section>

      {/* Guide d'animation pour les enseignants / éducateurs */}
      <section className="bg-slate-900/90 border border-slate-800 rounded-2xl p-6">
        <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
          <HelpCircle className="w-5 h-5 text-cyan-400" />
          Fiche de Débat en Classe (Heure de Vie de Classe / EMC 6e)
        </h3>

        <div className="space-y-3 text-xs sm:text-sm text-slate-300">
          <div className="p-3 bg-slate-950/60 rounded-xl border border-slate-800 flex items-start gap-3">
            <span className="w-6 h-6 rounded-full bg-cyan-900 text-cyan-300 font-bold flex items-center justify-center shrink-0 text-xs">
              1
            </span>
            <div>
              <strong className="text-white block">« Pourquoi Élior hésite-t-il à parler au début ? »</strong>
              <p className="text-slate-400 text-xs mt-0.5">
                Peur des représailles, crainte d'être étiqueté 'mouchard' ou 'rapporteur', sentiment de honte ou illusion de pouvoir régler la situation seul.
              </p>
            </div>
          </div>

          <div className="p-3 bg-slate-950/60 rounded-xl border border-slate-800 flex items-start gap-3">
            <span className="w-6 h-6 rounded-full bg-cyan-900 text-cyan-300 font-bold flex items-center justify-center shrink-0 text-xs">
              2
            </span>
            <div>
              <strong className="text-white block">« Quelle est la différence fondamentale entre 'rapporter' et 'demander de l'aide' ? »</strong>
              <p className="text-slate-400 text-xs mt-0.5">
                Rapporter cherche à nuire pour une peccadille ; signaler une agression cherche à protéger une personne en souffrance et faire respecter la règle commune.
              </p>
            </div>
          </div>

          <div className="p-3 bg-slate-950/60 rounded-xl border border-slate-800 flex items-start gap-3">
            <span className="w-6 h-6 rounded-full bg-cyan-900 text-cyan-300 font-bold flex items-center justify-center shrink-0 text-xs">
              3
            </span>
            <div>
              <strong className="text-white block">« Pourquoi la riposte violente solitaire (les pièges) se retourne-t-elle contre Élior ? »</strong>
              <p className="text-slate-400 text-xs mt-0.5">
                La loi interdit de se faire justice soi-même. La violence en retour efface le statut de victime et légitime des sanctions pour actes de dégradation.
              </p>
            </div>
          </div>

          <div className="p-3 bg-slate-950/60 rounded-xl border border-slate-800 flex items-start gap-3">
            <span className="w-6 h-6 rounded-full bg-cyan-900 text-cyan-300 font-bold flex items-center justify-center shrink-0 text-xs">
              4
            </span>
            <div>
              <strong className="text-white block">« Quels sont les équivalents réels dans notre collège des différents adultes d'Oxy-Kaelis ? »</strong>
              <p className="text-slate-400 text-xs mt-0.5">
                Surveillants, professeurs principaux, CPE, infirmière, psychologue de l'Éducation nationale, assistante sociale, agents d'accueil.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Numéros d'urgence réels et contacts */}
      <section className="bg-gradient-to-r from-cyan-950/60 to-blue-950/60 border border-cyan-800/60 rounded-2xl p-6 text-slate-200">
        <h3 className="text-lg font-bold text-white mb-3 flex items-center gap-2">
          <PhoneCall className="w-5 h-5 text-cyan-400" />
          Ressources & Numéros d'Aide Réels (France & Francophonie)
        </h3>

        <p className="text-xs sm:text-sm text-slate-300 mb-4">
          Si toi ou l'un de tes camarades vivez une situation de harcèlement, de rejet ou d'intimidation, ne reste pas seul.
          Des professionnels sont joignables gratuitement et anonymement.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="bg-slate-950/70 p-5 rounded-xl border border-cyan-700/50 flex flex-col justify-between">
            <div>
              <div className="text-3xl font-black text-cyan-400 font-mono-code mb-1">
                3018
              </div>
              <div className="font-semibold text-white text-sm">
                Numéro Unique National contre le Harcèlement et le Cyberharcèlement
              </div>
              <p className="text-xs text-slate-300 mt-2 leading-relaxed">
                Le <strong>3018</strong> est le numéro unique gratuit, anonyme et 100 % confidentiel. Disponible 7j/7 de 9h à 23h par téléphone, tchat en direct ou via l'application mobile.
              </p>
            </div>
          </div>

          <div className="bg-slate-950/70 p-5 rounded-xl border border-indigo-700/50 flex flex-col justify-between">
            <div>
              <div className="text-lg font-bold text-indigo-300 font-mono-code mb-1">
                Application 3018 & Signalement
              </div>
              <div className="font-semibold text-white text-sm">
                Coffre-fort numérique & Accompagnement
              </div>
              <p className="text-xs text-slate-300 mt-2 leading-relaxed">
                Permet de stocker de façon sécurisée des preuves (captures, photos, messages horodatés) pour faire supprimer des contenus et engager une prise en charge immédiate.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
