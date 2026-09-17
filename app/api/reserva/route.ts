import { destinations, email } from "@/lib/data";

export const runtime = "nodejs";

type ReservaBody = {
  name?: string;
  phone?: string;
  destination?: string;
  people?: string | number;
  date?: string;
  message?: string;
  company?: string;
};

const allowedDestinations = new Set(destinations.map((item) => item.name));

function clean(value: unknown, max = 200) {
  return String(value ?? "")
    .trim()
    .slice(0, max);
}

export async function POST(request: Request) {
  let body: ReservaBody;

  try {
    body = (await request.json()) as ReservaBody;
  } catch {
    return Response.json({ ok: false, error: "Datos inválidos." }, { status: 400 });
  }

  if (clean(body.company)) {
    return Response.json({ ok: true });
  }

  const name = clean(body.name, 80);
  const phone = clean(body.phone, 40);
  const destination = clean(body.destination, 80);
  const people = Number(body.people);
  const date = clean(body.date, 20);
  const message = clean(body.message, 2000);

  if (name.length < 2 || phone.length < 7 || !allowedDestinations.has(destination) || !Number.isInteger(people) || people < 1 || people > 50 || !date) {
    return Response.json({ ok: false, error: "Revisa los datos de la reserva." }, { status: 400 });
  }

  const response = await fetch(`https://formsubmit.co/ajax/${email}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      _subject: `Nueva reserva: ${destination}`,
      _template: "table",
      _captcha: false,
      Nombre: name,
      Telefono: phone,
      Destino: destination,
      Personas: people,
      Fecha: date,
      Mensaje: message || "(sin mensaje)",
    }),
  });

  if (!response.ok) {
    return Response.json(
      { ok: false, error: "No se pudo enviar la reserva. Inténtalo de nuevo." },
      { status: 502 },
    );
  }

  return Response.json({ ok: true });
}
