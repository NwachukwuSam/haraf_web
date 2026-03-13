import React from 'react';
import { useNavigate } from 'react-router-dom';

const PitchEssay = () => {
  const navigate = useNavigate();
  
  const handlePitchClick = () => {
    navigate('/contact-us');
  }

  return (
    <section className="bg-[#1D70B8] py-24 px-6 text-center text-white">
      <div className="max-w-3xl mx-auto flex flex-col items-center">
        
        {/* Sub-heading */}
        <p className="text-[#FFDD00] text-[11px] font-bold tracking-[0.2em] uppercase mb-6">
          Your Voice Matters Too
        </p>

        {/* Main Heading */}
        <h2 className="text-5xl md:text-7xl font-serif font-bold leading-tight mb-8">
          Have an Idea <br /> Worth Sharing?
        </h2>

        {/* Description */}
        <p className="text-blue-50/90 text-lg md:text-xl leading-relaxed mb-12 font-light">
          We publish perspectives from community leaders, local researchers, 
          government partners, and rural practitioners across Nigeria. 
          If you have something worth saying about rural development, 
          food systems, or community-led change — we want to hear it.
        </p>

        {/* CTA Button */}
        <button onClick={handlePitchClick} className="bg-[#FEE600] hover:bg-[#ebd400] text-[#1D70B8] px-10 py-5 w-full md:w-auto font-bold text-sm tracking-widest uppercase transition-colors flex items-center justify-center gap-3">
          Pitch Us An Essay
          <svg 
            width="18" 
            height="18" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="3" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          >
            <line x1="5" y1="12" x2="19" y2="12"></line>
            <polyline points="12 5 19 12 12 19"></polyline>
          </svg>
        </button>

        {/* Footer Text */}
        <p className="mt-10 text-blue-100/70 text-[13px] leading-relaxed max-w-md">
          We read every submission. We respond to all accepted pitches 
          within 14 days. We do not publish anonymously.
        </p>
        
      </div>
    </section>
  );
};

export default PitchEssay;