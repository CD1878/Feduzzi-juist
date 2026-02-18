import React from 'react';
import { Facebook, Instagram } from 'lucide-react';
import { FOOTER_LINKS } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-feduzzi-red text-white py-16">
      <div className="container mx-auto px-6 flex flex-col items-center">
        
        {/* Footer Logo */}
        <div className="mb-12">
          <img 
            src="https://images.squarespace-cdn.com/content/v1/65d0ba3a3921ea6aa4f09569/510e5fdb-cdbb-45a3-8dd8-671829ef47e2/feduzzi+logo+wit+transparant.png?format=1500w" 
            alt="Feduzzi"
            className="h-16 md:h-20 object-contain brightness-0 invert" 
          />
        </div>

        {/* Links Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 w-full max-w-5xl text-center md:text-left mb-16">
          
          {/* Column 1: Vestigingen */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="font-serif text-2xl mb-4 font-light text-white/90">Vestigingen</h3>
            <ul className="space-y-2 font-sans text-lg font-light">
              {FOOTER_LINKS.vestigingen.map(link => (
                <li key={link.label}>
                  <a href={link.href} className="hover:underline underline-offset-4 decoration-1">{link.label}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 2: Menu */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="font-serif text-2xl mb-4 font-light text-white/90">Menu</h3>
            <ul className="space-y-2 font-sans text-lg font-light">
              {FOOTER_LINKS.menu.map(link => (
                <li key={link.label}>
                  <a href={link.href} className="hover:underline underline-offset-4 decoration-1">{link.label}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Bestellen */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="font-serif text-2xl mb-4 font-light text-white/90">Bestellen</h3>
            <ul className="space-y-2 font-sans text-lg font-light">
              {FOOTER_LINKS.bestellen.map(link => (
                <li key={link.label}>
                  <a href={link.href} className="hover:underline underline-offset-4 decoration-1">{link.label}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Volg ons */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="font-serif text-2xl mb-4 font-light text-white/90">Volg ons</h3>
            <div className="flex space-x-4 mt-1">
              <a href="#" className="hover:opacity-80 transition-opacity">
                <Facebook size={24} fill="currentColor" strokeWidth={0} />
              </a>
              <a href="#" className="hover:opacity-80 transition-opacity">
                <Instagram size={24} />
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="w-full border-t border-white/20 pt-8 text-center text-sm font-sans font-light text-white/60">
          <p>
            Cookieverklaring | Privacyverklaring | © 2026 Feduzzi. All rights reserved | Made by <a href="#" className="underline">Chef Digital</a>
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;