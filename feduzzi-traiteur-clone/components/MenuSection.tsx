import React from 'react';
import { MenuSectionProps } from '../types';

const MenuSection: React.FC<MenuSectionProps> = ({ title, items, imageSrc, imageAlt, imagePosition = 'right' }) => {
  const formatPrice = (price: number) => {
    return `€${price.toFixed(2).replace('.', ',')}`;
  };

  const ContentBlock = (
    <div className="flex-1 px-4 lg:px-8 flex flex-col justify-center">
      {/* Title Badge */}
      <div className="flex justify-center lg:justify-start mb-12">
        <div className="bg-feduzzi-green text-white py-2 px-8 rounded-lg shadow-sm">
          <h2 className="text-xl lg:text-2xl font-serif tracking-wide">{title}</h2>
        </div>
      </div>

      {/* Menu Items */}
      <div className="space-y-10">
        {items.map((item, index) => (
          <div key={index} className="flex justify-between items-start group">
            <div className="pr-4 max-w-[80%]">
              <h3 className="text-sm font-light uppercase tracking-widest text-gray-800 mb-1">
                {item.title}
              </h3>
              <p className="text-sm text-gray-500 font-light leading-relaxed">
                {item.description}
              </p>
            </div>
            <div className="text-sm font-light text-gray-800 whitespace-nowrap">
              {formatPrice(item.price)}
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const ImageBlock = (
    <div className="flex-1 px-4 lg:px-8 flex justify-center items-center">
      <div className="relative w-full max-w-md aspect-square overflow-hidden rounded-lg shadow-lg">
        <img 
          src={imageSrc} 
          alt={imageAlt} 
          className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
        />
      </div>
    </div>
  );

  return (
    <div className="max-w-7xl mx-auto py-16 lg:py-24 w-full">
      <div className="flex flex-col lg:flex-row gap-8 lg:gap-0">
        {imagePosition === 'left' ? (
          <>
            <div className="hidden lg:block contents">
               {ImageBlock}
               {ContentBlock}
            </div>
            <div className="lg:hidden contents">
               {ContentBlock}
               {ImageBlock}
            </div>
          </>
        ) : (
          <>
            {ContentBlock}
            {ImageBlock}
          </>
        )}
      </div>
    </div>
  );
};

export default MenuSection;