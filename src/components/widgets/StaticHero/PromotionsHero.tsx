"use client";

import Image from "next/image";
import Link from 'next/link';
import { Button } from "@/components/shared/Button";
import { PATHS } from "@/config/paths";

const heroDataPromotion = {
  title: "Мы любим радовать клиентов",
  description: "Юридические услуги могут быть не только надежными, но и приятными. Для друзей и партнёров VENIM мы приготовили особые привилегии",
  features: [
    "Скидки и подарки",
    "Доступ к предложениям от партнеров",
    "Эксклюзивные закрытые мероприятия ",
  ],
  buttonText: "Записаться на консультацию \n и стать частью сообщества VENIM",
};

export function PromotionStaticHero({isBusiness=false}:{isBusiness?:boolean}) {
  return (
    <section className="relative w-full h-[70vh] min-h-[600px] md:h-auto md:min-h-0 md:aspect-[2/1] bg-gray-100 text-black overflow-hidden">
      {/* Фоновое изображение */}
      <Image
        src={'/images/PromotionPage/bg_img.png'}
        alt="Hero Background"
        fill
        priority
        sizes="100vw"
        className="object-cover object-right"
      />

      <div className="relative z-10 container mx-auto px-4 h-full flex items-center">
        <div className="w-full md:w-1/2">
          {/* Хлебные крошки */}
          <div className="text-sm text-gray-600 mb-4">
            <Link href="/" className="hover:text-primary">Главная</Link>
            <span> &gt; </span>
            <span>{isBusiness ? "Услуги для бизнеса" : "Услуги для частных лиц"}</span>
          </div>
          
          {/* Основной контент */}
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
            Мы любим <span className="text-primary">радовать</span> клиентов
          </h1>
          <p className="mt-4 text-base md:text-lg max-w-xl">
            Юридические услуги могут быть не только надежными, но и приятными. Для друзей и партнёров VENIM мы приготовили особые привилегии
          </p>

          {/* Преимущества */}
          <div className="mt-8 flex flex-col gap-4">
            {heroDataPromotion.features.map((feature, i) => (
              <div key={i} className="flex items-center gap-3">
                <Image src="/images/1.Hero/check_box_icon.png" alt="check" width={24} height={24} />
                <span className="text-sm md:text-base">{feature}</span>
              </div>
            ))}
          </div>

          {/* Кнопка и ссылки */}
          <div className="mt-10 ">
            <Button className="w-full !py-4">{heroDataPromotion.buttonText.split("\n").map((line, index) => (
              <span key={index}>{line}<br /></span>
            ))}</Button>
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