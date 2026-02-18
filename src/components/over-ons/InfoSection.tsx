import React from 'react';

const InfoSection: React.FC = () => {
    return (
        <section className="bg-white w-full pb-16 md:pb-24">
            <div className="max-w-[1200px] mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

                {/* Images (Left on desktop) */}
                <div className="order-2 md:order-1 flex justify-center md:justify-start">
                    <div className="w-full max-w-md aspect-square overflow-hidden rounded-md shadow-sm">
                        <img
                            src="https://images.squarespace-cdn.com/content/v1/65d0ba3a3921ea6aa4f09569/a571bc2c-a658-4f6e-86b3-283768d46ed1/366710342_18189725020287593_8987252699585713853_n.jpg"
                            alt="Salad"
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>

                {/* Text Content (Right on desktop) */}
                <div className="order-1 md:order-2 text-left">
                    <h2 className="text-feduzzi-red text-3xl md:text-4xl font-serif font-light mb-6">
                        Wat is Feduzzi?
                    </h2>
                    <div className="text-gray-800 space-y-4 font-sans text-base md:text-lg leading-relaxed font-light">
                        <p>
                            Feduzzi Mercato Italiano is een Italiaanse delicatessenwinkel, lunchroom en traiteur. Wij verkopen broodjes, pasta’s, salades, wijnen, koffie, diverse soorten balsamico en olijfolie, kazen en vleeswaren. Dit kan ook allemaal bij ons in de winkel gegeten en gedronken worden. Verder hebben wij ook allerlei mooie Italiaanse producten in onze mercado voor thuis.
                        </p>
                        <p>
                            Wij focussen ons het meest op afhaal. Denk aan belegde broodjes voor de lunch, een heerlijk diner voor thuis, borrelhapjes voor een feestje, maar ook kunnen wij een menu voor u samenstellen voor bijvoorbeeld zakelijke lunches of diners.
                        </p>
                        <p>
                            Feduzzi bestaat al sinds 1981 en is dan ook de eerste Italiaanse delicatessenwinkel in Amsterdam.
                        </p>
                    </div>

                    <div className="mt-8">
                        <a
                            href="/menu"
                            className="inline-block bg-feduzzi-red text-white px-8 py-3 rounded-sm font-medium hover:bg-red-800 transition-colors"
                        >
                            Bekijk ons menu
                        </a>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default InfoSection;
