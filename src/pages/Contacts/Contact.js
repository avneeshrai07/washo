import React from 'react';
import './Contact.css'; // Ensure to link to your CSS file for styling

const Contact = () => {
  return (
    <div className="contact-container">
      <div className="contact-content">
        <h1 className="contact-title">Get in Touch</h1>
        <p className="contact-description">I'd love to hear from you! Feel free to reach out through any of the following platforms:</p>

        <div className="contact-info">
          <div className="contact-item">
            <h2>LinkedIn</h2>
            <a href="https://www.linkedin.com/in/avneesh-rai/" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin"></i> Avneesh Rai
            </a>
          </div>
          <div className="contact-item">
            <h2>Email</h2>
            <a href="mailto:ofc.avneesh@gmail.com">
              <i className="fas fa-envelope"></i> ofc.avneesh@gmail.com
            </a>
          </div>
          <div className="contact-item">
            <h2>GitHub</h2>
            <a href="https://github.com/avneeshrai07" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-github"></i> Avneesh Rai
            </a>
          </div>
          <div className="contact-item">
            <h2>Washo Project</h2>
            <a href="https://avneeshrai07.github.io/washo/" target="_blank" rel="noopener noreferrer">
              <i className="fas fa-project-diagram"></i> Washo
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
