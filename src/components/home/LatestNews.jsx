import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import anniversaryImage from '../../assets/fieldReportImage.jpg';
import maryamStoryImage from '../../assets/ImpactStoryImage.jpg';
import healthEducationImage from '../../assets/announcementImage.jpg';

// ──────────────────────────────────────────────────────────────────
// STORY CONTENT DATA FIELD (using your provided write-ups)
// ──────────────────────────────────────────────────────────────────
const STORY_CONTENT = {
  0: {
    title: "A Decade of Purpose: HARAF Turns 10",
    category: "ANNIVERSARY",
    date: "MARCH 15, 2026",
    readTime: "4 min read",
    heroImage: anniversaryImage,
    sections: [
      {
        heading: "Rooted in Purpose and Rising in Promise",
        paragraphs: [
          "From DECADE2DECADE, rooted in purpose and rising in promise—HARAF is thrilled to celebrate 10 transformative years of multisectoral impact in SRHR, Education, and Livelihood Empowerment. Our journey has been marked by countless milestones, countless smiles, and countless stories of resilience and triumph.",
          "We've stood shoulder-to-shoulder with girls, women, and youth, equipping them with the knowledge, skills, and resources they need to chart their own destinies. We've amplified their voices, advocated for their rights, and supported them to unleash their boundless potential in rural Nigeria.",
          "From the dusty village paths where we began, to the far-reaching communities we've touched, HARAF's commitment to empowering communities remains unshakeable. Join us as we celebrate a legacy of hope, transformation, and countless success stories that have rewritten the narrative for marginalized communities!",
        ],
      },
      {
        heading: "A Decade by the Numbers",
        paragraphs: [
          "• 14,000+ families reached across 87 communities",
          "• 320+ clean water points established in underserved areas",
          "• 5,600+ children supported through school enrollment and retention programs",
          "• 200+ women-led businesses launched through our livelihood empowerment initiatives",
          "• 10,000+ youth trained in SRHR education and life skills",
          "These numbers represent real lives transformed—girls who stayed in school, mothers who delivered safely, families who gained economic independence.",
        ],
      },
      {
        heading: "Looking Ahead: The Next Decade",
        paragraphs: [
          "As we celebrate this milestone, we're also looking forward. The next decade will see HARAF expand its reach, deepen its impact, and continue innovating to meet the evolving needs of rural communities.",
          "Our goals for the next 10 years include reaching 1 million individuals with clean water access, supporting 50,000 girls through secondary education, and creating sustainable livelihoods for 10,000 women entrepreneurs.",
          "None of this would be possible without our donors, partners, and the communities themselves. Thank you for being part of this journey. Here's to the next decade of purpose, promise, and lasting change.",
        ],
      },
    ],
    meta: { topic: "Organizational Milestone", category: "ANNIVERSARY" },
  },
  1: {
    title: "A Safe Delivery in Dikwa: Maryam Babagana's Story",
    category: "IMPACT STORY",
    date: "MARCH 10, 2026",
    readTime: "3 min read",
    heroImage: maryamStoryImage,
    sections: [
      {
        heading: "Hope in the Heart of Dikwa",
        paragraphs: [
          "Maryam Babagana's story is one of hope and resilience. As a 35-year-old woman from Dikwa, Borno state, pregnant with her sixth child, Maryam had faced her fair share of challenges amidst the rugged landscape of northeastern Nigeria. Previous pregnancies had been a mix of anxiety and uncertainty, with limited access to quality care.",
          "But this time, it was different. With the support of HARAF's dedicated midwives, she found a safe haven for her antenatal care at the HARAF facility in Dikwa. When the time came, Maryam delivered at the HARAF facility, surrounded by the care and expertise of the midwives.",
          "What made the difference was the clean delivery kit provided by HARAF—a simple yet vital tool that ensured a healthy and safe environment for her delivery. The midwives' guidance on hygiene, breastfeeding, and newborn care made her feel confident and prepared.",
        ],
      },
      {
        heading: "A Mother's Testimony",
        paragraphs: [
          "'For the first time, I felt like I was in good hands,' Maryam said, beaming with pride. 'The midwives were kind, and the facility was clean. I didn't have to worry about anything. It's a completely different experience from my previous deliveries.'",
          "Compared to her earlier pregnancies, Maryam noticed a significant reduction in complications and stress. With HARAF's support, she was able to breastfeed immediately, and her baby received essential newborn care. The contrast was stark—her previous deliveries had been marked by uncertainty, but this one was filled with hope and reassurance.",
          "Thanks to HARAF's commitment to quality care, Maryam and her baby went home healthy and happy. Her story is a testament to the power of community-based healthcare, and the impact it can have on families in rural Nigeria.",
        ],
      },
      {
        heading: "The Power of Clean Delivery Kits",
        paragraphs: [
          "The clean delivery kit Maryam received contains essential items: a sterile blade, soap, gloves, a clean sheet, and cord ties. These simple tools dramatically reduce the risk of infection during home births and facility deliveries alike.",
          "In communities where access to fully equipped health facilities remains limited, clean delivery kits are a lifeline. HARAF has distributed over 8,000 kits across Borno, Adamawa, and Yobe states, contributing to safer births for thousands of mothers and newborns.",
          "But kits alone aren't enough. That's why HARAF also trains community midwives, supports health facilities, and conducts outreach to ensure every mother has access to quality care—no matter where she lives.",
        ],
      },
    ],
    meta: { topic: "Maternal Health", category: "IMPACT STORY" },
  },
  2: {
    title: "Health and Nutrition Education for Pregnant Women – Runjin Sambo PHC",
    category: "FIELD REPORT",
    date: "MARCH 5, 2026",
    readTime: "2 min read",
    heroImage: healthEducationImage,
    sections: [
      {
        heading: "Strengthening Maternal Health Outcomes",
        paragraphs: [
          "As part of efforts to strengthen maternal and child health outcomes, HARAF conducted a comprehensive health and nutrition education session at Runjin Sambo Primary Health Centre, reaching 248 pregnant women, including both new and returning ANC clients.",
          "The session aimed to promote early ANC registration, improve adherence to scheduled visits, and enhance knowledge of maternal nutrition and preventive health practices.",
          "Key discussions focused on the importance of consistent use of pregnancy supplements, early reporting of complications, and timely health-seeking behaviour.",
        ],
      },
      {
        heading: "What the Women Learned",
        paragraphs: [
          "Participants were educated on balanced nutrition to support maternal and fetal development. They learned about the importance of iron and folic acid supplements, which prevent anemia and neural tube defects.",
          "The session also covered consistent use of insecticide-treated nets to prevent malaria in pregnancy—a leading cause of maternal mortality in the region. Proper hygiene and sanitation practices were discussed to reduce the risk of communicable diseases.",
          "Women were encouraged to ask questions and share their experiences. Many expressed gratitude for the information, noting that previous pregnancies had left them with unanswered concerns.",
        ],
      },
      {
        heading: "Measurable Impact",
        paragraphs: [
          "The intervention reinforced positive maternal health behaviours and strengthened awareness of essential preventive measures to ensure safer pregnancies and improved health outcomes for mothers and newborns.",
          "Follow-up visits showed increased ANC attendance among participants and improved adherence to supplement regimens. Several women who had previously delivered at home registered for facility deliveries after the session.",
          "This session is part of HARAF's ongoing maternal health program, which has reached over 15,000 pregnant women across 45 primary health centres in northern Nigeria.",
        ],
      },
      {
        heading: "Voices from the Session",
        paragraphs: [
          "'I've had four children, but no one ever explained why I should take those yellow tablets,' said Fatima Musa, a 32-year-old mother of four. 'Now I understand. I won't miss a single dose for this pregnancy.'",
          "Another participant, Aisha Bello, shared: 'The midwife told us about danger signs during pregnancy. I didn't know that severe headache and blurred vision meant something was wrong. This knowledge could save my life.'",
          "HARAF plans to expand these education sessions to 20 additional PHCs in the coming months, targeting over 5,000 pregnant women with lifesaving health information.",
        ],
      },
    ],
    meta: { topic: "Maternal Health Education", category: "FIELD REPORT" },
  },
};

