import React from 'react';
import { PANINI_ITEMS, HOT_PANINI_ITEMS } from '../constants';
import { MenuSection as MenuSectionType, MenuItem as MenuItemType } from '../types';

const MenuItemRow: React.FC<MenuItemType> = ({ name, description, price }) => (
  <div className="flex justify-between items-baseline mb-8 group">
    <div className="pr-4 md:pr-12 max-w-[85%]">
      <h3 className="font-playfair text-lg text-gray-800 tracking-wide mb-1">{name}</h3>
      <p className="font-sans text-gray-500 text-[15px] font-light leading-relaxed">{description}</p>
    </div>
    <div className="flex-shrink-0">
      <span className="font-sans text-gray-800 text-lg">{price}</span>
    </div>
  </div>
);

const Section: React.FC<{ section: MenuSectionType; greenHighlight?: boolean }> = ({ section, greenHighlight = false }) => {
  return (
    <div className="max-w-[700px] mx-auto px-6 py-12">
      <div className="text-center mb-12">
        <div className="relative inline-block">
          {greenHighlight && (
            <div className="absolute top-[40%] left-[30%] right-[-5%] h-[60%] bg-[#6b8e6b] opacity-80 -z-10 rounded-sm transform -rotate-1"></div>
          )}
          <h2 className="font-playfair text-3xl md:text-4xl text-gray-800 uppercase tracking-widest relative z-10">
            {section.title}
          </h2>
        </div>
        {section.subtitle && (
          <p className="mt-6 text-sm text-gray-600 uppercase tracking-widest font-sans">
            {section.subtitle}
          </p>
        )}
      </div>

      <div className="space-y-2">
        {section.items.map((item, idx) => (
          <MenuItemRow key={idx} {...item} />
        ))}
      </div>
    </div>
  );
};

const Menu: React.FC = () => {
  return (
    <div className="bg-white py-16 md:py-24">
      {/* Cold Panini */}
      <Section section={PANINI_ITEMS} greenHighlight={true} />

      {/* Hot Panini */}
      <Section section={HOT_PANINI_ITEMS} greenHighlight={true} />

      {/* Bottom CTA */}
      <div className="text-center mt-12 pb-12">
        <div className="flex flex-col items-center gap-2">
          <button className="bg-feduzzi-green text-white px-10 py-4 uppercase tracking-widest text-sm rounded-[3px] hover:bg-opacity-90 transition-opacity shadow-sm">
            Broodjes online bestellen
          </button>
          <span className="text-[10px] text-gray-500 uppercase tracking-wide mt-1">
            minimaal 24 uur van te voren
          </span>
        </div>
      </div>
    </div>
  );
};

export default Menu;