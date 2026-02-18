import React from 'react';
import { Facebook, Instagram } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-feduzziRed text-white pt-16 pb-8 px-6">
      <div className="max-w-[1200px] mx-auto">
        
        {/* Logo */}
        <div className="flex justify-center mb-16">
          <div className="w-48">
             <img 
                src="https://images.squarespace-cdn.com/content/v1/65d0ba3a3921ea6aa4f09569/510e5fdb-cdbb-45a3-8dd8-671829ef47e2/feduzzi+logo+wit+transparant.png?format=1500w" 
                alt="Feduzzi" 
                className="w-full h-auto"
              />
          </div>
        </div>

        {/* Columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12 text-center md:text-left mb-16">
          
          {/* Column 1: Vestigingen */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-2xl font-serif mb-4 font-light">Vestigingen</h3>
            <div className="flex flex-col space-y-1 text-base font-light border-b border-transparent hover:border-white transition-all w-fit">
               <a href="#" className="hover:underline">Amsterdam</a>
            </div>
            <div className="flex flex-col space-y-1 text-base font-light border-b border-transparent hover:border-white transition-all w-fit">
               <a href="#" className="hover:underline">Laren</a>
            </div>
          </div>

          {/* Column 2: Menu */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-2xl font-serif mb-4 font-light">Menu</h3>
            <ul className="space-y-1 text-base font-light">
              <li><a href="#" className="hover:underline">Maaltijden</a></li>
              <li><a href="#" className="hover:underline">Broodjes</a></li>
              <li><a href="#" className="hover:underline">Traiteur</a></li>
              <li><a href="#" className="hover:underline">Catering</a></li>
            </ul>
          </div>

          {/* Column 3: Bestellen */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-2xl font-serif mb-4 font-light">Bestellen</h3>
            <ul className="space-y-1 text-base font-light">
              <li><a href="#" className="hover:underline">Online broodjes</a></li>
              <li><a href="#" className="hover:underline">Catering Amsterdam</a></li>
              <li><a href="#" className="hover:underline">Catering Laren</a></li>
            </ul>
          </div>

          {/* Column 4: Volg ons */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-2xl font-serif mb-4 font-light">Volg ons</h3>
            <div className="flex space-x-4">
              <a href="#" aria-label="Facebook" className="hover:opacity-80"><Facebook size={24} fill="white" className="border-none" /></a>
              <a href="#" aria-label="Instagram" className="hover:opacity-80"><Instagram size={24} /></a>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-red-800/30 pt-8 text-center text-xs font-light text-white/80">
          <p>
            Cookieverklaring | Privacyverklaring | © 2026 Feduzzi. All rights reserved | Made by <a href="#" className="underline">Chef Digital</a>
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;