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
    <p>Dubai, known for its awe-inspiring skyline, is a city that prides itself on pushing the boundaries of architectural innovation. From iconic structures like the Burj Khalifa to the palm-shaped islands, the city's real estate landscape is a testament to boundless creativity and ambition. Modac Real Estate takes pride in curating a portfolio that aligns with Dubai's vision of extravagance, offering clients a chance to reside in properties that redefine luxury living.</p>

    <h2>Exclusive Developments</h2>
    <p>Modac Real Estate specializes in showcasing exclusive developments that cater to the diverse tastes and preferences of our discerning clientele. Whether it's a waterfront residence with panoramic views, a contemporary urban penthouse, or a serene villa nestled in a private community, our portfolio features an array of options designed to meet the highest standards of luxury living.</p>

    <h2>Innovative Design and Architecture</h2>
    <p>Dubai's real estate is renowned for its innovative design and architectural brilliance. Modac Real Estate collaborates with renowned architects and developers to present properties that seamlessly blend cutting-edge design with functionality. From smart homes that incorporate the latest technology to eco-friendly residences that prioritize sustainability, our portfolio reflects the evolving needs of the modern homeowner.</p>

    <h2>Expert Guidance and Consultation</h2>
    <p>Navigating the Dubai real estate market can be a daunting task, given its dynamic nature. Modac Real Estate distinguishes itself by offering expert guidance and personalized consultation services. Our team of seasoned professionals is dedicated to understanding your unique requirements and preferences, ensuring that every client receives tailored solutions that match their lifestyle aspirations.</p>

    <h2>Transparency and Integrity</h2>
    <p>Modac Real Estate places a premium on transparency and integrity in all its dealings. We understand the importance of trust when it comes to real estate transactions. Our commitment to ethical practices ensures that clients can make informed decisions with confidence, knowing that they are in safe and trustworthy hands.</p>

    <h2>Investment Opportunities</h2>
    <p>Dubai's real estate market presents not only an opportunity for luxurious living but also for savvy investors. Modac Real Estate keeps a keen eye on the market trends and emerging opportunities, allowing our clients to make strategic investments that yield both financial returns and a lifestyle upgrade.</p>

    <h2>Hidden Neighborhood Gems</h2>
    <p>Beyond the well-known districts, Dubai boasts several hidden neighborhood gems that offer unique living experiences. These exclusive communities provide residents with privacy, luxury amenities, and access to some of the city's most prestigious facilities.</p>

    <h3>Al Barari</h3>
    <p>Nestled in the heart of Dubai, Al Barari is a hidden oasis that combines luxury living with natural beauty. This exclusive community features villas surrounded by lush gardens, private pools, and world-class amenities. It's perfect for those seeking tranquility while staying connected to the city.</p>

    <h3>Emirates Hills</h3>
    <p>Known as Dubai's Beverly Hills, Emirates Hills is an exclusive gated community featuring luxury villas with stunning golf course views. This prestigious neighborhood offers privacy, security, and access to the Emirates Golf Club, making it ideal for discerning residents.</p>

    <h3>Dubai Hills Estate</h3>
    <p>This master-planned community offers a perfect blend of urban convenience and suburban tranquility. With golf course views, world-class amenities, and easy access to Downtown Dubai, it's becoming one of the most sought-after addresses in the city.</p>

    <h2>Luxury Amenities and Services</h2>
    <p>Dubai's exclusive neighborhoods are renowned for their world-class amenities and services. From private beaches and marinas to championship golf courses and luxury spas, residents enjoy access to facilities that rival the world's finest resorts.</p>

    <h2>Future Developments</h2>
    <p>Dubai continues to evolve with ambitious new developments that promise to redefine luxury living. From sustainable communities to smart cities, the future of Dubai's real estate market looks brighter than ever.</p>

    <h2>Conclusion</h2>
    <p>In the realm of Dubai's real estate, Modac Real Estate stands as a beacon of trust, innovation, and luxury. Our commitment to excellence, paired with a portfolio of exclusive developments, ensures that every client embarks on a journey to discover unparalleled living. Whether you are seeking a dream home or a strategic investment, Modac Real Estate is your trusted partner in realizing your aspirations in the city of dreams.</p>

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
