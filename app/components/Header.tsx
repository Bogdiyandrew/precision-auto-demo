"use client";

import Link from 'next/link';
import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import { Menu, X, ArrowRight, Settings, Wrench, Info } from 'lucide-react';

// --- Variante de Animație pentru Meniul Full-Screen ---
const menuVariants: Variants = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 0.3, ease: "circIn" } },
  exit: { opacity: 0, transition: { duration: 0.3, ease: "circOut" } }
};
const navContainerVariants: Variants = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { staggerChildren: 0.08, delayChildren: 0.2 } }
};
const navItemVariants: Variants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } }
};

// --- Componenta Principală Header ---
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => setHasScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : 'auto';
    return () => { document.body.style.overflow = 'auto'; };
  }, [isMenuOpen]);

  const navLinks = [
    { href: "#servicii", name: "Servicii", Icon: Wrench },
    { href: "#despre", name: "Despre Noi", Icon: Info },
    { href: "#contact", name: "Contact", Icon: Settings },
  ];

  return (
    <>
      <header 
        className={`fixed top-0 left-0 right-0 z-50 p-4`}
      >
        <motion.div 
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: [0.6, 0.05, 0.01, 0.99] }}
          className={`relative flex items-center justify-between p-2 pl-6 rounded-2xl mx-auto max-w-7xl transition-all duration-300 ${
            hasScrolled ? 'bg-gray-900/80 backdrop-blur-lg border border-white/10 shadow-lg' : 'bg-transparent'
          }`}
        >
          {/* Logo */}
          <Link href="/" className="text-xl font-bold text-white flex items-center gap-2">
            <div className="w-8 h-8 bg-[var(--primary-accent)] rounded-md flex items-center justify-center">
               <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.096 2.572-1.065z" /><path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
            </div>
            <span>Precision Auto</span>
          </Link>
          
          {/* Navigație "Dashboard" cu efect magnetic */}
          <nav onMouseLeave={() => setHoveredLink(null)} className="hidden lg:flex items-center gap-2 rounded-lg bg-gray-900/50 border border-white/10 p-1">
            {navLinks.map((link) => (
              <Link 
                key={link.href} 
                href={link.href} 
                onMouseEnter={() => setHoveredLink(link.href)}
                className="relative px-4 py-2 text-sm font-medium text-gray-300 transition-colors duration-300 z-10"
              >
                {hoveredLink === link.href && (
                  <motion.div 
                    layoutId="nav-glow"
                    className="absolute inset-0 rounded-md bg-white/10"
                    transition={{ type: "spring", stiffness: 350, damping: 30 }}
                  />
                )}
                <span className="relative z-20 flex items-center gap-2">
                  <link.Icon size={16} />
                  {link.name}
                </span>
              </Link>
            ))}
          </nav>
          
          {/* Buton Principal CTA */}
          <Link 
            href="#contact"
            className="hidden lg:block bg-[var(--primary-accent)] hover:bg-blue-600 text-white font-semibold py-2 px-5 rounded-lg transition-colors"
          >
            Programează o vizită
          </Link>

          {/* Buton Meniu Mobil */}
          <button 
            onClick={() => setIsMenuOpen(true)} 
            className="p-2 rounded-full text-white hover:bg-white/10 transition-colors z-50 lg:hidden"
            aria-label="Open menu"
          >
            <Menu size={24} />
          </button>
        </motion.div>
      </header>

      {/* Meniul Full-Screen (rămâne pentru mobil) */}
      <AnimatePresence>
        {isMenuOpen && (
            <motion.div
                variants={menuVariants} initial="initial" animate="animate" exit="exit"
                className="fixed inset-0 bg-gray-950/90 backdrop-blur-xl z-[100] flex items-center justify-center"
                onClick={() => setIsMenuOpen(false)}
            >
                <button onClick={() => setIsMenuOpen(false)} className="absolute top-6 right-6 p-2 rounded-full text-gray-400 hover:text-white hover:bg-white/10 transition-colors" aria-label="Close menu">
                    <X size={28} />
                </button>
                <motion.nav 
                    variants={navContainerVariants} initial="initial" animate="animate"
                    className="flex flex-col items-center gap-4 text-center"
                    onClick={(e) => e.stopPropagation()}
                >
                    <motion.div variants={navItemVariants}><Link href="#servicii" onClick={() => setIsMenuOpen(false)} className="text-4xl font-bold text-gray-300 hover:text-white">Servicii</Link></motion.div>
                    <motion.div variants={navItemVariants}><Link href="#despre" onClick={() => setIsMenuOpen(false)} className="text-4xl font-bold text-gray-300 hover:text-white">Despre Noi</Link></motion.div>
                    <motion.div variants={navItemVariants}><Link href="#contact" onClick={() => setIsMenuOpen(false)} className="text-4xl font-bold text-gray-300 hover:text-white">Contact</Link></motion.div>
                    <motion.div variants={navItemVariants} className="mt-12">
                        <Link href="#contact" onClick={() => setIsMenuOpen(false)} className="group inline-flex items-center gap-3 rounded-full bg-[var(--primary-accent)] px-8 py-4 text-xl font-semibold text-white transition-all duration-300 hover:scale-105">
                            <span>Programează o vizită</span>
                            <ArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
                        </Link>
                    </motion.div>
                </motion.nav>
            </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;

