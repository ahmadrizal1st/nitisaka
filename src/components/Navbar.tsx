import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Menu, X, Code, Globe, PenTool, Database, Zap, Shield, ChevronDown, MonitorSmartphone, Monitor, Layers, TrendingUp, Wrench, Layout, Building2, Store, ShoppingCart, MapPin, Settings, LayoutGrid } from "lucide-react";
import { Button } from "@/components/ui/button";
import { WhatsAppButton } from "./WhatsAppButton";
import { ThemeToggle } from "./ThemeToggle";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavGridCard,
  NavSmallItem,
  NavLargeItem,
  NavItemMobile,
  type NavItemType,
} from "@/components/ui/navigation-menu";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const servicesLinks: NavItemType[] = [
  {
    title: "Company Profile",
    href: "/#layanan",
    description: "Website profesional untuk membangun kredibilitas bisnis Anda",
    icon: Globe,
  },
  {
    title: "Web Application",
    href: "/#layanan",
    description: "Sistem informasi kustom sesuai kebutuhan operasional",
    icon: Code,
  },
  {
    title: "E-Commerce",
    href: "/#layanan",
    description: "Toko online lengkap dengan integrasi pembayaran",
    icon: MonitorSmartphone,
  },
  {
    title: "Landing Page",
    href: "/#layanan",
    description: "Halaman konversi tinggi untuk campaign marketing",
    icon: Zap,
  },
  {
    title: "UI/UX Design",
    href: "/#layanan",
    description: "Desain antarmuka modern dan user-friendly",
    icon: PenTool,
  },
  {
    title: "API Integration",
    href: "/#layanan",
    description: "Penghubung sistem handal dan aman",
    icon: Database,
  },
  {
    title: "SEO Optimization",
    href: "/#layanan",
    description: "Tingkatkan ranking mesin pencari",
    icon: TrendingUp,
  },
  {
    title: "Maintenance",
    href: "/#layanan",
    description: "Dukungan teknis responsif",
    icon: Wrench,
  },
];

const packagesLinks: NavItemType[] = [
  {
    title: "Popular Package",
    href: "/#popular-packages",
    description: "Pilihan paket Starter, Pro, dan Premium untuk segala kebutuhan",
    icon: Layers,
  },
  {
    title: "Additional Packages",
    href: "/#additional-packages",
    description: "Layanan tambahan seperti perpanjangan domain dan hosting",
    icon: Wrench,
  },
  {
    title: "Landing Page",
    href: "/#landing-page",
    description: "Website satu halaman yang fokus pada konversi",
    icon: Layout,
  },
  {
    title: "Company Profile",
    href: "/#company-profile",
    description: "Website profesional untuk profil perusahaan",
    icon: Building2,
  },
  {
    title: "UMKM & Bisnis",
    href: "/#umkm-bisnis",
    description: "Website untuk UMKM dan bisnis lokal",
    icon: Store,
  },
  {
    title: "Toko Online",
    href: "/#toko-online",
    description: "Website e-commerce untuk jualan online",
    icon: ShoppingCart,
  },
  {
    title: "Tour & Travel",
    href: "/#tour-travel",
    description: "Website promosi paket tour dan wisata",
    icon: MapPin,
  },
  {
    title: "Custom System",
    href: "/#custom-system",
    description: "Sistem web custom sesuai kebutuhan",
    icon: Settings,
  },
];

const portfolioLinks: NavItemType[] = [
  {
    title: "Landing Page",
    href: "/reference?category=landing-page#reference-grid",
    description: "Website satu halaman yang fokus pada konversi",
    icon: Layout,
  },
  {
    title: "Company Profile",
    href: "/reference?category=company-profile#reference-grid",
    description: "Website profesional untuk profil perusahaan",
    icon: Building2,
  },
  {
    title: "UMKM & Bisnis",
    href: "/reference?category=umkm-bisnis#reference-grid",
    description: "Website untuk UMKM dan bisnis lokal",
    icon: Store,
  },
  {
    title: "Toko Online",
    href: "/reference?category=toko-online#reference-grid",
    description: "Website e-commerce untuk jualan online",
    icon: ShoppingCart,
  },
  {
    title: "Tour & Travel",
    href: "/reference?category=tour-travel#reference-grid",
    description: "Website promosi paket tour dan wisata",
    icon: MapPin,
  },
  {
    title: "Custom System",
    href: "/reference?category=custom-system#reference-grid",
    description: "Sistem web custom sesuai kebutuhan",
    icon: Settings,
  },
];

