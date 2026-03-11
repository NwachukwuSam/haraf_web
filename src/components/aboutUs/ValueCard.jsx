import React from 'react';

const ValueCard = ({ number, title, description }) => {
  return (
    <div className="bg-[#F7FBFF] p-10 flex flex-col items-center text-center shadow-sm border border-gray-100 rounded-sm">
      <span className="text-[#E0E0E0] text-[64px] font-playfair font-bold leading-none mb-6">
        {number}
      </span>
      <h3 className="text-primary text-sm font-dm-sans font-bold tracking-[0.2em] uppercase mb-8">
        {title}
      </h3>
      <p className="text-[#5D4037] text-sm font-dm-sans leading-[1.8] opacity-80">
        {description}
      </p>
    </div>
  );
};

export default ValueCard;
