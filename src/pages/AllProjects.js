import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/AllProjects.css';

const AllProjects = () => {
  // Extended projects data with all projects
  const allProjects = [
    {
      id: 1,
      title: 'ChatGPT PromptJump',
      description: 'A lightweight Chrome extension that lets users instantly jump to any prompt in long ChatGPT conversations. Designed for speed, simplicity, and complete privacy with 100% local execution.',
      image: `${process.env.PUBLIC_URL}/assets/Promptjump.png`,
      technologies: ['JavaScript', 'Chrome Extension API', 'HTML', 'CSS'],
      liveDemo: 'https://chromewebstore.google.com/detail/icbbbaodpbboephpmebcaejcgbcidcph?utm_source=item-share-cb',
      sourceCode: 'https://github.com/Mann275/ChatGPT__PromptJump',
      features: [
        'Instant jump to any message',
        'Fast in-chat search',
        'Clean floating UI panel',
        'Fully local & privacy-first'
      ],
      status: 'Completed',
      category: 'Tools',
      featured: true
    },
    {
      id: 2,
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
      ],
      status: 'Completed',
      category: 'Full Stack',
      featured: true
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
      ],
      status: 'Completed',
      category: 'Full Stack',
      featured: false
    },
    {
      id: 4,
      title: 'NoNap Drive',
      description: 'A Python + OpenCV-based system that detects drowsiness using facial landmarks and alerts drivers with a buzzer and SMS.',
      image: `${process.env.PUBLIC_URL}/assets/driver.png`,
      technologies: ['Python', 'OpenCV', 'Machine Learning', 'SMS API'],
      liveDemo: null,
      sourceCode: 'https://github.com/Mann275/NoNap-Drive',
      features: [
        'Real-time drowsiness detection',
        'Facial landmark analysis',
        'Buzzer alerts',
        'SMS notifications'
      ],
      status: 'Completed',
      category: 'Other',
      featured: false
    }
  ];

  const [filter, setFilter] = React.useState('All');
  const categories = ['All', 'Featured', 'Full Stack', 'Tools', 'Other'];

  const filteredProjects = filter === 'All' 
    ? allProjects 
    : filter === 'Featured'
    ? allProjects.filter(project => project.featured)
    : allProjects.filter(project => project.category === filter);

  return (
    <div className="all-projects-page">
      {/* Header Section */}
      <section className="all-projects-header">
        <div className="container">
          <Link to="/" className="back-link">
            <i className="fas fa-arrow-left"></i>
            <span>Back to Home</span>
          </Link>
          <div className="header-content">
            <h1 className="page-title">All Projects</h1>
            <div className="projects-stats">
              <span className="project-count">{allProjects.length} Projects</span>
            </div>
            <p className="page-subtitle">
              Explore my complete portfolio of projects showcasing various technologies and skills
            </p>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="filter-section">
        <div className="container">
          <div className="filter-header">
            <div className="filter-buttons">
              {categories.map((category) => (
                <button
                  key={category}
                  className={`filter-btn ${filter === category ? 'active' : ''}`}
                  onClick={() => setFilter(category)}
                >
                  {category}
                  <span className="filter-count">
                    {category === 'All' 
                      ? allProjects.length 
                      : category === 'Featured'
                      ? allProjects.filter(p => p.featured).length
                      : allProjects.filter(p => p.category === category).length
                    }
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="projects-grid-section">
        <div className="container">
          <div className="projects-grid">
            {filteredProjects.map((project) => (
              <div key={project.id} className="project-card">
                {/* Featured Badge */}
                {project.featured && (
                  <div className="featured-badge">
                    <i className="fas fa-star"></i>
                    Featured
                  </div>
                )}
                
                {/* Project Image */}
                <div className="project-image">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    onError={(e) => {
                      e.target.src = `${process.env.PUBLIC_URL}/assets/project-placeholder.jpg`;
                    }}
                  />
                  <div className="project-overlay">
                    <div className="project-links">
                      {project.liveDemo && (
                        <a href={project.liveDemo} className="project-link" target="_blank" rel="noopener noreferrer">
                          <i className="fas fa-external-link-alt"></i>
                          {project.title === 'FinHack' ? 'About' : project.title === 'ChatGPT PromptJump' ? 'Live Tool' : 'Live Demo'}
                        </a>
                      )}
                      <a href={project.sourceCode} className="project-link" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-github"></i>
                        Source Code
                      </a>
                    </div>
                  </div>
                </div>

                {/* Project Content */}
                <div className="project-content">
                  <div className="project-header">
                    <h3 className="project-title">{project.title}</h3>
                    <span className="category-tag">{project.category}</span>
                  </div>
                  
                  <p className="project-description">{project.description}</p>

                  {/* Features */}
                  <div className="project-features">
                    <h4>Key Features:</h4>
                    <ul>
                      {project.features.map((feature, index) => (
                        <li key={index}>{feature}</li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies */}
                  <div className="project-technologies">
                    {project.technologies.map((tech, index) => (
                      <span key={index} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GitHub Section */}
      <section className="github-section">
        <div className="container">
          <div className="github-content">
            <h2>Explore More on GitHub</h2>
            <p>Check out my GitHub profile for additional projects and contributions</p>
            <a href="https://github.com/Mann275" className="github-btn" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-github"></i>
              Visit GitHub Profile
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AllProjects;