"use client";

import Image from "next/image";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";
import { Separator } from "@/src/components/ui/separator";

export default function LocationSection({ property }: any) {
  const location = property?.location
  const amenities = [
    {
      icon: "arcticons:epic-plane",
      title: "Airport",
      time: "28 min",
    },
    {
      icon: "la:umbrella-beach",
      title: "Beach",
      time: "30 min",
    },
    {
      icon: "mage:hospital-circle",
      title: "Hospital",
      time: "9 min",
    },
    {
      icon: "fluent-mdl2:reading-mode",
      title: "School",
      time: "5 min",
    },
    {
      icon: "heroicons-outline:shopping-bag",
      title: "Shops",
      time: "11 min",
    },
  ];

  return (
    <section className="w-full bg-[#F8F5EF]">
      <div className="mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-10 lg:gap-12">
        {/* Map Side */}
        <div className="w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] overflow-hidden">
          <iframe
            width="100%"
            height="100%"
            style={{ border: 0 }}
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
            src={`https://maps.google.com/maps?q=${location?.latitude},${location?.longitude}&hl=es;z=14&output=embed`}
          ></iframe>
        </div>

        {/* Right Side - Content above Image */}
        <section className="relative py-8 sm:py-12 md:py-16 lg:py-24 overflow-hidden bg-[#F8F5EF]">
          <div className="absolute bottom-0 inset-x-0 w-full h-48 sm:h-56 md:h-64 opacity-40">
            <Image
              src="/images/dubai-skyline-30.svg"
              alt="Dubai Skyline"
              fill
              className="object-bottom"
              priority
            />
          </div>
          {/* Content */}
          <div className="relative z-10 container mx-auto px-4 sm:px-6 md:px-10 lg:px-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-mono mb-3 sm:mb-4 font-serif">Location</h2>
              <p className="text-neutral-400 text-base sm:text-lg leading-relaxed line-clamp-4 sm:line-clamp-5 md:line-clamp-6 mb-4 sm:mb-6">
              {
                property?.description
              }
              </p>

              <motion.div>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 sm:gap-4 md:gap-6 text-center mt-4 sm:mt-6">
                  {amenities?.map((obj, idx) => (
                    <div key={`${obj?.title}-${idx}`} className="flex flex-col items-center">
                      <div className="flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-2 mb-1 sm:mb-2">
                        <Icon
                          icon={obj?.icon}
                          className="text-2xl sm:text-3xl md:text-3xl text-primary flex-shrink-0"
                        />
                        <p className="text-xs sm:text-sm md:text-base font-medium text-gray-800">{obj?.title}</p>
                      </div>
                      <Separator className="my-1 sm:my-1.5 bg-primary w-full max-w-[60px] sm:max-w-[80px]" />
                      <p className="text-xs sm:text-sm text-gray-600 font-light">{obj?.time}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>
      </div>
    </section>
  );
}
