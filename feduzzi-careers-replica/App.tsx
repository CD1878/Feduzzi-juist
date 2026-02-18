import React, { useState, useEffect } from 'react';
import { Menu, X, Facebook, Instagram, ChevronDown, Calendar, Phone, Mail, MapPin } from 'lucide-react';

// --- Components ---

const AnnouncementBar = () => {
  const [visible, setVisible] = useState(true);

  if (!visible) return null;

  return (
    <div className="bg-white text-black text-[13px] py-2 px-4 text-center font-sans tracking-wide relative border-b border-gray-100">
      <span className="font-light">nieuwe vestiging <strong>Feduzzi Laren</strong> - nu open!</span>
      <button 
        onClick={() => setVisible(false)}
        className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-black"
      >
        <X size={14} />
      </button>
    </div>
  );
};

const Header = () => {
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
      <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-sm py-2' : 'bg-transparent py-6'}`}>
        {/* Helper for Announcement Bar offset if needed, handled by relative positioning usually */}
        <div className="container mx-auto px-6 md:px-12 flex justify-between items-center h-full">
          
          {/* Logo */}
          <div className="w-32 md:w-40 z-50">
            <a href="/">
              <img 
                src="https://images.squarespace-cdn.com/content/v1/65d0ba3a3921ea6aa4f09569/510e5fdb-cdbb-45a3-8dd8-671829ef47e2/feduzzi+logo+wit+transparant.png?format=1500w" 
                alt="Feduzzi" 
                className={`transition-all duration-300 ${scrolled ? 'invert brightness-0' : ''}`}
              />
            </a>
          </div>

          {/* Desktop Nav */}
          <nav className={`hidden lg:flex items-center gap-8 text-[15px] font-header tracking-wider uppercase ${scrolled ? 'text-black' : 'text-white'}`}>
            <div className="group relative cursor-pointer">
              <span className="flex items-center gap-1">Menu <ChevronDown size={12} /></span>
              {/* Dropdown would go here */}
            </div>
            <a href="#" className="hover:opacity-70 transition-opacity">Sfeer</a>
            <a href="#" className="hover:opacity-70 transition-opacity">Over ons</a>
            <a href="#" className="hover:opacity-70 transition-opacity border-b border-current">Werken bij</a>
            <div className="group relative cursor-pointer">
              <span className="flex items-center gap-1">Vestigingen <ChevronDown size={12} /></span>
            </div>
          </nav>

          {/* Actions */}
          <div className="hidden lg:flex items-center gap-6">
            <div className={`flex gap-4 ${scrolled ? 'text-black' : 'text-white'}`}>
              <a href="https://facebook.com" target="_blank" rel="noreferrer"><Facebook size={20} /></a>
              <a href="https://instagram.com" target="_blank" rel="noreferrer"><Instagram size={20} /></a>
            </div>
            <a 
              href="#" 
              className={`px-6 py-3 border text-[13px] font-bold uppercase tracking-widest transition-colors ${
                scrolled 
                  ? 'border-black text-black hover:bg-black hover:text-white' 
                  : 'border-white text-white hover:bg-white hover:text-black'
              }`}
            >
              Bestel broodjes
            </a>
          </div>

          {/* Mobile Toggle */}
          <button 
            className={`lg:hidden z-50 ${scrolled || mobileMenuOpen ? 'text-black' : 'text-white'}`}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 bg-white z-40 transform transition-transform duration-500 ease-in-out ${mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'} lg:hidden flex flex-col pt-32 px-8`}>
        <nav className="flex flex-col gap-6 text-2xl font-header uppercase tracking-wider text-center">
          <a href="#" className="border-b pb-2">Menu</a>
          <a href="#">Sfeer</a>
          <a href="#">Over ons</a>
          <a href="#" className="text-feduzzi-red">Werken bij</a>
          <a href="#">Vestigingen</a>
        </nav>
        <div className="mt-12 flex justify-center gap-8 text-black">
          <Facebook size={28} />
          <Instagram size={28} />
        </div>
        <div className="mt-8 flex justify-center">
           <a href="#" className="px-8 py-4 border border-black text-black text-sm font-bold uppercase tracking-widest">
              Bestel broodjes
            </a>
        </div>
      </div>
    </>
  );
};

const HeroSection = () => {
  return (
    <section className="relative h-[60vh] md:h-[70vh] min-h-[500px] w-full bg-hero-pattern bg-cover bg-center bg-no-repeat flex items-center justify-center">
      <div className="absolute inset-0 bg-black/30"></div>
      <div className="relative z-10 text-center text-white px-4">
        <h1 className="font-serif italic text-4xl md:text-6xl mb-4 font-light">Become part of the family</h1>
        <p className="font-header text-lg md:text-xl tracking-wide font-light max-w-2xl mx-auto">
          En leer ook hoe je authentieke Italiaanse gerechten bereidt
        </p>
      </div>
    </section>
  );
};

