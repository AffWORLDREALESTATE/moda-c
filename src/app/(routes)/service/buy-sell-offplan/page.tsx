import Image from "next/image";
import Link from "next/link";
import { Button } from "@/src/components/ui/button";
import EnquireForm from "@/src/components/common/enquireForm";
import AnimatedCard from "@/src/components/common/animated-card";
import { getProjectImagesByName } from "@/src/api/hero";
import { FadeUp, FadeIn } from "@/src/components/common/reveal";
import { T } from "@/src/components/common/T";

export default async function BuySellOffplanPage() {
  const { images } = await getProjectImagesByName("Binghatti Skyrise Phase 2");
  const hero = images[2]?.url || images[1]?.url || "/images/Dubai-Creek-Harbour.webp";
  return (
    <main className="min-h-screen bg-gray-50">
      <section className="relative min-h-[calc(100vh-56px)] sm:min-h-[calc(100vh-64px)] w-full overflow-hidden">
        <Image src={hero} alt="Dubai" fill priority className="object-cover" quality={90} />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-black/10" />
        <div className="relative z-10 h-full flex items-center justify-center">
          <div className="container mx-auto px-4 text-center">
            <FadeUp>
              <div className="mx-auto w-full max-w-3xl mt-16 sm:mt-24 md:mt-32">
                <div className="bg-black/45 backdrop-blur-sm rounded-xl p-6 sm:p-8 border border-white/10 shadow-2xl">
                  <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-white mb-3"><T k="services.buySell.title" fallback="Buy, Sell & Off-Plan Properties" /></h1>
                  <p className="text-white/90 text-sm sm:text-base">
                    <T k="services.buySell.subtitle" fallback="End-to-end brokerage for primary and secondary markets: sourcing, pricing, negotiations and after‑sales." />
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

      {/* Value Propositions */}
      <section className="py-12 sm:py-16">
        <div className="container mx-auto px-4">
          <FadeIn>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[{
                title: "Buy",
                desc: "Curated inventory across prime communities with transparent comparables and pricing.",
                img: "/images/property1.jpeg"
              },{
                title: "Sell",
                desc: "Valuation, positioning and multi‑channel marketing to maximise proceeds.",
                img: "/images/property2.jpeg"
              },{
                title: "Off‑Plan",
                desc: "Developer allocations and incentives with priority access to launches.",
                img: "/images/property3.jpeg"
              }].map((card,i)=> (
                <AnimatedCard key={i} delay={i*0.1} className="bg-white border border-gray-200">
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

      {/* Animated Stats */}
      <section className="py-12 sm:py-16 bg-white/80 border-y border-gray-200">
        <div className="container mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {[{k:"Communities",v:"25+"},{k:"Transactions",v:"3,500+"},{k:"Avg Days to Sell",v:"28"},{k:"Exclusive Launches",v:"40+"}].map((s,i)=> (
            <div key={i} className="transform transition duration-500 hover:-translate-y-1">
              <div className="text-2xl font-serif font-bold text-gray-900">{s.v}</div>
              <div className="text-xs text-gray-500 mt-1">{s.k}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Process Timeline */}
      <section className="py-12 sm:py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#314355] mb-6">How we work</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[{s:"01",t:"Discovery",d:"Objectives, budget and timelines"},{s:"02",t:"Shortlist",d:"Data‑backed options and comparables"},{s:"03",t:"Negotiation",d:"Pricing, incentives and terms"},{s:"04",t:"Completion",d:"Conveyancing, handover and after‑sales"}].map((step,i)=>(
              <AnimatedCard key={i} delay={i*0.1} className="p-6 border border-gray-200 bg-gray-50 h-full">
                <div className="text-gray-400 text-sm mb-2">{step.s}</div>
                <h3 className="font-semibold text-[#314355] mb-2">{step.t}</h3>
                <p className="text-sm text-gray-600">{step.d}</p>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </section>

      {/* Featured CTA Banner */}
      <section className="relative py-16">
        <div className="absolute inset-0">
          <Image src="/images/dubai-skyline-30.svg" alt="bg" fill className="object-cover opacity-10" />
        </div>
        <div className="relative container mx-auto px-4 text-center">
          <h3 className="text-2xl sm:text-3xl font-serif font-bold text-gray-900">Access priority launches & exclusive allocations</h3>
          <p className="text-gray-600 mt-2">Register your interest to receive pre‑launch inventory and pricing before public release.</p>
          <div className="mt-6">
            <Link href="/contactUs"><Button className="bg-[#314355] hover:bg-[#24313f] text-white border-0">Get Priority Access</Button></Link>
          </div>
        </div>
      </section>

      <section id="enquire" className="py-16">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#314355] mb-4">Work with a certified advisor</h2>
            <p className="text-gray-600 mb-6">Tell us your objectives and timeline. We’ll propose a tailored route with inventory and next steps.</p>
          </div>
          <div className="bg-white p-6 border border-gray-200 shadow-sm">
            <EnquireForm type="service" />
          </div>
        </div>
      </section>
    </main>
  );
}


