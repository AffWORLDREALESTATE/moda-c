"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import {
  Menu,
  X,
  Globe,
  ChevronDown,
  User,
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
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/src/components/ui/hover-card";

export default function Header() {
  const [isOverlayOpen, setIsOverlayOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
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
    { href: "/buy", label: "Buy" },
    { href: "/rent", label: "Rent" },
    { href: "/offPlans", label: "Projects" },
    { href: "/team", label: "Teams" },
    { href: "/communities", label: "Areas" },
    { href: "/service", label: "Services" },
    { href: "/blog", label: "Blogs" },
    { href: "/contactUs", label: "More" },
  ];
  const services = [
    {
      icon: <Settings className="h-4 w-4 text-gray-500" />,
      name: "Property Management"
    },
    {
      icon: <Home className="h-4 w-4 text-gray-500" />,
      name: "List Your Property"
    },
    {
      icon: <DollarSign className="h-4 w-4 text-gray-500" />,
      name: "Mortgages"
    },
    {
      icon: <Scale className="h-4 w-4 text-gray-500" />,
      name: "Conveyancing"
    },
    {
      icon: <Bed className="h-4 w-4 text-gray-500" />,
      name: "Short Term Rentals"
    },
    {
      icon: <Wrench className="h-4 w-4 text-gray-500" />,
      name: "Property Snagging"
    },
    {
      icon: <Users className="h-4 w-4 text-gray-500" />,
      name: "Partner Program"
    },
    
  ];

  const headerLink = [
    { href: "/buy", label: "Buy" },
    { href: "/rent", label: "Rent" },
    { href: "/offPlans", label: "Projects" },
    { href: "/team", label: "Teams" },
    { href: "/communities", label: "Areas" },
    { href: "/service", label: "Services", hasDropdown: true },
    { href: "/blog", label: "Blogs" },
    { href: "/contactUs", label: "More" },
  ];
  useEffect(() => {
    if (!isOverlayOpen) return;

    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Element;
      // Don't close if clicking inside the mobile overlay
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
  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/98 backdrop-blur-xl border-b border-gray-200 shadow-lg' 
        : 'bg-white/95 backdrop-blur-xl border-b border-gray-100 shadow-sm'
    }`}>
      <nav className="container mx-auto flex items-center justify-between px-6 h-16">
        {/* Logo */}
        <div className="flex items-center flex-shrink-0">
          <Link href={"/"}>
            <Image
              src="/Logo .png"
              alt="MODACPROPERTIES Logo"
              width={100}
              height={32}
              className="object-contain"
            />
          </Link>
        </div>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center space-x-6 flex-shrink-0">
          {headerLink.map((link, i) => {
            if (link.hasDropdown) {
              return (
                <HoverCard key={i} openDelay={200} closeDelay={100}>
                  <HoverCardTrigger asChild>
                    <Link
                      href={link.href}
                      className={cn(
                        "relative pb-1 transition-all duration-300 font-light text-sm text-gray-700 hover:text-[#DC2626]",
                        "after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[1px] after:w-0",
                        "after:bg-[#DC2626] after:transition-all after:duration-300 hover:after:w-full",
                        pathname === link.href && "after:w-full text-[#DC2626]"
                      )}
                      style={{
                        letterSpacing: "0.5px",
                      }}
                    >
                      {link.label}
                    </Link>
                  </HoverCardTrigger>
                  <HoverCardContent className="w-[500px] p-0" sideOffset={10}>
                    <div className="bg-white rounded-lg shadow-xl border border-gray-200">
                      {/* Header */}
                      <div className="p-4 border-b border-gray-100">
                        <h3 className="text-gray-500 text-sm font-light">Our Services</h3>
                      </div>
                      
                      {/* Services Grid */}
                      <div className="p-4">
                        <div className="grid grid-cols-2 gap-3">
                          {/* Left Column */}
                          <div className="space-y-2">
                            {services.slice(0, 5).map((service, index) => (
                              <Link
                                key={index}
                                href={
                                  service.name === "List Your Property" ? "/list-your-property" :
                                  service.name === "Property Management" ? "/property-management" :
                                  service.name === "Mortgages" ? "/mortgages" :
                                  service.name === "Conveyancing" ? "/conveyancing" :
                                  service.name === "Short Term Rentals" ? "/short-term-rental" :
                                  "/service"
                                }
                                className="flex items-center space-x-3 p-2 rounded-lg hover:bg-blue-50 transition-colors duration-200 cursor-pointer group"
                              >
                                <div className="flex-shrink-0 transition-colors duration-200 group-hover:text-blue-600">
                                  {service.icon}
                                </div>
                                <span className="text-blue-900 font-medium text-sm group-hover:text-blue-700 transition-colors duration-200">
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
                                href={
                                  service.name === "List Your Property" ? "/list-your-property" :
                                  service.name === "Property Management" ? "/property-management" :
                                  service.name === "Mortgages" ? "/mortgages" :
                                  service.name === "Conveyancing" ? "/conveyancing" :
                                  service.name === "Short-Term Rental" ? "/short-term-rental" :
                                  "/service"
                                }
                                className="flex items-center space-x-3 p-2 rounded-lg hover:bg-blue-50 transition-colors duration-200 cursor-pointer group"
                              >
                                <div className="flex-shrink-0 transition-colors duration-200 group-hover:text-blue-600">
                                  {service.icon}
                                </div>
                                <span className="text-blue-900 font-medium text-sm group-hover:text-blue-700 transition-colors duration-200">
                                  {service.name}
                                </span>
                              </Link>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </HoverCardContent>
                </HoverCard>
              );
            }
            
            return (
            <Link
              key={i}
              href={link.href}
              className={cn(
                  "relative pb-1 transition-all duration-300 font-light text-sm text-gray-700 hover:text-[#DC2626]",
                  "after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[1px] after:w-0",
                "after:bg-[#DC2626] after:transition-all after:duration-300 hover:after:w-full",
                pathname === link.href && "after:w-full text-[#DC2626]"
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

        {/* Right Side - Currency, Login, Signup */}
        <div className="flex items-center space-x-3 flex-shrink-0">
          {/* Currency Display */}
          <div className="hidden md:flex items-center space-x-2">
            <div className="w-px h-4 bg-gray-300"></div>
            <div className="flex items-center space-x-1 text-gray-600">
              <Globe className="h-3 w-3" />
              <span className="text-xs font-light">AED</span>
            </div>
          </div>

          {/* Login Button */}
          <Link href="/login">
            <Button
              variant="outline"
              className="hidden sm:flex items-center space-x-2 bg-transparent h-8 px-3 border-gray-300 text-gray-700 hover:border-[#DC2626] hover:text-[#DC2626] transition-all duration-200"
            >
              <User className="h-3 w-3" />
              <span className="text-xs font-light">Login</span>
            </Button>
          </Link>

          {/* List Your Property Button */}
          <Link href="/list-your-property">
            <Button className="h-8 px-4 text-xs font-light bg-gradient-to-r from-[#DC2626] to-[#B91C1C] hover:from-[#B91C1C] hover:to-[#991B1B] text-white border-0 transition-all duration-200">
              List Your Property
            </Button>
          </Link>

          {/* Mobile Menu Button */}
          <div
            className="lg:hidden cursor-pointer transition-colors duration-200 text-gray-700 hover:text-[#DC2626]"
            onClick={() => setIsOverlayOpen(true)}
          >
            <Menu className="h-5 w-5" />
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
        <div className="flex items-center justify-between p-4 sm:p-6 border-b border-gray-200 bg-gradient-to-r from-[#DC2626] to-[#B91C1C] text-white">
          <h2 className="text-xl font-bold font-serif">Menu</h2>
          <button
            onClick={() => setIsOverlayOpen(false)}
            className="text-white hover:text-gray-200 transition-colors duration-200 p-2 rounded-full hover:bg-white/10"
          >
            <X className="h-6 w-6" />
          </button>
        </div>

        <nav className="flex flex-col p-4 sm:p-6 space-y-2 bg-white">
          {navLinks.map((link, i) => {
            if (link.href === "/service") {
              return (
                <div key={i} className="space-y-2">
                  <button
                    onClick={() => setIsServicesOpen(!isServicesOpen)}
                    className={cn(
                      "flex items-center justify-between w-full text-left text-gray-700 hover:text-[#DC2626] transition-all duration-200 py-3 px-4 rounded-lg hover:bg-gray-50 border border-transparent hover:border-gray-200",
                      pathname === link.href && "text-[#DC2626] font-medium bg-gray-50 border-gray-200"
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
                    <div className="pl-4 space-y-1 border-l-2 border-[#DC2626]/30 bg-white rounded-r-lg p-2 border border-gray-100">
                      {services.map((service, serviceIndex) => (
                        <Link
                          key={serviceIndex}
                          href={
                            service.name === "List Your Property" ? "/list-your-property" :
                            service.name === "Property Management" ? "/property-management" :
                            "/service"
                          }
                          onClick={() => setIsOverlayOpen(false)}
                          className="flex items-center space-x-3 py-2 px-3 rounded-lg hover:bg-white hover:shadow-sm transition-all duration-200 cursor-pointer group border border-transparent hover:border-gray-200"
                        >
                          <div className="flex-shrink-0 transition-colors duration-200 group-hover:text-[#DC2626]">
                            {service.icon}
                          </div>
                          <span className="text-gray-700 font-medium text-sm group-hover:text-[#DC2626] transition-colors duration-200">
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
                  "text-gray-700 hover:text-[#DC2626] transition-all duration-200 py-3 px-4 rounded-lg hover:bg-gray-50 border border-transparent hover:border-gray-200 font-medium",
                  pathname === link.href && "text-[#DC2626] font-medium bg-gray-50 border-gray-200"
              )}
                onClick={() => setIsOverlayOpen(false)}
            >
              {link.label}
            </Link>
            );
          })}
        </nav>

        <div className="p-4 sm:p-6 border-t border-gray-200 bg-white space-y-4 sm:space-y-6">
          {/* Mobile Currency Display */}
          <div className="flex items-center justify-center space-x-2 p-3 bg-white rounded-lg border border-gray-200 shadow-sm">
            <Globe className="h-4 w-4 text-[#DC2626]" />
            <span className="text-sm font-medium text-gray-700">AED</span>
          </div>

          {/* Mobile Buttons */}
          <div className="space-y-3">
            <Link href="/login" onClick={() => setIsOverlayOpen(false)}>
              <Button
                variant="outline"
                className="w-full flex items-center justify-center space-x-2 border-[#DC2626] text-[#DC2626] hover:bg-[#DC2626] hover:text-white transition-all duration-200 font-medium"
              >
                <User className="h-4 w-4" />
                <span>Login</span>
              </Button>
            </Link>
            <Link href="/list-your-property" onClick={() => setIsOverlayOpen(false)}>
              <Button className="w-full bg-gradient-to-r from-[#DC2626] to-[#B91C1C] hover:from-[#B91C1C] hover:to-[#991B1B] text-white font-medium shadow-lg hover:shadow-xl transition-all duration-200">
                List Your Property
              </Button>
            </Link>
          </div>

        </div>
      </div>
    </header>
  );
}
