import Image from "next/image";

const blogPost = {
  title: "Off-Plan Properties in Dubai: Investment Opportunities",
  subtitle:
    "Discover the benefits of investing in off-plan properties in Dubai. Learn about payment plans, developer reputation, and how to maximize returns on pre-construction investments.",
  content: `
    <h2>Why Off-Plan?</h2>
    <p>Off-plan purchases allow investors to enter at competitive prices with staged payments. Early entry often captures appreciation between launch and handover.</p>

    <h2>Key Considerations</h2>
    <ul>
      <li>Developer Reputation – track record of delivery and quality</li>
      <li>Location – future infrastructure, schools, and connectivity</li>
      <li>Payment Plan – cash flow alignment and post-handover options</li>
      <li>Community Management – long-term service charge and upkeep</li>
    </ul>

    <h2>Risk Management</h2>
    <p>Diversify across reputable developers and phases. Study SPAs, escrow arrangements, and delivery timelines. Favor master-planned communities with proven demand.</p>

    <h2>Exit Strategies</h2>
    <p>Options include resale pre-handover (assignment), holding for rental yields post-handover, or refinancing. Match strategy to your horizon and liquidity needs.</p>

    <h2>Conclusion</h2>
    <p>With disciplined selection, off-plan can balance appreciation potential and flexible capital deployment in Dubai.</p>
  `,
  author: {
    name: "Modac Real Estate",
    bio: "Premier real estate specialists assisting investors and property owners navigate Dubai's flourishing property marketplace.",
    avatar: "/images/logo.png",
  },
  publishedAt: "October 30, 2025",
  readTime: "7 min read",
  category: "Investment",
  tags: ["Off-Plan", "Developers", "Investment", "Dubai"],
  featuredImage: "/images/c2.webp",
};

export default function OffPlanPropertiesDubai() {
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


