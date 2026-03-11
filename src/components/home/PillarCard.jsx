import React from 'react';
import { Link } from 'react-router-dom';

const PillarCard = ({ image, tag, title, description, link }) => {
  return (
    <div className="w-[400px] h-[219px] bg-[#F7FBFF] rounded-[4px] shadow-[0_2px_10px_rgba(0,0,0,0.05)] flex overflow-hidden">
      {/* Left side: Image */}
      <div className="w-[170px] h-full flex-shrink-0">
        <img src={image} alt={title} className="w-full h-full object-cover" />
      </div>
      
      {/* Right side: Content */}
      <div className="flex-1 p-5 flex flex-col justify-center relative">
        <div className="mb-3">
          <span className="bg-[#22C55E] text-white text-[9px] font-bold uppercase tracking-wider px-3 py-1 rounded-full">
            {tag}
          </span>
        </div>
        
        <h3 className="text-primary font-playfair font-bold text-[18px] leading-[1.2] mb-3">
          {title}
        </h3>
        
        <p className="text-[#4B5563] font-dm-sans text-[11px] leading-[1.5] mb-4 line-clamp-3">
          {description}
        </p>
        
        <Link to={link || "#"} className="text-primary font-dm-sans text-[11px] font-medium flex items-center hover:opacity-80 transition-opacity mt-auto">
          Explore Programme <span className="ml-[2px] font-serif">→</span>
        </Link>
      </div>
    </div>
  );
};

export default PillarCard;
