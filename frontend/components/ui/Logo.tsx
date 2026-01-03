import React from 'react';

interface LogoProps {
    size?: 'sm' | 'md' | 'lg';
    className?: string;
}

export const Logo: React.FC<LogoProps> = ({ size = 'md', className = '' }) => {
    const sizes = {
        sm: 'w-8 h-8 text-xl',
        md: 'w-12 h-12 text-2xl',
        lg: 'w-16 h-16 text-3xl'
    };

    return (
        <div className={`flex items-center space-x-3 ${className}`}>
            <div className={`
        ${sizes[size]} 
        bg-gradient-to-br from-[#E76F8A] via-[#E76F8A] to-[#7C6ED5] 
        rounded-2xl flex items-center justify-center 
        shadow-lg shadow-[#E76F8A]/25
        relative overflow-hidden
      `}>
                <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent"></div>
                <svg className="w-1/2 h-1/2 text-white relative z-10" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.94-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
                </svg>
            </div>
            <span className={`font-bold tracking-tight font-poppins ${size === 'lg' ? 'text-4xl' : size === 'md' ? 'text-2xl' : 'text-xl'}`}>
                <span className="text-[#1E1E2F]">
                    FEM
                </span>
                <span className="text-[#E76F8A]">
                    CARE
                </span>
            </span>
        </div>
    );
};