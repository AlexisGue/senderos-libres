"use client";

import { FormEvent, useState } from "react";
import { destinations } from "@/lib/data";

export function ContactForm() {
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [people, setPeople] = useState("2");
  const [destination, setDestination] = useState(destinations[0].name);
  const [date, setDate] = useState("");
  const [message, setMessage] = useState("");
  const [company, setCompany] = useState("");

  async function onSubmit(event: FormEvent) {
    event.preventDefault();
    setError("");
    setLoading(true);

    try {
      const response = await fetch("/api/reserva", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          phone,
          destination,
          people,
          date,
          message,
          company,
        }),
      });
      const data = (await response.json()) as { ok?: boolean; error?: string };
      if (!response.ok || !data.ok) {
        throw new Error(data.error || "No se pudo enviar la reserva.");
      }
      setSent(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : "No se pudo enviar la reserva.");
    } finally {
      setLoading(false);
    }
  }

  if (sent) {
    return (
      <div className="rounded-3xl border border-sage/40 bg-white/70 p-8 text-center">
        <p className="font-display text-3xl text-forest">Reserva enviada</p>
        <p className="mt-3 text-bark">
          Ya nos llegó tu solicitud. Te escribimos pronto para confirmar el viaje.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-4">
      <label className="sr-only" aria-hidden="true">
        Empresa
        <input tabIndex={-1} autoComplete="off" value={company} onChange={(e) => setCompany(e.target.value)} />
      </label>
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
            max={50}
            required
            value={people}
            onChange={(e) => setPeople(e.target.value)}
            className="rounded-2xl border border-forest/15 bg-white px-4 py-3 outline-none ring-gold/40 focus:ring-2"
          />
        </label>
      </div>
      <label className="grid gap-1 text-sm">
        Fecha del viaje
        <input
          type="date"
          required
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className="rounded-2xl border border-forest/15 bg-white px-4 py-3 outline-none ring-gold/40 focus:ring-2"
        />
      </label>
      <label className="grid gap-1 text-sm">
        Mensaje
        <textarea
          rows={4}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Dudas, punto de encuentro u otros detalles..."
          className="rounded-2xl border border-forest/15 bg-white px-4 py-3 outline-none ring-gold/40 focus:ring-2"
        />
      </label>
      {error ? <p className="text-sm text-red-700">{error}</p> : null}
      <button
        type="submit"
        disabled={loading}
        className="mt-2 rounded-full bg-forest px-6 py-3 text-cream transition hover:bg-pine disabled:opacity-60"
      >
        {loading ? "Enviando..." : "Enviar reserva"}
      </button>
    </form>
  );
}
