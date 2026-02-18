import React from 'react';
import { Facebook, Instagram } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-feduzzi-red text-white py-16">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Logo */}
        <div className="flex justify-center mb-16">
          <img 
            src="//images.squarespace-cdn.com/content/v1/65d0ba3a3921ea6aa4f09569/510e5fdb-cdbb-45a3-8dd8-671829ef47e2/feduzzi+logo+wit+transparant.png" 
            alt="Feduzzi" 
            className="h-16 md:h-20 object-contain brightness-0 invert"
          />
        </div>

        {/* Columns */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 text-center md:text-left mb-16">
          
          {/* Col 1 */}
          <div className="flex flex-col items-center">
            <h3 className="text-2xl font-serif mb-6 text-white">Vestigingen</h3>
            <div className="flex flex-col gap-2 font-sans font-light underline-offset-4">
              <a href="#" className="underline hover:no-underline">Amsterdam</a>
              <a href="#" className="underline hover:no-underline">Laren</a>
            </div>
          </div>

          {/* Col 2 */}
          <div className="flex flex-col items-center">
            <h3 className="text-2xl font-serif mb-6 text-white">Menu</h3>
            <div className="flex flex-col gap-2 font-sans font-light underline-offset-4">
              <a href="#" className="underline hover:no-underline">Maaltijden</a>
              <a href="#" className="underline hover:no-underline">Broodjes</a>
              <a href="#" className="underline hover:no-underline">Traiteur</a>
              <a href="#" className="underline hover:no-underline">Catering</a>
            </div>
          </div>

          {/* Col 3 */}
          <div className="flex flex-col items-center">
            <h3 className="text-2xl font-serif mb-6 text-white">Bestellen</h3>
            <div className="flex flex-col gap-2 font-sans font-light underline-offset-4">
              <a href="#" className="underline hover:no-underline">Online broodjes</a>
              <a href="#" className="underline hover:no-underline">Catering Amsterdam</a>
              <a href="#" className="underline hover:no-underline">Catering Laren</a>
            </div>
          </div>

          {/* Col 4 */}
          <div className="flex flex-col items-center">
            <h3 className="text-2xl font-serif mb-6 text-white">Volg ons</h3>
            <div className="flex gap-4">
              <a href="#" className="hover:opacity-75 transition-opacity">
                <Facebook size={24} strokeWidth={1.5} />
              </a>
              <a href="#" className="hover:opacity-75 transition-opacity">
                <Instagram size={24} strokeWidth={1.5} />
              </a>
            </div>
          </div>

        </div>

        {/* Bottom */}
        <div className="border-t border-white/20 pt-8 text-center text-xs font-sans font-light opacity-80">
          <p>
            Cookieverklaring | Privacyverklaring | © 2026 Feduzzi. All rights reserved | Made by <a href="#" className="underline">Chef Digital</a>
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;