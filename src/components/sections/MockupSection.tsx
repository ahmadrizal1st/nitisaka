import { Zap, Users, Shield, Layers, ArrowRight } from "lucide-react";

import { ContainerScroll } from "@/components/ui/container-scroll-animation";

export const MockupSection = () => {
  return (
    <section className="relative z-30 bg-background overflow-hidden">
      <ContainerScroll
        titleComponent={
          <>
            <h2 className="text-4xl md:text-5xl font-semibold text-foreground mb-4">
              Tampil Sempurna di <br />
              <span className="text-4xl md:text-[5rem] font-black mt-1 leading-none text-primary drop-shadow-sm">
                Semua Perangkat
              </span>
            </h2>
          </>
        }
      >
        <div className="w-full h-full flex items-center justify-center">
          <img 
            src="/illustrations/responsive-mockup-light.webp" 
            srcSet="/illustrations/responsive-mockup-light.webp 744w, /illustrations/responsive-mockup-light@2x.webp 1488w"
            sizes="(max-width: 768px) 100vw, 744px"
            alt="Responsive Website Mockup Light" 
            width="744"
            height="496"
            className="w-full h-full object-contain dark:hidden block rounded-2xl"
            draggable={false}
          />
          
          <img 
            src="/illustrations/responsive-mockup-dark.webp" 
            srcSet="/illustrations/responsive-mockup-dark.webp 744w, /illustrations/responsive-mockup-dark@2x.webp 1488w"
            sizes="(max-width: 768px) 100vw, 744px"
            alt="Responsive Website Mockup Dark" 
            width="744"
            height="496"
            className="w-full h-full object-contain hidden dark:block rounded-2xl"
            draggable={false}
          />
        </div>
      </ContainerScroll>
    </section>
  );
};
