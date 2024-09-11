import React from 'react';
import styles from './Contact.module.css';

const Contact = () => {
  return (
    <div className={styles.contactContainer}>
      <h1 className={styles.title}>Get in Touch</h1>
      <p className={styles.subtitle}>I'm always open to new opportunities and collaborations. Feel free to reach out!</p>
      
      <div className={styles.contactGrid}>
        <div className={styles.contactItem}>
          <svg className={styles.icon} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
          </svg>
          <h2>Phone</h2>
          <p>(469) 888-9419</p>
        </div>
        
        <div className={styles.contactItem}>
          <svg className={styles.icon} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
            <polyline points="22,6 12,13 2,6"></polyline>
          </svg>
          <h2>Email</h2>
          <a href="mailto:DrewRPickens@gmail.com">DrewRPickens@gmail.com</a>
        </div>
        
        <div className={styles.contactItem}>
          <svg className={styles.icon} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
            <rect x="2" y="9" width="4" height="12"></rect>
            <circle cx="4" cy="4" r="2"></circle>
          </svg>
          <h2>LinkedIn</h2>
          <a href="https://www.linkedin.com/in/drew-pickens-robert123/" target="_blank" rel="noopener noreferrer">linkedin.com/in/drew-pickens</a>
        </div>
      </div>
      
      <div className={styles.ctaSection}>
        <h2>Ready to collaborate?</h2>
        <p>Whether you have a project in mind or just want to chat about technology and innovation, I'm here to connect!</p>
        <a href="mailto:DrewRPickens@gmail.com" className={styles.ctaButton}>Send me a message</a>
      </div>
    </div>
  );
};

export default Contact;