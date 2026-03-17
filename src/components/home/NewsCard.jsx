// import React from 'react';
// import { Link } from 'react-router-dom';

// const NewsCard = ({ image, badgeText, title, date, description, linkUrl }) => {
//   return (
//     <div className="bg-white flex flex-col h-full shadow-[0_4px_20px_rgba(0,0,0,0.04)] rounded-[4px] overflow-hidden">
//       {/* Image Container */}
//       <div className="w-full h-[240px] flex-shrink-0">
//         <img 
//           src={image} 
//           alt={title} 
//           className="w-full h-full object-cover"
//         />
//       </div>
      
//       {/* Content Container */}
//       <div className="p-6 md:p-8 flex flex-col flex-grow relative">
//         {/* Badge */}
//         <div className="mb-4">
//           <span className="bg-[#22C55E] text-white text-[10px] font-bold uppercase tracking-wider px-3 py-1.5 rounded-full inline-block">
//             {badgeText}
//           </span>
//         </div>
        
//         {/* Title */}
//         <h3 className="text-primary font-playfair font-bold text-[24px] md:text-[28px] leading-tight mb-4">
//           {title}
//         </h3>
        
//         {/* Date */}
//         <p className="text-[#8CB4D6] font-dm-sans text-[9px] font-bold tracking-[0.1em] uppercase mb-4">
//           {date}
//         </p>
        
//         {/* Description */}
//         <p className="text-[#4B5563] font-dm-sans text-[15px] leading-relaxed mb-8 flex-grow">
//           {description}
//         </p>
        
//         {/* Link */}
//         <Link 
//           to={linkUrl || "#"} 
//           className="font-dm-sans text-[13px] font-bold flex items-center hover:opacity-80 transition-opacity mt-auto text-[#0A84FF]"
//         >
//           Read More <span className="ml-1 font-serif text-lg leading-none">→</span>
//         </Link>
//       </div>
//     </div>
//   );
// };

// export default NewsCard;


import React from 'react';

const NewsCard = ({ image, badgeText, title, date, description, onClick, catColors }) => {
  return (
    <div 
      onClick={onClick}
      className="group cursor-pointer bg-white hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
    >
      <div className="relative overflow-hidden mb-6">
        <img 
          src={image} 
          alt={title}
          className="w-full h-[280px] object-cover transform group-hover:scale-105 transition-transform duration-500"
        />
        <span 
          className="absolute top-4 left-4 text-xs font-bold px-3 py-1.5 tracking-wider"
          style={{ backgroundColor: catColors?.bg || '#F3EAD8', color: catColors?.text || '#5C4D32' }}
        >
          {badgeText}
        </span>
      </div>
      
      <div className="space-y-4 px-2 pb-6">
        <h3 className="text-primary text-2xl font-playfair font-bold leading-tight group-hover:text-harafYellow transition-colors">
          {title}
        </h3>
        
        <p className="text-gray-600 text-sm font-dm-sans">
          {date}
        </p>
        
        <p className="text-gray-700 font-dm-sans leading-relaxed">
          {description}
        </p>
        
        <div className="inline-flex items-center text-harafYellow font-dm-sans text-sm font-bold tracking-wider uppercase hover:text-primary transition-colors group-hover:gap-2">
          READ FULL STORY <span className="ml-2 text-lg leading-none transition-transform group-hover:translate-x-1">→</span>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;