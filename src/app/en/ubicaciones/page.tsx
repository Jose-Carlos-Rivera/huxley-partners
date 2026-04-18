import AnimatedSection from "@/components/AnimatedSection";
import GlobeMap from "@/components/GlobeMap";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Locations | Huxley Partners",
  description:
    "Huxley Partners has offices in Mexico City and Monterrey, and international desks in Madrid, Prague and Melbourne. Global presence with local reach.",
};

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

      {/* World Map — 3D Globe — full viewport height minus navbar */}
      <section style={{ height: "calc(100vh - 80px)" }} className="bg-primary-dark relative overflow-hidden">
        <GlobeMap lang="en" />
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
