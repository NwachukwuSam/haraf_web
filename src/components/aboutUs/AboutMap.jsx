import React from 'react';
import aboutUsMap from '../../assets/aboutUsMap.png';

const statesData = [
  {
    name: "Adamawa State",
    programmes: "Clean Water · Food Security",
    communities: "11 active"
  },
  {
    name: "Yobe State",
    programmes: "Clean Water · Education",
    communities: "7 active"
  },
  {
    name: "Borno State",
    programmes: "Food Security · Healthcare",
    communities: "8 active"
  }
];

const AboutMap = () => {
  return (
    <section className="w-full py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-16 text-center">
        <p className="text-[#8CB4D6] text-xs font-dm-sans font-bold tracking-[0.2em] uppercase mb-4">
          WHERE WE WORK
        </p>
        <h2 className="text-primary text-4xl md:text-5xl font-playfair font-bold leading-tight mb-10">
          4 States.<br />
          20 Communities.<br />
          One Mission.
        </h2>
        <p className="text-[#5D4037] text-[17px] font-dm-sans leading-relaxed opacity-70 max-w-2xl mx-auto mb-16">
          From the far north to the deep south, HARAF maintains active programmes in some of Nigeria's most underserved rural communities. Every pin on this map is a community that chose to partner with us — and that we chose to stay with.
        </p>

        {/* Map Image container */}
        <div className="w-full mb-16 rounded-xl overflow-hidden shadow-sm border border-gray-100">
          <img src={aboutUsMap} alt="HARAF Operating Areas" className="w-full h-auto" />
        </div>

        {/* States Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {statesData.map((state, idx) => (
            <div key={idx} className="bg-[#F8FBFF] p-8 text-left border-l-4 border-harafYellow shadow-sm">
              <h3 className="text-primary text-xl font-playfair font-bold mb-4">
                {state.name}
              </h3>
              <div className="flex flex-col space-y-2">
                <p className="text-[#4CAF50] text-[10px] font-dm-sans font-bold tracking-wider uppercase">
                  Programme: {state.programmes}
                </p>
                <p className="text-[#5D4037] text-sm font-dm-sans opacity-70">
                  Communities: {state.communities}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 flex flex-col items-center">
          <p className="text-[#5D4037] text-[10px] font-dm-sans font-bold tracking-[0.2em] uppercase opacity-50">
            HARAF ACTIVE COMMUNITIES — NIGERIA 2026
          </p>
          <p className="text-[#5D4037] text-[10px] font-dm-sans tracking-[0.2em] uppercase opacity-40">
            DATA UPDATED MARCH 2026.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutMap;
