import React, { useState, useEffect } from 'react';
import { Facebook, Instagram, Menu as MenuIcon, X } from 'lucide-react';

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
      <div className="bg-white text-center py-2 text-sm font-sans tracking-wide border-b border-gray-100 relative z-50">
        <p>nieuwe vestiging <strong>Feduzzi Laren</strong> - nu open!</p>
        <button className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600">
          <X size={14} />
        </button>
      </div>

      {/* Main Header */}
      <header 
        className={`w-full z-40 transition-all duration-300 absolute top-[37px] left-0 bg-transparent`}
      >
        <div className="max-w-[1400px] mx-auto px-6 py-6 flex items-center justify-between">
          
          {/* Logo */}
          <div className="flex-shrink-0 z-50">
            <a href="/" className="block">
              <span className="font-serif text-4xl text-white italic font-bold tracking-tight" style={{textShadow: '0 2px 4px rgba(0,0,0,0.3)'}}>
                feduzzi
              </span>
              <span className="block text-[10px] text-white tracking-[0.2em] uppercase mt-1 text-center" style={{textShadow: '0 1px 2px rgba(0,0,0,0.3)'}}>
                Mercato Italiano
              </span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className="text-white text-lg tracking-wide hover:text-gray-200 transition-colors drop-shadow-md"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Actions */}
          <div className="hidden lg:flex items-center space-x-6">
            <div className="flex space-x-4 text-white drop-shadow-md">
              <a href="#" className="hover:text-gray-200"><Facebook size={20} /></a>
              <a href="#" className="hover:text-gray-200"><Instagram size={20} /></a>
            </div>
            <a 
              href="#" 
              className="bg-feduzzi-red text-white px-6 py-3 rounded-sm font-sans text-lg tracking-wide hover:bg-red-900 transition-colors shadow-lg"
            >
              Bestel broodjes
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="lg:hidden text-white z-50"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={32} /> : <MenuIcon size={32} />}
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 bg-feduzzi-dark/95 z-30 flex flex-col justify-center items-center">
          <nav className="flex flex-col items-center space-y-6">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className="text-white text-2xl font-serif"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <a 
              href="#" 
              className="bg-feduzzi-red text-white px-8 py-3 rounded-sm font-sans text-xl mt-8"
            >
              Bestel broodjes
            </a>
          </nav>
        </div>
      )}
    </>
  );
};

export default Header;