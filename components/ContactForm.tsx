"use client";

import { FormEvent, useMemo, useState } from "react";
import { destinations, email, instagram } from "@/lib/data";

export function ContactForm() {
  const [sent, setSent] = useState(false);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [people, setPeople] = useState("2");
  const [destination, setDestination] = useState(destinations[0].name);
  const [message, setMessage] = useState("");

  const mailHref = useMemo(() => {
    const subject = encodeURIComponent(`Reserva: ${destination}`);
    const body = encodeURIComponent(
      `Hola Senderos Libres,\n\nQuiero reservar ${destination}.\nNombre: ${name}\nTeléfono: ${phone}\nPersonas: ${people}\n\n${message}`,
    );
    return `mailto:${email}?subject=${subject}&body=${body}`;
  }, [destination, message, name, people, phone]);

  function onSubmit(event: FormEvent) {
    event.preventDefault();
    window.location.href = mailHref;
    setSent(true);
  }

  if (sent) {
    return (
      <div className="rounded-3xl border border-sage/40 bg-white/70 p-8 text-center">
        <p className="font-display text-3xl text-forest">Tu próxima aventura ya empezó</p>
        <p className="mt-3 text-bark">
          Abre el correo para enviarnos la reserva o escríbenos por Instagram.
        </p>
        <a
          href={instagram}
          target="_blank"
          rel="noreferrer"
          className="mt-6 inline-flex rounded-full bg-forest px-6 py-3 text-cream"
        >
          Escribir por Instagram
        </a>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-4">
      <label className="grid gap-1 text-sm">
        Nombre
        <input
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="rounded-2xl border border-forest/15 bg-white px-4 py-3 outline-none ring-gold/40 focus:ring-2"
        />
      </label>
      <label className="grid gap-1 text-sm">
        Teléfono o WhatsApp
        <input
          required
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          className="rounded-2xl border border-forest/15 bg-white px-4 py-3 outline-none ring-gold/40 focus:ring-2"
        />
      </label>
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="grid gap-1 text-sm">
          Destino
          <select
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
            min={1}
            value={people}
            onChange={(e) => setPeople(e.target.value)}
            className="rounded-2xl border border-forest/15 bg-white px-4 py-3 outline-none ring-gold/40 focus:ring-2"
          />
        </label>
      </div>
      <label className="grid gap-1 text-sm">
        Mensaje
        <textarea
          rows={4}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Fecha tentativa, si viajan en grupo, dudas..."
          className="rounded-2xl border border-forest/15 bg-white px-4 py-3 outline-none ring-gold/40 focus:ring-2"
        />
      </label>
      <button
        type="submit"
        className="mt-2 rounded-full bg-forest px-6 py-3 text-cream transition hover:bg-pine"
      >
        Enviar solicitud
      </button>
    </form>
  );
}
