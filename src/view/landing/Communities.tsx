"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { Heart, Phone, Menu, MessageCircle } from "lucide-react";
import { Button } from "@/src/components/ui/button";
import { Card, CardContent } from "@/src/components/ui/card";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@/src/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { getAllCommunities } from "@/src/api/communities";
import { cn, normalizeLocationName } from "@/src/lib/utils";
import { useLanguage } from "@/src/contexts/LanguageContext";

const communities = [
  {
    id: 1,
    name: "Dubai Marina",
    description: "Where Yachting Meets Urban Living",
    imageQuery: "/images/dubai-marina.webp",
  },
  {
    id: 2,
    name: "Business Bay",
    description: "A Hub of Bustling Activity and Affordable Investment",
    imageQuery: "/images/Palm-Jumeirah.webp",
  },
  {
    id: 3,
    name: "Downtown Dubai",
    description: "Where Iconic Landmarks Meet Luxurious Living",
    imageQuery: "/images/Dubai-Creek-Harbour.webp",
  },
  {
    id: 4,
    name: "Dubai Hills Estate",
    description: "Tranquility Meets Luxury Living",
    imageQuery: "/images/Dubai-Hills-Estate.webp",
  },
  {
    id: 5,
    name: "Palm Jumeirah",
    description: "Iconic Man-Made Island with Luxury Residences",
    imageQuery: "/images/dubai-marina.webp",
  },
  {
    id: 6,
    name: "Jumeirah Lake Towers",
    description: "Vibrant Community with Lake Views",
    imageQuery: "/images/Dubai-Creek-Harbour.webp",
  },
];

