"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Services", href: "#services" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

import { usePathname, useRouter } from "next/navigation";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [pathname, setPathname] = useState("/");
  const router = useRouter();

  useEffect(() => {
    try {
      const path = window.location.pathname;
      setPathname(path);
    } catch (e) {
      setPathname("/");
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (e, href) => {
    e.preventDefault();

    if (pathname === "/") {
      // If on homepage, smooth scroll
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      // If on another page, navigate to home + section
      router.push(`/${href}`);
    }
  };

  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Desktop Navbar */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className="fixed top-0 left-0 right-0 z-50 hidden md:flex justify-center py-4"
      >
        <div className="bg-white/10 backdrop-blur-lg border border-white/10 rounded-full px-6 py-3 flex items-center gap-6 max-w-[95vw]">
          <a href="/" className="no-underline flex-shrink-0">
            <span className="font-averia font-bold text-2xl cursor-pointer text-gray-300 hover:text-white transition-colors">
              Mann
            </span>
          </a>
          <div className="w-[1px] h-6 bg-white/20"></div>
          <div className="flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => scrollToSection(e, link.href)}
                className="text-sm md:text-base text-gray-300 hover:text-white transition-colors whitespace-nowrap"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      </motion.nav>

      {/* Mobile Navbar Toggle */}
      <div
        className="md:hidden fixed top-6 right-6 z-50"
        suppressHydrationWarning
      >
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-white p-2 bg-white/10 backdrop-blur-md rounded-lg border border-white/10 focus:outline-none"
          suppressHydrationWarning
        >
          {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "tween", duration: 0.3 }}
            className="fixed inset-0 z-40 bg-[#121212] flex flex-col items-center justify-center space-y-8 md:hidden"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => {
                  scrollToSection(e, link.href);
                  setIsOpen(false);
                }}
                className="text-2xl text-gray-300 hover:text-white font-bold transition-colors"
              >
                {link.name}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
