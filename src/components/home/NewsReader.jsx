import React, { useState, useEffect, useRef } from 'react';

// ─── Copy link button ─────────────────────────────────────────────────────────
function CopyLinkBtn() {
  const [copied, setCopied] = useState(false);
  return (
    <button
      onClick={() => { 
        navigator.clipboard.writeText(window.location.href); 
        setCopied(true); 
        setTimeout(() => setCopied(false), 2000); 
      }}
      className="bg-harafBlue text-white w-10 h-10 sm:w-11 sm:h-11 rounded-lg flex items-center justify-center hover:bg-[#1462a8] hover:scale-105 transition-all"
      aria-label="Copy link"
      title={copied ? "Copied!" : "Copy link"}
    >
      {copied ? (
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
        </svg>
      ) : (
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
        </svg>
      )}
    </button>
  );
}

const NewsReader = ({ news, storyContent, catColors, onClose }) => {
  const scrollRef = useRef(null);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = ""; };
  }, []);

  useEffect(() => {
    const handler = (e) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onClose]);

  const share = (platform) => {
    const url = encodeURIComponent(window.location.href);
    const text = encodeURIComponent(news.title);
    const links = {
      twitter: `https://twitter.com/intent/tweet?url=${url}&text=${text}`,
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${url}`,
      whatsapp: `https://wa.me/?text=${text}%20${url}`,
      linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${url}`,
    };
    if (links[platform]) window.open(links[platform], "_blank");
  };

  return (
    <div
      className="fixed inset-0 z-50 bg-[#f5f6f7] overflow-y-auto"
      style={{ animation: "newsReaderIn 0.32s cubic-bezier(0.22,1,0.36,1) both" }}
      ref={scrollRef}
    >
      {/* Sticky top bar */}
      <div className="sticky top-0 z-20 bg-[#f5f6f7]/90 backdrop-blur-sm border-b border-gray-200">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-8 py-3 flex items-center justify-between gap-4">
          <div className="flex items-center gap-3 min-w-0">
            <span
              className="text-[10px] font-bold tracking-[0.15em] uppercase px-3 py-1 rounded-full flex-shrink-0"
              style={{ background: catColors.bg, color: catColors.text }}
            >
              {news.badgeText}
            </span>
            <span className="text-gray-400 text-xs hidden sm:block truncate">{news.title}</span>
          </div>
          <button
            onClick={onClose}
            className="flex-shrink-0 group flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-gray-500 hover:text-harafBlue transition-colors bg-white border border-gray-200 hover:border-harafBlue px-4 py-2 rounded-lg"
          >
            <svg className="w-3.5 h-3.5 transition-transform group-hover:-translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 19l-7-7 7-7" />
            </svg>
            Back to News
          </button>
        </div>
      </div>

      {/* Hero band */}
      <div className="bg-white border-b border-gray-100 px-4 sm:px-8 py-10 sm:py-14">
        <div className="max-w-3xl mx-auto">

          {/* Back button above title */}
          <button
            onClick={onClose}
            className="group inline-flex items-center gap-2 text-harafBlue font-dm-sans font-bold text-xs uppercase tracking-widest mb-8 hover:gap-3 transition-all"
          >
            <span className="w-7 h-7 rounded-full border-2 border-harafBlue/30 group-hover:border-harafBlue flex items-center justify-center transition-colors">
              <svg className="w-3.5 h-3.5 transition-transform group-hover:-translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 19l-7-7 7-7" />
              </svg>
            </span>
            Back to News
          </button>

          <div className="flex items-center gap-2 mb-4">
            <span className="text-gray-400 text-xs">{news.date}</span>
            <span className="text-gray-300">·</span>
            <span className="text-gray-400 text-xs">{storyContent.meta.length}</span>
          </div>
          <h1 className="font-playfair font-bold text-primary text-3xl sm:text-4xl md:text-5xl leading-tight mb-6">
            {news.title}
          </h1>
          
          {/* Featured Image */}
          <div className="mt-8 rounded-lg overflow-hidden">
            <img 
              src={news.image} 
              alt={news.title}
              className="w-full h-[300px] md:h-[400px] object-cover"
              width="800"
              height="400"
              loading="lazy"
            />
          </div>
        </div>
      </div>

      {/* Body grid */}
      <div className="max-w-[1400px] mx-auto px-4 sm:px-8 py-12 sm:py-16 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">

        {/* Share bar */}
        <div className="col-span-1 lg:col-span-1 flex flex-row lg:flex-col items-center justify-start gap-4 lg:gap-6 lg:pt-2">
          <p className="text-[10px] tracking-[0.4em] text-gray-400 font-bold uppercase lg:rotate-[-90deg] lg:mb-2">SHARE</p>
          <button onClick={() => share("twitter")} aria-label="Share on X"
            className="bg-harafBlue text-white w-10 h-10 sm:w-11 sm:h-11 rounded-lg flex items-center justify-center hover:bg-[#1462a8] hover:scale-105 transition-all">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
            </svg>
          </button>
          <button onClick={() => share("facebook")} aria-label="Share on Facebook"
            className="bg-harafBlue text-white w-10 h-10 sm:w-11 sm:h-11 rounded-full flex items-center justify-center hover:bg-[#1462a8] hover:scale-105 transition-all">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M22.675 0H1.325C.593 0 0 .593 0 1.325v21.351C0 23.407.593 24 1.325 24h11.495v-9.294H9.694V11.08h3.126V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.31h3.587l-.467 3.626h-3.12V24h6.116c.73 0 1.323-.593 1.323-1.325V1.325C24 .593 23.407 0 22.675 0z"/>
            </svg>
          </button>
          <button onClick={() => share("linkedin")} aria-label="Share on LinkedIn"
            className="bg-harafBlue text-white w-10 h-10 sm:w-11 sm:h-11 rounded-lg flex items-center justify-center hover:bg-[#1462a8] hover:scale-105 transition-all">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
          </button>
          <button onClick={() => share("whatsapp")} aria-label="Share on WhatsApp"
            className="bg-harafBlue text-white w-10 h-10 sm:w-11 sm:h-11 rounded-lg flex items-center justify-center hover:bg-[#1462a8] hover:scale-105 transition-all">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 00-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
          </button>
          <CopyLinkBtn />
        </div>

        {/* Article body */}
        <div className="col-span-1 lg:col-span-7 font-serif text-[#4a3f38] leading-[1.85] text-[16px] sm:text-[17px]">
          {storyContent.sections.map((section, si) => (
            <div key={si}>
              {section.heading && (
                <div className="mt-12 mb-1">
                  <p className="text-harafBlue text-[13px] font-dm-sans font-bold tracking-[0.2em] uppercase">
                    {section.heading}
                  </p>
                  <div className="h-px w-full bg-blue-200 mt-2 mb-6" />
                </div>
              )}
              {section.paragraphs.map((para, pi) => (
                <p
                  key={pi}
                  className={`mt-8 ${si === 0 && pi === 0
                    ? "first-letter:text-[72px] first-letter:float-left first-letter:mr-3 first-letter:leading-none first-letter:text-harafBlue first-letter:font-playfair first-letter:font-bold"
                    : ""}`}
                >
                  {para}
                </p>
              ))}
            </div>
          ))}
        </div>

        {/* Right sidebar */}
        <div className="col-span-1 lg:col-span-4 space-y-8">

          <div className="bg-white rounded-xl border border-gray-100 p-6 shadow-sm">
            <h3 className="text-[11px] tracking-[0.3em] text-harafBlue font-dm-sans font-bold uppercase mb-4">About This Story</h3>
            <div className="space-y-2.5 font-dm-sans text-sm text-gray-600">
              <p><span className="font-bold text-primary">Topic:</span> {storyContent.meta.topic}</p>
              <p><span className="font-bold text-primary">Published:</span> {storyContent.meta.published}</p>
              <p><span className="font-bold text-primary">Length:</span> {storyContent.meta.length}</p>
              <p><span className="font-bold text-primary">Category:</span> {storyContent.meta.category}</p>
            </div>
          </div>

          {storyContent.toc && storyContent.toc.length > 0 && (
            <div className="bg-white rounded-xl border border-gray-100 p-6 shadow-sm">
              <h3 className="text-[11px] tracking-[0.3em] text-harafBlue font-dm-sans font-bold uppercase mb-4">In This Story</h3>
              <ul className="space-y-2.5">
                {storyContent.toc.map((item, i) => (
                  <li key={i} className="font-dm-sans text-sm text-gray-600 hover:text-harafBlue cursor-pointer transition-colors flex items-center gap-2">
                    <span className="text-harafBlue/40 text-xs">→</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          )}

          <div className="bg-white rounded-xl border border-gray-100 p-6 shadow-sm">
            <h3 className="text-[11px] tracking-[0.3em] text-harafBlue font-dm-sans font-bold uppercase mb-4">Share This Story</h3>
            <div className="grid grid-cols-2 gap-2.5">
              {[
                { label: "TWITTER/X",  action: () => share("twitter") },
                { label: "FACEBOOK",   action: () => share("facebook") },
                { label: "LINKEDIN",   action: () => share("linkedin") },
                { label: "COPY LINK",  action: () => navigator.clipboard.writeText(window.location.href) },
              ].map(({ label, action }) => (
                <button key={label} onClick={action}
                  className="border border-blue-200 bg-blue-50 hover:bg-blue-100 hover:scale-[1.02] active:scale-[0.98] transition-all text-harafBlue font-dm-sans font-bold text-[11px] tracking-widest uppercase py-2.5 px-3 rounded-lg">
                  {label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom back button */}
      <div className="max-w-[1400px] mx-auto px-4 sm:px-8 pb-16 pt-4">
        <div className="border-t border-gray-200 pt-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div>
            <p className="font-dm-sans text-[11px] text-gray-400 uppercase tracking-widest mb-1">Done reading?</p>
            <p className="font-playfair font-bold text-primary text-lg">Explore more stories from HARAF.</p>
          </div>
          <button
            onClick={onClose}
            className="group flex items-center gap-2.5 bg-harafBlue hover:bg-[#1462a8] active:scale-[0.99] transition-all text-white font-dm-sans font-bold text-xs tracking-[0.18em] uppercase rounded-xl px-7 py-3.5 shadow-[0_4px_18px_rgba(26,120,194,0.25)]"
          >
            <svg className="w-4 h-4 transition-transform group-hover:-translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 19l-7-7 7-7" />
            </svg>
            Back to News
          </button>
        </div>
      </div>

      <style>{`
        @keyframes newsReaderIn {
          from { opacity: 0; transform: translateY(24px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
};

export default NewsReader;