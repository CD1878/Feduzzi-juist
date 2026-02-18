import React, { useState, useEffect } from 'react';
import { Facebook, Instagram } from 'lucide-react';

const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 shadow-md py-2' : 'bg-transparent py-6'}`}>
      <div className="max-w-[1400px] mx-auto px-4 md:px-8 flex justify-between items-center">
        {/* Logo */}
        <div className="flex-shrink-0 z-50">
          <a href="#" className={`font-script text-4xl md:text-5xl ${scrolled ? 'text-feduzzi-red' : 'text-white'} transition-colors duration-300`}>
            feduzzi
          </a>
          <div className={`text-[10px] tracking-widest uppercase mt-[-5px] ml-2 ${scrolled ? 'text-gray-600' : 'text-white/80'}`}>Mercato Italiano</div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-8">
          {['Menu', 'Sfeer', 'Over ons', 'Werken bij', 'Vestigingen'].map((item) => (
            <a 
              key={item} 
              href="#" 
              className={`text-[15px] uppercase tracking-wide hover:opacity-75 transition-opacity ${scrolled ? 'text-black' : 'text-white'}`}
            >
              {item}
            </a>
          ))}
        </nav>

        {/* Right Actions */}
        <div className="flex items-center space-x-6">
          <div className="hidden md:flex space-x-4">
            <a href="#" className={`hover:opacity-75 transition-opacity ${scrolled ? 'text-black' : 'text-white'}`}>
              <Facebook size={20} />
            </a>
            <a href="#" className={`hover:opacity-75 transition-opacity ${scrolled ? 'text-black' : 'text-white'}`}>
              <Instagram size={20} />
            </a>
          </div>
          
          <a 
            href="#" 
            className={`hidden sm:inline-block px-6 py-2.5 text-sm uppercase tracking-wider border rounded-md transition-all duration-300 ${
              scrolled 
                ? 'border-feduzzi-red text-feduzzi-red hover:bg-feduzzi-red hover:text-white' 
                : 'border-white text-white hover:bg-white hover:text-feduzzi-red bg-feduzzi-red border-none' 
            }`}
          >
            Bestel broodjes
          </a>

          {/* Mobile Burger (Visual only) */}
          <button className={`lg:hidden flex flex-col justify-center items-center w-8 h-8 space-y-1.5 ${scrolled ? 'text-black' : 'text-white'}`}>
            <span className="block w-6 h-0.5 bg-current"></span>
            <span className="block w-6 h-0.5 bg-current"></span>
            <span className="block w-6 h-0.5 bg-current"></span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;