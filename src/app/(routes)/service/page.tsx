import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Premium Real Estate Services in Dubai | Modac Real Estate",
  description: "Comprehensive real estate solutions in Dubai including Off-Plan management, Mortgages, Conveyancing, and Short-Term Rentals.",
  openGraph: {
    title: "Real Estate Services Dubai | Modac Real Estate",
    description: "Expert management and advisory for all your property needs in Dubai.",
    images: ["/images/Dubai-Hills-Estate.webp"],
  }
};

const servicesData = [
  {
    id: 1,
    title: "Off‑Plan Management",
    description:
      "From unit selection to handover, we manage the entire off‑plan journey—payment plans, SPA reviews, construction updates, and snagging—so your investment stays on track.",
    additionalInfo:
      "We compare developers, negotiate allocations, monitor milestones, and coordinate with banks and DM/Trakhees for timely NOCs and registrations.",
    imageUrl: "/images/Dubai-Hills-Estate.webp",
  },
  {
    id: 2,
    title: "Mortgages",
    description:
      "Independent mortgage advice with access to multiple banks. Get competitive rates, faster approvals, and a clear path from pre‑approval to transfer.",
    additionalInfo:
      "Residents and non‑residents welcome—buy‑outs, equity release, and tailored finance structures for end users and investors.",
    imageUrl: "/images/analysis.webp",
  },
  {
    id: 3,
    title: "Conveyancing",
    description:
      "Seamless sale and purchase transfers. We handle contracts, settlement statements, developer NOCs, trustee coordination, and registration.",
    additionalInfo:
      "Stay informed with proactive updates and risk checks that keep your transaction compliant and stress‑free.",
    imageUrl: "/images/third.webp",
  },
  {
    id: 4,
    title: "Short‑Term Rentals",
    description:
      "Full‑service holiday home management—pricing, marketing, guest vetting, housekeeping, and maintenance—to maximize occupancy and returns.",
    additionalInfo:
      "Hotel‑grade standards with transparent reporting and owner portals. Ideal for second homes and investment properties.",
    imageUrl: "/images/property3.jpeg",
  },
];

export default function Services() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="pt-32 pb-12 px-4 bg-white">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl font-medium mb-6 text-black font-serif font-bold">
            Services
          </h1>
        </div>
      </section>

      {/* Services Section */}
      <div className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {servicesData.map((service, index) => {
            const isEven = index % 2 === 0;

            return (
              <div
                key={service.id}
                className={`flex flex-col lg:flex-row items-center mb-20 ${
                  isEven ? "lg:flex-row-reverse" : "lg:flex-row"
                }`}
              >
                {/* Image Section */}
                <div className="w-full lg:w-1/2 mb-8 lg:mb-0">
                  <div className={`${isEven ? "lg:pl-8" : "lg:pr-8"}`}>
                    <div className="relative overflow-hidden rounded-none shadow-none">
                      <img
                        src={service.imageUrl}
                        alt={service.title}
                        className="w-full  sm:h-[600px] object-cover"
                      />
                    </div>
                  </div>
                </div>

                {/* Text Section */}
                <div className="w-full lg:w-1/2">
                  <div className={`${isEven ? "lg:pl-8" : "lg:pr-8"}`}>
                    <h2 className="text-3xl sm:text-4xl  font-mono text-gray-700 mb-6 font-serif">
                      {service.title}
                    </h2>

                    <p className="text-sm text-neutral-500 mb-6 ">
                      {service.description}
                    </p>

                    <p className="text-sm text-neutral-500 mb-8 ">
                      {service.additionalInfo}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

