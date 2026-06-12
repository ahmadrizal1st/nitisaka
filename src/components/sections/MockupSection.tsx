import { Zap, Users, Shield, Layers, ArrowRight } from "lucide-react";

export const MockupSection = () => {
  return (
    <section className="relative z-30 py-12 sm:py-16 lg:py-20">

      <div className="container px-4 sm:px-6 lg:px-8 mx-auto relative z-10">
        <div className="relative mx-auto max-w-5xl">
          <img 
            src="/responsive-mockup-light.png" 
            alt="Responsive Website Mockup Light" 
            className="w-full h-auto dark:hidden block"
            loading="lazy"
          />
          <img 
            src="/responsive-mockup-dark.png" 
            alt="Responsive Website Mockup Dark" 
            className="w-full h-auto hidden dark:block"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
};
