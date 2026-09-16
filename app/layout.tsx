import type { Metadata } from "next";
import { Caveat, Cormorant_Garamond, Outfit } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-cormorant",
  display: "swap",
});

const caveat = Caveat({
  subsets: ["latin"],
  variable: "--font-caveat",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Senderos Libres | Agencia de viajes y turismo",
    template: "%s | Senderos Libres",
  },
  description:
    "Agencia de viajes salvadoreña de aventura y naturaleza. Paquetes a Cerro El Pital, Cerro Verde + Lago de Coatepeque y Antigua Guatemala.",
  keywords: [
    "Senderos Libres",
    "agencia de viajes El Salvador",
    "Cerro El Pital",
    "Lago de Coatepeque",
    "Antigua Guatemala",
    "turismo de aventura",
  ],
  openGraph: {
    title: "Senderos Libres",
    description: "Más que destinos, son experiencias.",
    locale: "es_SV",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={`${outfit.variable} ${cormorant.variable} ${caveat.variable}`}>
      <body className="paper-bg min-h-screen font-sans antialiased">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
