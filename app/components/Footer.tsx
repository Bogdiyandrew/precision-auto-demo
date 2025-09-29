"use client";

import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin,
  Youtube,
  Mail,
  Phone,
  MapPin,
  Clock,
  Wrench,
  Star,
  Award,
  Shield,
  ArrowUp
} from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative border-t border-white/10 pt-20 pb-8 mt-32 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
      <div className="absolute inset-0 tech-scan opacity-10"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Company Info */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2 space-y-6"
          >
            {/* Enhanced Logo */}
            <Link href="/" className="inline-flex items-center gap-3 group">
              <motion.div 
                className="relative w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-2xl flex items-center justify-center overflow-hidden"
                whileHover={{ rotate: 360, scale: 1.1 }}
                transition={{ duration: 0.6 }}
              >
                <Wrench size={24} className="text-white" />
                <motion.div 
                  className="absolute inset-0 bg-white/20 rounded-2xl"
                  animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0, 0.5] }}
                  transition={{ duration: 3, repeat: Infinity }}
                />
              </motion.div>
              
              <div>
                <h3 className="text-2xl font-bold text-white group-hover:text-gradient transition-all duration-300">
                  Precision Auto Garage
                </h3>
                <p className="text-sm text-gray-400">Service Auto de Elită</p>
              </div>
            </Link>
            
            {/* Company Description */}
            <p className="max-w-md text-gray-400 leading-relaxed">
              Redefinim standardele în service-ul auto prin tehnologie modernă, 
              echipamente de ultimă generație și o echipă de experți dedicați 
              să ofere cele mai bune servicii pentru automobilul tău.
            </p>
            
            {/* Trust Indicators */}
            <div className="flex flex-wrap gap-4">
              <motion.div 
                className="flex items-center gap-2 px-4 py-2 glass-effect rounded-full"
                whileHover={{ scale: 1.05 }}
              >
                <Award className="w-4 h-4 text-yellow-400" />
                <span className="text-sm text-gray-300">ISO 9001</span>
              </motion.div>
              
              <motion.div 
                className="flex items-center gap-2 px-4 py-2 glass-effect rounded-full"
                whileHover={{ scale: 1.05 }}
              >
                <Shield className="w-4 h-4 text-green-400" />
                <span className="text-sm text-gray-300">Garanție 2 ani</span>
              </motion.div>
              
              <motion.div 
                className="flex items-center gap-2 px-4 py-2 glass-effect rounded-full"
                whileHover={{ scale: 1.05 }}
              >
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3 h-3 text-yellow-400 fill-current" />
                  ))}
                </div>
                <span className="text-sm text-gray-300">4.9/5</span>
              </motion.div>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="space-y-6"
          >
            <h4 className="text-xl font-bold text-white flex items-center gap-2">
              <div className="w-1 h-6 bg-gradient-to-b from-blue-500 to-cyan-400 rounded-full"></div>
              Navigație Rapidă
            </h4>
            
            <div className="space-y-3">
              {[
                { name: 'Servicii', href: '#servicii' },
                { name: 'Despre Noi', href: '#despre' },
                { name: 'Contact', href: '#contact' },
                { name: 'Programare', href: '#contact' }
              ].map((link, index) => (
                <motion.div
                  key={link.name}
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <a 
                    href={link.href} 
                    className="group flex items-center gap-3 text-gray-400 hover:text-white transition-colors duration-300"
                  >
                    <div className="w-1 h-1 bg-blue-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    {link.name}
                  </a>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="space-y-6"
          >
            <h4 className="text-xl font-bold text-white flex items-center gap-2">
              <div className="w-1 h-6 bg-gradient-to-b from-blue-500 to-cyan-400 rounded-full"></div>
              Contact Direct
            </h4>
            
            <div className="space-y-4">
              <ContactItem 
                icon={<MapPin className="w-5 h-5" />}
                text="Strada Mecanicilor Nr. 1, Mioveni"
                href="https://maps.google.com"
              />
              <ContactItem 
                icon={<Phone className="w-5 h-5" />}
                text="0722 123 456"
                href="tel:0722123456"
              />
              <ContactItem 
                icon={<Mail className="w-5 h-5" />}
                text="contact@precisionauto.ro"
                href="mailto:contact@precisionauto.ro"
              />
              <ContactItem 
                icon={<Clock className="w-5 h-5" />}
                text="Lun-Vin: 08:00-18:00 | Sâm: 08:00-14:00"
              />
            </div>
          </motion.div>
        </div>

        {/* Social & Newsletter Section */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="border-t border-white/10 pt-12 mb-12"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            
            {/* Social Media */}
            <div className="text-center lg:text-left">
              <h4 className="text-lg font-bold text-white mb-6">Urmărește-ne pe Social Media</h4>
              <div className="flex justify-center lg:justify-start space-x-4">
                {[
                  { Icon: Facebook, href: '#', color: 'hover:text-blue-500', label: 'Facebook' },
                  { Icon: Instagram, href: '#', color: 'hover:text-pink-500', label: 'Instagram' },
                  { Icon: Youtube, href: '#', color: 'hover:text-red-500', label: 'YouTube' },
                  { Icon: Linkedin, href: '#', color: 'hover:text-blue-400', label: 'LinkedIn' },
                  { Icon: Twitter, href: '#', color: 'hover:text-cyan-400', label: 'Twitter' }
                ].map(({ Icon, href, color, label }) => (
                  <motion.a
                    key={label}
                    href={href}
                    className={`p-3 glass-effect rounded-xl text-gray-400 ${color} transition-all duration-300 group`}
                    whileHover={{ scale: 1.1, y: -3 }}
                    whileTap={{ scale: 0.95 }}
                    aria-label={label}
                  >
                    <Icon size={20} className="transition-transform group-hover:scale-110" />
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Newsletter Signup */}
            <div className="text-center lg:text-right">
              <h4 className="text-lg font-bold text-white mb-4">Rămâi la Curent</h4>
              <p className="text-gray-400 text-sm mb-6">
                Primește oferte speciale și sfaturi pentru întreținerea mașinii
              </p>
              
              <div className="flex max-w-sm mx-auto lg:ml-auto lg:mr-0">
                <input 
                  type="email" 
                  placeholder="adresa@email.com"
                  className="flex-1 px-4 py-3 glass-effect rounded-l-xl text-white placeholder-gray-500 focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all duration-300"
                />
                <motion.button 
                  className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-6 py-3 rounded-r-xl font-semibold hover:from-blue-500 hover:to-cyan-400 transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Abonează-te
                </motion.button>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Enhanced Disclaimer & Copyright */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="space-y-8"
        >
          {/* Disclaimer */}
          <div className="relative p-8 glass-effect border border-yellow-500/30 rounded-2xl overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500"></div>
            
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-yellow-500/20 rounded-xl flex items-center justify-center">
                <motion.div
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                >
                  <Wrench className="w-6 h-6 text-yellow-400" />
                </motion.div>
              </div>
              
              <div className="flex-1">
                <h4 className="font-bold text-yellow-400 mb-3 text-lg uppercase tracking-wider">
                  🚨 Proiect Demonstrativ
                </h4>
                <p className="text-yellow-200/90 leading-relaxed">
                  Acesta este un proiect demonstrativ pentru a evidenția abilitățile de design și dezvoltare. 
                  Nu reprezintă un service real și nu reflectă întregul potențial al serviciilor oferite de{" "}
                  <a 
                    href="https://digitura.ro" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="font-semibold text-yellow-300 hover:text-white underline decoration-yellow-400 hover:decoration-white transition-all duration-300"
                  >
                    digitura.ro
                  </a>
                  .
                </p>
              </div>
            </div>
          </div>

          {/* Copyright & Credits */}
          <div className="flex flex-col lg:flex-row justify-between items-center gap-6 pt-8 border-t border-white/10">
            <div className="text-center lg:text-left">
              <p className="text-gray-400 text-sm mb-2">
                &copy; {currentYear} Precision Auto Garage. Toate drepturile rezervate.
              </p>
              <p className="text-gray-500 text-xs">
                Un demo creat cu mândrie pentru{" "}
                <a 
                  href="https://digitura.ro" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-gradient font-semibold hover:underline"
                >
                  digitura.ro
                </a>
              </p>
            </div>

            {/* Legal Links */}
            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                Politica de Confidențialitate
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                Termeni și Condiții
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                Cookies
              </a>
            </div>

            {/* Back to Top Button */}
            <motion.button
              onClick={scrollToTop}
              className="p-3 glass-effect rounded-xl text-gray-400 hover:text-white transition-all duration-300 group"
              whileHover={{ scale: 1.1, y: -3 }}
              whileTap={{ scale: 0.95 }}
              aria-label="Înapoi sus"
            >
              <ArrowUp className="w-5 h-5 transition-transform group-hover:-translate-y-1" />
            </motion.button>
          </div>
        </motion.div>
      </div>

      {/* Floating Particles Effect - Fixed positions to avoid hydration mismatch */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-blue-400/20 rounded-full"
            style={{
              left: `${(i * 13 + 20) % 80 + 10}%`,
              bottom: `${(i * 7 + 10) % 40 + 5}%`,
            }}
            animate={{
              y: [0, -200],
              opacity: [0, 1, 0],
              scale: [0, 1, 0],
            }}
            transition={{
              duration: 8 + (i * 0.5),
              repeat: Infinity,
              delay: i * 0.4,
            }}
          />
        ))}
      </div>
    </footer>
  );
};

// Contact Item Component
const ContactItem = ({ 
  icon, 
  text, 
  href 
}: { 
  icon: React.ReactNode;
  text: string;
  href?: string;
}) => {
  const content = (
    <motion.div 
      className="group flex items-start gap-3 text-gray-400 hover:text-white transition-all duration-300"
      whileHover={{ x: 5 }}
    >
      <div className="flex-shrink-0 p-2 glass-effect rounded-lg text-blue-400 group-hover:text-blue-300 transition-colors duration-300">
        {icon}
      </div>
      <span className="text-sm leading-relaxed">{text}</span>
    </motion.div>
  );

  return href ? (
    <a href={href} target={href.startsWith('http') ? '_blank' : undefined} rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}>
      {content}
    </a>
  ) : content;
};

export default Footer;