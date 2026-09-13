import React from 'react';

interface LogoProps {
  className?: string;
  variant?: 'full' | 'mark' | 'white';
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

export const Logo: React.FC<LogoProps> = ({ 
  className = '', 
  variant = 'full', 
  size = 'md' 
}) => {
  const sizeClasses = {
    sm: 'h-7',
    md: 'h-9',
    lg: 'h-12',
    xl: 'h-16'
  };

  return (
    <div className={`inline-flex items-center gap-2 group select-none ${className}`}>
      {/* Official Brand Logo Image inside sleek high-contrast badge */}
      <div className="relative flex items-center justify-center bg-white px-2 py-1 rounded-lg shadow-md shadow-blue-500/10 transition-transform duration-300 group-hover:scale-105">
        <img 
          src="/assets/logo/siribrand-logo-cropped.png" 
          alt="Siribrand Agency TZ" 
          className={`${sizeClasses[size]} w-auto object-contain`}
          onError={(e) => {
            const target = e.currentTarget;
            if (target.src.includes('cropped')) {
              target.src = '/assets/logo/siribrand-logo.png';
            }
          }}
        />
      </div>

      {/* Styled Agency Typography Badge */}
      <div className="flex flex-col leading-none">
        <div className="flex items-center gap-1.5">
          <span className="font-syne font-extrabold tracking-tight text-white text-lg group-hover:text-blue-400 transition-colors duration-300">
            SIRIBRAND
          </span>
          <span className="text-[10px] font-mono uppercase px-1.5 py-0.5 rounded bg-blue-600/30 text-blue-400 border border-blue-500/30 font-semibold tracking-wider">
            TZ
          </span>
        </div>
        <span className="text-[9px] font-mono uppercase tracking-[0.25em] text-slate-400">
          Agency • Studio
        </span>
      </div>
    </div>
  );
};
