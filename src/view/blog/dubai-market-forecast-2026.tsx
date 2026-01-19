import Image from "next/image";

const blogPost = {
  title: "Dubai Property Market Forecast: 2026 Outlook",
  subtitle:
    "Get expert predictions on Dubai's property market for 2026. From price forecasts to emerging trends, stay informed about future investment opportunities.",
  content: `
    <h2>Growth Drivers</h2>
    <p>Dubai's property market is projected to see steady mid-single-digit price growth in 2026, transitioning into a mature cycle. Key drivers include a population approaching 4 million, sustained high-net-worth individual (HNWI) inflows, and government initiatives like the Golden Visa.</p>

    <h2>Segments to Watch</h2>
    <p><strong>Prime and Luxury:</strong> Areas like Palm Jumeirah, Downtown, and Emirates Hills are expected to outperform due to limited inventory.
    <br><strong>Mid-Market:</strong> Communities like JVC and Dubai South will see growth driven by affordability and improved connectivity.</p>

    <h2>Supply and Demand</h2>
    <p>With approximately 100,000 units projected for completion, market absorption is expected to remain healthy. Developers are managing supply carefully, preventing oversaturation while meeting the demands of new residents.</p>

    <h2>Risks and Mitigants</h2>
    <p>Global interest rate cycles and currency fluctuations remain key variables. Investors are advised to favor developers with proven track records and focus on liquid locations to mitigate cyclical risks.</p>

    <h2>Conclusion</h2>
    <p>2026 offers a stable investment landscape, rewarding disciplined selection based on fundamentals rather than speculation.</p>
  `,
  author: {
    name: "Modac Real Estate",
    bio: "Premier real estate specialists assisting investors and property owners navigate Dubai's flourishing property marketplace.",
    avatar: "/images/logo.png",
  },
  publishedAt: "October 16, 2025",
  readTime: "5 min read",
  category: "Market",
  tags: ["Forecast", "2026", "Dubai", "Real Estate"],
  featuredImage: "/images/building.jpg",
};

export default function DubaiMarketForecast2026() {
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


