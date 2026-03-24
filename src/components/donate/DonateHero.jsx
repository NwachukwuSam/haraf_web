import React, { useState, useEffect } from "react";
import DonateImage from "../../assets/donateImage.jpg";

const AMOUNTS = [5000, 10000, 25000, 50000, 100000];

const IMPACT = {
  5000:   "provides school supplies for one child for a term.",
  10000:  "provides clean water for a family for 3 months.",
  25000:  "funds a community health outreach visit.",
  50000:  "builds one water point serving 20 families.",
  100000: "puts 3 children through school for a full year.",
};

const STATS = [
  { value: "14,000+", label: "Families Reached" },
  { value: "320+",    label: "Clean Water Points" },
  { value: "5,600",   label: "Children in School" },
  { value: "87",      label: "Communities Served" },
];

const BANK_DETAILS = [
  { bank: "First Bank of Nigeria", name: "HARAF Foundation", number: "2034567890" },
  { bank: "Zenith Bank",           name: "HARAF Foundation", number: "1023456789" },
  
];


function CopyButton({ text }) {
  const [copied, setCopied] = useState(false);
  const copy = () => {
    navigator.clipboard.writeText(text).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };
  return (
    <button
      onClick={copy}
      className={`flex items-center gap-1 text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full transition-all ${
        copied
          ? "bg-green-100 text-green-600"
          : "bg-[#EEF5FC] text-harafBlue hover:bg-harafBlue hover:text-white"
      }`}
    >
      {copied ? (
        <>
          <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
          </svg>
          Copied
        </>
      ) : (
        <>
          <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
              d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
          </svg>
          Copy
        </>
      )}
    </button>
  );
}

// ─── Modal ────────────────────────────────────────────────────────────────────
function DonationModal({ amount, frequency, onClose }) {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = ""; };
  }, []);

  useEffect(() => {
    const handler = (e) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onClose]);

  const formattedAmount = amount ? `₦${Number(amount).toLocaleString()}` : "your gift";
  const freqLabel = frequency !== "one-time" ? ` ${frequency}` : "";

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
        {/* Top colour bar */}
        <div className="h-1.5 bg-gradient-to-r from-harafBlue via-[#4aa8f0] to-harafBlue" />

        {/* Close button */}
        <button
          onClick={onClose}
          aria-label="Close"
          className="absolute top-4 right-4 w-8 h-8 rounded-full bg-[#F4F8FC] hover:bg-[#D8E8F0] flex items-center justify-center text-[#9CA3AF] hover:text-primary transition-all"
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Thank-you header */}
        <div className="px-7 pt-8 pb-6 text-center">
          {/* Animated heart */}
          <div
            className="w-16 h-16 rounded-full bg-[#EEF5FC] flex items-center justify-center mx-auto mb-4"
            style={{ animation: "heartPulse 1.2s ease infinite" }}
          >
            <svg className="w-8 h-8 text-harafBlue" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
            </svg>
          </div>

          <p className="text-harafBlue text-[11px] font-bold tracking-[0.22em] uppercase mb-1">
            Thank You
          </p>
          <h2 className="font-playfair font-bold text-primary text-[22px] leading-snug mb-3">
            Your generosity matters.
          </h2>
          <p className="font-dm-sans text-[#4B5563] text-sm leading-relaxed">
            To complete your{freqLabel} donation of{" "}
            <span className="font-bold text-harafBlue">{formattedAmount}</span>, transfer
            to any account below then email your proof of payment to{" "}
            <a href="mailto:donate@haraf.org.ng" className="text-harafBlue underline underline-offset-2 hover:opacity-75">
              donate@haraf.org.ng
            </a>.
          </p>
        </div>

        {/* Divider */}
        <div className="mx-7 border-t border-[#EEF5FC]" />

        {/* Bank cards */}
        <div className="px-7 py-5 flex flex-col gap-3">
          <p className="font-dm-sans text-[11px] font-bold text-[#8CB4D6] uppercase tracking-widest">
            Bank Transfer Details
          </p>

          {BANK_DETAILS.map((b, i) => (
            <div
              key={i}
              className="bg-[#F4F8FC] border border-[#D8E8F0] rounded-xl px-4 py-3.5"
              style={{ animation: `slideUp 0.3s ease ${i * 0.07 + 0.15}s both` }}
            >
              {/* Bank name row */}
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-full bg-harafBlue/10 flex items-center justify-center">
                    <svg className="w-3.5 h-3.5 text-harafBlue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                        d="M3 10h18M3 14h18M5 6h14a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2z" />
                    </svg>
                  </div>
                  <span className="font-dm-sans font-bold text-[13px] text-primary">{b.bank}</span>
                </div>
                <CopyButton text={b.number} />
              </div>

              {/* Account number */}
              <p className="font-dm-sans text-[11px] text-[#9CA3AF] uppercase tracking-wider mb-0.5">
                Account Number
              </p>
              <p className="font-dm-sans font-bold text-primary text-xl tracking-[0.18em] mb-2">
                {b.number}
              </p>

              {/* Account name */}
              <p className="font-dm-sans text-[11px] text-[#9CA3AF] uppercase tracking-wider mb-0.5">
                Account Name
              </p>
              <p className="font-dm-sans font-bold text-[13px] text-primary">{b.name}</p>
            </div>
          ))}
        </div>

        {/* Tip + close */}
        <div className="px-7 pb-7 flex flex-col gap-3">
          <div className="bg-amber-50 border border-amber-100 rounded-xl px-4 py-3 flex gap-2.5 items-start">
            <svg className="w-4 h-4 text-amber-500 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <p className="font-dm-sans text-xs text-amber-700 leading-relaxed">
              Use <strong>your full name</strong> as the transfer narration so we can issue your tax receipt promptly.
            </p>
          </div>

          <button
            onClick={onClose}
            className="w-full bg-harafBlue hover:bg-[#1462a8] active:scale-[0.99] transition-all text-white font-dm-sans font-bold text-xs tracking-[0.2em] uppercase rounded-xl py-3.5 shadow-[0_4px_18px_rgba(26,120,194,0.3)]"
          >
            Done — Close
          </button>

          <p className="font-dm-sans text-[11px] text-[#9CA3AF] text-center">
            Questions?{" "}
            <a href="mailto:donate@haraf.org.ng" className="text-harafBlue hover:underline">
              donate@haraf.org.ng
            </a>
          </p>
        </div>
      </div>

      <style>{`
        @keyframes modalPop {
          from { opacity: 0; transform: scale(0.86) translateY(20px); }
          to   { opacity: 1; transform: scale(1)    translateY(0);    }
        }
        @keyframes heartPulse {
          0%, 100% { transform: scale(1); }
          50%       { transform: scale(1.08); }
        }
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(10px); }
          to   { opacity: 1; transform: translateY(0);    }
        }
      `}</style>
    </div>
  );
}

