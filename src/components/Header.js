import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import '../styles/Header.css';

const Header = () => {
  // State management for mobile menu and active section
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const location = useLocation();
  
  // Check if we're on the home page
  const isHomePage = location.pathname === '/';

  // Toggle mobile menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Close on Escape and lock body scroll when menu open
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') closeMenu();
    };
    document.addEventListener('keydown', onKey);
    // lock body scroll when menu open
    document.body.style.overflow = isMenuOpen ? 'hidden' : '';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  // Scroll detection for active section highlighting
  useEffect(() => {
    if (!isHomePage) return;

    const handleScroll = () => {
      const sections = ['home', 'about', 'services', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 120; // Slightly increased offset
      
      // Find the current section
      let currentSection = 'home'; // default
      
      for (let i = 0; i < sections.length; i++) {
        const section = document.getElementById(sections[i]);
        if (section) {
          const sectionTop = section.offsetTop;
          const sectionHeight = section.offsetHeight;
          
          // Check if we're in this section
          if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            currentSection = sections[i];
            break;
          }
        }
      }
      
      // Only update if the section actually changed
      if (currentSection !== activeSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Call once to set initial state

    return () => window.removeEventListener('scroll', handleScroll);
  }, [isHomePage, activeSection]);

  // Close menu when user scrolls or touches outside (mobile friendly)
  useEffect(() => {
    if (!isMenuOpen) return;

    const onScroll = () => {
      closeMenu();
    };
    const onTouch = (e) => {
      // if touch starts outside the nav, close it — overlay already handles clicks, but this covers other cases
      closeMenu();
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('touchstart', onTouch, { passive: true });

    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('touchstart', onTouch);
    };
  }, [isMenuOpen]);

  // Close mobile menu
  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  // Hide navbar on AllProjects page
  if (location.pathname === '/projects') {
    return null;
  }

  // Smooth scroll to section function
  const scrollToSection = (sectionId) => {
    if (isHomePage) {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // If not on home page, navigate to home page with hash
      window.location.href = `/#${sectionId}`;
    }
    closeMenu(); // Close menu after clicking on mobile
  };

  return (
    <nav className="navbar">
      <div className="nav-container">
        {/* Logo section */}
        <div className="logo">
          <img src={`${process.env.PUBLIC_URL}/assets/Logo.png`} alt="Portfolio Logo" />
        </div>
        
  {/* Overlay (click outside to close) */}
  <div className={`nav-overlay ${isMenuOpen ? 'active' : ''}`} onClick={closeMenu} />

  {/* Navigation menu */}
  <ul className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
          <li className="nav-item">
            <button 
              onClick={() => scrollToSection('home')} 
              className={`nav-link ${activeSection === 'home' ? 'active' : ''}`}
            >
              Home
            </button>
          </li>
          <li className="nav-item">
            <button 
              onClick={() => scrollToSection('about')} 
              className={`nav-link ${activeSection === 'about' ? 'active' : ''}`}
            >
              About
            </button>
          </li>
          <li className="nav-item">
            <button 
              onClick={() => scrollToSection('services')} 
              className={`nav-link ${activeSection === 'services' ? 'active' : ''}`}
            >
              Services
            </button>
          </li>
          <li className="nav-item">
            <button 
              onClick={() => scrollToSection('projects')} 
              className={`nav-link ${activeSection === 'projects' ? 'active' : ''}`}
            >
              Projects
            </button>
          </li>
          <li className="nav-item">
            <button 
              onClick={() => scrollToSection('contact')} 
              className={`nav-link ${activeSection === 'contact' ? 'active' : ''}`}
            >
              Contact
            </button>
          </li>
          {/* Close button for mobile menu */}
          <li className="close-menu">
            <i className="fas fa-times" onClick={closeMenu}></i>
          </li>
        </ul>

        {/* Hamburger menu for mobile */}
        <div className="hamburger" onClick={toggleMenu}>
          <i className="fas fa-bars"></i>
        </div>
      </div>
    </nav>
  );
};

export default Header;
