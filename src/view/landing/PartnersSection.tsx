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
    "/Partner/1235.jpg",
    "/Partner/15122009661273123205-1.jpg",
    "/Partner/1736479431797598939_1736479431797598939.jpg",
    "/Partner/7-1.jpg",
    "/Partner/Binghatti-logo-dark.png",
    "/Partner/damac-properties-logo-vector.png",
    "/Partner/emaar-logo-300x180px.png",
    "/Partner/ezgif-3-b69b539876.jpg",
    "/Partner/fe6bb6b8836c1ba792024f9ea439ec21.jpg",
    "/Partner/gen_1199-2.jpg",
    "/Partner/images-1.png",
    "/Partner/meraas9808.jpg",
    "/Partner/Nakheel-Jobs.jpg",
    "/Partner/sobha-realty-logo.jpg",
    "/Partner/the-heart-of-europe-logo-01.png",
    "/Partner/tiger-group-logo.webp",
  ]

  useEffect(() => {
    if (!api) return
    const id = setInterval(() => {
      api.scrollNext()
    }, 3000)
    return () => clearInterval(id)
  }, [api])

  return (
    <section className="pt-8 sm:pt-10 md:pt-12 pb-8 sm:pb-12 md:pb-16 bg-white border-t border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
        <div className="text-center mb-6 sm:mb-8 md:mb-10">
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
                  className="basis-1/4"
                >
                  <div className="flex items-center justify-center h-28 sm:h-32 md:h-36 lg:h-40 px-4">
                    <div className="relative w-full h-full">
                      <Image
                        src={src}
                        alt={alt}
                        fill
                        sizes="(max-width: 1024px) 25vw, 25vw"
                        className="object-contain opacity-80 hover:opacity-100 transition-opacity duration-300"
                        priority={idx < 4}
                      />
          </div>
        </div>
                </CarouselItem>
              )
            })}
          </CarouselContent>
          <CarouselPrevious className="flex" />
          <CarouselNext className="flex" />
        </Carousel>
      </div>
    </section>
  )
}

export default PartnersSection