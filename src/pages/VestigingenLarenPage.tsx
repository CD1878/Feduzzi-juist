import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Hero from '../components/vestigingen/laren/Hero';
import InfoSection from '../components/vestigingen/laren/InfoSection';
import CTAStrip from '../components/vestigingen/laren/CTAStrip';
import OrderForm from '../components/vestigingen/laren/OrderForm';

const VestigingenLarenPage: React.FC = () => {
    return (
        <div className="font-sans text-gray-800 bg-white min-h-screen flex flex-col">
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

export default VestigingenLarenPage;
