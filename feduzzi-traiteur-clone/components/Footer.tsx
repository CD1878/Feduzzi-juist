import React from 'react';
import { Facebook, Instagram } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-feduzzi-red text-white pt-16 pb-8 px-6">
      <div className="max-w-7xl mx-auto">
        
        {/* Logo Section */}
        <div className="flex justify-center mb-16">
          <div className="text-center">
             <h2 className="font-serif text-4xl italic font-bold leading-none">
                feduzzi
             </h2>
             <p className="text-[0.65rem] tracking-[0.2em] uppercase font-bold mt-2 text-white/80">
                Mercato Italiano
             </p>
          </div>
        </div>

        {/* Columns Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 text-center md:text-left mb-16 border-b border-white/10 pb-16">
          
          {/* Vestigingen */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="font-serif text-xl mb-6">Vestigingen</h3>
            <ul className="space-y-2 font-light text-sm tracking-wide text-white/80 underline decoration-white/30 underline-offset-4">
              <li><a href="#" className="hover:text-white transition-colors">Amsterdam</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Laren</a></li>
            </ul>
          </div>

          {/* Menu */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="font-serif text-xl mb-6">Menu</h3>
            <ul className="space-y-2 font-light text-sm tracking-wide text-white/80 underline decoration-white/30 underline-offset-4">
              <li><a href="#" className="hover:text-white transition-colors">Maaltijden</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Broodjes</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Traiteur</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Catering</a></li>
            </ul>
          </div>

          {/* Bestellen */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="font-serif text-xl mb-6">Bestellen</h3>
            <ul className="space-y-2 font-light text-sm tracking-wide text-white/80 underline decoration-white/30 underline-offset-4">
              <li><a href="#" className="hover:text-white transition-colors">Online broodjes</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Catering Amsterdam</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Catering Laren</a></li>
            </ul>
          </div>

          {/* Volg ons */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="font-serif text-xl mb-6">Volg ons</h3>
            <div className="flex gap-4">
              <a href="#" className="bg-white text-feduzzi-red p-2 rounded-full hover:bg-white/90 transition-colors">
                <Facebook size={18} fill="currentColor" className="stroke-none" />
              </a>
              <a href="#" className="bg-white text-feduzzi-red p-2 rounded-full hover:bg-white/90 transition-colors">
                <Instagram size={18} />
              </a>
            </div>
          </div>

        </div>

        {/* Copyright */}
        <div className="text-center text-[10px] uppercase tracking-widest text-white/60 font-light">
          <p>
            Cookieverklaring | Privacyverklaring | © 2026 Feduzzi. All rights reserved | Made by Chef Digital
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;