// src/components/widgets/ReviewsSection/data.ts

export interface Review {
  name: string;
  date: string;
  rating: number; // от 1 до 5
  text: string;
  category: string;
}

export const marqueeLogos = [
  { src: '/images/1.Hero/zoon_icon.png', alt: 'Zoon' },
  { src: '/images/1.Hero/2gis_icon.png', alt: '2GIS' },
  { src: '/images/1.Hero/yandex_map_icon.png', alt: 'Яндекс Карты' },
  // Добавьте сюда другие логотипы по аналогии
];

export const reviewsData: Review[] = [
  {
    name: 'Иван Иванов',
    date: '01.02.2025',
    rating: 5,
    text: 'Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum.',
    category: 'Семейное право',
  },
  {
    name: 'Сергей Сергеев',
    date: '05.03.2025',
    rating: 5,
    text: 'Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum.',
    category: 'Налоговые споры',
  },
  {
    name: 'Анна Петрова',
    date: '12.04.2025',
    rating: 5,
    text: 'Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum.',
    category: 'Имущественные споры',
  },
];