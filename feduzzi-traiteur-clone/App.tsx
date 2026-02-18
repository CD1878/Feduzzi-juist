import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import MenuSection from './components/MenuSection';
import Footer from './components/Footer';
import { 
  schalenItems, 
  pastas1Items, 
  pastas2Items, 
  pastas3Items, 
  saladesItems, 
  vleesItems, 
  dessertsItems, 
  sidesItems 
} from './data/menuData';

const App: React.FC = () => {
  return (
    <div className="bg-white min-h-screen font-sans text-gray-900 selection:bg-feduzzi-green selection:text-white">
      <Header />
      <Hero />
      
      <main className="pb-24">
        {/* Section 1: Schalen */}
        <MenuSection 
          title="Schalen" 
          items={schalenItems}
          imageSrc="https://images.squarespace-cdn.com/content/v1/65d0ba3a3921ea6aa4f09569/66b2ecf9-bc45-4fa7-a4e2-c531c743b8db/Authentiek+Italiaans+restaurant%2C+Italiaans+restaurant+Amsterdam%2C+Italiaans+restaurant+omgeving+Amsterdam32.jpeg?format=1000w"
          imageAlt="Antipasti Schaal"
          imagePosition="right"
        />

        {/* Section 2: Pasta Part 1 */}
        <MenuSection 
          title="Pasta’s 350 gr per portie (1p)" 
          items={pastas1Items}
          imageSrc="https://images.squarespace-cdn.com/content/v1/65d0ba3a3921ea6aa4f09569/79a77524-d471-4efd-a2e7-8ff38bffe8c2/380536255_172926439119013_1414290766591190903_n.jpg?format=1500w"
          imageAlt="Pasta Dishes"
          imagePosition="left"
        />

        {/* Section 3: Pasta Part 2 */}
        <MenuSection 
          title="Pasta’s 350 gr per portie (1p)" 
          items={pastas2Items}
          imageSrc="https://images.squarespace-cdn.com/content/v1/65d0ba3a3921ea6aa4f09569/a571bc2c-a658-4f6e-86b3-283768d46ed1/366710342_18189725020287593_8987252699585713853_n.jpg?format=1500w"
          imageAlt="More Pasta Dishes"
          imagePosition="right"
        />

        {/* Section 4: Pasta Part 3 (Ravioli) */}
        <MenuSection 
          title="Pasta’s 350 gr per portie (1p)" 
          items={pastas3Items}
          imageSrc="https://images.squarespace-cdn.com/content/v1/65d0ba3a3921ea6aa4f09569/9f3fc96b-9522-4501-a757-b7c79f3de5ff/366290406_18189014512287593_3589940910848586939_n.jpg?format=1500w"
          imageAlt="Ravioli Dishes"
          imagePosition="left"
        />

        {/* Section 5: Salades */}
        <MenuSection 
          title="Salades 250g per portie (1p)" 
          items={saladesItems}
          imageSrc="https://images.squarespace-cdn.com/content/v1/65d0ba3a3921ea6aa4f09569/0aeab164-daa9-4a6c-be82-410f32c0a2b6/382771735_18195881530287593_8328699007573794873_n.jpg?format=1500w"
          imageAlt="Fresh Salads"
          imagePosition="right"
        />

        {/* Section 6: Vlees */}
        <MenuSection 
          title="Vlees 250g per portie (1p)" 
          items={vleesItems}
          imageSrc="https://images.squarespace-cdn.com/content/v1/65d0ba3a3921ea6aa4f09569/76efda26-6bac-4124-9953-f107ab10ded8/Authentiek+Italiaans+restaurant%2C+Italiaans+restaurant+Amsterdam%2C+Italiaans+restaurant+omgeving+Amsterdam14.jpeg?format=1500w"
          imageAlt="Meat Slicing"
          imagePosition="left"
        />

        {/* Section 7: Desserts */}
        <MenuSection 
          title="Desserts (1p)" 
          items={dessertsItems}
          imageSrc="https://images.squarespace-cdn.com/content/v1/65d0ba3a3921ea6aa4f09569/9f3fc96b-9522-4501-a757-b7c79f3de5ff/366290406_18189014512287593_3589940910848586939_n.jpg?format=1500w"
          imageAlt="Delicious Desserts"
          imagePosition="right"
        />

        {/* Section 8: Sides */}
        <MenuSection 
          title="Sides 250g per portie (1p)" 
          items={sidesItems}
          imageSrc="https://images.squarespace-cdn.com/content/v1/65d0ba3a3921ea6aa4f09569/0aeab164-daa9-4a6c-be82-410f32c0a2b6/382771735_18195881530287593_8328699007573794873_n.jpg?format=1500w"
          imageAlt="Vegetable Sides"
          imagePosition="left"
        />

        {/* Bottom CTA Buttons */}
        <div className="flex flex-col md:flex-row gap-6 justify-center items-center mt-20 mb-10 px-4">
          <button className="bg-feduzzi-green text-white font-sans text-sm md:text-base font-light px-8 py-4 rounded-md uppercase tracking-wider hover:bg-[#52755a] transition-all shadow-lg w-full md:w-auto">
            Catering bestellen bij Feduzzi Amsterdam
          </button>
          <button className="bg-feduzzi-green text-white font-sans text-sm md:text-base font-light px-8 py-4 rounded-md uppercase tracking-wider hover:bg-[#52755a] transition-all shadow-lg w-full md:w-auto">
            Catering bestellen bij Feduzzi Laren
          </button>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default App;