import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import InfoSection from './components/InfoSection';
import CTAStrip from './components/CTAStrip';
import OrderForm from './components/OrderForm';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-white text-feduzzi-dark font-sans antialiased">
      <Header />
      <main>
        <Hero />
        <InfoSection />
        <CTAStrip />
        <OrderForm />
      </main>
      <Footer />
    </div>
  );
};

export default App;