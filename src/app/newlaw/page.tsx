import AnimatedSection from "@/components/AnimatedSection";
import MethodologyAccordion from "@/components/MethodologyAccordion";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "NewLaw & Legal Tech | Huxley Partners",
  description:
    "Innovación jurídica integrando tecnología de vanguardia con pensamiento estratégico. Legal Tech, Legal AI y transformación digital del derecho.",
};

const methodology = [
  {
    title: "Identificación de áreas con alto potencial de automatización",
    description:
      "Analizamos los procesos legales de nuestros clientes para identificar aquellos que pueden beneficiarse de la automatización, reduciendo tiempos y costos.",
    icon: "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z",
    image: "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=800&q=80",
  },
  {
    title: "Legal Analytics",
    description:
      "Utilizamos herramientas de análisis de datos para identificar patrones, predecir resultados y tomar decisiones informadas basadas en evidencia.",
    icon: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
  },
  {
    title: "Diseño de protocolos de uso ético y seguro",
    description:
      "Desarrollamos marcos de gobernanza para el uso responsable de la tecnología legal, asegurando el cumplimiento normativo y la protección de datos.",
    icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&q=80",
  },
  {
    title: "Colaboración digital segura",
    description:
      "Implementamos plataformas y herramientas de colaboración que facilitan el trabajo en equipo y la comunicación con nuestros clientes de forma segura.",
    icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z",
    image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&q=80",
  },
  {
    title: "Vigilancia tecnológica constante",
    description:
      "Monitoreamos continuamente las tendencias en tecnología legal para seleccionar las herramientas más adecuadas y mantenernos a la vanguardia.",
    icon: "M15 12a3 3 0 11-6 0 3 3 0 016 0z M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&q=80",
  },
  {
    title: "Capacitación continua",
    description:
      "Invertimos en la formación permanente de nuestro equipo en las últimas tecnologías y metodologías legales para ofrecer siempre el mejor servicio.",
    icon: "M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&q=80",
  },
];

const keywords = ["Legal AI", "Automatización", "Legal Analytics", "LegalTech", "Contratos Digitales", "Legal Ops", "CLM", "Digital Law"];

export default function NewLaw() {
  return (
    <>
      {/* Hero — full-bleed dark with dream-big.jpg dimmed + floating keywords */}
      <section className="relative min-h-[85vh] flex flex-col justify-center overflow-hidden bg-primary-dark">
        {/* Background image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/images/dividers/dream-big.jpg')", opacity: 0.18 }}
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-primary-dark/70 via-primary-dark/40 to-primary-dark" />

        {/* Center content */}
        <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-8 pt-40 pb-16 text-center">
          <AnimatedSection>
            <span className="text-sm font-semibold tracking-[0.2em] uppercase text-accent mb-5 block">
              Innovación Jurídica
            </span>
            <h1 className="font-[family-name:var(--font-display)] text-5xl md:text-7xl font-bold text-white mb-8 leading-tight">
              NewLaw &amp; Legal Tech
            </h1>
            <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Impulsamos una práctica legal que evoluciona al ritmo de la transformación digital,
              integrando tecnología de vanguardia con pensamiento estratégico.
            </p>
          </AnimatedSection>
        </div>

        {/* Floating tech keyword pills */}
        <div className="relative z-10 pb-16 px-6">
          <div className="flex flex-wrap justify-center gap-3 max-w-3xl mx-auto">
            {keywords.map((kw) => (
              <span
                key={kw}
                className="px-4 py-2 border border-white/15 rounded-full text-white/35 text-xs font-mono tracking-[0.15em] uppercase"
              >
                {kw}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Quote */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <AnimatedSection>
            <p className="text-xl md:text-2xl text-primary-dark font-[family-name:var(--font-display)] italic leading-relaxed">
              Nuestra propuesta no es solo adoptar herramientas; es poner la innovación al servicio del valor legal.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Methodology — Accordion */}
      <section className="py-16 pb-32 bg-primary-dark">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-14">
              <span className="text-sm font-semibold tracking-[0.2em] uppercase text-accent mb-4 block">
                Enfoque Estratégico
              </span>
              <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl font-bold text-white">
                Nuestra metodología combina:
              </h2>
            </div>
          </AnimatedSection>
          <div className="rounded-xl border border-white/10 overflow-hidden">
            <MethodologyAccordion items={methodology} />
          </div>
        </div>
      </section>

      {/* Closing Quote + CTA */}
      <section className="py-24 lg:py-32 bg-primary-dark">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <AnimatedSection>
            <p className="font-[family-name:var(--font-display)] text-2xl md:text-4xl font-bold text-white italic leading-relaxed">
              &ldquo;La tecnología legal que usamos no busca reemplazar el criterio humano, sino potenciarlo.&rdquo;
            </p>
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <div className="mt-12">
              <Link
                href="/contacto"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white text-primary-dark font-semibold rounded-lg hover:bg-gray-100 transition-all duration-300 tracking-wide"
              >
                Descubra cómo podemos ayudarle
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
