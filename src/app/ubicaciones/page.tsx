import AnimatedSection from "@/components/AnimatedSection";
import GlobeMap from "@/components/GlobeMap";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ubicaciones | Huxley Partners",
  description:
    "Huxley Partners cuenta con oficinas en Ciudad de México y Monterrey, y desks internacionales en Madrid, Praga y Melbourne. Presencia global con alcance local.",
};

const offices = [
  {
    city: "Ciudad de México",
    country: "México",
    badge: "Oficina Principal",
    badgeColor: "bg-accent text-white",
    address: "Bosque de Ciruelos 160, Piso 1",
    area: "Bosque de las Lomas, CDMX 11700",
    description:
      "Sede principal de la firma, desde donde se lidera la ejecución de asuntos legales complejos, tanto nacionales como internacionales. Centro de coordinación para mandatos transfronterizos, integrando equipos, especialidades y estrategias legales en función de las necesidades de cada cliente.",
    cta: { label: "Contáctanos", href: "/contacto" },
  },
  {
    city: "Monterrey",
    country: "México",
    badge: "Oficina",
    badgeColor: "bg-primary text-white",
    address: null,
    area: null,
    description:
      "Nuestra segunda sede operativa en México, desde la que apoyamos a clientes en la región norte del país e integramos capacidades para asuntos nacionales y transfronterizos en coordinación con la oficina de Ciudad de México.",
    cta: null,
  },
];

const desks = [
  {
    city: "Madrid",
    country: "España",
    badge: "Desk Internacional",
    description:
      "Apoya en el desarrollo de mercado en la región, así como la coordinación de asuntos legales con clientes y nuestra red en Europa, facilitando la ejecución de operaciones transfronterizas y la alineación de estrategias legales en múltiples jurisdicciones.",
  },
  {
    city: "Praga",
    country: "República Checa",
    badge: "Desk Internacional",
    description:
      "Actúa como un punto de apoyo estratégico para la coordinación de asuntos legales en Europa Central y del Este, facilitando la ejecución de operaciones transfronterizas y la integración de estrategias legales en entornos multijurisdiccionales.",
  },
  {
    city: "Melbourne",
    country: "Australia",
    badge: "Desk Internacional",
    description:
      "Respalda el desarrollo de oportunidades y la coordinación de asuntos legales en la región de Asia-Pacífico, apoyando la ejecución de operaciones transfronterizas y la alineación de estrategias legales en múltiples jurisdicciones.",
  },
];

// Equirectangular projection: x = (lon+180)*(1000/360), y = (90-lat)*(500/180)
const markers = [
  { label: "Ciudad de México", x: 224, y: 196, type: "office" },
  { label: "Monterrey", x: 221, y: 179, type: "office" },
  { label: "Madrid", x: 491, y: 138, type: "desk" },
  { label: "Praga", x: 540, y: 111, type: "desk" },
  { label: "Melbourne", x: 903, y: 355, type: "desk" },
];

