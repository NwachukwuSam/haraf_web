import { useState, useEffect, useCallback, useRef } from 'react';
const imageModules = import.meta.glob('../assets/Haraf/Haraf (*).jpg', { eager: true });

const ALL_IMAGES = Array.from({ length: 204 }, (_, i) => {
  const num = i + 1;
  const key = `../assets/Haraf/Haraf (${num}).jpg`;
  const mod = imageModules[key];
  return {
    id: num,
    src: mod ? mod.default : '',
    alt: `Haraf — Image ${num}`,
    category: (() => {
      if (num % 5 === 0) return 'Healthcare';
      if (num % 4 === 0) return 'Education';
      if (num % 3 === 0) return 'Livelihoods';
      if (num % 2 === 0) return 'Clean Water';
      return 'Food Security';
    })(),
  };
}).filter(img => img.src);

const CATEGORIES = ['All', 'Food Security', 'Clean Water', 'Livelihoods', 'Education', 'Healthcare'];
const PAGE_SIZE  = 30; 
const CloseIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6">
    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
  </svg>
);

const ChevronLeft = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-7 h-7">
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
  </svg>
);

const ChevronRight = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-7 h-7">
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
  </svg>
);

const DownloadIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4">
    <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
  </svg>
);


function Lightbox({ images, currentIndex, onClose, onPrev, onNext }) {
  const img = images[currentIndex];

  useEffect(() => {
    const handler = (e) => {
      if (e.key === 'Escape')     onClose();
      if (e.key === 'ArrowLeft')  onPrev();
      if (e.key === 'ArrowRight') onNext();
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [onClose, onPrev, onNext]);

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = ''; };
  }, []);

  return (
    <div
      className="fixed inset-0 z-[100] bg-black/95 flex flex-col"
      onClick={onClose}
    >
      
      <div
        className="flex items-center justify-between px-5 sm:px-8 py-4 flex-shrink-0"
        onClick={e => e.stopPropagation()}
      >
        <div className="flex items-center gap-3">
          <span className="font-playfair italic text-white/60 text-sm">HARAF@10</span>
          <span className="text-white/30 text-xs">·</span>
          <span
            className="text-[10px] font-dm-sans font-bold uppercase tracking-widest px-2.5 py-1 rounded-full"
            style={{ background: CATEGORY_COLORS[img.category]?.bg, color: CATEGORY_COLORS[img.category]?.text }}
          >
            {img.category}
          </span>
        </div>
        <div className="flex items-center gap-4">
          <span className="font-dm-sans text-white/40 text-sm tabular-nums">
            {currentIndex + 1} / {images.length}
          </span>
          <a
            href={img.src}
            download={`Haraf (${img.id}).jpg`}
            className="text-white/50 hover:text-white transition-colors p-1"
            title="Download"
          >
            <DownloadIcon />
          </a>
          <button
            onClick={onClose}
            className="text-white/50 hover:text-white transition-colors p-1"
            aria-label="Close"
          >
            <CloseIcon />
          </button>
        </div>
      </div>

      {/* Image area */}
      <div className="flex-1 flex items-center justify-center relative min-h-0 px-14 sm:px-20">
        {/* Prev */}
        <button
          onClick={e => { e.stopPropagation(); onPrev(); }}
          className="absolute left-2 sm:left-4 text-white/50 hover:text-white transition-colors bg-white/5 hover:bg-white/10 rounded-full p-2 sm:p-3"
          aria-label="Previous"
        >
          <ChevronLeft />
        </button>

        <img
          key={img.id}
          src={img.src}
          alt={img.alt}
          onClick={e => e.stopPropagation()}
          className="max-h-full max-w-full object-contain rounded-sm shadow-2xl"
          style={{ animation: 'lbFadeIn 0.2s ease' }}
        />

        {/* Next */}
        <button
          onClick={e => { e.stopPropagation(); onNext(); }}
          className="absolute right-2 sm:right-4 text-white/50 hover:text-white transition-colors bg-white/5 hover:bg-white/10 rounded-full p-2 sm:p-3"
          aria-label="Next"
        >
          <ChevronRight />
        </button>
      </div>

      <div
        className="flex-shrink-0 px-5 sm:px-8 py-4 flex items-center justify-center"
        onClick={e => e.stopPropagation()}
      >
        <p className="font-dm-sans text-white/30 text-xs">
          Press ← → to navigate · Esc to close
        </p>
      </div>
    </div>
  );
}

