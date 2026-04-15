import AnimatedSection from "@/components/AnimatedSection";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Locations | Huxley Partners",
  description:
    "Discover our offices in Mexico City, Spain, and the Czech Republic. Global presence with local reach for your most strategic legal matters.",
};

const locations = [
  {
    city: "Mexico City",
    country: "Mexico",
    badge: "Main Office",
    badgeColor: "bg-accent text-white",
    address: "Bosque de Ciruelos 160, Floor 1",
    area: "Bosque de las Lomas, 11700",
    description:
      "Our headquarters, from which we coordinate all firm operations and serve national and international clients with a presence in the Mexican market.",
    cta: { label: "Contact Us", href: "/en/contacto" },
    dotX: 23,
    dotY: 45,
  },
  {
    city: "Spain",
    country: "Europe",
    badge: "European Office",
    badgeColor: "bg-primary text-white",
    address: null,
    area: null,
    description:
      "Our European office enables us to directly serve clients across the European Union, facilitate cross-border transactions, and coordinate regulatory matters under European frameworks.",
    cta: null,
    dotX: 48,
    dotY: 28,
  },
  {
    city: "Czech Republic",
    country: "Europe",
    badge: "European Presence",
    badgeColor: "bg-primary-dark text-white",
    address: null,
    area: null,
    description:
      "Our Central European presence strengthens our ability to operate across multiple jurisdictions and handle corporate matters with continental reach.",
    cta: null,
    dotX: 52,
    dotY: 27,
  },
];

