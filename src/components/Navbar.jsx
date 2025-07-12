import { X } from 'lucide-react';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';

export default function Navbar() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    return (
        <nav className="relative z-50 flex items-center border mx-4 max-md:w-full max-md:justify-between border-slate-700 px-6 py-4 rounded-full text-white bg-gray-700 text-sm">
            <NavLink to="/">
                <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-gray-600 via-gray-300 to-gray-100 animate-pulse">
                    Capra
                </h1>
            </NavLink>

            {/* Desktop Links */}
            <div className="hidden md:flex items-center gap-6 ml-7">
                {['Home', 'Team'].map((item) => (
                    <NavLink
                        key={item}
                        to={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                        className="relative overflow-hidden h-6 group"
                        onClick={() => setIsMobileMenuOpen(false)}
                    >
                        <span className="block group-hover:-translate-y-full transition-transform duration-300">
                            {item}
                        </span>
                        <span className="block absolute top-full left-0 group-hover:translate-y-[-100%] transition-transform duration-300">
                            {item}
                        </span>
                    </NavLink>
                ))}
            </div>

            {/* Desktop Buttons */}
            <div className="hidden ml-14 md:flex items-center gap-4">
                <NavLink
                    to="/demo"
                    className="bg-white hover:shadow-[0px_0px_30px_14px] shadow-[0px_0px_30px_7px] hover:shadow-white/50 shadow-white/50 text-black px-4 py-2 rounded-full text-sm font-medium hover:bg-slate-100 transition duration-300"
                    onClick={() => setIsMobileMenuOpen(false)}
                >
                    DEMO
                </NavLink>
            </div>

            {/* Mobile Menu Toggle */}
            <button
                onClick={() => setIsMobileMenuOpen((prev) => !prev)}
                className="md:hidden text-white focus:outline-none"
            >
                <svg
                    className="w-7 h-7"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                >
                    <path d="M4 6h16M4 12h16M4 18h16" />
                </svg>
            </button>

            {/* Mobile Menu Overlay */}
            {isMobileMenuOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-90 flex flex-col items-center justify-center gap-6 text-lg md:hidden transition-all duration-300">

                    <button
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="absolute top-4 right-4 text-white hover:text-gray-300 transition"
                        aria-label="Close menu"
                    >
                        <X className="w-6 h-6" />
                    </button>

                    <NavLink
                        to="/"
                        className="hover:text-indigo-400 transition"
                        onClick={() => setIsMobileMenuOpen(false)}
                    >
                        Home
                    </NavLink>
                    <NavLink
                        to="/team"
                        className="hover:text-indigo-400 transition"
                        onClick={() => setIsMobileMenuOpen(false)}
                    >
                        Team
                    </NavLink>
                    <NavLink
                        to="/demo"
                        className="hover:text-indigo-400 transition"
                        onClick={() => setIsMobileMenuOpen(false)}
                    >
                        Demo
                    </NavLink>
                </div>
            )}
        </nav>
    );
}
