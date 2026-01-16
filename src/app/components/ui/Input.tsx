import React from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

export function Input({ label, error, className = '', ...props }: InputProps) {
  return (
    <div className="w-full">
      {label && (
        <label className="block mb-2 text-sm text-[#2C3E50]">
          {label}
        </label>
      )}
      <input
        className={`w-full px-4 py-3 bg-white border border-[#E5E7EB] rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#0A2647]/20 focus:border-[#0A2647] ${error ? 'border-red-500' : ''} ${className}`}
        {...props}
      />
      {error && (
        <p className="mt-1 text-sm text-red-500">{error}</p>
      )}
    </div>
  );
}
