import AnimatedSection from "@/components/AnimatedSection";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Locations | Huxley Partners",
  description:
    "Huxley Partners has offices in Mexico City and Monterrey, and international desks in Madrid, Prague and Melbourne. Global presence with local reach.",
};

const offices = [
  {
    city: "Mexico City",
    country: "Mexico",
    badge: "Main Office",
    badgeColor: "bg-accent text-white",
    address: "Bosque de Ciruelos 160, Piso 1",
    area: "Bosque de las Lomas, CDMX 11700",
    description:
      "The firm's primary operational center, from which we lead the execution of sophisticated legal matters, both domestic and international, and coordinate cross-border mandates by integrating teams, practice areas, and legal strategies tailored to each client's objectives.",
    cta: { label: "Contact Us", href: "/en/contacto" },
  },
  {
    city: "Monterrey",
    country: "Mexico",
    badge: "Office",
    badgeColor: "bg-primary text-white",
    address: null,
    area: null,
    description:
      "Our second operational office in Mexico, supporting clients in the northern region of the country and integrating capabilities for domestic and cross-border matters in coordination with the Mexico City office.",
    cta: null,
  },
];

const desks = [
  {
    city: "Madrid",
    country: "Spain",
    badge: "International Desk",
    description:
      "Supports the development of new markets and the coordination of legal matters with clients and our network in Europe, facilitating the execution of cross-border transactions and the alignment of legal strategies across multiple jurisdictions.",
  },
  {
    city: "Prague",
    country: "Czech Republic",
    badge: "International Desk",
    description:
      "Serves as a strategic point of support for opportunity development and the coordination of legal matters across Central and Eastern Europe, facilitating the execution of cross-border transactions and the integration of legal strategies in multi-jurisdictional environments.",
  },
  {
    city: "Melbourne",
    country: "Australia",
    badge: "International Desk",
    description:
      "Supports the development of opportunities and the coordination of legal matters across the Asia-Pacific region, enabling the execution of cross-border transactions and the alignment of legal strategies across multiple jurisdictions.",
  },
];

const markers = [
  { label: "Mexico City", x: 224, y: 196, type: "office" },
  { label: "Monterrey", x: 221, y: 179, type: "office" },
  { label: "Madrid", x: 491, y: 138, type: "desk" },
  { label: "Prague", x: 540, y: 111, type: "desk" },
  { label: "Melbourne", x: 903, y: 355, type: "desk" },
];

