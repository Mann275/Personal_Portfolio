import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Projects.css';

const Projects = () => {
  // Projects data configuration
  const projects = [
    {
      id: 1,
      title: 'CrackIt.AI',
      description: 'A smart placement prep platform built with the MERN stack and Python. It creates AI-based roadmaps, mock tests, and checklists based on student goals and skills.',
      image: `${process.env.PUBLIC_URL}/assets/Crackit.png`,
      technologies: ['React', 'Node.js', 'MongoDB', 'Python', 'AI/ML'],
      liveDemo: 'https://crackit-ai-ueu5.onrender.com/',
      sourceCode: 'https://github.com/Mann275/CrackIt.AI',
      features: [
        'AI-based learning roadmaps',
        'Real-time chatrooms',
        'Progress tracking',
        'Personalized learning paths'
      ]
    },
    {
      id: 2,
      title: 'NoNap Drive',
      description: 'A Python + OpenCV-based system that detects drowsiness using facial landmarks and alerts drivers with a buzzer and SMS.',
      image: `${process.env.PUBLIC_URL}/assets/driver.png`,
      technologies: ['Python', 'OpenCV', 'Machine Learning', 'SMS API'],
      liveDemo: null, // No live demo available
      sourceCode: 'https://github.com/Mann275/NoNap-Drive',
      features: [
        'Real-time drowsiness detection',
        'Facial landmark analysis',
        'Buzzer alerts',
        'SMS notifications'
      ]
    },
    {
      id: 3,
      title: 'FinHack',
      description: 'A finance management tool that helps users track their expenses, set budgets, and achieve their financial goals through data visualization.',
      image: `${process.env.PUBLIC_URL}/assets/FinHack.jpeg`,
      technologies: ['React', 'Node.js', 'Chart.js', 'MongoDB'],
      liveDemo: 'https://mann275.github.io/MSWD-Fintech-Site2.0/',
      sourceCode: 'https://github.com/Mann275/MSWD-Fintech-Site2.0',
      features: [
        'Expense tracking',
        'Budget management',
        'Data visualization',
        'Financial insights'
      ]
    }
  ];

  return (
    <section id="projects" className="projects-section">
      <div className="container">
        {/* Section heading */}
        <h2 className="section-title">My Projects</h2>
        <p className="section-subtitle">
          Here are some of the projects I've worked on that showcase my skills and experience
        </p>
        
        {/* Projects grid layout - showing only first 3 projects */}
        <div className="projects-grid">
          {projects.slice(0, 3).map((project) => (
            <div key={project.id} className="project-card">
              {/* Project image */}
              <div className="project-image">
                <img src={project.image} alt={project.title} />
                <div className="project-overlay">
                  <div className="project-links">
                    {/* Conditional rendering for live demo/about link */}
                    {project.liveDemo && (
                      <a href={project.liveDemo} className="project-link" target="_blank" rel="noopener noreferrer">
                        <i className="fas fa-external-link-alt"></i>
                        {project.title === 'FinHack' ? 'About' : 'Live Demo'}
                      </a>
                    )}
                    {/* GitHub source code link */}
                    <a href={project.sourceCode} className="project-link" target="_blank" rel="noopener noreferrer">
                      <i className="fab fa-github"></i>
                      Source Code
                    </a>
                  </div>
                </div>
              </div>
              
              {/* Project details */}
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                
                {/* Technology tags */}
                <div className="project-technologies">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* More projects section */}
        <div className="more-projects">
          <p>Want to see more of my work?</p>
          <div className="more-projects-buttons">
            <Link to="/projects" className="btn btn-primary">
              <i className="fas fa-folder-open"></i>
              View All Projects
            </Link>
            <a href="https://github.com/Mann275" className="btn btn-outline" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-github"></i>
              Explore on GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
