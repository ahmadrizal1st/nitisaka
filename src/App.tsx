import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import ReferencePage from "./pages/ReferencePage";
import ReferenceDetailPage from "./pages/ReferenceDetailPage";
import NotFound from "./pages/NotFound";

import { ThemeProvider } from "@/components/ThemeProvider";
import { LayoutPreloader } from "@/components/ui/layout-preloader";
import { Layout } from "@/components/Layout";

const queryClient = new QueryClient();

const App = () => (
  <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <LayoutPreloader>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <Layout>
              <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/reference" element={<ReferencePage />} />
                <Route path="/reference/:id" element={<ReferenceDetailPage />} />
                {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
                <Route path="*" element={<NotFound />} />
              </Routes>
            </Layout>
          </BrowserRouter>
        </LayoutPreloader>
      </TooltipProvider>
    </QueryClientProvider>
  </ThemeProvider>
);

export default App;
