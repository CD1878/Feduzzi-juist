import React from 'react';
import { Link } from 'react-router-dom';

const RedCTA: React.FC = () => {
    return (
        <section id="cta" className="bg-feduzzi-red py-24 text-center text-white">
            <div className="max-w-4xl mx-auto px-6">
                <div className="border border-white/30 p-1 inline-block rounded-sm mb-4">
                    <Link
                        to="/webshop#broodjes" // Scroll to order form
                        className="inline-block border border-white px-10 py-4 text-base uppercase tracking-widest hover:bg-white hover:text-feduzzi-red transition-colors duration-300 font-sans"
                    >
                        Broodjes online bestellen
                    </Link>
                </div>
                <p className="text-white/80 text-sm font-sans tracking-wide mt-2">
                    minimaal 24 uur van te voren
                </p>
            </div>
        </section>
    );
};

export default RedCTA;
