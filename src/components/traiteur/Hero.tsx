import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Hero: React.FC = () => {
    const location = useLocation();

    // Helper to determine active state (though on this page "Traiteur" is always active)
    const isActive = (path: string) => location.pathname === path;

    return (
        <div className="relative w-full h-[50vh] md:h-[60vh] flex items-center justify-center overflow-hidden">
            {/* Background Image with Overlay */}
            <div className="absolute inset-0 z-0">
                <img
                    src="https://images.squarespace-cdn.com/content/v1/65d0ba3a3921ea6aa4f09569/0487a6c1-d561-4705-9c50-95dd758c13b9/366812388_18189725005287593_995257834228342735_n.jpg?format=2500w"
                    alt="Feduzzi Catering Spread"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/40"></div>
            </div>

            {/* Content */}
            <div className="relative z-10 text-center text-white px-4">
                <h1 className="text-4xl md:text-6xl font-serif mb-4 drop-shadow-md">Traiteur / Catering</h1>
                <p className="text-lg md:text-xl font-light tracking-wide drop-shadow-sm mb-12">
                    Verfijnde Italiaanse maaltijden aan je deur
                </p>

                {/* Sub Navigation in Hero */}
                <div className="flex flex-wrap justify-center gap-8 md:gap-16 text-lg md:text-2xl font-light tracking-wide border-t border-white/30 pt-8 mt-8">
                    <Link to="/menu/maaltijden" className="hover:text-gray-200 transition-colors">Maaltijden</Link>
                    <Link to="/menu#broodjes" className="hover:text-gray-200 transition-colors">Broodjes</Link>
                    <span className="font-normal border-b-2 border-white pb-1 cursor-default">Traiteur</span>
                </div>
            </div>
        </div>
    );
};

export default Hero;
