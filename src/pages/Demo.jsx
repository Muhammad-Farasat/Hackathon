import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';

export const Demo = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeNavbar = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="relative flex flex-col items-center font-poppins bg-black text-white pb-16 pt-8 bg-[url(https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/hero/bg-gradient-3.svg)] h-[100vh] bg-center bg-cover"
    >
      {/* Navigation */}
      <nav className="flex items-center justify-center border mx-4 max-md:w-full max-md:justify-between border-slate-700 px-6 py-4 rounded-full text-white text-sm">
        <NavLink to="/">
          <div className="flex gap-2 items-center justify-center">
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="4.706" cy="16" r="4.706" fill="#D9D9D9" />
              <circle cx="16.001" cy="4.706" r="4.706" fill="#D9D9D9" />
              <circle cx="16.001" cy="27.294" r="4.706" fill="#D9D9D9" />
              <circle cx="27.294" cy="16" r="4.706" fill="#D9D9D9" />
            </svg>
            <h1 className="text-3xl hover:cursor-pointer md:text-4xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-gray-400 via-gray-200 to-white animate-pulse">
              Capra
            </h1>
          </div>
        </NavLink>

        <div className="hidden md:flex items-center mt-3 gap-6 ml-7">
          {['Home', 'Team'].map((item) => (
            <NavLink
              key={item}
              to={item.toLowerCase() === 'home' ? '/' : `/${item.toLowerCase()}`}
              className="relative overflow-hidden h-6 group"
            >
              <span className="block group-hover:-translate-y-full transition-transform duration-300">{item}</span>
              <span className="block absolute top-full left-0 group-hover:translate-y-[-100%] transition-transform duration-300">{item}</span>
            </NavLink>
          ))}
        </div>

        <div className="hidden ml-14 md:flex items-center gap-4">
          <NavLink to='/demo' className="bg-white hover:cursor-pointer hover:shadow-[0px_0px_30px_14px] shadow-[0px_0px_30px_7px] hover:shadow-white/50 shadow-white/50 text-black px-4 py-2 rounded-full text-sm font-medium hover:bg-slate-100 transition duration-300">
            DEMO
          </NavLink>
        </div>

        <button onClick={toggleMobileMenu} className="md:hidden text-gray-400">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
            <path d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>

        {isMobileMenuOpen && (
          <div className="absolute top-0 text-base left-0 bg-black w-full h-full flex-col items-center justify-center gap-4 flex">
            <NavLink to="/" onClick={closeNavbar} className="hover:text-indigo-600">Home</NavLink>
            <NavLink to="/team" onClick={closeNavbar} className="hover:text-indigo-600">Team</NavLink>
            <NavLink to="/demo" onClick={closeNavbar}>
              <button className="bg-white hover:shadow-[0px_0px_30px_14px] shadow-[0px_0px_30px_7px] hover:shadow-white/50 shadow-white/50 text-black px-4 py-2 rounded-full text-sm font-medium hover:bg-slate-100 transition duration-300">
                DEMO
              </button>
            </NavLink>
          </div>
        )}
      </nav>
    </motion.section>
  )
}
