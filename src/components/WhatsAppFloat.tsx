import { MessageCircle } from "lucide-react";
import { generateWhatsAppLink } from "@/lib/data/packages";

export const WhatsAppFloat = () => {
  const handleClick = () => {
    window.open(
      generateWhatsAppLink(
        "Halo Nitisaka, saya tertarik dengan jasa pembuatan website.",
      ),
      "_blank",
    );
  };

  return (
    <button
      onClick={handleClick}
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-whatsapp text-white shadow-lg transition-all hover:scale-110 hover:shadow-xl"
      aria-label="Chat via WhatsApp"
    >
      <MessageCircle className="h-7 w-7" />
    </button>
  );
};
