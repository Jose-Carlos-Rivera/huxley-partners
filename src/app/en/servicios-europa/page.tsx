"use client";

import AnimatedSection from "@/components/AnimatedSection";
import Link from "next/link";

const services = [
  {
    title: "Corporate & Governance",
    subtitle: "International Coordination & Structuring Support",
    description:
      "We support multinational corporations, business groups, and investment funds on cross-border corporate structuring, governance design, and international compliance strategies across Europe and Latin America. Our role focuses on strategic structuring, coordination, and alignment with international best practices, working in close collaboration with local counsel where local legal advice is required.",
    details: [
      "Cross-border entity structuring and group design",
      "Coordination of incorporation and restructuring processes with local counsel",
      "Corporate governance frameworks and shareholder arrangements (strategic design)",
      "Alignment of bylaws and governance documents across jurisdictions",
      "High-level corporate compliance coordination",
      "Corporate reviews and group-wide housekeeping strategies",
    ],
    icon: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4",
  },
  {
    title: "Cross-Border M&A & Strategic Transactions",
    subtitle: "Transaction Strategy & Coordination",
    description:
      "We support clients on complex cross-border M&A and strategic transactions through transaction structuring, negotiation strategy, and multi-jurisdictional coordination, with particular experience in English law governed transactions.",
    details: [
      "Transaction structuring and execution strategy",
      "Drafting and negotiation of cross-border transaction documents where permitted",
      "Coordination of multi-jurisdictional due diligence with local counsel",
      "Legal risk allocation and deal mechanics",
      "Pre-sale reorganisations, carve-outs, and group restructurings (structuring and coordination)",
      "Post-merger integration planning (legal workstreams)",
    ],
    icon: "M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4",
  },
  {
    title: "Expansion & Structuring",
    subtitle: "International Expansion Support",
    description:
      "We assist companies in planning and executing international expansion across Europe, the United Kingdom, and Latin America by providing legal structuring, regulatory coordination, and execution management.",
    details: [
      "Market entry structuring and feasibility analysis (high-level)",
      "Coordination and supervision of local counsel",
      "Cross-border compliance strategy design",
      "Structuring of foreign investments",
      "Coordination of incorporation of subsidiaries, branches, or representative offices",
      "Structuring and negotiation of joint ventures and partnerships (strategic layer)",
    ],
    icon: "M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9",
  },
  {
    title: "International Commercial Contracts",
    subtitle: "Cross-Border Contract Strategy",
    description:
      "We advise on the strategy, negotiation, and coordination of complex international commercial agreements, particularly in English law and common law environments.",
    details: [
      "Contracting strategy and negotiation support",
      "Drafting and coordination of international agreements where applicable",
      "Technology, SaaS, licensing, and data-related contracts (cross-border focus)",
      "Risk allocation models and playbooks",
      "Dispute prevention and claims strategy (in coordination with local counsel)",
    ],
    icon: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
  },
  {
    title: "Legal Function & Contract Optimisation (NewLaw)",
    subtitle: "Legal Innovation & Operational Efficiency",
    description:
      "We advise companies and legal teams globally on legal operations, Legal Tech, and Legal AI initiatives to optimize legal management and reduce contractual risk.",
    details: [
      "Implementation of Legal Tech and Legal AI solutions",
      "Design and automation of legal and contractual processes",
      "CLM systems: selection, implementation, and optimization",
      "Legal Entity Management platforms and governance workflows",
      "Legal operations advisory (people, process, and technology)",
      "Corporate governance and digital corporate management",
    ],
    icon: "M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
  },
];

export default function ServiciosEuropaEN() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-primary-dark to-primary">
        <div className="max-w-5xl mx-auto px-6 lg:px-8 text-center">
          <AnimatedSection>
            <span className="text-sm font-semibold tracking-[0.2em] uppercase text-white/80 mb-4 block">
              International Desks: Strategic Cross Border Support
            </span>
            <h1 className="font-[family-name:var(--font-display)] text-4xl md:text-6xl font-bold text-white mb-6">
              Global Presence
            </h1>
            <p className="text-lg text-gray-200 max-w-3xl mx-auto leading-relaxed">
              Huxley Partners&apos; international presence is designed to support cross-border matters
              through strategic coordination, structuring, and execution management, without duplicating
              or substituting local legal practice in foreign jurisdictions.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Intro */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <AnimatedSection>
            <p className="text-text-light leading-relaxed text-lg mb-6">
              Through our international desks, we assist clients in navigating complex,
              multi-jurisdictional transactions and expansion initiatives by aligning legal strategy,
              coordinating advisors, and ensuring that execution remains consistent with global
              standards and commercial objectives.
            </p>
            <p className="text-text-light leading-relaxed text-lg">
              Our international desks do not operate as local law practices. Instead, they function
              as strategic coordination points within our international network, working closely with
              our offices and with duly licensed local counsel in each jurisdiction.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 bg-surface">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="space-y-8">
            {services.map((service, i) => (
              <AnimatedSection key={service.title} delay={i * 0.08}>
                <div className="bg-white rounded-2xl p-8 md:p-10 shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100">
                  <div className="flex items-start gap-6">
                    <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0 mt-1">
                      <svg className="w-7 h-7 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={service.icon} />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <p className="text-xs font-semibold tracking-[0.15em] uppercase text-accent mb-1">
                        {service.subtitle}
                      </p>
                      <h2 className="font-[family-name:var(--font-display)] text-2xl font-bold text-primary-dark mb-3">
                        {service.title}
                      </h2>
                      <p className="text-text-light leading-relaxed mb-6">{service.description}</p>
                      <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                        {service.details.map((detail) => (
                          <li key={detail} className="flex items-start gap-2 text-sm text-text-light">
                            <svg className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4" />
                            </svg>
                            {detail}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 lg:py-32 bg-primary-dark">
        <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
          <AnimatedSection>
            <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl font-bold text-white mb-6">
              Need specialised legal advice?
            </h2>
            <p className="text-gray-300 mb-8 text-lg leading-relaxed">
              Contact us for an initial consultation. Our team is ready to help you find the best
              solution for your matter.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/en/contacto"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-primary-dark font-semibold rounded-lg hover:bg-gray-100 transition-all duration-300 tracking-wide"
              >
                Contact Us
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <Link
                href="/en/ubicaciones"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-white/30 text-white font-semibold rounded-lg hover:bg-white/10 transition-all duration-300 tracking-wide"
              >
                Our Locations
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
