import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'ghost';
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({ 
  variant = 'primary', 
  children, 
  className = '', 
  ...props 
}) => {
  const baseStyles = "inline-flex items-center justify-center rounded-full font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black disabled:opacity-50 disabled:pointer-events-none";
  
  const variants = {
    primary: "bg-black text-white hover:bg-gray-800 px-6 py-3 text-sm tracking-wide",
    ghost: "bg-transparent text-muted-black hover:text-black px-4 py-2 text-sm hover:bg-black/5",
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${className}`} 
      {...props}
    >
      {children}
    </button>
  );
};