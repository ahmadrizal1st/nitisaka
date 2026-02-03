import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ReferenceCard } from "@/components/ReferenceCard";
import { references } from "@/lib/data/references";

export const ReferencesPreviewSection = () => {
  // Show only first 6 references
  const previewReferences = references.slice(0, 6);

  return (
    <section id="referensi" className="py-20 bg-muted/30">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground sm:text-4xl">
            Contoh <span className="text-primary">Referensi</span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Lihat berbagai contoh desain website yang bisa menjadi inspirasi untuk bisnis Anda
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {previewReferences.map((reference) => (
            <ReferenceCard key={reference.id} reference={reference} />
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link to="/reference">
            <Button size="lg" variant="outline" className="gap-2">
              Lihat Semua Referensi
              <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};
