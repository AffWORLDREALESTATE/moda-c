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
  title: "Why Buying Property in Dubai is Better than Renting",
  subtitle:
    "Explore the economic, personal, and investment benefits of purchasing real estate in Dubai.",
  content: `
    <h2>Long-Term Financial Benefits</h2>
    <p>Leasing may offer immediate adaptability, but it's fundamentally financing another person's real estate venture. When you acquire a property, every installment creates ownership—a valuable asset that appreciates over time. With Dubai's property sector providing substantial value growth, purchasing a residence can dramatically increase your financial portfolio.</p>
    <p>Additionally, lease rates in Dubai can be unpredictable, frequently increasing dramatically in sought-after locations. Property ownership enables you to bypass these variations and delivers consistent and foreseeable accommodation expenses.</p>

    <h2>Tax-Free Property Ownership</h2>
    <p>Dubai is recognized for its investor-welcoming atmosphere, featuring zero property taxation. After you acquire real estate, you won't need to concern yourself with yearly levies reducing your investment's worth. This tax-exempt benefit makes real estate ownership in Dubai even more attractive compared to other international metropolitan areas.</p>

    <h2>Flexible Payment Plans</h2>
    <p>Builders in Dubai frequently provide appealing and adaptable installment schemes for pre-construction properties. These arrangements enable purchasers to distribute payments across multiple years, making residential ownership reachable to a wider spectrum of people. Frequently, the monthly payments for a real estate acquisition can be similar to, or even lower than, lease payments.</p>

    <h2>Residency Benefits</h2>
    <p>Possessing real estate in Dubai can include residence permit advantages, contingent on the worth of your investment. This delivers not only a dwelling place but also the assurance of being an inhabitant in one of the world's most dynamic urban centers. These permits frequently enable property holders and their relatives to experience the benefits of residing in Dubai, such as entry to superior medical care, schooling, and commercial prospects.</p>

    <h2>Freedom to Personalize</h2>
    <p>When you possess your residence, you have total authority over its layout and operations. You can refurbish, redesign, and alter your property as desired without the restrictions enforced by a property owner. This liberty permits you to establish an environment that genuinely feels like your own.</p>

    <h2>High Rental Yields</h2>
    <p>If you're not intending to reside in the property, Dubai's elevated rental income makes real estate ownership a profitable venture. Desirable districts such as Downtown Dubai, Dubai Marina, and Palm Jumeirah provide some of the highest lease returns worldwide, guaranteeing your asset generates income even when you're not occupying it.</p>

    <h2>A Hedge Against Inflation</h2>
    <p>Property ownership shields you from increasing lease costs, which can substantially affect your living expenses over time. Consistent loan rates or fully-owned properties guarantee steadiness in your accommodation costs, serving as protection against economic inflation.</p>

    <h2>A Thriving Real Estate Market</h2>
    <p>Dubai's property sector is constantly advancing, featuring international-standard infrastructure initiatives, forthcoming large-scale developments, and a firm dedication to environmental responsibility and technological advancement. Purchasing real estate in this marketplace situates you to profit from the city's continuous expansion and worldwide attractiveness.</p>

    <h2>Conclusion</h2>
    <p>While leasing provides immediate convenience, purchasing property in Dubai is a choice that delivers enduring worth, economic stability, and multiple lifestyle benefits. From tax-exempt ownership to residence privileges and elevated rental income, the motivations to invest in Dubai real estate are persuasive.</p>

            <p><strong>Execute the intelligent decision today.</strong> Reach out to our team at Modac Real Estate to investigate exclusive property opportunities and uncover your route to residential ownership in Dubai. Allow us to assist you in transforming your investment aspirations into actuality!</p>
  `,
  author: {
          name: "Modac Real Estate",
    bio: "Premier real estate specialists assisting investors and property owners navigate Dubai's flourishing property marketplace.",
    avatar: "/images/logo-gold.svg",
  },
  publishedAt: "December 24, 2024",
  readTime: "6 min read",
  category: "Real Estate",
  tags: ["Dubai", "Investment", "Real Estate", "Property"],
  featuredImage: "/images/property1.jpeg",
};

export default function DetailsBlog() {
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
          Why Buying Property in Dubai is Better than Renting
        </h1>
        <p className="text-center text-xl font-mono mt-11">December 24, 2024</p>
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
