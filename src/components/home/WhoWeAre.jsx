import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import worldMap from '../../assets/WorldMap.svg';
import middleEclipse from '../../assets/ourMissionMiddleEclipse.jpg';
import topRightEclipse from '../../assets/ourMissionTopRightEclipse.jpg';
import bottomLeftEclipse from '../../assets/mamaBaby.jpeg';

// Import or define images for each pillar
import ancImage from '../../assets/anc-pnc.webp';
import menstrualImage from '../../assets/menstrual-hygiene.webp';
import foodImage from '../../assets/food-security.jpg';
import educationImage from '../../assets/school.jpeg';
import mobileImage from '../../assets/loveImage.jpg';
import livelihoodImage from '../../assets/heroSubImage3.jpg';

const PILLARS = [
  { icon: '💧', label: 'ANC & PNC', key: 'anc' },
  { icon: '🌾', label: 'Menstrual Hygiene and Dignity', key: 'menstrual' },
  { icon: '📚', label: 'Food Security', key: 'food' },
  { icon: '🏥', label: 'Education', key: 'education' },
  { icon: '👩‍💼', label: 'Mobile Health care', key: 'mobile' },
  { icon: '🤝', label: 'Livelihood Empowerment', key: 'livelihood' },
];

const PILLAR_CONTENT = {
  anc: {
    title: 'ANC & PNC (Antenatal and Postnatal Care)',
    image: ancImage,
    content: `At HARAF, maternal and newborn health is approached as a continuum of care, not a one-time intervention. The organization recognizes that preventable maternal and neonatal deaths are often the result of delayed care-seeking, weak referral systems, and limited access to skilled providers—especially in underserved and rural communities.

Program Strategy: HARAF deploys a community-to-facility model that ensures women are identified early in pregnancy, enrolled into antenatal care systems, supported through safe delivery, and monitored during the critical postnatal period. Community Health Volunteers (CHVs) and frontline workers are trained to conduct household-level tracking, ensuring no pregnant woman is left behind.

Core Interventions: Early pregnancy identification and ANC enrollment campaigns, routine antenatal services (screenings, immunization, nutrition counseling), birth preparedness planning (including emergency transport mapping), skilled birth attendance advocacy and facility linkage, postnatal follow-ups (0–48 hours, 7 days, 6 weeks), detection and referral of complications (e.g., preeclampsia, infections).

Systems Strengthening: HARAF collaborates with local health authorities to improve data tracking and reporting systems, strengthen referral pathways between communities and facilities, and support training and supervision of midwives and health workers.

Long-Term Impact: Sustained reduction in maternal and neonatal mortality, improved health-seeking behavior among women, stronger primary healthcare systems.`,
  },
  menstrual: {
    title: 'Menstrual Hygiene and Dignity',
    image: menstrualImage,
    content: `HARAF treats menstrual health not just as a hygiene issue, but as a critical intersection of gender equality, education, and human rights. In many communities, menstruation remains surrounded by stigma, misinformation, and silence—leading to school absenteeism, reduced confidence, and social exclusion.

Program Philosophy: Every girl deserves to manage her menstruation with dignity, safety, and confidence. HARAF's approach combines product access, education, and cultural transformation.

Core Interventions: Distribution of menstrual hygiene kits (including reusable, eco-friendly options), school-based menstrual health education sessions, establishment of "safe spaces" for adolescent girls, training of peer educators and community champions, engagement with parents, teachers, and religious leaders to shift harmful norms, improvement of WASH facilities in schools and communities.

Behavioral Change Approach: HARAF uses storytelling, peer learning, and community dialogue to normalize conversations around menstruation, break myths and misconceptions, and promote positive hygiene practices.

Long-Term Impact: Increased school attendance and retention among girls, improved self-esteem and participation, reduced stigma and gender-based discrimination.`,
  },
  food: {
    title: 'Food Security',
    image: foodImage,
    content: `HARAF addresses food insecurity through a dual approach: immediate relief and long-term resilience building. The organization understands that hunger is both a humanitarian issue and a structural challenge linked to poverty, climate change, and limited agricultural capacity.

Program Strategy: HARAF integrates nutrition-sensitive and livelihood-driven interventions to ensure households not only access food but can sustainably produce it.

Core Interventions: Emergency food assistance for vulnerable populations, community-based management of acute malnutrition (CMAM), nutrition education for pregnant women and caregivers, agricultural support (seeds, tools, irrigation techniques), promotion of climate-smart and regenerative farming practices, household kitchen gardens and small livestock support.

Resilience Building: HARAF empowers communities to diversify food sources, improve storage and preservation techniques, and adapt to climate variability.

Long-Term Impact: Reduced malnutrition and stunting rates, increased household food self-sufficiency, strengthened local agricultural economies.`,
  },
  education: {
    title: 'Education',
    image: educationImage,
    content: `Education is central to HARAF's mission of unlocking human potential and driving generational transformation. The organization prioritizes inclusive access, especially for marginalized groups such as girls, out-of-school children, and conflict-affected populations.

Program Strategy: HARAF adopts a holistic education model that addresses access, quality, and retention simultaneously.

Core Interventions: Enrollment drives and back-to-school campaigns, provision of learning materials and scholarships, support for non-formal and alternative education pathways, teacher training and capacity development, digital literacy and 21st-century skills programs, school infrastructure support (where needed).

Equity Focus: Special emphasis is placed on girl-child education, inclusive education for children with disabilities, and reintegration of out-of-school children.

Long-Term Impact: Improved literacy and numeracy outcomes, reduced dropout rates, creation of a skilled and empowered generation.`,
  },
  mobile: {
    title: 'Mobile Healthcare',
    image: mobileImage,
    content: `HARAF bridges healthcare access gaps by bringing services directly to communities through mobile and outreach-based delivery models. This is particularly critical in areas where distance, cost, and infrastructure limit access to care.

Program Strategy: Healthcare is decentralized—moving from static facilities to people-centered outreach systems.

Core Interventions: Mobile clinic deployments to underserved areas, routine immunization and vaccination campaigns, screening for communicable and non-communicable diseases, maternal and child health services, health education and awareness campaigns, integration of digital health tools for tracking and follow-up.

Access Innovation: HARAF leverages data-driven mapping to identify underserved communities, partnerships with local health systems, and community mobilization to ensure high service uptake.

Long-Term Impact: Increased healthcare coverage, early disease detection and reduced complications, reduced health disparities across regions.`,
  },
  livelihood: {
    title: 'Livelihood Empowerment',
    image: livelihoodImage,
    content: `HARAF's livelihood program is designed to move individuals and households from dependency to productivity and economic independence. It focuses on equipping beneficiaries with the skills, tools, and networks needed to thrive in a competitive and evolving economy.

Program Strategy: The program combines skills development, enterprise support, and financial inclusion.

Core Interventions: Vocational and technical skills training (tailored to market demand), entrepreneurship development and business incubation, access to startup kits, grants, or micro-financing, formation of savings and loan groups (VSLA models), financial literacy and business management training, market linkage and value chain integration.

Target Groups: Youth (especially unemployed graduates and school leavers), women (with focus on economic inclusion), vulnerable households.

Long-Term Impact: Increased income and financial stability, reduced poverty and vulnerability, growth of local enterprises and economies.`,
  },
};

