// src/components/widgets/Advantages/index.tsx

import { SectionTitle } from '@/components/shared/SectionTitle';
import Image from 'next/image';

// Данные для секции вынесены в массив объектов для удобства
const advantagesData = [
  {
    icon: '/images/2.Advantages/gift (1) 1.png',
    title: 'Бесплатная консультация с анализом документов',
    description: 'Разберём вашу ситуацию, изучим документы и честно расскажем, каковы реальные перспективы дела. Без обязательств, без давления.',
  },
  {
    icon: '/images/2.Advantages/calendar 1.png',
    title: 'Гибкая система оплаты под ваши нужды',
    description: 'Вы выбираете удобный способ оплаты: поэтапно, почасовая или единым платежом. Условия — под вас, не наоборот.',
  },
  {
    icon: '/images/2.Advantages/reach 1.png',
    title: 'Беремся за то, от чего отказываются другие',
    description: 'Сложность — не причина отказаться, а повод выстроить стратегию. Не обещаем "легко", но доведем до финала.',
  },
  {
    icon: '/images/2.Advantages/time 1.png',
    title: 'Первые результаты — уже через 3 дня',
    description: 'Приступаем к делу сразу после подписания договора. Вы получаете первые шаги и действия максимум через трое суток.',
  },
  {
    icon: '/images/2.Advantages/customer-service-agent 1.png',
    title: 'Информируем на каждом этапе работы',
    description: 'Вы всегда знаете, что происходит с вашим делом. Регулярные отчёты, понятные объяснения, постоянная связь с юристом.',
  },
  {
    icon: '/images/2.Advantages/professional 1.png',
    title: 'Уверенность в профессионализме',
    description: 'Мы не обещаем невозможного — предлагаем честный анализ, сильную правовую позицию и максимальную отдачу на каждом этапе.',
  },
];

export const Advantages = () => {
  return (
    <section className="bg-gray-0 pb-48">
      <div className="container px-4 mx-auto">
        <SectionTitle className="mb-16 text-center md:mb-20">
          Преимущества для вас
        </SectionTitle>

        {/* Адаптивная сетка: 1 колонка на мобильных, 2 на планшетах, 3 на десктопах */}
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-3 md:gap-x-8 md:gap-y-20">
          {advantagesData.map((advantage, index) => (
            <div key={index} className="flex items-start gap-6">
              <div className="flex-shrink-0">
                <Image
                  src={advantage.icon}
                  alt={advantage.title}
                  width={96}
                  height={96}
                  className="w-12 h-12 md:w-24 md:h-24"
                />
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900 border-b-4 max-w-72 border-primary pb-2">
                  {advantage.title}
                </h3>
                <p className="mt-2 text-sm text-gray-600">
                  {advantage.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};