export default function Component() {
  const { t } = useLanguage();
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);
  const [communities, setCommunities] = useState<any[]>([]);

  const plugin = useRef(
    Autoplay({ delay: 3000, stopOnInteraction: false, stopOnMouseEnter: true })
  );

  useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  const scrollTo = useCallback(
    (index: number) => {
      api?.scrollTo(index);
    },
    [api]
  );

  useEffect(() => {
    const fetchCommunities = async () => {
      try {
        const res = await getAllCommunities(1, 20);

        // Normalize community names (replace Ain Ajman/Ajman with Dubai Island)
        const normalizedCommunities = (res.communities || []).map((community: any) => ({
          ...community,
          name: normalizeLocationName(community.name || ""),
        }));

        setCommunities(normalizedCommunities);
      } catch (error) {
        console.log(error);
      }
    };
    fetchCommunities();
  }, []);
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50/50 via-white to-gray-50 text-gray-900 overflow-hidden relative">
      {/* Decorative elements - Hidden on mobile, smaller on tablet */}
      <div className="hidden sm:block absolute top-40 right-10 sm:right-20 w-40 h-40 sm:w-60 sm:h-60 bg-[#0a4b6f]/5 rounded-full blur-3xl"></div>
      <div className="hidden sm:block absolute bottom-40 left-10 sm:left-20 w-40 h-40 sm:w-60 sm:h-60 bg-red-500/5 rounded-full blur-3xl"></div>
      
      {/* Hero Section */}
      <section className="py-6 sm:py-8 md:py-10 lg:py-12 text-center px-4 sm:px-6 md:px-8 lg:px-12 relative z-10">
        {/* Red accent dot */}
        <div className="w-2 h-2 bg-red-500 rounded-full mx-auto mb-3 sm:mb-4"></div>
        
        <p className="text-red-600 text-sm sm:text-base md:text-lg uppercase tracking-widest mb-3 sm:mb-4 font-bold px-2">
          {t('landing.communities.kicker')}
        </p>
        
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 mb-4 sm:mb-6 md:mb-8 tracking-tight px-2 leading-tight">
          Explore locations in dubai
        </h1>
        <p className="max-w-4xl mx-auto text-gray-600 text-xs sm:text-sm md:text-base tracking-tight font-light px-2 leading-relaxed">
          {t('landing.communities.subtitle')}
        </p>
      </section>

      {/* Communities Section - Carousel */}
      <section className="relative pb-12 sm:pb-16 md:pb-20 lg:pb-24 px-3 sm:px-4 md:px-6 lg:px-8 xl:px-16 2xl:px-24">
        <Carousel
          setApi={setApi}
          opts={{
            align: "start",
            loop: true,
            dragFree: true,
            containScroll: "trimSnaps",
          }}
          plugins={[plugin.current]}
          className="w-full mx-auto max-w-7xl"
        >
          <CarouselContent className="-ml-2 sm:-ml-3 md:-ml-4 lg:-ml-6">
            {communities?.map((community: any, idx: number) => {
              const normalizedName = normalizeLocationName(community.name);
              // Use specific image for Dubai Island
              const getImageSrc = () => {
                const communityNameLower = community.name?.toLowerCase() || "";
                if (normalizedName.toLowerCase() === "dubai island" || 
                    communityNameLower === "deira" || 
                    communityNameLower === "ain ajman" ||
                    communityNameLower === "ajman") {
                  return "/images/main-dubai-islands-0217eaed95-3700-4cd4-ae39-f7e4130d8163.jpg";
                }
                return community.photos?.[0] || "/images/placeholder.jpg";
              };
              
              // Create URL with location parameter for offPlans page
              const offPlansUrl = `/offPlans?location=${encodeURIComponent(normalizedName)}`;
              
              return (
              <CarouselItem
                key={`${community.id ?? idx}-${idx}`}
                className="pl-2 sm:pl-3 md:pl-4 lg:pl-6 basis-full sm:basis-full md:basis-1/2 lg:basis-1/3 xl:basis-1/3"
              >
                <Link href={offPlansUrl} className="block h-full">
                  <Card className="relative w-full h-[380px] xs:h-[420px] sm:h-[500px] md:h-[600px] lg:h-[700px] rounded-lg overflow-hidden shadow-lg sm:shadow-xl group border-none hover:shadow-2xl transition-all duration-300 cursor-pointer touch-optimized">
                    <CardContent className="p-0 h-full">
                      <Image
                        src={getImageSrc()}
                        alt={normalizedName}
                        fill
                        style={{ objectFit: "cover" }}
                        className="transition-transform duration-500 group-hover:scale-110"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        priority={idx < 2}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent p-3 sm:p-4 md:p-5 lg:p-6 flex flex-col justify-end text-white">
                        <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold mb-1.5 sm:mb-2 md:mb-3 tracking-wide drop-shadow-lg leading-tight">
                          {normalizedName}
                        </h3>
                        <p className="text-xs sm:text-sm md:text-base mb-2 sm:mb-3 md:mb-4 font-light leading-relaxed drop-shadow-md opacity-90 line-clamp-2 sm:line-clamp-3">
                          {community.order_description}
                        </p>
                        <div className="w-full border-[1px] border-white/40 mb-2 sm:mb-3 md:mb-4" />
                        <div
                          className={cn(
                            "relative pb-1.5 sm:pb-2 transition-all duration-300 text-white uppercase text-xs sm:text-sm md:text-base font-medium tracking-wider",
                            "after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0",
                            "after:bg-white after:transition-all after:duration-300 group-hover:after:w-16 sm:group-hover:after:w-20 md:group-hover:after:w-24 group-hover:text-blue-200"
                          )}
                        >
                          {t('landing.communities.viewAll')}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              </CarouselItem>
              );
            })}
          </CarouselContent>
          {/* CarouselPrevious and CarouselNext can be added here if navigation arrows are desired */}
        </Carousel>

        {/* Pagination Dots */}
        <div className="flex justify-center gap-1.5 sm:gap-2 md:gap-3 mt-6 sm:mt-8 md:mt-10">
          {Array.from({ length: count }).map((_, index) => (
            <button
              key={index}
              className={`w-2.5 h-2.5 sm:w-3 sm:h-3 md:w-4 md:h-4 rounded-full transition-all duration-300 touch-optimized ${
                index === current - 1
                  ? "bg-[#0a4b6f] scale-110"
                  : "bg-gray-300 hover:bg-gray-400 active:bg-gray-500 hover:scale-105"
              }`}
              onClick={() => {
                plugin.current.stop(); // Stop autoplay on manual click
                scrollTo(index);
              }}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
        <div className="w-full flex justify-center items-center mt-8 sm:mt-10 md:mt-12 mb-4 sm:mb-6 px-4">
          <Link href="/offPlans" className="w-full sm:w-auto">
            <Button className="w-full sm:w-48 md:w-56 h-11 sm:h-12 md:h-14 bg-[#0a4b6f] hover:bg-[#1a6b8f] active:bg-[#0a4b6f] text-white font-medium tracking-wider py-2.5 sm:py-3 px-4 sm:px-6 md:px-8 rounded-lg transition-all duration-300 uppercase text-xs sm:text-sm md:text-base shadow-lg hover:shadow-xl active:scale-95 touch-optimized">
              {t('landing.communities.viewAll')}
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
