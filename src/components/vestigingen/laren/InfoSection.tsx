import React from 'react';
import { Instagram, Facebook } from 'lucide-react';

const InfoSection: React.FC = () => {
    return (
        <section className="bg-white pt-24 pb-0">
            <div className="max-w-[1200px] mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center mb-16">

                    {/* Location Column */}
                    <div className="flex flex-col items-center">
                        <h2 className="font-serif text-4xl text-feduzzi-red mb-6">Locatie</h2>
                        <div className="font-sans text-lg text-gray-800 leading-relaxed">
                            <p>Torenlaan 8</p>
                            <p>1251 HJ Laren</p>
                            <a href="https://maps.app.goo.gl/YourMapLinkHere" target="_blank" rel="noopener noreferrer" className="text-feduzzi-red underline mt-2 block hover:text-red-900">
                                Route
                            </a>
                        </div>
                    </div>

                    {/* Hours Column */}
                    <div className="flex flex-col items-center">
                        <h2 className="font-serif text-4xl text-feduzzi-red mb-6">Openingstijden</h2>
                        <div className="font-sans text-lg text-gray-800 leading-relaxed">
                            <p className="mb-2">Maandag<br />11:00 - 18:30</p>
                            <p className="mb-2">Dinsdag - Vrijdag<br />10:00 - 18:30</p>
                            <p>Zaterdag<br />10:00 - 17:00</p>
                        </div>
                    </div>

                    {/* Contact Column */}
                    <div className="flex flex-col items-center">
                        <h2 className="font-serif text-4xl text-feduzzi-red mb-6">Contact</h2>
                        <div className="font-sans text-lg text-gray-800 leading-relaxed">
                            <a href="mailto:laren@feduzzi.nl" className="block text-feduzzi-red underline hover:text-red-900 mb-1">
                                laren@feduzzi.nl
                            </a>
                            <a href="tel:0622038090" className="block text-feduzzi-red underline hover:text-red-900 mb-4">
                                0622038090
                            </a>
                            <div className="flex space-x-4 justify-center text-black">
                                <a href="#" className="hover:text-feduzzi-red transition-colors"><Facebook size={20} /></a>
                                <a href="#" className="hover:text-feduzzi-red transition-colors"><Instagram size={20} /></a>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            {/* Map Section - Full Width */}
            <div className="w-full h-[400px] bg-gray-100 relative map-container overflow-hidden">
                {/* Using a placeholder map image to match the "no API key" requirement but simulating the look */}
                {/* In production, this would be a Google Maps Embed API iframe */}
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2439.664273574229!2d5.224234515802526!3d52.25792307976527!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c6152672e3d0e7%3A0x5146f149823b969b!2sTorenlaan%208%2C%201251%20HJ%20Laren!5e0!3m2!1sen!2snl!4v1629812345678!5m2!1sen!2snl"
                    width="100%"
                    height="100%"
                    style={{ border: 0, filter: 'grayscale(20%) contrast(1.1) opacity(0.9)' }}
                    allowFullScreen={true}
                    loading="lazy"
                    title="Feduzzi Laren Map"
                ></iframe>
            </div>
        </section>
    );
};

export default InfoSection;
