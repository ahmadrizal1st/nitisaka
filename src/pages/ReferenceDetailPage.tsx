import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Check, Tag, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { getReferenceById } from "@/lib/data/references";

const ReferenceDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const reference = id ? getReferenceById(id) : undefined;

  if (!reference) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1 container py-20 text-center">
          <h1 className="text-2xl font-bold text-foreground mb-4">
            Referensi tidak ditemukan
          </h1>
          <p className="text-muted-foreground mb-8">
            Maaf, referensi yang Anda cari tidak tersedia.
          </p>
          <Link to="/reference">
            <Button>
              <ArrowLeft className="mr-2 h-4 w-4" />
              Kembali ke Referensi
            </Button>
          </Link>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1">
        {/* Header */}
        <section className="bg-gradient-to-br from-primary/5 via-background to-accent/30 py-8">
          <div className="container">
            <Link
              to="/reference"
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              Kembali ke Referensi
            </Link>
          </div>
        </section>

        {/* Content */}
        <section className="py-12">
          <div className="container">
            <div className="grid gap-8 lg:grid-cols-2">
              {/* Image */}
              <div className="relative aspect-video rounded-xl overflow-hidden bg-muted border shadow-lg">
                <img
                  src={reference.image}
                  alt={reference.title}
                  className="h-full w-full object-cover"
                />
              </div>

              {/* Details */}
              <div>
                <Badge variant="secondary" className="mb-4">
                  {reference.category}
                </Badge>
                
                <h1 className="text-3xl font-bold text-foreground mb-4">
                  {reference.title}
                </h1>
                
                <p className="text-lg text-muted-foreground mb-6">
                  {reference.description}
                </p>

                {/* Suggested Package */}
                <Card className="mb-6 border-primary/50 bg-primary/5">
                  <CardContent className="p-4">
                    <div className="flex items-center gap-2 text-primary mb-2">
                      <Tag className="h-4 w-4" />
                      <span className="font-medium">Paket yang Direkomendasikan</span>
                    </div>
                    <p className="text-foreground font-semibold">
                      {reference.suggestedPackage}
                    </p>
                  </CardContent>
                </Card>

                {/* Features */}
                <div className="mb-8">
                  <h2 className="text-lg font-semibold text-foreground mb-4">
                    Fitur yang Terlihat
                  </h2>
                  <ul className="space-y-2">
                    {reference.features.map((feature, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <Check className="h-5 w-5 shrink-0 text-success mt-0.5" />
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <WhatsAppButton
                    message={`Halo RijalsDev, saya tertarik dengan desain seperti "${reference.title}" (${reference.category}). Bisa konsultasi lebih lanjut?`}
                    size="lg"
                    className="flex-1"
                  >
                    Konsultasi Desain Ini
                  </WhatsAppButton>
                  <Link to="/reference" className="flex-1">
                    <Button variant="outline" size="lg" className="w-full">
                      Lihat Referensi Lain
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <WhatsAppFloat />
    </div>
  );
};

export default ReferenceDetailPage;
