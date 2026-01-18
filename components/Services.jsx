'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { FaCode, FaServer, FaTimes } from 'react-icons/fa';

const services = [
    {
        icon: FaCode,
        title: "Frontend Developer",
        description: "I build responsive, high-performance web applications using React.js, Next.js, and Tailwind CSS. My focus is on creating seamless user experiences with clean code and modern design patterns.",
        features: ["SPA Development", "Component-Based Architecture", "Performance Optimization", "Responsive Design"]
    },
    {
        icon: FaServer,
        title: "Full-Stack Development",
        description: "I develop scalable backend systems with Node.js, Express, and MongoDB. From API design to database management, I ensure your application is robust, secure, and efficient.",
        features: ["RESTful API Design", "Database Modeling", "Authentication & Security", "Server-Side Logic"]
    }
];

export default function Services() {
    const [selectedService, setSelectedService] = useState(null);

    return (
        <section id="services" className="py-24 px-6 md:px-12 text-white relative">
            <div className="max-w-6xl mx-auto">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="text-4xl md:text-5xl font-bold mb-16 text-center bg-gradient-to-b from-white to-gray-500 bg-clip-text text-transparent"
                >
                    Services
                </motion.h2>

                <div className="flex flex-wrap justify-center gap-6 mt-8">
                    {services.map((service, idx) => (
                        <motion.div
                            key={service.title}
                            initial={{ opacity: 0, y: 50, scale: 0.9 }}
                            whileInView={{ opacity: 1, y: 0, scale: 1 }}
                            transition={{ duration: 0.5, delay: idx * 0.2 }}
                            className="bg-white/5  border border-white/10 transition-all group cursor-pointer flex flex-col items-start justify-between min-h-[250px] w-full md:w-[35%] p-8 rounded-2xl"
                            onClick={() => setSelectedService(service)}
                        >
                            <div>
                                <div className="text-4xl text-purple-400 mb-6">
                                    <service.icon />
                                </div>
                                <h3 className="text-2xl font-bold mb-2 leading-tight">{service.title}</h3>
                            </div>

                            <div className="flex text-purple-400 items-center text-gray-400 text-sm font-medium group-hover:text-white transition-colors mt-6">
                                Learn More <span className="ml-2">→</span>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Modal */}
            <AnimatePresence>
                {selectedService && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 flex items-center justify-center px-4 bg-black/80 backdrop-blur-sm"
                        onClick={() => setSelectedService(null)}
                    >
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            className="bg-[#1a1a1a] p-8 md:p-12 rounded-3xl max-w-2xl w-full relative border border-white/10 shadow-2xl"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <button
                                onClick={() => setSelectedService(null)}
                                className="absolute top-6 right-6 text-gray-400 hover:text-white transition-colors"
                            >
                                <FaTimes className="text-2xl" />
                            </button>

                            <div className="flex items-center mb-8">
                                <div className="w-16 h-16 bg-purple-500/10 rounded-2xl flex items-center justify-center text-purple-400 mr-6">
                                    <selectedService.icon className="text-3xl" />
                                </div>
                                <h3 className="text-3xl font-bold">{selectedService.title}</h3>
                            </div>

                            <p className="text-gray-300 text-lg leading-relaxed mb-8">
                                {selectedService.description}
                            </p>

                            <h4 className="text-xl font-semibold mb-4 text-white">Key Features</h4>
                            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {selectedService.features.map((feature, i) => (
                                    <li key={i} className="flex items-center text-gray-400">
                                        <span className="w-2 h-2 bg-purple-500 rounded-full mr-3" />
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
}
