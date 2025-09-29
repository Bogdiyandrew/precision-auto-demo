"use client";

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
  ChevronDown
} from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  // Efect pentru detectarea scroll-ului
  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 20);
      
      // Detectează secțiunea activă
      const sections = ['servicii', 'despre', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      setActiveSection(current || '');
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Blochează scroll-ul pe body când meniul mobil e deschis
  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : 'auto';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isMenuOpen]);

  const navLinks = [
    { href: "#servicii", name: "Servicii", Icon: Settings, color: "from-blue-500 to-cyan-500" },
    { href: "#despre", name: "Despre Noi", Icon: Info, color: "from-purple-500 to-pink-500" },
    { href: "#contact", name: "Contact", Icon: Phone, color: "from-green-500 to-teal-500" },
  ];

  const smoothScrollTo = (targetId: string) => {
    const element = document.getElementById(targetId.replace('#', ''));
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
    setIsMenuOpen(false);
  };

  return (
    <>
      {/* Main Header */}
      <motion.header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
            hasScrolled ? 'pt-2' : 'pt-6'
        }`}
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: [0.6, 0.05, 0.01, 0.99] }}
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
            {/* Enhanced Logo */}
            <Link href="/" className="text-xl font-bold text-white flex items-center gap-3 group">
              <motion.div 
                className="relative w-10 h-10 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-xl flex items-center justify-center overflow-hidden"
                whileHover={{ rotate: 360, scale: 1.1 }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
              >
                <Wrench size={18} className="text-white" />
                {/* Pulse effect */}
                <motion.div 
                  className="absolute inset-0 bg-white/20 rounded-xl"
                  animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0, 0.5] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              </motion.div>
              
              <div className="hidden sm:block">
                <motion.span 
                  className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent"
                  whileHover={{ scale: 1.05 }}
                >
                  Precision Auto
                </motion.span>
                <div className="h-0.5 bg-gradient-to-r from-blue-500 to-cyan-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              </div>
            </Link>
            
            {/* Enhanced Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-2 rounded-2xl glass-effect border border-white/10 p-2">
              {navLinks.map((link, index) => (
                <motion.div key={link.href} className="relative">
                  <button
                    onClick={() => smoothScrollTo(link.href)}
                    className={`relative px-6 py-3 text-sm font-semibold rounded-xl transition-all duration-300 flex items-center gap-2 group ${
                      activeSection === link.href.replace('#', '')
                        ? 'text-white bg-white/10 shadow-lg'
                        : 'text-gray-300 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    <link.Icon size={16} className="transition-transform group-hover:scale-110" />
                    {link.name}
                    
                    {/* Active indicator */}
                    {activeSection === link.href.replace('#', '') && (
                      <motion.div 
                        className={`absolute bottom-0 left-1/2 w-1 h-1 bg-gradient-to-r ${link.color} rounded-full`}
                        layoutId="activeNav"
                        style={{ x: '-50%', y: '100%' }}
                      />
                    )}
                  </button>
                </motion.div>
              ))}
            </nav>
            
            {/* Enhanced Action Buttons */}
            <div className="flex items-center gap-4">
                {/* CTA Button */}
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <button
                    onClick={() => smoothScrollTo('#contact')}
                    className="hidden lg:flex items-center gap-2 bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white font-bold py-3 px-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group overflow-hidden relative"
                  >
                    <span className="relative z-10 flex items-center gap-2">
                      Programare
                      <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </span>
                    
                    {/* Shine effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                  </button>
                </motion.div>
                
                {/* Enhanced Mobile Menu Button */}
                <motion.button 
                    onClick={() => setIsMenuOpen(true)} 
                    className="relative p-3 rounded-xl glass-effect border border-white/10 text-white hover:bg-white/10 transition-all duration-300 lg:hidden group"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    aria-label="Deschide meniu"
                >
                    <Menu size={24} className="transition-transform group-hover:rotate-180" />
                    
                    {/* Pulse indicator */}
                    <motion.div 
                      className="absolute -top-1 -right-1 w-3 h-3 bg-blue-500 rounded-full"
                      animate={{ scale: [1, 1.2, 1], opacity: [0.7, 1, 0.7] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                </motion.button>
            </div>
          </motion.div>
        </div>
      </motion.header>

      {/* Enhanced Mobile Menu */}
      <AnimatePresence mode="wait">
        {isMenuOpen && (
            <motion.div
                initial={{ opacity: 0 }} 
                animate={{ opacity: 1 }} 
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="fixed inset-0 z-[100] flex items-center justify-center"
                style={{ backdropFilter: 'blur(20px)' }}
            >
                {/* Background with animated gradient */}
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-br from-black/90 via-blue-900/20 to-black/90"
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.8, opacity: 0 }}
                  transition={{ duration: 0.4 }}
                />
                
                {/* Animated particles */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                  {[...Array(15)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-1 h-1 bg-blue-400/30 rounded-full"
                      style={{
                        left: `${Math.random() * 100}%`,
                        top: `${Math.random() * 100}%`,
                      }}
                      animate={{
                        y: [0, -100, 0],
                        opacity: [0, 1, 0],
                        scale: [0, 1, 0],
                      }}
                      transition={{
                        duration: 4 + Math.random() * 2,
                        repeat: Infinity,
                        delay: Math.random() * 2,
                      }}
                    />
                  ))}
                </div>

                {/* Close Button */}
                <motion.button 
                  onClick={() => setIsMenuOpen(false)} 
                  className="absolute top-8 right-8 p-3 rounded-xl glass-effect text-white hover:bg-white/10 transition-all duration-300 group z-10"
                  initial={{ rotate: -180, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  whileHover={{ scale: 1.1, rotate: 90 }}
                  aria-label="Închide meniu"
                >
                    <X size={28} className="transition-transform group-hover:rotate-90" />
                </motion.button>
                
                {/* Menu Content */}
                <motion.div 
                  className="relative z-10 text-center space-y-8"
                  initial={{ y: 50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.1, duration: 0.5 }}
                >
                    {/* Logo in menu */}
                    <motion.div 
                      className="flex items-center justify-center gap-3 mb-12"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
                    >
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-xl flex items-center justify-center">
                        <Wrench size={24} className="text-white" />
                      </div>
                      <span className="text-2xl font-bold text-white">Precision Auto</span>
                    </motion.div>
                    
                    {/* Navigation Links */}
                    <nav className="space-y-6">
                        {navLinks.map((link, i) => (
                            <motion.div
                                key={link.href}
                                initial={{ x: -50, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ delay: 0.4 + i * 0.1, type: "spring", stiffness: 100 }}
                            >
                                <button 
                                  onClick={() => smoothScrollTo(link.href)} 
                                  className="group flex items-center justify-center gap-4 w-full"
                                >
                                  <div className={`p-3 rounded-xl bg-gradient-to-r ${link.color} shadow-lg group-hover:shadow-xl transition-all duration-300`}>
                                    <link.Icon size={24} className="text-white" />
                                  </div>
                                  <div className="text-left">
                                    <div className="text-3xl font-bold text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-cyan-300 group-hover:bg-clip-text transition-all duration-300">
                                      {link.name}
                                    </div>
                                    <div className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors">
                                      {link.href === '#servicii' && 'Diagnoză • Reparații • Întreținere'}
                                      {link.href === '#despre' && 'Experiență • Calitate • Încredere'}
                                      {link.href === '#contact' && 'Programare • Informații • Locație'}
                                    </div>
                                  </div>
                                </button>
                            </motion.div>
                        ))}
                    </nav>
                    
                    {/* CTA in Mobile Menu */}
                    <motion.div
                      initial={{ y: 30, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.8 }}
                      className="pt-8 border-t border-white/10"
                    >
                      <button
                        onClick={() => smoothScrollTo('#contact')}
                        className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-bold px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group"
                      >
                        <Zap className="w-5 h-5" />
                        Programează Acum
                        <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                      </button>
                    </motion.div>
                </motion.div>
            </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;