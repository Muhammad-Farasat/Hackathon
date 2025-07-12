import React from 'react';
import { NavLink } from 'react-router-dom';

const Footer = () => {
  return (
    <div className="bg-black text-gray-300 font-poppins">
      <footer className="px-6 md:px-16 lg:px-24 xl:px-32 pt-10 w-full">
        <div className="flex flex-col md:flex-row justify-between gap-10 border-b border-white/15 pb-8">
          {/* Logo and description */}
          <div className="md:max-w-lg">
            <div className="flex items-center gap-3">
              <svg
                width="40"
                height="40"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="4.706" cy="16" r="4.706" fill="#D9D9D9" />
                <circle cx="16.001" cy="4.706" r="4.706" fill="#D9D9D9" />
                <circle cx="16.001" cy="27.294" r="4.706" fill="#D9D9D9" />
                <circle cx="27.294" cy="16" r="4.706" fill="#D9D9D9" />
              </svg>
              <NavLink to="/">
                <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-gray-400 via-gray-200 to-white animate-pulse">
                  Capra
                </h1>
              </NavLink>
            </div>
            <p className="mt-6 text-sm text-gray-400 max-w-md">
              Your AI-powered voice assistant that understands your commands, streamlines your workflow, and enhances productivity with intelligent automation.
            </p>
          </div>

          {/* Links */}
          <div className="flex-1 flex flex-wrap md:justify-end gap-12 md:gap-20">
            <div>
              <h2 className="font-semibold mb-5 text-white tracking-wide">Company</h2>
              <ul className="text-sm space-y-2">
                <li><NavLink to="/" className="hover:text-indigo-400 transition">Home</NavLink></li>
                <li><NavLink to="/team" className="hover:text-indigo-400 transition">Team</NavLink></li>
                <li><NavLink to="/demo" className="hover:text-indigo-400 transition">Get demo</NavLink></li>
                <li><NavLink to="/team" className="hover:text-indigo-400 transition">About us</NavLink></li>
              </ul>
            </div>
            <div>
              <h2 className="font-semibold mb-5 text-white tracking-wide">Get in touch</h2>
              <div className="text-sm space-y-2 text-gray-400">
                <p>+1-212-456-7890</p>
                <p>contact@capra.ai</p>
              </div>
            </div>
          </div>
        </div>
        <p className="pt-6 text-center text-xs md:text-sm pb-6 text-gray-500">
          © 2024 Capra. All rights reserved.
        </p>
      </footer>
    </div>
  )
}

export default Footer;
