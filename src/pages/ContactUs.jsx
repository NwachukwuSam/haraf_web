import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';


const FAQS = [
  {
    q: 'How quickly do you respond to messages?',
    a: 'We aim to respond to all enquiries within 2–3 working days. For urgent matters, please call us directly.',
  },
  {
    q: 'Can I visit your field operations?',
    a: 'Yes — we welcome partner visits. Reach out via the form and our field coordination team will arrange an itinerary.',
  },
  {
    q: 'How do I donate or set up a recurring gift?',
    a: 'Head to our Donate page for all giving options. For corporate or institutional gifts, use the form above and select "Donation Inquiry".',
  },
  {
    q: 'Are you hiring or taking on volunteers?',
    a: 'We periodically open roles and volunteer placements. Select "Volunteer Information" in the form and we\'ll add you to our pipeline.',
  },
];

const INFO_CARDS = [
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"
          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    label: 'Email Us',
    value: 'info@haraf.org.ng',
    sub: 'We reply within 2–3 working days',
    href: 'mailto:info@haraf.org.ng',
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"
          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    ),
    label: 'Call Us',
    value: '0806 960 1527',
    sub: 'Mon – Fri, 9 am – 5 pm WAT',
    href: 'tel:+2348069601527',
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"
          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"
          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    label: 'Visit Us',
    value: 'Karewa, Jimeta 640101',
    sub: 'Adamawa State, Nigeria',
    href: 'https://maps.google.com/?q=Karewa,Jimeta,Adamawa,Nigeria',
  },
];

function AccordionItem({ q, a }) {
  const [open, setOpen] = useState(false);
  return (
    <div className={`border-b border-[#E2EAF0] transition-colors ${open ? 'border-harafBlue/30' : ''}`}>
      <button
        className="w-full flex items-center justify-between text-left py-5 gap-4 group"
        onClick={() => setOpen(o => !o)}
      >
        <span className={`font-playfair font-bold text-[16px] sm:text-[17px] leading-snug transition-colors ${open ? 'text-harafBlue' : 'text-primary group-hover:text-harafBlue'}`}>
          {q}
        </span>
        <span className={`flex-shrink-0 w-7 h-7 rounded-full border flex items-center justify-center transition-all
          ${open ? 'border-harafBlue bg-harafBlue text-white rotate-45' : 'border-[#CBD5E0] text-[#9CA3AF] group-hover:border-harafBlue group-hover:text-harafBlue'}`}>
          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M12 4v16m8-8H4" />
          </svg>
        </span>
      </button>
      <div className={`overflow-hidden transition-all duration-300 ${open ? 'max-h-40 pb-5' : 'max-h-0'}`}>
        <p className="font-dm-sans text-[#4B5563] text-sm leading-relaxed">{a}</p>
      </div>
    </div>
  );
}

