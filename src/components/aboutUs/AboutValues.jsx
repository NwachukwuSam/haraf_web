import React from 'react';
import ValueCard from './ValueCard.jsx';

const valuesData = [
  {
    number: "1",
    title: "DIGNITY",
    description: "We treat every community member as an expert in their own life — never as a recipient of charity, but as a partner in change."
  },
  {
    number: "2",
    title: "COMMUNITY",
    description: "We don't parachute in. We sit down, listen, and build relationships before we build anything else. Community trust is our most valuable asset."
  },
  {
    number: "3",
    title: "TRANSPARENCY",
    description: "Every naira we receive is tracked, reported, and published. Our donors and our communities deserve to know exactly where their trust goes."
  },
  {
    number: "4",
    title: "SUSTAINABILITY",
    description: "A programme that ends when our funding ends is not a programme — it's a visit. Everything we build is designed to outlast our presence."
  },
  {
    number: "5",
    title: "BOLDNESS",
    description: "Rural communities have waited long enough. We act urgently, take risks, and refuse to accept things must remain unchanged."
  }
];

const AboutValues = () => {
  return (
    <section className="w-full py-8 bg-white relative overflow-hidden">
        {/* Decorative Quote Mark */}
        <div className="absolute top-0 left-[20%] opacity-[0.03] select-none pointer-events-none">
            <span className="text-[300px] font-playfair font-bold">“</span>
        </div>

      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-16 relative z-10">
        <div className="text-center mb-16">
          <p className="text-[#8CB4D6] text-sm font-dm-sans font-bold tracking-[0.2em] uppercase mb-4">
            WHAT WE STAND FOR
          </p>
          <h2 className="text-primary text-4xl lg:text-5xl font-playfair font-bold leading-tight">
            Five Words That<br />
            Guide Everything We Do.
          </h2>
        </div>

        {/* Using flex layout allows perfect centering of odd rows on any breakpoint */}
        <div className="flex flex-wrap justify-center gap-6">
          {valuesData.map((value) => (
            <div 
              key={value.number}
              // Calculate width based on gap (24px) to perfectly mimic grid columns
              // Mobile: 1 col (100%), md: 3 cols (~33.3%), lg: 5 cols (~20%)
              className="w-full md:w-[calc(33.333%-16px)] lg:w-[calc(20%-19.2px)]"
            >
              <div className="w-full h-full">
                <ValueCard 
                  number={value.number}
                  title={value.title}
                  description={value.description}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutValues;
