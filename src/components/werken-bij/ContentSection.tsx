import React from 'react';

const ContentSection: React.FC = () => {
    return (
        <section className="bg-white py-20 md:py-32">
            <div className="container mx-auto px-6 md:px-12 max-w-[1200px]">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    {/* Left Column: Staff Image */}
                    <div className="relative">
                        <img
                            src="https://images.squarespace-cdn.com/content/v1/65d0ba3a3921ea6aa4f09569/c285ad0e-c073-4bb1-8e91-39c70a2ad7f1/429685242_974952904365780_7748597416661500634_n.jpg?format=1000w"
                            alt="Feduzzi Team"
                            className="w-full h-auto object-cover grayscale brightness-90 contrast-110"
                        />
                    </div>

                    {/* Right Column: Text & Inset Image */}
                    <div className="flex flex-col gap-8 md:pl-8">
                        <div>
                            <h2 className="text-3xl md:text-4xl font-serif text-feduzzi-red mb-6 leading-tight">
                                Wil jij ook werken bij de leukste Italiaan van Amsterdam en authentiek Italiaans leren koken?
                            </h2>
                            <p className="font-sans text-gray-700 leading-relaxed text-lg font-light mb-6">
                                Vul dan het formulier hieronder in, hierna nemen we snel contact met je op om je sollicitatie verder te bespreken en mogelijk een vrijblijvende proefdag te plannen. Ook bereik je ons <a href="tel:0206646365" className="border-b border-black text-black hover:opacity-70 transition-opacity">telefonisch</a>. We kijken ernaar uit om je te leren kennen!
                            </p>
                        </div>

                        {/* Inset Image - Styled to look like the collage in the original */}
                        <div className="relative md:-ml-24 mt-4 w-full md:w-3/4 self-start shadow-xl border-4 border-white">
                            <img
                                src="https://images.squarespace-cdn.com/content/v1/65d0ba3a3921ea6aa4f09569/cea656a4-d440-45d5-9ec6-1626458e3631/Authentiek+Italiaans+restaurant%2C+Italiaans+restaurant+Amsterdam%2C+Italiaans+restaurant+omgeving+Amsterdam29.jpeg?format=750w"
                                alt="Feduzzi Exterior"
                                className="w-full h-auto"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContentSection;
