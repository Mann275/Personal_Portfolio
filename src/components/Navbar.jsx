import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { useNavigate, useLocation } from "react-router-dom";
import { Link } from "react-router-dom";

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Services", href: "#services" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isOpen && !event.target.closest(".mobile-menu-container")) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen]);

  const scrollToSection = (e, href) => {
    e.preventDefault();

    if (location.pathname === "/") {
      // If on homepage, smooth scroll
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      // If on another page, navigate to home first, then scroll
      navigate("/");
      // Use setTimeout to ensure page loads before scrolling
      setTimeout(() => {
        const element = document.querySelector(href);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    }
  };

  const handleLogoClick = (e) => {
    if (location.pathname === "/") {
      // If already on home, scroll to top
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
    // If on another page, Link component will handle navigation to "/"
  };

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
          <Link
            to="/"
            onClick={handleLogoClick}
            className="no-underline shrink-0"
          >
            <span className="font-averia font-bold text-2xl cursor-pointer text-gray-300 hover:text-white transition-colors">
              Mann
            </span>
          </Link>
          <div className="w-px h-6 bg-white/20"></div>
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
      <div className="md:hidden fixed top-4 right-4 z-50 mobile-menu-container">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-white p-3 bg-white/10 backdrop-blur-md rounded-xl border border-white/20 focus:outline-none shadow-lg"
        >
          {isOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: -20 }}
            transition={{ type: "spring", duration: 0.3 }}
            className="fixed top-16 right-4 z-40 bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-4 shadow-2xl md:hidden mobile-menu-container"
          >
            <div className="flex flex-col space-y-3 min-w-[120px] ">
              {navLinks.map((link, index) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                  onClick={(e) => {
                    scrollToSection(e, link.href);
                    setIsOpen(false);
                  }}
                  className="text-gray-300 hover:text-white font-medium py-2 px-3 rounded-lg hover:bg-white/10 transition-all duration-100 border-white/50 border-b text-center"
                >
                  {link.name}
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
