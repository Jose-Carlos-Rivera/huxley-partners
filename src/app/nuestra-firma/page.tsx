import AnimatedSection from "@/components/AnimatedSection";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Nuestra Firma | Huxley Partners",
  description:
    "Conoce a Huxley Partners: una firma de abogados mexicana que asesora a corporaciones multinacionales, inversionistas institucionales y empresas globales en sus asuntos legales más estratégicos.",
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
              Huxley Partners es una firma de abogados mexicana que asesora a
              corporaciones multinacionales, inversionistas institucionales y
              empresas globales en sus asuntos legales más estratégicos en el
              mercado mexicano.
            </p>
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <p className="text-text-light leading-relaxed mb-6 text-lg">
              Operamos en la intersección entre transacciones, regulación y
              gobierno corporativo, apoyando decisiones de alto impacto que
              definen resultados de largo plazo.
            </p>
          </AnimatedSection>
          <AnimatedSection delay={0.3}>
            <p className="text-text-light leading-relaxed text-lg">
              Nuestra práctica está profundamente arraigada en el marco legal,
              regulatorio e institucional de México, y plenamente alineada con
              estándares internacionales de transacciones y gobierno corporativo.
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
              Enfoque en el negocio, no solo en lo legal
            </h2>
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <p className="text-text-light leading-relaxed mb-6 text-lg">
              No concebimos la asesoría legal de manera aislada. Nuestro rol es
              apoyar los objetivos del negocio, gestionar riesgos y facilitar la
              toma de decisiones informadas en todas las etapas de una inversión,
              transacción u operación.
            </p>
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <p className="text-text-light leading-relaxed text-lg">
              Ya sea en procesos de entrada a México, gobierno corporativo, M&A,
              exposición regulatoria u operaciones diarias, nuestro análisis está
              basado en una comprensión práctica de cómo operan las empresas en
              México.
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
                  "Nuestros clientes valoran la discreción, el criterio y la confiabilidad, especialmente cuando los resultados son críticos y la visibilidad es alta.",
                icon: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z",
              },
              {
                title: "Innovación",
                description:
                  "A través de nuestra práctica de NewLaw y Legal AI, apoyamos a nuestros clientes en la modernización de sus operaciones legales, esquemas de gobierno corporativo y gestión contractual.",
                icon: "M13 10V3L4 14h7v7l9-11h-7z",
              },
              {
                title: "Compromiso de largo plazo",
                description:
                  "Construimos relaciones, no transacciones. Muchas de nuestras relaciones con clientes se extienden a lo largo de múltiples proyectos, años y ciclos de inversión.",
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

      {/* Modelo Section */}
      <section className="py-24 lg:py-32 bg-surface">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-8">
              <span className="text-sm font-semibold tracking-[0.2em] uppercase text-accent mb-4 block">
                Nuestro Modelo
              </span>
              <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl font-bold text-primary-dark mb-6">
                Un modelo ágil, senior y altamente involucrado
              </h2>
            </div>
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <p className="text-text-light leading-relaxed text-lg text-center max-w-3xl mx-auto mb-16">
              Nuestro modelo privilegia la atención a nivel socio, la eficiencia
              y la rendición de cuentas.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Participación directa de socios",
                icon: "M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z",
              },
              {
                title: "Supervisión estratégica constante",
                icon: "M15 12a3 3 0 11-6 0 3 3 0 016 0z M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z",
              },
              {
                title: "Comunicación clara y oportuna",
                icon: "M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z",
              },
              {
                title: "Ejecución eficiente sin capas innecesarias",
                icon: "M13 10V3L4 14h7v7l9-11h-7z",
              },
            ].map((item, i) => (
              <AnimatedSection key={item.title} delay={i * 0.1}>
                <div className="text-center p-6 bg-white rounded-2xl shadow-sm">
                  <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-5">
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
                        d={item.icon}
                      />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold text-primary-dark leading-snug">
                    {item.title}
                  </h3>
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
            <div className="text-center mb-6">
              <span className="text-sm font-semibold tracking-[0.2em] uppercase text-accent mb-4 block">
                Nuestro Espacio
              </span>
              <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl font-bold text-primary-dark mb-4">
                Donde la creatividad se encuentra con el derecho
              </h2>
              <p className="text-text-light max-w-2xl mx-auto leading-relaxed">
                Nuestro espacio de trabajo refleja quiénes somos: un equipo
                joven, dinámico y apasionado que combina la rigurosidad legal
                con un ambiente que inspira creatividad e innovación.
              </p>
            </div>
          </AnimatedSection>

          <div className="mt-12 grid grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
            {[
              { n: 1, span: "col-span-2 lg:col-span-1 lg:row-span-2", aspect: "aspect-square" },
              { n: 2, span: "", aspect: "aspect-[4/3]" },
              { n: 3, span: "", aspect: "aspect-[4/3]" },
              { n: 4, span: "", aspect: "aspect-[4/3]" },
              { n: 5, span: "", aspect: "aspect-[4/3]" },
              { n: 6, span: "col-span-2 lg:col-span-1", aspect: "aspect-[4/3]" },
            ].map((item, i) => (
              <AnimatedSection key={item.n} delay={i * 0.08} className={item.span}>
                <div className={`${item.aspect} rounded-2xl overflow-hidden shadow-lg relative group`}>
                  <Image
                    src={`/images/office/office-${item.n}.jpeg`}
                    alt={`Oficina Huxley Partners`}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
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
