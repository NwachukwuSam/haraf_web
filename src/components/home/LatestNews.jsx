import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import NewsCard from './NewsCard';
import NewsReader from './NewsReader';

import fieldReportImage from '../../assets/fieldReportImage.jpg';
import impactStoryImage from '../../assets/ImpactStoryImage.jpg';
import announcementImage from '../../assets/announcementImage.jpg';

const STORY_CONTENT = {
  0: {
    sections: [
      {
        heading: null,
        paragraphs: [
          "We are proud to announce the completion of 320 boreholes across Northern Nigeria, bringing clean water to over 500,000 people. This achievement marks a significant step in our mission to ensure water access for all.",
          "Over the past three years, our teams have worked tirelessly in remote communities, drilling boreholes and implementing water management systems. Each borehole represents not just infrastructure, but transformed lives.",
          "The journey hasn't been easy. We've faced challenges from difficult terrain to community skepticism. But through persistent engagement and partnership with local leaders, we've built not just water points, but trust.",
        ],
      },
      {
        heading: "The Journey So Far",
        paragraphs: [
          "When we started this project in 2023, we set an ambitious goal: 300 boreholes in three years. Today, we've exceeded that with 320 completed, serving communities across Adamawa, Borno, and Yobe states.",
          "Each borehole is equipped with a hand pump and surrounded by a concrete apron for hygiene. But more importantly, each comes with a trained water committee—local men and women who take ownership of maintenance and management.",
          "We've seen girls return to school because they no longer spend hours collecting water. We've watched farms expand with access to irrigation. We've witnessed the dignity that comes when a community can provide for itself.",
        ],
      },
      {
        heading: "What Comes Next",
        paragraphs: [
          "With this milestone reached, we're shifting focus to sustainability. The next phase includes:",
          "1. Training 500 additional water committee members in pump maintenance and financial management",
          "2. Implementing water quality monitoring systems across all borehole sites",
          "3. Expanding to 200 additional communities in underserved areas of the North",
          "4. Pilot testing solar-powered water systems in three communities with high solar potential",
          "The success of this program wouldn't be possible without our donors, partners, and the communities themselves. Together, we're building lasting change—one borehole at a time.",
        ],
      },
    ],
    meta: { 
      topic: "Water Access & Infrastructure", 
      published: "February 28, 2026", 
      length: "~1,800 words", 
      category: "FIELD REPORT" 
    },
    toc: ["The Journey So Far", "What Comes Next"],
  },
  1: {
    sections: [
      {
        heading: null,
        paragraphs: [
          "In 2022, a small group of women in rural Katsina gathered under a tree to learn sewing. Today, that gathering has grown into a 200-member cooperative that's transforming women's economic participation in the region.",
          "Hauwa Muhammad, now 45, was one of the original 12 members. 'We just wanted to learn skills to support our families,' she recalls. 'We never imagined we would start a movement.'",
          "The cooperative's journey mirrors the broader story of women's economic empowerment in northern Nigeria—slow, determined, and increasingly impossible to ignore.",
        ],
      },
      {
        heading: "The Beginning",
        paragraphs: [
          "It started with a simple observation: women in the community had skills but no way to monetize them. HARAF's field team provided startup materials—sewing machines, fabric, and basic training—and stepped back to let the women lead.",
          "The first year was challenging. Members juggled cooperative work with household responsibilities. Some husbands were skeptical. Profits were modest. But the women persisted, meeting weekly, saving collectively, and slowly building a customer base.",
          "By year two, they had repaid the initial investment and were training new members. The cooperative had grown to 50 women, and they added a small savings and loan component.",
        ],
      },
      {
        heading: "Growth and Impact",
        paragraphs: [
          "Today, the cooperative runs multiple enterprises: a tailoring business with contracts from local schools, a small-scale poultry farm with 500 birds, and a savings program with over ₦15 million in member deposits.",
          "Forty-five members have started their own side businesses—selling food, raising goats, or trading goods at local markets. The cooperative provides small loans and business mentorship.",
          "Perhaps most importantly, the cooperative has shifted community perceptions. 'Now, when people talk about business in our village, they include women,' says cooperative leader Aisha Mohammed. 'We've proven we can be economic drivers.'",
        ],
      },
      {
        heading: "Redefining Women's Economic Power",
        paragraphs: [
          "The cooperative's success has rippled beyond its members. Girls in the community now see new possibilities for their futures. Other women's groups have formed, inspired by this example.",
          "We're documenting this model to share with other communities. Not to replicate it exactly—every community is different—but to show what's possible when women are trusted as leaders, not just beneficiaries.",
          "Hauwa puts it simply: 'We weren't waiting for anyone to save us. We just needed someone to believe we could save ourselves.'",
        ],
      },
    ],
    meta: { 
      topic: "Women's Economic Empowerment", 
      published: "February 12, 2026", 
      length: "~2,200 words", 
      category: "IMPACT STORY" 
    },
    toc: ["The Beginning", "Growth and Impact", "Redefining Women's Economic Power"],
  },
  2: {
    sections: [
      {
        heading: null,
        paragraphs: [
          "HARAF is proud to announce the launch of our Climate-Smart Farming Pilot in Benue State, working with 500 smallholder farmers to test and implement agricultural practices adapted to changing climate conditions.",
          "Benue is known as Nigeria's 'Food Basket,' producing much of the nation's yams, cassava, and rice. But climate change is threatening this status. Rainfall patterns have become unpredictable. Dry spells are longer. New pests have emerged.",
          "Farmers are on the front lines of climate change, and they need new tools to adapt. This pilot is our response.",
        ],
      },
      {
        heading: "The Challenge",
        paragraphs: [
          "For generations, farmers in Benue have relied on traditional knowledge to guide their planting and harvesting. They knew when the rains would come, when to plant, and when to expect harvest.",
          "That knowledge is no longer reliable. Rains come late or not at all. When they do come, they're often too intense, washing away topsoil and seedlings. Temperatures are rising, stressing crops and creating conditions for new pests.",
          "The result is declining yields and increasing food insecurity—not just for farmers, but for the millions who depend on Benue's produce.",
        ],
      },
      {
        heading: "The Solution",
        paragraphs: [
          "Our pilot introduces a package of climate-smart practices:",
          "• Drought-resistant crop varieties that can withstand longer dry spells",
          "• Improved water management techniques, including small-scale irrigation",
          "• Integrated pest management that reduces reliance on chemical pesticides",
          "• Weather data services that help farmers time their planting",
          "• Crop diversification to spread risk across multiple products",
          "Farmers receive training, starter inputs, and ongoing support from our field agents. They also participate in learning groups where they share experiences and problem-solve together.",
        ],
      },
      {
        heading: "Looking Forward",
        paragraphs: [
          "If successful, the pilot will be expanded to other states and scaled to reach more farmers. We're also documenting lessons learned to share with government agencies and other organizations working on climate adaptation.",
          "'This isn't just about helping farmers adapt,' says Program Director Emeka Okonkwo. 'It's about protecting Nigeria's food security for generations to come. If we can't grow food in the Food Basket, where can we grow it?'",
          "The pilot runs for 18 months, with interim assessments at 6 and 12 months. We'll share findings as they emerge.",
        ],
      },
    ],
    meta: { 
      topic: "Climate Resilience & Food Security", 
      published: "January 30, 2026", 
      length: "~1,900 words", 
      category: "ANNOUNCEMENT" 
    },
    toc: ["The Challenge", "The Solution", "Looking Forward"],
  },
};

