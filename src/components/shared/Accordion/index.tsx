// src/components/shared/Accordion/index.tsx
"use client";

import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

// --- Внутренний компонент для одного элемента ---
// (Обычно его не экспортируют, он используется только внутри Accordion)
const AccordionItem = ({
  title,
  children,
  isOpen,
  onClick
}: {
  title: string;
  children: React.ReactNode;
  isOpen: boolean;
  onClick: () => void;
}) => {
  return (
    <div className="rounded-2xl overflow-hidden ">
      <button
        onClick={onClick}
        className="flex items-center justify-between w-full text-left p-11 bg-[#D9D9D9] hover:bg-gray-200 transition-colors"
      >
        <h3 className="text-3xl font-semibold text-gray-800">{title}</h3>
        <motion.div animate={{ rotate: isOpen ? 180 : 0 }} transition={{ duration: 0.3 }}>
          <ChevronDown className="w-6 h-6 text-primary" />
        </motion.div>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: 'easeInOut' }}
            className="overflow-hidden bg-[#D9D9D9] text-3xl p-10"
          >
            {/* Здесь отображается любой вложенный контент */}
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};


// --- Основной компонент-обертка ---
export const Accordion = ({ items, defaultOpenIndex = 0 }: { items: { title: string, content: React.ReactNode }[], defaultOpenIndex?: number | null }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(defaultOpenIndex);

  return (
    <div className="rounded-2xl overflow-hidden flex-col flex gap-10">
      {items.map((item, index) => (
        <AccordionItem
          key={index}
          title={item.title}
          isOpen={openIndex === index}
          onClick={() => setOpenIndex(openIndex === index ? null : index)}
        >
          {item.content}
        </AccordionItem>
      ))}
    </div>
  );
};