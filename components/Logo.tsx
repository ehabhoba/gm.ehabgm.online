
import React from 'react';

interface LogoProps {
  className?: string;
  showText?: boolean;
  light?: boolean;
}

export const Logo: React.FC<LogoProps> = ({ className = "h-10", showText = true, light = false }) => {
  const primaryColor = light ? "#ffffff" : "#2563eb";
  const secondaryColor = light ? "#e2e8f0" : "#1e40af";
  const textColor = light ? "#ffffff" : "#374151";

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <svg viewBox="0 0 400 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-full w-auto">
        <defs>
          <linearGradient id="egm-gradient" x1="0" y1="0" x2="400" y2="120" gradientUnits="userSpaceOnUse">
            <stop stopColor="#3b82f6" />
            <stop offset="1" stopColor="#1e40af" />
          </linearGradient>
        </defs>
        {/* Simplified EGM Graphical Representation mimicking the upload */}
        <path d="M20 20H100V40H40V60H90V80H40V100H100V120H20V20Z" fill="url(#egm-gradient)" />
        <path d="M120 20H200V40H140V100H180V70H160V55H210V110H120V20Z" fill="url(#egm-gradient)" />
        <path d="M230 20H270L290 70L310 20H350V120H320V50L295 110H285L260 50V120H230V20Z" fill="url(#egm-gradient)" />
      </svg>
      {showText && (
        <div className="flex flex-col leading-none">
          <span className={`text-2xl font-black tracking-tighter ${light ? 'text-white' : 'text-gray-900'}`}>Ehab GM</span>
          <span className={`text-xs font-bold uppercase tracking-widest ${light ? 'text-blue-200' : 'text-blue-600'}`}>Digital Excellence</span>
        </div>
      )}
    </div>
  );
};
