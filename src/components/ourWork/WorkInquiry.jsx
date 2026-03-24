import React from 'react';

const WorkInquiry = () => {
  return (
    <section className="w-full py-12 bg-harafBlue text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-0 md:px-8 lg:px-0">
            <div className="p-6 md:py-16 md:px-8 relative flex flex-col md:flex-row items-center justify-between gap-12">
                <div className="max-w-xl space-y-8">
                    <p className="text-harafYellow text-sm font-dm-sans font-bold tracking-[0.2em] uppercase">
                        WORK WITH US
                    </p>
                    <h2 className="text-white text-4xl md:text-5xl font-playfair font-bold leading-tight">
                        Don't See What<br />
                        You're Looking For?
                    </h2>
                    <div className="space-y-6 opacity-80">
                        <p className="font-dm-sans leading-relaxed">
                            We're always open to co-creating new initiatives with communities, NGOs, government agencies, or research partners.
                            If you have identified a rural need and want a grounded, experienced team to help address it — let's talk.
                        </p>
                        <p className="font-dm-sans leading-relaxed">
                            We believe the best programmes are ones nobody designed alone.
                        </p>
                    </div>
                </div>

                <div className="shrink-0">
                    <button className="bg-harafYellow text-navyDark font-dm-sans font-bold text-sm tracking-widest uppercase px-12 py-5 hover:opacity-90 transition-opacity flex items-center space-x-3">
                        <span>GET IN TOUCH</span>
                        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                            <path d="M5 12h14M12 5l7 7-7 7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    </section>
  );
};

export default WorkInquiry;
