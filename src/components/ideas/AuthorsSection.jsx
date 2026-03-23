import React from 'react';

const authors = [
  {
    name: "Mrs. Grace Titus",
    role: "Founder & Executive Director",
    essays: 14,
    mostRead: "Why Giving Aid Is the Wrong Frame",
    image: "https://i.pravatar.cc/150?u=grace"
  },
  {
    name: "Aisha Bello",
    role: "Director of Programmes",
    essays: 9,
    mostRead: "The Smallholder Farmer Is the Most Important Person in Nigeria",
    image: "https://i.pravatar.cc/150?u=aisha"
  },
  {
    name: "Chukwudi Nwosu",
    role: "Head of Field Operations",
    essays: 11,
    mostRead: "The Borehole Is Not the Point",
    image: "https://i.pravatar.cc/150?u=chuk"
  },
  {
    name: "Ngozi Adeleke",
    role: "Head of Women's Empowerment",
    essays: 7,
    mostRead: "She Already Had the Plan",
    image: "https://i.pravatar.cc/150?u=ngozi"
  },
  {
    name: "Ibrahim Musa",
    role: "Head of Water & Sanitation",
    essays: 6,
    mostRead: "What Happens to a Borehole When the Rains Stop Coming?",
    image: "https://i.pravatar.cc/150?u=musa"
  }
];

const AuthorCard = ({ author }) => (
  <div className="bg-white border border-blue-50 p-8 flex flex-col items-center text-center shadow-sm hover:shadow-md transition-shadow h-full">
    {/* Avatar */}
    <div className="mb-6 relative">
      <img 
        src={author.image} 
        alt={author.name} 
        className="w-24 h-24 rounded-full object-cover grayscale"
      />
    </div>

    {/* Name & Role */}
    <h3 className="text-xl font-serif font-bold text-[#2D1F16] mb-1 leading-tight">
      {author.name}
    </h3>
    <p className="text-[#A38D65] text-[10px] font-bold uppercase tracking-wider mb-6">
      {author.role}
    </p>

    {/* Divider */}
    <div className="w-10 h-[2px] bg-[#FEE600] mb-6 mt-auto"></div>

    {/* Stats */}
    <p className="text-[#1a1a1a] text-xs font-bold uppercase tracking-[0.15em] mb-4">
      {author.essays} Essays Published
    </p>

    {/* Most Read */}
    <p className="text-gray-500 text-[11px] leading-relaxed italic">
      <span className="not-italic text-gray-400 mr-1">Most Read:</span> 
      {author.mostRead}
    </p>
  </div>
);

const AuthorsSection = () => {
  return (
    <section className="bg-[#F8FBFF] py-24 px-6 md:px-12 lg:px-14">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <header className="max-w-2xl mb-16">
          <p className="text-[#2B7AAB] text-[11px] font-bold tracking-[0.2em] uppercase mb-6">
            Voices Behind The Ideas
          </p>
          <h2 className="text-5xl md:text-6xl font-serif font-bold text-[#2D1F16] mb-8 leading-[1.1]">
            These Ideas Come From People Who Were There.
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            Every essay and reflection published here is written by someone who has sat in 
            the communities, seen the work fail, watched it succeed, and stayed long enough 
            to understand the difference.
          </p>
        </header>

        {/* Grid - Flex layout for centering any spillage */}
        <div className="flex flex-wrap justify-center gap-4">
          {authors.map((author, index) => (
            <div 
              key={index}
              className="w-full sm:w-[calc(50%-0.5rem)] lg:w-[calc(33.333%-0.667rem)] flex"
            >
              <div className="w-full h-full">
                <AuthorCard author={author} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AuthorsSection;