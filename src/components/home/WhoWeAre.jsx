// import React from 'react';
// import { Link } from 'react-router-dom';
// import worldMap from '../../assets/WorldMap.svg';
// import middleEclipse from '../../assets/ourMissionMiddleEclipse.jpg';
// import topRightEclipse from '../../assets/ourMissionTopRightEclipse.jpg';
// import bottomLeftEclipse from '../../assets/ourMissionBottomLeftEclipse.jpg';

// function WhoWeAre() {
//   return (
//     <section className="relative w-full bg-white py-10 px-8 lg:px-16 overflow-hidden">
      
//       {/* Top Headings */}
//       <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16 lg:mb-24">
//         <span className="text-harafBlue text-sm font-dm-sans font-bold tracking-widest uppercase mb-4">
//           Who We Are
//         </span>
//         <h2 className="font-playfair font-semibold text-4xl md:text-5xl leading-[1.15] text-primary">
//           A Foundation Built on <br className="hidden sm:block" /> Compassion and Action
//         </h2>
//       </div>

//       <div className="max-w-[1250px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-8 items-center">
        
//         {/* Left Side: Image Collage */}
//         <div className="relative w-full flex justify-center lg:justify-start">
          
//           {/* Faded Background Map */}
//           <div className="absolute inset-0 flex items-center ml-40 justify-center pointer-events-none -translate-x-[10%] translate-y-[5%]">
//             <img 
//               src={worldMap} 
//               alt="" 
//               className="w-[140%] max-w-none h-auto object-contain opacity-[0.5]" 
//             />
//           </div>

//           <div className="relative w-[300px] sm:w-[380px] md:w-[420px] aspect-square flex items-center justify-center z-10 ml-12 sm:ml-20 lg:ml-24">
            
//             {/* Main Center Image */}
//             <div className="relative w-full h-full rounded-full overflow-hidden border-[2px] border-white shadow-sm z-10 transition-transform duration-500 hover:scale-105">
//               <img 
//                 src={middleEclipse} 
//                 alt="Women holding hands and smiling" 
//                 className="w-full h-full object-cover object-center" 
//               />
//             </div>

//             {/* Top Right Image */}
//             <div className="absolute top-[10%] right-[-15%] sm:right-[-20%] w-[160px] sm:w-[200px] md:w-[240px] aspect-square rounded-full overflow-hidden border-[2px] border-white shadow-sm z-20 transition-transform duration-500 hover:scale-105 hover:z-30">
//               <img 
//                 src={topRightEclipse} 
//                 alt="Smiling woman in pink hijab" 
//                 className="w-full h-full object-cover object-center" 
//               />
//             </div>

//             {/* Bottom Left Image */}
//             <div className="absolute bottom-[0%] left-[-15%] sm:left-[-20%] w-[120px] sm:w-[150px] md:w-[170px] aspect-square rounded-full overflow-hidden border-[2px] sm:border-[2px] border-white shadow-sm z-20 transition-transform duration-500 hover:scale-105 hover:z-30">
//               <img 
//                 src={bottomLeftEclipse} 
//                 alt="Woman holding tray" 
//                 className="w-full h-full object-cover object-center" 
//               />
//             </div>
            
//           </div>
//         </div>

//         {/* Right Side: Text & Mission */}
//         <div className="w-full lg:pl-10 xl:pl-20 mt-8 lg:mt-0 z-10 relative">
//           <h3 className="font-playfair font-bold text-3xl sm:text-[2rem] text-primary mb-6">
//             OUR MISSION
//           </h3>
          
//           <p className="font-dm-sans text-[#6B4C32] text-opacity-90 text-[16px] sm:text-[17px] leading-[1.8] sm:leading-[2] mb-8 max-w-2xl font-normal">
//             We are committed to ensuring basic informed and 
//             technologically inclined non-formal and formal 
//             education for the less privileged, promote peaceful 
//             co-existence through peace building in 
//             communities, strengthening capacity for self-help, 
//             delivering relief in emergencies, addressing 
//             discrimination in all its forms. Ensuring restoration...
//           </p>

