import React, { useState, useEffect } from 'react';
import { Facebook, Instagram, Menu as MenuIcon, X, ChevronDown } from 'lucide-react';
import { NAV_ITEMS, LOGO_URL } from '../constants';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleDropdown = (label: string) => {
    if (activeDropdown === label) {
      setActiveDropdown(null);
    } else {
      setActiveDropdown(label);
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white text-black shadow-md py-2' : 'bg-transparent text-white py-6'
      }`}
    >
      <div className="container mx-auto px-6 lg:px-12 flex justify-between items-center">
        {/* Logo */}
        <div className="flex-shrink-0 w-32 md:w-48">
          <a href="/">
            <img 
              src={LOGO_URL} 
              alt="Feduzzi" 
              className={`w-full h-auto transition-all duration-300 ${isScrolled ? 'filter invert' : ''}`}
            />
          </a>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center space-x-8 font-sans text-lg tracking-wide">
          {NAV_ITEMS.map((item) => (
            <div key={item.label} className="relative group">
              <div 
                className="flex items-center cursor-pointer hover:opacity-70 transition-opacity"
                onMouseEnter={() => item.subItems && setActiveDropdown(item.label)}
                onMouseLeave={() => item.subItems && setActiveDropdown(null)}
              >
                <a href={item.href} className={item.subItems ? 'pointer-events-none' : ''}>
                  {item.label}
                </a>
                {item.subItems && <ChevronDown size={14} className="ml-1" />}
                
                {/* Dropdown */}
                {item.subItems && (
                  <div 
                    className={`absolute top-full left-1/2 transform -translate-x-1/2 pt-4 transition-all duration-200 ${
                      activeDropdown === item.label ? 'opacity-100 visible' : 'opacity-0 invisible'
                    }`}
                  >
                    <div className="bg-black text-white py-2 min-w-[160px] shadow-lg rounded-sm">
                      {item.subItems.map(sub => (
                        <a 
                          key={sub.label} 
                          href={sub.href}
                          className="block px-6 py-2 hover:bg-gray-800 whitespace-nowrap text-sm"
                        >
                          {sub.label}
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </nav>

        {/* Desktop Actions */}
        <div className="hidden lg:flex items-center space-x-6">
          <div className="flex space-x-4">
            <a href="https://facebook.com" target="_blank" rel="noreferrer" className="hover:scale-110 transition-transform">
              <Facebook size={20} />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer" className="hover:scale-110 transition-transform">
              <Instagram size={20} />
            </a>
          </div>
          <a 
            href="#order" 
            className={`border px-6 py-2 uppercase tracking-wider text-sm transition-colors duration-300 ${
              isScrolled 
                ? 'border-black text-black hover:bg-black hover:text-white' 
                : 'border-white text-white hover:bg-white hover:text-black'
            }`}
          >
            Bestel broodjes
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="lg:hidden z-50 focus:outline-none"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={28} /> : <MenuIcon size={28} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 bg-black bg-opacity-95 z-40 flex flex-col justify-center items-center transition-opacity duration-300 ${
          mobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
      >
        <nav className="flex flex-col items-center space-y-6 text-white font-sans text-2xl">
          {NAV_ITEMS.map((item) => (
            <div key={item.label} className="flex flex-col items-center">
              <div 
                className="flex items-center cursor-pointer"
                onClick={() => item.subItems ? toggleDropdown(item.label) : setMobileMenuOpen(false)}
              >
                <a href={item.href} onClick={(e) => item.subItems && e.preventDefault()}>
                  {item.label}
                </a>
                {item.subItems && <ChevronDown size={20} className={`ml-2 transform transition-transform ${activeDropdown === item.label ? 'rotate-180' : ''}`} />}
              </div>
              
              {/* Mobile Submenu */}
              {item.subItems && activeDropdown === item.label && (
                <div className="mt-4 flex flex-col items-center space-y-3 text-lg text-gray-400">
                  {item.subItems.map(sub => (
                    <a 
                      key={sub.label} 
                      href={sub.href}
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {sub.label}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
          <a 
            href="#order"
            className="mt-8 bg-feduzzi-red px-8 py-3 rounded text-lg uppercase tracking-wide"
            onClick={() => setMobileMenuOpen(false)}
          >
            Bestel broodjes
          </a>
          <div className="flex space-x-6 mt-8">
            <a href="#" className="text-white"><Facebook size={28}/></a>
            <a href="#" className="text-white"><Instagram size={28}/></a>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
