// src/components/widgets/PracticeSlider/index.tsx
"use client";

import { useRef } from 'react';
import { Button } from '@/components/shared/Button';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import { PracticeCase } from './data'; // Мы создадим этот файл ниже
import Image from 'next/image';
// import { CheckCircle2 } from 'lucide-react';

import 'swiper/css';
import 'swiper/css/pagination';

// Карточка остаётся здесь же
const PracticeCard = ({ caseData }: { caseData: PracticeCase }) => {
	return (
		<div className="bg-[#DCDEDE] rounded-lg p-8 grid grid-rows-[auto,1fr] h-full">
			<div className="">
				<h3 className="font-montserrat text-2xl font-bold text-gray-900">{caseData.title}</h3>
				<p className="font-montserrat text-xl text-gray-700 mt-9 mb-32">{caseData.subtitle}</p>
			</div>

			<div className="min-h-40">
				{caseData.mainContent}
			</div>

			<div className="">
				<div className="flex items-center gap-2 text-gray-600 mt-0">
					<Image src="/images/tick.png" alt="tick" width={65} height={24} />
					<span className='text-xl'>{caseData.resultText}</span>
				</div>

				<div className="mt-auto pt-12 flex flex-col gap-4">
					<Button className="w-full !py-7 text-2xl !px-0">Читать подробнее</Button>
					<Button className="w-full !py-7 text-2xl">Оставить заявку</Button>
				</div>
			</div>

		</div>
	);
};

// Сам слайдер
export const PracticeSlider = ({ cases, paginationClass }: { cases: PracticeCase[], paginationClass: string }) => {

	return (
		<div className="py-8">
			<Swiper
				modules={[Pagination]}
				spaceBetween={28}
				slidesPerView={1}
				pagination={{ clickable: true, el: `.${paginationClass}` }}

				breakpoints={{
					768: { slidesPerView: 2 },
					1024: { slidesPerView: 3 },
				}}
			>
				{cases.map((caseItem) => (
					<SwiperSlide key={caseItem.id} className="h-auto py-2">
						<PracticeCard caseData={caseItem} />
					</SwiperSlide>
				))}
			</Swiper>
			<div className="flex justify-center mt-24">
				<div className={`${paginationClass} flex justify-center items-center gap-2 h-6`} />

			</div>
		</div>
	);
};