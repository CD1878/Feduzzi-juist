import React from 'react';
import Header from '../../components/Header';
import Hero from '../../components/Hero';
import Intro from '../../components/Intro';
import Services from '../../components/Services';
import Footer from '../../components/Footer';

const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <main className="flex-grow">
        <Hero />
        <Intro />
        <Services />
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;
