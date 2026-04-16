import React from 'react';
import { Link } from 'react-router-dom';
import StoryCard from './StoryCard';

const storiesData = [
  {
    id: 1,
    location: 'ADAMAWA STATE',
    quote: 'They didn’t just bring food — they taught us how to grow our own. This season, our harvest fed the whole community.',
    author: 'Musa A.',
  },
  {
    id: 2,
    location: 'ADAMAWA STATE',
    quote: 'The women’s cooperative changed everything for me. I learned to sew, started a business, and now I employ three others.',
    author: 'Chidinma O.',
  },
  {
    id: 3,
    location: 'ADAMAWA STATE',
    quote: 'For the first time, I felt like I was in good hands. The midwives were kind, and the facility was clean. I didn’t have to worry about anything. It’s a completely different experience from my previous deliveries.',
    author: 'MARYAM BABAGANA.',
  },
  {
    id: 3,
    location: 'ADAMAWA STATE',
    quote: 'I don\'t want my children to go through the fear I went through. Now I will teach them before their first experience. ',
    author: 'ROSEMARY.',
  },
  {
    id: 3,
    location: 'ADAMAWA STATE',
    quote: 'Before, I was shy to ask questions about my body or my choices. At the Adolescents’ Corner, I felt safe. They listened to me. Now I understand myself better, and I can plan for my business and my life" ',
    author: 'Girei.',
  }
];

const HumanStories = () => {
  return (
    <section className="w-full bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="text-center mb-12 ">
          <p className="text-[#8CB4D6] text-sm tracking-[0.2em] font-dm-sans font-bold uppercase mb-4">
            HUMAN STORIES
          </p>
          <h2 className="text-primary text-4xl md:text-5xl font-playfair font-bold leading-tight">
            Behind Every<br />
            Number Is a Name.
          </h2>
        </div>

        {/* Grid Section - Using Flex Wrap for Centering Spillage and Equal Heights */}
        <div className="flex flex-wrap justify-center gap-8 mb-16">
          {storiesData.map((story) => (
            <div 
              key={story.id} 
              className="w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.334rem)] flex"
            >
              <StoryCard 
                location={story.location}
                quote={story.quote}
                author={story.author}
              />
            </div>
          ))}
        </div>

        {/* Footer Link */}
        <div className="flex justify-start border-b-2 border-harafYellow  pb-2 max-w-[200px]">
          <Link 
            to="/our_work" 
            className="text-[#6B4C32] font-dm-sans text-sm font-bold tracking-wider uppercase flex items-center hover:text-primary transition-colors"
          >
            READ MORE STORIES <span className="ml-2 font-serif text-lg leading-none">→</span>
          </Link>
        </div>

      </div>
    </section>
  );
};

export default HumanStories;