export const Navbar = () => {
  const navigate = useNavigate();

  const handleLinkClick = (href: string) => {
    if (href.startsWith("/#") && window.location.pathname === "/") {
      const targetId = href.split("#")[1];
      
      window.history.pushState(null, "", href);
      window.dispatchEvent(new Event("hashchange"));
      
      setTimeout(() => {
        let element = document.getElementById(targetId);
        if (!element) {
          element = document.getElementById("category-packages");
        }
        
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        } else {
          window.scrollTo({ top: 0, behavior: "smooth" });
        }
      }, 100);
    } else {
      navigate(href);
      if (!href.includes("#")) {
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else {
        // If we are already on the same page but changing search params + hash
        const targetId = href.split("#")[1];
        setTimeout(() => {
          const element = document.getElementById(targetId);
          if (element) {
            element.scrollIntoView({ behavior: "smooth" });
          }
        }, 100);
      }
    }
  };

  return (
    <header className="sticky top-0 z-40 w-full border-b border-border/40 bg-background/80 backdrop-blur-md supports-[backdrop-filter]:bg-background/60 shadow-sm">
      <div className="container flex h-16 items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center shrink-0">
          <img src="/light/logo-text-nobg.png" alt="Nitisaka Logo" width="1594" height="618" className="h-12 md:h-14 w-auto object-contain shrink-0 block dark:hidden" />
          <picture className="hidden dark:block shrink-0">
            <source type="image/webp" srcSet="/dark/logo-text-nobg.webp" />
            <img src="/dark/logo-text-nobg.png" alt="Nitisaka Logo" width="1594" height="618" className="h-12 md:h-14 w-auto object-contain" />
          </picture>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center flex-1 justify-center">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuLink 
                  onClick={() => handleLinkClick("/")}
                  className="group inline-flex h-9 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 cursor-pointer bg-transparent"
                >
                  Beranda
                </NavigationMenuLink>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuLink 
                  onClick={() => handleLinkClick("/#about")}
                  className="group inline-flex h-9 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 cursor-pointer bg-transparent"
                >
                  Tentang Kami
                </NavigationMenuLink>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuLink 
                  onClick={() => handleLinkClick("/#layanan")}
                  className="group inline-flex h-9 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 cursor-pointer bg-transparent"
                >
                  Layanan
                </NavigationMenuLink>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent hover:bg-accent/50 focus:bg-accent/50">Paket</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="w-full md:w-[700px] lg:w-[850px] p-4 space-y-4">
                    <ul className="grid grid-cols-2 gap-4">
                      {packagesLinks.slice(0, 2).map((link) => (
                        <li key={link.title}>
                          <NavGridCard link={link} onClick={() => handleLinkClick(link.href)} className="min-h-36 cursor-pointer" />
                        </li>
                      ))}
                    </ul>
                    <ul className="grid grid-cols-3 gap-4">
                      {packagesLinks.slice(2).map((link) => (
                        <li key={link.title}>
                          <NavLargeItem link={link} onClick={() => handleLinkClick(link.href)} className="cursor-pointer hover:bg-accent rounded-md h-full" />
                        </li>
                      ))}
                    </ul>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent hover:bg-accent/50 focus:bg-accent/50">Portofolio</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="w-full md:w-[700px] lg:w-[850px] p-4">
                    <ul className="grid grid-cols-3 gap-4">
                      {portfolioLinks.map((link) => (
                        <li key={link.title}>
                          <NavLargeItem link={link} onClick={() => handleLinkClick(link.href)} className="cursor-pointer hover:bg-accent rounded-md h-full" />
                        </li>
                      ))}
                    </ul>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuLink 
                  onClick={() => handleLinkClick("/#kenapa-kami")}
                  className="group inline-flex h-9 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 cursor-pointer bg-transparent"
                >
                  Kenapa Kami
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {/* Right Section (Theme & CTA) */}
        <div className="hidden lg:flex items-center gap-2">
          <ThemeToggle />
          <WhatsAppButton size="sm">Konsultasi Gratis</WhatsAppButton>
        </div>

        {/* Mobile Header Elements */}
        <div className="lg:hidden flex items-center gap-2">
          <ThemeToggle />
          <MobileNav handleLinkClick={handleLinkClick} />
        </div>
      </div>
    </header>
  );
};

