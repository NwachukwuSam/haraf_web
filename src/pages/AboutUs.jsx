import React, { useEffect } from 'react';
import AboutHero from '../components/aboutUs/AboutHero.jsx';
import AboutStory from '../components/aboutUs/AboutStory.jsx';
import AboutMap from '../components/aboutUs/AboutMap.jsx';
import AboutValues from '../components/aboutUs/AboutValues.jsx';
import AboutTeam from '../components/aboutUs/AboutTeam.jsx';
import AboutAccountability from '../components/aboutUs/AboutAccountability.jsx';
import AboutCTA from '../components/aboutUs/AboutCTA.jsx';

function AboutUs() {
  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="flex flex-col w-full min-h-screen pt-7.5 md:pt-0">
      <AboutHero />
      <AboutStory />
      <AboutValues />
      <AboutTeam />
      <AboutAccountability />
      <AboutMap />
      <AboutCTA />
    </div>
  );
}

export default AboutUs;
