import { useState, useEffect, useRef } from "react";
import { useParams, Link } from "react-router-dom";
import {
  ArrowLeft,
  Check,
  Tag,
  Globe,
  Code2,
  Monitor,
  Smartphone,
  Tablet,
  Loader2,
  ChevronDown,
  ZoomIn,
} from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

import { WhatsAppButton } from "@/components/WhatsAppButton";
import { ReferenceCard } from "@/components/ReferenceCard";
import {
  getReferenceById,
  getReferencesByCategory,
  Reference,
} from "@/lib/data/references";
import { useTheme } from "@/components/ThemeProvider";

import { Seo } from "@/components/Seo";

const ReferenceDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const reference = id ? getReferenceById(id) : undefined;
  const [previewMode, setPreviewMode] = useState<
    "desktop" | "tablet" | "mobile"
  >("desktop");
  const [previewTab, setPreviewTab] = useState<"url" | "html">(
    reference?.url ? "url" : "html",
  );
  
  const { theme } = useTheme();
  const currentTheme = theme === "system" 
    ? (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light") 
    : theme;

  const displayImage = reference?.image === "/placeholder-light.svg" && currentTheme === "dark"
    ? "/placeholder-dark.svg"
    : reference?.image || "";

  // Screen size detection for preview buttons
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      setIsMobile(width < 768);
      setIsTablet(width >= 768 && width < 1024);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Get all related references (same category, excluding current)
  const allRelatedReferences: Reference[] = reference
    ? getReferencesByCategory(reference.categoryId).filter(
        (ref) => ref.id !== reference.id,
      )
    : [];

  // Infinite scroll state
  const [displayedCount, setDisplayedCount] = useState(8);
  const [loading, setLoading] = useState(false);
  const ITEMS_PER_PAGE = 8;

  // Calculate displayed references based on displayedCount
  const displayedReferences = allRelatedReferences.slice(0, displayedCount);
  const hasMore = displayedCount < allRelatedReferences.length;

  // Load more references
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const loadMore = () => {
    if (loading) return;
    if (!hasMore) return;

    setLoading(true);

    // Simulate delay for smooth UX
    setTimeout(() => {
      setDisplayedCount((prev) => prev + ITEMS_PER_PAGE);
      setLoading(false);
    }, 300);
  };

  // Scroll event listener
  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const scrollTop = window.scrollY;
          const windowHeight = window.innerHeight;
          const documentHeight = document.documentElement.scrollHeight;

          // Trigger when user is 500px from bottom
          if (scrollTop + windowHeight >= documentHeight - 500) {
            loadMore();
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [loading, hasMore, loadMore]);

  if (!reference) {
    return (
      <>
        <Seo title="Referensi Tidak Ditemukan | Nitisaka" description="Maaf, referensi yang Anda cari tidak tersedia." />
        <section className="container py-20 text-center">
          <h1 className="text-2xl font-bold text-foreground mb-4">
            Referensi tidak ditemukan
          </h1>
          <p className="text-muted-foreground mb-8">
            Maaf, referensi yang Anda cari tidak tersedia.
          </p>
          <Link to="/reference">
            <Button>
              <ArrowLeft className="mr-2 h-4 w-4" />
              Kembali ke Referensi
            </Button>
          </Link>
        </section>
      </>
    );
  }

  return (
    <>
      <Seo 
        title={`${reference.title} - ${reference.category} | Nitisaka`} 
        description={reference.description}
        image={reference.image === "/placeholder-light.svg" ? undefined : `https://nitisakastudio.com${reference.image}`}
        url={`https://nitisakastudio.com/reference/${reference.id}`}
      />
      {/* CSS for preview container to prevent sticky navbar overflow */}
      <style>{`
        .preview-container {
          contain: layout style;
        }
        .preview-container nav,
        .preview-container header,
        .preview-container .navbar {
          position: relative !important;
          top: 0 !important;
        }
        .preview-container .sticky {
          position: relative !important;
          top: 0 !important;
        }
        .preview-container [class*="sticky"] {
          position: relative !important;
          top: 0 !important;
        }
      `}</style>

      <div>
        {/* Header */}
        <section className="bg-gradient-to-br from-primary/5 via-background to-accent/30 py-8">
          <div className="container">
            <Link
              to="/reference"
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              Kembali ke Referensi
            </Link>
          </div>
        </section>

        {/* Content */}
        <section className="py-12">
          <div className="container">
            <div className="grid gap-8 lg:grid-cols-2">
              {/* Image with Modal */}
              <Dialog>
                <DialogTrigger asChild>
                  <div className="relative aspect-video rounded-xl overflow-hidden bg-muted border shadow-lg cursor-pointer group">
                    <img
                      src={displayImage}
                      alt={reference.title}
                      onError={(e) => {
                        e.currentTarget.src = currentTheme === "dark" ? "/placeholder-dark.svg" : "/placeholder-light.svg";
                      }}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-[2px]">
                      <span className="text-white font-medium bg-black/50 px-4 py-2 rounded-full backdrop-blur-md flex items-center gap-2">
                        <ZoomIn className="w-4 h-4" /> Perbesar Gambar
                      </span>
                    </div>
                  </div>
                </DialogTrigger>
                <DialogContent className="max-w-[95vw] sm:max-w-[85vw] w-fit h-fit max-h-[90vh] p-1 bg-transparent border-none shadow-none focus:outline-none">
                  <DialogTitle className="sr-only">Preview Gambar {reference.title}</DialogTitle>
                  <div className="relative rounded-lg overflow-hidden flex justify-center items-center">
                    <img
                      src={displayImage}
                      alt={reference.title}
                      onError={(e) => {
                        e.currentTarget.src = currentTheme === "dark" ? "/placeholder-dark.svg" : "/placeholder-light.svg";
                      }}
                      className="max-w-full max-h-[85vh] object-contain rounded-lg shadow-2xl bg-muted"
                    />
                  </div>
                </DialogContent>
              </Dialog>

              {/* Details */}
              <div>
                <Badge variant="secondary" className="mb-4">
                  {reference.category}
                </Badge>

                <h1 className="text-3xl font-bold text-foreground mb-4">
                  {reference.title}
                </h1>

                <p className="text-lg text-muted-foreground mb-6">
                  {reference.description}
                </p>

                {/* Suggested Package */}
                <Card className="mb-6 border-primary/50 bg-primary/5">
                  <CardContent className="p-4">
                    <div className="flex items-center gap-2 text-primary mb-2">
                      <Tag className="h-4 w-4" />
                      <span className="font-medium">
                        Paket yang Direkomendasikan
                      </span>
                    </div>
                    <p className="text-foreground font-semibold">
                      {reference.suggestedPackage}
                    </p>
                  </CardContent>
                </Card>

                {/* Features */}
                <div className="mb-8">
                  <h2 className="text-lg font-semibold text-foreground mb-4">
                    Fitur yang Terlihat
                  </h2>
                  <ul className="space-y-3">
                    {reference.features.map((feature, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <div className="mt-0.5 w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                          <Check className="h-3 w-3 text-primary" />
                        </div>
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA */}
                <div className="flex flex-col sm:flex-row gap-4">
                  {reference.url && (
                    <a
                      href={reference.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1"
                    >
                      <Button
                        variant="default"
                        size="lg"
                        className="w-full gap-2"
                      >
                        <Globe className="h-4 w-4" />
                        Lihat Website Asli
                      </Button>
                    </a>
                  )}
                  <div className="w-full">
                    <WhatsAppButton
                      message={`Halo Nitisaka, saya tertarik dengan desain seperti "${reference.title}" (${reference.category}). Bisa konsultasi lebih lanjut?`}
                      size="lg"
                      className="w-full"
                    >
                      Konsultasi Desain Ini
                    </WhatsAppButton>
                  </div>
                  <Link to="/reference" className="flex-1">
                    <Button variant="outline" size="lg" className="w-full">
                      Lihat Referensi Lain
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Website Preview Section */}
        {(reference.url || reference.websiteHtml) && (
          <section className="py-12 bg-muted/30">
            <div className="container">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-2">
                    Preview Website
                  </h2>
                  <p className="text-muted-foreground">
                    Lihat tampilan website referensi ini secara langsung
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <Button
                    variant={previewMode === "desktop" ? "default" : "outline"}
                    size="sm"
                    onClick={() => setPreviewMode("desktop")}
                    className="gap-2"
                    disabled={isTablet || isMobile}
                  >
                    <Monitor className="h-4 w-4" />
                    Desktop
                  </Button>
                  <Button
                    variant={previewMode === "tablet" ? "default" : "outline"}
                    size="sm"
                    onClick={() => setPreviewMode("tablet")}
                    className="gap-2"
                    disabled={isMobile}
                  >
                    <Tablet className="h-4 w-4" />
                    Tablet
                  </Button>
                  <Button
                    variant={previewMode === "mobile" ? "default" : "outline"}
                    size="sm"
                    onClick={() => setPreviewMode("mobile")}
                    className="gap-2"
                  >
                    <Smartphone className="h-4 w-4" />
                    Mobile
                  </Button>
                </div>
              </div>

              {/* Preview Tab Controls */}
              {reference.url && reference.websiteHtml && (
                <div className="flex justify-center mb-6">
                  <div className="bg-muted p-1 rounded-lg">
                    <Button
                      variant={previewTab === "url" ? "default" : "ghost"}
                      size="sm"
                      onClick={() => setPreviewTab("url")}
                      className="gap-2"
                    >
                      <Globe className="h-4 w-4" />
                      URL Preview
                    </Button>
                    <Button
                      variant={previewTab === "html" ? "default" : "ghost"}
                      size="sm"
                      onClick={() => setPreviewTab("html")}
                      className="gap-2"
                    >
                      <Code2 className="h-4 w-4" />
                      HTML Preview
                    </Button>
                  </div>
                </div>
              )}

              {/* Preview Container */}
              <div className="flex justify-center">
                <div
                  className={`transition-all duration-300 ${
                    previewMode === "mobile"
                      ? "w-full max-w-[375px]"
                      : previewMode === "tablet"
                        ? "w-full max-w-[768px]"
                        : "w-full max-w-6xl"
                  }`}
                >
                  {/* Browser/Mobile Frame */}
                  <div className="bg-background rounded-xl border shadow-xl overflow-hidden">
                    {/* Frame Header */}
                    <div className="bg-muted px-4 py-3 border-b flex items-center gap-2">
                      <div className="flex gap-1.5">
                        <div className="w-3 h-3 rounded-full bg-red-400" />
                        <div className="w-3 h-3 rounded-full bg-yellow-400" />
                        <div className="w-3 h-3 rounded-full bg-green-400" />
                      </div>
                      <div
                        className={`${
                          previewMode === "mobile" ? "flex-1" : "flex-1"
                        } bg-background rounded-md px-3 py-1 text-xs text-muted-foreground flex items-center gap-2`}
                      >
                        <Globe className="h-3 w-3" />
                        {reference.url || "website-preview"}
                      </div>
                    </div>

                    {/* Preview Content */}
                    <div className="bg-white relative pt-2">
                      {(reference.url && previewTab === "url") ||
                      (previewTab === "html" && reference.websiteHtml) ? (
                        reference.url && previewTab === "url" ? (
                          <iframe
                            src={reference.url}
                            title={`${reference.title} Preview`}
                            className={`w-full ${
                              previewMode === "mobile"
                                ? "h-[667px]"
                                : previewMode === "tablet"
                                  ? "h-[800px]"
                                  : "h-[600px] lg:h-[700px]"
                            } border-0`}
                            sandbox="allow-scripts allow-same-origin"
                          />
                        ) : (
                          <div
                            className={`w-full overflow-auto ${
                              previewMode === "mobile"
                                ? "h-[667px]"
                                : previewMode === "tablet"
                                  ? "h-[800px]"
                                  : "h-[600px] lg:h-[700px]"
                            } preview-container`}
                            dangerouslySetInnerHTML={{
                              __html: reference.websiteHtml,
                            }}
                          />
                        )
                      ) : null}
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Links */}
              {reference.url && (
                <div className="mt-6 flex justify-center gap-4">
                  <a
                    href={reference.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-medium"
                  >
                    <Globe className="h-4 w-4" />
                    Buka di Tab Baru
                  </a>
                  <span className="text-muted-foreground">|</span>
                  <span className="inline-flex items-center gap-2 text-muted-foreground">
                    <Code2 className="h-4 w-4" />
                    HTML Preview Available
                  </span>
                </div>
              )}
            </div>
          </section>
        )}

        {/* Related References Section - Vertical Scroll with Infinite Loading */}
        {allRelatedReferences.length > 0 && (
          <section className="py-12">
            <div className="container">
              <div className="flex items-center justify-between mb-8">
                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-2">
                    Referensi Terkait
                  </h2>
                  <p className="text-muted-foreground">
                    Lihat juga referensi lainnya ({allRelatedReferences.length}{" "}
                    tersedia)
                  </p>
                </div>
                <Link to="/reference">
                  <Button variant="outline" className="gap-2">
                    Lihat Semua
                    <ArrowLeft className="h-4 w-4 rotate-180" />
                  </Button>
                </Link>
              </div>

              {/* Vertical Grid */}
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                {displayedReferences.map((related) => (
                  <ReferenceCard key={related.id} reference={related} />
                ))}
              </div>

              {/* Infinite Scroll Loading Indicator */}
              <div className="flex flex-col justify-center items-center py-8 mt-4">
                {loading && (
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Loader2 className="h-5 w-5 animate-spin" />
                    <span>Memuat lebih banyak...</span>
                  </div>
                )}
                {!hasMore && displayedReferences.length > 0 && (
                  <div className="flex items-center gap-2 text-muted-foreground text-sm">
                    <ChevronDown className="h-4 w-4" />
                    <span>Semua referensi telah ditampilkan</span>
                  </div>
                )}
                {displayedReferences.length === 0 && !loading && (
                  <p className="text-muted-foreground text-sm">
                    Tidak ada referensi terkait
                  </p>
                )}
              </div>

              {/* Scroll hint */}
              {hasMore && (
                <div className="flex justify-center items-center gap-2 text-muted-foreground text-sm animate-pulse">
                  <ChevronDown className="h-4 w-4" />
                  <span>Scroll untuk memuat lebih banyak</span>
                </div>
              )}
            </div>
          </section>
        )}
      </div>
    </>
  );
};

export default ReferenceDetailPage;
