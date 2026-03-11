import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import harafLogo from '../assets/harafLogo.png';

function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [isMobileMenuOpen]);

  const navItems = [
    { name: "HOME", path: "/" },
    { name: "ABOUT US", path: "/about_us" },
    { name: "OUR WORK", path: "/our_work" },
    { name: "IDEAS", path: "/ideas" },
    // { name: "GET INVOLVED", path: "#" }
  ];

  const activeStyle = ({ isActive }) => 
    `relative font-medium text-sm tracking-wide transition-colors ${
      isActive ? 'text-harafBlue after:content-[""] after:absolute after:left-0 after:-bottom-1 after:w-full after:h-[2px] after:bg-harafYellow' : 'text-midBrown hover:text-harafBlue transition-colors'
    }`;

  const mobileActiveStyle = ({ isActive }) => 
    `relative text-xl font-dm-sans font-medium tracking-wide transition-colors text-center uppercase ${
      isActive ? 'text-harafBlue after:content-[""] after:absolute after:left-1/2 after:-bottom-1 after:-translate-x-1/2 after:w-8 after:h-[2px] after:bg-harafYellow' : 'text-midBrown hover:text-harafBlue transition-colors'
    }`;

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-[60] w-full flex items-center justify-between px-6 md:px-8 lg:px-16 py-4 border-b border-b-[rgba(26,120,194,0.12)] bg-[#F8FAFC] font-dm-sans" style={{ height: '88px' }}>
        <div className="flex items-center">
          <Link to="/">
            <div className='flex space-x-2 items-center'>
              <img src={harafLogo} alt="Haraf Logo" className="h-10 sm:h-12 w-auto" />
              <div className='text-harafBlue flex flex-col space-y-0'>
                <span className="text-xl sm:text-2xl font-playfair font-bold tracking-wide leading-tight">HARAF</span>
                <span className="text-[10px] sm:text-xs font-dm-sans tracking-widest hidden sm:block">HOPE & RURAL AID FOUNDATION</span>
              </div>
            </div>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-8 lg:space-x-12">
          <div className="flex items-center space-x-10">
            {navItems.map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                className={activeStyle}
              >
                {item.name}
              </NavLink>
            ))}
          </div>
          
          <div className="flex items-center">
            <Link to="/donate" className="bg-harafYellow text-primary font-bold text-sm tracking-wide px-8 py-3 hover:opacity-90 transition-opacity">
              DONATE NOW
            </Link>
          </div>
        </nav>

        {/* Mobile Hamburger Icon */}
        <button 
          className="lg:hidden text-harafBlue p-2 focus:outline-none"
          onClick={() => setIsMobileMenuOpen(true)}
          aria-label="Open Menu"
        >
          <svg className="w-8 h-8 font-bold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M4 6h16M4 12h16m-7 6h7"></path>
          </svg>
        </button>
      </header>

      {/* Mobile Menu Backdrop */}
      <div 
        className={`fixed inset-0 backdrop-blur-sm z-[70] lg:hidden transition-opacity duration-300 ${isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
        onClick={() => setIsMobileMenuOpen(false)}
      />

      {/* Mobile Menu Drawer */}
      <div 
        className={`fixed top-0 right-0 h-full w-[80%] max-w-sm bg-[#F8FAFC] z-[80] lg:hidden transform transition-transform duration-300 ease-in-out flex flex-col ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Close Button Container */}
        <div className="flex justify-end p-6 pr-8 mt-2">
          <button 
            onClick={() => setIsMobileMenuOpen(false)}
            className="text-harafYellow hover:text-harafBlue focus:outline-none transition-colors"
            aria-label="Close Menu"
          >
            <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>
        </div>

        {/* Navigation Links */}
        <div className="flex flex-col items-center justify-center flex-grow space-y-12 pb-24">
          {navItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              onClick={() => setIsMobileMenuOpen(false)}
              className={mobileActiveStyle}
            >
              {item.name.replace(" US", "")}
            </NavLink>
          ))}
          
          {/* Donate Item */}
          <div className="flex items-center">
            <Link to="/donate" className="bg-harafYellow text-primary font-bold text-sm tracking-wide px-8 py-3 hover:opacity-90 transition-opacity">
              DONATE NOW
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
