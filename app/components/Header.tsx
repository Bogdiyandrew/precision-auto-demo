"use client";

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import { Menu, X, ArrowUpRight } from 'lucide-react';

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

  useEffect(() => {
    const handleScroll = () => setHasScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Blochează scroll-ul paginii când meniul este deschis
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => { document.body.style.overflow = 'auto'; };
  }, [isMenuOpen]);

  return (
    <>
      <header 
        className={`sticky top-0 z-50 transition-colors duration-300 ${
          hasScrolled ? 'bg-black/50 backdrop-blur-lg border-b border-white/10' : 'bg-transparent border-b border-transparent'
        }`}
      >
        <nav className="container mx-auto flex items-center justify-between p-4 px-6">
          <Link href="/" className="text-2xl font-bold text-white flex items-center gap-2 z-50">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7 text-[var(--primary-accent)]">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
            </svg>
            <motion.span
              initial={{ width: 0, opacity: 0 }}
              animate={{ width: "auto", opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5, ease: 'easeOut' }}
            >
              Quantum
            </motion.span>
          </Link>
          
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)} 
            className="p-2 rounded-full text-white hover:bg-white/10 transition-colors z-50"
            aria-label="Open menu"
          >
            <Menu size={24} />
          </button>
        </nav>
      </header>

      {/* Meniul Full-Screen (Command Palette) */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            variants={menuVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            className="fixed inset-0 bg-black/80 backdrop-blur-xl z-[100] flex items-center justify-center"
            onClick={() => setIsMenuOpen(false)}
          >
            <button 
              onClick={() => setIsMenuOpen(false)} 
              className="absolute top-6 right-6 p-2 rounded-full text-gray-400 hover:text-white hover:bg-white/10 transition-colors"
              aria-label="Close menu"
            >
              <X size={28} />
            </button>
            
            <motion.nav 
              variants={navContainerVariants}
              initial="initial"
              animate="animate"
              className="flex flex-col items-center gap-4 text-center"
              onClick={(e) => e.stopPropagation()}
            >
              <motion.div variants={navItemVariants}>
                <Link href="#features" onClick={() => setIsMenuOpen(false)} className="text-5xl font-bold text-gray-300 hover:text-white transition-colors duration-300 flex items-center gap-3">Features</Link>
              </motion.div>
              <motion.div variants={navItemVariants}>
                <Link href="#pricing" onClick={() => setIsMenuOpen(false)} className="text-5xl font-bold text-gray-300 hover:text-white transition-colors duration-300 flex items-center gap-3">Pricing</Link>
              </motion.div>
              <motion.div variants={navItemVariants}>
                <Link href="#testimonials" onClick={() => setIsMenuOpen(false)} className="text-5xl font-bold text-gray-300 hover:text-white transition-colors duration-300 flex items-center gap-3">Testimonials</Link>
              </motion.div>
              
              <motion.div variants={navItemVariants} className="mt-12">
                <Link 
                  href="/get-started" 
                  onClick={() => setIsMenuOpen(false)} 
                  className="group inline-flex items-center gap-3 rounded-full bg-[var(--primary-accent)] px-8 py-4 text-xl font-semibold text-black transition-all duration-300 hover:scale-105"
                >
                  <span>Get Started for Free</span>
                  <ArrowUpRight className="transition-transform duration-300 group-hover:rotate-45" />
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
