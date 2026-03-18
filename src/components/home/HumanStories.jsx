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
    quote: 'Before HARAF came to our village, my children walked 6km for water every morning. Now we have a borehole and my daughters are back in school.',
    author: 'Hauwa M.',
  }
];

const HumanStories = () => {
  return (
    <section className="w-full bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="text-center mb-1 ]">
          <p className="text-[#8CB4D6] text-sm tracking-[0.2em] font-dm-sans font-bold uppercase mb-4">
            HUMAN STORIES
          </p>
          <h2 className="text-primary text-4xl md:text-5xl font-playfair font-bold leading-tight">
            Behind Every<br />
            Number Is a Name.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {storiesData.map((story, index) => (
            <div 
              key={story.id} 
              className={index === 2 ? 'md:col-span-2 lg:col-span-1 flex justify-center' : ''}
            >
              <div className={index === 2 ? 'w-full md:w-[calc(50%-16px)] lg:w-full' : 'w-full'}>
                <StoryCard 
                  location={story.location}
                  quote={story.quote}
                  author={story.author}
                />
              </div>
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
