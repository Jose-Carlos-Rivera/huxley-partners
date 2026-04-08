import AnimatedSection from "@/components/AnimatedSection";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog & Insights | Huxley Partners",
  description:
    "Articles and analysis on legal topics, legal innovation, nearshoring in Mexico, corporate governance, and more.",
};

const articles = [
  {
    slug: "nearshoring-mexico-legal-opportunities-2026",
    title: "Nearshoring in Mexico: Legal Opportunities and Challenges for Foreign Companies in 2026",
    excerpt:
      "Mexico has established itself as a key nearshoring destination. Learn about the essential legal aspects for establishing successful operations in the Mexican market.",
    category: "Foreign Investment",
    date: "April 2, 2026",
    readTime: "8 min",
  },
  {
    slug: "legal-tech-transforming-law-firms-mexico",
    title: "Legal Tech and AI: How Technology Is Transforming Law Firms in Mexico",
    excerpt:
      "The adoption of Legal AI tools and automation is redefining legal practice. We explore trends and opportunities for Mexican firms.",
    category: "NewLaw",
    date: "March 28, 2026",
    readTime: "6 min",
  },
  {
    slug: "corporate-governance-best-practices",
    title: "Corporate Governance in Mexico: Best Practices for Growing Companies",
    excerpt:
      "Strong corporate governance is key to attracting investment and ensuring sustainability. Learn about best practices and applicable regulatory frameworks.",
    category: "Corporate Governance",
    date: "March 25, 2026",
    readTime: "7 min",
  },
  {
    slug: "due-diligence-ma-mexico-guide",
    title: "Due Diligence Guide for M&A Operations in Mexico",
    excerpt:
      "Due diligence is a critical stage in any merger and acquisition transaction. We present the key points every company should consider.",
    category: "M&A",
    date: "March 20, 2026",
    readTime: "9 min",
  },
  {
    slug: "labor-compliance-nom-035-037",
    title: "Labor Compliance in Mexico: NOM-035, NOM-037, and Employer Obligations",
    excerpt:
      "Mexican official standards impose specific obligations on employers. We analyze key requirements and compliance strategies.",
    category: "Labor",
    date: "March 15, 2026",
    readTime: "7 min",
  },
];

export default function Blog() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-primary-dark to-primary">
        <div className="max-w-5xl mx-auto px-6 lg:px-8 text-center">
          <AnimatedSection>
            <span className="text-sm font-semibold tracking-[0.2em] uppercase text-accent mb-4 block">
              Legal Knowledge
            </span>
            <h1 className="font-[family-name:var(--font-display)] text-4xl md:text-6xl font-bold text-white mb-6">
              Blog & Insights
            </h1>
            <p className="text-lg text-gray-200 max-w-3xl mx-auto leading-relaxed">
              Analysis, articles, and perspectives on the most relevant legal
              topics for your business in Mexico.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Articles */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <div className="space-y-12">
            {articles.map((article, i) => (
              <AnimatedSection key={article.slug} delay={i * 0.1}>
                <article className="group border-b border-gray-100 pb-12 last:border-0">
                  <div className="flex flex-col md:flex-row md:items-start gap-6">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-3">
                        <span className="text-xs font-semibold tracking-wide uppercase text-accent bg-accent/10 px-3 py-1 rounded-full">
                          {article.category}
                        </span>
                        <span className="text-xs text-text-light">
                          {article.date}
                        </span>
                        <span className="text-xs text-text-light">
                          {article.readTime} read
                        </span>
                      </div>
                      <h2 className="text-xl md:text-2xl font-bold text-primary-dark mb-3 group-hover:text-primary transition-colors leading-tight">
                        {article.title}
                      </h2>
                      <p className="text-text-light leading-relaxed mb-4">
                        {article.excerpt}
                      </p>
                      <span className="inline-flex items-center gap-2 text-sm font-semibold text-primary group-hover:text-primary-dark transition-colors">
                        Read article
                        <svg
                          className="w-4 h-4 group-hover:translate-x-1 transition-transform"
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
                      </span>
                    </div>
                  </div>
                </article>
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
              Have questions about a legal topic?
            </h2>
            <p className="text-text-light mb-8 text-lg leading-relaxed">
              Our team of specialized lawyers is available to answer your
              questions and support you in your business decisions.
            </p>
            <Link
              href="/en/contacto"
              className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white font-semibold rounded-lg hover:bg-primary-dark transition-all duration-300 tracking-wide"
            >
              Contact us
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
