import React from 'react';
// Component imports
import Header from './components/Header';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
// Global styles
import './styles/App.css';

function App() {
  return (
    <div className="App">
      {/* Navigation header */}
      <Header />
      
      {/* Main content sections */}
      <main>
        <Home />      {/* Hero section with introduction */}
        <About />     {/* About me with skills, experience, education */}
        <Services />  {/* Services I offer */}
        <Projects />  {/* Portfolio projects showcase */}
        <Contact />   {/* Contact form and information */}
      </main>
    </div>
  );
}

export default App;
