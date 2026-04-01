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

  const fieldBase =
    "w-full h-11 md:h-12 lg:h-13 bg-white/10 border border-white/20 text-white placeholder:text-white/50 focus:ring-1 focus:ring-[#C9A96E]/60 focus:border-[#C9A96E]/60 rounded-lg text-sm backdrop-blur-sm transition-all duration-200 hover:bg-white/15 hover:border-white/35";

  return (
    <div className={`w-full ${className}`}>
      {/* Luxury glass-morphism search container */}
      <div
        className="rounded-2xl p-3 md:p-4"
        style={{
          background: "rgba(5, 15, 24, 0.6)",
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
          border: "1px solid rgba(201,169,110,0.22)",
          boxShadow: "0 24px 64px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.06)",
        }}
      >
        {/* Label row */}
        <div className="flex items-center gap-2 mb-3 px-1">
          <div className="h-px flex-1" style={{ background: "rgba(201,169,110,0.25)" }} />
          <span
            className="text-[10px] font-medium uppercase tracking-[0.3em]"
            style={{ color: "#C9A96E" }}
          >
            Find Your Property
          </span>
          <div className="h-px flex-1" style={{ background: "rgba(201,169,110,0.25)" }} />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-2 md:gap-3 items-stretch">
          {/* Buy / Rent / Off-plan */}
          <div className="col-span-1 min-w-0">
            <Select
              value={searchParams.type}
              onValueChange={(value) => setSearchParams(prev => ({ ...prev, type: value }))}
            >
              <SelectTrigger className={fieldBase}>
                <SelectValue placeholder={t('buy.type')} />
              </SelectTrigger>
              <SelectContent className="bg-[#0a1929] text-white border-white/15">
                <SelectItem value="buy">{t('buy.buy')}</SelectItem>
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
              className={fieldBase}
            />
          </div>

          {/* Property Type */}
          <div className="col-span-1 min-w-0">
            <Select
              value={searchParams.propertyType}
              onValueChange={(value) => setSearchParams(prev => ({ ...prev, propertyType: value }))}
            >
              <SelectTrigger className={fieldBase}>
                <SelectValue placeholder={t('buy.propertyType')} />
              </SelectTrigger>
              <SelectContent className="bg-[#0a1929] text-white border-white/15">
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
              <SelectTrigger className={fieldBase}>
                <SelectValue placeholder={t('search.priceRange')} />
              </SelectTrigger>
              <SelectContent className="bg-[#0a1929] text-white border-white/15">
                <SelectItem value="any">{t('search.priceRange')}</SelectItem>
                <SelectItem value="0-500000">Under 500K AED</SelectItem>
                <SelectItem value="500000-1000000">500K – 1M AED</SelectItem>
                <SelectItem value="1000000-2000000">1M – 2M AED</SelectItem>
                <SelectItem value="2000000-5000000">2M – 5M AED</SelectItem>
                <SelectItem value="5000000-10000000">5M – 10M AED</SelectItem>
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
              <SelectTrigger className={fieldBase}>
                <SelectValue placeholder={t('offplans.bedrooms')} />
              </SelectTrigger>
              <SelectContent className="bg-[#0a1929] text-white border-white/15">
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
              className="w-full h-11 md:h-12 lg:h-13 font-semibold text-sm transition-all duration-300 rounded-lg cursor-pointer flex items-center justify-center gap-2 hover:opacity-90 hover:scale-[1.02] active:scale-100"
              style={{
                background: "linear-gradient(135deg, #C9A96E 0%, #b08d4e 100%)",
                color: "#050f18",
                boxShadow: "0 4px 20px rgba(201,169,110,0.35)",
                border: "none",
              }}
            >
              <Search className="w-4 h-4 shrink-0" />
              <span>Search</span>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
