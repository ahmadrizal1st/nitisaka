import { motion } from "framer-motion";
import { ArrowRight, X, Check, Frown, Smile, MessageSquareWarning, Database, ShieldCheck, TrendingUp, Laptop, FolderArchive, Clock } from "lucide-react";

export const BeforeAfterSection = () => {
  const beforeItems = [
    "Chat WhatsApp berantakan",
    "Data tersimpan di banyak tempat",
    "Laporan dibuat manual & lambat",
    "Sulit memantau perkembangan",
    "Proses kerja tidak efisien",
  ];

  const afterItems = [
    "Website profesional & dipercaya",
    "Data terpusat & aman",
    "Dashboard real-time",
    "Laporan otomatis & akurat",
    "Operasional efisien & terukur",
  ];

  return (
    <section className="py-24 bg-background relative overflow-hidden">
      <div className="container px-4 md:px-6 max-w-7xl mx-auto relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-sm font-bold text-primary tracking-[0.2em] uppercase mb-3">
            Before vs After
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-foreground tracking-tight">
            Kami Ubah Tantangan Menjadi Hasil Nyata
          </h2>
        </motion.div>

        <div className="flex flex-col lg:flex-row items-stretch gap-6 lg:gap-4 relative">
          {/* Card 1: Sebelum */}
          <motion.div 
            initial={{ opacity: 0, x: -30, y: 20 }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="flex-1 w-full bg-red-50/50 dark:bg-red-950/20 rounded-[2rem] p-6 md:p-10 flex flex-col sm:flex-row gap-8 items-center"
          >
            <div className="flex-1 w-full">
              <h4 className="text-red-600 dark:text-red-500 font-black tracking-widest text-sm mb-6 uppercase">
                Sebelum
              </h4>
              <ul className="space-y-4">
                {beforeItems.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <div className="mt-0.5 bg-red-100 dark:bg-red-900/50 rounded-full p-1 flex-shrink-0">
                      <X className="w-3.5 h-3.5 text-red-600 dark:text-red-400 stroke-[3]" />
                    </div>
                    <span className="text-foreground/80 font-medium text-sm md:text-base leading-tight">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Mascot Placeholder - Before */}
            <div className="w-full sm:w-48 min-h-[180px] flex-shrink-0 flex items-center justify-center relative bg-red-100/50 dark:bg-red-900/20 rounded-2xl p-4 overflow-hidden">
              <div className="absolute inset-0 bg-red-200/20 dark:bg-red-900/20 blur-xl rounded-full"></div>
              <Frown className="w-24 h-24 text-red-500/80 z-10" strokeWidth={1.5} />
              <MessageSquareWarning className="w-8 h-8 text-red-400 absolute top-4 right-6 animate-pulse" />
              <FolderArchive className="w-6 h-6 text-red-300 absolute bottom-6 left-6 -rotate-12" />
              <Clock className="w-7 h-7 text-red-400 absolute top-8 left-4 opacity-50" />
            </div>
          </motion.div>

          {/* Middle Arrow */}
          <motion.div 
            initial={{ opacity: 0, scale: 0, x: "-50%", y: "-50%" }}
            whileInView={{ opacity: 1, scale: 1, x: "-50%", y: "-50%" }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.4, delay: 0.4 }}
            className="hidden lg:flex items-center justify-center w-16 h-16 rounded-full bg-primary text-primary-foreground flex-shrink-0 z-10 absolute top-1/2 left-1/2"
          >
            <ArrowRight className="w-6 h-6 stroke-[3]" />
          </motion.div>

          {/* Card 2: Setelah */}
          <motion.div 
            initial={{ opacity: 0, x: 30, y: 20 }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex-1 w-full bg-primary/5 dark:bg-primary/10 rounded-[2rem] p-6 md:p-10 flex flex-col sm:flex-row gap-8 items-center"
          >
            <div className="flex-1 w-full">
              <h4 className="text-primary font-black tracking-widest text-sm mb-6 uppercase">
                Setelah
              </h4>
              <ul className="space-y-4">
                {afterItems.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <div className="mt-0.5 bg-primary/20 rounded-full p-1 flex-shrink-0">
                      <Check className="w-3.5 h-3.5 text-primary stroke-[3]" />
                    </div>
                    <span className="text-foreground/90 font-semibold text-sm md:text-base leading-tight">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Mascot Placeholder - After */}
            <div className="w-full sm:w-48 min-h-[180px] flex-shrink-0 flex items-center justify-center relative bg-primary/10 dark:bg-primary/20 rounded-2xl p-4 overflow-hidden">
              <div className="absolute inset-0 bg-primary/20 blur-xl rounded-full"></div>
              <Smile className="w-24 h-24 text-primary/80 z-10" strokeWidth={1.5} />
              <ShieldCheck className="w-8 h-8 text-primary absolute top-4 right-6" />
              <TrendingUp className="w-7 h-7 text-primary/70 absolute bottom-6 left-6" />
              <Laptop className="w-10 h-10 text-primary absolute bottom-4 right-4" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
