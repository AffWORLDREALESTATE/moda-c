"use client";
import { getAllProperties } from "@/src/api/offPlans";
import { Button } from "@/src/components/ui/button";
import { Input } from "@/src/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/src/components/ui/select";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/src/components/ui/dialog";
import { cn, normalizeLocationName } from "@/src/lib/utils";
import OffPlanCard from "@/src/view/offPlans/offPlanCard";
import Pagination from "@/src/components/common/Pagination";
import { Icon } from "@iconify/react";
import { Loader, X, Search } from "lucide-react";
import { useEffect, useState, useCallback, useMemo, Suspense } from "react";
import { api } from "@/src/lib/axios";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useLanguage } from "@/src/contexts/LanguageContext";
import { translateProperties } from "@/src/lib/translate";

const PROPERTY_TYPES = [
  "APARTMENT",
  "PENTHOUSE",
  "TOWNHOUSE",
  "VILLA",
];

const PRICE_OPTIONS = [
  "250000",
  "500000",
  "750000",
  "1000000",
  "1500000",
  "2000000",
  "2500000",
  "3000000",
  "4000000",
  "5000000",
  "7500000",
  "10000000",
  "15000000",
  "20000000",
  "30000000",
  "40000000",
  "50000000",
  "60000000",
  "70000000",
  "80000000",
  "90000000",
  "100000000",
];

function OffPlansPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const { t, currentLanguage } = useLanguage();

  // Constants with translations
  const COMPLETION_STATUS_OPTIONS = [
    { label: t('offplans.completionStatus'), value: "all" },
    { label: t('offplans.completedSecondary'), value: "completed" },
    { label: t('offplans.offPlanSecondary'), value: "off_plan" },
    { label: t('offplans.completedPrimary'), value: "completed_primary" },
    { label: t('offplans.offPlanPrimary'), value: "off_plan_primary" },
  ];

  const PROPERTY_TYPE_OPTIONS = [
    { label: t('offplans.propertyType'), value: "all" },
    { label: t('offplans.apartment'), value: "apartment" },
    { label: t('offplans.villa'), value: "villa" },
    { label: t('offplans.townhouse'), value: "townhouse" },
    { label: t('offplans.penthouse'), value: "penthouse" },
    { label: t('offplans.studio'), value: "studio" },
  ];

  const BEDROOM_OPTIONS = [
    { label: t('offplans.bedrooms'), value: "all" },
    { label: t('offplans.studio'), value: "0" },
    { label: t('offplans.oneBedroom'), value: "1" },
    { label: t('offplans.twoBedrooms'), value: "2" },
    { label: t('offplans.threeBedrooms'), value: "3" },
    { label: t('offplans.fourBedrooms'), value: "4" },
    { label: t('offplans.fivePlusBedrooms'), value: "5" },
  ];

  const BATHROOM_OPTIONS = [
    { label: t('offplans.bathrooms'), value: "all" },
    { label: t('offplans.oneBathroom'), value: "1" },
    { label: t('offplans.twoBathrooms'), value: "2" },
    { label: t('offplans.threeBathrooms'), value: "3" },
    { label: t('offplans.fourBathrooms'), value: "4" },
    { label: t('offplans.fivePlusBathrooms'), value: "5" },
  ];

  const YEAR_OPTIONS = [
    { label: t('offplans.year'), value: "all" },
    { label: "2024", value: "2024" },
    { label: "2025", value: "2025" },
    { label: "2026", value: "2026" },
    { label: "2027", value: "2027" },
    { label: "2028", value: "2028" },
    { label: "2029", value: "2029" },
    { label: "2030", value: "2030" },
    { label: "2031", value: "2031" },
    { label: "2032", value: "2032" },
    { label: "2033", value: "2033" },
    { label: "2034", value: "2034" },
    { label: "2035", value: "2035" },
  ];

