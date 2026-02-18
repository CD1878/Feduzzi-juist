import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative h-[65vh] w-full overflow-hidden flex items-center justify-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=2874&auto=format&fit=crop" 
          alt="Italian Panini" 
          className="w-full h-full object-cover"
        />
        {/* Overlay gradient/tint */}
        <div className="absolute inset-0 bg-black/30"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 mt-16">
        <h1 className="font-playfair text-5xl md:text-7xl mb-4 font-light tracking-wide">
          Heerlijke Broodjes
        </h1>
        <p className="text-lg md:text-xl font-sans tracking-wide mb-12 opacity-90 font-light">
          Rijk belegd met jouw favoriete ingrediënten
        </p>
        
        <div className="flex flex-col items-center gap-2">
          <a 
            href="#" 
            className="inline-block px-8 py-3 border border-white text-white uppercase tracking-widest text-sm hover:bg-white hover:text-feduzzi-red transition-colors duration-300"
          >
            Broodjes online bestellen
          </a>
          <span className="text-[11px] uppercase tracking-wide opacity-80 mt-1">
            minimaal 24 uur van te voren
          </span>
        </div>
      </div>
    </section>
  );
};

export default Hero;