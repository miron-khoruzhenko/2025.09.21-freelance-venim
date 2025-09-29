// src/components/widgets/GiftsSection/data.ts

export interface GiftImage {
  src: string;
  alt: string;
}

// Каждый вложенный массив — это один слайд
export const giftSlidesData: GiftImage[][] = [
  // Слайд 1
  [
    { src: '/images/PromotionPage/gift_section/img_1.png', alt: 'Фирменный картхолдер' },
    { src: '/images/PromotionPage/gift_section/img_2.png', alt: 'Фирменный брелок' },
  ],
  // Слайд 2 (для примера)
  [
    { src: '/images/PromotionPage/gift_section/img_1.png', alt: 'Фирменный картхолдер' },
    { src: '/images/PromotionPage/gift_section/img_2.png', alt: 'Фирменный брелок' },
  ],
];