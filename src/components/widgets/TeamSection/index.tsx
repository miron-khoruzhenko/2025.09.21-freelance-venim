"use client";

import { useState, useEffect, useRef } from 'react';
import { SectionTitle } from '@/components/shared/SectionTitle';
import Image from 'next/image';
import { AnimatePresence, motion, animate, useScroll } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { teamData, statsData, TeamMember, Stat } from './data';

// Компонент для анимированной цифры (без изменений)
function AnimatedStat({ stat }: { stat: Stat }) {
  const ref = useRef<HTMLParagraphElement>(null);
  const { ref: inViewRef, inView } = useInView({ threshold: 0.5, triggerOnce: true });

  useEffect(() => {
    if (inView && ref.current) {
      const controls = animate(0, stat.value, {
        duration: 2,
        ease: "easeOut",
        onUpdate(value) {
          let formattedValue = value.toFixed(stat.value % 1 !== 0 ? 1 : 0);
          if (stat.value >= 1000) {
            formattedValue = new Intl.NumberFormat('ru-RU').format(Math.round(value));
          }
          ref.current!.textContent = formattedValue;
        }
      });
      return () => controls.stop();
    }
  }, [inView, stat]);

  return (
    <div ref={inViewRef} className="text-center md:text-left">
      <p className="font-unbounded text-3xl md:text-5xl font-semibold text-primary">
        {stat.prefix}<span ref={ref}>0</span>{stat.suffix}
      </p>
      <p className="mt-2 text-sm text-gray-600 max-w-[200px] mx-auto md:mx-0">{stat.label}</p>
    </div>
  );
}

export const TeamSection = () => {
  const [selectedMember, setSelectedMember] = useState<TeamMember>(teamData[0]);
  const scrollRef = useRef(null);
  const { scrollXProgress } = useScroll({ container: scrollRef });

  return (
    <section className="py-16 bg-[#DCDEDE] md:py-24">
      <div className="container px-4 mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 items-start">

          {/* Левая колонка */}
          <div>
            <SectionTitle className='lg:mb-20'>Наша команда</SectionTitle>
            <p className="mt-6 text-gray-700">
              В нашей компании работают юристы с многолетним опытом. Множество выигранных дел и разнообразие практик - всё это сотрудники компании Venim.
            </p>

            {/* Горизонтальный скролл с большими фото */}
            <div className="mt-8">
              <div ref={scrollRef} className="flex gap-8 overflow-x-auto pb-4 hide-scrollbar">
                {teamData.map((member) => (
                  <button
                    key={member.id}
                    onClick={() => setSelectedMember(member)}
                    // ИЗМЕНЕНИЕ: Задаём ширину карточки. На больших экранах она равна 1/3 контейнера минус отступы.
                    className="flex flex-col items-center gap-3 flex-shrink-0 text-center group w-32 lg:w-auto lg:basis-[calc((100%-4rem)/3)]"
                  >
                    <Image
                      src={member.avatar}
                      alt={member.name}
                      width={128}
                      height={128}
                      className={`
                        rounded-full object-cover w-full h-auto aspect-square border-4 transition-all duration-300
                        ${selectedMember.id === member.id ? 'border-primary' : 'border-transparent group-hover:border-primary/50'}
                      `}
                    />
                    {/* ИЗМЕНЕНИЕ: Убрали фиксированную ширину с текста */}
                    <div>
                      <p className="font-semibold text-sm">{member.name.split(' ')[0]} {member.name.split(' ')[1]}</p>
                      <p className="text-sm text-gray-600">{member.name.split(' ')[2]}</p>
                    </div>
                  </button>
                ))}
              </div>
              {/* Индикатор прокрутки */}
              <div className="w-full h-1.5 bg-gray-300/70 rounded-full mt-4">
                <motion.div
                  className="h-1.5 bg-primary rounded-full"
                  style={{ scaleX: scrollXProgress, transformOrigin: 'left' }}
                />
              </div>
            </div>
          </div>

          {/* Правая колонка */}
          <div className="relative min-h-[600px] w-full">
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedMember.id}
                className="absolute inset-0"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, ease: 'easeInOut' }}
              >
                <Image src={selectedMember.largeImage} alt={selectedMember.name} fill sizes="50vw" className="object-cover rounded-lg shadow-xl" />
                {/* Карточка с информацией поверх фото */}
                <div className="absolute bottom-10 left-0 right-0 p-4 md:p-6 bg-white/80 backdrop-blur-md rounded-b-lg grid  grid-cols-1 lg:grid-cols-2">
                  <div className="">
                    <h3 className="text-xl md:text-2xl font-semibold">{selectedMember.name}</h3>
                    <p className="text-primary font-medium">{selectedMember.title}</p>
                  </div>

                  <ul className="mt-4 lg:mt-0 space-y-2 text-sm list-disc list-inside text-gray-700">
                    {selectedMember.details.map((detail, i) => <li key={i}>{detail}</li>)}
                  </ul>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Секция со статистикой */}
        <div className="mt-20 grid grid-cols-2 lg:grid-cols-4 gap-8">
          {statsData.map((stat, index) => (
            <AnimatedStat key={index} stat={stat} />
          ))}
        </div>
      </div>
    </section>
  );
};