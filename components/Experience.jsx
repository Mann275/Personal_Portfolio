'use client';

import { motion } from 'framer-motion';
import { FaBriefcase, FaCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa';

const experiences = [
    {
        id: 1,
        role: "MERN Stack Developer Intern",
        company: "Redspark Technologies",
        location: "Vadodara, Gujarat, India",
        period: "Jan 2026 – Present",
        description: [
            "Developing full-stack web applications independently under the guidance and regular code reviews of senior developers.",
            "Designing and implementing frontend components using React.js and modern JavaScript (ES6+) with a focus on clean UI and reusability.",
            "Building RESTful APIs using Node.js and Express.js and integrating them with MongoDB databases.",
            "Following real-world development practices including version control with Git, debugging, and iterative feature development.",
            "Actively incorporating feedback from senior engineers to improve code quality, performance, and architecture."
        ]
    },
    {
        id: 2,
        role: "Tech Team Lead",
        company: "Career Development Cell, Parul University",
        location: "Vadodara, Gujarat, India",
        period: "2023 - 2025",
        description: [
            "As a member of the CDC Technical team, I contributed to the 'Global Fun Fest 2023-24 & 2024-25'.",
            "Managed the technical logistics of large-scale events with over 500 attendees, ensuring smooth coordination and real-time responsiveness.",
            "Focused on optimizing workflows and improving operational efficiency to enhance the overall event experience."
        ]
    }
];

export default function Experience() {
    return (
        <section id="experience" className="py-12 px-6 md:px-12 text-white">
            <div className="max-w-5xl mx-auto">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="text-4xl md:text-5xl font-bold mb-10 text-center bg-gradient-to-b from-white to-gray-500 bg-clip-text text-transparent"
                >
                    Work & Experience
                </motion.h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {experiences.map((exp, idx) => (
                        <motion.div
                            key={exp.id}
                            initial={{ opacity: 0, y: 50, scale: 0.9 }}
                            whileInView={{ opacity: 1, y: 0, scale: 1 }}
                            transition={{ duration: 0.5, delay: idx * 0.1 }}
                            viewport={{ once: true, amount: 0.1 }}
                            className="bg-white/5 p-6 rounded-2xl border border-white/10 transition-all h-full flex flex-col mt-4"
                        >
                            <div className="mb-6 border-b border-white/5 pb-6">
                                <h3 className="text-2xl font-bold text-white mb-2 leading-tight">{exp.role}</h3>
                                <h4 className="text-lg text-purple-400 font-semibold mb-4">{exp.company}</h4>

                                <div className="flex flex-col space-y-2 text-sm text-gray-500">
                                    <div className="flex items-center gap-2">
                                        <FaCalendarAlt />
                                        <span>{exp.period}</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <FaMapMarkerAlt />
                                        <span>{exp.location}</span>
                                    </div>
                                </div>
                            </div>

                            <ul className="space-y-3 flex-grow">
                                {exp.description.map((item, i) => (
                                    <li key={i} className="flex items-start text-gray-300 text-sm leading-relaxed">
                                        <span className="mr-3 mt-1.5 min-w-[6px] h-1.5 bg-blue-500 rounded-full flex-shrink-0" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