export default function UbicacionesEN() {
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
            <p className="text-lg text-gray-200 max-w-3xl mx-auto leading-relaxed">
              With physical offices and international desks across multiple jurisdictions, Huxley
              Partners delivers strategic legal advice supported by a global perspective and a deep
              understanding of local legal and regulatory environments.
            </p>
            <p className="text-base text-gray-300 max-w-3xl mx-auto leading-relaxed mt-4">
              Our structure is designed to support complex, cross-border matters, combining strong
              local execution with coordinated, multi-jurisdictional capabilities.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* World Map */}
      <section className="py-20 bg-primary-dark relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-10">
              <span className="text-sm font-semibold tracking-[0.2em] uppercase text-white/50 mb-3 block">
                Global Network
              </span>
              <h2 className="font-[family-name:var(--font-display)] text-2xl md:text-3xl font-bold text-white">
                Connected across the world
              </h2>
            </div>
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-[#0d1b2e]">
              <svg viewBox="0 0 1000 500" className="w-full h-auto" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <pattern id="dots-en" width="25" height="25" patternUnits="userSpaceOnUse">
                    <circle cx="12.5" cy="12.5" r="0.7" fill="rgba(255,255,255,0.07)" />
                  </pattern>
                </defs>
                <rect width="1000" height="500" fill="url(#dots-en)" />
                <g fill="rgba(74,122,196,0.15)" stroke="rgba(74,122,196,0.35)" strokeWidth="0.8">
                  <polygon points="325,28 385,18 418,44 400,72 358,82 328,60" />
                  <polygon points="35,72 95,58 175,52 235,62 272,85 278,132 260,162 258,230 235,262 220,282 175,288 148,258 115,242 78,202 48,166 33,122" />
                  <polygon points="220,282 258,230 262,284 242,314 220,298" />
                  <polygon points="218,298 262,284 318,298 346,342 342,414 322,468 290,482 255,472 228,438 218,388 212,332" />
                  <polygon points="398,58 430,52 438,72 415,80 398,68" />
                  <polygon points="438,68 448,56 488,50 525,56 548,68 568,84 556,118 532,134 512,144 482,148 452,142 432,122 438,94" />
                  <polygon points="452,142 482,148 478,168 455,165 448,148" />
                  <polygon points="444,72 458,68 462,92 448,96 440,82" />
                  <polygon points="438,202 515,196 568,212 588,258 584,334 572,402 542,448 502,478 468,468 448,424 432,362 432,272" />
                  <polygon points="548,148 615,148 652,178 648,212 608,228 558,218 542,188" />
                  <polygon points="552,68 622,52 752,50 905,58 965,72 968,148 938,202 872,252 805,292 742,308 688,278 642,258 608,232 558,212 542,182 542,148 562,102" />
                  <polygon points="642,158 692,152 718,172 722,222 702,258 668,268 638,242 628,198" />
                  <polygon points="738,242 795,248 842,262 838,298 798,312 758,302 732,272" />
                  <polygon points="892,128 912,118 924,148 908,158 892,142" />
                  <polygon points="818,328 898,322 962,332 978,388 958,438 908,452 858,452 822,418 812,372" />
                  <polygon points="958,418 978,412 982,442 962,448 955,432" />
                  <polygon points="578,332 592,318 602,352 594,388 578,392 570,358" />
                </g>
                {[
                  { x1: 224, y1: 196, x2: 491, y2: 138 },
                  { x1: 224, y1: 196, x2: 540, y2: 111 },
                  { x1: 224, y1: 196, x2: 903, y2: 355 },
                  { x1: 224, y1: 196, x2: 221, y2: 179 },
                  { x1: 491, y1: 138, x2: 540, y2: 111 },
                ].map((line, i) => (
                  <line key={i} x1={line.x1} y1={line.y1} x2={line.x2} y2={line.y2}
                    stroke="rgba(74,122,196,0.5)" strokeWidth="1" strokeDasharray="5 4">
                    <animate attributeName="stroke-dashoffset" from="100" to="0" dur={`${2.5 + i * 0.4}s`} repeatCount="indefinite" />
                  </line>
                ))}
                {markers.map((m, i) => (
                  <g key={m.label}>
                    <circle cx={m.x} cy={m.y} r="10" fill="rgba(50,94,168,0.2)">
                      <animate attributeName="r" values="8;16;8" dur={`${2.5 + i * 0.3}s`} repeatCount="indefinite" />
                      <animate attributeName="opacity" values="0.35;0.05;0.35" dur={`${2.5 + i * 0.3}s`} repeatCount="indefinite" />
                    </circle>
                    <circle cx={m.x} cy={m.y} r={m.type === "office" ? 5 : 4}
                      fill={m.type === "office" ? "#ffffff" : "#7aaee0"}
                      stroke={m.type === "office" ? "#325EA8" : "rgba(255,255,255,0.4)"} strokeWidth="1.5" />
                    <text x={m.x} y={m.y + (m.label === "Prague" ? -14 : 22)}
                      textAnchor={m.x > 500 ? "end" : "middle"}
                      fill="rgba(255,255,255,0.85)" fontSize="11"
                      fontFamily="system-ui, sans-serif" fontWeight="600">
                      {m.label}
                    </text>
                  </g>
                ))}
              </svg>
            </div>
            <div className="flex items-center justify-center gap-8 mt-6">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-white border-2 border-[#325EA8]" />
                <span className="text-white/60 text-sm">Office</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-[#7aaee0] border border-white/40" />
                <span className="text-white/60 text-sm">International Desk</span>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Our Offices */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-16">
              <span className="text-sm font-semibold tracking-[0.2em] uppercase text-accent mb-4 block">
                Our Offices
              </span>
              <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl font-bold text-primary-dark mb-4">
                One global vision.
              </h2>
              <p className="text-text-light max-w-3xl mx-auto leading-relaxed">
                Huxley Partners operates through two physical offices, located in Mexico City and
                Monterrey, which serve as the firm&apos;s primary operational centers. From these offices,
                we lead the execution of sophisticated legal matters, both domestic and international,
                and coordinate cross-border mandates, integrating teams, practice areas, and legal
                strategies tailored to each client&apos;s objectives.
              </p>
            </div>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {offices.map((office, i) => (
              <AnimatedSection key={office.city} delay={i * 0.15}>
                <div className="bg-surface rounded-2xl p-8 h-full flex flex-col shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100">
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                      <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <span className={`text-xs font-semibold tracking-wide uppercase px-3 py-1 rounded-full ${office.badgeColor}`}>
                      {office.badge}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-primary-dark mb-1">{office.city}</h3>
                  <p className="text-sm text-accent font-medium mb-4">{office.country}</p>
                  {office.address && (
                    <div className="mb-4 p-4 bg-white rounded-xl border border-gray-100">
                      <p className="text-sm text-text-light leading-relaxed">
                        {office.address}<br />{office.area}
                      </p>
                    </div>
                  )}
                  <p className="text-text-light leading-relaxed text-sm flex-1">{office.description}</p>
                  {office.cta && (
                    <Link href={office.cta.href} className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary-dark transition-colors">
                      {office.cta.label}
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

      {/* International Desks */}
      <section className="py-24 lg:py-32 bg-surface">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-16">
              <span className="text-sm font-semibold tracking-[0.2em] uppercase text-accent mb-4 block">
                International Presence
              </span>
              <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl font-bold text-primary-dark mb-4">
                Global presence. Local reach.
              </h2>
              <p className="text-text-light max-w-3xl mx-auto leading-relaxed">
                Through its international platform, Huxley Partners maintains international desks in
                strategic jurisdictions, including Spain, the Czech Republic, and Australia, allowing
                us to support clients on matters with international components.
              </p>
              <p className="text-text-light max-w-3xl mx-auto leading-relaxed mt-4">
                Our international presence is not merely geographic — it is functional and strategic.
                We work in a coordinated manner across jurisdictions to deliver integrated legal advice
                that transcends borders and aligns with our clients&apos; commercial objectives.
              </p>
            </div>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {desks.map((desk, i) => (
              <AnimatedSection key={desk.city} delay={i * 0.15}>
                <div className="bg-white rounded-2xl p-8 h-full flex flex-col shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100">
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center">
                      <svg className="w-6 h-6 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <span className="text-xs font-semibold tracking-wide uppercase px-3 py-1 rounded-full bg-accent/10 text-accent">
                      {desk.badge}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-primary-dark mb-1">{desk.city}</h3>
                  <p className="text-sm text-accent font-medium mb-4">{desk.country}</p>
                  <p className="text-text-light leading-relaxed text-sm flex-1">{desk.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
          <AnimatedSection delay={0.3}>
            <div className="text-center">
              <p className="text-text-light mb-6 max-w-xl mx-auto text-sm leading-relaxed">
                Learn more about the services we provide through our international platform and how
                we coordinate multi-jurisdictional operations globally.
              </p>
              <Link
                href="/en/servicios-europa"
                className="inline-flex items-center gap-3 px-8 py-4 bg-primary text-white font-semibold rounded-lg hover:bg-primary-dark transition-all duration-300 tracking-wide"
              >
                Global Presence
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Extended text */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <AnimatedSection>
            <div className="space-y-6 text-text-light leading-relaxed text-lg">
              <p>
                Whether advising on European investment into the Americas, international expansion
                initiatives, or complex multi-jurisdictional transactions, we have the structure,
                experience, and capabilities to support each stage of the process.
              </p>
              <p>
                Our network of offices and international desks enables us to coordinate teams, align
                regulatory strategies, and ensure consistent legal execution, in accordance with the
                highest professional standards in every jurisdiction involved.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 lg:py-32 bg-primary-dark">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <AnimatedSection>
            <h2 className="font-[family-name:var(--font-display)] text-2xl md:text-4xl font-bold text-white mb-6">
              Do you have a cross-border legal matter?
            </h2>
            <p className="text-lg text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed">
              Our international team is ready to assist you. Contact us for an initial consultation.
            </p>
            <Link
              href="/en/contacto"
              className="inline-flex items-center gap-3 px-8 py-4 bg-white text-primary-dark font-semibold rounded-lg hover:bg-gray-100 transition-colors tracking-wide"
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
