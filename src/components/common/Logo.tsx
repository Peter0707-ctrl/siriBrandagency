import React from 'react';

interface LogoProps {
  className?: string;
  variant?: 'full' | 'mark' | 'white';
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

export const Logo: React.FC<LogoProps> = ({ 
  className = '', 
  size = 'md' 
}) => {
  const sizeClasses = {
    sm: 'h-8 sm:h-9',
    md: 'h-9 sm:h-10',
    lg: 'h-12 sm:h-14',
    xl: 'h-16 sm:h-20'
  };

  return (
    <div className={`inline-flex items-center group select-none ${className}`}>
      {/* Siri Brand Agency Official Logo Badge */}
      <div className="relative flex items-center justify-center bg-white px-3 py-1.5 rounded-xl shadow-lg shadow-blue-500/10 transition-all duration-300 group-hover:scale-105 group-hover:shadow-blue-500/20 border border-slate-200/20">
        <img 
          src="/assets/logo/siribrand-logo.png" 
          alt="Siri Brand Agency" 
          className={`${sizeClasses[size]} w-auto object-contain`}
        />
      </div>
    </div>
  );
};
