import Image from "next/image";

const blogPost = {
  title: "Sustainable Living in Dubai: Green Buildings and Eco-Friendly Homes",
  subtitle:
    "Discover Dubai's commitment to sustainability. Explore green buildings, eco-friendly developments, and sustainable living options that combine luxury with environmental responsibility.",
  content: `
    <h2>The Sustainable City</h2>
    <p>A pioneering net-zero energy development in Dubailand. It features 500 villas with solar panels, biodomes for urban farming, and car-free residential clusters. Residents save up to 50% on utility bills.</p>

    <h2>Al Barari</h2>
    <p>More than just luxury, Al Barari creates a microclimate with over 500 plant species, reducing ambient temperature. It focuses on wellness and biodiversity.</p>

    <h2>Expo City Dubai</h2>
    <p>The legacy of Expo 2020, this "15-minute city" is built to the highest LEED certification standards, prioritizing pedestrian mobility and clean energy.</p>

    <h2>Green Benefits</h2>
    <p>Beyond environmental impact, green buildings offer better air quality, lower operating costs, and are increasingly favored by eco-conscious tenants and buyers.</p>

    <h2>Conclusion</h2>
    <p>Sustainability is no longer niche in Dubai; it is central to the future ensuring long-term resilience and quality of life.</p>
  `,
  author: {
    name: "Modac Real Estate",
    bio: "Premier real estate specialists assisting investors and property owners navigate Dubai's flourishing property marketplace.",
    avatar: "/images/logo.png",
  },
  publishedAt: "October 22, 2025",
  readTime: "5 min read",
  category: "Sustainability",
  tags: ["Sustainability", "Green Homes", "Dubai"],
  featuredImage: "/images/c6.webp",
};

export default function SustainableLivingDubai() {
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


