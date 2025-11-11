import Image from "next/image";

const blogPost = {
  title: "Dubai Property Rental Yields: Maximizing Your Investment",
  subtitle:
    "Learn how to maximize rental yields on Dubai properties. From location selection to property management, discover strategies to boost your rental income in Dubai's competitive market.",
  content: `
    <h2>Yield Drivers</h2>
    <p>Rental yields hinge on purchase price, community services, tenant demand, and vacancy management. Transit access and nearby employment hubs improve absorption and rent growth.</p>

    <h2>Unit Mix and Finish</h2>
    <p>Studios and 1-bed units often show higher headline yields; 2–3 beds can balance stability and lower turnover. Quality finishes and turnkey condition reduce leasing downtime.</p>

    <h2>Management and Pricing</h2>
    <p>Professional property management optimizes listing exposure, screening, and maintenance. Dynamic pricing across seasons and events increases annual return.</p>

    <h2>Short-Term vs Long-Term</h2>
    <p>Short-term rentals can out-earn annual leases in select locations but require active management and licensing. Long-term contracts offer stability and lower operating complexity.</p>

    <h2>Conclusion</h2>
    <p>With the right location and operations, Dubai rentals can deliver resilient, inflation-protected income.</p>
  `,
  author: {
    name: "Modac Real Estate",
    bio: "Premier real estate specialists assisting investors and property owners navigate Dubai's flourishing property marketplace.",
    avatar: "/images/logo.png",
  },
  publishedAt: "October 28, 2025",
  readTime: "5 min read",
  category: "Investment",
  tags: ["Rental Yield", "Property Management", "Dubai", "Investment"],
  featuredImage: "/images/c3.webp",
};

export default function DubaiRentalYieldsInvestment() {
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


