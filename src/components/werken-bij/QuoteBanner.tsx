import React from 'react';

interface QuoteBannerProps {
    bg: string;
    text: string;
}

const QuoteBanner: React.FC<QuoteBannerProps> = ({ bg, text }) => {
    return (
        <section className={`${bg} py-20 md:py-32 px-6 flex items-center justify-center`}>
            <div className="max-w-4xl mx-auto text-center">
                <h2 className="font-serif italic text-3xl md:text-[42px] text-white leading-tight font-light">
                    {text}
                </h2>
            </div>
        </section>
    );
};

export default QuoteBanner;
