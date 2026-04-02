"use client";

import AnimatedSection from "@/components/AnimatedSection";

export default function Contacto() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-primary-dark to-primary">
        <div className="max-w-5xl mx-auto px-6 lg:px-8 text-center">
          <AnimatedSection>
            <span className="text-sm font-semibold tracking-[0.2em] uppercase text-accent mb-4 block">
              Hablemos
            </span>
            <h1 className="font-[family-name:var(--font-display)] text-4xl md:text-6xl font-bold text-white mb-6">
              Contáctanos
            </h1>
            <p className="text-lg text-gray-200 max-w-2xl mx-auto leading-relaxed">
              Estamos listos para ayudarle. Envíenos un mensaje y nuestro equipo
              se pondrá en contacto con usted a la brevedad.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Form */}
            <AnimatedSection>
              <form className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="firstName"
                      className="block text-sm font-medium text-text mb-2"
                    >
                      Primer nombre
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary text-sm"
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="lastName"
                      className="block text-sm font-medium text-text mb-2"
                    >
                      Apellido
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary text-sm"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-text mb-2"
                  >
                    Tu email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary text-sm"
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium text-text mb-2"
                  >
                    Asunto
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary text-sm"
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-text mb-2"
                  >
                    Tu mensaje
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary text-sm resize-none"
                    required
                  />
                </div>

                <div className="flex items-start gap-3">
                  <input
                    type="checkbox"
                    id="consent"
                    className="mt-1 h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
                    required
                  />
                  <label htmlFor="consent" className="text-xs text-text-light">
                    Acepto recibir comunicaciones electrónicas de Huxley
                    Partners. Puedo cancelar mi suscripción en cualquier
                    momento.
                  </label>
                </div>

                <button
                  type="submit"
                  className="w-full px-8 py-4 bg-primary text-white font-semibold rounded-lg hover:bg-primary-dark transition-colors tracking-wide"
                >
                  Enviar mensaje
                </button>
              </form>
            </AnimatedSection>

            {/* Contact Info */}
            <AnimatedSection delay={0.2}>
              <div className="space-y-10">
                <div>
                  <h3 className="text-lg font-bold text-primary-dark mb-4">
                    Información de contacto
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                        <svg
                          className="w-5 h-5 text-primary"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={1.5}
                            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                          />
                        </svg>
                      </div>
                      <div>
                        <p className="text-sm font-medium text-text">Email</p>
                        <a
                          href="mailto:contacto@huxleypartners.com.mx"
                          className="text-sm text-primary hover:text-primary-dark transition-colors"
                        >
                          contacto@huxleypartners.com.mx
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                        <svg
                          className="w-5 h-5 text-primary"
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
                      <div>
                        <p className="text-sm font-medium text-text">
                          Ubicación
                        </p>
                        <p className="text-sm text-text-light">
                          Ciudad de México, México
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                        <svg
                          className="w-5 h-5 text-primary"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                        </svg>
                      </div>
                      <div>
                        <p className="text-sm font-medium text-text">
                          LinkedIn
                        </p>
                        <a
                          href="https://www.linkedin.com/company/huxley-partners"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm text-primary hover:text-primary-dark transition-colors"
                        >
                          Huxley Partners
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Inspirational image */}
                <div className="relative rounded-2xl overflow-hidden aspect-[16/9]">
                  <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=800&q=80')] bg-cover bg-center" />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/80 to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6">
                    <p className="font-[family-name:var(--font-display)] text-2xl font-bold text-white italic">
                      This is the sign you&apos;ve been looking for.
                    </p>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </>
  );
}
