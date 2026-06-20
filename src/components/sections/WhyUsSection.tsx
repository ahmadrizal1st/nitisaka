import { motion } from "framer-motion";
import {
  Target,
  Code2,
  ShieldCheck,
  MessageCircle,
  Heart,
  Tag,
  Smile
} from "lucide-react";

const leftReasons = [
  {
    icon: Target,
    title: "Pendekatan Strategis",
    description: "Kami pahami tujuan bisnis Anda sebelum menulis kode.",
    iconColor: "text-blue-600 dark:text-blue-400",
    borderColor: "border-blue-200 dark:border-blue-800",
  },
  {
    icon: Code2,
    title: "Solusi Custom",
    description: "Sistem dirancang khusus sesuai proses bisnis Anda.",
    iconColor: "text-indigo-500 dark:text-indigo-400",
    borderColor: "border-indigo-200 dark:border-indigo-800",
  },
  {
    icon: ShieldCheck,
    title: "Teknologi Modern",
    description: "Aman, cepat, scalable, dan selalu up-to-date.",
    iconColor: "text-emerald-600 dark:text-emerald-400",
    borderColor: "border-emerald-200 dark:border-emerald-800",
  },
];

const rightReasons = [
  {
    icon: MessageCircle,
    title: "Komunikasi Jelas",
    description: "Proses transparan, update rutin, dan mudah dihubungi.",
    iconColor: "text-slate-600 dark:text-slate-400",
    borderColor: "border-slate-200 dark:border-slate-700",
  },
  {
    icon: Heart,
    title: "Dukungan Jangka Panjang",
    description: "Kami ada untuk Anda, bahkan setelah project selesai.",
    iconColor: "text-red-500 dark:text-red-400",
    borderColor: "border-red-200 dark:border-red-800",
  },
  {
    icon: Tag,
    title: "Harga yang Adil",
    description: "Kualitas premium dengan harga yang tetap masuk akal.",
    iconColor: "text-amber-500 dark:text-amber-400",
    borderColor: "border-amber-200 dark:border-amber-800",
  },
];

