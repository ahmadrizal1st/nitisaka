import { Check, Star } from "lucide-react";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { WhatsAppButton } from "./WhatsAppButton";
import type { Package } from "@/lib/data/packages";

interface PackageCardProps {
  pkg: Package;
  showAllFeatures?: boolean;
}

export const PackageCard = ({ pkg, showAllFeatures = false }: PackageCardProps) => {
  const displayedFeatures = showAllFeatures ? pkg.features : pkg.features.slice(0, 6);
  const hasMoreFeatures = !showAllFeatures && pkg.features.length > 6;

  return (
    <Card
      className={`relative flex flex-col transition-all duration-300 hover:shadow-lg ${
        pkg.popular
          ? "border-primary shadow-lg scale-[1.02]"
          : "border-border hover:border-primary/50"
      }`}
    >
      {pkg.popular && (
        <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground">
          <Star className="mr-1 h-3 w-3" />
          Populer
        </Badge>
      )}

      <CardHeader className="text-center pb-4">
        <CardTitle className="text-xl font-bold text-foreground">{pkg.name}</CardTitle>
        <div className="mt-2">
          <span className="text-3xl font-bold text-primary">{pkg.priceRange}</span>
        </div>
        <p className="mt-2 text-sm text-muted-foreground">{pkg.description}</p>
      </CardHeader>

      <CardContent className="flex-1">
        <ul className="space-y-3">
          {displayedFeatures.map((feature, index) => (
            <li key={index} className="flex items-start gap-2">
              <Check className="h-5 w-5 shrink-0 text-success mt-0.5" />
              <span className="text-sm text-foreground">{feature}</span>
            </li>
          ))}
          {hasMoreFeatures && (
            <li className="text-sm text-muted-foreground text-center pt-2">
              +{pkg.features.length - 6} fitur lainnya
            </li>
          )}
        </ul>
      </CardContent>

      <CardFooter>
        <WhatsAppButton
          message={`Halo RijalsDev, saya tertarik dengan paket ${pkg.name} (${pkg.priceRange}). Bisa jelaskan lebih detail?`}
          className="w-full"
        >
          Pilih Paket
        </WhatsAppButton>
      </CardFooter>
    </Card>
  );
};
