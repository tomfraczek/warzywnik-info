import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import AudienceSection from "@/components/AudienceSection";
import AppPreviewSection from "@/components/AppPreviewSection";
import CtaSection from "@/components/CtaSection";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <HeroSection />
        <FeaturesSection />
        <AudienceSection />
        <AppPreviewSection />
        <CtaSection />
      </main>
      <Footer />
    </>
  );
}
