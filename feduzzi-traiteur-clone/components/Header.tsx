import React, { useState, useEffect } from 'react';
import { Menu, X, Facebook, Instagram } from 'lucide-react';

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
    { name: 'Vestigingen', href: '#' },
  ];

  return (
    <>
      {/* Announcement Bar */}
      <div className="bg-white text-center py-2 text-sm font-light tracking-wide border-b border-gray-100 hidden md:block">
        nieuwe vestiging <strong>Feduzzi Laren</strong> - nu open!
      </div>

      <header 
        className={`sticky top-0 z-50 w-full transition-all duration-300 ${
          isScrolled ? 'bg-white/95 backdrop-blur-sm shadow-md py-2' : 'bg-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between">
          
          {/* Logo - Text Based based on screenshot */}
          <div className={`flex-shrink-0 transition-opacity duration-300 ${isScrolled ? 'opacity-100' : 'opacity-100'}`}>
             <h1 className="font-serif text-3xl italic font-bold leading-none text-feduzzi-red">
                feduzzi
             </h1>
             <p className="text-[0.6rem] tracking-widest uppercase text-gray-500 font-bold mt-1">
                Mercato Italiano
             </p>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a 
                key={link.name}
                href={link.href}
                className="text-sm font-light uppercase tracking-wider text-gray-800 hover:text-feduzzi-red transition-colors relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-feduzzi-red transition-all group-hover:w-full"></span>
              </a>
            ))}
          </nav>

          {/* Right Actions */}
          <div className="hidden lg:flex items-center gap-6">
            <div className="flex items-center gap-3 text-gray-800">
              <a href="#" className="hover:text-feduzzi-red transition-colors"><Facebook size={18} strokeWidth={1.5} /></a>
              <a href="#" className="hover:text-feduzzi-red transition-colors"><Instagram size={18} strokeWidth={1.5} /></a>
            </div>
            <button className="bg-feduzzi-red text-white text-xs font-bold uppercase tracking-widest px-6 py-3 rounded hover:bg-red-800 transition-colors">
              Bestel broodjes
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="lg:hidden text-gray-800"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 w-full bg-white shadow-lg border-t border-gray-100 py-6 px-6 flex flex-col gap-4">
            {navLinks.map((link) => (
              <a 
                key={link.name}
                href={link.href}
                className="text-lg font-serif text-gray-800 hover:text-feduzzi-red"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <div className="flex gap-4 mt-4 justify-center">
              <a href="#" className="text-gray-800 hover:text-feduzzi-red"><Facebook size={24} /></a>
              <a href="#" className="text-gray-800 hover:text-feduzzi-red"><Instagram size={24} /></a>
            </div>
            <button className="bg-feduzzi-red text-white text-sm font-bold uppercase tracking-widest px-6 py-3 rounded mt-2 w-full">
              Bestel broodjes
            </button>
          </div>
        )}
      </header>
    </>
  );
};

export default Header;