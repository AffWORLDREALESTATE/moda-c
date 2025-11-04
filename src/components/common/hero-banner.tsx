"use client";

import Image from "next/image";
import { motion } from "framer-motion";

type HeroBannerProps = {
  title: string;
  subtitle?: string;
  imageSrc?: string;
  heightClassName?: string; // allow custom height per page
};

export default function HeroBanner({
  title,
  subtitle,
  imageSrc = "/images/bgImage.webp",
  heightClassName = "h-[65vh]",
}: HeroBannerProps) {
  return (
    <section className={`relative ${heightClassName} w-full flex items-center justify-center overflow-hidden`}> 
      <motion.div
        initial={{ scale: 1.06 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="absolute inset-0 w-full h-full"
      >
        <Image
          src={imageSrc}
          alt={title}
          fill
          className="object-cover"
          priority
        />
      </motion.div>
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/55 to-black/80" />

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="relative z-10 text-center px-4"
      >
        <div className="w-20 h-1 bg-gradient-to-r from-[#0a4b6f] to-[#1a6b8f] mx-auto mb-6"></div>
        <h1 className="text-3xl md:text-5xl font-bold text-white mb-3">{title}</h1>
        {subtitle ? (
          <p className="text-white/90 text-base md:text-lg max-w-3xl mx-auto leading-relaxed">{subtitle}</p>
        ) : null}
      </motion.div>
    </section>
  );
}



