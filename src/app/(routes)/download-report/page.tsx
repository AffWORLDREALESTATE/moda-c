"use client";

import { Input } from "@/src/components/ui/input"
import { Textarea } from "@/src/components/ui/textarea"
import { Button } from "@/src/components/ui/button"
import EnquireForm from "@/src/components/common/enquireForm"
import { useLanguage } from "@/src/contexts/LanguageContext"
import HeroBanner from "@/src/components/common/hero-banner"
import { FileText, Download } from "lucide-react"

function DownloadReport() {
  const { t } = useLanguage();
  return (
    <div className="luxury-bg">
      <HeroBanner title="Download Report" imageSrc="/images/bgImage.webp" />
      {/* Top Section - Full Width */}
      <div className="py-20 container mx-auto max-w-7xl px-6">
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-white/20 text-center">
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 bg-gradient-to-br from-[#0a4b6f] to-[#1a6b8f] rounded-full flex items-center justify-center">
              <FileText className="w-8 h-8 text-white" />
            </div>
          </div>
          <p className="text-[#0a4b6f] text-sm font-medium uppercase tracking-widest font-sans mb-4">
            DUBAI PROPERTY MARKET REPORT
          </p>
          <h2 className="text-4xl md:text-5xl text-gray-800 leading-tight font-sans mb-6 font-serif">
            Get the Latest Dubai Property Market Report Q1 2025
          </h2>
          <p className="text-gray-600 text-[20px] leading-relaxed font-sans max-w-4xl mx-auto">
            Access the most comprehensive and detailed analysis of Dubai's property market for Q1 2025. Our report includes market trends, price analysis, investment opportunities, and expert insights to help you make informed decisions.
            <br/><br/>
            This exclusive report covers:
            <br/>
            • Market trends and analysis<br/>
            • Price movements and forecasts<br/>
            • Top investment areas<br/>
            • Developer insights<br/>
            • Future market projections<br/>
            <br/>
            Fill out the form below to download your free copy of the Dubai Property Market Report Q1 2025.
          </p>
        </div>
      </div>

      {/* Bottom Section - Two Columns */}
      <div className="flex flex-col lg:flex-row py-20 items-start justify-center container mx-auto max-w-7xl px-6 gap-8">
        <div className="w-full lg:w-1/2">
          <div className="bg-gradient-to-br from-[#0a4b6f]/10 to-[#1a6b8f]/10 rounded-2xl p-6 border border-[#0a4b6f]/20">
            <h3 className="text-xl font-semibold text-gray-800 mb-6 font-sans">Report Highlights</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-[#0a4b6f] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
                <div>
                  <p className="text-gray-800 font-medium font-sans">Comprehensive Market Analysis</p>
                  <p className="text-gray-600 text-sm font-sans">Detailed insights into Dubai's real estate market trends and patterns.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-[#0a4b6f] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
                <div>
                  <p className="text-gray-800 font-medium font-sans">Price Analysis & Forecasts</p>
                  <p className="text-gray-600 text-sm font-sans">Current pricing data and future market projections.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-[#0a4b6f] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
                <div>
                  <p className="text-gray-800 font-medium font-sans">Investment Opportunities</p>
                  <p className="text-gray-600 text-sm font-sans">Top areas and developments for investment in Dubai.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-[#0a4b6f] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
                <div>
                  <p className="text-gray-800 font-medium font-sans">Expert Insights</p>
                  <p className="text-gray-600 text-sm font-sans">Professional analysis and recommendations from our team.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full lg:w-1/2">
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-white/20">
            <h3 className="text-2xl font-semibold text-gray-800 mb-6 font-sans">Download Report</h3>
            <EnquireForm type="download-report"/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DownloadReport

