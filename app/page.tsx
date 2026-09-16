import Image from "next/image";
import Link from "next/link";
import { destinations, instagram, services, values } from "@/lib/data";

function Price({ price, promoPrice }: { price: number; promoPrice?: number }) {
  if (!promoPrice) {
    return <span className="font-display text-3xl text-forest">${price}</span>;
  }
  return (
    <span className="flex items-baseline gap-2">
      <span className="font-display text-3xl text-forest">${promoPrice}</span>
      <span className="text-sm text-bark line-through">${price}</span>
    </span>
  );
}

export default function HomePage() {
  return (
    <main>
      <section className="relative min-h-[92vh] overflow-hidden">
        <Image
          src="/images/cerro-verde.jpg"
          alt="Vista del Lago de Coatepeque desde Cerro Verde"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[center_72%] brightness-90 contrast-125"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-forest-deep via-forest-deep/45 to-black/25" />
        <div className="relative mx-auto flex min-h-[92vh] max-w-6xl flex-col justify-end px-5 pb-20 pt-32 lg:px-8">
          <p className="fade-up font-script text-2xl text-gold md:text-3xl">Viaja · Explora · Vive</p>
          <h1 className="fade-up mt-3 max-w-3xl font-display text-5xl leading-[0.95] text-cream md:text-7xl">
            Porque el mejor viaje no tiene destino.
          </h1>
          <p className="fade-up mt-6 max-w-xl text-lg text-cream/90">
            Experiencias accesibles, seguras y memorables por El Salvador y Guatemala. Naturaleza, cultura y aventura, bien organizadas.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/#destinos" className="rounded-full bg-cream px-6 py-3 text-forest shadow-lg">
              Ver paquetes
            </Link>
            <Link href="/contacto" className="rounded-full border border-cream/60 px-6 py-3 text-cream">
              Reservar ahora
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-16 lg:px-8">
        <div className="grid gap-8 md:grid-cols-3">
          {[
            { title: "Naturaleza", text: "Bosques, volcanes, lagos y la cima más alta de El Salvador." },
            { title: "Cultura", text: "Calles coloniales, comunidades locales y respeto por cada territorio." },
            { title: "Aventura", text: "Senderismo, lancha, miradores y rutas pensadas para vivirlas." },
          ].map((item) => (
            <article key={item.title} className="rounded-3xl border border-forest/10 bg-white/55 p-8">
              <p className="font-script text-2xl text-moss">{item.title}</p>
              <p className="mt-3 text-bark">{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="destinos" className="mx-auto max-w-6xl px-5 pb-8 lg:px-8">
        <p className="text-xs uppercase tracking-[0.25em] text-moss">Nuestros paquetes</p>
        <h2 className="mt-3 font-display text-4xl text-forest md:text-5xl">Destinos que se sienten</h2>
        <p className="mt-4 max-w-2xl text-bark">
          Tres rutas listas para salir: montaña, lago y ciudad colonial. Precios por persona, con transporte y actividades incluidas.
        </p>
        <div className="mt-10 grid gap-8 lg:grid-cols-3">
          {destinations.map((item) => (
            <article key={item.slug} className="group overflow-hidden rounded-[2rem] bg-white shadow-[0_20px_50px_rgba(23,54,43,0.08)]">
              <div className="relative h-64">
                <Image src={item.image} alt={item.name} fill sizes="(min-width: 1024px) 33vw, 100vw" className="object-cover transition duration-700 group-hover:scale-105" />
                {item.promoLabel ? (
                  <span className="absolute left-4 top-4 rounded-full bg-gold px-3 py-1 text-xs font-medium text-forest-deep">
                    {item.promoLabel}
                  </span>
                ) : null}
              </div>
              <div className="p-6">
                <p className="text-xs uppercase tracking-[0.18em] text-moss">{item.location}</p>
                <h3 className="mt-2 font-display text-3xl text-forest">{item.name}</h3>
                <p className="mt-2 text-sm text-bark">{item.duration}</p>
                <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-bark">{item.summary}</p>
                <div className="mt-5 flex items-end justify-between">
                  <div>
                    <p className="text-xs text-bark">Desde</p>
                    <Price price={item.price} promoPrice={item.promoPrice} />
                  </div>
                  <Link href={`/destinos/${item.slug}`} className="text-sm text-pine underline decoration-gold underline-offset-4">
                    Ver itinerario
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto my-16 max-w-6xl overflow-hidden rounded-[2.5rem] bg-forest px-5 py-14 text-cream lg:px-12">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div>
            <p className="font-script text-3xl text-gold">Gana una aventura</p>
            <h2 className="mt-2 font-display text-4xl">Concurso Senderos Libres</h2>
            <p className="mt-4 text-cream/80">
              El viaje es a Cerro Verde + Lago de Coatepeque. El premio puede ser un descuento, una excursión o un paquete turístico.
            </p>
            <ul className="mt-6 space-y-2 text-sm text-cream/85">
              <li>1. Sigue nuestras redes</li>
              <li>2. Da me gusta a la publicación</li>
              <li>3. Compártela en historias</li>
              <li>4. Etiqueta a 2 amigos</li>
            </ul>
            <a
              href={instagram}
              target="_blank"
              rel="noreferrer"
              className="mt-8 inline-flex rounded-full bg-cream px-6 py-3 text-forest"
            >
              Participar en Instagram
            </a>
          </div>
          <div className="relative min-h-72 overflow-hidden rounded-[2rem]">
            <Image src="/images/cerro-verde.jpg" alt="Lago de Coatepeque" fill className="object-cover" />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-8 lg:px-8">
        <div className="grid items-start gap-12 lg:grid-cols-2">
          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-moss">La agencia</p>
            <h2 className="mt-3 font-display text-4xl text-forest">Más que destinos, son experiencias</h2>
            <p className="mt-5 leading-relaxed text-bark">
              Somos una agencia de viajes comprometida con hacer que cada aventura sea única e inolvidable. Ofrecemos viajes accesibles, seguros y bien organizados, con contacto con la naturaleza y respeto por las comunidades.
            </p>
            <p className="mt-4 leading-relaxed text-bark">
              Operamos como agencia minorista y receptiva: diseñamos paquetes de aventura y montaña, y recibimos, transportamos, alojamos y guiamos a viajeros en destinos naturales.
            </p>
            <Link href="/nosotros" className="mt-6 inline-block text-pine underline decoration-gold underline-offset-4">
              Conoce misión, visión y equipo
            </Link>
          </div>
          <div className="relative overflow-hidden rounded-[2rem]">
            <Image src="/images/feria.jpg" alt="Stand de Senderos Libres" width={1076} height={717} className="h-full w-full object-cover" />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-16 lg:px-8">
        <h2 className="font-display text-4xl text-forest">Valores que nos guían</h2>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {values.map((value) => (
            <article key={value.name} className="rounded-3xl border border-forest/10 bg-white/60 p-6">
              <h3 className="font-display text-2xl text-forest">{value.name}</h3>
              <p className="mt-2 text-sm text-bark">{value.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-sand/70 py-16">
        <div className="mx-auto max-w-6xl px-5 lg:px-8">
          <p className="text-xs uppercase tracking-[0.25em] text-moss">Catálogo</p>
          <h2 className="mt-3 font-display text-4xl text-forest">Servicios</h2>
          <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <article key={service.title} className="rounded-3xl bg-cream p-6">
                <h3 className="font-display text-2xl text-forest">{service.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-bark">{service.text}</p>
              </article>
            ))}
          </div>
          <Link href="/servicios" className="mt-8 inline-block text-pine underline decoration-gold underline-offset-4">
            Ver catálogo completo
          </Link>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-20 text-center lg:px-8">
        <p className="font-script text-3xl text-moss">Tu próxima aventura empieza aquí</p>
        <h2 className="mt-3 font-display text-4xl text-forest md:text-5xl">Viaja con confianza, viaja con sentido</h2>
        <p className="mx-auto mt-4 max-w-xl text-bark">
          Atención personalizada para elegir el paquete que mejor se adapte a ti. Seguimiento después de cada viaje, porque queremos que vuelvas.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Link href="/contacto" className="rounded-full bg-forest px-7 py-3 text-cream">
            Reservar un paquete
          </Link>
          <a href={instagram} target="_blank" rel="noreferrer" className="rounded-full border border-forest/20 px-7 py-3 text-forest">
            Instagram
          </a>
        </div>
      </section>
    </main>
  );
}
