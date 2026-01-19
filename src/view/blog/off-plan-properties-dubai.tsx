import Image from "next/image";

const blogPost = {
  title: "Off-Plan Properties in Dubai: Investment Opportunities",
  subtitle:
    "Discover the benefits of investing in off-plan properties in Dubai. Learn about payment plans, developer reputation, and how to maximize returns on pre-construction investments.",
  content: `
    <h2>Why Off-Plan?</h2>
    <p>Off-plan properties remain a key investment vehicle in 2025/2026. Entry prices are often 10-20% lower than ready units, and capital appreciation of 15-20% is common during the construction phase.</p>

    <h2>Financial Incentives</h2>
    <ul>
      <li><strong>Payment Plans:</strong> attractive 60/40 or 50/50 plans allow investors to manage cash flow.</li>
      <li><strong>Lower Upfront Contribution:</strong> Golden Visa rules now allow the 2M AED threshold to be met by equity invested, not just property value, aiding off-plan buyers.</li>
      <li><strong>DLD Waivers:</strong> Some developers offer 50% or 100% DLD fee waivers during launches.</li>
    </ul>

    <h2>Flipping vs Holding</h2>
    <p><strong>Flipping:</strong> Selling before handover can net 10-15% ROE if timed right, but requires finding a cash buyer or passing on the payment plan.
    <br><strong>Holding:</strong> Offering the best long-term value, with post-handover yields often surpassing 8%.</p>

    <h2>Risk Management</h2>
    <p>Always verify the project's escrow account (Oqood) and the developer's track record. Diversify across master-planned communities like Dubai South or Dubai Creek Harbour for safety.</p>

    <h2>Conclusion</h2>
    <p>Off-plan offers the highest leverage potential in Dubai real estate, provided investors choose reputable developers and prime locations.</p>
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


