import React from 'react';

const NewsCard = ({ image, badgeText, title, date, description, onClick, catColors, className }) => {
  return (
    <div 
      onClick={onClick}
      className={`group cursor-pointer bg-white hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col h-full ${className || ''}`}
    >
      <div className="relative overflow-hidden mb-6 shrink-0">
        <img 
          src={image} 
          alt={title}
          className="w-full h-[280px] object-cover transform group-hover:scale-105 transition-transform duration-500"
          width="400"
          height="280"
          loading="lazy"
        />
        <span 
          className="absolute top-4 left-4 text-xs font-bold px-3 py-1.5 tracking-wider"
          style={{ backgroundColor: catColors?.bg || '#F3EAD8', color: catColors?.text || '#5C4D32' }}
        >
          {badgeText}
        </span>
      </div>
      
      <div className="flex flex-col flex-grow px-2 pb-6 space-y-4">
        <h3 className="text-primary text-2xl font-playfair font-bold leading-tight group-hover:text-harafYellow transition-colors">
          {title}
        </h3>
        
        <p className="text-gray-600 text-sm font-dm-sans">
          {date}
        </p>
        
        <p className="text-gray-700 font-dm-sans leading-relaxed flex-grow">
          {description}
        </p>
        
        <div className="inline-flex items-center text-harafYellow font-dm-sans text-sm font-bold tracking-wider uppercase hover:text-primary transition-colors group-hover:gap-2 mt-auto pt-2">
          READ FULL STORY <span className="ml-2 text-lg leading-none transition-transform group-hover:translate-x-1">→</span>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;