import { useState, useEffect } from "react";
import { Link, useSearchParams, useLocation } from "react-router-dom";
import { Search, ArrowLeft, Loader2, ChevronDown } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";
import { ReferenceCard } from "@/components/ReferenceCard";
import { getReferencesByCategory, categories } from "@/lib/data/references";

const ReferencePage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();

  // Derive active category from URL parameters
  const activeCategory = searchParams.get("category") || "all";
  
  const setActiveCategory = (category: string) => {
    const params = new URLSearchParams(searchParams.toString());
    if (category !== "all") {
      params.set("category", category);
    } else {
      params.delete("category");
    }
    setSearchParams(params);
  };
  const [searchQuery, setSearchQuery] = useState(searchParams.get("q") || "");

  // Infinite scroll state
  const [displayedCount, setDisplayedCount] = useState(8);
  const [loading, setLoading] = useState(false);
  const ITEMS_PER_PAGE = 8;

  // Update URL when search query changes
  useEffect(() => {
    const params = new URLSearchParams(searchParams.toString());

    if (searchQuery.trim()) {
      params.set("q", searchQuery.trim());
    } else {
      params.delete("q");
    }

    setSearchParams(params);
  }, [searchQuery, setSearchParams]);

  // Auto scroll to hash on load or when navigating to a hash
  useEffect(() => {
    if (location.hash) {
      const targetId = location.hash.substring(1);
      setTimeout(() => {
        const element = document.getElementById(targetId);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 150);
    }
  }, [location]);

  // Get filtered references
  const filteredReferences = getReferencesByCategory(activeCategory).filter(
    (ref) =>
      ref.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      ref.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      ref.category.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  // Calculate displayed references
  const displayedReferences = filteredReferences.slice(0, displayedCount);
  const hasMore = displayedCount < filteredReferences.length;

  // Reset displayed count when filters change
  useEffect(() => {
    setDisplayedCount(8);
    setLoading(false);
  }, [activeCategory, searchQuery]);

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
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;

      // Trigger when user is 500px from bottom
      if (scrollTop + windowHeight >= documentHeight - 500) {
        loadMore();
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [loading, hasMore, loadMore]);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-1">
        {/* Header */}
        <section className="bg-background pt-16 pb-6">
          <div className="container">
            <h1 className="text-3xl font-bold text-foreground sm:text-4xl text-center">
              Referensi <span className="text-primary">Website</span>
            </h1>

            {/* Search & Filter */}
            <div className="mt-8 flex justify-center">
              <div className="relative w-full max-w-md">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Cari referensi..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>

            {/* Category Filter */}
            <div className="mt-6 flex flex-wrap justify-center gap-2">
              {categories.map((category) => (
                <Button
                  key={category.id}
                  variant={
                    activeCategory === category.id ? "default" : "outline"
                  }
                  size="sm"
                  onClick={() => setActiveCategory(category.id)}
                >
                  {category.name}
                </Button>
              ))}
            </div>
          </div>
        </section>

        {/* References Grid */}
        <section id="reference-grid" className="pt-6 pb-12 scroll-mt-24">
          <div className="container">
            {filteredReferences.length > 0 ? (
              <>
                <p className="text-muted-foreground mb-6">
                  Menampilkan {displayedReferences.length} dari{" "}
                  {filteredReferences.length} referensi
                </p>
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                  {displayedReferences.map((reference, index) => (
                    <div
                      key={reference.id}
                      className="masonry-card-wrapper"
                      style={
                        {
                          '--side': index % 2 === 0 ? 1 : -1,
                          '--amp': Math.ceil((index % 8) / 2),
                        } as React.CSSProperties
                      }
                    >
                      <ReferenceCard reference={reference} />
                    </div>
                  ))}
                </div>

                {/* Loading Indicator */}
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
                      Tidak ada referensi yang ditemukan
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
              </>
            ) : (
              <div className="text-center py-12">
                <p className="text-muted-foreground">
                  Tidak ada referensi yang ditemukan untuk "{searchQuery}"
                </p>
                <Button
                  variant="outline"
                  className="mt-4"
                  onClick={() => {
                    setSearchQuery("");
                    setActiveCategory("all");
                  }}
                >
                  Reset Filter
                </Button>
              </div>
            )}
          </div>
        </section>
      </main>

      <Footer />
      <WhatsAppFloat />
    </div>
  );
};

export default ReferencePage;
