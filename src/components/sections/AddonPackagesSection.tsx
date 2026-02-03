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
      "Halo RijalsDev, saya tertarik dengan layanan Domain Custom. Mohon informasi lebih lanjut.",
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
      "Halo RijalsDev, saya ingin perpanjangan domain. Mohon bantuan caranya.",
  },
  {
    icon: Server,
    title: "Perpanjangan Hosting",
    description: "Perpanjangan hosting dengan harga terjangkau",
    price: "Mulai Rp 50rb",
    options: [
      { name: "Hosting 1 Bulan", price: "Rp 50rb" },
      { name: "Hosting 3 Bulan", price: "Rp 135rb" },
      { name: "Hosting 6 Bulan", price: "Rp 250rb" },
      { name: "Hosting 12 Bulan", price: "Rp 450rb" },
    ],
    waMessage:
      "Halo RijalsDev, saya ingin perpanjangan hosting. Mohon informasi paket yang tersedia.",
  },
  {
    icon: Tag,
    title: "Bundling Domain + Hosting",
    description: "Paket lengkap domain dan hosting untuk website aktif",
    price: "Mulai Rp 250rb",
    accordion: true,
    accordionData: [
      {
        period: "Domain Baru (.com/.id) - 1 tahun",
        items: [
          { name: "Hosting 3 Bulan + SSL", price: "Rp 300rb" },
          { name: "Hosting 6 Bulan + SSL", price: "Rp 400rb" },
          { name: "Hosting 12 Bulan + SSL", price: "Rp 550rb" },
        ],
      },
      {
        period: "Custom Domain Baru - 1 tahun",
        items: [
          { name: "Hosting 3 Bulan + SSL", price: "Rp 500rb" },
          { name: "Hosting 6 Bulan + SSL", price: "Rp 650rb" },
          { name: "Hosting 12 Bulan + SSL", price: "Rp 850rb" },
        ],
      },
      {
        period: "Perpanjangan Domain - 1 tahun",
        items: [
          { name: "Hosting 3 Bulan + SSL", price: "Rp 250rb" },
          { name: "Hosting 6 Bulan + SSL", price: "Rp 350rb" },
          { name: "Hosting 12 Bulan + SSL", price: "Rp 550rb" },
        ],
      },
    ],
    waMessage:
      "Halo RijalsDev, saya tertarik dengan paket Bundling Domain + Hosting. Mana yang cocok untuk saya?",
  },
];

export const AddonPackagesSection = () => {
  const handleWhatsApp = (message: string) => {
    window.open(generateWhatsAppLink(message), "_blank");
  };

  return (
    <section id="paket-tambahan" className="py-20 bg-muted/30">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground sm:text-4xl">
            Paket <span className="text-primary">Tambahan</span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Tingkatkan dan perpanjang layanan website Anda dengan paket tambahan
            kami
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {addonPackages.map((pkg, index) => (
            <Card
              key={index}
              className="group transition-all duration-300 hover:shadow-lg hover:border-primary/50 hover:-translate-y-1 flex flex-col"
            >
              <CardContent className="p-6 flex-1 flex flex-col">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <pkg.icon className="h-6 w-6" />
                </div>
                <h3 className="mb-2 text-xl font-semibold text-foreground">
                  {pkg.title}
                </h3>
                <p className="text-muted-foreground mb-4">{pkg.description}</p>

                {pkg.accordion ? (
                  <div className="flex-1">
                    <Accordion type="single" collapsible className="w-full">
                      {pkg.accordionData?.map((section, idx) => (
                        <AccordionItem key={idx} value={`item-${idx}`}>
                          <AccordionTrigger className="py-2 px-0 text-sm font-medium">
                            {section.period}
                          </AccordionTrigger>
                          <AccordionContent className="pb-0">
                            <ul className="space-y-2">
                              {section.items.map((item, i) => (
                                <li
                                  key={i}
                                  className="flex items-start gap-2 text-sm"
                                >
                                  <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                                  <div>
                                    <span className="text-muted-foreground block">
                                      {item.name}
                                    </span>
                                    <span className="font-medium text-foreground">
                                      {item.price}
                                    </span>
                                  </div>
                                </li>
                              ))}
                            </ul>
                          </AccordionContent>
                        </AccordionItem>
                      ))}
                    </Accordion>
                  </div>
                ) : (
                  <ul className="space-y-2 mb-4 flex-1">
                    {pkg.options.map((option, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-2 text-sm text-muted-foreground"
                      >
                        <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                        <div>
                          <span>{option.name}</span>
                          <span className="block font-medium text-foreground">
                            {option.price}
                          </span>
                        </div>
                      </li>
                    ))}
                  </ul>
                )}

                <p className="text-sm font-medium text-primary mt-4">
                  {pkg.price}
                </p>
                <Button
                  onClick={() => handleWhatsApp(pkg.waMessage)}
                  className="w-full bg-whatsapp hover:bg-whatsapp/90 text-white mt-4"
                >
                  <MessageCircle className="mr-2 h-4 w-4" />
                  Pesan Sekarang
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-10 p-4 bg-muted/50 rounded-lg border text-center">
          <p className="text-sm text-muted-foreground flex items-center justify-center gap-2">
            <Lightbulb className="h-4 w-4 text-primary flex-shrink-0" />
            <span>
              <strong>Catatan:</strong> Harga domain mengikuti harga registrar
              dan ketersediaan. Perpanjangan domain dibayar oleh klien. Hosting
              aktif selama masa paket berjalan.
            </span>
          </p>
        </div>
      </div>
    </section>
  );
};
