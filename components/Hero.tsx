import React from 'react';
import { VIDEO_URL } from '../constants';

const Hero: React.FC = () => {
  return (
    <section className="relative h-[80vh] md:h-screen w-full overflow-hidden">
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
        poster="https://images.squarespace-cdn.com/content/v1/65d0ba3a3921ea6aa4f09569/54935eb5-6cf5-4f21-a23e-b114b07166c6/poster.jpg"
      >
        <source src={VIDEO_URL} type="video/mp4" />
      </video>

      {/* Dark Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black/40"></div>

      <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4">
        <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl mb-4 tracking-wide drop-shadow-md">
          Fresh Italian Take-Away & Catering
        </h1>
        <p className="font-sans text-lg md:text-2xl tracking-widest mb-12 uppercase font-light drop-shadow-sm">
          Traiteur - Lunch - Italiaanse Delicatessen
        </p>

        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6">
          <a
            href="#traiteur"
            className="bg-feduzzi-red text-white px-8 py-4 rounded-sm text-lg uppercase tracking-wide hover:bg-red-800 transition-colors duration-300 min-w-[200px]"
          >
            Bestel catering
          </a>
          <a
            href="#broodjes"
            className="bg-feduzzi-red text-white px-8 py-4 rounded-sm text-lg uppercase tracking-wide hover:bg-red-800 transition-colors duration-300 min-w-[200px]"
          >
            Bestel broodjes
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
