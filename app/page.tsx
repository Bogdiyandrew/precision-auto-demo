"use client";

import { motion, Variants, Transition } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import {
  Wrench,
  Cog,
  ShieldCheck,
  Users,
  BadgeCheck,
  MapPin,
  Phone,
  Mail,
  Zap,
  Settings,
  Star,
  ArrowRight,
  CheckCircle,
  Timer,
  Gauge,
  Calendar,
  Clock,
  Award,
  TrendingUp,
  Shield,
  Sparkles,
  Car,
  Send,
  SendHorizontal
} from 'lucide-react';

// --- Imagini Galerie (Asigură-te că există în folderul /public) ---
const galleryImages = [
  { id: 1, src: "/1.png", alt: "Atelier service auto high-tech" },
  { id: 2, src: "/2.png", alt: "Mecanic specialist motor" },
  { id: 3, src: "/3.png", alt: "Stație ITP și diagnoză" },
];

// --- Variante Animații (Optimizate pentru fluiditate) ---
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
};

const springTransition: Transition = {
  type: "spring",
  stiffness: 100,
  damping: 20,
  mass: 0.5
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: springTransition,
  },
};

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <main className="overflow-x-hidden">

      {/* --- HERO SECTION --- */}
      <section className="relative flex h-screen min-h-[850px] items-center justify-center overflow-hidden">
        {/* Background Layer */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/6.png" // Imaginea principală de fundal
            alt="Atelier Precision Auto"
            fill
            priority
            className="object-cover object-center opacity-60"
            sizes="100vw"
          />
          {/* Gradient peste imagine pentru lizibilitate */}
          <div className="absolute inset-0 bg-gradient-to-t from-[var(--background)] via-[var(--background)]/80 to-transparent"></div>
          {/* Pattern-ul matrix definit în CSS */}
          <div className="absolute inset-0 matrix-bg opacity-30 mix-blend-overlay"></div>
        </div>

        {/* Floating Particles (Doar vizual) */}
        {isLoaded && (
          <div className="absolute inset-0 overflow-hidden pointer-events-none z-10">
            {[...Array(8)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-blue-400/40 rounded-full"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
                animate={{
                  y: [0, -150],
                  opacity: [0, 0.8, 0],
                  scale: [0, 1.5, 0]
                }}
                transition={{
                  duration: Math.random() * 5 + 5,
                  repeat: Infinity,
                  delay: Math.random() * 2
                }}
              />
            ))}
          </div>
        )}

        {/* Content Hero */}
        <div className="container relative z-20 mx-auto px-6 text-center">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isLoaded ? "visible" : "hidden"}
            className="flex flex-col items-center max-w-5xl mx-auto"
          >
            {/* AICI a fost eliminată componenta cu "Service Auto Premium • Mioveni" */}

            <motion.h1
              variants={itemVariants}
              className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-8 drop-shadow-2xl"
            >
              Mecanică fină. <br />
              <span className="text-gradient">Tehnologie brută.</span>
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="max-w-2xl text-lg md:text-xl text-gray-300 leading-relaxed mb-10"
            >
              Nu ghicim defectele, le găsim. Folosim diagnoză de ultimă generație și
              piese originale pentru ca mașina ta să ruleze ca în prima zi.
            </motion.p>

            {/* Stats Bar */}
            <motion.div
              variants={itemVariants}
              className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-12 mb-12 p-6 glass-effect rounded-2xl w-full max-w-4xl border border-white/5"
            >
              <StatItem number="2" label="Ani experiență" />
              <StatItem number="200+" label="Motoare salvate" />
              <StatItem number="100%" label="Garanție piese" />
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
            >
              <Link href="#programare" className="btn-primary px-8 py-4 rounded-xl font-bold text-white flex items-center justify-center gap-2 group">
                <Calendar className="w-5 h-5 group-hover:-translate-y-1 transition-transform" />
                Programează o vizitǎ
              </Link>

              <Link href="tel:07xxxxxxxx" className="px-8 py-4 rounded-xl glass-effect border border-white/10 hover:bg-white/5 text-white font-semibold flex items-center justify-center gap-2 transition-all">
                <Phone className="w-5 h-5" />
                07xx xxx xxx
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* --- SERVICES SECTION --- */}
      <section id="servicii" className="relative container mx-auto px-6 py-24 md:py-32">
        <SectionHeader
          icon={<Settings />}
          subtitle="TRANSPARENȚĂ TOTALĂ"
          title="Fără costuri ascunse."
          description="Știi exact cât plătești înainte să ne apucăm de treabă. Prețurile noastre includ manopera și TVA."
        />

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          <ServiceCard
            icon={<Zap size={32} />}
            title="Revizie completă"
            price="de la 299 LEI"
            desc="Schimb ulei, filtre (aer, polen, combustibil), verificare lichide și resetare interval service."
            features={["Ulei Shell/Castrol", "Filtre MANN/Mahle", "Verificare vizuală 360°"]}
          />
          <ServiceCard
            icon={<Gauge size={32} />}
            title="Diagnoză computerizată"
            price="150 LEI"
            desc="Nu ștergem doar erorile, aflăm cauza lor. Folosim testere dedicate pentru fiecare marcă."
            features={["Raport printat", "Interpretare date live", "Verificare parametri"]}
          />
          <ServiceCard
            icon={<Wrench size={32} />}
            title="Mecanică generală"
            price="de la 100 LEI/oră"
            desc="De la plăcuțe de frână la distribuții complexe și reparații capitale la motor."
            features={["Garanție lucrare", "Deviz clar", "Respectare timpi"]}
          />
          <ServiceCard
            icon={<CheckCircle size={32} />}
            title="Pregătire ITP"
            price="99 LEI"
            desc="Verificăm noxele, frânele și luminile înainte să ajungi la ITP, ca să nu fii respins."
            features={["Pre-verificare noxe", "Test frânare", "Reglaj faruri"]}
          />
          <ServiceCard
            icon={<Car size={32} />}
            title="Geometrie 3D"
            price="149 LEI"
            desc="Dacă mașina trage dreapta sau tocește anvelopele, o punem pe standul nostru 3D."
            features={["Acuratețe milimetrică", "Volan drept", "Raport final"]}
          />
          <ServiceCard
            icon={<ShieldCheck size={32} />}
            title="Încărcare freon"
            price="de la 200 LEI"
            desc="Recuperare freon vechi, vidare instalație, adăugare ulei compresor și freon nou."
            features={["R134a sau R1234yf", "Test etanșeitate", "Verificare presiuni"]}
          />
        </motion.div>
      </section>

      {/* --- OFERTĂ SPECIALĂ (Promo Banner) --- */}
      <section className="container mx-auto px-6 py-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-3xl tech-border bg-[var(--background)]"
        >
          {/* Decorative gradients */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/40 via-transparent to-blue-900/40"></div>
          <div className="absolute top-0 right-0 p-12 opacity-20">
            <Sparkles size={120} className="text-blue-400" />
          </div>

          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between p-8 md:p-12 gap-8">
            <div className="text-center md:text-left space-y-4">
              <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-red-500/20 text-red-400 border border-red-500/30 text-xs font-bold uppercase tracking-widest">
                <Timer size={14} /> Ofertă limitată
              </div>
              <h3 className="text-3xl md:text-5xl font-bold">
                Pachet schimb <span className="text-gradient">ulei</span>
              </h3>
              <p className="text-gray-400 max-w-xl">
                Include 5L ulei sintetic de top, filtru de ulei original și manoperă.
                Valabil pentru motorizări până în 2000cm³.
              </p>
            </div>

            <div className="flex flex-col items-center gap-4 bg-white/5 p-6 rounded-2xl border border-white/10 backdrop-blur-sm min-w-[200px]">
              <span className="text-gray-400 text-sm line-through">Preț standard 550 Lei</span>
              <span className="text-4xl font-bold text-white">399 Lei</span>
              <Link href="#programare" className="btn-primary w-full py-3 px-6 rounded-lg font-bold text-center text-sm">
                Rezervă oferta
              </Link>
            </div>
          </div>
        </motion.div>
      </section>

      {/* --- DE CE NOI --- */}
      <section id="de-ce-noi" className="container mx-auto px-6 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Text Content */}
          <div className="space-y-10">
            <div className="space-y-4">
              <h2 className="text-4xl md:text-5xl font-bold">
                Service auto, nu <br />
                <span className="text-gradient">navă spațială.</span>
              </h2>
              <p className="text-gray-400 text-lg leading-relaxed">
                Știm că nu toată lumea se pricepe la mecanică. De aceea, îți explicăm
                problema pe înțelesul tău, îți arătăm piesa defectă și îți cerem acordul
                înainte de orice cost suplimentar.
              </p>
            </div>

            <div className="space-y-6">
              <FeatureRow
                icon={<Shield className="text-blue-400" />}
                title="Garanție reală"
                text="Nu doar pe hârtie. Dacă ceva nu e bine, remediem gratuit."
              />
              <FeatureRow
                icon={<Users className="text-blue-400" />}
                title="Echipă stabilă"
                text="Aceiași mecanici de ani de zile. Nu facem practică pe mașina ta."
              />
              <FeatureRow
                icon={<Clock className="text-blue-400" />}
                title="Respectăm programarea"
                text="Dacă ai programare la 14:00, la 14:00 intră mașina pe elevator."
              />
            </div>
          </div>

          {/* Image/Visual */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative h-[500px] lg:h-[600px] rounded-3xl overflow-hidden tech-border"
          >
            <Image
              src="/about-us-mechanic.png"
              alt="Echipa Precision Auto"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            {/* Overlay Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-[var(--background)] via-transparent to-transparent"></div>

            {/* Floating Badge */}
            <div className="absolute bottom-8 left-8 right-8 glass-effect p-6 border border-white/10 rounded-2xl">
              <div className="flex items-center gap-4">
                <div className="bg-green-500/20 p-3 rounded-full text-green-400">
                  <BadgeCheck size={32} />
                </div>
                <div>
                  <h4 className="font-bold text-white text-lg">Service autorizat RAR</h4>
                  <p className="text-sm text-gray-400">Toate standardele de calitate respectate.</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* --- TESTIMONIALE --- */}
      <section id="testimoniale" className="relative container mx-auto px-6 py-24 bg-white/5 rounded-[3rem]">
        <SectionHeader
          icon={<Star className="text-yellow-400 fill-current" />}
          subtitle="VOCEA CLIENȚILOR"
          title="Nu ne lăudăm noi."
          description="Uite ce spun oamenii care ne-au trecut pragul."
        />

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <TestimonialCard
            name="Marius D."
            role="Proprietar BMW X5"
            text="În sfârșit un loc unde nu te simți păcălit. Mi-au arătat piesele vechi, mi-au explicat manopera. Oameni serioși."
            stars={5}
          />
          <TestimonialCard
            name="Andreea Ionescu"
            role="Proprietar VW Golf"
            text="Am fost la 3 service-uri înainte să ajung la ei pentru o bătaie la motor. Ei au găsit-o în 15 minute. Recomand!"
            stars={5}
          />
          <TestimonialCard
            name="Cristi Popa"
            role="Proprietar Ford Focus"
            text="Prețuri corecte și curățenie exemplară. Nu pleci cu ulei pe volan sau pe scaune. Profesioniști."
            stars={5}
          />
        </motion.div>
      </section>

      {/* --- GALERIE FOTO --- */}
      <section id="galerie" className="container mx-auto px-6 py-24">
        <SectionHeader
          icon={<Zap />}
          subtitle="TRANSPARENȚĂ"
          title="Aruncă o privire în culise"
          description="Echipamente moderne și un mediu de lucru organizat."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 h-[500px]">
          {/* Grid asimetric pentru aspect modern */}
          <div className="relative md:col-span-2 md:row-span-2 rounded-2xl overflow-hidden tech-border group">
            <Image src="/1.png" alt="Atelier General" fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors"></div>
            <span className="absolute bottom-4 left-4 bg-black/60 px-3 py-1 rounded-lg text-sm backdrop-blur-md">Zona recepție</span>
          </div>
          <div className="relative rounded-2xl overflow-hidden tech-border group">
            <Image src="/2.png" alt="Diagnoză" fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
          </div>
          <div className="relative rounded-2xl overflow-hidden tech-border group">
            <Image src="/3.png" alt="Elevatoare" fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
          </div>
        </div>
      </section>

      {/* --- PROGRAMARE --- */}
      <section id="programare" className="relative container mx-auto px-6 py-24 mb-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-24">

          {/* Left Content */}
          <div>
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              Hai să ne vedem <br />
              <span className="text-gradient">la atelier.</span>
            </h2>
            <p className="text-gray-400 text-lg mb-10">
              Completează formularul și te sunăm noi în maximum 30 de minute (în timpul programului) pentru confirmare.
            </p>

            <div className="space-y-8">
              <ContactDetail
                icon={<MapPin />}
                title="Ne găsești aici"
                content="Strada Mecanicilor Nr. 1, Pitești, Argeș"
              />
              <ContactDetail
                icon={<Phone />}
                title="Sună-ne direct"
                content="0722 123 456"
                action="tel:0722123456"
              />
              <ContactDetail
                icon={<Mail />}
                title="Scrie-ne"
                content="programari@precisionauto.ro"
                action="mailto:programari@precisionauto.ro"
              />
              <ContactDetail
                icon={<Clock />}
                title="Program Atelier"
                content="Luni - Vineri: 08:00 - 17:30"
              />
            </div>
          </div>

          {/* Right Form */}
          <div className="tech-border glass-effect p-8 rounded-3xl bg-[var(--background)]/50">
            <BookingForm />
          </div>

        </div>
      </section>

    </main>
  );
}

