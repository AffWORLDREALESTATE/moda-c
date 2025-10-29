import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useLanguage } from "@/src/contexts/LanguageContext";

function PartnersSection() {
  const { t } = useLanguage();
  const [currentIndex, setCurrentIndex] = useState(0)
  
  const partners = [
    {
      name: "DAMAC",
      logo: (
        <div className="text-gray-800 font-semibold text-lg sm:text-xl tracking-wider italic hover:text-[#0a4b6f] transition-colors duration-300">
          DAMAC
        </div>
      )
    },
    {
      name: "EMAAR",
      logo: (
        <div className="text-gray-800 font-semibold text-lg sm:text-xl tracking-wider hover:text-[#0a4b6f] transition-colors duration-300">
          EMAAR
        </div>
      )
    },
    {
      name: "MERAAS",
      logo: (
        <div className="flex items-center space-x-2 group">
          <div className="w-4 h-4 border-2 border-gray-600 group-hover:border-[#0a4b6f] flex items-center justify-center transition-colors duration-300">
            <div className="w-2 h-2 bg-gray-600 group-hover:bg-[#0a4b6f] transition-colors duration-300"></div>
          </div>
          <span className="text-gray-800 font-semibold text-lg sm:text-xl tracking-wider group-hover:text-[#0a4b6f] transition-colors duration-300">
            MERAAS
          </span>
        </div>
      )
    },
    {
      name: "SOBHA REALTY",
      logo: (
        <div className="flex flex-col items-center group">
          <span className="text-gray-800 font-semibold text-lg sm:text-xl tracking-wider group-hover:text-[#0a4b6f] transition-colors duration-300">
            SOBHA
          </span>
          <span className="text-gray-600 font-medium text-sm sm:text-base tracking-wider group-hover:text-[#1a6b8f] transition-colors duration-300">
            REALTY
          </span>
        </div>
      )
    },
    {
      name: "NAKHEEL",
      logo: (
        <div className="text-gray-800 font-semibold text-lg sm:text-xl tracking-wider hover:text-[#0a4b6f] transition-colors duration-300">
          NAKHEEL
        </div>
      )
    },
    {
      name: "BINGHATTI",
      logo: (
        <div className="text-gray-800 font-semibold text-lg sm:text-xl tracking-wider hover:text-[#0a4b6f] transition-colors duration-300">
          BINGHATTI
        </div>
      )
    }
  ]

  // Auto-rotate carousel on mobile
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % partners.length)
    }, 3000)

    return () => clearInterval(interval)
  }, [partners.length])

  return (
    <section className="py-8 sm:py-12 md:py-16 bg-white border-t border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-8 sm:mb-12 md:mb-16"
        >
          <h2 className="text-gray-600 text-sm sm:text-base font-light tracking-widest uppercase font-sans mb-2">
            {t('landing.partners.heading')}
          </h2>
          <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-[#0a4b6f] to-transparent mx-auto"></div>
        </motion.div>

        {/* Desktop & Tablet Layout */}
        <div className="hidden sm:block">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 md:gap-8 lg:gap-12 items-center">
            {partners.map((partner, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ 
                  duration: 0.5, 
                  delay: index * 0.1,
                  hover: { duration: 0.2 }
                }}
                viewport={{ once: true }}
                className="flex justify-center items-center h-16 sm:h-20 md:h-24 transition-all duration-300"
              >
                <div className="opacity-70 hover:opacity-100 transition-opacity duration-300">
                  {partner.logo}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Mobile Layout with Carousel */}
        <div className="sm:hidden">
          {/* Carousel Container */}
          <div className="relative overflow-hidden rounded-2xl bg-white/50 backdrop-blur-sm border border-gray-100 shadow-sm">
            <div className="flex transition-transform duration-700 ease-in-out" 
                 style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
              {partners.map((partner, index) => (
                <div key={index} className="w-full flex-shrink-0 flex justify-center items-center py-8 px-4">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="opacity-80 hover:opacity-100 transition-opacity duration-300"
                  >
                    {partner.logo}
                  </motion.div>
                </div>
              ))}
            </div>
          </div>

          {/* Carousel Indicators */}
          <div className="flex justify-center mt-6 space-x-2">
            {partners.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? 'bg-[#0a4b6f] scale-125 shadow-sm' 
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>

          {/* Partner Counter */}
          <div className="text-center mt-4">
            <p className="text-xs text-gray-500">
              {currentIndex + 1} {t('common.of')} {partners.length}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default PartnersSection