import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import AnnouncementBar from '../../components/vestigingen/amsterdam/AnnouncementBar';
import Hero from '../../components/vestigingen/amsterdam/Hero';
import InfoGrid from '../../components/vestigingen/amsterdam/InfoGrid';
import MapSection from '../../components/vestigingen/amsterdam/MapSection';
import RedCTA from '../../components/vestigingen/amsterdam/RedCTA';
import OrderForm from '../../components/vestigingen/amsterdam/OrderForm';

const VestigingenAmsterdamPage: React.FC = () => {
    return (
        <div className="font-sans text-gray-800 bg-white min-h-screen flex flex-col">
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

export default VestigingenAmsterdamPage;
