import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import {
  Layout,
  Building2,
  Store,
  ShoppingCart,
  Settings,
  TrendingUp,
  MapPin,
} from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { packageCategories } from "@/lib/data/packages";
import { Pricing, PricingPlan } from "@/components/ui/pricing";

const categoryIcons: Record<string, React.ElementType> = {
  "landing-page": Layout,
  "company-profile": Building2,
  "umkm-bisnis": Store,
  "toko-online": ShoppingCart,
  "tour-travel": MapPin,
  "custom-system": Settings,
  "seo-optimization": TrendingUp,
};

export const CategoryPackagesSection = () => {
  const [activeCategory, setActiveCategory] = useState(packageCategories[0].id);

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace("#", "");
      if (packageCategories.some(c => c.id === hash)) {
        setActiveCategory(hash);
      }
    };

    // Check hash on mount
    handleHashChange();

    // Listen for hash changes
    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  return (
    <section id="category-packages" className="py-20 relative">
      <div className="container relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-foreground tracking-tight">
            Paket <span className="text-primary">Berdasarkan Kategori</span>
          </h2>
          <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">
            Detail lengkap paket untuk setiap jenis website. Pilih yang paling
            sesuai dengan kebutuhan bisnis Anda.
          </p>
        </motion.div>

        <Tabs
          value={activeCategory}
          onValueChange={setActiveCategory}
          className="w-full px-4 sm:px-0"
        >
          <TabsList className="flex h-auto gap-2 bg-transparent justify-start mb-8 pl-2 pr-4 overflow-x-auto scrollbar-hide max-w-full">
            {packageCategories.map((category) => {
              const Icon = categoryIcons[category.id];
              return (
                <TabsTrigger
                  key={category.id}
                  value={category.id}
                  aria-label={category.name}
                  className="flex-shrink-0 flex items-center gap-2 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground px-4 py-2 rounded-lg border whitespace-nowrap"
                >
                  {Icon && <Icon className="h-4 w-4" />}
                  <span className="hidden sm:inline">{category.name}</span>
                </TabsTrigger>
              );
            })}
          </TabsList>

          {packageCategories.map((category) => {
            const pricingPlans: PricingPlan[] = category.packages.map((pkg) => ({
              name: pkg.name,
              price: pkg.priceMin,
              period: "termasuk hosting & domain",
              features: pkg.features,
              description: pkg.description,
              buttonText: "Pilih " + pkg.name,
              href: `https://wa.me/6285312000446?text=Halo,%20saya%20tertarik%20dengan%20paket%20${pkg.name}%20(${category.name})`,
              isPopular: pkg.popular || false,
            }));

            return (
              <TabsContent key={category.id} value={category.id} id={category.id} className="mt-0 pt-16 -mt-16">
                <div className="text-center mb-8">
                  <h3 className="text-2xl lg:text-3xl font-extrabold text-foreground tracking-tight">
                    {category.name}
                  </h3>
                  <p className="text-muted-foreground text-base max-w-2xl mx-auto mt-2">{category.description}</p>
                </div>

                <div className="max-w-5xl mx-auto">
                  <Pricing plans={pricingPlans} title="" description="" />
                </div>
              </TabsContent>
            );
          })}
        </Tabs>
      </div>
    </section>
  );
};