function WhoWeAre() {
  const [selectedPillar, setSelectedPillar] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handlePillarClick = (pillar) => {
    const content = PILLAR_CONTENT[pillar.key];
    if (content) {
      setSelectedPillar(content);
      setIsModalOpen(true);
      document.body.style.overflow = '';
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedPillar(null);
    document.body.style.overflow = 'unset';
  };

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  return (
    <>
      <style>{`
        @keyframes wwaFadeUp {
          from { opacity: 0; transform: translateY(24px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes wwaSlideIn {
          from { opacity: 0; transform: translateX(-20px); }
          to   { opacity: 1; transform: translateX(0); }
        }
        @keyframes circleFloat {
          0%, 100% { transform: translateY(0px); }
          50%       { transform: translateY(-6px); }
        }
        @keyframes modalFadeIn {
          from { opacity: 0; }
          to   { opacity: 1; }
        }
        @keyframes modalSlideUp {
          from { opacity: 0; transform: translateY(30px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .wwa-left  { animation: wwaSlideIn 0.8s ease 0.1s both; }
        .wwa-right { animation: wwaFadeUp  0.8s ease 0.3s both; }
        .wwa-pill  { animation: wwaFadeUp  0.5s ease var(--d, 0s) both; }
        
        /* Custom scrollbar for modal */
        .modal-scroll::-webkit-scrollbar {
          width: 6px;
        }
        .modal-scroll::-webkit-scrollbar-track {
          background: rgba(255,255,255,0.05);
          border-radius: 3px;
        }
        .modal-scroll::-webkit-scrollbar-thumb {
          background: #1E78C2;
          border-radius: 3px;
        }
        .modal-scroll::-webkit-scrollbar-thumb:hover {
          background: #155a96;
        }
      `}</style>

      <div className="relative w-full overflow-hidden bg-[#0A1929]">

        {/* World map — ghosted dark */}
        <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none opacity-[0.04]">
          <img 
            src={worldMap} 
            alt="" 
            aria-hidden="true" 
            className="w-full h-full object-contain brightness-200" 
            width="1320" 
            height="500" 
            loading="lazy" 
          />
        </div>

        {/* Top fine line accent */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-harafBlue/40 to-transparent" />

        <div className="relative z-10 max-w-[1320px] mx-auto px-6 sm:px-10 lg:px-16 py-20 lg:py-28">

          {/* ── SECTION LABEL ─────────────────────────────────────────── */}
          <div className="flex items-center gap-4 mb-1">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent to-harafBlue/30 max-w-[60px]" />
            <span className="font-dm-sans font-bold text-harafBlue text-[11px] uppercase tracking-[0.25em]">Who We Are</span>
            <div className="h-px flex-1 bg-gradient-to-r from-harafBlue/30 to-transparent" />
          </div>

          {/* ── MAIN GRID ─────────────────────────────────────────────── */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-12 items-center">

            {/* ── LEFT: Image collage ──────────────────────────────────── */}
            <div className="wwa-left relative flex items-center justify-center lg:justify-start" style={{ minHeight: 480 }}>

              {/* Decorative ring */}
              <div className="absolute rounded-full border border-harafBlue/10 pointer-events-none"
                style={{ width: 420, height: 420, top: '50%', left: '50%', transform: 'translate(-46%, -48%)' }}
              />
              <div className="absolute rounded-full border border-harafBlue/06 pointer-events-none"
                style={{ width: 520, height: 520, top: '50%', left: '50%', transform: 'translate(-46%, -48%)' }}
              />

              {/* Dot grid */}
              <div className="absolute top-4 right-4 pointer-events-none opacity-20"
                style={{
                  backgroundImage: 'radial-gradient(circle, #8CB4D6 1.2px, transparent 1.2px)',
                  backgroundSize: '14px 14px',
                  width: 84, height: 84,
                }}
              />

              {/* Main center circle */}
              <div className="relative z-10 ml-8 sm:ml-16 lg:ml-12" style={{ animation: 'circleFloat 6s ease-in-out infinite' }}>
                <div className="rounded-full overflow-hidden border-4 border-white/10 shadow-2xl"
                  style={{
                    width: 'clamp(220px, 28vw, 320px)',
                    height: 'clamp(220px, 28vw, 320px)',
                    boxShadow: '0 24px 60px rgba(0,0,0,0.5), 0 0 0 1px rgba(255,255,255,0.08)',
                  }}>
                  <img 
                    src={middleEclipse} 
                    alt="Women holding hands and smiling"
                    className="w-full h-full object-cover object-center" 
                    width="320" 
                    height="320" 
                    loading="lazy" 
                  />
                </div>

                {/* Year badge — overlapping */}
                <div className="absolute -bottom-4 -right-4 bg-harafBlue rounded-2xl px-4 py-3 z-20"
                  style={{ boxShadow: '0 8px 24px rgba(26,120,194,0.5)' }}>
                  <p className="font-playfair font-bold text-white text-xl leading-none">10+</p>
                  <p className="font-dm-sans text-blue-200 text-[10px] uppercase tracking-wide mt-0.5">Years</p>
                </div>
              </div>

              {/* Top-right satellite circle */}
              <div className="absolute z-20 rounded-full overflow-hidden border-4 border-[#0A1929]"
                style={{
                  width: 'clamp(110px, 15vw, 165px)',
                  height: 'clamp(110px, 15vw, 165px)',
                  top: '6%',
                  right: '8%',
                  boxShadow: '0 12px 32px rgba(0,0,0,0.4)',
                  animation: 'circleFloat 5s ease-in-out 1s infinite',
                }}>
                <img 
                  src={topRightEclipse} 
                  alt="Smiling woman in pink hijab"
                  className="w-full h-full object-cover" 
                  width="165" 
                  height="165" 
                  loading="lazy" 
                />
              </div>

              {/* Bottom-left satellite circle */}
              <div className="absolute z-20 rounded-full overflow-hidden border-4 border-[#0A1929]"
                style={{
                  width: 'clamp(85px, 11vw, 130px)',
                  height: 'clamp(85px, 11vw, 130px)',
                  bottom: '8%',
                  left: '4%',
                  boxShadow: '0 8px 24px rgba(0,0,0,0.4)',
                  animation: 'circleFloat 4.5s ease-in-out 0.5s infinite',
                }}>
                <img 
                  src={bottomLeftEclipse} 
                  alt="Woman holding tray"
                  className="w-full h-full object-cover" 
                  width="130" 
                  height="130" 
                  loading="lazy" 
                />
              </div>

              {/* Communities stat chip */}
              <div className="absolute bottom-[20%] right-[4%] sm:right-[8%] z-20 bg-[#0F2236] border border-white/10 rounded-2xl px-4 py-3"
                style={{ boxShadow: '0 8px 24px rgba(0,0,0,0.4)', animation: 'wwaFadeUp 0.6s ease 0.6s both' }}>
                <p className="font-playfair font-bold text-white text-lg leading-none">87</p>
                <p className="font-dm-sans text-[#8CB4D6] text-[10px] uppercase tracking-wide mt-0.5">Communities</p>
              </div>

            </div>

            {/* ── RIGHT: Mission text ──────────────────────────────────── */}
            <div className="wwa-right lg:pl-8">

              {/* Heading */}
              <h2 className="font-playfair font-bold text-white leading-[1.1] mb-6"
                style={{ fontSize: 'clamp(2rem, 3.5vw, 3.2rem)' }}>
                A Foundation Built on{' '}
                <em className="not-italic" style={{ color: '#8CB4D6' }}>Compassion</em>
                <br />and <em className="italic text-harafYellow">Action</em>.
              </h2>

              {/* Accent line */}
              <div className="flex items-center gap-3 mb-8">
                <div className="h-px w-10 bg-harafYellow" />
                <span className="font-dm-sans font-bold text-harafYellow text-[11px] uppercase tracking-[0.2em]">Our Mission</span>
              </div>

              {/* Mission body */}
              <p className="font-dm-sans text-[#B0C4D4] leading-[1.85] mb-6"
                style={{ fontSize: 'clamp(0.9rem, 1.2vw, 1.05rem)' }}>
                We are a non-profit organization committed to empowering girls, women, children, 
                and youths, by providing access to livelihood opportunities and SHR/Health services,
                ensuring quality education through integrated and inclusive programs.
              </p>

              {/* Pull quote */}
              <blockquote className="relative border-l-4 border-harafBlue pl-5 mb-8">
                <p className="font-cormorant italic text-white/80 leading-relaxed"
                  style={{ fontSize: 'clamp(1.05rem, 1.4vw, 1.25rem)' }}>
                  "Every community we serve already knows what it needs. We simply walk alongside them."
                </p>
                <cite className="block font-dm-sans text-[#8CB4D6] text-[11px] uppercase tracking-wider mt-2 not-italic">
                  — MADAM GALAXY THAMI, Founder
                </cite>
              </blockquote>

              {/* Programme pills - NOW CLICKABLE */}
              <div className="flex flex-wrap gap-2 mb-10">
                {PILLARS.map(({ icon, label, key }, i) => (
                  <button
                    key={label}
                    onClick={() => handlePillarClick({ icon, label, key })}
                    className="wwa-pill flex items-center gap-1.5 bg-white/[0.06] border border-white/10 text-white/70 font-dm-sans text-[11px] px-3 py-1.5 rounded-full hover:bg-harafBlue/20 hover:border-harafBlue/40 hover:text-white transition-all cursor-pointer focus:outline-none focus:ring-2 focus:ring-harafBlue/50"
                    style={{ '--d': `${0.4 + i * 0.07}s` } }
                  >
                    <span>{icon}</span> {label}
                  </button>
                ))}
              </div>

              {/* CTA */}
              <Link
                to="/about_us"
                className="group inline-flex items-center gap-3 text-white font-dm-sans font-bold text-[11px] uppercase tracking-[0.2em] transition-colors hover:text-harafBlue"
              >
                <span className="w-8 h-px bg-harafYellow transition-all group-hover:w-14 group-hover:bg-harafBlue" />
                Learn Our Full Story
                <svg fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"
                  className="w-4 h-4 transition-transform group-hover:translate-x-1">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14m-6-6 6 6-6 6" />
                </svg>
              </Link>

            </div>
          </div>

        </div>
      </div>

      {/* ── MODAL ──────────────────────────────────────────────────────── */}
      {isModalOpen && selectedPillar && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 pt-28"
          style={{ animation: 'modalFadeIn 0.2s ease' }}
          onClick={handleBackdropClick}
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/90 backdrop-blur-md" />
          
          {/* Modal Container */}
          <div 
            className="relative z-10 w-full max-w-4xl max-h-[85vh] bg-gradient-to-br from-[#0A1929] to-[#0F2236] rounded-2xl overflow-hidden shadow-2xl border border-white/20"
            style={{ animation: 'modalSlideUp 0.3s ease' }}
          >
            {/* Header with Image Banner */}
            <div className="relative">
              {/* Banner Image */}
              <div className="relative h-48 md:h-64 overflow-hidden">
                {selectedPillar.image ? (
                  <img 
                    src={selectedPillar.image} 
                    alt={selectedPillar.title}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full bg-gradient-to-r from-harafBlue/30 to-purple-500/30" />
                )}
                {/* Dark overlay for text readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A1929] via-black/50 to-transparent" />
                
                {/* Close button - positioned absolute for clean look */}
                <button
                  onClick={closeModal}
                  className="absolute top-4 right-4 z-20 text-white/80 hover:text-white transition-colors p-2 hover:bg-white/10 rounded-full backdrop-blur-sm bg-black/30"
                  aria-label="Close"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
                
                {/* Title overlay - NOW VISIBLE */}
                <div className="absolute bottom-0 left-0 right-0 p-6 pb-4">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-8 h-0.5 bg-harafYellow" />
                    <span className="text-harafYellow text-xs font-dm-sans font-bold uppercase tracking-wider">
                      Program Overview
                    </span>
                  </div>
                  <h3 className="font-playfair font-bold text-white text-2xl md:text-3xl lg:text-4xl leading-tight">
                    {selectedPillar.title}
                  </h3>
                </div>
              </div>
            </div>
            
            {/* Content - Scrollable */}
            <div className="modal-scroll overflow-y-auto p-6 md:p-8" style={{ maxHeight: 'calc(90vh - 320px)' }}>
              <div className="prose prose-invert prose-sm max-w-none">
                {selectedPillar.content.split('\n\n').map((paragraph, idx) => {
                  // Check if paragraph starts with a bold heading pattern
                  const boldMatch = paragraph.match(/^([A-Z][A-Za-z\s/]+?):\s*(.*)$/s);
                  if (boldMatch) {
                    return (
                      <div key={idx} className="mb-6">
                        <h4 className="font-playfair font-bold text-harafBlue text-lg mb-2 border-l-3 border-harafBlue pl-3">
                          {boldMatch[1]}
                        </h4>
                        <p className="font-dm-sans text-[#B0C4D4] leading-relaxed text-base">
                          {boldMatch[2]}
                        </p>
                      </div>
                    );
                  }
                  // Check for bullet points or lists
                  if (paragraph.includes('•')) {
                    return (
                      <div key={idx} className="mb-4">
                        <p className="font-dm-sans text-[#B0C4D4] leading-relaxed text-base">
                          {paragraph.split('•').map((item, itemIdx) => {
                            if (itemIdx === 0) return item;
                            return (
                              <span key={itemIdx} className="block ml-4 mb-1">
                                <span className="text-harafBlue mr-2">•</span>
                                {item.trim()}
                              </span>
                            );
                          })}
                        </p>
                      </div>
                    );
                  }
                  return (
                    <p key={idx} className="font-dm-sans text-[#B0C4D4] leading-relaxed mb-5 text-base">
                      {paragraph}
                    </p>
                  );
                })}
              </div>
            </div>
            
            {/* Footer */}
            <div className="bg-[#0A1929]/95 backdrop-blur-sm border-t border-white/10 px-6 py-4 flex justify-end gap-3">
              <button
                onClick={closeModal}
                className="px-6 py-2.5 bg-harafBlue hover:bg-harafBlue/80 text-white font-dm-sans font-bold text-sm rounded-lg transition-all transform hover:scale-105"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default WhoWeAre;