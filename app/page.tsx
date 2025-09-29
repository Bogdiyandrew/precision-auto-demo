"use client";

import { motion, Variants, Transition } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { 
    Cpu, 
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
    Award,
    Star,
    ArrowRight,
    CheckCircle,
    Timer,
    Target,
    Gauge
} from 'lucide-react';

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

const slideInVariants: Variants = {
  hidden: { opacity: 0, x: -100 },
  visible: { 
    opacity: 1, 
    x: 0, 
    transition: { type: "spring", stiffness: 100, damping: 20 } 
  }
};

// --- Enhanced Hero Text Animation ---
const heroText = [
    { type: "text", text: "Performanță." },
    { type: "text", text: "Precizie." },
    { type: "gradient", text: "Inovație." },
];

const textContainerVariants: Variants = {
    visible: { transition: { staggerChildren: 0.6 } },
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

// Custom hook pentru typing effect
const useTypingEffect = (text: string, speed: number = 100) => {
  const [displayText, setDisplayText] = useState('');
  
  useEffect(() => {
    let i = 0;
    const timer = setInterval(() => {
      if (i < text.length) {
        setDisplayText(text.slice(0, i + 1));
        i++;
      } else {
        clearInterval(timer);
      }
    }, speed);
    
    return () => clearInterval(timer);
  }, [text, speed]);
  
  return displayText;
};

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false);
  
  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <main className="overflow-x-hidden">
      {/* --- ENHANCED HERO SECTION --- */}
      <section className="relative flex h-screen min-h-[800px] items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/hero-background.png"
            alt="Service auto modern - fundal"
            fill
            sizes="100vw"
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[var(--background)] via-[var(--background)]/60 to-transparent"></div>
          <div className="absolute inset-0 matrix-bg opacity-20"></div>
        </div>
        
        {/* Floating Elements */}
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
                animate={{
                  y: [0, -100, 0],
                  opacity: [0, 1, 0],
                  scale: [0, 1, 0],
                }}
                transition={{
                  duration: 6 + (i * 0.7),
                  repeat: Infinity,
                  delay: i * 0.4,
                }}
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
            {/* Enhanced Hero Title */}
            <motion.h1
              variants={textContainerVariants}
              className="text-5xl font-bold tracking-tighter md:text-7xl lg:text-9xl max-w-6xl mb-6"
            >
              {heroText.map((word, index) => (
                  <motion.span 
                    key={index} 
                    variants={textWordVariants}
                    className={`inline-block mr-6 ${
                      word.type === 'gradient' 
                        ? 'text-gradient drop-shadow-2xl' 
                        : 'drop-shadow-2xl'
                    }`}
                  >
                    {word.text}
                  </motion.span>
              ))}
            </motion.h1>

            {/* Enhanced Subtitle */}
            <motion.p 
              variants={itemVariants} 
              className="max-w-3xl text-xl text-gray-300 leading-relaxed mb-8"
            >
              Redefinim standardele în service-ul auto prin{" "}
              <span className="text-gradient font-semibold">tehnologie avansată</span>{" "}
              și o echipă de{" "}
              <span className="text-gradient font-semibold">experți dedicați</span>.
            </motion.p>
            
            {/* Stats Bar */}
            <motion.div 
              variants={itemVariants}
              className="flex flex-wrap justify-center gap-8 mb-12 p-6 glass-effect rounded-2xl"
            >
              <div className="text-center">
                <div className="text-2xl font-bold text-gradient">1000+</div>
                <div className="text-sm text-gray-400">Mașini reparate</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gradient">15+</div>
                <div className="text-sm text-gray-400">Ani experiență</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gradient">98%</div>
                <div className="text-sm text-gray-400">Clienți mulțumiți</div>
              </div>
            </motion.div>

            {/* Enhanced CTA Buttons */}
            <motion.div 
              variants={itemVariants} 
              className="flex flex-col sm:flex-row items-center justify-center gap-6"
            >
              <Link
                href="#contact"
                className="group relative w-full sm:w-auto btn-primary rounded-full px-12 py-5 font-bold text-white text-lg shadow-2xl overflow-hidden"
              >
                <span className="relative z-10 flex items-center gap-3">
                  Programează o vizită
                  <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
              
              <Link
                href="#servicii"
                className="group w-full sm:w-auto btn-secondary rounded-full px-12 py-5 font-bold text-white text-lg"
              >
                <span className="flex items-center gap-3">
                  Vezi Serviciile
                  <Gauge className="w-5 h-5 transition-transform group-hover:rotate-90" />
                </span>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* --- ENHANCED SERVICES SECTION --- */}
      <section id="servicii" className="relative container mx-auto px-6 py-32">
        {/* Section Header */}
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
              Serviciile Noastre{" "}
              <span className="text-gradient">de Elită</span>
            </h2>
            <p className="mx-auto max-w-3xl text-xl text-gray-400 leading-relaxed">
                Folosim tehnologie de ultimă oră pentru a oferi un diagnostic precis și reparații de durată pentru mașina ta.
            </p>
        </motion.div>
        
        {/* Enhanced Services Grid */}
        <motion.div 
            className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={containerVariants}
        >
            <ServiceCard 
                icon={<Cpu size={36} />} 
                title="Diagnoză Computerizată" 
                description="Identificăm rapid și precis orice defecțiune cu echipamente de ultimă generație."
                features={["Scanner profesional", "Raport detaliat", "Soluții precise"]}
                delay={0}
            />
            <ServiceCard 
                icon={<Cog size={36} />} 
                title="Revizie & Întreținere" 
                description="Servicii complete de revizie periodică pentru a menține performanța mașinii tale."
                features={["Program personalizat", "Piese originale", "Garanție extinsă"]}
                delay={0.1}
            />
            <ServiceCard 
                icon={<Wrench size={36} />} 
                title="Reparații Mecanice" 
                description="Intervenții complexe, de la motor și transmisie la sisteme de frânare și suspensie."
                features={["Expertiză avansată", "Echipamente moderne", "Teste riguroase"]}
                delay={0.2}
            />
            <ServiceCard 
                icon={<GitCommitHorizontal size={36} />} 
                title="Service Roți & Geometrie" 
                description="Echilibrare, montare și geometrie computerizată pentru o ținută de drum perfectă."
                features={["Echilibraj computerizat", "Geometrie 3D", "Anvelope premium"]}
                delay={0.3}
            />
        </motion.div>
      </section>
      
      {/* --- ENHANCED ABOUT SECTION --- */}
      <section id="despre" className="relative container mx-auto px-6 py-32">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:items-center">
            {/* Image Side */}
            <motion.div
                initial={{ opacity: 0, x: -100, scale: 0.8 }}
                whileInView={{ opacity: 1, x: 0, scale: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 1.2, ease: "easeOut" }}
                className="relative"
            >
                <div className="relative h-96 w-full rounded-3xl lg:h-[600px] overflow-hidden tech-border">
                    <Image 
                        src="/about-us-mechanic.png"
                        alt="Mecanic profesionist lucrând la o mașină"
                        fill
                        sizes="(max-width: 768px) 100vw, 50vw"
                        className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                </div>
                
                {/* Floating Stats */}
                <motion.div 
                  className="absolute -top-6 -right-6 glass-effect p-6 rounded-2xl"
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="flex items-center gap-3">
                    <Award className="w-8 h-8 text-yellow-400" />
                    <div>
                      <div className="font-bold text-white">Certificare</div>
                      <div className="text-sm text-gray-400">ISO 9001</div>
                    </div>
                  </div>
                </motion.div>
            </motion.div>
            
            {/* Content Side */}
            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={containerVariants}
                className="space-y-8"
            >
                <motion.div variants={itemVariants}>
                    <div className="inline-flex items-center gap-2 px-6 py-3 mb-6 glass-effect rounded-full">
                        <Target className="w-5 h-5 text-blue-400" />
                        <span className="text-sm font-semibold text-gray-300">DESPRE NOI</span>
                    </div>
                    
                    <h2 className="text-4xl font-bold md:text-5xl mb-6">
                        De ce să alegi{" "}
                        <span className="text-gradient">Precision Auto</span>?
                    </h2>
                    
                    <p className="text-xl text-gray-400 leading-relaxed mb-8">
                        Suntem mai mult decât un service auto. Suntem partenerul de încredere al mașinii tale, dedicat să ofere servicii de cea mai înaltă calitate.
                    </p>
                </motion.div>

                <div className="space-y-6">
                    <FeatureItem 
                        icon={<ShieldCheck />} 
                        title="Transparență Totală" 
                        description="Primești un deviz detaliat înaintea oricărei intervenții și ești informat la fiecare pas."
                        highlight="100% transparent"
                    />
                    <FeatureItem 
                        icon={<Users />} 
                        title="Mecanici Certificați" 
                        description="Echipa noastră este formată din tehnicieni cu experiență, în continuă formare profesională."
                        highlight="15+ ani experiență"
                    />
                    <FeatureItem 
                        icon={<BadgeCheck />} 
                        title="Garanție Completă" 
                        description="Oferim garanție pentru toate lucrările efectuate și piesele montate în service-ul nostru."
                        highlight="Garanție 2 ani"
                    />
                </div>

                {/* Trust Indicators */}
                <motion.div 
                  variants={itemVariants}
                  className="flex flex-wrap gap-4 pt-8"
                >
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="w-6 h-6 text-yellow-400 fill-current" />
                  ))}
                  <span className="text-gray-400 ml-2">4.9/5 din 250+ recenzii</span>
                </motion.div>
            </motion.div>
        </div>
      </section>

      {/* --- ENHANCED CONTACT SECTION --- */}
      <section id="contact" className="relative container mx-auto px-6 py-32">
        {/* Background Effects */}
        <div className="absolute inset-0 tech-scan opacity-20"></div>
        
        {/* Section Header */}
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
              <span className="text-sm font-semibold text-gray-300">CONTACTEAZĂ-NE</span>
            </motion.div>
            
            <h2 className="text-5xl font-bold md:text-6xl mb-6">
                Gata să ne{" "}
                <span className="text-gradient">cunoaștem</span>?
            </h2>
            <p className="mx-auto max-w-3xl text-xl text-gray-400 leading-relaxed">
                Completează formularul de mai jos sau sună-ne direct. Echipa noastră este gata să te ajute.
            </p>
        </motion.div>

        <div className="grid max-w-7xl mx-auto grid-cols-1 gap-16 lg:grid-cols-2">
            {/* Enhanced Contact Form */}
            <motion.div
                initial={{ opacity: 0, x: -60 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 1, ease: "easeOut" }}
                className="tech-border rounded-3xl glass-effect p-10"
            >
                <ContactForm />
            </motion.div>
            
            {/* Enhanced Contact Info */}
            <motion.div
                initial={{ opacity: 0, x: 60 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 1, ease: "easeOut" }}
                className="space-y-8"
            >
                {/* Map */}
                <div className="relative h-80 w-full rounded-3xl overflow-hidden tech-border">
                    <Image
                        src="/contact-map.png"
                        alt="Hartă stilizată cu locația service-ului"
                        fill
                        sizes="(max-width: 768px) 100vw, 50vw"
                        className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
                    />
                </div>
                
                {/* Contact Details */}
                <div className="glass-effect p-8 rounded-3xl space-y-6">
                  <h3 className="text-2xl font-bold text-white mb-6">Date de Contact</h3>
                  
                  <ContactItem 
                    icon={<MapPin />} 
                    title="Locație" 
                    content="Strada Mecanicilor Nr. 1, Mioveni" 
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
            </motion.div>
        </div>
      </section>
    </main>
  );
}

