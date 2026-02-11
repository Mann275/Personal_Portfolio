"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { projects } from "@/lib/projectData";
import { FaGithub, FaExternalLinkAlt, FaArrowLeft } from "react-icons/fa";

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-[#121212] text-white pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <Link
          href="/#projects"
          className="inline-flex items-center text-gray-400 hover:text-white mb-8 transition-colors group"
        >
          <FaArrowLeft className="mr-2" /> Back to Home
        </Link>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-b from-white to-gray-500 bg-clip-text text-transparent"
        >
          All Projects
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-xl text-gray-400 mb-16"
        >
          A collection of my recent work and side projects
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative bg-white/5 rounded-2xl overflow-hidden border border-white/10 hover:border-purple-500/50 transition-all duration-300 flex flex-col h-[500px]"
            >
              {/* Image Area */}
              <div className="h-56 bg-gray-900 w-full relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  onError={(e) => {
                    e.target.style.display = "none";
                    e.target.nextSibling.style.display = "flex";
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
                    <FaExternalLinkAlt /> Live
                  </a>
                  <a
                    href={project.repoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="bg-black text-white border border-white px-4 py-2 rounded-full text-sm font-bold flex items-center gap-2 hover:bg-white/20 transition-colors"
                  >
                    <FaGithub /> GitHub
                  </a>
                </div>
              </div>

              {/* Content Area */}
              <div className="flex-grow flex flex-col p-6">
                <span className="text-sm font-mono text-purple-400 mb-2">
                  {project.category}
                </span>
                <h3 className="text-2xl font-bold text-white mb-3">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm mb-6 flex-grow line-clamp-3">
                  {project.shortDescription}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="text-xs bg-white/10 px-2 py-1 rounded text-gray-300"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <Link
                  href={`/projects/${project.slug}`}
                  className="inline-flex items-center text-purple-400 font-semibold hover:text-purple-300 transition-colors mt-auto"
                >
                  View Full Details
                  <svg
                    className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  );
}
