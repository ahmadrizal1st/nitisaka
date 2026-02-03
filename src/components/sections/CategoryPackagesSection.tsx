import { useState } from "react";
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
import { PackageCard } from "@/components/PackageCard";

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

  return (
    <section id="paket-detail" className="py-20 bg-background">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground sm:text-4xl">
            Paket <span className="text-primary">Berdasarkan Kategori</span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Detail lengkap paket untuk setiap jenis website. Pilih yang paling
            sesuai dengan kebutuhan bisnis Anda.
          </p>
        </div>

        <Tabs
          value={activeCategory}
          onValueChange={setActiveCategory}
          className="w-full"
        >
          <TabsList className="flex h-auto gap-2 bg-transparent justify-center mb-8 overflow-x-auto pb-2 scrollbar-hide max-w-full">
            {packageCategories.map((category) => {
              const Icon = categoryIcons[category.id];
              return (
                <TabsTrigger
                  key={category.id}
                  value={category.id}
                  className="flex-shrink-0 flex items-center gap-2 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground px-4 py-2 rounded-lg border whitespace-nowrap"
                >
                  {Icon && <Icon className="h-4 w-4" />}
                  <span className="hidden sm:inline">{category.name}</span>
                </TabsTrigger>
              );
            })}
          </TabsList>

          {packageCategories.map((category) => (
            <TabsContent key={category.id} value={category.id} className="mt-0">
              <div className="text-center mb-8">
                <h3 className="text-xl font-semibold text-foreground">
                  {category.name}
                </h3>
                <p className="text-muted-foreground">{category.description}</p>
              </div>

              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto">
                {category.packages.map((pkg) => (
                  <PackageCard key={pkg.id} pkg={pkg} showAllFeatures />
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
};
