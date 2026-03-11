import React from 'react';
import { Link } from 'react-router-dom';

const AboutCTA = () => {
  return (
    <section className="w-full py-24 bg-harafBlue text-white relative overflow-hidden">
      {/* Decorative shapes or patterns could go here if needed, keeping it clean for now */}
      
      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-16 text-center relative z-10">
        <p className="text-harafYellow text-xs font-dm-sans font-bold tracking-[0.2em] uppercase mb-6">
          JOIN THE MISSION
        </p>
        <h2 className="text-white text-4xl lg:text-5xl font-playfair font-bold leading-tight mb-10">
          Believe in What<br />
          We're Building?
        </h2>
        <p className="text-[#EBF4FC] font-dm-sans leading-relaxed opacity-80 max-w-xl mx-auto mb-16">
          There are many ways to be part of HARAF's story — as a donor, a volunteer, a partner, or simply someone who shares our work with one other person.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
          <Link 
            to="/donate" 
            className="w-full max-w-62.5 sm:w-auto bg-harafYellow text-navyDark font-dm-sans font-bold text-sm tracking-widest uppercase px-12 py-5 hover:opacity-90 transition-opacity flex items-center justify-center space-x-2"
          >
            <span>GET INVOLVED</span>
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path d="M5 12h14M12 5l7 7-7 7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Link>
          <Link 
            to="/donate" 
            className="w-full max-w-62.5 sm:w-auto bg-transparent border-2 border-white text-white font-dm-sans font-bold text-sm tracking-widest uppercase px-12 py-5 hover:bg-white hover:text-harafBlue transition-all flex items-center justify-center"
          >
            DONATE NOW
          </Link>
        </div>
      </div>
    </section>
  );
};

export default AboutCTA;
