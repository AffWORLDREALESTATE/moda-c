"use client";

import { useLanguage } from "@/src/contexts/LanguageContext"
import HeroBanner from "@/src/components/common/hero-banner"
import Link from "next/link"
import { Button } from "@/src/components/ui/button"
import { Map, Building2, TrendingUp, ArrowRight } from "lucide-react"

function ExploreDubaiProjects() {
  const { t } = useLanguage();
  return (
    <div className="luxury-bg">
      <HeroBanner title="Explore Dubai Projects" imageSrc="/images/bgImage.webp" />
      {/* Top Section - Full Width */}
      <div className="py-20 container mx-auto max-w-7xl px-6">
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-white/20 text-center">
          <p className="text-[#0a4b6f] text-sm font-medium uppercase tracking-widest font-sans mb-4">
            DISCOVER DUBAI'S PREMIER DEVELOPMENTS
          </p>
          <h2 className="text-4xl md:text-5xl text-gray-800 leading-tight font-sans mb-6 font-serif">
            Explore Dubai's Most Exclusive Projects
          </h2>
          <p className="text-gray-600 text-[20px] leading-relaxed font-sans max-w-4xl mx-auto">
            Discover and select your perfect home from our comprehensive collection of Dubai developments. From luxury off-plan properties to ready-to-move-in residences, we offer a wide range of options to suit every lifestyle and investment goal.
            <br/><br/>
            Browse through our curated selection of premium developments, each carefully chosen for their exceptional quality, prime locations, and outstanding investment potential. Whether you're looking for a family home, an investment property, or a luxury residence, we have the perfect project for you.
          </p>
        </div>
      </div>

      {/* Projects Categories */}
      <div className="py-20 container mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* Off-Plan Projects */}
          <Link href="/offPlanspremiumpropertyindubai" className="group">
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-white/20 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-br from-[#0a4b6f] to-[#1a6b8f] rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Building2 className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-4 font-sans">Off-Plan Projects</h3>
              <p className="text-gray-600 mb-6 font-sans">
                Explore our exclusive collection of off-plan developments. Get early access to the latest projects with attractive payment plans and investment opportunities.
              </p>
              <div className="flex items-center text-[#0a4b6f] font-medium group-hover:gap-2 transition-all">
                <span>View Projects</span>
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </Link>

          {/* Communities */}
          <Link href="/communities" className="group">
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-white/20 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-br from-[#0a4b6f] to-[#1a6b8f] rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Map className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-4 font-sans">Luxury Communities</h3>
              <p className="text-gray-600 mb-6 font-sans">
                Discover Dubai's most desirable neighborhoods. From waterfront communities to urban centers, find your perfect location.
              </p>
              <div className="flex items-center text-[#0a4b6f] font-medium group-hover:gap-2 transition-all">
                <span>Explore Communities</span>
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </Link>

          {/* Investment Opportunities */}
          <Link href="/buy" className="group">
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-white/20 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-br from-[#0a4b6f] to-[#1a6b8f] rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-4 font-sans">Investment Properties</h3>
              <p className="text-gray-600 mb-6 font-sans">
                Browse our selection of investment-ready properties. Find high-yield opportunities with excellent rental potential and capital appreciation.
              </p>
              <div className="flex items-center text-[#0a4b6f] font-medium group-hover:gap-2 transition-all">
                <span>View Properties</span>
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </Link>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-br from-[#0a4b6f] to-[#1a6b8f] rounded-2xl p-12 text-center text-white">
          <h3 className="text-3xl font-semibold mb-4 font-sans">Need Help Finding Your Perfect Project?</h3>
          <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto font-sans">
            Our expert team is here to help you navigate Dubai's real estate market and find the perfect project that matches your needs and investment goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contactUs">
              <Button className="bg-white text-[#0a4b6f] hover:bg-gray-100 px-8 py-6 text-lg font-semibold rounded-full">
                Contact Us
              </Button>
            </Link>
            <Link href="/offPlanspremiumpropertyindubai">
              <Button className="bg-transparent border-2 border-white text-white hover:bg-white/10 px-8 py-6 text-lg font-semibold rounded-full">
                Browse All Projects
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ExploreDubaiProjects

