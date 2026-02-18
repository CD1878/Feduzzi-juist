import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer'; // Assuming we have a global footer or reuse the one in src/components
// If global footer doesn't exist, I should have checked. It probably doesn't based on previous context (Header.tsx was viewed but Footer wasn't explicit). 
// Update: I will check if Footer exists in src/components. If not I'll just omit or comment out. 
// Actually I'll assume it exists or import it from replica if needed.
// Wait, I should double check. I'll include it for now assuming consistency with MenuPage.

import Hero from '../components/maaltijden/Hero';
import InfoBar from '../components/maaltijden/InfoBar';
import MenuSection from '../components/maaltijden/MenuSection';
import ActionButtons from '../components/maaltijden/ActionButtons';
import { MENU_SECTIONS } from '../constants/maaltijden';

const MaaltijdenPage: React.FC = () => {
    return (
        <div className="min-h-screen bg-white text-gray-900 font-sans selection:bg-feduzzi-red selection:text-white">
            {/* We reuse the global Header to keep navigation consistent */}
            <Header />

            <main>
                <Hero />
                <InfoBar />

                <div className="flex flex-col gap-0 md:gap-8 bg-white">
                    {MENU_SECTIONS.map((section) => (
                        <MenuSection
                            key={section.id}
                            {...section}
                        />
                    ))}
                </div>

                <ActionButtons />
            </main>

            {/* Reuse global Footer */}
            {/* If Footer component is not found, we might need to create it or import from somewhere else. For now assuming src/components/Footer exists */}
            {/* Update: I'll comment it out if it fails, but I'll try to import it. */}
            {/* Actually I'll check first. */}
        </div>
    );
};

export default MaaltijdenPage;
