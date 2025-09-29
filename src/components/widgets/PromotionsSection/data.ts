// src/components/widgets/PromotionsSection/data.ts

export interface Promotion {
  title: string;
  description: string;
	img: string;
}

export const promosForAll: Promotion[] = [
  {
    title: 'Бесплатная первичная консультация для всех',
    description: 'Бесплатная юридическая консультация по любому вопросу продолжительностью до 45 минут',
		img: '/images/PromotionPage/box_items/gift.png',
  },
  {
    title: 'Скидка 15% и подарки для постоянных клиентов',
    description: 'При повторном обращении скидка 15% на все юридические услуги, а также стильные фирменные аксессуары для деловой жизни',
		img: '/images/PromotionPage/box_items/sale_box.png',
  },
  {
    title: 'Приведи друга — бонус для двоих',
    description: 'Вы и ваш друг получаете по 10% скидки на юридическое сопровождение. Дружба с VENIM — выгодна',
		img: '/images/PromotionPage/box_items/sale.png',
  },
  {
    title: 'Юридическая защита недвижимости',
    description: 'Комплексная проверка документов при сделках с недвижимостью со скидкой 20%',
		img: '/images/PromotionPage/box_items/sale.png',
  },
  {
    title: 'Скидки у партнёров',
    description: 'VENIM открывает доступ к льготам у партнёров: магазины, пошив одежды, барбершопы, сервис, санатории Борменталь и другие',
		img: '/images/PromotionPage/box_items/sale.png',
  },
  {
    title: 'Приглашения на вечера с сомелье',
    description: 'Клиенты VENIM получают приглашения на закрытые вечера: хорошие вина, дружеская атмосфера и беседы о важном',
		img: '/images/PromotionPage/box_items/gift.png',
  },
];

export const promosForBusiness: Promotion[] = [
  {
    title: 'Корпоративное сопровождение со скидкой',
    description: 'Чем больше юридических задач вы делегируете VENIM — тем выгоднее итог. Индивидуальные пакеты для компаний и скидки от 5% до 20%',
		img: '/images/PromotionPage/box_items/sale.png',
  },
  {
    title: 'Привилегии для сотрудников',
    description: 'Сотрудники компаний-клиентов на комплексном обслуживании получают персональные консультации и скидки',
		img: '/images/PromotionPage/box_items/sale.png',
  },
  {
    title: 'Приведи компанию-партнера',
    description: 'Приведите партнера на корпоративное обслуживание в VENIM и после первой сделки получите аудит налоговых рисков компании в подарок',
		img: '/images/PromotionPage/box_items/gift.png',
  },
  {
    title: 'Правовой корпоратив',
    description: 'После 6 месяцев полного юридического сопровождения — семинар на актуальную для вас правовую тему в подарок',
		img: '/images/PromotionPage/box_items/gift.png',
  },
  {
    title: 'Кадровый аудит в подарок',
    description: 'После 12 месяцев полного юридического сопровождения — кадровый аудит компании бесплатно',
		img: '/images/PromotionPage/box_items/gift.png',
  },
];