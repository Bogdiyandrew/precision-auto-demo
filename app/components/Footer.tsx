import Link from 'next/link';
import { Facebook, Twitter, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="border-t border-white/10 pt-16 pb-8 mt-24">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5 gap-12">
          {/* Coloana Logo & Social */}
          <div className="md:col-span-4 lg:col-span-2">
            <Link href="/" className="text-xl font-bold text-white flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-[var(--primary-accent)] rounded-md flex items-center justify-center">
                 <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.096 2.572-1.065z" /><path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
              </div>
              <span>Precision Auto Garage</span>
            </Link>
            <p className="max-w-xs text-sm text-gray-400">Tehnologie modernă și servicii de precizie pentru automobilul tău.</p>
          </div>

          {/* Coloane Link-uri */}
          <div>
            <h3 className="font-semibold text-white">Navigație</h3>
            <ul className="mt-4 space-y-3 text-sm">
              <li><a href="#servicii" className="text-gray-400 hover:text-white transition-colors">Servicii</a></li>
              <li><a href="#despre" className="text-gray-400 hover:text-white transition-colors">Despre Noi</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-white">Legal</h3>
            <ul className="mt-4 space-y-3 text-sm">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Politica de Confidențialitate</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Termeni și Condiții</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-white">Social</h3>
            <div className="mt-4 flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors"><Facebook size={20} /></a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors"><Twitter size={20} /></a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors"><Instagram size={20} /></a>
            </div>
          </div>
        </div>

        <div className="mt-16 border-t border-white/10 pt-8 space-y-6">
            {/* Secțiunea de disclaimer */}
            <div className="max-w-4xl mx-auto text-center text-xs border border-yellow-500/30 bg-yellow-900/20 p-4 rounded-lg">
                <h4 className="font-bold text-yellow-400 mb-2 uppercase tracking-widest">ATENȚIE</h4>
                <p className="text-yellow-500">
                    Acesta este un proiect demonstrativ pentru a evidenția abilitățile de design și dezvoltare. Nu reprezintă un service real și nu reflectă întregul potențial al serviciilor oferite de <a href="https://digitura.ro" target="_blank" rel="noopener noreferrer" className="underline hover:text-yellow-300">digitura.ro</a>.
                </p>
            </div>
            {/* Secțiunea de copyright */}
            <div className="text-center text-sm text-gray-500">
                <p>&copy; {new Date().getFullYear()} Precision Auto Garage. Toate drepturile rezervate.</p>
                <p className="mt-1">Un demo creat cu mândrie pentru <a href="https://digitura.ro" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">digitura.ro</a></p>
            </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
