import React, { useState } from 'react';
import { Facebook, Instagram, X } from 'lucide-react';

const Header: React.FC = () => {
  const [showAnnouncement, setShowAnnouncement] = useState(true);

  return (
    <header className="relative z-50">
      {/* Announcement Bar */}
      {showAnnouncement && (
        <div className="bg-white text-black text-center py-2 text-sm relative border-b border-gray-100">
          <p>
            nieuwe vestiging <strong>Feduzzi Laren</strong> - nu open!
          </p>
          <button 
            onClick={() => setShowAnnouncement(false)}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-black"
          >
            <X size={14} />
          </button>
        </div>
      )}

      {/* Main Header */}
      <div className="bg-feduzziBlack text-white py-4 px-6 md:px-10">
        <div className="max-w-[1400px] mx-auto flex justify-between items-center">
          
          {/* Logo */}
          <div className="w-32 md:w-48">
            <a href="/">
              <img 
                src="https://images.squarespace-cdn.com/content/v1/65d0ba3a3921ea6aa4f09569/510e5fdb-cdbb-45a3-8dd8-671829ef47e2/feduzzi+logo+wit+transparant.png?format=1500w" 
                alt="Feduzzi" 
                className="w-full h-auto"
              />
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex space-x-8 items-center text-sm font-light tracking-wide">
            <div className="relative group">
              <button className="hover:text-gray-300">Menu</button>
            </div>
            <a href="#" className="hover:text-gray-300">Sfeer</a>
            <a href="#" className="text-gray-300 border-b border-gray-300 pb-0.5">Over ons</a>
            <a href="#" className="hover:text-gray-300">Werken bij</a>
            <div className="relative group">
              <button className="hover:text-gray-300">Vestigingen</button>
            </div>
          </nav>

          {/* Actions */}
          <div className="flex items-center space-x-6">
            <div className="hidden md:flex space-x-4">
              <a href="#" aria-label="Facebook" className="hover:opacity-80"><Facebook size={20} fill="white" className="border-none" /></a>
              <a href="#" aria-label="Instagram" className="hover:opacity-80"><Instagram size={20} /></a>
            </div>
            
            <a 
              href="#" 
              className="bg-feduzziRed text-white px-6 py-2.5 text-sm rounded-sm font-medium hover:bg-red-800 transition-colors hidden sm:block"
            >
              Bestel broodjes
            </a>

            {/* Mobile Menu Toggle (Visual only for this demo) */}
            <button className="lg:hidden text-white">
              <div className="space-y-1.5">
                <span className="block w-6 h-0.5 bg-white"></span>
                <span className="block w-6 h-0.5 bg-white"></span>
                <span className="block w-6 h-0.5 bg-white"></span>
              </div>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;