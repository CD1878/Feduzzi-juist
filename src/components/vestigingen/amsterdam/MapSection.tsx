import React from 'react';

const MapSection: React.FC = () => {
    return (
        <section className="w-full bg-gray-100 flex justify-center py-10 px-4 md:px-0">
            <div className="w-full max-w-5xl h-[400px] md:h-[500px] bg-gray-200 relative overflow-hidden rounded-md shadow-sm">
                {/* Placeholder for Map - Using an iframe for pixel-perfect feel */}
                <iframe
                    width="100%"
                    height="100%"
                    frameBorder="0"
                    title="Feduzzi Amsterdam Map"
                    scrolling="no"
                    marginHeight={0}
                    marginWidth={0}
                    src="https://maps.google.com/maps?q=Scheldestraat+63,+Amsterdam&t=&z=15&ie=UTF8&iwloc=&output=embed"
                    style={{ filter: 'grayscale(0.2) contrast(1.1) opacity(0.9)' }}
                ></iframe>
            </div>
        </section>
    );
};

export default MapSection;
