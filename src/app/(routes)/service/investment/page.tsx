import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/src/components/ui/button";
import EnquireForm from "@/src/components/common/enquireForm";
import AnimatedCard from "@/src/components/common/animated-card";
import { getProjectImagesByName } from "@/src/api/hero";
import { FadeUp, FadeIn } from "@/src/components/common/reveal";
import { T } from "@/src/components/common/T";

export async function generateMetadata(): Promise<Metadata> {
  const { images } = await getProjectImagesByName("Binghatti Skyrise Phase 2");
  const hero = images[2]?.url || images[0]?.url || "/images/bgImage.webp";
  
  return {
    title: "Investment Advisory & Portfolio Strategy in Dubai | Modac Real Estate",
    description: "Expert real estate investment advisory in Dubai. Data-led strategies to optimize yield, growth, and liquidity across prime districts.",
    openGraph: {
      title: "Real Estate Investment Advisory Dubai | Modac Real Estate",
      description: "Data-led strategies to optimize yield and growth in Dubai's prime real estate market.",
      images: [{ url: hero }],
      type: 'article',
    },
    twitter: {
      card: 'summary_large_image',
      title: "Dubai Real Estate Investment Advisory | Modac Real Estate",
      description: "Optimize your property yields with data-led investment strategies.",
      images: [hero],
    }
  };
}

