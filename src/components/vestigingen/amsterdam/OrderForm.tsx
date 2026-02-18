import React from 'react';

const OrderForm: React.FC = () => {
    return (
        <section id="order" className="py-24 bg-white">
            <div className="max-w-3xl mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-serif text-gray-800 mb-6 leading-tight">
                        Geef eenvoudig online je maaltijd of catering bestelling door voor Feduzzi Amsterdam
                    </h2>
                    <p className="text-lg font-sans font-light mt-8">
                        Nog vragen? Bel ons even <a href="tel:0206646365" className="underline hover:text-feduzzi-red">020-6646365</a>
                    </p>
                </div>

                <form className="space-y-8 font-sans" onSubmit={(e) => e.preventDefault()}>

                    {/* Name */}
                    <div className="space-y-2">
                        <label className="block text-base font-normal text-gray-800 mb-2">Naam</label>
                        <div className="flex flex-col md:flex-row gap-4">
                            <div className="flex-1">
                                <span className="block text-xs text-gray-500 mb-1">Voornaam (vereist)</span>
                                <input type="text" className="w-full p-3 border border-gray-400 rounded-sm focus:outline-none focus:border-black transition-colors bg-white" required />
                            </div>
                            <div className="flex-1">
                                <span className="block text-xs text-gray-500 mb-1">Achternaam (vereist)</span>
                                <input type="text" className="w-full p-3 border border-gray-400 rounded-sm focus:outline-none focus:border-black transition-colors bg-white" required />
                            </div>
                        </div>
                    </div>

                    {/* Email */}
                    <div className="space-y-1">
                        <label className="block text-base font-normal text-gray-800">Email <span className="text-xs text-gray-500 font-light ml-1">(vereist)</span></label>
                        <input type="email" className="w-full p-3 border border-gray-400 rounded-sm focus:outline-none focus:border-black transition-colors bg-white" required />
                    </div>

                    {/* Phone */}
                    <div className="space-y-1">
                        <label className="block text-base font-normal text-gray-800">Telefoonnummer <span className="text-xs text-gray-500 font-light ml-1">(vereist)</span></label>
                        <input type="tel" className="w-full p-3 border border-gray-400 rounded-sm focus:outline-none focus:border-black transition-colors bg-white" required />
                    </div>

                    {/* Order Details */}
                    <div className="space-y-1">
                        <label className="block text-base font-normal text-gray-800 mb-1">Geef hier je bestelling door</label>
                        <textarea rows={4} className="w-full p-3 border border-gray-400 rounded-sm focus:outline-none focus:border-black transition-colors bg-white"></textarea>
                    </div>

                    {/* Delivery/Pickup */}
                    <div className="space-y-3">
                        <label className="block text-base font-normal text-gray-800">Bezorgen of ophalen? <span className="text-xs text-gray-500 font-light ml-1">(vereist)</span></label>
                        <p className="text-xs text-gray-500 mb-2">Wij bezorgen alleen bij bestellingen voor 20 personen of meer.</p>
                        <div className="flex gap-6">
                            <label className="flex items-center gap-2 cursor-pointer">
                                <input type="checkbox" className="w-5 h-5 border-gray-400 rounded-sm text-feduzzi-red focus:ring-0" />
                                <span className="text-sm font-light">Bezorgen (20 + pers.)</span>
                            </label>
                            <label className="flex items-center gap-2 cursor-pointer">
                                <input type="checkbox" className="w-5 h-5 border-gray-400 rounded-sm text-feduzzi-red focus:ring-0" />
                                <span className="text-sm font-light">Ophalen</span>
                            </label>
                        </div>
                    </div>

                    {/* Date */}
                    <div className="space-y-1">
                        <label className="block text-base font-normal text-gray-800">Wanneer wil je het laten bezorgen of ophalen? <span className="text-xs text-gray-500 font-light ml-1">(vereist)</span></label>
                        <p className="text-xs text-gray-500 mb-2">*Op zondagen niet mogelijk</p>
                        <input type="date" className="w-full md:w-1/2 p-3 border border-gray-400 rounded-sm focus:outline-none focus:border-black transition-colors bg-white" required />
                    </div>

                    {/* Time */}
                    <div className="space-y-1">
                        <label className="block text-base font-normal text-gray-800">Indien ophalen: hoe laat wil je je bestelling ophalen? <span className="text-xs text-gray-500 font-light ml-1">(vereist)</span></label>
                        <div className="flex items-center gap-2">
                            <input type="time" className="w-full md:w-1/3 p-3 border border-gray-400 rounded-sm focus:outline-none focus:border-black transition-colors bg-white" />
                        </div>
                        <p className="text-xs text-gray-500 mt-1">in Midden-Europese tijd</p>
                    </div>

                    {/* Extras */}
                    <div className="space-y-1">
                        <label className="block text-base font-normal text-gray-800 mb-1">Extra's en dieetwensen</label>
                        <textarea rows={4} className="w-full p-3 border border-gray-400 rounded-sm focus:outline-none focus:border-black transition-colors bg-white"></textarea>
                    </div>

                    {/* Submit */}
                    <div className="pt-4">
                        <button type="submit" className="bg-feduzzi-red text-white px-8 py-3 rounded-md text-lg hover:bg-[#6e1826] transition-colors duration-300">
                            Verzenden
                        </button>
                    </div>

                </form>
            </div>
        </section>
    );
};

export default OrderForm;
