import type { Metadata } from "next";
import { Poppins, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: {
    default: "Emobi — Bengkel Motor Listrik Terpercaya",
    template: "%s | Emobi",
  },
  description:
    "Emobi adalah bengkel motor listrik profesional. Layanan konversi motor listrik, upgrade, jual beli motor second, spare part, dan gerobak listrik.",
  keywords: ["bengkel motor listrik", "konversi motor listrik", "upgrade motor listrik", "emobi", "gerobak listrik"],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="id" className={`${poppins.variable} ${plusJakarta.variable} h-full`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
