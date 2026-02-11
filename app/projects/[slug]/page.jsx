"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { notFound } from "next/navigation";
import { projects } from "@/lib/projectData";
import { FaGithub, FaExternalLinkAlt, FaArrowLeft } from "react-icons/fa";
import { useEffect, useState } from "react";

export default function ProjectDetail({ params }) {
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadProject = async () => {
      try {
        // Await params in Next.js 15+
        const resolvedParams = await params;
        const slug = resolvedParams.slug;
        const foundProject = projects.find((p) => p.slug === slug);

        if (!foundProject) {
          notFound();
        }

        setProject(foundProject);
      } catch (error) {
        console.error("Error loading project:", error);
      } finally {
        setLoading(false);
      }
    };

    loadProject();
  }, [params]);

  if (loading || !project) {
    return (
      <main className="min-h-screen bg-[#121212] text-white pt-24 pb-12 flex items-center justify-center">
        <div className="text-xl text-gray-400">Loading...</div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#121212] text-white pt-24 pb-12">
      <div className="max-w-5xl mx-auto px-6 md:px-12">
        <Link
          href="/#projects"
          className="inline-flex items-center text-gray-400 hover:text-white mb-8 transition-colors group"
        >
          {" "}
          <FaArrowLeft className="mr-2" /> Back to Projects
        </Link>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          {/* Image Section */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="relative rounded-3xl overflow-hidden border border-white/10 aspect-video md:aspect-square bg-gray-900"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
            />
          </motion.div>

          {/* Info Section */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="flex flex-col justify-center"
          >
            <span className="text-purple-400 font-mono mb-4 text-lg">
              {project.category}
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              {project.title}
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              {project.shortDescription}
            </p>

            <div className="flex flex-wrap gap-3 mb-8">
              {project.tech.map((tech) => (
                <span
                  key={tech}
                  className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-sm text-gray-300"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="flex gap-4">
              <a
                href={project.demoLink}
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3 bg-white text-black font-bold rounded-xl hover:bg-gray-200 transition-colors flex items-center gap-2"
              >
                <FaExternalLinkAlt /> Live
              </a>
              <a
                href={project.repoLink}
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3 border border-white/20 text-white font-bold rounded-xl hover:bg-white/10 transition-colors flex items-center gap-2"
              >
                <FaGithub /> Source Code
              </a>
            </div>
          </motion.div>
        </div>

        {/* Detailed Description */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-12"
        >
          <div className="md:col-span-2 space-y-8">
            <h2 className="text-3xl font-bold border-l-4 border-purple-500 pl-4">
              Overview
            </h2>
            <p className="text-lg text-gray-300 leading-relaxed">
              {project.fullDescription}
            </p>
          </div>

          <div className="bg-white/5 p-8 rounded-3xl border border-white/10 h-fit">
            <h3 className="text-2xl font-bold mb-6">Key Features</h3>
            <ul className="space-y-4">
              {project.features?.map((feature, i) => (
                <li key={i} className="flex items-start">
                  <span className="text-green-400 mr-3 mt-1">✓</span>
                  <span className="text-gray-300">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>
    </main>
  );
}
