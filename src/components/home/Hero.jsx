import React from 'react';
import worldMap from '../../assets/WorldMap.svg';
import heroImage from '../../assets/heroImage.jpg';
import p1 from '../../assets/heroSubImage1.jpg';
import p2 from '../../assets/heroSubImage2.jpg';
import p3 from '../../assets/heroSubImage3.jpg';
import { useNavigate } from 'react-router-dom';

function Hero() {
  const navigate = useNavigate();

  return (
    <>
      <style>{`
        @keyframes heroFadeUp {
          from { opacity: 0; transform: translateY(28px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes heroFadeIn {
          from { opacity: 0; transform: scale(1.04); }
          to   { opacity: 1; transform: scale(1); }
        }
        @keyframes floatA {
          0%, 100% { transform: translateY(0px) rotate(-3deg); }
          50%       { transform: translateY(-10px) rotate(-3deg); }
        }
        @keyframes floatB {
          0%, 100% { transform: translateY(0px) rotate(2deg); }
          50%       { transform: translateY(-8px) rotate(2deg); }
        }
        @keyframes pulseRing {
          0%   { transform: translate(-50%, -50%) scale(1);    opacity: 0.35; }
          100% { transform: translate(-50%, -50%) scale(1.5);  opacity: 0; }
        }
        @keyframes pingDot {
          0%, 100% { transform: scale(1); opacity: 1; }
          50%       { transform: scale(1.5); opacity: 0.5; }
        }
        .h-w1 { animation: heroFadeUp 0.7s ease 0.05s both; }
        .h-w2 { animation: heroFadeUp 0.7s ease 0.2s  both; }
        .h-w3 { animation: heroFadeUp 0.7s ease 0.35s both; }
        .h-sub{ animation: heroFadeUp 0.7s ease 0.45s both; }
        .h-cta{ animation: heroFadeUp 0.7s ease 0.55s both; }
        .h-st { animation: heroFadeUp 0.7s ease 0.65s both; }
        .h-img{ animation: heroFadeIn 1s   ease 0.2s  both; }
        .h-c1 { animation: heroFadeUp 0.6s ease 0.8s  both; }
        .h-c2 { animation: heroFadeUp 0.6s ease 0.95s both; }
        .h-c3 { animation: heroFadeUp 0.6s ease 1.1s  both; }
      `}</style>

      <div className="relative w-full overflow-hidden bg-white" style={{ minHeight: '34vh' }}>

        {/* Diagonal cream wedge on the right */}
        <div
          className="absolute inset-0 pointer-events-none z-0"
          style={{ background: 'linear-gradient(108deg, transparent 46%, #F4EDE4 46.8%)' }}
        />

        {/* World map — ghosted */}
        <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none opacity-[0.06]">
          <img 
            src={worldMap} 
            alt="" 
            aria-hidden="true" 
            className="w-full h-full object-contain" 
            width="1320" 
            height="500" 
            loading="eager" 
            fetchpriority="high"
          />
        </div>

        {/* Subtle top-left accent block */}
        <div className="absolute top-0 left-0 w-1.5 h-32 bg-harafBlue z-10" />

        {/* Main layout */}
        <div className="relative z-10 max-w-[1320px] mx-auto px-6 sm:px-10 lg:px-16 flex flex-col lg:flex-row items-center gap-12 lg:gap-6" style={{ minHeight: '94vh', paddingTop: '1rem', paddingBottom: '1rem' }}>

          {/* ── LEFT: Text ─────────────────────────────────── */}
          <div className="w-full lg:w-[52%] flex flex-col items-start">

            {/* Eyebrow */}
            <div className="h-w1 flex items-center gap-3 mb-7 flex-wrap">
              <div className="flex -space-x-2.5">
                {[p3, p2, p1].map((src, i) => (
                  <img 
                    key={i} 
                    src={src} 
                    alt="community member"
                    className="w-8 h-8 rounded-full border-[2.5px] border-white object-cover"
                    style={{ zIndex: 3 - i, boxShadow: '0 1px 4px rgba(0,0,0,0.15)' }}
                    width="32"
                    height="32"
                    loading="eager"
                    fetchpriority="high"
                  />
                ))}
              </div>
              <div className="flex items-center gap-2">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full rounded-full bg-harafBlue opacity-60"
                    style={{ animation: 'pingDot 1.5s ease-in-out infinite' }} />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-harafBlue" />
                </span>
                <span className="text-harafBlue font-dm-sans font-bold text-[11px] uppercase tracking-[0.2em]">
                  Serving rural communities since 2012
                </span>
              </div>
            </div>

            {/* Headline */}
            <h1 className="font-playfair text-primary tracking-tight mb-6" style={{ lineHeight: 1.06 }}>
              <span className="h-w1 block font-medium italic" style={{ fontSize: 'clamp(2.3rem, 5vw, 4.6rem)' }}>
                Reaching the
              </span>
              <span className="h-w2 block font-bold relative" style={{ fontSize: 'clamp(2.3rem, 5vw, 4.6rem)' }}>
                {/* Outlined text */}
                <span style={{ WebkitTextStroke: '2px blue', color: 'transparent', fontFamily: 'Inter, Poppins, system-ui, -apple-system, sans-serif' }}>Unreached</span>
                {/* Yellow underline accent */}
                <span className="absolute bottom-0 left-0 h-[5px] bg-harafYellow" style={{ width: '55%', bottom: '-4px', borderRadius: 2 }} />
              </span>
              <span className="h-w3 block font-medium italic mt-1" style={{ fontSize: 'clamp(2.3rem, 5vw, 4.6rem)' }}>
                Without Barriers<span className="opacity-40 tracking-widest">…</span>
              </span>
            </h1>

            {/* Sub text */}
            <p className="h-sub font-cormorant italic text-[#6B4C32] leading-relaxed mb-8 max-w-[420px]"
              style={{ fontSize: 'clamp(1.05rem, 1.6vw, 1.25rem)' }}>
              Bridging the gap between remote communities and the resources they deserve — one village, one family, one life at a time.
            </p>

            {/* CTAs */}
            <div className="h-cta flex flex-wrap items-center gap-4 mb-1">
              <button
                onClick={() => navigate('/ideas')}
                className="group relative overflow-hidden bg-harafBlue text-white font-dm-sans font-bold text-[11px] uppercase tracking-[0.2em] px-7 py-3.5 flex items-center gap-2 transition-all duration-300"
                style={{ boxShadow: '0 4px 20px rgba(26,120,194,0.3)' }}
              >
                <span className="relative z-10 flex items-center gap-2">
                  Read Our Story
                  <svg fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" className="w-4 h-4 transition-transform group-hover:translate-x-1">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </span>
                <span className="absolute inset-0 bg-[#0A3D6B] -translate-x-full group-hover:translate-x-0 transition-transform duration-300" />
              </button>
            </div>

           

          </div>

          {/* ── RIGHT: Image & floating chips ──────────────────── */}
          <div className="h-img w-full lg:w-[48%] flex items-center justify-center lg:justify-end relative"
            style={{ minHeight: 460 }}>

            {/* Dot grid decoration — top left of the image zone */}
            <div className="absolute top-2 left-0 pointer-events-none z-0"
              style={{
                backgroundImage: 'radial-gradient(circle, #1A78C230 1.4px, transparent 1.4px)',
                backgroundSize: '16px 16px',
                width: 100, height: 100,
              }}
            />

            {/* Pale blue rectangle behind */}
            <div className="absolute right-0 rounded-3xl z-0"
              style={{
                top: '6%', width: '85%', height: '88%',
                background: 'linear-gradient(145deg, #EEF5FC, #F4EDE4)',
                boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.8)',
              }}
            />

            {/* Heart-masked main image */}
            <div className="relative z-10"
              style={{
                width:  'clamp(220px, 33vw, 390px)',
                height: 'clamp(220px, 33vw, 390px)',
                WebkitMaskImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256 96.5l-19.7-20.3C186.1 24.3 104.5 15.9 49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9z'/%3E%3C/svg%3E\")",
                WebkitMaskRepeat: 'no-repeat', WebkitMaskPosition: 'center', WebkitMaskSize: 'contain',
                maskImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256 96.5l-19.7-20.3C186.1 24.3 104.5 15.9 49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9z'/%3E%3C/svg%3E\")",
                maskRepeat: 'no-repeat', maskPosition: 'center', maskSize: 'contain',
                filter: 'drop-shadow(0 20px 40px rgba(10,61,107,0.22))',
              }}
            >
              <img 
                src={heroImage} 
                alt="HARAF rural community outreach"
                className="w-full h-full object-cover object-[25%_center]" 
                width="390" 
                height="390" 
                fetchpriority="high" 
                loading="eager" 
              />
            </div>

            {/* Pulse ring */}
            <div className="absolute z-0 rounded-full border-2 border-harafBlue/15 pointer-events-none"
              style={{
                top: '50%', left: '50%',
                width: 'clamp(240px, 36vw, 420px)',
                height: 'clamp(240px, 36vw, 420px)',
                animation: 'pulseRing 2.8s ease-out 1.2s infinite',
              }}
            />

            {/* Chip 1 — Clean Water */}
            <div className="h-c1 absolute top-[12%] left-[2%] sm:left-[0%] z-20"
              style={{ animation: 'heroFadeUp 0.6s ease 0.8s both, floatA 4.5s ease-in-out 1.5s infinite' }}>
              <div className="bg-white rounded-2xl px-4 py-3 flex items-center gap-3 border border-[#D8E8F0]"
                style={{ boxShadow: '0 8px 30px rgba(26,120,194,0.12)' }}>
                <div className="w-10 h-10 rounded-xl bg-[#EEF5FC] flex items-center justify-center text-xl flex-shrink-0">💧</div>
                <div>
                  <p className="font-playfair font-bold text-primary text-sm leading-tight">Livelihood Empowerment</p>
                  <p className="font-dm-sans text-[#8CB4D6] text-[10px] mt-0.5">50,000+ Youths</p>
                </div>
              </div>
            </div>

            {/* Chip 2 — Education */}
            <div className="h-c2 absolute bottom-[12%] right-[0%] sm:right-[2%] z-20"
              style={{ animation: 'heroFadeUp 0.6s ease 0.95s both, floatB 4s ease-in-out 2s infinite' }}>
              <div className="bg-white rounded-2xl px-4 py-3 flex items-center gap-3 border border-[#F0E8D8]"
                style={{ boxShadow: '0 8px 30px rgba(0,0,0,0.10)' }}>
                <div className="w-10 h-10 rounded-xl bg-[#FEF3CD] flex items-center justify-center text-xl flex-shrink-0">📖</div>
                <div>
                  <p className="font-playfair font-bold text-primary text-sm leading-tight">Education</p>
                  <p className="font-dm-sans text-[#8CB4D6] text-[10px] mt-0.5">5,600 children</p>
                </div>
              </div>
            </div>

            {/* Chip 3 — Community count badge */}
            <div className="h-c3 absolute top-[5%] right-[8%] sm:right-[12%] z-20"
              style={{ animation: 'heroFadeUp 0.6s ease 1.1s both' }}>
              <div className="bg-harafBlue rounded-2xl px-3.5 py-2.5 flex items-center gap-2.5"
                style={{ boxShadow: '0 6px 20px rgba(26,120,194,0.4)' }}>
                <div className="flex -space-x-1.5">
                  {[p1, p2].map((s, i) => (
                    <img 
                      key={i} 
                      src={s} 
                      alt="" 
                      className="w-6 h-6 rounded-full border-2 border-harafBlue object-cover" 
                      width="24" 
                      height="24" 
                      loading="eager" 
                      fetchpriority="high"
                    />
                  ))}
                </div>
                <span className="font-dm-sans font-bold text-white text-[11px] whitespace-nowrap">+14,000 families</span>
              </div>
            </div>

          </div>
        </div>

      </div>
    </>
  );
}

export default Hero;