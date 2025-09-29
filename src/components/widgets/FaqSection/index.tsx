import { SectionTitle } from '@/components/shared/SectionTitle';
import { faqData } from './data';
import { Accordion } from '@/components/shared/Accordion';

export const FaqSection = () => {

  return (
    <section className="py-[11.25rem]">
      <div className="container px-4 mx-auto">
        <SectionTitle className="mb-[5.625rem]">
          Часто задаваемые вопросы
        </SectionTitle>

        <div className="overflow-hidden space-y-5">
          <Accordion items={faqData} defaultOpenIndex={0} />
        </div>
      </div>
    </section>
  );
};