import type { Metadata } from "next";
import { Exo_2, Inter } from "next/font/google"; // 1. Importăm fonturile
import "./globals.css";
import Header from "./components/Header"; // Vom crea acest component imediat
import Footer from "./components/Footer"; // și pe acesta

// 2. Configurăm fonturile
const exo2 = Exo_2({
  subsets: ["latin"],
  weight: ['700'],
  variable: '--font-exo2',
});

const inter = Inter({
  subsets: ["latin"],
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: "Precision Auto Garage - Service Auto Modern",
  description: "Servicii de diagnoză, întreținere și reparații la cele mai înalte standarde.",
  icons: {
    icon: '/faviconlogo.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // 3. Aplicăm variabilele de font pe tot site-ul
    <html lang="ro" className={`${exo2.variable} ${inter.variable}`}>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}