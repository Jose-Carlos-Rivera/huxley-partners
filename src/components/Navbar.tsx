"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { href: "/", label: "Inicio" },
  { href: "/nuestra-firma", label: "Nuestra Firma" },
  { href: "/servicios", label: "Servicios" },
  { href: "/newlaw", label: "NewLaw" },
  { href: "/contacto", label: "Contacto" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/images/logos/logo-icon.jpeg"
              alt="Huxley Partners"
              width={40}
              height={40}
              className="rounded"
            />
            <div className="hidden sm:block">
              <span className="text-lg font-semibold tracking-wide text-primary-dark">
                HUXLEY PARTNERS
              </span>
              <span className="block text-[10px] tracking-[0.25em] text-text-light uppercase">
                Law Firm
              </span>
            </div>
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-text-light hover:text-primary transition-colors duration-200 tracking-wide uppercase"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden flex flex-col gap-1.5 p-2"
            aria-label="Menu"
          >
            <motion.span
              animate={open ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
              className="block w-6 h-0.5 bg-primary-dark"
            />
            <motion.span
              animate={open ? { opacity: 0 } : { opacity: 1 }}
              className="block w-6 h-0.5 bg-primary-dark"
            />
            <motion.span
              animate={open ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
              className="block w-6 h-0.5 bg-primary-dark"
            />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden overflow-hidden bg-white border-t border-gray-100"
          >
            <div className="px-6 py-4 space-y-4">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block text-sm font-medium text-text-light hover:text-primary tracking-wide uppercase"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
