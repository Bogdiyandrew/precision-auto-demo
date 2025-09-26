import React from "react";

const Footer = () => {
  return (
    <footer className="border-t border-[var(--secondary-accent)]/30 py-12 mt-24">
      <div className="container mx-auto px-6 text-center">
        <p className="text-lg font-bold text-white mb-2">Precision Auto Garage</p>
        <p className="text-sm text-gray-400">
          &copy; {new Date().getFullYear()} Precision Auto Garage. Toate drepturile rezervate.
        </p>
        <p className="text-xs text-gray-500 mt-4">
          Acesta este un demo realizat de <a href="https://digitura.ro" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">digitura.ro</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;