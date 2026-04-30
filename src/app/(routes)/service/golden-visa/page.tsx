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
  const hero = images[1]?.url || images[0]?.url || "/images/Dubai-Creek-Harbour.webp";
  
  return {
    title: "UAE Golden Visa - 10-Year Residency | Modac Real Estate",
    description: "Secure your 10-year UAE Golden Visa through property investment or entrepreneurship. Expert guidance and full processing services by Modac Real Estate.",
    openGraph: {
      title: "UAE Golden Visa - 10-Year Residency | Modac Real Estate",
      description: "Secure your 10-year UAE Golden Visa through property investment. Complete concierge service in Dubai.",
      images: [{ url: hero }],
      type: 'article',
    },
    twitter: {
      card: 'summary_large_image',
      title: "UAE Golden Visa - 10-Year Residency | Modac Real Estate",
      description: "Secure your 10-year UAE Golden Visa through property investment.",
      images: [hero],
    }
  };
}

export default async function GoldenVisaPage() {
  const { images } = await getProjectImagesByName("Binghatti Skyrise Phase 2");
  const hero = images[1]?.url || images[0]?.url || "/images/Dubai-Creek-Harbour.webp";
  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero */}
      <section className="relative min-h-[calc(100vh-56px)] sm:min-h-[calc(100vh-64px)] w-full overflow-hidden">
        <Image src={hero} alt="Dubai Creek" fill priority className="object-cover" quality={90} />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-black/10" />
        <div className="relative z-10 h-full flex items-center justify-center">
          <div className="container mx-auto px-4 text-center">
            <nav className="mb-3 text-sm text-white/80 flex items-center justify-center gap-2">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <span>/</span>
              <Link href="/service" className="hover:text-white transition-colors">Services</Link>
              <span>/</span>
              <span className="text-white">Golden Visa</span>
            </nav>
            <FadeUp>
              <div className="mx-auto w-full max-w-3xl mt-16 sm:mt-24 md:mt-32">
                <div className="bg-black/45 backdrop-blur-sm rounded-xl p-6 sm:p-8 border border-white/10 shadow-2xl">
                  <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-white mb-3"><T k="services.golden.title" fallback="UAE Golden Visa" /></h1>
                  <p className="text-white/90 text-sm sm:text-base">
                    <T k="services.golden.subtitle" fallback="Secure a 10-year residency through property investment, entrepreneurship, or recognised professional excellence. We manage every step with precision." />
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
            {k: <T k="services.golden.stats.residencyTenure" fallback="Residency Tenure" />, v: "10 Years"},
            {k: <T k="services.golden.stats.dependants" fallback="Dependants" />, v: "Spouse & Kids"},
            {k: <T k="services.golden.stats.processing" fallback="Processing" />, v: "Fast-Track"},
            {k: <T k="services.golden.stats.sponsor" fallback="Sponsor" />, v: "Not Required"},
          ].map((s,i)=> (
            <div key={i}>
              <div className="text-2xl font-serif font-bold text-gray-900">{s.v}</div>
              <div className="text-xs text-gray-500 mt-1">{s.k}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Benefits */}
      <section className="py-12 sm:py-16">
        <div className="container mx-auto px-4">
          <FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { title: "10-Year Residency", desc: "Long-term stability with multiple entry benefits and no sponsor required.", img: "/images/third.webp" },
            { title: "Family Coverage", desc: "Spouse, children, and support staff eligibility with streamlined sponsorship.", img: "/images/property1.jpeg" },
            { title: "Investment Options", desc: "Property value thresholds, business setups, or talent-based eligibility.", img: "/images/Dubai-Hills-Estate.webp" },
          ].map((card, i) => (
            <AnimatedCard key={i} delay={i * 0.12} className="bg-white border border-gray-200">
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

      {/* Pathways */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#314355] mb-6">Eligibility Pathways</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: "Real Estate Investor", desc: "Qualify via property ownership meeting the current threshold and criteria." },
              { title: "Entrepreneurs & Founders", desc: "Business ownership or startup investment with approvals from authorities." },
              { title: "Researchers & Talents", desc: "Doctors, engineers, creatives, and exceptional talents with endorsements." },
            ].map((item, i) => (
              <AnimatedCard key={i} delay={0.15 * i} className="p-6 border border-gray-200 bg-gray-50 h-full">
                <h3 className="font-semibold text-[#314355] mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.desc}</p>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-12 sm:py-16">
        <div className="container mx-auto px-4">
          <h3 className="text-2xl font-serif font-bold text-[#314355] mb-6">FAQs</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[{q:"Is property finance allowed?",a:"Yes, subject to minimum equity per current rules."},{q:"Can I stay outside UAE?",a:"Extended stay allowances apply for Golden Visa holders."},{q:"Can I sponsor staff?",a:"Domestic worker sponsorship is permitted within limits."},{q:"Do you assist with renewals?",a:"Yes, with reminders and concierge PRO services."}].map((f,i)=> (
              <AnimatedCard key={i} delay={i*0.08} className="p-6 border border-gray-200 bg-gray-50">
                <div className="font-medium text-gray-900 mb-1">{f.q}</div>
                <div className="text-sm text-gray-600">{f.a}</div>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </section>

      {/* CTA + Form */}
      <section id="enquire" className="py-16">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-gray-900 mb-4">Check Your Eligibility</h2>
            <p className="text-gray-600 mb-6">Tell us about your assets, profession, or business plans. We outline the most efficient route and the full cost breakdown.</p>
            <ul className="text-sm text-gray-700 space-y-2">
              <li>• Government-approved pathways</li>
              <li>• Transparent timelines and fees</li>
              <li>• Concierge PRO and renewals</li>
            </ul>
          </div>
          <div className="bg-white p-6 border border-gray-200 shadow-sm">
            <EnquireForm type="service" />
          </div>
        </div>
      </section>

      {/* Additional Information */}
      <section className="py-12 sm:py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="relative h-72">
              <Image src="/images/building.jpg" alt="Eligibility" fill className="object-cover" />
            </div>
            <div>
              <h3 className="text-2xl font-serif font-bold text-[#314355] mb-3">Investment Criteria</h3>
              <p className="text-sm text-gray-600 mb-4">We help you evaluate routes—property value thresholds, business ownership, or exceptional talent endorsements—and assemble approvals with zero guesswork.</p>
              <ul className="text-sm text-gray-700 space-y-2">
                <li>• Property valuation and mortgage considerations</li>
                <li>• Business setup and authority approvals</li>
                <li>• Professional endorsements and documentation</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}


