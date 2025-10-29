"use client";
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
     
      <Property />
      <Solutions/>
      <Feature />
      <Communities />
      <PartnersSection />
      <InsightsInspiration />
      <CallToAction />
    </div>
  );
}
