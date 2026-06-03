import React from 'react';
import { Link } from 'react-router-dom';
import fao from '../../assets/fao.svg';
import unicef from '../../assets/unicef.svg';
import unhcr from '../../assets/unhcr.svg';
import wfo from '../../assets/wfo.svg';
import ubec from '../../assets/ubec.png';
import vso from '../../assets/vso.png';
import afd from '../../assets/afd.jpeg';
import cam from '../../assets/cam.jpeg';
import foreign from '../../assets/foreign.jpeg';
import fos from '../../assets/fos.jpeg';
import german from '../../assets/german.jpeg';
import idilton from '../../assets/idilton.jpeg';
import image from '../../assets/image.jpeg';
import nhf from '../../assets/nhf.jpeg';
import paladium from '../../assets/palladium.jpeg';
import plan from '../../assets/plan.jpeg';
import prop from '../../assets/prop.jpeg';
import vsf from '../../assets/vsf.jpeg';

// Partners data (fixed syntax, added missing commas)
const partnersData = [
  { id: 1, imageUrl: vso, name: 'VSO' },
  { id: 2, imageUrl: wfo, name: 'WFO' },
  { id: 3, imageUrl: unhcr, name: 'UNHCR' },
  { id: 4, imageUrl: unicef, name: 'UNICEF' },
  { id: 5, imageUrl: fao, name: 'FAO' },
  { id: 6, imageUrl: ubec, name: 'UBEC' },
  { id: 7, imageUrl: afd, name: 'AFD' },
  { id: 8, imageUrl: cam, name: 'CAM' },
  { id: 9, imageUrl: foreign, name: 'Foreign' },
  { id: 10, imageUrl: fos, name: 'FOS' },
  { id: 11, imageUrl: german, name: 'German' },
  { id: 12, imageUrl: idilton, name: 'Idilton' },
  { id: 13, imageUrl: image, name: 'Image' },
  { id: 14, imageUrl: nhf, name: 'NHF' },
  { id: 15, imageUrl: paladium, name: 'Palladium' },
  { id: 16, imageUrl: plan, name: 'Plan' },
  { id: 17, imageUrl: prop, name: 'Prop' },
  { id: 18, imageUrl: vsf, name: 'VSF' },
];

const Partners = () => {
  // Duplicate the array for seamless looping (optional but ensures no gaps)
  const scrollingLogos = [...partnersData, ...partnersData];

  return (
    <section className="w-full py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section (unchanged) */}
        <div className="text-center mb-16">
          <p className="text-[#8CB4D6] text-sm tracking-[0.2em] font-dm-sans font-bold uppercase mb-4">
            THOSE WHO MAKE IT POSSIBLE
          </p>
          <h2 className="text-primary text-4xl md:text-5xl font-playfair font-bold leading-tight mb-6">
            We Don't Do This Alone.
          </h2>
          <p className="text-[#4B5563] font-dm-sans text-lg md:text-[20px] max-w-3xl mx-auto leading-relaxed">
            Our work is powered by a coalition of government partners, international NGOs, corporate sponsors, and thousands of individual donors who believe in rural dignity.
          </p>
        </div>

        {/* Horizontal scrolling marquee */}
        <div className="relative w-full overflow-hidden">
          <div className="flex animate-scroll">
            {scrollingLogos.map((partner, index) => (
              <div
                key={`${partner.id}-${index}`}
                className="flex-shrink-0 w-[180px] h-[140px] flex flex-col items-center justify-center p-4 mx-2"
              >
                {partner.imageUrl ? (
                  <img
                    src={partner.imageUrl}
                    alt={partner.name}
                    className="max-h-20 w-auto object-contain mb-2 transition-transform duration-300 hover:scale-110"
                    width="120"
                    height="80"
                    loading="lazy"
                  />
                ) : (
                  <div className="w-full h-20 bg-gray-100 flex items-center justify-center rounded mb-2 text-xs text-gray-400 font-dm-sans">
                    Logo Placeholder
                  </div>
                )}
                {/* Optionally show partner name – hidden by default, uncomment if needed */}
                {/* <span className="text-primary font-dm-sans text-xs font-bold leading-tight">
                  {partner.name}
                </span> */}
              </div>
            ))}
          </div>
        </div>

        {/* Footer Link (unchanged) */}
        <div className="flex justify-start border-b-2 border-harafYellow pb-2 max-w-[200px] mt-16">
          <Link
            to="/donate"
            className="text-[#6B4C32] font-dm-sans text-sm font-bold tracking-wider uppercase flex items-center hover:text-primary transition-colors"
          >
            BECOME A PARTNER <span className="ml-2 font-serif text-lg leading-none">→</span>
          </Link>
        </div>
      </div>

      {/* Tailwind CSS custom animation – add to your global CSS or use a style tag */}
      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-scroll {
          animation: scroll 30s linear infinite;
          width: fit-content;
        }
        /* Pause animation on hover for better usability */
        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};

export default Partners;