//           <Link 
//             to="/about_us" 
//             className="inline-flex items-center gap-2 text-harafBlue font-dm-sans font-medium text-base hover:text-blue-700 transition-colors group"
//           >
//             Learn Our Full Story 
//             <svg 
//               fill="none" 
//               stroke="currentColor" 
//               strokeWidth="1.5" 
//               viewBox="0 0 24 24" 
//               className="w-5 h-5 transition-transform group-hover:translate-x-1"
//             >
//               <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
//             </svg>
//           </Link>

//         </div>
//       </div>
//     </section>
//   );
// }

// export default WhoWeAre;


import React from 'react';
import { Link } from 'react-router-dom';
import worldMap from '../../assets/WorldMap.svg';
import middleEclipse from '../../assets/ourMissionMiddleEclipse.jpg';
import topRightEclipse from '../../assets/ourMissionTopRightEclipse.jpg';
import bottomLeftEclipse from '../../assets/ourMissionBottomLeftEclipse.jpg';

const PILLARS = [
  { icon: '💧', label: 'Clean Water' },
  { icon: '🌾', label: 'Food Security' },
  { icon: '📚', label: 'Education' },
  { icon: '🏥', label: 'Healthcare' },
  { icon: '👩‍💼', label: 'Livelihoods' },
  { icon: '🤝', label: 'Peace Building' },
];

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
              className="w-[140%] max-w-none h-auto object-contain" 
            />
          </div>

          {/* ── MAIN GRID ─────────────────────────────────────────────── */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-12 items-center">

            {/* ── LEFT: Image collage ──────────────────────────────────── */}
            <div className="wwa-left relative flex items-center justify-center lg:justify-start" style={{ minHeight: 480 }}>

              {/* Decorative ring */}
              <div className="absolute rounded-full border border-harafBlue/10 pointer-events-none"
                style={{ width: 420, height: 420, top: '50%', left: '50%', transform: 'translate(-46%, -48%)' }}
              />
              <div className="absolute rounded-full border border-harafBlue/06 pointer-events-none"
                style={{ width: 520, height: 520, top: '50%', left: '50%', transform: 'translate(-46%, -48%)' }}
              />

              {/* Dot grid */}
              <div className="absolute top-4 right-4 pointer-events-none opacity-20"
                style={{
                  backgroundImage: 'radial-gradient(circle, #8CB4D6 1.2px, transparent 1.2px)',
                  backgroundSize: '14px 14px',
                  width: 84, height: 84,
                }}
              />

              {/* Main center circle */}
              <div className="relative z-10 ml-8 sm:ml-16 lg:ml-12" style={{ animation: 'circleFloat 6s ease-in-out infinite' }}>
                <div className="rounded-full overflow-hidden border-4 border-white/10 shadow-2xl"
                  style={{
                    width: 'clamp(220px, 28vw, 320px)',
                    height: 'clamp(220px, 28vw, 320px)',
                    boxShadow: '0 24px 60px rgba(0,0,0,0.5), 0 0 0 1px rgba(255,255,255,0.08)',
                  }}>
                  <img src={middleEclipse} alt="Women holding hands and smiling"
                    className="w-full h-full object-cover object-center" />
                </div>

                {/* Year badge — overlapping */}
                <div className="absolute -bottom-4 -right-4 bg-harafBlue rounded-2xl px-4 py-3 z-20"
                  style={{ boxShadow: '0 8px 24px rgba(26,120,194,0.5)' }}>
                  <p className="font-playfair font-bold text-white text-xl leading-none">12+</p>
                  <p className="font-dm-sans text-blue-200 text-[10px] uppercase tracking-wide mt-0.5">Years</p>
                </div>
              </div>

              {/* Top-right satellite circle */}
              <div className="absolute z-20 rounded-full overflow-hidden border-4 border-[#0A1929]"
                style={{
                  width: 'clamp(110px, 15vw, 165px)',
                  height: 'clamp(110px, 15vw, 165px)',
                  top: '6%',
                  right: '8%',
                  boxShadow: '0 12px 32px rgba(0,0,0,0.4)',
                  animation: 'circleFloat 5s ease-in-out 1s infinite',
                }}>
                <img src={topRightEclipse} alt="Smiling woman in pink hijab"
                  className="w-full h-full object-cover" />
              </div>

              {/* Bottom-left satellite circle */}
              <div className="absolute z-20 rounded-full overflow-hidden border-4 border-[#0A1929]"
                style={{
                  width: 'clamp(85px, 11vw, 130px)',
                  height: 'clamp(85px, 11vw, 130px)',
                  bottom: '8%',
                  left: '4%',
                  boxShadow: '0 8px 24px rgba(0,0,0,0.4)',
                  animation: 'circleFloat 4.5s ease-in-out 0.5s infinite',
                }}>
                <img src={bottomLeftEclipse} alt="Woman holding tray"
                  className="w-full h-full object-cover" />
              </div>

              {/* Communities stat chip */}
              <div className="absolute bottom-[20%] right-[4%] sm:right-[8%] z-20 bg-[#0F2236] border border-white/10 rounded-2xl px-4 py-3"
                style={{ boxShadow: '0 8px 24px rgba(0,0,0,0.4)', animation: 'wwaFadeUp 0.6s ease 0.6s both' }}>
                <p className="font-playfair font-bold text-white text-lg leading-none">87</p>
                <p className="font-dm-sans text-[#8CB4D6] text-[10px] uppercase tracking-wide mt-0.5">Communities</p>
              </div>

            </div>

            {/* ── RIGHT: Mission text ──────────────────────────────────── */}
            <div className="wwa-right lg:pl-8">

              {/* Heading */}
              <h2 className="font-playfair font-bold text-white leading-[1.1] mb-6"
                style={{ fontSize: 'clamp(2rem, 3.5vw, 3.2rem)' }}>
                A Foundation Built on{' '}
                <em className="not-italic" style={{ color: '#8CB4D6' }}>Compassion</em>
                <br />and <em className="italic text-harafYellow">Action</em>.
              </h2>

              {/* Accent line */}
              <div className="flex items-center gap-3 mb-8">
                <div className="h-px w-10 bg-harafYellow" />
                <span className="font-dm-sans font-bold text-harafYellow text-[11px] uppercase tracking-[0.2em]">Our Mission</span>
              </div>

              {/* Mission body */}
              <p className="font-dm-sans text-[#B0C4D4] leading-[1.85] mb-6"
                style={{ fontSize: 'clamp(0.9rem, 1.2vw, 1.05rem)' }}>
                We are committed to ensuring basic informed and technologically inclined
                non-formal and formal education for the less privileged — promoting peaceful
                co-existence, strengthening capacity for self-help, delivering relief in
                emergencies, and addressing discrimination in all its forms.
              </p>

              {/* Pull quote */}
              <blockquote className="relative border-l-4 border-harafBlue pl-5 mb-8">
                <p className="font-cormorant italic text-white/80 leading-relaxed"
                  style={{ fontSize: 'clamp(1.05rem, 1.4vw, 1.25rem)' }}>
                  "Every community we serve already knows what it needs. We simply walk alongside them."
                </p>
                <cite className="block font-dm-sans text-[#8CB4D6] text-[11px] uppercase tracking-wider mt-2 not-italic">
                  — Mrs. Grace Titus, Founder
                </cite>
              </blockquote>

              {/* Programme pills */}
              <div className="flex flex-wrap gap-2 mb-10">
                {PILLARS.map(({ icon, label }, i) => (
                  <span
                    key={label}
                    className="wwa-pill flex items-center gap-1.5 bg-white/[0.06] border border-white/10 text-white/70 font-dm-sans text-[11px] px-3 py-1.5 rounded-full hover:bg-harafBlue/20 hover:border-harafBlue/40 hover:text-white transition-all cursor-default"
                    style={{ '--d': `${0.4 + i * 0.07}s` }}
                  >
                    <span>{icon}</span> {label}
                  </span>
                ))}
              </div>

              {/* CTA */}
              <Link
                to="/about_us"
                className="group inline-flex items-center gap-3 text-white font-dm-sans font-bold text-[11px] uppercase tracking-[0.2em] transition-colors hover:text-harafBlue"
              >
                <span className="w-8 h-px bg-harafYellow transition-all group-hover:w-14 group-hover:bg-harafBlue" />
                Learn Our Full Story
                <svg fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"
                  className="w-4 h-4 transition-transform group-hover:translate-x-1">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14m-6-6 6 6-6 6" />
                </svg>
              </Link>

            </div>
          </div>

        </div>
      </section>
    </>
  );
}

export default WhoWeAre;