import { 
  Shield, 
  Clock, 
  HeadphonesIcon, 
  Palette, 
  Zap, 
  CreditCard 
} from "lucide-react";

const reasons = [
  {
    icon: CreditCard,
    title: "Harga Terjangkau",
    description: "Dapatkan website profesional dengan harga yang ramah di kantong tanpa mengorbankan kualitas.",
  },
  {
    icon: Palette,
    title: "Desain Modern",
    description: "Setiap website didesain dengan trend terkini, responsif, dan user-friendly.",
  },
  {
    icon: Clock,
    title: "Pengerjaan Cepat",
    description: "Proses pengerjaan efisien dengan timeline yang jelas dan komunikasi yang lancar.",
  },
  {
    icon: HeadphonesIcon,
    title: "Support 24/7",
    description: "Tim support siap membantu Anda kapanpun melalui WhatsApp.",
  },
  {
    icon: Shield,
    title: "Garansi Maintenance",
    description: "Setiap paket termasuk garansi maintenance untuk memastikan website berjalan optimal.",
  },
  {
    icon: Zap,
    title: "Website Cepat",
    description: "Optimasi performa untuk loading time yang cepat dan SEO-friendly.",
  },
];

export const WhyUsSection = () => {
  return (
    <section id="kenapa-kami" className="py-20 bg-background">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground sm:text-4xl">
            Kenapa Pilih <span className="text-primary">RijalsDev</span>?
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Kami berkomitmen memberikan layanan terbaik dengan hasil yang memuaskan
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="flex gap-4 p-6 rounded-lg border bg-card hover:shadow-md transition-shadow"
            >
              <div className="shrink-0">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <reason.icon className="h-6 w-6" />
                </div>
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-2">{reason.title}</h3>
                <p className="text-sm text-muted-foreground">{reason.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
