import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

// ──────────────────────────────────────────────────────────────────
// ASSET IMPORTS (update paths to match your project structure)
// ──────────────────────────────────────────────────────────────────
import rosemaryImage from "../../assets/rosemaryImage.png";
import hajjaImage from "../../assets/hajjaImage.png";
import hauwauImage from "../../assets/hauwauImage.png";
import fatimaImage from "../../assets/fatimaImage.png";
import palsImage from "../../assets/ourMissionMiddleEclipse.jpg";
import mobileClinicImage from "../../assets/heroSubImage3.jpg";

// ──────────────────────────────────────────────────────────────────
// STORY CONTENT DATA FIELD (using all your provided write-ups)
// ──────────────────────────────────────────────────────────────────
const STORY_CONTENT = {
  0: {
    title: "Breaking the Silence: Rosemary's Journey to Menstrual Health Education",
    category: "IMPACT STORY",
    date: "FEBRUARY 26, 2026",
    readTime: "4 min read",
    location: "Modire, Yolde Pate, Yola South, Adamawa State",
    heroImage: rosemaryImage,
    sections: [
      {
        heading: "A Mother's Transformation",
        paragraphs: [
          "Rosemary Jacob Joseph, 39, mother of six, has transformed her approach to menstrual health. As a beneficiary of HARAF's menstrual education initiative, Rosemary gained vital knowledge on menstrual health and hygiene, boosting her confidence to guide her daughters and promote healthy practices at home and in her community.",
          "Previously, Rosemary's own traumatic first menstrual experience led her to avoid discussing menstruation with her children due to stigma. The project's sensitization sessions changed this, helping her understand the importance of preparing children for their first cycle and fostering openness.",
          "Now, Rosemary educates her children about menstruation, ensuring they're informed and emotionally supported. Her story showcases the project's success in strengthening attitudes and improving caregiver practices, breaking the silence on menstrual health in Yolde Pate community.",
        ],
      },
      {
        heading: "A Mother's Promise",
        paragraphs: [
          "\"I don't want my children to go through the fear I went through. Now I will teach them before their first experience.\" – Rosemary",
          "The Sang Pour Sang Project is a menstrual health initiative designed to address menstrual discrimination practices through advocacy, education, and community engagement. The project is funded by Agence Française de Développement (AFD).",
          "HARAF is implementing the initiative across four communities: Badrisa, Bole Yolde Pate, Namtari, and Vunoklang, targeting women aged 35 years and above.",
        ],
      },
    ],
    meta: { topic: "Menstrual Health & Education", category: "IMPACT STORY" },
  },
  1: {
    title: "From Homemaker to Businesswoman: Hajja's Kitchen Garden Success",
    category: "IMPACT STORY",
    date: "FEBRUARY 27, 2026",
    readTime: "5 min read",
    location: "Jabbi-Lamba, Adamawa State",
    heroImage: hajjaImage,
    sections: [
      {
        heading: "Cultivating Independence",
        paragraphs: [
          "Hajja Adamu, 26, is one of the three wives of Mallam Adamu Aliyu and a devoted mother of five; three boys and two girls. Living in the host community of Jabbi Lamba, Hajja was a stay-at-home wife and mother with no independent source of income.",
          "That changed when she joined the first cohort of the Kitchen Garden Program under the BMZ Project's Livelihood Unit. The program trains lactating mothers, pregnant women, and caregivers of malnourished children to cultivate vegetables in small home spaces.",
          "Participants receive practical skills, knowledge, and inputs to grow nutritious vegetables that improve household diets, generate income, and supply essential nutrients for children facing malnutrition.",
        ],
      },
      {
        heading: "A Thriving Enterprise",
        paragraphs: [
          "After her training, Hajja transformed her garden into both a food source and a business. She now cultivates vegetables for her family's consumption and for sale in her community. Beyond maintaining her garden, she has diversified it by adding new vegetable varieties, increasing both her harvest and earnings.",
          "For over a year, Hajja's vegetable garden has provided steady income and improved her family's nutrition. From a homemaker with no livelihood, she is now a businesswoman, contributing to her household's resilience and inspiring other women in Jabbi Lamba.",
          "\"I used to wait for everything to be provided. Now I have my own income from my garden. When my children need books or medicine, I don't have to ask; I can provide.\"",
        ],
      },
      {
        heading: "Program Impact",
        paragraphs: [
          "The Kitchen Garden Program strengthens household nutrition and economic resilience by equipping vulnerable women with the tools to grow food, earn income, and combat malnutrition; one backyard at a time.",
          "The food production at home programme is part of the BMZ project that trains and empowers young women from the ages of 19 to 24 on how to produce food at home. The programme aims at empowering young pregnant women, lactating mothers, and mothers with malnourished children on how to produce their own vegetables for consumption and also for commercial purpose.",
        ],
      },
    ],
    meta: { topic: "Food Security & Livelihoods", category: "IMPACT STORY" },
  },
  2: {
    title: "Saving Goats, Saving Futures: Madam Hauwa'u's Story of Hope",
    category: "IMPACT STORY",
    date: "FEBRUARY 25, 2026",
    readTime: "4 min read",
    location: "Fufore, Adamawa State",
    heroImage: hauwauImage,
    sections: [
      {
        heading: "A Widow's Burden",
        paragraphs: [
          "Madam Hauwa'u Njobdi, 58, bears the weight of both grief and responsibility. After losing her husband several years ago, she became the sole provider for her children. With few income options, she turned to livestock; rearing goats to feed her family, pay school fees, and cover daily needs.",
          "But rearing goats came with constant fear. Diseases could sweep through her small herd overnight, wiping out the income her children depended on. Veterinary services were far, and vaccines were either unavailable or unaffordable.",
        ],
      },
      {
        heading: "A Lifesaving Intervention",
        paragraphs: [
          "That changed when Madam Hauwa'u benefitted from the Livestock Vaccination Scale-Up Initiative by HARAF, funded by PROPCOM+. The program focuses on expanding access to vaccines in rural communities to improve the overall health of livestock and reduce mortality and morbidity rates.",
          "Through community-based vaccination campaigns, her goats were vaccinated against common deadly diseases. The result was immediate. Her herd stayed healthy, losses dropped, and her confidence grew.",
          "With fewer deaths and sick animals, she now sells more goats at better prices and has even started expanding her herd. What was once a fragile safety net is becoming a stable business.",
        ],
      },
      {
        heading: "A Family's Future Secured",
        paragraphs: [
          "\"I used to pray my goats would survive each season, now I know they are protected. This vaccine program did not just save my goats; it saved my family's future.\"",
          "By scaling up vaccine access for rural livestock farmers, the initiative is reducing livestock deaths, protecting household income, and strengthening food security. For widows like Madam Hauwa'u, healthy animals mean dignity, stability, and hope.",
          "PROPCOM+ focuses on the scale up of access to vaccines in rural communities of Adamawa State, improving the overall health of livestock and reducing mortality and morbidity rates.",
        ],
      },
    ],
    meta: { topic: "Livestock & Economic Security", category: "IMPACT STORY" },
  },
  3: {
    title: "Finding Her Voice: Fatima's Journey at the Adolescents' Corner",
    category: "IMPACT STORY",
    date: "FEBRUARY 23, 2026",
    readTime: "4 min read",
    location: "Girei, Adamawa State",
    heroImage: fatimaImage,
    sections: [
      {
        heading: "At a Crossroads",
        paragraphs: [
          "Fatima, 19, is an adolescent from Girei community and the third of four children in a family of six. After completing secondary school, she stands at a crossroads common to many young women; weighing marriage, further education, and financial independence.",
          "For Fatima, building a business feels like the most practical path forward. But before she could plan her next steps, she needed to be healthy and informed.",
        ],
      },
      {
        heading: "A Safe Space for Young People",
        paragraphs: [
          "Through HARAF's work in Girei, Fatima accessed critical health services at a local facility. She benefitted from essential drugs and commodities supplied to the clinic, ensuring she received proper medical care when needed.",
          "More importantly, she found a safe space at the Adolescents' Corner; a private, confidential setting where young people can speak openly and receive counselling on health, wellbeing, and life choices.",
          "The counselling sessions gave Fatima clarity. With accurate information and a trusted person to talk to, she could make decisions about her health and future with confidence, not fear.",
        ],
      },
      {
        heading: "Planning for Tomorrow",
        paragraphs: [
          "\"Before, I was shy to ask questions about my body or my choices. At the Adolescents' Corner, I felt safe. They listened to me. Now I understand myself better, and I can plan for my business and my life.\"",
          "HARAF's support in Girei goes beyond supplying drugs; it creates safe, youth-friendly spaces where adolescents like Fatima can access care and counselling with dignity and privacy. When young people are healthy and informed, they make stronger choices for their future.",
          "The Youth Learn, Earn and Prosper in the Lake Chad Region project is an initiative funded by the German Federal Ministry for Economic Cooperation and Development (BMZ). In partnership with PLAN International, youth participants receive vocational and technical skills, life-skills education, and entrepreneurship coaching.",
        ],
      },
    ],
    meta: { topic: "Youth Health & Empowerment", category: "IMPACT STORY" },
  },
  4: {
    title: "Strengthening Adolescent Health Awareness in Mafa & Damboa",
    category: "FIELD REPORT",
    date: "JANUARY 2026",
    readTime: "5 min read",
    location: "Mafa & Damboa LGAs, Borno State",
    heroImage: palsImage,
    sections: [
      {
        heading: "Behaviour Change and Communication Sessions",
        paragraphs: [
          "In January 2026, HARAF successfully implemented a series of integrated Behaviour Change and Communication (BCC) sessions across Mafa and Damboa LGAs, strengthening adolescent health awareness and promoting positive behavioural outcomes.",
          "A total of 19 adolescents and youth participated in Drug Abuse Awareness sessions, which highlighted the dangers of substance misuse, drug dependence, and the associated health and social risks. Participants gained practical knowledge that empowered them to make informed decisions, reduce risky behaviours, and adopt healthier lifestyles.",
        ],
      },
      {
        heading: "Sexual and Reproductive Health Education",
        paragraphs: [
          "In addition, 24 adolescents and youth were reached through Sexual and Reproductive Health (SRH) awareness sessions focusing on puberty, menstruation, and hygiene. These sessions enhanced participants' understanding of normal developmental changes and promoted safe hygiene practices, reinforcing dignity and informed health choices among young people.",
          "Furthermore, 33 adolescents and youth took part in Adolescent Health and Wellbeing sessions that emphasized malaria prevention and its link to sexual and reproductive health. The discussions highlighted the importance of consistent use of preventive measures, early and regular antenatal care (ANC) attendance, and timely health-seeking behaviour.",
        ],
      },
      {
        heading: "Measurable Outcomes",
        paragraphs: [
          "Overall, these interventions significantly strengthened adolescents' knowledge, improved preventive health practices, and expanded access to essential health information and services across the targeted communities.",
          "The success of these sessions demonstrates the power of community-based health education in transforming young lives and building healthier futures.",
        ],
      },
    ],
    meta: { topic: "Adolescent Health", category: "FIELD REPORT" },
  },
  5: {
    title: "Youth-Friendly Health Services Reach 2,380 Adolescents",
    category: "FIELD REPORT",
    date: "JANUARY 2026",
    readTime: "4 min read",
    location: "Adamawa & Borno Communities",
    heroImage: mobileClinicImage,
    sections: [
      {
        heading: "Expanding Access to Quality Care",
        paragraphs: [
          "In January 2026, adolescents and youths from Gerei, Malabu, Jabbi Lamba, Ribadu, Kelari, Alkalari, Semari and Shuwari in Adamawa and Borno communities actively accessed essential Sexual and Reproductive Health (SRH) services at their respective Primary Health Care (PHC) centers.",
          "Services provided included comprehensive antenatal care, safe delivery and post-natal services, family planning, STI diagnosis and treatment, and counseling.",
        ],
      },
      {
        heading: "Trained Health Workers Make the Difference",
        paragraphs: [
          "These services were delivered by health workers trained in Adolescent and Youth-Friendly Health Services (AYFHS), with support from Plan International and HARAF, ensuring that care was confidential, youth-responsive, and tailored to the specific needs of young people.",
          "A total of 2,380 individuals (1,818 females and 562 males) were reached during the reporting period, reflecting strengthened access to quality, youth-friendly SRH services across the targeted communities.",
        ],
      },
      {
        heading: "Sustaining the Momentum",
        paragraphs: [
          "The initiative strengthened access to quality healthcare, improved knowledge of maternal health and STI prevention, and empowered adolescents and youths to make informed decisions about their wellbeing.",
          "Continued collaboration with partners and community stakeholders remains critical to sustaining and expanding youth-friendly health services across the targeted communities.",
        ],
      },
    ],
    meta: { topic: "Youth-Friendly Health Services", category: "FIELD REPORT" },
  },
  6: {
    title: "PALS Program: Empowering 576 Adolescents and Caregivers",
    category: "PROGRAM UPDATE",
    date: "JANUARY 2026",
    readTime: "5 min read",
    location: "Adamawa & Borno States",
    heroImage: palsImage,
    sections: [
      {
        heading: "Community-Driven Selection Process",
        paragraphs: [
          "The HARAF PALS team in Adamawa and Borno successfully targeted and selected 576 participants for Cohorts 11 and 12 of the Parenting and Adolescent Life Skills (PALS) program across Malabu, Gurin, Girei, Jabi-Lamba, Kaleri, Simari, Alkaleri, and Shuwari communities.",
          "The selected participants include 288 adolescents (170 females and 118 males) and 288 caregivers (234 females and 54 males).",
        ],
      },
      {
        heading: "Transparent and Inclusive Selection",
        paragraphs: [
          "The selection process was conducted in close collaboration with community stakeholders and mobilizers, ensuring an inclusive, transparent, and community-driven approach. This process strengthened community ownership, reinforced trust, and promoted active participation while ensuring that eligible adolescents and caregivers were identified based on established vulnerability criteria.",
          "The exercise also contributed to raising awareness and strengthening community engagement with the PALS program.",
        ],
      },
      {
        heading: "What Participants Will Learn",
        paragraphs: [
          "The selected participants will undergo the 13-week Parenting and Adolescent Life Skills (PALS) sessions, designed to equip adolescents with the knowledge, confidence, and life skills needed to navigate life transitions and make informed decisions.",
          "At the same time, the program empowers parents and caregivers with practical skills and guidance to effectively support the holistic development, wellbeing, and positive outcomes of their adolescent children.",
        ],
      },
    ],
    meta: { topic: "Parenting & Life Skills", category: "PROGRAM UPDATE" },
  },
  7: {
    title: "Mobile Health Clinics Bring Care to Hard-to-Reach Communities in Dikwa",
    category: "FIELD REPORT",
    date: "JANUARY 2026",
    readTime: "6 min read",
    location: "Dikwa LGA, Borno State",
    heroImage: mobileClinicImage,
    sections: [
      {
        heading: "Reaching the Unreached",
        paragraphs: [
          "In January 2026, HARAF, funded by the Nigerian Humanitarian Fund (NHF) project 'Integrated Health, Nutrition to Mitigate Lean Season Vulnerability in Dikwa and Madagali LGAs,' strategically deployed two Mobile Health Teams (MHTs) to Masarmari and Fulatari wards in Dikwa LGA.",
          "This ensured uninterrupted access to integrated primary healthcare for hard-to-reach and conflict-affected populations.",
        ],
      },
      {
        heading: "Comprehensive Health Services",
        paragraphs: [
          "The teams provided comprehensive outpatient consultations, diagnosis, and treatment for common illnesses, including malaria, acute respiratory infections, diarrheal diseases, and other communicable conditions. Maternal health assessments were conducted, with complicated cases promptly stabilized and referred through established referral pathways.",
          "Nutrition screening was systematically integrated to enable early detection and referral of suspected MAM and SAM cases, enhancing community-level case management and health outcomes.",
        ],
      },
      {
        heading: "Impressive Reach",
        paragraphs: [
          "A total of 1,463 individuals benefited from mobile health consultations, while 2,361 community members participated in Risk Communication and Community Engagement (RCCE) sessions. These sessions delivered targeted messaging on measles prevention, routine immunization, infection prevention and control, early health-seeking behavior, and Sexual and Reproductive Health (SRH).",
          "By combining clinical services with proactive health education and engaging community leaders and volunteers, HARAF strengthened trust, participation, and accountability, significantly improving access to essential healthcare and reinforcing preventive health behaviors across the targeted communities.",
        ],
      },
      {
        heading: "Facility-Based Support Continues",
        paragraphs: [
          "The HARAF team also sustained critical support through Facility-Based OPD and SRH Services to Kasugula Primary Health Centre in Dikwa, ensuring uninterrupted access to quality outpatient and Sexual and Reproductive Health (SRH) services for conflict-affected and vulnerable populations.",
          "A total of 483 individuals accessed facility-based OPD consultations during the reporting period. Services included consultation, diagnosis, and treatment of common illnesses affecting children, women, and men.",
        ],
      },
    ],
    meta: { topic: "Mobile Health & Nutrition", category: "FIELD REPORT" },
  },
};

