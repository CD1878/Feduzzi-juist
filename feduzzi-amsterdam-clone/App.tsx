import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import InfoGrid from './components/InfoGrid';
import MapSection from './components/MapSection';
import RedCTA from './components/RedCTA';
import OrderForm from './components/OrderForm';
import Footer from './components/Footer';
import AnnouncementBar from './components/AnnouncementBar';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-white text-feduzzi-text">
      <AnnouncementBar />
      <Header />
      <main>
        <Hero />
        <InfoGrid />
        <MapSection />
        <RedCTA />
        <OrderForm />
      </main>
      <Footer />
    </div>
  );
};

export default App;