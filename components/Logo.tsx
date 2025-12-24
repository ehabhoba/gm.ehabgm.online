
import React from 'react';

interface LogoProps {
  className?: string;
  showText?: boolean;
  light?: boolean;
}

export const Logo: React.FC<LogoProps> = ({ className = "h-10", showText = true, light = false }) => {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <svg viewBox="0 0 400 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-full w-auto drop-shadow-md">
        <defs>
          <linearGradient id="logoai-gradient" x1="0" y1="0" x2="400" y2="120" gradientUnits="userSpaceOnUse">
            <stop stopColor="#3b82f6" />
            <stop offset="1" stopColor="#8b5cf6" />
          </linearGradient>
        </defs>
        {/* Dynamic Abstract Logo Shape */}
        <rect x="20" y="20" width="80" height="80" rx="20" fill="url(#logoai-gradient)" />
        <path d="M45 40L75 60L45 80V40Z" fill="white" />
        {/* Logo Text Portion */}
        <text x="120" y="85" fill={light ? "white" : "#1e3a8a"} fontSize="70" fontWeight="900" fontFamily="Arial">LogoAI</text>
      </svg>
      {showText && (
        <div className="flex flex-col leading-none border-r-2 pr-3 border-blue-200">
          <span className={`text-xl font-black ${light ? 'text-white' : 'text-blue-900'}`}>Ehab GM</span>
          <span className={`text-[10px] font-bold uppercase tracking-[0.2em] ${light ? 'text-blue-200' : 'text-blue-600'}`}>Digital Agency</span>
        </div>
      )}
    </div>
  );
};
