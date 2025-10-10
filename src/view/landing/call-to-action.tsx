"use client";
import { Button } from "@/src/components/ui/button";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { useLanguage } from "@/src/contexts/LanguageContext";

export function CallToAction() {
  const { t } = useLanguage();
  return (
    <section className="relative py-16 sm:py-20 md:py-24 lg:py-32 overflow-hidden bg-[#F8F5EF]">
]      <div className="absolute bottom-0 inset-x-0 w-full h-48 sm:h-64 md:h-96 opacity-40">
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
          <p className="text-xs sm:text-sm uppercase text-[#1A1A1A]/70 font-extralight tracking-wider mb-2">
            {t('landing.cta.kicker')}
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-mono font-serif px-2">
            {t('landing.cta.heading')}
          </h2>
          <p className="text-sm sm:text-base md:text-lg font-extralight max-w-4xl mx-auto mb-8 sm:mb-12 leading-relaxed text-[#333] px-2">
            {t('landing.cta.subtitle')}
          </p>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link href={"/contactUs"}>
              <Button className="w-40 sm:w-48 h-9 sm:h-11 bg-[#0a4b6f] hover:bg-[#1a6b8f] text-white font-extralight tracking-wider py-2 px-3 sm:px-4 rounded-none transition-colors uppercase text-sm sm:text-base">
                {t('landing.cta.button')}
              </Button>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
