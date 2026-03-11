import React, { useEffect, useRef } from 'react';
import headlineImage1 from '../../assets/headlineImage1.jpg';
import headlineImage2 from '../../assets/headlineImage2.jpg';
import headlineImage3 from '../../assets/headlineImage3.jpg';
import headlineImage4 from '../../assets/headlineImage4.jpg';
import headlineImage5 from '../../assets/headlineImage5.jpg';
import headlineImage6 from '../../assets/headlineImage6.jpg';

const images = [
  headlineImage1,
  headlineImage2,
  headlineImage3,
  headlineImage4,
  headlineImage5,
  headlineImage6,
];

const HeadlineCarousel = () => {
  const itemsRef = useRef([]);
  const isHovered = useRef(false);

  useEffect(() => {
    let progress = 0;
    let rafId;

    const render = () => {
      // Only advance progress if the user is hovering over the carousel
      if (isHovered.current) {
        progress -= 0.0008; // Significantly reduced speed
      }
      
      if (itemsRef.current) {
        itemsRef.current.forEach((el, i) => {
          if (!el) return;
          
          // Smooth seamless infinite mapping from -0.5 to 0.5
          let t = (((i / 6) + progress) % 1 + 1) % 1;
          if (t > 0.5) t -= 1;
          
          let angle = t * Math.PI * 2;
          
          // 3D positioning
          let x = Math.sin(angle) * 700; 
          let z = Math.cos(angle) * 350 - 350; // Convex depth: 0 at center, -700 at back
          
          // Rotation mapping. Standard cover flow usually faces the center slightly.
          let rotateY = t * 200; 
          
          // Widen and wrap around at the edges
          let absT = Math.abs(t);
          let widen = Math.pow(Math.sin(absT * Math.PI), 2); // 0 at center, 1 at edges
          let scaleX = 1 + widen * 1.5; 
          let scaleY = 1 + widen * 0.1;
          
          // Fade out nicely as they cycle behind
          let opacity = 1;
          if (absT > 0.25) {
              opacity = 1 - ((absT - 0.25) * 3.5);
          }
          if (opacity < 0) opacity = 0;
          
          let zIndex = Math.round((1 - absT) * 100);

          el.style.transform = `translate(-50%, -50%) translateX(${x}px) translateZ(${z}px) rotateY(${rotateY}deg) scale(${scaleX}, ${scaleY})`;
          el.style.opacity = opacity;
          el.style.zIndex = zIndex;
        });
      }

      rafId = requestAnimationFrame(render);
    };

    rafId = requestAnimationFrame(render);
    return () => cancelAnimationFrame(rafId);
  }, []);

  return (
    <section className="w-full py-24 bg-white overflow-hidden">
      
      {/* Header Section */}
      <div className="text-center mb-16 relative z-20">
        <p className="text-[#8CB4D6] text-sm tracking-[0.2em] font-dm-sans font-bold uppercase mb-4">
          FROM THE FIELD
        </p>
        <h2 className="text-primary text-4xl md:text-5xl lg:text-[56px] font-playfair font-bold leading-tight">
          Headline:<br />
          Our Work, Up Close.
        </h2>
      </div>

      {/* 3D Carousel Container */}
      <div 
        className="relative w-full h-[350px] md:h-[500px] mb-8"
        style={{ perspective: '1200px', transformStyle: 'preserve-3d' }}
        onMouseEnter={() => isHovered.current = true}
        onMouseLeave={() => isHovered.current = false}
        onTouchStart={() => isHovered.current = true}
        onTouchEnd={() => isHovered.current = false}
      >
        <div className="absolute top-1/2 left-1/2 w-full h-full" style={{ transformStyle: 'preserve-3d' }}>
          {images.map((img, idx) => (
            <div 
              key={idx} 
              ref={el => itemsRef.current[idx] = el}
              className="absolute left-0 top-0 w-[280px] h-[280px] md:w-[450px] md:h-[450px] rounded-[12px] overflow-hidden shadow-2xl will-change-transform"
              style={{ transformOrigin: 'center center' }}
            >
              <img 
                src={img} 
                alt={`Headline ${idx + 1}`} 
                className="w-full h-full object-cover" 
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeadlineCarousel;
