import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function LayoutPreloader({ children }: { children: React.ReactNode }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time for the entrance animation
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500); // 1.5 seconds loading time
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <AnimatePresence mode="wait">
        {loading && (
          <motion.div
            key="preloader"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.8, ease: "easeInOut" } }}
            className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-background overflow-hidden"
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
            <motion.div 
              initial={{ scale: 0.9, opacity: 0, filter: "blur(10px)" }}
              animate={{ scale: 1, opacity: 1, filter: "blur(0px)" }}
              transition={{ duration: 0.7 }}
              className="relative z-10 flex flex-col items-center"
            >
              {/* Using the new text-nobg logos */}
              <img src="/light/logo-text-nobg.webp" alt="Nitisaka" className="h-14 w-auto block dark:hidden" width="142" height="56" />
              <img src="/dark/logo-text-nobg.webp" alt="Nitisaka" className="h-14 w-auto hidden dark:block" width="142" height="56" />
              
              <div className="mt-8 flex items-center gap-2">
                {[0, 1, 2].map((i) => (
                  <motion.div
                    key={i}
                    className="h-2 w-2 rounded-full bg-primary"
                    animate={{ 
                      y: ["0%", "-50%", "0%"],
                      opacity: [0.3, 1, 0.3]
                    }}
                    transition={{
                      duration: 0.8,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: i * 0.15,
                    }}
                  />
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      
      {!loading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="w-full min-h-screen"
        >
          {children}
        </motion.div>
      )}
    </>
  );
}
