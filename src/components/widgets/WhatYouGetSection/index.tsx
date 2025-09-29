"use client";

import { SectionTitle } from '@/components/shared/SectionTitle';
import Image from 'next/image';
import { benefitsDataIndividuals, benefitsDataBusiness } from './data';
import { twMerge as cn } from 'tailwind-merge';

export const WhatYouGetSection = ({isBusiness=false}:{isBusiness?:boolean}) => {
	return (
		<section className="py-16 md:py-24 bg-[#E8E8E8]">
			<div className="container px-4 mx-auto">
				<SectionTitle className="text-center">
					Что вы получаете
				</SectionTitle>

				{/* ИЗМЕНЕНИЕ: Контейнер теперь использует Flexbox для центрирования последней строки */}
				<div className="flex flex-wrap justify-center mt-16 -mx-4">
					{(isBusiness ? benefitsDataBusiness : benefitsDataIndividuals).map((benefit) => (
						<div key={benefit.text} className="w-full sm:w-1/2 lg:w-1/3 p-24">
							<div className="flex flex-col items-center text-center h-full">
								<div className="h-32 w-32 flex items-center justify-center ">
									<Image
										src={benefit.icon}
										alt=""
										width={130}
										height={130}
									/>
								</div>
								<div className={cn("mt-6", isBusiness ? "text-left" : 'text-center')}>
								{benefit.title && <h3 className="text-2xl font-bold mb-8">{benefit.title}</h3>}
								<p className=" text-xl font-montserrat text-gray-800">
									{benefit.text}
								</p>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};