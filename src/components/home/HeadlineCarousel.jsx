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
  const containerRef = useRef(null);
  const itemsRef = useRef([]);

  useEffect(() => {
    let progress = 0;
    let rafId;

    const render = () => {
      // Automatic constant motion from Left to Right
      progress += 0.0006; 
      
      const containerWidth = containerRef.current?.offsetWidth || window.innerWidth;
      const centerX = containerWidth / 2;
      
      // Total span for the 6 images to follow each other in a line
      // Using a large span so they follow linearly without overlapping
      const totalSpan = containerWidth * 2.5; 
      const itemSpacing = totalSpan / images.length;

      itemsRef.current.forEach((el, i) => {
        if (!el) return;
        
        // Linear position calculation with seamless wrap
        let xPos = (i * itemSpacing + progress * totalSpan) % totalSpan;
        // Shift so 0 is center, ranges from -totalSpan/2 to totalSpan/2
        let x = xPos - totalSpan / 2;
        
        // Normalized X relative to the viewport center (-1 to 1 at viewport edges roughly)
        // We use centerX (half viewport) as the unit
        let normalizedX = x / (containerWidth / 2);
        
        // Vertical center is "Zero Distortion Line"
        // distortionFactor is 0 at center, peaks, and then should taper at edges
        // Using a function that peaks around 0.5 and returns 0 at 1
        // We'll use a modified sine or gaussian for tapering
        let absX = Math.abs(normalizedX);
        
        // Wider perspective (fanning) - peaks then tapers
        // This function handles the "at side closer to screen side should have wider perspective"
        // and "closer it gets to side, the smaller it becomes till it gets normal"
        let distortionFactor = Math.sin(Math.min(absX, 1) * Math.PI); // Peaks at absX=0.5, 0 at 0 and 1
        
        // Zero distortion at center (absX=0)
        // Fan out (wider perspective) by rotating towards the viewer
        // On right (x>0), rotateY is negative to face the right edge toward center? 
        // No, user says "side closer to edge should have wider perspective"
        // Let's rotate it such that the outer side comes forward.
        let rotateY = Math.sign(normalizedX) * distortionFactor * -40;

        // "Smaller that side becomes" - applying a subtle perspective scale or z-recession
        // We'll use a small Z offset based on distortion
        let z = distortionFactor * 50; // Come forward as it fans out

        // Linear movement (no overlapping in rank)
        // We use translate3d(x, -50%, z)
        el.style.transform = `translate3d(${x}px, -50%, ${z}px) rotateY(${rotateY}deg)`;
        
        // Opacity: Fade out near the wrap points
        let opacity = 1;
        if (absX > 1.2) {
          opacity = Math.max(0, 1 - (absX - 1.2) * 4);
        }
        el.style.opacity = opacity;
        
        // Linear order z-index (though since they don't overlap, z-index matters less)
        el.style.zIndex = Math.round((2 - absX) * 10);
      });

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
        <h2 className="text-primary text-4xl md:text-5xl font-playfair font-bold leading-tight">
          Headline:<br />
          Our Work, Up Close.
        </h2>
      </div>

      {/* Container with Perspective for the 3D effect */}
      <div 
        ref={containerRef}
        className="relative w-full h-[350px] md:h-[500px] mb-8"
        style={{ 
          perspective: '1200px', 
          perspectiveOrigin: '50% 50%',
          transformStyle: 'preserve-3d' 
        }}
      >
        <div className="absolute top-1/2 left-1/2 w-full h-full" style={{ transformStyle: 'preserve-3d' }}>
          {images.map((img, idx) => (
            <div 
              key={idx} 
              ref={el => itemsRef.current[idx] = el}
              className="absolute left-0 top-0 w-[240px] h-[240px] md:w-[420px] md:h-[420px] rounded-[12px] overflow-hidden shadow-2xl will-change-transform"
              style={{ 
                transformOrigin: 'center center',
                left: '-120px', // Adjusted to center relative to MD width
                marginLeft: '0px'
              }}
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
