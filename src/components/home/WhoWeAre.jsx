import React from 'react';
import { Link } from 'react-router-dom';
import worldMap from '../../assets/WorldMap.svg';
import middleEclipse from '../../assets/ourMissionMiddleEclipse.jpg';
import topRightEclipse from '../../assets/ourMissionTopRightEclipse.jpg';
import bottomLeftEclipse from '../../assets/mamaBaby.jpeg';

const PILLARS = [
  { icon: '💧', label: 'ANC & PNC' },
  { icon: '🌾', label: 'Food Security' },
  { icon: '📚', label: 'Education' },
  { icon: '🏥', label: 'Healthcare' },
  { icon: '👩‍💼', label: 'Livelihoods' },
  { icon: '🤝', label: 'Peace Building' },
];

function WhoWeAre() {
  return (
    <>
      <style>{`
        @keyframes wwaFadeUp {
          from { opacity: 0; transform: translateY(24px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes wwaSlideIn {
          from { opacity: 0; transform: translateX(-20px); }
          to   { opacity: 1; transform: translateX(0); }
        }
        @keyframes circleFloat {
          0%, 100% { transform: translateY(0px); }
          50%       { transform: translateY(-6px); }
        }
        .wwa-left  { animation: wwaSlideIn 0.8s ease 0.1s both; }
        .wwa-right { animation: wwaFadeUp  0.8s ease 0.3s both; }
        .wwa-pill  { animation: wwaFadeUp  0.5s ease var(--d, 0s) both; }
      `}</style>

      <div className="relative w-full overflow-hidden bg-[#0A1929]">

        {/* World map — ghosted dark */}
        <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none opacity-[0.04]">
          <img 
            src={worldMap} 
            alt="" 
            aria-hidden="true" 
            className="w-full h-full object-contain brightness-200" 
            width="1320" 
            height="500" 
            loading="lazy" 
          />
        </div>

        {/* Top fine line accent */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-harafBlue/40 to-transparent" />

        <div className="relative z-10 max-w-[1320px] mx-auto px-6 sm:px-10 lg:px-16 py-20 lg:py-28">

          {/* ── SECTION LABEL ─────────────────────────────────────────── */}
          <div className="flex items-center gap-4 mb-1">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent to-harafBlue/30 max-w-[60px]" />
            <span className="font-dm-sans font-bold text-harafBlue text-[11px] uppercase tracking-[0.25em]">Who We Are</span>
            <div className="h-px flex-1 bg-gradient-to-r from-harafBlue/30 to-transparent" />
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
                  <img 
                    src={middleEclipse} 
                    alt="Women holding hands and smiling"
                    className="w-full h-full object-cover object-center" 
                    width="320" 
                    height="320" 
                    loading="lazy" 
                  />
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
                <img 
                  src={topRightEclipse} 
                  alt="Smiling woman in pink hijab"
                  className="w-full h-full object-cover" 
                  width="165" 
                  height="165" 
                  loading="lazy" 
                />
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
                <img 
                  src={bottomLeftEclipse} 
                  alt="Woman holding tray"
                  className="w-full h-full object-cover" 
                  width="130" 
                  height="130" 
                  loading="lazy" 
                />
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
                  — MADAM GALAXY THAMI, Founder
                </cite>
              </blockquote>

              {/* Programme pills */}
              <div className="flex flex-wrap gap-2 mb-10">
                {PILLARS.map(({ icon, label }, i) => (
                  <span
                    key={label}
                    className="wwa-pill flex items-center gap-1.5 bg-white/[0.06] border border-white/10 text-white/70 font-dm-sans text-[11px] px-3 py-1.5 rounded-full hover:bg-harafBlue/20 hover:border-harafBlue/40 hover:text-white transition-all cursor-default"
                    style={{ '--d': `${0.4 + i * 0.07}s` } }
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
      </div>
    </>
  );
}

export default WhoWeAre;