export default function ContactPage() {
  const [form, setForm]     = useState({ name: '', email: '', phone: '', subject: '', message: '' });
  const [sent, setSent]     = useState(false);
  const [loading, setLoading] = useState(false);
  const set = (k, v) => setForm(p => ({ ...p, [k]: v }));

  useEffect(() => {
  window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => { setLoading(false); setSent(true); }, 1200);
  };
  

  return (
    <main className="bg-white overflow-x-hidden">

      
      <section className="relative w-full bg-[#EEF5FC] pt-16 pb-16 overflow-hidden">
        
        <div className="absolute -top-32 -right-32 w-[520px] h-[520px] rounded-full bg-harafBlue/[0.06] pointer-events-none" style={{ zIndex: 0 }} />
        <div className="absolute top-8 right-[12%] w-[180px] h-[180px] rounded-full bg-harafYellow/20 pointer-events-none" style={{ zIndex: 0 }} />

        <div className="relative z-10 max-w-5xl mx-auto px-5 sm:px-8 lg:px-12">
          <p className="text-harafBlue text-[11px] font-dm-sans font-bold tracking-[0.22em] uppercase mb-4">
            GET IN TOUCH
          </p>

        
          <h1 className="font-playfair font-bold text-primary leading-[1.06] mb-0">
            <span className="block text-[2.6rem] sm:text-5xl md:text-6xl lg:text-7xl xl:text-[88px]">We'd Love</span>
            <span className="block text-[2.6rem] sm:text-5xl md:text-6xl lg:text-7xl xl:text-[88px] text-harafBlue italic">to Hear</span>
            <span className="block text-[2.6rem] sm:text-5xl md:text-6xl lg:text-7xl xl:text-[88px]">From You.</span>
          </h1>

          <div className="flex items-center gap-3 mt-6 mb-10">
            <div className="h-[3px] w-12 bg-harafYellow rounded-full" />
            <p className="font-cormorant italic text-[#4B5563] text-lg sm:text-xl">
              Donors, partners, volunteers, communities — all welcome.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {INFO_CARDS.map((c, i) => (
              <a
                key={i}
                href={c.href}
                target={c.href.startsWith('http') ? '_blank' : undefined}
                rel="noreferrer"
                className="group bg-white rounded-xl p-5 shadow-[0_4px_24px_rgba(0,0,0,0.07)] border border-[#E8F0F8] hover:border-harafBlue/40 hover:shadow-[0_6px_28px_rgba(26,120,194,0.13)] transition-all flex gap-4 items-start"
              >
                <div className="flex-shrink-0 w-9 h-9 rounded-full bg-[#EEF5FC] group-hover:bg-harafBlue/10 flex items-center justify-center text-harafBlue transition-colors">
                  {c.icon}
                </div>
                <div>
                  <p className="font-dm-sans text-[11px] font-bold text-[#8CB4D6] uppercase tracking-widest mb-0.5">{c.label}</p>
                  <p className="font-dm-sans font-bold text-[14px] text-primary leading-snug">{c.value}</p>
                  <p className="font-dm-sans text-[12px] text-[#9CA3AF] mt-0.5">{c.sub}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

   
      <section className="w-full py-14 md:py-20 bg-white overflow-hidden">
        <div className="max-w-5xl mx-auto px-5 sm:px-8 lg:px-12">
          <div className="flex flex-col lg:flex-row gap-10 lg:gap-14 items-start min-w-0">

           
            <div className="w-full lg:flex-1 min-w-0">
              <h2 className="font-playfair font-bold text-primary text-2xl sm:text-3xl mb-2">
                Send Us a Message
              </h2>
              <p className="font-dm-sans text-[#6B7280] text-sm mb-7">
                Fill in the form below and our team will get back to you promptly.
              </p>

              {sent ? (
                <div className="bg-[#EEF5FC] border border-harafBlue/20 rounded-xl p-10 text-center">
                  <div className="text-4xl mb-4">✉️</div>
                  <h3 className="font-playfair font-bold text-primary text-xl mb-2">Message received!</h3>
                  <p className="font-dm-sans text-[#4B5563] text-sm max-w-xs mx-auto leading-relaxed">
                    Thank you for reaching out. A member of our team will respond within 2–3 working days.
                  </p>
                  <button
                    onClick={() => { setSent(false); setForm({ name: '', email: '', phone: '', subject: '', message: '' }); }}
                    className="mt-6 font-dm-sans text-sm font-bold text-harafBlue underline underline-offset-2 hover:opacity-70 transition-opacity"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-3.5">
           
                  <div className="flex flex-col sm:flex-row gap-3.5">
                    <input
                      type="text" placeholder="Full Name *" required value={form.name}
                      onChange={e => set('name', e.target.value)}
                      className="flex-1 bg-[#F4F8FC] border border-[#D8E8F0] rounded-lg px-4 py-3.5 font-dm-sans text-sm text-[#1C1510] placeholder:text-[#9CA3AF] focus:outline-none focus:border-harafBlue focus:bg-white transition-all"
                    />
                    <input
                      type="tel" placeholder="Phone (optional)" value={form.phone}
                      onChange={e => set('phone', e.target.value)}
                      className="flex-1 bg-[#F4F8FC] border border-[#D8E8F0] rounded-lg px-4 py-3.5 font-dm-sans text-sm text-[#1C1510] placeholder:text-[#9CA3AF] focus:outline-none focus:border-harafBlue focus:bg-white transition-all"
                    />
                  </div>

                  <input
                    type="email" placeholder="Email Address *" required value={form.email}
                    onChange={e => set('email', e.target.value)}
                    className="bg-[#F4F8FC] border border-[#D8E8F0] rounded-lg px-4 py-3.5 font-dm-sans text-sm text-[#1C1510] placeholder:text-[#9CA3AF] focus:outline-none focus:border-harafBlue focus:bg-white transition-all"
                  />

               
                  <div className="relative">
                    <select
                      required value={form.subject}
                      onChange={e => set('subject', e.target.value)}
                      className="w-full bg-[#F4F8FC] border border-[#D8E8F0] rounded-lg px-4 py-3.5 font-dm-sans text-sm appearance-none focus:outline-none focus:border-harafBlue focus:bg-white transition-all"
                      style={{ color: form.subject ? '#1C1510' : '#9CA3AF' }}
                    >
                      <option value="" disabled>What is this regarding? *</option>
                      <option value="donation">Donation Inquiry</option>
                      <option value="partnership">Partnership Opportunity</option>
                      <option value="volunteer">Volunteer Information</option>
                      <option value="media">Media & Press</option>
                      <option value="community">Community / Field Request</option>
                      <option value="general">General Question</option>
                    </select>
                    <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none">
                      <svg className="w-4 h-4 text-[#9CA3AF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </div>

                 
                  <textarea
                    placeholder="Your message…" rows={5} value={form.message}
                    onChange={e => set('message', e.target.value)}
                    className="bg-[#F4F8FC] border border-[#D8E8F0] rounded-lg px-4 py-3.5 font-dm-sans text-sm text-[#1C1510] placeholder:text-[#9CA3AF] resize-none focus:outline-none focus:border-harafBlue focus:bg-white transition-all"
                  />

                
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-harafBlue hover:bg-[#1462a8] disabled:opacity-60 active:scale-[0.99] transition-all text-white font-dm-sans font-bold text-xs tracking-[0.18em] uppercase rounded-lg py-4 flex items-center justify-center gap-2 mt-1 shadow-[0_4px_18px_rgba(26,120,194,0.28)]"
                  >
                    {loading ? (
                      <>
                        <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z" />
                        </svg>
                        Sending…
                      </>
                    ) : (
                      <>
                        SEND MESSAGE
                        <svg fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" className="w-4 h-4">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </>
                    )}
                  </button>

                  <p className="font-dm-sans text-[11px] text-[#9CA3AF] text-center mt-1">
                    We respect your privacy. Your information is never shared.
                  </p>
                </form>
              )}
            </div>

           
            <div className="w-full lg:w-[320px] xl:w-[340px] flex-shrink-0 min-w-0 flex flex-col gap-5">

             
              <div className="bg-[#EEF5FC] rounded-2xl overflow-hidden border border-[#D8E8F0]">
               
                <div className="relative w-full h-[200px] bg-gradient-to-br from-[#d4e9f7] to-[#b8d8ef] flex items-center justify-center overflow-hidden">
               
                  {[...Array(6)].map((_, i) => (
                    <div key={`h${i}`} className="absolute left-0 right-0 border-t border-white/30" style={{ top: `${(i + 1) * 14}%` }} />
                  ))}
                  {[...Array(6)].map((_, i) => (
                    <div key={`v${i}`} className="absolute top-0 bottom-0 border-l border-white/30" style={{ left: `${(i + 1) * 14}%` }} />
                  ))}
                
                  <svg className="absolute inset-0 w-full h-full" viewBox="0 0 340 200" preserveAspectRatio="none">
                    <path d="M0 100 Q85 80 170 100 T340 100" stroke="white" strokeWidth="3" fill="none" opacity="0.5" />
                    <path d="M170 0 Q160 50 170 100 T170 200" stroke="white" strokeWidth="3" fill="none" opacity="0.5" />
                    <path d="M40 40 Q100 70 170 100 Q240 130 300 160" stroke="white" strokeWidth="2" fill="none" opacity="0.3" />
                  </svg>
              
                  <div className="relative z-10 flex flex-col items-center">
                    <div className="w-10 h-10 rounded-full bg-harafBlue shadow-lg flex items-center justify-center text-white">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                      </svg>
                    </div>
                    <div className="mt-2 bg-white rounded-lg px-3 py-1.5 shadow-md text-center">
                      <p className="font-dm-sans font-bold text-[11px] text-primary">HARAF Office</p>
                      <p className="font-dm-sans text-[10px] text-[#6B7280]">Jimeta, Adamawa</p>
                    </div>
                  </div>
                </div>

                <div className="p-5">
                  <p className="font-dm-sans font-bold text-[13px] text-primary mb-1">Our Office</p>
                  <p className="font-dm-sans text-[13px] text-[#4B5563] leading-relaxed mb-4">
                    6FW2+3J9, Karewa<br />
                    Jimeta 640101<br />
                    Adamawa State, Nigeria
                  </p>
                  <a
                    href="https://maps.google.com/?q=Karewa,Jimeta,Adamawa,Nigeria"
                    target="_blank" rel="noreferrer"
                    className="inline-flex items-center gap-1.5 font-dm-sans text-[12px] font-bold text-harafBlue hover:opacity-75 transition-opacity"
                  >
                    Get directions
                    <svg fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" className="w-3.5 h-3.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </a>
                </div>
              </div>

             
              <div className="bg-white rounded-2xl border border-[#E2EAF0] p-5">
                <p className="font-dm-sans font-bold text-[12px] text-[#8CB4D6] uppercase tracking-widest mb-4">Office Hours</p>
                <div className="space-y-2.5">
                  {[
                    ['Monday – Friday', '9:00 am – 5:00 pm'],
                    ['Saturday',        '10:00 am – 2:00 pm'],
                    ['Sunday',          'Closed'],
                  ].map(([day, hrs]) => (
                    <div key={day} className="flex justify-between items-center">
                      <span className="font-dm-sans text-[13px] text-[#4B5563]">{day}</span>
                      <span className={`font-dm-sans text-[13px] font-bold ${hrs === 'Closed' ? 'text-[#9CA3AF]' : 'text-primary'}`}>{hrs}</span>
                    </div>
                  ))}
                </div>
              </div>

          
              <div className="bg-white rounded-2xl border border-[#E2EAF0] p-5">
                <p className="font-dm-sans font-bold text-[12px] text-[#8CB4D6] uppercase tracking-widest mb-4">Follow the Work</p>
                <div className="flex gap-2.5">
                  {[
                    { label: 'Twitter / X', path: 'M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z' },
                    { label: 'Facebook',   path: 'M22.675 0H1.325C.593 0 0 .593 0 1.325v21.351C0 23.407.593 24 1.325 24h11.495v-9.294h-3.126V11.08h3.126V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.31h3.587l-.467 3.626h-3.12V24h6.116c.73 0 1.323-.593 1.323-1.325V1.325C24 .593 23.407 0 22.675 0z' },
                    { label: 'Instagram',  path: 'M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z' },
                  ].map((s) => (
                    <a
                      key={s.label} href="#"
                      aria-label={s.label}
                      className="w-9 h-9 rounded-full bg-[#EEF5FC] hover:bg-harafBlue text-harafBlue hover:text-white flex items-center justify-center transition-all"
                    >
                      <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                        <path d={s.path} />
                      </svg>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

   
      <section className="w-full py-14 md:py-20 bg-[#F8FAFC] border-t border-[#E2EAF0] overflow-hidden">
        <div className="max-w-5xl mx-auto px-5 sm:px-8 lg:px-12">
          <div className="flex flex-col lg:flex-row gap-10 lg:gap-20 min-w-0">

            {/* Left label */}
            <div className="w-full lg:w-[220px] flex-shrink-0">
              <p className="text-harafBlue text-[11px] font-dm-sans font-bold tracking-[0.22em] uppercase mb-3">
                QUICK ANSWERS
              </p>
              <h2 className="font-playfair font-bold text-primary text-2xl sm:text-3xl leading-tight">
                Common<br />Questions.
              </h2>
              <div className="h-[3px] w-8 bg-harafYellow rounded-full mt-4" />
            </div>

       
            <div className="flex-1 min-w-0">
              {FAQS.map((item, i) => <AccordionItem key={i} {...item} />)}
            </div>
          </div>
        </div>
      </section>

      <section className="w-full bg-harafBlue py-12 md:py-16 relative overflow-hidden">
      
        <div className="absolute -top-16 -left-16 w-64 h-64 rounded-full bg-white/5 pointer-events-none" />
        <div className="absolute -bottom-10 right-[10%] w-48 h-48 rounded-full bg-harafYellow/10 pointer-events-none" />

        <div className="max-w-5xl mx-auto px-5 sm:px-8 lg:px-12 relative z-10">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-7">
            <div>
              <p className="font-dm-sans text-harafYellow text-[11px] font-bold tracking-[0.22em] uppercase mb-2">
                JOIN THE TEAM
              </p>
              <h3 className="font-playfair font-bold text-white text-2xl sm:text-3xl leading-tight max-w-md">
                Ready to give your time to rural communities?
              </h3>
            </div>
            <Link
              to="/volunteer"
              className="flex-shrink-0 bg-white text-harafBlue font-dm-sans font-bold text-xs tracking-[0.18em] uppercase px-8 py-4 rounded-lg hover:bg-harafYellow hover:text-[#1C1510] transition-all shadow-md flex items-center gap-2"
            >
              VOLUNTEER WITH US
              <svg fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" className="w-4 h-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}