"use client";

import { SectionTitle } from '@/components/shared/SectionTitle';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import { giftSlidesData } from './data';
import Image from 'next/image';

import 'swiper/css';
import 'swiper/css/pagination';

export const GiftsSection = () => {
  return (
    <section className="bg-[#E8E8E8] py-24">
      <div className="container px-4 mx-auto">
        <SectionTitle className="text-center">
          Фирменные подарки для постоянных клиентов
        </SectionTitle>

        <div className="mt-16">
          <Swiper
            modules={[Pagination]}
            spaceBetween={32}
            slidesPerView={1}
            pagination={{ clickable: true, el: '.swiper-pagination-gifts' }}
          >
            {giftSlidesData.map((slide, slideIndex) => (
              <SwiperSlide key={slideIndex}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  {slide.map((image, imageIndex) => (
                    <div key={imageIndex} className="bg-white p-4 rounded-lg shadow-md">
                      <Image
                        src={image.src}
                        alt={image.alt}
                        width={600}
                        height={400}
                        className="w-full h-auto object-cover rounded-md aspect-[3/2]"
                      />
                    </div>
                  ))}
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        
        <div className="flex justify-center mt-12">
          <div className="swiper-pagination-gifts flex items-center justify-center gap-2" />
        </div>
      </div>
    </section>
  );
};