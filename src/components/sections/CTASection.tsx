import { motion } from "framer-motion";
import { ArrowRight, MessageCircle, Smile } from "lucide-react";
import { Button } from "@/components/ui/button";

const StarSparkle = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <path d="M12 0C12 0 12 10.5 24 12C24 12 12 13.5 12 24C12 24 12 13.5 0 12C0 12 12 10.5 12 0Z" fill="currentColor"/>
  </svg>
);

export const CTASection = () => {
  const handleWhatsApp = () => {
    window.open("https://wa.me/6281234567890?text=Halo%20Saka,%20saya%20tertarik%20untuk%20konsultasi%20website", "_blank");
  };

  return (
    <section className="w-full bg-[#0B1829] relative mt-12 md:mt-24">
      {/* Background Ambient Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-full md:w-1/2 h-full bg-gradient-to-l from-[#10A37F]/10 to-transparent"></div>
        
        {/* Magical Stars */}
        <StarSparkle className="absolute text-yellow-400 w-10 h-10 top-16 right-[38%] lg:right-[42%] animate-pulse" />
        <StarSparkle className="absolute text-yellow-400 w-6 h-6 bottom-12 left-[55%] lg:left-[50%] animate-pulse delay-150" />
        <StarSparkle className="absolute text-yellow-400 w-4 h-4 top-10 left-[60%] lg:left-[55%] animate-pulse delay-300 opacity-50" />
      </div>
      
      <div className="container max-w-7xl mx-auto px-4 md:px-6 py-16 md:py-24 relative flex flex-col md:flex-row items-center justify-between">
        
        {/* Left Content */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="relative z-10 w-full md:w-[65%] text-center md:text-left"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-4 tracking-tight leading-tight">
            Siap Membangun Solusi Digital Anda?
          </h2>
          <p className="text-slate-300 text-base md:text-lg mb-8 lg:text-xl font-medium">
            Mulai perjalanan digital Anda sekarang bersama Saka.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4">
            <Button 
              onClick={handleWhatsApp}
              className="w-full sm:w-auto bg-[#10A37F] hover:bg-[#0E8C6D] text-white rounded-xl px-8 py-6 text-base font-bold shadow-lg shadow-[#10A37F]/20 group transition-all"
            >
              Konsultasi Gratis <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              onClick={handleWhatsApp}
              variant="outline"
              className="w-full sm:w-auto bg-white hover:bg-slate-50 border-none text-[#10A37F] rounded-xl px-8 py-6 text-base font-bold shadow-lg transition-all"
            >
              Chat via WhatsApp <MessageCircle className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </motion.div>

        {/* Right Content - Mascot */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="hidden md:block absolute bottom-0 right-0 z-10 w-72 lg:w-[24rem] xl:w-[28rem] h-[120%] lg:h-[135%] xl:h-[145%] pointer-events-none"
        >
           <img 
             src="/illustrations/wave-hands.png" 
             alt="Digital Solution Saka" 
             className="w-full h-full object-contain object-right-bottom drop-shadow-2xl opacity-0 transition-opacity duration-1000 relative z-20" 
             onLoad={(e) => e.currentTarget.classList.remove('opacity-0')} 
           />
        </motion.div>

      </div>
    </section>
  );
};
