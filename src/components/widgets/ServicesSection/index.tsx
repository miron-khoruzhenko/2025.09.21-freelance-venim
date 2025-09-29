"use client";

import { useState } from 'react';
import Link from 'next/link';
import { SectionTitle } from '@/components/shared/SectionTitle';
import { servicesForIndividuals, servicesForBusiness, Service } from './data';
import { AnimatePresence, motion } from 'framer-motion';
import Image from 'next/image';
import { Button } from '@/components/shared/Button';

type ActiveTab = 'individuals' | 'business';

const ServiceCard = ({ service }: { service: Service }) => {
  const isFeatured = service.isFeatured ?? false;

  const cardContent = (
    <div
      className={`
        group relative rounded-lg p-[42px] transition-all duration-300 aspect-square ease-in-out cursor-pointer
        overflow-hidden z-0 h-full flex flex-col
        ${isFeatured ? "bg-primary text-white" : "bg-[#DCDEDE] text-black hover:bg-primary hover:text-white hover:-translate-y-4"}
      `}
    >
      <Image
        alt=""
        className="absolute bottom-0 right-0 -z-10 transition-opacity duration-300 group-hover:opacity-60"
        height={300}
        src={service.bgIcon}
        width={300}
      />
      <h3 className="font-montserrat text-primary group-hover:text-white text-xl font-bold mb-7">
        {service.title}
      </h3>
      <div className="relative pl-4">
        <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-primary group-hover:bg-white transition-colors duration-300" />
        <ul className="space-y-3">
          {service.items.map((item) => (
            <li key={item} className="text-sm">
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );

  if (service.url) {
    return (
      <Link href={service.url} className="block h-full">
        {cardContent}
      </Link>
    );
  }

  return cardContent;
};

export const ServicesSection = ({
  isButton = false,
  category
} : {
  isButton?: boolean,
  category?: 'individuals' | 'business'
})  => {
  const [activeTab, setActiveTab] = useState<ActiveTab>(category || "individuals");
  const currentServices = activeTab === "individuals" ? servicesForIndividuals : servicesForBusiness;

  const tabButtonClasses = (tabName: ActiveTab) =>
    `px-12 py-4 w-full rounded-lg font-semibold transition-colors duration-300 text-lg ${
      activeTab === tabName
        ? "bg-primary text-white shadow-lg"
        : "bg-[#DCDEDE] text-black hover:bg-gray-300"
    }`;

  return (
    <section className="pt-48 pb-48 bg-white">
      <div className="container px-4 mx-auto">
        <SectionTitle className="mb-24">Услуги {category ? (category === 'individuals' ? 'для частных лиц' : 'для бизнеса') : ''}</SectionTitle>
        {!category && <div className="flex flex-col lg:flex-row justify-center gap-4 md:gap-8">
          <button className={tabButtonClasses("individuals")} onClick={() => setActiveTab("individuals")}>
            Для частных лиц
          </button>
          <button className={tabButtonClasses("business")} onClick={() => setActiveTab("business")}>
            Для бизнеса
          </button>
        </div>}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            animate={{ opacity: 1, y: 0 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-[96px]"
            exit={{ opacity: 0, y: -20 }}
            initial={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.4 }}
          >
            {currentServices.map((service) => (
              <ServiceCard key={service.title} service={service} />
            ))}
          </motion.div>
        </AnimatePresence>
        {isButton ? 
        <p className="my-20 lg:my-44 font-unbounded text-2xl lg:text-5xl font-semibold text-center">
          Мы <span className="text-primary">надежный партнер</span> для наших <br className="hidden lg:block" /> клиентов, предлагаем{" "}
          <span className="text-primary">прозрачные<br className="hidden lg:block" />решения</span> и{" "}
          <span className="text-primary">высококлассную юридическую <br className="hidden lg:block" />поддержку</span> при строгом соблюдении <br />
          конфиденциальности
        </p> :
        <div className="flex justify-center mt-24">
        <Button className=''>Получить бесплатную консультацию</Button>
        </div>
        }
      </div>
    </section>
  );
};