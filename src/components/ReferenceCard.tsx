import { Link } from "react-router-dom";
import { Eye, MessageCircle } from "lucide-react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { generateWhatsAppLink } from "@/lib/data/packages";
import type { Reference } from "@/lib/data/references";
import { useTheme } from "@/components/ThemeProvider";

interface ReferenceCardProps {
  reference: Reference;
}

export const ReferenceCard = ({ reference }: ReferenceCardProps) => {
  const { theme } = useTheme();
  const currentTheme = theme === "system" 
    ? (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light") 
    : theme;

  const displayImage = reference.image === "/placeholder-light.svg" && currentTheme === "dark"
    ? "/placeholder-dark.svg"
    : reference.image;

  const handleWhatsApp = () => {
    window.open(
      generateWhatsAppLink(
        `Halo Nitisaka, saya tertarik dengan desain seperti "${reference.title}" (${reference.category}). Bisa konsultasi lebih lanjut?`,
      ),
      "_blank",
    );
  };

  return (
    <Card className="group overflow-hidden transition-all duration-300 hover:shadow-lg hover:border-primary/50">
      {/* Image */}
      <div className="relative aspect-video overflow-hidden bg-muted">
        <img
          src={displayImage}
          alt={reference.title}
          onError={(e) => {
            e.currentTarget.src = currentTheme === "dark" ? "/placeholder-dark.svg" : "/placeholder-light.svg";
          }}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
          loading="lazy"
          decoding="async"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        {/* Overlay buttons */}
        <div className="absolute inset-0 flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <Link to={`/reference/${reference.id}`}>
            <Button size="sm" variant="secondary" className="shadow-lg">
              <Eye className="mr-1 h-4 w-4" />
              Detail
            </Button>
          </Link>
          <Button
            size="sm"
            onClick={handleWhatsApp}
            className="bg-whatsapp hover:bg-whatsapp/90 shadow-lg"
          >
            <MessageCircle className="mr-1 h-4 w-4" />
            Chat
          </Button>
        </div>
      </div>

      <CardContent className="p-4">
        <Badge variant="secondary" className="mb-2">
          {reference.category}
        </Badge>
        <h3 className="font-semibold text-foreground line-clamp-1">
          {reference.title}
        </h3>
        <p className="mt-1 text-sm text-muted-foreground line-clamp-2">
          {reference.description}
        </p>
      </CardContent>

      <CardFooter className="p-4 pt-0 flex gap-2">
        <Link to={`/reference/${reference.id}`} className="flex-1">
          <Button variant="outline" size="sm" className="w-full">
            <Eye className="mr-1 h-4 w-4" />
            Lihat Detail
          </Button>
        </Link>
        <Button
          size="sm"
          onClick={handleWhatsApp}
          className="bg-whatsapp hover:bg-whatsapp/90"
        >
          <MessageCircle className="h-4 w-4" />
        </Button>
      </CardFooter>
    </Card>
  );
};
