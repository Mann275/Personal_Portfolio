'use client';

import { motion } from 'framer-motion';
import { FaJava, FaHtml5, FaCss3Alt, FaJs, FaDatabase, FaReact, FaNodeJs, FaGitAlt, FaGithub, FaFigma } from 'react-icons/fa';
import { SiNextdotjs, SiTailwindcss, SiMongodb, SiMysql, SiPostman, SiRender } from 'react-icons/si';
import { TbApi } from 'react-icons/tb';

const skillCategories = [
    {
        title: "Programming Languages",
        skills: [
            { name: "Java", icon: FaJava, color: "text-red-500" },
            { name: "HTML", icon: FaHtml5, color: "text-orange-500" },
            { name: "CSS", icon: FaCss3Alt, color: "text-blue-500" },
            { name: "JavaScript", icon: FaJs, color: "text-yellow-400" },
            { name: "SQL", icon: FaDatabase, color: "text-gray-400" }
        ]
    },
    {
        title: "Frontend",
        skills: [
            { name: "React", icon: FaReact, color: "text-cyan-400" },
            { name: "Next.js", icon: SiNextdotjs, color: "text-white" },
            { name: "Tailwind CSS", icon: SiTailwindcss, color: "text-cyan-300" }
        ]
    },
    {
        title: "Backend",
        skills: [
            { name: "Node.js", icon: FaNodeJs, color: "text-green-500" },
            { name: "REST APIs", icon: TbApi, color: "text-purple-400" }
        ]
    },
    {
        title: "Database",
        skills: [
            { name: "MongoDB", icon: SiMongodb, color: "text-green-400" },
            { name: "MySQL", icon: SiMysql, color: "text-blue-600" }
        ]
    },
    {
        title: "Tools & Technologies",
        skills: [
            { name: "Git", icon: FaGitAlt, color: "text-red-500" },
            { name: "GitHub", icon: FaGithub, color: "text-white" },
            { name: "Postman", icon: SiPostman, color: "text-orange-500" },
            { name: "Figma", icon: FaFigma, color: "text-pink-500" },
            { name: "Render", icon: SiRender, color: "text-white" }
        ]
    }
];

export default function Skills() {
    return (
        <section id="skills" className="py-12 px-6 md:px-12 text-white">
            <div className="max-w-6xl mx-auto">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="text-4xl md:text-5xl font-bold mb-12 text-center bg-gradient-to-b from-white to-gray-500 bg-clip-text text-transparent"
                >
                    Skills
                </motion.h2>

                <div className="flex flex-wrap justify-center gap-6">
                    {skillCategories.map((cat, idx) => (
                        <motion.div
                            key={cat.title}
                            initial={{ opacity: 0, y: 50, scale: 0.9 }}
                            whileInView={{ opacity: 1, y: 0, scale: 1 }}
                            transition={{ duration: 0.5, delay: idx * 0.1 }}
                            viewport={{ once: true, amount: 0.1 }}
                            className="bg-white/5 p-6 rounded-xl border border-white/10 transition-all w-full md:w-[calc(50%-12px)] lg:w-[350px] flex flex-col"
                        >
                            <h3 className="text-xl font-semibold mb-4 text-gray-200 border-b border-white/10 pb-2 text-center">{cat.title}</h3>
                            <div className="grid grid-cols-2 gap-4 flex-grow content-start">
                                {cat.skills.map((skill) => (
                                    <div key={skill.name} className="flex items-center space-x-3 p-2 rounded-lg hover:bg-white/5 transition-colors">
                                        <skill.icon className={`text-2xl ${skill.color}`} />
                                        <span className="text-sm text-gray-300 font-medium">{skill.name}</span>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
