// src/components/widgets/Footer/index.tsx

import Image from 'next/image';
import Link from 'next/link';
import { navLinks } from '@/config/site';

const socialIcons = [
  { href: "#", icon: "/images/1.Hero/telegram_circle_icon.png", alt: "Telegram" },
  { href: "#", icon: "/images/1.Hero/whatsapp_circle_icon.png", alt: "WhatsApp" },
  { href: "#", icon: "/images/1.Hero/vk_circle_icon.png", alt: "VK" },
];

export const Footer = () => {
  return (
    <footer className="bg-white py-16 md:py-20 border-t font-montserrat">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:grid lg:grid-cols-3 gap-12">
          
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left gap-4 text-gray-500 order-last lg:order-first">
            <Link href="/" className="flex flex-col items-center lg:items-start mb-4">
              <Image src="/images/logo.png" alt="Venim Logo" width={340} height={109} className="w-48 lg:w-[340px] h-auto" />
              <span className="text-xs">Юридические услуги</span>
            </Link>
            <p className="text-base">© ООО «Веним» 2015-2025</p>
            <p className="text-base">ИНН 7840063168<br/>ОГРН 1177847070114</p>
            <p className="max-w-xs text-base">Воспроизведение материалов сайта возможно только по письменному разрешению правообладателя</p>
            <Link href="/privacy-policy" className="underline hover:text-primary text-base">
              Политика конфиденциальности
            </Link>
          </div>

          <div className="lg:border-l-2 lg:border-primary lg:pl-8">
            <nav>
              <ul className="space-y-4 flex flex-col items-center lg:items-start">
                {navLinks.map((link) => (
                  <li key={link.href} className="group relative">
                    <Link href={link.href} className="font-montserrat text-xl md:text-2xl font-semibold text-black hover:text-primary transition-colors">
                      {link.label}
                    </Link>
                    {link.submenu && (
                      <div className="
                        absolute top-full left-1/2 -translate-x-1/2 lg:left-full lg:top-0 lg:-translate-x-0 lg:ml-6 mt-2 lg:mt-0 z-10 p-4 bg-white border border-gray-200 rounded-lg shadow-lg
                        w-max opacity-0 invisible group-hover:opacity-100 group-hover:visible 
                        transition-all duration-300 ease-in-out
                      ">
                        <div className="border-l-2 border-primary pl-3 space-y-2">
                           {link.submenu.map(sublink => (
                            <Link key={sublink.href} href={sublink.href} className="block text-base text-gray-700 hover:text-primary">
                              {sublink.label}
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}
                  </li>
                ))}
              </ul>
            </nav>
          </div>
          
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
            <div className="flex items-start gap-4">
              <Image src="/images/1.Hero/location.png" alt="location" width={80} height={80} className="mt-1 w-16 h-16 lg:w-20 lg:h-20 flex-shrink-0" />
              <div>
                <p className="text-black text-xl md:text-2xl font-montserrat text-left">г. Санкт-Петербург, ул. Съезжинская 11</p>
                <span className="text-gray-500 text-base md:text-lg">Пн-Пт: 10-19 Сб-Вс: Выходной</span>
              </div>
            </div>
            <div className="mt-8 w-full flex flex-col items-center lg:items-start">
              <p className="text-xl md:text-2xl text-black">Есть вопросы? Напишите или позвоните нам:</p>
              <div className="flex gap-3 mt-4">
                {socialIcons.map(social => (
                  <a key={social.alt} href={social.href} className="transition-transform hover:scale-110">
                    <Image src={social.icon} alt={social.alt} width={72} height={72} className="w-14 h-14 lg:w-[72px] lg:h-[72px]" />
                  </a>
                ))}
              </div>
              <div className="mt-4 text-black text-lg md:text-base">
                <a href="tel:+78124071792" className="block hover:text-primary">+7 (812) 407 17 92</a>
                <a href="tel:+79218866401" className="block mt-1 hover:text-primary">+7 (921) 886-64-01</a>
                <a href="mailto:info@venim.ru" className="block mt-1 text-gray-600 font-normal underline hover:text-primary">info@venim.ru</a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
};