"use client";

import { getAllProperties } from "@/src/api/offPlans";
import PropertyCard from "@/src/components/common/property-card";
import { Button } from "@/src/components/ui/button";
import Link from "next/link";
import React from "react";
import { useLanguage } from "@/src/contexts/LanguageContext";

export default function Property() {
  const { t } = useLanguage();
  const [property, setProperty] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState<string | null>(null);
  const [currentPage, setCurrentPage] = React.useState(1);
  const [totalPages, setTotalPages] = React.useState(1);
  const [totalProperties, setTotalProperties] = React.useState(0);
  const [showAll, setShowAll] = React.useState(false);

  const fetchproperty = async (page = 1, size = 24) => {
    setLoading(true);
    setError(null);
    const query = `sort_by=total_count&sort_order=desc&page=${page}&size=${size}&type=off_plan`;
    console.log(`Fetching: ${query}`);
    try {
      const res = await getAllProperties(query);
      console.log(`Page ${page} API Response:`, res); // Debug log to see actual data structure
      
      if (page === 1) {
        setProperty(res?.projects || []);
        console.log(`Set initial properties: ${res?.projects?.length || 0} items`);
      } else {
        setProperty(prev => {
          const newProperties = [...prev, ...(res?.projects || [])];
          console.log(`Added ${res?.projects?.length || 0} properties. Total now: ${newProperties.length}`);
          return newProperties;
        });
      }
      
      setTotalProperties(res?.totalProjects || 0);
      setTotalPages(Math.ceil((res?.totalProjects || 0) / size));
      console.log(`Total properties: ${res?.totalProjects}, Total pages: ${Math.ceil((res?.totalProjects || 0) / size)}`);
    } catch (error) {
      console.error("Error fetching properties:", error);
      setError("Failed to load properties. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  const loadMore = () => {
    if (currentPage < totalPages) {
      const nextPage = currentPage + 1;
      console.log(`Loading page ${nextPage} of ${totalPages}`);
      setCurrentPage(nextPage);
      fetchproperty(nextPage, 24);
    }
  };

  const showAllProperties = () => {
    setShowAll(true);
    fetchproperty(1, totalProperties);
  };

  React.useEffect(() => {
    fetchproperty();
  }, []);

  const handleFavorite = (item: any) => {
    console.log("Added to favorites:", item);
    // Add your favorite logic here
  };

  return (
    <div className="min-h-screen bg-[#F2EEE8] text-[#1A202C]">
      <main className="container mx-auto py-12 sm:py-16 md:py-20 px-3 sm:px-4 md:px-6 lg:px-8 xl:px-12 max-w-7xl">
        <section className="text-center mb-8 sm:mb-12">
          <h2 className="text-black text-xs sm:text-sm font-light tracking-widest mb-2 uppercase font-serif">
            {t('landing.property.kicker')}
          </h2>
          <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-3xl font-mono mb-3 sm:mb-4 text-[#1A202C] tracking-wide font-serif px-2">
          {t('landing.property.heading')}
          </h1>
          <p className="max-w-4xl mx-auto text-xs sm:text-sm font-light text-gray-700 leading-relaxed mb-3 sm:mb-4 px-2">
            {t('landing.property.subtitle')}
          </p>
          {totalProperties > 0 && (
            <p className="text-xs sm:text-sm text-gray-600">
              {t('landing.property.showing')} {property.length} {t('landing.property.of')} {totalProperties} {t('landing.property.properties')}
            </p>
          )}
        </section>

        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6 sm:gap-8 md:gap-10 lg:gap-12 mb-8 sm:mb-12">
          {loading ? (
            // Loading skeleton
            Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="loading-skeleton h-64 sm:h-80 md:h-96 rounded-lg"></div>
            ))
          ) : error ? (
            // Error state
            <div className="col-span-full text-center py-12">
              <p className="text-red-600 mb-4">{error}</p>
              <Button 
                  onClick={fetchproperty}
                  className="bg-[#0a4b6f] hover:bg-[#1a6b8f] text-white"
              >
                {t('landing.property.tryAgain')}
              </Button>
            </div>
          ) : property?.length === 0 ? (
            // No properties state
            <div className="col-span-full text-center py-12">
              <p className="text-gray-600">{t('landing.property.noProperties')}</p>
            </div>
          ) : (
            property?.map((obj: any, i) => {
              // Debug log for each property to see the actual structure
              console.log(`Property ${i}:`, obj);
              
              // Use off-plan project field names
              const photos = obj?.photos?.[0] || "/placeholder.jpg";
              const title = obj?.name || "Property Title";
              const price = obj?.newParam?.price;
              const bedrooms = obj?.newParam?.bedroomMin ?? 0;
              const bathrooms = 2; // Default for off-plan projects
              const area = obj?.newParam?.size_min; // Use size_min from newParam
              
              // Location handling for off-plan projects
              const locationName = [
                obj?.location?.community,
                obj?.location?.sub_community
              ].filter(Boolean).join(", ");
              const location = locationName || "Dubai, UAE";
              
              return (
                <PropertyCard
                  data={obj}
                  key={i}
                />
              );
            })
          )}
        </section>

        {/* Pagination Controls */}
        {!showAll && totalPages > 1 && (
          <div className="text-center mb-6 sm:mb-8">
            <div className="mb-3 sm:mb-4 text-xs sm:text-sm text-gray-600">
              Debug: Current Page: {currentPage}, Total Pages: {totalPages}, Properties: {property.length}/{totalProperties}
            </div>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center">
              {currentPage < totalPages && (
                <Button 
                  onClick={loadMore}
                  disabled={loading}
                  className="bg-[#0a4b6f] hover:bg-[#1a6b8f] text-white px-4 sm:px-6 md:px-8 py-2 sm:py-3 text-sm sm:text-base font-light tracking-wider rounded-none shadow-md uppercase"
                >
                  {loading ? "Loading..." : `${t('landing.property.loadMore')} (Page ${currentPage + 1})`}
                </Button>
              )}
              <Button 
                onClick={showAllProperties}
                disabled={loading}
                variant="outline"
                className="border-[#0a4b6f] text-[#0a4b6f] hover:bg-[#0a4b6f] hover:text-white px-4 sm:px-6 md:px-8 py-2 sm:py-3 text-sm sm:text-base font-light tracking-wider rounded-none shadow-md uppercase"
              >
                {t('landing.property.showAll')} {totalProperties} {t('landing.property.properties')}
              </Button>
            </div>
          </div>
        )}

        <div className="text-center">
         <Link href={"/buy"}>
           <Button className="bg-[#0a4b6f] hover:bg-[#1a6b8f] text-white px-4 sm:px-6 md:px-8 py-4 sm:py-5 md:py-6 text-sm sm:text-base md:text-lg font-light tracking-wider rounded-none shadow-md uppercase">
            {t('landing.property.viewAll')}
          </Button>
         </Link>
        </div>
      </main>
    </div>
  );
}
