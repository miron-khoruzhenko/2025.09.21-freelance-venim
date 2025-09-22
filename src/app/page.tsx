import Navbar from "@components/widgets/Navbar"; // Corrected import path
import { HeroSlider } from "@components/widgets/HeroSlider";
import { FloatingChat } from "@components/widgets/FloatingChat";
import { CookieBanner } from "@components/widgets/CookieBanner"; // New component

export default function HomePage() {
  return (
    <main className="relative">
      <Navbar />
      <HeroSlider />
      <FloatingChat />
      <CookieBanner /> {/* Add the banner here */}

      {/* Здесь будут остальные секции вашего сайта */}
      <div className="h-[200vh] bg-gray-50">
        <div className="container mx-auto p-8">
            <h2 className="text-3xl font-bold">Следующая секция сайта...</h2>
        </div>
      </div>
    </main>
  );
}