// Category colors matching your theme
const CAT_COLORS = {
  "IMPACT STORY": { bg: "#E8F0FE", text: "#1A4FA0", border: "#D0E0F5" },
  "FIELD REPORT": { bg: "#FDE8E8", text: "#8B1A1A", border: "#F5D0D0" },
  "PROGRAM UPDATE": { bg: "#E8F5E9", text: "#1B5E20", border: "#C8E6C9" },
};

// ──────────────────────────────────────────────────────────────────
// STORY CARD COMPONENT
// ──────────────────────────────────────────────────────────────────
function StoryCard({ story, onClick, catColors }) {
  return (
    <article
      onClick={onClick}
      className="group cursor-pointer rounded-2xl overflow-hidden bg-white border border-[#E2E8F0] transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
    >
      <div className="relative h-56 overflow-hidden">
        <img
          src={story.heroImage}
          alt={story.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
        <span
          className="absolute top-4 left-4 text-[11px] font-bold uppercase tracking-wider px-3 py-1.5 rounded-full"
          style={{ backgroundColor: catColors.bg, color: catColors.text }}
        >
          {story.category}
        </span>
        <span className="absolute bottom-4 left-4 bg-black/60 backdrop-blur-sm text-white text-[10px] font-medium px-2 py-1 rounded-full">
          📍 {story.location.split(",")[0]}
        </span>
      </div>
      <div className="p-6">
        <p className="text-[#8CB4D6] text-[11px] font-semibold tracking-[0.2em] uppercase mb-2">
          {story.date}
        </p>
        <h3 className="text-primary text-xl font-playfair font-bold leading-tight mb-3 group-hover:text-harafBlue transition-colors line-clamp-2">
          {story.title}
        </h3>
        <p className="text-gray-600 text-sm leading-relaxed line-clamp-3">
          {story.sections[0]?.paragraphs[0]?.substring(0, 120)}...
        </p>
        <div className="mt-4 flex items-center text-harafBlue text-sm font-semibold group-hover:gap-2 transition-all gap-1">
          Read full story <span className="font-serif text-lg leading-none">→</span>
        </div>
      </div>
    </article>
  );
}

// ──────────────────────────────────────────────────────────────────
// STORY READER MODAL (with visible close button)
// ──────────────────────────────────────────────────────────────────
function StoryReader({ story, storyContent, catColors, onClose }) {
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
        <div className="h-1.5" style={{ backgroundColor: catColors.text }} />

        {/* CLOSE BUTTON - Pushed down to avoid header */}
        <button
          onClick={onClose}
          className="fixed z-30 w-10 h-10 rounded-full bg-gray-900/80 backdrop-blur-sm hover:bg-gray-900 shadow-lg flex items-center justify-center text-white hover:scale-105 transition-all duration-200 border border-white/20"
          style={{
            top: "90px",
            right: "calc(50% - 600px + 20px)",
          }}
          aria-label="Close"
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
            <div className="flex flex-wrap gap-4 mt-3 text-sm text-white/80">
              <span>{storyContent.date}</span>
              <span>•</span>
              <span>{storyContent.readTime}</span>
              <span>•</span>
              <span>📍 {storyContent.location}</span>
            </div>
          </div>
        </div>

        {/* Content Area */}
        <div className="flex flex-col lg:flex-row">
          {/* Table of Contents Sidebar */}
          {tocItems.length > 0 && (
            <aside className="lg:w-72 bg-[#F8FAFE] border-r border-[#E2E8F0] p-6 lg:sticky lg:top-0 lg:self-start lg:max-h-screen lg:overflow-y-auto">
              <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-4">
                IN THIS STORY
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
                <p className="text-xs text-gray-400 mt-3">Location</p>
                <p className="text-sm font-medium">{storyContent.location}</p>
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
                  if (para.startsWith('"') || para.includes("–")) {
                    return (
                      <p key={pIdx} className="text-gray-700 leading-relaxed mb-4 italic border-l-4 pl-4" style={{ borderLeftColor: catColors.text }}>
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

            {/* Footer */}
            <div className="mt-10 pt-6 border-t border-[#E2E8F0]">
              <button
                onClick={onClose}
                className="group flex items-center gap-2.5 bg-harafBlue hover:bg-[#1462a8] transition-all text-white font-dm-sans font-bold text-xs tracking-[0.18em] uppercase rounded-xl px-6 py-3"
              >
                <svg className="w-4 h-4 transition-transform group-hover:-translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 19l-7-7 7-7" />
                </svg>
                Back to All Stories
              </button>
            </div>
          </div>
        </div>
      </div>

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
// STORIES DATA FIELD (cards preview)
// ──────────────────────────────────────────────────────────────────
const storiesData = [
  {
    id: 1,
    title: "Breaking the Silence: Rosemary's Journey to Menstrual Health Education",
    category: "IMPACT STORY",
    date: "FEBRUARY 26, 2026",
    readTime: "4 min read",
    location: "Modire, Yolde Pate, Yola South, Adamawa State",
    heroImage: rosemaryImage,
    sections: STORY_CONTENT[0].sections,
  },
  {
    id: 2,
    title: "From Homemaker to Businesswoman: Hajja's Kitchen Garden Success",
    category: "IMPACT STORY",
    date: "FEBRUARY 27, 2026",
    readTime: "5 min read",
    location: "Jabbi-Lamba, Adamawa State",
    heroImage: hajjaImage,
    sections: STORY_CONTENT[1].sections,
  },
  {
    id: 3,
    title: "Saving Goats, Saving Futures: Madam Hauwa'u's Story of Hope",
    category: "IMPACT STORY",
    date: "FEBRUARY 25, 2026",
    readTime: "4 min read",
    location: "Fufore, Adamawa State",
    heroImage: hauwauImage,
    sections: STORY_CONTENT[2].sections,
  },
  {
    id: 4,
    title: "Finding Her Voice: Fatima's Journey at the Adolescents' Corner",
    category: "IMPACT STORY",
    date: "FEBRUARY 23, 2026",
    readTime: "4 min read",
    location: "Girei, Adamawa State",
    heroImage: fatimaImage,
    sections: STORY_CONTENT[3].sections,
  },
  {
    id: 5,
    title: "Strengthening Adolescent Health Awareness in Mafa & Damboa",
    category: "FIELD REPORT",
    date: "JANUARY 2026",
    readTime: "5 min read",
    location: "Mafa & Damboa LGAs, Borno State",
    heroImage: palsImage,
    sections: STORY_CONTENT[4].sections,
  },
  {
    id: 6,
    title: "Youth-Friendly Health Services Reach 2,380 Adolescents",
    category: "FIELD REPORT",
    date: "JANUARY 2026",
    readTime: "4 min read",
    location: "Adamawa & Borno Communities",
    heroImage: mobileClinicImage,
    sections: STORY_CONTENT[5].sections,
  },
  {
    id: 7,
    title: "PALS Program: Empowering 576 Adolescents and Caregivers",
    category: "PROGRAM UPDATE",
    date: "JANUARY 2026",
    readTime: "5 min read",
    location: "Adamawa & Borno States",
    heroImage: palsImage,
    sections: STORY_CONTENT[6].sections,
  },
  {
    id: 8,
    title: "Mobile Health Clinics Bring Care to Hard-to-Reach Communities in Dikwa",
    category: "FIELD REPORT",
    date: "JANUARY 2026",
    readTime: "6 min read",
    location: "Dikwa LGA, Borno State",
    heroImage: mobileClinicImage,
    sections: STORY_CONTENT[7].sections,
  },
];

// ──────────────────────────────────────────────────────────────────
// MAIN COMPONENT
// ──────────────────────────────────────────────────────────────────
export default function ImpactStoriesPage() {
  const [openStoryId, setOpenStoryId] = useState(null);
  const [filterCategory, setFilterCategory] = useState("all");

  const categories = ["all", "IMPACT STORY", "FIELD REPORT", "PROGRAM UPDATE"];

  const filteredStories = filterCategory === "all"
    ? storiesData
    : storiesData.filter(story => story.category === filterCategory);

  const openStory = storiesData.find(s => s.id === openStoryId);
  const openStoryContent = openStoryId ? STORY_CONTENT[openStoryId - 1] : null;

  return (
    <>
      <section className="w-full py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header Section */}
          <div className="text-center mb-12 md:mb-16">
            <span className="text-harafBlue text-sm tracking-[0.2em] font-dm-sans font-bold uppercase mb-4 inline-block">
              IMPACT STORIES
            </span>
            <h1 className="text-primary text-4xl md:text-5xl lg:text-6xl font-playfair font-bold leading-tight max-w-4xl mx-auto">
              Real Lives, <br className="hidden sm:block" />Real Change
            </h1>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
              Stories of resilience, transformation, and hope from the communities we serve across northern Nigeria.
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setFilterCategory(cat)}
                className={`px-5 py-2 rounded-full text-sm font-semibold transition-all capitalize ${
                  filterCategory === cat
                    ? "bg-harafBlue text-white shadow-md"
                    : "bg-[#EEF5FC] text-harafBlue hover:bg-[#D8E8F0]"
                }`}
              >
                {cat === "all" ? "All Stories" : cat.replace("_", " ")}
              </button>
            ))}
          </div>

          {/* Stories Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredStories.map((story) => (
              <StoryCard
                key={story.id}
                story={story}
                onClick={() => setOpenStoryId(story.id)}
                catColors={CAT_COLORS[story.category]}
              />
            ))}
          </div>

          {filteredStories.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500">No stories found in this category.</p>
            </div>
          )}

          {/* Footer Link */}
          <div className="flex justify-start border-b-2 border-harafYellow pb-2 max-w-[200px] mt-16">
            <Link
              to="/news"
              className="text-[#6B4C32] font-dm-sans text-sm font-bold tracking-wider uppercase flex items-center hover:text-primary transition-colors"
            >
              MORE FIELD REPORTS <span className="ml-2 font-serif text-lg leading-none">→</span>
            </Link>
          </div>

        </div>
      </section>

      {/* Story Reader Modal */}
      {openStoryId !== null && openStoryContent && (
        <StoryReader
          story={openStory}
          storyContent={openStoryContent}
          catColors={CAT_COLORS[openStory.category]}
          onClose={() => setOpenStoryId(null)}
        />
      )}
    </>
  );
}