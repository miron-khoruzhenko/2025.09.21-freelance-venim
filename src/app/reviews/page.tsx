import { ContactSection } from "@/components/widgets/ContactSection";
import { ReviewCategoryFilter } from "@/components/widgets/ReviewCategoryFilter";
import { ReviewsAccordion } from "@/components/widgets/ReviewsAccordion";
import ReviewsHero from "@/components/widgets/ReviewsHero";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Все виды юридических услуг для частных лиц | VENIM',
  description: 'Помогаем решать правовые вопросы быстро, грамотно и с уважением к вашей ситуации. Анализируем риски, предлагаем несколько сценариев, объясняем, как лучше действовать.',
  keywords: 'юридические услуги для частных лиц, консультация юриста, помощь с договорами, защита прав потребителей, семейное право, наследственное право, жилищное право, трудовое право, защита от мошенничества, юридическая поддержка',
};

export default function ReviewsPage() {
	return (
		<main className="relative">
			<ReviewsHero />
			<ReviewCategoryFilter />
			<ReviewsAccordion />
			<ContactSection />
		</main>
	);
}
