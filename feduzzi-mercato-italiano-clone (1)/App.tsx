import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Gallery from './components/Gallery';
import PreFooter from './components/PreFooter';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <Gallery />
        <PreFooter />
      </main>
      <Footer />
    </div>
  );
};

export default App;