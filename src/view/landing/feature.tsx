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
    <div className="flex flex-col items-center py-8 sm:py-12 md:py-16 lg:py-20 px-3 sm:px-4 md:px-6 lg:px-8 xl:px-12 container mx-auto max-w-7xl">
      <div className="text-center mb-6 sm:mb-8 md:mb-12">
        <p className="text-xs sm:text-sm uppercase tracking-wider mb-2 text-primary">
          {t('landing.feature.kicker')}
        </p>
        <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-mono font-thin text-[#1A202C] leading-tight mb-4 sm:mb-6 md:mb-8 font-serif px-2">
          {t('landing.feature.heading')}
        </h1>
        <p className="text-sm sm:text-base md:text-lg text-gray-600 mx-auto max-w-3xl px-2 leading-relaxed">
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
        <Link href={"/offPlans"}>
         <Button className="w-36 sm:w-40 md:w-48 h-9 sm:h-10 md:h-11 bg-[#0a4b6f] hover:bg-[#1a6b8f] text-white font-semibold py-2 px-3 sm:px-4 rounded-none transition-colors uppercase text-xs sm:text-sm md:text-base">
          {t('landing.feature.viewAll')}
        </Button>
        </Link>
      </div>
    </div>
  );
}
