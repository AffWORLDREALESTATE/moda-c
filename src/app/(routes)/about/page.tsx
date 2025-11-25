"use client";

import Image from "next/image";
import { T } from "@/src/components/common/T";
import { useLanguage } from "@/src/contexts/LanguageContext";
import { motion } from "framer-motion";
import { FadeUp, FadeIn } from "@/src/components/common/reveal";
import { Building2, Users, Award, Globe, TrendingUp, Shield } from "lucide-react";

export default function AboutPage() {
  const { t } = useLanguage();
  
  const stats = [
    { icon: Building2, value: "500+", label: t('about.stats.propertiesSold') },
    { icon: Users, value: "1000+", label: t('about.stats.happyClients') },
    { icon: Award, value: "2022", label: t('about.stats.established') },
    { icon: Globe, value: "15+", label: t('about.stats.countriesServed') },
  ];

  const values = [
    {
      icon: Shield,
      title: t('about.values.trust.title'),
      description: t('about.values.trust.desc')
    },
    {
      icon: TrendingUp,
      title: t('about.values.growth.title'),
      description: t('about.values.growth.desc')
    },
    {
      icon: Globe,
      title: t('about.values.global.title'),
      description: t('about.values.global.desc')
    }
  ];

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50/30">
      {/* Hero Section - More Compact */}
      <section className="relative h-[50vh] w-full flex items-center justify-center overflow-hidden">
        <motion.div
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="absolute inset-0 w-full h-full"
        >
          <video
            className="absolute inset-0 w-full h-full object-cover"
            autoPlay
            muted
            loop
            playsInline
            webkit-playsinline
            preload="auto"
            poster="/images/bgImage.webp"
            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
          >
            <source src="/about_bg.mp4" type="video/mp4" />
          </video>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="relative z-10 text-center px-4"
        >
          {/* Brand accent line */}
          <div className="w-20 h-1 bg-gradient-to-r from-[#0a4b6f] to-[#1a6b8f] mx-auto mb-6"></div>
          
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">
            <T k="about.title" fallback="About Modac Real Estate" />
          </h1>
          
          <p className="text-white/90 text-base md:text-lg max-w-3xl mx-auto leading-relaxed">
            <T k="about.subtitle" fallback="Trusted African real estate consultancy in Dubai, UAE" />
          </p>
        </motion.div>
      </section>

      {/* Stats Section - Brand colors */}
      <section className="bg-gradient-to-r from-[#0a4b6f] via-[#1a6b8f] to-[#0a4b6f] py-6 md:py-8">
        <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center text-white"
              >
                <div className="w-16 h-16 mx-auto mb-4 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                  <stat.icon className="w-8 h-8" />
                </div>
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
                  viewport={{ once: true }}
                  className="text-3xl md:text-4xl font-bold mb-2"
                >
                  {stat.value}
                </motion.div>
                <p className="text-white/90 text-sm md:text-base font-medium">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="bg-gradient-to-br from-gray-50 to-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-serif text-gray-800 mb-4">
              {t('about.ourStory.title')}
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#0a4b6f] to-[#1a6b8f] mx-auto mb-6" />
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              {t('about.ourStory.description')}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            {/* Content */}
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="bg-white rounded-3xl p-8 md:p-10 shadow-lg border border-gray-100 h-full"
              >
                <div className="space-y-6">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    viewport={{ once: true }}
                    className="relative"
                  >
                    <div className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-[#0a4b6f] to-[#1a6b8f] rounded-full" />
                    <p className="text-gray-700 text-base leading-relaxed pl-6">
                      <T k="about.p1" />
                    </p>
                  </motion.div>
                  
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    viewport={{ once: true }}
                    className="relative"
                  >
                    <div className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-[#0a4b6f] to-[#1a6b8f] rounded-full" />
                    <p className="text-gray-700 text-base leading-relaxed pl-6">
                      <T k="about.p2" />
                    </p>
                  </motion.div>
                  
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    viewport={{ once: true }}
                    className="relative"
                  >
                    <div className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-[#0a4b6f] to-[#1a6b8f] rounded-full" />
                    <p className="text-gray-700 text-base leading-relaxed pl-6">
                      <T k="about.p3" />
                    </p>
                  </motion.div>
                </div>
              </motion.div>
            </div>

            {/* CEO Card - Redesigned */}
            <div>
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="relative h-full"
              >
                {/* Background decoration */}
                <div className="absolute -inset-4 bg-gradient-to-br from-[#0a4b6f]/20 to-[#0a4b6f]/20 rounded-3xl blur-2xl" />
                
                <div className="relative bg-white rounded-3xl shadow-2xl overflow-hidden border-2 border-gray-100 h-full flex flex-col">
                  {/* Image section - Full width */}
                  <motion.div
                    whileHover={{ scale: 1.01 }}
                    transition={{ duration: 0.3 }}
                    className="relative h-96 md:h-[450px] flex-shrink-0 overflow-hidden"
                  >
                    <Image 
                      src="/images/ceo.jpg" 
                      alt="CEO" 
                      fill 
                      className="object-cover object-center" 
                      priority
                      sizes="(max-width: 768px) 100vw, 50vw"
                      style={{ objectPosition: 'center 20%' }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    
                    {/* Floating badge - Redesigned */}
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.6, delay: 0.3 }}
                      viewport={{ once: true }}
                      className="absolute top-6 right-6 bg-[#0a4b6f] backdrop-blur-sm rounded-full px-4 py-2 shadow-xl"
                    >
                      <span className="text-white font-bold text-sm tracking-wider">CEO</span>
                    </motion.div>
                    
                    {/* Corner accent - Brand */}
                    <div className="absolute top-0 left-0 w-24 h-24 bg-gradient-to-br from-[#0a4b6f]/30 to-transparent rounded-br-full" />
                  </motion.div>
                  
                  {/* Content section - Enhanced */}
                  <div className="p-8 text-center flex-1 flex flex-col justify-center bg-gradient-to-br from-white to-gray-50">
                    <motion.h3
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.4 }}
                      viewport={{ once: true }}
                      className="text-2xl md:text-3xl font-bold text-gray-900 mb-3"
                    >
                      Fabien Mvie Monefong
                    </motion.h3>
                    
                    <motion.p
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.6 }}
                      viewport={{ once: true }}
                      className="text-[#0a4b6f] font-bold text-lg mb-4"
                    >
                      <T k="about.ceo" fallback="Founder & CEO" />
                    </motion.p>
                    
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.6, delay: 0.8 }}
                      viewport={{ once: true }}
                      className="w-16 h-1 bg-gradient-to-r from-[#0a4b6f] to-[#1a6b8f] mx-auto rounded-full mb-4"
                    />
                    
                    <motion.p
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 1.0 }}
                      viewport={{ once: true }}
                      className="text-gray-700 text-base leading-relaxed font-medium"
                    >
                      Leading Modac Real Estate with vision and expertise in Dubai's dynamic real estate market
                    </motion.p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section - Enhanced */}
      <section className="bg-white py-16 md:py-24 relative overflow-hidden">
        {/* Decorative background */}
        <div className="absolute top-0 right-0 w-80 h-80 bg-[#0a4b6f]/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#0a4b6f]/5 rounded-full blur-3xl"></div>
        
        <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8 relative z-10">
          <FadeUp>
            <div className="text-center mb-16">
              {/* Brand accent line */}
              <div className="w-20 h-1 bg-gradient-to-r from-[#0a4b6f] to-[#1a6b8f] mx-auto mb-6"></div>
              
              <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
                {t('about.values.heading')}
              </h2>
            </div>
          </FadeUp>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="bg-gradient-to-br from-white to-gray-50 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 text-center border-2 border-gray-100 hover:border-[#0a4b6f]/50"
              >
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.3 }}
                  className={`w-20 h-20 mx-auto mb-6 rounded-full flex items-center justify-center shadow-lg ${
                    index === 1 
                      ? 'bg-gradient-to-br from-red-600 to-red-700' 
                      : index === 2
                      ? 'bg-gradient-to-br from-sky-400 via-blue-500 to-teal-500'
                      : 'bg-gradient-to-br from-[#0a4b6f] to-[#1a6b8f]'
                  }`}
                >
                  <value.icon className="w-10 h-10 text-white" />
                </motion.div>
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed text-base">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}


