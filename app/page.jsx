"use client";

import ScrollyCanvas from "@/components/ScrollyCanvas";
import Projects from "@/components/Projects";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Services from "@/components/Services";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";

import ScrollToTop from "@/components/ScrollToTop";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col relative">
      <ScrollToTop />
      {/* Hero Section with Scrollytelling */}
      <section id="home" className="relative">
        <div className="relative">
          <ScrollyCanvas />
        </div>
      </section>

      {/* Content Sections */}
      <div className="w-full h-px bg-white/5 max-w-6xl mx-auto" />
      <About />
      <div className="w-full h-px bg-white/5 max-w-6xl mx-auto" />
      <Skills />
      <div className="w-full h-px bg-white/5 max-w-6xl mx-auto" />
      <Services />
      <div className="w-full h-px bg-white/5 max-w-6xl mx-auto" />
      <Experience />
      <div className="w-full h-px bg-white/5 max-w-6xl mx-auto" />
      <Projects />
      <div className="w-full h-px bg-white/5 max-w-6xl mx-auto" />
      <Contact />

      {/* Footer */}
      <footer className="py-6 text-center text-gray-500 text-sm bg-black/20 backdrop-blur-sm">
        © {new Date().getFullYear()} Patel Mann. All rights reserved.
      </footer>
    </main>
  );
}
