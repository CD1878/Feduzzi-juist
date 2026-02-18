import React from 'react';

const InfoBar: React.FC = () => {
  return (
    <div className="w-full bg-[#1a1a1a] py-16 text-white">
      <div className="max-w-site mx-auto px-4 flex flex-col md:flex-row justify-center items-center gap-8 md:gap-24 text-xl md:text-2xl font-light tracking-wide">
        <a href="#" className="hover:opacity-70 transition-opacity">Catering</a>
        <a href="#" className="hover:opacity-70 transition-opacity">Broodjes</a>
        <a href="#" className="hover:opacity-70 transition-opacity">Traiteur</a>
      </div>
    </div>
  );
};

export default InfoBar;
