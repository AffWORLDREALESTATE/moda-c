import React from "react";
import Image from "next/image";
import { useLanguage } from "@/src/contexts/LanguageContext";
import { useParams } from "next/navigation";

// Import individual blog components
import DubaiHiddenGems from "./dubai-hidden-gems";
import DubaiRealEstateInvestment from "./dubai-real-estate-investment";
import InteriorDesignTrends from "./interior-design-trends";
import DubaiMarinaWaterfrontLiving from "./dubai-marina-waterfront-living";
import PalmJumeirahIconicIsland from "./palm-jumeirah-iconic-island";
import DubaiCreekHarbourUrbanLiving from "./dubai-creek-harbour-urban-living";
import DubaiHillsEstateFamilyLiving from "./dubai-hills-estate-family-living";
import DubaiIslandsNewEraLiving from "./dubai-islands-new-era-living";
import DowntownDubaiHeartCity from "./downtown-dubai-heart-city";
import BuyingPropertyDubaiInvestorsGuide from "./buying-property-dubai-investors-guide";
import BusinessBayCommercialHub from "./business-bay-commercial-hub";
import JbrBeachfrontLuxuryLiving from "./jbr-beachfront-luxury-living";
import DubaiMarketTrends2025 from "./dubai-market-trends-2025";
import OffPlanPropertiesDubai from "./off-plan-properties-dubai";
import DubaiRentalYieldsInvestment from "./dubai-rental-yields-investment";
import LuxuryVillasDubaiGuide from "./luxury-villas-dubai-guide";
import DubaiPropertyTaxesFees from "./dubai-property-taxes-fees";
import SustainableLivingDubai from "./sustainable-living-dubai";
import DubaiInvestmentExpatsGuide from "./dubai-investment-expats-guide";
import DubaiExpensivePropertiesShowcase from "./dubai-expensive-properties-showcase";
import DubaiMarketForecast2026 from "./dubai-market-forecast-2026";
import BestAreasFamiliesDubai from "./best-areas-families-dubai";
import DubaiRealEstateROI from "./dubai-real-estate-roi";
import DubaiMarketAnalysisQ42025 from "./dubai-market-analysis-q4-2025";
import DubaiPenthousesLuxuryLiving from "./dubai-penthouses-luxury-living";
import DubaiPropertyDevelopersGuide from "./dubai-property-developers-guide";
import DubaiMarinaApartmentsGuide from "./dubai-marina-apartments-guide";
import PalmJumeirahVillasExclusive from "./palm-jumeirah-villas-exclusive";
import DubaiCreekHarbourMasterplan from "./dubai-creek-harbour-masterplan";
import DubaiHillsGolfLiving from "./dubai-hills-golf-living";
import DubaiPropertyViewingTips from "./dubai-property-viewing-tips";
import ChoosingDubaiRealEstateAgent from "./choosing-dubai-real-estate-agent";
import DubaiPropertyFinancingMortgage from "./dubai-property-financing-mortgage";
import DubaiFreeholdLeaseholdOwnership from "./dubai-freehold-leasehold-ownership";
import DubaiPropertyMaintenanceTips from "./dubai-property-maintenance-tips";
import DubaiPropertyInsuranceGuide from "./dubai-property-insurance-guide";
import DubaiPropertyResaleMaximize from "./dubai-property-resale-maximize";

