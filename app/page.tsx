"use client";

import { motion, Variants } from "framer-motion";
import Link from "next/link";
// Am eliminat importul pentru Image, deoarece nu îl mai folosim momentan
// import Image from "next/image";

// Variante de animație pentru un efect de "cascade"
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

export default function Home() {
  return (
    <main>
      {/* --- HERO SECTION --- */}
      <section className="relative flex h-[80vh] items-center">
        <div className="absolute inset-0 z-0">
          {/* Am eliminat div-ul cu imaginea de fundal */}
          <div className="absolute inset-0 bg-gradient-to-t from-[var(--background)] via-[var(--background)]/80 to-transparent"></div>
        </div>
        <div className="container relative z-10 mx-auto px-6 text-center">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-col items-center"
          >
            <motion.h1 variants={itemVariants} className="text-4xl font-bold tracking-tight md:text-6xl lg:text-7xl">
              Service Auto de <span className="text-[var(--primary-accent)]">Precizie</span>.
              <br />
              Tehnologie Modernă.
            </motion.h1>
            <motion.p variants={itemVariants} className="mt-6 max-w-2xl text-lg text-gray-300">
              Oferim servicii de diagnoză, întreținere și reparații la cele mai înalte standarde pentru automobilul tău.
            </motion.p>
            <motion.div variants={itemVariants} className="mt-8 flex flex-wrap justify-center gap-4">
              <Link
                href="#contact"
                className="rounded-lg bg-[var(--primary-accent)] px-8 py-3 font-semibold text-white transition-transform duration-300 hover:scale-105"
              >
                Programează o vizită
              </Link>
              <Link
                href="#servicii"
                className="rounded-lg bg-white/10 px-8 py-3 font-semibold text-white transition-colors duration-300 hover:bg-white/20"
              >
                Vezi Serviciile
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* --- SECȚIUNEA DE SERVICII --- */}
      <section id="servicii" className="container mx-auto px-6 py-24">
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center"
        >
            <h2 className="text-4xl font-bold md:text-5xl">Serviciile Noastre Specializate</h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-400">
                Folosim tehnologie de ultimă oră pentru a oferi un diagnostic precis și reparații de durată pentru mașina ta.
            </p>
        </motion.div>
        <motion.div 
            className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={containerVariants}
        >
            {/* ... cardurile de servicii ... */}
            <motion.div variants={itemVariants} className="rounded-2xl border border-[var(--secondary-accent)]/30 bg-gray-900/50 p-8 text-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="mx-auto h-10 w-10 mb-4 text-[var(--primary-accent)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M12 6V3m0 18v-3M5.636 5.636l-1.414-1.414M19.778 19.778l-1.414-1.414M18.364 5.636l1.414-1.414M4.222 19.778l1.414-1.414M12 12a3 3 0 100-6 3 3 0 000 6z" /></svg>
                <h3 className="text-xl font-bold text-white">Diagnoză Computerizată</h3>
                <p className="mt-2 text-sm text-gray-400">Identificăm rapid și precis orice defecțiune cu echipamente de ultimă generație.</p>
            </motion.div>
            <motion.div variants={itemVariants} className="rounded-2xl border border-[var(--secondary-accent)]/30 bg-gray-900/50 p-8 text-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="mx-auto h-10 w-10 mb-4 text-[var(--primary-accent)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.096 2.572-1.065z" /><path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                <h3 className="text-xl font-bold text-white">Revizie & Întreținere</h3>
                <p className="mt-2 text-sm text-gray-400">Servicii complete de revizie periodică pentru a menține performanța mașinii tale.</p>
            </motion.div>
            <motion.div variants={itemVariants} className="rounded-2xl border border-[var(--secondary-accent)]/30 bg-gray-900/50 p-8 text-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="mx-auto h-10 w-10 mb-4 text-[var(--primary-accent)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M8 9l4-4 4 4m0 6l-4 4-4-4" /></svg>
                <h3 className="text-xl font-bold text-white">Reparații Mecanice</h3>
                <p className="mt-2 text-sm text-gray-400">Intervenții complexe, de la motor și transmisie la sisteme de frânare și suspensie.</p>
            </motion.div>
            <motion.div variants={itemVariants} className="rounded-2xl border border-[var(--secondary-accent)]/30 bg-gray-900/50 p-8 text-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="mx-auto h-10 w-10 mb-4 text-[var(--primary-accent)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M21 7.5l-9-5.25L3 7.5m18 0l-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9" /></svg>
                <h3 className="text-xl font-bold text-white">Service Roți & Geometrie</h3>
                <p className="mt-2 text-sm text-gray-400">Echilibrare, montare și geometrie computerizată pentru o ținută de drum perfectă.</p>
            </motion.div>
        </motion.div>
      </section>

      {/* --- SECȚIUNEA "DESPRE NOI" --- */}
      <section id="despre" className="container mx-auto px-6 py-24">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center">
            <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="relative h-80 w-full rounded-2xl lg:h-[500px] bg-gray-800 flex items-center justify-center"
            >
                {/* Am înlocuit componenta Image cu un placeholder stilizat */}
                <p className="text-gray-500">Placeholder Imagine Mecanic</p>
            </motion.div>
            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={containerVariants}
            >
                <motion.h2 variants={itemVariants} className="text-4xl font-bold md:text-5xl">De ce să alegi Precision Auto?</motion.h2>
                <motion.p variants={itemVariants} className="mt-4 text-lg text-gray-400">
                    Suntem mai mult decât un service auto. Suntem partenerul de încredere al mașinii tale, dedicat să ofere servicii de cea mai înaltă calitate.
                </motion.p>
                <ul className="mt-8 space-y-6">
                    <motion.li variants={itemVariants} className="flex gap-4">
                        <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-blue-500/10 text-[var(--primary-accent)]">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                        </div>
                        <div>
                            <h3 className="text-xl font-bold text-white">Transparență Totală</h3>
                            <p className="mt-1 text-gray-400">Primești un deviz detaliat înainte de orice intervenție și ești informat la fiecare pas.</p>
                        </div>
                    </motion.li>
                    <motion.li variants={itemVariants} className="flex gap-4">
                        <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-blue-500/10 text-[var(--primary-accent)]">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>
                        </div>
                        <div>
                            <h3 className="text-xl font-bold text-white">Mecanici Certificați</h3>
                            <p className="mt-1 text-gray-400">Echipa noastră este formată din tehnicieni cu experiență, în continuă formare profesională.</p>
                        </div>
                    </motion.li>
                    <motion.li variants={itemVariants} className="flex gap-4">
                        <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-blue-500/10 text-[var(--primary-accent)]">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                        </div>
                        <div>
                            <h3 className="text-xl font-bold text-white">Garanție la Piese și Manoperă</h3>
                            <p className="mt-1 text-gray-400">Oferim garanție pentru toate lucrările efectuate și piesele montate în service-ul nostru.</p>
                        </div>
                    </motion.li>
                </ul>
            </motion.div>
        </div>
      </section>

      {/* --- SECȚIUNEA DE CONTACT --- */}
      <section id="contact" className="container mx-auto px-6 py-24">
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center"
        >
            <h2 className="text-4xl font-bold md:text-5xl">Programează o vizită</h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-400">
                Completează formularul de mai jos sau sună-ne direct. Echipa noastră este gata să te ajute.
            </p>
        </motion.div>

        <div className="mt-16 grid grid-cols-1 gap-12 lg:grid-cols-2">
            {/* Coloana Stânga: Formular */}
            <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="rounded-2xl border border-[var(--secondary-accent)]/30 bg-gray-900/50 p-8"
            >
                <form action="#" method="POST" className="space-y-6">
                    <div>
                        <label htmlFor="name" className="sr-only">Nume</label>
                        <input type="text" name="name" id="name" placeholder="Numele tău" className="w-full rounded-lg border-[var(--secondary-accent)]/50 bg-gray-800 p-3 text-white focus:border-[var(--primary-accent)] focus:ring-[var(--primary-accent)]" />
                    </div>
                     <div>
                        <label htmlFor="phone" className="sr-only">Telefon</label>
                        <input type="tel" name="phone" id="phone" placeholder="Număr de telefon" className="w-full rounded-lg border-[var(--secondary-accent)]/50 bg-gray-800 p-3 text-white focus:border-[var(--primary-accent)] focus:ring-[var(--primary-accent)]" />
                    </div>
                    <div>
                        <label htmlFor="car" className="sr-only">Marcă & Model Mașină</label>
                        <input type="text" name="car" id="car" placeholder="Marcă & Model Mașină" className="w-full rounded-lg border-[var(--secondary-accent)]/50 bg-gray-800 p-3 text-white focus:border-[var(--primary-accent)] focus:ring-[var(--primary-accent)]" />
                    </div>
                    <div>
                        <label htmlFor="message" className="sr-only">Mesaj</label>
                        <textarea name="message" id="message" rows={4} placeholder="Descrie pe scurt problema..." className="w-full rounded-lg border-[var(--secondary-accent)]/50 bg-gray-800 p-3 text-white focus:border-[var(--primary-accent)] focus:ring-[var(--primary-accent)]"></textarea>
                    </div>
                    <button type="submit" className="w-full rounded-lg bg-[var(--primary-accent)] px-8 py-3 font-semibold text-white transition-transform duration-300 hover:scale-105">Trimite Solicitarea</button>
                </form>
            </motion.div>
            
            {/* Coloana Dreapta: Hartă și Detalii */}
            <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
            >
                <div className="relative h-80 w-full rounded-2xl lg:h-full">
                    {/* Placeholder pentru hartă */}
                    <div className="absolute inset-0 rounded-2xl bg-gray-800 flex items-center justify-center">
                        <p className="text-gray-500">Placeholder Hartă Interactivă</p>
                    </div>
                </div>
            </motion.div>
        </div>
      </section>
    </main>
  );
}

