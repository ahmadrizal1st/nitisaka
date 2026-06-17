import { Zap, Users, Shield, Layers, ArrowRight } from "lucide-react";

import { ContainerScroll } from "@/components/ui/container-scroll-animation";

export const MockupSection = () => {
  return (
    <section className="relative z-30 bg-background overflow-hidden">
      <ContainerScroll
        titleComponent={
          <>
            <h1 className="text-4xl md:text-5xl font-semibold text-foreground mb-4">
              Tampil Sempurna di <br />
              <span className="text-4xl md:text-[5rem] font-black mt-1 leading-none text-primary drop-shadow-sm">
                Semua Perangkat
              </span>
            </h1>
          </>
        }
      >
        <div className="w-full h-full flex items-center justify-center">
          <picture className="w-full h-full dark:hidden block">
            <source
              type="image/webp"
              srcSet={`
                /illustrations/responsive-mockup-light-828w.webp 828w,
                /illustrations/responsive-mockup-light-1200w.webp 1200w,
                /illustrations/responsive-mockup-light-1600w.webp 1600w
              `}
              sizes="(max-width: 828px) 828px, (max-width: 1200px) 1200px, 1600px"
            />
            <img 
              src="/illustrations/responsive-mockup-light.png" 
              alt="Responsive Website Mockup Light" 
              width="1600"
              height="1067"
              loading="lazy"
              decoding="async"
              className="w-full h-full object-contain rounded-2xl"
              draggable={false}
            />
          </picture>
          
          <picture className="w-full h-full hidden dark:block">
            <source
              type="image/webp"
              srcSet={`
                /illustrations/responsive-mockup-dark-828w.webp 828w,
                /illustrations/responsive-mockup-dark-1200w.webp 1200w,
                /illustrations/responsive-mockup-dark-1600w.webp 1600w
              `}
              sizes="(max-width: 828px) 828px, (max-width: 1200px) 1200px, 1600px"
            />
            <img 
              src="/illustrations/responsive-mockup-dark.png" 
              alt="Responsive Website Mockup Dark" 
              width="1600"
              height="1067"
              loading="lazy"
              decoding="async"
              className="w-full h-full object-contain rounded-2xl"
              draggable={false}
            />
          </picture>
        </div>
      </ContainerScroll>
    </section>
  );
};
