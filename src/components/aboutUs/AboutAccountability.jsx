import React from 'react';
import button from '../../assets/aboutAccountabilityButton.svg';

const accountabilityData = [
  {
    title: "NGO REGISTERED",
    description: "Registered with the Corporate Affairs Commission",
    details: "CAC No. CAC/IT/85536 · Registered 2016"
  },
  {
    title: "ANNUAL AUDIT",
    description: "Independently audited by Deloitte Nigeria",
    details: "Every year since 2017 · All reports public"
  },
  {
    title: "BOARD OF TRUSTEES",
    description: "9-member independent board",
    details: "Meets quarterly · Minutes published annually"
  },
  {
    title: "FUNDING DISCLOSURE",
    description: "All donor funding publicly disclosed",
    details: "Programme expenditure reported quarterly"
  },
  {
    title: "INTERNATIONAL COMPLIANCE",
    description: "Compliant with INGO accountability frameworks",
    details: "Member of the NGO Coordination Committee"
  }
];

const AboutAccountability = () => {
  return (
    <section className="w-full py-24 bg-navyDark text-white">
      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-16 grid grid-cols-1 lg:grid-cols-2 gap-20">
        
        {/* Left Column: Text & CTA */}
        <div className="flex flex-col lg:text-left lg:place-self-start text-center place-self-center">
          <p className="text-harafYellow text-sm font-dm-sans font-bold tracking-[0.2em] uppercase mb-4">
            ACCOUNTABILITY & GOVERNANCE
          </p>
          <h2 className="text-white text-4xl md:text-[56px] font-playfair font-bold leading-tight mb-10">
            We Are an Open<br />
            Book. Always.
          </h2>
          <div className="space-y-8 max-w-lg mb-16 font-light">
            <p className="text-[#EBF4FC] font-dm-sans leading-relaxed opacity-70">
              HARAF is a registered not-for-profit organisation in Nigeria. We 
              publish annual reports, financial audits, and impact assessments 
              every year — no exceptions. Our board of trustees includes 
              independent voices from law, finance, civil society, and the 
              communities we serve.
            </p>
            <p className="text-[#EBF4FC] font-dm-sans leading-relaxed opacity-70">
              We believe transparency is not a gesture. It is the foundation of 
              every relationship we build — with donors, partners, 
              governments, and most importantly, with communities.
            </p>
          </div>

          <div className="space-y-6 flex lg:block flex-col items-center ">
            <button className="bg-harafYellow  text-navyDark font-dm-sans font-medium text-sm tracking-widest uppercase px-6 py-4 flex items-center space-x-3 hover:opacity-90 transition-opacity">
              <span>DOWNLOAD OUR 2025 ANNUAL REPORT</span>
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path d="M12 5v14M5 12l7 7 7-7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            <a href="#" className="inline-flex items-center space-x-2 text-sm font-dm-sans font-medium tracking-widest  uppercase hover:text-white transition-colors group relative after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-full after:bg-white">
              <span>VIEW ALL PAST REPORTS</span>
              <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path d="M5 12h14M12 5l7 7-7 7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </div>
        </div>

        {/* Right Column: Data Points */}
        <div className="flex flex-col space-y-12">
          {accountabilityData.map((item, idx) => (
            <div key={idx} className="flex flex-col space-y-6 items-center">
              <div className='flex flex-col justify-center items-center gap-2'>
                <img 
                  src={button} 
                  alt="accountabilityButton" 
                  width="32"
                  height="32"
                  loading="lazy"
                />
                <h4 className="text-harafYellow text-xs font-dm-sans font-bold tracking-[0.2em] uppercase mb-2">
                  {item.title}
                </h4>
              </div>
              <div className="flex flex-col text-sm font-dm-sans opacity-50 justify-center items-center border-b border-[#1A78C2] border-opacity-20 pb-10 w-full">
                <p className="mb-1">
                  {item.description}
                </p>
                <p className=" text-sm font-dm-sans">
                  {item.details}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutAccountability;
