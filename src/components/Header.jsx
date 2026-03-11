import React from 'react';
import { Link } from 'react-router-dom';
import harafLogo from '../assets/harafLogo.png';

function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full flex items-center justify-between px-8 lg:px-16 py-4 border-b border-b-[rgba(26,120,194,0.12)] bg-[#F8FAFC] font-dm-sans" style={{ height: '88px' }}>
      <div className="flex items-center">
        <Link to="/">
        <div className='flex space-x-2'>
          <img src={harafLogo} alt="Haraf Logo" className="h-10 sm:h-12 w-auto" />
          <div className='text-harafBlue flex flex-col space-y-0'>
            <span className="text-2xl font-playfair font-bold  tracking-wide">HARAF</span>
            <span className="text-xs font-dm-sans tracking-widest">HOPE & RURAL AID FOUNDATION</span>
          </div>
        </div>
        </Link>
      </div>

      <nav className="hidden md:flex items-center space-x-8 lg:space-x-12">
        <div className="flex items-center space-x-10">
          {["ABOUT US", "OUR WORK", "IDEAS", "GET INVOLVED"].map((item) => (
            <Link
              key={item}
              to={item === "ABOUT US" ? "/about_us" : item === "OUR WORK" ? "/our_work" : item === "IDEAS" ? "/ideas" : "#"}
              className="text-midBrown font-medium text-sm tracking-wide hover:text-harafBlue transition-colors"
            >
              {item}
            </Link>
          ))}
        </div>
        
        <div className="flex items-center">
          <Link to="/donate" className="bg-harafYellow text-primary font-bold text-sm tracking-wide px-8 py-3 hover:opacity-90 transition-opacity">
            DONATE NOW
          </Link>
        </div>
      </nav>

    </header>
  );
}

export default Header;

