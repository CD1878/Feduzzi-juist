import React from 'react';

const Hero: React.FC = () => {
    return (
        <section className="relative h-[60vh] md:h-[70vh] w-full bg-amsterdam-hero bg-cover bg-center bg-no-repeat flex items-center justify-center">
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/30"></div>

            <div className="relative z-10 text-center text-white px-4">
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif mb-6 tracking-wide">
                    Feduzzi Amsterdam
                </h1>
                <p className="text-lg md:text-xl lg:text-2xl font-sans font-light tracking-wide max-w-2xl mx-auto">
                    Bestel je favoriete gerecht via het formulier hieronder
                </p>
            </div>
        </section>
    );
};

export default Hero;
