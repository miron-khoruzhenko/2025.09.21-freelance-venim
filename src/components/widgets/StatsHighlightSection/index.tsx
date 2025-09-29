// src/components/widgets/StatsHighlightSection/index.tsx

import Image from 'next/image';
import { statsHighlightData } from './data';
// import { Check } from 'lucide-react';

export const StatsHighlightSection = () => {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container px-4 mx-auto">
        {/* Адаптивная сетка */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {statsHighlightData.map((stat) => (
            <div key={stat.text} className="flex flex-col items-center text-center">
              {/* <Check className="w-20 h-20 text-primary" strokeWidth={4} /> */}
							<Image
								src="/images/tick.png"
								alt=""
								width={190}
								height={190}
								className="w-40 h-48"
							/>
              <p 
                className="text-lg text-gray-700 leading-relaxed text-left"
                dangerouslySetInnerHTML={{ __html: stat.text }} 
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};