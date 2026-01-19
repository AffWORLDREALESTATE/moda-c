import Image from "next/image";

const blogPost = {
  title: "Dubai Property Taxes and Fees: Complete Breakdown",
  subtitle:
    "Understand all property-related taxes and fees in Dubai. From registration fees to service charges, get a complete breakdown of costs when buying property in Dubai.",
  content: `
    <h2>Upfront Purchase Costs</h2>
    <ul>
      <li><strong>DLD Fee:</strong> 4% of purchase price + AED 580 admin fee.</li>
      <li><strong>Registration Fee:</strong> AED 4,000 for properties > AED 500k; AED 2,000 for < AED 500k.</li>
      <li><strong>Agency Commission:</strong> 2% + VAT.</li>
    </ul>

    <h2>Recurring Costs (Service Charges)</h2>
    <p>Service charges cover community maintenance. They vary significantly by location:
    <br><strong>Villas:</strong> AED 2 - 6 per sq.ft (e.g., Arabian Ranches, Dubai Hills).
    <br><strong>Apartments:</strong> AED 12 - 30+ per sq.ft (e.g., Downtown, Marina). Luxury towers can exceed AED 50/sq.ft.</p>

    <h2>Tax Environment</h2>
    <p><strong>Property Tax:</strong> 0% annual property tax.
    <br><strong>Capital Gains Tax:</strong> 0% on resale profits.
    <br><strong>Rental Income Tax:</strong> 0% personal income tax (5% VAT applies only to commercial leases).</p>

    <h2>Conclusion</h2>
    <p>Dubai's low-tax environment maximizes net returns, though investors must factor in high service charges in luxury apartment towers.</p>
  `,
  author: {
    name: "Modac Real Estate",
    bio: "Premier real estate specialists assisting investors and property owners navigate Dubai's flourishing property marketplace.",
    avatar: "/images/logo.png",
  },
  publishedAt: "October 24, 2025",
  readTime: "5 min read",
  category: "Guides",
  tags: ["Fees", "DLD", "Taxes", "Dubai"],
  featuredImage: "/images/c5.webp",
};

export default function DubaiPropertyTaxesFees() {
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