// ─── News data ───────────────────────────────────────────────────────────────
const newsData = [
  {
    id: 1,
    image: fieldReportImage,
    badgeText: 'FIELD REPORT',
    title: '320 Boreholes Completed Across the North — What Comes Next',
    date: 'FEBRUARY 28, 2026',
    description: "Our clean water programme hits a milestone — here's what we learned and where we go from here.",
  },
  {
    id: 2,
    image: impactStoryImage,
    badgeText: 'IMPACT STORY',
    title: "How One Women's Cooperative Grew Into a Movement",
    date: 'FEBRUARY 12, 2026',
    description: "What started as 12 women learning to sew is now a 200-member cooperative redefining rural women's economic power.",
  },
  {
    id: 3,
    image: announcementImage,
    badgeText: 'ANNOUNCEMENT',
    title: 'HARAF Launches New Climate-Smart Farming Pilot in Benue',
    date: 'JANUARY 30, 2026',
    description: "Partnering with local farmers to build climate resilience and protect food security in the face of shifting seasons.",
  },
];

// ─── Category colours ─────────────────────────────────────────────────────────
const CAT_COLORS = {
  'FIELD REPORT': { bg: '#F3EAD8', text: '#5C4D32' },
  'IMPACT STORY': { bg: '#E8F0FE', text: '#1A4FA0' },
  'ANNOUNCEMENT': { bg: '#FDE8E8', text: '#8B1A1A' },
};

// ─── Main Component ───────────────────────────────────────────────────────────
const LatestNews = () => {
  const [openStoryIndex, setOpenStoryIndex] = useState(null);

  return (
    <>
      <section className="w-full py-24 border-t border-[#E2E8F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header Section */}
          <div className="text-center mb-16">
            <p className="text-[#8CB4D6] text-sm tracking-[0.2em] font-dm-sans font-bold uppercase mb-4">
              LATEST FROM HARAF
            </p>
            <h2 className="text-primary text-4xl md:text-5xl font-playfair font-bold leading-tight max-w-3xl mx-auto">
              Headline: Stories,<br/>Reports & Field Dispatches.
            </h2>
          </div>

          {/* News Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {newsData.map((news, index) => (
              <NewsCard 
                key={news.id} 
                {...news} 
                onClick={() => setOpenStoryIndex(index)}
                catColors={CAT_COLORS[news.badgeText]}
              />
            ))}
          </div>

          {/* Footer Link */}
          <div className="flex justify-start border-b-2 border-harafYellow pb-2 max-w-[200px]">
            <Link 
              to="/ideas" 
              className="text-[#6B4C32] font-dm-sans text-sm font-bold tracking-wider uppercase flex items-center hover:text-primary transition-colors"
            >
              VISIT OUR NEWSROOM <span className="ml-2 font-serif text-lg leading-none">→</span>
            </Link>
          </div>

        </div>
      </section>

      {/* Story Reader Modal */}
      {openStoryIndex !== null && (
        <NewsReader
          news={newsData[openStoryIndex]}
          storyContent={STORY_CONTENT[openStoryIndex]}
          catColors={CAT_COLORS[newsData[openStoryIndex].badgeText]}
          onClose={() => setOpenStoryIndex(null)}
        />
      )}
    </>
  );
};

export default LatestNews;