export default function Locations() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-primary-dark to-primary">
        <div className="max-w-5xl mx-auto px-6 lg:px-8 text-center">
          <AnimatedSection>
            <span className="text-sm font-semibold tracking-[0.2em] uppercase text-white/80 mb-4 block">
              International Presence
            </span>
            <h1 className="font-[family-name:var(--font-display)] text-4xl md:text-6xl font-bold text-white mb-6">
              Our Locations
            </h1>
            <p className="text-lg text-gray-200 max-w-2xl mx-auto leading-relaxed">
              With offices across three continents, we deliver strategic legal
              counsel with a global perspective and deep local expertise.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* World Map Section */}
      <section className="py-24 lg:py-32 bg-primary-dark relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-12">
              <span className="text-sm font-semibold tracking-[0.2em] uppercase text-white/60 mb-4 block">
                Global Network
              </span>
              <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl font-bold text-white mb-4">
                Connected Worldwide
              </h2>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <div className="relative max-w-4xl mx-auto">
              <svg viewBox="0 0 1000 500" className="w-full h-auto" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
                    <circle cx="10" cy="10" r="0.8" fill="rgba(255,255,255,0.06)" />
                  </pattern>
                </defs>
                <rect width="1000" height="500" fill="url(#grid)" />
                <g opacity="0.15" fill="white">
                  <ellipse cx="220" cy="170" rx="110" ry="80" />
                  <ellipse cx="230" cy="260" rx="30" ry="30" />
                  <ellipse cx="300" cy="350" rx="60" ry="90" />
                  <ellipse cx="500" cy="150" rx="60" ry="50" />
                  <ellipse cx="510" cy="300" rx="55" ry="80" />
                  <ellipse cx="680" cy="180" rx="120" ry="70" />
                  <ellipse cx="740" cy="290" rx="40" ry="30" />
                  <ellipse cx="800" cy="380" rx="50" ry="35" />
                </g>
                <line x1="220" y1="230" x2="490" y2="155" stroke="rgba(74,122,196,0.4)" strokeWidth="1.5" strokeDasharray="6 4">
                  <animate attributeName="stroke-dashoffset" from="10" to="0" dur="2s" repeatCount="indefinite" />
                </line>
                <line x1="490" y1="155" x2="530" y2="145" stroke="rgba(74,122,196,0.4)" strokeWidth="1.5" strokeDasharray="6 4">
                  <animate attributeName="stroke-dashoffset" from="10" to="0" dur="1.5s" repeatCount="indefinite" />
                </line>
                <line x1="220" y1="230" x2="530" y2="145" stroke="rgba(74,122,196,0.2)" strokeWidth="1" strokeDasharray="4 6">
                  <animate attributeName="stroke-dashoffset" from="10" to="0" dur="3s" repeatCount="indefinite" />
                </line>
                <circle cx="220" cy="230" r="12" fill="rgba(50,94,168,0.3)">
                  <animate attributeName="r" values="12;18;12" dur="3s" repeatCount="indefinite" />
                  <animate attributeName="opacity" values="0.3;0.1;0.3" dur="3s" repeatCount="indefinite" />
                </circle>
                <circle cx="220" cy="230" r="5" fill="#325EA8" stroke="white" strokeWidth="2" />
                <text x="220" y="258" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold" fontFamily="system-ui">Mexico City</text>
                <circle cx="490" cy="155" r="12" fill="rgba(50,94,168,0.3)">
                  <animate attributeName="r" values="12;18;12" dur="3s" begin="0.5s" repeatCount="indefinite" />
                  <animate attributeName="opacity" values="0.3;0.1;0.3" dur="3s" begin="0.5s" repeatCount="indefinite" />
                </circle>
                <circle cx="490" cy="155" r="5" fill="#325EA8" stroke="white" strokeWidth="2" />
                <text x="490" y="183" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold" fontFamily="system-ui">Spain</text>
                <circle cx="530" cy="140" r="12" fill="rgba(50,94,168,0.3)">
                  <animate attributeName="r" values="12;18;12" dur="3s" begin="1s" repeatCount="indefinite" />
                  <animate attributeName="opacity" values="0.3;0.1;0.3" dur="3s" begin="1s" repeatCount="indefinite" />
                </circle>
                <circle cx="530" cy="140" r="5" fill="#325EA8" stroke="white" strokeWidth="2" />
                <text x="560" y="130" textAnchor="start" fill="white" fontSize="12" fontWeight="bold" fontFamily="system-ui">Czech Republic</text>
              </svg>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Location Cards */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-16">
              <span className="text-sm font-semibold tracking-[0.2em] uppercase text-accent mb-4 block">
                Our Offices
              </span>
              <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl font-bold text-primary-dark">
                Three Offices, One Vision
              </h2>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {locations.map((loc, i) => (
              <AnimatedSection key={loc.city} delay={i * 0.15}>
                <div className="bg-surface rounded-2xl p-8 h-full flex flex-col shadow-sm hover:shadow-md transition-shadow duration-300">
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                      <svg
                        className="w-6 h-6 text-primary"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1.5}
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1.5}
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                    </div>
                    <span className={`text-xs font-semibold tracking-wide uppercase px-3 py-1 rounded-full ${loc.badgeColor}`}>
                      {loc.badge}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-primary-dark mb-1">
                    {loc.city}
                  </h3>
                  <p className="text-sm text-accent font-medium mb-4">
                    {loc.country}
                  </p>

                  {loc.address && (
                    <div className="mb-4 p-4 bg-white rounded-xl">
                      <p className="text-sm text-text-light leading-relaxed">
                        {loc.address}
                        <br />
                        {loc.area}
                      </p>
                    </div>
                  )}

                  <p className="text-text-light leading-relaxed text-sm flex-1">
                    {loc.description}
                  </p>

                  {loc.cta && (
                    <Link
                      href={loc.cta.href}
                      className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary-dark transition-colors"
                    >
                      {loc.cta.label}
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </Link>
                  )}
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Global Reach Section */}
      <section className="py-24 lg:py-32 bg-surface">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-12">
              <span className="text-sm font-semibold tracking-[0.2em] uppercase text-accent mb-4 block">
                International Reach
              </span>
              <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl font-bold text-primary-dark mb-8">
                Global Presence, Local Reach
              </h2>
            </div>
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <p className="text-text-light leading-relaxed text-lg mb-6">
              At Huxley Partners, our international presence is not merely
              geographic -- it is operational. We work in a coordinated manner
              across jurisdictions to provide our clients with comprehensive
              counsel that transcends borders.
            </p>
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <p className="text-text-light leading-relaxed text-lg mb-6">
              Whether it involves a European investment in Mexico, a Latin
              American expansion into Europe, or a complex multi-jurisdictional
              transaction, we have the infrastructure and expertise to
              accompany every stage of the process.
            </p>
          </AnimatedSection>
          <AnimatedSection delay={0.3}>
            <p className="text-text-light leading-relaxed text-lg">
              Our international network enables us to coordinate teams, align
              regulatory strategies, and ensure that every operation meets the
              highest legal standards across each jurisdiction involved.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 lg:py-32 bg-primary-dark">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <AnimatedSection>
            <h2 className="font-[family-name:var(--font-display)] text-2xl md:text-4xl font-bold text-white mb-6">
              Have a cross-border legal matter?
            </h2>
            <p className="text-lg text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed">
              Our international team is ready to help. Contact us for an
              initial consultation.
            </p>
            <Link
              href="/en/contacto"
              className="inline-flex items-center gap-3 px-8 py-4 bg-accent text-white font-semibold rounded-lg hover:bg-accent/90 transition-colors tracking-wide"
            >
              Contact Us
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
