"use client";

import { useState } from 'react';
import { Accordion } from '@/components/shared/Accordion';
import { experienceAccordionData } from './data';
import { PracticeSlider } from '@/components/widgets/PracticeSlider';
import { PracticeCase } from '@/types/interfaces';
import { PracticeCaseModal } from '../PracticeCaseModal';

// Импортируем данные со ссылками-якорями
import { individualPracticeLinks } from '@/components/widgets/ExperienceHero/data'; 

export const ExperienceAccordion = () => {
  const [selectedCase, setSelectedCase] = useState<PracticeCase | null>(null);

  const handleOpenModal = (caseData: PracticeCase) => {
    setSelectedCase(caseData);
  };

  const handleCloseModal = () => {
    setSelectedCase(null);
  };

  // Объединяем данные: добавляем id к каждому элементу аккордеона
  const accordionItems = experienceAccordionData.map(item => {
    // Находим соответствующую ссылку, чтобы получить id
    const linkData = individualPracticeLinks.find(link => link.label === item.title);
    // Извлекаем id из url (убираем #)
    const id = linkData ? linkData.url.substring(1) : undefined;

    return {
      id: id, // Добавляем id
      title: item.title,
      content: (
        item.cases.length > 0 ? (
          <PracticeSlider onCaseSelect={handleOpenModal} cases={item.cases} paginationClass={`swiper-pagination-faq-dropdown`} />
        ) : (
          <p className="p-8 text-center text-gray-500">Примеры дел по этому направлению скоро появятся.</p>
        )
      )
    };
  });

  return (
    <>
      <section className="py-16 bg-white">
        <div className="container px-4 mx-auto">
          <h2 className="text-2xl font-semibold mb-8">Для частных лиц</h2>

          <Accordion items={accordionItems} defaultOpenIndex={1} />

        </div>
      </section>
      <PracticeCaseModal
        isOpen={!!selectedCase}
        onClose={handleCloseModal}
        caseData={selectedCase}
      />
    </>
  );
};