import React from 'react';
import { Link } from 'react-router-dom';

const PillarCard = ({ image, tag, title, description, link }) => {
  return (
    <div className="w-full max-w-[340px] sm:max-w-[380px] md:max-w-[400px] h-auto min-h-[190px] xl:max-w-none xl:w-[400px] xl:h-[219px] lg:w-[280px] lg:h-[180px] bg-[#F7FBFF] rounded-[4px] shadow-[0_2px_10px_rgba(0,0,0,0.05)] flex flex-row overflow-hidden mx-auto lg:mx-0">
      {/* Left side: Image */}
      <div className="w-[120px] sm:w-[150px] lg:w-[100px] xl:w-[170px] h-auto shrink-0 flex items-stretch">
        <img src={image} alt={title} className="w-full h-full object-cover" />
      </div>
      
      {/* Right side: Content */}
      <div className="flex-1 p-3 sm:p-4 lg:p-2 xl:p-5 flex flex-col justify-center relative">
        <div className="mb-2 xl:mb-3">
          <span className="bg-[#22C55E] text-white text-[8px] xl:text-[9px] font-bold uppercase tracking-wider px-2 py-1 xl:px-3 rounded-full">
            {tag}
          </span>
        </div>
        
        <h3 className="text-primary font-playfair font-bold text-[14px] sm:text-[16px] lg:text-[12px] xl:text-[18px] leading-[1.2] mb-1 sm:mb-2 xl:mb-3">
          {title}
        </h3>
        
        <p className="text-[#4B5563] font-dm-sans text-[10px] sm:text-[11px] lg:text-[9px] xl:text-[11px] leading-[1.4] mb-2 sm:mb-4 lg:mb-2 xl:mb-4 line-clamp-3">
          {description}
        </p>
        
        <Link to={link || "#"} className="text-primary font-dm-sans text-[10px] xl:text-[11px] font-medium flex items-center hover:opacity-80 transition-opacity mt-auto">
          Explore Programme <span className="ml-[2px] font-serif">→</span>
        </Link>
      </div>
    </div>
  );
};

export default PillarCard;
