import React, { useState } from 'react';
import '../styles/About.css';

const About = () => {
  // State to manage active tab
  const [activeTab, setActiveTab] = useState('skills');

  // Tab data configuration
  const tabs = {
    skills: {
      title: 'Skills',
      content: (
        <div className="skills-content">
          {/* Programming Languages Section */}
          <div className="skills-category">
            <h4>💻 Programming Languages</h4>
            <div className="skills-list">
              <div className="skill-item">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" alt="Java" />
                <span>Java</span>
              </div>
              <div className="skill-item">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" alt="HTML" />
                <span>HTML</span>
              </div>
              <div className="skill-item">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" alt="CSS" />
                <span>CSS</span>
              </div>
              <div className="skill-item">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="JavaScript" />
                <span>JavaScript</span>
              </div>
              <div className="skill-item">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlite/sqlite-original.svg" alt="SQL" />
                <span>SQL</span>
              </div>
            </div>
          </div>

          {/* Frontend and Backend Side by Side */}
          <div className="skills-frontend-backend">
            {/* Frontend Section */}
            <div className="skills-category frontend">
              <h4>🎨 Frontend</h4>
              <div className="skills-list">
                <div className="skill-item">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React" />
                  <span>React</span>
                </div>
                <div className="skill-item">
                  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nextjs/nextjs-original.svg" alt="Next.js" />
                  <span>Next.js</span>
                </div>
                <div className="skill-item">
                  <img src="https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg" alt="Tailwind CSS" />
                  <span>Tailwind CSS</span>
                </div>
              </div>
            </div>

            {/* Partition Line */}
            <div className="skills-partition"></div>

            {/* Backend Section */}
            <div className="skills-category backend">
              <h4>⚙️ Backend</h4>
              <div className="skills-list">
                <div className="skill-item">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" alt="Node.js" />
                  <span>Node.js</span>
                </div>
                <div className="skill-item">
                  <i className="fas fa-server"></i>
                  <span>REST APIs</span>
                </div>
              </div>
            </div>
          </div>

          {/* Database Section */}
          <div className="skills-category">
            <h4>🗄️ Database</h4>
            <div className="skills-list">
              <div className="skill-item">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" alt="MongoDB" />
                <span>MongoDB</span>
              </div>
              <div className="skill-item">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" alt="MySQL" />
                <span>MySQL</span>
              </div>
            </div>
          </div>

          {/* Tools Section */}
          <div className="skills-category">
            <h4>🛠️ Tools & Technologies</h4>
            <div className="skills-list">
              <div className="skill-item">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" alt="Git" />
                <span>Git</span>
              </div>
              <div className="skill-item">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" alt="GitHub" />
                <span>GitHub</span>
              </div>
              <div className="skill-item">
                <img src="https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg" alt="Postman" />
                <span>Postman</span>
              </div>
              <div className="skill-item">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
                  <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
                  <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
                </svg>
                <span>Render</span>
              </div>
              <div className="skill-item">
                <i className="fas fa-cube"></i>
                <span>Spline</span>
              </div>
              <div className="skill-item">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" alt="Figma" />
                <span>Figma</span>
              </div>
            </div>
          </div>
        </div>
      )
    },
    experience: {
      title: 'Experience',
      content: (
        <div className="experience-content">
          {/* Java Programming Internship */}
          <div className="experience-item">
            <div className="experience-header">
              <h4>Java Programming Intern</h4>
              <span className="experience-period">May - June 2025</span>
            </div>
            <p className="experience-company">CodTech IT Solutions</p>
            <p className="experience-description">
              Completed core Java projects and real-time assignments. 
              Improved problem-solving and development skills through guided exercises.
            </p>
          </div>
          
          {/* CDC Tech Team Experience */}
          <div className="experience-item">
            <div className="experience-header">
              <h4>Tech Team Lead</h4>
              <span className="experience-period">2023 - 2025</span>
            </div>
            <p className="experience-company">Career Development Cell, Parul University</p>
            <p className="experience-description">
              As a member of the CDC Technical team, I contributed to the "Global Fun Fest 2023-24 & 2024-25". I managed the technical logistics of large-scale events with over 500 attendees, ensuring smooth
              coordination and real-time responsiveness. Additionally, I focused on optimizing workflows and improving
              operational efficiency to enhance the overall event experience.
            </p>
          </div>
        </div>
      )
    },
    education: {
      title: 'Education',
      content: (
        <div className="education-content">
          {/* University Education */}
          <div className="education-item">
            <div className="education-header">
              <h4>B.Tech in Computer Science</h4>
              <span className="education-period">2022 - 2026</span>
            </div>
            <p className="education-institution">Parul University</p>
          </div>
          
          {/* Higher Secondary Education */}
          <div className="education-item">
            <div className="education-header">
              <h4>Higher Secondary Education (12th CBSE)</h4>
              <span className="education-period">2022</span>
            </div>
            <p className="education-institution">Kendriya Vidyalaya No. 1</p>
          </div>
          
          {/* Secondary Education */}
          <div className="education-item">
            <div className="education-header">
              <h4>Secondary Education (10th CBSE)</h4>
              <span className="education-period">2020</span>
            </div>
            <p className="education-institution">Kendriya Vidyalaya No. 1</p>
          </div>
        </div>
      )
    }
  };

  return (
    <section id="about" className="about-section">
      <div className="container">
        {/* Section heading */}
        <h2 className="section-title">About Me</h2>
        
        {/* Centered about content with innovative layout */}
        <div className="about-content">
          <div className="about-tabs">
            {/* Tab navigation buttons */}
            <div className="tab-buttons">
              {Object.entries(tabs).map(([key, tab]) => (
                <button
                  key={key}
                  className={`tab-button ${activeTab === key ? 'active' : ''}`}
                  onClick={() => setActiveTab(key)}
                >
                  <i className={`fas fa-${key === 'skills' ? 'code' : key === 'experience' ? 'briefcase' : 'graduation-cap'}`}></i>
                  {tab.title}
                </button>
              ))}
            </div>
            
            {/* Tab content display */}
            <div className="tab-content">
              {tabs[activeTab].content}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
