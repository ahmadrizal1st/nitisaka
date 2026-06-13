import { motion } from "framer-motion";
import { Leaf, Landmark } from "lucide-react"; // Using leaf for growth/steps and Landmark for foundation

export const AboutSection = () => {
  return (
    <section id="about" className="py-20 lg:py-32 relative bg-background overflow-hidden border-b border-border/50">
      <div className="container relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Column - Titles & Philosophy */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
          >
            <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-sm font-medium text-primary mb-6">
              SECTION FILOSOFI NITISAKA
            </div>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-foreground mb-6 leading-tight">
              Tentang Nitisaka Studio
            </h2>
            
            <p className="text-xl md:text-2xl font-medium text-muted-foreground mb-8 leading-relaxed">
              <span className="text-foreground">Meniti Pertumbuhan,</span> Membangun Pondasi yang Kokoh.
            </p>

            <div className="space-y-6 text-muted-foreground leading-relaxed text-lg">
              <p>
                Kami percaya bahwa setiap bisnis memiliki perjalanan unik. Karena itu, kami tidak hanya membuat website, tetapi membantu membangun fondasi digital yang dapat mendukung pertumbuhan bisnis dalam jangka panjang.
              </p>
              <p>
                Karena bisnis yang besar tidak dibangun dalam satu hari. Ia dibangun melalui langkah-langkah kecil yang dilakukan dengan tepat.
              </p>
            </div>
          </motion.div>

          {/* Right Column - Word Breakdown Cards */}
          <div className="relative">
            {/* Background Illustration */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full z-0 flex items-center justify-center opacity-100 pointer-events-none">
              <img 
                src="/illustrations/nitisaka-about-mascot.png" 
                alt="Nitisaka About Mascot" 
                className="w-[150%] max-w-[150%] h-auto object-contain scale-125"
              />
            </div>

            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="space-y-6 relative z-10 mt-32 md:mt-48 lg:mt-64"
            >
              {/* Card Niti */}
              <div className="relative bg-card/80 backdrop-blur-md border border-border p-8 rounded-3xl shadow-sm transition-all duration-300">
                <div className="absolute top-0 right-0 -mt-4 -mr-4 bg-background p-2 rounded-full border border-border shadow-sm transition-transform duration-300">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center text-primary">
                    <Leaf className="w-6 h-6" />
                  </div>
                </div>
                <h3 className="text-3xl font-bold text-foreground mb-3 font-serif italic">Niti</h3>
                <p className="text-lg text-muted-foreground">
                  Proses meniti langkah demi langkah.
                </p>
              </div>

              {/* Card Saka */}
              <div className="relative bg-card/80 backdrop-blur-md border border-border p-8 rounded-3xl shadow-sm transition-all duration-300 md:ml-12">
                <div className="absolute top-0 right-0 -mt-4 -mr-4 bg-background p-2 rounded-full border border-border shadow-sm transition-transform duration-300">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center text-primary">
                    <Landmark className="w-6 h-6" />
                  </div>
                </div>
                <h3 className="text-3xl font-bold text-foreground mb-3 font-serif italic">Saka</h3>
                <p className="text-lg text-muted-foreground">
                  Pilar yang menopang dan menguatkan.
                </p>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};