// Mock data - in a real app, this would come from your CMS or database
const blogPosts = {
  "interior-design-trends-dubai-luxury-residences": {
    title: "Guide to Interior Design Trends in Dubai Luxury Residences",
    subtitle: "Discover the latest interior design trends shaping Dubai's luxury residences and learn how to create stunning spaces that reflect the city's opulent lifestyle.",
    content: `
      <h2>Introduction</h2>
      <p>You've recently settled into your new Dubai apartment. While the space is lovely, something feels incomplete—you can't quite identify what's missing. We're here to assist. This guide explores the finest sources of interior design inspiration throughout Dubai, covering everything from furniture showrooms to design publications.</p>
      <p>Ready to begin? Start exploring and let your creativity flow!</p>

      <h2>What to Consider When Planning Interior Decoration in Dubai</h2>
      <p>Before diving into interior decoration, several factors deserve attention. Dubai is a melting pot of cultures and influences, which means your design should honor this diversity while maintaining your personal aesthetic.</p>
      <p>Climate considerations are crucial. Given Dubai's hot, sunny weather, your home should maximize natural light and airflow.</p>
      <p>Finally, factor in your budget and explore the materials and finishes available locally. With some research, you'll discover the ideal balance between style and functionality for your space.</p>

      <h2>Traditional vs Modern Interior Designs in Dubai</h2>
      <p>Dubai embraces both traditional and contemporary design philosophies. Inspiration abounds in the city's hotels, restaurants, and residential spaces.</p>
      <p>Traditional design honors the region's cultural legacy through elaborate ceilings and detailed woodwork. Rich warm tones and gold accents create an opulent atmosphere perfect for luxury establishments.</p>
      <p>Contemporary design emphasizes simplicity with geometric forms. Cool color palettes and metallic surfaces make it ideal for modern dining venues and homes.</p>
      <p>Regardless of your preference, collaborate with a skilled interior designer to realize your vision.</p>

      <h2>Best Materials and Furnishings for Interior Decoration in Dubai</h2>
      <p>When decorating in Dubai, remember that premium materials and furnishings are readily available. The selection is vast, ensuring you'll find options matching both your taste and financial constraints.</p>
      <p>Dubai's reputation for luxury hospitality means access to high-end furniture and finishes that elevate any space. Budget-conscious decorators will also find numerous affordable alternatives.</p>
      <p>Whatever your preferences or financial situation, Dubai offers solutions. Let inspiration guide your decorating journey!</p>

      <h2>The Importance of Lighting for Interior Design in Dubai</h2>
      <p>Lighting transforms your home's ambiance. It establishes mood and creates distinctive atmospheres. When selecting fixtures in Dubai, incorporate general, task, and accent lighting.</p>
      <p>General lighting provides overall room illumination. Task lighting serves specific areas like kitchen workspaces or reading corners, while accent lights draw attention to artwork or architectural details.</p>
      <p>Select fixtures that complement your room's style and overall design theme. Include dimmer switches to adjust brightness as needed. Thoughtful lighting makes your home distinctive and creates an environment you'll cherish!</p>

      <h2>Adding the Right Wall Art, Carpets and Accessories to Your Home</h2>
      <p>Wall art, rugs, and accessories are fundamental to establishing a personalized aesthetic. Understanding what works in your space is key to selecting the right pieces.</p>
      <p>Choose artwork that resonates with your personality and style preferences. Whether you favor contemporary, modern, or traditional pieces, select items that evoke emotion. Canvas prints offer an accessible starting point!</p>
      <p>Rugs introduce texture and character. If purchasing a new rug isn't feasible, explore online marketplaces like Etsy for unique vintage finds. Don't hesitate to experiment with vibrant colors.</p>
      <p>For decorative accessories, practice restraint—overcrowding creates visual clutter. Select items that harmonize or share design elements. Natural materials like wood or stone create rustic warmth, while bold colors add energy to your space!</p>

      <h2>Get Professional Help with Interior Decoration in Dubai</h2>
      <p>To ensure your Dubai interior project achieves professional results, consider engaging an interior designer or decorator. They bring expertise and can help you stay within budget while meeting all your needs.</p>
      <p>Before committing to professional services, visit showrooms and explore online resources. Style options range from traditional Arabesque motifs to contemporary luxury aesthetics. If hiring a professional exceeds your budget, gather inspiration from examples to guide your vision.</p>
      <p>Note that professional costs in Dubai can rise when incorporating custom furniture, window treatments, and premium materials like hardwood floors and marble surfaces. However, if detailed planning isn't your strength, working with a designer may be worthwhile. Consider this: if time and convenience matter, professional assistance can save both immediately and protect your investment long-term!</p>

      <h2>Conclusion</h2>
      <p>Dubai is an excellent starting point for interior design inspiration. The city hosts world-class designers and decorators, offering diverse style options.</p>
      <p>Whether you prefer traditional Arabic aesthetics, modern sophistication, or a blend of both, Dubai has something for everyone. What's stopping you? Begin planning your interior design project today!</p>

      <p><strong>Ready to transform your space?</strong> Contact Modac Real Estate today to explore our portfolio of luxury properties and discover how our expert team can help you create the perfect home that reflects your unique style and Dubai's sophisticated lifestyle.</p>
    `,
    author: {
      name: "Modac Real Estate",
      bio: "Premier real estate specialists assisting investors and property owners navigate Dubai's flourishing property marketplace.",
      avatar: "/images/logo.png",
    },
    publishedAt: "January 15, 2025",
    readTime: "8 min read",
    category: "Interior Design",
    tags: ["Dubai", "Interior Design", "Luxury Living", "Home Decor"],
    featuredImage: "/images/property1.jpeg",
  },
  "dubai-hidden-gems-exclusive-neighborhoods": {
    title: "Dubai's Hidden Gems: Guide to Exclusive Neighborhoods",
    subtitle: "Explore Dubai's most exclusive neighborhoods and discover hidden gems that offer unparalleled luxury living in the city of dreams.",
    content: `
      <h2>A City of Extravagance</h2>
      <p>Dubai, celebrated for its breathtaking skyline, continuously pushes architectural boundaries. From landmarks like the Burj Khalifa to palm-shaped developments, the city's property scene reflects limitless creativity and ambition. Modac Real Estate carefully selects properties that match Dubai's vision of luxury, providing clients with residences that elevate high-end living.</p>

      <h2>Exclusive Developments</h2>
      <p>Modac Real Estate focuses on presenting exclusive developments tailored to our clients' varied preferences. Our collection includes waterfront homes with sweeping views, modern city penthouses, and peaceful villas in private enclaves—all designed to meet exceptional luxury standards.</p>

      <h2>Innovative Design and Architecture</h2>
      <p>Dubai's property market is famous for innovative design and architectural excellence. Modac Real Estate partners with leading architects and developers to showcase properties that merge advanced design with practical living. From tech-integrated smart homes to sustainable residences, our portfolio addresses the changing needs of today's homeowners.</p>

      <h2>Expert Guidance and Consultation</h2>
      <p>The Dubai property market's fast-paced nature can be overwhelming. Modac Real Estate sets itself apart through expert advice and customized consultation. Our experienced team focuses on understanding your specific needs, ensuring each client receives personalized solutions aligned with their lifestyle goals.</p>

      <h2>Transparency and Integrity</h2>
      <p>Modac Real Estate prioritizes transparency and ethical conduct in every transaction. We recognize that trust is fundamental in real estate dealings. Our dedication to ethical practices gives clients the confidence to make informed decisions, knowing they're in reliable hands.</p>

      <h2>Investment Opportunities</h2>
      <p>Dubai's property market offers both luxurious living and smart investment potential. Modac Real Estate monitors market trends and emerging opportunities, enabling clients to make strategic investments that deliver financial gains and lifestyle improvements.</p>

      <h2>Hidden Neighborhood Gems</h2>
      <p>Beyond popular areas, Dubai features several hidden neighborhood treasures offering distinctive living experiences. These exclusive communities provide privacy, premium amenities, and access to the city's most prestigious facilities.</p>

      <h3>Al Barari</h3>
      <p>Located in central Dubai, Al Barari is a secluded sanctuary blending luxury living with natural surroundings. This private community offers villas set among verdant gardens, private pools, and top-tier amenities. It's ideal for those wanting peace while remaining close to urban conveniences.</p>

      <h3>Emirates Hills</h3>
      <p>Often called Dubai's Beverly Hills, Emirates Hills is a gated community featuring luxury villas with spectacular golf course vistas. This distinguished area provides privacy, security, and access to the Emirates Golf Club, making it perfect for selective residents.</p>

      <h3>Dubai Hills Estate</h3>
      <p>This master-planned development combines city accessibility with suburban calm. Featuring golf course views, premium amenities, and proximity to Downtown Dubai, it's emerging as one of the city's most desirable locations.</p>

      <h2>Luxury Amenities and Services</h2>
      <p>Dubai's exclusive neighborhoods are known for exceptional amenities and services. From private beaches and marinas to championship golf courses and luxury spas, residents enjoy facilities matching the world's finest resorts.</p>

      <h2>Future Developments</h2>
      <p>Dubai keeps evolving with ambitious new projects that promise to transform luxury living. From sustainable communities to smart city initiatives, the future of Dubai's property market appears more promising than ever.</p>

      <h2>Conclusion</h2>
      <p>In Dubai's real estate landscape, Modac Real Estate represents trust, innovation, and luxury. Our commitment to excellence, combined with a portfolio of exclusive developments, ensures every client begins a journey toward exceptional living. Whether you're searching for a dream home or a strategic investment, Modac Real Estate is your reliable partner in achieving your goals in this city of dreams.</p>

      <p><strong>Ready to discover your perfect home?</strong> Contact Modac Real Estate today to explore our exclusive portfolio of luxury properties and let our expert team guide you to your dream residence in Dubai's most prestigious neighborhoods.</p>
    `,
    author: {
      name: "Modac Real Estate",
      bio: "Premier real estate specialists assisting investors and property owners navigate Dubai's flourishing property marketplace.",
      avatar: "/images/logo.png",
    },
    publishedAt: "January 10, 2025",
    readTime: "7 min read",
    category: "Neighborhoods",
    tags: ["Dubai", "Neighborhoods", "Luxury Living", "Real Estate"],
    featuredImage: "/images/property2.jpeg",
  },
  "dubai-premier-real-estate-investment-guide": {
    title: "Your Guide to Dubai's Premier Real Estate Investment",
    subtitle: "Discover the top 10 areas for property investment in Dubai and explore lucrative opportunities in the world's most dynamic real estate market.",
  content: `
      <h2>Benefits of Investing in Dubai Real Estate</h2>
      <p>The United Arab Emirates (UAE) stands out as a preferred destination for international real estate investors. Dubai, the largest and most recognized city in the Persian Gulf, provides foreign investors with diverse neighborhoods offering properties matching various aspirations.</p>
      <p>Dubai presents numerous benefits for international investors, making this "city of a thousand and one nights" an appealing choice for property investment.</p>
      <p>As a premier real estate destination, Dubai is celebrated for its luxurious lifestyle and exceptional infrastructure. A thriving economy and stable political climate attract global investors to Dubai's profitable property sector.</p>
      <p>However, selecting the right investment can be difficult given the abundance of choices. This article offers valuable guidance for those considering Dubai's dynamic property market, examining the top 10 investment areas.</p>
      <p>The following content will assist you in making well-informed decisions and optimizing returns in Dubai's growing property market, regardless of your experience level.</p>

      <h2>Top 10 Areas for Property Investment in Dubai</h2>

      <h3>1. Downtown Dubai</h3>
      <p>Downtown Dubai stands out among Dubai's top property investment areas, combining luxury living with profitable opportunities. The district's appeal stems from its prime location, impressive architecture, and strong infrastructure.</p>
      <p>With a wide selection of residential, commercial, and mixed-use properties, investors can benefit from Downtown Dubai's reliable rental returns, significant value appreciation, and consistent demand from wealthy tenants and selective buyers.</p>

      <h3>2. Dubai Marina</h3>
      <p>Dubai Marina's spectacular waterfront setting makes it a highly desirable property investment location. The area presents a combination of residential high-rises, villas, and commercial spaces.</p>
      <p>Investors can anticipate strong rental demand thanks to the marina lifestyle, premium amenities, and lively entertainment scene. Its proximity to popular attractions and business centers further enhances its investment appeal.</p>

      <h3>3. Business Bay</h3>
      <p>Business Bay is a vibrant commercial and residential zone adjacent to Downtown Dubai. The area features towering office buildings, upscale apartments, and hotels. Its prime location and excellent transport links make it an excellent option for both commercial and residential property investments.</p>

      <h3>4. Meydan City</h3>
      <p>Meydan City is a growing development centered on building a sustainable, environmentally conscious community. The area combines residential, commercial, and recreational properties, with a focus on green spaces and contemporary infrastructure.</p>
      <p>Investors can take advantage of the area's expansion potential and competitive property prices to achieve long-term rental income and capital appreciation.</p>

      <h3>5. Jumeirah Village Circle</h3>
      <p>Looking for a peaceful residential area? Jumeirah Village Circle is an excellent choice. Established in 2005, this community is known for its extensive green spaces and mid-rise buildings, creating attractive landscapes throughout.</p>
      <p>The community offers various unit types, providing multiple options to find your ideal home. Additionally, all essential amenities for comfortable living are available within the community.</p>

      <h3>6. Palm Jumeirah</h3>
      <p>Whether you're looking for a villa or apartment, Palm Jumeirah deserves consideration. This unique man-made island provides a distinctive living environment with comprehensive services, from daily necessities to leisure activities.</p>
      <p>You'll discover residential towers, villa communities, and mid-rise buildings featuring contemporary designs and modern amenities. Plus, you'll have direct access to numerous beaches and resorts for relaxation whenever desired.</p>
      <p>Furthermore, if you're seeking an opulent family home with ample space, Palm Jumeirah delivers unmatched luxury living.</p>

      <h3>7. Jumeirah Lake Towers</h3>
      <p>For those who enjoy high-rise living, Jumeirah Lake Towers (JLT) is an ideal match. This verdant community is famous for its impressive towers positioned around several beautiful artificial lakes.</p>
      <p>The area is organized into 26 clusters, each containing three impressive towers, making it easy to find your desired unit. You'll also appreciate the scenic green views, as the community includes JLT Park.</p>
      <p>Selecting JLT means enjoying waterfront living, a walkable community, convenient access to services, and importantly, reasonable property prices. This exceptional community is a solid choice.</p>
      <p><strong>Location:</strong> Situated opposite Dubai Marina, on Sheikh Zayed Road, Dubai.</p>

      <h3>8. Damac Hills 2</h3>
      <p>Interested in escaping city noise for a clean, peaceful environment? Damac Hills 2 offers an impressive and distinctive residential setting.</p>
      <p>Positioned away from the city center on Dubailand's southern side, it ensures a serene lifestyle. The entire community is designed with environmental consciousness, featuring extensive green areas and water features for a natural atmosphere.</p>
      <p>You can select from upscale apartments, villas, or townhouses, all featuring quality finishes and contemporary interiors.</p>
      <p><strong>Location:</strong> Located off Jebel Ali – Lehbab Road, Dubai.</p>

      <h3>9. Dubai Hills Estate</h3>
      <p>Imagine waking up to beautiful golf course scenery. Dubai Hills Estate is a premium residential area offering an elevated living experience. Properties are positioned along expansive golf courses, providing uninterrupted green vistas.</p>
      <p>Dubai Hills Estate is conveniently located near Downtown Dubai, offering easy access to city center amenities. You'll also find various services within the community to ensure your comfort.</p>
      <p>For recreation, this area is home to Dubai Hills Golf Club, one of the city's premier golf courses where you can enjoy games with friends.</p>

      <h3>10. Dubai Hills Estate (Continued)</h3>
      <p>This master-planned community continues drawing investors and residents with its ideal combination of luxury living and natural beauty. The estate includes premium amenities such as shopping centers, schools, and healthcare facilities, making it perfect for families and investors seeking lasting value.</p>

      <h2>Investment Strategies for Dubai Real Estate</h2>
      <p>When investing in Dubai's property market, it's important to evaluate different strategies that can optimize returns. From off-plan developments to completed properties, each investment method presents distinct benefits and factors to consider.</p>

      <h2>Market Trends and Future Outlook</h2>
      <p>Dubai's property market demonstrates robust growth prospects, supported by government programs, infrastructure expansion, and rising international investment. Grasping market patterns and future forecasts is vital for making sound investment choices.</p>

      <h2>Legal Framework and Regulations</h2>
      <p>Dubai's investor-oriented legal system, including freehold ownership rights for international buyers in specific zones, positions it as an appealing destination for global investors. Comprehending property ownership legalities is crucial for successful investing.</p>

    <h2>Conclusion</h2>
      <p>Dubai's property market provides exceptional opportunities for investors pursuing both value growth and rental earnings. With outstanding infrastructure, strategic positioning, and investor-friendly regulations, Dubai continues to draw worldwide investment.</p>
      <p>Whether you're interested in luxury residential properties, commercial investments, or off-plan projects, Dubai's varied market caters to all investor types. Success depends on comprehensive research, market insight, and collaboration with experienced property professionals.</p>

      <p><strong>Ready to invest in Dubai's premier real estate?</strong> Contact Modac Real Estate today to explore our exclusive investment opportunities and let our expert team guide you through the process of building your property portfolio in the world's most dynamic real estate market.</p>
  `,
  author: {
          name: "Modac Real Estate",
    bio: "Premier real estate specialists assisting investors and property owners navigate Dubai's flourishing property marketplace.",
      avatar: "/images/logo.png",
    },
    publishedAt: "January 5, 2025",
    readTime: "12 min read",
    category: "Investment",
    tags: ["Dubai", "Real Estate Investment", "Property", "Investment Guide"],
    featuredImage: "/images/property3.jpeg",
  },
};

