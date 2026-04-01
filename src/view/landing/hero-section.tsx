"use client";

import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/src/contexts/LanguageContext";
import { getBinghattiHillviewsImages, HeroImage } from "@/src/api/hero";
import { SearchBar } from "@/src/components/common/search-bar";
import { ChevronLeft, ChevronRight } from "lucide-react";

const STATS = [
  { value: "500+", label: "Luxury Properties" },
  { value: "AED 2B+", label: "Portfolio Value" },
  { value: "15+", label: "Years Experience" },
  { value: "98%", label: "Client Satisfaction" },
];

const FALLBACK_IMAGES: HeroImage[] = [
  { id: "1", url: "/images/c1.webp", alt: "Luxury Living in Dubai", title: "Luxury Living", description: "Experience the finest properties in Dubai" },
  { id: "2", url: "/images/c2.webp", alt: "Dubai Creek Harbour", title: "Dubai Creek Harbour", description: "Modern waterfront living" },
  { id: "3", url: "/images/c3.webp", alt: "Dubai Hills Estate", title: "Dubai Hills Estate", description: "Premium residential community" },
  { id: "4", url: "/images/c4.webp", alt: "Dubai Marina", title: "Dubai Marina", description: "Iconic waterfront lifestyle" },
  { id: "5", url: "/images/c5.webp", alt: "Palm Jumeirah", title: "Palm Jumeirah", description: "The world's most iconic island" },
  { id: "6", url: "/images/c6.webp", alt: "Downtown Dubai", title: "Downtown Dubai", description: "At the heart of the city" },
];

