import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import myImage from '../assets/myImage.jpg';
import Navbar from './Navbar';


export default function HeroSection() {  

    return (
        <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="relative flex flex-col items-center font-poppins bg-black text-white pb-16 pt-8 bg-[url(https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/hero/bg-gradient-3.svg)] h-[100vh] bg-center bg-cover "
        >
            {/* Navigation */}
            

            <Navbar />

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
