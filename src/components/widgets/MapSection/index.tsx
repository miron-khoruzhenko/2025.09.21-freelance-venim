// src/components/widgets/MapSection/index.tsx

import Image from 'next/image';

const contactInfo = [
  { icon: '/images/map/location_icon.png', text: 'Съезжинская ул., 11,\nСанкт-Петербург, 197198' },
  { icon: '/images/map/time_icon.png', text: 'Пн-Пт: 10:00-19:00\nСб-Вс: Выходной' },
  { icon: '/images/map/call_icon.png', text: '+7 (812) 407-17-92\n+7 (921) 886-64-01' },
  { icon: '/images/map/email_icon.png', text: 'info@venim.ru' },
];

export const MapSection = () => {
  return (
    <section className="relative w-full pt-60 pb-[13.125rem]"> {/* pt-[240px] pb-[210px] */}
      <iframe
        src="https://yandex.ru/map-widget/v1/?um=constructor%3A20123f46255228585c392fa0231920d31e9c287f340334812f2f788b16a20395&source=constructor"
        width="100%"
        height="100%"
        frameBorder="0"
        className="absolute inset-0"
				title='Yandex Map'
      />

      <div className="relative">
        <div className="container px-4 mx-auto">
          <div className="bg-white/90 backdrop-blur-sm p-8 md:p-10 rounded-lg shadow-xl max-w-lg">
            <h2 className="font-unbounded text-[55px] font-bold text-primary leading-none">
              ООО «Веним»
            </h2>
            <div className="mt-8 space-y-6">
              {contactInfo.map((item, index) => (
                <div key={index} className="flex items-start gap-5">
                  <Image src={item.icon} alt="" width={32} height={32} className="mt-1 flex-shrink-0" />
                  <p className="font-montserrat text-[25px] font-normal text-gray-800 whitespace-pre-line leading-tight">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};