// Enhanced Service Card Component
const ServiceCard = ({ 
  icon, 
  title, 
  description, 
  features = [], 
  delay = 0 
}: { 
  icon: React.ReactNode;
  title: string;
  description: string;
  features?: string[];
  delay?: number;
}) => {
    return (
        <motion.div 
            variants={itemVariants} 
            className="group relative tech-border rounded-3xl glass-effect p-8 overflow-hidden hover:scale-105 transition-all duration-500"
            whileHover={{ y: -10 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
        >
            {/* Animated Background */}
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-500/5 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            {/* Tech Scan Line */}
            <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-blue-400 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            <div className="relative z-10">
                {/* Icon */}
                <motion.div 
                  className="mb-6 h-16 w-16 flex items-center justify-center rounded-2xl glass-effect text-blue-400 pulse-ring"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                >
                    {icon}
                </motion.div>
                
                {/* Content */}
                <h3 className="text-2xl font-bold text-white mb-4">{title}</h3>
                <p className="text-gray-400 mb-6 leading-relaxed">{description}</p>
                
                {/* Features */}
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

// Enhanced Feature Item Component
const FeatureItem = ({ 
  icon, 
  title, 
  description, 
  highlight 
}: { 
  icon: React.ReactNode;
  title: string;
  description: string;
  highlight?: string;
}) => (
    <motion.div variants={itemVariants} className="group flex gap-6 items-start">
        <motion.div 
          className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-2xl glass-effect text-blue-400"
          whileHover={{ scale: 1.1, rotate: 5 }}
        >
            {icon}
        </motion.div>
        <div className="flex-1">
            <div className="flex items-center gap-3 mb-2">
              <h3 className="text-xl font-bold text-white">{title}</h3>
              {highlight && (
                <span className="px-3 py-1 text-xs font-bold bg-blue-500/20 text-blue-300 rounded-full">
                  {highlight}
                </span>
              )}
            </div>
            <p className="text-gray-400 leading-relaxed">{description}</p>
        </div>
    </motion.div>
);

// Enhanced Contact Item Component
const ContactItem = ({
  icon,
  title,
  content
}: {
  icon: React.ReactNode;
  title: string;
  content: string;
}) => (
  <motion.div 
    className="flex items-start gap-4"
    whileHover={{ x: 5 }}
    transition={{ type: "spring", stiffness: 300 }}
  >
    <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl glass-effect text-blue-400">
      {icon}
    </div>
    <div>
      <h4 className="font-semibold text-white mb-1">{title}</h4>
      <p className="text-gray-400">{content}</p>
    </div>
  </motion.div>
);

// Enhanced Contact Form Component
const ContactForm = () => {
  return (
    <div className="space-y-6">
      <h3 className="text-3xl font-bold text-white mb-8">Trimite-ne un mesaj</h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-3">
            Nume și Prenume
          </label>
          <input
            type="text"
            name="name"
            id="name"
            required
            className="w-full rounded-xl glass-effect px-6 py-4 text-white placeholder-gray-500 focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all duration-300"
            placeholder="Ion Popescu"
          />
        </div>
        
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-3">
            Număr de telefon
          </label>
          <input
            type="tel"
            name="phone"
            id="phone"
            required
            className="w-full rounded-xl glass-effect px-6 py-4 text-white placeholder-gray-500 focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all duration-300"
            placeholder="0722 123 456"
          />
        </div>
      </div>
      
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-3">
          Adresă de e-mail
        </label>
        <input
          type="email"
          name="email"
          id="email"
          required
          className="w-full rounded-xl glass-effect px-6 py-4 text-white placeholder-gray-500 focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all duration-300"
          placeholder="ion.popescu@email.com"
        />
      </div>
      
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-3">
          Mesajul tău
        </label>
        <textarea
          name="message"
          id="message"
          rows={5}
          className="w-full rounded-xl glass-effect px-6 py-4 text-white placeholder-gray-500 focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all duration-300 resize-none"
          placeholder="Descrie problema sau serviciul de care ai nevoie..."
        />
      </div>
      
      <motion.button
        type="submit"
        className="w-full btn-primary rounded-xl px-8 py-4 font-bold text-white text-lg"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        <span className="flex items-center justify-center gap-3">
          Trimite Solicitarea
          <ArrowRight className="w-5 h-5" />
        </span>
      </motion.button>
    </div>
  );
};