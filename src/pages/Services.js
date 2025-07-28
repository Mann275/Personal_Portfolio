import React from 'react';
import '../styles/Services.css';

const Services = () => {
  // Services data configuration
  const services = [
    {
      id: 1,
      icon: ['fas', 'fa-code'],
      title: 'Web Development',
      description: 'I design and develop responsive, user-friendly web interfaces using HTML, CSS, React, and modern JavaScript. I focus on clean layouts, smooth UX, and modern UI trends.',
      features: [
        'Responsive Design',
        'Modern UI/UX',
        'React Applications',
        'Cross-browser Compatibility'
      ]
    },
    {
      id: 2,
      icon: ['fas', 'fa-server'],
      title: 'Full-Stack Development',
      description: 'I build complete web applications using the MERN stack. My focus is on creating scalable, efficient, and maintainable code while ensuring a seamless user experience.',
      features: [
        'MERN Stack Development',
        'API Development',
        'Database Design',
        'Real-time Applications'
      ]
    },
  ];

  return (
    <section id="services" className="services-section">
      <div className="container">
        {/* Section heading */}
        <h2 className="section-title">Services</h2>
        <p className="section-subtitle">
          I specialize in building modern web applications and solving real-world problems through technology
        </p>
        
        {/* Services grid layout */}
        <div className="services-grid">
          {services.map((service) => (
            <div key={service.id} className="service-card">
              {/* Service icon */}
              <div className="service-icon">
                <i className={service.icon.join(' ')}></i>
              </div>
              
              {/* Service content */}
              <div className="service-content">
                <h3 className="service-title">{service.title}</h3>
                <p className="service-description">{service.description}</p>
                
                {/* Service features list */}
                <ul className="service-features">
                  {service.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
                
                {/* Learn more button - scrolls to contact section */}
                <button 
                  onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
                  className="service-btn"
                >
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
