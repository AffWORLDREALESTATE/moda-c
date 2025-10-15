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
    { icon: Building2, value: "500+", label: "Properties Sold" },
    { icon: Users, value: "1000+", label: "Happy Clients" },
    { icon: Award, value: "2022", label: "Established" },
    { icon: Globe, value: "15+", label: "Countries Served" },
  ];

  const values = [
    {
      icon: Shield,
      title: "Trust & Reliability",
      description: "Building lasting relationships through transparent and honest service."
    },
    {
      icon: TrendingUp,
      title: "Growth & Success",
      description: "Helping clients achieve their real estate investment goals."
    },
    {
      icon: Globe,
      title: "Global Reach",
      description: "Connecting international clients with Dubai's premium properties."
    }
  ];

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section with Parallax */}
      <section className="relative h-[70vh] w-full flex items-center justify-center overflow-hidden">
        <motion.div
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="absolute inset-0 w-full h-full"
        >
          <Image
            src="/images/building.jpg"
            alt="About Modac Real Estate"
            fill
            className="object-cover"
            priority
          />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/50 to-black/70" />
        
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="relative z-10 text-center px-4"
        >
          <h1 className="text-4xl md:text-6xl font-serif text-white mb-4 tracking-wide">
            <T k="about.title" fallback="About Modac Real Estate" />
          </h1>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="w-24 h-1 bg-gradient-to-r from-[#0a4b6f] to-[#1a6b8f] mx-auto mb-6"
          />
          <p className="text-white/90 text-lg md:text-xl max-w-4xl mx-auto leading-relaxed">
            <T k="about.subtitle" fallback="Trusted African real estate consultancy in Dubai, UAE" />
          </p>
        </motion.div>
      </section>

      {/* Stats Section */}
      <section className="bg-gradient-to-br from-[#0a4b6f] to-[#1a6b8f] py-16">
        <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center text-white"
              >
                <div className="w-16 h-16 mx-auto mb-4 bg-white/10 rounded-full flex items-center justify-center backdrop-blur-sm">
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
                <p className="text-white/80 text-sm md:text-base">{stat.label}</p>
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
              Our Story
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#0a4b6f] to-[#1a6b8f] mx-auto mb-6" />
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              Discover the journey of Modac Real Estate and our commitment to excellence in Dubai's real estate market
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

            {/* CEO Card */}
            <div>
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="relative h-full"
              >
                {/* Background decoration */}
                <div className="absolute -inset-4 bg-gradient-to-br from-[#0a4b6f]/10 to-[#1a6b8f]/10 rounded-3xl blur-xl" />
                
                <div className="relative bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100 h-full flex flex-col">
                  {/* Image section */}
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                    className="relative h-56 md:h-60 lg:h-64 flex-shrink-0 overflow-hidden mx-4 md:mx-6 lg:mx-8"
                  >
                    <Image 
                      src="/images/ceo.jpg" 
                      alt="CEO" 
                      fill 
                      className="object-cover object-center" 
                      priority
                      sizes="(max-width: 768px) 100vw, 50vw"
                      style={{ objectPosition: 'center 30%' }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
                    
                    {/* Professional overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-[#0a4b6f]/5 to-transparent" />
                    
                    {/* Floating badge */}
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.6, delay: 0.3 }}
                      viewport={{ once: true }}
                      className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm rounded-full px-3 py-1.5 shadow-lg border border-white/20"
                    >
                      <span className="text-[#0a4b6f] font-bold text-xs tracking-wide">CEO</span>
                    </motion.div>
                    
                    {/* Corner accent */}
                    <div className="absolute top-0 left-0 w-20 h-20 bg-gradient-to-br from-[#0a4b6f]/20 to-transparent rounded-br-full" />
                  </motion.div>
                  
                  {/* Content section */}
                  <div className="p-6 text-center flex-1 flex flex-col justify-center">
                    <motion.h3
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.4 }}
                      viewport={{ once: true }}
                      className="text-xl md:text-2xl font-serif text-gray-800 mb-2"
                    >
                      Fabien Mvie Monefong
                    </motion.h3>
                    
                    <motion.p
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.6 }}
                      viewport={{ once: true }}
                      className="text-[#0a4b6f] font-semibold text-base mb-4"
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
                      className="text-gray-600 text-sm leading-relaxed"
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

      {/* Values Section */}
      <section className="bg-gray-50 py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8">
          <FadeUp>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-serif text-gray-800 mb-4">
                Our Core Values
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-[#0a4b6f] to-[#1a6b8f] mx-auto" />
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
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 text-center"
              >
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.3 }}
                  className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-[#0a4b6f] to-[#1a6b8f] rounded-full flex items-center justify-center"
                >
                  <value.icon className="w-8 h-8 text-white" />
                </motion.div>
                <h3 className="text-xl font-serif text-gray-800 mb-4">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}


