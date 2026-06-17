import { motion } from "framer-motion";
import { ArrowRight, FileText, Globe, Settings, TrendingUp } from "lucide-react";

export const JourneySection = () => {
  const steps = [
    {
      id: "01",
      title: "Bisnis Manual",
      description: "Proses masih manual, data tersebar, laporan lambat, dan risiko human error tinggi.",
      image: "/illustrations/manual-business.png",
      icon: FileText,
    },
    {
      id: "02",
      title: "Website Profesional",
      description: "Tampilkan bisnis Anda secara profesional dan mudah ditemukan oleh pelanggan.",
      image: "/illustrations/professional-website.png",
      icon: Globe,
    },
    {
      id: "03",
      title: "Sistem & Otomatisasi",
      description: "Kelola operasional lebih efisien dengan sistem yang terintegrasi dan otomatis.",
      image: "/illustrations/systems-and-automation.png",
      icon: Settings,
    },
    {
      id: "04",
      title: "Growth & Scale",
      description: "Ambil keputusan lebih cepat berdasarkan data, tingkatkan penjualan, dan kembangkan bisnis tanpa batas.",
      image: "/illustrations/growth-and-scale.png",
      icon: TrendingUp,
    },
  ];

  return (
    <section className="py-24 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <p className="text-primary text-xs sm:text-sm font-bold tracking-[0.2em] uppercase mb-4">
            Perjalanan Digital Bisnis Anda
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 flex-wrap">
            <span>Dari Manual</span> 
            <ArrowRight className="text-primary w-6 h-6 sm:w-8 sm:h-8 hidden sm:block" /> 
            <span>Digital</span> 
            <ArrowRight className="text-primary w-6 h-6 sm:w-8 sm:h-8 hidden sm:block" /> 
            <span>Growth</span>
          </h2>
        </motion.div>

        <div className="relative mt-16 max-w-7xl mx-auto">
          {/* Continuous Line (Desktop only) */}
          <div className="hidden lg:block absolute top-[256px] left-[10%] right-[10%] h-[2px] bg-primary/20 z-0" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 relative z-10">
            {steps.map((step, index) => (
              <motion.div 
                key={index} 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="flex flex-col items-center lg:items-start text-center lg:text-left"
              >
                
                {/* Illustration */}
                <div className="w-full h-56 lg:h-64 mb-6 flex justify-center lg:justify-start items-end">
                  <picture>
                    <source
                      type="image/webp"
                      srcSet={`
                        ${step.image.replace('.png', '-828w.webp')} 828w,
                        ${step.image.replace('.png', '-1200w.webp')} 1200w,
                        ${step.image.replace('.png', '.webp')} 1402w
                      `}
                      sizes="(max-width: 828px) 828px, (max-width: 1200px) 1200px, 1402px"
                    />
                    <img 
                      src={step.image} 
                      alt={step.title} 
                      width="1402"
                      height="1122"
                      loading="lazy"
                      decoding="async"
                      className="max-h-full object-contain drop-shadow-sm w-auto" 
                    />
                  </picture>
                </div>

                {/* Timeline node */}
                <div className="w-full flex justify-center lg:justify-start mb-8 relative">
                   <div className="w-12 h-12 rounded-full bg-background border-[3px] border-primary/20 flex items-center justify-center z-10">
                     <div className="w-7 h-7 rounded-full bg-primary flex items-center justify-center">
                        <step.icon className="w-3.5 h-3.5 text-white" />
                     </div>
                   </div>
                   {/* Mobile vertical line connecting nodes to text */}
                   <div className="lg:hidden absolute top-12 bottom-[-48px] left-1/2 -translate-x-1/2 w-[2px] bg-primary/20 -z-10"></div>
                </div>

                {/* Content */}
                <div className="px-4 lg:px-0">
                  <div className="text-primary font-bold text-xl mb-2">{step.id}</div>
                  <h3 className="text-xl font-bold text-foreground mb-3">{step.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>

              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
