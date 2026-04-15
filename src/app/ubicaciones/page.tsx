import AnimatedSection from "@/components/AnimatedSection";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ubicaciones | Huxley Partners",
  description:
    "Conozca nuestras oficinas en Ciudad de México, España y República Checa. Presencia global con alcance local para sus asuntos legales más estratégicos.",
};

const locations = [
  {
    city: "Ciudad de México",
    country: "México",
    badge: "Oficina Principal",
    badgeColor: "bg-accent text-white",
    address: "Bosque de Ciruelos 160, Piso 1",
    area: "Bosque de las Lomas, 11700",
    description:
      "Nuestra sede principal, desde donde coordinamos todas las operaciones de la firma y atendemos a clientes nacionales e internacionales con presencia en el mercado mexicano.",
    cta: { label: "Contáctanos", href: "/contacto" },
    dotX: 23,
    dotY: 45,
  },
  {
    city: "España",
    country: "Europa",
    badge: "Oficina Europa",
    badgeColor: "bg-primary text-white",
    address: null,
    area: null,
    description:
      "Nuestra oficina europea nos permite atender directamente a clientes en la Unión Europea, facilitar transacciones transfronterizas y coordinar asuntos regulatorios bajo marcos europeos.",
    cta: null,
    dotX: 48,
    dotY: 28,
  },
  {
    city: "República Checa",
    country: "Europa",
    badge: "Presencia Europa",
    badgeColor: "bg-primary-dark text-white",
    address: null,
    area: null,
    description:
      "Nuestra presencia en Europa Central fortalece nuestra capacidad de operar en múltiples jurisdicciones y atender asuntos corporativos con alcance continental.",
    cta: null,
    dotX: 52,
    dotY: 27,
  },
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
            <p className="text-lg text-gray-200 max-w-2xl mx-auto leading-relaxed">
              Con oficinas en tres continentes, ofrecemos asesoría legal
              estratégica con perspectiva global y profundo conocimiento local.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* World Map Section */}
      <section className="py-24 lg:py-32 bg-primary-dark relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-12">
              <span className="text-sm font-semibold tracking-[0.2em] uppercase text-white/60 mb-4 block">
                Red Global
              </span>
              <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl font-bold text-white mb-4">
                Conectados en todo el mundo
              </h2>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <div className="relative max-w-4xl mx-auto">
              {/* Flat world map using dot matrix */}
              <svg viewBox="0 0 1000 500" className="w-full h-auto" xmlns="http://www.w3.org/2000/svg">
                {/* Grid background */}
                <defs>
                  <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
                    <circle cx="10" cy="10" r="0.8" fill="rgba(255,255,255,0.06)" />
                  </pattern>
                </defs>
                <rect width="1000" height="500" fill="url(#grid)" />

                {/* Simplified continent outlines as filled paths */}
                <g opacity="0.15" fill="white">
                  {/* North America */}
                  <ellipse cx="220" cy="170" rx="110" ry="80" />
                  {/* Central America */}
                  <ellipse cx="230" cy="260" rx="30" ry="30" />
                  {/* South America */}
                  <ellipse cx="300" cy="350" rx="60" ry="90" />
                  {/* Europe */}
                  <ellipse cx="500" cy="150" rx="60" ry="50" />
                  {/* Africa */}
                  <ellipse cx="510" cy="300" rx="55" ry="80" />
                  {/* Asia */}
                  <ellipse cx="680" cy="180" rx="120" ry="70" />
                  {/* SE Asia */}
                  <ellipse cx="740" cy="290" rx="40" ry="30" />
                  {/* Australia */}
                  <ellipse cx="800" cy="380" rx="50" ry="35" />
                </g>

                {/* Connection lines (animated dashes) */}
                <line x1="220" y1="230" x2="490" y2="155" stroke="rgba(74,122,196,0.4)" strokeWidth="1.5" strokeDasharray="6 4">
                  <animate attributeName="stroke-dashoffset" from="10" to="0" dur="2s" repeatCount="indefinite" />
                </line>
                <line x1="490" y1="155" x2="530" y2="145" stroke="rgba(74,122,196,0.4)" strokeWidth="1.5" strokeDasharray="6 4">
                  <animate attributeName="stroke-dashoffset" from="10" to="0" dur="1.5s" repeatCount="indefinite" />
                </line>
                <line x1="220" y1="230" x2="530" y2="145" stroke="rgba(74,122,196,0.2)" strokeWidth="1" strokeDasharray="4 6">
                  <animate attributeName="stroke-dashoffset" from="10" to="0" dur="3s" repeatCount="indefinite" />
                </line>

                {/* Location: CDMX */}
                <circle cx="220" cy="230" r="12" fill="rgba(50,94,168,0.3)">
                  <animate attributeName="r" values="12;18;12" dur="3s" repeatCount="indefinite" />
                  <animate attributeName="opacity" values="0.3;0.1;0.3" dur="3s" repeatCount="indefinite" />
                </circle>
                <circle cx="220" cy="230" r="5" fill="#325EA8" stroke="white" strokeWidth="2" />
                <text x="220" y="258" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold" fontFamily="system-ui">Ciudad de México</text>

                {/* Location: España */}
                <circle cx="490" cy="155" r="12" fill="rgba(50,94,168,0.3)">
                  <animate attributeName="r" values="12;18;12" dur="3s" begin="0.5s" repeatCount="indefinite" />
                  <animate attributeName="opacity" values="0.3;0.1;0.3" dur="3s" begin="0.5s" repeatCount="indefinite" />
                </circle>
                <circle cx="490" cy="155" r="5" fill="#325EA8" stroke="white" strokeWidth="2" />
                <text x="490" y="183" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold" fontFamily="system-ui">España</text>

                {/* Location: Rep. Checa */}
                <circle cx="530" cy="140" r="12" fill="rgba(50,94,168,0.3)">
                  <animate attributeName="r" values="12;18;12" dur="3s" begin="1s" repeatCount="indefinite" />
                  <animate attributeName="opacity" values="0.3;0.1;0.3" dur="3s" begin="1s" repeatCount="indefinite" />
                </circle>
                <circle cx="530" cy="140" r="5" fill="#325EA8" stroke="white" strokeWidth="2" />
                <text x="560" y="130" textAnchor="start" fill="white" fontSize="12" fontWeight="bold" fontFamily="system-ui">Rep. Checa</text>
              </svg>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Location Cards */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-16">
              <span className="text-sm font-semibold tracking-[0.2em] uppercase text-accent mb-4 block">
                Nuestras Oficinas
              </span>
              <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl font-bold text-primary-dark">
                Tres sedes, una visión
              </h2>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {locations.map((loc, i) => (
              <AnimatedSection key={loc.city} delay={i * 0.15}>
                <div className="bg-surface rounded-2xl p-8 h-full flex flex-col shadow-sm hover:shadow-md transition-shadow duration-300">
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
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
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1.5}
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                    </div>
                    <span className={`text-xs font-semibold tracking-wide uppercase px-3 py-1 rounded-full ${loc.badgeColor}`}>
                      {loc.badge}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-primary-dark mb-1">
                    {loc.city}
                  </h3>
                  <p className="text-sm text-accent font-medium mb-4">
                    {loc.country}
                  </p>

                  {loc.address && (
                    <div className="mb-4 p-4 bg-white rounded-xl">
                      <p className="text-sm text-text-light leading-relaxed">
                        {loc.address}
                        <br />
                        {loc.area}
                      </p>
                    </div>
                  )}

                  <p className="text-text-light leading-relaxed text-sm flex-1">
                    {loc.description}
                  </p>

                  {loc.cta && (
                    <Link
                      href={loc.cta.href}
                      className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary-dark transition-colors"
                    >
                      {loc.cta.label}
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

      {/* Global Reach Section */}
      <section className="py-24 lg:py-32 bg-surface">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-12">
              <span className="text-sm font-semibold tracking-[0.2em] uppercase text-accent mb-4 block">
                Alcance Internacional
              </span>
              <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl font-bold text-primary-dark mb-8">
                Presencia Global, Alcance Local
              </h2>
            </div>
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <p className="text-text-light leading-relaxed text-lg mb-6">
              En Huxley Partners, nuestra presencia internacional no es solo
              geográfica: es operativa. Trabajamos de manera coordinada entre
              jurisdicciones para ofrecer a nuestros clientes una asesoría
              integral que trasciende fronteras.
            </p>
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <p className="text-text-light leading-relaxed text-lg mb-6">
              Ya sea que se trate de una inversión europea en México, una
              expansión latinoamericana hacia Europa o una transacción
              multijurisdiccional compleja, contamos con la infraestructura
              y el conocimiento para acompañar cada etapa del proceso.
            </p>
          </AnimatedSection>
          <AnimatedSection delay={0.3}>
            <p className="text-text-light leading-relaxed text-lg">
              Nuestra red internacional nos permite coordinar equipos,
              alinear estrategias regulatorias y garantizar que cada
              operación cumpla con los más altos estándares legales en cada
              jurisdicción involucrada.
            </p>
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
              Nuestro equipo internacional está listo para ayudarle.
              Contáctenos para una consulta inicial.
            </p>
            <Link
              href="/contacto"
              className="inline-flex items-center gap-3 px-8 py-4 bg-accent text-white font-semibold rounded-lg hover:bg-accent/90 transition-colors tracking-wide"
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
