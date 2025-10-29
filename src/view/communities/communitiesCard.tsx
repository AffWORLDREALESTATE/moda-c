import { Card, CardContent } from "@/src/components/ui/card";
import { cn, normalizeLocationName } from "@/src/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

interface CommunityData {
  city: string;
  photos: string[];
  latitude: number;
  longitude: number;
  name: string;
  sell_properties_count: number;
  rent_properties_count: number;
  projects_count: number;
  pool_projects_count: number;
  total_count: number;
  assigned_agents: any[];
  assigned_order?: number | null;
  order_photo?: string | null;
  order_description?: string | null;
  order_created_at?: string | null;
  order_updated_at?: string | null;
}

export default function CommunitiesCard({ data }: { data: CommunityData }) {
  const router = useRouter();

  const handleClick = () => {
    // Navigate to buy page with area filter
    const normalizedName = normalizeLocationName(data?.name);
    router.push(`/buy?location=${encodeURIComponent(normalizedName)}`);
  };
  
  const normalizedName = normalizeLocationName(data?.name);
  
  // Use specific image for Dubai Island
  const getImageSrc = () => {
    if (normalizedName.toLowerCase() === "dubai island" || data?.name?.toLowerCase() === "deira") {
      return "/images/main-dubai-islands-0217eaed95-3700-4cd4-ae39-f7e4130d8163.jpg";
    }
    return data?.order_photo || data?.photos?.[0] || "/images/placeholder.jpg";
  };

  return (
    <Card
      className="relative w-full h-[420px] rounded-3xl overflow-hidden shadow-2xl group border border-white/10 cursor-pointer bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all duration-500 hover:shadow-3xl hover:-translate-y-2"
      onClick={handleClick}
    >
      <CardContent className="p-0 h-full relative">
        {/* Main Image */}
        <div className="relative h-3/5 overflow-hidden">
          <Image
            src={getImageSrc()}
            alt={`Image of ${normalizedName}`}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-110"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            priority
          />
          
          {/* Luxury Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
          
        </div>

        {/* Content Section */}
        <div className="h-2/5 bg-gradient-to-br from-white via-[#F8F6F0] to-white p-6 flex flex-col justify-between">
          {/* Header */}
          <div>
            <h3 className="text-xl font-light font-serif text-gray-800 mb-3 leading-tight">
              {normalizedName}
            </h3>
          </div>

          {/* Explore Link */}
          <Link
            href={`/buy?location=${encodeURIComponent(normalizedName)}`}
            className={cn(
              "relative pb-1 transition-all duration-300 text-[#0a4b6f] uppercase text-sm font-light tracking-wider group-hover:text-[#1a6b8f]",
              "after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[1px] after:w-0",
              "after:bg-[#0a4b6f] after:transition-all after:duration-300 group-hover:after:w-full"
            )}
            onClick={(e) => e.stopPropagation()}
          >
            View Properties
          </Link>
        </div>

        {/* Luxury Border Effect */}
        <div className="absolute inset-0 rounded-3xl border border-transparent bg-gradient-to-r from-[#0a4b6f]/20 via-transparent to-[#1a6b8f]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      </CardContent>
    </Card>
  );
}
