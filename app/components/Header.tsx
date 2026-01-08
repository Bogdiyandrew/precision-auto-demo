"use client";

import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import {
  Menu,
  X,
  ArrowRight,
  Info,
  Phone,
  Settings,
  Zap,
  MessageSquare,
  Camera,
  Calendar
} from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  // Gestionare scroll și active section
  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 20);

      const sections = ['servicii', 'de-ce-noi', 'testimoniale', 'galerie', 'programare'];
      const current = sections.find(sectionId => {
        const element = document.getElementById(sectionId);
        if (!element) return false;
        const rect = element.getBoundingClientRect();
        // Ajustăm offset-ul pentru detectare mai precisă
        return rect.top <= 150 && rect.bottom >= 150;
      });

      setActiveSection(current || '');
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Blocare scroll când meniul e deschis
  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : 'auto';
  }, [isMenuOpen]);

  const navLinks = [
    { href: "#servicii", name: "Servicii", Icon: Settings },
    { href: "#de-ce-noi", name: "Despre noi", Icon: Info },
    { href: "#testimoniale", name: "Testimoniale", Icon: MessageSquare },
    { href: "#galerie", name: "Galerie", Icon: Camera },
    { href: "#programare", name: "Contact", Icon: Phone },
  ];

  const smoothScrollTo = (targetId: string) => {
    const element = document.getElementById(targetId.replace('#', ''));
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setIsMenuOpen(false);
  };

  // Variante animate cu tipurile corecte pentru TypeScript
  const menuVariants: Variants = {
    closed: {
      opacity: 0,
      x: "100%",
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30
      }
    },
    open: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30,
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const linkVariants: Variants = {
    closed: { x: 50, opacity: 0 },
    open: { x: 0, opacity: 1 }
  };

  return (
    <>
      <motion.header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${hasScrolled ? 'py-4' : 'py-6'
          }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="container mx-auto px-4 md:px-6">
          <div
            className={`relative flex items-center justify-between rounded-2xl transition-all duration-500 ${hasScrolled
              ? 'bg-black/80 backdrop-blur-xl border border-white/10 shadow-2xl px-6 py-3'
              : 'bg-transparent px-2 py-2'
              }`}
          >
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 group">
              <div className="relative overflow-hidden rounded-xl border border-white/10">
                <Image
                  src="/logo.png"
                  alt="Precision Auto Logo"
                  width={40}
                  height={40}
                  className="transform transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <span className="hidden sm:block text-white text-lg font-bold tracking-tight group-hover:text-blue-400 transition-colors">
                Precision Auto
              </span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1 bg-white/5 rounded-full p-1.5 border border-white/5 backdrop-blur-sm">
              {navLinks.map((link) => {
                const isActive = activeSection === link.href.replace('#', '');
                return (
                  <button
                    key={link.href}
                    onClick={() => smoothScrollTo(link.href)}
                    className={`relative px-4 py-2 text-sm font-medium rounded-full transition-colors duration-300 flex items-center gap-2 z-10 cursor-pointer ${isActive ? 'text-white' : 'text-gray-400 hover:text-white'
                      }`}
                  >
                    {isActive && (
                      <motion.div
                        layoutId="activeTab"
                        className="absolute inset-0 bg-white/10 rounded-full border border-white/5 shadow-[0_0_20px_rgba(255,255,255,0.1)]"
                        transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                      />
                    )}
                    <link.Icon size={14} className={isActive ? "text-blue-400" : ""} />
                    <span className="relative z-10">{link.name}</span>
                  </button>
                );
              })}
            </nav>

            {/* Actions */}
            <div className="flex items-center gap-4">
              <motion.button
                onClick={() => smoothScrollTo('#programare')}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="hidden lg:flex items-center gap-2 bg-gradient-to-r from-blue-600 to-cyan-500 text-white text-sm font-bold py-2.5 px-6 rounded-full shadow-lg hover:shadow-blue-500/25 transition-all duration-300 border border-white/10 group cursor-pointer"
              >
                <span>Programare</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </motion.button>

              <motion.button
                onClick={() => setIsMenuOpen(true)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="lg:hidden p-2.5 rounded-full bg-white/5 border border-white/10 text-white hover:bg-white/10 transition-colors cursor-pointer"
                aria-label="Deschide meniu"
              >
                <Menu size={20} />
              </motion.button>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
            className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-2xl flex flex-col"
          >
            {/* Close Button */}
            <div className="flex justify-end p-6">
              <motion.button
                onClick={() => setIsMenuOpen(false)}
                whileHover={{ rotate: 90 }}
                transition={{ duration: 0.2 }}
                className="p-2 rounded-full bg-white/10 text-white cursor-pointer"
              >
                <X size={24} />
              </motion.button>
            </div>

            {/* Mobile Nav Content */}
            <div className="flex-1 flex flex-col items-center justify-center gap-8 p-6">
              <nav className="flex flex-col gap-6 w-full max-w-sm">
                {navLinks.map((link) => (
                  <motion.button
                    key={link.href}
                    variants={linkVariants}
                    onClick={() => smoothScrollTo(link.href)}
                    className="group flex items-center justify-between w-full p-4 rounded-2xl bg-white/5 border border-white/5 hover:bg-white/10 hover:border-blue-500/30 transition-all duration-300 cursor-pointer"
                  >
                    <span className="text-xl font-bold text-gray-200 group-hover:text-white flex items-center gap-3">
                      <link.Icon className="text-blue-500" size={20} />
                      {link.name}
                    </span>
                    <ArrowRight className="text-gray-500 group-hover:text-blue-400 group-hover:translate-x-1 transition-all" size={18} />
                  </motion.button>
                ))}
              </nav>

              <motion.div variants={linkVariants} className="w-full max-w-sm pt-4">
                <button
                  onClick={() => smoothScrollTo('#programare')}
                  className="w-full flex items-center justify-center gap-3 bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-bold py-4 rounded-xl shadow-xl shadow-blue-900/20 cursor-pointer"
                >
                  <Calendar className="w-5 h-5 fill-current" />
                  Programează
                </button>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;