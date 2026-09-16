import Link from "next/link";

export default function NotFound() {
  return (
    <main className="mx-auto max-w-3xl px-5 py-28 text-center">
      <p className="font-script text-3xl text-moss">Te saliste del sendero</p>
      <h1 className="mt-3 font-display text-5xl text-forest">Página no encontrada</h1>
      <Link href="/" className="mt-8 inline-flex rounded-full bg-forest px-6 py-3 text-cream">
        Volver al inicio
      </Link>
    </main>
  );
}
