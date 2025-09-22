"use client";

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

const slidesData = [
  // Слайд 1 (уникальный)
  {
    type: 'main',
    bgImage: '/images/1.Hero/Carousel/hero_bg_1.png',
    title: () => (
      <h1 className="text-2xl md:text-5xl font-extrabold leading-tight text-black">
        Юристы для сложных дел.<br/>
        <span className="text-primary">Защищаем, прогнозируем,</span><br/>
        <span className="text-primary">выигрываем</span>
      </h1>
    ),
    description: "Защищаем бизнес, капитал и репутацию: юрист на аутсорс, наследство, семейные споры, защита прав потребителей, более 20 направлений права",
    features: [
      { icon: '/images/1.Hero/award_icon.png', text: 'Выиграли <strong class="text-primary">98%</strong><br/>из 10 000+ дел' },
      { icon: '/images/1.Hero/agreement_icon.png', text: 'Стратегия защиты<br/>активов и репутации' },
      { icon: '/images/1.Hero/team_icon.png', text: 'Вернем до <strong class="text-primary">70%</strong> нашей<br/>комиссии, если проиграем' }
    ],
    buttonText: 'Бесплатная консультация до 45 минут'
  },
  // Слайд 2 (шаблон)
  {
    type: 'template',
    bgImage: '/images/1.Hero/Carousel/hero_bg_2.png',
    title: () => (
      <h1 className="text-2xl md:text-5xl font-extrabold leading-tight text-black">
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
    // Новые слайды
  {
    type: 'template',
    bgImage: '/images/1.Hero/Carousel/hero_bg_4.png',
    title: () => (
      <h1 className="text-2xl md:text-5xl font-extrabold leading-tight text-black">
        Ваш актив под контролем: от договора до возврата имущества
      </h1>
    ),
    description: "Защитим ваше имущество быстро, четко, с максимальным результатом",
    features: [
      { text: 'Юрист, который не усложняет' },
      { text: 'Мы за понятный, лучший для вас результат' },
      { text: 'Профильные юристы под все виды споров' }
    ],
    buttonText: 'Получить план решения в 3 шага'
  },
  {
    type: 'template',
    bgImage: '/images/1.Hero/Carousel/hero_bg_5.png',
    title: () => (
      <h1 className="text-2xl md:text-5xl font-extrabold leading-tight text-black">
        Юрист для вашего бизнеса: от проверок до судов
      </h1>
    ),
    description: "Юридическая защита, понятная бизнесу: без сложных формулировок, с прогнозируемым результатом",
    features: [
      { text: 'Комплексное сопровождение или точечное подключение под конкретную задачу' },
      { text: 'Работаем строго конфеденциально, прозрачно, в согласованные сроки' },
      { text: 'Гибкая система взаимодействия: юрист на аутсорс, почасовая оплата, barter and fee' }
    ],
    buttonText: 'Получить стратегию защиты бизнеса'
  },
  {
    type: 'template',
    bgImage: '/images/1.Hero/Carousel/hero_bg_6.png',
    title: () => (
      <h1 className="text-2xl md:text-5xl font-extrabold leading-tight text-black">
        Защищаем потребителей от обмана — быстро, грамотно, без лишней суеты
      </h1>
    ),
    description: "Поможем вам вернуть деньги, качество, справедливость",
    features: [
      { text: 'Права не защищают себя сами — мы делаем это за вас' },
      { text: 'Проблемы с договором, имуществом или сервисом? Вы не одни, мы поможем' },
      { text: 'Ваш результат — в центре внимания. Не затягиваем, не уходим в теорию' }
    ],
    buttonText: 'Получить предложение'
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
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Обновленная логика таймера
  useEffect(() => {
    const setSliderTimeout = () => {
      timeoutRef.current = setTimeout(
        () => setCurrentSlide((prev) => (prev === slidesData.length - 1 ? 0 : prev + 1)),
        5000
      );
    };
    setSliderTimeout();
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [currentSlide]);

  const handlePaginationClick = (index: number) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setCurrentSlide(index);
  };

  const slide = slidesData[currentSlide];

  return (
    <section className="relative w-full h-dvh bg-gray-100 text-black overflow-hidden">
        <AnimatePresence>
            <motion.div
                key={currentSlide}
                // Адаптивные классы для фона
                className="absolute inset-0 w-full h-full bg-contain bg-right bg-no-repeat md:bg-cover md:bg-center"
                style={{ backgroundImage: `url(${slide.bgImage})` }}
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.05 }}
                transition={{ duration: 0.8, ease: 'easeInOut' }}
            />
        </AnimatePresence>
      
        <div className="relative z-10 container mx-auto px-4 h-full flex items-center">
            <div className="w-full md:w-1/2 h-full md:h-auto">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={currentSlide}
                        // Новая структура для разделения верстки
                        className="h-full flex flex-col pt-24 pb-20 md:pt-0 md:pb-0 md:block"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.5 }}
                    >
                        {/* Верхняя часть (заголовок, описание, преимущества) */}
                        <div>
                            <slide.title />
                            <p className="mt-4 text-xs md:text-lg max-w-lg">{slide.description}</p>
                            
                            <div className="mt-8 flex gap-6 items-start">
                                {slide.type === 'main' ? (
                                    slide.features.map((feature, i) => (
                                    <div key={i} className="flex flex-col items-center text-center gap-2 w-auto md:w-40">
                                        <Image src={feature.icon} alt="" width={50} height={50} />
                                        <p className="text-[10px] md:text-sm" dangerouslySetInnerHTML={{ __html: feature.text }} />
                                    </div>
                                    ))
                                ) : (
                                    <div className="flex flex-col gap-4">
                                    {slide.features.map((feature, i) => (
                                        <div key={i} className="flex items-center gap-3">
                                            <Image src="/images/click.svg" alt="check" width={24} height={24} />
                                            <span className="text-xs md:text-sm">{feature.text}</span>
                                        </div>
                                    ))}
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* Нижняя часть (кнопка, соц. доказательства), прижата вниз на мобильных */}
                        <div className="mt-auto md:mt-8">
                            <div className={`${slide.type === 'main' ? 'w-full max-w-[520px]' : ''}`}>
                                <button className="w-full bg-primary text-white py-3 md:py-4 rounded-md text-xs md:text-lg font-bold hover:bg-primary-dark transition-colors">
                                    {slide.buttonText} {slide.type === 'template' && '0,00 ₽'}
                                </button>
                                {slide.type === 'main' ? (
                                    <div className="md:mt-6 mt-4 p-3 border border-gray-300 rounded-lg md:border-none md:p-0">
                                        <div className="grid grid-cols-2 gap-y-2 place-items-center md:flex md:justify-between md:items-center">
                                            {socialProofIcons.map(item => (
                                                <Image key={item.name} src={item.icon} alt={item.name} width={80} height={25} style={{objectFit: 'contain'}} />
                                            ))}
                                        </div>
                                        <p className="text-center mt-2 text-[10px] md:text-sm text-gray-600">
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
                        </div>
                    </motion.div>
                </AnimatePresence>
            </div>
        </div>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex gap-3">
        {slidesData.map((_, index) => (
          <button
            key={index}
            onClick={() => handlePaginationClick(index)}
            className={`w-3 h-3 rounded-full transition-colors ${
              currentSlide === index ? 'bg-primary' : 'bg-gray-400'
            }`}
          />
        ))}
      </div>
    </section>
  );
}