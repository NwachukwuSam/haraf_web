import React from 'react';
import worldMap from '../../assets/WorldMap.svg';

const AboutStory = () => {
  return (
    <section 
      className="relative w-full py-8 bg-white overflow-hidden"
      style={{ 
        backgroundImage: `url(${worldMap})`,
        backgroundSize: '1100px',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-16 grid grid-cols-1 lg:grid-cols-2 gap-16 items-start relative z-10">
        
        {/* Left Side: Impactful Text */}
        <div>
          <p className="text-[#A1887F] text-xs font-dm-sans font-bold tracking-[0.2em] uppercase mb-10">
            HOW IT BEGAN
          </p>
          <h2 className="text-[#3E2723] text-4xl lg:text-[48px] font-playfair font-bold leading-tight mb-8">
            One Field Visit.<br />
            One Decision.<br />
            Everything Changed
          </h2>
          <div className="flex items-start space-x-6">
            <div className="w-1 h-12 bg-harafYellow mt-1" />
            <p className="text-[#5D4037] text-xl md:text-2xl font-dm-sans leading-relaxed italic">
              "It wasn't a strategy. It was a response."
            </p>
          </div>
        </div>

        {/* Right Side: Narrative Content */}
        <div className="space-y-8">
          <p className="text-[#5D4037] text-[17px] font-dm-sans leading-[1.8] opacity-80">
            In the dry season of 2014, HARAF founder Mrs. Grace Titus drove through Mubi, a 
            small community in Adamawa State, on her way to a business meeting she never 
            made it to.
          </p>
          <p className="text-[#5D4037] text-[17px] font-dm-sans leading-[1.8] opacity-80">
            What she saw stopped her — children no older than seven carrying jerricans of 
            brown water from a pond shared with cattle. A school building with no roof, no 
            desks, no teacher. A mother grinding guinea corn by hand because there was 
            simply nothing else.
          </p>
          <p className="text-[#5D4037] text-[17px] font-dm-sans leading-[1.8] opacity-80">
            She didn't take photos. She didn't post about it. She drove back the next weekend 
            with a truck of supplies and a few friends who asked too many questions.
          </p>
          <p className="text-[#5D4037] text-[17px] font-dm-sans leading-[1.8] opacity-80">
            That was the beginning.
          </p>
          <p className="text-[#5D4037] text-[17px] font-dm-sans leading-[1.8] opacity-80">
            Three months later, Hope & Rural Aid Foundation was formally registered. Twelve 
            months later, Mubi had a borehole, a rebuilt classroom, and a women's cooperative 
            with 14 members. Ten years later, HARAF operates across 20 communities in 4 
            states — and Mubi is still one of them.
          </p>

          {/* Bottom Quote Box */}
          <div className="bg-[#D6EAF8] p-10 mt-12 relative">
            <p className="text-primary text-2xl md:text-[28px] font-playfair font-bold leading-relaxed mb-8">
              " I didn't go there to start a foundation.<br />
              I went there because I couldn't not go. "
            </p>
            <div className="flex items-center space-x-4">
              <div className="w-10 h-[1.5px] bg-[#5D4037]" />
              <p className="text-[#5D4037] text-xs font-dm-sans font-bold tracking-[0.1em] uppercase">
                MRS. GALAXY THAMI, FOUNDER & EXECUTIVE DIRECTOR
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutStory;
