import { Link } from "react-router-dom";
import { MessageCircle, Mail, MapPin } from "lucide-react";
import { WHATSAPP_NUMBER, generateWhatsAppLink } from "@/lib/data/packages";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-primary-foreground">
      <div className="container py-12">
        <div className="grid gap-8 md:grid-cols-3">
          {/* Brand */}
          <div>
            <h3 className="mb-4 text-2xl font-bold">
              Rijals<span className="text-primary">Dev</span>
            </h3>
            <p className="text-primary-foreground/80">
              Jasa pembuatan website profesional dengan harga terjangkau untuk bisnis Anda.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-4 text-lg font-semibold">Link Cepat</h4>
            <ul className="space-y-2">
              <li>
                <a href="#layanan" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Layanan
                </a>
              </li>
              <li>
                <a href="#paket" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Paket Harga
                </a>
              </li>
              <li>
                <Link to="/reference" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Referensi
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="mb-4 text-lg font-semibold">Kontak</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href={generateWhatsAppLink("Halo RijalsDev!")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  <MessageCircle className="h-4 w-4" />
                  <span>+{WHATSAPP_NUMBER}</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@rijalsdev.com"
                  className="flex items-center gap-2 text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  <Mail className="h-4 w-4" />
                  <span>info@rijalsdev.com</span>
                </a>
              </li>
              <li className="flex items-center gap-2 text-primary-foreground/80">
                <MapPin className="h-4 w-4" />
                <span>Indonesia</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 border-t border-primary-foreground/20 pt-8 text-center">
          <p className="text-primary-foreground/60">
            © {currentYear} RijalsDev. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
