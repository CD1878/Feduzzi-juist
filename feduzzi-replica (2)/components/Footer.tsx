import React from 'react';
import { Facebook, Instagram } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-feduzzi-red text-white py-16">
      <div className="max-w-[1200px] mx-auto px-6">
        {/* Logo Centered */}
        <div className="flex justify-center mb-12">
          <div className="text-center">
            <span className="font-script text-6xl block mb-[-10px]">feduzzi</span>
            <span className="text-[10px] uppercase tracking-[0.2em] opacity-80">Mercato Italiano</span>
          </div>
        </div>

        {/* Grid Columns */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 text-center md:text-left mb-16">
          {/* Vestigingen */}
          <div className="flex flex-col items-center">
            <h4 className="font-playfair text-2xl mb-4 tracking-wide">Vestigingen</h4>
            <ul className="space-y-2 font-sans text-[15px] font-light border-b border-white/20 pb-2 md:border-none md:pb-0">
              <li><a href="#" className="underline decoration-1 underline-offset-4 hover:no-underline">Amsterdam</a></li>
              <li><a href="#" className="underline decoration-1 underline-offset-4 hover:no-underline">Laren</a></li>
            </ul>
          </div>

          {/* Menu */}
          <div className="flex flex-col items-center">
            <h4 className="font-playfair text-2xl mb-4 tracking-wide">Menu</h4>
            <ul className="space-y-2 font-sans text-[15px] font-light border-b border-white/20 pb-2 md:border-none md:pb-0">
              <li><a href="#" className="underline decoration-1 underline-offset-4 hover:no-underline">Maaltijden</a></li>
              <li><a href="#" className="underline decoration-1 underline-offset-4 hover:no-underline">Broodjes</a></li>
              <li><a href="#" className="underline decoration-1 underline-offset-4 hover:no-underline">Traiteur</a></li>
              <li><a href="#" className="underline decoration-1 underline-offset-4 hover:no-underline">Catering</a></li>
            </ul>
          </div>

          {/* Bestellen */}
          <div className="flex flex-col items-center">
            <h4 className="font-playfair text-2xl mb-4 tracking-wide">Bestellen</h4>
            <ul className="space-y-2 font-sans text-[15px] font-light border-b border-white/20 pb-2 md:border-none md:pb-0">
              <li><a href="#" className="underline decoration-1 underline-offset-4 hover:no-underline">Online broodjes</a></li>
              <li><a href="#" className="underline decoration-1 underline-offset-4 hover:no-underline">Catering Amsterdam</a></li>
              <li><a href="#" className="underline decoration-1 underline-offset-4 hover:no-underline">Catering Laren</a></li>
            </ul>
          </div>

          {/* Volg ons */}
          <div className="flex flex-col items-center">
            <h4 className="font-playfair text-2xl mb-4 tracking-wide">Volg ons</h4>
            <div className="flex space-x-4 mt-2">
              <a href="#" className="hover:opacity-75 transition-opacity"><Facebook size={20} /></a>
              <a href="#" className="hover:opacity-75 transition-opacity"><Instagram size={20} /></a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center text-[10px] uppercase opacity-60 tracking-wider font-sans border-t border-white/10 pt-8">
          <p>
            Cookieverklaring | Privacyverklaring | © 2026 Feduzzi. All rights reserved | Made by <a href="#" className="underline">Chef Digital</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;