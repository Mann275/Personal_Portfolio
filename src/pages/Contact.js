import React, { useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import '../styles/Contact.css';

const Contact = () => {
  // State management for form data and submission status
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  // Initialize EmailJS when component mounts
  useEffect(() => {
    // Test EmailJS initialization
    try {
      emailjs.init("aYHsccMGqYR5Axf8L"); // Updated public key from your code
      console.log('✅ EmailJS initialized successfully');
    } catch (error) {
      console.error('❌ EmailJS initialization failed:', error);
    }
  }, []);

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'user_name') {
      setFormData({ ...formData, name: value });
    } else if (name === 'user_email') {
      setFormData({ ...formData, email: value });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  // Handle form submission with EmailJS
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Show loading message
    setSubmitMessage('📧 Sending message...');
    
    // Add validation
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setSubmitMessage('❌ Please fill in all fields.');
      setIsSubmitting(false);
      setTimeout(() => setSubmitMessage(''), 4000);
      return;
    }
    
    try {
      console.log('Form data:', formData);
      console.log('Sending email...');
      
      // Create template params object instead of using form element
      const templateParams = {
        user_name: formData.name,
        user_email: formData.email,
        message: formData.message
      };
      
      console.log('Template params:', templateParams);
      
      // Send email using EmailJS
      const result = await emailjs.send(
        'service_8tqrvxm', // Your service ID
        'template_1wgf29f', // Your template ID
        templateParams, // Use template params instead of form element
        'aYHsccMGqYR5Axf8L' // Public key
      );
      
      console.log('✅ EmailJS Success:', result);
      
      // Show success message
      setSubmitMessage('✅ Message sent successfully! I\'ll get back to you soon.');
      setFormData({ name: '', email: '', message: '' });
      
      // Clear success message after 4 seconds
      setTimeout(() => {
        setSubmitMessage('');
      }, 4000);
      
    } catch (error) {
      console.error('❌ EmailJS error:', error);
      console.error('Error details:', error.text);
      console.error('Error status:', error.status);
      
      let errorMessage = '❌ Failed to send message. ';
      
      if (error.status === 422) {
        errorMessage += 'Invalid form data.';
      } else if (error.status === 400) {
        errorMessage += 'Bad request - check configuration.';
      } else if (error.status === 403) {
        errorMessage += 'Service limit reached.';
      } else {
        errorMessage += 'Please try again or email me directly.';
      }
      
      setSubmitMessage(errorMessage);
      
      // Clear error message after 4 seconds
      setTimeout(() => {
        setSubmitMessage('');
      }, 4000);
      
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <h2 className="section-title">Get In Touch</h2>
        <p className="section-subtitle">
          I'm always open to discussing new opportunities and interesting projects
        </p>
        
        <div className="contact-content">
          <div className="contact-info">
            <div className="contact-item">
              <div className="contact-icon">
                <i className="fas fa-envelope"></i>
              </div>
              <div className="contact-details">
                <h4>Email</h4>
                <p>patelmann2705@gmail.com</p>
              </div>
            </div>
            
            <div className="contact-item">
              <div className="contact-icon">
                <i className="fas fa-phone"></i>
              </div>
              <div className="contact-details">
                <h4>Phone</h4>
                <p>+91-7990126127</p>
              </div>
            </div>
            
            <div className="contact-item">
              <div className="contact-icon">
                <i className="fas fa-map-marker-alt"></i>
              </div>
              <div className="contact-details">
                <h4>Location</h4>
                <p>Gujarat, India</p>
              </div>
            </div>
            
            <div className="social-links">
              <h4>Follow Me</h4>
              <div className="social-icons">
                <a href="https://github.com/Mann275" className="social-link" aria-label="GitHub" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-github"></i>
                </a>
                <a href="https://www.linkedin.com/in/mann27/" className="social-link" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-linkedin-in"></i>
                </a>
                <a href="https://www.instagram.com/mann.275/" className="social-link" aria-label="Instagram" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-instagram"></i>
                </a>
              </div>
            </div>
          </div>
          
          <div className="contact-form-container">
            <form className="contact-form" onSubmit={handleSubmit}>
              <h3>Send Me a Message</h3>
              
              <div className="form-group">
                <input
                  type="text"
                  name="user_name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  required
                />
              </div>
              
              <div className="form-group">
                <input
                  type="email"
                  name="user_email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your Email"
                  required
                />
              </div>
              
              <div className="form-group">
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your Message"
                  rows="6"
                  required
                ></textarea>
              </div>
              
              <button 
                type="submit" 
                className={`btn btn-primary ${isSubmitting ? 'loading' : ''}`}
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <i className="fas fa-spinner fa-spin"></i>
                    Sending...
                  </>
                ) : (
                  <>
                    <i className="fas fa-paper-plane"></i>
                    Send Message
                  </>
                )}
              </button>
              
              {submitMessage && (
                <div className={`submit-message ${
                  submitMessage.includes('✅') ? 'success' : 
                  submitMessage.includes('📧') ? 'loading' : 'error'
                }`}>
                  {submitMessage.includes('📧') ? (
                    <>
                      <i className="fas fa-spinner fa-spin"></i>
                      {submitMessage}
                    </>
                  ) : submitMessage.includes('✅') ? (
                    <>
                      <i className="fas fa-check-circle"></i>
                      {submitMessage}
                    </>
                  ) : (
                    <>
                      <i className="fas fa-exclamation-triangle"></i>
                      {submitMessage}
                    </>
                  )}
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
