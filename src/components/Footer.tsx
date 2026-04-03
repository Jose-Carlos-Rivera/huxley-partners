import Link from "next/link";

const navLinks = [
  { href: "/", label: "Inicio" },
  { href: "/nuestra-firma", label: "Nuestra Firma" },
  { href: "/servicios", label: "Servicios" },
  { href: "/newlaw", label: "NewLaw" },
  { href: "/blog", label: "Blog" },
  { href: "/contacto", label: "Contacto" },
];

export default function Footer() {
  return (
    <footer className="bg-primary-dark text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <h3 className="text-xl font-semibold tracking-wide mb-2">
              HUXLEY PARTNERS
            </h3>
            <p className="text-xs tracking-[0.2em] text-gray-400 uppercase mb-4">
              Law Firm
            </p>
            <p className="text-sm text-gray-300 leading-relaxed">
              Transformamos su estrategia de negocios a través de nuestra
              experiencia internacional, innovación jurídica e integridad
              profesional.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-sm font-semibold tracking-wide uppercase mb-4 text-accent">
              Navegación
            </h4>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-300 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold tracking-wide uppercase mb-4 text-accent">
              Contacto
            </h4>
            <ul className="space-y-3 text-sm text-gray-300">
              <li>
                <a
                  href="mailto:contacto@huxleypartners.com"
                  className="hover:text-white transition-colors"
                >
                  contacto@huxleypartners.com
                </a>
              </li>
              <li>
                Bosque de Ciruelos 160, Piso 1
                <br />
                Bosque de las Lomas
                <br />
                Ciudad de México 11700, MX
              </li>
            </ul>
            <div className="mt-6">
              <a
                href="https://www.linkedin.com/company/huxley-partners"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-gray-300 hover:text-white transition-colors"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
                LinkedIn
              </a>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-gray-700 text-center">
          <p className="text-xs text-gray-500">
            &copy; {new Date().getFullYear()} Huxley Partners, S.C. Todos
            los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
