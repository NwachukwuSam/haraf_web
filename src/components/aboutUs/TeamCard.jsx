import React from 'react';

const TeamCard = ({ image, name, role, description }) => {
  return (
    <div className="flex flex-col h-full">
      <div className="aspect-[5/5] w-full overflow-hidden mb-6">
        <img src={image} alt={name} className="w-full h-full object-cover object-top rounded-md" />
      </div>
      <div className="flex flex-col flex-grow">
        <h3 className="text-primary text-2xl font-playfair font-bold mb-2">
          {name}
        </h3>
        <p className="text-[#A1887F] text-[10px] font-dm-sans font-bold tracking-[0.2em] uppercase mb-6 border-b border-gray-100 pb-4">
          {role}
        </p>
        <p className="text-[#5D4037] text-sm font-dm-sans leading-[1.8] opacity-80">
          {description}
        </p>
      </div>
    </div>
  );
};

export default TeamCard;
