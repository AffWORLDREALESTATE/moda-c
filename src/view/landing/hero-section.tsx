import Image from "next/image";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/src/contexts/LanguageContext";
import { getBinghattiHillviewsImages, HeroImage } from "@/src/api/hero";
import { SearchBar } from "@/src/components/common/search-bar";

export default function HeroSection() {
  const [isLoading, setIsLoading] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  const [heroImages, setHeroImages] = useState<HeroImage[]>([]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [error, setError] = useState<string | null>(null);
  const { t } = useLanguage();

  // Check if mobile for performance optimization
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Fetch Binghatti Hillviews images from backend
  useEffect(() => {
    const fetchHeroImages = async () => {
      try {
        const response = await getBinghattiHillviewsImages();
        setHeroImages(response.images);
        setError(null);
      } catch (err) {
        console.error("Error fetching Binghatti Hillviews images:", err);
        setError("Failed to load Binghatti Hillviews images");
      }
    };

    fetchHeroImages();
  }, []);

  // Auto-rotate images with pause on hover/touch
  useEffect(() => {
    if (heroImages.length <= 1) return;

    let interval: NodeJS.Timeout;
    
    const startRotation = () => {
      interval = setInterval(() => {
        setCurrentImageIndex((prevIndex) => 
          (prevIndex + 1) % heroImages.length
        );
      }, 5000); // Change image every 5 seconds
    };

    const pauseRotation = () => {
      if (interval) clearInterval(interval);
    };

    startRotation();

    // Pause rotation on mobile to save battery
    if (isMobile) {
      pauseRotation();
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [heroImages.length, isMobile]);

  // Optimized loading for mobile vs desktop
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, isMobile ? 1000 : 2000); // Faster loading on mobile

    return () => clearTimeout(timer);
  }, [isMobile]);


  return (
    <section 
      className="relative min-h-[100vh] sm:min-h-[100vh] md:h-[115vh] w-full flex items-center justify-center text-center bg-gradient-to-br from-[#F8F6F0] via-white to-[#F2EEE8] overflow-hidden px-3 sm:px-4 md:px-6 lg:px-8"
    >
      {/* Luxury Loading Overlay */}
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          transition={{ duration: 1, delay: 2 }}
          className="absolute inset-0 z-50 bg-gradient-to-br from-[#F8F6F0] via-white to-[#F2EEE8] flex items-center justify-center"
        >
          <div className="text-center">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              className="w-12 h-12 sm:w-16 sm:h-16 border-4 border-[#0a4b6f]/30 border-t-[#0a4b6f] rounded-full mx-auto mb-4"
            />
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-[#0a4b6f] font-light text-sm sm:text-lg tracking-wider"
            >
              {t('hero.companyName')}
            </motion.p>
          </div>
        </motion.div>
      )}

      {/* Hero Background (Video preferred) */}
      <div className="absolute inset-0 w-full h-full">
        {isLoading ? (
          <Image
            src="/images/bgImage.webp"
            alt="Luxury Living in Dubai"
            fill
            className="object-cover z-0"
            style={{
              filter: isMobile ? 'brightness(1.1) contrast(1.05)' : 'brightness(1.2) contrast(1.1) saturate(1.1)'
            }}
            quality={isMobile ? 60 : 80}
            priority
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
          />
        ) : (
          <div className="relative w-full h-full">
            <video
              className="absolute inset-0 w-full h-full object-cover"
              autoPlay
              muted
              loop
              playsInline
              preload="auto"
              poster="/images/bgImage.webp"
            >
              <source src="/hero.mp4" type="video/mp4" />
            </video>

            {/* Error State */}
            {error && (
              <div className="absolute inset-0 flex items-center justify-center z-30">
                <div className="bg-black/70 text-white px-6 py-3 rounded-lg text-center">
                  <p className="text-sm">{error}</p>
                  <button 
                    onClick={() => window.location.reload()} 
                    className="mt-2 text-xs underline hover:no-underline"
                  >
                    Retry
                  </button>
                </div>
              </div>
            )}
          </div>
        )}
      </div>

      {/* Enhanced Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-black/10 z-10" />
      
      {/* Cinematic Overlay Effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-transparent to-black/30 z-15" />

      {/* Search Bar: absolute for lg+, inline for mobile */}
      <div className="hidden lg:block absolute bottom-6 sm:bottom-10 md:bottom-16 lg:bottom-20 left-1/2 transform -translate-x-1/2 z-20 w-full px-2 sm:px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <SearchBar />
        </motion.div>
      </div>

      {/* Hero Content */}
      <div className="relative z-20 text-center px-3 sm:px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="max-w-5xl mx-auto"
        >
          <h1 className="text-xl sm:text-2xl md:text-4xl lg:text-5xl xl:text-6xl font-serif font-bold text-white mb-3 sm:mb-4 md:mb-6 leading-tight whitespace-nowrap">
          {t('landing.hero.heading')}
          </h1>
          {/* Optional subtitle for spacing balance on mobile */}
          
          {/* Mobile search bar directly under heading */}
          <div className="lg:hidden mt-3 sm:mt-4">
            <SearchBar />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
