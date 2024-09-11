import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Home.module.css';
import { HeadShot, Logo } from '../ImageRepository/ImageRepository';

function Home() {
  return (
    <div className={styles.home}>
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>
            <span className={styles.heroName}>Drew Pickens</span>
            <span className={styles.heroRole}>Co-Founder, Front-End Developer & Project Manager</span>
          </h1>
          <p className={styles.heroText}>Innovating digital solutions for local businesses in university towns</p>
          <Link to="/contact" className={styles.ctaButton}>Get in Touch</Link>
        </div>
        <div className={styles.heroImage}>
          <img src={HeadShot} alt="Drew Pickens" />
        </div>
      </section>

      <section className={styles.quickInfo}>
        <div className={styles.infoCard}>
          <h3>Experience Highlights</h3>
          <ul>
            <li>Co-Founder of BlueVerse since 2021</li>
            <li>Led innovative software platform development</li>
            <li>Managed cross-functional team of 6</li>
            <li>Raised $1.6+ million in funding</li>
          </ul>
          <Link to="/experience" className={styles.moreLink}>Explore My Journey</Link>
        </div>
        <div className={styles.infoCard}>
          <h3>Technical Expertise</h3>
          <ul>
            <li>React & React Native</li>
            <li>Front-end Development</li>
            <li>Project Management</li>
            <li>UI/UX Design</li>
          </ul>
          <Link to="/skills" className={styles.moreLink}>View All Skills</Link>
        </div>
        <div className={styles.infoCard}>
          <h3>Education & Achievements</h3>
          <ul>
            <li>B.S. in Computer Science, Texas Tech</li>
            <li>Minor in Mathematics</li>
            <li>Rice Business Plan Competition finalist</li>
          </ul>
          <Link to="/achievements" className={styles.moreLink}>Discover More</Link>
        </div>
      </section>

      <section className={styles.featuredProject}>
        <div className={styles.projectContent}>
          <h3>Featured Project: BlueVerse</h3>
          <p>Revolutionizing local business operations in university towns</p>
          <div className={styles.projectStats}>
            <div className={styles.stat}>
              <span className={styles.statNumber}>17,000+</span>
              <span className={styles.statLabel}>Downloads</span>
            </div>
            <div className={styles.stat}>
              <span className={styles.statNumber}>$1.6M+</span>
              <span className={styles.statLabel}>Funding Raised</span>
            </div>
            <div className={styles.stat}>
              <span className={styles.statNumber}>300+</span>
              <span className={styles.statLabel}>Partnered Businesses</span>
            </div>
          </div>
          <h4>Key Features:</h4>
          <ul className={styles.featureList}>
            <li>NFC-enabled table tech</li>
            <li>Digital menus & mobile ordering</li>
            <li>Loyalty programs & digital punch cards</li>
            <li>Personalized push notifications</li>
          </ul>
          <Link to="/blueverse-case-study" className={styles.projectLink}>Read the Full Case Study</Link>
        </div>
        <div className={styles.projectImage}>
          <img src={Logo} alt="BlueVerse Logo" />
        </div>
      </section>

      <section className={styles.callToAction}>
        <h3>Let's Innovate Together</h3>
        <p>Passionate about technology and proven in project management, I'm ready to tackle new challenges and drive digital innovation. Whether you're modernizing your local business or seeking a versatile developer and leader, let's connect and create something extraordinary.</p>
        <Link to="/contact" className={styles.ctaButton}>Reach Out Today</Link>
      </section>
    </div>
  );
}

export default Home;