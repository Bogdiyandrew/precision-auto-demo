"use client";

import Link from 'next/link';
import { motion } from 'framer-motion';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative border-t border-white/10 pt-16 pb-12 mt-32 overflow-hidden bg-black/90">
      <div className="absolute inset-0 bg-gradient-to-t from-blue-900/10 to-transparent pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center justify-center text-center max-w-3xl mx-auto space-y-12">

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-8 glass-effect border border-yellow-500/20 bg-yellow-900/5 rounded-2xl backdrop-blur-sm"
          >
            <h4 className="text-yellow-500 font-bold text-lg uppercase tracking-widest mb-4">
              Atenție
            </h4>
            <p className="text-gray-300 leading-relaxed">
              Acesta este un proiect demonstrativ pentru a evidenția abilitățile de design și dezvoltare.
              Nu reprezintă un <span className="text-white font-medium">cabinet real</span> și nu reflectă întregul potențial al serviciilor oferite de{' '}
              <a
                href="https://digitura.ro"
                target="_blank"
                rel="noopener noreferrer"
                className="text-yellow-400 hover:text-yellow-300 font-semibold underline decoration-yellow-500/30 hover:decoration-yellow-300 transition-all duration-300"
              >
                digitura.ro
              </a>.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="space-y-6"
          >
            <Link href="/" className="inline-block">
              <h3 className="text-3xl md:text-4xl font-bold text-white tracking-tight hover:opacity-80 transition-opacity">
                Precision auto
              </h3>
            </Link>

            <div className="space-y-2 text-sm text-gray-500">
              <p>
                © {currentYear} Precision auto. Toate drepturile rezervate.
              </p>
              <p>
                Un demo creat cu mândrie de către{' '}
                <a
                  href="https://digitura.ro"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-300 transition-colors duration-300"
                >
                  digitura.ro
                </a>
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;