export default async function InvestmentAdvisoryPage() {
  const { images } = await getProjectImagesByName("Binghatti Skyrise Phase 2");
  const hero = images[2]?.url || images[0]?.url || "/images/bgImage.webp";
  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero */}
      <section className="relative min-h-[calc(100vh-56px)] sm:min-h-[calc(100vh-64px)] w-full overflow-hidden">
        <Image src={hero} alt="Investment Advisory" fill priority className="object-cover" quality={90} />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-black/10" />
        <div className="relative z-10 h-full flex items-center justify-center">
          <div className="container mx-auto px-4 text-center">
            <nav className="mb-3 text-sm text-white/80 flex items-center justify-center gap-2">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <span>/</span>
              <Link href="/service" className="hover:text-white transition-colors">Services</Link>
              <span>/</span>
              <span className="text-white">Investment Advisory</span>
            </nav>
            <FadeUp>
              <div className="mx-auto w-full max-w-3xl mt-16 sm:mt-24 md:mt-32">
                <div className="bg-black/45 backdrop-blur-sm rounded-xl p-6 sm:p-8 border border-white/10 shadow-2xl">
                  <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-white mb-3"><T k="services.investment.title" fallback="Investment Advisory" /></h1>
                  <p className="text-white/90 text-sm sm:text-base">
                <T k="services.investment.subtitle" fallback="Data-led strategies to optimise yield, growth, and liquidity across Dubai’s prime and emerging districts." />
              </p>
                  <div className="mt-5">
                <Link href="/contactUs"><Button className="bg-[#314355] hover:bg-[#24313f] text-white border-0"><T k="contact.cta" fallback="Contact Us" /></Button></Link>
                  </div>
                </div>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-white/80 border-y border-gray-200">
        <div className="container mx-auto px-4 py-8 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {[
            {k: <T k="services.investment.stats.targetYields" fallback="Target Yields" />, v: "6-9%"},
            {k: <T k="services.investment.stats.transactions" fallback="Transactions" />, v: "3,500+"},
            {k: <T k="services.investment.stats.communities" fallback="Communities" />, v: "25+"},
            {k: <T k="services.investment.stats.team" fallback="Team" />, v: "Senior Advisors"},
          ].map((s,i)=> (
            <div key={i}>
              <div className="text-2xl font-serif font-bold text-gray-900">{s.v}</div>
              <div className="text-xs text-gray-500 mt-1">{s.k}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Focus Areas */}
      <section className="py-12 sm:py-16">
        <div className="container mx-auto px-4">
          <FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { title: <T k="services.investment.focus.marketIntelligence.title" fallback="Market Intelligence" />, desc: <T k="services.investment.focus.marketIntelligence.desc" fallback="Supply-demand analysis, developer pipelines, and micro-market insights." />, img: "/images/marketprofiling.webp" },
            { title: <T k="services.investment.focus.assetSelection.title" fallback="Asset Selection" />, desc: <T k="services.investment.focus.assetSelection.desc" fallback="Off-plan allocations and secondary assets matched to your risk profile." />, img: "/images/card3.jpeg" },
            { title: <T k="services.investment.focus.performanceExits.title" fallback="Performance & Exits" />, desc: <T k="services.investment.focus.performanceExits.desc" fallback="Leasing strategy, holiday homes, and exit timing to optimise returns." />, img: "/images/card4.jpeg" },
          ].map((card, i) => (
            <AnimatedCard key={i} delay={i * 0.1} className="bg-white border border-gray-200">
              <div className="relative h-56">
                <Image src={card.img} alt={card.title} fill className="object-cover" />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold text-[#314355] mb-2">{card.title}</h3>
                <p className="text-sm text-gray-600">{card.desc}</p>
              </div>
            </AnimatedCard>
          ))}
          </div>
          </FadeIn>
        </div>
      </section>

      {/* Additional Insights */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-serif font-bold text-[#314355] mb-3"><T k="services.investment.insights.heading" fallback="Risk and Return Balance" /></h3>
              <p className="text-sm text-gray-600 mb-4"><T k="services.investment.insights.p" fallback="We map sub-market cycles, rental demand, and developer supply to recommend assets aligned to your risk tolerance and holding horizon." /></p>
              <ul className="text-sm text-gray-700 space-y-2">
                <li><T k="services.investment.insights.b1" fallback="• Yield vs growth trade-offs by community" /></li>
                <li><T k="services.investment.insights.b2" fallback="• Off-plan stage selection and incentive analysis" /></li>
                <li><T k="services.investment.insights.b3" fallback="• Exit timing and liquidity considerations" /></li>
              </ul>
            </div>
            <div className="relative h-72">
              <Image src="/images/analysis.webp" alt="Insights" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Approach */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#314355] mb-6"><T k="services.investment.approach.heading" fallback="Our Advisory Approach" /></h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { step: "01", title: <T k="services.investment.approach.01.title" fallback="Brief & Mandate" />, desc: <T k="services.investment.approach.01.desc" fallback="Define objectives, budget, and timelines with a clear mandate." /> },
              { step: "02", title: <T k="services.investment.approach.02.title" fallback="Shortlist" />, desc: <T k="services.investment.approach.02.desc" fallback="Data-backed shortlist with comparables, cashflows, and risk notes." /> },
              { step: "03", title: <T k="services.investment.approach.03.title" fallback="Negotiation" />, desc: <T k="services.investment.approach.03.desc" fallback="Secure allocations, incentives, and pricing with developers or sellers." /> },
              { step: "04", title: <T k="services.investment.approach.04.title" fallback="Execution" />, desc: <T k="services.investment.approach.04.desc" fallback="Conveyancing, financing, and post-handover leasing or exit planning." /> },
            ].map((item, i) => (
              <AnimatedCard key={i} delay={0.15 * i} className="p-6 border border-gray-200 bg-gray-50 h-full">
                <div className="text-gray-400 text-sm mb-2">{item.step}</div>
                <h3 className="font-semibold text-[#314355] mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.desc}</p>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </section>

      {/* CTA + Form */}
      <section id="enquire" className="py-16">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#314355] mb-4"><T k="services.investment.cta.heading" fallback="Request an Investment Brief" /></h2>
            <p className="text-gray-600 mb-6"><T k="services.investment.cta.p" fallback="Tell us your target returns and timeline. We’ll respond with a strategy outline and next steps." /></p>
            <ul className="text-sm text-gray-700 space-y-2">
              <li><T k="services.investment.cta.b1" fallback="• Rental yields and IRR modelling" /></li>
              <li><T k="services.investment.cta.b2" fallback="• Off-plan and secondary deal flow" /></li>
              <li><T k="services.investment.cta.b3" fallback="• Portfolio structuring and financing" /></li>
            </ul>
          </div>
          <div className="bg-white p-6 border border-gray-200 shadow-sm">
            <EnquireForm type="service" />
          </div>
        </div>
      </section>
    </main>
  );
}


