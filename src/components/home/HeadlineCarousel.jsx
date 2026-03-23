import React, { useEffect, useRef } from 'react';
import headlineImage1 from '../../assets/headlineImage1.jpg';
import headlineImage2 from '../../assets/headlineImage2.jpg';
import headlineImage3 from '../../assets/headlineImage3.jpg';
import headlineImage4 from '../../assets/headlineImage4.jpg';
import headlineImage5 from '../../assets/headlineImage5.jpg';
import headlineImage6 from '../../assets/headlineImage6.jpg';

const images = [
  headlineImage1, headlineImage2, headlineImage3,
  headlineImage4, headlineImage5, headlineImage6,
];

// Duplicate the array for a seamless loop
const scrollImages = [...images, ...images];

const HeadlineCarousel = () => {
  const scrollRef = useRef(null);

  useEffect(() => {
    let animationId;
    let scrollPos = 0;
    const speed = 0.8; // Pixels per frame

    const animate = () => {
      if (!scrollRef.current) return;
      
      scrollPos -= speed;
      
      // When the first set of images has fully passed, reset
      // Each image is 280px + 24px gap = 304px (Mobile)
      // md: 400px + 32px gap = 432px (Desktop)
      const itemWidth = window.innerWidth < 768 ? 304 : 432;
      const resetPoint = -(itemWidth * images.length);
      
      if (scrollPos <= resetPoint) {
        scrollPos = 0;
      }
      
      scrollRef.current.style.transform = `translateX(${scrollPos}px)`;
      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationId);
  }, []);

  return (
    <section className="w-full py-24 bg-white overflow-hidden">
      {/* Header Section */}
      <div className="text-center mb-30 px-6">
        <p className="text-harafBlue text-sm tracking-[0.2em] font-dm-sans font-bold uppercase mb-4">
          FROM THE FIELD
        </p>
        <h2 className="text-primary text-4xl md:text-5xl font-playfair font-bold leading-tight">
          Our Work, Up Close.
        </h2>
      </div>

      {/* Scrolling Strip */}
      <div className="relative w-full">
        <div className="absolute -top-26 left-1/2 -translate-x-1/2 w-[140%] h-[120px] bg-white rounded-[50%/60px] pointer-events-none z-20" />
        <div 
          ref={scrollRef}
          className="flex gap-6 md:gap-8 will-change-transform z-15"
          style={{ width: 'max-content' }}
        >
          {scrollImages.map((img, idx) => (
            <div 
              key={idx}
              className="w-[280px] h-[280px] md:w-[400px] md:h-[400px] flex-shrink-0 rounded-sm overflow-hidden shadow-sm"
            >
              <img 
                src={img} 
                alt={`Field ${idx % 6 + 1}`} 
                className="w-full h-full object-cover" 
                width="400"
                height="400"
                loading="lazy"
              />
            </div>
          ))}
        </div>
        <div className="absolute -bottom-25 left-1/2 -translate-x-1/2 w-[140%] h-[120px] bg-white rounded-[50%/50px] pointer-events-none z-20" />
      </div>
    </section>
  );
};

export default HeadlineCarousel;
