import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";
import { HeroSection } from "@/components/sections/HeroSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { SimplePackagesSection } from "@/components/sections/SimplePackagesSection";
import { CategoryPackagesSection } from "@/components/sections/CategoryPackagesSection";
import { ReferencesPreviewSection } from "@/components/sections/ReferencesPreviewSection";
import { WhyUsSection } from "@/components/sections/WhyUsSection";
import { CTASection } from "@/components/sections/CTASection";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <HeroSection />
        <ServicesSection />
        <SimplePackagesSection />
        <CategoryPackagesSection />
        <ReferencesPreviewSection />
        <WhyUsSection />
        <CTASection />
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
};

export default Index;
