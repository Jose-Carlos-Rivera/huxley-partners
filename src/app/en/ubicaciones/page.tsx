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
            <div className="relative w-full aspect-[2/1] max-w-4xl mx-auto">
              <svg
                viewBox="0 0 1000 500"
                className="w-full h-full"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* World map dot grid */}
                {/* North America */}
                {[
                  [120,120],[140,130],[160,130],[180,140],[200,140],[220,150],
                  [140,150],[160,150],[180,160],[200,160],[220,170],[240,170],
                  [160,170],[180,180],[200,180],[220,190],[240,190],[260,190],
                  [180,200],[200,200],[220,210],[240,210],[260,210],
                  [200,220],[220,230],[240,230],
                ].map(([cx, cy], i) => (
                  <circle key={`na-${i}`} cx={cx} cy={cy} r={2} fill="rgba(255,255,255,0.12)" />
                ))}

                {/* Central America & Caribbean */}
                {[
                  [220,250],[240,250],[260,260],[240,270],[260,270],
                ].map(([cx, cy], i) => (
                  <circle key={`ca-${i}`} cx={cx} cy={cy} r={2} fill="rgba(255,255,255,0.12)" />
                ))}

                {/* South America */}
                {[
                  [280,290],[300,290],[280,310],[300,310],[320,310],
                  [280,330],[300,330],[320,330],[300,350],[320,350],
                  [300,370],[320,370],[310,390],[320,390],[310,410],
                ].map(([cx, cy], i) => (
                  <circle key={`sa-${i}`} cx={cx} cy={cy} r={2} fill="rgba(255,255,255,0.12)" />
                ))}

                {/* Europe */}
                {[
                  [440,100],[460,100],[480,100],[500,100],[520,100],
                  [440,120],[460,120],[480,120],[500,120],[520,120],[540,120],
                  [440,140],[460,140],[480,140],[500,140],[520,140],[540,140],
                  [460,160],[480,160],[500,160],[520,160],[540,160],
                  [480,180],[500,180],[520,180],
                ].map(([cx, cy], i) => (
                  <circle key={`eu-${i}`} cx={cx} cy={cy} r={2} fill="rgba(255,255,255,0.12)" />
                ))}

                {/* Africa */}
                {[
                  [460,200],[480,200],[500,200],[520,200],
                  [460,220],[480,220],[500,220],[520,220],
                  [480,240],[500,240],[520,240],
                  [480,260],[500,260],[520,260],
                  [500,280],[520,280],[500,300],[520,300],
                  [510,320],[520,340],
                ].map(([cx, cy], i) => (
                  <circle key={`af-${i}`} cx={cx} cy={cy} r={2} fill="rgba(255,255,255,0.12)" />
                ))}

                {/* Asia */}
                {[
                  [560,100],[580,100],[600,100],[620,100],[640,100],[660,100],[680,100],
                  [560,120],[580,120],[600,120],[620,120],[640,120],[660,120],[680,120],[700,120],
                  [580,140],[600,140],[620,140],[640,140],[660,140],[680,140],[700,140],[720,140],
                  [600,160],[620,160],[640,160],[660,160],[680,160],[700,160],[720,160],
                  [620,180],[640,180],[660,180],[680,180],[700,180],[720,180],
                  [640,200],[660,200],[680,200],[700,200],
                  [660,220],[680,220],[700,220],
                ].map(([cx, cy], i) => (
                  <circle key={`as-${i}`} cx={cx} cy={cy} r={2} fill="rgba(255,255,255,0.12)" />
                ))}

                {/* Australia */}
                {[
                  [740,280],[760,280],[780,280],[800,280],
                  [740,300],[760,300],[780,300],[800,300],
                  [760,320],[780,320],[800,320],
                  [770,340],[790,340],
                ].map(([cx, cy], i) => (
                  <circle key={`au-${i}`} cx={cx} cy={cy} r={2} fill="rgba(255,255,255,0.12)" />
                ))}

                {/* Connection lines */}
                <line
                  x1="230" y1="225" x2="480" y2="140"
                  stroke="rgba(255,255,255,0.15)"
                  strokeWidth={1}
                  strokeDasharray="6 4"
                />
                <line
                  x1="480" y1="140" x2="520" y2="135"
                  stroke="rgba(255,255,255,0.15)"
                  strokeWidth={1}
                  strokeDasharray="6 4"
                />
                <line
                  x1="230" y1="225" x2="520" y2="135"
                  stroke="rgba(255,255,255,0.1)"
                  strokeWidth={1}
                  strokeDasharray="6 4"
                />

                {/* Mexico City - Pulsing dot */}
                <circle cx="230" cy="225" r="16" fill="rgba(196,167,118,0.15)">
                  <animate attributeName="r" values="12;20;12" dur="3s" repeatCount="indefinite" />
                  <animate attributeName="opacity" values="0.3;0.1;0.3" dur="3s" repeatCount="indefinite" />
                </circle>
                <circle cx="230" cy="225" r="8" fill="rgba(196,167,118,0.3)">
                  <animate attributeName="r" values="6;10;6" dur="3s" repeatCount="indefinite" />
                </circle>
                <circle cx="230" cy="225" r="4" fill="#C4A776" />

                {/* Spain - Pulsing dot */}
                <circle cx="480" cy="140" r="14" fill="rgba(196,167,118,0.15)">
                  <animate attributeName="r" values="10;18;10" dur="3s" repeatCount="indefinite" begin="0.5s" />
                  <animate attributeName="opacity" values="0.3;0.1;0.3" dur="3s" repeatCount="indefinite" begin="0.5s" />
                </circle>
                <circle cx="480" cy="140" r="6" fill="rgba(196,167,118,0.3)">
                  <animate attributeName="r" values="4;8;4" dur="3s" repeatCount="indefinite" begin="0.5s" />
                </circle>
                <circle cx="480" cy="140" r="3.5" fill="#C4A776" />

                {/* Czech Republic - Pulsing dot */}
                <circle cx="520" cy="135" r="14" fill="rgba(196,167,118,0.15)">
                  <animate attributeName="r" values="10;18;10" dur="3s" repeatCount="indefinite" begin="1s" />
                  <animate attributeName="opacity" values="0.3;0.1;0.3" dur="3s" repeatCount="indefinite" begin="1s" />
                </circle>
                <circle cx="520" cy="135" r="6" fill="rgba(196,167,118,0.3)">
                  <animate attributeName="r" values="4;8;4" dur="3s" repeatCount="indefinite" begin="1s" />
                </circle>
                <circle cx="520" cy="135" r="3.5" fill="#C4A776" />

                {/* Labels */}
                <text x="230" y="255" textAnchor="middle" fill="white" fontSize="11" fontWeight="600">
                  CDMX
                </text>
                <text x="480" y="170" textAnchor="middle" fill="white" fontSize="11" fontWeight="600">
                  ESP
                </text>
                <text x="520" y="160" textAnchor="middle" fill="white" fontSize="11" fontWeight="600">
                  CZE
                </text>
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
