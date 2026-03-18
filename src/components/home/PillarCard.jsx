import React from 'react';
import { Link } from 'react-router-dom';

const PillarCard = ({ image, tag, title, description, link }) => {
  return (
    <div className="w-full max-w-[400px] lg:max-w-[300px] xl:max-w-[400px] bg-[#F7FBFF] rounded-[4px] shadow-[0_2px_10px_rgba(0,0,0,0.05)] flex overflow-hidden">
      {/* Image */}
      <div className="w-[130px] sm:w-[160px] lg:w-[130px]  flex-shrink-0 overflow-hidden hover:mouse-pointer">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-all duration-500 grayscale-0 hover:grayscale hover:cursor-pointer"
        />
      </div>

      {/* Content */}
      <div className="flex-1 p-4 sm:p-5 lg:px-3 xl:px-5 flex flex-col justify-center">
        <div className="mb-2">
          <span className="bg-[#22C55E] text-white text-[9px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full">
            {tag}
          </span>
        </div>

        <h3 className="text-primary font-playfair font-bold text-[16px] sm:text-[17px] leading-[1.25] mb-2">
          {title}
        </h3>

        <p className="text-[#4B5563] font-dm-sans text-[11px] leading-[1.5] mb-3 line-clamp-3">
          {description}
        </p>
      </div>
    </div>
  );
};

export default PillarCard;