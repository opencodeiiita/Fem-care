import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary' | 'accent' | 'outline' | 'ghost';
    size?: 'sm' | 'md' | 'lg';
    children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
    variant = 'primary',
    size = 'md',
    children,
    className = '',
    ...props
}) => {
    const baseClasses = 'inline-flex items-center justify-center font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed font-inter';

    const variants = {
        primary: 'bg-[#E76F8A] text-white hover:bg-[#d55a7a] focus:ring-[#E76F8A] shadow-lg hover:shadow-xl',
        secondary: 'bg-[#7C6ED5] text-white hover:bg-[#6c5ce7] focus:ring-[#7C6ED5] shadow-lg hover:shadow-xl',
        accent: 'bg-[#4FB6B0] text-white hover:bg-[#3da39d] focus:ring-[#4FB6B0] shadow-lg hover:shadow-xl',
        outline: 'border-2 border-[#E76F8A] text-[#E76F8A] hover:bg-[#E76F8A] hover:text-white focus:ring-[#E76F8A]',
        ghost: 'text-[#5A5A6A] hover:text-[#E76F8A] hover:bg-[#FFF9FB] focus:ring-[#E76F8A]'
    };

    const sizes = {
        sm: 'px-4 py-2 text-sm rounded-lg',
        md: 'px-6 py-3 text-base rounded-xl',
        lg: 'px-8 py-4 text-lg rounded-2xl'
    };

    return (
        <button
            className={`${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`}
            {...props}
        >
            {children}
        </button>
    );
};