import React from 'react';

const ContactForm = () => {
  return (
    <section className="w-full py-24 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="text-center mb-16">
          <p className="text-[#8CB4D6] text-sm tracking-[0.2em] font-dm-sans font-bold uppercase mb-4">
            JOIN THE MOVEMENT
          </p>
          <h2 className="text-primary text-4xl md:text-5xl lg:text-[56px] font-playfair font-bold leading-tight">
            Let's Build<br />
            Something Together.
          </h2>
        </div>

        {/* Content Section (Left Text, Right Form) */}
        <div className="flex flex-col md:flex-row justify-between gap-12 lg:gap-24 max-w-5xl mx-auto">
          
          {/* Left Column - Contact Info */}
          <div className="flex-1">
            <p className="text-[#333333] font-playfair text-[20px] md:text-[24px] leading-relaxed mb-16 max-w-md">
              Whether you're a donor, a partner, a volunteer, or a community in need — we want to hear from you.
            </p>

            <div className="space-y-8">
              {/* Email */}
              <div className="flex items-start">
                <svg className="w-5 h-5 text-[#8CB4D6] mt-1 mr-4 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span className="text-[#4B5563] font-dm-sans text-[16px]">info@haraf.org.ng</span>
              </div>

              {/* Address */}
              <div className="flex items-start">
                <svg className="w-5 h-5 text-[#8CB4D6] mt-1 mr-4 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
                <div className="text-[#4B5563] font-dm-sans text-[16px] leading-relaxed">
                  6FW2+3J9, Karewa,<br />
                  Jimeta 640101, Adamawa
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start">
                <svg className="w-5 h-5 text-[#8CB4D6] mt-1 mr-4 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
                <span className="text-[#4B5563] font-dm-sans text-[16px]">0806 960 1527</span>
              </div>
            </div>

            {/* Social Icons Placeholder */}
            <div className="flex space-x-4 mt-8 ml-9">
              <a href="#" className="w-6 h-6 rounded-full bg-[#1A78C2] text-white flex items-center justify-center hover:opacity-80 transition-opacity">
                {/* Simplified SVG icons for contact section similar to footer */}
                <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/></svg>
              </a>
              <a href="#" className="w-6 h-6 rounded-full bg-[#1A78C2] text-white flex items-center justify-center hover:opacity-80 transition-opacity">
                <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24"><path d="M22.675 0H1.325C.593 0 0 .593 0 1.325v21.351C0 23.407.593 24 1.325 24h11.495v-9.294h-3.126V11.08h3.126V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.31h3.587l-.467 3.626h-3.12V24h6.116c.73 0 1.323-.593 1.323-1.325V1.325C24 .593 23.407 0 22.675 0z"/></svg>
              </a>
              <a href="#" className="w-6 h-6 rounded-full bg-[#1A78C2] text-white flex items-center justify-center hover:opacity-80 transition-opacity">
                <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
              </a>
            </div>
          </div>

          {/* Right Column - Form */}
          <div className="flex-1">
            <form className="space-y-4">
              {/* Name */}
              <div>
                <input 
                  type="text" 
                  placeholder="Name *" 
                  className="w-full bg-[#EEF5FC] border border-transparent rounded-[4px] px-4 py-3 placeholder:text-[#4B5563] text-[#333333] font-dm-sans text-sm focus:outline-none focus:border-[#8CB4D6] transition-colors"
                  required
                />
              </div>

              {/* Email */}
              <div>
                <input 
                  type="email" 
                  placeholder="Email *" 
                  className="w-full bg-[#EEF5FC] border border-transparent rounded-[4px] px-4 py-3 placeholder:text-[#4B5563] text-[#333333] font-dm-sans text-sm focus:outline-none focus:border-[#8CB4D6] transition-colors"
                  required
                />
              </div>

              {/* Subject Select */}
              <div className="relative">
                <select 
                  className="w-full bg-[#EEF5FC] border border-transparent rounded-[4px] px-4 py-3 text-[#4B5563] font-dm-sans text-sm appearance-none focus:outline-none focus:border-[#8CB4D6] transition-colors"
                  defaultValue=""
                >
                  <option value="" disabled>Subject</option>
                  <option value="donation">Donation Inquiry</option>
                  <option value="partnership">Partnership Opportunity</option>
                  <option value="volunteer">Volunteer Information</option>
                  <option value="general">General Question</option>
                </select>
                <div className="absolute inset-y-0 right-0 flex items-center px-4 pointer-events-none">
                  <svg className="w-4 h-4 text-[#4B5563]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                </div>
              </div>

              {/* Message */}
              <div>
                <textarea 
                  placeholder="Message" 
                  rows="4"
                  className="w-full bg-[#EEF5FC] border border-transparent rounded-[4px] px-4 py-3 placeholder:text-[#4B5563] text-[#333333] font-dm-sans text-sm resize-none focus:outline-none focus:border-[#8CB4D6] transition-colors"
                ></textarea>
              </div>

              {/* Submit Button */}
              <button 
                type="submit" 
                className="w-full bg-harafBlue text-white font-dm-sans font-bold text-xs tracking-widest uppercase rounded-[4px] py-4 mt-2 hover:bg-[#14609c] transition-colors"
              >
                SEND MESSAGE
              </button>
            </form>
          </div>

        </div>

      </div>
    </section>
  );
};

export default ContactForm;
