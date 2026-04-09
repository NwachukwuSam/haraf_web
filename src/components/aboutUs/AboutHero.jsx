import React from 'react';
import aboutUsMainImage from '../../assets/aboutUsMainImage.jpg';

const AboutHero = () => {
  return (
    <section 
      className="relative w-full h-[90vh] flex items-center bg-cover bg-center"
      style={{ backgroundImage: `url(${aboutUsMainImage})` }}
    >
      {/* Linear Gradient Overlay */}
      <div 
        className="absolute inset-0 z-0"
        style={{ 
          background: 'linear-gradient(to bottom, rgba(28, 21, 16, 0.2) 20%, rgba(28, 21, 16, 0.65) 65%)' 
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 relative z-10 w-full">
        <div className="max-w-3xl">
          <p className="text-harafYellow text-sm font-dm-sans font-bold tracking-[0.2em] uppercase mb-4">
            OUR STORY
          </p>
          <h1 className="text-white text-5xl md:text-6xl lg:text-7xl xl:text-[80px] font-playfair font-black leading-tight mb-8">
            We Are HARAF.
          </h1>
          <p className="text-white text-lg md:text-xl xl:text-[22px] font-cormorant italic leading-relaxed max-w-xl">
           Rooted in the heart of rural Nigeria, where stories are written in earth and resilience
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;
