// src/components/widgets/WhatYouGetSection/data.ts

export interface Benefit {
  icon: string;
  title?: string;
  text: string; // Теперь здесь только одно текстовое поле
}

export const benefitsDataIndividuals: Benefit[] = [
  {
    icon: '/images/ServicesPage/what_you_get/icon_1.svg',
    text: 'Простые решения — объясняем понятным языком',
  },
  {
    icon: '/images/ServicesPage/what_you_get/icon_2.svg',
    text: 'Чёткий план действий — знаете, что будет на каждом этапе',
  },
  {
    icon: '/images/ServicesPage/what_you_get/icon_3.svg',
    text: 'Сопровождение от и до — консультация, документы, суды',
  },
  {
    icon: '/images/ServicesPage/what_you_get/icon_4.svg',
    text: 'Реальные результаты — добиваемся нужных решений',
  },
  {
    icon: '/images/ServicesPage/what_you_get/icon_5.svg',
    text: 'Фиксированная цена пакета — сразу знаете суммарные риски, без «скрытых» часов и доплат',
  },
];


export const benefitsDataBusiness: Benefit[] = [
  {
    icon: '/images/ServicesPage/what_you_get/icon_6.svg',
    title: 'Наш комплексный подход',
    text: 'Глубокая диагностика дела; выявим скрытые риски и точки давления на вашу компанию',
  },
  {
    icon: '/images/ServicesPage/what_you_get/icon_2.svg',
    title: 'Стратегия «и до, и после»',
    text: 'Проработаем план защиты на этапе проверки, подготовим запасной вариант для суда',
  },
  {
    icon: '/images/ServicesPage/what_you_get/icon_3.svg',
    title: 'Полное сопровождение',
    text: 'Представим интересы в ФНС, Арбитраже и ВАС, пока вы продолжаете развивать бизнеc',
  },
  {
    icon: '/images/ServicesPage/what_you_get/icon_7.svg',
    title: 'Оперативность и прозрачность',
    text: 'Еженедельные отчёты, онлайн-доступ к документам и личный куратор — ни одного сюрприза.',
  },
  {
    icon: '/images/ServicesPage/what_you_get/icon_5.svg',
    title: 'Фиксированная цена пакета',
    text: 'Сразу знаете суммарные риски, без «скрытых» часов и доплат.',
  },
];