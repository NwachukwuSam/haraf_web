import React from 'react';
import TeamCard from './TeamCard.jsx';
import graceTitus from '../../assets/graceTitus.jpg';
import emekaOkafor from '../../assets/emekaOkafor.jpg';
import fatimaYusuf from '../../assets/fatimaYusuf.jpg';

const teamData = [
  {
    image: graceTitus,
    name: "Mrs. Galaxy Thami",
    role: "FOUNDER & EXECUTIVE DIRECTOR",
    description: "Former development economist turned field activist. Has spent over a decade building community-first programmes across rural Nigeria."
  },
  {
    image: emekaOkafor,
    name: "Daniel Akila",
    role: "DIRECTOR OF GRANTS",
    description: "Public health specialist with 12 years of experience designing rural health and nutrition interventions across West Africa."
  },
  {
    image: fatimaYusuf,
    name: "Abel Bake",
    role: "HEAD OF PROGRAMMES",
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
        
      </div>
    </section>
  );
};

export default AboutTeam;
