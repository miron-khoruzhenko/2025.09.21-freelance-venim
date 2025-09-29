import { ContactSection } from "@/components/widgets/ContactSection";
import { FaqSection } from "@/components/widgets/FaqSection";
import { GiftsSection } from "@/components/widgets/GiftsSection";
import { PromotionsSection } from "@/components/widgets/PromotionsSection";
import { RoadmapSection } from "@/components/widgets/RoadmapSectionMini";
import { PromotionStaticHero } from "@/components/widgets/StaticHero/PromotionsHero";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: 'Акции и спецпредложения | VENIM',
	description: 'Скидки, бонусы и специальные предложения для постоянных и новых клиентов юридической компании VENIM.',
	keywords: 'юридические услуги для частных лиц, консультация юриста, помощь с договорами, защита прав потребителей, семейное право, наследственное право, жилищное право, трудовое право, защита от мошенничества, юридическая поддержка',
};

export default function PromotionPage() {
	return (
		<main className="relative">
			<PromotionStaticHero />
			<RoadmapSection
				title="Как это работает"
				items={[
					{
						numeral: 'I',
						title: 'Выберите подходящую привилегию',
						description: '',
					},
					{
						numeral: 'II',
						title: 'Сообщите менеджеру или юристу при обращении',
						description: '',
					},
					{
						numeral: 'III',
						title: 'Получайте бонусы от VENIM',
						description: '',
					}
				]}
			/>
			<PromotionsSection />
			<GiftsSection />
			<FaqSection />
			<ContactSection />
		</main>
	);
}
