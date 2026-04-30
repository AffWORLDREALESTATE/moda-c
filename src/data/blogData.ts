
export const blogPosts: Record<string, any> = {
  "exclusive-dubai-penthouses-guide": {
    title: "Living in the Sky: A Guide to Dubai's Most Exclusive Penthouses",
    subtitle: "Experience the ultimate in luxury with our curated guide to the most prestigious penthouses in Dubai.",
    content: `
      <h2>The Zenith of Luxury Living</h2>
      <p>In Dubai, luxury knows no bounds, and nowhere is this more evident than in its spectacular penthouses. These "villas in the sky" offer unparalleled privacy, sprawling layouts, and views that take your breath away. From the heart of Downtown to the tips of the Palm Jumeirah, we explore the most coveted addresses for vertical luxury.</p>
    `,
    author: { name: "Modac Real Estate", bio: "Luxury specialists.", avatar: "/images/logo.png" },
    publishedAt: "Mar 15, 2026",
    readTime: "9 min read",
    category: "Luxury Living",
    tags: ["Penthouses", "Dubai", "Luxury"],
    featuredImage: "/images/luxury-penthouse.png",
  },
  "dubai-best-schools-family-guide": {
    title: "Dubai's Best Schools: A Guide for Families Moving to the City",
    subtitle: "Relocating with children? We've compiled a list of the top-rated international schools in Dubai.",
    content: `
      <h2>Choosing the Right Curriculum</h2>
      <p>One of the first questions families face when moving to Dubai is which curriculum to choose. The city offers a diverse range of options, including British, American, IB, and Indian curriculums.</p>
    `,
    author: { name: "Modac Real Estate", bio: "Family lifestyle experts.", avatar: "/images/logo.png" },
    publishedAt: "Mar 5, 2026",
    readTime: "10 min read",
    category: "Family Living",
    tags: ["Schools", "Dubai", "Family", "Relocation"],
    featuredImage: "/images/green-community.png",
  },
  "ai-future-dubai-real-estate": {
    title: "The Future of AI in Dubai Real Estate: Predicting Market Trends",
    subtitle: "How artificial intelligence is transforming the way we buy, sell, and manage property in Dubai.",
    content: `
      <h2>Revolutionizing Property Valuation</h2>
      <p>AI is bringing a new level of precision to property valuation in Dubai.</p>
    `,
    author: { name: "Modac Real Estate", bio: "PropTech visionaries.", avatar: "/images/logo.png" },
    publishedAt: "Feb 25, 2026",
    readTime: "8 min read",
    category: "Tech & Innovation",
    tags: ["AI", "Real Estate", "Future Tech", "Dubai"],
    featuredImage: "/images/analysis.webp",
  },
  "dubai-real-estate-market-q1-2026-performance": {
    title: "Dubai's Real Estate Market: Q1 2026 Performance and Q2 Outlook",
    subtitle: "A comprehensive look at how Dubai's property sector thrived in the first quarter of 2026 and what to expect in the coming months.",
    content: `
      <h2>Q1 2026: A Quarter of Records</h2>
      <p>The first quarter of 2026 has set a new benchmark for the Dubai real estate market.</p>
    `,
    author: { name: "Modac Real Estate", bio: "Premier real estate specialists.", avatar: "/images/logo.png" },
    publishedAt: "Apr 20, 2026",
    readTime: "8 min read",
    category: "Market Analysis",
    tags: ["Dubai", "Real Estate", "Q1 2026", "Market Report"],
    featuredImage: "/images/analysis.webp",
  },
  "top-5-emerging-luxury-neighborhoods-2026": {
    title: "Top 5 Emerging Luxury Neighborhoods in Dubai for 2026",
    subtitle: "Discover the new frontiers of luxury living in Dubai as we highlight five districts poised for significant growth this year.",
    content: `
      <h2>The Evolution of Luxury</h2>
      <p>While the Palm Jumeirah and Downtown Dubai remain iconic, 2026 is seeing a shift towards new luxury hubs.</p>
    `,
    author: { name: "Modac Real Estate", bio: "Premier real estate specialists.", avatar: "/images/logo.png" },
    publishedAt: "Apr 10, 2026",
    readTime: "7 min read",
    category: "Neighborhoods",
    tags: ["Dubai", "Luxury Living", "Neighborhoods", "2026 Trends"],
    featuredImage: "/images/green-community.png",
  },
  "golden-visa-regulations-impact-2026": {
    title: "The Impact of New Golden Visa Regulations on Dubai Property Demand",
    subtitle: "Understanding how the latest updates to the Golden Visa program are influencing long-term investment strategies in Dubai.",
    content: `
      <h2>A New Era of Residency</h2>
      <p>The Dubai government's recent refinements to the Golden Visa program have further solidified the city's appeal.</p>
    `,
    author: { name: "Modac Real Estate", bio: "Premier real estate specialists.", avatar: "/images/logo.png" },
    publishedAt: "Mar 25, 2026",
    readTime: "6 min read",
    category: "Investment",
    tags: ["Golden Visa", "Dubai", "Investment", "Regulations"],
    featuredImage: "/images/luxury-penthouse.png",
  },
};

export const getBlogPost = (slug: string) => {
  if (blogPosts[slug]) {
    return blogPosts[slug];
  }
  
  const title = slug
    ? slug
        .split("-")
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ")
    : "Dubai Real Estate Insights";

  return {
    title: title,
    subtitle: `Expert insights and comprehensive guide about ${title} in the Dubai real estate market.`,
    featuredImage: "/images/analysis.webp", // Default image
  };
};
