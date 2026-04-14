"use client";

import AnimatedSection from "@/components/AnimatedSection";
import Link from "next/link";
import FlipCard from "@/components/FlipCard";

const services = [
  {
    slug: "corporate-governance-europe",
    image: "/images/services/corporativo.jpg",
    title: "Corporate & Governance",
    description:
      "We advise multinational corporations, business groups, and investment funds on the structuring, operation, and governance of their entities across Europe and Latin America.",
    icon: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4",
    details: [
      "Company incorporation and structuring",
      "Corporate secretarial and compliance support",
      "Corporate governance and shareholder protection",
      "Drafting of bylaws and shareholder agreements",
      "Powers of attorney and legal representation",
      "Corporate audits and regularization",
    ],
  },
  {
    slug: "cross-border-ma",
    image: "/images/services/fusiones.jpg",
    title: "Cross-Border M&A and Strategic Transactions",
    description:
      "We support clients in complex cross-border M&A transactions and strategic deals involving multiple jurisdictions, with a focus on English law and cross-border structuring.",
    icon: "M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4",
    details: [
      "Transaction negotiation, structuring, and closing",
      "Drafting of NDAs, LOIs, MOUs, and SPAs",
      "Multi-jurisdictional due diligence coordination",
      "Legal risk structuring",
      "Post-merger integration",
      "Joint ventures and strategic alliances",
      "Multi-jurisdictional restructuring",
      "Pre-transaction carve-outs",
    ],
  },
  {
    slug: "expansion-structuring",
    image: "/images/services/nearshoring.jpg",
    title: "Expansion & Structuring",
    description:
      "We help companies expand and scale operations across Europe, the UK, and Latin America, managing the legal, regulatory, and structural complexity involved.",
    icon: "M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9",
    details: [
      "Market entry structuring",
      "Local counsel coordination",
      "Cross-border regulatory compliance",
      "International operations scaling",
      "Foreign investment structuring",
      "Subsidiary and branch incorporation",
      "Joint ventures and strategic alliances",
    ],
  },
  {
    slug: "international-commercial-contracts",
    image: "/images/services/mercantil.jpg",
    title: "International Commercial Contracts",
    description:
      "We draft and negotiate complex commercial contracts in cross-border and technology-driven environments, with a focus on English law and common law systems.",
    icon: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
    details: [
      "RFPs and tenders",
      "SaaS and technology contracts",
      "Framework and distribution agreements",
      "Licensing and intellectual property",
      "Negotiation strategy and playbooks",
      "Dispute resolution",
    ],
  },
  {
    slug: "legal-optimization-newlaw",
    image: "/images/services/newlaw.jpg",
    title: "Legal Optimization & NewLaw",
    description:
      "We advise on the adoption of NewLaw solutions, legal operations, and Legal AI to optimize legal management and reduce operational risks.",
    icon: "M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
    details: [
      "Legal Tech and Legal AI",
      "Legal process automation",
      "CLM: selection and implementation",
      "Legal Entity Management",
      "Legal operations advisory",
      "Digital corporate governance",
    ],
  },
];

export default function ServiciosEuropa() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-primary-dark to-primary">
        <div className="max-w-5xl mx-auto px-6 lg:px-8 text-center">
          <AnimatedSection>
            <span className="text-sm font-semibold tracking-[0.2em] uppercase text-white/80 mb-4 block">
              Europe
            </span>
            <h1 className="font-[family-name:var(--font-display)] text-4xl md:text-6xl font-bold text-white mb-6">
              Services in Europe
            </h1>
            <p className="text-lg text-gray-200 max-w-3xl mx-auto leading-relaxed">
              Our services in Europe focus on cross-border operations,
              international expansion, and legal optimization, with an emphasis
              on English law and common law systems.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, i) => (
              <AnimatedSection key={service.slug} delay={i * 0.05}>
                <FlipCard
                  title={service.title}
                  description={service.description}
                  image={service.image}
                  details={service.details}
                  icon={service.icon}
                />
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 lg:py-32 bg-surface">
        <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
          <AnimatedSection>
            <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl font-bold text-primary-dark mb-6">
              Need specialized legal advice?
            </h2>
            <p className="text-text-light mb-8 text-lg leading-relaxed">
              Contact us for an initial consultation. Our team is ready to help
              you find the best solution for your case.
            </p>
            <Link
              href="/en/contacto"
              className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white font-semibold rounded-lg hover:bg-primary-dark transition-all duration-300 tracking-wide"
            >
              Contact Us
              <svg
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
