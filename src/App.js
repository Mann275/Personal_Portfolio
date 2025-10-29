import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// Component imports
import Header from './components/Header';
import LoadingScreen from './components/LoadingScreen';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import AllProjects from './pages/AllProjects';
// Global styles
import './styles/App.css';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time and preload images
    const preloadImages = () => {
      const images = [
        '/assets/Myself.png',
        '/assets/favicon1.png',
        '/assets/Logo.png'
      ];

      const imagePromises = images.map(src => {
        return new Promise((resolve) => {
          const img = new Image();
          img.onload = resolve;
          img.onerror = resolve; // Still resolve even if image fails
          img.src = process.env.PUBLIC_URL + src;
        });
      });

      return Promise.all(imagePromises);
    };

    // Set minimum loading time of 4 seconds
    const minLoadTime = new Promise(resolve => setTimeout(resolve, 4000));
    
    // Wait for both minimum time and image preloading
    Promise.all([minLoadTime, preloadImages()]).then(() => {
      setTimeout(() => {
        setIsLoading(false);
      }, 500); // Small delay for smooth transition
    });
  }, []);

  return (
    <Router>
      <div className="App">
        {/* Loading Screen */}
        <LoadingScreen isLoading={isLoading} />
        
        {/* Main Content */}
        {!isLoading && (
          <>
            {/* Navigation header */}
            <Header />
            
            {/* Routes */}
            <Routes>
              {/* Main portfolio page */}
              <Route path="/" element={
                <main>
                  <Home />      {/* Hero section with introduction */}
                  <About />     {/* About me with skills, experience, education */}
                  <Services />  {/* Services I offer */}
                  <Projects />  {/* Portfolio projects showcase */}
                  <Contact />   {/* Contact form and information */}
                </main>
              } />
              
              {/* All Projects page */}
              <Route path="/projects" element={<AllProjects />} />
            </Routes>
          </>
        )}
      </div>
    </Router>
  );
}

export default App;
