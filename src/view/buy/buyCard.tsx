"use client"

import { Button } from "@/src/components/ui/button"
import { Card, CardContent } from "@/src/components/ui/card"
import { Bath, Bed, Heart, SquareGanttChart, MapPin } from "lucide-react"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { useLanguage } from "@/src/contexts/LanguageContext"
import { normalizeLocationName, createProjectSlug } from "@/src/lib/utils"

interface PropertyData {
  id?: string | number
  title?: string
  price?: number
  bedRooms?: number
  bathrooms?: number | string
  size?: number | string
  propertyId?: string
  photos?: string[]
  location?: {
    city?: string
    community?: string
    sub_community?: string
  }
  ownPortal_agent_Id?: string
  agent?: {
    name?: string
    email?: string
    phone?: string
    avatar?: string
  }
}

interface BuyCardProps {
  data?: PropertyData
  onFavorite?: (item: PropertyData) => void
}

export function BuyCard({ data, onFavorite }: BuyCardProps) {
  const router = useRouter()
  const { formatPrice, t, currencyIconSrc } = useLanguage()
  const handleFavorite = () => {
    if (data && onFavorite) {
      onFavorite(data)
    }
  }

  if (!data) {
    return (
      <Card className="relative overflow-hidden rounded-none shadow-sm bg-white p-0 border">
        <CardContent className="p-6 text-center text-gray-500">
          No property data available
        </CardContent>
      </Card>
    )
  }

  const imageUrl = data.photos?.[0] || "/placeholder.svg?height=320&width=400"
  const locationName = normalizeLocationName([
    data.location?.community,
    data.location?.sub_community
  ].filter(Boolean).join(", "))

  const formattedPrice = data.price
    ? formatPrice(data.price)
    : t('common.priceOnRequest')

  return (
    <Card className="group relative overflow-hidden bg-[#ececec] p-0 shadow-lg hover:shadow-xl transition-all duration-300 rounded-lg cursor-pointer border border-gray-200 h-full flex flex-col" onClick={() => router.push(`/buy/details/${createProjectSlug(data.title)}`)}>
      {/* Image Section - Rounded top corners */}
      <div className="relative w-full h-72 md:h-80 overflow-hidden flex-shrink-0">
        <Image
          src={imageUrl}
          alt={data?.title || "Property image"}
          fill
          className="object-cover rounded-t-lg transition-transform duration-300 ease-in-out group-hover:scale-105"
        />
        {/* Hover Overlay */}
        <div className="absolute inset-0 bg-[#ececec]/0 group-hover:bg-[#ececec]/30 transition-all duration-300 rounded-t-lg pointer-events-none z-10" />
        
        {/* Badges Top Left */}
        <div className="absolute top-4 left-4 flex gap-2 z-20">
          <span className="bg-[#0a4b6f] text-white px-3 py-1.5 text-xs font-medium tracking-wider uppercase rounded-md shadow-lg">
            {t('common.forSale')}
          </span>
          <span className="bg-white/95 backdrop-blur-sm text-gray-800 px-3 py-1.5 text-xs font-medium tracking-wider uppercase rounded-md shadow-lg">
            {t('common.available')}
          </span>
        </div>
        
        {/* Price Badge - Bottom Left (Prominent) */}
        {data.price && (
          <div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur-sm text-[#1A202C] text-xl font-bold px-4 py-2 rounded-lg shadow-xl flex items-center gap-2 z-20">
            {currencyIconSrc && (
              <Image src={currencyIconSrc} alt="AED" width={20} height={20} />
            )}
            {formattedPrice}
          </div>
        )}
        
        {/* Heart Icon Top Right */}
        <Button
          variant="ghost"
          size="icon"
          className="absolute top-4 right-4 text-white bg-black/30 hover:bg-red-600/90 rounded-full transition-colors duration-300 z-20"
          onClick={(e) => {
            e.stopPropagation();
            handleFavorite();
          }}
        >
          <Heart className="w-5 h-5" />
          <span className="sr-only">Add to favorites</span>
        </Button>
      </div>

      {/* Content Section - White Background */}
      <CardContent className="p-5 bg-white space-y-3 flex-1 flex flex-col">
        {/* Property Type/Category - if available */}
        {data.property_type && (
          <p className="text-sm text-gray-500 font-medium uppercase tracking-wider">
            {data.property_type}
          </p>
        )}
        
        {/* Property Title */}
        <h3 className="text-xl md:text-2xl font-bold text-[#1A202C] group-hover:text-blue-900 transition-colors duration-300 leading-tight line-clamp-2">
            {data?.title}
          </h3>

        {/* Location with Icon */}
        {locationName && (
          <div className="flex items-center gap-2 text-gray-600 group-hover:text-blue-900 transition-colors duration-300">
            <MapPin className="w-4 h-4 text-gray-400 group-hover:text-blue-900 transition-colors duration-300" />
            <p className="text-base font-normal">{locationName}</p>
        </div>
        )}

        {/* Property Details - Bedrooms, Bathrooms, Area */}
        {(data?.bedRooms || data?.bathrooms || data?.size) && (
          <div className="flex items-center gap-6 pt-2 border-t border-gray-200">
            {data?.bedRooms && (
              <div className="flex items-center gap-2 text-gray-700 group-hover:text-blue-900 transition-colors duration-300">
                <Bed className="w-5 h-5 text-gray-500 group-hover:text-blue-900 transition-colors duration-300" />
                <span className="text-base font-medium">Beds: {data.bedRooms}</span>
            </div>
            )}
            {data?.bathrooms && (
              <div className="flex items-center gap-2 text-gray-700 group-hover:text-blue-900 transition-colors duration-300">
                <Bath className="w-5 h-5 text-gray-500 group-hover:text-blue-900 transition-colors duration-300" />
                <span className="text-base font-medium">Baths: {data.bathrooms}</span>
            </div>
            )}
            {data?.size && (
              <div className="flex items-center gap-2 text-gray-700 group-hover:text-blue-900 transition-colors duration-300">
                <SquareGanttChart className="w-5 h-5 text-gray-500 group-hover:text-blue-900 transition-colors duration-300" />
                <span className="text-base font-medium">Sqft: {typeof data.size === 'string' ? data.size : data.size.toLocaleString()}</span>
              </div>
            )}
          </div>
        )}
      </CardContent>
    </Card>
  )
}