export default function Ubicaciones() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-primary-dark to-primary">
        <div className="max-w-5xl mx-auto px-6 lg:px-8 text-center">
          <AnimatedSection>
            <span className="text-sm font-semibold tracking-[0.2em] uppercase text-white/80 mb-4 block">
              Presencia Internacional
            </span>
            <h1 className="font-[family-name:var(--font-display)] text-4xl md:text-6xl font-bold text-white mb-6">
              Nuestras Ubicaciones
            </h1>
            <p className="text-lg text-gray-200 max-w-3xl mx-auto leading-relaxed">
              Con oficinas y desks internacionales en distintas jurisdicciones, Huxley Partners ofrece
              asesoría legal estratégica con una perspectiva global y un profundo entendimiento de los
              entornos locales en los que operan nuestros clientes.
            </p>
            <p className="text-base text-gray-300 max-w-3xl mx-auto leading-relaxed mt-4">
              Nuestra estructura está diseñada para acompañar operaciones complejas y transfronterizas,
              combinando capacidad de ejecución local con coordinación multijurisdiccional.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* World Map — 3D Globe */}
      <section className="py-20 bg-primary-dark relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-10">
              <span className="text-sm font-semibold tracking-[0.2em] uppercase text-white/50 mb-3 block">
                Red Global
              </span>
              <h2 className="font-[family-name:var(--font-display)] text-2xl md:text-3xl font-bold text-white">
                Conectados en todo el mundo
              </h2>
            </div>
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <GlobeMap lang="es" />
          </AnimatedSection>
        </div>
      </section>

      {/* Nuestras Oficinas */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-16">
              <span className="text-sm font-semibold tracking-[0.2em] uppercase text-accent mb-4 block">
                Nuestras Oficinas
              </span>
              <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl font-bold text-primary-dark mb-4">
                Una visión global.
              </h2>
              <p className="text-text-light max-w-3xl mx-auto leading-relaxed">
                Huxley Partners cuenta con oficinas en Ciudad de México y Monterrey, desde donde se lidera
                la ejecución de asuntos legales complejos, tanto nacionales como internacionales. Estas
                oficinas constituyen el núcleo operativo de la firma y funcionan como centros de
                coordinación para mandatos transfronterizos, integrando equipos, especialidades y estrategias
                legales en función de las necesidades de cada cliente.
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
                    <Link
                      href={office.cta.href}
                      className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary-dark transition-colors"
                    >
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

      {/* Alcance Internacional — Desks */}
      <section className="py-24 lg:py-32 bg-surface">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-16">
              <span className="text-sm font-semibold tracking-[0.2em] uppercase text-accent mb-4 block">
                Alcance Internacional
              </span>
              <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl font-bold text-primary-dark mb-4">
                Presencia Global, Alcance Local
              </h2>
              <p className="text-text-light max-w-3xl mx-auto leading-relaxed">
                A través de su plataforma internacional, Huxley Partners mantiene desks en jurisdicciones
                estratégicas, incluyendo España, la República Checa y Australia, que permiten apoyar a
                clientes en asuntos con componentes internacionales y facilitar la coordinación legal en
                operaciones multijurisdiccionales.
              </p>
              <p className="text-text-light max-w-3xl mx-auto leading-relaxed mt-4">
                Nuestra presencia internacional no es únicamente geográfica, sino funcional y estratégica.
                Trabajamos de manera coordinada entre jurisdicciones con nuestra red para ofrecer una
                asesoría integral que trasciende fronteras y se alinea con los objetivos comerciales de
                nuestros clientes.
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

          {/* Button to Global Presence */}
          <AnimatedSection delay={0.3}>
            <div className="text-center">
              <p className="text-text-light mb-6 max-w-xl mx-auto text-sm leading-relaxed">
                Conozca los servicios que ofrecemos desde nuestra plataforma internacional y cómo coordinamos
                operaciones multijurisdiccionales a nivel global.
              </p>
              <Link
                href="/servicios-europa"
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
            <div className="prose prose-lg max-w-none text-text-light leading-relaxed space-y-6">
              <p>
                Ya sea una inversión europea en América Latina, una expansión internacional, o una
                transacción compleja que involucra múltiples marcos regulatorios, contamos con la estructura,
                el conocimiento y las capacidades necesarias para acompañar cada etapa del proceso.
              </p>
              <p>
                Nuestra red de oficinas y desks nos permite coordinar equipos, alinear estrategias
                regulatorias y garantizar una ejecución legal consistente, bajo los más altos estándares
                profesionales en cada jurisdicción involucrada.
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
              ¿Tiene un asunto legal transfronterizo?
            </h2>
            <p className="text-lg text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed">
              Nuestro equipo internacional está listo para ayudarle. Contáctenos para una consulta inicial.
            </p>
            <Link
              href="/contacto"
              className="inline-flex items-center gap-3 px-8 py-4 bg-white text-primary-dark font-semibold rounded-lg hover:bg-gray-100 transition-colors tracking-wide"
            >
              Contáctanos
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