// Localized titles/subtitles by language code
const localizedMeta: Record<string, Record<string, { title: string; subtitle: string }>> = {
  ar: {
    "interior-design-trends-dubai-luxury-residences": {
      title: "دليل اتجاهات التصميم الداخلي في مساكن دبي الفاخرة",
      subtitle: "اكتشف أحدث اتجاهات التصميم الداخلي التي تشكل مساكن دبي الفاخرة وتعرف على كيفية إنشاء مساحات مذهلة تعكس أسلوب الحياة الفاخر للمدينة.",
    },
    "dubai-hidden-gems-exclusive-neighborhoods": {
      title: "كنوز دبي الخفية: دليل الأحياء الحصرية",
      subtitle: "استكشف أكثر أحياء دبي حصرية واكتشف الكنوز الخفية التي تقدم أسلوب حياة فاخرًا لا مثيل له في مدينة الأحلام.",
    },
    "dubai-premier-real-estate-investment-guide": {
      title: "دليلك للاستثمار العقاري المتميز في دبي",
      subtitle: "اكتشف أفضل 10 مناطق للاستثمار العقاري في دبي واستكشف الفرص المربحة في أكثر أسواق العقارات ديناميكية في العالم.",
    },
  },
  fr: {
    "interior-design-trends-dubai-luxury-residences": {
      title: "Guide des tendances de design d'intérieur à Dubaï",
      subtitle: "Découvrez les dernières tendances qui façonnent les résidences de luxe à Dubaï.",
    },
    "dubai-hidden-gems-exclusive-neighborhoods": {
      title: "Les perles cachées de Dubaï : quartiers exclusifs",
      subtitle: "Explorez les quartiers les plus exclusifs et leurs atouts uniques.",
    },
    "dubai-premier-real-estate-investment-guide": {
      title: "Guide de l'investissement immobilier à Dubaï",
      subtitle: "Top 10 des zones pour investir sur le marché immobilier dynamique de Dubaï.",
    },
  },
  es: {
    "interior-design-trends-dubai-luxury-residences": {
      title: "Guía de tendencias de diseño interior en Dubái",
      subtitle: "Descubre las últimas tendencias que dan forma a las residencias de lujo en Dubái.",
    },
    "dubai-hidden-gems-exclusive-neighborhoods": {
      title: "Tesoros ocultos de Dubái: barrios exclusivos",
      subtitle: "Explora los barrios más exclusivos y sus experiencias únicas de vida.",
    },
    "dubai-premier-real-estate-investment-guide": {
      title: "Guía de inversión inmobiliaria en Dubái",
      subtitle: "Las 10 mejores zonas para invertir en el mercado inmobiliario de Dubái.",
    },
  },
  de: {
    "interior-design-trends-dubai-luxury-residences": {
      title: "Leitfaden zu Interior-Design-Trends in Dubai",
      subtitle: "Entdecken Sie die neuesten Trends in Dubais Luxusresidenzen.",
    },
    "dubai-hidden-gems-exclusive-neighborhoods": {
      title: "Dubais verborgene Juwelen: exklusive Viertel",
      subtitle: "Erkunden Sie die exklusivsten Viertel und ihre besonderen Vorzüge.",
    },
    "dubai-premier-real-estate-investment-guide": {
      title: "Leitfaden für Immobilieninvestitionen in Dubai",
      subtitle: "Top 10 Gebiete für Investitionen im dynamischen Markt Dubais.",
    },
  },
  it: {
    "interior-design-trends-dubai-luxury-residences": {
      title: "Guida alle tendenze dell'interior design a Dubai",
      subtitle: "Scopri le ultime tendenze che plasmano le residenze di lusso di Dubai.",
    },
    "dubai-hidden-gems-exclusive-neighborhoods": {
      title: "Gioielli nascosti di Dubai: quartieri esclusivi",
      subtitle: "Esplora i quartieri più esclusivi e le loro esperienze uniche.",
    },
    "dubai-premier-real-estate-investment-guide": {
      title: "Guida agli investimenti immobiliari a Dubai",
      subtitle: "Le 10 migliori aree per investire nel mercato immobiliare di Dubai.",
    },
  },
  pt: {
    "interior-design-trends-dubai-luxury-residences": {
      title: "Guia de tendências de design de interiores em Dubai",
      subtitle: "Descubra as últimas tendências nas residências de luxo de Dubai.",
    },
    "dubai-hidden-gems-exclusive-neighborhoods": {
      title: "Joias escondidas de Dubai: bairros exclusivos",
      subtitle: "Explore os bairros mais exclusivos e suas experiências únicas.",
    },
    "dubai-premier-real-estate-investment-guide": {
      title: "Guia de investimento imobiliário em Dubai",
      subtitle: "Top 10 áreas para investir no dinâmico mercado imobiliário de Dubai.",
    },
  },
  ru: {
    "interior-design-trends-dubai-luxury-residences": {
      title: "Гид по трендам интерьерного дизайна в Дубае",
      subtitle: "Узнайте о последних трендах в роскошных резиденциях Дубая.",
    },
    "dubai-hidden-gems-exclusive-neighborhoods": {
      title: "Сокровища Дубая: эксклюзивные районы",
      subtitle: "Исследуйте самые эксклюзивные районы и их уникальный образ жизни.",
    },
    "dubai-premier-real-estate-investment-guide": {
      title: "Руководство по инвестициям в недвижимость Дубая",
      subtitle: "Топ‑10 районов для инвестиций на динамичном рынке Дубая.",
    },
  },
  zh: {
    "interior-design-trends-dubai-luxury-residences": {
      title: "迪拜豪华住宅室内设计趋势指南",
      subtitle: "了解塑造迪拜豪宅的最新室内设计趋势。",
    },
    "dubai-hidden-gems-exclusive-neighborhoods": {
      title: "迪拜的隐藏宝地：独家社区指南",
      subtitle: "探索迪拜最独特的社区及其非凡生活方式。",
    },
    "dubai-premier-real-estate-investment-guide": {
      title: "迪拜顶级房地产投资指南",
      subtitle: "在迪拜充满活力的房地产市场投资的十大热门区域。",
    },
  },
};

