'use client';

import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { useRouter } from 'next/navigation';
import { projects } from '@/lib/projectData';

export default function Projects() {
    const router = useRouter();

    const handleCardClick = (slug) => {
        router.push(`/projects/${slug}`);
    };

    return (
        <section id="projects" className="relative w-full py-24 px-6 md:px-12 z-20">
            <div className="max-w-7xl mx-auto">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="text-4xl md:text-5xl font-bold mb-12 text-center bg-gradient-to-b from-white to-gray-500 bg-clip-text text-transparent"
                >
                    Featured Projects
                </motion.h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            onClick={() => handleCardClick(project.slug)}
                            className="group relative bg-white/5 rounded-2xl overflow-hidden border border-white/10 hover:border-purple-500/50 transition-colors flex flex-col h-[450px] cursor-pointer"
                        >
                            {/* Image Area with Hover Overlay */}
                            <div className="h-48 bg-gray-900 w-full relative overflow-hidden group">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                    onError={(e) => {
                                        e.target.style.display = 'none';
                                        e.target.nextSibling.style.display = 'flex';
                                    }}
                                />
                                {/* Fallback if image fails */}
                                <div className="absolute inset-0 hidden items-center justify-center text-white/20 font-bold text-2xl uppercase tracking-widest bg-black/40">
                                    {project.title}
                                </div>

                                {/* Hover Overlay */}
                                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                                    <a
                                        href={project.demoLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        onClick={(e) => e.stopPropagation()}
                                        className="bg-white text-black px-4 py-2 rounded-full text-sm font-bold flex items-center gap-2 hover:bg-gray-200 transition-colors"
                                    >
                                        <FaExternalLinkAlt /> Live Tool
                                    </a>
                                    <a
                                        href={project.repoLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        onClick={(e) => e.stopPropagation()}
                                        className="bg-black text-white border border-white px-4 py-2 rounded-full text-sm font-bold flex items-center gap-2 hover:bg-white/20 transition-colors"
                                    >
                                        <FaGithub /> Source Code
                                    </a>
                                </div>
                            </div>

                            <div className="block flex-grow flex flex-col p-6">
                                <span className="text-sm font-mono text-purple-400 mb-2">{project.category}</span>
                                <h3 className="text-2xl font-bold text-white mb-3">{project.title}</h3>
                                <p className="text-gray-400 text-sm mb-6 flex-grow line-clamp-3">{project.shortDescription}</p>

                                <div className="flex flex-wrap gap-2 mb-6">
                                    {project.tech.map(t => (
                                        <span key={t} className="text-xs bg-white/10 px-2 py-1 rounded text-gray-300">{t}</span>
                                    ))}
                                </div>

                                <div className="flex gap-2 mt-auto">
                                    <span className="text-sm text-purple-400 font-semibold group-hover:underline">View Details &rarr;</span>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
