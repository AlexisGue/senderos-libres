import type { Metadata } from "next";
import { services } from "@/lib/data";

export const metadata: Metadata = {
  title: "Servicios",
  description: "Pasajes, hospedaje, seguros, tours y paquetes a medida de Senderos Libres.",
};

export default function ServiciosPage() {
  return (
    <main className="mx-auto max-w-6xl px-5 py-16 lg:px-8">
      <p className="text-xs uppercase tracking-[0.25em] text-moss">Catálogo</p>
      <h1 className="mt-3 font-display text-5xl text-forest">Servicios ofrecidos</h1>
      <p className="mt-5 max-w-2xl text-lg text-bark">
        Conectamos personas con experiencias auténticas en la naturaleza, con seguridad, comodidad y conciencia ecológica.
      </p>
      <div className="mt-12 grid gap-6 md:grid-cols-2">
        {services.map((service) => (
          <article key={service.title} className="rounded-[2rem] border border-forest/10 bg-white/70 p-8">
            <h2 className="font-display text-3xl text-forest">{service.title}</h2>
            <p className="mt-3 leading-relaxed text-bark">{service.text}</p>
          </article>
        ))}
      </div>
      <section className="mt-16 rounded-[2rem] bg-forest px-8 py-12 text-cream">
        <h2 className="font-display text-3xl">Uso de proveedores turísticos</h2>
        <p className="mt-4 max-w-3xl text-cream/80">
          Para ofrecer paquetes completos trabajamos con transporte turístico, hoteles y hospedajes, restaurantes, parques, sitios turísticos y guías locales.
        </p>
      </section>
    </main>
  );
}
