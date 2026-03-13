import React from 'react';
import { Link } from 'react-router-dom';
import worldMap from '../../assets/WorldMap.svg';
import middleEclipse from '../../assets/ourMissionMiddleEclipse.jpg';
import topRightEclipse from '../../assets/ourMissionTopRightEclipse.jpg';
import bottomLeftEclipse from '../../assets/ourMissionBottomLeftEclipse.jpg';

function WhoWeAre() {
  return (
    <section className="relative w-full bg-white py-10 px-8 lg:px-16 overflow-hidden">
      
      {/* Top Headings */}
      <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16 lg:mb-24">
        <span className="text-harafBlue text-sm font-dm-sans font-bold tracking-widest uppercase mb-4">
          Who We Are
        </span>
        <h2 className="font-playfair font-semibold text-4xl md:text-5xl leading-[1.15] text-primary">
          A Foundation Built on <br className="hidden sm:block" /> Compassion and Action
        </h2>
      </div>

      <div className="max-w-[1250px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-8 items-center">
        
        {/* Left Side: Image Collage */}
        <div className="relative w-full flex justify-center lg:justify-start">
          
          {/* Faded Background Map */}
          <div className="absolute inset-0 flex items-center ml-40 justify-center pointer-events-none -translate-x-[10%] translate-y-[5%]">
            <img 
              src={worldMap} 
              alt="" 
              className="w-[140%] max-w-none h-auto object-contain opacity-[0.5]" 
            />
          </div>

          <div className="relative w-[300px] sm:w-[380px] md:w-[420px] aspect-square flex items-center justify-center z-10 ml-12 sm:ml-20 lg:ml-24">
            
            {/* Main Center Image */}
            <div className="relative w-full h-full rounded-full overflow-hidden border-[2px] border-white shadow-sm z-10 transition-transform duration-500 hover:scale-105">
              <img 
                src={middleEclipse} 
                alt="Women holding hands and smiling" 
                className="w-full h-full object-cover object-center" 
              />
            </div>

            {/* Top Right Image */}
            <div className="absolute top-[10%] right-[-15%] sm:right-[-20%] w-[160px] sm:w-[200px] md:w-[240px] aspect-square rounded-full overflow-hidden border-[2px] border-white shadow-sm z-20 transition-transform duration-500 hover:scale-105 hover:z-30">
              <img 
                src={topRightEclipse} 
                alt="Smiling woman in pink hijab" 
                className="w-full h-full object-cover object-center" 
              />
            </div>

            {/* Bottom Left Image */}
            <div className="absolute bottom-[0%] left-[-15%] sm:left-[-20%] w-[120px] sm:w-[150px] md:w-[170px] aspect-square rounded-full overflow-hidden border-[2px] sm:border-[2px] border-white shadow-sm z-20 transition-transform duration-500 hover:scale-105 hover:z-30">
              <img 
                src={bottomLeftEclipse} 
                alt="Woman holding tray" 
                className="w-full h-full object-cover object-center" 
              />
            </div>
            
          </div>
        </div>

        {/* Right Side: Text & Mission */}
        <div className="w-full lg:pl-10 xl:pl-20 mt-8 lg:mt-0 z-10 relative">
          <h3 className="font-playfair font-bold text-3xl sm:text-[2rem] text-primary mb-6">
            OUR MISSION
          </h3>
          
          <p className="font-dm-sans text-[#6B4C32] text-opacity-90 text-[16px] sm:text-[17px] leading-[1.8] sm:leading-[2] mb-8 max-w-2xl font-normal">
            We are committed to ensuring basic informed and 
            technologically inclined non-formal and formal 
            education for the less privileged, promote peaceful 
            co-existence through peace building in 
            communities, strengthening capacity for self-help, 
            delivering relief in emergencies, addressing 
            discrimination in all its forms. Ensuring restoration...
          </p>

          <Link 
            to="/about_us" 
            className="inline-flex items-center gap-2 text-harafBlue font-dm-sans font-medium text-base hover:text-blue-700 transition-colors group"
          >
            Learn Our Full Story 
            <svg 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="1.5" 
              viewBox="0 0 24 24" 
              className="w-5 h-5 transition-transform group-hover:translate-x-1"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
            </svg>
          </Link>

        </div>
      </div>
    </section>
  );
}

export default WhoWeAre;
