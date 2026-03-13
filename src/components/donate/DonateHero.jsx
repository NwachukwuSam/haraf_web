import React, { useState } from "react";
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

export default function DonationPage() {
  const [frequency, setFrequency] = useState("one-time");
  const [amount, setAmount]       = useState(10000);
  const [custom, setCustom]       = useState("");
  const [isCustom, setIsCustom]   = useState(false);

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

  const impactText = IMPACT[displayAmount] || null;

  return (
    <div className="min-h-screen bg-white flex flex-col lg:flex-row">

      {/* ── LEFT PANEL ──────────────────────────────────────────────────── */}
      <div className="w-full lg:w-1/2 px-6 sm:px-10 lg:px-16 py-10 lg:py-16 flex flex-col gap-6">

        {/* Heading */}
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
          <p className="text-xs font-semibold text-gray-500 mb-2 tracking-widest">
            DONATION FREQUENCY
          </p>
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
          <p className="text-xs font-semibold text-gray-500 mb-2 tracking-widest">
            SELECT AMOUNT
          </p>
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

            {/* Custom input */}
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

        {/* Impact callout */}
        {impactText && (
          <div className="flex">
            <div className="bg-blue-50 px-5 py-4 rounded-md border-l-4 border-yellow-400 w-full">
              <span className="italic text-gray-700 font-serif text-sm sm:text-base">
                ₦{displayAmount.toLocaleString()}{" "}
                <span className="text-orange-500 font-semibold">{impactText}</span>
              </span>
            </div>
          </div>
        )}

        {/* CTA */}
        <div>
          <p className="text-xs font-semibold text-gray-500 mb-4 tracking-widest">
            PAY WITH
          </p>

          {/* Payment logos row — add real logos/images here */}
          <div className="flex flex-wrap gap-3 mb-4">
            {["Paystack", "Flutterwave", "Bank Transfer"].map((m) => (
              <span
                key={m}
                className="text-xs font-semibold text-gray-500 bg-gray-100 border border-gray-200 rounded px-3 py-1.5"
              >
                {m}
              </span>
            ))}
          </div>

          <button className="w-full bg-harafBlue hover:opacity-90 active:scale-[0.99] transition py-4 rounded-md shadow-lg font-semibold text-white text-base sm:text-lg tracking-wide">
            DONATE NOW — MAKE IT COUNT
          </button>

          {/* Trust bar */}
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
                <span className="text-[10px] sm:text-xs font-semibold text-gray-400 text-center leading-tight">
                  {label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── RIGHT PANEL ─────────────────────────────────────────────────── */}
      <div className="w-full lg:w-1/2 bg-harafBlue flex flex-col px-6 sm:px-10 py-10">

        {/* Image */}
        <div className="w-full rounded-xl overflow-hidden mb-8 aspect-video lg:aspect-auto lg:h-64">
          <img
            src={DonateImage}
            alt="Donation Impact"
            className="object-cover w-full h-full"
          />
        </div>

        {/* Heading + sub */}
        <h2 className="text-white text-2xl sm:text-3xl lg:text-4xl font-semibold font-playfair italic mb-4">
          Join 4,200+ Donors Making a Difference
        </h2>
        <p className="text-blue-100 text-sm sm:text-base mb-8 leading-relaxed">
          Every month, thousands of Nigerians and friends around the world
          choose to invest in rural dignity. You're in good company.
        </p>

        {/* Stats */}
        <div className="flex flex-col divide-y divide-blue-400/40">
          {STATS.map(({ value, label }) => (
            <div
              key={label}
              className="flex items-center justify-between py-5 gap-4"
            >
              <span className="text-yellow-400 text-3xl sm:text-4xl font-bold font-playfair shrink-0">
                {value}
              </span>
              <span className="text-white text-sm sm:text-base text-right">
                {label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}