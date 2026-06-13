import { ReactNode } from "react";
import { Navbar } from "@/components/Navbar";
import { CinematicFooter } from "@/components/ui/motion-footer";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";

interface LayoutProps {
  children: ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 relative z-10 w-full bg-background border-b border-border shadow-xl rounded-b-[2rem] md:rounded-b-[3rem]">
        {children}
      </main>
      <CinematicFooter />
      <WhatsAppFloat />
    </div>
  );
};
