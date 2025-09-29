import { SectionTitle } from '@/components/shared/SectionTitle';
import Link from 'next/link';
import { individualPracticeLinks, businessPracticeLinks } from './data';
import { TabbedLinkList } from '@/components/shared/TabbedLinkList';

const tabs = [
  { id: 'individuals', label: 'Практика по услугам для частных лиц' },
  { id: 'business', label: 'Практика по услугам для бизнеса' },
];

const data = {
  individuals: individualPracticeLinks,
  business: businessPracticeLinks,
};


export const ExperienceHero = () => {

  
  return (
    <section className="min-h-screen bg-white flex items-center">
      <div className="container px-4 mx-auto pt-56 pb-16">
        <div className="text-sm text-gray-500 mb-6">
          <Link href="/" className="hover:text-primary">Главная</Link>
          <span className="mx-2">&gt;</span>
          <span>Наш опыт</span>
        </div>

        <SectionTitle>Наш опыт</SectionTitle>

        <p className="mt-8 text-lg text-gray-700 max-w-4xl">
          Наша <strong className="text-primary">практика и отзывы</strong> клиентов — это лучшая номинация, в которой мы побеждаем каждый день. Каждый выигранный спор — это не просто галочка в статистике, а чья-то <strong className="text-primary">решённая проблема, восстановленная справедливость, защищённые деньги, жильё</strong> или <strong className="text-primary">бизнес.</strong>
        </p>

        <div className="mt-10">
          <TabbedLinkList tabs={tabs} data={data} initialTab="individuals" />
        </div>
      </div>
    </section>
  );
};