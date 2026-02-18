import React, { useState, useEffect } from 'react';
import { Facebook, Instagram } from 'lucide-react';
import { SOCIAL_LINKS } from '../constants';

const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4 text-white'}`}>
        <div className="max-w-site mx-auto px-4 md:px-8 flex justify-between items-center">
          {/* Socials - Desktop */}
          <div className="hidden md:flex gap-4 items-center w-1/4">
            <a href={SOCIAL_LINKS.facebook} target="_blank" rel="noopener noreferrer" className={`${scrolled ? 'text-black' : 'text-white'} hover:opacity-70`}>
              <Facebook size={20} fill="currentColor" strokeWidth={0} />
            </a>
            <a href={SOCIAL_LINKS.instagram} target="_blank" rel="noopener noreferrer" className={`${scrolled ? 'text-black' : 'text-white'} hover:opacity-70`}>
              <Instagram size={20} strokeWidth={2} />
            </a>
          </div>

          {/* Logo & Center Nav */}
          <div className="flex flex-col items-center flex-grow">
            <a href="/" className="block mb-4">
              <img 
                src="https://images.squarespace-cdn.com/content/v1/65d0ba3a3921ea6aa4f09569/510e5fdb-cdbb-45a3-8dd8-671829ef47e2/feduzzi+logo+wit+transparant.png?format=1500w" 
                alt="Feduzzi" 
                className={`h-auto transition-all duration-300 ${scrolled ? 'max-h-[60px] filter invert' : 'max-h-[100px]'}`} 
              />
            </a>
            
            <nav className="hidden md:flex gap-8 text-lg font-light tracking-wide">
              {['Menu', 'Sfeer', 'Over ons', 'Werken bij', 'Vestigingen'].map((item) => (
                <a 
                  key={item} 
                  href="#" 
                  className={`relative group ${scrolled ? 'text-black' : 'text-white'}`}
                >
                  {item}
                  <span className={`absolute left-0 bottom-0 w-0 h-[1px] transition-all duration-300 group-hover:w-full ${scrolled ? 'bg-black' : 'bg-white'}`}></span>
                </a>
              ))}
            </nav>
          </div>

          {/* CTA - Desktop */}
          <div className="hidden md:flex justify-end w-1/4">
            <a 
              href="#" 
              className={`px-6 py-3 border transition-colors duration-300 uppercase text-xs tracking-widest font-semibold
                ${scrolled 
                  ? 'border-black text-black hover:bg-black hover:text-white' 
                  : 'border-white text-white hover:bg-white hover:text-black'}`}
            >
              Bestel broodjes
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden z-50 text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <div className={`w-6 h-0.5 bg-current mb-1.5 transition-all ${mobileMenuOpen ? 'rotate-45 translate-y-2' : ''} ${scrolled ? 'text-black' : 'text-white'}`}></div>
            <div className={`w-6 h-0.5 bg-current mb-1.5 transition-all ${mobileMenuOpen ? 'opacity-0' : ''} ${scrolled ? 'text-black' : 'text-white'}`}></div>
            <div className={`w-6 h-0.5 bg-current transition-all ${mobileMenuOpen ? '-rotate-45 -translate-y-2' : ''} ${scrolled ? 'text-black' : 'text-white'}`}></div>
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 bg-[#881628] z-40 transition-transform duration-500 transform ${mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'} flex flex-col justify-center items-center text-white`}>
        <nav className="flex flex-col gap-6 text-center text-2xl font-serif">
          {['Menu', 'Sfeer', 'Over ons', 'Werken bij', 'Vestigingen'].map((item) => (
            <a key={item} href="#" className="hover:opacity-70">{item}</a>
          ))}
        </nav>
        <a href="#" className="mt-8 px-8 py-3 bg-white text-[#881628] uppercase text-sm font-bold tracking-widest">
          Bestel broodjes
        </a>
      </div>
    </>
  );
};

export default Header;
