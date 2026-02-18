import React from 'react';
import { Link } from 'react-router-dom';

const CTAStrip: React.FC = () => {
    return (
        <section className="bg-feduzzi-red py-16 flex flex-col justify-center items-center text-center">
            <Link
                to="/webshop#broodjes"
                className="border border-white text-white bg-transparent px-8 py-4 rounded-md font-sans text-lg tracking-wide hover:bg-white hover:text-feduzzi-red transition-all duration-300 mb-4"
            >
                Broodjes online bestellen
            </Link>
            <span className="text-white/80 text-sm font-sans tracking-wide">
                minimaal 24 uur van te voren
            </span>
        </section>
    );
};

export default CTAStrip;
