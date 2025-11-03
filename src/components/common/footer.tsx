import { Input } from "@/src/components/ui/input";
import { Button } from "@/src/components/ui/button";
import { MapPin, Phone, Mail, Instagram, Facebook, Linkedin, Twitter, Youtube } from "lucide-react";
import { useLanguage } from "@/src/contexts/LanguageContext";

export default function Footer() {
  const { t } = useLanguage();

  const sitemapLinks = [
    { href: "/buy", label: t('nav.buy') },
    { href: "/offPlans", label: t('nav.projects') },
    { href: "/rent", label: t('nav.rent') },
    { href: "/communities", label: t('nav.areas') },
    { href: "/whyDubai", label: t('footer.whyDubai') },
    { href: "/service", label: t('nav.services') },
    { href: "/contactUs", label: t('footer.contactUs') },
  ];
  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">

        {/* Sitemap */}
        <div>
          <h4 className="text-lg mb-4 font-sans">{t('footer.sitemap')}</h4>
          <ul className="space-y-2 text-sm font-sans">
            {sitemapLinks.map((link, i) => (
              <li key={i}>
                <a
                  href={link.href}
                  className="relative inline-block hover:text-gray-300 transition-colors
                             after:content-[''] after:absolute after:left-0 after:bottom-0
                             after:h-[2px] after:w-0 after:bg-[#0a4b6f]
                             after:transition-all after:duration-300 hover:after:w-full font-sans"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div className="font-sans">
          <h4 className="text-lg mb-4 font-sans">{t('footer.contact')}</h4>
          <address className="not-italic space-y-3 text-sm font-sans leading-relaxed">
            <div className="flex items-start space-x-3">
              <MapPin className="w-4 h-4 text-[#0a4b6f] mt-1 flex-shrink-0" />
              <a
                href="https://maps.app.goo.gl/MLsZVHdi97PSmAwL9"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-300 transition-colors"
              >
                <div>
                  <p>{t('contact.address.line1')}</p>
                  <p>{t('contact.address.line2')}</p>
                </div>
              </a>
            </div>
            <div className="flex items-center space-x-3">
              <Phone className="w-4 h-4 text-[#0a4b6f] flex-shrink-0" />
              <a
                href="tel:+97145758035"
                className="relative inline-block hover:text-gray-300 transition-colors
                           after:content-[''] after:absolute after:left-0 after:bottom-0
                           after:h-[2px] after:w-0 after:bg-[#0a4b6f]
                           after:transition-all after:duration-300 hover:after:w-full font-sans"
              >
                {t('contact.phone.number')}
              </a>
            </div>
            <div className="flex items-center space-x-3">
              <Mail className="w-4 h-4 text-[#0a4b6f] flex-shrink-0" />
              <a
                href="mailto:info@modacrealestate.com"
                className="relative inline-block hover:text-gray-300 transition-colors
                           after:content-[''] after:absolute after:h-[2px] after:absolute after:left-0 after:bottom-0
                           after:h-[2px] after:w-0 after:bg-[#0a4b6f]
                           after:transition-all after:duration-300 hover:after:w-full font-sans"
              >
                {t('contact.email.address')}
              </a>
            </div>
            
          </address>
        </div>

        {/* Social Media */}
        <div className="font-sans">
          <h4 className="text-lg mb-4 font-sans">{t('footer.followUs')}</h4>
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <Facebook className="w-5 h-5 text-[#0a4b6f] flex-shrink-0" />
              <a
                href="https://www.facebook.com/modacrealestate/"
                target="_blank"
                rel="noopener noreferrer"
                className="relative inline-block hover:text-gray-300 transition-colors
                           after:content-[''] after:absolute after:left-0 after:bottom-0
                           after:h-[2px] after:h-0 after:bg-[#0a4b6f]
                           after:transition-all after:duration-300 hover:after:w-full font-sans"
              >
                {t('footer.facebook')}
              </a>
            </div>
            <div className="flex items-center space-x-3">
              <Instagram className="w-5 h-5 text-[#0a4b6f] flex-shrink-0" />
              <a
                href="https://www.instagram.com/modacrealestate"
                target="_blank"
                rel="noopener noreferrer"
                className="relative inline-block hover:text-gray-300 transition-colors
                           after:content-[''] after:absolute after:left-0 after:bottom-0
                           after:h-[2px] after:w-0 after:bg-[#0a4b6f]
                           after:transition-all after:duration-300 hover:after:w-full font-sans"
              >
                {t('footer.instagram')}
              </a>
            </div>
            <div className="flex items-center space-x-3">
              <Linkedin className="w-5 h-5 text-[#0a4b6f] flex-shrink-0" />
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="relative inline-block hover:text-gray-300 transition-colors
                           after:content-[''] after:absolute after:left-0 after:bottom-0
                           after:h-[2px] after:w-0 after:bg-[#0a4b6f]
                           after:transition-all after:duration-300 hover:after:w-full font-sans"
              >
                {t('footer.linkedin')}
              </a>
            </div>
            <div className="flex items-center space-x-3">
              <Twitter className="w-5 h-5 text-[#0a4b6f] flex-shrink-0" />
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="relative inline-block hover:text-gray-300 transition-colors
                           after:content-[''] after:absolute after:left-0 after:bottom-0
                           after:h-[2px] after:w-0 after:bg-[#0a4b6f]
                           after:transition-all after:duration-300 hover:after:w-full font-sans"
              >
                {t('footer.twitter')}
              </a>
            </div>
            <div className="flex items-center space-x-3">
              <Youtube className="w-5 h-5 text-[#0a4b6f] flex-shrink-0" />
              <a
                href="https://www.youtube.com/@ModacRealEstate"
                target="_blank"
                rel="noopener noreferrer"
                className="relative inline-block hover:text-gray-300 transition-colors
                           after:content-[''] after:absolute after:left-0 after:bottom-0
                           after:h-[2px] after:w-0 after:bg-[#0a4b6f]
                           after:transition-all after:duration-300 hover:after:w-full font-sans"
              >
                {t('footer.youtube')}
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Legal Links */}
      <div className="container mx-auto border-t border-white/20 mt-8 pt-8">
        <div className="flex flex-wrap justify-center gap-6 text-sm text-white/70 mb-4">
          <a href="/privacy-policy" className="hover:text-white transition-colors font-sans">
            {t('footer.privacyPolicy')}
          </a>
          <a href="/terms-conditions" className="hover:text-white transition-colors font-sans">
            {t('footer.terms')}
          </a>
          <a href="/cookie-policy" className="hover:text-white transition-colors font-sans">
            {t('footer.cookiePolicy')}
          </a>
          <a href="/disclaimer" className="hover:text-white transition-colors font-sans">
            {t('footer.disclaimer')}
          </a>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="container mx-auto border-t border-white/20 pt-4 flex flex-col md:flex-row items-center justify-between text-sm text-white/70">
        <p className="font-sans">{t('footer.copyright')}</p>
      </div>
    </footer>
  );
}