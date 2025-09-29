"use client";

import { SectionTitle } from '@/components/shared/SectionTitle';
import Image from 'next/image';
import Marquee from "react-fast-marquee";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import { Star } from 'lucide-react';
import { marqueeLogos, reviewsData } from './data';

import 'swiper/css';
import 'swiper/css/pagination';
import Link from 'next/link';
import { PATHS } from '@/config/paths';

import { twMerge as cn } from 'tailwind-merge';

export const ReviewsSection = ({
  isInverted = false,
}:{
  isInverted?: boolean;
}) => {
  return (
    <section className={cn("py-[11.875rem]", isInverted ? 'bg-white pt-0' : 'bg-[#DCDEDE]')}>
      <div className="container px-4 mx-auto">
        
        <div className="flex flex-col md:flex-row md:items-end md:gap-6">
          <SectionTitle>Отзывы</SectionTitle>
          <div className="mt-4 md:mt-0 flex items-end justify-start gap-4">
            <p className="font-montserrat font-light italic text-xl md:text-2xl leading-none ">
              Свыше 1000 отзывов на разных платформах. Проверить — по клику на логотипы
            </p>
            <Image src="/images/click.svg" alt="click icon" width={64} height={64} className="mt-2 w-16 h-16 flex-shrink-0" />
          </div>
        </div>

        <div className={cn("mt-8 h-[4.6875rem] py-4 rounded-lg", isInverted ? "bg-[#DDDEDE]" : "bg-white")}>
          <Marquee gradient={true} >
            {marqueeLogos.concat(marqueeLogos).map((logo, index) => (
              <div key={index} className="mx-12 flex items-center h-full">
                <Image src={logo.src} alt={logo.alt} height={40} width={100} style={{ objectFit: 'contain' }} />
              </div>
            ))}
          </Marquee>
        </div>

        <div className="mt-12">
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
                <div className={cn("relative p-10 rounded-lg shadow-lg overflow-hidden h-[36.625rem] flex flex-col", isInverted ? "bg-[#DCDEDE]" : "bg-white")}>
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
        </div>

        {/* Обновленный блок пагинации и ссылки */}
        {!isInverted &&<div className="mt-24">
          <div className="swiper-pagination-custom" />
          
          <div className="mt-[5.625rem]">
            <Link href={PATHS.reviews} className="inline-flex items-center gap-4 group border-b-2 border-primary pb-3">
              <span className="font-semibold text-lg">
                Читать больше отзывов по 25 направлениям права
              </span>
              <Image 
                src="/images/6.Reviews/arrow.svg" 
                alt="arrow" 
                width={40} 
                height={20} 
                className="transition-transform group-hover:translate-x-2"
              />
            </Link>
          </div>
        </div>}
      </div>
    </section>
  );
};