const CATEGORY_COLORS = {
  'Food Security': { bg: 'rgba(254,243,199,0.15)', text: '#FCD34D', dot: '#F59E0B' },
  'Clean Water':   { bg: 'rgba(219,234,254,0.15)', text: '#93C5FD', dot: '#3B82F6' },
  'Livelihoods':   { bg: 'rgba(209,250,229,0.15)', text: '#6EE7B7', dot: '#10B981' },
  'Education':     { bg: 'rgba(237,233,254,0.15)', text: '#C4B5FD', dot: '#8B5CF6' },
  'Healthcare':    { bg: 'rgba(254,226,226,0.15)', text: '#FCA5A5', dot: '#EF4444' },
};


function PhotoTile({ image, onClick, index }) {
  const [loaded, setLoaded] = useState(false);
  const [error, setError]   = useState(false);

  return (
    <div
      className="relative group cursor-pointer overflow-hidden bg-[#1a1a1a] rounded-sm"
      style={{ animation: `tileIn 0.4s ease both`, animationDelay: `${(index % PAGE_SIZE) * 20}ms` }}
      onClick={() => onClick(image)}
    >
      {!loaded && !error && (
        <div className="w-full aspect-[4/3] bg-[#1e1e1e] animate-pulse" />
      )}

      {error && (
        <div className="w-full aspect-[4/3] bg-[#1a1a1a] flex flex-col items-center justify-center gap-2">
          <svg className="w-8 h-8 text-white/10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
          <span className="text-white/20 font-dm-sans text-[10px]">Image {image.id}</span>
        </div>
      )}

      <img
        src={image.src}
        alt={image.alt}
        onLoad={() => setLoaded(true)}
        onError={() => { setLoaded(true); setError(true); }}
        className={`w-full h-full object-cover transition-all duration-500 group-hover:scale-105 ${loaded && !error ? 'opacity-100' : 'opacity-0 absolute inset-0'}`}
        width="400"
        height="300"
        loading="lazy"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      
      <div className="absolute bottom-3 left-3 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-1 group-hover:translate-y-0">
        <span
          className="text-[9px] font-dm-sans font-bold uppercase tracking-widest px-2 py-1 rounded-full backdrop-blur-sm"
          style={{ background: CATEGORY_COLORS[image.category]?.bg, color: CATEGORY_COLORS[image.category]?.text }}
        >
          {image.category}
        </span>
      </div>

      <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <span className="text-[9px] font-dm-sans text-white/50 bg-black/40 backdrop-blur-sm px-1.5 py-0.5 rounded">
          {image.id}
        </span>
      </div>
    </div>
  );
}