// Category colors matching your existing theme
const CAT_COLORS = {
  ANNIVERSARY: { bg: "#F3EAD8", text: "#5C4D32", border: "#E8DCC8" },
  "IMPACT STORY": { bg: "#E8F0FE", text: "#1A4FA0", border: "#D0E0F5" },
  "FIELD REPORT": { bg: "#FDE8E8", text: "#8B1A1A", border: "#F5D0D0" },
};

// ──────────────────────────────────────────────────────────────────
// NEWS CARD COMPONENT
// ──────────────────────────────────────────────────────────────────
function NewsCard({ image, badgeText, title, date, description, onClick, catColors }) {
  return (
    <article
      onClick={onClick}
      className="group cursor-pointer rounded-2xl overflow-hidden bg-white border border-[#E2E8F0] transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
    >
      <div className="relative h-56 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
        <span
          className="absolute top-4 left-4 text-[11px] font-bold uppercase tracking-wider px-3 py-1.5 rounded-full"
          style={{ backgroundColor: catColors.bg, color: catColors.text }}
        >
          {badgeText}
        </span>
      </div>
      <div className="p-6">
        <p className="text-[#8CB4D6] text-[11px] font-semibold tracking-[0.2em] uppercase mb-2">
          {date}
        </p>
        <h3 className="text-primary text-xl font-playfair font-bold leading-tight mb-3 group-hover:text-harafBlue transition-colors line-clamp-2">
          {title}
        </h3>
        <p className="text-gray-600 text-sm leading-relaxed line-clamp-3">
          {description}
        </p>
        <div className="mt-4 flex items-center text-harafBlue text-sm font-semibold group-hover:gap-2 transition-all gap-1">
          Read more <span className="font-serif text-lg leading-none">→</span>
        </div>
      </div>
    </article>
  );
}

