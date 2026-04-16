import React, { useState, useEffect } from "react";

// ──────────────────────────────────────────────────────────────────
// JOBS DATA FIELD (centralized, easy to maintain)
// ──────────────────────────────────────────────────────────────────
const JOBS = [
  {
    id: 1,
    title: "Community Engagement Officer",
    type: "Full-time",
    location: "Bauchi (field-based)",
    experience: "2+ years experience",
    description: "Lead participatory workshops, coordinate with village leaders, and monitor water/sanitation projects. You'll empower local ownership and ensure project sustainability.",
    deadline: "May 30, 2026",
    department: "Programs",
  },
  {
    id: 2,
    title: "Water & Sanitation Engineer",
    type: "Full-time",
    location: "Kaduna / Adamawa",
    experience: "Civil Eng. / WASH background",
    description: "Design and supervise borehole installations, conduct feasibility studies, train local mechanics, and ensure long-term functionality of water points in rural areas.",
    deadline: "Rolling deadline",
    department: "WASH",
  },
  {
    id: 3,
    title: "Partnership & Grants Coordinator",
    type: "Hybrid",
    location: "Abuja (hybrid)",
    experience: "Proposal writing + donor relations",
    description: "Cultivate relationships with foundations, write grant proposals, and manage reporting. Help grow HARAF's funding base to scale impact across northern Nigeria.",
    deadline: "June 15, 2026",
    department: "Partnerships",
  },
  {
    id: 4,
    title: "Monitoring, Evaluation & Learning (MEL) Officer",
    type: "Full-time",
    location: "Yola / field travel",
    experience: "Data analysis & impact reporting",
    description: "Design MEL frameworks, conduct surveys, analyze program outcomes, and produce evidence-based recommendations to improve project effectiveness.",
    deadline: "May 22, 2026",
    department: "MEL",
  },
  {
    id: 5,
    title: "Finance & Admin Officer",
    type: "Full-time",
    location: "Abuja",
    experience: "3+ years NGO finance",
    description: "Manage financial records, donor reporting, payroll, and compliance. Ensure transparent use of funds and support audit processes.",
    deadline: "June 5, 2026",
    department: "Finance",
  },
  {
    id: 6,
    title: "Communications & Digital Media Associate",
    type: "Remote/Hybrid",
    location: "Remote (Nigeria)",
    experience: "Content creation + social media",
    description: "Tell HARAF's story through compelling content, manage social media channels, create impact videos, and engage donors and supporters.",
    deadline: "May 28, 2026",
    department: "Communications",
  },
];

// Stats data for right panel
const STATS = [
  { value: "87", label: "Communities with active water points" },
  { value: "5,600+", label: "Children in school thanks to donors & staff" },
  { value: "100%", label: "Local team members leading field programs" },
  { value: "120+", label: "Dedicated staff across Nigeria" },
];

// Values data
const VALUES = [
  { icon: "🤝", title: "Collaboration", desc: "We work alongside communities, never above them." },
  { icon: "📢", title: "Transparency", desc: "Every naira tracked, every decision shared openly." },
  { icon: "🌱", title: "Growth", desc: "Investing in our people through mentorship & training." },
];

