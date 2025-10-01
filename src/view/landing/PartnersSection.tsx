import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

function PartnersSection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  
  const partners = [
    {
      name: "DAMAC",
      logo: (
        <div className="text-gray-800 font-light text-sm tracking-wider italic">DAMAC</div>
      )
    },
    {
      name: "EMAAR",
      logo: (
        <div className="text-gray-800 font-light text-sm tracking-wider">EMAAR</div>
      )
    },
    {
      name: "MERAAS",
      logo: (
        <div className="flex items-center space-x-2">
          <div className="w-3 h-3 border border-gray-600 flex items-center justify-center">
            <div className="w-1.5 h-1.5 bg-gray-600"></div>
          </div>
          <span className="text-gray-800 font-light text-sm tracking-wider">MERAAS</span>
        </div>
      )
    },
    {
      name: "SOBHA REALTY",
      logo: (
        <div className="flex flex-col items-center">
          <span className="text-gray-800 font-light text-sm tracking-wider">SOBHA</span>
          <span className="text-gray-600 font-light text-xs tracking-wider">REALTY</span>
        </div>
      )
    },
    {
      name: "NAKHEEL",
      logo: (
        <div className="text-gray-800 font-light text-sm tracking-wider">NAKHEEL</div>
      )
    },
    {
      name: "BINGHATTI",
      logo: (
        <div className="text-gray-800 font-light text-sm tracking-wider">BINGHATTI</div>
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
    <section className="py-6 sm:py-8 bg-gradient-to-r from-[#F8F6F0] via-white to-[#F2EEE8] border-t border-b border-gray-100">
      <div className="max-w-6xl mx-auto px-2 sm:px-4 md:px-6">
        {/* Desktop Layout */}
        <div className="hidden md:flex items-center justify-between">
          {/* Header */}
          <div className="flex-shrink-0">
            <h2 className="text-gray-600 text-sm font-light tracking-widest uppercase font-sans">
              Partners with Dubai's leading developers
            </h2>
          </div>

          {/* Partners */}
          <div className="flex-1 ml-12">
            <div className="flex items-center justify-between">
              {partners.map((partner, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 0.6 }}
                  whileHover={{ opacity: 1, scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                  className="flex-shrink-0 px-6 transition-all duration-300"
                >
                  {partner.logo}
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile Layout with Carousel */}
        <div className="md:hidden">
          {/* Header */}
          <div className="text-center mb-6">
            <motion.h2 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-gray-600 text-xs sm:text-sm font-light tracking-widest uppercase font-sans"
            >
              Partners with Dubai's leading developers
            </motion.h2>
          </div>

          {/* Carousel Container */}
          <div className="relative overflow-hidden">
            <div className="flex transition-transform duration-500 ease-in-out" 
                 style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
              {partners.map((partner, index) => (
                <div key={index} className="w-full flex-shrink-0 flex justify-center">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="opacity-80 hover:opacity-100 transition-opacity duration-300"
                  >
                    {partner.logo}
                  </motion.div>
                </div>
              ))}
            </div>
          </div>

          {/* Carousel Indicators */}
          <div className="flex justify-center mt-4 sm:mt-6 space-x-1 sm:space-x-2">
            {partners.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? 'bg-[#DC2626] scale-125' 
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default PartnersSection