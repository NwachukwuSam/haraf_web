import React from 'react';
import { Link } from 'react-router-dom';

const MovementCard = ({ badgeText, badgeColor, title, description, linkText, linkUrl }) => {
  return (
    <div 
      className="bg-white p-8 flex flex-col justify-start h-[280px] shadow-[0_4px_20px_rgba(0,0,0,0.03)] rounded-r-md rounded-bl-md relative"
      style={{ borderLeft: `4px solid ${badgeColor}` }}
    >
      {/* Tag */}
      <div className="mb-6">
        <span 
          className="text-white text-[10px] font-bold uppercase tracking-wider px-4 py-1.5 rounded-full"
          style={{ backgroundColor: badgeColor }}
        >
          {badgeText}
        </span>
      </div>
      
      {/* Title */}
      <h3 className="text-primary font-playfair font-bold text-[24px] leading-tight mb-4">
        {title}
      </h3>
      
      {/* Description */}
      <p className="text-[#4B5563] font-dm-sans text-[14px] leading-relaxed mb-8 flex-grow">
        {description}
      </p>
      
      {/* Link */}
      <Link 
        to={linkUrl || "#"} 
        className="font-dm-sans text-[13px] font-bold flex items-center hover:opacity-80 transition-opacity mt-auto"
        style={{ color: '#0A84FF' }} // Use a standard blue link color or badge color? In design it's a nice cerulean blue
      >
        {linkText} <span className="ml-1 font-serif text-lg leading-none">→</span>
      </Link>
    </div>
  );
};

export default MovementCard;
