import React, { useState } from 'react';

// ==================== SVG Icon Components ====================
const IconCalendar = ({ className = "w-3.5 h-3.5" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <rect x="3" y="4" width="18" height="18" rx="2" />
    <path d="M16 2v4M8 2v4M3 10h18" />
  </svg>
);

const IconFile = ({ className = "w-3.5 h-3.5" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
    <polyline points="14 2 14 8 20 8" />
  </svg>
);

const IconDownload = ({ className = "w-4 h-4" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
    <polyline points="7 10 12 15 17 10" />
    <line x1="12" y1="15" x2="12" y2="3" />
  </svg>
);

const IconCheck = ({ className = "w-3.5 h-3.5" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

// Tag Icons
const IconAnniversary = ({ className = "w-3 h-3" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <circle cx="12" cy="12" r="10" />
    <path d="M12 8v4l3 3" />
  </svg>
);

const IconAnnual = ({ className = "w-3 h-3" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M3 3h18v18H3z" />
    <path d="M3 9h18M9 21V9" />
  </svg>
);

const IconCommunity = ({ className = "w-3 h-3" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
  </svg>
);

const IconStrategy = ({ className = "w-3 h-3" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
  </svg>
);

const IconSustainability = ({ className = "w-3 h-3" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
  </svg>
);

const IconHumanRights = ({ className = "w-3 h-3" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <circle cx="12" cy="8" r="4" />
    <path d="M12 12v8M8 16h8" />
  </svg>
);

const getTagIcon = (tagKey) => {
  const icons = {
    'Anniversary': IconAnniversary,
    'Annual Report': IconAnnual,
    'Community': IconCommunity,
    'Strategy': IconStrategy,
    'Sustainability': IconSustainability,
    'Human Rights': IconHumanRights,
  };
  const Icon = icons[tagKey] || IconAnniversary;
  return <Icon className="w-3 h-3" />;
};

// ==================== Report Data ====================
const reportData = [
  {
    id: 1,
    title: "Celebrating 10 Years of Purpose and Progress",
    desc: "For a decade, HARAF has remained committed to advancing sustainable development, empowering communities, and promoting human dignity. Explore our 10-year journey, key achievements, success stories, and vision for the future.",
    tag: "Anniversary",
    year: "2026",
    docType: "Commemorative Report",
    filename: "Heraf-monthly_bulleting_february_2026.pdf",
    href: "/assets/monthly_bulleting_february_2026.pdf", // Replace with actual PDF URL
    theme: {
      barFrom: "#1a6ebd", barTo: "#3a9de8",
      tagColor: "#3a9de8", tagBg: "rgba(58,157,232,0.1)", tagBorder: "rgba(58,157,232,0.22)",
      btnColor: "#3a9de8", btnBorder: "rgba(58,157,232,0.4)", btnHoverBorder: "rgba(58,157,232,0.8)",
      dotColors: ["#3a9de8", "#f0d000", "#2caf5e"]
    }
  },
  {
    id: 2,
    title: "HARAF Monthly Bulleting - March 2026",
    desc: "A comprehensive overview of HARAF's programmes and community impact over the past year. This report outlines milestones reached, lessons learned, and the road ahead for our stakeholders and partners.",
    tag: "Annual Report",
    year: "2026",
    docType: "Institutional Report",
    filename: "Heraf-monthly_bulleting_march_2026.pdf",
    href: "/assets/monthly_bulleting_march_2026.pdf",
    theme: {
      barFrom: "#2caf5e", barTo: "#5dd68a",
      tagColor: "#4dd17c", tagBg: "rgba(44,175,94,0.1)", tagBorder: "rgba(44,175,94,0.25)",
      btnColor: "#4dd17c", btnBorder: "rgba(44,175,94,0.4)", btnHoverBorder: "rgba(44,175,94,0.8)",
      dotColors: ["#2caf5e", "#1ab3b3", "#f0d000"]
    }
  },
  {
    id: 3,
    title: "Community Empowerment & Livelihoods Assessment",
    desc: "This assessment documents the measurable outcomes of HARAF's livelihoods and empowerment programmes across target communities. It provides evidence-based insights for programme refinement and donor engagement.",
    tag: "Community",
    year: "2024",
    docType: "Field Assessment",
    filename: "Heraf-monthly_bulleting_april_2026.pdf",
    href: "/assets/monthly_bulleting_april_2026.pdf",
    theme: {
      barFrom: "#e8832a", barTo: "#f5b560",
      tagColor: "#f5a040", tagBg: "rgba(232,131,42,0.1)", tagBorder: "rgba(232,131,42,0.25)",
      btnColor: "#f5a040", btnBorder: "rgba(232,131,42,0.4)", btnHoverBorder: "rgba(232,131,42,0.8)",
      dotColors: ["#e8832a", "#d63a3a", "#f0d000"]
    }
  },
  {
    id: 4,
    title: "Haraf Profile",
    desc: "HARAF is a non-governmental organization dedicated to promoting sustainable development, empowering communities, and advancing human dignity through innovative and impactful programs that create lasting change.",
    tag: "Strategy",
    year: "2026",
    docType: "Strategic Document",
    filename: "haraf_profile.pdf",
    href: "/assets/haraf_profile.pdf",
    theme: {
      barFrom: "#e0558a", barTo: "#f088b8",
      tagColor: "#f088b8", tagBg: "rgba(224,85,138,0.1)", tagBorder: "rgba(224,85,138,0.25)",
      btnColor: "#f088b8", btnBorder: "rgba(224,85,138,0.4)", btnHoverBorder: "rgba(224,85,138,0.8)",
      dotColors: ["#e0558a", "#8e4fcf", "#3a9de8"]
    }
  },
  {
    id: 5,
    title: "Capacity Statement",
    desc: "With a decade of experience, HARAF possesses the expertise, partnerships, and operational capacity to design and implement high-impact development programs that strengthen communities, promote resilience, and drive sustainable social change.",
    tag: "Sustainability",
    year: "2026",
    docType: "Thematic Report",
    filename: "capacity_statement.pdf",
    href: "/assets/capacity_statement.pdf",
    theme: {
      barFrom: "#8e4fcf", barTo: "#b980ef",
      tagColor: "#b980ef", tagBg: "rgba(142,79,207,0.1)", tagBorder: "rgba(142,79,207,0.25)",
      btnColor: "#b980ef", btnBorder: "rgba(142,79,207,0.4)", btnHoverBorder: "rgba(142,79,207,0.8)",
      dotColors: ["#8e4fcf", "#2caf5e", "#1ab3b3"]
    }
  },
//   {
//     id: 6,
//     title: "Gender Equality & Human Dignity Baseline Study",
//     desc: "This baseline study presents foundational data on gender equity, protection, and human rights across HARAF's areas of operation. It informs programme design and serves as a reference point for measuring long-term transformative change.",
//     tag: "Human Rights",
//     year: "2023",
//     docType: "Baseline Study",
//     filename: "gender-human-dignity-baseline.pdf",
//     href: "#",
//     theme: {
//       barFrom: "#1ab3b3", barTo: "#50d8d8",
//       tagColor: "#50d8d8", tagBg: "rgba(26,179,179,0.1)", tagBorder: "rgba(26,179,179,0.25)",
//       btnColor: "#50d8d8", btnBorder: "rgba(26,179,179,0.4)", btnHoverBorder: "rgba(26,179,179,0.8)",
//       dotColors: ["#1ab3b3", "#e0558a", "#f0d000"]
//     }
//   }
];

// ==================== Report Card Component ====================
const ReportCard = ({ report }) => {
  const [feedback, setFeedback] = useState(null);
  const { title, desc, tag, year, docType, filename, href, theme } = report;

  const handleDownload = (e) => {
    e.preventDefault();
    if (!href || href === '#') {
      setFeedback('Link not yet configured');
      setTimeout(() => setFeedback(null), 2000);
      return;
    }
    // Trigger actual download
    const a = document.createElement('a');
    a.href = href;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  // Dynamic styles based on theme
  const barGradient = `linear-gradient(90deg, ${theme.barFrom}, ${theme.barTo})`;
  const tagStyle = {
    color: theme.tagColor,
    backgroundColor: theme.tagBg,
    borderColor: theme.tagBorder,
  };
  const btnStyle = {
    color: theme.btnColor,
    borderColor: theme.btnBorder,
  };
  const btnHoverStyle = {
    '--btn-hover-border': theme.btnHoverBorder,
  };

  return (
    <article className="group relative bg-[#0d1a2e] border border-[rgba(58,157,232,0.18)] rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:border-[rgba(58,157,232,0.4)] hover:shadow-2xl hover:shadow-black/40">
      {/* Top colored bar */}
      <div className="h-1 w-full" style={{ background: barGradient }} />
      
      <div className="p-5 md:p-6">
        {/* Leaf dots */}
        <div className="flex gap-1.5 mb-4">
          {theme.dotColors.map((color, idx) => (
            <span key={idx} className="w-1.5 h-1.5 rounded-full opacity-70" style={{ backgroundColor: color }} />
          ))}
        </div>
        
        {/* Tag */}
        <div className="inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wider px-3 py-1.5 rounded-full border mb-4" style={tagStyle}>
          {getTagIcon(tag)}
          <span>{tag}</span>
        </div>
        
        {/* Title */}
        <h3 className="font-serif text-xl font-bold text-white mb-2 leading-tight">
          {title}
        </h3>
        
        {/* Description */}
        <p className="text-sm text-[#7a90a8] leading-relaxed mb-4">
          {desc}
        </p>
        
        {/* Meta info */}
        <div className="flex items-center gap-4 text-xs text-[#7a90a8] mb-4">
          <span className="inline-flex items-center gap-1.5">
            <IconCalendar />
            {year}
          </span>
          <span className="inline-flex items-center gap-1.5">
            <IconFile />
            {docType}
          </span>
        </div>
        
        <div className="border-t border-white/10 my-4" />
        
        {/* Download Button */}
        <button
          onClick={handleDownload}
          className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl border text-sm font-medium transition-all duration-200 hover:bg-white/5 active:scale-95"
          style={btnStyle}
          onMouseEnter={(e) => e.currentTarget.style.borderColor = theme.btnHoverBorder}
          onMouseLeave={(e) => e.currentTarget.style.borderColor = theme.btnBorder}
        >
          {feedback ? (
            <>
              <IconCheck />
              <span>{feedback}</span>
            </>
          ) : (
            <>
              <IconDownload />
              <span>Download Document</span>
            </>
          )}
        </button>
      </div>
    </article>
  );
};

// ==================== Main Reports Page Component ====================
const Reports = () => {
  return (
    <div className="min-h-screen bg-[#060d1a] text-[#e8edf5] font-sans">
     

      {/* Hero Section */}
      <section className="relative text-center py-1 md:py-20 px-4 overflow-hidden">
        {/* Radial gradient overlay */}
        <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_70%_50%_at_50%_0%,rgba(26,110,189,0.22),transparent_70%)]" />
        
        <div className="relative z-10 max-w-3xl mx-auto">
          <p className="text-[11px] font-medium tracking-[0.25em] uppercase text-[#3a9de8] mb-3">
            Resource Library
          </p>
          <h1 className="font-serif text-4xl md:text-6xl font-bold text-white mb-3">
            HARAF <span className="text-[#3a9de8]">Reports</span>
          </h1>
          <p className="text-sm md:text-base text-[#7a90a8] max-w-xl mx-auto">
            Explore our publications, impact assessments, and strategic documents.
          </p>
          <div className="w-14 h-0.5 bg-gradient-to-r from-[#1a6ebd] to-[#f0d000] rounded-full mx-auto mt-6" />
        </div>
      </section>

      {/* Reports Grid */}
      <main className="max-w-6xl mx-auto px-4 sm:px-6 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reportData.map((report) => (
            <ReportCard key={report.id} report={report} />
          ))}
        </div>
      </main>
    </div>
  );
};

export default Reports;