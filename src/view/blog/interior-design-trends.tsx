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
  title: "Guide to Interior Design Trends in Dubai Luxury Residences",
  subtitle:
    "Discover the latest interior design trends shaping Dubai's luxury residences and learn how to create stunning spaces that reflect the city's opulent lifestyle.",
  content: `
    <h2>Introduction</h2>
    <p>You've recently settled into your new Dubai apartment. While the space is lovely, something feels incomplete—you can't quite identify what's missing. We're here to assist. This guide explores the finest sources of interior design inspiration throughout Dubai, covering everything from furniture showrooms to design publications.</p>
    <p>Ready to begin? Start exploring and let your creativity flow!</p>

    <h2>What to Consider When Planning Interior Decoration in Dubai</h2>
    <p>Before diving into interior decoration, several factors deserve attention. Dubai is a melting pot of cultures and influences, which means your design should honor this diversity while maintaining your personal aesthetic.</p>
    <p>Climate considerations are crucial. Given Dubai's hot, sunny weather, your home should maximize natural light and airflow.</p>
    <p>Finally, factor in your budget and explore the materials and finishes available locally. With some research, you'll discover the ideal balance between style and functionality for your space.</p>

    <h2>Traditional vs Modern Interior Designs in Dubai</h2>
    <p>Dubai embraces both traditional and contemporary design philosophies. Inspiration abounds in the city's hotels, restaurants, and residential spaces.</p>
    <p>Traditional design honors the region's cultural legacy through elaborate ceilings and detailed woodwork. Rich warm tones and gold accents create an opulent atmosphere perfect for luxury establishments.</p>
    <p>Contemporary design emphasizes simplicity with geometric forms. Cool color palettes and metallic surfaces make it ideal for modern dining venues and homes.</p>
    <p>Regardless of your preference, collaborate with a skilled interior designer to realize your vision.</p>

    <h2>Best Materials and Furnishings for Interior Decoration in Dubai</h2>
    <p>When decorating in Dubai, remember that premium materials and furnishings are readily available. The selection is vast, ensuring you'll find options matching both your taste and financial constraints.</p>
    <p>Dubai's reputation for luxury hospitality means access to high-end furniture and finishes that elevate any space. Budget-conscious decorators will also find numerous affordable alternatives.</p>
    <p>Whatever your preferences or financial situation, Dubai offers solutions. Let inspiration guide your decorating journey!</p>

    <h2>The Importance of Lighting for Interior Design in Dubai</h2>
    <p>Lighting transforms your home's ambiance. It establishes mood and creates distinctive atmospheres. When selecting fixtures in Dubai, incorporate general, task, and accent lighting.</p>
    <p>General lighting provides overall room illumination. Task lighting serves specific areas like kitchen workspaces or reading corners, while accent lights draw attention to artwork or architectural details.</p>
    <p>Select fixtures that complement your room's style and overall design theme. Include dimmer switches to adjust brightness as needed. Thoughtful lighting makes your home distinctive and creates an environment you'll cherish!</p>

    <h2>Adding the Right Wall Art, Carpets and Accessories to Your Home</h2>
    <p>Wall art, rugs, and accessories are fundamental to establishing a personalized aesthetic. Understanding what works in your space is key to selecting the right pieces.</p>
    <p>Choose artwork that resonates with your personality and style preferences. Whether you favor contemporary, modern, or traditional pieces, select items that evoke emotion. Canvas prints offer an accessible starting point!</p>
    <p>Rugs introduce texture and character. If purchasing a new rug isn't feasible, explore online marketplaces like Etsy for unique vintage finds. Don't hesitate to experiment with vibrant colors.</p>
    <p>For decorative accessories, practice restraint—overcrowding creates visual clutter. Select items that harmonize or share design elements. Natural materials like wood or stone create rustic warmth, while bold colors add energy to your space!</p>

    <h2>Get Professional Help with Interior Decoration in Dubai</h2>
    <p>To ensure your Dubai interior project achieves professional results, consider engaging an interior designer or decorator. They bring expertise and can help you stay within budget while meeting all your needs.</p>
    <p>Before committing to professional services, visit showrooms and explore online resources. Style options range from traditional Arabesque motifs to contemporary luxury aesthetics. If hiring a professional exceeds your budget, gather inspiration from examples to guide your vision.</p>
    <p>Note that professional costs in Dubai can rise when incorporating custom furniture, window treatments, and premium materials like hardwood floors and marble surfaces. However, if detailed planning isn't your strength, working with a designer may be worthwhile. Consider this: if time and convenience matter, professional assistance can save both immediately and protect your investment long-term!</p>

    <h2>Conclusion</h2>
    <p>Dubai is an excellent starting point for interior design inspiration. The city hosts world-class designers and decorators, offering diverse style options.</p>
    <p>Whether you prefer traditional Arabic aesthetics, modern sophistication, or a blend of both, Dubai has something for everyone. What's stopping you? Begin planning your interior design project today!</p>

    <p><strong>Ready to transform your space?</strong> Contact Modac Real Estate today to explore our portfolio of luxury properties and discover how our expert team can help you create the perfect home that reflects your unique style and Dubai's sophisticated lifestyle.</p>
  `,
  author: {
    name: "Modac Real Estate",
    bio: "Premier real estate specialists assisting investors and property owners navigate Dubai's flourishing property marketplace.",
    avatar: "/images/logo.png",
  },
  publishedAt: "January 15, 2025",
  readTime: "8 min read",
  category: "Interior Design",
  tags: ["Dubai", "Interior Design", "Luxury Living", "Home Decor"],
  featuredImage: "/images/property1.jpeg",
};

export default function InteriorDesignTrends() {
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
          Guide to Interior Design Trends in Dubai Luxury Residences
        </h1>
        <p className="text-center text-xl font-mono mt-11">January 15, 2025</p>
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
