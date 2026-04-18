import AnimatedSection from "@/components/AnimatedSection";
import GlobeMap from "@/components/GlobeMap";
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

      {/* World Map — 3D Globe */}
      <section className="pt-20 pb-0 bg-primary-dark relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-6 lg:px-8 mb-10">
          <AnimatedSection>
            <div className="text-center">
              <span className="text-sm font-semibold tracking-[0.2em] uppercase text-white/50 mb-3 block">
                Global Network
              </span>
              <h2 className="font-[family-name:var(--font-display)] text-2xl md:text-3xl font-bold text-white">
                Connected across the world
              </h2>
            </div>
          </AnimatedSection>
        </div>
        <AnimatedSection delay={0.2}>
          <GlobeMap lang="en" />
        </AnimatedSection>
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
