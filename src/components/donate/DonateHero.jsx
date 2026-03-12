import React, { useState } from "react";
import DonateImage from "../../assets/donateImage.jpg"

export default function DonationPage() {
  const [frequency, setFrequency] = useState("one-time");
  const [amount, setAmount] = useState(10000);

  return (
    <div className="min-h-screen bg-white flex">
      {/* Left Section */}
      <div className="w-1/2 px-16 py-16 flex flex-col justify-between">
        <div>
          <p className="text-sm text-harafBlue  font-semibold mb-2">MAKE A DONATION</p>
          <h1 className="text-5xl font-bold font-serif text-gray-900 mb-4 leading-tight">
            Your Gift Changes a Life Today.
          </h1>
          <p className="text-lg text-gray-700 mb-2">
            100% of your donation goes directly to our programmes.
            <br />
            We publish full financial reports annually.
          </p>
        </div>

        {/* Donation Frequency */}
        <div className="mt-8 mb-3">
          <p className="text-xs font-semibold text-gray-500 mb-2">DONATION FREQUENCY</p>
          <div className="flex gap-2">
            <button
              onClick={() => setFrequency("one-time")}
              className={`px-6 py-3 rounded-md font-semibold text-lg ${
                frequency === "one-time"
                  ? "bg-harafBlue text-white"
                  : "bg-blue-100 text-harafBlue border-blue-300"
              }`}
            >
              ONE-TIME
            </button>
            <button
              onClick={() => setFrequency("monthly")}
              className={`px-6 py-3 rounded-md font-semibold text-lg ${
                frequency === "monthly"
                  ? "bg-harafBlue text-white"
                  : "bg-blue-100 text-harafBlue border-blue-300"
              }`}
            >
              MONTHLY
            </button>
            <button
              onClick={() => setFrequency("annually")}
              className={`px-6 py-3 rounded-md font-semibold text-lg ${
                frequency === "annually"
                  ? "bg-harafBlue text-white"
                  : "bg-blue-100 text-harafBlue border-blue-300"
              }`}
            >
              ANNUALLY
            </button>
          </div>
        </div>

        {/* Select Amount */}
        <div className="mb-3">
          <p className="text-xs font-semibold text-gray-500 mb-2 mt-3">SELECT AMOUNT</p>
          <div className="grid grid-cols-3 gap-3">
            {[5000, 10000, 25000, 50000, 100000].map((amt) => (
              <button
                key={amt}
                onClick={() => setAmount(amt)}
                className={`px-6 py-4 border font-semibold text-xl rounded-md ${
                  amount === amt
                    ? "bg-harafBlue text-white border-harafBlue"
                    : "bg-white text-harafBlue border-blue-300"
                }`}
              >
                ₦{amt.toLocaleString()}
              </button>
            ))}
            {/* Custom Amount */}
            <button
              className="px-6 py-4 border font-semibold text-xl rounded-md bg-white text-harafBlue border-blue-300"
              style={{ gridColumn: "span 1" }}
            >
              Custom
            </button>
          </div>
        </div>

        {/* Amount Info */}
        <div className="mt-6 mb-8">
          <div className="flex">
            <div className="bg-blue-100 px-6 py-4 rounded-md border-l-4 border-yellow-400">
              <span className="italic text-gray-700 font-serif">
                ₦10,000 provides{" "}
                <span className="text-orange-500 italic font-semibold">
                  clean water for a family for 3 months
                </span>{" "}
                — enough to change a daily routine forever.
              </span>
            </div>
          </div>
        </div>

        {/* Pay With, Button */}
        <div>
          <p className="text-xs font-semibold text-gray-500 mb-7">PAY WITH</p>
          <button className="w-full bg-harafBlue py-4 rounded-md shadow-lg font-semibold text-white text-lg mb-6 transition hover:bg-harafBlue">
            DONATE NOW — MAKE IT COUNT
          </button>
          {/* Info Bar */}
          <div className="flex justify-between items-center max-w-xl mx-auto mt-4">
            <div className="flex flex-col items-center">
              {/* Lock Icon */}
              <svg width="24" height="24" fill="none" viewBox="0 0 24 24"><path d="M16 10V8a4 4 0 10-8 0v2" stroke="#37a56b" strokeWidth="2" strokeLinecap="round" /></svg>
              <span className="text-xs font-semibold text-gray-500">SECURE & ENCRYPTED</span>
            </div>
            <div className="flex flex-col items-center">
              {/* Check Icon */}
              <svg width="24" height="24" fill="none" viewBox="0 0 24 24"><path d="M5 13l4 4L19 7" stroke="#4caf50" strokeWidth="2" strokeLinecap="round" /></svg>
              <span className="text-xs font-semibold text-gray-500">NGO REGISTERED</span>
            </div>
            <div className="flex flex-col items-center">
              {/* Receipt Icon */}
              <svg width="24" height="24" fill="none" viewBox="0 0 24 24"><rect x="5" y="5" width="14" height="14" rx="2" stroke="#8bc34a" strokeWidth="2" /></svg>
              <span className="text-xs font-semibold text-gray-500">RECEIPTS ISSUED</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Right Section */}
      <div className="w-1/2 bg-harafBlue flex flex-col px-10 py-10">
        <div className="mb-8">
          {/* Image placeholder */}
          <div className="w-full h-64 rounded-md overflow-hidden bg-blue-200 flex items-center justify-center mb-8">
            <img
              src={DonateImage}
              alt="Donation Impact"
              className="object-cover w-full h-full"
            />
          </div>
        </div>
        <div>
          <h2 className="text-white text-4xl font-semibold font-playfair italic mb-5">
            Join 4,200+ Donors Making a Difference
          </h2>
          <p className="text-white text-base mb-8">
            Every month, thousands of Nigerians and friends <br />around the world choose to invest in rural dignity. <br />
            You’re in good company.
          </p>
          {/* Stats */}
          <div className="flex flex-col divide-y divide-gray-300 mt-2">
            <div className="flex gap-72 py-8">
              <span className="text-yellow-400 text-4xl font-bold font-playfair mr-3">14,000+</span>
              <span className="text-white text-sm">Families Reached</span>
            </div>
            <div className="flex gap-85 py-8">
              <span className="text-yellow-400 text-4xl font-bold font-playfair mr-3">320+</span>
              <span className="text-white text-sm">Clean Water Points</span>
            </div>
            <div className="flex gap-82 py-8">
              <span className="text-yellow-400 text-4xl font-bold font-playfair mr-3">5,600</span>
              <span className="text-white text-sm">Children in School</span>
            </div>
            <div className="flex gap-96 py-8">
              <span className="text-yellow-400 text-4xl font-bold font-playfair mr-3">87</span>
              <span className="text-white text-sm">Communities Served</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
