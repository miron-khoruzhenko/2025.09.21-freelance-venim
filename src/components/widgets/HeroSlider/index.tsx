"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

const slidesData = [
  // Слайд 1 (уникальный)
  {
    type: 'main',
    bgImage: '/images/1.Hero/Carousel/hero_bg_1.png',
    title: () => (
      <h1 className="text-5xl font-extrabold leading-tight text-black">
        Юристы для сложных дел.<br/>
        <span className="text-primary">Защищаем, прогнозируем,</span><br/>
        <span className="text-primary">выигрываем</span>
      </h1>
    ),
    description: "Защищаем бизнес, капитал и репутацию: юрист на аутсорс, наследство, семейные споры, защита прав потребителей, более 20 направлений права",
    features: [
      { icon: '/images/1.Hero/award_icon.png', text: 'Выиграли <strong>98%</strong><br/>из 10 000+ дел' },
      { icon: '/images/1.Hero/agreement_icon.png', text: 'Стратегия защиты<br/>активов и репутации' },
      { icon: '/images/1.Hero/team_icon.png', text: 'Вернем до <strong>70%</strong> нашей<br/>комиссии, если проиграем' }
    ],
    buttonText: 'Бесплатная консультация до 45 минут'
  },
  // Слайд 2 (шаблон)
  {
    type: 'template',
    bgImage: '/images/1.Hero/Carousel/hero_bg_2.png',
    title: () => (
      <h1 className="text-5xl font-extrabold leading-tight text-black">
        Развод без войны —<br/>с контролем <span className="text-primary">активов</span><br/>и <span className="text-primary">интересов детей</span>
      </h1>
    ),
    description: "Поможем расторгнуть брак с минимальными финансовыми и моральными потерями",
    features: [
      { text: 'Вы не останетесь одни — мы всегда на связи, объясняем, поддерживаем' },
      { text: 'Гибкие варианты оплаты — от фиксированной стоимости до почасовой' },
      { text: 'Медиация споров для урегулирования мирным путем' }
    ],
    buttonText: 'Разобрать вашу ситуацию с экспертом'
  },
  {
    type: 'template',
    bgImage: '/images/1.Hero/Carousel/hero_bg_3.png',
    title: () => <h1 className="text-5xl font-extrabold leading-tight text-black">Защита прав<br/>потребителей</h1>,
    description: "Вернем деньги за некачественный товар или услугу.",
    features: [
      { text: 'Полное юридическое сопровождение' },
      { text: 'Взыскание неустойки и штрафов' },
      { text: 'Представление интересов в суде' }
    ],
    buttonText: 'Получить консультацию бесплатно'
  },
];

const socialProofIcons = [
    { name: 'Яндекс Карты', icon: '/images/1.Hero/yandex_map_icon.png' },
    { name: '2ГИС', icon: '/images/1.Hero/2gis_icon.png' },
    { name: 'Google Maps', icon: '/images/1.Hero/google_maps_icon.png' },
    { name: 'Zoon', icon: '/images/1.Hero/zoon_icon.png' },
];

export function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev === slidesData.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const slide = slidesData[currentSlide];

  return (
    <section className="relative w-full h-screen bg-gray-100 text-black overflow-hidden">
        <AnimatePresence>
            <motion.div
                key={currentSlide}
                className="absolute inset-0 w-full h-full bg-cover bg-center"
                style={{ backgroundImage: `url(${slide.bgImage})` }}
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.05 }}
                transition={{ duration: 0.8, ease: 'easeInOut' }}
            />
        </AnimatePresence>
      
        <div className="relative z-10 container mx-auto px-4 h-full flex items-center">
            <div className="w-full md:w-1/2">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={currentSlide}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.5 }}
                    >
                        <slide.title />
                        <p className="mt-4 text-lg max-w-lg">{slide.description}</p>
                        
                        <div className="mt-8 flex gap-6 items-start text-sm">
                            {slide.type === 'main' ? (
                                slide.features.map((feature, i) => (
                                <div key={i} className="flex flex-col items-center text-center gap-2 w-40">
                                    <Image src={'icon' in feature && feature.icon ? feature.icon as string : '/images/placeholder.png'} alt="" width={50} height={50} />
                                    <p dangerouslySetInnerHTML={{ __html: feature.text }} />
                                </div>
                                ))
                            ) : (
                                <div className="flex flex-col gap-4">
                                {slide.features.map((feature, i) => (
                                    <div key={i} className="flex items-center gap-3">
                                        <Image src="/images/click.svg" alt="check" width={24} height={24} />
                                        <span>{feature.text}</span>
                                    </div>
                                ))}
                                </div>
                            )}
                        </div>

                        <div className={`mt-8 ${slide.type === 'main' ? 'w-full max-w-[520px]' : ''}`}>
                            <button className="w-full bg-primary text-white py-4 rounded-md text-lg font-bold hover:bg-primary-dark transition-colors">
                                {slide.buttonText} {slide.type === 'template' && '0.00 P'}
                            </button>
                            {slide.type === 'main' ? (
                                <div className="mt-6">
                                    <div className="flex justify-between items-center">
                                    {socialProofIcons.map(item => (
                                        <Image key={item.name} src={item.icon} alt={item.name} width={80} height={25} style={{objectFit: 'contain'}} />
                                    ))}
                                    </div>
                                    <p className="text-center mt-2 text-sm text-gray-600">
                                    <span className="text-yellow-500">★★★★★</span> Более 1000 положительных отзывов на сторонних площадках
                                    </p>
                                </div>
                            ) : (
                                <div className="mt-6 flex gap-8 text-sm font-medium">
                                    <a href="#" className="underline hover:text-primary">Почитать отзывы</a>
                                    <a href="#" className="underline hover:text-primary">Посмотреть случаи из нашей практики</a>
                                </div>
                            )}
                        </div>
                    </motion.div>
                </AnimatePresence>
            </div>
        </div>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex gap-3">
        {slidesData.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-colors ${
              currentSlide === index ? 'bg-primary' : 'bg-gray-400'
            }`}
          />
        ))}
      </div>
    </section>
  );
}