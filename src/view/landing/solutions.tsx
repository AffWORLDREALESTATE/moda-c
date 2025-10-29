"use client";

import { ArrowRight, UserCircle, Home, FileText, Map } from "lucide-react";
import { useLanguage } from "@/src/contexts/LanguageContext";

function Solutions() {
  const { t } = useLanguage();
  
  // WhatsApp number for all cards
  const whatsappNumber = "971545758035"; // Replace with your actual WhatsApp number
  const whatsappMessage = encodeURIComponent("Hello! I'm interested in your services.");
  
  const solutions = [
    {
      icon: <UserCircle className="h-12 w-12 text-red-600" />,
      title: t('solutions.connectSpecialist'),
      description: t('solutions.connectDescription'),
      arrow: <ArrowRight className="h-5 w-5 text-red-600" />,
      link: `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`,
    },
    {
      icon: <Home className="h-12 w-12 text-red-600" />,
      title: t('solutions.listProperty'),
      description: t('solutions.listDescription'),
      arrow: <ArrowRight className="h-5 w-5 text-red-600" />,
      link: `https://wa.me/${whatsappNumber}?text=${encodeURIComponent("I want to list my property")}`,
    },
    {
      icon: <FileText className="h-12 w-12 text-red-600" />,
      title: t('solutions.downloadReport'),
      description: t('solutions.downloadDescription'),
      arrow: <ArrowRight className="h-5 w-5 text-red-600" />,
      link: `https://wa.me/${whatsappNumber}?text=${encodeURIComponent("I want to download the Dubai Property Market Report")}`,
    },
    {
      icon: <Map className="h-12 w-12 text-red-600" />,
      title: t('solutions.exploreProjects'),
      description: t('solutions.exploreDescription'),
      arrow: <ArrowRight className="h-5 w-5 text-red-600" />,
      link: `https://wa.me/${whatsappNumber}?text=${encodeURIComponent("I want to explore Dubai projects")}`,
    },
  ];

  return (
    <section className="py-16 sm:py-20 md:py-24 lg:py-32 bg-gradient-to-br from-white via-gray-50 to-blue-50/30 relative overflow-hidden">
      {/* Enhanced Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-[#0a4b6f]/10 to-red-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-blue-500/10 to-[#0a4b6f]/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-2 sm:px-4 md:px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Enhanced Header */}
          <div className="mb-12 sm:mb-16 md:mb-20 text-center">
            {/* Red accent line */}
            <div className="w-20 h-1 bg-gradient-to-r from-red-500 to-red-600 mx-auto mb-6"></div>
            
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight px-2 mb-4">
              {t('solutions.heading')}
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0a4b6f] to-red-600">{t('solutions.headingEmphasis')}</span>
            </h2>
          </div>

          {/* Ultra Luxury Solutions Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-6 sm:gap-8 md:gap-10 lg:gap-12">
            {solutions.map((solution, index) => (
              <a
                key={index}
                href={solution.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative bg-white/95 backdrop-blur-sm border-2 border-gray-200 hover:border-red-500 rounded-2xl p-4 sm:p-6 md:p-8 hover:bg-white hover:shadow-2xl transition-all duration-500 cursor-pointer transform hover:-translate-y-2 md:hover:-translate-y-3"
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
                <div className="absolute inset-0 rounded-2xl border border-transparent bg-gradient-to-r from-red-500/20 via-transparent to-[#0a4b6f]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Solutions;
