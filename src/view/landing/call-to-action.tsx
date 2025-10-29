"use client";
import { Button } from "@/src/components/ui/button";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { useLanguage } from "@/src/contexts/LanguageContext";

export function CallToAction() {
  const { t } = useLanguage();
  return (
    <section className="relative py-20 sm:py-24 md:py-28 lg:py-36 overflow-hidden bg-gradient-to-br from-[#0a4b6f] via-[#1a6b8f] to-[#0a4b6f]">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10">
        <div className="absolute top-20 right-20 w-60 h-60 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-60 h-60 bg-red-500 rounded-full blur-3xl"></div>
      </div>
      
      <div className="absolute bottom-0 inset-x-0 w-full h-48 sm:h-64 md:h-96 opacity-20">
        <Image
          src="/images/dubai-skyline-30.svg" 
          alt="Dubai Skyline"
          fill
          className="object-bottom"
          priority
        />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-2 sm:px-4 md:px-6 lg:px-10 xl:px-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-sm sm:text-base uppercase text-white/90 font-bold tracking-widest mb-4">
            {t('landing.cta.kicker')}
          </p>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white px-2 mb-6 leading-tight">
            {t('landing.cta.heading')}
          </h2>
          
          <p className="text-base sm:text-lg md:text-xl max-w-4xl mx-auto mb-10 sm:mb-12 leading-relaxed text-white/90 px-2">
            {t('landing.cta.subtitle')}
          </p>
          
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link href={"/contactUs"}>
              <Button className="px-8 sm:px-10 md:px-12 py-4 sm:py-5 md:py-6 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-bold tracking-wider rounded-full transition-all uppercase text-base sm:text-lg shadow-2xl hover:shadow-red-500/50">
                {t('landing.cta.button')}
              </Button>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
