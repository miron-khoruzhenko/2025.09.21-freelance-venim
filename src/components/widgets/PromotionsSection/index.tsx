"use client";

import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import { promosForAll, promosForBusiness, Promotion } from './data';
import Image from 'next/image';

import 'swiper/css';
import 'swiper/css/pagination';

type ActiveTab = 'all' | 'business';

// Функция для стилизации заголовка (первое слово - красное)
const formatTitle = (title: string) => {
  const words = title.split(' ');
  const firstWord = words.shift();
  return (
    <>
      <span className="text-primary">{firstWord}</span>
      {' '}
      {words.join(' ')}
    </>
  );
};

const PromoCard = ({ promo }: { promo: Promotion }) => {
  return (
    <div className="relative aspect-square bg-white p-8 rounded-lg shadow h-full overflow-hidden min-h-[300px]">
      <Image
        src={promo.img}
        alt=""
        width={300}
        height={300}
        className="absolute -bottom-0 right-0 -z-0"
      />
      <h3 className="relative z-10 font-montserrat text-2xl font-bold text-primary">
        {formatTitle(promo.title)}
      </h3>
      <p className="relative z-10 mt-4 text-gray-600 text-lg">{promo.description}</p>
    </div>
  );
};

// Функция для разделения массива на страницы
const chunkArray = <T,>(array: T[], size: number): T[][] => {
  const chunkedArr: T[][] = [];
  for (let i = 0; i < array.length; i += size) {
    chunkedArr.push(array.slice(i, i + size));
  }
  return chunkedArr;
};

export const PromotionsSection = () => {
  const [activeTab, setActiveTab] = useState<ActiveTab>('all');
  const currentPromos = activeTab === 'all' ? promosForAll : promosForBusiness;
  const promoPages = chunkArray(currentPromos, 6); // По 6 акций на слайд

  const tabButtonClasses = (tabName: ActiveTab) =>
    `w-full p-6 rounded-lg font-semibold text-lg transition-colors duration-300 ${
      activeTab === tabName
        ? 'bg-primary text-white shadow-lg'
        : 'bg-gray-200 text-black hover:bg-gray-300'
    }`;

  return (
    <section className="bg-[#E8E8E8] py-24">
      <div className="container px-4 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          <button onClick={() => setActiveTab('all')} className={tabButtonClasses('all')}>
            Для всех категорий клиентов
          </button>
          <button onClick={() => setActiveTab('business')} className={tabButtonClasses('business')}>
            Для бизнеса
          </button>
        </div>

        <div className="mt-16">
          <Swiper
            modules={[Pagination]}
            spaceBetween={32}
            slidesPerView={1}
            pagination={{ clickable: true, el: '.swiper-pagination-promo' }}
          >
            {promoPages.map((page, pageIndex) => (
              <SwiperSlide key={pageIndex}>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {page.map((promo) => (
                    <div key={promo.title}>
                      <PromoCard promo={promo} />
                    </div>
                  ))}
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div className="flex justify-center mt-12">
          <div className="swiper-pagination-promo flex gap-2" />
        </div>
      </div>
    </section>
  );
};