export default function HeroSection() {
  const [isLoading, setIsLoading] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  const [heroImages, setHeroImages] = useState<HeroImage[]>(FALLBACK_IMAGES);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const { t } = useLanguage();

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    (async () => {
      try {
        const response = await getBinghattiHillviewsImages();
        if (response.images?.length) setHeroImages(response.images);
      } catch {}
    })();
  }, []);

  // Loading overlay removal
  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), isMobile ? 800 : 1500);
    return () => clearTimeout(timer);
  }, [isMobile]);

  // Auto-rotate
  const startRotation = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
    }, 6000);
  };

  useEffect(() => {
    if (!isMobile && heroImages.length > 1) startRotation();
    return () => { if (intervalRef.current) clearInterval(intervalRef.current); };
  }, [heroImages.length, isMobile]);

  const goTo = (index: number) => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    setCurrentImageIndex((index + heroImages.length) % heroImages.length);
    if (!isMobile) startRotation();
  };

  return (
    <section
      aria-label="Hero — Modac Real Estate"
      className="relative w-full overflow-hidden"
      style={{ height: "100svh", minHeight: 600 }}
    >
      {/* ── Cinematic Loading Screen ── */}
      <AnimatePresence>
        {isLoading && (
          <motion.div
            key="loader"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
            className="absolute inset-0 z-[100] flex flex-col items-center justify-center"
            style={{ background: "#050f18" }}
          >
            {/* Animated gold ring */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 2.5, repeat: Infinity, ease: "linear" }}
              className="mb-8"
              style={{
                width: 64,
                height: 64,
                borderRadius: "50%",
                border: "2px solid transparent",
                borderTopColor: "#C9A96E",
                borderRightColor: "rgba(201,169,110,0.25)",
              }}
            />
            <motion.p
              initial={{ opacity: 0, letterSpacing: "0.4em" }}
              animate={{ opacity: 1, letterSpacing: "0.5em" }}
              transition={{ delay: 0.4, duration: 1 }}
              className="text-xs font-light uppercase tracking-[0.5em]"
              style={{ color: "#C9A96E" }}
            >
              Modac Real Estate
            </motion.p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── Background Layers ── */}
      {/* Full-screen image slideshow */}
      <div className="absolute inset-0">
        <AnimatePresence initial={false}>
          <motion.div
            key={currentImageIndex}
            initial={{ opacity: 0, scale: 1.04 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.4, ease: "easeInOut" }}
            className="absolute inset-0"
          >
            <Image
              src={heroImages[currentImageIndex]?.url || "/images/bgImage.webp"}
              alt={heroImages[currentImageIndex]?.alt || "Dubai luxury real estate"}
              fill
              className="object-cover"
              priority={currentImageIndex === 0}
              quality={isMobile ? 65 : 85}
              sizes="100vw"
            />
          </motion.div>
        </AnimatePresence>

        {/* Video layer — plays silently over images on desktop */}
        {!isMobile && (
          <video
            ref={videoRef}
            className="absolute inset-0 w-full h-full object-cover transition-opacity duration-1000"
            style={{ opacity: isVideoLoaded ? 1 : 0, zIndex: 2 }}
            autoPlay
            muted
            loop
            playsInline
            poster="/images/bgImage.webp"
            onCanPlayThrough={() => setIsVideoLoaded(true)}
          >
            <source src="/Video-from-Modac-Real-Estate-Dubai - Trim.mp4" type="video/mp4" />
          </video>
        )}
      </div>

      {/* ── Layered cinematic overlays ── */}
      {/* Deep bottom fade */}
      <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/90 via-black/35 to-black/10 pointer-events-none" />
      {/* Left dramatic vignette */}
      <div className="absolute inset-0 z-10 bg-gradient-to-r from-black/50 via-transparent to-black/20 pointer-events-none" />
      {/* Subtle gold tint strip at bottom */}
      <div
        className="absolute bottom-0 left-0 right-0 h-px z-10 pointer-events-none"
        style={{ background: "linear-gradient(to right, transparent, #C9A96E55, transparent)" }}
      />

      {/* ── Slide Indicators ── */}
      {!isMobile && heroImages.length > 1 && (
        <div className="absolute bottom-40 left-1/2 -translate-x-1/2 z-30 flex gap-2">
          {heroImages.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              aria-label={`Go to slide ${i + 1}`}
              className="transition-all duration-500"
              style={{
                width: i === currentImageIndex ? 32 : 8,
                height: 2,
                background: i === currentImageIndex ? "#C9A96E" : "rgba(255,255,255,0.4)",
                borderRadius: 2,
                cursor: "pointer",
              }}
            />
          ))}
        </div>
      )}

      {/* ── Slide Arrow Controls ── */}
      {!isMobile && heroImages.length > 1 && (
        <>
          <button
            onClick={() => goTo(currentImageIndex - 1)}
            aria-label="Previous slide"
            className="absolute left-6 top-1/2 -translate-y-1/2 z-30 w-11 h-11 flex items-center justify-center rounded-full border border-white/20 text-white/70 hover:text-white hover:border-white/60 transition-all duration-300 backdrop-blur-sm"
            style={{ background: "rgba(0,0,0,0.25)" }}
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={() => goTo(currentImageIndex + 1)}
            aria-label="Next slide"
            className="absolute right-6 top-1/2 -translate-y-1/2 z-30 w-11 h-11 flex items-center justify-center rounded-full border border-white/20 text-white/70 hover:text-white hover:border-white/60 transition-all duration-300 backdrop-blur-sm"
            style={{ background: "rgba(0,0,0,0.25)" }}
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </>
      )}

      {/* ── Vertical slide counter (right edge, desktop) ── */}
      {!isMobile && (
        <div className="absolute right-8 top-1/2 -translate-y-1/2 z-30 flex flex-col items-center gap-1">
          <span className="text-white/90 text-sm font-light tabular-nums" style={{ letterSpacing: "0.1em" }}>
            {String(currentImageIndex + 1).padStart(2, "0")}
          </span>
          <div className="w-px h-16 bg-white/20 relative overflow-hidden">
            <motion.div
              className="absolute top-0 left-0 w-full"
              style={{ background: "#C9A96E", height: "100%", originY: 0 }}
              animate={{ scaleY: (currentImageIndex + 1) / heroImages.length }}
              transition={{ duration: 0.4 }}
            />
          </div>
          <span className="text-white/40 text-sm font-light tabular-nums" style={{ letterSpacing: "0.1em" }}>
            {String(heroImages.length).padStart(2, "0")}
          </span>
        </div>
      )}

      {/* ── Main Content ── */}
      <div className="relative z-20 h-full flex flex-col justify-between px-4 sm:px-8 lg:px-16 xl:px-24">

        {/* Headline block — upper-center */}
        <div className="flex flex-col items-center justify-center flex-1 text-center pt-20 md:pt-24">
          {/* Gold pill eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.6 }}
            className="inline-flex items-center gap-2 mb-6 md:mb-8"
          >
            <div className="h-px w-8" style={{ background: "#C9A96E" }} />
            <span
              className="text-[10px] sm:text-xs font-medium uppercase tracking-[0.35em]"
              style={{ color: "#C9A96E" }}
            >
              Premier Real Estate · Dubai
            </span>
            <div className="h-px w-8" style={{ background: "#C9A96E" }} />
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.8, ease: [0.22, 1, 0.36, 1] }}
            className="text-balance text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-white leading-[1.06] font-light mb-4 md:mb-6"
            style={{ letterSpacing: "-0.01em" }}
          >
            Where Luxury
            <br />
            <span
              className="font-semibold italic"
              style={{
                background: "linear-gradient(135deg, #e8d5b7 0%, #C9A96E 50%, #b08d4e 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Finds Home
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 2.1 }}
            className="text-white/70 text-sm sm:text-base md:text-lg max-w-xl mx-auto font-light leading-relaxed mb-8 md:mb-10 text-pretty"
            style={{ letterSpacing: "0.01em" }}
          >
            Curating exceptional properties across Dubai&apos;s most coveted addresses.
            Your vision, our expertise.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 2.3 }}
            className="flex flex-col sm:flex-row gap-3 items-center mb-10 md:mb-0"
          >
            <a
              href="/offPlanspremiumpropertyindubai"
              className="inline-flex items-center gap-2 px-7 py-3 text-sm font-medium text-white rounded-full transition-all duration-300 hover:opacity-90 hover:scale-105"
              style={{
                background: "linear-gradient(135deg, #0a4b6f 0%, #1a6b8f 100%)",
                boxShadow: "0 8px 32px rgba(10,75,111,0.45)",
              }}
            >
              Explore Properties
            </a>
            <a
              href="/contactUs"
              className="inline-flex items-center gap-2 px-7 py-3 text-sm font-medium rounded-full border transition-all duration-300 hover:bg-white/10"
              style={{ borderColor: "rgba(201,169,110,0.6)", color: "#C9A96E" }}
            >
              Speak to an Expert
            </a>
          </motion.div>
        </div>

        {/* Search Bar — lower section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 2.5, ease: [0.22, 1, 0.36, 1] }}
          className="w-full max-w-6xl mx-auto pb-6 md:pb-10"
        >
          <SearchBar />
        </motion.div>
      </div>

      {/* ── Stats Bar (desktop only) ── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 3 }}
        className="absolute bottom-0 left-0 right-0 z-20 hidden lg:flex items-stretch divide-x"
        style={{ borderTop: "1px solid rgba(201,169,110,0.18)", background: "rgba(5,15,24,0.72)", backdropFilter: "blur(16px)" }}
      >
        {STATS.map((stat) => (
          <div
            key={stat.label}
            className="flex-1 flex flex-col items-center justify-center py-4 gap-0.5"
            style={{ borderColor: "rgba(201,169,110,0.15)" }}
          >
            <span
              className="text-xl font-semibold"
              style={{ color: "#C9A96E", letterSpacing: "-0.01em" }}
            >
              {stat.value}
            </span>
            <span className="text-[11px] font-light tracking-widest uppercase text-white/50">
              {stat.label}
            </span>
          </div>
        ))}
      </motion.div>
    </section>
  );
}
