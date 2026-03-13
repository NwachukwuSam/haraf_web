import React from 'react';
import worldMap from '../../assets/WorldMap.svg';
import heroImage from '../../assets/heroImage.jpg';
import p1 from '../../assets/heroSubImage1.jpg';
import p2 from '../../assets/heroSubImage2.jpg';
import p3 from '../../assets/heroSubImage3.jpg';
import { useNavigate } from 'react-router-dom';

function Hero() {
  const navigate = useNavigate();

  const handleCTAClick = () => {
    navigate('/ideas');
  };

  return (
    <section className="relative w-full overflow-hidden bg-white py-16 lg:py-10 px-8 lg:px-16 flex items-center min-h-[85vh]">
      {/* Background Map */}
      <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none opacity-15">
        <img src={worldMap} alt="" aria-hidden="true" className="w-full h-full object-cover lg:object-contain object-center" />
      </div>

      <div className="relative z-10 w-full max-w-[1400px] mx-auto flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-8">

        {/* Left: Text */}
        <div className="w-full lg:w-1/2 flex flex-col items-start gap-4">

          {/* Badge pill */}
          <div className="flex items-center gap-2 flex-wrap">
            <div className="flex -space-x-2">
              {[p3, p2, p1].map((src, i) => (
                <img key={i} src={src} alt="community" className="w-6 h-6 sm:w-7 sm:h-7 rounded-full border-2 border-black object-cover" />
              ))}
            </div>
            <span className="text-harafBlue font-medium text-[10px] sm:text-xs uppercase tracking-wider">
              Serving rural communities since 2012
            </span>
          </div>

          {/* Heading */}
          <h1 className="font-playfair font-medium italic text-4xl sm:text-5xl md:text-6xl lg:text-[4.75rem] leading-[1.08] text-primary tracking-tight">
            Reaching the <br /> Unreached <br /> Without Barriers<span className="tracking-widest">...</span>
          </h1>

          {/* CTA */}
          <button onClick={handleCTAClick} className="mt-2 bg-harafBlue hover:bg-blue-700 text-white font-dm-sans font-bold text-xs tracking-wider px-6 py-2.5 flex items-center gap-2 transition-colors">
            READ IT HERE
            <svg fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" className="w-4 h-4">
              <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </button>
        </div>

        {/* Right: Heart image — hidden on very small screens, shown from sm up */}
        <div className="w-full lg:w-1/2 flex justify-center lg:justify-end mt-6 lg:mt-0">
          <div
            className="w-[260px] h-[260px] sm:w-[380px] sm:h-[380px] lg:w-[440px] lg:h-[440px]"
            style={{
              WebkitMaskImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256 96.5l-19.7-20.3C186.1 24.3 104.5 15.9 49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9z'/%3E%3C/svg%3E\")",
              WebkitMaskRepeat: "no-repeat",
              WebkitMaskPosition: "center",
              WebkitMaskSize: "contain",
              maskImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256 96.5l-19.7-20.3C186.1 24.3 104.5 15.9 49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9z'/%3E%3C/svg%3E\")",
              maskRepeat: "no-repeat",
              maskPosition: "center",
              maskSize: "contain",
            }}
          >
            <img src={heroImage} alt="Haraf rural community outreach" className="w-full h-full object-cover object-[25%_center]" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
