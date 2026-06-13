import { Link } from "react-router-dom";
import { MessageCircle, Mail, MapPin } from "lucide-react";
import { WHATSAPP_NUMBER, generateWhatsAppLink } from "@/lib/data/packages";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#050508] border-t border-white/5 text-foreground relative z-10">
      <div className="container py-12 lg:py-16">
        <div className="grid gap-8 md:grid-cols-3">
          {/* Brand */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <div className="flex items-center gap-3 mb-6">
              <img
                src="/dark/logo-text-nobg.png"
                alt="Nitisaka Logo"
                className="h-12 w-auto filter drop-shadow-md"
              />
            </div>
            <p className="text-muted-foreground leading-relaxed max-w-sm">
              Jasa pembuatan website profesional dengan harga terjangkau untuk bisnis Anda. Platform kolaborasi tangguh untuk tim modern.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <h4 className="mb-4 text-lg font-semibold">Link Cepat</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="/#layanan"
                  className="text-muted-foreground hover:text-foreground hover:text-primary transition-colors"
                >
                  Layanan
                </a>
              </li>
              <li>
                <a
                  href="/#paket"
                  className="text-muted-foreground hover:text-foreground hover:text-primary transition-colors"
                >
                  Paket Harga
                </a>
              </li>
              <li>
                <Link
                  to="/reference"
                  onClick={() =>
                    window.scrollTo({ top: 0, behavior: "smooth" })
                  }
                  className="text-muted-foreground hover:text-foreground hover:text-primary transition-colors"
                >
                  Referensi
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <h4 className="mb-4 text-lg font-semibold">Kontak</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href={generateWhatsAppLink("Halo Nitisaka!")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-muted-foreground hover:text-foreground hover:text-primary transition-colors"
                >
                  <MessageCircle className="h-4 w-4" />
                  <span>+{WHATSAPP_NUMBER}</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@Nitisaka.com"
                  className="flex items-center gap-2 text-muted-foreground hover:text-foreground hover:text-primary transition-colors"
                >
                  <Mail className="h-4 w-4" />
                  <span>nitisaka.click@gmail.com</span>
                </a>
              </li>
              <li className="flex items-center gap-2 text-muted-foreground">
                <MapPin className="h-4 w-4" />
                <span>Daerah Istimewa Yogyakarta, Indonesia</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 border-t border-white/5 pt-8 text-center">
          <p className="text-muted-foreground">
            © {currentYear} Nitisaka. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