export default function PressMedia() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [visibleCount, setVisibleCount]     = useState(PAGE_SIZE);
  const [lightboxIndex, setLightboxIndex]   = useState(null);
  const [searchQuery, setSearchQuery]       = useState('');
  const loadMoreRef = useRef(null);

  const filtered = ALL_IMAGES.filter(img => {
    const catMatch    = activeCategory === 'All' || img.category === activeCategory;
    const searchMatch = !searchQuery || img.category.toLowerCase().includes(searchQuery.toLowerCase()) || String(img.id).includes(searchQuery);
    return catMatch && searchMatch;
  });

  const visible = filtered.slice(0, visibleCount);
  const hasMore = visibleCount < filtered.length;

  
  useEffect(() => {
    setVisibleCount(PAGE_SIZE);
  }, [activeCategory, searchQuery]);

  
  const openLightbox  = useCallback((img) => {
    const idx = filtered.findIndex(i => i.id === img.id);
    setLightboxIndex(idx);
  }, [filtered]);

  const closeLightbox = useCallback(() => setLightboxIndex(null), []);

  const prevImage = useCallback(() => {
    setLightboxIndex(i => (i === 0 ? filtered.length - 1 : i - 1));
  }, [filtered.length]);

  const nextImage = useCallback(() => {
    setLightboxIndex(i => (i === filtered.length - 1 ? 0 : i + 1));
  }, [filtered.length]);

  // Stats
  const totalByCategory = CATEGORIES.slice(1).reduce((acc, cat) => {
    acc[cat] = ALL_IMAGES.filter(i => i.category === cat).length;
    return acc;
  }, {});

  return (
    <>
      
      <style>{`
        @keyframes tileIn {
          from { opacity: 0; transform: translateY(12px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes lbFadeIn {
          from { opacity: 0; transform: scale(0.97); }
          to   { opacity: 1; transform: scale(1); }
        }
        @keyframes heroReveal {
          from { opacity: 0; transform: translateY(20px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>

      <main className="bg-[#0e0e0e] min-h-screen overflow-x-hidden">

        
        <section className="relative w-full pt-20 pb-16 px-5 sm:px-8 lg:px-16 overflow-hidden">
         
          <div className="absolute inset-0 opacity-[0.03]"
            style={{ backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '28px 28px' }}
          />

          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full bg-harafBlue/10 blur-[80px] pointer-events-none" />

          <div className="relative z-10 max-w-5xl mx-auto">
            <div style={{ animation: 'heroReveal 0.7s ease both' }}>
              <p className="text-harafBlue text-[11px] font-dm-sans font-bold tracking-[0.25em] uppercase mb-4">
                PRESS & MEDIA
              </p>
              <h1 className="font-playfair font-bold text-white leading-[1.06] mb-5">
                <span className="block text-4xl sm:text-5xl md:text-6xl lg:text-7xl">Ten Years.</span>
                <span className="block text-4xl sm:text-5xl md:text-6xl lg:text-7xl italic text-harafBlue/80">204 Moments.</span>
                <span className="block text-4xl sm:text-5xl md:text-6xl lg:text-7xl">One Story.</span>
              </h1>
              <p className="font-cormorant italic text-white/50 text-lg sm:text-xl max-w-xl leading-relaxed mb-8">
                A visual archive of HARAF's decade of work across Nigeria's most underserved communities — unfiltered, unposed, and true.
              </p>
            </div>

            <div
              className="flex flex-wrap gap-6 sm:gap-10 pt-6 border-t border-white/10"
              style={{ animation: 'heroReveal 0.7s ease 0.2s both' }}
            >
              <div>
                <p className="font-playfair font-bold text-white text-3xl">204</p>
                <p className="font-dm-sans text-white/40 text-xs uppercase tracking-widest mt-0.5">Photographs</p>
              </div>
              <div>
                <p className="font-playfair font-bold text-white text-3xl">5</p>
                <p className="font-dm-sans text-white/40 text-xs uppercase tracking-widest mt-0.5">Programme Areas</p>
              </div>
              <div>
                <p className="font-playfair font-bold text-white text-3xl">10</p>
                <p className="font-dm-sans text-white/40 text-xs uppercase tracking-widest mt-0.5">Years of Work</p>
              </div>
              <div>
                <p className="font-playfair font-bold text-white text-3xl">4</p>
                <p className="font-dm-sans text-white/40 text-xs uppercase tracking-widest mt-0.5">Nigerian States</p>
              </div>
            </div>
          </div>
        </section>

        <div className="sticky top-0 z-40 bg-[#0e0e0e]/90 backdrop-blur-md border-b border-white/[0.06]">
          <div className="max-w-5xl mx-auto px-5 sm:px-8 lg:px-16 py-3 flex flex-col sm:flex-row gap-3 sm:items-center sm:justify-between">

            <div className="flex items-center gap-1.5 overflow-x-auto pb-1 sm:pb-0 scrollbar-hide flex-nowrap">
              {CATEGORIES.map(cat => {
                const isActive = activeCategory === cat;
                const count    = cat === 'All' ? ALL_IMAGES.length : totalByCategory[cat];
                return (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={`flex-shrink-0 flex items-center gap-1.5 px-3 py-1.5 rounded-full font-dm-sans text-xs font-bold transition-all whitespace-nowrap ${
                      isActive
                        ? 'bg-harafBlue text-white'
                        : 'text-white/40 hover:text-white/70 hover:bg-white/5'
                    }`}
                  >
                    {cat !== 'All' && (
                      <span
                        className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                        style={{ background: isActive ? 'white' : CATEGORY_COLORS[cat]?.dot }}
                      />
                    )}
                    {cat}
                    <span className={`text-[10px] ${isActive ? 'text-white/70' : 'text-white/25'}`}>
                      {count}
                    </span>
                  </button>
                );
              })}
            </div>

            <div className="relative flex-shrink-0">
              <svg className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-white/30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <input
                type="text"
                placeholder="Search…"
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
                className="bg-white/5 border border-white/10 rounded-full pl-8 pr-4 py-1.5 font-dm-sans text-xs text-white placeholder:text-white/25 focus:outline-none focus:border-harafBlue/50 focus:bg-white/8 transition-all w-[140px] sm:w-[160px]"
              />
            </div>
          </div>
        </div>

    
        <div className="max-w-5xl mx-auto px-5 sm:px-8 lg:px-16 py-8">

          <div className="flex items-center justify-between mb-5">
            <p className="font-dm-sans text-white/30 text-xs">
              Showing <span className="text-white/60 font-bold">{visible.length}</span> of{' '}
              <span className="text-white/60 font-bold">{filtered.length}</span> photographs
              {activeCategory !== 'All' && (
                <span className="text-harafBlue"> · {activeCategory}</span>
              )}
            </p>
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="font-dm-sans text-xs text-white/30 hover:text-white/60 transition-colors flex items-center gap-1"
              >
                Clear search <CloseIcon />
              </button>
            )}
          </div>

          {filtered.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-24 gap-3">
              <svg className="w-12 h-12 text-white/10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <p className="font-dm-sans text-white/30 text-sm">No photographs found</p>
            </div>
          ) : (
            <div className="columns-2 sm:columns-3 lg:columns-4 gap-2 sm:gap-3 space-y-2 sm:space-y-3">
              {visible.map((img, i) => (
                <div key={img.id} className="break-inside-avoid">
                  <PhotoTile image={img} index={i} onClick={openLightbox} />
                </div>
              ))}
            </div>
          )}

          {hasMore && (
            <div ref={loadMoreRef} className="flex flex-col items-center gap-3 mt-12">
              <p className="font-dm-sans text-white/25 text-xs">
                {filtered.length - visibleCount} more photographs
              </p>
              <button
                onClick={() => setVisibleCount(v => v + PAGE_SIZE)}
                className="group flex items-center gap-2 bg-white/5 hover:bg-harafBlue border border-white/10 hover:border-harafBlue text-white/60 hover:text-white font-dm-sans font-bold text-xs tracking-widest uppercase rounded-full px-8 py-3 transition-all"
              >
                Load More
                <svg className="w-3.5 h-3.5 transition-transform group-hover:translate-y-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            </div>
          )}

          {!hasMore && filtered.length > 0 && (
            <div className="flex flex-col items-center gap-2 mt-12 pt-8 border-t border-white/[0.06]">
              <div className="w-8 h-[2px] bg-harafBlue/40 rounded-full mb-1" />
              <p className="font-dm-sans text-white/25 text-xs uppercase tracking-widest">
                End of gallery · {filtered.length} photographs
              </p>
            </div>
          )}
        </div>

        <div className="border-t border-white/[0.06] mt-4">
          <div className="max-w-5xl mx-auto px-5 sm:px-8 lg:px-16 py-10">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5">
              <div>
                <p className="font-dm-sans text-white/30 text-[11px] uppercase tracking-widest mb-1">
                  Media Inquiries
                </p>
                <p className="font-playfair font-bold text-white text-lg sm:text-xl leading-tight">
                  Need high-resolution images or press materials?
                </p>
              </div>
              <a
                href="mailto:media@haraf.org.ng"
                className="flex-shrink-0 flex items-center gap-2 bg-white/5 hover:bg-harafBlue border border-white/10 hover:border-harafBlue text-white/60 hover:text-white font-dm-sans font-bold text-xs tracking-widest uppercase rounded-lg px-6 py-3 transition-all"
              >
                Contact Press Team
                <svg fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" className="w-4 h-4">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            </div>
          </div>
        </div>

      </main>

      
      {lightboxIndex !== null && (
        <Lightbox
          images={filtered}
          currentIndex={lightboxIndex}
          onClose={closeLightbox}
          onPrev={prevImage}
          onNext={nextImage}
        />
      )}
    </>
  );
}