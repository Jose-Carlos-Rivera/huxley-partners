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
      "Asesoramos a corporaciones multinacionales, grupos empresariales y fondos de inversión en la estructuración, operación y gobierno de sus entidades en Europa y Latinoamérica.",
    icon: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4",
    details: [
      "Constitución y estructuración de sociedades",
      "Soporte societario y cumplimiento corporativo",
      "Gobierno corporativo y protección de accionistas",
      "Redacción de estatutos y pactos de socios",
      "Otorgamiento de poderes y representación legal",
      "Auditorías societarias y regularización",
    ],
  },
  {
    slug: "cross-border-ma",
    image: "/images/services/fusiones.jpg",
    title: "Cross-Border M&A y Transacciones Estratégicas",
    description:
      "Acompañamos a clientes en operaciones complejas de M&A transfronterizas y transacciones estratégicas que involucran múltiples jurisdicciones, con foco en derecho inglés y estructuración cross-border.",
    icon: "M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4",
    details: [
      "Negociación, estructuración y cierre de transacciones",
      "Redacción de NDAs, LOIs, MOUs y SPAs",
      "Coordinación de due diligence multijurisdiccional",
      "Estructuración del riesgo legal",
      "Integración post-fusión",
      "Joint ventures y alianzas estratégicas",
      "Reestructuración multijurisdiccional",
      "Carve-outs pre-transacción",
    ],
  },
  {
    slug: "expansion-structuring",
    image: "/images/services/nearshoring.jpg",
    title: "Expansion & Structuring",
    description:
      "Ayudamos a empresas a expandirse y escalar operaciones en Europa, el Reino Unido y Latinoamérica, gestionando la complejidad legal, regulatoria y estructural.",
    icon: "M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9",
    details: [
      "Estructuración de entrada a mercado",
      "Coordinación de despachos locales",
      "Cumplimiento normativo cross-border",
      "Escalado de operaciones internacionales",
      "Estructuración de inversiones extranjeras",
      "Constitución de filiales y sucursales",
      "Joint ventures y alianzas estratégicas",
    ],
  },
  {
    slug: "contratacion-mercantil-internacional",
    image: "/images/services/mercantil.jpg",
    title: "Contratación Mercantil Internacional",
    description:
      "Redactamos y negociamos contratos mercantiles complejos en entornos transfronterizos y tecnológicos, con enfoque en derecho inglés y common law.",
    icon: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
    details: [
      "RFPs y licitaciones",
      "Contratos SaaS y tecnológicos",
      "Contratos marco y distribución",
      "Licencias y propiedad intelectual",
      "Estrategia de negociación y playbooks",
      "Resolución de disputas",
    ],
  },
  {
    slug: "optimizacion-legal-newlaw",
    image: "/images/services/newlaw.jpg",
    title: "Optimización Legal y NewLaw",
    description:
      "Asesoramos en la adopción de soluciones NewLaw, legal operations y Legal AI para optimizar la gestión legal y reducir riesgos operativos.",
    icon: "M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
    details: [
      "Legal Tech y Legal AI",
      "Automatización de procesos legales",
      "CLM: selección e implementación",
      "Legal Entity Management",
      "Legal operations advisory",
      "Gobierno corporativo digital",
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
              Europa
            </span>
            <h1 className="font-[family-name:var(--font-display)] text-4xl md:text-6xl font-bold text-white mb-6">
              Servicios en Europa
            </h1>
            <p className="text-lg text-gray-200 max-w-3xl mx-auto leading-relaxed">
              Nuestros servicios en Europa se centran en operaciones
              transfronterizas, expansión internacional y optimización legal, con
              enfoque en derecho inglés y sistemas de common law.
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
