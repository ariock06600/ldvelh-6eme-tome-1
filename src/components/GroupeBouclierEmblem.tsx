import React, { useState } from 'react';

interface GroupeBouclierEmblemProps {
  className?: string;
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  imageSrc?: string;
  showCaption?: boolean;
}

export const GroupeBouclierEmblem: React.FC<GroupeBouclierEmblemProps> = ({
  className = '',
  size = 'md',
  imageSrc = '/images/logo-groupe-bouclier.png',
  showCaption = false,
}) => {
  const [imgError, setImgError] = useState(false);

  const sizeClasses = {
    xs: 'w-8 h-8 sm:w-10 sm:h-10',
    sm: 'w-16 h-16 sm:w-20 sm:h-20',
    md: 'w-64 h-64 sm:w-72 sm:h-72',
    lg: 'w-80 h-80 sm:w-96 sm:h-96',
    xl: 'w-96 h-96 sm:w-[420px] sm:h-[420px]',
  };

  const currentSrc = imgError ? '/images/unnamed.jpg' : imageSrc;

  return (
    <div className={`relative flex flex-col items-center justify-center select-none ${className}`}>
      {/* Background antique parchment aura & glow */}
      <div className="absolute inset-0 bg-amber-500/10 rounded-full blur-2xl transform scale-95 pointer-events-none" />

      {/* Official Emblem Logo Image */}
      <div
        className={`${sizeClasses[size]} relative flex items-center justify-center rounded-2xl overflow-hidden p-2 transition-transform duration-300 hover:scale-[1.02] drop-shadow-[0_12px_28px_rgba(0,0,0,0.65)]`}
      >
        <img
          src={currentSrc}
          alt="Logo officiel Groupe Bouclier"
          className="w-full h-full object-contain filter contrast-[1.02]"
          onError={() => {
            if (!imgError) {
              setImgError(true);
            }
          }}
          loading="eager"
        />
      </div>

      {showCaption && (
        <div className="mt-3 text-center">
          <p className="text-xs font-mono-code text-amber-300 font-bold tracking-wider uppercase">
            Groupe Bouclier
          </p>
          <p className="text-[11px] text-slate-400 italic">
            Laudare, Benedicere, Praedicare
          </p>
        </div>
      )}
    </div>
  );
};