/* --- SUB-COMPONENTE RAFINATE PENTRU COD CURAT --- */

// 1. Header Secțiune Reutilizabil
const SectionHeader = ({ icon, subtitle, title, description }: any) => (
  <div className="text-center mb-16 max-w-3xl mx-auto">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full glass-effect border border-white/5 text-blue-400"
    >
      {icon}
      <span className="text-xs font-bold tracking-[0.2em] uppercase">{subtitle}</span>
    </motion.div>
    <motion.h2
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.1 }}
      className="text-4xl md:text-5xl font-bold mb-6"
    >
      {title}
    </motion.h2>
    <motion.p
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.2 }}
      className="text-gray-400 text-lg"
    >
      {description}
    </motion.p>
  </div>
);

// 2. Card Serviciu cu Tech Border
const ServiceCard = ({ icon, title, desc, price, features }: any) => (
  <motion.div
    variants={itemVariants}
    className="group relative p-8 rounded-2xl tech-border glass-effect hover:bg-white/5 transition-all duration-300"
  >
    <div className="flex justify-between items-start mb-6">
      <div className="p-3 bg-blue-500/10 rounded-xl text-blue-400 group-hover:text-white group-hover:bg-blue-500 transition-colors">
        {icon}
      </div>
      <span className="text-sm font-bold text-gradient bg-white/5 px-3 py-1 rounded-lg border border-white/10">
        {price}
      </span>
    </div>
    <h3 className="text-xl font-bold mb-3">{title}</h3>
    <p className="text-gray-400 text-sm mb-6 leading-relaxed">{desc}</p>
    <ul className="space-y-2 border-t border-white/5 pt-4">
      {features.map((f: string, i: number) => (
        <li key={i} className="flex items-center gap-2 text-xs text-gray-500 group-hover:text-gray-300">
          <CheckCircle size={12} className="text-green-500/70" /> {f}
        </li>
      ))}
    </ul>
  </motion.div>
);

