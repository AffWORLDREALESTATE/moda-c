import { Input } from "@/src/components/ui/input";
import { Button } from "@/src/components/ui/button";
import { MapPin, Phone, Smartphone, Mail } from "lucide-react";
import { useLanguage } from "@/src/contexts/LanguageContext";

export default function Footer() {
  const { t } = useLanguage();

  // BUY / SELL column
  const buySellLinks = [
    { href: "/offPlanspremiumpropertyindubai?property_type=villa", label: "Villa" },
    { href: "/offPlanspremiumpropertyindubai?property_type=apartment", label: "Apartment" },
    { href: "/offPlanspremiumpropertyindubai?property_type=penthouse", label: "Penthouse" },
    { href: "/offPlanspremiumpropertyindubai?property_type=commercial", label: "Commercial" },
    { href: "/offPlanspremiumpropertyindubai?property_type=plot", label: "Plot" },
  ];

  // NAVIGATION column
  const navigationLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/contactUs", label: "Contact" },
    { href: "/team", label: "Team" },
    { href: "/privacy-policy", label: "Privacy Policy" },
  ];
  return (
    <footer className="bg-[#0a4b6f] text-white py-8 sm:py-12 md:py-16 lg:py-20 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
      <div className="container mx-auto">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-10 mb-8 sm:mb-10 md:mb-12">
          {/* BUY / SELL */}
          <div className="sm:col-span-1">
            <h4 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4 font-sans uppercase tracking-wide">BUY / SELL</h4>
            <ul className="space-y-2 sm:space-y-2.5">
              {buySellLinks.map((link, i) => (
                <li key={i}>
                  <a
                    href={link.href}
                    className="relative inline-block text-sm sm:text-base hover:text-gray-300 transition-colors duration-200
                               after:content-[''] after:absolute after:left-0 after:bottom-0
                               after:h-[1.5px] after:w-0 after:bg-white
                               after:transition-all after:duration-300 hover:after:w-full font-sans"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* NAVIGATION */}
          <div className="sm:col-span-1">
            <h4 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4 font-sans uppercase tracking-wide">NAVIGATION</h4>
            <ul className="space-y-2 sm:space-y-2.5">
              {navigationLinks.map((link, i) => (
                <li key={i}>
                  <a
                    href={link.href}
                    className="relative inline-block text-sm sm:text-base hover:text-gray-300 transition-colors duration-200
                               after:content-[''] after:absolute after:left-0 after:bottom-0
                               after:h-[1.5px] after:w-0 after:bg-white
                               after:transition-all after:duration-300 hover:after:w-full font-sans"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="sm:col-span-1 lg:col-span-1 font-sans">
            <h4 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4 font-sans uppercase tracking-wide">CONTACT INFORMATION</h4>
            <address className="not-italic space-y-2.5 sm:space-y-3 text-sm sm:text-base font-sans leading-relaxed">
              <div className="flex items-start gap-2 sm:gap-3">
                <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-white mt-0.5 sm:mt-1 flex-shrink-0" />
                <a
                  href="https://maps.app.goo.gl/MLsZVHdi97PSmAwL9"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gray-300 transition-colors duration-200"
                >
                  <div>
                    <p className="leading-snug">{t('contact.address.line1')}</p>
                    <p className="leading-snug">{t('contact.address.line2')}</p>
                  </div>
                </a>
              </div>
              <div className="flex items-center gap-2 sm:gap-3">
                <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-white flex-shrink-0" />
                <a
                  href="tel:+97145758035"
                  className="relative inline-block hover:text-gray-300 transition-colors duration-200
                             after:content-[''] after:absolute after:left-0 after:bottom-0
                             after:h-[1.5px] after:w-0 after:bg-white
                             after:transition-all after:duration-300 hover:after:w-full font-sans"
                >
                  {t('contact.phone.number')}
                </a>
              </div>
              <div className="flex items-center gap-2 sm:gap-3">
                <Smartphone className="w-4 h-4 sm:w-5 sm:h-5 text-white flex-shrink-0" />
                <a
                  href="tel:+971544745530"
                  className="relative inline-block hover:text-gray-300 transition-colors duration-200
                             after:content-[''] after:absolute after:left-0 after:bottom-0
                             after:h-[1.5px] after:w-0 after:bg-white
                             after:transition-all after:duration-300 hover:after:w-full font-sans break-all"
                >
                  +971-54-474-5530
                </a>
              </div>
              <div className="flex items-center gap-2 sm:gap-3">
                <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-white flex-shrink-0" />
                <a
                  href="mailto:info@modacrealestate.com"
                  className="relative inline-block hover:text-gray-300 transition-colors duration-200
                             after:content-[''] after:absolute after:left-0 after:bottom-0
                             after:h-[1.5px] after:w-0 after:bg-white
                             after:transition-all after:duration-300 hover:after:w-full font-sans break-all"
                >
                  {t('contact.email.address')}
                </a>
              </div>
            </address>
          </div>

          {/* Social Media */}
          <div className="sm:col-span-1 lg:col-span-1 font-sans">
            <h4 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4 font-sans uppercase tracking-wide">SOCIAL PROFILES</h4>
            <div className="flex items-center flex-wrap gap-2 sm:gap-3">
              <a
                href="https://www.facebook.com/modacrealestate/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#0a4b6f] border border-white/20 flex items-center justify-center hover:bg-white/10 hover:border-white/40 transition-all duration-200"
                aria-label="Facebook"
              >
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg"
                  alt="Facebook"
                  className="w-4 h-4 sm:w-5 sm:h-5"
                />
              </a>
              <a
                href="https://www.instagram.com/modacrealestate"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#0a4b6f] border border-white/20 flex items-center justify-center hover:bg-white/10 hover:border-white/40 transition-all duration-200"
                aria-label="Instagram"
              >
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png"
                  alt="Instagram"
                  className="w-4 h-4 sm:w-5 sm:h-5"
                />
              </a>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#0a4b6f] border border-white/20 flex items-center justify-center hover:bg-white/10 hover:border-white/40 transition-all duration-200"
                aria-label="LinkedIn"
              >
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png"
                  alt="LinkedIn"
                  className="w-4 h-4 sm:w-5 sm:h-5"
                />
              </a>
              {/* <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#0a4b6f] border border-white/20 flex items-center justify-center hover:bg-white/10 hover:border-white/40 transition-all duration-200"
                aria-label="Twitter"
              >
                <img
                  src="https://upload.wikimedia.org/wikipedia/fr/c/c8/Twitter_Bird.svg"
                  alt="Twitter"
                  className="w-4 h-4 sm:w-5 sm:h-5"
                />
              </a> */}
              <a
                href="https://www.youtube.com/@ModacRealEstate"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#0a4b6f] border border-white/20 flex items-center justify-center hover:bg-white/10 hover:border-white/40 transition-all duration-200"
                aria-label="YouTube"
              >
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/0/09/YouTube_full-color_icon_%282017%29.svg"
                  alt="YouTube"
                  className="w-5 h-5 sm:w-6 sm:h-6 object-contain"
                />
              </a>
            </div>
          </div>
        </div>

        {/* Legal Links */}
        <div className="border-t border-white/20 pt-6 sm:pt-8 mt-6 sm:mt-8">
          <div className="flex flex-wrap justify-center gap-3 sm:gap-4 md:gap-6 text-xs sm:text-sm text-white/70 mb-4 sm:mb-6">
            <a href="/privacy-policy" className="hover:text-white transition-colors duration-200 font-sans px-1">
              {t('footer.privacyPolicy')}
            </a>
            <a href="/terms-conditions" className="hover:text-white transition-colors duration-200 font-sans px-1">
              {t('footer.terms')}
            </a>
            <a href="/cookie-policy" className="hover:text-white transition-colors duration-200 font-sans px-1">
              {t('footer.cookiePolicy')}
            </a>
            <a href="/disclaimer" className="hover:text-white transition-colors duration-200 font-sans px-1">
              {t('footer.disclaimer')}
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/20 pt-4 sm:pt-6 flex flex-col sm:flex-row items-center justify-center sm:justify-between gap-2 sm:gap-4 text-xs sm:text-sm text-white/70">
          <p className="font-sans text-center sm:text-left">{t('footer.copyright')}</p>
        </div>
      </div>
    </footer>
  );
}