import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Geist_Mono } from "next/font/google";
import "./globals.css";

const jakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Denuar Andrés Ramos Lezama - Data & ML Engineer",
  description:
    "Portafolio de Denuar Andrés Ramos Lezama. Data Engineer, ML Engineer, Bogotá Colombia",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={`${jakartaSans.variable} ${geistMono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
