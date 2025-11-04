import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { useLanguage } from "@/src/contexts/LanguageContext";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/src/components/ui/carousel"

function PartnersSection() {
  const { t } = useLanguage();
  const [api, setApi] = useState<CarouselApi | null>(null)

  const partnerImages = [
    "/Partner/15122009661273123205-1.jpg",
    "/Partner/Binghatti-logo-dark.png",
    "/Partner/gen_1199-2.jpg",
    "/Partner/images-1.png",
    "/Partner/sobha-realty-logo.jpg",
    "/Partner/the-heart-of-europe-logo-01.png",
  ]

  useEffect(() => {
    if (!api) return
    const id = setInterval(() => {
      api.scrollNext()
    }, 3000)
    return () => clearInterval(id)
  }, [api])

  return (
    <section className="py-8 sm:py-12 md:py-16 bg-white border-t border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <h2 className="text-gray-600 text-sm sm:text-base font-light tracking-widest uppercase font-sans mb-2">
            {t('landing.partners.heading')}
          </h2>
          <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-[#0a4b6f] to-transparent mx-auto"></div>
        </div>

        <Carousel
          className="relative"
          opts={{ align: "start", loop: true }}
          setApi={(embla) => setApi(embla)}
        >
          <CarouselContent>
            {partnerImages.map((src, idx) => {
              const alt = src.split('/').pop()?.replace(/[-_]/g, ' ').replace(/\.[^.]+$/, '') || `partner-${idx}`
              return (
                <CarouselItem
                  key={src}
                  className="basis-1/2 sm:basis-1/3 md:basis-1/4 lg:basis-1/6"
                >
                  <div className="flex items-center justify-center h-16 sm:h-20 md:h-24 px-4">
                    <div className="relative w-full h-full">
                      <Image
                        src={src}
                        alt={alt}
                        fill
                        sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, (max-width: 1024px) 25vw, 16vw"
                        className="object-contain opacity-80 hover:opacity-100 transition-opacity duration-300"
                        priority={idx < 3}
                      />
          </div>
        </div>
                </CarouselItem>
              )
            })}
          </CarouselContent>
          <CarouselPrevious className="flex lg:hidden" />
          <CarouselNext className="flex lg:hidden" />
        </Carousel>
      </div>
    </section>
  )
}

export default PartnersSection