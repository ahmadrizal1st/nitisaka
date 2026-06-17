import { motion } from "framer-motion";
import { ArrowRight, Code, Zap, ShoppingBag, Search, Monitor, LayoutDashboard, Users, Shield, Layers } from "lucide-react";
import { GlowyWavesHero } from "@/components/ui/glowy-waves-hero-shadcnui";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { useState, useEffect, useRef } from "react";

const EcommerceMockup = () => (
  <div className="flex flex-col h-full w-full bg-background overflow-hidden">
    {/* Browser Title Bar */}
    <div className="flex items-center gap-2 px-4 py-3 border-b border-border bg-muted/50">
      <div className="flex gap-1.5">
        <div className="h-3 w-3 rounded-full bg-red-500/80" />
        <div className="h-3 w-3 rounded-full bg-yellow-500/80" />
        <div className="h-3 w-3 rounded-full bg-green-500/80" />
      </div>
      <div className="flex-1 flex justify-center">
        <img src="/light/logo-text-nobg.png" alt="Nitisaka Logo" className="h-4 w-auto block dark:hidden opacity-90" />
        <img src="/dark/logo-text-nobg.png" alt="Nitisaka Logo" className="h-4 w-auto hidden dark:block opacity-90" />
      </div>
      <div className="w-10"></div>
    </div>

    {/* Website Header */}
    <div className="flex items-center justify-between px-6 py-4 border-b border-border bg-card/50">
      <div className="hidden sm:flex gap-6 text-xs text-muted-foreground font-medium">
        <span className="text-foreground">Home</span>
        <span>Products</span>
        <span>Categories</span>
        <span>Sale</span>
      </div>
      <div className="flex items-center gap-3">
        <Search className="h-4 w-4 text-muted-foreground" />
        <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center relative">
          <ShoppingBag className="h-3 w-3 text-primary" />
          <div className="absolute -top-1 -right-1 h-3 w-3 rounded-full bg-red-500 flex items-center justify-center border-2 border-background"></div>
        </div>
      </div>
    </div>

    {/* Hero */}
    <div className="flex-1 p-8 flex flex-col justify-center bg-gradient-to-br from-transparent to-muted/30">
      <div className="grid grid-cols-2 gap-8 items-center">
        <div className="space-y-5">
          <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-[10px] font-semibold bg-primary/10 text-primary border-transparent">
            New Summer Collection
          </div>
          <div className="space-y-2">
            <div className="h-8 w-full bg-foreground/90 rounded"></div>
            <div className="h-8 w-4/5 bg-foreground/90 rounded"></div>
          </div>
          <div className="space-y-2">
            <div className="h-3 w-full bg-muted-foreground/30 rounded"></div>
            <div className="h-3 w-4/5 bg-muted-foreground/30 rounded"></div>
          </div>
          <div className="pt-2 flex gap-3">
            <div className="h-10 w-28 bg-primary rounded-md shadow-sm"></div>
            <div className="h-10 w-28 border border-border rounded-md bg-card"></div>
          </div>
        </div>
        
        <div className="relative">
          <div className="aspect-[4/3] bg-card rounded-2xl border border-border shadow-md overflow-hidden relative">
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/5 to-transparent" />
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[85%] h-[90%] bg-muted rounded-t-2xl border border-b-0 border-border shadow-inner" />
            {/* Product card inside hero */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[55%] h-[55%] bg-background rounded-xl shadow-xl border border-border px-6 pb-4 pt-6 flex flex-col">
               <div className="flex-1 bg-muted rounded-lg mb-8"></div>
               <div className="h-3 w-4/5 bg-foreground/70 rounded-full mb-2.5"></div>
               <div className="h-3 w-3/5 bg-primary/70 rounded-full"></div>
            </div>
          </div>
          {/* Floating badge */}
          <div className="absolute -left-6 top-8 h-14 w-28 bg-background shadow-xl rounded-xl border border-border p-2 flex flex-col justify-center items-center">
             <div className="text-[10px] text-muted-foreground mb-1">Special Offer</div>
             <div className="text-sm font-bold text-primary">50% OFF</div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const DashboardMockup = () => (
  <div className="flex flex-col h-full w-full bg-background overflow-hidden">
    {/* Header */}
    <div className="flex items-center gap-2 border-b border-border bg-muted/50 px-4 py-3">
      <div className="flex gap-1.5">
        <div className="h-3 w-3 rounded-full bg-red-500/80" />
        <div className="h-3 w-3 rounded-full bg-yellow-500/80" />
        <div className="h-3 w-3 rounded-full bg-green-500/80" />
      </div>
      <div className="flex-1 flex justify-center">
        <img src="/light/logo-text-nobg.png" alt="Nitisaka Logo" className="h-4 w-auto block dark:hidden opacity-90" />
        <img src="/dark/logo-text-nobg.png" alt="Nitisaka Logo" className="h-4 w-auto hidden dark:block opacity-90" />
      </div>
      <div className="w-10"></div>
    </div>

    {/* Body */}
    <div className="flex flex-1">
      {/* Sidebar */}
      <div className="w-48 border-r border-border bg-muted/30 p-6 flex flex-col gap-3">
        {[
          { label: "Dashboard", active: true },
          { label: "Development" },
          { label: "Projects" },
          { label: "Teams" },
          { label: "Analytics" },
          { label: "Settings" }
        ].map((item, i) => (
          <div key={i} className={`px-4 py-2.5 text-sm rounded-md ${item.active ? 'bg-primary/20 text-primary font-medium' : 'text-muted-foreground hover:bg-muted/80'}`}>
            {item.label}
          </div>
        ))}
      </div>

      {/* Main Content */}
      <div className="flex-1 p-8 bg-gradient-to-br from-transparent to-primary/5">
        <div className="text-base font-medium mb-6 text-foreground">Overview</div>
        
        {/* Stats row */}
        <div className="grid grid-cols-3 gap-6 mb-10">
          {[
            { label: "Total Projects", value: "128", inc: "+12%" },
            { label: "Active Users", value: "1,240", inc: "+16%" },
            { label: "Deployments", value: "320", inc: "+8%" }
          ].map((stat, i) => (
            <div key={i} className="rounded-xl border border-border bg-card p-5 shadow-sm hover:shadow-md transition-shadow cursor-pointer">
              <div className="text-xs text-muted-foreground mb-2">{stat.label}</div>
              <div className="flex items-baseline gap-3">
                <div className="text-2xl font-bold text-foreground">{stat.value}</div>
                <div className="text-xs text-green-500 font-medium">{stat.inc}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-sm font-medium mb-6 text-foreground">Recent Activity</div>
        <div className="space-y-6">
          {[1, 2, 3, 4, 5].map((i) => (
            <div key={i} className="flex items-center gap-4 border-t border-border pt-4 group cursor-pointer">
              <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <Code className="h-4 w-4 text-primary" />
              </div>
              <div className="flex-1">
                <div className="h-2.5 w-32 bg-muted-foreground/20 rounded mb-2"></div>
                <div className="h-2 w-20 bg-muted-foreground/10 rounded"></div>
              </div>
              <div className="text-xs text-muted-foreground">1h ago</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
);

export const HeroSection = () => {
  const [activeMockup, setActiveMockup] = useState<'ecommerce' | 'dashboard'>('ecommerce');
  const containerRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(1);

  useEffect(() => {
    let animationFrameId: number;
    const updateScale = () => {
      if (containerRef.current) {
        animationFrameId = requestAnimationFrame(() => {
          const width = containerRef.current!.offsetWidth;
          const BASE_WIDTH = 1024;
          setScale(width / BASE_WIDTH);
        });
      }
    };
    
    updateScale();
    window.addEventListener('resize', updateScale);
    return () => {
      window.removeEventListener('resize', updateScale);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveMockup(prev => prev === 'ecommerce' ? 'dashboard' : 'ecommerce');
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <GlowyWavesHero className="pt-16 pb-16 lg:pt-32 lg:pb-24 z-20">
      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center">
          {/* Top Content */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-12"
          >
            <p className="text-primary text-[10px] sm:text-xs font-bold tracking-[0.15em] uppercase mb-6">
              Step by step, build your future.
            </p>

            <h1 className="text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl lg:text-6xl leading-tight">
              Kami Bantu Bisnis Anda<br className="hidden sm:block" />
              Bertumbuh dengan<br className="hidden sm:block" />
              <span className="text-primary">Website & Software</span><br className="hidden sm:block" />
              yang Tepat.
            </h1>
          </motion.div>

          {/* Illustration - Animated Mockups */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative mx-auto w-full max-w-5xl mb-12 group"
          >
            <div 
              ref={containerRef}
              className="relative w-full rounded-xl border border-border bg-card/90 backdrop-blur-xl shadow-2xl overflow-hidden perspective-1000"
              style={{ height: `${600 * scale}px` }}
            >
              <div 
                className="absolute top-0 left-0 origin-top-left"
                style={{ 
                  width: '1024px', 
                  height: '600px', 
                  transform: `scale(${scale})` 
                }}
              >
                {/* Ecommerce Mockup */}
                <div className={`absolute inset-0 transition-all duration-1000 ease-[cubic-bezier(0.87,0,0.13,1)] origin-top ${
                  activeMockup === 'ecommerce' 
                    ? 'opacity-100 scale-100 translate-y-0' 
                    : 'opacity-0 scale-95 -translate-y-16 pointer-events-none blur-sm'
                }`}>
                  <EcommerceMockup />
                </div>

                {/* Dashboard Mockup */}
                <div className={`absolute inset-0 transition-all duration-1000 ease-[cubic-bezier(0.87,0,0.13,1)] origin-bottom ${
                  activeMockup === 'dashboard' 
                    ? 'opacity-100 scale-100 translate-y-0' 
                    : 'opacity-0 scale-105 translate-y-16 pointer-events-none blur-sm'
                }`}>
                  <DashboardMockup />
                </div>
              </div>
            </div>
            
            {/* Toggle Badge */}
            <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 flex items-center gap-1.5 bg-background border border-border shadow-lg rounded-full p-1.5 z-20">
              <button 
                onClick={() => setActiveMockup('ecommerce')}
                className={`px-3 py-1.5 rounded-full transition-all ${activeMockup === 'ecommerce' ? 'bg-primary text-primary-foreground shadow-md' : 'hover:bg-muted text-muted-foreground'}`}
                aria-label="Website"
              >
                <Monitor className="h-4 w-4" />
              </button>
              <button 
                onClick={() => setActiveMockup('dashboard')}
                className={`px-3 py-1.5 rounded-full transition-all ${activeMockup === 'dashboard' ? 'bg-primary text-primary-foreground shadow-md' : 'hover:bg-muted text-muted-foreground'}`}
                aria-label="Software"
              >
                <LayoutDashboard className="h-4 w-4" />
              </button>
            </div>
          </motion.div>

          {/* Bottom Content */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center max-w-2xl mx-auto mt-4 mb-20 lg:mb-24"
          >
            <p className="text-lg text-muted-foreground mb-8">
              Solusi digital yang dirancang untuk meningkatkan kredibilitas, mengotomasi operasional, dan mendorong pertumbuhan bisnis Anda.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <WhatsAppButton size="lg" className="h-12 px-8 shadow-lg shadow-primary/20 bg-primary hover:bg-primary/90 text-white font-medium">
                Konsultasi Gratis <ArrowRight className="ml-2 h-4 w-4" />
              </WhatsAppButton>
              <a
                href="/#portofolio"
                className="inline-flex h-12 items-center justify-center rounded-lg border border-border bg-card/50 backdrop-blur-md px-8 py-3 text-sm font-medium text-foreground hover:bg-accent hover:text-accent-foreground transition-colors shadow-sm"
              >
                Lihat Portofolio
              </a>
            </div>
          </motion.div>

          {/* 4 Column Features - Moved from MockupSection to naturally sit at the bottom of Hero */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto relative z-30">
            {[
              {
                icon: <Zap className="h-6 w-6 text-primary" />,
                title: "Performa Cepat",
                desc: "Website dioptimasi penuh agar dimuat seketika tanpa waktu tunggu lama."
              },
              {
                icon: <Monitor className="h-6 w-6 text-primary" />,
                title: "Desain Responsif",
                desc: "Tampilan memukau dan sempurna di layar HP, tablet, maupun desktop."
              },
              {
                icon: <Shield className="h-6 w-6 text-primary" />,
                title: "Keamanan Ganda",
                desc: "Sistem Anda diproteksi dengan keamanan tingkat tinggi dari serangan siber."
              },
              {
                icon: <Users className="h-6 w-6 text-primary" />,
                title: "Dukungan Penuh",
                desc: "Tim support kami selalu siap membantu setiap kendala teknis yang Anda alami."
              }
            ].map((feature, idx) => (
              <motion.div 
                key={idx} 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 + idx * 0.1 }}
                className="bg-card p-6 rounded-xl border border-border shadow-sm flex flex-col h-full relative z-10"
              >
                <div className="mb-4 h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  {feature.icon}
                </div>
                <h2 className="text-lg font-bold text-foreground mb-2">{feature.title}</h2>
                <p className="text-sm text-muted-foreground flex-1 leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </GlowyWavesHero>
  );
};
