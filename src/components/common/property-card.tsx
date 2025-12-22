import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "@/src/components/ui/card";
import NextImage from "next/image";
import { useRouter } from "next/navigation";
import { useLanguage } from "@/src/contexts/LanguageContext";
import { normalizeLocationName, createProjectSlug } from "@/src/lib/utils";
import { Bed, Bath, SquareGanttChart, MapPin } from "lucide-react";

interface PropertyData {
  id?: string | number;
  name?: string;
  property_type?: string;
  location?: {
    city?: string;
    community?: string;
  };
  newParam?: {
    price?: number;
        totalUnits?: number;
    bedroomMin?: number;
    bathroomMin?: number;
    size_min?: number;
  };
  photos?: string[];
  area_id?: string;

}

export default function PropertyCard({ data }: { data?: PropertyData }) {
    const router = useRouter();
    const { t, formatPrice, currencyIconSrc } = useLanguage();
    
    const locationName = normalizeLocationName(`${data?.location?.community ?? ""}${
      data?.location?.community && data?.location?.city ? ", " : ""
    }${data?.location?.city ?? ""}`);
    
    const propertyType = data?.property_type || "";
    const bedrooms = data?.newParam?.bedroomMin;
    const bathrooms = data?.newParam?.bathroomMin;
    const area = data?.newParam?.size_min;
    
  return (
    <Card className="group overflow-hidden bg-[#ececec] p-0 shadow-lg hover:shadow-xl transition-all duration-300 rounded-lg cursor-pointer border border-gray-200 h-full flex flex-col" onClick={() => router.push(`/offPlanspremiumpropertyindubai/${createProjectSlug(data?.name)}`)}>
      {/* Image Section - Rounded top corners */}
      <div className="relative w-full h-72 md:h-80 overflow-hidden flex-shrink-0">
        <NextImage
          src={data?.photos?.[0] ?? "/placeholder.jpg"}
          alt={`Image of ${data?.name}`}
          fill
          className="object-cover rounded-t-lg transition-transform duration-300 ease-in-out group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          priority={false}
          quality={75}
        />
        {/* Hover Overlay */}
        <div className="absolute inset-0 bg-[#ececec]/0 group-hover:bg-[#ececec]/30 transition-all duration-300 rounded-t-lg pointer-events-none z-10" />
        
        {/* Badge Top Left */}
        {data?.newParam?.totalUnits && (
          <div className="absolute top-4 left-4 bg-[#0a4b6f] text-white text-xs font-medium tracking-wider px-3 py-1.5 rounded-md uppercase shadow-lg z-20">
            {data.newParam.totalUnits} {t('common.units')}
          </div>
        )}
        
        {/* Price Badge - Bottom Left (Prominent) */}
        {data?.newParam?.price && (
          <div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur-sm text-[#1A202C] text-xl font-bold px-4 py-2 rounded-lg shadow-xl flex items-center gap-2 z-20">
            {currencyIconSrc && (
              <NextImage src={currencyIconSrc} alt="AED" width={20} height={20} />
          )}
            {formatPrice(data.newParam.price)}
        </div>
        )}
      </div>
      
      {/* Content Section - White Background */}
      <CardContent className="p-5 bg-white space-y-3 flex-1 flex flex-col">
        {/* Property Type/Category */}
        {propertyType && (
          <p className="text-sm text-gray-500 font-medium uppercase tracking-wider">
            {propertyType}
          </p>
        )}
        
        {/* Property Title */}
        <CardTitle className="text-xl md:text-2xl font-bold text-[#1A202C] group-hover:text-blue-900 transition-colors duration-300 leading-tight line-clamp-2">
          {data?.name ?? "Unnamed Property"}
        </CardTitle>
        
        {/* Location with Icon */}
        {locationName && (
          <div className="flex items-center gap-2 text-gray-600 group-hover:text-blue-900 transition-colors duration-300">
            <MapPin className="w-4 h-4 text-gray-400 group-hover:text-blue-900 transition-colors duration-300" />
            <p className="text-base font-normal">{locationName}</p>
          </div>
        )}
        
        {/* Property Details - Bedrooms, Bathrooms, Area */}
        {(bedrooms || bathrooms || area) && (
          <div className="flex items-center gap-6 pt-2 border-t border-gray-200">
            {bedrooms && (
              <div className="flex items-center gap-2 text-gray-700 group-hover:text-blue-900 transition-colors duration-300">
                <Bed className="w-5 h-5 text-gray-500 group-hover:text-blue-900 transition-colors duration-300" />
                <span className="text-base font-medium">Beds: {bedrooms}</span>
              </div>
            )}
            {bathrooms && (
              <div className="flex items-center gap-2 text-gray-700 group-hover:text-blue-900 transition-colors duration-300">
                <Bath className="w-5 h-5 text-gray-500 group-hover:text-blue-900 transition-colors duration-300" />
                <span className="text-base font-medium">Baths: {bathrooms}</span>
              </div>
            )}
            {area && (
              <div className="flex items-center gap-2 text-gray-700 group-hover:text-blue-900 transition-colors duration-300">
                <SquareGanttChart className="w-5 h-5 text-gray-500 group-hover:text-blue-900 transition-colors duration-300" />
                <span className="text-base font-medium">Sqft: {area.toLocaleString()}</span>
              </div>
            )}
          </div>
        )}
      </CardContent>
    </Card>
  );
}