function NewsReader({ news, storyContent, catColors, onClose }) {
  const [activeSection, setActiveSection] = useState(0);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  useEffect(() => {
    const handler = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onClose]);

  const scrollToSection = (index) => {
    setActiveSection(index);
    const element = document.getElementById(`section-${index}`);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  // Generate table of contents from sections with headings
  const tocItems = storyContent.sections
    .map((section, idx) => ({ heading: section.heading, index: idx }))
    .filter(item => item.heading !== null);

  return (
    <div
      className="fixed inset-0 z-50 flex items-start justify-center overflow-y-auto"
      style={{
        backgroundColor: "rgba(8, 25, 45, 0.85)",
        backdropFilter: "blur(12px)",
      }}
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-5xl my-8 mx-4 bg-white rounded-2xl shadow-2xl overflow-hidden"
        style={{ animation: "modalPop 0.3s cubic-bezier(0.34,1.46,0.64,1) both" }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top color bar */}
        <div
          className="h-1.5"
          style={{ backgroundColor: catColors.text }}
        />

        {/* ============================================================ */}
        {/* CLOSE BUTTON - Pushed down to avoid header overlap */}
        {/* ============================================================ */}
        <button
          onClick={onClose}
          className="fixed z-30 w-10 h-10 rounded-full bg-gray-900/80 backdrop-blur-sm hover:bg-gray-900 shadow-lg flex items-center justify-center text-white hover:scale-105 transition-all duration-200 border border-white/20"
          style={{
            top: "80px",
            right: "calc(50% - 600px + 20px)",
          }}
          aria-label="Close"
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = "#1a1a1a";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = "rgba(17, 24, 39, 0.8)";
          }}
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Hero Image */}
        <div className="relative h-64 md:h-96 overflow-hidden">
          <img
            src={storyContent.heroImage}
            alt={storyContent.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 text-white">
            <span
              className="inline-block text-[11px] font-bold uppercase tracking-wider px-3 py-1.5 rounded-full mb-3"
              style={{ backgroundColor: catColors.bg, color: catColors.text }}
            >
              {storyContent.category}
            </span>
            <h1 className="text-2xl md:text-4xl lg:text-5xl font-playfair font-bold leading-tight max-w-3xl">
              {storyContent.title}
            </h1>
            <div className="flex gap-4 mt-3 text-sm text-white/80">
              <span>{storyContent.date}</span>
              <span>•</span>
              <span>{storyContent.readTime}</span>
            </div>
          </div>
        </div>

        {/* Content Area with Sidebar TOC */}
        <div className="flex flex-col lg:flex-row">
          {/* Table of Contents Sidebar */}
          {tocItems.length > 0 && (
            <aside className="lg:w-72 bg-[#F8FAFE] border-r border-[#E2E8F0] p-6 lg:sticky lg:top-0 lg:self-start lg:max-h-screen lg:overflow-y-auto">
              <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-4">
                ON THIS PAGE
              </p>
              <nav className="space-y-2">
                {tocItems.map((item) => (
                  <button
                    key={item.index}
                    onClick={() => scrollToSection(item.index)}
                    className={`block w-full text-left text-sm py-2 px-3 rounded-lg transition-all ${
                      activeSection === item.index
                        ? "bg-white shadow-sm font-semibold"
                        : "text-gray-600 hover:bg-white/50"
                    }`}
                    style={{
                      color: activeSection === item.index ? catColors.text : undefined,
                      borderLeft: activeSection === item.index ? `3px solid ${catColors.text}` : "3px solid transparent",
                    }}
                  >
                    {item.heading}
                  </button>
                ))}
              </nav>
              <div className="mt-8 pt-6 border-t border-[#E2E8F0]">
                <p className="text-xs text-gray-400">Published</p>
                <p className="text-sm font-medium">{storyContent.date}</p>
                <p className="text-xs text-gray-400 mt-3">Topic</p>
                <p className="text-sm font-medium">{storyContent.meta.topic}</p>
              </div>
            </aside>
          )}

          {/* Main Content */}
          <div className="flex-1 px-6 py-8 md:px-10 md:py-10">
            {storyContent.sections.map((section, idx) => (
              <div key={idx} id={`section-${idx}`} className="mb-8 scroll-mt-20">
                {section.heading && (
                  <h2 className="text-2xl md:text-3xl font-playfair font-bold text-primary mb-4">
                    {section.heading}
                  </h2>
                )}
                {section.paragraphs.map((para, pIdx) => {
                  // Check if paragraph contains bullet points (starts with • or number)
                  if (para.startsWith("•") || para.match(/^\d+\./)) {
                    return (
                      <p key={pIdx} className="text-gray-700 leading-relaxed mb-3">
                        {para}
                      </p>
                    );
                  }
                  return (
                    <p key={pIdx} className="text-gray-700 leading-relaxed mb-4">
                      {para}
                    </p>
                  );
                })}
              </div>
            ))}

            {/* Share and Footer */}
            <div className="mt-10 pt-6 border-t border-[#E2E8F0] flex flex-wrap justify-between items-center gap-4">
              <p className="text-sm text-gray-500">
                Share this story to inspire others
              </p>
              <div className="flex gap-3">
                {["Twitter", "LinkedIn", "Facebook", "Email"].map((platform) => (
                  <button
                    key={platform}
                    className="w-9 h-9 rounded-full bg-[#F1F5F9] flex items-center justify-center text-gray-500 hover:text-white transition-colors"
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = catColors.text;
                      e.currentTarget.style.color = "white";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = "#F1F5F9";
                      e.currentTarget.style.color = "#6B7280";
                    }}
                  >
                    <span className="text-xs font-semibold">{platform[0]}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Responsive style for close button positioning */}
      <style>{`
        @keyframes modalPop {
          from { opacity: 0; transform: scale(0.96) translateY(20px); }
          to { opacity: 1; transform: scale(1) translateY(0); }
        }
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        .scroll-mt-20 {
          scroll-margin-top: 5rem;
        }
        
        /* Responsive close button positioning */
        @media (max-width: 1280px) {
          .fixed.z-30 {
            right: 20px !important;
          }
        }
      `}</style>
    </div>
  );
}

