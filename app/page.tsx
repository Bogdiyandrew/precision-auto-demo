"use client";

import { motion, Variants, Transition } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { 
    Wrench, 
    Cog, 
    GitCommitHorizontal,
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
    Sparkles
} from 'lucide-react';

// --- Date pentru Galerie ---
const galleryImages = [
  { id: 1, src: "/1.png", alt: "Atelier service auto modern și curat" },
  { id: 2, src: "/2.png", alt: "Mecanic profesionist verificând motorul unei mașini" },
  { id: 3, src: "/3.png", alt: "Echipament de diagnoză auto avansat" },
  // Poți adăuga o a șasea imagine aici dacă dorești, de ex:
  // { id: 6, src: "/gallery/6.png", alt: "O altă imagine descriptivă" },
];

// --- Enhanced Animation Variants ---
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.3 },
  },
};

const springTransition: Transition = { 
  type: "spring", 
  stiffness: 120, 
  damping: 18,
  mass: 0.8
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 60, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: springTransition,
  },
};

// --- Enhanced Hero Text Animation ---
const heroText = [
    { type: "text", text: "Service Auto" },
    { type: "text", text: "în Bucuresti," },
    { type: "gradient", text: "Rapid și de Încredere" },
];

const textContainerVariants: Variants = {
    visible: { transition: { staggerChildren: 0.4 } },
    hidden: {}
};

