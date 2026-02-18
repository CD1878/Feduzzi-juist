import React from 'react';
import { Facebook, Instagram } from 'lucide-react';

const InfoGrid: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
          
          {/* Location */}
          <div className="flex flex-col items-center">
            <h2 className="text-3xl md:text-4xl font-serif text-feduzzi-red mb-6">Locatie</h2>
            <div className="font-sans text-lg leading-relaxed text-gray-800">
              <p>Scheldestraat 63</p>
              <p>1078 GH Amsterdam</p>
              <a href="#" className="underline mt-2 inline-block hover:text-feduzzi-red transition-colors">Route</a>
            </div>
          </div>

          {/* Opening Hours */}
          <div className="flex flex-col items-center">
            <h2 className="text-3xl md:text-4xl font-serif text-feduzzi-red mb-6">Openingstijden</h2>
            <div className="font-sans text-lg leading-relaxed text-gray-800">
              <p className="mb-4">
                Maandag - Vrijdag<br />
                10:30 - 18:00
              </p>
              <p>
                Zaterdag<br />
                10:00 - 17:00
              </p>
            </div>
          </div>

          {/* Contact */}
          <div className="flex flex-col items-center">
            <h2 className="text-3xl md:text-4xl font-serif text-feduzzi-red mb-6">Contact</h2>
            <div className="font-sans text-lg leading-relaxed text-gray-800">
              <a href="mailto:info@feduzzi.nl" className="block hover:text-feduzzi-red transition-colors">info@feduzzi.nl</a>
              <a href="tel:0206646365" className="block hover:text-feduzzi-red transition-colors underline mb-4">020-6646365</a>
              
              <div className="flex gap-4 justify-center mt-2">
                <a href="#" className="text-black hover:text-feduzzi-red transition-colors">
                  <Facebook size={20} strokeWidth={1.5} />
                </a>
                <a href="#" className="text-black hover:text-feduzzi-red transition-colors">
                  <Instagram size={20} strokeWidth={1.5} />
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default InfoGrid;