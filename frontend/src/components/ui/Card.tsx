import React from 'react';

interface CardProps {
    children: React.ReactNode;
    className?: string;
    hover?: boolean;
}

export const Card: React.FC<CardProps> = ({
    children,
    className = '',
    hover = false
}) => {
    return (
        <div className={`
      bg-white/90 backdrop-blur-xl border border-white/30 
      rounded-3xl shadow-2xl shadow-[#E76F8A]/5
      ${hover ? 'hover:shadow-3xl hover:-translate-y-2 transition-all duration-500' : ''}
      ${className}
    `}>
            {children}
        </div>
    );
};