import { SectionTitle } from '@/components/shared/SectionTitle';
import { Button } from '@/components/shared/Button';
import { roadmapData } from './data';
import React from 'react';

export const RoadmapSection = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="container flex flex-col items-center px-4 mx-auto">
        <SectionTitle>
          Юридический маршрут к серьезной победе
        </SectionTitle>

        <div className="w-full mt-16 md:mt-20">
          <div className="flex flex-col items-center lg:flex-row lg:justify-between">
            {roadmapData.map((step, index) => (
              <React.Fragment key={step.numeral}>
                <div className="
                  w-[12.5rem] h-[12.5rem] bg-primary rounded-full 
                  flex items-center justify-center text-white font-unbounded 
                  font-medium text-[6.25rem] leading-none flex-shrink-0"
                >
                  {step.numeral}
                </div>

                {index < roadmapData.length - 1 && (
                  <>
                    <div className="hidden lg:block mx-4 flex-grow h-1 bg-primary"></div>
                    <div className="lg:hidden w-1 h-16 bg-primary my-4"></div>
                  </>
                )}
              </React.Fragment>
            ))}
          </div>

          <div className="flex flex-col mt-6 lg:flex-row lg:justify-between">
            {roadmapData.map((step) => (
              <div key={step.title} className="text-center lg:w-[12.5rem] flex-shrink-0 mb-8 lg:mb-0">
                <h3 className="font-montserrat text-xl font-bold">{step.title}</h3>
                <p className="mt-2 font-montserrat text-lg text-gray-600">{step.description}</p>
              </div>
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