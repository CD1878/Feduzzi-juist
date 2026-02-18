import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import InfoBar from './components/InfoBar';
import MenuSection from './components/MenuSection';
import ActionButtons from './components/ActionButtons';
import Footer from './components/Footer';
import { MENU_SECTIONS } from './constants';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans selection:bg-feduzzi-red selection:text-white">
      <Header />
      <main>
        <Hero />
        <InfoBar />
        
        <div className="flex flex-col gap-0 md:gap-8 bg-white">
          {MENU_SECTIONS.map((section) => (
            <MenuSection 
              key={section.id}
              {...section}
            />
          ))}
        </div>

        <ActionButtons />
      </main>
      <Footer />
    </div>
  );
};

export default App;