// Component mapping - maps slug to component
const blogComponentMap: Record<string, React.ComponentType> = {
  "dubai-hidden-gems-exclusive-neighborhoods": DubaiHiddenGems,
  "dubai-premier-real-estate-investment-guide": DubaiRealEstateInvestment,
  "interior-design-trends-dubai-luxury-residences": InteriorDesignTrends,
  "dubai-marina-waterfront-living": DubaiMarinaWaterfrontLiving,
  "palm-jumeirah-iconic-island": PalmJumeirahIconicIsland,
  "dubai-creek-harbour-urban-living": DubaiCreekHarbourUrbanLiving,
  "dubai-hills-estate-family-living": DubaiHillsEstateFamilyLiving,
  "dubai-islands-new-era-living": DubaiIslandsNewEraLiving,
  "downtown-dubai-heart-city": DowntownDubaiHeartCity,
  "buying-property-dubai-investors-guide": BuyingPropertyDubaiInvestorsGuide,
  "business-bay-commercial-hub": BusinessBayCommercialHub,
  "jbr-beachfront-luxury-living": JbrBeachfrontLuxuryLiving,
  "dubai-market-trends-2025": DubaiMarketTrends2025,
  "off-plan-properties-dubai": OffPlanPropertiesDubai,
  "dubai-rental-yields-investment": DubaiRentalYieldsInvestment,
  "luxury-villas-dubai-guide": LuxuryVillasDubaiGuide,
  "dubai-property-taxes-fees": DubaiPropertyTaxesFees,
  "sustainable-living-dubai": SustainableLivingDubai,
  "dubai-investment-expats-guide": DubaiInvestmentExpatsGuide,
  "dubai-expensive-properties-showcase": DubaiExpensivePropertiesShowcase,
  "dubai-market-forecast-2026": DubaiMarketForecast2026,
  "best-areas-families-dubai": BestAreasFamiliesDubai,
  "dubai-real-estate-roi": DubaiRealEstateROI,
  "dubai-market-analysis-q4-2025": DubaiMarketAnalysisQ42025,
  "dubai-penthouses-luxury-living": DubaiPenthousesLuxuryLiving,
  "dubai-property-developers-guide": DubaiPropertyDevelopersGuide,
  "dubai-marina-apartments-guide": DubaiMarinaApartmentsGuide,
  "palm-jumeirah-villas-exclusive": PalmJumeirahVillasExclusive,
  "dubai-creek-harbour-masterplan": DubaiCreekHarbourMasterplan,
  "dubai-hills-golf-living": DubaiHillsGolfLiving,
  "dubai-property-viewing-tips": DubaiPropertyViewingTips,
  "choosing-dubai-real-estate-agent": ChoosingDubaiRealEstateAgent,
  "dubai-property-financing-mortgage": DubaiPropertyFinancingMortgage,
  "dubai-freehold-leasehold-ownership": DubaiFreeholdLeaseholdOwnership,
  "dubai-property-maintenance-tips": DubaiPropertyMaintenanceTips,
  "dubai-property-insurance-guide": DubaiPropertyInsuranceGuide,
  "dubai-property-resale-maximize": DubaiPropertyResaleMaximize,
};

