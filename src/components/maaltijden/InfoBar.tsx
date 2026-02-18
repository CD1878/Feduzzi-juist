import React from 'react';
import { Link } from 'react-router-dom';

const InfoBar: React.FC = () => {
    return (
        <div className="w-full bg-[#1a1a1a] py-16 text-white">
            <div className="max-w-site mx-auto px-4 flex flex-col md:flex-row justify-center items-center gap-8 md:gap-24 text-xl md:text-2xl font-light tracking-wide">
                <Link to="/menu#catering" className="hover:opacity-70 transition-opacity">Catering</Link>
                <Link to="/menu#broodjes" className="hover:opacity-70 transition-opacity">Broodjes</Link>
                <Link to="/menu#traiteur" className="hover:opacity-70 transition-opacity">Traiteur</Link>
            </div>
        </div>
    );
};

export default InfoBar;
