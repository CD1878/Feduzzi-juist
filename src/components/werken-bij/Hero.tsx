import React from 'react';

const Hero: React.FC = () => {
    return (
        <section className="relative h-[60vh] md:h-[70vh] min-h-[500px] w-full bg-careers-hero bg-cover bg-center bg-no-repeat flex items-center justify-center">
            <div className="absolute inset-0 bg-black/30"></div>
            <div className="relative z-10 text-center text-white px-4">
                <h1 className="font-serif italic text-4xl md:text-6xl mb-4 font-light">Become part of the family</h1>
                <p className="font-sans text-lg md:text-xl tracking-wide font-light max-w-2xl mx-auto">
                    En leer ook hoe je authentieke Italiaanse gerechten bereidt
                </p>
            </div>
        </section>
    );
};

export default Hero;
