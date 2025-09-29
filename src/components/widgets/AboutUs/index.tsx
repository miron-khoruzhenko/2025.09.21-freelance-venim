// src/components/widgets/AboutUs/index.tsx

import Image from "next/image";
import { PlayCircle } from "lucide-react";

import { SectionTitle } from "@/components/shared/SectionTitle";
import { ANCHORS } from "@/config/anchors";

export const AboutUs = () => {
  return (
    // Responsive padding `py` для секции
    <section id={ANCHORS.about} className="py-16 md:py-24 lg:py-[185px]">
      <div className="container mx-auto px-4">
        {/* Здесь мы используем SectionTitle и задаем ему нижний отступ */}
        <SectionTitle className="mb-16 md:mb-[86px]">
          Коротко о нас
        </SectionTitle>

        {/* Сетка для разделения на 2 колонки */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-60 items-start">
          {/* Левая колонка с текстом */}
          <div className="flex flex-col gap-6 text-gray-800 text-base md:text-xl">
            <p>
              Мы <strong className="text-primary">более 10 лет</strong> помогаем
              частным и корпоративным клиентам решать юридические вопросы в
              Санкт-Петербурге и по всей России.
            </p>
            <p>
              За это время мы заслужили репутацию{" "}
              <strong className="text-primary">надёжных специалистов</strong>,
              способных справляться с задачами любой сложности — от консультаций
              до судебной защиты.
            </p>
            <p>
              Каждое дело требует{" "}
              <strong className="text-primary">индивидуального подхода</strong>,
              и мы всегда предлагаем чёткую{" "}
              <strong className="text-primary">стратегию</strong>, прозрачный
              процесс и максимальную отдачу от команды.
            </p>
            <p>
              Нам важно не просто «отработать» — мы стремимся к результату,
              который действительно{" "}
              <strong className="text-primary">решает проблему клиента</strong>.
            </p>
          </div>

          {/* Правая колонка с видео */}
          <div className="flex flex-col items-start gap-4 h-full">
            <div className="flex items-center gap-3">
              <p className="font-semibold text-2xl">
                Посмотрите видео о нас, <br /> чтобы познакомиться поближе
              </p>
              <Image
                alt="click icon"
                height={69}
                src="/images/click.svg"
                width={69}
              />
            </div>
            <a
              className="
                group relative w-full h-full rounded-lg border-2 border-gray-300
                flex items-center justify-center bg-gray-100 hover:border-primary transition-colors
              "
              href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
            >
              <PlayCircle className="w-16 h-16 text-gray-300 group-hover:text-primary transition-colors" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
