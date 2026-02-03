import { Layout, Building2, Store, ShoppingCart, Settings } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const services = [
  {
    icon: Layout,
    title: "Landing Page",
    description: "Website satu halaman yang fokus pada konversi dan promosi produk/jasa Anda.",
    price: "Mulai Rp 800rb",
  },
  {
    icon: Building2,
    title: "Company Profile",
    description: "Website profesional untuk membangun kredibilitas dan memperkenalkan perusahaan.",
    price: "Mulai Rp 1.7jt",
  },
  {
    icon: Store,
    title: "Website UMKM/Bisnis",
    description: "Solusi digital lengkap dengan katalog produk untuk bisnis kecil dan menengah.",
    price: "Mulai Rp 2.5jt",
  },
  {
    icon: ShoppingCart,
    title: "Toko Online",
    description: "E-commerce dengan keranjang belanja, manajemen produk, dan checkout system.",
    price: "Mulai Rp 4jt",
  },
  {
    icon: Settings,
    title: "Custom System",
    description: "Sistem web sesuai kebutuhan bisnis Anda dengan fitur dan fungsionalitas khusus.",
    price: "Mulai Rp 6jt",
  },
];

export const ServicesSection = () => {
  return (
    <section id="layanan" className="py-20 bg-background">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground sm:text-4xl">
            Layanan <span className="text-primary">Kami</span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Berbagai pilihan website sesuai kebutuhan bisnis Anda, dari yang sederhana hingga kompleks
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <Card
              key={index}
              className="group transition-all duration-300 hover:shadow-lg hover:border-primary/50 hover:-translate-y-1"
            >
              <CardContent className="p-6">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <service.icon className="h-6 w-6" />
                </div>
                <h3 className="mb-2 text-xl font-semibold text-foreground">
                  {service.title}
                </h3>
                <p className="text-muted-foreground mb-4">{service.description}</p>
                <p className="text-sm font-medium text-primary">{service.price}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
