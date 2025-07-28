import React, { useState } from 'react';
import '../styles/Header.css';

const Header = () => {
  // State management for mobile menu only
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Toggle mobile menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Close mobile menu
  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  // Smooth scroll to section function
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
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
        
        {/* Navigation menu */}
        <ul className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
          <li className="nav-item">
            <button onClick={() => scrollToSection('home')} className="nav-link">
              Home
            </button>
          </li>
          <li className="nav-item">
            <button onClick={() => scrollToSection('about')} className="nav-link">
              About
            </button>
          </li>
          <li className="nav-item">
            <button onClick={() => scrollToSection('services')} className="nav-link">
              Services
            </button>
          </li>
          <li className="nav-item">
            <button onClick={() => scrollToSection('projects')} className="nav-link">
              Projects
            </button>
          </li>
          <li className="nav-item">
            <button onClick={() => scrollToSection('contact')} className="nav-link">
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
