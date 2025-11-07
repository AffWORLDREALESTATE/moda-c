import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/src/components/ui/avatar";
import { Badge } from "@/src/components/ui/badge";
import { Button } from "@/src/components/ui/button";
import { Card, CardContent } from "@/src/components/ui/card";
import { Separator } from "@/src/components/ui/separator";
import { Calendar, Clock, Share2, BookOpen, ArrowLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

// Mock data - in a real app, this would come from your CMS or database
const blogPost = {
  title: "Dubai's Hidden Gems: Guide to Exclusive Neighborhoods",
  subtitle:
    "Explore Dubai's most exclusive neighborhoods and discover hidden gems that offer unparalleled luxury living in the city of dreams.",
  content: `
    <h2>A City of Extravagance</h2>
    <p>Dubai, celebrated for its breathtaking skyline, continuously pushes architectural boundaries. From landmarks like the Burj Khalifa to palm-shaped developments, the city's property scene reflects limitless creativity and ambition. Modac Real Estate carefully selects properties that match Dubai's vision of luxury, providing clients with residences that elevate high-end living.</p>

    <h2>Exclusive Developments</h2>
    <p>Modac Real Estate focuses on presenting exclusive developments tailored to our clients' varied preferences. Our collection includes waterfront homes with sweeping views, modern city penthouses, and peaceful villas in private enclaves—all designed to meet exceptional luxury standards.</p>

    <h2>Innovative Design and Architecture</h2>
    <p>Dubai's property market is famous for innovative design and architectural excellence. Modac Real Estate partners with leading architects and developers to showcase properties that merge advanced design with practical living. From tech-integrated smart homes to sustainable residences, our portfolio addresses the changing needs of today's homeowners.</p>

    <h2>Expert Guidance and Consultation</h2>
    <p>The Dubai property market's fast-paced nature can be overwhelming. Modac Real Estate sets itself apart through expert advice and customized consultation. Our experienced team focuses on understanding your specific needs, ensuring each client receives personalized solutions aligned with their lifestyle goals.</p>

    <h2>Transparency and Integrity</h2>
    <p>Modac Real Estate prioritizes transparency and ethical conduct in every transaction. We recognize that trust is fundamental in real estate dealings. Our dedication to ethical practices gives clients the confidence to make informed decisions, knowing they're in reliable hands.</p>

    <h2>Investment Opportunities</h2>
    <p>Dubai's property market offers both luxurious living and smart investment potential. Modac Real Estate monitors market trends and emerging opportunities, enabling clients to make strategic investments that deliver financial gains and lifestyle improvements.</p>

    <h2>Hidden Neighborhood Gems</h2>
    <p>Beyond popular areas, Dubai features several hidden neighborhood treasures offering distinctive living experiences. These exclusive communities provide privacy, premium amenities, and access to the city's most prestigious facilities.</p>

    <h3>Al Barari</h3>
    <p>Located in central Dubai, Al Barari is a secluded sanctuary blending luxury living with natural surroundings. This private community offers villas set among verdant gardens, private pools, and top-tier amenities. It's ideal for those wanting peace while remaining close to urban conveniences.</p>

    <h3>Emirates Hills</h3>
    <p>Often called Dubai's Beverly Hills, Emirates Hills is a gated community featuring luxury villas with spectacular golf course vistas. This distinguished area provides privacy, security, and access to the Emirates Golf Club, making it perfect for selective residents.</p>

    <h3>Dubai Hills Estate</h3>
    <p>This master-planned development combines city accessibility with suburban calm. Featuring golf course views, premium amenities, and proximity to Downtown Dubai, it's emerging as one of the city's most desirable locations.</p>

    <h2>Luxury Amenities and Services</h2>
    <p>Dubai's exclusive neighborhoods are known for exceptional amenities and services. From private beaches and marinas to championship golf courses and luxury spas, residents enjoy facilities matching the world's finest resorts.</p>

    <h2>Future Developments</h2>
    <p>Dubai keeps evolving with ambitious new projects that promise to transform luxury living. From sustainable communities to smart city initiatives, the future of Dubai's property market appears more promising than ever.</p>

    <h2>Conclusion</h2>
    <p>In Dubai's real estate landscape, Modac Real Estate represents trust, innovation, and luxury. Our commitment to excellence, combined with a portfolio of exclusive developments, ensures every client begins a journey toward exceptional living. Whether you're searching for a dream home or a strategic investment, Modac Real Estate is your reliable partner in achieving your goals in this city of dreams.</p>

    <p><strong>Ready to discover your perfect home?</strong> Contact Modac Real Estate today to explore our exclusive portfolio of luxury properties and let our expert team guide you to your dream residence in Dubai's most prestigious neighborhoods.</p>
  `,
  author: {
    name: "Modac Real Estate",
    bio: "Premier real estate specialists assisting investors and property owners navigate Dubai's flourishing property marketplace.",
    avatar: "/images/logo.png",
  },
  publishedAt: "January 10, 2025",
  readTime: "7 min read",
  category: "Neighborhoods",
  tags: ["Dubai", "Neighborhoods", "Luxury Living", "Real Estate"],
  featuredImage: "/images/property2.jpeg",
};

export default function DubaiHiddenGems() {
  return (
    <div className="min-h-screen bg-background">
      <section className="pt-32 pb-12 px-4 bg-[#141442]">
        <div className=" mx-auto text-center">
          <h1 className="text-5xl font-medium mb-6 text-white font-serif font-bold">
            Blog
          </h1>
        </div>
      </section>
      <div className="max-w-5xl mx-auto px-6 mt-16">
        <h1 className="text-center text-4xl font-serif font-bold">
          Dubai's Hidden Gems: Guide to Exclusive Neighborhoods
        </h1>
        <p className="text-center text-xl font-mono mt-11">January 10, 2025</p>
      </div>
      {/* Featured Image */}
      <div className="max-w-5xl mx-auto px-6 mt-8 mb-12">
        <div className="relative rounded-none overflow-hidden ">
          <Image
            src={blogPost.featuredImage}
            alt="Featured image"
            width={0}
            height={0}
            className="w-full h-64 md:h-96 object-cover"
          />
        </div>
      </div>
      {/* Main Content */}
      <main className="max-w-5xl mx-auto px-6 py-4">
        <article className="prose prose-lg prose-slate max-w-none">
          <div
            className="text-slate-700 leading-relaxed space-y-6"
            dangerouslySetInnerHTML={{ __html: blogPost.content }}
            style={{
              fontSize: "15px",
              lineHeight: "1.7",
            }}
          />
        </article>
      </main>
    </div>
  );
}
