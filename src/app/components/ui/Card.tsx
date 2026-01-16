import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

export function Card({ children, className = '', hover = false }: CardProps) {
  const hoverStyles = hover ? 'hover:shadow-lg hover:-translate-y-1 cursor-pointer' : '';
  
  return (
    <div className={`bg-white rounded-xl shadow-sm border border-[#E5E7EB]/50 transition-all duration-300 ${hoverStyles} ${className}`}>
      {children}
    </div>
  );
}
