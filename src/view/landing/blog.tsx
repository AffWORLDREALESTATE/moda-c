"use client"
import { BlogCard } from "@/src/components/common/card"
import { Button } from "@/src/components/ui/button"
import { motion } from "framer-motion"
import Link from "next/link"
import { useLanguage } from "@/src/contexts/LanguageContext"
import { usePathname } from "next/navigation"

const blogPosts = [
  {
    imageSrc: "/images/smart-city.png",
    date: "Apr 20, 2026",
    title: "Dubai's Real Estate Market: Q1 2026 Performance and Q2 Outlook",
    description: "Dubai's real estate sector has shown remarkable resilience in Q1 2026. We dive into the numbers and explore what's in store for the second quarter of the year.",
    href: "/blog/details/dubai-real-estate-market-q1-2026-performance",
  },
  {
    imageSrc: "/images/green-community.png",
    date: "Apr 10, 2026",
    title: "Top 5 Emerging Luxury Neighborhoods in Dubai for 2026",
    description: "Looking beyond the traditional favorites, we identify the up-and-coming areas that are redefining luxury living in Dubai this year.",
    href: "/blog/details/top-5-emerging-luxury-neighborhoods-2026",
  },
  {
    imageSrc: "/images/luxury-penthouse.png",
    date: "Mar 25, 2026",
    title: "The Impact of New Golden Visa Regulations on Dubai Property Demand",
    description: "Recent updates to the Golden Visa program are reshaping the investment landscape. Learn how these changes are driving long-term commitment to the city.",
    href: "/blog/details/golden-visa-regulations-impact-2026",
  },
  {
    imageSrc: "/images/luxury-penthouse.png",
    date: "Mar 15, 2026",
    title: "Living in the Sky: A Guide to Dubai's Most Exclusive Penthouses",
    description: "Experience the ultimate in luxury with our curated guide to the most prestigious penthouses in Dubai, offering panoramic views and world-class amenities.",
    href: "/blog/details/exclusive-dubai-penthouses-guide",
  },
  {
    imageSrc: "/images/green-community.png",
    date: "Mar 5, 2026",
    title: "Dubai's Best Schools: A Guide for Families Moving to the City",
    description: "Relocating with children? We've compiled a list of the top-rated international schools in Dubai, categorized by curriculum and location.",
    href: "/blog/details/dubai-best-schools-family-guide",
  },
  {
    imageSrc: "/images/smart-city.png",
    date: "Feb 25, 2026",
    title: "The Future of AI in Dubai Real Estate: Predicting Market Trends",
    description: "How artificial intelligence is transforming the way we buy, sell, and manage property in Dubai. Discover the tools and tech driving the future.",
    href: "/blog/details/ai-future-dubai-real-estate",
  },
  {
    imageSrc: "/images/palm-aerial.png",
    date: "Feb 15, 2026",
    title: "The Ultimate Guide to Dubai's Hidden Waterfront Communities",
    description: "Beyond the Marina and the Palm, discover the secluded waterfront enclaves that offer peace, privacy, and stunning sea views.",
    href: "/blog/details/hidden-waterfront-communities-dubai",
  },
  {
    imageSrc: "/images/business-bay.png",
    date: "Feb 5, 2026",
    title: "Investing in Commercial Property: Why Business Bay is the Place to Be",
    description: "Business Bay is booming. We analyze the commercial real estate trends and why this district is a top choice for office and retail investments.",
    href: "/blog/details/investing-commercial-property-business-bay",
  },
  {
    imageSrc: "/images/green-community.png",
    date: "Jan 25, 2026",
    title: "Dubai's Sustainable Revolution: The Rise of Eco-Friendly Developments",
    description: "Sustainability is no longer a choice but a necessity. Explore the greenest residential projects in Dubai and why eco-friendly living is on the rise.",
    href: "/blog/details/sustainable-developments-dubai-rise",
  },
  {
    imageSrc: "/images/lagoon-lifestyle.png",
    date: "Jan 20, 2026",
    title: "A Day in the Life of a Luxury Property Agent in Dubai",
    description: "Ever wondered what it's like to sell multi-million dollar villas? Join us for a behind-the-scenes look at a typical day for our top-performing agents.",
    href: "/blog/details/day-in-life-luxury-agent-dubai",
  },
  {
    imageSrc: "/images/creek-sunset.png",
    date: "Jan 10, 2026",
    title: "Top 10 Instagrammable Spots in Dubai's Most Iconic Neighborhoods",
    description: "From the street art of City Walk to the architecture of the DIFC, we've found the most photogenic locations in Dubai's real estate gems.",
    href: "/blog/details/instagrammable-spots-dubai-neighborhoods",
  },
  {
    imageSrc: "/images/business-bay.png",
    date: "Jan 5, 2026",
    title: "Understanding the Dubai Property Cycle: When is the Best Time to Buy?",
    description: "Market timing is key. We break down the historical property cycles in Dubai and provide expert advice on the current market phase.",
    href: "/blog/details/dubai-property-cycle-buying-tips",
  },
  {
    imageSrc: "/images/c1.webp",
    date: "Dec 28, 2025",
    title: "The Rise of Co-living Spaces in Dubai: A New Trend for Young Professionals",
    description: "Co-living is gaining traction. Discover why young professionals are choosing shared living spaces that offer community and flexibility.",
    href: "/blog/details/co-living-spaces-dubai-trend",
  },
  {
    imageSrc: "/images/c2.webp",
    date: "Dec 18, 2025",
    title: "Dubai's Culinary Scene: Best Restaurants Near Luxury Residential Hubs",
    description: "Explore the fine dining options situated in the heart of Dubai's most exclusive communities, from Michelin-starred spots to hidden local favorites.",
    href: "/blog/details/dubai-culinary-scene-luxury-hubs",
  },
  {
    imageSrc: "/images/c3.webp",
    date: "Dec 8, 2025",
    title: "Navigating the Dubai Rental Market: A Guide for New Expats",
    description: "New to the city? Our comprehensive guide covers everything from Ejari registration to understanding RERA regulations for tenants.",
    href: "/blog/details/dubai-rental-market-expat-guide",
  },
  {
    imageSrc: "/images/c4.webp",
    date: "Nov 28, 2025",
    title: "The Impact of Global Economic Shifts on Dubai's Real Estate Market",
    description: "How global inflation and interest rate changes are affecting property prices in Dubai. An expert analysis for international investors.",
    href: "/blog/details/global-economic-shifts-dubai-real-estate",
  },
  {
    imageSrc: "/images/c5.webp",
    date: "Nov 18, 2025",
    title: "Luxury Car Culture in Dubai: Matching Your Ride with Your Residence",
    description: "In Dubai, your car is an extension of your home. We explore the synergy between luxury automotive brands and high-end residential developments.",
    href: "/blog/details/luxury-car-culture-dubai-residences",
  },
  {
    imageSrc: "/images/c6.webp",
    date: "Nov 8, 2025",
    title: "Dubai's Best Golf Course Communities: Where to Live and Play",
    description: "For the golf enthusiasts, we review the best residential areas built around championship golf courses, offering both luxury and leisure.",
    href: "/blog/details/dubai-best-golf-course-communities",
  },
  {
    imageSrc: "/images/modern-villa.png",
    date: "Oct 28, 2025",
    title: "The Art of Flipping Houses in Dubai: A Profitable Investment Strategy?",
    description: "Can you make a profit by buying, renovating, and selling? We discuss the risks and rewards of house flipping in the current market.",
    href: "/blog/details/flipping-houses-dubai-strategy",
  },
  {
    imageSrc: "/images/green-community.png",
    date: "Oct 18, 2025",
    title: "Health and Wellness in Dubai: Best Residential Areas for an Active Lifestyle",
    description: "Looking for a community that prioritizes health? Discover areas with the best gyms, running tracks, and wellness centers in Dubai.",
    href: "/blog/details/health-wellness-dubai-active-lifestyle",
  },
  {
    imageSrc: "/images/hills-golf.png",
    date: "Oct 8, 2025",
    title: "Dubai's Retail Therapy: Top Shopping Destinations Near Major Communities",
    description: "A guide to the best malls and boutiques located just a stone's throw away from Dubai's primary residential districts.",
    href: "/blog/details/dubai-retail-therapy-shopping-destinations",
  },
  {
    imageSrc: "/images/building.jpg",
    date: "Sep 28, 2025",
    title: "The History of Dubai's Skyline: From Desert to Global Metropolis",
    description: "A fascinating look back at the architectural evolution of Dubai and the iconic buildings that put the city on the world map.",
    href: "/blog/details/history-dubai-skyline-evolution",
  },
  {
    imageSrc: "/images/list.jpg",
    date: "Sep 18, 2025",
    title: "Pet-Friendly Living in Dubai: Best Parks and Communities for Your Furry Friends",
    description: "Moving with pets? We've found the most pet-friendly neighborhoods in Dubai, featuring dog parks, pet cafes, and vet services.",
    href: "/blog/details/pet-friendly-living-dubai-communities",
  },
  // Added 50 more blogs below
  {
    imageSrc: "/images/property1.jpeg",
    date: "Aug 15, 2025",
    title: "Al Barari: A Green Oasis in the Heart of Dubai",
    description: "Discover the lush greenery and luxury living of Al Barari, a community designed for those who value nature and tranquility.",
    href: "/blog/details/al-barari-green-oasis-dubai",
  },
  {
    imageSrc: "/images/property2.jpeg",
    date: "Aug 5, 2025",
    title: "Discovery Gardens: Affordable Living and Great Amenities",
    description: "Exploring Discovery Gardens, a popular choice for young professionals and families seeking value and convenience in Dubai.",
    href: "/blog/details/discovery-gardens-affordable-living",
  },
  {
    imageSrc: "/images/property3.jpeg",
    date: "Jul 25, 2025",
    title: "Jumeirah Golf Estates: A Mediterranean Lifestyle in the Desert",
    description: "Experience the charm of Mediterranean-inspired architecture and world-class golf at Jumeirah Golf Estates.",
    href: "/blog/details/jumeirah-golf-estates-lifestyle",
  },
  {
    imageSrc: "/images/card1.jpeg",
    date: "Jul 15, 2025",
    title: "Town Square Dubai: The Ultimate Community for Young Families",
    description: "Town Square Dubai is rapidly becoming the go-to neighborhood for young families. We explore why this community is so popular.",
    href: "/blog/details/town-square-dubai-family-community",
  },
  {
    imageSrc: "/images/modern-villa.png",
    date: "Jun 25, 2025",
    title: "The Villa: Spacious Homes and Spanish-Inspired Architecture",
    description: "Looking for space and style? The Villa offers large family homes in a peaceful, Spanish-inspired setting.",
    href: "/blog/details/the-villa-spacious-homes-dubai",
  },
  {
    imageSrc: "/images/green-community.png",
    date: "Jun 15, 2025",
    title: "Arabian Ranches III: The Next Generation of Suburban Living",
    description: "Arabian Ranches continues to evolve. We look at the latest phase of this iconic community and what it offers residents.",
    href: "/blog/details/arabian-ranches-3-suburban-living",
  },
  {
    imageSrc: "/images/card4.jpeg",
    date: "May 25, 2025",
    title: "Dubai Silicon Oasis: A Tech-Forward Hub for Residents and Businesses",
    description: "DSO is more than just a tech park. Discover the residential side of this vibrant and well-connected district.",
    href: "/blog/details/dubai-silicon-oasis-tech-hub",
  },
  {
    imageSrc: "/images/creek-sunset.png",
    date: "May 15, 2025",
    title: "Meydan Horizon: The Future of Waterfront Living near Downtown",
    description: "An exciting new development on the horizon. We explore the plans for Meydan Horizon and its potential for investors.",
    href: "/blog/details/meydan-horizon-waterfront-future",
  },
  {
    imageSrc: "/images/lagoon-lifestyle.png",
    date: "Apr 25, 2025",
    title: "Damac Lagoons: Experience the Wonders of the World in Your Backyard",
    description: "Damac Lagoons brings the charm of the world's most famous waterfront destinations to Dubai. A look at this unique community.",
    href: "/blog/details/damac-lagoons-waterfront-living",
  },
  {
    imageSrc: "/images/lagoon-lifestyle.png",
    date: "Apr 15, 2025",
    title: "Tilal Al Ghaf: Luxury Living Centered Around a Crystal Lagoon",
    description: "Discover the serenity of Tilal Al Ghaf, a development that puts nature and wellness at the heart of luxury living.",
    href: "/blog/details/tilal-al-ghaf-luxury-lagoon",
  },
  {
    imageSrc: "/images/business-bay.png",
    date: "Mar 25, 2025",
    title: "Understanding Dubai Property Taxes: A Complete Guide for 2026",
    description: "Everything you need to know about property taxes in Dubai. A must-read for any property owner or investor.",
    href: "/blog/details/dubai-property-taxes-guide-2026",
  },
  {
    imageSrc: "/images/business-bay.png",
    date: "Mar 15, 2025",
    title: "Mortgage Rates in Dubai: What to Expect in the Second Half of 2026",
    description: "Our experts analyze the mortgage market and provide predictions for the coming months to help you plan your purchase.",
    href: "/blog/details/dubai-mortgage-rates-outlook-2026",
  },
  {
    imageSrc: "/images/property3.jpeg",
    date: "Feb 25, 2025",
    title: "Off-Plan vs Ready Property: Which is the Best Investment for You?",
    description: "The age-old question. We weigh the pros and cons of both options to help you decide which path is right for your goals.",
    href: "/blog/details/off-plan-vs-ready-property-investment",
  },
  {
    imageSrc: "/images/property3.jpeg",
    date: "Feb 15, 2025",
    title: "Short-Term vs Long-Term Rentals: Maximizing Your ROI in Dubai",
    description: "Looking for rental income? We compare short-term and long-term rental strategies to help you maximize your returns.",
    href: "/blog/details/short-term-vs-long-term-rental-roi",
  },
  {
    imageSrc: "/images/analysis.webp",
    date: "Jan 25, 2025",
    title: "The Impact of Currency Fluctuations on Dubai Real Estate Investment",
    description: "How changes in currency values can affect your investment returns in Dubai. A global perspective for investors.",
    href: "/blog/details/currency-impact-dubai-real-estate",
  },
  {
    imageSrc: "/images/building.jpg",
    date: "Jan 15, 2025",
    title: "Investing in Dubai's Industrial Sector: Warehouses and Logistics Hubs",
    description: "The industrial sector is growing rapidly. We explore the opportunities for investment in warehouses and logistics in Dubai.",
    href: "/blog/details/investing-dubai-industrial-sector",
  },
  {
    imageSrc: "/images/analysis.webp",
    date: "Dec 25, 2024",
    title: "Real Estate Investment Trusts (REITs) in Dubai: A Beginner's Guide",
    description: "An alternative way to invest in real estate. We explain how REITs work and how you can get started in Dubai.",
    href: "/blog/details/dubai-reit-beginners-guide",
  },
  {
    imageSrc: "/images/property1.jpeg",
    date: "Dec 15, 2024",
    title: "How to Finance Your Property Purchase in Dubai: A Step-by-Step Guide",
    description: "Navigating the financing options available to property buyers in Dubai. From bank loans to developer payment plans.",
    href: "/blog/details/finance-property-purchase-dubai-guide",
  },
  {
    imageSrc: "/images/building.jpg",
    date: "Nov 25, 2024",
    title: "The Benefits of Holding Property in a Free Zone Company in Dubai",
    description: "Discover why many investors choose to hold their property assets through a free zone company and the advantages it offers.",
    href: "/blog/details/holding-property-free-zone-company",
  },
  {
    imageSrc: "/images/analysis.webp",
    date: "Nov 15, 2024",
    title: "Exit Strategies for Property Investors in the Dubai Market",
    description: "Planning your exit is as important as your entry. We discuss common exit strategies for property investors in Dubai.",
    href: "/blog/details/property-investment-exit-strategies-dubai",
  },
  {
    imageSrc: "/images/blog2.webp",
    date: "Oct 25, 2024",
    title: "Dubai's New Tenancy Laws 2026: What Landlords and Tenants Need to Know",
    description: "Stay up to date with the latest changes to tenancy laws in Dubai to ensure you're protected as a landlord or tenant.",
    href: "/blog/details/dubai-new-tenancy-laws-2026",
  },
  {
    imageSrc: "/images/future-metro.png",
    date: "Oct 15, 2024",
    title: "The Retire in Dubai Visa: Requirements and Benefits for 2026",
    description: "Everything you need to know about retiring in Dubai. From visa requirements to the lifestyle benefits for retirees.",
    href: "/blog/details/retire-in-dubai-visa-guide",
  },
  {
    imageSrc: "/images/c4.webp",
    date: "Sep 25, 2024",
    title: "Remote Work Visa in Dubai: How to Live and Work from the Sun",
    description: "The dream of working remotely from Dubai is now a reality. We explain how to apply for the remote work visa.",
    href: "/blog/details/remote-work-visa-dubai-guide",
  },
  {
    imageSrc: "/images/card1.jpeg",
    date: "Sep 15, 2024",
    title: "Buying Property in Dubai as a Non-Resident: A Comprehensive Guide",
    description: "An essential guide for international buyers looking to invest in Dubai's real estate market.",
    href: "/blog/details/buying-property-dubai-non-resident-guide",
  },
  {
    imageSrc: "/images/analysis.webp",
    date: "Aug 25, 2024",
    title: "Understanding Ejari: Why it's Mandatory for All Rental Contracts in Dubai",
    description: "We explain the importance of Ejari and how it protects the rights of both landlords and tenants in Dubai.",
    href: "/blog/details/understanding-ejari-mandatory-registration",
  },
  {
    imageSrc: "/images/building.jpg",
    date: "Aug 15, 2024",
    title: "The Role of RERA in Protecting Property Buyers and Tenants in Dubai",
    description: "Learn how the Real Estate Regulatory Agency (RERA) ensures a transparent and fair real estate market in Dubai.",
    href: "/blog/details/role-of-rera-dubai-real-estate",
  },
  {
    imageSrc: "/images/analysis.webp",
    date: "Jul 25, 2024",
    title: "Property Ownership Laws for GCC Nationals in Dubai",
    description: "A detailed look at the property ownership rights and regulations for GCC nationals in the Dubai real estate market.",
    href: "/blog/details/property-ownership-laws-gcc-nationals",
  },
  {
    imageSrc: "/images/analysis.webp",
    date: "Jul 15, 2024",
    title: "Succession Planning for Property Owners in Dubai: Wills and Trusts",
    description: "The importance of succession planning for property owners in Dubai and the legal tools available to protect your assets.",
    href: "/blog/details/succession-planning-property-owners-dubai",
  },
  {
    imageSrc: "/images/analysis.webp",
    date: "Jun 25, 2024",
    title: "The Legal Process of Buying Property in Dubai: From MOU to Title Deed",
    description: "A step-by-step breakdown of the legal process involved in purchasing property in Dubai.",
    href: "/blog/details/legal-process-buying-property-dubai",
  },
  {
    imageSrc: "/images/analysis.webp",
    date: "Jun 15, 2024",
    title: "Dispute Resolution in Dubai Real Estate: Navigating the Rental Dispute Center",
    description: "How to resolve real estate disputes in Dubai through the appropriate legal channels and the Rental Dispute Center.",
    href: "/blog/details/dispute-resolution-dubai-real-estate",
  },
  {
    imageSrc: "/images/blog2.webp",
    date: "May 25, 2024",
    title: "Dubai's Best Beach Clubs: Where to Relax Near Luxury Residences",
    description: "A guide to the most exclusive beach clubs in Dubai, perfect for relaxing near your luxury residence.",
    href: "/blog/details/dubai-best-beach-clubs-luxury",
  },
  {
    imageSrc: "/images/blog1.webp",
    date: "May 15, 2024",
    title: "The Ultimate Guide to Outdoor Activities in Dubai: From Desert Safaris to Parks",
    description: "Discover the wide range of outdoor activities available in Dubai, from thrilling desert adventures to peaceful parks.",
    href: "/blog/details/outdoor-activities-dubai-ultimate-guide",
  },
  {
    imageSrc: "/images/card4.jpeg",
    date: "Apr 25, 2024",
    title: "Dubai's Thriving Art Scene: Best Galleries and Museums Near Major Hubs",
    description: "Explore the cultural side of Dubai with our guide to the city's best art galleries and museums.",
    href: "/blog/details/dubai-art-scene-galleries-museums",
  },
  {
    imageSrc: "/images/c6.webp",
    date: "Apr 15, 2024",
    title: "Public Transport in Dubai: Navigating the City with Ease",
    description: "Everything you need to know about using Dubai's world-class public transport system, from the Metro to water taxis.",
    href: "/blog/details/public-transport-dubai-navigating-city",
  },
  {
    imageSrc: "/images/property1.jpeg",
    date: "Mar 25, 2024",
    title: "Living Sustainably in Dubai: Tips for Reducing Your Carbon Footprint",
    description: "Practical tips and advice for living a more eco-friendly lifestyle in the city of Dubai.",
    href: "/blog/details/living-sustainably-dubai-eco-tips",
  },
  {
    imageSrc: "/images/c2.webp",
    date: "Mar 15, 2024",
    title: "Dubai's Best Wellness Retreats and Spas for Ultimate Relaxation",
    description: "Find your inner peace at some of the best wellness retreats and luxury spas in Dubai.",
    href: "/blog/details/dubai-best-wellness-retreats-spas",
  },
  {
    imageSrc: "/images/building.jpg",
    date: "Feb 25, 2024",
    title: "Exploring Dubai's Cultural Heritage: Old Dubai and the Creek",
    description: "Take a step back in time and discover the rich history and cultural heritage of Old Dubai and the Creek.",
    href: "/blog/details/exploring-dubai-cultural-heritage-old-city",
  },
  {
    imageSrc: "/images/list.jpg",
    date: "Feb 15, 2024",
    title: "A Guide to Dubai's Best Weekend Getaways: From Mountains to Islands",
    description: "Need a break from the city? Discover the best weekend getaways within easy reach of Dubai.",
    href: "/blog/details/dubai-weekend-getaways-guide",
  },
  {
    imageSrc: "/images/property3.jpeg",
    date: "Jan 25, 2024",
    title: "Shopping for Home Decor in Dubai: Best Interior Design Boutiques",
    description: "Our curated list of the best places to shop for unique and stylish home decor in Dubai.",
    href: "/blog/details/shopping-home-decor-dubai-boutiques",
  },
  {
    imageSrc: "/images/c2.webp",
    date: "Jan 15, 2024",
    title: "Dubai's Best Fitness Studios: Where to Work Out in the City",
    description: "Stay fit and active with our guide to the top-rated fitness studios and gyms in Dubai.",
    href: "/blog/details/dubai-best-fitness-studios-gyms",
  },
  {
    imageSrc: "/images/future-metro.png",
    date: "Dec 25, 2023",
    title: "The Impact of the Dubai Metro Blue Line on Property Prices",
    description: "How the new Metro Blue Line is set to transform the city's connectivity and impact property values in key areas.",
    href: "/blog/details/dubai-metro-blue-line-impact-prices",
  },
  {
    imageSrc: "/images/building.jpg",
    date: "Dec 15, 2023",
    title: "3D Printed Houses in Dubai: The Future of Construction?",
    description: "We look at the innovative 3D printing technology that is reshaping the construction industry in Dubai.",
    href: "/blog/details/3d-printed-houses-dubai-future-construction",
  },
  {
    imageSrc: "/images/smart-city.png",
    date: "Nov 25, 2023",
    title: "Smart Cities in Dubai: How Technology is Shaping Urban Living",
    description: "Discover how smart city initiatives are enhancing the quality of life for residents in Dubai.",
    href: "/blog/details/smart-cities-dubai-technology-living",
  },
  {
    imageSrc: "/images/property1.jpeg",
    date: "Nov 15, 2023",
    title: "The Rise of Vertical Farming in Dubai's Residential Developments",
    description: "How vertical farming is bringing fresh produce closer to home in Dubai's modern residential projects.",
    href: "/blog/details/vertical-farming-dubai-residential-rise",
  },
  {
    imageSrc: "/images/analysis.webp",
    date: "Oct 25, 2023",
    title: "The Impact of COP28 on Dubai's Real Estate Sustainability Goals",
    description: "We discuss the legacy of COP28 and its influence on the sustainability agenda of Dubai's real estate sector.",
    href: "/blog/details/cop28-impact-dubai-real-estate-sustainability",
  },
  {
    imageSrc: "/images/future-metro.png",
    date: "Oct 15, 2023",
    title: "The Future of Transportation in Dubai: Hyperloop and Autonomous Taxis",
    description: "A look at the revolutionary transportation projects that promise to change how we move around Dubai in the future.",
    href: "/blog/details/future-transportation-dubai-hyperloop-autonomous",
  },
  {
    imageSrc: "/images/analysis.webp",
    date: "Sep 25, 2023",
    title: "Dubai's Vision 2030: Impact on the Real Estate and Tourism Sectors",
    description: "Understanding the long-term strategic goals of Dubai Vision 2030 and its implications for key economic sectors.",
    href: "/blog/details/dubai-vision-2030-real-estate-tourism-impact",
  },
  {
    imageSrc: "/images/business-bay.png",
    date: "Sep 15, 2023",
    title: "The Evolution of Commercial Office Spaces in Post-Pandemic Dubai",
    description: "How the design and function of office spaces in Dubai are evolving to meet the needs of the modern workforce.",
    href: "/blog/details/evolution-commercial-office-spaces-dubai",
  },
  {
    imageSrc: "/images/property3.jpeg",
    date: "Aug 25, 2023",
    title: "Renewable Energy in Dubai: Solar Panels and Beyond for Homeowners",
    description: "Discover the options available for homeowners in Dubai to integrate renewable energy into their properties.",
    href: "/blog/details/renewable-energy-dubai-solar-homeowners",
  },
  {
    imageSrc: "/images/analysis.webp",
    date: "Aug 15, 2023",
    title: "Blockchain in Dubai Real Estate: Simplifying Transactions and Ownership",
    description: "How blockchain technology is being used to create a more secure and efficient real estate market in Dubai.",
    href: "/blog/details/blockchain-dubai-real-estate-transactions",
  },
  {
    imageSrc: "/images/property3.jpeg",
    date: "Jan 15, 2026",
    title: "Dubai Real Estate Outlook 2026: Sustainable Growth & New Opportunities",
    description: "As we step into 2026, Dubai's real estate market continues to evolve. focused on sustainable developments and smart city initiatives offering new avenues for investors.",
    href: "/blog/details/dubai-real-estate-outlook-2026",
  },
  {
    imageSrc: "/images/card4.jpeg",
    date: "Jan 10, 2026",
    title: "The Rise of Branded Residences in Dubai: Ultimate Luxury",
    description: "Explore why branded residences are becoming the preferred choice for ultra-high-net-worth individuals, offering unmatched amenities and lifestyle services.",
    href: "/blog/details/branded-residences-dubai-rise",
  },
  {
    imageSrc: "/images/future-metro.png",
    date: "Jan 5, 2026",
    title: "Investing in Dubai South: Impact of Airport Expansion",
    description: "With the expansion of Al Maktoum International Airport, Dubai South is emerging as a prime investment hub. Discover the potential of this rapidly developing district.",
    href: "/blog/details/investing-dubai-south-airport-expansion",
  },
  {
    imageSrc: "/images/dubai-marina.webp",
    date: "Dec 28, 2025",
    title: "Year-End Market Wrap: Dubai's Record-Breaking Transactions",
    description: "A look back at 2025's phenomenal performance in the real estate sector, highlighting record transaction volumes and key market drivers.",
    href: "/blog/details/year-end-market-wrap-2025",
  },
  {
    imageSrc: "/images/c3.webp",
    date: "Dec 20, 2025",
    title: "Holiday Homes in Dubai: A Booming Investment Sector",
    description: "The short-term rental market is thriving. Learn how converting your property into a holiday home can yield higher returns during peak tourist seasons.",
    href: "/blog/details/holiday-homes-dubai-investment",
  },
  {
    imageSrc: "/images/c1.webp",
    date: "Dec 15, 2025",
    title: "Top Communities for High ROI in 2026",
    description: "Planning your portfolio for the new year? We analyze top communities projected to offer the highest returns on investment in 2026.",
    href: "/blog/details/top-communities-high-roi-2026",
  },
  {
    imageSrc: "/images/palm-aerial.png",
    date: "Nov 28, 2025",
    title: "Dubai Marina: The Ultimate Waterfront Living Experience",
    description: "Explore Dubai Marina, one of the world's largest man-made marinas. Discover luxury apartments, stunning waterfront views, and a vibrant lifestyle in this iconic Dubai neighborhood.",
    href: "/blog/details/dubai-marina-waterfront-living",
  },
  {
    imageSrc: "/images/palm-aerial.png",
    date: "Nov 25, 2025",
    title: "Palm Jumeirah: Living on Dubai's Iconic Island",
    description: "Experience the pinnacle of luxury living on Palm Jumeirah. From exclusive villas to world-class resorts, discover what makes this man-made island one of Dubai's most prestigious addresses.",
    href: "/blog/details/palm-jumeirah-iconic-island",
  },
  {
    imageSrc: "/images/creek-sunset.png",
    date: "Nov 22, 2025",
    title: "Dubai Creek Harbour: The Future of Urban Living",
    description: "Discover Dubai Creek Harbour, a visionary development that combines sustainable living with luxury amenities. Explore this master-planned community and its world-class infrastructure.",
    href: "/blog/details/dubai-creek-harbour-urban-living",
  },
  {
    imageSrc: "/images/luxury-penthouse.png",
    date: "Nov 20, 2025",
    title: "Guide to Interior Design Trends in Dubai Luxury Residences",
    description: "Discover the latest interior design trends shaping Dubai's luxury residences. From traditional Arabic influences to modern minimalist aesthetics, explore how to create stunning spaces that reflect the city's opulent lifestyle.",
    href: "/blog/details/interior-design-trends-dubai-luxury-residences",
  },
  {
    imageSrc: "/images/hills-golf.png",
    date: "Nov 18, 2025",
    title: "Dubai Hills Estate: Family-Friendly Luxury Living",
    description: "Find your perfect family home in Dubai Hills Estate. This master-planned community offers world-class amenities, top-rated schools, and stunning golf course views in the heart of Dubai.",
    href: "/blog/details/dubai-hills-estate-family-living",
  },
  {
    imageSrc: "/images/modern-villa.png",
    date: "Nov 15, 2025",
    title: "Dubai's Hidden Gems: Guide to Exclusive Neighborhoods",
    description: "Explore Dubai's most exclusive neighborhoods and discover hidden gems that offer unparalleled luxury living. From waterfront communities to golf course estates, find your perfect home in the city of dreams.",
    href: "/blog/details/dubai-hidden-gems-exclusive-neighborhoods",
  },
  {
    imageSrc: "/images/palm-aerial.png",
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
    imageSrc: "/images/business-bay.png",
    date: "Nov 5, 2025",
    title: "Business Bay: The Commercial Hub of Dubai",
    description: "Explore Business Bay, Dubai's premier business district. From luxury apartments to commercial spaces, discover why this area is attracting investors and residents from around the world.",
    href: "/blog/details/business-bay-commercial-hub",
  },
  {
    imageSrc: "/images/creek-sunset.png",
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
    imageSrc: "/images/luxury-penthouse.png",
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
    imageSrc: "/images/modern-villa.png",
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
    imageSrc: "/images/luxury-penthouse.png",
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
    <section className="pt-8 sm:pt-10 md:pt-12 pb-12 sm:pb-16 md:pb-24 bg-white">
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