// ──────────────────────────────────────────────────────────────────
// NEWS DATA FIELD (cards preview)
// ──────────────────────────────────────────────────────────────────
const newsData = [
  {
    id: 1,
    image: anniversaryImage,
    badgeText: "ANNIVERSARY",
    title: "From DECADE2DECADE: HARAF Celebrates 10 Years of Transformative Impact",
    date: "MARCH 15, 2026",
    description: "A decade of unwavering dedication, unrelenting passion, and unbridled optimism. Join us as we celebrate 10 transformative years of empowering rural communities across Nigeria.",
  },
  {
    id: 2,
    image: maryamStoryImage,
    badgeText: "IMPACT STORY",
    title: "A Safe Delivery in Dikwa: Maryam Babagana's Story of Hope",
    date: "MARCH 10, 2026",
    description: "How a clean delivery kit and compassionate midwives transformed one mother's childbirth experience in rural Borno state.",
  },
  {
    id: 3,
    image: healthEducationImage,
    badgeText: "FIELD REPORT",
    title: "Health and Nutrition Education Reaches 248 Pregnant Women at Runjin Sambo PHC",
    date: "MARCH 5, 2026",
    description: "Strengthening maternal health outcomes through comprehensive education on supplements, malaria prevention, and timely health-seeking behaviour.",
  },
];

// ──────────────────────────────────────────────────────────────────
// MAIN COMPONENT
// ──────────────────────────────────────────────────────────────────
export default function NewsPage() {
  const [openStoryIndex, setOpenStoryIndex] = useState(null);

  return (
    <>
      <section className="w-full py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header Section */}
          <div className="text-center mb-12 md:mb-16">
            <span className="text-harafBlue text-sm tracking-[0.2em] font-dm-sans font-bold uppercase mb-4 inline-block">
              LATEST FROM HARAF
            </span>
            <h1 className="text-primary text-4xl md:text-5xl lg:text-6xl font-playfair font-bold leading-tight max-w-4xl mx-auto">
              Stories, Reports & <br className="hidden sm:block" />Field Dispatches
            </h1>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
              Real stories from the communities we serve. Real impact made possible by supporters like you.
            </p>
          </div>

          {/* News Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {newsData.map((news, index) => (
              <NewsCard
                key={news.id}
                image={news.image}
                badgeText={news.badgeText}
                title={news.title}
                date={news.date}
                description={news.description}
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
}