const textWordVariants: Variants = {
    hidden: { opacity: 0, y: 50, rotateX: -90 },
    visible: { 
        opacity: 1, 
        y: 0,
        rotateX: 0,
        transition: { 
          type: 'spring', 
          damping: 15, 
          stiffness: 120,
          duration: 1.2
        }
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
      <section className="relative flex h-screen min-h-[800px] items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/6.png"
            alt="Service auto modern - fundal"
            fill
            sizes="100vw"
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/70 to-transparent"></div>
          <div className="absolute inset-0 matrix-bg opacity-20"></div>
        </div>
        
        {isLoaded && (
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-2 h-2 bg-blue-400/30 rounded-full"
                style={{
                  left: `${(i * 17 + 15) % 85 + 10}%`,
                  top: `${(i * 23 + 20) % 70 + 15}%`,
                }}
                animate={{ y: [0, -100, 0], opacity: [0, 1, 0], scale: [0, 1, 0] }}
                transition={{ duration: 6 + (i * 0.7), repeat: Infinity, delay: i * 0.4 }}
              />
            ))}
          </div>
        )}

        <div className="container relative z-10 mx-auto px-6 text-center">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isLoaded ? "visible" : "hidden"}
            className="flex flex-col items-center"
          >
            <motion.h1
            variants={textContainerVariants}
                     className="text-4xl font-bold tracking-tight md:text-6xl lg:text-7xl max-w-6xl mb-6 drop-shadow-[0_4px_12px_rgba(0,0,0,0.9)]"
                        >
              {heroText.map((word, index) => (
                  <motion.span 
                    key={index} 
                    variants={textWordVariants}
                    className={`inline-block mr-4 ${word.type === 'gradient' ? 'text-gradient drop-shadow-2xl' : 'drop-shadow-2xl'}`}
                  >
                    {word.text}
                  </motion.span>
              ))}
            </motion.h1>

            <motion.p 
                variants={itemVariants} 
                 className="max-w-3xl text-xl text-gray-200 leading-relaxed mb-8 drop-shadow-[0_2px_6px_rgba(0,0,0,0.8)]"
                    >
              Redefinim standardele în service-ul auto prin tehnologie avansată și o echipă de experți dedicați.
            </motion.p>
            
            <motion.div 
              variants={itemVariants}
              className="flex flex-wrap justify-center gap-8 mb-12 p-6 glass-effect rounded-2xl"
            >
              <div className="text-center">
                <div className="text-2xl font-bold text-gradient">235+</div>
                <div className="text-sm text-gray-400">Mașini reparate</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gradient">8+</div>
                <div className="text-sm text-gray-400">Ani experiență</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gradient">96.5%</div>
                <div className="text-sm text-gray-400">Clienți mulțumiți</div>
              </div>
            </motion.div>

            <motion.div 
              variants={itemVariants} 
              className="flex flex-col sm:flex-row items-center justify-center gap-6"
            >
              <Link href="#programare" className="group relative w-full sm:w-auto bg-blue-600/90 hover:bg-blue-600 rounded-full px-12 py-5 font-bold text-white text-lg shadow-[0_6px_20px_rgba(0,0,0,0.6)] backdrop-blur-md transition-all duration-300">
                <span className="relative z-10 flex items-center gap-3">
                  Programează-te Online
                  <Calendar className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
              
              <Link href="tel:0722123456" className="group w-full sm:w-auto bg-white/15 hover:bg-white/25 border border-white/30 rounded-full px-12 py-5 font-bold text-white text-lg shadow-[0_4px_15px_rgba(0,0,0,0.5)] backdrop-blur-md transition-all duration-300">
                <span className="flex items-center gap-3">
                  <Phone className="w-5 h-5" />
                  Sună Acum
                </span>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* --- SERVICES SECTION CU PREȚURI --- */}
      <section id="servicii" className="relative container mx-auto px-6 py-32">
        <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="text-center mb-20"
        >
            <motion.div 
              className="inline-flex items-center gap-2 px-6 py-3 mb-6 glass-effect rounded-full"
              whileHover={{ scale: 1.05 }}
            >
              <Settings className="w-5 h-5 text-blue-400" />
              <span className="text-sm font-semibold text-gray-300">SERVICII SPECIALIZATE</span>
            </motion.div>
            
            <h2 className="text-5xl font-bold md:text-6xl mb-6">
              Serviciile Noastre <span className="text-gradient">cu Prețuri Clare</span>
            </h2>
            <p className="mx-auto max-w-3xl text-xl text-gray-400 leading-relaxed">
                Transparență completă - știi din start cât te costă. Fără surprize neplăcute.
            </p>
        </motion.div>
        
        <motion.div 
            className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={containerVariants}
        >
            <ServiceCard 
                icon={<Calendar size={36} />} 
                title="Revizii Periodice" 
                price="începând de la 299 lei"
                description="Menține mașina ta în parametri optimi cu reviziile noastre complete."
                features={["Verificare completă", "Piese originale", "Raport detaliat"]}
            />
            <ServiceCard 
                icon={<Gauge size={36} />} 
                title="Diagnoză Computerizată" 
                price="începând de la 150 lei"
                description="Identificăm rapid orice defecțiune cu echipamente profesionale."
                features={["Scanner profesional", "Verificare sisteme", "Soluții precise"]}
            />
            <ServiceCard 
                icon={<Cog size={36} />} 
                title="Schimb Ulei și Filtre" 
                price="începând de la 249 lei"
                description="Ulei de calitate premium și filtre originale pentru protecție maximă."
                features={["Uleiuri Shell/Castrol", "Filtre originale", "Verificare nivele"]}
            />
            <ServiceCard 
                icon={<CheckCircle size={36} />} 
                title="ITP / Verificări" 
                price="începând de la 99 lei"
                description="Te ajutăm să treci ITP-ul fără probleme, cu verificări prealabile."
                features={["Verificare pre-ITP", "Reglaje necesare", "Însoțire la ITP"]}
            />
            <ServiceCard 
                icon={<Wrench size={36} />} 
                title="Mecanică Generală" 
                price="începând de la 199 lei"
                description="De la reparații simple la intervenții complexe pe motor și transmisie."
                features={["Expertiză avansată", "Piese de calitate", "Garanție lucrări"]}
            />
            <ServiceCard 
                icon={<GitCommitHorizontal size={36} />} 
                title="Geometrie Roți" 
                price="începând de la 149 lei"
                description="Geometrie computerizată 3D pentru o ținută de drum perfectă."
                features={["Tehnologie 3D", "Echilibrare", "Reglaje precise"]}
            />
        </motion.div>
      </section>

      {/* --- OFERTĂ SPECIALĂ --- */}
      <section className="relative container mx-auto px-6 py-20">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative overflow-hidden rounded-3xl tech-border"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-cyan-500/20 to-blue-600/20"></div>
          <div className="absolute inset-0 bg-[url('/noise.png')] opacity-5"></div>
          
          <div className="relative z-10 p-12 md:p-16 text-center">
            <motion.div
              animate={{ rotate: [0, 5, -5, 0] }}
              transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
              className="inline-flex items-center gap-2 px-6 py-3 mb-6 bg-red-500/20 border border-red-400/30 rounded-full"
            >
              <Sparkles className="w-5 h-5 text-red-400" />
              <span className="text-sm font-bold text-red-300">OFERTĂ LIMITATĂ</span>
            </motion.div>
            
            <h2 className="text-4xl md:text-6xl font-bold mb-4">
              Schimb Ulei + Filtru la <span className="text-gradient">399 lei</span>
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Doar în luna aceasta! Include ulei sintetic premium Shell Helix și filtru original.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-6">
              <div className="flex items-center gap-2 text-gray-300">
                <CheckCircle className="w-5 h-5 text-green-400" />
                <span>5L ulei premium</span>
              </div>
              <div className="flex items-center gap-2 text-gray-300">
                <CheckCircle className="w-5 h-5 text-green-400" />
                <span>Filtru original</span>
              </div>
              <div className="flex items-center gap-2 text-gray-300">
                <CheckCircle className="w-5 h-5 text-green-400" />
                <span>Verificare completă</span>
              </div>
            </div>
            
            <Link href="#programare" className="inline-flex items-center gap-3 btn-primary rounded-full px-10 py-4 font-bold text-lg">
              Profită Acum
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </motion.div>
      </section>

      {/* --- DE CE NOI --- */}
        <section id="de-ce-noi" className="relative container mx-auto px-6 py-32">
        <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="text-center mb-20"
        >
            <motion.div 
              className="inline-flex items-center gap-2 px-6 py-3 mb-6 glass-effect rounded-full"
              whileHover={{ scale: 1.05 }}
            >
              <Award className="w-5 h-5 text-blue-400" />
              <span className="text-sm font-semibold text-gray-300">DE CE PRECISION AUTO</span>
            </motion.div>
            
            <h2 className="text-5xl font-bold md:text-6xl mb-6">
              De ce să ne <span className="text-gradient">alegi pe noi</span>?
            </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative h-96 lg:h-[600px] rounded-3xl overflow-hidden tech-border"
          >
            <Image 
              src="/about-us-mechanic.png"
              alt="Mecanic profesionist"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="space-y-6">
              <div className="flex gap-6 items-start">
                <motion.div 
                  className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-2xl glass-effect text-blue-400"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                >
                  <ShieldCheck />
                </motion.div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-xl font-bold text-white">Transparență Totală</h3>
                    <span className="px-3 py-1 text-xs font-bold bg-blue-500/20 text-blue-300 rounded-full">
                      100% transparent
                    </span>
                  </div>
                  <p className="text-gray-400 leading-relaxed">Primești un deviz detaliat înaintea oricărei intervenții și ești informat la fiecare pas.</p>
                </div>
              </div>

              <div className="flex gap-6 items-start">
                <motion.div 
                  className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-2xl glass-effect text-blue-400"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                >
                  <Users />
                </motion.div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-xl font-bold text-white">Mecanici Certificați</h3>
                    <span className="px-3 py-1 text-xs font-bold bg-blue-500/20 text-blue-300 rounded-full">
                      8+ ani experiență
                    </span>
                  </div>
                  <p className="text-gray-400 leading-relaxed">Echipa noastră este formată din tehnicieni cu experiență, în continuă formare profesională.</p>
                </div>
              </div>

              <div className="flex gap-6 items-start">
                <motion.div 
                  className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-2xl glass-effect text-blue-400"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                >
                  <BadgeCheck />
                </motion.div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-xl font-bold text-white">Garanție Completă</h3>
                    <span className="px-3 py-1 text-xs font-bold bg-blue-500/20 text-blue-300 rounded-full">
                      Garanție 2 ani
                    </span>
                  </div>
                  <p className="text-gray-400 leading-relaxed">Oferim garanție pentru toate lucrările efectuate și piesele montate în service-ul nostru.</p>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-4 pt-8">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star key={star} className="w-6 h-6 text-yellow-400 fill-current" />
              ))}
              <span className="text-gray-400 ml-2">4.9/5 din 125+ recenzii</span>
            </div>
          </motion.div>
        </div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          <WhyUsCard
            icon={<TrendingUp />}
            title="Experiență de peste 15 ani"
            description="Echipa noastră lucrează în domeniu din 2008 și a tratat mii de cazuri."
          />
          <WhyUsCard
            icon={<Shield />}
            title="Piese de calitate, garanție"
            description="Folosim doar piese originale sau echivalente premium cu garanție de 2 ani."
          />
          <WhyUsCard
            icon={<Clock />}
            title="Timp de așteptare redus"
            description="Programări flexibile și lucrări rapide - nu stai zile întregi fără mașină."
          />
          <WhyUsCard
            icon={<Users />}
            title="Pentru orice marcă auto"
            description="De la Dacia la BMW, lucrăm pe toate mărcile cu aceeași profesionalitate."
          />
        </motion.div>
      </section>

      {/* --- TESTIMONIALE --- */}
      <section id="testimoniale" className="relative container mx-auto px-6 py-32">
        <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="text-center mb-20"
        >
            <motion.div 
              className="inline-flex items-center gap-2 px-6 py-3 mb-6 glass-effect rounded-full"
              whileHover={{ scale: 1.05 }}
            >
              <Star className="w-5 h-5 text-yellow-400 fill-current" />
              <span className="text-sm font-semibold text-gray-300">PĂRERI CLIENȚI</span>
            </motion.div>
            
            <h2 className="text-5xl font-bold md:text-6xl mb-6">
              Ce spun <span className="text-gradient">clienții noștri</span>
            </h2>
            <p className="mx-auto max-w-3xl text-xl text-gray-400 leading-relaxed">
                Peste 125 de recenzii cu 5 stele pe Google
            </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          <TestimonialCard
            name="Radu Munteanu"
            text="Am ajuns fără programare cu o problemă la frâne. M-au primit imediat și au rezolvat rapid. Foarte corecți, mi-au explicat clar ce s-a schimbat și cât costă."
            rating={5}
          />
          <TestimonialCard
            name="Elena Georgescu"
            text="Am făcut revizia anuală aici. Totul a decurs profesionist, de la primire până la ridicarea mașinii. Mi-au dat și recomandări utile pentru întreținere."
            rating={5}
          />
          <TestimonialCard
            name="Mihai Stoica"
            text="Serviciu foarte bun și oameni de treabă. Prețurile sunt decente și nu am simțit că încearcă să îmi vândă ceva în plus. Recomand!"
            rating={4}
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <a 
            href="https://www.google.com/search?q=precision+auto+pitesti" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors"
          >
            Vezi toate recenziile pe Google
            <ArrowRight className="w-4 h-4" />
          </a>
        </motion.div>
      </section>

      {/* --- GALERIE FOTO --- */}
      <section id="galerie" className="relative container mx-auto px-6 py-32">
        <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="text-center mb-20"
        >
            <motion.div 
              className="inline-flex items-center gap-2 px-6 py-3 mb-6 glass-effect rounded-full"
              whileHover={{ scale: 1.05 }}
            >
              <Zap className="w-5 h-5 text-blue-400" />
              <span className="text-sm font-semibold text-gray-300">SERVICE-UL NOSTRU</span>
            </motion.div>
            
            <h2 className="text-5xl font-bold md:text-6xl mb-6">
              Galerie <span className="text-gradient">Foto</span>
            </h2>
            <p className="mx-auto max-w-3xl text-xl text-gray-400 leading-relaxed">
                Aruncă o privire în culise - echipament modern, spațiu curat, echipă dedicată
            </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          {galleryImages.map((image) => (
            <motion.div
              key={image.id}
              variants={itemVariants}
              className="relative h-64 rounded-2xl overflow-hidden tech-border group cursor-pointer"
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* --- PROGRAMARE ONLINE --- */}
      <section id="programare" className="relative container mx-auto px-6 py-32">
        <div className="absolute inset-0 tech-scan opacity-20 pointer-events-none"></div>
        
        <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="text-center mb-20"
        >
            <motion.div 
              className="inline-flex items-center gap-2 px-6 py-3 mb-6 glass-effect rounded-full"
              whileHover={{ scale: 1.05 }}
            >
              <Calendar className="w-5 h-5 text-blue-400" />
              <span className="text-sm font-semibold text-gray-300">PROGRAMARE RAPIDĂ</span>
            </motion.div>
            
            <h2 className="text-5xl font-bold md:text-6xl mb-6">
                Programează-te <span className="text-gradient">Online</span>
            </h2>
            <p className="mx-auto max-w-3xl text-xl text-gray-400 leading-relaxed">
                Completează formularul și te contactăm în maximum 2 ore pentru confirmare
            </p>
        </motion.div>

        <div className="grid max-w-6xl mx-auto grid-cols-1 gap-16 lg:grid-cols-2">
            <motion.div
                initial={{ opacity: 0, x: -60 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 1, ease: "easeOut" }}
                className="tech-border rounded-3xl glass-effect p-10"
            >
                <BookingForm />
            </motion.div>
            
            <motion.div
                initial={{ opacity: 0, x: 60 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 1, ease: "easeOut" }}
                className="space-y-8"
            >
                <div className="relative h-80 w-full rounded-3xl overflow-hidden tech-border">
                    <Image
                        src="/contact-map.png"
                        alt="Hartă locație service"
                        fill
                        sizes="(max-width: 768px) 100vw, 50vw"
                        className="object-cover"
                    />
                </div>
                
                <div className="glass-effect tech-border p-8 rounded-3xl divide-y divide-slate-800">
                  <h3 className="text-2xl font-bold text-white pb-6">Date de Contact</h3>
                  
                  <div className="pt-6 space-y-6">
                      <ContactItem 
                        icon={<MapPin />} 
                        title="Locație" 
                        content="Strada Mecanicilor Nr. 1, Pitești, Argeș" 
                      />
                      <ContactItem 
                        icon={<Phone />} 
                        title="Telefon" 
                        content="0722 123 456" 
                      />
                      <ContactItem 
                        icon={<Mail />} 
                        title="Email" 
                        content="contact@precisionauto.ro" 
                      />
                      <ContactItem 
                        icon={<Timer />} 
                        title="Program" 
                        content="Lun-Vin: 08:00-18:00 | Sâm: 08:00-14:00" 
                      />
                  </div>
                </div>
            </motion.div>
        </div>
      </section>
    </main>
  );
}

