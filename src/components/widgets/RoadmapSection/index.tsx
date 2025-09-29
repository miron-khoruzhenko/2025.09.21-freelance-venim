"use client";

import { SectionTitle } from '@/components/shared/SectionTitle';
import { Button } from '@/components/shared/Button';
import { roadmapData } from './data';
import React from 'react';

export const RoadmapSection = () => {
  return (
    <section className="py-16 bg-[#F8F8F8] md:py-24">
      <div className="container flex flex-col items-center px-4 mx-auto">
        <SectionTitle>
          Юридический маршрут к серьезной победе
        </SectionTitle>

        <div className="w-full mt-16 md:mt-20">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between lg:gap-0">
            {roadmapData.map((step, index) => (
              <React.Fragment key={step.numeral}>
                <div className="flex items-start w-full gap-6 lg:flex-col lg:items-center lg:text-center lg:max-w-[200px]">
                  
                  <div className="relative flex-shrink-0">
                    <div className="
                      w-16 h-16 lg:w-[12.5rem] lg:h-[12.5rem] bg-primary rounded-full 
                      flex items-center justify-center text-white font-unbounded 
                      font-medium text-2xl lg:text-[6.25rem] leading-none"
                    >
                      {step.numeral}
                    </div>
                    
                    {/* Вертикальная линия для мобильной версии */}
                    {index < roadmapData.length - 1 && (
                      <div className="absolute top-full left-1/2 w-0.5 h-8 bg-primary/30 -translate-x-1/2 lg:hidden" />
                    )}
                  </div>

                  <div className="pt-1 lg:pt-0">
                    <h3 className="lg:mt-6 font-montserrat text-xl font-bold">{step.title}</h3>
                    <p className="mt-2 font-montserrat text-lg text-gray-600">{step.description}</p>
                  </div>
                </div>

                {/* Горизонтальная линия для десктопной версии */}
                {index < roadmapData.length - 1 && (
                  <div 
                    className="hidden lg:block flex-grow h-1 bg-primary mx-4 mt-[6.25rem]"
                    style={{ transform: 'translateY(-50%)' }} 
                  />
                )}
              </React.Fragment>
            ))}
          </div>
        </div>

        <Button className="mt-16 md:mt-20">
          Начать работу
        </Button>
      </div>
    </section>
  );
};