// 3. Stat Item Hero
const StatItem = ({ number, label }: any) => (
  <div className="text-center">
    <div className="text-2xl md:text-3xl font-bold text-white mb-1">{number}</div>
    <div className="text-xs text-gray-400 uppercase tracking-wider">{label}</div>
  </div>
);

// 4. Feature Row (De ce noi)
const FeatureRow = ({ icon, title, text }: any) => (
  <div className="flex gap-4">
    <div className="mt-1 flex-shrink-0 w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center border border-white/10">
      {icon}
    </div>
    <div>
      <h4 className="text-lg font-bold text-white mb-1">{title}</h4>
      <p className="text-gray-400 text-sm">{text}</p>
    </div>
  </div>
);

// 5. Testimonial Card
const TestimonialCard = ({ name, role, text, stars }: any) => (
  <div className="p-8 rounded-2xl bg-[var(--background)] border border-white/5 shadow-xl">
    <div className="flex gap-1 mb-4 text-yellow-500">
      {[...Array(stars)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
    </div>
    <p className="text-gray-300 italic mb-6">"{text}"</p>
    <div className="flex items-center gap-3">
      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-cyan-400 flex items-center justify-center font-bold text-white">
        {name.charAt(0)}
      </div>
      <div>
        <div className="font-bold text-sm">{name}</div>
        <div className="text-xs text-gray-500">{role}</div>
      </div>
    </div>
  </div>
);

// 6. Contact Detail
const ContactDetail = ({ icon, title, content, action }: any) => (
  <div className="flex items-center gap-4 group">
    <div className="w-12 h-12 rounded-full glass-effect flex items-center justify-center text-blue-400 group-hover:scale-110 transition-transform">
      {icon}
    </div>
    <div>
      <div className="text-xs text-gray-500 uppercase tracking-wider mb-1">{title}</div>
      {action ? (
        <a href={action} className="text-lg font-bold text-white hover:text-blue-400 transition-colors">{content}</a>
      ) : (
        <div className="text-lg font-bold text-white">{content}</div>
      )}
    </div>
  </div>
);

// 7. Booking Form
const BookingForm = () => {
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      alert("Mesaj trimis! Te sunăm curând.");
    }, 1500);
  };

  const inputClasses = "w-full bg-[var(--background)] border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all";

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <h3 className="text-2xl font-bold mb-6">Formular</h3>

      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-1">
          <label className="text-xs text-gray-400 ml-1">Nume</label>
          <input type="text" required placeholder="Numele tău" className={inputClasses} />
        </div>
        <div className="space-y-1">
          <label className="text-xs text-gray-400 ml-1">Telefon</label>
          <input type="tel" required placeholder="07xx xxx xxx" className={inputClasses} />
        </div>
      </div>

      <div className="space-y-1">
        <label className="text-xs text-gray-400 ml-1">Ce mașină ai?</label>
        <input type="text" required placeholder="ex: VW Golf 7, 2016" className={inputClasses} />
      </div>

      <div className="space-y-1">
        <label className="text-xs text-gray-400 ml-1">Tip serviciu</label>
        <select className={inputClasses}>
          <option>Vreau o Revizie</option>
          <option>Problemă Mecanică</option>
          <option>Diagnoză / Martor în bord</option>
          <option>ITP</option>
          <option>Altceva</option>
        </select>
      </div>

      <div className="space-y-1">
        <label className="text-xs text-gray-400 ml-1">Data preferată (opțional)</label>
        <input type="date" className={inputClasses} />
      </div>

      <button
        type="submit"
        disabled={loading}
        className="w-full btn-primary mt-4 py-4 rounded-xl font-bold text-white flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-blue-500/20 transition-all cursor-pointer"
      >
        {loading ? <span className="animate-spin">⌛</span> : <><SendHorizontal size={18} /> Trimite cererea</>}
      </button>
      <p className="text-xs text-center text-gray-500 mt-4">
        Prin trimiterea formularului ești de acord cu prelucrarea datelor.
      </p>
    </form>
  );
};