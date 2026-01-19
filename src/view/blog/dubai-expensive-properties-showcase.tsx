import Image from "next/image";

const blogPost = {
  title: "Dubai's Top 10 Most Expensive Properties: Luxury Showcase",
  subtitle:
    "Take a tour of Dubai's most luxurious and expensive properties. From penthouses to private islands, discover the pinnacle of luxury real estate in Dubai.",
  content: `
    <h2>Record-Breaking Sales</h2>
    <p>Dubai's ultra-luxury market continues to shatter records. Notable transactions include the <strong>AED 400M+ Penthouse at Bulgari Lighthouse</strong> and the <strong>AED 600M+ Villa</strong> on Palm Jumeirah. The Atlantis The Royal penthouses have also set new benchmarks for branded residences.</p>

    <h2>Ultra-Prime Locations</h2>
    <p><strong>Jumeirah Bay Island:</strong> Known as the "Billionaires' Island," home to bespoke mansions and the Bulgari Resort.
    <br><strong>Palm Jumeirah Fronds:</strong> Custom-built "Signature Villas" remain the most liquid asset class for UHNWIs.
    <br><strong>Emirates Hills:</strong> The established "Beverly Hills of Dubai" continues to command premium prices for renovated golf-course estates.</p>

    <h2>Buyer Profile</h2>
    <p>Global UHNWIs from Europe, Asia, and the CIS region are prioritizing privacy, security, and branded amenities. There is a marked shift towards "turnkey" super-prime properties furnished by top design houses.</p>

    <h2>Conclusion</h2>
    <p>Dubai is firmly established as a top-tier global luxury market, offering value comparable to London and New York but with superior lifestyle benefits.</p>
  `,
  author: {
    name: "Modac Real Estate",
    bio: "Premier real estate specialists assisting investors and property owners navigate Dubai's flourishing property marketplace.",
    avatar: "/images/logo.png",
  },
  publishedAt: "October 18, 2025",
  readTime: "6 min read",
  category: "Luxury",
  tags: ["Ultra Prime", "Luxury", "Dubai", "Penthouses"],
  featuredImage: "/images/blog2.webp",
};

export default function DubaiExpensivePropertiesShowcase() {
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


