"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import {
  Menu,
  X,
  Globe,
  ChevronDown,
  Settings,
  Home,
  DollarSign,
  Scale,
  Bed,
  Wrench,
  Users,
  Bitcoin,
  TrendingUp,
  Building2,
} from "lucide-react";
import { Button } from "@/src/components/ui/button";
import Link from "next/link";
import { cn } from "@/src/lib/utils";
import { Icon } from "@iconify/react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/src/components/ui/dropdown-menu";
import LanguageSwitcher from "./language-switcher";
import { useLanguage } from "@/src/contexts/LanguageContext";

export default function Header() {
  const [isOverlayOpen, setIsOverlayOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { t, currencySymbol, currencyIconSrc, availableCurrencies, setCurrency, currencyCode } = useLanguage();
  const pathname = usePathname();

  useEffect(() => {
    document.body.style.overflow = isOverlayOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOverlayOpen]);

  // Add scroll detection for header styling
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: "/", label: t('nav.home') },
    { href: "/offPlanspremiumpropertyindubai", label: t('nav.buy') },
    { href: "/team", label: t('nav.teams') },
    { href: "/communities", label: t('nav.properties') || t('nav.areas') },
    { href: "/service", label: t('nav.services') },
    { href: "/blog", label: t('nav.blogs') },
    { href: "/about", label: t('nav.about') },
    { href: "/contactUs", label: 'Contact' },
  ];
  const services = [
    { icon: <Bed className="h-4 w-4 text-gray-500" />, name: t('nav.rent'), href: "/rent" },
    { icon: <Globe className="h-4 w-4 text-gray-500" />, name: t('services.buySell.title'), href: "/service/buy-sell-offplan" },
    { icon: <TrendingUp className="h-4 w-4 text-gray-500" />, name: t('services.investment.title'), href: "/service/investment" },
    { icon: <DollarSign className="h-4 w-4 text-gray-500" />, name: t('services.golden.title'), href: "/service/golden-visa" },
    { icon: <Globe className="h-4 w-4 text-gray-500" />, name: t('services.residents.title'), href: "/service/residents-visa" },
  ];

  const headerLink = [
    { href: "/", label: t('nav.home') },
    { href: "/offPlanspremiumpropertyindubai", label: t('nav.buy') },
    { href: "/communities", label: t('nav.properties') || t('nav.areas') },
    { href: "/service", label: t('nav.services'), hasDropdown: true },
    { href: "/blog", label: t('nav.blogs') },
    { href: "/about", label: t('nav.about') },
    { href: "/team", label: t('nav.teams') },
    { href: "/contactUs", label: 'Contact' },
  ];
  
  useEffect(() => {
    if (!isOverlayOpen) return;

    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Element;
      if (target.closest('[data-mobile-overlay]')) {
        return;
      }
      setIsOverlayOpen(false);
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [isOverlayOpen]);
  
  const isHome = pathname === "/";
  const headerTransparency = !isScrolled && isHome;

  return (
    <header className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
      isScrolled 
        ? "bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-lg" 
        : isHome 
          ? "bg-transparent border-none shadow-none" 
          : "bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-md"
    )}>
      <nav className="w-full flex items-center justify-between px-4 sm:px-6 md:px-12 lg:px-20 xl:px-24 h-16 sm:h-18 md:h-20 lg:h-22 transition-all duration-500">
        {/* Logo */}
        <div className="flex items-center flex-shrink-0">
          <Link href={"/"}>
            <Image
              src="/images/logo.png"
              alt="MODAC Real Estate Logo"
              width={260}
              height={92}
              className="object-contain transition-all duration-500 w-20 h-7 sm:w-24 sm:h-8 md:w-64 md:h-20 lg:w-72 lg:h-24 xl:w-80 xl:h-28"
            />
          </Link>
        </div>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center space-x-8 flex-shrink-0">
          {headerLink.map((link, i) => {
            if (link.hasDropdown) {
              return (
                <DropdownMenu key={i} open={isServicesDropdownOpen} onOpenChange={setIsServicesDropdownOpen}>
                  <DropdownMenuTrigger asChild>
                      <button
                        type="button"
                        onClick={(e) => e.preventDefault()}
                        className={cn(
                          "relative pb-1 transition-all duration-300 font-medium text-base",
                          headerTransparency ? "text-white hover:text-white/80" : "text-gray-900 hover:text-red-600",
                          "after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0",
                          "after:transition-all after:duration-300 hover:after:w-full",
                          headerTransparency ? "after:bg-white" : "after:bg-red-600",
                          (pathname === link.href || isServicesDropdownOpen) && "after:w-full",
                          !headerTransparency && (pathname === link.href || isServicesDropdownOpen) && "text-red-600"
                        )}
                        style={{
                          letterSpacing: "0.5px",
                        }}
                        aria-haspopup="menu"
                      >
                        {link.label}
                      </button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="w-[500px] p-0" align="start" sideOffset={10}>
                    <div className="bg-white rounded-lg shadow-xl border border-gray-200">
                      {/* Header */}
                      <div className="p-4 border-b border-gray-100">
                        <h3 className="text-gray-500 text-sm font-light">{t('nav.services')}</h3>
                      </div>
                      
                      {/* Services Grid */}
                      <div className="p-4">
                        <div className="grid grid-cols-2 gap-3">
                          {/* Left Column */}
                          <div className="space-y-2">
                            {services.slice(0, 5).map((service, index) => (
                              <Link
                                key={index}
                                href={(service as any).href || (
                                  service.name === "List Your Property" ? "/list-your-property" :
                                  service.name === "Mortgages" ? "/mortgages" :
                                  service.name === "Conveyancing" ? "/conveyancing" :
                                  service.name === "Short Term Rentals" ? "/short-term-rental" :
                                  service.name === "Offplan Management" ? "/offplan-management" :
                                  "/service"
                                )}
                                onClick={() => setIsServicesDropdownOpen(false)}
                                className="flex items-center space-x-3 p-2 rounded-lg hover:bg-[#314355]/5 transition-colors duration-200 cursor-pointer group"
                              >
                                <div className="flex-shrink-0 transition-colors duration-200 group-hover:text-[#314355]">
                                  {service.icon}
                                </div>
                                <span className="text-gray-800 font-medium text-sm group-hover:text-[#314355] transition-colors duration-200">
                                  {service.name}
                                </span>
                              </Link>
                            ))}
                          </div>

                          {/* Right Column */}
                          <div className="space-y-2">
                            {services.slice(5, 10).map((service, index) => (
                              <Link
                                key={index + 5}
                                href={(service as any).href || (
                                  service.name === "List Your Property" ? "/list-your-property" :
                                  service.name === "Mortgages" ? "/mortgages" :
                                  service.name === "Conveyancing" ? "/conveyancing" :
                                  service.name === "Short-Term Rental" ? "/short-term-rental" :
                                  service.name === "Offplan Management" ? "/offplan-management" :
                                  "/service"
                                )}
                                onClick={() => setIsServicesDropdownOpen(false)}
                                className="flex items-center space-x-3 p-2 rounded-lg hover:bg-[#314355]/5 transition-colors duration-200 cursor-pointer group"
                              >
                                <div className="flex-shrink-0 transition-colors duration-200 group-hover:text-[#314355]">
                                  {service.icon}
                                </div>
                                <span className="text-gray-800 font-medium text-sm group-hover:text-[#314355] transition-colors duration-200">
                                  {service.name}
                                </span>
                              </Link>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </DropdownMenuContent>
                </DropdownMenu>
              );
            }
            
            return (
              <Link
                key={i}
                href={link.href}
                className={cn(
                  "relative pb-1 transition-all duration-300 font-medium text-base",
                  headerTransparency ? "text-white hover:text-white/80" : "text-gray-900 hover:text-red-600",
                  "after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0",
                  "after:transition-all after:duration-300 hover:after:w-full",
                  headerTransparency ? "after:bg-white" : "after:bg-red-600",
                  pathname === link.href && "after:w-full",
                  !headerTransparency && pathname === link.href && "text-red-600"
                )}
                style={{
                  letterSpacing: "0.5px",
                }}
              >
                {link.label}
              </Link>
            );
          })}
        </div>

        {/* Right Side - Currency and Actions */}
        <div className="flex items-center space-x-2 sm:space-x-3 md:space-x-4 flex-shrink-0">
          {/* Language Switcher - Smaller on mobile */}
          <div className={cn(
            "scale-75 sm:scale-90 md:scale-100 origin-right transition-all duration-500",
            headerTransparency && "brightness-0 invert"
          )}>
            <LanguageSwitcher />
          </div>

          {/* Currency Selector - Smaller on mobile */}
          <div className="flex items-center space-x-0.5">
            <div className={cn("hidden md:block w-px h-4 transition-colors duration-500", headerTransparency ? "bg-white/30" : "bg-gray-300")}></div>
            <div className={cn(
              "flex items-center space-x-0.5 scale-75 sm:scale-90 md:scale-100 origin-right transition-colors duration-500",
              headerTransparency ? "text-white" : "text-gray-600"
            )}>
              {currencyIconSrc ? (
                <Image src={currencyIconSrc} alt="AED" width={10} height={10} className={headerTransparency ? "brightness-0 invert" : ""} />
              ) : (
                <Globe className="h-2.5 w-2.5" />
              )}
              <select
                className="text-[9px] sm:text-[10px] md:text-xs font-light bg-transparent focus:outline-none cursor-pointer"
                value={currencyCode}
                onChange={(e) => setCurrency(e.target.value)}
                aria-label="Select currency"
              >
                {availableCurrencies.map((c) => (
                  <option key={c.code} value={c.code} className="text-gray-700">
                    {c.symbol} {c.code}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div
            className={cn(
              "lg:hidden cursor-pointer transition-colors duration-200 ml-1",
              headerTransparency ? "text-white hover:text-white/80" : "text-gray-700 hover:text-red-600"
            )}
            onClick={() => setIsOverlayOpen(true)}
          >
            <Menu className="h-6 w-6" />
          </div>
        </div>
      </nav>

      {/* Mobile Overlay Backdrop */}
      {isOverlayOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-[9998]"
          onClick={() => setIsOverlayOpen(false)}
        />
      )}

      {/* Mobile Overlay */}
      <div
        data-mobile-overlay
        className={`fixed top-0 bottom-0 right-0 w-full md:w-1/3 bg-white text-gray-900 z-[9999] transform transition-transform duration-300 ease-in-out shadow-2xl ${
          isOverlayOpen ? "translate-x-0" : "translate-x-full"
        }`}
        style={{ 
          backgroundColor: 'white', 
          opacity: 1,
          backgroundImage: 'none'
        }}
      >
        <div className="flex items-center justify-between p-4 sm:p-6 border-b border-gray-200 bg-[#1a6b8f] text-white">
          <h2 className="text-xl font-bold font-serif">{t('common.menu')}</h2>
          <button
            onClick={() => setIsOverlayOpen(false)}
            className="text-white hover:text-gray-200 transition-colors duration-200 p-2 rounded-full hover:bg-white/10"
          >
            <X className="h-6 w-6" />
          </button>
        </div>

        <nav className="flex flex-col p-4 sm:p-6 space-y-2 bg-white overflow-y-auto max-h-[calc(100vh-200px)]">
          {navLinks.map((link, i) => {
            if (link.href === "/service") {
              return (
                <div key={i} className="space-y-2">
                  <button
                    onClick={() => setIsServicesOpen(!isServicesOpen)}
                    className={cn(
                      "flex items-center justify-between w-full text-left text-gray-700 hover:text-red-600 transition-all duration-200 py-3 px-4 rounded-lg hover:bg-gray-50 border border-transparent hover:border-gray-200",
                      pathname === link.href && "text-red-600 font-medium bg-gray-50 border-gray-200"
                    )}
                  >
                    <span className="font-medium">{link.label}</span>
                    <ChevronDown className={cn(
                      "h-4 w-4 transition-transform duration-200",
                      isServicesOpen && "rotate-180"
                    )} />
                  </button>
                  
                  {/* Services Dropdown */}
                  <div className={cn(
                    "overflow-hidden transition-all duration-300",
                    isServicesOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                  )}>
                    <div className="pl-4 space-y-1 border-l-2 border-[#314355]/30 bg-white rounded-r-lg p-2 border border-gray-100">
                      {services.map((service, serviceIndex) => (
                        <Link
                          key={serviceIndex}
                          href={(service as any).href || (
                            service.name === "List Your Property" ? "/list-your-property" :
                            service.name === "Offplan Management" ? "/offplan-management" :
                            "/service"
                          )}
                          onClick={() => setIsOverlayOpen(false)}
                          className="flex items-center space-x-3 py-2 px-3 rounded-lg hover:bg-white hover:shadow-sm transition-all duration-200 cursor-pointer group border border-transparent hover:border-gray-200"
                        >
                          <div className="flex-shrink-0 transition-colors duration-200 group-hover:text-[#314355]">
                            {service.icon}
                          </div>
                          <span className="text-gray-700 font-medium text-sm group-hover:text-[#314355] transition-colors duration-200">
                            {service.name}
                          </span>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              );
            }
            
            return (
              <Link
                key={i}
                href={link.href}
                className={cn(
                  "text-gray-700 hover:text-red-600 transition-all duration-200 py-3 px-4 rounded-lg hover:bg-gray-50 border border-transparent hover:border-gray-200 font-medium",
                  pathname === link.href && "text-red-600 font-medium bg-gray-50 border-gray-200"
                )}
                onClick={() => setIsOverlayOpen(false)}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="p-4 sm:p-6 border-t border-gray-200 bg-white space-y-4 sm:space-y-6">
          {/* Mobile Buttons */}
          <div className="space-y-3 hidden md:block">
            <Link href="/list-your-property" onClick={() => setIsOverlayOpen(false)}>
              <Button className="w-full bg-[#1a6b8f] hover:bg-[#2a8abf] text-white font-medium shadow-lg hover:shadow-xl transition-all duration-200">
                {t('nav.listYourProperty')}
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
