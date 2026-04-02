import AnimatedSection from "@/components/AnimatedSection";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Nuestra Firma | Huxley Partners",
  description:
    "Conoce a Huxley Partners: una firma legal con visión, innovación y cercanía. Profesionales con experiencia internacional al servicio de tu estrategia.",
};

export default function NuestraFirma() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden mt-20">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1519834785169-98be25ec3f84?w=1920&q=80')] bg-cover bg-center" />
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 text-center px-6">
          <AnimatedSection>
            <h1 className="font-[family-name:var(--font-display)] text-5xl md:text-7xl font-bold text-white italic mb-6">
              Passion Led Us Here
            </h1>
            <p className="text-xl text-gray-200 max-w-2xl mx-auto font-[family-name:var(--font-display)] italic">
              &ldquo;Huxley Partners es una firma legal con visión, innovación y
              cercanía.&rdquo;
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Firm Description */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <AnimatedSection>
            <span className="text-sm font-semibold tracking-[0.2em] uppercase text-accent mb-4 block">
              Quiénes Somos
            </span>
            <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl font-bold text-primary-dark mb-8 leading-tight">
              Nuestra Firma
            </h2>
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <p className="text-text-light leading-relaxed mb-6 text-lg">
              En Huxley Partners practicamos el derecho con propósito, combinando
              experiencia internacional, pensamiento multidisciplinario y
              tecnología legal para transformar desafíos complejos en soluciones
              estratégicas.
            </p>
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <p className="text-text-light leading-relaxed mb-6 text-lg">
              Nos guiamos por los valores de ética profesional, confianza
              auténtica y compromiso genuino con cada cliente. Más allá de
              brindar servicios, buscamos construir alianzas sólidas que generen
              valor duradero.
            </p>
          </AnimatedSection>
          <AnimatedSection delay={0.3}>
            <p className="text-text-light leading-relaxed text-lg">
              Nuestro equipo está conformado por profesionales con sólida
              experiencia internacional, impulsados por la pasión de ofrecer
              soluciones innovadoras que respondan estratégicamente a las
              necesidades de nuestros clientes, contribuyendo al desarrollo de
              negocios éticos, innovadores, responsables y sostenibles.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Live Work Create Divider */}
      <section className="relative h-[40vh] min-h-[350px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1504805572947-34fad45aed93?w=1920&q=80')] bg-cover bg-center" />
        <div className="absolute inset-0 bg-black/50" />
        <AnimatedSection>
          <div className="relative z-10 text-center px-6">
            <h2 className="font-[family-name:var(--font-display)] text-4xl md:text-6xl font-bold text-white italic">
              Live, Work, Create.
            </h2>
          </div>
        </AnimatedSection>
      </section>

      {/* Philosophy */}
      <section className="py-24 lg:py-32 bg-surface">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <AnimatedSection>
            <span className="text-sm font-semibold tracking-[0.2em] uppercase text-accent mb-4 block">
              Lo que nos mueve
            </span>
            <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl font-bold text-primary-dark mb-8">
              Nuestra Filosofía
            </h2>
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <p className="text-text-light leading-relaxed mb-6 text-lg">
              En Huxley Partners creemos que el verdadero valor legal proviene de
              comprender el entorno empresarial con visión estratégica, empatía y
              rigor ético.
            </p>
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <p className="text-text-light leading-relaxed text-lg">
              Tenemos la convicción de que las relaciones basadas en confianza y
              las soluciones responsables generan impactos duraderos en nuestros
              clientes y en la sociedad. Cada asesoría busca agregar valor e
              inspirar.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Do Something Great Divider */}
      <section className="relative h-[40vh] min-h-[350px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=1920&q=80')] bg-cover bg-center" />
        <div className="absolute inset-0 bg-black/60" />
        <AnimatedSection>
          <div className="relative z-10 text-center px-6">
            <h2 className="font-[family-name:var(--font-display)] text-4xl md:text-6xl font-bold text-white italic">
              Do Something Great
            </h2>
          </div>
        </AnimatedSection>
      </section>

      {/* Principles */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-16">
              <span className="text-sm font-semibold tracking-[0.2em] uppercase text-accent mb-4 block">
                Nuestros Valores
              </span>
              <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl font-bold text-primary-dark mb-4">
                Nos guiamos por tres principios fundamentales
              </h2>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              {
                title: "Integridad",
                description:
                  "Como la base para tomar decisiones transparentes, sólidas y sostenibles que generen confianza en cada interacción.",
                icon: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z",
              },
              {
                title: "Innovación",
                description:
                  "Como motor para crear soluciones legales que anticipen riesgos y habiliten oportunidades en un entorno cambiante.",
                icon: "M13 10V3L4 14h7v7l9-11h-7z",
              },
              {
                title: "Compromiso Humano",
                description:
                  "Como el eje para construir alianzas auténticas y cuidar los intereses de quienes confían en nosotros.",
                icon: "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z",
              },
            ].map((principle, i) => (
              <AnimatedSection key={principle.title} delay={i * 0.15}>
                <div className="text-center p-8">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <svg
                      className="w-8 h-8 text-primary"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d={principle.icon}
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-primary-dark mb-4">
                    {principle.title}
                  </h3>
                  <p className="text-text-light leading-relaxed">
                    {principle.description}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Office Gallery */}
      <section className="py-24 lg:py-32 bg-surface">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-16">
              <span className="text-sm font-semibold tracking-[0.2em] uppercase text-accent mb-4 block">
                Nuestro Espacio
              </span>
              <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl font-bold text-primary-dark">
                Donde la creatividad se encuentra con el derecho
              </h2>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((n, i) => (
              <AnimatedSection key={n} delay={i * 0.1}>
                <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-lg relative group">
                  <Image
                    src={`/images/office/office-${n}.jpeg`}
                    alt={`Oficina Huxley Partners ${n}`}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
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
              &ldquo;Creemos que el derecho no solo debe responder, sino
              transformar.&rdquo;
            </p>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
