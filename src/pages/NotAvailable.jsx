import { Link } from 'react-router-dom';

const NotAvailable = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] px-4 py-16 text-center">
      <div className="max-w-md mx-auto">
        {/* Decorative icon / illustration */}
        <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-[#0d1a2e] flex items-center justify-center border border-[#3a9de8]/30">
          <svg className="w-10 h-10 text-[#3a9de8]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>

        <h1 className="font-serif text-4xl md:text-5xl font-bold text-white mb-4">
          Page Not Available
        </h1>
        <p className="text-[#7a90a8] text-lg mb-8">
          The link you followed may be broken, or the page has been moved or is temporarily unavailable.
        </p>
        <Link
          to="/"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#1a6ebd] text-white font-medium hover:bg-[#155a9c] transition-all"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
          </svg>
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default NotAvailable;