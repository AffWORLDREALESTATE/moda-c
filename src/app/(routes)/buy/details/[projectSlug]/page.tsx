import DetailPage from "@/src/view/buy/detailPage";
import { getAllBuyPropertiesBySlug } from "@/src/api/buy";
import type { Metadata } from "next";

type Props = {
  params: { projectSlug: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { projectSlug } = params;

  try {
    const data = await getAllBuyPropertiesBySlug(projectSlug);
    const property = data?.properties?.[0];

    if (!property) {
      return {
        title: "Property Not Found - Modac Real Estate",
        description: "Premium Real Estate Solutions in Dubai",
      };
    }

    const title = property.title || property.name || "Luxury Property for Sale";
    const description = property.description
      ? property.description.substring(0, 160) + "..."
      : "Discover this premium property for sale in Dubai with Modac Real Estate.";
    const image = property.photos?.[0] || "/images/logo.png";
    const url = `https://modacproperties.com/buy/details/${projectSlug}`;

    return {
      title: `${title} - Modac Real Estate`,
      description,
      openGraph: {
        title,
        description,
        url,
        siteName: "Modac Real Estate",
        images: [
          {
            url: image,
            width: 1200,
            height: 630,
            alt: title,
          },
        ],
        locale: "en_US",
        type: "website",
      },
      twitter: {
        card: "summary_large_image",
        title,
        description,
        images: [image],
      },
    };
  } catch (error) {
    console.error("Error generating metadata:", error);
    return {
      title: "Modac Real Estate - Premium Properties in Dubai",
      description: "Discover luxury properties for sale in Dubai.",
    };
  }
}

export default function BuyDetails({ params }: Props) {
  const { projectSlug } = params;
  return (
    <div>
      <DetailPage slug={projectSlug} />
    </div>
  );
}
