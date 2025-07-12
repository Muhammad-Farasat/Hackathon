import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import myImage from '../assets/myImage.jpg';


export default function HeroSection() {
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
                        <NavLink key={item} to={item.toLowerCase() === 'home' ? '/' : `/${item.toLowerCase()}`} className="relative overflow-hidden h-6 group">
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

            {/* Intro banner */}
            <motion.div
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1.2 }}
                className="flex items-center gap-2 border border-white/15 rounded-full px-4 py-2 text-sm mt-24"
            >
                <p>Get a free demo and see it in action.</p>
            </motion.div>

            {/* Hero Title */}
            <motion.h1
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1.3 }}
                className="text-4xl md:text-6xl text-center font-semibold max-w-3xl mt-5 bg-gradient-to-r from-white to-[#748298] text-transparent bg-clip-text"
            >
                AI Voice Assistant for Smart Commands
            </motion.h1>

            <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.4, duration: 1 }}
                className="text-slate-300 md:text-base line-clamp-3 max-md:px-2 text-center max-w-2xl mt-3"
            >
                Transform how you work with an intelligent agent that listens, understands, and executes your voice instructions seamlessly.
            </motion.p>

            <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1.2 }}
                className="grid grid-cols-1 gap-2 mt-8 text-sm"
            >
                <NavLink to='/demo' className="px-8 py-3 hover:cursor-pointer bg-indigo-600 hover:bg-indigo-700 transition rounded-full">
                    Get Started
                </NavLink>
            </motion.div>

            {/* Profile Photos */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.5 }}
                aria-label="Photos of leaders"
                className="mt-12 flex max-md:overflow-x-auto gap-6 max-w-4xl w-full pb-6"
            >
                {[
                    "https://images.unsplash.com/flagged/photo-1573740144655-bbb6e88fb18a?q=80&w=735&auto=format&fit=crop",
                    "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=687&auto=format&fit=crop",
                    "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=687&auto=format&fit=crop",
                    "https://images.unsplash.com/photo-1546961329-78bef0414d7c?q=80&w=687&auto=format&fit=crop",
                    "https://images.unsplash.com/photo-1639149888905-fb39731f2e6c?q=80&w=764&auto=format&fit=crop"
                ].map((src, i) => (
                    <motion.img
                        key={i}
                        whileHover={{ y: -5 }}
                        transition={{ type: 'spring', stiffness: 300 }}
                        alt=""
                        className="w-36 h-44 rounded-lg transition duration-300 object-cover flex-shrink-0"
                        src={src}
                    />
                ))}
            </motion.div>
        </motion.section>
    );
}
