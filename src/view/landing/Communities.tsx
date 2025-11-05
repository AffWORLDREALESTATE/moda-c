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

        setCommunities(res.communities);
      } catch (error) {
        console.log(error);
      }
    };
    fetchCommunities();
  }, []);
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50/50 via-white to-gray-50 text-gray-900 overflow-hidden relative">
      {/* Decorative elements */}
      <div className="absolute top-40 right-20 w-60 h-60 bg-[#0a4b6f]/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-40 left-20 w-60 h-60 bg-red-500/5 rounded-full blur-3xl"></div>
      
      {/* Hero Section */}
      <section className="py-16 sm:py-20 md:py-24 lg:py-32 text-center px-4 sm:px-6 md:px-8 lg:px-12 relative z-10">
        {/* Red accent line */}
        <div className="w-20 h-1 bg-gradient-to-r from-red-500 to-red-600 mx-auto mb-6"></div>
        
        <p className="text-red-600 text-base sm:text-lg uppercase tracking-widest mb-4 font-bold">
          {t('landing.communities.kicker')}
        </p>
        
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 sm:mb-8 tracking-tight px-2">
          Explore locations in dubai
        </h1>
        <p className="max-w-4xl mx-auto text-gray-600 text-sm sm:text-base tracking-tight font-light px-2 leading-relaxed">
          {t('landing.communities.subtitle')}
        </p>
      </section>

      {/* Communities Section - Carousel */}
      <section className="relative pb-16 sm:pb-20 md:pb-24 px-4 sm:px-6 md:px-8 lg:px-16 xl:px-24">
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
          <CarouselContent className="-ml-3 sm:-ml-4 md:-ml-6">
            {communities?.map((community: any, idx: number) => {
              const normalizedName = normalizeLocationName(community.name);
              // Use specific image for Dubai Island
              const getImageSrc = () => {
                if (normalizedName.toLowerCase() === "dubai island" || community.name?.toLowerCase() === "deira") {
                  return "/images/main-dubai-islands-0217eaed95-3700-4cd4-ae39-f7e4130d8163.jpg";
                }
                return community.photos?.[0] || "/images/placeholder.jpg";
              };
              
              // Create URL with location parameter for offPlans page
              const offPlansUrl = `/offPlans?location=${encodeURIComponent(normalizedName)}`;
              
              return (
              <CarouselItem
                key={`${community.id ?? idx}-${idx}`}
                className="pl-3 sm:pl-4 md:pl-6 md:basis-1/3 lg:basis-1/3 xl:basis-1/3"
              >
                <Link href={offPlansUrl}>
                  <Card className="relative w-full h-[450px] sm:h-[550px] md:h-[700px] rounded-lg overflow-hidden shadow-xl group border-none hover:shadow-2xl transition-all duration-300 cursor-pointer">
                    <CardContent className="p-0 h-full">
                      <Image
                        src={getImageSrc()}
                        alt={normalizedName}
                        fill
                        style={{ objectFit: "cover" }}
                        className="transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent p-4 sm:p-5 md:p-6 flex flex-col justify-end text-white">
                        <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-2 sm:mb-3 tracking-wide drop-shadow-lg">
                          {normalizedName}
                        </h3>
                        <p className="text-sm sm:text-base mb-3 sm:mb-4 font-light leading-relaxed drop-shadow-md opacity-90">
                          {community.order_description}
                        </p>
                        <div className="w-full border-[1px] border-white/40 mb-3 sm:mb-4" />
                        <div
                          className={cn(
                            "relative pb-2 transition-all duration-300 text-white uppercase text-sm sm:text-base font-medium tracking-wider",
                            "after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0",
                            "after:bg-white after:transition-all after:duration-300 group-hover:after:w-24 group-hover:text-blue-200"
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
        <div className="flex justify-center gap-2 sm:gap-3 mt-8 sm:mt-10">
          {Array.from({ length: count }).map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 sm:w-4 sm:h-4 rounded-full transition-all duration-300 ${
                index === current - 1
                  ? "bg-[#0a4b6f] scale-110"
                  : "bg-gray-300 hover:bg-gray-400 hover:scale-105"
              }`}
              onClick={() => {
                plugin.current.stop(); // Stop autoplay on manual click
                scrollTo(index);
              }}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
        <div className="w-full flex justify-center items-center mt-10 sm:mt-12 mb-6">
          
        <Link href={"/communities"}>
           <Button className="w-48 sm:w-56 h-12 sm:h-14 bg-[#0a4b6f] hover:bg-[#1a6b8f] text-white font-medium tracking-wider py-3 px-6 sm:px-8 rounded-lg transition-all duration-300 uppercase text-sm sm:text-base shadow-lg hover:shadow-xl transform hover:-translate-y-1">
            {t('landing.communities.viewAll')}
          </Button>
        </Link>
        </div>
      </section>
    </div>
  );
}
