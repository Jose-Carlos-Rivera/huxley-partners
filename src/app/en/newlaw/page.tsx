import AnimatedSection from "@/components/AnimatedSection";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Legal Innovation & Legal AI | Huxley Partners",
  description:
    "Legal innovation integrating cutting-edge technology with strategic thinking. Legal Tech, Legal AI, and digital transformation of the law.",
};

const methodology = [
  {
    title: "Identification of areas with high automation potential",
    description:
      "We analyze our clients' legal processes to identify those that can benefit from automation, reducing time and costs.",
    icon: "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z",
  },
  {
    title: "Legal Analytics",
    description:
      "We use data analysis tools to identify patterns, predict outcomes, and make informed, evidence-based decisions.",
    icon: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z",
  },
  {
    title: "Design of ethical and safe use protocols",
    description:
      "We develop governance frameworks for the responsible use of legal technology, ensuring regulatory compliance and data protection.",
    icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
  },
  {
    title: "Secure digital collaboration",
    description:
      "We implement platforms and collaboration tools that facilitate teamwork and communication with our clients in a secure manner.",
    icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z",
  },
  {
    title: "Constant technology monitoring",
    description:
      "We continuously monitor legal technology trends to select the most suitable tools and stay at the forefront.",
    icon: "M15 12a3 3 0 11-6 0 3 3 0 016 0z M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z",
  },
  {
    title: "Continuous training",
    description:
      "We invest in the ongoing training of our team in the latest technologies and legal methodologies to always deliver the best service.",
    icon: "M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253",
  },
];

export default function NewLaw() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden mt-20">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1920&q=80')] bg-cover bg-center" />
        <div className="absolute inset-0 bg-gradient-to-br from-primary-dark/90 to-primary/80" />
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <AnimatedSection>
            <span className="text-sm font-semibold tracking-[0.2em] uppercase text-white/80 mb-4 block">
              Legal Innovation
            </span>
            <h1 className="font-[family-name:var(--font-display)] text-5xl md:text-7xl font-bold text-white italic mb-8">
              Dream Big.
            </h1>
            <p className="text-lg md:text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
              We drive a legal practice that evolves with digital
              transformation, integrating cutting-edge technology with
              strategic thinking.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Intro */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <AnimatedSection>
            <p className="text-xl text-primary-dark font-[family-name:var(--font-display)] italic leading-relaxed text-center mb-12">
              Our proposal is not just to adopt tools; it is to put innovation
              at the service of legal value.
            </p>
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <span className="text-sm font-semibold tracking-[0.2em] uppercase text-accent mb-6 block">
              Strategic Approach
            </span>
            <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl font-bold text-primary-dark mb-8">
              Our methodology combines:
            </h2>
          </AnimatedSection>
        </div>
      </section>

      {/* Methodology */}
      <section className="py-0 pb-24 lg:pb-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {methodology.map((item, i) => (
              <AnimatedSection key={item.title} delay={i * 0.1}>
                <div className="bg-surface rounded-2xl p-8 h-full hover:shadow-lg transition-shadow duration-500">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
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
                        d={item.icon}
                      />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold text-primary-dark mb-3">
                    {item.title}
                  </h3>
                  <p className="text-text-light text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Closing Quote */}
      <section className="py-24 lg:py-32 bg-primary-dark">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <AnimatedSection>
            <p className="font-[family-name:var(--font-display)] text-2xl md:text-4xl font-bold text-white italic leading-relaxed">
              &ldquo;The legal technology we use does not seek to replace human
              judgment, but to enhance it.&rdquo;
            </p>
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <div className="mt-12">
              <Link
                href="/en/contacto"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white text-primary-dark font-semibold rounded-lg hover:bg-gray-100 transition-all duration-300 tracking-wide"
              >
                Discover how we can help you
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