// ──────────────────────────────────────────────────────────────────
// APPLICATION MODAL (inspired by donation modal)
// ──────────────────────────────────────────────────────────────────
function ApplicationModal({ job, onClose }) {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = ""; };
  }, []);

  useEffect(() => {
    const handler = (e) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onClose]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.email) {
      // In a real app, send to API here
      console.log("Application submitted:", { job: job.title, ...formData });
      setSubmitted(true);
      setTimeout(() => onClose(), 2000);
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center px-4 py-8 overflow-y-auto"
      style={{
        backgroundColor: "rgba(8, 25, 45, 0.6)",
        backdropFilter: "blur(10px)",
        WebkitBackdropFilter: "blur(10px)",
      }}
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-[440px] bg-white rounded-2xl shadow-[0_32px_80px_rgba(0,0,0,0.25)] overflow-hidden my-auto"
        style={{ animation: "modalPop 0.3s cubic-bezier(0.34,1.46,0.64,1) both" }}
        onClick={e => e.stopPropagation()}
      >
        <div className="h-1.5 bg-gradient-to-r from-harafBlue via-[#4aa8f0] to-harafBlue" />

        <button
          onClick={onClose}
          aria-label="Close"
          className="absolute top-4 right-4 w-8 h-8 rounded-full bg-[#F4F8FC] hover:bg-[#D8E8F0] flex items-center justify-center text-[#9CA3AF] hover:text-primary transition-all"
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="px-7 pt-8 pb-6 text-center">
          <div className="w-16 h-16 rounded-full bg-[#EEF5FC] flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8 text-harafBlue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
          </div>

          <p className="text-harafBlue text-[11px] font-bold tracking-[0.22em] uppercase mb-1">
            Apply Now
          </p>
          <h2 className="font-playfair font-bold text-primary text-[22px] leading-snug mb-2">
            {job.title}
          </h2>
          <p className="text-sm text-gray-500 mb-4">{job.location} • {job.type}</p>

          {submitted ? (
            <div className="bg-green-50 border border-green-200 rounded-xl p-4">
              <svg className="w-8 h-8 text-green-500 mx-auto mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
              </svg>
              <p className="text-green-700 font-semibold">Application submitted!</p>
              <p className="text-xs text-gray-500 mt-1">We'll be in touch soon.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="text-left mt-2">
              <div className="mb-4">
                <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1">Full name *</label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={e => setFormData({ ...formData, name: e.target.value })}
                  className="w-full border border-[#D8E8F0] rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-harafBlue/30"
                  placeholder="Chiamaka Okafor"
                />
              </div>
              <div className="mb-4">
                <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1">Email address *</label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={e => setFormData({ ...formData, email: e.target.value })}
                  className="w-full border border-[#D8E8F0] rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-harafBlue/30"
                  placeholder="hello@example.com"
                />
              </div>
              <div className="mb-5">
                <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1">Why are you a good fit? (optional)</label>
                <textarea
                  rows="3"
                  value={formData.message}
                  onChange={e => setFormData({ ...formData, message: e.target.value })}
                  className="w-full border border-[#D8E8F0] rounded-xl px-4 py-3 text-sm"
                  placeholder="Share your experience and passion for our mission..."
                />
              </div>
              <button
                type="submit"
                className="w-full bg-harafBlue hover:bg-[#1462a8] active:scale-[0.99] transition-all text-white font-dm-sans font-bold text-xs tracking-[0.2em] uppercase rounded-xl py-3.5 shadow-[0_4px_18px_rgba(26,120,194,0.3)]"
              >
                Submit Application
              </button>
            </form>
          )}
        </div>
      </div>

      <style>{`
        @keyframes modalPop {
          from { opacity: 0; transform: scale(0.86) translateY(20px); }
          to   { opacity: 1; transform: scale(1) translateY(0); }
        }
      `}</style>
    </div>
  );
}

