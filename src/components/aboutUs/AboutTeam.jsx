import React from 'react';
import TeamCard from './TeamCard.jsx';
import graceTitus from '../../assets/graceTitus.jpg';
import emekaOkafor from '../../assets/emekaOkafor.jpg';
import fatimaYusuf from '../../assets/fatimaYusuf.jpg';

const teamData = [
  {
    image: graceTitus,
    name: "Mrs. Grace Titus",
    role: "FOUNDER & EXECUTIVE DIRECTOR",
    description: "Former development economist turned field activist. Has spent over a decade building community-first programmes across rural Nigeria."
  },
  {
    image: emekaOkafor,
    name: "Emeka Okafor",
    role: "DIRECTOR OF PROGRAMMES",
    description: "Public health specialist with 12 years of experience designing rural health and nutrition interventions across West Africa."
  },
  {
    image: fatimaYusuf,
    name: "Fatima Yusuf",
    role: "DIRECTOR OF PARTNERSHIPS & FUNDRAISING",
    description: "Former UNICEF partnerships coordinator. Has secured over ₦800 million in programme funding for HARAF since joining in 2019."
  }
];

const AboutTeam = () => {
  return (
    <section className="w-full py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-16">
        
        {/* Header Section */}
        <div className="text-center mb-20 max-w-2xl mx-auto">
          <p className="text-[#8CB4D6] text-sm font-dm-sans font-bold tracking-[0.2em] uppercase mb-4">
            THE PEOPLE BEHIND THE WORK
          </p>
          <h2 className="text-primary text-4xl lg:text-5xl font-playfair font-bold leading-tight mb-8">
            A Team That<br />
            Shows Up Every Day.
          </h2>
          <p className="text-[#5D4037] text-lg font-dm-sans leading-relaxed opacity-80">
            Our staff are researchers, farmers, nurses, educators, and community organisers. 
            Many of them grew up in the communities we serve.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16 border-b border-gray-100 pb-20">
          {teamData.map((member, idx) => (
            <TeamCard 
              key={idx}
              image={member.image}
              name={member.name}
              role={member.role}
              description={member.description}
            />
          ))}
        </div>

        {/* Footer Link */}
        <div className="mt-12 flex justify-start">
          <a href="#" className="flex items-center space-x-2 text-primary text-sm font-dm-sans font-bold tracking-widest uppercase hover:text-harafBlue transition-colors group">
            <span>VIEW FULL TEAM DIRECTORY</span>
            <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor">
               <path d="M5 12h14M12 5l7 7-7 7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default AboutTeam;
