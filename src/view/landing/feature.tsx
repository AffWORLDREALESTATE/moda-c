"use client";

import { getAllProperties } from "@/src/api/offPlans";
import PropertyCard from "@/src/components/common/property-card";
import { Button } from "@/src/components/ui/button";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useLanguage } from "@/src/contexts/LanguageContext";

export default function Feature() {
  const { t } = useLanguage();
  const [property, setProperty] = useState([]);
  const [loading, setLoading] = useState(false);
  const fetchproperty = async () => {
    setLoading(true);
    const query = "sort_by=total_count&sort_order=desc&page=1&size=4";
    try {
      const res = await getAllProperties(query);
      setProperty(res?.projects);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchproperty();
  }, []);

  return (
    <div className="flex flex-col items-center py-16 sm:py-20 md:py-24 lg:py-28 px-3 sm:px-4 md:px-6 lg:px-8 xl:px-12 container mx-auto max-w-7xl bg-gradient-to-b from-white via-blue-50/30 to-white relative overflow-hidden">
      {/* Decorative circles */}
      <div className="absolute top-20 left-10 w-40 h-40 bg-[#0a4b6f]/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-red-500/5 rounded-full blur-3xl"></div>
      
      <div className="text-center mb-10 sm:mb-12 md:mb-16 relative z-10">
        {/* Red accent line */}
        <div className="w-20 h-1 bg-gradient-to-r from-red-500 to-red-600 mx-auto mb-6"></div>
        
        <p className="text-sm sm:text-base uppercase tracking-widest mb-4 text-[#0a4b6f] font-bold">
          {t('landing.feature.kicker')}
        </p>
        
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6 px-2">
          {t('landing.feature.heading')}
        </h1>
        
        <p className="text-base sm:text-lg md:text-xl text-gray-600 mx-auto max-w-3xl px-2 leading-relaxed">
          {t('landing.feature.subtitle')}
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-6 sm:gap-8 md:gap-10 lg:gap-12 w-full">
        {loading ? (
          // Loading skeleton
          Array.from({ length: 4 }).map((_, i) => (
            <div key={i} className="loading-skeleton h-64 sm:h-80 md:h-96 rounded-lg"></div>
          ))
        ) : (
          property?.map((property: any, i) => (
            <PropertyCard data={property} key={i} />
          ))
        )}
      </div>
      <div className="w-full flex justify-center items-center my-6 sm:my-8 md:my-11">
        <Link href={"/offPlanspremiumpropertyindubai"}>
         <Button className="w-36 sm:w-40 md:w-48 h-9 sm:h-10 md:h-11 bg-[#0a4b6f] hover:bg-[#1a6b8f] text-white font-semibold py-2 px-3 sm:px-4 rounded-none transition-colors uppercase text-xs sm:text-sm md:text-base">
          {t('landing.feature.viewAll')}
        </Button>
        </Link>
      </div>
    </div>
  );
}
