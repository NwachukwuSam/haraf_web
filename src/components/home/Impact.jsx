import React from 'react';
import heroImage from '../../assets/heroImage.jpg';

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
      <div className="relative w-full h-[312px]">
        {/* Background Image */}
        <div
          className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroImage})` }}
        />

        {/* Navy Blue Overlay (#0A3D6B at 30% opacity) */}
        <div
          className="absolute inset-0 w-full h-full"
          style={{ backgroundColor: 'rgba(10, 61, 107, 0.3)' }}
        />

        {/* Content Overlay */}
        <div className="absolute inset-0 w-full h-full flex flex-col justify-between pt-24 pb-12 px-4 md:px-12 lg:px-24">

          {/* Stats Grid */}
          <div className="flex flex-col md:flex-row justify-evenly items-center w-full max-w-6xl mx-auto space-y-12 md:space-y-0">
            {/* Stat 1 */}
            <div className="flex flex-col items-center text-white text-center">
              <div className="flex items-start">
                <span className="font-playfair font-bold text-[72px] leading-none">14K</span>
                <span className="text-harafYellow text-5xl font-light ml-1">+</span>
              </div>
              <p className="font-dm-sans text-lg mt-2">Families Reached</p>
            </div>

            {/* Stat 2 */}
            <div className="flex flex-col items-center text-white text-center">
              <div className="flex items-start">
                <span className="font-playfair font-bold text-[72px] leading-none">87</span>
              </div>
              <p className="font-dm-sans text-lg mt-2">Communities Served</p>
            </div>

            {/* Stat 3 */}
            <div className="flex flex-col items-center text-white text-center">
              <div className="flex items-start">
                <span className="font-playfair font-bold text-[72px] leading-none">40</span>
                <span className="text-harafYellow text-5xl font-light ml-1">+</span>
              </div>
              <p className="font-dm-sans text-lg mt-2">Livelihood Programs Running</p>
            </div>
          </div>

          {/* Footer Note */}
          <div className="w-full text-center mt-auto">
            <p className="text-white text-xs font-dm-sans opacity-80 uppercase tracking-wider">
              *DATA UPDATED QUARTERLY. LAST UPDATED MARCH 2026.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Impact;
