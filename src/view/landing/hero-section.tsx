import Image from "next/image";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/src/contexts/LanguageContext";
import { getBinghattiHillviewsImages, HeroImage } from "@/src/api/hero";

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
      className="relative h-screen sm:h-screen md:h-[115vh] w-full flex items-center justify-center text-center bg-gradient-to-br from-[#F8F6F0] via-white to-[#F2EEE8] overflow-hidden px-3 sm:px-4 md:px-6 lg:px-8"
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

      {/* Hero Image Carousel Background */}
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
            <AnimatePresence mode="wait">
              {heroImages.length > 0 && (
                <motion.div
                  key={currentImageIndex}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 1.5, ease: "easeInOut" }}
                  className="absolute inset-0 w-full h-full"
                >
                  <Image
                    src={heroImages[currentImageIndex]?.url || "/images/bgImage.webp"}
                    alt={heroImages[currentImageIndex]?.alt || "Luxury Living in Dubai"}
                    fill
                    className="object-cover z-0"
                    style={{
                      filter: isMobile ? 'brightness(1.1) contrast(1.05)' : 'brightness(1.2) contrast(1.1) saturate(1.1)'
                    }}
                    quality={isMobile ? 60 : 80}
                    priority={currentImageIndex === 0}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
                  />
                </motion.div>
              )}
            </AnimatePresence>
            

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
    </section>
  );
}
