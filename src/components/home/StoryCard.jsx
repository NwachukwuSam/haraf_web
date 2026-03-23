import React from 'react';

const StoryCard = ({ location, quote, author }) => {
  return (
    <div className="bg-white border-l-4 border-l-harafYellow p-10 flex flex-col items-stretch h-full shadow-[0_4px_20px_rgba(0,0,0,0.03)] rounded-r-md rounded-bl-md relative">
      
      {/* Location / Tag */}
      <div className="flex justify-end mb-8 shrink-0">
        <span className="text-[#6B4C32] font-dm-sans text-xs tracking-widest uppercase font-bold">
          {location}
        </span>
      </div>
      
      {/* Quote */}
      <div className="flex flex-col justify-center flex-grow mb-8 px-4">
        <p className="font-cormorant font-medium italic text-[22px] text-[#333333] leading-relaxed text-center">
          “{quote}”
        </p>
      </div>
      
      {/* Author and Quote Icon Bottom Right */}
      <div className="flex items-center justify-between mt-auto shrink-0 relative z-10">
        <div className="flex items-center">
          <div className="w-8 h-[2px] bg-harafBlue mr-4"></div>
          <span className="font-dm-sans text-harafBlue text-sm font-bold">
            {author}
          </span>
        </div>
        
        {/* Quote watermark icon */}
        <div className="text-harafYellow opacity-40 text-6xl font-serif leading-none absolute -bottom-2 -right-2">
          ”
        </div>
      </div>
    </div>
  );
};

export default StoryCard;
