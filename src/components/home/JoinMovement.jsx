import React from 'react';
import MovementCard from './MovementCard';

const JoinMovement = () => {
  const cardsData = [
    {
      id: 1,
      badgeText: 'DONATE',
      badgeColor: '#22C55E', // Green
      title: 'Give Financially',
      description: 'Your donation funds clean water points, school supplies, medical outreaches, and food programmes that reach families directly.',
      linkText: 'Donate Now',
      linkUrl: '/donate'
    },
    {
      id: 2,
      badgeText: 'VOLUNTEER',
      badgeColor: '#60A5FA', // Blue
      title: 'Give Your Time',
      description: 'Join our field teams, offer professional skills remotely, or lead community workshops. Every hour matters.',
      linkText: 'Volunteer With Us',
      linkUrl: '#'
    },
    {
      id: 3,
      badgeText: 'SPREAD THE WORD',
      badgeColor: '#EAB308', // Yellow
      title: 'Give Your Voice',
      description: 'Follow, share, and advocate for rural communities. Awareness creates action. Help us reach more people.',
      linkText: 'Share Our Mission',
      linkUrl: '#'
    },
    {
      id: 4,
      badgeText: 'PARTNER',
      badgeColor: '#F97316', // Orange
      title: 'Give Resources',
      description: 'Partner with us as a corporate sponsor, in-kind donor, or institutional ally to scale our community impact.',
      linkText: 'Explore Partnership',
      linkUrl: '#'
    }
  ];

  return (
    <section className="w-full py-24 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="text-center mb-16">
          <p className="text-[#8CB4D6] text-sm tracking-[0.2em] font-dm-sans font-bold uppercase mb-4">
            JOIN THE MOVEMENT
          </p>
          <h2 className="text-primary text-4xl md:text-5xl font-playfair font-bold leading-tight">
            There Are Many<br />
            Ways to Give Hope.
          </h2>
        </div>

        {/* Movement Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {cardsData.map((card) => (
            <MovementCard key={card.id} {...card} />
          ))}
        </div>

      </div>
    </section>
  );
};

export default JoinMovement;