// ─── Main page ────────────────────────────────────────────────────────────────
export default function DonationPage() {
  const [frequency, setFrequency] = useState("one-time");
  const [amount, setAmount]       = useState(10000);
  const [custom, setCustom]       = useState("");
  const [isCustom, setIsCustom]   = useState(false);
  const [showModal, setShowModal] = useState(false);

  const displayAmount = isCustom
    ? (parseInt(custom.replace(/\D/g, ""), 10) || 0)
    : amount;

  const handleCustomChange = (e) => {
    const raw = e.target.value.replace(/\D/g, "");
    setCustom(raw);
    setIsCustom(true);
    setAmount(null);
  };

  const selectPreset = (amt) => {
    setAmount(amt);
    setIsCustom(false);
    setCustom("");
  };

  useEffect(() => {
  window.scrollTo({ top: 0, left: 0, behavior: "instant" });
}, []);

  const impactText = IMPACT[displayAmount] || null;

  return (
    <>
      <div className="min-h-screen bg-white flex flex-col lg:flex-row">

        {/* ── LEFT PANEL ────────────────────────────────────────────────── */}
        <div className="w-full lg:w-1/2 px-6 sm:px-10 lg:px-16 py-10 lg:py-16 flex flex-col gap-6">

          <div>
            <p className="text-xs sm:text-sm text-harafBlue font-semibold mb-2 tracking-widest">
              MAKE A DONATION
            </p>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-serif text-gray-900 leading-tight mb-3">
              Your Gift Changes a Life Today.
            </h1>
            <p className="text-sm sm:text-base text-gray-600">
              100% of your donation goes directly to our programmes.
              We publish full financial reports annually.
            </p>
          </div>

          {/* Frequency */}
          <div>
            <p className="text-xs font-semibold text-gray-500 mb-2 tracking-widest">DONATION FREQUENCY</p>
            <div className="flex flex-wrap gap-2">
              {["one-time", "monthly", "annually"].map((f) => (
                <button
                  key={f}
                  onClick={() => setFrequency(f)}
                  className={`px-5 py-2.5 rounded-md font-semibold text-sm sm:text-base transition ${
                    frequency === f
                      ? "bg-harafBlue text-white shadow-md"
                      : "bg-blue-50 text-harafBlue border border-blue-200 hover:bg-blue-100"
                  }`}
                >
                  {f === "one-time" ? "ONE-TIME" : f.toUpperCase()}
                </button>
              ))}
            </div>
          </div>

          {/* Amount grid */}
          <div>
            <p className="text-xs font-semibold text-gray-500 mb-2 tracking-widest">SELECT AMOUNT</p>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {AMOUNTS.map((amt) => (
                <button
                  key={amt}
                  onClick={() => selectPreset(amt)}
                  className={`py-3 px-2 border font-semibold text-base sm:text-lg rounded-md transition ${
                    amount === amt && !isCustom
                      ? "bg-harafBlue text-white border-harafBlue shadow-md"
                      : "bg-white text-harafBlue border-blue-200 hover:border-harafBlue hover:bg-blue-50"
                  }`}
                >
                  ₦{amt.toLocaleString()}
                </button>
              ))}
              <div className={`flex items-center border rounded-md px-3 transition ${
                isCustom ? "border-harafBlue bg-blue-50" : "border-blue-200 bg-white"
              }`}>
                <span className="text-harafBlue font-semibold mr-1 text-base">₦</span>
                <input
                  type="text"
                  inputMode="numeric"
                  placeholder="Custom"
                  value={custom}
                  onChange={handleCustomChange}
                  onFocus={() => setIsCustom(true)}
                  className="w-full bg-transparent outline-none text-harafBlue font-semibold text-base sm:text-lg py-3 placeholder-blue-300"
                />
              </div>
            </div>
          </div>

          {/* Impact */}
          {impactText && (
            <div className="bg-blue-50 px-5 py-4 rounded-md border-l-4 border-yellow-400">
              <span className="italic text-gray-700 font-serif text-sm sm:text-base">
                ₦{displayAmount.toLocaleString()}{" "}
                <span className="text-orange-500 font-semibold">{impactText}</span>
              </span>
            </div>
          )}

          {/* CTA */}
          <div>
            <p className="text-xs font-semibold text-gray-500 mb-4 tracking-widest">PAY WITH</p>
            <div className="flex flex-wrap gap-3 mb-4">
              {["Paystack", "Flutterwave", "Bank Transfer"].map((m) => (
                <span key={m} className="text-xs font-semibold text-gray-500 bg-gray-100 border border-gray-200 rounded px-3 py-1.5">
                  {m}
                </span>
              ))}
            </div>

            <button
              onClick={() => setShowModal(true)}
              className="w-full bg-harafBlue hover:bg-[#1462a8] active:scale-[0.99] transition-all py-4 rounded-md shadow-lg font-semibold text-white text-base sm:text-lg tracking-wide"
            >
              DONATE NOW — MAKE IT COUNT
            </button>

            <div className="flex justify-around items-center mt-5">
              {[
                {
                  label: "SECURE & ENCRYPTED",
                  icon: (
                    <svg width="22" height="22" fill="none" viewBox="0 0 24 24">
                      <rect x="5" y="11" width="14" height="10" rx="2" stroke="#37a56b" strokeWidth="2" />
                      <path d="M8 11V8a4 4 0 018 0v3" stroke="#37a56b" strokeWidth="2" strokeLinecap="round" />
                    </svg>
                  ),
                },
                {
                  label: "NGO REGISTERED",
                  icon: (
                    <svg width="22" height="22" fill="none" viewBox="0 0 24 24">
                      <path d="M5 13l4 4L19 7" stroke="#4caf50" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  ),
                },
                {
                  label: "RECEIPTS ISSUED",
                  icon: (
                    <svg width="22" height="22" fill="none" viewBox="0 0 24 24">
                      <path d="M6 2h12a2 2 0 012 2v16l-3-2-2 2-2-2-2 2-2-2-3 2V4a2 2 0 012-2z" stroke="#8bc34a" strokeWidth="2" strokeLinejoin="round" />
                      <path d="M9 9h6M9 13h4" stroke="#8bc34a" strokeWidth="2" strokeLinecap="round" />
                    </svg>
                  ),
                },
              ].map(({ label, icon }) => (
                <div key={label} className="flex flex-col items-center gap-1">
                  {icon}
                  <span className="text-[10px] sm:text-xs font-semibold text-gray-400 text-center leading-tight">{label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── RIGHT PANEL ───────────────────────────────────────────────── */}
        <div className="w-full lg:w-1/2 bg-harafBlue flex flex-col px-6 sm:px-10 py-10">
          <div className="w-full rounded-xl overflow-hidden mb-8 aspect-video lg:aspect-auto lg:h-64">
            <img 
              src={DonateImage} 
              alt="Donation Impact" 
              className="object-cover w-full h-full" 
              width="800"
              height="600"
              fetchpriority="high"
              loading="eager"
            />
          </div>
          <h2 className="text-white text-2xl sm:text-3xl lg:text-4xl font-semibold font-playfair italic mb-4">
            Join 4,200+ Donors Making a Difference
          </h2>
          <p className="text-blue-100 text-sm sm:text-base mb-8 leading-relaxed">
            Every month, thousands of Nigerians and friends around the world
            choose to invest in rural dignity. You're in good company.
          </p>
          <div className="flex flex-col divide-y divide-blue-400/40">
            {STATS.map(({ value, label }) => (
              <div key={label} className="flex items-center justify-between py-5 gap-4">
                <span className="text-yellow-400 text-3xl sm:text-4xl font-bold font-playfair shrink-0">{value}</span>
                <span className="text-white text-sm sm:text-base text-right">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <DonationModal
          amount={displayAmount}
          frequency={frequency}
          onClose={() => setShowModal(false)}
        />
      )}
    </>
  );
}