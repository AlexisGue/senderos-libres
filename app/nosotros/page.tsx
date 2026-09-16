import type { Metadata } from "next";
import Image from "next/image";
import { team, values } from "@/lib/data";

export const metadata: Metadata = {
  title: "Nosotros",
  description: "Misión, visión, valores y equipo de Senderos Libres.",
};

export default function NosotrosPage() {
  return (
    <main>
      <section className="relative h-[42vh] min-h-80">
        <Image src="/images/pital.jpg" alt="Cerro El Pital" fill className="object-cover" />
        <div className="absolute inset-0 bg-forest-deep/55" />
        <div className="absolute inset-0 flex items-end">
          <div className="mx-auto w-full max-w-6xl px-5 pb-10 lg:px-8">
            <h1 className="font-display text-5xl text-cream md:text-6xl">La agencia</h1>
            <p className="mt-3 max-w-xl text-cream/85">
              Amantes de la aventura, la naturaleza y la cultura. Jóvenes, parejas, grupos de amigos y familias pequeñas.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-8 px-5 py-16 md:grid-cols-2 lg:px-8">
        <article className="rounded-[2rem] bg-white/70 p-8">
          <p className="text-xs uppercase tracking-[0.22em] text-moss">Misión</p>
          <p className="mt-4 leading-relaxed text-bark">
            Somos una agencia de viajes comprometida con hacer que cada aventura sea una experiencia única e inolvidable. Ofrecemos viajes accesibles, seguros y bien organizados, promoviendo la exploración de nuevos destinos, el contacto con la naturaleza y el respeto por las comunidades y el medio ambiente, siempre con un servicio cercano y de calidad.
          </p>
        </article>
        <article className="rounded-[2rem] bg-white/70 p-8">
          <p className="text-xs uppercase tracking-[0.22em] text-moss">Visión</p>
          <p className="mt-4 leading-relaxed text-bark">
            Ser una agencia de viajes reconocida por ofrecer experiencias auténticas e innovadoras, destacando por la calidad del servicio, la confianza de nuestros clientes y el compromiso con el turismo responsable.
          </p>
        </article>
      </section>

      <section className="mx-auto max-w-6xl px-5 pb-8 lg:px-8">
        <h2 className="font-display text-4xl text-forest">Objetivos</h2>
        <div className="mt-6 grid gap-5 md:grid-cols-3">
          <p className="rounded-3xl border border-forest/10 p-6 text-bark">
            Brindar experiencias de viaje accesibles, seguras y memorables, promoviendo el turismo de aventura y el descubrimiento de nuevos destinos.
          </p>
          <p className="rounded-3xl border border-forest/10 p-6 text-bark">
            Promover destinos nacionales e internacionales con marketing digital y un servicio de atención de calidad antes, durante y después de cada viaje.
          </p>
          <p className="rounded-3xl border border-forest/10 p-6 text-bark">
            Fomentar el turismo sostenible, con respeto por el medio ambiente, la cultura y las comunidades locales.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-12 lg:px-8">
        <h2 className="font-display text-4xl text-forest">Valores</h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {values.map((value) => (
            <article key={value.name} className="rounded-3xl bg-sand/80 p-6">
              <h3 className="font-display text-2xl text-forest">{value.name}</h3>
              <p className="mt-2 text-sm text-bark">{value.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-8 lg:px-8">
        <h2 className="font-display text-4xl text-forest">Cómo estamos organizados</h2>
        <p className="mt-3 max-w-2xl text-bark">
          Agencia minorista y receptiva, con gerencia general, ventas, operaciones y administración.
        </p>
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {[
            ["Ventas", "Asesores de viajes"],
            ["Operaciones", "Reservaciones, boletos y guías turísticos"],
            ["Administración", "Contabilidad y seguimiento"],
          ].map(([title, text]) => (
            <article key={title} className="rounded-3xl border border-forest/10 p-6">
              <h3 className="font-display text-2xl text-forest">{title}</h3>
              <p className="mt-2 text-sm text-bark">{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-16 lg:px-8">
        <h2 className="font-display text-4xl text-forest">Equipo</h2>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {team.map((person) => (
            <article key={person} className="rounded-[1.5rem] bg-white p-6 text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-sage/30 font-display text-2xl text-forest">
                {person.split(" ").map((part) => part[0]).join("")}
              </div>
              <p className="font-medium text-forest">{person}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
