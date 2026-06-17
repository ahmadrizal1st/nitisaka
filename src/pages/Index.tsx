
import { Seo } from "@/components/Seo";
import { HeroSection } from "@/components/sections/HeroSection";

import { useEffect, Suspense, lazy } from "react";
import { useLocation } from "react-router-dom";

const AboutSection = lazy(() => import("@/components/sections/AboutSection").then(m => ({ default: m.AboutSection })));
const JourneySection = lazy(() => import("@/components/sections/JourneySection").then(m => ({ default: m.JourneySection })));
const BeforeAfterSection = lazy(() => import("@/components/sections/BeforeAfterSection").then(m => ({ default: m.BeforeAfterSection })));
const MockupSection = lazy(() => import("@/components/sections/MockupSection").then(m => ({ default: m.MockupSection })));
const ServicesSection = lazy(() => import("@/components/sections/ServicesSection").then(m => ({ default: m.ServicesSection })));
const SimplePackagesSection = lazy(() => import("@/components/sections/SimplePackagesSection").then(m => ({ default: m.SimplePackagesSection })));
const CategoryPackagesSection = lazy(() => import("@/components/sections/CategoryPackagesSection").then(m => ({ default: m.CategoryPackagesSection })));
const AddonPackagesSection = lazy(() => import("@/components/sections/AddonPackagesSection").then(m => ({ default: m.AddonPackagesSection })));
const ReferencesPreviewSection = lazy(() => import("@/components/sections/ReferencesPreviewSection").then(m => ({ default: m.ReferencesPreviewSection })));
const WhyUsSection = lazy(() => import("@/components/sections/WhyUsSection").then(m => ({ default: m.WhyUsSection })));
const CTASection = lazy(() => import("@/components/sections/CTASection").then(m => ({ default: m.CTASection })));

const SectionLoader = () => (
  <div className="flex w-full items-center justify-center py-24">
    <div className="h-8 w-8 animate-spin rounded-full border-4 border-primary border-r-transparent"></div>
  </div>
);

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
      <Seo 
        title="Nitisaka - Jasa Pembuatan Website Murah & Profesional" 
        description="Jasa pembuatan website profesional dengan harga terjangkau mulai dari Rp 800.000. Tersedia untuk Landing page, company profile, toko online, dan custom system."
      />
      <HeroSection />
      <Suspense fallback={<SectionLoader />}>
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
      </Suspense>
    </>
  );
};

export default Index;
