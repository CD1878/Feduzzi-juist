import React from 'react';
import { Facebook, Instagram } from 'lucide-react';
import { LOGO_URL } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-feduzzi-red text-white py-20 border-t border-red-900">
      <div className="container mx-auto px-6 max-w-7xl">
        
        {/* Logo Centered */}
        <div className="flex justify-center mb-16">
          <img src={LOGO_URL} alt="Feduzzi" className="w-48 md:w-64 h-auto brightness-0 invert" />
        </div>

        {/* Links Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12 text-center md:text-left">
          
          {/* Column 1: Vestigingen */}
          <div className="flex flex-col items-center">
            <h4 className="font-serif text-2xl mb-6 font-light">Vestigingen</h4>
            <ul className="space-y-2 font-sans text-lg font-light underline-offset-4">
              <li><a href="#amsterdam" className="hover:underline">Amsterdam</a></li>
              <li><a href="#laren" className="hover:underline">Laren</a></li>
            </ul>
          </div>

          {/* Column 2: Menu */}
          <div className="flex flex-col items-center">
            <h4 className="font-serif text-2xl mb-6 font-light">Menu</h4>
            <ul className="space-y-2 font-sans text-lg font-light underline-offset-4">
              <li><a href="#maaltijden" className="hover:underline">Maaltijden</a></li>
              <li><a href="#broodjes" className="hover:underline">Broodjes</a></li>
              <li><a href="#traiteur" className="hover:underline">Traiteur</a></li>
              <li><a href="#catering" className="hover:underline">Catering</a></li>
            </ul>
          </div>

          {/* Column 3: Bestellen */}
          <div className="flex flex-col items-center">
            <h4 className="font-serif text-2xl mb-6 font-light">Bestellen</h4>
            <ul className="space-y-2 font-sans text-lg font-light underline-offset-4">
              <li><a href="#online-broodjes" className="hover:underline">Online broodjes</a></li>
              <li><a href="#catering-amsterdam" className="hover:underline">Catering Amsterdam</a></li>
              <li><a href="#catering-laren" className="hover:underline">Catering Laren</a></li>
            </ul>
          </div>

          {/* Column 4: Volg ons */}
          <div className="flex flex-col items-center">
            <h4 className="font-serif text-2xl mb-6 font-light">Volg ons</h4>
            <div className="flex space-x-6 mt-2">
              <a href="#" className="hover:scale-110 transition-transform">
                <Facebook size={24} />
              </a>
              <a href="#" className="hover:scale-110 transition-transform">
                <Instagram size={24} />
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-20 pt-8 border-t border-white/20 text-center font-sans text-sm font-light text-white/80">
          <p>
            Cookieverklaring | Privacyverklaring | © 2026 Feduzzi. All rights reserved | Made by <a href="#" className="underline hover:text-white">Chef Digital</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
