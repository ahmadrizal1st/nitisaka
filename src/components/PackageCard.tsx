import { useState } from "react";
import { Check, Star, ChevronDown, ChevronUp } from "lucide-react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { WhatsAppButton } from "./WhatsAppButton";
import type { Package } from "@/lib/data/packages";

interface PackageCardProps {
  pkg: Package;
  showAllFeatures?: boolean;
}

export const PackageCard = ({
  pkg,
  showAllFeatures = false,
}: PackageCardProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const displayedFeatures = showAllFeatures || isExpanded
    ? pkg.features
    : pkg.features.slice(0, 6);
  const hasMoreFeatures = !showAllFeatures && pkg.features.length > 6;

  return (
    <div
      className={`glass-card relative flex flex-col transition-all duration-300 rounded-xl ${
        pkg.popular
          ? "border-primary/50 border-t-4 border-t-primary z-10 ring-1 ring-primary/30"
          : "hover:border-primary/30"
      }`}
    >
      {pkg.popular && (
        <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-white border-0">
          <Star className="mr-1 h-3 w-3 fill-current" />
          Populer
        </Badge>
      )}

      <div className="p-6 text-center pb-4 border-b border-border">
        <h3 className="text-xl font-bold text-foreground">
          {pkg.name}
        </h3>
        <div className="mt-4">
          <span className="text-3xl font-extrabold text-primary tracking-tight">
            {pkg.priceRange}
          </span>
        </div>
        <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{pkg.description}</p>
      </div>

      <div className="p-6 flex-1 bg-muted/30 dark:bg-white/5">
        <ul className="space-y-4">
          {displayedFeatures.map((feature, index) => (
            <li key={index} className="flex items-start gap-3">
              <Check className="h-5 w-5 shrink-0 text-success mt-0.5" />
              <span className="text-sm text-foreground/90">{feature}</span>
            </li>
          ))}
          {hasMoreFeatures && !isExpanded && (
            <li 
              className="text-sm text-primary text-center pt-3 font-medium cursor-pointer hover:text-primary/80 flex items-center justify-center gap-1 transition-colors"
              onClick={() => setIsExpanded(true)}
            >
              +{pkg.features.length - 6} fitur lainnya <ChevronDown className="h-4 w-4" />
            </li>
          )}
          {hasMoreFeatures && isExpanded && (
            <li 
              className="text-sm text-primary text-center pt-3 font-medium cursor-pointer hover:text-primary/80 flex items-center justify-center gap-1 transition-colors"
              onClick={() => setIsExpanded(false)}
            >
              Sembunyikan fitur <ChevronUp className="h-4 w-4" />
            </li>
          )}
        </ul>
      </div>

      <div className="p-6 pt-0 mt-auto bg-muted/30 dark:bg-white/5 rounded-b-xl">
        <WhatsAppButton
          message={`Halo Nitisaka, saya tertarik dengan paket ${pkg.name} (${pkg.priceRange}). Bisa jelaskan lebih detail?`}
          className={`w-full h-11 ${pkg.popular ? '!bg-primary hover:!bg-primary/90 !text-white border-0' : '!bg-transparent border border-border hover:!bg-accent hover:!text-accent-foreground !text-foreground'}`}
        >
          Pilih Paket
        </WhatsAppButton>
      </div>
    </div>
  );
};
