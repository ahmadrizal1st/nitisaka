import { WhatsAppButton } from "@/components/WhatsAppButton";

export const CTASection = () => {
  return (
    <section className="py-20 hero-gradient text-primary-foreground">
      <div className="container text-center">
        <h2 className="text-3xl font-bold sm:text-4xl">
          Siap Memulai Proyek Website Anda?
        </h2>
        <p className="mt-4 text-lg text-primary-foreground/80 max-w-2xl mx-auto">
          Konsultasikan kebutuhan website Anda dengan tim kami. Gratis konsultasi, tanpa komitmen!
        </p>
        <div className="mt-8">
          <WhatsAppButton 
            size="lg" 
            className="bg-white text-primary hover:bg-white/90"
          >
            Konsultasi Gratis Sekarang
          </WhatsAppButton>
        </div>
      </div>
    </section>
  );
};
