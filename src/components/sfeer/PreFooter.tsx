import React from 'react';
import { Link } from 'react-router-dom';

const PreFooter: React.FC = () => {
    return (
        <div className="py-24 bg-white flex justify-center items-center">
            <Link
                to="/menu"
                className="bg-[#6B8E6B] text-white px-8 py-3 font-sans font-medium text-sm uppercase tracking-widest hover:bg-[#5a7a5a] transition-colors rounded-sm"
            >
                Bekijk ons menu
            </Link>
        </div>
    );
};

export default PreFooter;
