"use client";

import Image from "next/image";
import Link from 'next/link';
import { Button } from "@/components/shared/Button";
import { PATHS } from "@/config/paths";
import { cn } from "@/utils/cn";

const heroDataIndividual = {
  bgImage: "/images/ServicesPage/bg_img.png",
  title: <>Все виды юридических <br />услуг для <span className="text-primary">частных лиц</span></>,
  description: "Юрист, который говорит с вами на одном языке. Помогаем решать правовые вопросы быстро, грамотно и с уважением к вашей ситуации. От консультации до суда — рядом на каждом этапе.",
  features: [
    "Анализируем риски, предлагаем несколько сценариев, объясняем, как лучше действовать",
    "Вы работаете не с одним юристом, а с командой слаженных профессионалов",
    "Объясняем сложное простым языком — без лишней “воды”",
  ],
  buttonText: "Обсудить вашу задачу",
};

const heroDataBusiness = {
  bgImage: "/images/ServicesPage/bg_img2.png",
  // title: <>Все виды юридических <br />услуг для <span className="text-primary">частных лиц</span></>,
  title: <><span className="text-primary">Юридические услуги для бизнеса: </span><br /> от проверок до судов</>,
  description: "Работаем как внешний юрист, но с вовлечённостью внутреннего. Помогаем грамотно оформлять сделки, решать споры, снижать риски и быть спокойными за правовую сторону бизнеса.",
  features: [
    "Анализируем риски, предлагаем несколько сценариев, объясняем, как лучше действовать",
    "Вы работаете не с одним юристом, а с командой слаженных профессионалов",
    "Объясняем сложное простым языком — без лишней “воды”",
  ],
  buttonText: "Обсудить вашу задачу",
};

export function StaticHero({isBusiness=false}:{isBusiness?:boolean}) {
  return (
    <section className="relative w-full h-[70vh] min-h-[600px] md:h-auto md:min-h-0 md:aspect-[2/1] bg-gray-100 text-black overflow-hidden">
      {/* Фоновое изображение */}
      <Image
        src={isBusiness ? heroDataBusiness.bgImage : heroDataIndividual.bgImage}
        alt="Hero Background"
        fill
        priority
        sizes="100vw"
        className="object-cover object-right"
      />

      <div className="relative z-10 container mx-auto px-4 h-full flex items-center">
        <div className={cn("w-full md:w-1/2 pt-20", isBusiness && "pt-32")}>
          {/* Хлебные крошки */}
          <div className="text-sm text-gray-600 mb-4">
            <Link href="/" className="hover:text-primary">Главная</Link>
            <span> &gt; </span>
            <span>{isBusiness ? "Услуги для бизнеса" : "Услуги для частных лиц"}</span>
          </div>
          
          {/* Основной контент */}
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
            {isBusiness ? heroDataBusiness.title : heroDataIndividual.title}
          </h1>
          <p className="mt-4 text-base md:text-lg max-w-xl">
            {heroDataIndividual.description}
          </p>

          {/* Преимущества */}
          <div className="mt-8 flex flex-col gap-4">
            {heroDataIndividual.features.map((feature, i) => (
              <div key={i} className="flex items-center gap-3">
                <Image src="/images/1.Hero/check_box_icon.png" alt="check" width={24} height={24} />
                <span className="text-sm md:text-base">{feature}</span>
              </div>
            ))}
          </div>

          {/* Кнопка и ссылки */}
          <div className="mt-10 max-w-md">
            <Button className="w-full !py-4">{heroDataIndividual.buttonText}</Button>
            <div className="mt-6 flex justify-center gap-8 text-sm font-medium">
              <Link href={PATHS.reviews} className="underline hover:text-primary">Почитать отзывы</Link>
              <Link href={PATHS.experience} className="underline hover:text-primary">Посмотреть случаи из нашей практики</Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}