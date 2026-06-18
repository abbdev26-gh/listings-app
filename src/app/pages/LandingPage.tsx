import { Navigation } from "../components/Navigation";
import { LandingHero } from "../components/LandingHero";
import { FeaturedProperties } from "../components/FeaturedProperties";
import { PropertyCategories } from "../components/PropertyCategories";
import { CTASection } from "../components/CTASection";
import { Footer } from "../components/Footer";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-[#1A1A1A]">
      <Navigation />
      <main>
        <LandingHero />
        <FeaturedProperties />
        <PropertyCategories />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}