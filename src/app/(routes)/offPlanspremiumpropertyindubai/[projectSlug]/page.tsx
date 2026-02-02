import DetailPage from "@/src/view/offPlans/detailPage";
import { getPropertyBySlug } from "@/src/api/offPlans";
import type { Metadata } from "next";

type Props = {
  params: { projectSlug: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { projectSlug } = params;

  try {
    const data = await getPropertyBySlug(projectSlug);
    const property = data?.projects?.[0];

    if (!property) {
      return {
        title: "Property Not Found - Modac Real Estate",
        description: "Premium Real Estate Solutions in Dubai",
      };
    }

    const title = property.name || "Luxury Property";
    const description = property.description
      ? property.description.substring(0, 160) + "..."
      : "Discover this premium off-plan property in Dubai with Modac Real Estate.";
    const image = property.photos?.[0] || "/images/logo.png";
    const url = `https://modacproperties.com/offPlanspremiumpropertyindubai/${projectSlug}`;

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
      description: "Discover luxury properties and off-plan projects in Dubai.",
    };
  }
}

export default function OffPlaneDetails({ params }: Props) {
  const { projectSlug } = params;
  return (
    <div>
      <DetailPage slug={projectSlug} />
    </div>
  );
}
