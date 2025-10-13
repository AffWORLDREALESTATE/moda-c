"use client"
import { BlogCard } from "@/src/components/common/card"
import { Button } from "@/src/components/ui/button"
import { motion } from "framer-motion"
import Link from "next/link"
import { useLanguage } from "@/src/contexts/LanguageContext"

const blogPosts = [
  {
    imageSrc: "/images/property1.jpeg",
    date: "Jan 15, 2025",
    title: "Guide to Interior Design Trends in Dubai Luxury Residences",
    description: "Discover the latest interior design trends shaping Dubai's luxury residences. From traditional Arabic influences to modern minimalist aesthetics, explore how to create stunning spaces that reflect the city's opulent lifestyle.",
    href: "/blog/details/interior-design-trends-dubai-luxury-residences",
  },
  {
    imageSrc: "/images/property2.jpeg",
    date: "Jan 10, 2025",
    title: "Dubai's Hidden Gems: Guide to Exclusive Neighborhoods",
    description: "Explore Dubai's most exclusive neighborhoods and discover hidden gems that offer unparalleled luxury living. From waterfront communities to golf course estates, find your perfect home in the city of dreams.",
    href: "/blog/details/dubai-hidden-gems-exclusive-neighborhoods",
  },
  {
    imageSrc: "/images/property3.jpeg",
    date: "Jan 5, 2025",
    title: "Your Guide to Dubai's Premier Real Estate Investment",
    description: "Discover the top 10 areas for property investment in Dubai. From Downtown Dubai to Palm Jumeirah, explore lucrative opportunities in the world's most dynamic real estate market.",
    href: "/blog/details/dubai-premier-real-estate-investment-guide",
  },
]

export function InsightsInspiration() {
  const { t } = useLanguage();
  return (
    <section className="py-12 sm:py-16 md:py-24 bg-white">
      <div className="mx-auto px-2 sm:px-4 md:px-6 lg:px-10 xl:px-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-sm sm:text-base md:text-lg text-[#0a4b6f] uppercase font-extralight tracking-wider mb-2">{t('landing.blog.kicker')}</p>
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-mono text-gray-800 mb-3 sm:mb-4 font-serif px-2">
            {t('landing.blog.heading')}
          </h2>
          <p className="text-xs sm:text-sm font-extralight text-gray-600 max-w-3xl mx-auto mb-8 sm:mb-12 leading-relaxed tracking-wide px-2">
            {t('landing.blog.subtitle')}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 mb-8 sm:mb-12">
          {blogPosts.map((post, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <BlogCard {...post} />
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
       <Link href={"/blog"} passHref>
        <Button className="w-40 sm:w-48 h-9 sm:h-11 bg-[#0a4b6f] hover:bg-[#1a6b8f] text-white font-extralight tracking-wider py-2 px-3 sm:px-4 rounded-none transition-colors uppercase text-sm sm:text-base">
       {t('landing.blog.viewAll')}
          </Button>
       </Link>
        </motion.div>
      </div>
    </section>
  )
}
