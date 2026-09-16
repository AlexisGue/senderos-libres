import Link from "next/link";
import { instagram, instagramHandle } from "@/lib/data";
import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="border-t border-forest/10 bg-forest-deep text-cream">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 md:grid-cols-3 lg:px-8">
        <div>
          <Logo variant="seal" />
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-cream/75">
            Más que destinos, son experiencias. Turismo de aventura, naturaleza y cultura, con salida desde El Salvador.
          </p>
        </div>
        <div>
          <p className="text-xs uppercase tracking-[0.22em] text-sage">Explora</p>
          <div className="mt-4 flex flex-col gap-2 text-sm text-cream/80">
            <Link href="/#destinos" className="hover:text-gold">Destinos</Link>
            <Link href="/servicios" className="hover:text-gold">Servicios</Link>
            <Link href="/nosotros" className="hover:text-gold">Nosotros</Link>
            <Link href="/contacto" className="hover:text-gold">Reservar</Link>
          </div>
        </div>
        <div>
          <p className="text-xs uppercase tracking-[0.22em] text-sage">Presencia digital</p>
          <p className="mt-4 text-sm text-cream/80">
            Síguenos en Instagram {instagramHandle}
          </p>
          <a
            href={instagram}
            target="_blank"
            rel="noreferrer"
            className="mt-4 inline-flex rounded-full border border-cream/20 px-4 py-2 text-sm hover:border-gold hover:text-gold"
          >
            Abrir perfil
          </a>
          <p className="mt-6 font-script text-2xl text-gold">Viaja · Explora · Vive</p>
        </div>
      </div>
      <div className="border-t border-white/10 py-5 text-center text-xs text-cream/50">
        © {new Date().getFullYear()} Senderos Libres. Agencia minorista y receptiva.
      </div>
    </footer>
  );
}
