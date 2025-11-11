import Image from "next/image";

const blogPost = {
  title: "Jumeirah Beach Residence: Beachfront Luxury Living",
  subtitle:
    "Live the beachfront lifestyle at JBR. Discover luxury apartments with stunning sea views, world-class restaurants, and direct access to one of Dubai's most beautiful beaches.",
  content: `
    <h2>Dubai’s Premier Beachfront Neighborhood</h2>
    <p>JBR offers true beachfront living with a vibrant promenade, pristine beaches, and endless dining options. Its family-friendly environment and resort-style amenities attract residents seeking a coastal lifestyle in the city.</p>

    <h2>Seafront Apartments</h2>
    <p>Residences feature balconies with sea or Marina views, modern interiors, and access to gyms and pools. The community’s layout encourages walking, with retail, cafes, and leisure within minutes.</p>

    <h2>Dining and Leisure</h2>
    <p>The Walk at JBR and The Beach provide dozens of restaurants, boutiques, cinemas, and seasonal events. Watersports, cycling, and beach clubs add to the lifestyle appeal.</p>

    <h2>Connectivity</h2>
    <p>Close to Dubai Marina and Bluewaters Island, with quick access to Sheikh Zayed Road and multiple public transport options, including tram and metro connectivity.</p>

    <h2>Investment Perspective</h2>
    <p>High tourist footfall and consistent tenant demand support steady rental yields. Beachfront rarity drives long-term value resilience and liquidity.</p>

    <h2>Conclusion</h2>
    <p>JBR combines coastal serenity with urban convenience—a top choice for beachfront living in Dubai.</p>
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


