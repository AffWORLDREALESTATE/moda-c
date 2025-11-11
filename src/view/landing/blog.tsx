"use client"
import { BlogCard } from "@/src/components/common/card"
import { Button } from "@/src/components/ui/button"
import { motion } from "framer-motion"
import Link from "next/link"
import { useLanguage } from "@/src/contexts/LanguageContext"
import { usePathname } from "next/navigation"

const blogPosts = [
  {
    imageSrc: "/images/dubai-marina.webp",
    date: "Nov 28, 2025",
    title: "Dubai Marina: The Ultimate Waterfront Living Experience",
    description: "Explore Dubai Marina, one of the world's largest man-made marinas. Discover luxury apartments, stunning waterfront views, and a vibrant lifestyle in this iconic Dubai neighborhood.",
    href: "/blog/details/dubai-marina-waterfront-living",
  },
  {
    imageSrc: "/images/Palm-Jumeirah.webp",
    date: "Nov 25, 2025",
    title: "Palm Jumeirah: Living on Dubai's Iconic Island",
    description: "Experience the pinnacle of luxury living on Palm Jumeirah. From exclusive villas to world-class resorts, discover what makes this man-made island one of Dubai's most prestigious addresses.",
    href: "/blog/details/palm-jumeirah-iconic-island",
  },
  {
    imageSrc: "/images/Dubai-Creek-Harbour.webp",
    date: "Nov 22, 2025",
    title: "Dubai Creek Harbour: The Future of Urban Living",
    description: "Discover Dubai Creek Harbour, a visionary development that combines sustainable living with luxury amenities. Explore this master-planned community and its world-class infrastructure.",
    href: "/blog/details/dubai-creek-harbour-urban-living",
  },
  {
    imageSrc: "/images/property1.jpeg",
    date: "Nov 20, 2025",
    title: "Guide to Interior Design Trends in Dubai Luxury Residences",
    description: "Discover the latest interior design trends shaping Dubai's luxury residences. From traditional Arabic influences to modern minimalist aesthetics, explore how to create stunning spaces that reflect the city's opulent lifestyle.",
    href: "/blog/details/interior-design-trends-dubai-luxury-residences",
  },
  {
    imageSrc: "/images/Dubai-Hills-Estate.webp",
    date: "Nov 18, 2025",
    title: "Dubai Hills Estate: Family-Friendly Luxury Living",
    description: "Find your perfect family home in Dubai Hills Estate. This master-planned community offers world-class amenities, top-rated schools, and stunning golf course views in the heart of Dubai.",
    href: "/blog/details/dubai-hills-estate-family-living",
  },
  {
    imageSrc: "/images/property2.jpeg",
    date: "Nov 15, 2025",
    title: "Dubai's Hidden Gems: Guide to Exclusive Neighborhoods",
    description: "Explore Dubai's most exclusive neighborhoods and discover hidden gems that offer unparalleled luxury living. From waterfront communities to golf course estates, find your perfect home in the city of dreams.",
    href: "/blog/details/dubai-hidden-gems-exclusive-neighborhoods",
  },
  {
    imageSrc: "/images/main-dubai-islands-0217eaed95-3700-4cd4-ae39-f7e4130d8163.jpg",
    date: "Nov 12, 2025",
    title: "Dubai Islands: A New Era of Island Living",
    description: "Discover Dubai Islands, the latest addition to Dubai's luxury real estate landscape. Experience pristine beaches, world-class amenities, and exclusive residential developments on these stunning islands.",
    href: "/blog/details/dubai-islands-new-era-living",
  },
  {
    imageSrc: "/images/card1.jpeg",
    date: "Nov 10, 2025",
    title: "Buying Property in Dubai: Complete Guide for Investors",
    description: "Everything you need to know about buying property in Dubai. From legal requirements to investment opportunities, this comprehensive guide covers all aspects of Dubai real estate investment.",
    href: "/blog/details/buying-property-dubai-investors-guide",
  },
  {
    imageSrc: "/images/property3.jpeg",
    date: "Nov 8, 2025",
    title: "Your Guide to Dubai's Premier Real Estate Investment",
    description: "Discover the top 10 areas for property investment in Dubai. From Downtown Dubai to Palm Jumeirah, explore lucrative opportunities in the world's most dynamic real estate market.",
    href: "/blog/details/dubai-premier-real-estate-investment-guide",
  },
  {
    imageSrc: "/images/card2.jpeg",
    date: "Nov 7, 2025",
    title: "Downtown Dubai: Living in the Heart of the City",
    description: "Experience life in Downtown Dubai, home to the Burj Khalifa and Dubai Mall. Discover luxury apartments, world-class dining, and unparalleled entertainment in the city's most vibrant district.",
    href: "/blog/details/downtown-dubai-heart-city",
  },
  {
    imageSrc: "/images/card3.jpeg",
    date: "Nov 5, 2025",
    title: "Business Bay: The Commercial Hub of Dubai",
    description: "Explore Business Bay, Dubai's premier business district. From luxury apartments to commercial spaces, discover why this area is attracting investors and residents from around the world.",
    href: "/blog/details/business-bay-commercial-hub",
  },
  {
    imageSrc: "/images/card4.jpeg",
    date: "Nov 3, 2025",
    title: "Jumeirah Beach Residence: Beachfront Luxury Living",
    description: "Live the beachfront lifestyle at JBR. Discover luxury apartments with stunning sea views, world-class restaurants, and direct access to one of Dubai's most beautiful beaches.",
    href: "/blog/details/jbr-beachfront-luxury-living",
  },
  {
    imageSrc: "/images/c1.webp",
    date: "Nov 1, 2025",
    title: "Dubai Real Estate Market Trends 2025: What Investors Need to Know",
    description: "Stay ahead with the latest Dubai real estate market trends. From price movements to emerging neighborhoods, get expert insights on where the market is heading in 2025.",
    href: "/blog/details/dubai-market-trends-2025",
  },
  {
    imageSrc: "/images/c2.webp",
    date: "Oct 30, 2025",
    title: "Off-Plan Properties in Dubai: Investment Opportunities",
    description: "Discover the benefits of investing in off-plan properties in Dubai. Learn about payment plans, developer reputation, and how to maximize returns on pre-construction investments.",
    href: "/blog/details/off-plan-properties-dubai",
  },
  {
    imageSrc: "/images/c3.webp",
    date: "Oct 28, 2025",
    title: "Dubai Property Rental Yields: Maximizing Your Investment",
    description: "Learn how to maximize rental yields on Dubai properties. From location selection to property management, discover strategies to boost your rental income in Dubai's competitive market.",
    href: "/blog/details/dubai-rental-yields-investment",
  },
  {
    imageSrc: "/images/c4.webp",
    date: "Oct 26, 2025",
    title: "Luxury Villas in Dubai: A Guide to Premium Living",
    description: "Explore Dubai's most exclusive villa communities. From Emirates Hills to Al Barari, discover luxury villas that offer privacy, space, and world-class amenities in stunning settings.",
    href: "/blog/details/luxury-villas-dubai-guide",
  },
  {
    imageSrc: "/images/c5.webp",
    date: "Oct 24, 2025",
    title: "Dubai Property Taxes and Fees: Complete Breakdown",
    description: "Understand all property-related taxes and fees in Dubai. From registration fees to service charges, get a complete breakdown of costs when buying property in Dubai.",
    href: "/blog/details/dubai-property-taxes-fees",
  },
  {
    imageSrc: "/images/c6.webp",
    date: "Oct 22, 2025",
    title: "Sustainable Living in Dubai: Green Buildings and Eco-Friendly Homes",
    description: "Discover Dubai's commitment to sustainability. Explore green buildings, eco-friendly developments, and sustainable living options that combine luxury with environmental responsibility.",
    href: "/blog/details/sustainable-living-dubai",
  },
  {
    imageSrc: "/images/blog1.webp",
    date: "Oct 20, 2025",
    title: "Dubai Property Investment for Expats: Essential Guide",
    description: "Everything expats need to know about investing in Dubai real estate. From visa benefits to legal requirements, navigate the Dubai property market with confidence.",
    href: "/blog/details/dubai-investment-expats-guide",
  },
  {
    imageSrc: "/images/blog2.webp",
    date: "Oct 18, 2025",
    title: "Dubai's Top 10 Most Expensive Properties: Luxury Showcase",
    description: "Take a tour of Dubai's most luxurious and expensive properties. From penthouses to private islands, discover the pinnacle of luxury real estate in Dubai.",
    href: "/blog/details/dubai-expensive-properties-showcase",
  },
  {
    imageSrc: "/images/building.jpg",
    date: "Oct 16, 2025",
    title: "Dubai Property Market Forecast: 2026 Outlook",
    description: "Get expert predictions on Dubai's property market for 2026. From price forecasts to emerging trends, stay informed about future investment opportunities.",
    href: "/blog/details/dubai-market-forecast-2026",
  },
  {
    imageSrc: "/images/list.jpg",
    date: "Oct 14, 2025",
    title: "Best Areas to Buy Property in Dubai for Families",
    description: "Find the perfect family-friendly neighborhoods in Dubai. From schools to parks, discover communities that offer the best lifestyle for families with children.",
    href: "/blog/details/best-areas-families-dubai",
  },
  {
    imageSrc: "/images/analysis.webp",
    date: "Oct 12, 2025",
    title: "Dubai Real Estate ROI: Calculating Your Returns",
    description: "Learn how to calculate returns on Dubai property investments. From rental yields to capital appreciation, understand the metrics that matter for real estate investors.",
    href: "/blog/details/dubai-real-estate-roi",
  },
  {
    imageSrc: "/images/marketprofiling.webp",
    date: "Oct 10, 2025",
    title: "Dubai Property Market Analysis: Q4 2025 Report",
    description: "Get comprehensive insights into Dubai's property market performance. Analyze trends, prices, and opportunities in the fourth quarter of 2025.",
    href: "/blog/details/dubai-market-analysis-q4-2025",
  },
  {
    imageSrc: "/images/third.webp",
    date: "Oct 8, 2025",
    title: "Dubai Penthouses: Ultimate Luxury Living in the Sky",
    description: "Experience the height of luxury with Dubai's most exclusive penthouses. From panoramic views to private terraces, discover what makes penthouse living extraordinary.",
    href: "/blog/details/dubai-penthouses-luxury-living",
  },
  {
    imageSrc: "/images/bgImage.webp",
    date: "Oct 6, 2025",
    title: "Dubai Property Developer Guide: Top Builders to Know",
    description: "Learn about Dubai's leading property developers. From Emaar to DAMAC, discover the developers shaping Dubai's skyline and creating world-class communities.",
    href: "/blog/details/dubai-property-developers-guide",
  },
  {
    imageSrc: "/images/dubai-marina.webp",
    date: "Oct 4, 2025",
    title: "Dubai Marina Apartments: Waterfront Living Guide",
    description: "Explore luxury apartment options in Dubai Marina. From studio units to spacious penthouses, find your perfect waterfront home in this iconic neighborhood.",
    href: "/blog/details/dubai-marina-apartments-guide",
  },
  {
    imageSrc: "/images/Palm-Jumeirah.webp",
    date: "Oct 2, 2025",
    title: "Palm Jumeirah Villas: Exclusive Island Properties",
    description: "Discover exclusive villa options on Palm Jumeirah. From beachfront mansions to garden villas, explore the most prestigious properties on Dubai's iconic palm-shaped island.",
    href: "/blog/details/palm-jumeirah-villas-exclusive",
  },
  {
    imageSrc: "/images/Dubai-Creek-Harbour.webp",
    date: "Sep 30, 2025",
    title: "Dubai Creek Harbour: Master-Plan Community Guide",
    description: "Explore the master-planned community of Dubai Creek Harbour. From residential towers to retail spaces, discover this visionary development's comprehensive offerings.",
    href: "/blog/details/dubai-creek-harbour-masterplan",
  },
  {
    imageSrc: "/images/Dubai-Hills-Estate.webp",
    date: "Sep 28, 2025",
    title: "Dubai Hills Estate: Golf Course Living at Its Finest",
    description: "Experience golf course living in Dubai Hills Estate. From villas overlooking the fairways to apartments with stunning views, discover luxury living in a golf community.",
    href: "/blog/details/dubai-hills-golf-living",
  },
  {
    imageSrc: "/images/property1.jpeg",
    date: "Sep 26, 2025",
    title: "Dubai Property Viewing: Tips for First-Time Buyers",
    description: "Essential tips for viewing properties in Dubai. From what to look for to questions to ask, make the most of your property viewings and find your perfect home.",
    href: "/blog/details/dubai-property-viewing-tips",
  },
  {
    imageSrc: "/images/property2.jpeg",
    date: "Sep 24, 2025",
    title: "Dubai Real Estate Agents: How to Choose the Right One",
    description: "Learn how to select the best real estate agent in Dubai. From credentials to experience, find an agent who will help you navigate the Dubai property market successfully.",
    href: "/blog/details/choosing-dubai-real-estate-agent",
  },
  {
    imageSrc: "/images/property3.jpeg",
    date: "Sep 22, 2025",
    title: "Dubai Property Financing: Mortgage Options Explained",
    description: "Understand your financing options when buying property in Dubai. From mortgage rates to eligibility criteria, get comprehensive information on property financing in Dubai.",
    href: "/blog/details/dubai-property-financing-mortgage",
  },
  {
    imageSrc: "/images/card1.jpeg",
    date: "Sep 20, 2025",
    title: "Dubai Freehold vs Leasehold: Understanding Property Ownership",
    description: "Learn the difference between freehold and leasehold properties in Dubai. Understand ownership rights, restrictions, and which option is best for your investment goals.",
    href: "/blog/details/dubai-freehold-leasehold-ownership",
  },
  {
    imageSrc: "/images/card2.jpeg",
    date: "Sep 18, 2025",
    title: "Dubai Property Maintenance: Keeping Your Investment in Top Shape",
    description: "Essential maintenance tips for Dubai property owners. From HVAC systems to building regulations, learn how to maintain your property and protect your investment.",
    href: "/blog/details/dubai-property-maintenance-tips",
  },
  {
    imageSrc: "/images/card3.jpeg",
    date: "Sep 16, 2025",
    title: "Dubai Property Insurance: Protecting Your Investment",
    description: "Understand property insurance options in Dubai. From building insurance to contents coverage, ensure your property investment is fully protected.",
    href: "/blog/details/dubai-property-insurance-guide",
  },
  {
    imageSrc: "/images/card4.jpeg",
    date: "Sep 14, 2025",
    title: "Dubai Property Resale: Maximizing Your Sale Price",
    description: "Learn strategies to maximize your property sale price in Dubai. From staging to pricing, discover tips to get the best return on your property investment.",
    href: "/blog/details/dubai-property-resale-maximize",
  },
]

export function InsightsInspiration() {
  const { t } = useLanguage();
  const pathname = usePathname();
  const displayedPosts = pathname === "/blog" ? blogPosts : blogPosts.slice(0, 6);
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
          {displayedPosts.map((post, index) => (
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

        {pathname !== "/blog" && (
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
        )}
      </div>
    </section>
  )
}
