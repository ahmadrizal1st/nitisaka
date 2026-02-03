import { ArrowRight, Code, Palette, Zap } from "lucide-react";
import { WhatsAppButton } from "@/components/WhatsAppButton";

export const HeroSection = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-background to-accent/30">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/2 -right-1/4 h-96 w-96 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute -bottom-1/4 -left-1/4 h-96 w-96 rounded-full bg-accent/20 blur-3xl" />
      </div>

      <div className="container relative py-20 lg:py-32">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-8 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm text-primary mb-6">
              <Zap className="h-4 w-4" />
              <span>Jasa Website Profesional #1</span>
            </div>

            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              Website Profesional,{" "}
              <span className="text-primary">Harga Terjangkau</span>
            </h1>

            <p className="mt-6 text-lg text-muted-foreground max-w-xl mx-auto lg:mx-0">
              RijalsDev membantu bisnis Anda tampil online dengan website berkualitas tinggi. 
              Dari landing page hingga sistem custom, kami siap mewujudkan visi digital Anda.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <WhatsAppButton size="lg">
                Konsultasi Gratis
              </WhatsAppButton>
              <a
                href="#paket"
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-input bg-background px-8 py-3 text-sm font-medium text-foreground hover:bg-accent transition-colors"
              >
                Lihat Paket
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>

            {/* Stats */}
            <div className="mt-12 grid grid-cols-3 gap-4 max-w-md mx-auto lg:mx-0">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">100+</div>
                <div className="text-sm text-muted-foreground">Proyek Selesai</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">50+</div>
                <div className="text-sm text-muted-foreground">Klien Puas</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">5★</div>
                <div className="text-sm text-muted-foreground">Rating</div>
              </div>
            </div>
          </div>

          {/* Illustration */}
          <div className="relative hidden lg:block">
            <div className="relative mx-auto w-full max-w-lg">
              {/* Mock browser window */}
              <div className="rounded-xl border bg-card shadow-2xl overflow-hidden">
                <div className="flex items-center gap-2 border-b bg-muted/50 px-4 py-3">
                  <div className="h-3 w-3 rounded-full bg-destructive/60" />
                  <div className="h-3 w-3 rounded-full bg-highlight/60" />
                  <div className="h-3 w-3 rounded-full bg-success/60" />
                  <div className="ml-4 flex-1 rounded-md bg-background px-3 py-1 text-xs text-muted-foreground">
                    www.website-anda.com
                  </div>
                </div>
                <div className="aspect-video bg-gradient-to-br from-primary/20 to-accent/20 p-8 flex items-center justify-center">
                  <div className="text-center space-y-4">
                    <div className="flex justify-center gap-4">
                      <div className="h-12 w-12 rounded-lg bg-primary/20 flex items-center justify-center animate-float">
                        <Code className="h-6 w-6 text-primary" />
                      </div>
                      <div className="h-12 w-12 rounded-lg bg-accent flex items-center justify-center animate-float" style={{ animationDelay: "0.5s" }}>
                        <Palette className="h-6 w-6 text-accent-foreground" />
                      </div>
                      <div className="h-12 w-12 rounded-lg bg-success/20 flex items-center justify-center animate-float" style={{ animationDelay: "1s" }}>
                        <Zap className="h-6 w-6 text-success" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="h-4 w-48 mx-auto rounded bg-primary/30" />
                      <div className="h-3 w-36 mx-auto rounded bg-muted" />
                      <div className="h-3 w-40 mx-auto rounded bg-muted" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
