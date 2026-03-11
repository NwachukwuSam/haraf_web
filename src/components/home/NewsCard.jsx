import React from 'react';
import { Link } from 'react-router-dom';

const NewsCard = ({ image, badgeText, title, date, description, linkUrl }) => {
  return (
    <div className="bg-white flex flex-col h-full shadow-[0_4px_20px_rgba(0,0,0,0.04)] rounded-[4px] overflow-hidden">
      {/* Image Container */}
      <div className="w-full h-[240px] flex-shrink-0">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover"
        />
      </div>
      
      {/* Content Container */}
      <div className="p-6 md:p-8 flex flex-col flex-grow relative">
        {/* Badge */}
        <div className="mb-4">
          <span className="bg-[#22C55E] text-white text-[10px] font-bold uppercase tracking-wider px-3 py-1.5 rounded-full inline-block">
            {badgeText}
          </span>
        </div>
        
        {/* Title */}
        <h3 className="text-primary font-playfair font-bold text-[24px] md:text-[28px] leading-tight mb-4">
          {title}
        </h3>
        
        {/* Date */}
        <p className="text-[#8CB4D6] font-dm-sans text-[9px] font-bold tracking-[0.1em] uppercase mb-4">
          {date}
        </p>
        
        {/* Description */}
        <p className="text-[#4B5563] font-dm-sans text-[15px] leading-relaxed mb-8 flex-grow">
          {description}
        </p>
        
        {/* Link */}
        <Link 
          to={linkUrl || "#"} 
          className="font-dm-sans text-[13px] font-bold flex items-center hover:opacity-80 transition-opacity mt-auto text-[#0A84FF]"
        >
          Read More <span className="ml-1 font-serif text-lg leading-none">→</span>
        </Link>
      </div>
    </div>
  );
};

export default NewsCard;
