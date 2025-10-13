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
import { useParams } from "next/navigation";

// Mock data - in a real app, this would come from your CMS or database
const blogPosts = {
  "interior-design-trends-dubai-luxury-residences": {
    title: "Guide to Interior Design Trends in Dubai Luxury Residences",
    subtitle: "Discover the latest interior design trends shaping Dubai's luxury residences and learn how to create stunning spaces that reflect the city's opulent lifestyle.",
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
  },
  "dubai-hidden-gems-exclusive-neighborhoods": {
    title: "Dubai's Hidden Gems: Guide to Exclusive Neighborhoods",
    subtitle: "Explore Dubai's most exclusive neighborhoods and discover hidden gems that offer unparalleled luxury living in the city of dreams.",
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
  },
  "dubai-premier-real-estate-investment-guide": {
    title: "Your Guide to Dubai's Premier Real Estate Investment",
    subtitle: "Discover the top 10 areas for property investment in Dubai and explore lucrative opportunities in the world's most dynamic real estate market.",
  content: `
      <h2>Benefits of Investing in Dubai Real Estate</h2>
      <p>The United Arab Emirates (UAE) is a destination of choice for foreign investors looking to invest in real estate. Dubai is the largest and best-known city in the Persian Gulf. It offers foreign investors a variety of neighbourhoods where they can find properties to suit their aspirations.</p>
      <p>Living in Dubai offers foreign investors a number of advantages that make the "city of a thousand and one nights" an attractive destination for property investment.</p>
      <p>A top Real Estate destination, Dubai is known for its luxury lifestyle and world-class infrastructure. With a booming economy and a stable political environment, investors worldwide are drawn to Dubai's lucrative property market.</p>
      <p>Choosing the right investment can, however, be challenging with so many options. A real estate consultancy will provide valuable insights to those looking to invest in Dubai's dynamic real estate market in this article, which explores the top 10 areas for property investment.</p>
      <p>The following article will help you make informed decisions and maximize your returns in Dubai's flourishing property market, regardless of your level of experience.</p>

      <h2>Top 10 Areas for Property Investment in Dubai</h2>

      <h3>1. Downtown Dubai</h3>
      <p>Downtown Dubai ranks highly among the top 10 areas for property investment in Dubai, offering an attractive blend of luxury living and lucrative opportunities. The district's potential is due to its strategic location, stunning architecture, and robust infrastructure.</p>
      <p>With a diverse range of residential, commercial, and mixed-use properties, investors can capitalise on Downtown Dubai's solid rental yields, high capital appreciation, and steady demand from affluent tenants and discerning buyers.</p>

      <h3>2. Dubai Marina</h3>
      <p>With its stunning waterfront location, Dubai Marina is a sought-after destination for property investment. The area offers a mix of residential towers, villas, and commercial properties.</p>
      <p>Investors can expect high rental demand due to the marina lifestyle, excellent amenities, and vibrant nightlife. Additionally, its strategic location near popular attractions and business hubs adds significant investment value.</p>

      <h3>3. Business Bay</h3>
      <p>Business Bay is a dynamic commercial and residential district next to Downtown Dubai. The area boasts high-rise office buildings, luxurious apartments, and hotels. Its strategic location and excellent connectivity make it a prime choice for real estate investment in commercial and residential properties.</p>

      <h3>4. Meydan City</h3>
      <p>Meydan City is an emerging development focused on creating a sustainable, eco-friendly community. The area features a mix of residential, commercial, and leisure properties, with a strong emphasis on green spaces and modern infrastructure.</p>
      <p>Investors can leverage the area's growth potential and attractive property prices to secure long-term rental income and capital growth.</p>

      <h3>5. Jumeirah Village Circle</h3>
      <p>Are you searching for a calm living area? If yes, then Jumeirah Village Circle is the supreme option. This community was developed in 2005; it's popular for its vast green areas and mid-rise buildings, making beautiful landscapes across its areas.</p>
      <p>It also includes various types of units, giving you different choices to pick from the best for you. Besides, everything you need for a comfortable residency is supported inside the community.</p>

      <h3>6. Palm Jumeirah</h3>
      <p>Whether you're searching for a villa or an apartment to buy, Palm Jumeirah is surely an area you should consider. This matchless man-made palm offers you a distinct living community with numerous services around, starting from the essential needs to the leisure ones.</p>
      <p>You will find residential towers, villa communities, and mid-rise buildings with modern designs and amenities. Besides, you are going to have direct access to many beaches and resorts so you can have quality time whenever you want.</p>
      <p>In addition, in case you're seeking a lavish stay in a spacious home with your family, Palm Jumeirah offers unparalleled luxury living.</p>

      <h3>7. Jumeirah Lake Towers</h3>
      <p>For those who prefer living in high towers, Jumeirah Lake Towers (JLT) is tailored for you. It's a lush community popular for its amazing towers, lining a number of beautiful man-made lakes.</p>
      <p>It's divided into 26 clusters where each has 3 fascinating towers, enabling you to easily find the unit you aspire for. Additionally, you are going to enjoy the charming views of the greenery as the community is home to a big park called JLT Park.</p>
      <p>Choosing JLT means that you will relish a waterfront stay, a pedestrian-friendly community, quick access to various services, and most importantly affordable home prices. You can't go wrong with this outstanding community.</p>
      <p><strong>Location:</strong> It's located opposite Dubai Marina, on Sheikh Zayed road, Dubai.</p>

      <h3>8. Damac Hills 2</h3>
      <p>How about escaping the hustle and bustle of the city and living in a clean and calm atmosphere? This sounds perfect; Damac Hills 2 offers you such a mindblowing and unique residential setting.</p>
      <p>It's nestled away from the centre of the city at the south side of Dubailand, ensuring you a lifestyle full of serenity. Besides, the whole community is designed to be eco-friendly so it includes vast areas of greenery and water features to enjoy the nature vibes.</p>
      <p>You can choose between lavish apartments, villas, or townhouses; however, all of them have high-quality finishings and modern interiors.</p>
      <p><strong>Location:</strong> It's located off Jebel Ali – Lehbab road, Dubai.</p>

      <h3>9. Dubai Hills Estate</h3>
      <p>How about living by the stunning scenery of the golf courses? This is awesome! Dubai Hills Estate is a lavish residential area, offering you a premium living lifestyle. The units here line the spacious golf courses so you will wake up to undisturbed views of greenery.</p>
      <p>Dubai Hills Estate is at an approximate distance to Downtown Dubai, giving you effortless access to the amenities in the heart of the city. Besides, you will find a variety of services inside the community as your comfort is guaranteed.</p>
      <p>When it comes to the fun side, this gem is home to Dubai Hills Golf Club, one of the finest golf courses where you can head there and enjoy a game with your friends.</p>

      <h3>10. Dubai Hills Estate (Continued)</h3>
      <p>This master-planned community continues to attract investors and residents alike with its perfect blend of luxury living and natural beauty. The estate features world-class amenities, including shopping centers, schools, and healthcare facilities, making it an ideal choice for families and investors seeking long-term value.</p>

      <h2>Investment Strategies for Dubai Real Estate</h2>
      <p>When investing in Dubai's real estate market, it's essential to consider various strategies that can maximize your returns. From off-plan properties to ready-to-move-in units, each investment approach offers unique advantages and considerations.</p>

      <h2>Market Trends and Future Outlook</h2>
      <p>Dubai's real estate market continues to show strong growth potential, driven by government initiatives, infrastructure development, and increasing foreign investment. Understanding market trends and future projections is crucial for making informed investment decisions.</p>

      <h2>Legal Framework and Regulations</h2>
      <p>Dubai's investor-friendly legal framework, including freehold ownership rights for foreigners in designated areas, makes it an attractive destination for international investors. Understanding the legal aspects of property ownership is essential for successful investment.</p>

    <h2>Conclusion</h2>
      <p>Dubai's real estate market offers unparalleled opportunities for investors seeking both capital appreciation and rental income. With its world-class infrastructure, strategic location, and investor-friendly policies, Dubai continues to attract global investment capital.</p>
      <p>Whether you're looking for luxury residential properties, commercial investments, or off-plan developments, Dubai's diverse market has something to offer every type of investor. The key to success lies in thorough research, understanding market dynamics, and working with experienced real estate professionals.</p>

      <p><strong>Ready to invest in Dubai's premier real estate?</strong> Contact Modac Real Estate today to explore our exclusive investment opportunities and let our expert team guide you through the process of building your property portfolio in the world's most dynamic real estate market.</p>
  `,
  author: {
          name: "Modac Real Estate",
    bio: "Premier real estate specialists assisting investors and property owners navigate Dubai's flourishing property marketplace.",
      avatar: "/images/logo.png",
    },
    publishedAt: "January 5, 2025",
    readTime: "12 min read",
    category: "Investment",
    tags: ["Dubai", "Real Estate Investment", "Property", "Investment Guide"],
    featuredImage: "/images/property3.jpeg",
  },
};

export default function DetailsBlog() {
  const params = useParams();
  const slug = params?.slug as string;
  
  const blogPost = blogPosts[slug as keyof typeof blogPosts];
  
  if (!blogPost) {
    return (
      <div className="min-h-screen bg-background">
        <section className="pt-32 pb-12 px-4 bg-[#141442]">
          <div className=" mx-auto text-center">
            <h1 className="text-5xl font-medium mb-6 text-white font-serif font-bold">
              Blog Not Found
            </h1>
          </div>
        </section>
        <div className="max-w-5xl mx-auto px-6 mt-16 text-center">
          <h1 className="text-4xl font-serif font-bold mb-4">
            The blog post you're looking for doesn't exist.
          </h1>
          <Link href="/blog">
            <Button className="mt-4">Back to Blog</Button>
          </Link>
        </div>
      </div>
    );
  }

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
          {blogPost.title}
        </h1>
        <p className="text-center text-xl font-mono mt-11">{blogPost.publishedAt}</p>
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
