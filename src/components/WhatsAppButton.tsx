import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { generateWhatsAppLink } from "@/lib/data/packages";

interface WhatsAppButtonProps {
  message?: string;
  size?: "default" | "sm" | "lg" | "icon";
  variant?: "default" | "outline" | "ghost";
  className?: string;
  children?: React.ReactNode;
}

export const WhatsAppButton = ({
  message = "Halo RijalsDev, saya tertarik dengan jasa pembuatan website.",
  size = "default",
  variant = "default",
  className = "",
  children,
}: WhatsAppButtonProps) => {
  const handleClick = () => {
    window.open(generateWhatsAppLink(message), "_blank");
  };

  return (
    <Button
      onClick={handleClick}
      size={size}
      variant={variant}
      className={`bg-whatsapp hover:bg-whatsapp/90 text-white ${className}`}
    >
      <MessageCircle className="mr-2 h-4 w-4" />
      {children || "Hubungi via WhatsApp"}
    </Button>
  );
};
