import React from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    error?: string;
    icon?: React.ReactNode;
    rightIcon?: React.ReactNode;
}

export const Input: React.FC<InputProps> = ({
    label,
    error,
    icon,
    rightIcon,
    className = '',
    ...props
}) => {
    return (
        <div className="space-y-2">
            {label && (
                <label className="block text-sm font-semibold text-[#1E1E2F] font-inter">
                    {label}
                </label>
            )}
            <div className="relative">
                {icon && (
                    <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-[#5A5A6A]">
                        {icon}
                    </div>
                )}
                <input
                    className={`
            w-full px-4 py-4 ${icon ? 'pl-12' : ''} ${rightIcon ? 'pr-12' : ''} 
            bg-white border border-gray-200 rounded-2xl 
            text-[#1E1E2F] placeholder-[#9A9AA8] font-inter
            focus:border-[#E76F8A] focus:ring-4 focus:ring-[#E76F8A]/10 
            transition-all duration-200 outline-none
            hover:border-gray-300
            ${error ? 'border-red-500 focus:border-red-500 focus:ring-red-500/10' : ''}
            ${className}
          `}
                    {...props}
                />
                {rightIcon && (
                    <div className="absolute right-4 top-1/2 transform -translate-y-1/2 text-[#5A5A6A]">
                        {rightIcon}
                    </div>
                )}
            </div>
            {error && (
                <p className="text-sm text-red-600 font-medium font-inter">{error}</p>
            )}
        </div>
    );
};