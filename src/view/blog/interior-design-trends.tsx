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
    <p>You've just moved into a new apartment in Dubai. It's a beautiful space, but it's missing something…you just can't quite put your finger on it. Don't worry, we're here to help. In this article, we'll take a look at some of the best sources of interior decoration inspiration in Dubai. From furniture stores to design blogs, we've got you covered.</p>
    <p>So what are you waiting for? Start browsing and get inspired!</p>

    <h2>What to Consider When Planning Interior Decoration in Dubai</h2>
    <p>When it comes to interior decoration, there are a few things you need to take into account before getting started. For one, Dubai is a city with a diverse range of cultures and influences. This means that your interior design should reflect this diversity, while also staying true to your own personal style.</p>
    <p>You'll also need to take the climate into account. Dubai is a hot and sunny city, so your home should be designed in a way that allows for natural light and ventilation.</p>
    <p>Finally, be sure to consider your budget and what materials and finishes are available in Dubai. With a little bit of research, you'll be able to find the perfect combination of style and practicality for your home.</p>

    <h2>Traditional vs Modern Interior Designs in Dubai</h2>
    <p>When it comes to interior decoration, Dubai is a city that celebrates both traditional and modern design. If you're looking for inspiration, you'll find plenty of both styles in the city's hotels, restaurants and homes.</p>
    <p>Traditional decor draws on the region's rich cultural heritage, with features like ornate ceilings and intricately carved furniture. It often uses warm colors and lots of gold leaf, making it perfect for luxurious hotels and palaces.</p>
    <p>Modern design is all about clean lines and geometric shapes. It often uses cool colors and metallic finishes, making it a popular choice for contemporary restaurants and homes.</p>
    <p>Whichever style you choose, be sure to work with a qualified interior designer to bring your ideas to life.</p>

    <h2>Best Materials and Furnishings for Interior Decoration in Dubai</h2>
    <p>When it comes to interior decoration in Dubai, there are a few things to keep in mind. The first, and most important, is that the best materials and furnishings for your home can be found here. There's a huge variety to choose from, so you're sure to find something that fits your style and budget.</p>
    <p>Another thing to remember is that Dubai is known for its luxury hotels and resorts. This means that you can find high-end furniture and finishes that will make your home look like a million bucks. But if you're on a tight budget, don't worry—there are plenty of affordable options too.</p>
    <p>So whatever your style and budget, Dubai has something to offer you. So get inspired and start decorating!</p>

    <h2>The Importance of Lighting for Interior Design in Dubai</h2>
    <p>Lighting is essential in making your home feel special. You can use it to set the mood and create a unique atmosphere. When you shop for lighting fixtures in Dubai, it's important to include ambient, task lighting, and accent lighting.</p>
    <p>Ambient lighting is the most basic form of interior lighting and should be used to light up an entire room. Task lighting is for specific tasks like kitchen islands or reading nooks, and accent lights can be used to highlight pieces of art or architectural features throughout your home.</p>
    <p>Be sure to choose lighting that fits the style of the room and compliments your overall interior design. Don't forget about dimmers so you can adjust the light according to the situation. Incorporating mood lighting will make your home uniquely yours and create an atmosphere that you will love!</p>

    <h2>Adding the Right Wall Art, Carpets and Accessories to Your Home</h2>
    <p>Wall art, carpets and accessories are the three most important elements for creating a personal and unique style in your home. To find the perfect pieces for your home, you have to understand what works best in the space.</p>
    <p>When it comes to artwork, pick pieces that reflect your personality and personal style. Whether contemporary, modern or traditional art is your cup of tea, choose items that make you feel something. Cotton canvas prints are an easy way to get started!</p>
    <p>Carpets add texture and texture also adds character – if you don't want to invest in a rug then look through web stores such as Etsy where you can find amazing vintage pieces. Don't be afraid to experiment with bolder colors too.</p>
    <p>Finally, when it comes to decorative accessories, keep it minimal – too much stuff will make your room look cluttered so stick to pieces that work together or have similar design elements. Look for pieces made from natural materials like wood or stone for a rustic feel or opt for louder pops of color if you like something more vibrant!</p>

    <h2>Get Professional Help with Interior Decoration in Dubai</h2>
    <p>If you want to make sure your interior decoration project in Dubai looks professional, consider hiring an interior designer or decorator. Not only will they bring their expertise to the table, but they'll also be able to work with you on staying within budget while getting everything you need.</p>
    <p>Before you decide if a professional is right for you, make sure you visit showrooms and take advantage of online resources. There are so many amazing style options from traditional Arabesque elements to more modern luxury styles. If a professional is out of your budget, it may help to look at some examples for inspiration for creating the look and feel you want for your space.</p>
    <p>Be aware that in Dubai, the cost of hiring professionals can increase when it comes to incorporating custom pieces like furniture and window treatments as well as higher-end materials like wood floors and marble countertops. But if itemizing each piece isn't something that interests you, working with a designer could be the way to go. Think of it this way – if time and convenience are important factors in your decision-making process, hiring a pro might save both now while still protecting your wallet in the long run!</p>

    <h2>Conclusion</h2>
    <p>If you're looking for interior decoration inspiration, Dubai is a great place to start. The city is home to some of the best interior designers and decorators in the world, and there are a variety of different styles to choose from.</p>
    <p>Whether you're looking for traditional Arabic design, contemporary chic, or something in between, you're sure to find it in Dubai. So, what are you waiting for? Start planning your next interior design project today!</p>

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
