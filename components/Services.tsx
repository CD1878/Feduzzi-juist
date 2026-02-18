import React from 'react';
import { Link } from 'react-router-dom';
import { SERVICES } from '../constants';

const Services: React.FC = () => {
  return (
    <section className="py-24 bg-feduzzi-cream">
      <div className="container mx-auto px-6 max-w-7xl">
        <h2 className="font-serif text-center text-4xl md:text-5xl text-gray-400 mb-16 tracking-wide font-light">
          Italiaanse Delicatessen
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {SERVICES.map((service, index) => (
            <div
              key={index}
              id={service.title.toLowerCase()}
              className="flex flex-col items-center text-center group scroll-mt-24 h-full"
            >
              <div className="w-full aspect-square overflow-hidden rounded-md mb-8 shadow-sm">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-in-out"
                />
              </div>

              <h3 className="font-serif text-3xl text-gray-600 mb-4 font-light">
                {service.title}
              </h3>

              <p className="font-sans text-gray-700 leading-relaxed mb-8 px-4 font-light text-lg">
                {service.description}
              </p>

              {service.link.startsWith('/') ? (
                <Link
                  to={service.link}
                  className="mt-auto px-8 py-3 border border-gray-400 text-gray-600 rounded-md hover:bg-gray-600 hover:text-white transition-all duration-300 uppercase tracking-wider text-sm inline-block"
                >
                  {service.buttonText}
                </Link>
              ) : (
                <a
                  href={service.link}
                  className="mt-auto px-8 py-3 border border-gray-400 text-gray-600 rounded-md hover:bg-gray-600 hover:text-white transition-all duration-300 uppercase tracking-wider text-sm inline-block"
                >
                  {service.buttonText}
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
