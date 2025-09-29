// src/components/widgets/ExperienceAccordion/index.tsx
"use client";

import { Accordion } from '@/components/shared/Accordion'; // 1. Импортируем новый компонент
import { experienceAccordionData } from './data';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import Image from 'next/image';
import { reviewsData } from '../ReviewsSection/data';
import { Star } from 'lucide-react';
import { twMerge as cn } from 'tailwind-merge';
export const ReviewsAccordion = () => {
  // 2. Преобразуем данные в нужный формат
  const accordionItems = experienceAccordionData.map(item => ({
    title: item.title,
    content: (
      item.cases.length > 0 ? (
        <>
                  <Swiper
            modules={[Pagination]}
            spaceBetween={32}
            slidesPerView={1}
            pagination={{ clickable: true, el: '.swiper-pagination-custom' }}
            breakpoints={{
              768: {
                slidesPerView: 2,
              },
            }}
          >
            {reviewsData.map((review) => (
              <SwiperSlide key={review.name}>
                <div className={cn("relative mx-4 p-10 rounded-lg shadow-lg overflow-hidden h-[36.625rem] flex flex-col bg-white")}>
                  <Image src="/images/6.Reviews/bg_img.png" alt="Venim logo background" width={400} height={400} className="absolute inset-0 m-auto -z-0" />
                  <div className="relative z-10 flex-grow">
                    <div className="flex items-center gap-4">
                      <div className="flex">
                        {[...Array(review.rating)].map((_, i) => <Star key={i} className="text-yellow-500 fill-yellow-500" />)}
                        {[...Array(5 - review.rating)].map((_, i) => <Star key={i} className="text-gray-300" />)}
                      </div>
                      <p className="font-normal font-montserrat text-xl">{review.name}</p>
                    </div>
                    <p className="mt-2 text-sm text-gray-500">{review.date}</p>
                    <p className="mt-4 text-xl text-gray-700">{review.text}</p>
                  </div>
                  <p className="relative z-10 text-primary font-normal mt-auto font-montserrat">{review.category}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="swiper-pagination-custom mt-12 mb-14" />
          
          </>
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