// ──────────────────────────────────────────────────────────────────
// GENERAL INTEREST MODAL (send CV)
// ──────────────────────────────────────────────────────────────────
function GeneralInterestModal({ onClose }) {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = ""; };
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.email) {
      console.log("General interest submitted:", formData);
      setSubmitted(true);
      setTimeout(() => onClose(), 2000);
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center px-4 py-8 overflow-y-auto"
      style={{
        backgroundColor: "rgba(8, 25, 45, 0.6)",
        backdropFilter: "blur(10px)",
      }}
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-[440px] bg-white rounded-2xl shadow-2xl overflow-hidden"
        style={{ animation: "modalPop 0.3s cubic-bezier(0.34,1.46,0.64,1) both" }}
        onClick={e => e.stopPropagation()}
      >
        <div className="h-1.5 bg-gradient-to-r from-harafBlue via-harafGold to-harafBlue" />

        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-8 h-8 rounded-full bg-[#F4F8FC] hover:bg-[#D8E8F0] flex items-center justify-center"
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="px-7 pt-8 pb-7 text-center">
          <div className="w-16 h-16 rounded-full bg-[#FEF3E2] flex items-center justify-center mx-auto mb-4">
            <span className="text-3xl">📄</span>
          </div>
          <h3 className="font-playfair font-bold text-2xl text-gray-800">Share your profile</h3>
          <p className="text-sm text-gray-500 mt-1 mb-5">We'll keep your CV for future opportunities.</p>

          {submitted ? (
            <div className="bg-green-50 rounded-xl p-4">
              <p className="text-green-700 font-semibold">Thanks for reaching out!</p>
              <p className="text-xs text-gray-500 mt-1">We'll be in touch when a role matches.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                required
                placeholder="Full name"
                value={formData.name}
                onChange={e => setFormData({ ...formData, name: e.target.value })}
                className="w-full border border-[#D8E8F0] rounded-xl px-4 py-3 text-sm mb-3 focus:outline-none focus:ring-2 focus:ring-harafBlue/30"
              />
              <input
                type="email"
                required
                placeholder="Email address"
                value={formData.email}
                onChange={e => setFormData({ ...formData, email: e.target.value })}
                className="w-full border border-[#D8E8F0] rounded-xl px-4 py-3 text-sm mb-3 focus:outline-none focus:ring-2 focus:ring-harafBlue/30"
              />
              <textarea
                placeholder="Tell us about your expertise or attach a note (optional)"
                rows="2"
                value={formData.message}
                onChange={e => setFormData({ ...formData, message: e.target.value })}
                className="w-full border border-[#D8E8F0] rounded-xl px-4 py-3 text-sm mb-4 focus:outline-none focus:ring-2 focus:ring-harafBlue/30"
              />
              <button
                type="submit"
                className="w-full bg-harafBlue hover:bg-[#1462a8] transition-all text-white font-bold text-sm rounded-xl py-3.5 shadow-md"
              >
                Send Expression of Interest
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}

// ──────────────────────────────────────────────────────────────────
// JOB CARD COMPONENT
// ──────────────────────────────────────────────────────────────────
function JobCard({ job, onApply }) {
  return (
    <div className="job-card rounded-2xl p-6 bg-white shadow-sm border border-[#D8E8F0] transition-all hover:border-harafBlue hover:shadow-[0_12px_28px_-8px_rgba(26,120,194,0.12)] hover:-translate-y-1">
      <div className="flex justify-between items-start flex-wrap gap-2 mb-3">
        <h3 className="text-xl font-bold font-playfair text-gray-800">{job.title}</h3>
        <span className="bg-[#EEF5FC] text-harafBlue text-xs font-semibold px-3 py-1 rounded-full">{job.type}</span>
      </div>
      <div className="flex flex-wrap gap-3 text-xs text-gray-500 mb-4">
        <span className="flex items-center gap-1">📍 {job.location}</span>
        <span className="flex items-center gap-1">⏳ {job.experience}</span>
      </div>
      <p className="text-gray-600 text-sm leading-relaxed mb-5">{job.description}</p>
      <div className="flex justify-between items-center mt-auto">
        <span className="text-xs font-medium text-harafBlue bg-[#EEF5FC] px-2 py-1 rounded-full">
          {job.deadline === "Rolling deadline" ? "📅 Rolling deadline" : `🗓️ Deadline: ${job.deadline}`}
        </span>
        <button
          onClick={() => onApply(job)}
          className="text-harafBlue font-bold text-sm border border-harafBlue rounded-full px-5 py-2 hover:bg-harafBlue hover:text-white transition-all"
        >
          Apply →
        </button>
      </div>
    </div>
  );
}

// ──────────────────────────────────────────────────────────────────
// MAIN CAREER PAGE COMPONENT
// ──────────────────────────────────────────────────────────────────
export default function CareerPage() {
  const [selectedJob, setSelectedJob] = useState(null);
  const [showGeneralModal, setShowGeneralModal] = useState(false);
  const [filterDepartment, setFilterDepartment] = useState("all");

  // Get unique departments for filter
  const departments = ["all", ...new Set(JOBS.map(job => job.department))];

  const filteredJobs = filterDepartment === "all"
    ? JOBS
    : JOBS.filter(job => job.department === filterDepartment);

  return (
    <>
      <div className="min-h-screen bg-white flex flex-col lg:flex-row">
        {/* ── LEFT PANEL (Content) ── */}
        <div className="w-full lg:w-1/2 px-6 sm:px-10 lg:px-16 py-12 lg:py-20 flex flex-col gap-7">
          <div>
            <p className="text-xs sm:text-sm text-harafBlue font-semibold mb-2 tracking-[0.22em] uppercase">
              JOIN OUR MOVEMENT
            </p>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-playfair text-gray-900 leading-tight mb-4">
              Build a Career <br />That Lifts Communities
            </h1>
            <p className="text-base text-gray-600 leading-relaxed max-w-xl">
              At HARAF Foundation, we believe in rural dignity, clean water, and quality education.
              Work alongside passionate changemakers and help shape a more equitable Nigeria.
            </p>
          </div>

          {/* Quick stats mini card */}
          <div className="bg-[#F8FBFE] rounded-2xl p-5 border border-[#EEF5FC]">
            <div className="flex flex-wrap gap-5 justify-between">
              <div>
                <p className="text-harafBlue text-3xl font-playfair font-bold">100%</p>
                <p className="text-xs text-gray-500 uppercase tracking-wide">Donations to programs</p>
              </div>
              <div>
                <p className="text-harafBlue text-3xl font-playfair font-bold">14K+</p>
                <p className="text-xs text-gray-500 uppercase tracking-wide">Families reached</p>
              </div>
              <div>
                <p className="text-harafBlue text-3xl font-playfair font-bold">87</p>
                <p className="text-xs text-gray-500 uppercase tracking-wide">Communities served</p>
              </div>
            </div>
          </div>

          {/* Why join us */}
          <div>
            <h2 className="text-xl font-bold text-gray-800 mb-3 flex items-center gap-2">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15h-2v-2h2v2zm0-4h-2V7h2v6z" fill="#1a78c2" />
              </svg>
              Why join HARAF?
            </h2>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-5 gap-y-3 text-sm text-gray-700">
              <li className="flex items-start gap-2"><span className="text-harafBlue text-lg">✓</span> Purpose-driven culture & impact</li>
              <li className="flex items-start gap-2"><span className="text-harafBlue text-lg">✓</span> Learning & development stipends</li>
              <li className="flex items-start gap-2"><span className="text-harafBlue text-lg">✓</span> Hybrid-friendly (field & remote)</li>
              <li className="flex items-start gap-2"><span className="text-harafBlue text-lg">✓</span> 4 weeks paid vacation + wellness days</li>
              <li className="flex items-start gap-2"><span className="text-harafBlue text-lg">✓</span> Comprehensive health coverage</li>
              <li className="flex items-start gap-2"><span className="text-harafBlue text-lg">✓</span> Work with UN & local partners</li>
            </ul>
          </div>
        </div>

        {/* ── RIGHT PANEL (Inspiring stats, like donation page) ── */}
        <div className="w-full lg:w-1/2 bg-harafBlue flex flex-col px-6 sm:px-10 py-12 lg:py-20 text-white rounded-t-3xl lg:rounded-l-3xl lg:rounded-tr-none">
          <div className="w-full rounded-xl overflow-hidden mb-8 aspect-video lg:h-56 shadow-xl">
            <div className="bg-[#0f5b93] w-full h-full flex items-center justify-center text-white/90 font-playfair text-2xl flex-col">
              <svg className="w-16 h-16 mb-2 text-yellow-300" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 12c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm0-10c4.2 0 8 3.22 8 8.2 0 3.32-2.67 7.25-8 11.8-5.33-4.55-8-8.48-8-11.8C4 5.22 7.8 2 12 2z" />
              </svg>
              <span className="text-sm font-medium tracking-wide">FIELD TEAM • BAUCHI STATE</span>
            </div>
          </div>
          <h2 className="text-white text-2xl sm:text-3xl lg:text-4xl font-semibold font-playfair italic mb-5 leading-tight">
            Be part of something bigger.
          </h2>
          <p className="text-blue-100 text-sm sm:text-base mb-8 leading-relaxed">
            From water engineers to community outreach coordinators, every role at HARAF
            creates sustainable change. Join 120+ dedicated staff and 400+ volunteers across Nigeria.
          </p>
          <div className="flex flex-col divide-y divide-blue-400/40">
            {STATS.map((stat, idx) => (
              <div key={idx} className="flex items-center justify-between py-5 gap-4">
                <span className="text-yellow-400 text-3xl sm:text-4xl font-bold font-playfair shrink-0">{stat.value}</span>
                <span className="text-white text-sm sm:text-base text-right">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── OPEN POSITIONS SECTION ── */}
      <div className="bg-white py-16 lg:py-24">
        <div className="max-w-6xl mx-auto px-6 sm:px-10">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <p className="text-xs sm:text-sm text-harafBlue font-semibold mb-2 tracking-[0.22em] uppercase">CAREERS</p>
            <h2 className="text-3xl md:text-4xl font-playfair font-bold text-gray-900 mt-3 mb-4">Current opportunities</h2>
            <p className="text-gray-600">Join a team driven by transparency, empathy, and lasting impact.</p>
          </div>

          {/* Department Filter */}
          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {departments.map(dept => (
              <button
                key={dept}
                onClick={() => setFilterDepartment(dept)}
                className={`px-4 py-2 rounded-full text-sm font-semibold transition-all capitalize ${
                  filterDepartment === dept
                    ? "bg-harafBlue text-white shadow-md"
                    : "bg-[#EEF5FC] text-harafBlue hover:bg-[#D8E8F0]"
                }`}
              >
                {dept === "all" ? "All Departments" : dept}
              </button>
            ))}
          </div>

          {/* Jobs Grid - driven by JOBS data field */}
          <div className="grid gap-7 md:grid-cols-2">
            {filteredJobs.map(job => (
              <JobCard key={job.id} job={job} onApply={setSelectedJob} />
            ))}
          </div>

          {filteredJobs.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500">No open positions in this department right now.</p>
              <button
                onClick={() => setShowGeneralModal(true)}
                className="mt-4 text-harafBlue font-semibold underline"
              >
                Send us your CV →
              </button>
            </div>
          )}

          {/* General interest CTA */}
          <div className="text-center mt-14 pt-6 border-t border-[#EEF5FC]">
            <p className="text-gray-500 text-sm">Don't see the perfect fit? We're always looking for talent.</p>
            <button
              onClick={() => setShowGeneralModal(true)}
              className="mt-3 inline-flex items-center gap-2 text-harafBlue font-semibold border-b border-harafBlue/40 hover:border-harafBlue transition"
            >
              Send us your CV / Expression of interest →
            </button>
          </div>
        </div>
      </div>

      {/* ── VALUES SECTION (gold/yellow accent) ── */}
      <div className="bg-[#FEFAF3] border-t border-[#FDE6C5] py-16">
        <div className="max-w-6xl mx-auto px-6 sm:px-10 text-center">
          <p className="text-xs sm:text-sm text-harafBlue font-semibold mb-2 tracking-[0.22em] uppercase bg-white inline-block px-4 py-1 rounded-full shadow-sm">
            OUR CULTURE
          </p>
          <h2 className="text-3xl font-playfair font-bold text-gray-800 mt-4 mb-8">Rooted in respect, driven by impact</h2>
          <div className="grid sm:grid-cols-3 gap-8">
            {VALUES.map((item, idx) => (
              <div key={idx} className="bg-white p-6 rounded-xl shadow-sm border border-[#EEF5FC]">
                <div className="w-14 h-14 bg-[#EEF5FC] rounded-full flex items-center justify-center mx-auto mb-4 text-2xl">{item.icon}</div>
                <h3 className="font-bold text-gray-800 text-lg">{item.title}</h3>
                <p className="text-sm text-gray-500 mt-2">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── FOOTER CONTACT ── */}
      <div className="py-12 bg-white border-t border-[#EFF3F8]">
        <div className="max-w-6xl mx-auto px-6 sm:px-10 text-center">
          <p className="text-gray-500 text-sm">Questions about working at HARAF? Reach out to our People team.</p>
          <a href="mailto:careers@haraf.org.ng" className="inline-flex items-center gap-2 text-harafBlue font-semibold mt-2 text-base hover:underline">
            careers@haraf.org.ng →
          </a>
        </div>
      </div>

      {/* Modals */}
      {selectedJob && (
        <ApplicationModal job={selectedJob} onClose={() => setSelectedJob(null)} />
      )}
      {showGeneralModal && (
        <GeneralInterestModal onClose={() => setShowGeneralModal(false)} />
      )}
    </>
  );
}