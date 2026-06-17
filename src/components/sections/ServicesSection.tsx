import { motion } from "framer-motion";

export const ServicesSection = () => {
  return (
    <section id="layanan" className="py-20 lg:py-28 bg-background relative overflow-hidden">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 lg:mb-16"
        >
          <p className="text-sm font-bold text-[#10A37F] tracking-[0.2em] uppercase mb-4">
            APA YANG KAMI BANGUN
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-foreground tracking-tight leading-tight">
            Solusi Digital yang Kami Rancang <br className="hidden md:block"/>
            Untuk Mengembangkan Bisnis Anda
          </h2>
        </motion.div>

        {/* Infographic Illustration */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95, y: 40 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative w-full max-w-6xl mx-auto flex items-center justify-center pointer-events-none"
        >
            {/* Light Mode Illustration */}
            <img 
               src="/illustrations/digital-solustion-light.png" 
               alt="Solusi Digital Nitisaka" 
               width="1536"
               height="1024"
               loading="lazy"
               decoding="async"
               className="w-full h-auto object-contain dark:hidden drop-shadow-sm opacity-0 transition-opacity duration-1000"
               onLoad={(e) => e.currentTarget.classList.remove('opacity-0')}
            />
            {/* Dark Mode Illustration */}
            <picture className="hidden w-full h-auto dark:block">
              <source
                type="image/webp"
                srcSet={`
                  /illustrations/digital-solustion-dark-600w.webp 600w,
                  /illustrations/digital-solustion-dark-1000w.webp 1000w,
                  /illustrations/digital-solustion-dark.webp 1536w
                `}
                sizes="(max-width: 600px) 600px, (max-width: 1000px) 1000px, 1536px"
              />
              <img 
                 src="/illustrations/digital-solustion-dark.png" 
                 alt="Solusi Digital Nitisaka" 
                 width="1536"
                 height="1024"
                 loading="lazy"
                 decoding="async"
                 className="w-full h-auto object-contain drop-shadow-sm opacity-0 transition-opacity duration-1000"
                 onLoad={(e) => e.currentTarget.classList.remove('opacity-0')}
              />
            </picture>
        </motion.div>

      </div>
    </section>
  );
};
