import React from 'react';
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar'; // Assuming Navbar is in the components folder

// SVG Icons for Mission, Vision, and Values sections
const MissionIcon = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 012-2h2a2 2 0 012 2v6m-8 0h12A2 2 0 0023 17V7a2 2 0 00-2-2H3a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
);

const VisionIcon = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
    </svg>
);

const ValuesIcon = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
    </svg>
);

export const About = () => {
    // Data for the timeline section
    const timelineEvents = [
        { year: '2021', title: 'The Genesis', description: 'Capra was born from a shared vision to innovate and a passion for technology. Our journey started in a small garage with a big idea.' },
        { year: '2022', title: 'First Milestone', description: 'We launched our first major project, setting the standard for our commitment to quality and excellence, and gaining our first wave of satisfied clients.' },
        { year: '2023', title: 'Expanding Horizons', description: 'Our team grew, bringing in new talent and diverse skills. We moved into a new office to accommodate our expanding family of creators.' },
        { year: '2024', title: 'Leading the Industry', description: 'Recognized for our innovative solutions, we cemented our place as a forward-thinking company in the tech industry.' },
        { year: 'Present', title: 'Future Forward', description: 'We continue to push the boundaries, driven by our core values and the ambition to create technology that makes a difference.' }
    ];

    return (
         <div className="relative bg-black text-white font-poppins min-h-screen">
            <Navbar />

            {/* Hero Section */}
            <motion.section
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.2 }}
                className="relative h-screen flex items-center justify-center text-center bg-cover bg-center"
                style={{ backgroundImage: "url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop')" }}
            >
                <div className="absolute inset-0 bg-black opacity-60"></div>
                <div className="relative z-10 px-4">
                    <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-tight">
                        We are <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-500">Capra</span>
                    </h1>
                    <p className="mt-4 text-lg md:text-xl max-w-3xl mx-auto text-gray-300">
                        "Coming together is a beginning. Keeping together is progress. Working together is success." - Henry Ford
                    </p>
                </div>
            </motion.section>

            {/* Our Story Section */}
            <section className="py-20 px-4">
                <div className="container mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Our Story</h2>
                    <div className="relative wrap overflow-hidden p-10 h-full">
                        <div className="border-2-2 absolute border-opacity-20 border-white h-full border" style={{ left: '50%' }}></div>
                        {timelineEvents.map((event, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8 }}
                                className={`mb-8 flex justify-between items-center w-full ${index % 2 === 0 ? 'flex-row-reverse left-timeline' : 'right-timeline'}`}
                            >
                                <div className="order-1 w-5/12"></div>
                                <div className="z-20 flex items-center order-1 bg-purple-800 shadow-xl w-8 h-8 rounded-full">
                                    <h1 className="mx-auto font-semibold text-lg text-white">{index + 1}</h1>
                                </div>
                                <div className="order-1 bg-gray-800 rounded-lg shadow-xl w-5/12 px-6 py-4">
                                    <h3 className="mb-3 font-bold text-white text-xl">{event.year} - {event.title}</h3>
                                    <p className="text-sm leading-snug tracking-wide text-gray-300 text-opacity-100">{event.description}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Mission, Vision, Values Section */}
            <section className="bg-gray-900 py-20 px-4">
                <div className="container mx-auto text-center">
                    <div className="grid md:grid-cols-3 gap-12">
                        <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
                            <div className="p-8 bg-gray-800 rounded-lg">
                                <MissionIcon className="h-12 w-12 mx-auto text-purple-400 mb-4" />
                                <h3 className="text-2xl font-bold mb-2">Our Mission</h3>
                                <p className="text-gray-400">To empower our clients by delivering innovative and reliable software solutions that drive growth, efficiency, and success in a rapidly evolving digital world.</p>
                            </div>
                        </motion.div>
                        <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.2 }}>
                            <div className="p-8 bg-gray-800 rounded-lg">
                                <VisionIcon className="h-12 w-12 mx-auto text-purple-400 mb-4" />
                                <h3 className="text-2xl font-bold mb-2">Our Vision</h3>
                                <p className="text-gray-400">To be a leading force in the technology industry, recognized for our creativity, integrity, and the transformative impact we have on businesses and communities.</p>
                            </div>
                        </motion.div>
                        <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.4 }}>
                            <div className="p-8 bg-gray-800 rounded-lg">
                                <ValuesIcon className="h-12 w-12 mx-auto text-purple-400 mb-4" />
                                <h3 className="text-2xl font-bold mb-2">Our Values</h3>
                                <p className="text-gray-400">We are committed to collaboration, continuous learning, and a client-first approach. We believe in building strong relationships based on trust and transparency.</p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* CTA to Team Page */}
            <section className="py-20 text-center">
                <h2 className="text-3xl font-bold mb-4">The Minds Behind the Magic</h2>
                <p className="text-lg text-gray-400 mb-8">Great things in business are never done by one person. They're done by a team of people.</p>
                <NavLink to="/team">
                    <button className="bg-gradient-to-r from-purple-500 to-indigo-600 text-white font-bold py-3 px-8 rounded-full hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300 transform hover:scale-105">
                        Meet The Team
                    </button>
                </NavLink>
            </section>
        </div>
    );
}