export const WhyUsSection = () => {
  return (
    <section id="kenapa-kami" className="py-24 relative overflow-hidden bg-background">
      <div className="container relative z-10 max-w-7xl mx-auto px-4">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <p className="text-sm font-bold text-[#10A37F] tracking-[0.2em] uppercase mb-4">
            KENAPA MEMILIH NITISAKA STUDIO?
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-foreground tracking-tight">
            Lebih dari Sekadar Developer, <br className="hidden md:block"/>Kami Partner Pertumbuhan Anda
          </h2>
        </motion.div>

        {/* Content Layout */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-4 relative">
          
          {/* Left Side Points */}
          <div className="flex-1 flex flex-col gap-8 md:gap-12 w-full lg:items-end">
            {leftReasons.map((reason, index) => (
              <motion.div 
                key={index} 
                initial={{ opacity: 0, x: -30, y: 20 }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="flex flex-row lg:flex-row-reverse items-center gap-4 lg:gap-6 text-left lg:text-right relative w-full lg:w-auto h-auto lg:h-28"
              >
                
                {/* Connecting Curved Dashed Lines (Desktop Only) */}
                {index === 0 && (
                  <div className="hidden lg:block absolute top-1/2 -right-8 xl:-right-16 w-8 xl:w-16 h-[calc(100%+3rem)] border-t-2 border-r-2 border-dashed border-slate-300 dark:border-slate-700 rounded-tr-[2rem] z-0 pointer-events-none"></div>
                )}
                {index === 1 && (
                  <>
                    <div className="hidden lg:block absolute top-1/2 -right-8 xl:-right-16 w-8 xl:w-16 border-t-2 border-dashed border-slate-300 dark:border-slate-700 z-0 pointer-events-none"></div>
                    <div className="hidden lg:block absolute top-1/2 -right-8 xl:-right-16 w-3 h-3 bg-[#10A37F] rounded-full -translate-y-1/2 translate-x-1/2 z-10 ring-4 ring-background"></div>
                  </>
                )}
                {index === 2 && (
                  <div className="hidden lg:block absolute bottom-1/2 -right-8 xl:-right-16 w-8 xl:w-16 h-[calc(100%+3rem)] border-b-2 border-r-2 border-dashed border-slate-300 dark:border-slate-700 rounded-br-[2rem] z-0 pointer-events-none"></div>
                )}

                {/* Icon Circle */}
                <div className={`z-10 bg-background rounded-full p-4 border-2 shadow-sm shrink-0 flex items-center justify-center ${reason.borderColor}`}>
                  <reason.icon className={`w-7 h-7 ${reason.iconColor}`} />
                </div>
                
                {/* Text Content */}
                <div className="z-10 flex-1 lg:flex-none max-w-xs">
                  <h3 className="font-bold text-lg text-foreground mb-1">{reason.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{reason.description}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Center Mascot */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8, y: 30 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="hidden lg:flex w-72 h-72 md:w-96 md:h-96 lg:w-[24rem] lg:h-[24rem] xl:w-[28rem] xl:h-[28rem] shrink-0 relative z-20 items-center justify-center my-8 lg:my-0 lg:mx-8 pointer-events-none"
          >
             <img 
               src="/illustrations/growth-partner.webp" 
               alt="Growth Partner Nitisaka" 
               width="448" height="448"
               className="w-full h-full object-contain relative z-10 drop-shadow-2xl opacity-0 transition-opacity duration-1000 scale-110 lg:scale-125" 
               onLoad={(e) => e.currentTarget.classList.remove('opacity-0')}
             />
             
             {/* Glow Background */}
             <div className="absolute inset-0 bg-[#10A37F]/10 rounded-full blur-[80px] -z-10 scale-125"></div>
          </motion.div>

          {/* Right Side Points */}
          <div className="flex-1 flex flex-col gap-8 md:gap-12 w-full lg:items-start">
            {rightReasons.map((reason, index) => (
              <motion.div 
                key={index} 
                initial={{ opacity: 0, x: 30, y: 20 }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="flex flex-row items-center gap-4 lg:gap-6 text-left relative w-full lg:w-auto h-auto lg:h-28"
              >
                
                {/* Connecting Curved Dashed Lines (Desktop Only) */}
                {index === 0 && (
                  <div className="hidden lg:block absolute top-1/2 -left-8 xl:-left-16 w-8 xl:w-16 h-[calc(100%+3rem)] border-t-2 border-l-2 border-dashed border-slate-300 dark:border-slate-700 rounded-tl-[2rem] z-0 pointer-events-none"></div>
                )}
                {index === 1 && (
                  <>
                    <div className="hidden lg:block absolute top-1/2 -left-8 xl:-left-16 w-8 xl:w-16 border-t-2 border-dashed border-slate-300 dark:border-slate-700 z-0 pointer-events-none"></div>
                    <div className="hidden lg:block absolute top-1/2 -left-8 xl:-left-16 w-3 h-3 bg-[#10A37F] rounded-full -translate-y-1/2 -translate-x-1/2 z-10 ring-4 ring-background"></div>
                  </>
                )}
                {index === 2 && (
                  <div className="hidden lg:block absolute bottom-1/2 -left-8 xl:-left-16 w-8 xl:w-16 h-[calc(100%+3rem)] border-b-2 border-l-2 border-dashed border-slate-300 dark:border-slate-700 rounded-bl-[2rem] z-0 pointer-events-none"></div>
                )}

                {/* Icon Circle */}
                <div className={`z-10 bg-background rounded-full p-4 border-2 shadow-sm shrink-0 flex items-center justify-center ${reason.borderColor}`}>
                  <reason.icon className={`w-7 h-7 ${reason.iconColor}`} />
                </div>
                
                {/* Text Content */}
                <div className="z-10 flex-1 lg:flex-none max-w-xs">
                  <h3 className="font-bold text-lg text-foreground mb-1">{reason.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{reason.description}</p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};
