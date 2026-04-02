import AnimatedSection from "@/components/AnimatedSection";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Nuestros Servicios | Huxley Partners",
  description:
    "Servicios legales especializados: corporativo, fusiones y adquisiciones, gobierno corporativo, laboral, migratorio, nearshoring, comercio exterior y más.",
};

const services = [
  {
    slug: "corporativo-societario",
    title: "Corporativo y Societario",
    description:
      "Asesoría integral en estructuración corporativa, constitución de sociedades, contratos mercantiles, gobierno de sociedades y cumplimiento regulatorio. Acompañamos a nuestros clientes en todas las etapas de su vida corporativa.",
    icon: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4",
  },
  {
    slug: "fusiones-adquisiciones",
    title: "Fusiones, Adquisiciones y Reestructuras",
    description:
      "Acompañamiento estratégico en operaciones de M&A, incluyendo due diligence legal, negociación de contratos, reestructuras corporativas y operaciones transfronterizas.",
    icon: "M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4",
  },
  {
    slug: "gobierno-corporativo",
    title: "Gobierno Corporativo",
    description:
      "Diseño e implementación de estructuras de gobernanza, políticas de cumplimiento, programas de compliance y mejores prácticas que fortalecen la toma de decisiones empresariales.",
    icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
  },
  {
    slug: "laboral",
    title: "Laboral",
    description:
      "Soluciones integrales en relaciones laborales individuales y colectivas, cumplimiento normativo, litigio laboral especializado, outsourcing y subcontratación conforme a la legislación vigente.",
    icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z",
  },
  {
    slug: "migratorio",
    title: "Migratorio",
    description:
      "Gestión integral de trámites migratorios para empresas y profesionales con presencia internacional. Visas de trabajo, permisos de residencia y regularización migratoria.",
    icon: "M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
  },
  {
    slug: "nearshoring",
    title: "Nearshoring e Inversión Extranjera",
    description:
      "Asesoría especializada para empresas que buscan establecerse en México mediante esquemas de nearshoring, inversión extranjera directa y operaciones transfronterizas.",
    icon: "M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9",
  },
  {
    slug: "comercio-exterior",
    title: "Comercio Exterior y Aduanas",
    description:
      "Asesoría en regulaciones aduaneras, clasificación arancelaria, programas de comercio exterior (IMMEX, drawback), y cumplimiento de tratados internacionales.",
    icon: "M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4",
  },
  {
    slug: "derecho-administrativo",
    title: "Derecho Administrativo",
    description:
      "Representación ante autoridades gubernamentales, licitaciones públicas, permisos y licencias, contencioso administrativo y cumplimiento regulatorio.",
    icon: "M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z",
  },
  {
    slug: "propiedad-intelectual",
    title: "Propiedad Intelectual",
    description:
      "Protección y gestión de marcas, patentes, derechos de autor y secretos industriales. Litigio en materia de propiedad intelectual y contratos de licenciamiento.",
    icon: "M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z",
  },
  {
    slug: "compliance",
    title: "Compliance y Prevención de Riesgos",
    description:
      "Diseño e implementación de programas de cumplimiento normativo, prevención de lavado de dinero, anticorrupción y gestión integral de riesgos legales.",
    icon: "M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z",
  },
];

export default function Servicios() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-primary-dark to-primary">
        <div className="max-w-5xl mx-auto px-6 lg:px-8 text-center">
          <AnimatedSection>
            <span className="text-sm font-semibold tracking-[0.2em] uppercase text-accent mb-4 block">
              Áreas de Práctica
            </span>
            <h1 className="font-[family-name:var(--font-display)] text-4xl md:text-6xl font-bold text-white mb-6">
              Nuestros Servicios
            </h1>
            <p className="text-lg text-gray-200 max-w-3xl mx-auto leading-relaxed">
              Nuestros servicios van más allá de la asesoría legal. Utilizamos
              un enfoque innovador y multidisciplinario con experiencia
              internacional para desarrollar soluciones estratégicas ante las
              necesidades más complejas.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, i) => (
              <AnimatedSection key={service.slug} delay={i * 0.05}>
                <div className="group border border-gray-100 rounded-2xl p-8 hover:border-primary/20 hover:shadow-lg transition-all duration-500 h-full">
                  <div className="flex items-start gap-6">
                    <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                      <svg
                        className="w-7 h-7 text-primary"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1.5}
                          d={service.icon}
                        />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-primary-dark mb-3 group-hover:text-primary transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-text-light leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                  </div>
                </div>
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
              ¿Necesita asesoría legal especializada?
            </h2>
            <p className="text-text-light mb-8 text-lg leading-relaxed">
              Contáctenos para una consulta inicial. Nuestro equipo está listo
              para ayudarle a encontrar la mejor solución para su caso.
            </p>
            <Link
              href="/contacto"
              className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white font-semibold rounded-lg hover:bg-primary-dark transition-all duration-300 tracking-wide"
            >
              Contáctenos
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
