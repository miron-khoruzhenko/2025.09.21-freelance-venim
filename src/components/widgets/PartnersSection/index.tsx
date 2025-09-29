"use client";

import { SectionTitle } from '@/components/shared/SectionTitle';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import { partnersData, Partner } from './data';
import Image from 'next/image';
import React from 'react';

import 'swiper/css';
import 'swiper/css/pagination';

const PartnerCard = ({ partner }: { partner: Partner }) => {
  const content = (
    <div className="h-full w-full flex items-center justify-center p-8 bg-white rounded-lg shadow-md transition-shadow hover:shadow-xl">
      <Image
        src={partner.logo}
        alt={partner.name}
        width={200}
        height={80}
        style={{ objectFit: 'contain' }}
      />
    </div>
  );

  if (partner.url) {
    return (
      <a href={partner.url} target="_blank" rel="noopener noreferrer">
        {content}
      </a>
    );
  }
  return content;
};

const chunkArray = <T,>(array: T[], size: number): T[][] => {
  const chunkedArr: T[][] = [];
  for (let i = 0; i < array.length; i += size) {
    chunkedArr.push(array.slice(i, i + size));
  }
  return chunkedArr;
};

export const PartnersSection = () => {
  const partnerPages = chunkArray(partnersData, 6);

  return (
    <section id="partners" className="bg-[#DCDEDE] py-[11.875rem]">
      <div className="container px-4 mx-auto">
        <SectionTitle>Наши партнеры</SectionTitle>

        <div className="mt-16">
          <Swiper
            modules={[Pagination]}
            spaceBetween={32}
            slidesPerView={1}
            pagination={{ clickable: true, el: '.swiper-pagination-partners' }}
          >
            {partnerPages.map((page, pageIndex) => (
              <SwiperSlide key={pageIndex}>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
                  {page.map((partner) => (
                    <div key={partner.name} className="h-40">
                      <PartnerCard partner={partner} />
                    </div>
                  ))}
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        
        {/* ИСПРАВЛЕННЫЙ БЛОК ПАГИНАЦИИ */}
        <div className="swiper-pagination-partners flex justify-center items-center gap-2 mt-12 h-[23px]" />
        
      </div>
    </section>
  );
};