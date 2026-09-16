import type { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";
import { email, instagram, instagramHandle } from "@/lib/data";

export const metadata: Metadata = {
  title: "Contacto",
  description: "Reserva un paquete con Senderos Libres o escribe para armar tu viaje a medida.",
};

export default function ContactoPage() {
  return (
    <main className="mx-auto grid max-w-6xl gap-12 px-5 py-16 lg:grid-cols-2 lg:px-8">
      <div>
        <p className="text-xs uppercase tracking-[0.25em] text-moss">Reservas</p>
        <h1 className="mt-3 font-display text-5xl text-forest">Hablemos de tu próximo viaje</h1>
        <p className="mt-5 leading-relaxed text-bark">
          Atención personalizada para conocer destinos, consultar precios, resolver dudas y elegir el paquete que mejor se adapte a ti. Después de cada viaje hacemos seguimiento para que quieras volver.
        </p>
        <div className="mt-8 space-y-4 text-sm text-bark">
          <p>
            Instagram:{" "}
            <a href={instagram} className="text-pine underline decoration-gold underline-offset-4" target="_blank" rel="noreferrer">
              {instagramHandle}
            </a>
          </p>
          <p>
            Correo:{" "}
            <a href={`mailto:${email}`} className="text-pine underline decoration-gold underline-offset-4">
              {email}
            </a>
          </p>
          <p>Salidas habituales desde Zacatecoluca, El Salvador.</p>
        </div>
      </div>
      <div className="rounded-[2rem] border border-forest/10 bg-white/80 p-6 md:p-8">
        <ContactForm />
      </div>
    </main>
  );
}
