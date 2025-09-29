// src/components/widgets/ProblemsSection/data.ts

export interface Problem {
  title: string;
  description: string;
}

export const problemsDataIndividuals: Problem[] = [
  {
    title: 'Обман застройщиков и продавцов',
    description: 'Срыв сроков, некачественные товары и услуги',
  },
  {
    title: 'Жилищные и семейные конфликты',
    description: 'Раздел имущества, споры о детях, наследство',
  },
  {
    title: 'Невыплаты и трудовые споры',
    description: 'Увольнения без оснований, задержка зарплаты',
  },
  {
    title: 'Долги и финансовое давление',
    description: 'Давление коллекторов, споры по распискам',
  },
  {
    title: 'Некачественная медицинская помощь',
    description: 'Споры с медучреждениями в уязвимом состоянии',
  },
  {
    title: 'Судебные тяжбы и проверки',
    description: 'Стресс и непонимание, как себя защитить',
  },
];


export const problemsDataBusiness: Problem[] = [
  {
    title: 'Слабые контракты',
    description: 'Ведут к спорам и потерям',
  },
  {
    title: 'Корпоративные конфликты',
    description: 'Угрожают стабильности компании',
  },
  {
    title: 'Проверки и госорганы',
    description: 'Ошибки приводят к штрафам и санкциям',
  },
  {
    title: 'Долги и споры с контрагентами',
    description: 'Бьют по кэшфлоу',
  },
  {
    title: 'Нет стратегии',
    description: 'Бизнес действует вслепую и теряет позиции',
  },
  {
    title: 'Угрозы репутации',
    description: 'Клевета, накрутка негативных отзывов',
  },
];