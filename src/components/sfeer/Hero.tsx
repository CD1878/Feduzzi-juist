import React from 'react';

const Hero: React.FC = () => {
    return (
        <div className="relative h-[60vh] md:h-[80vh] w-full overflow-hidden bg-black">
            {/* Background Video/Image */}
            <div className="absolute inset-0 w-full h-full opacity-60">
                <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="w-full h-full object-cover"
                    poster="https://images.squarespace-cdn.com/content/v1/65d0ba3a3921ea6aa4f09569/1710929339178-XXXXX/poster.jpg"
                >
                    <source src="https://video.squarespace-cdn.com/content/v1/65d0ba3a3921ea6aa4f09569/c29ad8fd-20ab-42c5-b231-23e1f6e3a357/1080:1920" type="video/mp4" />
                </video>
            </div>

            {/* Content */}
            <div className="absolute inset-0 flex items-center justify-center z-10">
                <h1 className="text-white text-5xl md:text-7xl lg:text-8xl font-serif italic tracking-wide text-center drop-shadow-lg">
                    Proef de sfeer
                </h1>
            </div>
        </div>
    );
};

export default Hero;
