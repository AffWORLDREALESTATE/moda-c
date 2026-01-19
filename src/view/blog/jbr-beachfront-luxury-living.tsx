import Image from "next/image";

const blogPost = {
  title: "Jumeirah Beach Residence: Beachfront Luxury Living",
  subtitle:
    "Live the beachfront lifestyle at JBR. Discover luxury apartments with stunning sea views, world-class restaurants, and direct access to one of Dubai's most beautiful beaches.",
  content: `
    <h2>The Walk & The Beach</h2>
    <p>JBR is famous for "The Walk," a bustling waterfront promenade lined with boutiques and al fresco dining. Direct beach access offers water sports, while "The Beach" mall provides open-air cinema and entertainment.</p>
    
    <h2>New Developments</h2>
    <p>While established, JBR continues to evolve with ultra-luxury additions like <strong>1 JBR</strong>, <strong>Address Beach Resort</strong>, and the upcoming <strong>FIVE Luxe</strong>, redefining the skyline with modern architecture.</p>

    <h2>Investment Appeal</h2>
    <p>JBR's limited supply of beachfront land ensures strong capital retention. Short-term rentals (holiday homes) perform exceptionally well here due to high tourist footfall year-round.</p>

    <h2>Connectivity</h2>
    <p>Linked by the Dubai Tram to the Metro and Dubai Marina, JBR offers a pedestrian-friendly lifestyle rare in other parts of the city.</p>

    <h2>Conclusion</h2>
    <p>For those seeking a resort lifestyle in the heart of the city, JBR remains the gold standard.</p>
  `,
  author: {
    name: "Modac Real Estate",
    bio: "Premier real estate specialists assisting investors and property owners navigate Dubai's flourishing property marketplace.",
    avatar: "/images/logo.png",
  },
  publishedAt: "November 3, 2025",
  readTime: "7 min read",
  category: "Neighborhoods",
  tags: ["JBR", "Beachfront", "Apartments", "Dubai"],
  featuredImage: "/images/card4.jpeg",
};

export default function JbrBeachfrontLuxuryLiving() {
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


