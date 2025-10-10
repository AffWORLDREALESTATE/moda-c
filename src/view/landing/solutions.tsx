"use client";

import { ArrowRight, User, Building, Download, MapPin } from "lucide-react";
import { useLanguage } from "@/src/contexts/LanguageContext";

function Solutions() {
  const { t } = useLanguage();
  const solutions = [
    {
      icon: <User className="h-10 w-10 text-[#0a4b6f]" />,
      title: t('solutions.connectSpecialist'),
      description: t('solutions.connectDescription'),
      arrow: <ArrowRight className="h-5 w-5 text-[#0a4b6f]" />,
    },
    {
      icon: <Building className="h-10 w-10 text-[#0a4b6f]" />,
      title: t('solutions.listProperty'),
      description: t('solutions.listDescription'),
      arrow: <ArrowRight className="h-5 w-5 text-[#0a4b6f]" />,
    },
    {
      icon: <Download className="h-10 w-10 text-[#0a4b6f]" />,
      title: t('solutions.downloadReport'),
      description: t('solutions.downloadDescription'),
      arrow: <ArrowRight className="h-5 w-5 text-[#0a4b6f]" />,
    },
    {
      icon: <MapPin className="h-10 w-10 text-[#0a4b6f]" />,
      title: t('solutions.exploreProjects'),
      description: t('solutions.exploreDescription'),
      arrow: <ArrowRight className="h-5 w-5 text-[#0a4b6f]" />,
    },
  ];

  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-28 bg-gradient-to-br from-[#F8F6F0] via-white to-[#F2EEE8] relative overflow-hidden">
      {/* Luxury Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/5 via-transparent to-black/5"></div>
      <div className="absolute top-20 left-10 w-32 h-32 bg-[#0a4b6f]/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-[#1a6b8f]/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-2 sm:px-4 md:px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Luxury Header */}
          <div className="mb-8 sm:mb-12 md:mb-20 text-center">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-5xl xl:text-6xl font-light font-serif text-gray-800 leading-tight px-2">
              Dubai real estate solutions focused around
              <br />
              <span className="text-[#0a4b6f] font-normal">excellent customer service</span>
            </h2>
            <div className="w-16 sm:w-20 md:w-24 h-1 bg-gradient-to-r from-[#0a4b6f] to-[#1a6b8f] mx-auto mt-4 sm:mt-6 md:mt-8"></div>
          </div>

          {/* Ultra Luxury Solutions Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-6 sm:gap-8 md:gap-10 lg:gap-12">
            {solutions.map((solution, index) => (
              <div
                key={index}
                className="group relative bg-white/80 backdrop-blur-sm border border-[#0a4b6f]/20 rounded-2xl p-4 sm:p-6 md:p-8 hover:bg-white/95 hover:border-[#0a4b6f]/40 hover:shadow-2xl transition-all duration-500 cursor-pointer transform hover:-translate-y-1 md:hover:-translate-y-2"
              >
                {/* Luxury Icon Container */}
                <div className="mb-3 sm:mb-4 md:mb-6 relative">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 bg-gradient-to-br from-[#0a4b6f]/10 to-[#1a6b8f]/10 rounded-xl flex items-center justify-center group-hover:from-[#0a4b6f]/20 group-hover:to-[#1a6b8f]/20 transition-all duration-300">
                    {solution.icon}
                  </div>
                  {/* Subtle glow effect */}
                  <div className="absolute inset-0 w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 bg-[#0a4b6f]/5 rounded-xl blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>

                {/* Title with Luxury Arrow */}
                <div className="flex items-center justify-between mb-2 sm:mb-3 md:mb-4">
                  <h3 className="text-gray-800 font-medium text-sm sm:text-base md:text-lg lg:text-xl font-serif group-hover:text-[#0a4b6f] transition-colors duration-300">
                    {solution.title}
                  </h3>
                  <div className="opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0">
                    {solution.arrow}
                  </div>
                </div>

                {/* Elegant Description */}
                <p className="text-gray-600 text-xs sm:text-sm leading-relaxed font-light group-hover:text-gray-700 transition-colors duration-300">
                  {solution.description}
                </p>

                {/* Luxury Border Effect */}
                <div className="absolute inset-0 rounded-2xl border border-transparent bg-gradient-to-r from-[#0a4b6f]/20 via-transparent to-[#1a6b8f]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Solutions;
