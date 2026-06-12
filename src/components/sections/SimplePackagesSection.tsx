import { simplePackages } from "@/lib/data/packages";
import { Pricing, PricingPlan } from "@/components/ui/pricing";

export const SimplePackagesSection = () => {
  const pricingPlans: PricingPlan[] = simplePackages.map((pkg) => ({
    name: pkg.name,
    price: pkg.priceMin,
    period: "termasuk hosting & domain",
    features: pkg.features,
    description: pkg.description,
    buttonText: "Pilih " + pkg.name,
    href: `https://wa.me/6285312000446?text=Halo,%20saya%20tertarik%20dengan%20paket%20${pkg.name}%20(Populer)`,
    isPopular: pkg.popular || false,
  }));

  return (
    <section id="paket" className="py-20 relative overflow-hidden">
      <div className="container relative z-10">
        <Pricing
          plans={pricingPlans}
          title={
            <span className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-foreground tracking-tight">
              Paket <span className="text-primary">Populer</span>
            </span> as any
          }
          description="Pilih paket yang sesuai dengan kebutuhan dan budget Anda.\nSemua termasuk hosting, domain, dan support."
        />
      </div>
    </section>
  );
};
