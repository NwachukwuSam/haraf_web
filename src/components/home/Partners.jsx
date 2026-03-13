import React from 'react';
import { Link } from 'react-router-dom';
import fao from '../../assets/fao.svg';
import unicef from '../../assets/unicef.svg';
import unhcr from '../../assets/unhcr.svg';
import wfo from '../../assets/wfo.svg';
import ubec from '../../assets/ubec.png';
import vso from '../../assets/vso.png';

const partnersData = [
  { id: 1, name: "Volunteer Service Organisation", imageUrl: vso },
  { id: 2, name: "World Food Programme", imageUrl: wfo },
  { id: 3, name: "UNHCR", imageUrl: unhcr },
  { id: 4, name: "UNICEF", imageUrl: unicef },
  { id: 5, name: "Food and Agriculture Organisation", imageUrl: fao },
  { id: 6, name: "Universal Basic Education Board", imageUrl: ubec }
];

const Partners = () => {
  return (
    <section className="w-full py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
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

        {/* Partners Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-16">
          {partnersData.map((partner) => (
            <div 
              key={partner.id} 
              className="bg-transparent h-[160px] flex flex-col items-center justify-center p-4 text-center"
            >
              {partner.imageUrl ? (
                <img 
                  src={partner.imageUrl} 
                  alt={partner.name} 
                  className="max-h-20 w-auto object-contain mb-2" 
                />
              ) : (
                <div className="w-full h-20 bg-gray-100 flex items-center justify-center rounded mb-2 text-xs text-gray-400 font-dm-sans">
                  Logo Placeholder
                </div>
              )}
              {/* <span className="text-primary font-dm-sans text-xs font-bold leading-tight">
                {partner.name}
              </span> */}
            </div>
          ))}
        </div>

        {/* Footer Link */}
        <div className="flex justify-start border-b-2 border-harafYellow pb-2 max-w-[200px]">
          <Link 
            to="/donate" 
            className="text-[#6B4C32] font-dm-sans text-sm font-bold tracking-wider uppercase flex items-center hover:text-primary transition-colors"
          >
            BECOME A PARTNER <span className="ml-2 font-serif text-lg leading-none">→</span>
          </Link>
        </div>

      </div>
    </section>
  );
};

export default Partners;
