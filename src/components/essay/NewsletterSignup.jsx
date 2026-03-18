import { useState } from 'react';

function NewsletterSignup() {
  const [form, setForm] = useState({ name: '', email: '', role: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (form.name && form.email && form.role) setSubmitted(true);
  };

  return (
    <section className="w-full bg-[#EEF5FC] py-14 md:py-20 px-6 sm:px-8">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row gap-10 md:gap-16 items-start">

          {/* ── Left column ── */}
          <div className="w-full md:w-[42%] flex-shrink-0">
            <p className="text-harafBlue text-[11px] font-dm-sans font-bold tracking-[0.18em] uppercase mb-4">
              NEVER MISS AN IDEA
            </p>

            <h2 className="font-playfair font-bold text-primary text-3xl sm:text-4xl md:text-[2.6rem] leading-[1.12] mb-5">
              New Thinking.<br />
              Straight to Your<br />
              Inbox.
            </h2>

            <p className="font-dm-sans text-[#4B5563] text-sm sm:text-[15px] leading-relaxed mb-5 max-w-sm">
              Once a month we send one essay, one field note, and one question
              worth sitting with. No fundraising. No updates. Just ideas from
              people doing the work.
            </p>

            <p className="font-dm-sans text-harafBlue text-sm font-semibold">
              Join 3,800+ readers in 42 countries.
            </p>
          </div>

          {/* ── Right column: form ── */}
          <div className="w-full flex-1">
            {submitted ? (
              <div className="flex flex-col items-center justify-center text-center py-12 px-6 bg-white rounded-md shadow-sm h-full min-h-[220px]">
                <div className="text-3xl mb-3">✉️</div>
                <h3 className="font-playfair font-bold text-primary text-xl mb-2">You're in!</h3>
                <p className="font-dm-sans text-[#4B5563] text-sm max-w-xs">
                  Watch for your first idea next month. Thanks for joining the conversation.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-3">
                {/* Name */}
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Name"
                    value={form.name}
                    onChange={e => setForm(p => ({ ...p, name: e.target.value }))}
                    required
                    className="w-full bg-white border border-[#D8E8F0] rounded-[6px] px-4 py-3.5 font-dm-sans text-sm text-[#1C1510] placeholder:text-[#9CA3AF] focus:outline-none focus:border-harafBlue transition-colors"
                  />
                  <span className="absolute top-3.5 right-3.5 text-red-500 text-xs font-bold leading-none">*</span>
                </div>

                {/* Email */}
                <div className="relative">
                  <input
                    type="email"
                    placeholder="Email"
                    value={form.email}
                    onChange={e => setForm(p => ({ ...p, email: e.target.value }))}
                    required
                    className="w-full bg-white border border-[#D8E8F0] rounded-[6px] px-4 py-3.5 font-dm-sans text-sm text-[#1C1510] placeholder:text-[#9CA3AF] focus:outline-none focus:border-harafBlue transition-colors"
                  />
                  <span className="absolute top-3.5 right-3.5 text-red-500 text-xs font-bold leading-none">*</span>
                </div>

                {/* Role dropdown */}
                <div className="relative">
                  <select
                    value={form.role}
                    onChange={e => setForm(p => ({ ...p, role: e.target.value }))}
                    required
                    className="w-full bg-white border border-[#D8E8F0] rounded-[6px] px-4 py-3.5 font-dm-sans text-sm appearance-none focus:outline-none focus:border-harafBlue transition-colors"
                    style={{ color: form.role ? '#1C1510' : '#9CA3AF' }}
                  >
                    <option value="" disabled>I am a…</option>
                    <option value="donor">Donor / Supporter</option>
                    <option value="partner">Partner Organisation</option>
                    <option value="volunteer">Volunteer</option>
                    <option value="researcher">Researcher / Academic</option>
                    <option value="journalist">Journalist / Writer</option>
                    <option value="community">Community Member</option>
                    <option value="other">Other</option>
                  </select>
                  <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none">
                    <svg className="w-4 h-4 text-[#6B7280]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  className="w-full bg-harafBlue hover:bg-[#1462a8] active:scale-[0.99] transition-all text-white font-dm-sans font-bold text-xs tracking-[0.18em] uppercase rounded-[6px] py-4 mt-1 flex items-center justify-center gap-2"
                >
                  SUBSCRIBE TO OUR IDEAS
                  <svg fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" className="w-4 h-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </button>
              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}

export default NewsletterSignup;