// src/components/shared/Button.tsx

import React from 'react';
import { twMerge as cn } from 'tailwind-merge';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
}

export const Button = ({
  children,
  onClick,
  className = '',
  type = 'button',
}: ButtonProps) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={cn(`
        bg-primary text-white rounded-[10px] 
        px-8 py-4 md:px-[105px] md:py-9 
        font-semibold text-lg
        transition-colors duration-300 hover:bg-primary-dark
      `, className)}
    >
      {children}
    </button>
  );
};