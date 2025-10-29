import React, { useState, useEffect } from 'react';
import '../styles/Home.css';

const Home = () => {
  // State for typing animation
  const [displayedText, setDisplayedText] = useState('');
  const fullText = 'Full-Stack Developer';

  // Typing animation effect with repeat
  useEffect(() => {
    let currentIndex = 0;
    let isDeleting = false;
    
    const typeAndDelete = () => {
      const typingInterval = setInterval(() => {
        if (!isDeleting && currentIndex <= fullText.length) {
          setDisplayedText(fullText.substring(0, currentIndex));
          currentIndex++;
        } else if (!isDeleting && currentIndex > fullText.length) {
          // Wait a bit before starting to delete
          setTimeout(() => {
            isDeleting = true;
          }, 2000);
        } else if (isDeleting && currentIndex > 0) {
          currentIndex--;
          setDisplayedText(fullText.substring(0, currentIndex));
        } else if (isDeleting && currentIndex === 0) {
          // Wait a bit before starting to type again
          setTimeout(() => {
            isDeleting = false;
            currentIndex = 0;
          }, 500);
        }
      }, isDeleting ? 50 : 100); // Faster deletion, slower typing
      
      return typingInterval;
    };
    
    const interval = typeAndDelete();
    return () => clearInterval(interval);
  }, []);
  return (
    <section id="home" className="home-section">
      <div className="container">
        {/* Main home content with image on left and text on right */}
        <div className="home-content">
          {/* Profile image container - Left side */}
          <div className="profile-container">
            <div className="profile-image">
              <img src={`${process.env.PUBLIC_URL}/assets/Myself.png`} alt="Patel Mann" />
              <div className="profile-overlay"></div>
            </div>
          </div>
          
          {/* Introduction content - Right side */}
          <div className="intro-content">
            <div className="intro-text">
              <p className="greeting">Hi, I'm</p>
              <h1 className="name">
                <span className="highlight">Patel Mann</span>
              </h1>
              <h2 className="role">
                {displayedText}
                <span className="typing-cursor">|</span>
              </h2>
              <p className="description">
                I'm a Computer Science student at Parul University with a passion for full-stack web development, 
                particularly using the MERN stack. I enjoy building responsive, real-world applications and 
                constantly seek to improve my skills through hands-on projects.
              </p>
              
              {/* Call-to-action buttons */}
              <div className="cta-buttons">
                <a href={`${process.env.PUBLIC_URL}/assets/Resume_Mann.pdf`} download className="btn btn-primary">
                  <i className="fas fa-download"></i>
                  Download Resume
                </a>
                <button 
                  onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
                  className="btn btn-secondary"
                >
                  Contact Me
                </button>
              </div>
              
              {/* Social media links */}
              <div className="social-links">
                <a href="https://github.com/Mann275" className="social-link" aria-label="GitHub">
                  <i className="fab fa-github"></i>
                </a>
                <a href="https://www.linkedin.com/in/mann27/" className="social-link" aria-label="LinkedIn">
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
