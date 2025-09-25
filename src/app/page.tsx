import Navbar from "@components/widgets/Navbar"; // Corrected import path
import { HeroSlider } from "@components/widgets/HeroSlider";
import { FloatingChat } from "@components/widgets/FloatingChat";
import { CookieBanner } from "@components/widgets/CookieBanner"; // New component
import { AboutUs } from "@/components/widgets/AboutUs";
import { Advantages } from "@/components/widgets/Advantages";
import { TeamSection } from "@/components/widgets/TeamSection";
import { ServicesSection } from "@/components/widgets/ServicesSection";

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

      <CookieBanner />
    </main>
  );
}