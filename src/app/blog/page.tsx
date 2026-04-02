import AnimatedSection from "@/components/AnimatedSection";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog & Insights | Huxley Partners",
  description:
    "Artículos y análisis sobre temas legales, innovación jurídica, nearshoring en México, gobierno corporativo y más.",
};

const articles = [
  {
    slug: "nearshoring-mexico-oportunidades-legales-2026",
    title: "Nearshoring en México: Oportunidades Legales y Retos para Empresas Extranjeras en 2026",
    excerpt:
      "México se ha consolidado como destino clave de nearshoring. Conozca los aspectos legales esenciales para establecer operaciones exitosas en el mercado mexicano.",
    category: "Inversión Extranjera",
    date: "2 de abril, 2026",
    readTime: "8 min",
  },
  {
    slug: "legal-tech-transformacion-despachos-mexico",
    title: "Legal Tech y AI: Cómo la Tecnología Está Transformando los Despachos de Abogados en México",
    excerpt:
      "La adopción de herramientas de Legal AI y automatización está redefiniendo la práctica legal. Exploramos las tendencias y oportunidades para firmas mexicanas.",
    category: "NewLaw",
    date: "28 de marzo, 2026",
    readTime: "6 min",
  },
  {
    slug: "gobierno-corporativo-mejores-practicas",
    title: "Gobierno Corporativo en México: Mejores Prácticas para Empresas en Crecimiento",
    excerpt:
      "Un gobierno corporativo sólido es clave para atraer inversión y garantizar sostenibilidad. Conozca las mejores prácticas y marcos regulatorios aplicables.",
    category: "Gobierno Corporativo",
    date: "25 de marzo, 2026",
    readTime: "7 min",
  },
  {
    slug: "due-diligence-ma-mexico-guia",
    title: "Guía de Due Diligence para Operaciones de M&A en México",
    excerpt:
      "El due diligence es una etapa crítica en cualquier transacción de fusiones y adquisiciones. Presentamos los puntos clave que toda empresa debe considerar.",
    category: "M&A",
    date: "20 de marzo, 2026",
    readTime: "9 min",
  },
  {
    slug: "cumplimiento-laboral-nom-035-037",
    title: "Cumplimiento Laboral en México: NOM-035, NOM-037 y las Obligaciones del Empleador",
    excerpt:
      "Las normas oficiales mexicanas imponen obligaciones específicas a los empleadores. Analizamos los requisitos clave y estrategias de cumplimiento.",
    category: "Laboral",
    date: "15 de marzo, 2026",
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
              Conocimiento Legal
            </span>
            <h1 className="font-[family-name:var(--font-display)] text-4xl md:text-6xl font-bold text-white mb-6">
              Blog & Insights
            </h1>
            <p className="text-lg text-gray-200 max-w-3xl mx-auto leading-relaxed">
              Análisis, artículos y perspectivas sobre los temas legales más
              relevantes para su negocio en México.
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
                          {article.readTime} lectura
                        </span>
                      </div>
                      <h2 className="text-xl md:text-2xl font-bold text-primary-dark mb-3 group-hover:text-primary transition-colors leading-tight">
                        {article.title}
                      </h2>
                      <p className="text-text-light leading-relaxed mb-4">
                        {article.excerpt}
                      </p>
                      <span className="inline-flex items-center gap-2 text-sm font-semibold text-primary group-hover:text-primary-dark transition-colors">
                        Leer artículo
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
              ¿Tiene preguntas sobre algún tema legal?
            </h2>
            <p className="text-text-light mb-8 text-lg leading-relaxed">
              Nuestro equipo de abogados especializados está disponible para
              resolver sus dudas y acompañarle en sus decisiones de negocio.
            </p>
            <Link
              href="/contacto"
              className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white font-semibold rounded-lg hover:bg-primary-dark transition-all duration-300 tracking-wide"
            >
              Contáctenos
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
