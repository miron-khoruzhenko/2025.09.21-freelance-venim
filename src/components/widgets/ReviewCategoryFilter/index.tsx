// src/components/widgets/ReviewCategoryFilter/index.tsx
"use client";

import { TabbedLinkList } from '@/components/shared/TabbedLinkList';
// Мы используем те же категории, что и в практике, поэтому импортируем их
import { individualPracticeLinks, businessPracticeLinks } from '@/components/widgets/ExperienceHero/data';

const tabs = [
  { id: 'individuals', label: 'Отзывы по услугам для частных лиц' },
  { id: 'business', label: 'Отзывы по услугам для бизнеса' },
];

const data = {
  individuals: individualPracticeLinks,
  business: businessPracticeLinks,
};

export const ReviewCategoryFilter = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container px-4 mx-auto">
        <TabbedLinkList tabs={tabs} data={data} initialTab="individuals" />
      </div>
    </section>
  );
};