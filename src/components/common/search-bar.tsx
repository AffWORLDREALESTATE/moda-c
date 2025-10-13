"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/src/components/ui/button";
import { Input } from "@/src/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/src/components/ui/select";
import { ChevronDown, Search } from "lucide-react";

interface SearchBarProps {
  className?: string;
}

export function SearchBar({ className = "" }: SearchBarProps) {
  const router = useRouter();
  const [searchParams, setSearchParams] = useState({
    propertyType: "any",
    location: "any", 
    type: "any",
    price: "any",
    bedrooms: "any",
    refNumber: ""
  });

  const handleSearch = () => {
    const params = new URLSearchParams();
    
    // Add non-empty parameters
    Object.entries(searchParams).forEach(([key, value]) => {
      if (value && value !== "any" && value !== "") {
        // Map frontend keys to backend keys
        const backendKey = key === "propertyType" ? "property_type" : 
                          key === "refNumber" ? "title" : key;
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
      <div className="bg-white/95 backdrop-blur-sm rounded-xl shadow-2xl border border-gray-200/50 p-3 sm:p-4 md:p-5 lg:p-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-7 gap-2 sm:gap-3 md:gap-4 items-stretch">
          {/* First Field: Buy / Rent / Offplan */}
          <div className="col-span-1 min-w-0">
            <Select
              value={searchParams.type}
              onValueChange={(value) => setSearchParams(prev => ({ ...prev, type: value }))}
            >
              <SelectTrigger className="w-full h-12 md:h-12 lg:h-14 bg-white border-gray-300 text-gray-800 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 rounded-lg text-left">
                <SelectValue placeholder="Property Type" />
              </SelectTrigger>
              <SelectContent className="bg-white text-gray-800 border-gray-200">
                <SelectItem value="any">Property Type</SelectItem>
                <SelectItem value="buy">Buy</SelectItem>
                <SelectItem value="rent">Rent</SelectItem>
                <SelectItem value="offplan">Offplan</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Location */}
          <div className="col-span-1 min-w-0">
            <Select
              value={searchParams.location}
              onValueChange={(value) => setSearchParams(prev => ({ ...prev, location: value }))}
            >
              <SelectTrigger className="w-full h-12 md:h-12 lg:h-14 bg-white border-gray-300 text-gray-800 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 rounded-lg text-left">
                <SelectValue placeholder="Location" />
              </SelectTrigger>
              <SelectContent className="bg-white text-gray-800 border-gray-200">
                <SelectItem value="any">Location</SelectItem>
                <SelectItem value="downtown-dubai">Downtown Dubai</SelectItem>
                <SelectItem value="dubai-marina">Dubai Marina</SelectItem>
                <SelectItem value="business-bay">Business Bay</SelectItem>
                <SelectItem value="palm-jumeirah">Palm Jumeirah</SelectItem>
                <SelectItem value="jumeirah-village-circle">Jumeirah Village Circle</SelectItem>
                <SelectItem value="jumeirah-lake-towers">Jumeirah Lake Towers</SelectItem>
                <SelectItem value="damac-hills-2">Damac Hills 2</SelectItem>
                <SelectItem value="dubai-hills-estate">Dubai Hills Estate</SelectItem>
                <SelectItem value="meydan-city">Meydan City</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Property Type */}
          <div className="col-span-1 min-w-0">
            <Select
              value={searchParams.propertyType}
              onValueChange={(value) => setSearchParams(prev => ({ ...prev, propertyType: value }))}
            >
              <SelectTrigger className="w-full h-12 md:h-12 lg:h-14 bg-white border-gray-300 text-gray-800 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 rounded-lg text-left">
                <SelectValue placeholder=" Type" />
              </SelectTrigger>
              <SelectContent className="bg-white text-gray-800 border-gray-200">
                <SelectItem value="any">Type</SelectItem>
                <SelectItem value="apartment">Apartment</SelectItem>
                <SelectItem value="villa">Villa</SelectItem>
                <SelectItem value="townhouse">Townhouse</SelectItem>
                <SelectItem value="penthouse">Penthouse</SelectItem>
                <SelectItem value="studio">Studio</SelectItem>
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
              <SelectTrigger className="w-full h-12 md:h-12 lg:h-14 bg-white border-gray-300 text-gray-800 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 rounded-lg text-left">
                <SelectValue placeholder="Price Range" />
              </SelectTrigger>
              <SelectContent className="bg-white text-gray-800 border-gray-200">
                <SelectItem value="any">Price Range</SelectItem>
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
              <SelectTrigger className="w-full h-12 md:h-12 lg:h-14 bg-white border-gray-300 text-gray-800 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 rounded-lg text-left">
                <SelectValue placeholder="Bedrooms" />
              </SelectTrigger>
              <SelectContent className="bg-white text-gray-800 border-gray-200">
                <SelectItem value="any"> Bedrooms</SelectItem>
                <SelectItem value="studio">Studio</SelectItem>
                <SelectItem value="1">1 Bedroom</SelectItem>
                <SelectItem value="2">2 Bedrooms</SelectItem>
                <SelectItem value="3">3 Bedrooms</SelectItem>
                <SelectItem value="4">4 Bedrooms</SelectItem>
                <SelectItem value="5+">5+ Bedrooms</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Ref Number */}
          <div className="col-span-1 min-w-0">
            <Input
              type="text"
              placeholder="Reference Number"
              value={searchParams.refNumber}
              onChange={(e) => setSearchParams(prev => ({ ...prev, refNumber: e.target.value }))}
              onKeyPress={handleKeyPress}
              className="w-full h-12 md:h-12 lg:h-14 bg-white border-gray-300 text-gray-800 placeholder:text-gray-500 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 rounded-lg text-left"
            />
          </div>

          {/* Search Button */}
          <div className="w-full lg:w-auto lg:min-w-[140px] lg:col-span-1 sm:col-span-2 md:col-span-3">
            <Button
              onClick={handleSearch}
              className="w-full h-12 md:h-12 lg:h-14 bg-gradient-to-r from-[#0a4b6f] to-[#0d5a7f] hover:from-[#0d5a7f] hover:to-[#0a4b6f] text-white font-semibold text-base transition-all duration-300 shadow-lg hover:shadow-xl rounded-lg cursor-pointer"
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
