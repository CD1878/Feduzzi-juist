import React from 'react';

const AboutSection: React.FC = () => {
  return (
    <section className="bg-white w-full py-16 md:py-32 overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        {/* Text Content */}
        <div className="order-1 md:order-1 text-center md:text-left md:pr-12">
          <h2 className="text-feduzziRed text-3xl md:text-4xl font-serif font-light mb-6">
            Wie zijn wij?....
          </h2>
          <div className="text-gray-800 space-y-4 font-sans text-base md:text-lg leading-relaxed font-light">
            <p>
              Wij zijn Nick en Nees Oostrum, twee broers die samen hun passie voor horeca, ondernemen en Italiaans eten delen. Nick heeft 10 jaar ervaring met Italiaans eten, Italiaanse delicatessen en de Italiaanse cultuur. Nees deed zijn ervaring op bij verschillende restaurants van Ron Blaauw. Zo zijn wij, samen met een stel andere gedreven collega’s, het perfecte team om u een geweldige ervaring te geven in onze winkel in Amsterdam. Wanneer komt u langs?
            </p>
          </div>
        </div>

        {/* Images Composition */}
        <div className="order-2 md:order-2 relative min-h-[400px] md:min-h-[600px] flex items-center justify-center md:justify-end">
          {/* Background Image (Shelves) */}
          <div className="absolute right-0 top-0 bottom-0 w-[85%] md:w-[75%] h-full overflow-hidden">
             <img 
              src="https://images.squarespace-cdn.com/content/v1/65d0ba3a3921ea6aa4f09569/ba76b61d-6d42-4492-a035-85bb9954fe04/Authentiek+Italiaans+restaurant%2C+Italiaans+restaurant+Amsterdam%2C+Italiaans+restaurant+omgeving+Amsterdam16.jpeg"
              alt="Feduzzi Shelves"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Foreground Image (Dessert) - Overlapping */}
          <div className="relative z-10 w-[60%] md:w-[50%] mr-[35%] md:mr-[45%] shadow-xl">
            <div className="aspect-[2/3] overflow-hidden rounded-lg bg-white p-2">
                 <img 
                  src="https://images.squarespace-cdn.com/content/v1/65d0ba3a3921ea6aa4f09569/f7c63f91-3b54-4ed7-ac76-2c88f378e342/Authentiek+Italiaans+restaurant%2C+Italiaans+restaurant+Amsterdam%2C+Italiaans+restaurant+omgeving+Amsterdam3.jpeg"
                  alt="Italian Dessert"
                  className="w-full h-full object-cover rounded"
                />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default AboutSection;