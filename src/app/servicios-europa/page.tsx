"use client";

import AnimatedSection from "@/components/AnimatedSection";
import Link from "next/link";

const services = [
  {
    title: "Corporate & Governance",
    subtitle: "Coordinación Internacional y Estructuración Corporativa",
    description:
      "Asesoramos a corporaciones multinacionales, grupos empresariales y fondos de inversión en estructuración corporativa transfronteriza, diseño de gobierno y estrategias de cumplimiento internacional en Europa y Latinoamérica. Nuestro rol se centra en la estructuración estratégica, coordinación y alineación con las mejores prácticas internacionales, trabajando en estrecha colaboración con despachos locales cuando se requiere asesoría legal local.",
    details: [
      "Estructuración de entidades transfronterizas y diseño de grupo",
      "Coordinación de procesos de constitución y reestructuración con despachos locales",
      "Marcos de gobierno corporativo y acuerdos de accionistas (diseño estratégico)",
      "Alineación de estatutos y documentos de gobierno entre jurisdicciones",
      "Coordinación de cumplimiento corporativo a alto nivel",
      "Revisiones corporativas y estrategias de corporate housekeeping",
    ],
    icon: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4",
  },
  {
    title: "Cross-Border M&A y Transacciones Estratégicas",
    subtitle: "Estrategia y Coordinación de Transacciones",
    description:
      "Acompañamos a clientes en operaciones complejas de M&A transfronterizas y transacciones estratégicas a través de estructuración de transacciones, estrategia de negociación y coordinación multijurisdiccional, con particular experiencia en transacciones regidas por derecho inglés.",
    details: [
      "Estructuración de transacciones y estrategia de ejecución",
      "Redacción y negociación de documentos transaccionales transfronterizos donde corresponda",
      "Coordinación de due diligence multijurisdiccional con despachos locales",
      "Asignación de riesgo legal y mecánica de la transacción",
      "Reorganizaciones pre-venta, carve-outs y reestructuraciones de grupo (estructuración y coordinación)",
      "Planificación de integración post-fusión (workstreams legales)",
    ],
    icon: "M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4",
  },
  {
    title: "Expansion & Structuring",
    subtitle: "Soporte para Expansión Internacional",
    description:
      "Ayudamos a empresas a planificar y ejecutar su expansión internacional en Europa, el Reino Unido y Latinoamérica, proporcionando estructuración legal, coordinación regulatoria y gestión de la ejecución.",
    details: [
      "Estructuración de entrada a mercado y análisis de viabilidad (a alto nivel)",
      "Coordinación y supervisión de despachos locales",
      "Diseño de estrategia de cumplimiento normativo cross-border",
      "Estructuración de inversiones extranjeras",
      "Coordinación de constitución de filiales, sucursales u oficinas de representación",
      "Estructuración y negociación de joint ventures y alianzas (capa estratégica)",
    ],
    icon: "M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9",
  },
  {
    title: "Contratación Mercantil Internacional",
    subtitle: "Estrategia de Contratos Transfronterizos",
    description:
      "Asesoramos en la estrategia, negociación y coordinación de contratos mercantiles internacionales complejos, particularmente en entornos de derecho inglés y common law.",
    details: [
      "Estrategia de contratación y soporte en negociación",
      "Redacción y coordinación de acuerdos internacionales donde sea aplicable",
      "Contratos de tecnología, SaaS, licencias y relacionados con datos (enfoque transfronterizo)",
      "Modelos de asignación de riesgos y playbooks",
      "Prevención de disputas y estrategia de reclamaciones (en coordinación con despachos locales)",
    ],
    icon: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
  },
  {
    title: "Optimización de la Función Legal y de Contratos (NewLaw)",
    subtitle: "Innovación Legal y Eficiencia Operativa",
    description:
      "Asesoramos a empresas y equipos legales a nivel global en operaciones legales, Legal Tech e iniciativas de Legal AI para optimizar la gestión legal y reducir el riesgo contractual.",
    details: [
      "Implementación de soluciones de Legal Tech y Legal AI",
      "Diseño y automatización de procesos legales y contractuales",
      "Sistemas CLM: selección, implementación y optimización",
      "Plataformas de Legal Entity Management y workflows de gobierno corporativo",
      "Asesoría en legal operations (personas, procesos y tecnología)",
      "Gobierno corporativo y gestión societaria digital",
    ],
    icon: "M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
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
              Plataforma Internacional
            </span>
            <h1 className="font-[family-name:var(--font-display)] text-4xl md:text-6xl font-bold text-white mb-6">
              Global Presence
            </h1>
            <p className="text-lg text-gray-200 max-w-3xl mx-auto leading-relaxed">
              La presencia internacional de Huxley Partners está diseñada para apoyar asuntos
              transfronterizos a través de coordinación estratégica, estructuración y gestión de
              la ejecución, sin duplicar ni sustituir la práctica legal local en jurisdicciones extranjeras.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Intro */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <AnimatedSection>
            <p className="text-text-light leading-relaxed text-lg mb-6">
              A través de nuestros desks internacionales, asistimos a clientes en la navegación de
              transacciones multijurisdiccionales complejas e iniciativas de expansión, alineando la
              estrategia legal, coordinando asesores y asegurando que la ejecución sea consistente con
              los estándares globales y los objetivos comerciales.
            </p>
            <p className="text-text-light leading-relaxed text-lg">
              Nuestros desks internacionales no operan como despachos de derecho local. En su lugar,
              funcionan como puntos de coordinación estratégica dentro de nuestra red internacional,
              trabajando en estrecha colaboración con nuestras oficinas y con despachos locales debidamente
              habilitados en cada jurisdicción.
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
              ¿Necesita asesoría legal especializada?
            </h2>
            <p className="text-gray-300 mb-8 text-lg leading-relaxed">
              Contáctenos para una consulta inicial. Nuestro equipo está listo para
              ayudarle a encontrar la mejor solución para su caso.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contacto"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-primary-dark font-semibold rounded-lg hover:bg-gray-100 transition-all duration-300 tracking-wide"
              >
                Contáctenos
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <Link
                href="/ubicaciones"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-white/30 text-white font-semibold rounded-lg hover:bg-white/10 transition-all duration-300 tracking-wide"
              >
                Ver Ubicaciones
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
