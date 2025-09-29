import { ContactSection } from "@/components/widgets/ContactSection";
import { FaqSection } from "@/components/widgets/FaqSection";
import { PracticeSection } from "@/components/widgets/PracticeSection";
import { ProblemsSection } from "@/components/widgets/ProblemsSection";
import { ReviewsSection } from "@/components/widgets/ReviewsSection";
import { ServicesSection } from "@/components/widgets/ServicesSection";
import { StaticHero } from "@/components/widgets/StaticHero";
import { StatsHighlightSection } from "@/components/widgets/StatsHighlightSection";
import { WhatYouGetSection } from "@/components/widgets/WhatYouGetSection";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Все виды юридических услуг для частных лиц | VENIM',
  description: 'Помогаем решать правовые вопросы быстро, грамотно и с уважением к вашей ситуации. Анализируем риски, предлагаем несколько сценариев, объясняем, как лучше действовать.',
  // keywords: 'юрист для частных лиц, юридические услуги, ...'
};

export default function IndividualsServicesPage() {
	return (
		<main className="relative">
			<StaticHero />
			<ProblemsSection />
			<WhatYouGetSection />
			<StatsHighlightSection />
			<ServicesSection category="individuals" />
			<ReviewsSection />
			<PracticeSection />
			<ContactSection />
			<FaqSection />
			
		</main>
	);
}
