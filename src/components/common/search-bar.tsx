"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/src/components/ui/button";
import { Input } from "@/src/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/src/components/ui/select";
import { ChevronDown, Search } from "lucide-react";
import { useLanguage } from "@/src/contexts/LanguageContext";

interface SearchBarProps {
  className?: string;
}

export function SearchBar({ className = "" }: SearchBarProps) {
  const router = useRouter();
  const { t } = useLanguage();
  const [searchParams, setSearchParams] = useState({
    propertyType: "any",
    location: "any", 
    type: "buy",
    price: "any",
    bedrooms: "any"
  });

  const handleSearch = () => {
    const params = new URLSearchParams();
    
    // Always navigate to offPlans page with search parameters
    // Add location/search term as 'location' parameter (offPlans page maps this to 'title' filter)
    if (searchParams.location && searchParams.location !== "any" && searchParams.location !== "") {
      params.append("location", searchParams.location);
    }
    
    // Add property type if selected
    if (searchParams.propertyType && searchParams.propertyType !== "any") {
      params.append("property_type", searchParams.propertyType);
    }
    
    // Add price range if selected
    if (searchParams.price && searchParams.price !== "any") {
      // Parse price range (e.g., "500000-1000000" or "10000000+")
      if (searchParams.price.includes("-")) {
        const [min, max] = searchParams.price.split("-");
        params.append("min_price", min);
        params.append("max_price", max);
      } else if (searchParams.price.includes("+")) {
        const min = searchParams.price.replace("+", "");
        params.append("min_price", min);
      }
    }
    
    // Add bedrooms if selected
    if (searchParams.bedrooms && searchParams.bedrooms !== "any") {
      params.append("bedrooms", searchParams.bedrooms);
    }
    
    // Always navigate to offPlans page
    router.push(`/offPlanspremiumpropertyindubai?${params.toString()}`);
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div className={`w-full ${className}`}>
      <div className="bg-white/95 backdrop-blur-sm rounded-xl shadow-2xl border border-gray-200/50 p-2 sm:p-3 md:p-4 lg:p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-2 sm:gap-3 md:gap-4 items-stretch">
          {/* First Field: Buy / Rent / Offplan */}
          <div className="col-span-1 min-w-0">
            <Select
              value={searchParams.type}
              onValueChange={(value) => setSearchParams(prev => ({ ...prev, type: value }))}
            >
              <SelectTrigger className="w-full h-10 sm:h-11 md:h-12 lg:h-14 bg-white border-gray-300 text-gray-800 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 rounded-lg text-left text-sm sm:text-base">
                <SelectValue placeholder={t('buy.type')} />
              </SelectTrigger>
              <SelectContent className="bg-white text-gray-800 border-gray-200">
               
                <SelectItem value="buy" defaultValue="buy">{t('buy.buy')}</SelectItem>
                <SelectItem value="rent">{t('buy.rent')}</SelectItem>
                <SelectItem value="offplan">{t('offplans.offPlan')}</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Location */}
          <div className="col-span-1 min-w-0">
            <Input
              type="text"
              placeholder={t('buy.location')}
              value={searchParams.location === "any" ? "" : searchParams.location}
              onChange={(e) => setSearchParams(prev => ({ ...prev, location: e.target.value || "any" }))}
              onKeyDown={handleKeyPress}
              className="w-full h-10 sm:h-11 md:h-12 lg:h-14 bg-white border-gray-300 text-gray-800 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 rounded-lg text-left text-sm sm:text-base"
            />
          </div>

          {/* Property Type */}
          <div className="col-span-1 min-w-0">
            <Select
              value={searchParams.propertyType}
              onValueChange={(value) => setSearchParams(prev => ({ ...prev, propertyType: value }))}
            >
              <SelectTrigger className="w-full h-10 sm:h-11 md:h-12 lg:h-14 bg-white border-gray-300 text-gray-800 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 rounded-lg text-left text-sm sm:text-base">
                <SelectValue placeholder={t('buy.propertyType')} />
              </SelectTrigger>
              <SelectContent className="bg-white text-gray-800 border-gray-200">
                <SelectItem value="any">{t('buy.propertyType')}</SelectItem>
                <SelectItem value="apartment">{t('offplans.apartment')}</SelectItem>
                <SelectItem value="villa">{t('offplans.villa')}</SelectItem>
                <SelectItem value="townhouse">{t('offplans.townhouse')}</SelectItem>
                <SelectItem value="penthouse">{t('offplans.penthouse')}</SelectItem>
                <SelectItem value="studio">{t('offplans.studio')}</SelectItem>
                <SelectItem value="duplex">Duplex</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Price */}
          <div className="col-span-1 min-w-0">
            <Select
              value={searchParams.price}
              onValueChange={(value) => setSearchParams(prev => ({ ...prev, price: value }))}
            >
              <SelectTrigger className="w-full h-10 sm:h-11 md:h-12 lg:h-14 bg-white border-gray-300 text-gray-800 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 rounded-lg text-left text-sm sm:text-base">
                <SelectValue placeholder={t('search.priceRange')} />
              </SelectTrigger>
              <SelectContent className="bg-white text-gray-800 border-gray-200">
                <SelectItem value="any">{t('search.priceRange')}</SelectItem>
                <SelectItem value="0-500000">Under 500K AED</SelectItem>
                <SelectItem value="500000-1000000">500K - 1M AED</SelectItem>
                <SelectItem value="1000000-2000000">1M - 2M AED</SelectItem>
                <SelectItem value="2000000-5000000">2M - 5M AED</SelectItem>
                <SelectItem value="5000000-10000000">5M - 10M AED</SelectItem>
                <SelectItem value="10000000+">10M+ AED</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Bedrooms */}
          <div className="col-span-1 min-w-0">
            <Select
              value={searchParams.bedrooms}
              onValueChange={(value) => setSearchParams(prev => ({ ...prev, bedrooms: value }))}
            >
              <SelectTrigger className="w-full h-10 sm:h-11 md:h-12 lg:h-14 bg-white border-gray-300 text-gray-800 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 rounded-lg text-left text-sm sm:text-base">
                <SelectValue placeholder={t('offplans.bedrooms')} />
              </SelectTrigger>
              <SelectContent className="bg-white text-gray-800 border-gray-200">
                <SelectItem value="any">{t('offplans.bedrooms')}</SelectItem>
                <SelectItem value="studio">{t('offplans.studio')}</SelectItem>
                <SelectItem value="1">{t('offplans.oneBedroom')}</SelectItem>
                <SelectItem value="2">{t('offplans.twoBedrooms')}</SelectItem>
                <SelectItem value="3">{t('offplans.threeBedrooms')}</SelectItem>
                <SelectItem value="4">{t('offplans.fourBedrooms')}</SelectItem>
                <SelectItem value="5+">{t('offplans.fivePlusBedrooms')}</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Search Button */}
          <div className="col-span-1 md:col-span-2 lg:col-span-1">
            <Button
              onClick={handleSearch}
              className="w-full h-10 sm:h-11 md:h-12 lg:h-14 bg-gradient-to-r from-[#b91c1c] to-[#dc2626] hover:from-[#dc2626] hover:to-[#b91c1c] text-white font-semibold text-sm sm:text-base transition-all duration-300 shadow-lg hover:shadow-xl rounded-lg cursor-pointer"
            >
              <Search className="w-4 h-4 sm:w-5 sm:h-5 mr-1 sm:mr-2" />
              <span className="text-xs sm:text-base">Search</span>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
