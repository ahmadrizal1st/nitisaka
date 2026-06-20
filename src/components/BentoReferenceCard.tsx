import { Link } from "react-router-dom";
import { Eye, MessageCircle, ArrowUpRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { generateWhatsAppLink } from "@/lib/data/packages";
import type { Reference } from "@/lib/data/references";
import { useTheme } from "@/components/ThemeProvider";

interface BentoReferenceCardProps {
  reference: Reference;
  featured?: boolean;
}

export const BentoReferenceCard = ({ reference, featured = false }: BentoReferenceCardProps) => {
  const { theme } = useTheme();
  const currentTheme = theme === "system" 
    ? (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light") 
    : theme;

  const displayImage = reference.image === "/placeholder-light.svg" && currentTheme === "dark"
    ? "/placeholder-dark.svg"
    : reference.image;

  const handleWhatsApp = (e: React.MouseEvent) => {
    e.preventDefault();
    window.open(
      generateWhatsAppLink(
        `Halo Nitisaka, saya tertarik dengan desain seperti "${reference.title}" (${reference.category}). Bisa konsultasi lebih lanjut?`,
      ),
      "_blank",
    );
  };

  return (
    <Link 
      to={`/reference/${reference.slug}`}
      className={`group relative overflow-hidden rounded-2xl block h-full w-full border border-border/50 bg-card/40 backdrop-blur-md transition-all duration-500 hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/20 ${
        featured ? "md:col-span-2 md:row-span-2" : "col-span-1"
      }`}
    >
      {/* Background Image */}
      <img
        src={displayImage}
        alt={`Desain Website ${reference.title} - Jasa Pembuatan Website ${reference.category} Nitisaka`}
        onError={(e) => {
          e.currentTarget.src = currentTheme === "dark" ? "/placeholder-dark.svg" : "/placeholder-light.svg";
        }}
        className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
        loading="lazy"
        decoding="async"
      />

      {/* Dark Overlay gradient for readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent transition-opacity duration-500 group-hover:opacity-90" />
      
      {/* Glow Effect on Hover */}
      <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      {/* Content Content Container */}
      <div className="absolute inset-0 flex flex-col justify-end p-5 sm:p-6 lg:p-8">
        
        {/* Top Badge (Featured or Regular) */}
        <div className="absolute top-5 left-5 right-5 flex justify-between items-start">
          <Badge className="bg-background/20 backdrop-blur-md border-white/10 text-white hover:bg-background/30 transition-colors">
            {reference.category}
          </Badge>
          <div className="h-10 w-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center opacity-0 transform translate-y-4 transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-0 border border-white/20">
            <ArrowUpRight className="h-5 w-5 text-white" />
          </div>
        </div>

        {/* Text Content */}
        <div className="relative z-10 transform translate-y-4 transition-transform duration-500 group-hover:translate-y-0">
          <h3 className={`font-bold text-white mb-2 line-clamp-2 ${featured ? 'text-2xl sm:text-3xl' : 'text-xl'}`}>
            {reference.title}
          </h3>
          
          <p className="text-white/80 text-sm mb-0 line-clamp-2 opacity-0 transition-opacity duration-500 group-hover:opacity-100 h-0 group-hover:h-auto group-hover:mb-4">
            {reference.description}
          </p>

          {/* Actions */}
          <div className="flex items-center gap-3 opacity-0 transform translate-y-4 transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-0 delay-75">
            <Button size="sm" variant="secondary" className="bg-white/20 backdrop-blur-md text-white border-none hover:bg-white/30 min-h-[44px] md:min-h-0">
              <Eye className="mr-2 h-4 w-4" />
              Detail
            </Button>
            <Button
              size="sm"
              onClick={handleWhatsApp}
              className="bg-whatsapp hover:bg-whatsapp/90 text-white shadow-lg min-h-[44px] md:min-h-0"
            >
              <MessageCircle className="mr-2 h-4 w-4" />
              Chat
            </Button>
          </div>
        </div>
      </div>
    </Link>
  );
};
