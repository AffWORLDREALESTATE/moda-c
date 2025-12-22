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
      link: "/list-your-property",
      isInternal: true,
    },
    {
      icon: <FileText className="h-12 w-12 text-red-600" />,
      title: t('solutions.downloadReport'),
      description: t('solutions.downloadDescription'),
      arrow: <ArrowRight className="h-5 w-5 text-red-600" />,
      link: "/download-report",
      isInternal: true,
    },
    {
      icon: <Map className="h-12 w-12 text-red-600" />,
      title: t('solutions.exploreProjects'),
      description: t('solutions.exploreDescription'),
      arrow: <ArrowRight className="h-5 w-5 text-red-600" />,
      link: "/explore-dubai-projects",
      isInternal: true,
    },
  ];

  return (
    <section className="pt-8 sm:pt-10 md:pt-12 pb-16 sm:pb-20 md:pb-24 lg:pb-32 bg-[#0a4b6f] relative overflow-hidden">
      
      {/* Creative Animated Background Elements */}
      <div className="absolute inset-0">
        {/* Large floating orbs with animation */}
        <div className="absolute top-10 right-10 w-72 h-72 bg-gradient-to-br from-white/20 to-red-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-gradient-to-tr from-blue-400/20 to-white/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/3 w-[500px] h-[500px] bg-gradient-to-r from-red-500/15 via-transparent to-blue-400/15 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/4 right-1/4 w-80 h-80 bg-white/10 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '0.5s' }}></div>
      </div>
      
      {/* Geometric Pattern Overlay */}
      <div className="absolute inset-0 opacity-10" style={{
        backgroundImage: `
          linear-gradient(45deg, rgba(255,255,255,.1) 25%, transparent 25%),
          linear-gradient(-45deg, rgba(255,255,255,.1) 25%, transparent 25%),
          linear-gradient(45deg, transparent 75%, rgba(255,255,255,.1) 75%),
          linear-gradient(-45deg, transparent 75%, rgba(255,255,255,.1) 75%)
        `,
        backgroundSize: '60px 60px',
        backgroundPosition: '0 0, 0 30px, 30px -30px, -30px 0px'
      }}></div>
      
      {/* Diagonal Lines Pattern */}
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(255,255,255,.1) 35px, rgba(255,255,255,.1) 70px)'
      }}></div>
      
      {/* Shimmer Effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent animate-shimmer" style={{
        backgroundSize: '200% 100%',
        animation: 'shimmer 8s infinite'
      }}></div>
      
      <div className="container mx-auto px-2 sm:px-4 md:px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Enhanced Header with Creative Elements */}
          <div className="mb-12 sm:mb-16 md:mb-20 text-center relative">
            {/* Decorative Elements */}
            <div className="absolute left-1/2 top-0 transform -translate-x-1/2 -translate-y-4">
              <div className="w-2 h-2 bg-red-500 rounded-full animate-ping"></div>
            </div>
            
            {/* Red accent line with glow */}
            <div className="relative w-24 h-1.5 mx-auto mb-8">
              <div className="absolute inset-0 bg-gradient-to-r from-red-500 via-red-600 to-red-500 rounded-full"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-red-500 via-red-600 to-red-500 rounded-full blur-sm opacity-50"></div>
            </div>
            
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight px-2 mb-4 relative">
              <span className="relative z-10 drop-shadow-lg">{t('solutions.heading')}</span>
              <br />
              <span 
                className="text-transparent bg-clip-text bg-gradient-to-r from-white via-red-200 to-white bg-[length:200%_auto] relative inline-block"
                style={{
                  animation: 'gradient 3s ease infinite',
                }}
              >
                {t('solutions.headingEmphasis')}
              </span>
              {/* Text glow effect */}
              <span className="absolute inset-0 text-transparent bg-clip-text bg-gradient-to-r from-white via-red-200 to-white blur-xl opacity-30">
                {t('solutions.heading')}
                <br />
                {t('solutions.headingEmphasis')}
              </span>
            </h2>
          </div>

          {/* Ultra Luxury Solutions Cards with Enhanced Design */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-6 sm:gap-8 md:gap-10 lg:gap-12">
            {solutions.map((solution, index) => (
              <a
                key={index}
                href={solution.link}
                {...(solution.isInternal ? {} : { target: "_blank", rel: "noopener noreferrer" })}
                className="group relative bg-white/98 backdrop-blur-lg border-2 border-white/30 hover:border-red-500/70 rounded-3xl p-5 sm:p-6 md:p-8 hover:bg-white hover:shadow-2xl hover:shadow-red-500/30 transition-all duration-700 cursor-pointer transform hover:-translate-y-4 md:hover:-translate-y-5 hover:scale-[1.02] overflow-hidden"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Animated Background Gradient */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-red-500/0 via-transparent to-blue-500/0 opacity-0 group-hover:opacity-30 transition-opacity duration-700"></div>
                
                {/* Shimmer Effect on Card */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transform -skew-x-12 translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000"></div>
                
                {/* Icon Container with Enhanced Effects */}
                <div className="mb-4 sm:mb-5 md:mb-6 relative z-10">
                  <div className="relative">
                    {/* Main icon container */}
                    <div className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 bg-gradient-to-br from-blue-900/25 via-red-600/20 to-blue-900/25 rounded-2xl flex items-center justify-center group-hover:from-blue-900/35 group-hover:via-red-600/30 group-hover:to-blue-900/35 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-xl group-hover:shadow-2xl">
                      {solution.icon}
                    </div>
                    
                    {/* Multiple glow layers */}
                    <div className="absolute inset-0 bg-red-500/40 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>
                    <div className="absolute inset-0 bg-blue-900/40 rounded-2xl blur-2xl opacity-0 group-hover:opacity-50 transition-opacity duration-700 -z-20"></div>
                    
                    {/* Rotating ring effect */}
                    <div className="absolute inset-0 border-2 border-red-500/0 group-hover:border-red-500/50 rounded-2xl group-hover:rotate-180 transition-all duration-1000"></div>
                  </div>
                </div>

                {/* Title with Enhanced Arrow Animation */}
                <div className="flex items-center justify-between mb-3 sm:mb-4 relative z-10">
                  <h3 className="text-gray-900 font-bold text-base sm:text-lg md:text-xl lg:text-2xl font-serif group-hover:text-blue-900 transition-colors duration-300 leading-tight">
                    {solution.title}
                  </h3>
                  <div className="opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-x-6 group-hover:translate-x-0 group-hover:scale-125 rotate-[-45deg] group-hover:rotate-0">
                    {solution.arrow}
                  </div>
                </div>

                {/* Description with Enhanced Styling */}
                <p className="text-gray-700 text-sm sm:text-base leading-relaxed font-normal group-hover:text-gray-900 transition-colors duration-300 relative z-10">
                  {solution.description}
                </p>

                {/* Multi-layer Border Effects */}
                <div className="absolute inset-0 rounded-3xl border-2 border-transparent bg-gradient-to-r from-red-500/40 via-transparent to-blue-900/40 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-white/50 via-transparent to-white/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Corner Accents with Animation */}
                <div className="absolute top-0 left-0 w-12 h-12">
                  <div className="absolute top-2 left-2 w-6 h-6 border-t-2 border-l-2 border-red-500/0 group-hover:border-red-500 rounded-tl-3xl transition-all duration-500 group-hover:w-8 group-hover:h-8"></div>
                </div>
                <div className="absolute bottom-0 right-0 w-12 h-12">
                  <div className="absolute bottom-2 right-2 w-6 h-6 border-b-2 border-r-2 border-blue-900/0 group-hover:border-blue-900 rounded-br-3xl transition-all duration-500 group-hover:w-8 group-hover:h-8"></div>
                </div>
                
                {/* Decorative Dots */}
                <div className="absolute top-4 right-4 w-2 h-2 bg-red-500/0 group-hover:bg-red-500 rounded-full transition-all duration-500 group-hover:scale-150"></div>
                <div className="absolute bottom-4 left-4 w-2 h-2 bg-blue-900/0 group-hover:bg-blue-900 rounded-full transition-all duration-500 group-hover:scale-150"></div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Solutions;
