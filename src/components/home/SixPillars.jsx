import React from 'react';
import PillarCard from './PillarCard';

import climateSmart from '../../assets/branchOneImage.jpg';
import ruralFood from '../../assets/branchTwoImage.jpg';
import safeWater from '../../assets/branchThreeImage.jpg';
import womensEmpow from '../../assets/branchFourImage.jpg';
import healthOutreach from '../../assets/branchFiveImage.jpg';
import ruralSchools from '../../assets/ruralSchoolsAndScholarshipFund.png';

import pathSvg from '../../assets/path.svg';
import branchOne from '../../assets/branchOne.svg';
import branchTwo from '../../assets/branchTwo.svg';
import branchThree from '../../assets/branchThree.svg';
import branchFour from '../../assets/branchFour.svg';
import branchFive from '../../assets/branchFive.svg';

const pillarsData = [
  {
    id: 1,
    image: climateSmart,
    tag: 'ENVIRONMENT',
    title: 'Climate-Smart Agriculture',
    description: 'We train farmers in sustainable land use to protect livelihoods against the growing threat of climate change.',
  },
  {
    id: 2,
    image: ruralFood,
    tag: 'FOOD SECURITY',
    title: 'Rural Food & Nutrition Programme',
    description: 'We support smallholder farmers with seeds, training, and market access to end hunger and build food sovereignty in rural households.',
  },
  {
    id: 3,
    image: safeWater,
    tag: 'CLEAN WATER',
    title: 'Safe Water for All Initiative',
    description: 'From borehole drilling to community water governance, we ensure that every household has access to clean, safe drinking water.',
  },
  {
    id: 4,
    image: womensEmpow,
    tag: 'LIVELIHOODS',
    title: "Women's Economic Empowerment",
    description: 'Skills training, microfinance, and mentorship help women build businesses and financial independence from the ground up.',
  },
  {
    id: 5,
    image: healthOutreach,
    tag: 'HEALTHCARE',
    title: 'Community Health Outreach',
    description: 'Mobile clinics, maternal care, and health education bring essential medical services directly to remote communities.',
  },
  {
    id: 6,
    image: ruralSchools,
    tag: 'EDUCATION',
    title: 'Rural Schools & Scholarship Fund',
    description: 'We rehabilitate schools, train teachers, and fund scholarships to keep children learning and futures bright.',
  }
];

const SixPillars = () => {
  return (
    <section className="w-full py-15 bg-white relative overflow-hidden">
      {/* Header Section */}
      <div className="w-full flex flex-col items-center justify-center text-center px-4 mb-20 relative z-10">
        <p className="text-[#8CB4D6] text-sm tracking-[0.2em] font-dm-sans font-bold uppercase mb-4">
          WHAT WE DO
        </p>
        <h2 className="text-primary text-4xl md:text-5xl font-playfair font-bold leading-tight max-w-2xl mb-6">
          Six Pillars of Rural Transformation.
        </h2>
        <p className="text-[#333333] font-dm-sans text-lg md:text-[20px] max-w-3xl mx-auto leading-relaxed">
          Our programs are designed with communities — not just for them. Every initiative is locally rooted, evidence-based, and built to last.
        </p>
      </div>

      <div className="hidden lg:block relative w-full mb-[-55px]" style={{ height: '1250px' }}>
        
        <div className="absolute left-[50%] transform -translate-x-[50%] top-0 h-[969px] z-0">
          <img 
            src={pathSvg} 
            alt="Path" 
            className="h-full w-auto object-contain" 
            width="300" 
            height="969" 
            loading="lazy" 
          />
        </div>

        {/* Card 1 - Top Right - Climate-Smart */}
        <div className="absolute top-[30px] left-[calc(50%+37px)] z-0">
          <img 
            src={branchOne} 
            alt="branch" 
            className="object-contain" 
            width="200" 
            height="150" 
            loading="lazy" 
          />
        </div>
        <div className="absolute top-[10px] left-[calc(50%+200px)] xl:left-[calc(50%+250px)] z-10 w-fit">
          <PillarCard {...pillarsData[0]} />
        </div>

        {/* Card 2 - Left - Rural Food */}
        <div className="absolute top-[230px] right-[calc(50%-50px)] z-0">
          <img 
            src={branchTwo} 
            alt="branch" 
            className="object-contain" 
            width="200" 
            height="150" 
            loading="lazy" 
          />
        </div>
        <div className="absolute top-[200px] right-[calc(50%+150px)] xl:right-[calc(50%+210px)] z-10 w-fit">
          <PillarCard {...pillarsData[1]} />
        </div>

        {/* Card 3 - Right - Safe Water */}
        <div className="absolute top-[520px] left-[calc(50%-70px)] z-0">
          <img 
            src={branchThree} 
            alt="branch" 
            className="object-contain" 
            width="200" 
            height="150" 
            loading="lazy" 
          />
        </div>
        <div className="absolute top-[410px] left-[calc(50%+110px)] xl:left-[calc(50%+170px)] z-10 w-fit">
          <PillarCard {...pillarsData[2]} />
        </div>

        {/* Card 4 - Left - Women's Empowerment */}
        <div className="absolute top-[650px] right-[calc(50%-30px)] z-0">
          <img 
            src={branchFour} 
            alt="branch" 
            className="object-contain" 
            width="200" 
            height="150" 
            loading="lazy" 
          />
        </div>
        <div className="absolute top-[610px] right-[calc(50%+200px)] xl:right-[calc(50%+225px)] z-10 w-fit">
          <PillarCard {...pillarsData[3]} />
        </div>

        {/* Card 5 - Right - Community Health */}
        <div className="absolute top-[880px] left-[calc(50%+45px)] z-0">
          <img 
            src={branchFive} 
            alt="branch" 
            className="object-contain" 
            width="200" 
            height="150" 
            loading="lazy" 
          />
        </div>
        <div className="absolute top-[800px] left-[calc(50%+210px)] xl:left-[calc(50%+245px)] z-10 w-fit">
          <PillarCard {...pillarsData[4]} />
        </div>

        {/* Card 6 - Bottom Left - Rural Schools */}
        <div className="absolute top-[969px] right-[calc(50%+10px)] z-10 w-fit">
          <PillarCard {...pillarsData[5]} />
        </div>
      </div>

      {/* Mobile/Tablet Fallback Layout */}
      <div className="lg:hidden flex flex-col items-center space-y-12 px-4 relative z-10">
        {pillarsData.map((pillar) => (
          <PillarCard key={pillar.id} {...pillar} />
        ))}
      </div>
    </section>
  );
};

export default SixPillars;
