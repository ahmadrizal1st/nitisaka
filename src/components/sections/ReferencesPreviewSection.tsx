import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ZoomParallax } from "@/components/ui/zoom-parallax";
import { references } from "@/lib/data/references";

export const ReferencesPreviewSection = () => {
  // ZoomParallax works best with 7 images
  const parallaxImages = references.slice(0, 7).map(ref => ({
    src: ref.image,
    alt: ref.title
  }));

  return (
    <section id="referensi" className="pt-24 pb-12 relative bg-background">
      {/* Subtle Glowing Background */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[500px] rounded-full bg-primary/5 blur-[120px]" />
        <div className="absolute top-1/2 right-1/4 translate-x-1/2 -translate-y-1/2 h-[400px] w-[400px] rounded-full bg-primary/5 blur-[120px]" />
      </div>

      <div className="container relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-sm font-bold text-[#10A37F] tracking-[0.2em] uppercase mb-4">
            PORTOFOLIO KAMI
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-foreground tracking-tight leading-tight">
            Karya Terbaik yang Telah Kami Buat <br className="hidden md:block"/>
            Untuk Klien Kami
          </h2>
        </motion.div>
      </div>

      {/* Zoom Parallax Component */}
      <div className="w-full relative z-10 mt-8 mb-16">
        <ZoomParallax images={parallaxImages} />
      </div>

      <div className="container relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <Link to="/reference">
            <Button size="lg" className="rounded-xl px-8 py-6 text-lg bg-primary text-primary-foreground hover:bg-primary/90 shadow-none border-none">
              Lihat Semua Portofolio
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};
