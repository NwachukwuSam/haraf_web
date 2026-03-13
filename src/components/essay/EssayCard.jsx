import React from 'react';
import graceTitus from '../../assets/graceTitus.jpg';

const articles = [
  {
    category: "FIELD REFLECTION",
    date: "February 20, 2026",
    readTime: "8 min read",
    title: "The Borehole Is Not the Point.",
    excerpt: "Every community we work in already knows what it needs. The borehole, the school, the cooperative — these are just the visible outputs of something much harder to measure: trust...",
    author: "Chukwudi Nwosu",
    role: "Head of Field Operations",
    avatar: graceTitus // Placeholder
  },
  {
    category: "COMMUNITY LEADERSHIP",
    date: "December 20, 2025",
    readTime: "9 min read",
    title: "Stop Calling Them \"Beneficiaries\".",
    excerpt: "The word beneficiary is doing a lot of quiet damage in the development sector. It positions communities as passive receivers of other people's decisions. We've been experimenting...",
    author: "Chukwudi Nwosu",
    role: "Head of Field Operations",
    avatar: graceTitus // Placeholder
  },
  {
    category: "FIELD REFLECTION",
    date: "November 28, 2025",
    readTime: "15 min read",
    title: "Ten Years In the Field. Ten Things I Got Wrong.",
    excerpt: "In 2014 I thought the biggest barrier to rural development was money. By 2016 I thought it was government. By 2019 I was beginning to suspect it was us — the NGOs, the consultants...",
    author: "Mrs. Grace Titus",
    role: "Founder & Executive Director",
    avatar: graceTitus // Placeholder
  }
];

const ArticleCard = ({ article }) => (
  <div className="bg-[#F8FBFF] border border-blue-50/50 p-8 flex flex-col h-full hover:shadow-lg transition-shadow duration-300">
    {/* Category Pill */}
    <div className="mb-6">
      <span className="bg-[#F3EAD8] text-[#5C4D32] px-4 py-1.5 rounded-full text-[10px] font-bold tracking-[0.15em] uppercase">
        {article.category}
      </span>
    </div>

    {/* Metadata */}
    <div className="flex items-center gap-2 text-gray-400 text-xs font-medium mb-4 uppercase tracking-wider">
      <span>{article.date}</span>
      <span>•</span>
      <span>{article.readTime}</span>
    </div>

    {/* Title */}
    <h3 className="text-[20px] leading-tight font-serif font-bold text-[#1a1a1a] mb-5">
      {article.title}
    </h3>

    {/* Excerpt */}
    <p className="text-gray-600 leading-relaxed text-[15px] mb-8 flex-grow">
      {article.excerpt}
    </p>

    <div className="pt-6 border-t border-gray-100">
      {/* Author */}
      <div className="flex items-center gap-3 mb-6">
        <img 
          src={article.avatar} 
          alt={article.author} 
          className="w-10 h-10 rounded-full object-cover grayscale"
        />
        <div>
          <p className="text-sm font-bold text-gray-800 leading-none">{article.author}</p>
          <p className="text-[11px] text-orange-700 font-medium mt-1 uppercase tracking-tight">{article.role}</p>
        </div>
      </div>

      {/* CTA */}
      <a href="#" className="flex items-center gap-2 text-[#2B7AAB] text-xs font-bold uppercase tracking-widest hover:gap-3 transition-all">
        Read Essay 
        <svg width="18" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <line x1="5" y1="12" x2="19" y2="12"></line>
          <polyline points="12 5 19 12 12 19"></polyline>
        </svg>
      </a>
    </div>
  </div>
);

export default function EssayCard() {
  return (
    <section className="bg-white py-20 px-6 md:px-12 max-w-7xl mx-auto font-sans">
      <header className="mb-12">
        <p className="text-[#2B7AAB] text-[10px] font-bold tracking-[0.2em] uppercase mb-4">
          You might also want to read
        </p>
        <h2 className="text-5xl md:text-6xl font-serif font-bold text-[#2D1F16]">
          Keep Thinking With Us.
        </h2>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {articles.map((art, index) => (
          <ArticleCard key={index} article={art} />
        ))}
      </div>
    </section>
  );
}