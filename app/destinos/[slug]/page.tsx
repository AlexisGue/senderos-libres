import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { destinations, getDestination } from "@/lib/data";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return destinations.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const destination = getDestination(slug);
  return {
    title: destination?.name ?? "Destino",
    description: destination?.summary,
  };
}

export default async function DestinationPage({ params }: Props) {
  const { slug } = await params;
  const destination = getDestination(slug);
  if (!destination) notFound();

  return (
    <main>
      <section className="relative h-[58vh] min-h-[420px]">
        <Image src={destination.image} alt={destination.name} fill priority sizes="100vw" className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-forest-deep via-forest-deep/20 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 mx-auto max-w-6xl px-5 pb-10 lg:px-8">
          <p className="text-sm uppercase tracking-[0.22em] text-gold">{destination.location}</p>
          <h1 className="mt-2 font-display text-5xl text-cream md:text-6xl">{destination.name}</h1>
          <p className="mt-3 max-w-2xl font-script text-2xl text-cream/90">{destination.tagline}</p>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-10 px-5 py-14 lg:grid-cols-[1.4fr_0.8fr] lg:px-8">
        <div>
          <p className="text-lg leading-relaxed text-bark">{destination.summary}</p>
          <p className="mt-5 leading-relaxed text-bark">{destination.environment}</p>
          <div className="mt-8 flex flex-wrap gap-2">
            {destination.activities.map((activity) => (
              <span key={activity} className="rounded-full bg-sand px-4 py-1.5 text-sm text-forest">
                {activity}
              </span>
            ))}
          </div>

          {destination.days.map((day) => (
            <div key={day.title} className="mt-12">
              <h2 className="font-display text-3xl text-forest">{day.title}</h2>
              <p className="mt-1 text-moss">{day.subtitle}</p>
              <ol className="mt-6 space-y-4">
                {day.items.map((item) => (
                  <li key={`${day.title}-${item.time}-${item.activity}`} className="grid grid-cols-[6.5rem_1fr] gap-4 border-b border-forest/10 pb-4">
                    <span className="text-sm font-medium text-gold">{item.time}</span>
                    <div>
                      <p className="font-medium text-forest">{item.activity}</p>
                      <p className="text-sm text-bark">{item.detail}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          ))}
        </div>

        <aside className="h-fit rounded-[2rem] bg-white p-7 shadow-[0_18px_40px_rgba(23,54,43,0.08)] lg:sticky lg:top-24">
          <p className="text-xs uppercase tracking-[0.2em] text-moss">Paquete</p>
          <p className="mt-2 text-sm text-bark">{destination.duration}</p>
          <p className="mt-1 text-sm text-bark">Salida: {destination.departure}</p>
          {destination.altitude ? <p className="text-sm text-bark">Altitud: {destination.altitude}</p> : null}
          <div className="mt-5">
            {destination.promoPrice ? (
              <div>
                <p className="text-xs text-moss">{destination.promoLabel}</p>
                <p className="font-display text-5xl text-forest">${destination.promoPrice}</p>
                <p className="text-sm text-bark line-through">${destination.price} por persona</p>
              </div>
            ) : (
              <p className="font-display text-5xl text-forest">${destination.price}</p>
            )}
          </div>
          <p className="mt-6 text-sm font-medium text-forest">Incluye</p>
          <ul className="mt-2 space-y-1 text-sm text-bark">
            {destination.includes.map((item) => (
              <li key={item}>✓ {item}</li>
            ))}
          </ul>
          <Link href="/contacto" className="mt-8 block rounded-full bg-forest px-5 py-3 text-center text-cream">
            Reservar este viaje
          </Link>
        </aside>
      </section>

      <section className="mx-auto grid max-w-6xl gap-4 px-5 pb-20 md:grid-cols-3 lg:px-8">
        {destination.gallery.map((src) => (
          <div key={src} className="relative h-56 overflow-hidden rounded-3xl">
            <Image src={src} alt={destination.name} fill className="object-cover" />
          </div>
        ))}
      </section>
    </main>
  );
}
