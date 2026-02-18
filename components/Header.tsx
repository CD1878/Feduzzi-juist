import React, { useState, useEffect } from 'react';
import { Facebook, Instagram, Menu as MenuIcon, X, ChevronDown } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { NAV_ITEMS, LOGO_URL } from '../constants';

const AnnouncementBar = () => {
  const [visible, setVisible] = useState(true);
  if (!visible) return null;
  return (
    <div className="bg-feduzzi-green text-white text-center py-2 px-4 text-sm tracking-wide relative border-b border-white/10 z-[60]">
      <p className="font-medium">
        Nieuwe vestiging <strong>Feduzzi Laren</strong> - nu open!
      </p>
      <button
        onClick={() => setVisible(false)}
        className="absolute right-4 top-1/2 -translate-y-1/2 text-white/80 hover:text-white transition-colors p-1"
        aria-label="Sluit melding"
      >
        <X size={16} />
      </button>
    </div>
  );
};

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const location = useLocation();

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

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    setActiveDropdown(null);
    if (href.startsWith('/#') || href.startsWith('#')) {
      // Handle anchors if needed
    }
  };

  const renderLink = (item: { label: string; href: string; subItems?: any }, className: string = "") => {
    const isAnchor = item.href.startsWith('#');
    const finalHref = (isAnchor && location.pathname !== '/') ? `/${item.href}` : item.href;
    const isInternal = !finalHref.startsWith('http');

    const Component = isInternal ? Link : 'a';
    const props = isInternal
      ? { to: finalHref, className, onClick: () => handleNavClick(finalHref) }
      : { href: finalHref, className, onClick: () => handleNavClick(finalHref) };

    return (
      // @ts-ignore
      <Component {...props}>
        {item.label}
      </Component>
    );
  };

  return (
    <div className="fixed top-0 left-0 w-full z-50 flex flex-col pointer-events-none">
      {/* Enable pointer events for children */}
      <div className="pointer-events-auto">
        <AnnouncementBar />
      </div>

      <header
        className={`pointer-events-auto w-full transition-all duration-300 ${isScrolled ? 'bg-white text-gray-900 shadow-md py-3' : 'bg-transparent text-white py-6'
          }`}
      >
        <div className="container mx-auto px-6 lg:px-12 flex justify-between items-center">
          {/* Logo */}
          <div className="flex-shrink-0 w-32 md:w-40 transition-all duration-300">
            <Link to="/" className="block">
              <img
                src={LOGO_URL}
                alt="Feduzzi"
                className={`w-full h-auto transition-all duration-300 ${isScrolled ? 'filter invert-0' : 'filter brightness-0 invert'}`}
              // Note: Assuming logic for logo color. Original code used invert. Adjusting for standard logo.
              />
            </Link>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center space-x-8 font-sans text-lg tracking-wide">
            {NAV_ITEMS.map((item) => (
              <div key={item.label} className="relative group">
                <div
                  className="flex items-center cursor-pointer hover:opacity-70 transition-opacity py-2"
                  onMouseEnter={() => item.subItems && setActiveDropdown(item.label)}
                  onMouseLeave={() => item.subItems && setActiveDropdown(null)}
                >
                  {!item.subItems ? (
                    renderLink(item)
                  ) : (
                    <span className={item.subItems ? 'cursor-default' : ''}>
                      {item.label}
                    </span>
                  )}

                  {item.subItems && <ChevronDown size={14} className="ml-1" />}

                  {/* Dropdown */}
                  {item.subItems && (
                    <div
                      className={`absolute top-full left-1/2 transform -translate-x-1/2 pt-2 transition-all duration-200 ${activeDropdown === item.label ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'
                        }`}
                    >
                      <div className="bg-white text-gray-800 py-2 min-w-[200px] shadow-xl rounded-md border-t-4 border-feduzzi-green overflow-hidden">
                        {item.subItems.map(sub => (
                          renderLink(sub, "block px-6 py-3 hover:bg-feduzzi-cream hover:text-feduzzi-green transition-colors whitespace-nowrap text-sm font-medium")
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
              className={`border px-6 py-2 uppercase tracking-wider text-sm transition-colors duration-300 font-medium ${isScrolled
                ? 'border-feduzzi-green text-feduzzi-green hover:bg-feduzzi-green hover:text-white'
                : 'border-white text-white hover:bg-white hover:text-feduzzi-green'
                }`}
            >
              Bestel broodjes
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden z-50 focus:outline-none p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={28} /> : <MenuIcon size={28} />}
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-white z-40 flex flex-col pt-24 items-center transition-all duration-300 pointer-events-auto ${mobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'
          }`}
      >
        <nav className="flex flex-col items-center space-y-6 text-gray-900 font-sans text-2xl font-light w-full max-w-sm px-6 overflow-y-auto max-h-[calc(100vh-100px)]">
          {NAV_ITEMS.map((item) => (
            <div key={item.label} className="flex flex-col items-center w-full">
              <div
                className="flex items-center justify-center cursor-pointer hover:text-feduzzi-green transition-colors w-full py-2"
                onClick={() => item.subItems ? toggleDropdown(item.label) : null}
              >
                {!item.subItems ? (
                  renderLink(item)
                ) : (
                  <span className="font-medium">{item.label}</span>
                )}

                {item.subItems && <ChevronDown size={20} className={`ml-2 transform transition-transform duration-300 ${activeDropdown === item.label ? 'rotate-180' : ''}`} />}
              </div>

              {/* Mobile Submenu */}
              {item.subItems && (
                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out w-full ${activeDropdown === item.label ? 'max-h-60 opacity-100 mt-2 sidebar-open' : 'max-h-0 opacity-0'}`}
                >
                  <div className="flex flex-col items-center space-y-3 text-lg text-gray-500 bg-gray-50 rounded-xl py-4 w-full">
                    {item.subItems.map(sub => (
                      <div key={sub.label} onClick={() => setMobileMenuOpen(false)}>
                        {renderLink(sub, "hover:text-feduzzi-green block py-1")}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
          <a
            href="/#order"
            className="mt-6 border-2 border-feduzzi-green text-feduzzi-green px-10 py-3 rounded-full text-lg uppercase tracking-widest hover:bg-feduzzi-green hover:text-white transition-all duration-300"
            onClick={() => setMobileMenuOpen(false)}
          >
            Bestel broodjes
          </a>
          <div className="flex space-x-8 mt-8 pb-8">
            <a href="https://facebook.com" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-feduzzi-blue transition-colors"><Facebook size={28} /></a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-feduzzi-red transition-colors"><Instagram size={28} /></a>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Header;