function MobileNav({ handleLinkClick }: { handleLinkClick: (href: string) => void }) {
  const sections = [
    {
      id: 'Paket',
      list: packagesLinks,
    },
    {
      id: 'Portofolio',
      list: portfolioLinks,
    },
  ];

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button size="icon" variant="ghost" className="rounded-full">
          <Menu className="size-5" />
        </Button>
      </SheetTrigger>
      <SheetContent
        className="bg-background/95 supports-[backdrop-filter]:bg-background/80 w-full gap-0 backdrop-blur-xl border-l-0"
        showClose={false}
      >
        <div className="flex h-16 items-center justify-end border-b px-4">
          <SheetClose asChild>
            <Button size="icon" variant="ghost" className="rounded-full">
              <X className="size-5" />
              <span className="sr-only">Close</span>
            </Button>
          </SheetClose>
        </div>
        <div className="container grid gap-y-2 overflow-y-auto px-4 pt-5 pb-12">
          <div className="flex flex-col gap-3 mb-4">
            <SheetClose asChild>
              <Button 
                variant="outline" 
                className="w-full justify-start h-12 text-base font-semibold border-border/30"
                onClick={() => handleLinkClick("/")}
              >
                Beranda
              </Button>
            </SheetClose>
            <SheetClose asChild>
              <Button 
                variant="outline" 
                className="w-full justify-start h-12 text-base font-semibold border-border/30"
                onClick={() => handleLinkClick("/#about")}
              >
                Tentang Kami
              </Button>
            </SheetClose>
          </div>
          <Accordion type="single" collapsible className="w-full">
            {sections.map((section) => (
              <AccordionItem key={section.id} value={section.id} className="border-b-border/30">
                <AccordionTrigger className="capitalize hover:no-underline text-base font-semibold py-4">
                  {section.id}
                </AccordionTrigger>
                <AccordionContent className="space-y-1 pb-4">
                  <ul className="grid gap-2">
                    {section.list.map((link) => (
                      <li key={link.title}>
                        <SheetClose asChild>
                          <NavItemMobile 
                            item={link} 
                            onClick={() => handleLinkClick(link.href)} 
                            className="cursor-pointer border border-border/10 shadow-sm" 
                          />
                        </SheetClose>
                      </li>
                    ))}
                  </ul>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
          
          <div className="mt-4 flex flex-col gap-3">
            <SheetClose asChild>
              <Button 
                variant="outline" 
                className="w-full justify-start h-12 text-base font-semibold border-border/30"
                onClick={() => handleLinkClick("/#layanan")}
              >
                Layanan
              </Button>
            </SheetClose>
            <SheetClose asChild>
              <Button 
                variant="outline" 
                className="w-full justify-start h-12 text-base font-semibold border-border/30"
                onClick={() => handleLinkClick("/#kenapa-kami")}
              >
                Kenapa Kami
              </Button>
            </SheetClose>
            
            <SheetClose asChild>
              <div className="mt-6">
                <WhatsAppButton className="w-full h-12 text-base shadow-lg shadow-primary/20">
                  Konsultasi Gratis Sekarang
                </WhatsAppButton>
              </div>
            </SheetClose>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
