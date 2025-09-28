// src/components/widgets/ValuesSection/index.tsx

import { SectionTitle } from '@/components/shared/SectionTitle';
import Image from 'next/image';
import { valuesData } from './data';

export const ValuesSection = () => {
  return (
    <section className="py-16 bg-[#DCDEDE] md:py-44">
      <div className="container px-4 mx-auto">
        <SectionTitle className="mb-16 md:mb-20">
          Наши ценности
        </SectionTitle>

        {/* Адаптивная сетка: 1, 2 или 4 колонки */}
        <div className="flex flex-col lg:flex-row justify-between">
          {valuesData.map((value) => (
            <div key={value.title} className="max-w-60">
              <Image 
                src={value.icon} 
                alt={value.title}
                width={64}
                height={64}
                className="h-28 w-28"
              />
              <h3 className="mt-6 font-montserrat text-xl font-bold text-gray-900 border-b-2 border-primary pb-3 mb-3">
                {value.title}
              </h3>
              {/* <div className="w-16 h-0.5 bg-primary my-4" /> */}
              <p className="font-montserrat text-lg text-gray-700">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};