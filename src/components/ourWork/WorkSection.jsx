import React from 'react';
import { Link } from 'react-router-dom';

const WorkSection = ({ 
  number, 
  image, 
  tag, 
  tagBg, 
  tagColor,
  title, 
  challenge, 
  response, 
  testimonial, 
  testimonialAuthor,
  isReversed = false,
  testimonialBg = '#F8FAFC'
}) => {
  return (
    <section className="w-full py-8 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-16">
        <div className={`flex flex-col ${isReversed ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-12 lg:gap-20 lg:items-stretch items-center`}>
          
          {/* Image Side */}
          <div className="w-full lg:w-[45%] relative flex">
            <div className="w-full overflow-hidden rounded-sm shadow-lg aspect-4/5 lg:aspect-auto lg:h-full">
              <img 
                src={image} 
                alt={title} 
                className="w-full h-full object-cover" 
                width="600"
                height="750"
                loading="lazy"
              />
            </div>
            {/* Number Badge */}
            <div className="absolute top-6 left-6 w-12 h-12 bg-harafYellow flex items-center justify-center rounded-sm">
                <span className="text-primary text-[20px] font-playfair font-black">
                  {number}
                </span>
            </div>
          </div>

          {/* Content Side */}
          <div className="w-full lg:w-[55%] flex flex-col space-y-6">
            <div 
                className="inline-block self-start px-4 py-2 rounded-sm text-[10px] font-dm-sans font-bold tracking-[0.2em] uppercase"
                style={{ backgroundColor: tagBg, color: tagColor }}
            >
              {tag}
            </div>

            <h2 className="text-primary text-4xl lg:text-[44px] font-playfair font-bold leading-tight">
              {title}
            </h2>

            <div className="space-y-6">
              {/* Challenge */}
              <div className='space-y-2'>
                <h4 className="text-[#F07820] text-xs font-dm-sans font-bold tracking-[0.2em] uppercase">
                  THE CHALLENGE
                </h4>
                <p className="text-primary text-sm font-dm-sans leading-relaxed opacity-70">
                  {challenge}
                </p>
              </div>

              {/* Separator */}
              <div className="w-full h-px bg-harafBlue opacity-10" />

              {/* Response */}
              <div className="space-y-2">
                <h4 className="text-[#2E9E48] text-xs font-dm-sans font-bold tracking-[0.2em] uppercase">
                  OUR RESPONSE
                </h4>
                <p className="text-primary text-sm font-dm-sans leading-relaxed opacity-70">
                  {response}
                </p>
              </div>

              {/* Testimonial */}
              <div 
                className="p-8 md:px-6 py-2 border-l-4 border-[#E8A020] relative"
                style={{ backgroundColor: testimonialBg }}
              >
                <p className="text-primary text-lg md:text-xl font-dm-sans italic leading-relaxed">
                  "{testimonial}"
                </p>
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-px bg-primary opacity-30" />
                  <p className="text-primary text-[10px] font-dm-sans font-bold tracking-widest uppercase opacity-60">
                    {testimonialAuthor}
                  </p>
                </div>
              </div>

              {/* CTA */}
              <div className="pt-4">
                <Link 
                  to="/donate" 
                  className="bg-harafBlue text-white text-xs font-dm-sans font-bold tracking-widest uppercase px-10 py-5 hover:opacity-90 transition-opacity inline-flex items-center space-x-2"
                >
                  <span>SUPPORT THIS PROGRAMME</span>
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path d="M5 12h14M12 5l7 7-7 7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkSection;
