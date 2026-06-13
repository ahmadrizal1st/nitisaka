
import { HeroSection } from "@/components/sections/HeroSection";
import { AboutSection } from "@/components/sections/AboutSection";
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

import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const Index = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const targetId = location.hash.substring(1);
      // Adding a tiny delay ensures the page has rendered its sections
      setTimeout(() => {
        const element = document.getElementById(targetId);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 150);
    }
  }, [location]);
  return (
    <>
      <HeroSection />
        <AboutSection />
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
    </>
  );
};

export default Index;