// --- Componente ---

const ServiceCard = ({ icon, title, description, price, features = [] }: { 
  icon: React.ReactNode; 
  title: string; 
  description: string; 
  price: string;
  features?: string[] 
}) => {
    return (
        <motion.div 
            variants={itemVariants} 
            className="group relative tech-border rounded-3xl glass-effect p-8 overflow-hidden hover:scale-105 transition-all duration-500"
            whileHover={{ y: -10 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
        >
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-500/5 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-blue-400 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            <div className="relative z-10">
                <motion.div 
                  className="mb-6 h-16 w-16 flex items-center justify-center rounded-2xl glass-effect text-blue-400 pulse-ring"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                >
                    {icon}
                </motion.div>
                
                <h3 className="text-2xl font-bold text-white mb-2">{title}</h3>
                <div className="text-2xl font-bold text-gradient mb-4">{price}</div>
                <p className="text-gray-400 mb-6 leading-relaxed">{description}</p>
                
                {features.length > 0 && (
                  <ul className="space-y-2">
                    {features.map((feature, index) => (
                      <li key={index} className="flex items-center gap-3 text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                )}
            </div>
        </motion.div>
    );
};

const WhyUsCard = ({ icon, title, description }: { icon: React.ReactNode; title: string; description: string; }) => (
  <motion.div
    variants={itemVariants}
    className="relative glass-effect p-8 rounded-2xl tech-border border border-blue-500/20 hover:border-blue-400/40 shadow-[0_0_15px_rgba(0,0,0,0.4)] hover:shadow-[0_0_20px_rgba(59,130,246,0.4)] group hover:scale-105 transition-all duration-300"
  >
    <motion.div 
      className="flex h-14 w-14 items-center justify-center rounded-xl glass-effect text-blue-400 mb-6"
      whileHover={{ scale: 1.1, rotate: 5 }}
    >
      {icon}
    </motion.div>
    <h3 className="text-xl font-bold text-white mb-3">{title}</h3>
    <p className="text-gray-400 leading-relaxed">{description}</p>
  </motion.div>
);

const TestimonialCard = ({ name, text, rating }: { name: string; text: string; rating: number; }) => (
  <motion.div
    variants={itemVariants}
    whileHover={{ rotate: 1.5, scale: 1.02 }}
    className="relative glass-effect p-10 rounded-3xl tech-border border border-blue-500/20 hover:border-blue-400/40 shadow-lg hover:shadow-blue-500/20 transition-all duration-500"
  >
    <div className="flex gap-1 mb-4">
      {[...Array(rating)].map((_, i) => (
        <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
      ))}
    </div>
    <p className="text-gray-300 mb-6 leading-relaxed italic">&quot;{text}&quot;</p>
    <div className="flex items-center gap-3">
      <div className="h-14 w-14 rounded-full bg-gradient-to-br from-blue-500 to-cyan-400 flex items-center justify-center text-white font-bold shadow-md">
        {name.charAt(0)}
      </div>
      <div>
        <h4 className="font-semibold text-white">{name}</h4>
        <p className="text-sm text-gray-400">Client verificat</p>
      </div>
    </div>
  </motion.div>
);

const ContactItem = ({ icon, title, content }: { icon: React.ReactNode; title: string; content: string; }) => (
  <div className="flex items-start gap-4 group">
    <motion.div 
      className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl glass-effect text-blue-400"
      whileHover={{ scale: 1.1 }}
    >
      {icon}
    </motion.div>
    <div className="flex flex-col">
      <h4 className="font-semibold text-white mb-1">{title}</h4>
      <p className="text-gray-400 group-hover:text-white transition-colors">{content}</p>
    </div>
  </div>
);

const BookingForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    car: '',
    service: '',
    date: '',
    time: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Programare trimisă:", formData);
    alert("Programarea ta a fost trimisă cu succes! Te vom contacta în maximum 2 ore pentru confirmare prin SMS și email.");
    setFormData({
      name: '',
      phone: '',
      email: '',
      car: '',
      service: '',
      date: '',
      time: ''
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const inputStyle = "w-full rounded-xl bg-slate-900/50 border border-slate-700/50 px-6 py-4 text-white placeholder-gray-500 focus:ring-2 focus:ring-blue-400 focus:border-blue-400 outline-none transition-all duration-300";

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <h3 className="text-3xl font-bold text-white mb-8">Formular de Programare</h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-3">Nume și Prenume *</label>
          <input
            type="text" 
            name="name" 
            id="name" 
            required
            className={inputStyle}
            placeholder="Ion Popescu" 
            value={formData.name} 
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-3">Număr de telefon *</label>
          <input
            type="tel" 
            name="phone" 
            id="phone" 
            required
            className={inputStyle}
            placeholder="0722 123 456" 
            value={formData.phone} 
            onChange={handleChange}
          />
        </div>
      </div>
      
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-3">Adresă de e-mail *</label>
        <input
          type="email" 
          name="email" 
          id="email" 
          required
          className={inputStyle}
          placeholder="ion.popescu@email.com" 
          value={formData.email} 
          onChange={handleChange}
        />
      </div>

      <div>
        <label htmlFor="car" className="block text-sm font-medium text-gray-300 mb-3">Marca și Modelul Mașinii *</label>
        <input
          type="text" 
          name="car" 
          id="car" 
          required
          className={inputStyle}
          placeholder="Ex: Dacia Logan 2018" 
          value={formData.car} 
          onChange={handleChange}
        />
      </div>

      <div>
        <label htmlFor="service" className="block text-sm font-medium text-gray-300 mb-3">Tipul de Serviciu *</label>
        <select
          name="service" 
          id="service" 
          required
          className={inputStyle}
          value={formData.service} 
          onChange={handleChange}
        >
          <option value="">Selectează serviciul</option>
          <option value="revizie">Revizie Periodică</option>
          <option value="diagnoza">Diagnoză Computerizată</option>
          <option value="ulei">Schimb Ulei și Filtre</option>
          <option value="itp">ITP / Verificări</option>
          <option value="mecanica">Mecanică Generală</option>
          <option value="geometrie">Geometrie Roți</option>
          <option value="altele">Altele</option>
        </select>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="date" className="block text-sm font-medium text-gray-300 mb-3">Data Dorită *</label>
          <input
            type="date" 
            name="date" 
            id="date" 
            required
            className={inputStyle}
            value={formData.date} 
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="time" className="block text-sm font-medium text-gray-300 mb-3">Ora Dorită *</label>
          <select
            name="time" 
            id="time" 
            required
            className={inputStyle}
            value={formData.time} 
            onChange={handleChange}
          >
            <option value="">Selectează ora</option>
            <option value="08:00">08:00</option>
            <option value="09:00">09:00</option>
            <option value="10:00">10:00</option>
            <option value="11:00">11:00</option>
            <option value="12:00">12:00</option>
            <option value="13:00">13:00</option>
            <option value="14:00">14:00</option>
            <option value="15:00">15:00</option>
            <option value="16:00">16:00</option>
            <option value="17:00">17:00</option>
          </select>
        </div>
      </div>
      
      <motion.button
        type="submit"
        className="w-full btn-primary rounded-xl px-8 py-4 font-bold text-white text-lg"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        <span className="flex items-center justify-center gap-3">
          Trimite Programarea
          <Calendar className="w-5 h-5" />
        </span>
      </motion.button>

      <p className="text-sm text-gray-400 text-center">
        * Te vom contacta în maximum 2 ore pentru confirmare prin SMS și email
      </p>
    </form>
  );
};