import Image from "next/image";

const blogPost = {
  title: "Sustainable Living in Dubai: Green Buildings and Eco-Friendly Homes",
  subtitle:
    "Discover Dubai's commitment to sustainability. Explore green buildings, eco-friendly developments, and sustainable living options that combine luxury with environmental responsibility.",
  content: `
    <h2>Green Standards</h2>
    <p>Dubai’s sustainability push includes Estidama and green building codes that promote energy efficiency, water conservation, and healthier indoor environments.</p>

    <h2>Eco-Friendly Communities</h2>
    <p>Masterplans now feature solar-ready rooftops, recycled water irrigation, shaded walkways, and biodiversity-friendly landscaping.</p>

    <h2>Smart Homes</h2>
    <p>Smart meters, automated climate control, and efficient glazing reduce consumption without compromising comfort.</p>

    <h2>Benefits</h2>
    <p>Residents gain lower utility costs, improved well-being, and long-term value preservation as sustainability becomes a core buyer criterion.</p>

    <h2>Conclusion</h2>
    <p>Sustainability and luxury increasingly go hand-in-hand in Dubai’s new generation of properties.</p>
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


