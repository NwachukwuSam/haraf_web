import React from 'react';
import heroImage from '../../assets/load.JPG';

const Impact = () => {
  return (
    <section className="w-full flex flex-col items-center">
      {/* Top Header Section */}
      <div className="w-full py-16 flex flex-col items-center justify-center bg-white text-center px-4">
        <p className="text-harafBlue text-sm tracking-[0.2em] font-dm-sans font-bold uppercase mb-4">
          Our Impact In Numbers
        </p>
        <h2 className="text-primary text-4xl md:text-5xl font-playfair font-bold leading-tight max-w-4xl">
          Real Change.<br />
          Measurable Results.
        </h2>
      </div>

      {/* Hero Image with Stats Overlay */}
      <div className="relative w-full min-h-[400px] flex items-center py-20 md:py-32">
        {/* Background Image */}
        <div
  className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat brightness-50"
  style={{ backgroundImage: `url(${heroImage})` }}
/>

        {/* Navy Blue Overlay (#0A3D6B at 30% opacity) */}
        <div
          className="absolute inset-0 w-full h-full"
          style={{ backgroundColor: 'rgba(10, 61, 107, 0.4)' }}
        />

        {/* Content Overlay */}
        <div className="relative z-10 w-full h-full flex flex-col justify-between px-6 md:px-12 lg:px-24">

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-8 justify-items-center w-full max-w-7xl mx-auto">
            {/* Stat 1 */}
            <div className="flex flex-col items-center text-white text-center">
              <div className="flex items-start">
                <span className="font-playfair font-bold text-6xl md:text-[72px] leading-none">14K</span>
                <span className="text-harafYellow text-4xl md:text-5xl font-light ml-1">+</span>
              </div>
              <p className="font-dm-sans text-base md:text-lg mt-4 uppercase tracking-widest opacity-90">Families Reached</p>
            </div>

            {/* Stat 2 */}
            <div className="flex flex-col items-center text-white text-center">
              <div className="flex items-start">
                <span className="font-playfair font-bold text-6xl md:text-[72px] leading-none">87</span>
              </div>
              <p className="font-dm-sans text-base md:text-lg mt-4 uppercase tracking-widest opacity-90">Communities Served</p>
            </div>

            {/* Stat 3 */}
            <div className="flex flex-col items-center text-white text-center">
              <div className="flex items-start">
                <span className="font-playfair font-bold text-6xl md:text-[72px] leading-none">40</span>
                <span className="text-harafYellow text-4xl md:text-5xl font-light ml-1">+</span>
              </div>
              <p className="font-dm-sans text-base md:text-lg mt-4 uppercase tracking-widest opacity-90">Livelihoods Running</p>
            </div>
          </div>

          {/* Footer Note */}
          <div className="w-full text-center mt-16 md:mt-24">
            <p className="text-white text-[10px] font-dm-sans opacity-60 uppercase tracking-[0.2em]">
              *DATA UPDATED QUARTERLY. LAST UPDATED MARCH 2026.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Impact;
