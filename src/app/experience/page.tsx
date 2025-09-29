import { ExperienceAccordion } from "@/components/widgets/ExperienceAccordion";
import { ExperienceHero } from "@/components/widgets/ExperienceHero";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Все виды юридических услуг для частных лиц | VENIM',
  description: 'Помогаем решать правовые вопросы быстро, грамотно и с уважением к вашей ситуации. Анализируем риски, предлагаем несколько сценариев, объясняем, как лучше действовать.',
  keywords: 'юридические услуги для частных лиц, консультация юриста, помощь с договорами, защита прав потребителей, семейное право, наследственное право, жилищное право, трудовое право, защита от мошенничества, юридическая поддержка',
};

export default function IndividualsServicesPage() {
	return (
		<main className="relative">
			<ExperienceHero />
			<ExperienceAccordion />	
		</main>
	);
}
