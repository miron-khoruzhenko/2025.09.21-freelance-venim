import Navbar from "@components/widgets/Navbar"; // Corrected import path
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

export default function HomePage() {
  return (
    <main className="relative">
      <Navbar />
      <HeroSlider />
      <FloatingChat />
      <AboutUs />
      <Advantages />
      <TeamSection />
      <ServicesSection />
      <ValuesSection />
      <RoadmapSection />
      <ReviewsSection />

      <CookieBanner />
    </main>
  );
}
