// src/components/widgets/ExperienceAccordion/index.tsx
"use client";

import { Accordion } from '@/components/shared/Accordion'; // 1. Импортируем новый компонент
import { experienceAccordionData } from './data';
import { PracticeSlider } from '@/components/widgets/PracticeSlider';

export const ExperienceAccordion = () => {
  // 2. Преобразуем данные в нужный формат
  const accordionItems = experienceAccordionData.map(item => ({
    title: item.title,
    content: (
      item.cases.length > 0 ? (
        <PracticeSlider cases={item.cases} paginationClass={`swiper-pagination-faq-dropdown`} />
      ) : (
        <p className="p-8 text-center text-gray-500">Примеры дел по этому направлению скоро появятся.</p>
      )
    )
  }));
  
  return (
    <section className="py-16 bg-white">
      <div className="container px-4 mx-auto">
        <h2 className="text-2xl font-semibold mb-8">Для частных лиц</h2>
        
        {/* 3. Используем новый компонент */}
        <Accordion items={accordionItems} defaultOpenIndex={1} />
        
      </div>
    </section>
  );
};