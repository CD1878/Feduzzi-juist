import React from 'react';
import { Facebook, Instagram } from 'lucide-react';
import { SOCIAL_LINKS } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-feduzzi-red text-white py-16">
      <div className="max-w-site mx-auto px-4 flex flex-col items-center">
        
        {/* Logo */}
        <div className="mb-12">
           <img 
              src="https://images.squarespace-cdn.com/content/v1/65d0ba3a3921ea6aa4f09569/510e5fdb-cdbb-45a3-8dd8-671829ef47e2/feduzzi+logo+wit+transparant.png?format=500w" 
              alt="Feduzzi Footer Logo" 
              className="h-16 md:h-20"
            />
        </div>

        {/* Columns */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-16 text-center w-full max-w-4xl mb-12">
          
          <div className="flex flex-col gap-2">
            <h4 className="font-serif text-2xl mb-2">Vestigingen</h4>
            <a href="#" className="text-sm font-light hover:underline underline-offset-4 decoration-1">Amsterdam</a>
            <a href="#" className="text-sm font-light hover:underline underline-offset-4 decoration-1">Laren</a>
          </div>

          <div className="flex flex-col gap-2">
            <h4 className="font-serif text-2xl mb-2">Menu</h4>
            <a href="#" className="text-sm font-light hover:underline underline-offset-4 decoration-1">Maaltijden</a>
            <a href="#" className="text-sm font-light hover:underline underline-offset-4 decoration-1">Broodjes</a>
            <a href="#" className="text-sm font-light hover:underline underline-offset-4 decoration-1">Traiteur</a>
            <a href="#" className="text-sm font-light hover:underline underline-offset-4 decoration-1">Catering</a>
          </div>

          <div className="flex flex-col gap-2">
            <h4 className="font-serif text-2xl mb-2">Bestellen</h4>
            <a href="#" className="text-sm font-light hover:underline underline-offset-4 decoration-1">Online broodjes</a>
            <a href="#" className="text-sm font-light hover:underline underline-offset-4 decoration-1">Catering Amsterdam</a>
            <a href="#" className="text-sm font-light hover:underline underline-offset-4 decoration-1">Catering Laren</a>
          </div>

          <div className="flex flex-col gap-4 items-center">
            <h4 className="font-serif text-2xl mb-0">Volg ons</h4>
            <div className="flex gap-4">
               <a href={SOCIAL_LINKS.facebook} target="_blank" rel="noreferrer" className="border-2 border-white p-2 rounded-full hover:bg-white hover:text-feduzzi-red transition-all">
                 <Facebook size={16} fill="currentColor" strokeWidth={0} />
               </a>
               <a href={SOCIAL_LINKS.instagram} target="_blank" rel="noreferrer" className="border-2 border-white p-2 rounded-full hover:bg-white hover:text-feduzzi-red transition-all">
                 <Instagram size={16} />
               </a>
            </div>
          </div>

        </div>

        {/* Copyright */}
        <div className="text-xs font-light text-gray-300 border-t border-white/20 pt-8 w-full text-center">
          <p>Cookieverklaring | Privacyverklaring | © 2026 Feduzzi. All rights reserved | Made by Chef Digital</p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
