import Image from "next/image";

const blogPost = {
  title: "Business Bay: The Commercial Hub of Dubai",
  subtitle:
    "Explore Business Bay, Dubai's premier business district. From luxury apartments to commercial spaces, discover why this area is attracting investors and residents from around the world.",
  content: `
    <h2>Dubai’s Commercial Powerhouse</h2>
    <p>Business Bay is one of Dubai’s most dynamic districts, strategically located beside Downtown Dubai. With a skyline of cutting-edge skyscrapers and waterfront promenades along the Dubai Canal, it blends commercial vitality with sophisticated urban living.</p>

    <h2>Prime Residential Living</h2>
    <p>Residential towers in Business Bay offer high-rise living with premium amenities. Many buildings feature gyms, pools, dedicated concierge services, and retail at the podium level. Apartments are popular with professionals seeking quick access to Downtown and Sheikh Zayed Road.</p>

    <h2>Business and Connectivity</h2>
    <p>As a major commercial hub, the district hosts headquarters, co-working spaces, and boutique offices. Two metro stations, easy access to major highways, and proximity to Downtown and DIFC make commuting seamless.</p>

    <h2>Lifestyle and Dining</h2>
    <p>Business Bay offers a vibrant lifestyle with canal-side cafes, upscale restaurants, and boutique gyms. The district’s boardwalk and landscaped public spaces encourage a walkable, urban lifestyle.</p>

    <h2>Investment Outlook</h2>
    <p>Strong rental demand from professionals and the district’s constant development pipeline underpin investment appeal. Competitive yields and steady appreciation make Business Bay a compelling option for buy-to-let investors.</p>

    <h2>Conclusion</h2>
    <p>With its strategic location, thriving business ecosystem, and modern residential options, Business Bay remains one of Dubai’s most attractive addresses for both living and investment.</p>

    <p><strong>Interested in Business Bay?</strong> Contact Modac Real Estate for curated listings in the area.</p>
  `,
  author: {
    name: "Modac Real Estate",
    bio: "Premier real estate specialists assisting investors and property owners navigate Dubai's flourishing property marketplace.",
    avatar: "/images/logo.png",
  },
  publishedAt: "November 5, 2025",
  readTime: "7 min read",
  category: "Neighborhoods",
  tags: ["Business Bay", "Apartments", "Commercial", "Dubai"],
  featuredImage: "/images/card3.jpeg",
};

export default function BusinessBayCommercialHub() {
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


