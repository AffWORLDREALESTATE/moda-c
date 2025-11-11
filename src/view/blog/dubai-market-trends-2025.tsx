import Image from "next/image";

const blogPost = {
  title: "Dubai Real Estate Market Trends 2025: What Investors Need to Know",
  subtitle:
    "Stay ahead with the latest Dubai real estate market trends. From price movements to emerging neighborhoods, get expert insights on where the market is heading in 2025.",
  content: `
    <h2>Macroeconomic Context</h2>
    <p>Dubai’s economy continues to diversify, with tourism, logistics, and technology complementing strong real estate fundamentals. Population growth and infrastructure investment underpin housing demand in 2025.</p>

    <h2>Price Movements</h2>
    <p>Prime areas show steady appreciation, while emerging communities see above-average growth driven by affordability and improved connectivity. Villas retain strong end-user demand; quality mid-market apartments attract investors.</p>

    <h2>Rental Dynamics</h2>
    <p>Rental yields remain healthy, with 5%–8% typical across established districts. Professional hubs and transit-proximate areas see lower vacancy and stable rent escalation.</p>

    <h2>Off-Plan Momentum</h2>
    <p>Developer launches and flexible payment plans sustain off-plan activity. Reputable developers and projects with strong community management see the most uptake.</p>

    <h2>Top Areas to Watch</h2>
    <ul>
      <li>Dubai Hills Estate – family living and golf-front addresses</li>
      <li>Dubai Creek Harbour – long-term urban vision and sustainability</li>
      <li>Business Bay – mixed-use density and professional demand</li>
      <li>JVC & JVT – affordability with improving amenities</li>
    </ul>

    <h2>Conclusion</h2>
    <p>Disciplined selection—developer quality, community services, and access—remains key. Balanced portfolios with both rental-yield and appreciation plays are well-positioned for 2025.</p>
  `,
  author: {
    name: "Modac Real Estate",
    bio: "Premier real estate specialists assisting investors and property owners navigate Dubai's flourishing property marketplace.",
    avatar: "/images/logo.png",
  },
  publishedAt: "November 1, 2025",
  readTime: "6 min read",
  category: "Market",
  tags: ["Market Trends", "Dubai 2025", "Investment", "Real Estate"],
  featuredImage: "/images/c1.webp",
};

export default function DubaiMarketTrends2025() {
  return (
    <div className="min-h-screen bg-background">
      <section className="pt-32 pb-12 px-4 bg-[#141442]">
        <div className=" mx-auto text-center">
          <h1 className="text-5xl font-medium mb-6 text-white font-serif font-bold">
            Blog
          </h1>
        </div>
      </section>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 md:px-8 mt-8 sm:mt-12 md:mt-16">
        <h1 className="text-center text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-gray-900 leading-tight">
          {blogPost.title}
        </h1>
        <p className="text-center text-base sm:text-lg md:text-xl font-mono mt-4 sm:mt-6 md:mt-8 text-gray-600">{blogPost.publishedAt}</p>
        {blogPost.subtitle && (
          <p className="text-center text-sm sm:text-base md:text-lg text-gray-600 mt-4 sm:mt-6 max-w-3xl mx-auto leading-relaxed">
            {blogPost.subtitle}
          </p>
        )}
      </div>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 md:px-8 mt-6 sm:mt-8 md:mt-12 mb-8 sm:mb-10 md:mb-12">
        <div className="relative rounded-lg sm:rounded-xl overflow-hidden shadow-lg">
          <Image
            src={blogPost.featuredImage}
            alt="Featured image"
            width={0}
            height={0}
            className="w-full h-64 sm:h-80 md:h-96 lg:h-[500px] object-cover"
            priority
          />
        </div>
      </div>
      <main className="max-w-5xl mx-auto px-4 sm:px-6 md:px-8 py-6 sm:py-8 md:py-12">
        <article className="prose prose-lg prose-slate max-w-none">
          <div
            className="blog-content text-gray-700 leading-relaxed space-y-6"
            dangerouslySetInnerHTML={{ __html: blogPost.content }}
          />
        </article>
      </main>
    </div>
  );
}


