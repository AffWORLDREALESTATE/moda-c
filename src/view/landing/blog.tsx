"use client"
import { BlogCard } from "@/src/components/common/card"
import { Button } from "@/src/components/ui/button"
import { motion } from "framer-motion"
import Link from "next/link"
import { useLanguage } from "@/src/contexts/LanguageContext"

const blogPosts = [
  {
    imageSrc: "/images/property1.jpeg",
    date: "Jul 16, 2025",
    title: "Design That Feels Right: The Psychology Behind Luxury Living",
    description: "Ever stepped into a beautiful room that still felt off? We unpack how lighting, layout, textures, and proportion shape mood—and why true luxury is as much about comfort as it is about looks.",
    href: "/blog/details/why-your-home-should-feel-as-good-as-it-looks",
  },
  {
    imageSrc: "/images/property2.jpeg",
    date: "Dec 24, 2024",
    title: "Buying vs Renting in Dubai: Why Ownership Often Wins",
    description: "From long‑term value and rental yields to flexible payment plans and residency perks—discover the practical advantages that make owning property in Dubai a compelling choice for many residents and investors.",
    href: "/blog/details/why-your-home-should-feel-as-good-as-it-looks",
  },
  {
    imageSrc: "/images/property3.jpeg",
    date: "Jan 8, 2024",
    title: "Dubai Real Estate Outlook: Investing for the Years Ahead",
    description: "With world‑class infrastructure, ambitious developments, and a growth‑driven vision, Dubai continues to attract global capital. Here’s what to watch—and where the next opportunities may emerge.",
    href: "/blog/details/why-your-home-should-feel-as-good-as-it-looks",
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
