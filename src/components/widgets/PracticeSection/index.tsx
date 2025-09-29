"use client";

import { SectionTitle } from '@/components/shared/SectionTitle';
import { practiceData } from './data';

import 'swiper/css';
import 'swiper/css/pagination';
import Image from 'next/image';
import Link from 'next/link';
import { PATHS } from '@/config/paths';
import { PracticeSlider } from '../PracticeSlider';


export const PracticeSection = () => {
  return (
    <section className="py-[11.875rem]">
      <div className="container px-4 mx-auto">
        <SectionTitle>Наша практика</SectionTitle>
        <p className="mt-[5.1875rem] text-2xl text-gray-700">
          Наша <strong className="text-primary">практика и отзывы</strong> клиентов — это лучшая номинация, в которой мы побеждаем каждый день. <br /> <br />
          Каждый выигранный спор — это не просто галочка в статистике, а чья-то <strong className="text-primary">решённая проблема, восстановленная справедливость, защищённые деньги, жильё</strong> или <strong className="text-primary">бизнес.</strong>
        </p>

        <div className="mt-20">

          <PracticeSlider
          cases={practiceData}
          paginationClass="swiper-pagination-practice"
          />
        </div>

        <div className="">

          <div className="mt-[5.625rem]">
            <Link href={PATHS.experience} className="inline-flex items-center gap-4 group border-b-2 border-primary pb-3">
              <span className="font-semibold text-lg">
                Читать больше случаев из практики по 25 направлениям права
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
        </div>
      </div>
    </section>
  );
};