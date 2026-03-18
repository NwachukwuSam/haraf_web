import React, { useState } from 'react';
import ourWorkMainImage from '../../assets/ourWorkMainImage.jpg';

const WorkHero = () => {
  const [activeFilter, setActiveFilter] = useState('ALL PROGRAMMES');

  const filters = [
    'ALL PROGRAMMES',
    'CLEAN WATER',
    'FOOD SECURITY',
    'EDUCATION',
    'HEALTHCARE',
    'LIVELIHOODS',
    'ENVIRONMENT'
  ];

  return (
    <section className="relative w-full min-h-[110vh]  flex flex-col justify-between overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{ backgroundImage: `url(${ourWorkMainImage})` }}
      >
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 grow flex items-start pt-16">
        <div className="max-w-7xl mx-auto px-6 md:px-8 w-full">
          <div className="max-w-2xl py-8 md:py-0 relative space-y-10">
            <p className="text-harafYellow text-sm font-dm-sans font-bold tracking-[0.2em] uppercase">
              OUR PROGRAMMES
            </p>
            <h1 className="text-white text-5xl md:text-[80px] font-playfair font-bold ">
              Six Ways We<br />
              Change Rural<br />
              Lives.
            </h1>
            <p className="text-white text-lg md:text-xl font-dm-sans leading-relaxed opacity-90 italic max-w-lg">
              Every programme at HARAF is co-designed with communities, independently evaluated, and built for long-term impact. We don't parachute in — we stay.
            </p>
          </div>
        </div>
      </div>

      {/* Filter Bar */}
      <div className="relative z-10 bg-white border-t border-harafBlue/10 w-full py-6">
        <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-16 flex flex-col md:flex-row items-center justify-between">
          <span className="text-harafBlue text-[10px] font-dm-sans font-bold tracking-[0.2em] uppercase mb-4 md:mb-0">
            FILTER BY
          </span>
          <div className="flex flex-wrap justify-center gap-2 md:gap-4">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-6 py-2 self-center cursor-pointer rounded-full text-[10px] font-dm-sans font-bold tracking-wider uppercase transition-all whitespace-nowrap border ${
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
    </section>
  );
};

export default WorkHero;
