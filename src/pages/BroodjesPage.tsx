import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { PANINI_ITEMS, HOT_PANINI_ITEMS, MenuSection as MenuSectionType, MenuItem as MenuItemType } from '../constants/broodjes';

const MenuItemRow: React.FC<MenuItemType> = ({ name, description, price }) => (
    <div className="flex justify-between items-baseline mb-8 group">
        <div className="pr-4 md:pr-12 max-w-[85%]">
            <h3 className="font-serif text-lg text-gray-800 tracking-wide mb-1">{name}</h3>
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
                    <h2 className="font-serif text-3xl md:text-4xl text-gray-800 uppercase tracking-widest relative z-10">
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

const BroodjesPage: React.FC = () => {
    return (
        <div className="min-h-screen bg-white flex flex-col">
            <Header />
            <main className="flex-grow">
                {/* Hero Section */}
                <section className="relative h-[40vh] md:h-[50vh] bg-cover bg-center bg-no-repeat flex items-center justify-center" style={{ backgroundImage: 'url("https://images.squarespace-cdn.com/content/v1/65d0ba3a3921ea6aa4f09569/3841bf8c-c54c-4f60-b994-6454f78f8635/379057150_18194403076287593_862347559648358630_n.jpg")' }}>
                    <div className="absolute inset-0 bg-black/40"></div>
                    <div className="relative z-10 text-center px-4">
                        <h1 className="text-white font-serif text-4xl md:text-6xl font-light tracking-wide">
                            Onze Broodjes
                        </h1>
                    </div>
                </section>

                <div className="bg-feduzzi-cream py-16 md:py-24">
                    {/* Cold Panini */}
                    <Section section={PANINI_ITEMS} greenHighlight={true} />

                    {/* Hot Panini */}
                    <Section section={HOT_PANINI_ITEMS} greenHighlight={true} />

                    {/* Bottom CTA */}
                    <div className="text-center mt-12 pb-12">
                        <div className="flex flex-col items-center gap-2">
                            <Link to="/webshop" className="border border-feduzzi-green text-feduzzi-green px-10 py-4 uppercase tracking-widest text-sm rounded-[3px] hover:bg-feduzzi-green hover:text-white transition-colors shadow-sm bg-white">
                                Broodjes online bestellen
                            </Link>
                            <span className="text-[10px] text-gray-500 uppercase tracking-wide mt-1">
                                minimaal 24 uur van te voren
                            </span>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default BroodjesPage;
