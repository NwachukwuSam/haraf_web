import React from 'react';
import { Link } from 'react-router-dom';
import harafLogo from '../assets/harafLogo.png';

function Footer() {
  return (
    <footer className="w-full bg-navyDark pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6 md:px-8 xl:px-16">
        
        {/* Main Footer Content */}
        <div className="flex flex-col lg:flex-row justify-between gap-12 lg:gap-8 mb-16">
          
          {/* Column 1: Logo & Slogan */}
          <div className="flex flex-col w-full lg:w-1/4">
            <Link to="/" className="mb-4 inline-block">
            <div className='flex space-x-2'>
              <img src={harafLogo} alt="HARAF Logo" className="h-12 w-auto object-contain border border-harafBlue rounded-full" />
              <div className='flex flex-col text-white space-y-0'>
                <span className="text-2xl font-playfair font-bold  tracking-wide">HARAF</span>
                <span className="text-xs font-dm-sans tracking-widest text-[#EBF4F6] opacity-60 font-light">HOPE & RURAL AID FOUNDATION</span>
              </div>
            </div>

            </Link>
            <p className="font-cormorant italic text-[18px] mb-8" style={{ color: 'rgba(235, 244, 252, 0.55)' }}>
              Reaching the Unreached Without Barriers...
            </p>
            
            {/* Social Icons (18px) */}
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-harafYellow transition-colors flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"><path fill="currentColor" d="M12 2.04c-5.5 0-10 4.49-10 10.02c0 5 3.66 9.15 8.44 9.9v-7H7.9v-2.9h2.54V9.85c0-2.51 1.49-3.89 3.78-3.89c1.09 0 2.23.19 2.23.19v2.47h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.78l-.45 2.9h-2.33v7a10 10 0 0 0 8.44-9.9c0-5.53-4.5-10.02-10-10.02"/></svg>
              </a>
              <a href="#" className="text-white hover:text-harafYellow transition-colors flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 16 16"><path fill="currentColor" d="m9.237 7.004l4.84-5.505H12.93L8.727 6.28L5.371 1.5H1.5l5.075 7.228L1.5 14.499h1.147l4.437-5.047l3.545 5.047H14.5zM7.666 8.791l-.514-.72L3.06 2.344h1.762l3.302 4.622l.514.72l4.292 6.007h-1.761z"/></svg>
              </a>
              <a href="#" className="text-white hover:text-harafYellow transition-colors flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"><path fill="currentColor" d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4zm9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8A1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5a5 5 0 0 1-5 5a5 5 0 0 1-5-5a5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3"/></svg>
              </a>
            </div>
          </div>

          <div className='grid md:grid-cols-4 sm:grid-cols-3 sm:space-y-6 grid-cols-2 space-y-6'>
            {/* Column 2: ABOUT */}
            <div className="flex flex-col">
              <h4 className="font-dm-sans text-harafYellow text-[11px] font-bold tracking-widest uppercase mb-6">
                ABOUT
              </h4>
              <ul className="space-y-4 font-dm-sans text-[14px]" style={{ color: 'rgba(235, 244, 252, 0.55)' }}>
                <li><Link to="/about_us" className="hover:text-harafYellow transition-colors">Our Story</Link></li>
                <li><Link to="about_us" className="hover:text-harafYellow transition-colors">Our Team</Link></li>
                <li><Link to="/ideas" className="hover:text-harafYellow transition-colors">Essay</Link></li>
                <li><Link to="/media" className="hover:text-harafYellow transition-colors">Press & Media</Link></li>
                <li><Link to="/contact-us" className="hover:text-harafYellow transition-colors">Contact Us</Link></li>
              </ul>
            </div>

            {/* Column 3: PROGRAMS */}
            <div className="flex flex-col">
              <h4 className="font-dm-sans text-harafYellow text-[11px] font-bold tracking-widest uppercase mb-6">
                PROGRAMS
              </h4>
              <ul className="space-y-4 font-dm-sans text-[14px]" style={{ color: 'rgba(235, 244, 252, 0.55)' }}>
                <li><Link to="/our_work" className="hover:text-harafYellow transition-colors">Food Security</Link></li>
                <li><Link to="/our_work" className="hover:text-harafYellow transition-colors">Clean Water</Link></li>
                <li><Link to="/our_work" className="hover:text-harafYellow transition-colors">Education</Link></li>
                <li><Link to="/our_work" className="hover:text-harafYellow transition-colors">Healthcare</Link></li>
                <li><Link to="/our_work" className="hover:text-harafYellow transition-colors">Livelihoods</Link></li>
              </ul>
            </div>

            {/* Column 4: GET INVOLVED */}
            <div className="flex flex-col">
              <h4 className="font-dm-sans text-harafYellow text-[11px] font-bold tracking-widest uppercase mb-6">
                GET INVOLVED
              </h4>
              <ul className="space-y-4 font-dm-sans text-[14px]" style={{ color: 'rgba(235, 244, 252, 0.55)' }}>
                <li><Link to="/donate" className="hover:text-harafYellow transition-colors">Donate</Link></li>
                <li><Link to="/contact-us" className="hover:text-harafYellow transition-colors">Volunteer</Link></li>
                <li><Link to="/contact_us" className="hover:text-harafYellow transition-colors">Partner With Us</Link></li>
                <li><Link to="donate" className="hover:text-harafYellow transition-colors">Corporate Giving</Link></li>
                <li><Link to="/donate" className="hover:text-harafYellow transition-colors">In Memoriam Giving</Link></li>
              </ul>
            </div>

            {/* Column 5: CONTACT */}
            <div className="flex flex-col">
              <h4 className="font-dm-sans text-harafYellow text-[11px] font-bold tracking-widest uppercase mb-6">
                CONTACT
              </h4>
              <ul className="space-y-4 font-dm-sans text-[13px]" style={{ color: 'rgba(235, 244, 252, 0.55)' }}>
                <li className="flex items-center">
                  <svg className="w-4 h-4 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  info@haraf.org.ng
                </li>
                <li className="flex items-center">
                  <svg className="w-4 h-4 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  0806 960 1527
                </li>
                <li className="flex items-start">
                  <svg className="w-4 h-4 mr-3 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span>Jimeta 640101, Adamawa</span>
                </li>
              </ul>
            </div>
          </div>


        </div>

        {/* Divider Line */}
        <div 
          className="w-full h-px mb-6" 
          style={{ backgroundColor: 'rgba(26, 120, 194, 0.4)' }}
        ></div>

        {/* Bottom Footer Text */}
        <div className="flex flex-col md:flex-row justify-between items-center text-[11px] font-dm-sans" style={{ color: 'rgba(235, 244, 252, 0.3)' }}>
          <p className="mb-4 md:mb-0">
            © 2026 <span style={{ color: 'rgba(235, 244, 252, 0.6)' }}>Hope & Rural Aid Foundation</span>. All rights reserved. Registered NGO CAC No. CAC/IT/85536
          </p>
          <div className="flex space-x-6">
            <Link to="#" className="hover:text-harafYellow transition-colors">Privacy Policy</Link>
            <Link to="#" className="hover:text-harafYellow transition-colors">Terms of Use</Link>
            <Link to="#" className="hover:text-harafYellow transition-colors">Contact Us</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}

export default Footer;
