import Image from "next/image";

const blogPost = {
  title: "Luxury Villas in Dubai: A Guide to Premium Living",
  subtitle:
    "Explore Dubai's most exclusive villa communities. From Emirates Hills to Al Barari, discover luxury villas that offer privacy, space, and world-class amenities in stunning settings.",
  content: `
    <h2>Signature Communities</h2>
    <p>Emirates Hills, Palm Jumeirah, Al Barari, and Dubai Hills Estate headline Dubai’s luxury villa landscape—each offering distinctive settings, from golf vistas to forested sanctuaries.</p>

    <h2>Design and Customization</h2>
    <p>Villas emphasize privacy, indoor-outdoor flow, and bespoke interiors. Many homes feature pools, landscaped gardens, and entertainment suites tailored to owner lifestyles.</p>

    <h2>Amenities and Services</h2>
    <p>Gated communities provide security, clubhouses, sports facilities, and curated community management, ensuring long-term upkeep and resale liquidity.</p>

    <h2>Who It Suits</h2>
    <p>Ideal for families, entertainers, and those seeking tranquility without compromising access to schools, healthcare, and city hubs.</p>

    <h2>Conclusion</h2>
    <p>Luxury villas encapsulate Dubai’s promise of spacious, private, resort-style living—an enduring favorite among discerning buyers.</p>
  `,
  author: {
    name: "Modac Real Estate",
    bio: "Premier real estate specialists assisting investors and property owners navigate Dubai's flourishing property marketplace.",
    avatar: "/images/logo.png",
  },
  publishedAt: "October 26, 2025",
  readTime: "6 min read",
  category: "Luxury",
  tags: ["Villas", "Luxury", "Communities", "Dubai"],
  featuredImage: "/images/c4.webp",
};

export default function LuxuryVillasDubaiGuide() {
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


