import React, { useState } from 'react';
import { Calendar, Clock } from 'lucide-react';

const OrderForm: React.FC = () => {
  // We're building the UI, no backend logic connected
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Bedankt voor uw bestelling!');
  };

  return (
    <section className="bg-white py-24 px-4">
      <div className="max-w-[800px] mx-auto">
        
        {/* Form Header */}
        <div className="text-center mb-12">
          <h2 className="font-serif text-4xl md:text-5xl text-feduzzi-dark mb-6 leading-tight">
            Geef eenvoudig online je maaltijd of catering<br />bestelling door voor Feduzzi Laren
          </h2>
          <p className="font-sans text-lg text-gray-800">
            Nog vragen? Bel ons even! <a href="tel:0622038090" className="underline hover:text-feduzzi-red">0622038090</a>
          </p>
        </div>

        {/* The Form */}
        <form onSubmit={handleSubmit} className="space-y-8 font-sans text-gray-800">
          
          {/* Name Header */}
          <div>
            <h3 className="text-lg mb-2">Naam</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs text-gray-500 mb-1">Voornaam (vereist)</label>
                <input 
                  type="text" 
                  required
                  className="w-full border border-gray-400 rounded-md p-3 focus:outline-none focus:border-feduzzi-red transition-colors"
                />
              </div>
              <div>
                <label className="block text-xs text-gray-500 mb-1">Achternaam (vereist)</label>
                <input 
                  type="text" 
                  required
                  className="w-full border border-gray-400 rounded-md p-3 focus:outline-none focus:border-feduzzi-red transition-colors"
                />
              </div>
            </div>
          </div>

          {/* Email */}
          <div>
            <label className="block text-lg mb-1">Email <span className="text-xs text-gray-500 font-normal">(vereist)</span></label>
            <input 
              type="email" 
              required
              className="w-full border border-gray-400 rounded-md p-3 focus:outline-none focus:border-feduzzi-red transition-colors"
            />
          </div>

          {/* Phone */}
          <div>
            <label className="block text-lg mb-1">Telefoonnummer <span className="text-xs text-gray-500 font-normal">(vereist)</span></label>
            <input 
              type="tel" 
              required
              className="w-full border border-gray-400 rounded-md p-3 focus:outline-none focus:border-feduzzi-red transition-colors"
            />
          </div>

          {/* Order Details */}
          <div>
            <label className="block text-lg mb-1">Geef hier je bestelling door</label>
            <textarea 
              rows={4}
              className="w-full border border-gray-400 rounded-md p-3 focus:outline-none focus:border-feduzzi-red transition-colors resize-y"
            ></textarea>
          </div>

          {/* Delivery/Pickup */}
          <div>
            <label className="block text-lg mb-1">Bezorgen of ophalen? <span className="text-xs text-gray-500 font-normal">(vereist)</span></label>
            <p className="text-xs text-gray-500 mb-3">Wij bezorgen alleen bij bestellingen voor 20 personen of meer.</p>
            <div className="flex space-x-6">
              <label className="flex items-center space-x-2 cursor-pointer">
                <input type="checkbox" className="w-5 h-5 border-gray-400 rounded text-feduzzi-red focus:ring-feduzzi-red" />
                <span>Bezorgen (20 + pers.)</span>
              </label>
              <label className="flex items-center space-x-2 cursor-pointer">
                <input type="checkbox" className="w-5 h-5 border-gray-400 rounded text-feduzzi-red focus:ring-feduzzi-red" />
                <span>Ophalen</span>
              </label>
            </div>
          </div>

          {/* Date */}
          <div>
            <label className="block text-lg mb-1">Wanneer wil je het laten bezorgen of ophalen? <span className="text-xs text-gray-500 font-normal">(vereist)</span></label>
            <p className="text-xs text-gray-500 mb-2">*Op zondagen niet mogelijk</p>
            <div className="relative max-w-[200px]">
              <input 
                type="date" 
                placeholder="dd-mm-jjjj"
                className="w-full border border-gray-400 rounded-md p-3 pr-10 focus:outline-none focus:border-feduzzi-red transition-colors appearance-none"
              />
              <Calendar className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none" size={18} />
            </div>
          </div>

          {/* Time */}
          <div>
            <label className="block text-lg mb-1">Indien ophalen: hoe laat wil je je bestelling ophalen? <span className="text-xs text-gray-500 font-normal">(vereist)</span></label>
            <div className="relative max-w-[200px]">
              <input 
                type="time" 
                className="w-full border border-gray-400 rounded-md p-3 pr-10 focus:outline-none focus:border-feduzzi-red transition-colors appearance-none"
              />
              <Clock className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none" size={18} />
            </div>
            <p className="text-xs text-gray-500 mt-1">in Midden-Europese tijd</p>
          </div>

          {/* Extras */}
          <div>
            <label className="block text-lg mb-1">Extra's en dieetwensen</label>
            <textarea 
              rows={4}
              className="w-full border border-gray-400 rounded-md p-3 focus:outline-none focus:border-feduzzi-red transition-colors resize-y"
            ></textarea>
          </div>

          {/* Submit Button */}
          <div>
            <button 
              type="submit"
              className="bg-feduzzi-red text-white text-lg px-8 py-3 rounded-md hover:bg-red-900 transition-colors"
            >
              Verzenden
            </button>
          </div>

        </form>
      </div>
    </section>
  );
};

export default OrderForm;