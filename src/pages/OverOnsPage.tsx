import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Hero from '../components/over-ons/Hero';
import QuoteBanner from '../components/over-ons/QuoteBanner';
import AboutSection from '../components/over-ons/AboutSection';
import InfoSection from '../components/over-ons/InfoSection';
import SignSection from '../components/over-ons/SignSection';

const OverOnsPage: React.FC = () => {
    return (
        <div className="font-sans text-gray-800 bg-white min-h-screen flex flex-col">
            <Header />
            <Hero />
            <QuoteBanner />
            <AboutSection />
            <InfoSection />
            <SignSection />
            <Footer />
        </div>
    );
};

export default OverOnsPage;
