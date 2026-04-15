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

      {/* Interactive Map Section */}
      <section className="py-24 lg:py-32 bg-primary-dark relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-12">
              <span className="text-sm font-semibold tracking-[0.2em] uppercase text-accent mb-4 block">
                Global Network
              </span>
              <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl font-bold text-white mb-4">
                Connected Worldwide
              </h2>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <div className="relative w-[300px] h-[300px] md:w-[400px] md:h-[400px] lg:w-[500px] lg:h-[500px] mx-auto"
              style={{ perspective: '1000px' }}>
              {/* Globe glow */}
              <div className="absolute inset-0 rounded-full bg-primary/20 blur-3xl scale-110" />

              {/* Globe sphere */}
              <div className="relative w-full h-full rounded-full overflow-hidden border-2 border-primary-light/30 shadow-2xl"
                style={{
                  background: 'radial-gradient(circle at 30% 30%, #4A7AC4 0%, #325EA8 40%, #1B3A6B 70%, #0f2440 100%)',
                  boxShadow: '0 0 80px rgba(74,122,196,0.3), inset 0 0 60px rgba(0,0,0,0.3)',
                }}>

                {/* Animated meridian lines */}
                <div className="absolute inset-0"
                  style={{ animation: 'spin 20s linear infinite' }}>
                  {[0, 30, 60, 90, 120, 150].map(deg => (
                    <div key={deg} className="absolute inset-[8%] rounded-full border border-white/10"
                      style={{ transform: `rotateY(${deg}deg)` }} />
                  ))}
                </div>

                {/* Latitude lines */}
                {[25, 40, 55, 70, 85].map(pct => {
                  const widthPct = Math.sin((pct / 100) * Math.PI) * 100;
                  return (
                    <div key={pct} className="absolute left-1/2 rounded-full border border-white/[0.06]"
                      style={{
                        top: `${pct}%`,
                        width: `${widthPct}%`,
                        height: '0px',
                        transform: 'translateX(-50%)',
                      }} />
                  );
                })}

                {/* Continent-like patches */}
                <div className="absolute opacity-[0.12]">
                  {/* North America */}
                  <div className="absolute rounded-full bg-white/40"
                    style={{ top: '28%', left: '12%', width: '22%', height: '18%', filter: 'blur(8px)' }} />
                  {/* South America */}
                  <div className="absolute rounded-full bg-white/30"
                    style={{ top: '52%', left: '22%', width: '14%', height: '22%', filter: 'blur(8px)' }} />
                  {/* Europe */}
                  <div className="absolute rounded-full bg-white/40"
                    style={{ top: '22%', left: '42%', width: '16%', height: '14%', filter: 'blur(6px)' }} />
                  {/* Africa */}
                  <div className="absolute rounded-full bg-white/30"
                    style={{ top: '40%', left: '44%', width: '14%', height: '24%', filter: 'blur(8px)' }} />
                  {/* Asia */}
                  <div className="absolute rounded-full bg-white/30"
                    style={{ top: '20%', left: '58%', width: '28%', height: '22%', filter: 'blur(10px)' }} />
                  {/* Australia */}
                  <div className="absolute rounded-full bg-white/25"
                    style={{ top: '58%', left: '74%', width: '14%', height: '12%', filter: 'blur(6px)' }} />
                </div>

                {/* Specular highlight */}
                <div className="absolute rounded-full"
                  style={{
                    top: '8%', left: '15%', width: '35%', height: '35%',
                    background: 'radial-gradient(circle, rgba(255,255,255,0.12) 0%, transparent 70%)',
                  }} />
              </div>

              {/* Connection lines between locations */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 10 }}>
                {/* CDMX to Spain */}
                <line x1="25%" y1="55%" x2="48%" y2="35%" stroke="rgba(196,167,118,0.35)" strokeWidth="1" strokeDasharray="4 4">
                  <animate attributeName="stroke-dashoffset" from="8" to="0" dur="2s" repeatCount="indefinite" />
                </line>
                {/* Spain to Czech Republic */}
                <line x1="48%" y1="35%" x2="54%" y2="32%" stroke="rgba(196,167,118,0.35)" strokeWidth="1" strokeDasharray="4 4">
                  <animate attributeName="stroke-dashoffset" from="8" to="0" dur="2s" repeatCount="indefinite" />
                </line>
                {/* CDMX to Czech Republic */}
                <line x1="25%" y1="55%" x2="54%" y2="32%" stroke="rgba(196,167,118,0.2)" strokeWidth="1" strokeDasharray="4 4">
                  <animate attributeName="stroke-dashoffset" from="8" to="0" dur="3s" repeatCount="indefinite" />
                </line>
              </svg>

              {/* Location markers */}
              {[
                { label: 'CDMX', top: '55%', left: '25%', delay: '0s' },
                { label: 'ESP', top: '35%', left: '48%', delay: '0.5s' },
                { label: 'CZE', top: '32%', left: '54%', delay: '1s' },
              ].map(loc => (
                <div key={loc.label} className="absolute" style={{ top: loc.top, left: loc.left, zIndex: 20, transform: 'translate(-50%, -50%)' }}>
                  <div className="relative flex items-center justify-center">
                    {/* Ping ring */}
                    <div className="absolute w-8 h-8 rounded-full bg-accent/20"
                      style={{ animation: `ping 3s cubic-bezier(0,0,0.2,1) infinite`, animationDelay: loc.delay }} />
                    {/* Pulse ring */}
                    <div className="absolute w-5 h-5 rounded-full bg-accent/30"
                      style={{ animation: `pulse 3s ease-in-out infinite`, animationDelay: loc.delay }} />
                    {/* Dot */}
                    <div className="w-3 h-3 bg-accent rounded-full shadow-lg"
                      style={{ boxShadow: '0 0 12px rgba(196,167,118,0.6)' }} />
                    {/* Label */}
                    <span className="absolute left-6 top-1/2 -translate-y-1/2 text-xs font-bold text-white whitespace-nowrap bg-primary-dark/80 px-2 py-1 rounded backdrop-blur-sm">
                      {loc.label}
                    </span>
                  </div>
                </div>
              ))}
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
