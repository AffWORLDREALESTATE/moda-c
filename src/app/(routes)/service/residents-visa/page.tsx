import Image from "next/image";
import Link from "next/link";
import { Button } from "@/src/components/ui/button";
import EnquireForm from "@/src/components/common/enquireForm";
import AnimatedCard from "@/src/components/common/animated-card";
import { getProjectImagesByName } from "@/src/api/hero";
import { FadeUp, FadeIn } from "@/src/components/common/reveal";

export default async function ResidentsVisaPage() {
  const { images } = await getProjectImagesByName("Binghatti Skyrise Phase 2");
  const hero = images[0]?.url || "/images/dubai-marina.webp";
  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero */}
      <section className="relative min-h-[100vh] w-full overflow-hidden">
        <Image src={hero} alt="Dubai Skyline" fill priority className="object-cover" quality={90} />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-black/10" />
        <div className="relative z-10 h-full flex items-center">
          <div className="container mx-auto px-4 pt-24 sm:pt-28">
            <nav className="mb-3 text-sm text-white/80">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <span className="mx-2">/</span>
              <Link href="/service" className="hover:text-white transition-colors">Services</Link>
              <span className="mx-2">/</span>
              <span className="text-white">Residents Visa</span>
            </nav>
            <FadeUp>
              <h1 className="text-4xl sm:text-5xl font-serif font-bold text-white mb-3">Residents Visa Services</h1>
              <p className="max-w-2xl text-white/90">
                End-to-end guidance to obtain or renew your UAE residence visa. Tailored support for
                property owners, employees, and families relocating to Dubai.
              </p>
              <div className="mt-6">
                <Link href="/contactUs"><Button className="bg-[#314355] hover:bg-[#24313f] text-white border-0">Contact Us</Button></Link>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-white/80 border-y border-gray-200">
        <div className="container mx-auto px-4 py-8 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {[{k:"Avg Processing",v:"5-10 Days"},{k:"Approval Rate",v:"98%"},{k:"Family Cases",v:"2,000+"},{k:"Languages",v:"6+"}].map((s,i)=> (
            <div key={i}>
              <div className="text-2xl font-serif font-bold text-gray-900">{s.v}</div>
              <div className="text-xs text-gray-500 mt-1">{s.k}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Highlights */}
      <section className="py-12 sm:py-16">
        <div className="container mx-auto px-4">
          <FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: "Eligibility Review", desc: "We assess employment, property ownership, and sponsorship routes to select the most suitable pathway.", img: "/images/building.jpg" },
              { title: "Documentation & PRO", desc: "Dedicated PRO support for medicals, Emirates ID, biometrics, and immigration appointments.", img: "/images/analysis.webp" },
              { title: "Family Sponsorship", desc: "Spouse, children, and domestic worker sponsorship with clear requirements and timelines.", img: "/images/Palm-Jumeirah.webp" },
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

      {/* Process */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#314355] mb-6">Simple, Transparent Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { step: "01", title: "Consultation", desc: "We confirm the right visa route and provide a tailored checklist." },
              { step: "02", title: "Pre-Approvals", desc: "Prepare and submit applications, arrange medicals and EID typing." },
              { step: "03", title: "Stamps & EID", desc: "Coordinate biometrics and visa stamping with timely reminders." },
              { step: "04", title: "Aftercare", desc: "Banking, utilities, and renewals tracked well in advance." },
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
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-gray-900 mb-4">Speak to our Visa Specialists</h2>
            <p className="text-gray-600 mb-6">Share your circumstances and timeline—our team will outline costs, documents, and next steps within 24 hours.</p>
            <ul className="text-sm text-gray-700 space-y-2">
              <li>• Property-owner, employment, and family routes</li>
              <li>• Clear fees and government costs</li>
              <li>• Concierge support and renewals</li>
            </ul>
          </div>
          <div className="bg-white p-6 border border-gray-200 shadow-sm">
            <EnquireForm type="service" />
          </div>
        </div>
      </section>

      {/* Additional Information */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="order-2 lg:order-1">
              <h3 className="text-2xl font-serif font-bold text-[#314355] mb-3">Required Documents</h3>
              <p className="text-sm text-gray-600 mb-4">We provide a clear checklist based on your route—employment, property, or family sponsorship—so you submit the right papers the first time.</p>
              <ul className="text-sm text-gray-700 space-y-2">
                <li>• Passport, photos, and current visa/cancellation (if applicable)</li>
                <li>• Tenancy or title deed, salary certificate or labour contract</li>
                <li>• Marriage/birth certificates for dependants (attested)</li>
              </ul>
            </div>
            <div className="relative h-72 order-1 lg:order-2">
              <Image src="/images/list.jpg" alt="Documents" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Simple Timeline */}
      <section className="py-12 sm:py-16">
        <div className="container mx-auto px-4">
          <h3 className="text-2xl font-serif font-bold text-[#314355] mb-6">Your Journey</h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {["Consult","Submit","Biometrics","Visa Issued"].map((t,i)=> (
              <AnimatedCard key={i} delay={i*0.1} className="p-6 border border-gray-200 bg-gray-50 text-center">
                <div className="text-3xl font-serif font-bold text-gray-900 mb-2">0{i+1}</div>
                <div className="text-sm text-gray-700">{t}</div>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="container mx-auto px-4">
          <h3 className="text-2xl font-serif font-bold text-[#314355] mb-6">FAQs</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[{q:"How long does it take?",a:"Typically 5–10 working days after medicals and EID."},{q:"Can I sponsor my family?",a:"Yes, spouse and children subject to requirements."},{q:"Do you handle renewals?",a:"We manage reminders and the full renewal process."},{q:"Do I need a job offer?",a:"Not if you qualify via property ownership or sponsorship."}].map((f,i)=> (
              <AnimatedCard key={i} delay={i*0.08} className="p-6 border border-gray-200 bg-gray-50">
                <div className="font-medium text-gray-900 mb-1">{f.q}</div>
                <div className="text-sm text-gray-600">{f.a}</div>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}


