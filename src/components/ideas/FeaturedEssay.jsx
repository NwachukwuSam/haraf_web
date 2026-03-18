import { useState } from 'react';

const FeaturedEssay = () => {
      const [activeFilter, setActiveFilter] = useState('ALL PROGRAMMES');
      
        const filters = [
          'ALL IDEAS',
          'FIELD REFLECTIONS',
          'POLICY & ADVOCACY',
          'WOMEN & POWER',
          'FOOD SYSTEMS',
          'WATER & CLIMATE',
          'COMMUNITY LEADERSHIP'
        ];
  return (
    <div>
    <section className="bg-[#0A3D6B] text-white py-20 px-4 sm:px-6 md:px-8 lg:px-24 overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12 lg:gap-24 items-start">
        
        {/* Left Content Area */}
        <div className="flex-1 max-w-2xl">
          {/* Tags */}
          <div className="flex flex-col gap-4 mb-10">
            <span className="text-[#FFDD00] text-[13px] font-bold tracking-[0.2em] uppercase">
              Featured Essay
            </span>
            <div>
              <span className="border border-[#FFDD00] text-[#FFDD00] text-[12px] font-bold px-4 py-1.5 rounded-full uppercase tracking-wider">
                All Programmes
              </span>
            </div>
          </div>

          {/* Title */}
          <h1 className="text-2xl md:text-4xl font-serif italic font-bold leading-[1.1] mb-8">
            Why "Giving Aid" Is the Wrong Frame — And What We Should Say Instead.
          </h1>

          {/* Excerpt */}
          <p className="text-blue-10/80 text-lg leading-relaxed mb-10 font-light opacity-90">
            The language of aid — donors, recipients, beneficiaries — encodes a power 
            dynamic that quietly undermines everything we claim to be doing. After ten 
            years in the field, I'm convinced the words we use are part of the problem. 
            And changing them is harder than drilling a borehole.
          </p>

          {/* Author Info */}
          <div className="flex items-center gap-4 mb-6">
            <img 
              src="https://i.pravatar.cc/150?u=grace" 
              alt="Mrs. Grace Titus" 
              className="w-12 h-12 rounded-full border-2 border-[#FFDD00]/20"
            />
            <div>
              <p className="text-base font-bold leading-none">Mrs. Grace Titus</p>
              <p className="text-[11px] text-blue-200/70 font-medium mt-1 uppercase tracking-tight">
                Founder & Executive Director
              </p>
            </div>
          </div>

          {/* Metadata */}
          <div className="flex items-center gap-2 text-blue-200/50 text-xs mb-10 font-medium">
            <span>March 1, 2026</span>
            <span>•</span>
            <span>12 min read</span>
          </div>

          {/* CTA Button */}
          <button className="bg-[#FEE600] hover:bg-[#ebd400] text-[#0A3D6B] px-8 py-4 font-bold text-xs tracking-widest uppercase transition-all flex items-center gap-3">
            Read the Full Essay
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </button>
        </div>

        {/* Right Pull-Quote Area */}
        <div className="lg:mt-32 relative flex-1">
          <div className="border-l-4 border-[#FFDD00]/60 pl-8">
            <blockquote className="text-3xl md:text-2xl font-serif italic font-medium leading-snug text-blue-100 opacity-90">
              “The word beneficiary is doing a lot of quiet damage in the development sector. 
              It positions communities as passive receivers of other people's decisions.”
            </blockquote>
          </div>
        </div>

      </div>

      
    </section>

    {/* Filter Bar */}
      <div className="relative z-10 bg-white border-t border-harafBlue/10 w-full py-6">
        <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-8 flex flex-col md:flex-row items-center justify-between">
          <span className="text-harafBlue text-[10px] font-dm-sans font-bold tracking-[0.2em] uppercase mb-4 md:mb-0">
            EXPLORE BY
          </span>
          <div className="flex flex-wrap xl:flex-nowrap justify-center gap-2 md:gap-4">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-6 py-2 rounded-full text-[10px] font-dm-sans font-bold tracking-wider uppercase transition-all whitespace-nowrap border ${
                  activeFilter === filter
                    ? 'bg-harafBlue text-white border-harafBlue shadow-md'
                    : 'bg-white text-harafBlue border-harafBlue/20 hover:border-harafBlue/50'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>
      </div>
      
      {/* Bottom accent line */}
      <hr className="relative z-10 h-px border-harafBlue w-full"/>
      </div>
    
  );
};

export default FeaturedEssay;