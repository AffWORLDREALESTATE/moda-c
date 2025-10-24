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
    
    // Add non-empty parameters
    Object.entries(searchParams).forEach(([key, value]) => {
      if (value && value !== "any" && value !== "") {
        // Map frontend keys to backend keys
        const backendKey = key === "propertyType" ? "property_type" : key;
        params.append(backendKey, value);
      }
    });

  // Add listing type based on the "type" field
  if (searchParams.type === "rent") {
      params.append("listing_type", "RENT");
      router.push(`/rent?${params.toString()}`);
    } else if (searchParams.type === "buy") {
      params.append("listing_type", "BUY");
      router.push(`/buy?${params.toString()}`);
  } else if (searchParams.type === "offplan") {
    router.push(`/offPlans?${params.toString()}`);
    } else {
      // Default to buy page
      router.push(`/buy?${params.toString()}`);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div className={`w-full ${className}`}>
      <div className="bg-white/95 backdrop-blur-sm rounded-xl shadow-2xl border border-gray-200/50 p-3 sm:p-4 lg:p-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-3 sm:gap-4 items-stretch">
          {/* First Field: Buy / Rent / Offplan */}
          <div className="col-span-1 min-w-0">
            <Select
              value={searchParams.type}
              onValueChange={(value) => setSearchParams(prev => ({ ...prev, type: value }))}
            >
              <SelectTrigger className="w-full h-11 sm:h-12 lg:h-14 bg-white border-gray-300 text-gray-800 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 rounded-lg text-left">
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
              onKeyPress={handleKeyPress}
              className="w-full h-11 sm:h-12 lg:h-14 bg-white border-gray-300 text-gray-800 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 rounded-lg text-left"
            />
          </div>

          {/* Property Type */}
          <div className="col-span-1 min-w-0">
            <Select
              value={searchParams.propertyType}
              onValueChange={(value) => setSearchParams(prev => ({ ...prev, propertyType: value }))}
            >
              <SelectTrigger className="w-full h-11 sm:h-12 lg:h-14 bg-white border-gray-300 text-gray-800 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 rounded-lg text-left">
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
              <SelectTrigger className="w-full h-11 sm:h-12 lg:h-14 bg-white border-gray-300 text-gray-800 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 rounded-lg text-left">
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
              <SelectTrigger className="w-full h-11 sm:h-12 lg:h-14 bg-white border-gray-300 text-gray-800 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 rounded-lg text-left">
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
          <div className="col-span-1 sm:col-span-2 lg:col-span-1">
            <Button
              onClick={handleSearch}
              className="w-full h-11 sm:h-12 lg:h-14 bg-gradient-to-r from-[#b91c1c] to-[#dc2626] hover:from-[#dc2626] hover:to-[#b91c1c] text-white font-semibold text-base transition-all duration-300 shadow-lg hover:shadow-xl rounded-lg cursor-pointer"
            >
              <Search className="w-5 h-5 mr-2" />
              Search
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
