import React from 'react';
import { Play } from 'lucide-react';
import { GALLERY_ITEMS } from '../../constants/sfeer';

const Gallery: React.FC = () => {
    return (
        <section className="bg-white py-16 md:py-24">
            <div className="container mx-auto px-4 md:px-12 max-w-[1400px]">
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-4 md:gap-8 lg:gap-10">
                    {GALLERY_ITEMS.map((item) => (
                        <div
                            key={item.id}
                            className="relative aspect-square group overflow-hidden cursor-pointer bg-gray-100"
                        >
                            <img
                                src={item.src}
                                alt={item.alt}
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                loading="lazy"
                            />

                            {/* Video Indicator */}
                            {item.type === 'video' && (
                                <div className="absolute top-2 right-2 text-white drop-shadow-md">
                                    <Play size={20} fill="currentColor" strokeWidth={0} />
                                </div>
                            )}

                            {/* Hover Overlay */}
                            <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                {item.type === 'video' && (
                                    <Play size={48} className="text-white opacity-80" fill="currentColor" />
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Gallery;
