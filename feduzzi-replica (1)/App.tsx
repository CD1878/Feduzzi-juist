import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import QuoteBanner from './components/QuoteBanner';
import AboutSection from './components/AboutSection';
import InfoSection from './components/InfoSection';
import SignSection from './components/SignSection';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header />
      <main>
        <Hero />
        <QuoteBanner />
        <AboutSection />
        <InfoSection />
        <SignSection />
      </main>
      <Footer />
    </div>
  );
};

export default App;