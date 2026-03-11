import React from 'react';
import { Link } from 'react-router-dom';
import NewsCard from './NewsCard';

import fieldReportImage from '../../assets/fieldReportImage.jpg';
import impactStoryImage from '../../assets/ImpactStoryImage.jpg';
import announcementImage from '../../assets/announcementImage.jpg';

const LatestNews = () => {
  const newsData = [
    {
      id: 1,
      image: fieldReportImage,
      badgeText: 'FIELD REPORT',
      title: '320 Boreholes Completed Across the North — What Comes Next',
      date: 'FEBRUARY 28, 2026',
      description: "Our clean water programme hits a milestone — here's what we learned and where we go from here.",
      linkUrl: '#'
    },
    {
      id: 2,
      image: impactStoryImage,
      badgeText: 'IMPACT STORY',
      title: "How One Women's Cooperative Grew Into a Movement",
      date: 'FEBRUARY 12, 2026',
      description: "What started as 12 women learning to sew is now a 200-member cooperative redefining rural women's economic power.",
      linkUrl: '#'
    },
    {
      id: 3,
      image: announcementImage,
      badgeText: 'ANNOUNCEMENT',
      title: 'HARAF Launches New Climate-Smart Farming Pilot in Benue',
      date: 'JANUARY 30, 2026',
      description: "Partnering with local farmers to build climate resilience and protect food security in the face of shifting seasons.",
      linkUrl: '#'
    }
  ];

  return (
    <section className="w-full py-24 border-t border-[#E2E8F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="text-center mb-16">
          <p className="text-[#8CB4D6] text-sm tracking-[0.2em] font-dm-sans font-bold uppercase mb-4">
            LATEST FROM HARAF
          </p>
          <h2 className="text-primary text-4xl md:text-5xl lg:text-[56px] font-playfair font-bold leading-tight max-w-3xl mx-auto">
            Headline: Stories,<br/>Reports & Field Dispatches.
          </h2>
        </div>

        {/* News Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {newsData.map((news) => (
            <NewsCard key={news.id} {...news} />
          ))}
        </div>

        {/* Footer Link */}
        <div className="flex justify-start border-b-2 border-harafYellow pb-2 max-w-[200px]">
          <Link 
            to="/newsroom" 
            className="text-[#6B4C32] font-dm-sans text-sm font-bold tracking-wider uppercase flex items-center hover:text-primary transition-colors"
          >
            VISIT OUR NEWSROOM <span className="ml-2 font-serif text-lg leading-none">→</span>
          </Link>
        </div>

      </div>
    </section>
  );
};

export default LatestNews;