// Clean location names coming from URL/inputs (e.g. remove things in brackets)
const sanitizeLocationSearch = (value: string): string => {
  if (!value) return "";
  // Remove anything in parentheses and extra whitespace
  const withoutBrackets = value.split("(")[0];
  return withoutBrackets.replace(/\s+/g, " ").trim();
};

  const [property, setProperty] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [showFilters, setShowFilters] = useState(false);
  const [developers, setDevelopers] = useState([]);
  const [developerSearch, setDeveloperSearch] = useState("");
  const [searchingDevelopers, setSearchingDevelopers] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [totalProperties, setTotalProperties] = useState(0);

  // Filter states - properly decode URL parameters for all devices
  const [filters, setFilters] = useState({
    type: "off_plan",
    title: searchParams?.get('location')
      ? sanitizeLocationSearch(decodeURIComponent(searchParams.get('location') || ""))
      : "",
    property_type: (searchParams?.get('property_type') || "all").toLowerCase(),
    min_price: searchParams?.get('min_price') || "any",
    max_price: searchParams?.get('max_price') || "any",
    completion_status: "all",
    developer_id: "any",
    bedrooms: searchParams?.get('bedrooms') || "any",
    bathrooms: "any",
    handover_year: "any",
  });

  const fetchproperty = useCallback(async (page = 1) => {
    setLoading(true);

    const queryParams = new URLSearchParams({
      sort_by: "total_count",
      sort_order: "desc",
      page: page.toString(),
      size: "24",
    });

    // Add filter parameters
    Object.entries(filters).forEach(([key, value]) => {
      if (value && value !== "any" && value !== "all" && value !== "") {
        // Map 'title' to 'community' for location/community filtering (same as buy page)
        const backendKey = key === 'title' ? 'community' : key;
        // Convert property_type to uppercase for backend API
        const backendValue = key === 'property_type' ? value.toUpperCase() : value;
        queryParams.append(backendKey, backendValue);
      }
    });

    try {
      console.log("OffPlan Filters:", filters);
      console.log("OffPlan API URL:", `/properties/projects?${queryParams.toString()}`);
      const res = await getAllProperties(queryParams.toString());
      console.log("OffPlan API Response:", res);
      console.log("Total properties:", res?.total);
      console.log("Current page:", page);
      console.log("Properties received:", res?.projects?.length);
      
      // Translate properties based on current language
      const rawProperties = res?.projects || [];
      const translatedProperties = await translateProperties(rawProperties, currentLanguage.code);
      
      // Client-side filtering: Filter by property type if specified
      let filteredProperties = translatedProperties;
      if (filters.property_type && filters.property_type !== "any" && filters.property_type !== "all") {
        filteredProperties = filteredProperties.filter((property: any) => {
          // Normalize property type from various possible fields (same logic as detailPage)
          const fromNewParam = property?.newParam?.property_type ?? property?.newParam?.type;
          const fromRoot = property?.property_type ?? property?.type;
          
          // Backend field: propertyTypes (often an array)
          const fromArray = property?.newParam?.propertyTypes ?? property?.propertyTypes;
          
          // Match the filter property type (normalized to lowercase)
          const filterType = filters.property_type.toLowerCase().trim();
          
          // Check exact match first (most common case)
          if (fromNewParam || fromRoot) {
            const propertyType = (fromNewParam || fromRoot || "")
              .toString()
              .toLowerCase()
              .trim();
            if (propertyType === filterType) return true;
          }
          
          // Check if propertyTypes array contains the filter type
          if (Array.isArray(fromArray) && fromArray.length > 0) {
            const matches = fromArray.some((v: any) => {
              const typeValue = typeof v === "string" ? v.trim().toLowerCase() : "";
              return typeValue === filterType;
            });
            if (matches) return true;
          } else if (typeof fromArray === "string") {
            const arrayStr = fromArray.trim().toLowerCase();
            if (arrayStr === filterType) return true;
          }
          
          return false;
        });
      }
      
      // Client-side filtering: If there's a location/community filter, ensure exact matching
      if (filters.title && filters.title.trim() !== "") {
        const rawSearch = filters.title.toLowerCase().trim();
        const cleanedSearch = sanitizeLocationSearch(rawSearch);
        const searchTerm = cleanedSearch;
        const normalizedSearchTerm = normalizeLocationName(cleanedSearch).toLowerCase();
        
        filteredProperties = translatedProperties.filter((property: any) => {
          // Safely get property location fields with proper type checking
          const getStringValue = (value: any): string => {
            if (value === null || value === undefined) return "";
            return String(value).trim();
          };
          
          const propertyCommunity = getStringValue(property.location?.community || property.community).toLowerCase();
          const propertyCity = getStringValue(property.location?.city || property.city).toLowerCase();
          const propertyArea = getStringValue(property.location?.area || property.area).toLowerCase();
          const propertyName = getStringValue(property.name).toLowerCase();
          
          // Skip if no location data available
          if (!propertyCommunity && !propertyCity && !propertyArea) {
            return false;
          }
          
          // Normalize property location names for comparison
          const normalizedPropertyCommunity = propertyCommunity ? normalizeLocationName(propertyCommunity).toLowerCase() : "";
          const normalizedPropertyCity = propertyCity ? normalizeLocationName(propertyCity).toLowerCase() : "";
          const normalizedPropertyArea = propertyArea ? normalizeLocationName(propertyArea).toLowerCase() : "";
          
          // Exact match on community (most important for location filtering)
          const exactCommunityMatch = (normalizedPropertyCommunity && normalizedPropertyCommunity === normalizedSearchTerm) ||
                                     (propertyCommunity && propertyCommunity === searchTerm);
          
          // Exact match on city
          const exactCityMatch = (normalizedPropertyCity && normalizedPropertyCity === normalizedSearchTerm) ||
                                  (propertyCity && propertyCity === searchTerm);
          
          // Exact match on area
          const exactAreaMatch = (normalizedPropertyArea && normalizedPropertyArea === normalizedSearchTerm) ||
                                (propertyArea && propertyArea === searchTerm);
          
          // Also check if the search term is contained in community (for partial matches like "Business Bay" in "Business Bay, Dubai")
          const communityContains = (normalizedPropertyCommunity && normalizedPropertyCommunity.includes(normalizedSearchTerm)) ||
                                   (propertyCommunity && propertyCommunity.includes(searchTerm));
          
          // Return true if any exact match is found, or if community contains the search term
          return exactCommunityMatch || exactCityMatch || exactAreaMatch || communityContains;
        });
      }
      
      setProperty(filteredProperties);
      
      // Update pagination based on filtered results
      // If client-side filtering was applied, use filtered count; otherwise use API total
      const hasClientSideFilter = (filters.property_type && filters.property_type !== "any" && filters.property_type !== "all") || 
                                  (filters.title && filters.title.trim() !== "");
      const totalFiltered = hasClientSideFilter
        ? filteredProperties.length 
        : (res?.total || res?.totalProjects || 0);
      setTotalPages(Math.ceil(totalFiltered / 24));
      setTotalProperties(totalFiltered);
    } catch (error) {
      console.error("Error fetching properties:", error);
    } finally {
      setLoading(false); 
    }
  }, [filters, currentLanguage.code]);

  // Debounced developer search
  const searchDevelopers = useCallback((searchTerm: string) => {
    if (searchTerm.length < 2) {
      setDevelopers([]);
      return;
    }

    setSearchingDevelopers(true);
    const timeoutId = setTimeout(async () => {
      try {
        const response = await api.get(
          `/properties/get_developers?name=${searchTerm}`
        );
        setDevelopers(response.data?.developers || response.data || []);
      } catch (error) {
        console.error("Error searching developers:", error);
        setDevelopers([]);
      } finally {
        setSearchingDevelopers(false);
      }
    }, 300);

    return () => clearTimeout(timeoutId);
  }, []);

  const handleFilterChange = useCallback((key: string, value: string) => {
    setFilters((prev) => ({ ...prev, [key]: value }));
    
    // Navigate when type changes
    if (key === "type") {
      if (value === "buy") {
        router.push("/buy");
      } else if (value === "rent") {
        router.push("/rent");
      } else if (value === "off_plan") {
        router.push("/offPlanspremiumpropertyindubai");
      }
    }
  }, [router]);

  const handleSearch = useCallback(() => {
    fetchproperty();
    if (showFilters) setShowFilters(false);
  }, [fetchproperty, showFilters]);

  const handleDeveloperSelect = useCallback(
    (developer: any) => {
      handleFilterChange("developer_id", developer.id);
      setDeveloperSearch(developer.name);
      setDevelopers([]);
    },
    [handleFilterChange]
  );

  const toggleFilters = useCallback(() => {
    setShowFilters((prev) => !prev);
  }, []);

  // Update filters when URL parameters change (works on all devices - mobile, tablet, desktop)
  useEffect(() => {
    // Ensure searchParams is available (handles SSR and client-side rendering on all devices)
    if (!searchParams) return;
    
    const locationParam = searchParams.get('location');
    const propertyTypeParam = searchParams.get('property_type');
    const bedroomsParam = searchParams.get('bedrooms');
    const minPriceParam = searchParams.get('min_price');
    const maxPriceParam = searchParams.get('max_price');
    
    setFilters((prev) => {
      const updated = { ...prev };
      let hasChanges = false;
      
      // Handle location parameter (from communities page clicks)
      if (locationParam !== null && locationParam !== undefined) {
        const decodedLocation = decodeURIComponent(locationParam);
        const cleanedLocation = sanitizeLocationSearch(decodedLocation);
        if (prev.title !== cleanedLocation) {
          updated.title = cleanedLocation;
          hasChanges = true;
        }
      }
      
      // Handle property type parameter (from footer clicks)
      if (propertyTypeParam !== null && propertyTypeParam !== undefined) {
        const normalizedValue = propertyTypeParam.toLowerCase();
        if (prev.property_type !== normalizedValue) {
          updated.property_type = normalizedValue;
          hasChanges = true;
        }
      }
      
      // Handle bedrooms parameter
      if (bedroomsParam !== null && bedroomsParam !== undefined && prev.bedrooms !== bedroomsParam) {
        updated.bedrooms = bedroomsParam;
        hasChanges = true;
      }
      
      // Handle min price parameter
      if (minPriceParam !== null && minPriceParam !== undefined && prev.min_price !== minPriceParam) {
        updated.min_price = minPriceParam;
        hasChanges = true;
      }
      
      // Handle max price parameter
      if (maxPriceParam !== null && maxPriceParam !== undefined && prev.max_price !== maxPriceParam) {
        updated.max_price = maxPriceParam;
        hasChanges = true;
      }
      
      return hasChanges ? updated : prev;
    });
  }, [searchParams]);

  useEffect(() => {
    fetchproperty(currentPage);
  }, [fetchproperty, currentPage]);

  useEffect(() => {
    setCurrentPage(1);
  }, [filters]);

  useEffect(() => {
    searchDevelopers(developerSearch);
  }, [developerSearch, searchDevelopers]);

  // Close developer dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Element;
      if (!target.closest(".developer-search")) {
        setDevelopers([]);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Memoized components
  const FilterButton = useMemo(
    () => (
      <div className="block md:hidden">
        <div className="flex items-center gap-3 p-4 backdrop-blur-md">
          <div className="flex-1">
            <Input
              placeholder={t('offplans.locationPlaceholder')}
              value={filters.title}
              onChange={(e) => handleFilterChange("title", e.target.value)}
              className="w-full text-black bg-white border border-gray-300 placeholder:text-gray-500 h-12"
            />
          </div>
          <Button
            onClick={toggleFilters}
            size="lg"
            variant="outline"
            className="h-12 w-12 bg-white hover:bg-gray-50 border border-gray-300 flex items-center justify-center"
          >
            <Icon
              icon="lucide:sliders-horizontal"
              className="text-gray-600 text-xl"
            />
          </Button>
          <Button
            onClick={handleSearch}
            size="lg"
            variant="ghost"
            className="h-12 w-12 text-white flex items-center justify-center shadow-lg rounded-full"
            style={{ backgroundImage: 'linear-gradient(90deg, #b91c1c, #dc2626)' }}
          >
            <Icon icon="iconamoon:search-fill" className="text-white text-xl" />
          </Button>
        </div>
      </div>
    ),
    [filters.title, handleFilterChange, toggleFilters, handleSearch]
  );

  const PropertyTypeSelect = useMemo(
    () => (
      <Select
        value={filters.property_type}
        onValueChange={(value) => handleFilterChange("property_type", value)}
      >
        <SelectTrigger className="w-full bg-white border border-gray-300 text-black">
          <SelectValue placeholder={t('offplans.propertyType')} />
        </SelectTrigger>
        <SelectContent>
          {PROPERTY_TYPE_OPTIONS.map((option) => (
            <SelectItem key={option.value} value={option.value}>
              {option.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    ),
    [filters.property_type, handleFilterChange, t]
  );

  const PriceSelect = useMemo(() => {
    const MinPriceSelect = () => (
      <Select
        value={filters.min_price}
        onValueChange={(value) => handleFilterChange("min_price", value)}
      >
        <SelectTrigger className="w-full bg-white border border-gray-300 text-black">
          <SelectValue placeholder={t('offplans.minPrice')} />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="any">{t('offplans.minPrice')}</SelectItem>
          {PRICE_OPTIONS.map((price) => (
            <SelectItem key={price} value={price}>
              {parseInt(price).toLocaleString()}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    );

    const MaxPriceSelect = () => (
      <Select
        value={filters.max_price}
        onValueChange={(value) => handleFilterChange("max_price", value)}
      >
        <SelectTrigger className="w-full bg-white border border-gray-300 text-black">
          <SelectValue placeholder={t('offplans.maxPrice')} />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="any">{t('offplans.maxPrice')}</SelectItem>
          {PRICE_OPTIONS.map((price) => (
            <SelectItem key={price} value={price}>
              {parseInt(price).toLocaleString()}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    );

    return { MinPriceSelect, MaxPriceSelect };
  }, [filters.min_price, filters.max_price, handleFilterChange]);

  return (
    <div>
      <section className="pt-32 pb-16 px-6 luxury-bg">
        <div className="container mx-auto">
          {FilterButton}

          {/* {t('offplans.desktopSearchForm')} with video background */}
          <div className="hidden md:block relative rounded-2xl overflow-hidden shadow-xl border border-white/20 h-28 md:h-24 lg:h-20 xl:h-[14rem]">
            <video
              className="absolute inset-0 w-full h-full object-cover"
              autoPlay
              muted
              loop
              playsInline
              webkit-playsinline
              preload="auto"
              poster="/images/bgImage.webp"
              style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            >
              <source src="/offplan_bg.mp4" type="video/mp4" />
            </video>
            <div className="absolute inset-0 bg-black/30" />
            <div className="relative h-full flex items-center justify-center p-6">
              <div className="grid grid-cols-1 md:grid-cols-8 gap-4 bg-white/5 backdrop-blur-md rounded-xl max-w-6xl mx-auto w-full">
                {/* {t('offplans.location')} */}
                <div className="col-span-2">
                  <Input
                    placeholder={t('offplans.locationPlaceholder')}
                    value={filters.title}
                    onChange={(e) => handleFilterChange("title", e.target.value)}
                    className="w-full text-gray-800 bg-white/90 border border-[#0a4b6f]/30 placeholder:text-gray-600 hover:border-[#0a4b6f]/50 transition-colors font-sans"
                  />
                </div>

                {/* {t('offplans.propertyType')} */}
                <div>{PropertyTypeSelect}</div>

                {/* {t('offplans.minPrice')} */}
                <div>
                  <PriceSelect.MinPriceSelect />
                </div>

                {/* {t('offplans.maxPrice')} */}
                <div>
                  <PriceSelect.MaxPriceSelect />
                </div>

                {/* {t('offplans.beds')} */}
                <div>
                  <Select
                    value={filters.bedrooms}
                    onValueChange={(value) => handleFilterChange("bedrooms", value)}
                  >
                    <SelectTrigger className="w-full bg-white/90 border border-[#0a4b6f]/30 text-gray-800 hover:border-[#0a4b6f]/50 transition-colors font-sans">
                      <SelectValue placeholder={t('offplans.beds')} />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="any">{t('offplans.beds')}</SelectItem>
                      {BEDROOM_OPTIONS.slice(1).map((bedObj) => (
                        <SelectItem key={bedObj.value} value={bedObj.value}>
                          {bedObj.value === "5" ? t('offplans.fivePlusBeds') : `${bedObj.value} ${t('offplans.bed')}`}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {/* {t('offplans.moreFiltersButton')} and {t('offplans.searchButton')} */}
                <div className="flex gap-2">
                  <Button
                    onClick={toggleFilters}
                    variant="outline"
                    className="w-32 h-14 bg-white hover:bg-gray-50 border border-gray-300 text-gray-700 flex items-center justify-center gap-2"
                  >
                    <Icon icon="lucide:sliders-horizontal" className="w-4 h-4" />
                    {t('offplans.moreFilters')}
                  </Button>

                  <Button
                    onClick={handleSearch}
                    variant="ghost"
                    className="h-14 w-14 text-white flex items-center justify-center shadow-lg rounded-full"
                    style={{ backgroundImage: 'linear-gradient(90deg, #b91c1c, #dc2626)' }}
                  >
                    <Icon icon="iconamoon:search-fill" className="text-white text-xl" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* {t('offplans.mobileFilterModal')} */}
      <Dialog open={showFilters} onOpenChange={setShowFilters}>
        <DialogContent className="max-w-md max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="flex items-center justify-between">
              <span className="text-xl font-semibold">{t('offplans.searchFilters')}</span>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setShowFilters(false)}
                className="h-8 w-8 p-0"
              >
                <X className="h-4 w-4" />
              </Button>
            </DialogTitle>
          </DialogHeader>

          <div className="space-y-6 py-4">
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">
                {t('offplans.handoverYear')}
              </label>
              <Select
                value={filters.handover_year}
                onValueChange={(value) =>
                  handleFilterChange("handover_year", value)
                }
              >
                <SelectTrigger className="w-full bg-white border border-gray-300 rounded-md h-12 text-gray-900 focus:ring-2 focus:ring-primary">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent className="bg-white">
                  <SelectItem value="any">{t('offplans.handoverYear')}</SelectItem>
                  {YEAR_OPTIONS.slice(1).map((yearObj) => (
                    <SelectItem key={yearObj.value} value={yearObj.value}>
                      {yearObj.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* {t('offplans.typeFilter')} - Hidden on large screens since it's shown in desktop form */}
            <div className="space-y-2 md:hidden">
              <label className="text-sm font-medium text-gray-700">{t('offplans.type')}</label>
              <Select value={filters.type} onValueChange={(value) => handleFilterChange("type", value)}>
                <SelectTrigger className="w-full bg-white border border-gray-300 rounded-md h-14 text-gray-900 focus:ring-2 focus:ring-primary">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent className="bg-white">
                  <SelectItem value="buy">{t('offplans.buy')}</SelectItem>
                  <SelectItem value="rent">{t('offplans.rent')}</SelectItem>
                  <SelectItem value="off_plan">{t('offplans.offPlan')}</SelectItem>
                </SelectContent>
              </Select>
            </div>
            {/* {t('offplans.searchInput')} - Hidden on large screens since it's shown in desktop form */}
            <div className="space-y-2 md:hidden">
              <label className="text-sm font-medium text-gray-700">
                {t('offplans.location')}
              </label>
              <div className="relative">
                <Input
                  placeholder={t('offplans.locationPlaceholder')}
                  value={filters.title}
                  onChange={(e) => handleFilterChange("title", e.target.value)}
                  className="w-full bg-white border border-gray-300 rounded-md h-12 text-gray-900 placeholder:text-gray-600 focus-visible:ring-2 focus-visible:ring-primary"
                />
                <Icon
                  icon="heroicons:magnifying-glass"
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400"
                />
              </div>
            </div>

            {/* {t('offplans.propertyType')} - Hidden on large screens since it's shown in desktop form */}
            <div className="space-y-2 md:hidden">
              <label className="text-sm font-medium text-gray-700">
                {t('offplans.propertyType')}
              </label>
              <Select
                value={filters.property_type}
                onValueChange={(value) =>
                  handleFilterChange("property_type", value)
                }
              >
                <SelectTrigger className="w-full bg-white border border-gray-300 rounded-md h-12 text-gray-900 focus:ring-2 focus:ring-primary">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent className="bg-white max-h-60">
                  {PROPERTY_TYPE_OPTIONS.map((option) => (
                    <SelectItem key={option.value} value={option.value}>
                      {option.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* {t('offplans.completionStatus')} */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">
                {t('offplans.completionStatus')}
              </label>
              <Select
                value={filters.completion_status}
                onValueChange={(value) =>
                  handleFilterChange("completion_status", value)
                }
              >
                <SelectTrigger className="w-full bg-white border border-gray-300 rounded-md h-12 text-gray-900 focus:ring-2 focus:ring-primary">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent className="bg-white">
                  {COMPLETION_STATUS_OPTIONS.map((option) => (
                    <SelectItem key={option.value} value={option.value}>
                      {option.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* {t('offplans.developerSearch')} */}
            <div className="space-y-2 developer-search">
              <label className="text-sm font-medium text-gray-700">
                {t('offplans.developer')}
              </label>
              <div className="relative">
                <Input
                  placeholder={t('offplans.searchDevelopers')}
                  value={developerSearch}
                  onChange={(e) => setDeveloperSearch(e.target.value)}
                  className="w-full bg-white border border-gray-300 rounded-md h-12 text-gray-900 placeholder:text-gray-600 focus-visible:ring-2 focus-visible:ring-primary pr-10"
                />
                {searchingDevelopers && (
                  <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                    <Loader className="w-5 h-5 animate-spin text-gray-400" />
                  </div>
                )}
              </div>
              {developers.length > 0 && (
                <div className="max-h-40 overflow-y-auto border border-gray-200 rounded-md bg-white">
                  {developers.map((developer: any) => (
                    <div
                      key={developer.id}
                      className="px-3 py-2 hover:bg-gray-50 cursor-pointer border-b border-gray-100 last:border-b-0"
                      onClick={() => handleDeveloperSelect(developer)}
                    >
                      <div className="text-sm font-medium text-gray-900">
                        {developer.name}
                      </div>
                      {developer.location && (
                        <div className="text-xs text-gray-500">
                          {developer.location}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* {t('offplans.priceRange')} - Hidden on large screens since it's shown in desktop form */}
            <div className="grid grid-cols-2 gap-4 md:hidden">
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">
                  {t('offplans.minPrice')}
                </label>
                <Select
                  value={filters.min_price}
                  onValueChange={(value) =>
                    handleFilterChange("min_price", value)
                  }
                >
                  <SelectTrigger className="w-full bg-white border border-gray-300 rounded-md h-12 text-gray-900 focus:ring-2 focus:ring-primary">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent className="bg-white max-h-60">
                    <SelectItem value="any">Any</SelectItem>
                    {PRICE_OPTIONS.map((price) => (
                      <SelectItem key={price} value={price}>
                        {parseInt(price).toLocaleString()}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">
                  {t('offplans.maxPrice')}
                </label>
                <Select
                  value={filters.max_price}
                  onValueChange={(value) =>
                    handleFilterChange("max_price", value)
                  }
                >
                  <SelectTrigger className="w-full bg-white border border-gray-300 rounded-md h-12 text-gray-900 focus:ring-2 focus:ring-primary">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent className="bg-white max-h-60">
                    <SelectItem value="any">Any</SelectItem>
                    {PRICE_OPTIONS.map((price) => (
                      <SelectItem key={price} value={price}>
                        {parseInt(price).toLocaleString()}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* {t('offplans.bedrooms')} - Hidden on large screens since it's shown in desktop form */}
            <div className="space-y-2 md:hidden">
              <label className="text-sm font-medium text-gray-700">
                {t('offplans.bedrooms')}
              </label>
              <Select
                value={filters.bedrooms}
                onValueChange={(value) => handleFilterChange("bedrooms", value)}
              >
                <SelectTrigger className="w-full bg-white border border-gray-300 rounded-md h-12 text-gray-900 focus:ring-2 focus:ring-primary">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent className="bg-white">
                  <SelectItem value="any">{t('offplans.anyBedrooms')}</SelectItem>
                  {BEDROOM_OPTIONS.slice(1).map((bedObj) => (
                    <SelectItem key={bedObj.value} value={bedObj.value}>
                      {bedObj.value === "5" ? t('offplans.fivePlusBeds') : `${bedObj.value} ${t('offplans.bed')}`}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* {t('offplans.bathrooms')} */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">
                {t('offplans.bathrooms')}
              </label>
              <Select
                value={filters.bathrooms}
                onValueChange={(value) =>
                  handleFilterChange("bathrooms", value)
                }
              >
                <SelectTrigger className="w-full bg-white border border-gray-300 rounded-md h-12 text-gray-900 focus:ring-2 focus:ring-primary">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent className="bg-white">
                  <SelectItem value="any">{t('offplans.anyBathrooms')}</SelectItem>
                  {BATHROOM_OPTIONS.slice(1).map((bathObj) => (
                    <SelectItem key={bathObj.value} value={bathObj.value}>
                      {bathObj.value === "5" ? t('offplans.fivePlusBaths') : `${bathObj.value} ${t('offplans.bath')}`}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* {t('offplans.searchButton')} */}
            <Button
              onClick={handleSearch}
              variant="ghost"
              className="w-full text-white font-medium h-12 rounded-md"
              style={{ backgroundImage: 'linear-gradient(90deg, #b91c1c, #dc2626)' }}
            >
              <Search className="w-5 h-5 mr-2" />
              {t('offplans.searchProperties')}
            </Button>
          </div>
        </DialogContent>
      </Dialog>

      <div className="mx-auto px-4 py-12 max-w-5xl">
        <h1 className="text-center text-4xl font-serif font-bold">{t('buy.locationHeading')}</h1>
        <p className="text-center text-gray-600 mt-4">
          {t('buy.locationSubheading')}
        </p>
        <p className="text-center my-6">
          <Link href={"/whyDubai#off-plan-investment"}>
            <span
              className={cn(
                "relative pb-1 transition-all duration-300 text-red-600 uppercase",
                "after:content-[''] after:absolute after:left-1/2 after:bottom-0 after:h-[2px] after:w-0",
                "after:-translate-x-1/2 after:bg-red-600 after:transition-all after:duration-300 hover:after:w-full"
              )}
            >
              {t('offplans.learnMore')}
            </span>
          </Link>
        </p>
      </div>

      <div className="min-h-screen py-6">
        {loading && (
          <div className="flex justify-center items-center h-64">
            <Loader className="animate-spin h-10 w-10 text-primary" />
          </div>
        )}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-4 container mx-auto py-6">
          {property?.map((property, i) => (
            <OffPlanCard data={property} key={i} />
          ))}
        </div>

        {/* Pagination */}
        {!loading && property.length > 0 && (
          <div className="mt-12 mb-8 px-4">
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              totalItems={totalProperties}
              itemsPerPage={24}
              onPageChange={setCurrentPage}
              className="px-4"
            />
          </div>
        )}
      </div>
    </div>
  );
}

export default function OffPlansPageWrapper() {
  return (
    <Suspense fallback={<div className="flex items-center justify-center min-h-screen"><div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#0a4b6f]"></div></div>}>
      <OffPlansPage />
    </Suspense>
  );
}

