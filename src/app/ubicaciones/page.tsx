import AnimatedSection from "@/components/AnimatedSection";
import GlobeMap from "@/components/GlobeMap";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ubicaciones | Huxley Partners",
  description:
    "Huxley Partners cuenta con oficinas en Ciudad de México y Monterrey, y desks internacionales en Madrid, Praga y Melbourne. Presencia global con alcance local.",
};

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

      {/* World Map — 3D Globe — full viewport height minus navbar */}
      <section style={{ height: "calc(100vh - 80px)" }} className="bg-primary-dark relative overflow-hidden">
        <GlobeMap lang="es" />
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
