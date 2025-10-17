import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// Component imports
import Header from './components/Header';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import AllProjects from './pages/AllProjects';
// Global styles
import './styles/App.css';

function App() {
  return (
    <Router>
      <div className="App">
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
      </div>
    </Router>
  );
}

export default App;
