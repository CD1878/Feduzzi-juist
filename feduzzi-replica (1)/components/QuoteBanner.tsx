import React from 'react';

const QuoteBanner: React.FC = () => {
  return (
    <section className="bg-feduzziGreen w-full py-20 md:py-24 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-white text-2xl md:text-4xl font-serif italic font-light leading-relaxed">
          “ In cucina si buttano le briglie della creatività”
        </h2>
      </div>
    </section>
  );
};

export default QuoteBanner;