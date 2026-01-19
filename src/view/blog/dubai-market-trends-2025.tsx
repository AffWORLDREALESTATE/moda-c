import Image from "next/image";

const blogPost = {
  title: "Dubai Real Estate Market Trends 2025: What Investors Need to Know",
  subtitle:
    "Stay ahead with the latest Dubai real estate market trends. From price movements to emerging neighborhoods, get expert insights on where the market is heading in 2025.",
  content: `
    <h2>Macroeconomic Context</h2>
    <p>Dubai’s economy continues to diversify, with tourism, logistics, and technology complementing real estate. The population is expanding rapidly, underpinning housing demand. 2025 sees a shift towards sustainable and smart-home integrated properties.</p>

    <h2>Price Movements</h2>
    <p>While rapid double-digit appreciation moderates, steady growth characterizes 2025. Luxury properties continue to command premiums, but the transaction volume in mid-market segments is surging as end-users prioritize value.</p>

    <h2>Rental Dynamics</h2>
    <p>Rental growth is stabilizing at sustainable levels after sharp rises. Expect 5%–8% yields in established districts. Vacancy rates remain low in core family communities, though some seasonality is returning.</p>

    <h2>Off-Plan Momentum</h2>
    <p>Developer launches remain robust, with a focus on flexible post-handover payment plans (e.g., 60/40 structures). Branded residences are seeing particular interest from international investors seeking "lock-and-leave" luxury.</p>

    <h2>Top Areas to Watch</h2>
    <ul>
      <li><strong>Dubai Hills Estate:</strong> The benchmark for family community living.</li>
      <li><strong>Dubai Creek Harbour:</strong> Long-term appreciation play with upcoming infrastructure.</li>
      <li><strong>JVC & JVT:</strong> High-yield hotspots for investors.</li>
      <li><strong>Business Bay:</strong> Continued demand for luxury apartments near Downtown.</li>
    </ul>

    <h2>Conclusion</h2>
    <p>The 2025 market rewards strategic, long-term holding over short-term flipping, with a clear flight to quality in both construction and community management.</p>
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


