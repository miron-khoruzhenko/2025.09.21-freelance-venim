import React from 'react';

interface SectionTitleProps {
  children: React.ReactNode;
  className?: string;
}

export const SectionTitle = ({ children, className = '' }: SectionTitleProps) => {
  // Все стили из вашего задания, но без margin-bottom
  return (
    <h2
      className={`
        font-unbounded text-3xl md:text-5xl font-semibold text-primary leading-none
        ${className}
      `}
    >
      {children}
    </h2>
  );
};