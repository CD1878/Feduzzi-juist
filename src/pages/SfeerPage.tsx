import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Hero from '../components/sfeer/Hero';
import Gallery from '../components/sfeer/Gallery';
import PreFooter from '../components/sfeer/PreFooter';

const SfeerPage: React.FC = () => {
    return (
        <div className="font-sans text-gray-800 bg-white min-h-screen flex flex-col">
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

export default SfeerPage;
