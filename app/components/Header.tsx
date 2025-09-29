"use client";

import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Menu, 
  X, 
  ArrowRight, 
  Wrench, 
  Info, 
  Phone, 
  Settings,
  Zap,
  MessageSquare, // <-- Iconiță nouă adăugată
  Camera          // <-- Iconiță nouă adăugată
} from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 20);
      
      // MODIFICARE AICI: Am adăugat noile secțiuni
      const sections = ['servicii', 'de-ce-noi', 'testimoniale', 'galerie', 'programare'];
      
      const current = sections.find(sectionId => {
        const element = document.getElementById(sectionId);
        if (!element) { return false; }
        const rect = element.getBoundingClientRect();
        return rect.top <= 150 && rect.bottom >= 150;
      });

      setActiveSection(current || '');
    };
    
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : 'auto';
  }, [isMenuOpen]);

  // MODIFICARE AICI: Am adăugat noile link-uri
  const navLinks = [
    { href: "#servicii", name: "Servicii", Icon: Settings },
    { href: "#de-ce-noi", name: "Despre Noi", Icon: Info },
    { href: "#testimoniale", name: "Testimoniale", Icon: MessageSquare },
    { href: "#galerie", name: "Galerie Foto", Icon: Camera },
    { href: "#programare", name: "Contact", Icon: Phone },
  ];

  const smoothScrollTo = (targetId: string) => {
    const element = document.getElementById(targetId.replace('#', ''));
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setIsMenuOpen(false);
  };

  return (
    <>
      <motion.header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${hasScrolled ? 'pt-2' : 'pt-6'}`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <div className="container mx-auto px-6">
          <motion.div 
            className={`relative flex items-center justify-between transition-all duration-500 ${
              hasScrolled 
                ? 'bg-black/40 backdrop-blur-2xl border border-white/10 shadow-2xl rounded-2xl p-4 pl-6' 
                : 'bg-transparent p-4 pl-6'
            }`}
            layout
          >
            <Link href="/" className="flex items-center gap-3 cursor-pointer">
              <Image 
                src="/logo.png" 
                alt="Precision Auto Logo" 
                width={40} 
                height={40} 
                className="rounded-md"
              />
              <span className="hidden sm:block text-white text-xl font-bold">
                Precision Auto
              </span>
            </Link>
            
            <nav className="hidden lg:flex items-center gap-2 rounded-2xl glass-effect border border-white/10 p-2">
              {navLinks.map((link) => (
                <motion.div key={link.href} className="relative">
                  <button
                    onClick={() => smoothScrollTo(link.href)}
                    className={`relative px-5 py-2.5 text-sm font-semibold rounded-xl transition-all duration-300 flex items-center gap-2 group cursor-pointer ${
                      activeSection === link.href.replace('#', '')
                        ? 'text-white bg-white/10 shadow-lg'
                        : 'text-gray-300 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    <link.Icon size={16} />
                    {link.name}
                  </button>
                </motion.div>
              ))}
            </nav>
            
            <div className="flex items-center gap-4">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <button
                    onClick={() => smoothScrollTo('#programare')}
                    className="hidden lg:flex items-center gap-2 bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-bold py-3 px-6 rounded-xl shadow-lg cursor-pointer"
                  >
                    Programare
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </motion.div>
                
                <motion.button 
                    onClick={() => setIsMenuOpen(true)} 
                    className="relative p-3 rounded-xl glass-effect border border-white/10 text-white lg:hidden cursor-pointer"
                    aria-label="Deschide meniu"
                >
                    <Menu size={24} />
                </motion.button>
            </div>
          </motion.div>
        </div>
      </motion.header>

      <AnimatePresence>
        {isMenuOpen && (
            <motion.div
                initial={{ opacity: 0 }} 
                animate={{ opacity: 1 }} 
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-[100] bg-black/80 backdrop-blur-lg"
            >
                <motion.div 
                  className="flex flex-col items-center justify-center h-full text-center space-y-8"
                  initial={{ y: 50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: 50, opacity: 0 }}
                >
                    <button 
                      onClick={() => setIsMenuOpen(false)} 
                      className="absolute top-8 right-8 p-3 cursor-pointer"
                      aria-label="Închide meniu"
                    >
                        <X size={28} className="text-white" />
                    </button>
                    <nav className="space-y-6">
                        {navLinks.map((link) => (
                            <button 
                              key={link.href}
                              onClick={() => smoothScrollTo(link.href)} 
                              className="text-3xl font-bold text-white flex items-center gap-4 cursor-pointer"
                            >
                              <link.Icon size={24} />
                              {link.name}
                            </button>
                        ))}
                    </nav>
                    <div className="pt-8 border-t border-white/20">
                      <button
                        onClick={() => smoothScrollTo('#programare')}
                        className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-bold px-8 py-4 rounded-xl cursor-pointer"
                      >
                        <Zap className="w-5 h-5" />
                        Programează Acum
                      </button>
                    </div>
                </motion.div>
            </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;