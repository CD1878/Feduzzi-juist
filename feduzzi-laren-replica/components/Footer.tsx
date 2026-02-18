import React from 'react';
import { Facebook, Instagram } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-feduzzi-red text-white pt-16 pb-8">
      <div className="max-w-[1200px] mx-auto px-6">
        
        {/* Logo Centered */}
        <div className="flex justify-center mb-16">
          <div className="text-center">
            <span className="font-serif text-5xl italic font-bold tracking-tight block">
              feduzzi
            </span>
            <span className="block text-[10px] tracking-[0.2em] uppercase mt-1">
              Mercato Italiano
            </span>
          </div>
        </div>

        {/* Grid Links */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 text-center md:text-left mb-16">
          
          {/* Column 1: Vestigingen */}
          <div className="flex flex-col items-center">
            <h3 className="font-serif text-3xl mb-6">Vestigingen</h3>
            <ul className="space-y-2 font-sans text-lg underline decoration-1 underline-offset-4">
              <li><a href="#" className="hover:text-gray-200">Amsterdam</a></li>
              <li><a href="#" className="hover:text-gray-200">Laren</a></li>
            </ul>
          </div>

          {/* Column 2: Menu */}
          <div className="flex flex-col items-center">
            <h3 className="font-serif text-3xl mb-6">Menu</h3>
            <ul className="space-y-2 font-sans text-lg underline decoration-1 underline-offset-4">
              <li><a href="#" className="hover:text-gray-200">Maaltijden</a></li>
              <li><a href="#" className="hover:text-gray-200">Broodjes</a></li>
              <li><a href="#" className="hover:text-gray-200">Traiteur</a></li>
              <li><a href="#" className="hover:text-gray-200">Catering</a></li>
            </ul>
          </div>

          {/* Column 3: Bestellen */}
          <div className="flex flex-col items-center">
            <h3 className="font-serif text-3xl mb-6">Bestellen</h3>
            <ul className="space-y-2 font-sans text-lg underline decoration-1 underline-offset-4">
              <li><a href="#" className="hover:text-gray-200">Online broodjes</a></li>
              <li><a href="#" className="hover:text-gray-200">Catering Amsterdam</a></li>
              <li><a href="#" className="hover:text-gray-200">Catering Laren</a></li>
            </ul>
          </div>

          {/* Column 4: Volg ons */}
          <div className="flex flex-col items-center">
            <h3 className="font-serif text-3xl mb-6">Volg ons</h3>
            <div className="flex space-x-6 mt-2">
              <a href="#" className="hover:text-gray-200"><Facebook size={24} /></a>
              <a href="#" className="hover:text-gray-200"><Instagram size={24} /></a>
            </div>
          </div>

        </div>

        {/* Bottom Copyright */}
        <div className="border-t border-red-800 pt-8 text-center font-sans text-sm text-white/80">
          <p>
            Cookieverklaring | Privacyverklaring | © 2026 Feduzzi. All rights reserved | Made by <a href="#" className="underline">Chef Digital</a>
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;