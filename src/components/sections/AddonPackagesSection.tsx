import { motion } from "framer-motion";
import {
  Globe,
  RefreshCw,
  Server,
  Tag,
  CheckCircle2,
  MessageCircle,
  Lightbulb,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { generateWhatsAppLink } from "@/lib/data/packages";

const addonPackages = [
  {
    icon: Globe,
    title: "Domain Custom",
    description: "Domain internasional untuk identitas online yang profesional",
    price: "Mulai Rp 100rb/th",
    options: [
      {
        name: "Domain Internasional (.net/.org/.info/.biz) - 1 tahun",
        price: "Rp 150rb - Rp 350rb",
      },
      {
        name: "Domain Branding (.tech/.site/.store/.online) - 1 tahun",
        price: "Rp 200rb - Rp 700rb",
      },
      {
        name: "Domain Lokal (.my.id/.web.id/.co.id) - 1 tahun",
        price: "Rp 100rb - Rp 500rb",
      },
    ],
    waMessage:
      "Halo Nitisaka, saya tertarik dengan layanan Domain Custom. Mohon informasi lebih lanjut.",
  },
  {
    icon: RefreshCw,
    title: "Perpanjangan Domain",
    description: "Perpanjangan domain agar website tetap aktif",
    price: "Mulai Rp 100rb/th",
    options: [
      {
        name: "Domain Standar (.com/.id) - 1 tahun",
        price: "Rp 100rb - Rp 200rb",
      },
      { name: "Domain Custom/Premium - 1 tahun", price: "Rp 150rb - Rp 800rb" },
    ],
    waMessage:
      "Halo Nitisaka, saya ingin perpanjangan domain. Mohon bantuan caranya.",
  },
  {
    icon: Server,
    title: "Perpanjangan Hosting",
    description: "Perpanjangan hosting dengan harga terjangkau",
    price: "Mulai Rp 25rb",
    options: [
      { name: "Hosting 1 Bulan", price: "Rp 25rb" },
      { name: "Hosting 3 Bulan", price: "Rp 75rb" },
      { name: "Hosting 6 Bulan", price: "Rp 150rb" },
      { name: "Hosting 12 Bulan", price: "Rp 300rb" },
    ],
    waMessage:
      "Halo Nitisaka, saya ingin perpanjangan hosting. Mohon informasi paket yang tersedia.",
  },
  {
    icon: Tag,
    title: "Bundling Domain + Hosting",
    description: "Paket lengkap domain dan hosting untuk website aktif",
    price: "Mulai Rp 225rb",
    accordion: true,
    accordionData: [
      {
        period: "Domain Baru (.com/.id) - 1 tahun",
        items: [
          { name: "Hosting 3 Bulan + SSL", price: "Rp 300rb" },
          { name: "Hosting 6 Bulan + SSL", price: "Rp 375rb" },
          { name: "Hosting 12 Bulan + SSL", price: "Rp 525rb" },
        ],
      },
      {
        period: "Custom Domain Baru - 1 tahun",
        items: [
          { name: "Hosting 3 Bulan + SSL", price: "Rp 500rb" },
          { name: "Hosting 6 Bulan + SSL", price: "Rp 575rb" },
          { name: "Hosting 12 Bulan + SSL", price: "Rp 725rb" },
        ],
      },
      {
        period: "Perpanjangan Domain - 1 tahun",
        items: [
          { name: "Hosting 3 Bulan + SSL", price: "Rp 250rb" },
          { name: "Hosting 6 Bulan + SSL", price: "Rp 325rb" },
          { name: "Hosting 12 Bulan + SSL", price: "Rp 475rb" },
        ],
      },
    ],
    waMessage:
      "Halo Nitisaka, saya tertarik dengan paket Bundling Domain + Hosting. Mana yang cocok untuk saya?",
  },
];

export const AddonPackagesSection = () => {
  const handleWhatsApp = (message: string) => {
    window.open(generateWhatsAppLink(message), "_blank");
  };

  return (
    <section id="additional-packages" className="py-20 relative">
      <div className="container relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-foreground tracking-tight">
            Paket <span className="text-primary">Tambahan</span>
          </h2>
          <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">
            Tingkatkan dan perpanjang layanan website Anda dengan paket tambahan
            kami
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-[1400px] mx-auto">
          {addonPackages.map((pkg, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="flex flex-col h-full bg-background/40 backdrop-blur-xl border border-border/60 hover:border-primary/40 rounded-3xl p-5 md:p-6 hover:shadow-2xl hover:shadow-primary/5 transition-all duration-500 overflow-hidden relative group"
            >
              {/* Watermark Icon (Top Right) */}
              <div className="absolute -top-12 -right-12 w-48 h-48 bg-primary/15 rounded-full flex items-center justify-center pointer-events-none z-0 group-hover:scale-110 group-hover:bg-primary/25 transition-all duration-700">
                <pkg.icon className="w-28 h-28 text-background/90 drop-shadow-sm mr-6 mt-6" strokeWidth={2.5} />
              </div>

              {/* Top Area (Info) */}
              <div className="w-full flex flex-col z-10 border-b border-border/40 pb-5 mb-5 mt-2">
                <div className="flex-1">
                  <h3 className="mb-2 text-xl font-extrabold text-foreground tracking-tight">
                    {pkg.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                    {pkg.description}
                  </p>
                </div>
                <div className="mt-auto">
                  <p className="text-xs font-bold text-muted-foreground mb-1 uppercase tracking-widest">Mulai Dari</p>
                  <p className="text-2xl font-black text-foreground">
                    {pkg.price.replace('Mulai ', '')}
                  </p>
                </div>
              </div>

              {/* Bottom Area (Options & Actions) */}
              <div className="w-full flex flex-col flex-1 z-10 justify-between">
                {pkg.accordion ? (
                  <div className="flex-1 mb-5">
                    <Accordion type="single" collapsible className="w-full">
                      {pkg.accordionData?.map((section, idx) => (
                        <AccordionItem key={idx} value={`item-${idx}`} className="border-border/50">
                          <AccordionTrigger className="py-3 px-1 text-sm font-bold hover:no-underline hover:text-primary transition-colors text-left">
                            {section.period}
                          </AccordionTrigger>
                          <AccordionContent className="pb-3">
                            <ul className="space-y-1.5 mt-1">
                              {section.items.map((item, i) => (
                                <li
                                  key={i}
                                  className="flex items-start justify-between text-xs bg-background/60 py-2 px-3 rounded-lg border border-border/40 gap-3 hover:bg-background transition-colors"
                                >
                                  <div className="flex items-start gap-2 flex-1 min-w-0">
                                    <CheckCircle2 className="h-3.5 w-3.5 text-primary flex-shrink-0 mt-0.5" />
                                    <span className="text-foreground font-medium break-words leading-tight">{item.name}</span>
                                  </div>
                                  <span className="font-bold text-foreground whitespace-nowrap flex-shrink-0 text-right mt-0.5">{item.price}</span>
                                </li>
                              ))}
                            </ul>
                          </AccordionContent>
                        </AccordionItem>
                      ))}
                    </Accordion>
                  </div>
                ) : (
                  <ul className="space-y-1.5 flex-1 mb-5 mt-2">
                    {pkg.options.map((option, idx) => (
                      <li
                        key={idx}
                        className="flex items-start justify-between text-xs bg-background/60 py-2 px-3 rounded-lg border border-border/40 gap-3 hover:bg-background transition-colors"
                      >
                        <div className="flex items-start gap-2 flex-1 min-w-0">
                          <CheckCircle2 className="h-3.5 w-3.5 text-primary flex-shrink-0 mt-0.5" />
                          <span className="text-foreground font-medium break-words leading-tight">{option.name}</span>
                        </div>
                        <span className="font-bold text-foreground whitespace-nowrap flex-shrink-0 text-right mt-0.5">{option.price}</span>
                      </li>
                    ))}
                  </ul>
                )}

                <div className="mt-auto">
                  <Button
                    onClick={() => handleWhatsApp(pkg.waMessage)}
                    className="group relative w-full gap-2 overflow-hidden text-base font-semibold tracking-tight py-6 transform-gpu ring-offset-current transition-all duration-300 ease-out hover:ring-2 hover:ring-primary hover:ring-offset-1 bg-primary text-primary-foreground"
                  >
                    <MessageCircle className="h-5 w-5" />
                    Pesan Sekarang
                  </Button>
                </div>
              </div>

              {/* Ambient Glow */}
              <div className="absolute -top-32 -left-32 w-64 h-64 bg-primary/5 rounded-full blur-[80px] group-hover:bg-primary/15 transition-colors duration-700 pointer-events-none z-0"></div>
              <div className="absolute -bottom-32 -right-32 w-64 h-64 bg-secondary/5 rounded-full blur-[80px] group-hover:bg-secondary/15 transition-colors duration-700 pointer-events-none z-0"></div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-10 p-4 bg-muted/50 rounded-lg border text-center"
        >
          <p className="text-sm text-muted-foreground flex items-center justify-center gap-2">
            <Lightbulb className="h-4 w-4 text-primary flex-shrink-0" />
            <span>
              <strong>Catatan:</strong> Harga domain mengikuti harga registrar
              dan ketersediaan. Perpanjangan domain dibayar oleh klien. Hosting
              aktif selama masa paket berjalan.
            </span>
          </p>
        </motion.div>
      </div>
    </section>
  );
};
