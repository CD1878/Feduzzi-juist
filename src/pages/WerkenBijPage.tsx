import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Hero from '../components/werken-bij/Hero';
import QuoteBanner from '../components/werken-bij/QuoteBanner';
import ContentSection from '../components/werken-bij/ContentSection';
import FormSection from '../components/werken-bij/FormSection';

const WerkenBijPage: React.FC = () => {
    return (
        <div className="font-sans text-gray-800 bg-white min-h-screen flex flex-col">
            <Header />
            <Hero />
            <QuoteBanner
                bg="bg-feduzzi-green"
                text="“ La vera cucina italiana è una forma d'arte. Un dono per i sensi”"
            />
            <ContentSection />
            <QuoteBanner
                bg="bg-feduzzi-red"
                text="“Feduzzi is als een familie en zo voelt het ook om hier te werken.”"
            />
            <FormSection />
            <Footer />
        </div>
    );
};

export default WerkenBijPage;
