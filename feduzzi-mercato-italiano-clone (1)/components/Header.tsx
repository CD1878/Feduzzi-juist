import React, { useState, useEffect } from 'react';
import { Facebook, Instagram, Menu as MenuIcon, X, ShoppingCart } from 'lucide-react';
import { NAV_ITEMS } from '../constants';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Announcement Bar */}
      <div className="bg-feduzzi-red text-white text-center text-sm py-2 px-4 font-sans tracking-wide z-50 relative">
        <p>nieuwe vestiging <strong>Feduzzi Laren</strong> - nu open!</p>
      </div>

      <header 
        className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 ${
          isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-6'
        } ${mobileMenuOpen ? '!bg-black !text-white' : ''}`}
      >
        <div className="container mx-auto px-6 flex items-center justify-between">
          
          {/* Logo */}
          <div className="flex-shrink-0 z-50">
            <a href="/">
              <img 
                src="https://images.squarespace-cdn.com/content/v1/65d0ba3a3921ea6aa4f09569/510e5fdb-cdbb-45a3-8dd8-671829ef47e2/feduzzi+logo+wit+transparant.png?format=1500w" 
                alt="Feduzzi" 
                className={`transition-all duration-300 ${isScrolled && !mobileMenuOpen ? 'invert brightness-0' : ''}`}
                style={{ height: isScrolled ? '60px' : '80px' }}
              />
            </a>
          </div>

          {/* Desktop Nav */}
          <nav className={`hidden lg:flex items-center space-x-8 font-sans text-lg tracking-wide ${isScrolled ? 'text-black' : 'text-white'}`}>
            {NAV_ITEMS.map((item) => (
              <a 
                key={item.label} 
                href={item.href}
                className={`hover:opacity-70 transition-opacity ${item.active ? 'underline underline-offset-4' : ''}`}
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Actions */}
          <div className={`hidden lg:flex items-center space-x-6 ${isScrolled ? 'text-black' : 'text-white'}`}>
            <div className="flex items-center space-x-4">
              <a href="#" className="hover:opacity-70"><Facebook size={20} fill="currentColor" strokeWidth={0} /></a>
              <a href="#" className="hover:opacity-70"><Instagram size={20} /></a>
            </div>
            <a 
              href="#" 
              className={`border px-6 py-2 transition-all duration-300 text-sm font-bold uppercase tracking-wider
                ${isScrolled 
                  ? 'border-black text-black hover:bg-black hover:text-white' 
                  : 'border-white text-white hover:bg-white hover:text-black'
                }`}
            >
              Bestel broodjes
            </a>
          </div>

          {/* Mobile Burger */}
          <div className="lg:hidden z-50 flex items-center gap-4">
             <a 
              href="#" 
              className={`lg:hidden border px-4 py-1 text-xs font-bold uppercase tracking-wider transition-colors
                ${isScrolled && !mobileMenuOpen
                  ? 'border-black text-black' 
                  : 'border-white text-white'
                }`}
            >
              Bestel
            </a>
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`${isScrolled && !mobileMenuOpen ? 'text-black' : 'text-white'}`}
            >
              {mobileMenuOpen ? <X size={32} /> : <MenuIcon size={32} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        <div className={`fixed inset-0 bg-black text-white z-40 transition-transform duration-500 ease-in-out flex flex-col justify-center items-center ${mobileMenuOpen ? 'translate-y-0' : '-translate-y-full'}`}>
          <nav className="flex flex-col items-center space-y-6 text-2xl font-sans font-light">
            {NAV_ITEMS.map((item) => (
              <a 
                key={item.label} 
                href={item.href}
                className="hover:text-gray-300"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <div className="flex space-x-6 mt-8">
              <a href="#"><Facebook size={24} fill="currentColor" strokeWidth={0} /></a>
              <a href="#"><Instagram size={24} /></a>
            </div>
            <a 
              href="#" 
              className="mt-8 bg-feduzzi-red text-white px-8 py-3 font-bold uppercase tracking-wider hover:bg-white hover:text-black transition-colors"
            >
              Bestel broodjes
            </a>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;