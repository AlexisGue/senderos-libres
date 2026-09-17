"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { destinations, email } from "@/lib/data";

export function ContactForm() {
  const params = useSearchParams();
  const [nextUrl, setNextUrl] = useState("https://senderos-libres.vercel.app/contacto?enviado=1");
  const [destination, setDestination] = useState(destinations[0].name);

  useEffect(() => {
    setNextUrl(`${window.location.origin}/contacto?enviado=1`);
  }, []);

  if (params.get("enviado") === "1") {
    return (
      <div className="rounded-3xl border border-sage/40 bg-white/70 p-8 text-center">
        <p className="font-display text-3xl text-forest">Reserva enviada</p>
        <p className="mt-3 text-bark">
          Ya nos llegó tu solicitud a {email}. Te escribimos pronto para confirmar el viaje.
        </p>
      </div>
    );
  }

  return (
    <form action={`https://formsubmit.co/${email}`} method="POST" className="grid gap-4">
      <input type="hidden" name="_subject" value={`Nueva reserva: ${destination}`} />
      <input type="hidden" name="_template" value="table" />
      <input type="hidden" name="_captcha" value="false" />
      <input type="hidden" name="_next" value={nextUrl} />
      <input type="text" name="_honey" className="hidden" tabIndex={-1} autoComplete="off" />

      <label className="grid gap-1 text-sm">
        Nombre
        <input
          required
          name="Nombre"
          className="rounded-2xl border border-forest/15 bg-white px-4 py-3 outline-none ring-gold/40 focus:ring-2"
        />
      </label>
      <label className="grid gap-1 text-sm">
        Teléfono o WhatsApp
        <input
          required
          name="Telefono"
          className="rounded-2xl border border-forest/15 bg-white px-4 py-3 outline-none ring-gold/40 focus:ring-2"
        />
      </label>
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="grid gap-1 text-sm">
          Destino
          <select
            required
            name="Destino"
            value={destination}
            onChange={(e) => setDestination(e.target.value)}
            className="rounded-2xl border border-forest/15 bg-white px-4 py-3 outline-none ring-gold/40 focus:ring-2"
          >
            {destinations.map((item) => (
              <option key={item.slug}>{item.name}</option>
            ))}
          </select>
        </label>
        <label className="grid gap-1 text-sm">
          Personas
          <input
            type="number"
            name="Personas"
            min={1}
            max={50}
            required
            defaultValue={2}
            className="rounded-2xl border border-forest/15 bg-white px-4 py-3 outline-none ring-gold/40 focus:ring-2"
          />
        </label>
      </div>
      <label className="grid gap-1 text-sm">
        Fecha del viaje
        <input
          type="date"
          name="Fecha"
          required
          className="rounded-2xl border border-forest/15 bg-white px-4 py-3 outline-none ring-gold/40 focus:ring-2"
        />
      </label>
      <label className="grid gap-1 text-sm">
        Mensaje
        <textarea
          name="Mensaje"
          rows={4}
          placeholder="Dudas, punto de encuentro u otros detalles..."
          className="rounded-2xl border border-forest/15 bg-white px-4 py-3 outline-none ring-gold/40 focus:ring-2"
        />
      </label>
      <button type="submit" className="mt-2 rounded-full bg-forest px-6 py-3 text-cream transition hover:bg-pine">
        Enviar reserva
      </button>
    </form>
  );
}
