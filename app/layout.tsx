import type { Metadata } from "next";
import { Exo_2, Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

const exo2 = Exo_2({
  subsets: ["latin"],
  variable: '--font-exo2',
  display: 'swap',
});

const inter = Inter({
  subsets: ["latin"],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Precision Auto Garage - Service Auto Modern",
  description: "Servicii de diagnoză, întreținere și reparații la cele mai înalte standarde.",
  icons: {
    icon: '/32x32logo.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ro" className={`${exo2.variable} ${inter.variable} scroll-smooth`}>
      <body className="antialiased bg-[var(--background)] text-[var(--foreground)] overflow-x-hidden">
        <Header />
        <main className="relative z-10 min-h-screen flex flex-col">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}