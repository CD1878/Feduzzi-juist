import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative w-full h-[60vh] md:h-[85vh] bg-black overflow-hidden">
      {/* Background Image */}
      <img 
        src="https://images.squarespace-cdn.com/content/v1/65d0ba3a3921ea6aa4f09569/639d04c2-14c0-4ec9-98cd-52ebf17614a0/381364469_897651865024507_125673568422183898_n.jpg?format=2500w" 
        alt="Italian Food Background" 
        className="absolute inset-0 w-full h-full object-cover opacity-75"
        style={{ objectPosition: '62% 35%' }}
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/25"></div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center justify-center">
        <h1 className="text-white text-5xl md:text-7xl font-serif font-light tracking-wide text-center drop-shadow-md">
          Over Feduzzi
        </h1>
      </div>
    </section>
  );
};

export default Hero;