import { Navbar } from "@/components/Navbar";
import { CinematicFooter } from "@/components/ui/motion-footer";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";
import { HeroSection } from "@/components/sections/HeroSection";
import { JourneySection } from "@/components/sections/JourneySection";
import { BeforeAfterSection } from "@/components/sections/BeforeAfterSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { SimplePackagesSection } from "@/components/sections/SimplePackagesSection";
import { CategoryPackagesSection } from "@/components/sections/CategoryPackagesSection";
import { ReferencesPreviewSection } from "@/components/sections/ReferencesPreviewSection";
import { WhyUsSection } from "@/components/sections/WhyUsSection";
import { CTASection } from "@/components/sections/CTASection";
import { AddonPackagesSection } from "@/components/sections/AddonPackagesSection";

import { MockupSection } from "@/components/sections/MockupSection";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 relative z-10 w-full bg-background border-b border-border shadow-xl rounded-b-[2rem] md:rounded-b-[3rem]">
        <HeroSection />
        <JourneySection />
        <BeforeAfterSection />
        <MockupSection />
        <ServicesSection />
        <SimplePackagesSection />
        <CategoryPackagesSection />
        <AddonPackagesSection />
        <ReferencesPreviewSection />
        <WhyUsSection />
        <CTASection />
      </main>
      <CinematicFooter />
      <WhatsAppFloat />
    </div>
  );
};

export default Index;
