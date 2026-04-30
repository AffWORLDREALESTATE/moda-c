"use client";
import { SearchBar } from "@/src/components/common/search-bar";
import HeroSection from "@/src/view/landing/hero-section";
import Feature from "@/src/view/landing/feature";
import Communities from "@/src/view/landing/Communities";
import Property from "@/src/view/landing/property";
import { InsightsInspiration } from "@/src/view/landing/blog";
import InstagramSection from "@/src/view/landing/instagram-section";
import { CallToAction } from "@/src/view/landing/call-to-action";
import PartnersSection from "@/src/view/landing/PartnersSection";
import Solutions from "@/src/view/landing/solutions";

export default function Home() {
  return (
    <div className="bg-white overflow-hidden">
      <HeroSection />
      
      {/* Search Bar Section - Repositioned after Hero */}
      <div className="relative z-30 -mt-12 sm:-mt-16 md:-mt-20 px-4 mb-12 sm:mb-16 md:mb-20">
        <div className="container mx-auto max-w-6xl">
          <SearchBar />
        </div>
      </div>
     
      <Property />
      <Solutions/>
      {/* <Feature /> */}
      <Communities />
      <PartnersSection />
      <InsightsInspiration />
      <CallToAction />
    </div>
  );
}
