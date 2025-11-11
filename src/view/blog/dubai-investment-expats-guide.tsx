import Image from "next/image";

const blogPost = {
  title: "Dubai Property Investment for Expats: Essential Guide",
  subtitle:
    "Everything expats need to know about investing in Dubai real estate. From visa benefits to legal requirements, navigate the Dubai property market with confidence.",
  content: `
    <h2>Ownership for Expats</h2>
    <p>Foreigners can buy freehold property in designated areas with full ownership rights. Purchases are registered with the DLD for transparency and security.</p>

    <h2>Visas and Residency</h2>
    <p>Property-linked residency options exist above certain thresholds, subject to current regulations. Requirements and durations vary—verify the latest policies before purchase.</p>

    <h2>Financing and Currency</h2>
    <p>Expat mortgages are widely available. Consider currency exposure and hedging for long-term holdings.</p>

    <h2>Leasing and Management</h2>
    <p>Professional property management eases leasing, compliance, and maintenance for overseas owners.</p>

    <h2>Conclusion</h2>
    <p>With clear rules and robust infrastructure, Dubai welcomes expat investors seeking stable, tax-efficient opportunities.</p>
  `,
  author: {
    name: "Modac Real Estate",
    bio: "Premier real estate specialists assisting investors and property owners navigate Dubai's flourishing property marketplace.",
    avatar: "/images/logo.png",
  },
  publishedAt: "October 20, 2025",
  readTime: "6 min read",
  category: "Guides",
  tags: ["Expats", "Residency", "Investment", "Dubai"],
  featuredImage: "/images/blog1.webp",
};

export default function DubaiInvestmentExpatsGuide() {
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