export default function DetailsBlog() {
  const { t } = useLanguage();
  const params = useParams();
  const slug = params?.slug as string;
  
  // Check if we have a dedicated component for this slug
  const BlogComponent = blogComponentMap[slug];
  
  // If we have a dedicated component, use it
  if (BlogComponent) {
    return <BlogComponent />;
  }
  
  // Otherwise, fall back to the existing blogPosts data or generate content
  const blogPost = blogPosts[slug as keyof typeof blogPosts];
  const lang = (typeof window !== 'undefined' && localStorage.getItem('selectedLanguage')) || 'en';
  const metaOverride = localizedMeta[lang]?.[slug];
  
  // Fallback: generate a basic article if the slug doesn't exist in our dictionary
  const generatedFromSlug = (() => {
    if (blogPost) return null;
    const niceTitleRaw = slug
      ?.replace(/-/g, " ")
      ?.replace(/\b\w/g, (c) => c.toUpperCase()) || "Blog";
    const niceTitle = niceTitleRaw.trim();
    const lower = slug.toLowerCase();
    // Pick a relevant hero image based on keywords we already ship in /public/images
    const featuredImage =
      lower.includes("marina")
        ? "/images/dubai-marina.webp"
        : lower.includes("palm")
        ? "/images/Palm-Jumeirah.webp"
        : lower.includes("creek")
        ? "/images/Dubai-Creek-Harbour.webp"
        : lower.includes("hills")
        ? "/images/Dubai-Hills-Estate.webp"
        : lower.includes("islands")
        ? "/images/main-dubai-islands-0217eaed95-3700-4cd4-ae39-f7e4130d8163.jpg"
        : lower.includes("investment") || lower.includes("invest")
        ? "/images/property3.jpeg"
        : lower.includes("villa")
        ? "/images/card4.jpeg"
        : lower.includes("jbr") || lower.includes("beach")
        ? "/images/blog1.webp"
        : lower.includes("market") || lower.includes("trend") || lower.includes("analysis")
        ? "/images/analysis.webp"
        : "/images/bgImage.webp";
    // Create a subtitle tailored to the topic
    const subtitle =
      lower.includes("marina")
        ? "Waterfront living, skyline views, and a vibrant promenade lifestyle."
        : lower.includes("palm")
        ? "Experience iconic island living with beaches, resorts, and luxury homes."
        : lower.includes("creek")
        ? "A visionary master-plan blending sustainability with luxury amenities."
        : lower.includes("hills")
        ? "Family-friendly luxury with golf views and top-tier amenities."
        : lower.includes("jbr") || lower.includes("beach")
        ? "Beachfront luxury with dining, retail, and endless leisure options."
        : lower.includes("business-bay")
        ? "Dubai's commercial heart—high-rise living close to Downtown."
        : lower.includes("investment") || lower.includes("invest")
        ? "Strategies, areas, and insights to make smart moves in Dubai real estate."
        : lower.includes("off-plan")
        ? "Payment plans, developer selection, and ROI for pre‑construction projects."
        : "Expert insights tailored to Dubai's luxury property market.";
    // Dynamic, unique content generated from the title and keywords
    const overview = `
      <h2>Overview</h2>
      <p><strong>${niceTitle}</strong> explores what makes this topic stand out in Dubai's real estate landscape. We cover location highlights, lifestyle benefits, and practical guidance so you can evaluate opportunities with confidence.</p>
    `;
    const highlights = `
      <h2>Key Highlights</h2>
      <ul>
        <li>Prime location advantages and connectivity within Dubai.</li>
        <li>Community facilities: schools, healthcare, leisure, and retail.</li>
        <li>Property mix: apartments, villas, and premium developments.</li>
        <li>Buyer and investor considerations for long‑term value.</li>
      </ul>
    `;
    const lifestyle = `
      <h2>Lifestyle & Amenities</h2>
      <p>Residents enjoy thoughtfully planned amenities—from parks and waterfronts to retail boulevards and destination dining. The area around <em>${niceTitle}</em> is designed to balance everyday convenience with moments of luxury.</p>
    `;
    const investment = `
      <h2>Investment Perspective</h2>
      <p>Market demand, developer reputation, and supply pipeline shape outcomes here. Focus on projects with strong handover timelines, proven community management, and rental demand aligned with your strategy.</p>
    `;
    const conclusion = `
      <h2>Conclusion</h2>
      <p>If <strong>${niceTitle}</strong> matches your lifestyle or portfolio goals, our team can shortlist options and arrange viewings. Tell us your budget, preferred handover, and property type to get a curated selection.</p>
    `;
    const dynamicContent = `${overview}${highlights}${lifestyle}${investment}${conclusion}`;
    return {
      title: niceTitle,
      subtitle,
      content: dynamicContent,
      author: {
        name: "Modac Real Estate",
        bio: "Premier real estate specialists assisting investors and property owners navigate Dubai's flourishing property marketplace.",
        avatar: "/images/logo.png",
      },
      publishedAt: new Date().toLocaleDateString(),
      readTime: "5 min read",
      category: "Real Estate",
      tags: ["Dubai", "Real Estate", "Guide"],
      featuredImage,
    };
  })();
  const effectivePost: any = blogPost || generatedFromSlug;
  const title = metaOverride?.title || effectivePost?.title;
  const subtitle = metaOverride?.subtitle || effectivePost?.subtitle;

  return (
    <div className="min-h-screen bg-background">
      <section className="pt-32 pb-12 px-4 bg-[#141442]">
        <div className=" mx-auto text-center">
          <h1 className="text-5xl font-medium mb-6 text-white font-serif font-bold">
            {t('blog.title')}
          </h1>
        </div>
      </section>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 md:px-8 mt-8 sm:mt-12 md:mt-16">
        <h1 className="text-center text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-gray-900 leading-tight">
          {title}
        </h1>
        <p className="text-center text-base sm:text-lg md:text-xl font-mono mt-4 sm:mt-6 md:mt-8 text-gray-600">{effectivePost.publishedAt}</p>
        {effectivePost?.subtitle && (
          <p className="text-center text-sm sm:text-base md:text-lg text-gray-600 mt-4 sm:mt-6 max-w-3xl mx-auto leading-relaxed">
            {subtitle}
          </p>
        )}
      </div>
      {/* Featured Image */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 md:px-8 mt-6 sm:mt-8 md:mt-12 mb-8 sm:mb-10 md:mb-12">
        <div className="relative rounded-lg sm:rounded-xl overflow-hidden shadow-lg">
          <Image
            src={effectivePost.featuredImage}
            alt="Featured image"
            width={0}
            height={0}
            className="w-full h-64 sm:h-80 md:h-96 lg:h-[500px] object-cover"
            priority
          />
        </div>
      </div>
      {/* Main Content */}
      <main className="max-w-5xl mx-auto px-4 sm:px-6 md:px-8 py-6 sm:py-8 md:py-12">
        <article className="prose prose-lg prose-slate max-w-none">
          <div
            className="blog-content text-gray-700 leading-relaxed space-y-6"
            dangerouslySetInnerHTML={{ __html: effectivePost.content }}
          />
        </article>
      </main>
    </div>
  );
}
