import { useEffect, useState } from "react";

export function LayoutPreloader({ children }: { children: React.ReactNode }) {
  const [showPreloader, setShowPreloader] = useState(() => {
    if (typeof window !== "undefined") {
      return !sessionStorage.getItem("hasVisited");
    }
    return true;
  });
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    if (showPreloader) {
      sessionStorage.setItem("hasVisited", "true");
      
      // Let it fade out almost immediately after mount to avoid LCP delay
      const timer1 = setTimeout(() => {
        setFadeOut(true);
      }, 100); 
      
      const timer2 = setTimeout(() => {
        setShowPreloader(false);
      }, 700); 
      
      return () => {
        clearTimeout(timer1);
        clearTimeout(timer2);
      };
    }
  }, [showPreloader]);

  return (
    <>
      {showPreloader && (
        <div
          className={`fixed inset-0 z-[100] flex flex-col items-center justify-center bg-background overflow-hidden transition-opacity duration-500 ease-in-out ${fadeOut ? 'opacity-0' : 'opacity-100'}`}
        >
          {/* Noise overlay */}
          <div 
            className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none"
            style={{
              backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.65\' numOctaves=\'3\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\'/%3E%3C/svg%3E")',
              animation: 'noise-animation 0.5s infinite linear'
            }}
          />
          
          {/* Logo and Loader */}
          <div 
            className="relative z-10 flex flex-col items-center animate-in zoom-in-95 fade-in duration-500"
          >
            <img src="/light/logo-text-nobg.webp" alt="Nitisaka" className="h-14 w-auto block dark:hidden" width="142" height="56" />
            <img src="/dark/logo-text-nobg.webp" alt="Nitisaka" className="h-14 w-auto hidden dark:block" width="142" height="56" />
            
            <div className="mt-8 flex items-center gap-2">
              {[0, 1, 2].map((i) => (
                <div
                  key={i}
                  className="h-2 w-2 rounded-full bg-primary animate-pulse"
                  style={{
                    animationDelay: `${i * 150}ms`
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      )}
      
      <div
        className={`w-full min-h-screen transition-opacity duration-700 ease-out ${(!showPreloader || fadeOut) ? 'opacity-100' : 'opacity-0'}`}
      >
        {children}
      </div>
    </>
  );
}
