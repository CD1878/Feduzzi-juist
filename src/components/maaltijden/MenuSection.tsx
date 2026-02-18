import React from 'react';
import { MenuSectionData } from './types';

const MenuSection: React.FC<MenuSectionData> = ({ title, items, imageSrc, imageAlt, imagePosition }) => {
    return (
        <section className="py-16 md:py-24 max-w-site mx-auto px-4 md:px-12">
            {/* Title with Green Bar Background */}
            <div className="flex justify-center mb-12 md:mb-16">
                <div className="relative inline-block text-center">
                    <div className="bg-feduzzi-green text-white px-4 md:px-12 py-1 md:py-2 min-w-[280px] md:min-w-[400px] shadow-sm transform -skew-x-6">
                        <h2 className="text-2xl md:text-4xl font-serif text-white transform skew-x-6 drop-shadow-sm">{title}</h2>
                    </div>
                </div>
            </div>

            <div className={`flex flex-col md:flex-row gap-8 md:gap-16 items-start ${imagePosition === 'right' ? 'md:flex-row-reverse' : ''}`}>

                {/* Image */}
                <div className="w-full md:w-1/2">
                    <div className="aspect-[4/5] w-full overflow-hidden rounded-lg shadow-lg">
                        <img
                            src={imageSrc}
                            alt={imageAlt}
                            className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                        />
                    </div>
                </div>

                {/* Menu Items */}
                <div className="w-full md:w-1/2 flex flex-col justify-center h-full pt-4 md:pt-12">
                    <div className="space-y-10">
                        {items.map((item, index) => (
                            <div key={index} className="flex flex-col w-full group">
                                <div className="flex justify-between items-baseline border-b border-transparent group-hover:border-gray-200 transition-colors pb-1 mb-1">
                                    <h3 className="text-sm md:text-base uppercase tracking-widest font-sans text-gray-800">
                                        {item.title}
                                    </h3>
                                    <span className="text-sm md:text-base font-sans ml-4 text-gray-800">
                                        {item.price}
                                    </span>
                                </div>
                                <p className="text-sm md:text-base text-gray-500 font-light font-sans">
                                    {item.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
};

export default MenuSection;
