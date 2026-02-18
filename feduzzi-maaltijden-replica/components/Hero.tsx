import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative w-full h-[60vh] md:h-[80vh] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.squarespace-cdn.com/content/v1/65d0ba3a3921ea6aa4f09569/a0a7f786-ef07-4280-b0c4-2632340fa863/Authentiek+Italiaans+restaurant%2C+Italiaans+restaurant+Amsterdam%2C+Italiaans+restaurant+omgeving+Amsterdam13.jpeg" 
          alt="Authentieke Italiaanse maaltijden" 
          className="w-full h-full object-cover object-[50%_32%]"
        />
        <div className="absolute inset-0 bg-black/20"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 mt-20">
        <h1 className="text-4xl md:text-6xl font-serif mb-4 tracking-wide">
          Italiaanse maaltijden
        </h1>
        <p className="text-lg md:text-xl font-light tracking-wider opacity-90">
          Proef de authentieke Italiaanse keuken
        </p>
      </div>
    </section>
  );
};

export default Hero;
