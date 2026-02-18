import React from 'react';
import { ChevronDown } from 'lucide-react';

const FormSection: React.FC = () => {
    return (
        <section className="bg-white pb-20">
            <div className="container mx-auto px-6 md:px-12 max-w-[1200px]">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">

                    {/* Form Side */}
                    <div className="order-2 md:order-1">
                        <form className="flex flex-col gap-6" onSubmit={(e) => e.preventDefault()}>
                            <div className="flex flex-col gap-1">
                                <label className="text-[15px] font-sans text-gray-800">Name</label>
                                <div className="flex gap-4">
                                    <div className="w-1/2">
                                        <label className="text-xs text-gray-500 mb-1 block">Voornaam <span className="text-gray-400">(vereist)</span></label>
                                        <input type="text" className="w-full border border-gray-400 p-3 rounded-sm focus:outline-none focus:border-black transition-colors" />
                                    </div>
                                    <div className="w-1/2">
                                        <label className="text-xs text-gray-500 mb-1 block">Achternaam <span className="text-gray-400">(vereist)</span></label>
                                        <input type="text" className="w-full border border-gray-400 p-3 rounded-sm focus:outline-none focus:border-black transition-colors" />
                                    </div>
                                </div>
                            </div>

                            <div className="flex flex-col gap-1">
                                <label className="text-[15px] font-sans text-gray-800">Email <span className="text-xs text-gray-400 font-normal">(vereist)</span></label>
                                <input type="email" className="w-full border border-gray-400 p-3 rounded-sm focus:outline-none focus:border-black transition-colors" />
                            </div>

                            <div className="flex flex-col gap-1">
                                <label className="text-[15px] font-sans text-gray-800">Telefoonnummer <span className="text-xs text-gray-400 font-normal">(vereist)</span></label>
                                <input type="tel" className="w-full border border-gray-400 p-3 rounded-sm focus:outline-none focus:border-black transition-colors" />
                            </div>

                            <div className="flex flex-col gap-1">
                                <label className="text-[15px] font-sans text-gray-800">Geboortedatum <span className="text-xs text-gray-400 font-normal">(vereist)</span></label>
                                <div className="relative">
                                    <input type="date" className="w-full border border-gray-400 p-3 rounded-sm focus:outline-none focus:border-black transition-colors appearance-none bg-white" placeholder="dd-mm-jjjj" />
                                </div>
                            </div>

                            <div className="flex flex-col gap-1">
                                <label className="text-[15px] font-sans text-gray-800">Locatie <span className="text-xs text-gray-400 font-normal">(vereist)</span></label>
                                <p className="text-xs text-gray-500 mb-1">Waar wil je werken?</p>
                                <div className="relative">
                                    <select className="w-full border border-gray-400 p-3 rounded-sm focus:outline-none focus:border-black transition-colors appearance-none bg-white">
                                        <option value="" disabled selected>Select an option</option>
                                        <option value="amsterdam">Amsterdam</option>
                                        <option value="laren">Laren</option>
                                    </select>
                                    <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none" size={16} />
                                </div>
                            </div>

                            <div className="flex flex-col gap-1">
                                <label className="text-[15px] font-sans text-gray-800">Korte motivatie <span className="text-xs text-gray-400 font-normal">(vereist)</span></label>
                                <textarea rows={4} className="w-full border border-gray-400 p-3 rounded-sm focus:outline-none focus:border-black transition-colors"></textarea>
                            </div>

                            <button className="bg-feduzzi-green text-white font-sans uppercase tracking-widest text-sm font-bold py-4 px-8 mt-4 hover:opacity-90 transition-opacity self-start rounded-sm">
                                Verzenden
                            </button>
                        </form>
                    </div>

                    {/* Image Side */}
                    <div className="order-1 md:order-2 h-full min-h-[400px]">
                        <img
                            src="https://images.squarespace-cdn.com/content/v1/65d0ba3a3921ea6aa4f09569/9e3a08e0-332d-4ef1-858d-3f3eb80948e7/357529468_18183520678287593_8398006463779402327_n.jpg?format=1500w"
                            alt="Italian Food Display"
                            className="w-full h-full object-cover"
                        />
                    </div>

                </div>
            </div>
        </section>
    );
};

export default FormSection;
