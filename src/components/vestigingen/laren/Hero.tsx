import React from 'react';

const Hero: React.FC = () => {
    return (
        <section className="relative h-[70vh] min-h-[600px] w-full overflow-hidden">
            {/* Background Image */}
            <div
                className="absolute inset-0 bg-laren-hero bg-cover bg-center bg-no-repeat"
                style={{
                    backgroundPosition: 'center 40%'
                }}
            />

            {/* Gradient Overlay for text readability */}
            <div className="absolute inset-0 bg-black/20" />

            {/* Content */}
            <div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-4 pt-20">
                <h1 className="font-serif text-5xl md:text-7xl text-white mb-6 drop-shadow-lg">
                    Feduzzi Laren
                </h1>
                <p className="font-sans text-xl md:text-2xl text-white max-w-2xl drop-shadow-md tracking-wide">
                    Bestel je favoriete gerecht via het formulier hieronder
                </p>
            </div>
        </section>
    );
};

export default Hero;