const QuoteSection = ({ bg, text }: { bg: string, text: string }) => {
  return (
    <section className={`${bg} py-20 md:py-32 px-6 flex items-center justify-center`}>
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="font-serif italic text-3xl md:text-[42px] text-white leading-tight font-light">
          {text}
        </h2>
      </div>
    </section>
  );
};

const ContentSection = () => {
  return (
    <section className="bg-white py-20 md:py-32">
      <div className="container mx-auto px-6 md:px-12 max-w-[1200px]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Column: Staff Image */}
          <div className="relative">
            <img 
              src="https://images.squarespace-cdn.com/content/v1/65d0ba3a3921ea6aa4f09569/c285ad0e-c073-4bb1-8e91-39c70a2ad7f1/429685242_974952904365780_7748597416661500634_n.jpg?format=1000w" 
              alt="Feduzzi Team" 
              className="w-full h-auto object-cover grayscale brightness-90 contrast-110"
            />
          </div>

          {/* Right Column: Text & Inset Image */}
          <div className="flex flex-col gap-8 md:pl-8">
            <div>
              <h2 className="text-3xl md:text-4xl font-serif text-feduzzi-red mb-6 leading-tight">
                Wil jij ook werken bij de leukste Italiaan van Amsterdam en authentiek Italiaans leren koken?
              </h2>
              <p className="font-sans text-gray-700 leading-relaxed text-lg font-light mb-6">
                Vul dan het formulier hieronder in, hierna nemen we snel contact met je op om je sollicitatie verder te bespreken en mogelijk een vrijblijvende proefdag te plannen. Ook bereik je ons <a href="tel:0206646365" className="border-b border-black text-black hover:opacity-70 transition-opacity">telefonisch</a>. We kijken ernaar uit om je te leren kennen!
              </p>
            </div>
            
            {/* Inset Image - Styled to look like the collage in the original */}
            <div className="relative md:-ml-24 mt-4 w-full md:w-3/4 self-start shadow-xl border-4 border-white">
              <img 
                src="https://images.squarespace-cdn.com/content/v1/65d0ba3a3921ea6aa4f09569/cea656a4-d440-45d5-9ec6-1626458e3631/Authentiek+Italiaans+restaurant%2C+Italiaans+restaurant+Amsterdam%2C+Italiaans+restaurant+omgeving+Amsterdam29.jpeg?format=750w" 
                alt="Feduzzi Exterior" 
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const FormSection = () => {
  return (
    <section className="bg-white pb-20">
      <div className="container mx-auto px-6 md:px-12 max-w-[1200px]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          
          {/* Form Side */}
          <div className="order-2 md:order-1">
            <form className="flex flex-col gap-6" onSubmit={(e) => e.preventDefault()}>
              <div className="flex flex-col gap-1">
                <label className="text-[15px] font-sans text-gray-800">Name</label>
                <div className="flex gap-4">
                  <div className="w-1/2">
                    <label className="text-xs text-gray-500 mb-1 block">Voornaam <span className="text-gray-400">(vereist)</span></label>
                    <input type="text" className="w-full border border-gray-400 p-3 rounded-sm focus:outline-none focus:border-black transition-colors" />
                  </div>
                  <div className="w-1/2">
                    <label className="text-xs text-gray-500 mb-1 block">Achternaam <span className="text-gray-400">(vereist)</span></label>
                    <input type="text" className="w-full border border-gray-400 p-3 rounded-sm focus:outline-none focus:border-black transition-colors" />
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-1">
                <label className="text-[15px] font-sans text-gray-800">Email <span className="text-xs text-gray-400 font-normal">(vereist)</span></label>
                <input type="email" className="w-full border border-gray-400 p-3 rounded-sm focus:outline-none focus:border-black transition-colors" />
              </div>

              <div className="flex flex-col gap-1">
                <label className="text-[15px] font-sans text-gray-800">Telefoonnummer <span className="text-xs text-gray-400 font-normal">(vereist)</span></label>
                <input type="tel" className="w-full border border-gray-400 p-3 rounded-sm focus:outline-none focus:border-black transition-colors" />
              </div>

              <div className="flex flex-col gap-1">
                <label className="text-[15px] font-sans text-gray-800">Geboortedatum <span className="text-xs text-gray-400 font-normal">(vereist)</span></label>
                <div className="relative">
                  <input type="date" className="w-full border border-gray-400 p-3 rounded-sm focus:outline-none focus:border-black transition-colors appearance-none bg-white" placeholder="dd-mm-jjjj" />
                  {/* Custom calendar icon to match design if browser default isn't enough */}
                </div>
              </div>

              <div className="flex flex-col gap-1">
                <label className="text-[15px] font-sans text-gray-800">Locatie <span className="text-xs text-gray-400 font-normal">(vereist)</span></label>
                <p className="text-xs text-gray-500 mb-1">Waar wil je werken?</p>
                <div className="relative">
                  <select className="w-full border border-gray-400 p-3 rounded-sm focus:outline-none focus:border-black transition-colors appearance-none bg-white">
                    <option value="" disabled selected>Select an option</option>
                    <option value="amsterdam">Amsterdam</option>
                    <option value="laren">Laren</option>
                  </select>
                  <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none" size={16} />
                </div>
              </div>

              <div className="flex flex-col gap-1">
                <label className="text-[15px] font-sans text-gray-800">Korte motivatie <span className="text-xs text-gray-400 font-normal">(vereist)</span></label>
                <textarea rows={4} className="w-full border border-gray-400 p-3 rounded-sm focus:outline-none focus:border-black transition-colors"></textarea>
              </div>

              <button className="bg-feduzzi-green text-white font-sans uppercase tracking-widest text-sm font-bold py-4 px-8 mt-4 hover:opacity-90 transition-opacity self-start rounded-sm">
                Verzenden
              </button>
            </form>
          </div>

          {/* Image Side */}
          <div className="order-1 md:order-2 h-full min-h-[400px]">
            <img 
              src="https://images.squarespace-cdn.com/content/v1/65d0ba3a3921ea6aa4f09569/9e3a08e0-332d-4ef1-858d-3f3eb80948e7/357529468_18183520678287593_8398006463779402327_n.jpg?format=1500w" 
              alt="Italian Food Display" 
              className="w-full h-full object-cover"
            />
          </div>

        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-feduzzi-red text-white py-16 px-6">
      <div className="container mx-auto max-w-[1200px]">
        {/* Logo */}
        <div className="flex justify-center mb-16">
          <img 
            src="https://images.squarespace-cdn.com/content/v1/65d0ba3a3921ea6aa4f09569/510e5fdb-cdbb-45a3-8dd8-671829ef47e2/feduzzi+logo+wit+transparant.png?format=500w" 
            alt="Feduzzi Footer Logo" 
            className="w-48 opacity-90"
          />
        </div>

        {/* Links Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 text-center">
          
          <div className="flex flex-col gap-4">
            <h3 className="font-serif text-xl mb-2">Vestigingen</h3>
            <a href="#" className="font-sans text-sm underline-offset-4 hover:underline">Amsterdam</a>
            <a href="#" className="font-sans text-sm underline-offset-4 hover:underline">Laren</a>
          </div>

          <div className="flex flex-col gap-4">
            <h3 className="font-serif text-xl mb-2">Menu</h3>
            <a href="#" className="font-sans text-sm underline-offset-4 hover:underline">Maaltijden</a>
            <a href="#" className="font-sans text-sm underline-offset-4 hover:underline">Broodjes</a>
            <a href="#" className="font-sans text-sm underline-offset-4 hover:underline">Traiteur</a>
            <a href="#" className="font-sans text-sm underline-offset-4 hover:underline">Catering</a>
          </div>

          <div className="flex flex-col gap-4">
            <h3 className="font-serif text-xl mb-2">Bestellen</h3>
            <a href="#" className="font-sans text-sm underline-offset-4 hover:underline">Online broodjes</a>
            <a href="#" className="font-sans text-sm underline-offset-4 hover:underline">Catering Amsterdam</a>
            <a href="#" className="font-sans text-sm underline-offset-4 hover:underline">Catering Laren</a>
          </div>

          <div className="flex flex-col gap-4">
            <h3 className="font-serif text-xl mb-2">Volg ons</h3>
            <div className="flex justify-center gap-4 mt-1">
              <a href="#" className="hover:opacity-80"><Facebook size={18} /></a>
              <a href="#" className="hover:opacity-80"><Instagram size={18} /></a>
            </div>
          </div>

        </div>

        {/* Copyright */}
        <div className="mt-20 pt-8 border-t border-white/20 text-center text-[10px] font-sans text-white/70 uppercase tracking-wider">
          <p>
            Cookieverklaring | Privacyverklaring | © 2026 Feduzzi. All rights reserved | Made by <a href="#" className="underline">Chef Digital</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

// --- Main App ---

const App = () => {
  return (
    <div className="min-h-screen bg-white">
      <AnnouncementBar />
      <Header />
      <main>
        <HeroSection />
        <QuoteSection 
          bg="bg-feduzzi-green" 
          text="“ La vera cucina italiana è una forma d'arte. Un dono per i sensi”" 
        />
        <ContentSection />
        <QuoteSection 
          bg="bg-feduzzi-red" 
          text="“Feduzzi is als een familie en zo voelt het ook om hier te werken.”" 
        />
        <FormSection />
      </main>
      <Footer />
    </div>
  );
};

export default App;