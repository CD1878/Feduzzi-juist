import React, { useState, useEffect } from 'react';
import { Instagram, Facebook, ShoppingCart, Menu as MenuIcon, X } from 'lucide-react';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Menu', href: '#' },
    { name: 'Sfeer', href: '#' },
    { name: 'Over ons', href: '#' },
    { name: 'Werken bij', href: '#' },
    { name: 'Vestigingen', href: '#', active: true },
  ];

  return (
    <>
      <header 
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          isScrolled ? 'bg-white py-2 shadow-sm' : 'bg-transparent py-4 md:py-6'
        } ${isScrolled ? 'text-black' : 'text-white'}`}
      >
        <div className="max-w-[95%] mx-auto px-4 flex justify-between items-center h-full">
          {/* Socials Desktop */}
          <div className="hidden lg:flex gap-4 items-center w-1/4">
            <a href="#" className="hover:opacity-75 transition-opacity">
              <Facebook size={20} strokeWidth={1.5} />
            </a>
            <a href="#" className="hover:opacity-75 transition-opacity">
              <Instagram size={20} strokeWidth={1.5} />
            </a>
          </div>

          {/* Logo & Nav */}
          <div className="flex flex-col items-center justify-center w-full lg:w-2/4">
            <div className="mb-4 lg:mb-6">
              <img 
                src="//images.squarespace-cdn.com/content/v1/65d0ba3a3921ea6aa4f09569/510e5fdb-cdbb-45a3-8dd8-671829ef47e2/feduzzi+logo+wit+transparant.png?format=1500w" 
                alt="Feduzzi" 
                className={`h-12 md:h-16 lg:h-20 object-contain transition-all duration-300 ${isScrolled ? 'brightness-0 invert-0' : 'brightness-0 invert'}`}
              />
            </div>
            <nav className="hidden lg:flex gap-8 text-[15px] uppercase tracking-widest font-sans font-light">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href} 
                  className={`hover:opacity-75 transition-opacity border-b border-transparent hover:border-current pb-0.5 ${link.active ? 'border-current' : ''}`}
                >
                  {link.name}
                </a>
              ))}
            </nav>
          </div>

          {/* CTA Desktop */}
          <div className="hidden lg:flex justify-end w-1/4">
            <a 
              href="#cta" 
              className={`px-6 py-3 border text-sm uppercase tracking-widest transition-colors duration-300 ${
                isScrolled 
                  ? 'border-black hover:bg-black hover:text-white' 
                  : 'border-white hover:bg-white hover:text-black'
              }`}
            >
              Bestel broodjes
            </a>
          </div>

          {/* Mobile Toggle */}
          <div className="lg:hidden flex items-center">
             <button onClick={() => setIsMobileMenuOpen(true)} className="p-2">
                <MenuIcon size={32} strokeWidth={1} />
             </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 z-[60] bg-feduzzi-red text-white transform transition-transform duration-300 ease-in-out ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex justify-end p-6">
          <button onClick={() => setIsMobileMenuOpen(false)}>
            <X size={32} strokeWidth={1} />
          </button>
        </div>
        <nav className="flex flex-col items-center justify-center gap-8 text-2xl font-serif mt-10">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} onClick={() => setIsMobileMenuOpen(false)}>
              {link.name}
            </a>
          ))}
          <a href="#cta" onClick={() => setIsMobileMenuOpen(false)} className="mt-8 px-8 py-3 border border-white uppercase text-base tracking-widest font-sans">
            Bestel broodjes
          </a>
        </nav>
      </div>
    </>
  );
};

export default Header;