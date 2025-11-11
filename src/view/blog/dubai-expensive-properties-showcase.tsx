import Image from "next/image";

const blogPost = {
  title: "Dubai's Top 10 Most Expensive Properties: Luxury Showcase",
  subtitle:
    "Take a tour of Dubai's most luxurious and expensive properties. From penthouses to private islands, discover the pinnacle of luxury real estate in Dubai.",
  content: `
    <h2>Ultra-Luxury Highlights</h2>
    <p>From Palm Jumeirah mega-villas to Downtown penthouses with skyline panoramas, Dubai’s ultra-prime market blends bespoke design, rare plots, and museum-grade finishes.</p>

    <h2>What Defines Ultra-Prime</h2>
    <p>Rarity of location, architectural pedigree, privacy, curated amenities, and concierge-level services. Provenance and craftsmanship command premiums.</p>

    <h2>Buyer Profile</h2>
    <p>Global UHNWIs prioritizing security, discretion, and lifestyle—often acquiring multiple residences across marquee communities.</p>

    <h2>Conclusion</h2>
    <p>Dubai’s ultra-prime segment stands shoulder-to-shoulder with the world’s leading luxury markets.</p>
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


