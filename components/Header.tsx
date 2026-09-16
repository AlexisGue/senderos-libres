"use client";

import Link from "next/link";
import { useState } from "react";
import { Logo } from "./Logo";

const links = [
  { href: "/#destinos", label: "Destinos" },
  { href: "/servicios", label: "Servicios" },
  { href: "/nosotros", label: "Nosotros" },
  { href: "/contacto", label: "Contacto" },
];

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-forest/10 bg-cream/95 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3 lg:px-8">
        <Link href="/" onClick={() => setOpen(false)} aria-label="Inicio">
          <Logo />
        </Link>
        <nav className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm tracking-wide text-bark transition hover:text-forest"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contacto"
            className="rounded-full bg-forest px-5 py-2 text-sm text-cream shadow-sm transition hover:bg-pine"
          >
            Reservar
          </Link>
        </nav>
        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-forest/20 text-forest md:hidden"
          onClick={() => setOpen((value) => !value)}
          aria-label="Abrir menú"
        >
          <span className="sr-only">Menú</span>
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
            {open ? (
              <path d="M4 4 L14 14 M14 4 L4 14" stroke="currentColor" strokeWidth="1.6" />
            ) : (
              <path d="M3 5 H15 M3 9 H15 M3 13 H15" stroke="currentColor" strokeWidth="1.6" />
            )}
          </svg>
        </button>
      </div>
      {open ? (
        <div className="border-t border-forest/10 bg-cream px-5 py-4 md:hidden">
          <div className="flex flex-col gap-3">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="py-1 text-forest"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contacto"
              onClick={() => setOpen(false)}
              className="mt-2 rounded-full bg-forest px-5 py-2 text-center text-cream"
            >
              Reservar
            </Link>
          </div>
        </div>
      ) : null}
    </header>
  );
}
