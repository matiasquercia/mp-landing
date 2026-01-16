import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

export function Button({ 
  variant = 'primary', 
  size = 'md', 
  className = '', 
  children, 
  ...props 
}: ButtonProps) {
  const baseStyles = 'inline-flex items-center justify-center gap-2 rounded-lg transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed';
  
  const variants = {
    primary: 'bg-[#2F2A29] text-white hover:bg-[#2F2A29]/90 active:bg-[#2F2A29]/80 shadow-sm hover:shadow-md',
    secondary: 'bg-[#D6ECBA] text-[#2F2A29] hover:bg-[#D6ECBA]/90 active:bg-[#D6ECBA]/80 shadow-sm hover:shadow-md',
    ghost: 'bg-transparent text-[#2F2A29] hover:bg-[#D6ECBA]/20 active:bg-[#D6ECBA]/30 border border-[#2F2A29]/20'
  };
  
  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3',
    lg: 'px-8 py-4 text-lg'
  };
  
  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}