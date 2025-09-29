import { Metadata } from "next";
import { HeroSlider } from "@components/widgets/HeroSlider";
import { FloatingChat } from "@components/widgets/FloatingChat";
import { CookieBanner } from "@components/widgets/CookieBanner"; // New component

import { AboutUs } from "@/components/widgets/AboutUs";
import { Advantages } from "@/components/widgets/Advantages";
import { TeamSection } from "@/components/widgets/TeamSection";
import { ServicesSection } from "@/components/widgets/ServicesSection";
import { ValuesSection } from "@/components/widgets/ValuesSection";
import { RoadmapSection } from "@/components/widgets/RoadmapSection";
import { ReviewsSection } from "@/components/widgets/ReviewsSection";
import { PracticeSection } from "@/components/widgets/PracticeSection";
import { ContactSection } from "@/components/widgets/ContactSection";
import { FaqSection } from "@/components/widgets/FaqSection";
import { PartnersSection } from "@/components/widgets/PartnersSection";
import { MapSection } from "@/components/widgets/MapSection";


export const metadata: Metadata = {
  title: "Все виды юридических услуг для частных лиц | VENIM",
  description: "Помогаем решать правовые вопросы быстро, грамотно и с уважением к вашей ситуации. Анализируем риски, предлагаем несколько сценариев, объясняем, как лучше действовать.",
  keywords: "юрист для частных лиц, юридические услуги, консультация юриста, правовая помощь, семейное право, наследственное право, трудовое право, гражданское право, защита прав, юридическая поддержка, адвокат для частных лиц, юридическая консультация онлайн, правовые услуги, юридическая помощь физическим лицам"
};


export default function HomePage() {
  return (
    <main className="relative">
      <HeroSlider />
      <FloatingChat />
      <AboutUs />
      <Advantages />
      <TeamSection />
      <ServicesSection />
      <ValuesSection />
      <RoadmapSection />
      <ReviewsSection />
      <PracticeSection />
      <ContactSection />
      <FaqSection />
      <PartnersSection />
      <MapSection />

      <CookieBanner />
    </main>
  );
}
