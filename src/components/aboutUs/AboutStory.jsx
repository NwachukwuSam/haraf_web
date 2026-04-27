import React, { useEffect, useRef, useState } from 'react';
import worldMap from '../../assets/WorldMap.svg';

// Animated Counter Component
const AnimatedCounter = ({ targetNumber, suffix = '', duration = 2500 }) => {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const elementRef = useRef(null);

  const formatNumber = (num) => num.toLocaleString();

  const startCounting = () => {
    let startTime = null;
    let animationFrameId = null;

    const animateCount = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      const currentCount = Math.floor(easeOutQuart * targetNumber);

      setCount(currentCount);

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(animateCount);
      } else {
        setCount(targetNumber);
      }
    };

    animationFrameId = requestAnimationFrame(animateCount);

    return () => {
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
    };
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          const cleanup = startCounting();
          return cleanup;
        }
      },
      { threshold: 0.3 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, [targetNumber]);

  return (
    <span ref={elementRef}>
      {formatNumber(count)}{suffix}
    </span>
  );
};

const AboutStory = () => {
  return (
    <section 
      className="relative w-full py-16 md:py-24 bg-white overflow-hidden"
      style={{ 
        backgroundImage: `url(${worldMap})`,
        backgroundSize: '1100px',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-16 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start relative z-10">
        
        {/* Left Side: Impactful Text */}
        <div>
          <p className="text-[#A1887F] text-xs font-dm-sans font-bold tracking-[0.2em] uppercase mb-6">
            THE ORIGIN STORY
          </p>
          <h2 className="text-[#3E2723] text-4xl lg:text-[48px] font-playfair font-bold leading-tight mb-6">
            A Calling.<br />
            A Response.<br />
            A Foundation.
          </h2>
          
          {/* Key Quote Block */}
          <div className="bg-[#D6EAF8] p-6 md:p-8 mt-6 mb-8 relative">
            <svg className="absolute top-4 left-4 w-8 h-8 text-[#8CB4D6] opacity-50" fill="currentColor" viewBox="0 0 24 24">
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
            </svg>
            <p className="text-[#3E2723] text-xl md:text-2xl font-playfair font-bold leading-relaxed relative z-10">
              "Impact does not begin with resources—<br />
              it begins with responsibility."
            </p>
            <div className="flex items-center space-x-3 mt-4 relative z-10">
              <div className="w-8 h-[1px] bg-[#5D4037]" />
              <p className="text-[#5D4037] text-[11px] font-dm-sans font-bold tracking-[0.1em] uppercase">
                MRS. GALAXY THAMI, FOUNDER & EXECUTIVE DIRECTOR
              </p>
            </div>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-2 gap-4 mt-8 pt-4 border-t border-[#E0D5CD]">
            <div>
              <p className="font-playfair font-bold text-primary text-sm leading-tight">
                Livelihood Empowerment
              </p>
              <p className="font-dm-sans text-[#8CB4D6] text-[10px] mt-0.5">
                <AnimatedCounter targetNumber={50000} suffix="+ Youths" duration={3000} />
              </p>
            </div>
            <div>
              <p className="font-playfair font-bold text-primary text-sm leading-tight">
                Children Reached
              </p>
              <p className="font-dm-sans text-[#8CB4D6] text-[10px] mt-0.5">
                <AnimatedCounter targetNumber={5600} suffix=" children" duration={2500} />
              </p>
            </div>
            <div className="col-span-2 mt-2">
              <p className="font-playfair font-bold text-primary text-sm leading-tight">
                Families Supported
              </p>
              <span className="font-dm-sans font-bold text-[#8CB4D6] text-[11px] whitespace-nowrap">
                +<AnimatedCounter targetNumber={10000} suffix=" families" duration={2500} />
              </span>
            </div>
          </div>
        </div>

        {/* Right Side: Narrative Content - New Write-up */}
        <div className="space-y-6">
          <p className="text-[#5D4037] text-[17px] font-dm-sans leading-[1.8] opacity-85">
            HARAF began not with resources, structure, or certainty—but with a calling.
          </p>
          
          <p className="text-[#5D4037] text-[17px] font-dm-sans leading-[1.8] opacity-85">
            For Madam Galaxy Thami, the journey began long before there was a name, a structure, 
            or even resources. It began with something far more powerful: an instinct—a persistent, 
            burning desire to give back to society.
          </p>
          
          <p className="text-[#5D4037] text-[17px] font-dm-sans leading-[1.8] opacity-85">
            She often reflects that she cannot fully explain where it came from. It wasn't planned. 
            It wasn't calculated. It was simply there—a voice within her, pushing her toward community 
            work, toward people, toward impact.
          </p>
          
          <p className="text-[#5D4037] text-[17px] font-dm-sans leading-[1.8] opacity-85">
            Even as a young girl, she found herself drawn to communities, listening, observing, and 
            feeling the weight of unmet needs. She didn't have all the answers. She didn't have the 
            resources. In her own words, she knew she didn't have much—just a willingness to start, 
            and a heart ready to serve.
          </p>
          
          <p className="text-[#5D4037] text-[17px] font-dm-sans leading-[1.8] opacity-85">
            And so, she began.
          </p>
          
          <p className="text-[#5D4037] text-[17px] font-dm-sans leading-[1.8] opacity-85">
            There was no grand launch. No funding. No institutional backing. Only a vision… and the 
            people she encountered along the way.
          </p>
          
          <p className="text-[#5D4037] text-[17px] font-dm-sans leading-[1.8] opacity-85">
            What started as a quiet, personal conviction grew into something much bigger. Each 
            interaction, each community, each life touched became a building block. HARAF slowly 
            took shape—not as an organization first, but as a response to human need.
          </p>
          
          <p className="text-[#5D4037] text-[17px] font-dm-sans leading-[1.8] opacity-85">
            Madam Galaxy didn't wait to "have enough" before acting. She acted because she believed 
            that impact does not begin with resources—it begins with responsibility.
          </p>
          
          <p className="text-[#5D4037] text-[17px] font-dm-sans leading-[1.8] opacity-85">
            Today, HARAF stands as a reflection of that belief. What was once just a desire has 
            evolved into a platform that reaches communities, empowers individuals, and transforms lives.
          </p>
          
          <p className="text-[#5D4037] text-[17px] font-dm-sans leading-[1.8] opacity-85 font-medium italic">
            But at its core, HARAF has never lost its origin. It is still driven by that same instinct. 
            That same passion. That same question:
          </p>
          
          <div className="bg-[#FAF5F0] p-6 mt-4">
            <p className="text-[#3E2723] text-xl md:text-2xl font-playfair font-bold leading-relaxed">
              " What do you have to give to society? "
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutStory;