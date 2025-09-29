// src/components/widgets/ReviewsHero/index.tsx

import React from 'react';
import { ReviewsSection } from '../ReviewsSection';
import Link from 'next/link';

const ReviewsHero = () => {
  return (
    <section className="pt-52 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-sm text-gray-500 mb-6">
          <Link href="/" className="hover:text-primary transition-colors">Главная</Link>
          <span className="mx-2">&gt;</span>
          <span>Отзывы</span>
        </div>
      </div>
      
      <ReviewsSection isInverted />
    </section>
  );
};

export default ReviewsHero;