import React from 'react';

const ActionButtons: React.FC = () => {
    return (
        <div className="w-full bg-feduzzi-cream py-16">
            <div className="flex flex-col md:flex-row justify-center gap-6 px-4">
                <a href="#" className="bg-feduzzi-green text-white py-4 px-8 uppercase text-sm tracking-widest hover:bg-opacity-90 transition-all text-center min-w-[280px]">
                    Bestellen bij Feduzzi Amsterdam
                </a>
                <a href="#" className="bg-feduzzi-green text-white py-4 px-8 uppercase text-sm tracking-widest hover:bg-opacity-90 transition-all text-center min-w-[280px]">
                    Bestellen bij Feduzzi Laren
                </a>
            </div>
        </div>
    );
};

export default ActionButtons;
