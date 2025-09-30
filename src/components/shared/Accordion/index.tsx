"use client";

import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const AccordionItem = ({
  id, // Добавляем id в пропсы
  title,
  children,
  isOpen,
  onClick
}: {
  id?: string; // id опционален
  title: string;
  children: React.ReactNode;
  isOpen: boolean;
  onClick: () => void;
}) => {
  return (
    // Присваиваем id здесь
    <div id={id} className="rounded-2xl overflow-hidden group">
      <button
        onClick={onClick}
        className="flex items-center justify-between w-full text-left p-9 bg-[#D9D9D9] transition-colors"
      >
        <h3 className="text-3xl font-semibold text-gray-800">{title}</h3>
        <motion.div animate={{ rotate: isOpen ? 180 : 0 }} transition={{ duration: 0.3 }}>
          <ChevronDown className="w-16 h-16 text-primary group-hover:scale-150 transition-transform" />
        </motion.div>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="content"
            initial="collapsed"
            animate="open"
            exit="collapsed"
            variants={{
              open: { opacity: 1, height: 'auto' },
              collapsed: { opacity: 0, height: 0 }
            }}
            transition={{ duration: 0.4, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <div className="bg-[#D9D9D9] text-3xl p-10">
              {children}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

// Обновляем тип для items, добавляя опциональный id
export const Accordion = ({ items, defaultOpenIndex = 0 }: { items: { id?: string, title: string, content: React.ReactNode }[], defaultOpenIndex?: number | null }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(defaultOpenIndex);

  return (
    <div className="rounded-2xl overflow-hidden flex-col flex gap-10">
      {items.map((item, index) => (
        <AccordionItem
          key={index}
          id={item.id} // Передаем id в AccordionItem
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