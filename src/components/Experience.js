import React from 'react';
import styles from './Experience.module.css';
import { Logo, PhiKappaPsiLogo, BrassTopLogo } from '../ImageRepository/ImageRepository';

const ExperienceItem = ({ logo, title, company, date, description, achievements, isStudent }) => (
  <div className={styles.experienceItem}>
    <div className={styles.logoContainer}>
      <img src={logo} alt={`${company} logo`} className={styles.companyLogo} />
    </div>
    <div className={styles.experienceContent}>
      <h3 className={styles.experienceTitle}>{title}</h3>
      <h4 className={styles.companyName}>{company}</h4>
      <p className={styles.experienceDate}>{date}</p>
      {isStudent && <span className={styles.studentBadge}>Full-time Student</span>}
      <p className={styles.experienceDescription}>{description}</p>
      <ul className={styles.achievementsList}>
        {achievements.map((achievement, index) => (
          <li key={index}>{achievement}</li>
        ))}
      </ul>
    </div>
  </div>
);

const Experience = () => {
  return (
    <div className={styles.experienceContainer}>
      <h1 className={styles.title}>Professional Experience</h1>
      <p className={styles.subtitle}>A journey of growth, innovation, and leadership while pursuing higher education</p>
      
      <div className={styles.timeline}>
        <ExperienceItem 
          logo={Logo}
          title="Co-Founder"
          company="BlueVerse"
          date="November 2021 - Present"
          description="Led the development of an innovative platform for local enterprises in university towns, driving growth and operational efficiency."
          achievements={[
            "Grew platform to 17,000+ downloads on App Store and Google Play",
            "Raised over $1.6 million in funding, including grants from Texas Tech",
            "Managed a cross-functional team of 5 developers and 2 designers",
            "Implemented integrations with major POS systems like Toast, Clover, and Square"
          ]}
          isStudent={true}
        />
        
        <ExperienceItem 
          logo={PhiKappaPsiLogo}
          title="President"
          company="Phi Kappa Psi Fraternity"
          date="December 2021 - December 2022"
          description="Led the local chapter of 158 fraternity brothers, coordinating activities and setting strategic goals."
          achievements={[
            "Coordinated actions of fraternity committees",
            "Set goals, objectives, and deadlines for activities",
            "Created and hosted 'Lubbock City Limits' event, selling over $100,000 worth of tickets"
          ]}
          isStudent={true}
        />
        
        <ExperienceItem 
          logo={PhiKappaPsiLogo}
          title="Treasurer"
          company="Phi Kappa Psi Fraternity"
          date="December 2020 - December 2021"
          description="Managed financial aspects of the Texas Tech Chapter, ensuring fiscal responsibility and growth."
          achievements={[
            "Managed and paid vendors, delegating funds to committees",
            "Collected over $200,000 in payments from members",
            "Implemented new budgeting strategies to improve financial stability"
          ]}
          isStudent={true}
        />
        
        <ExperienceItem 
          logo={BrassTopLogo}
          title="Server"
          company="Brass Tap Restaurant"
          date="Summer 2021"
          description="Developed customer service skills and contributed to a positive dining experience for patrons."
          achievements={[
            "Consistently received positive customer feedback",
            "Developed multitasking and time management skills in a fast-paced environment",
            "Collaborated effectively with kitchen staff to ensure order accuracy and timeliness"
          ]}
          isStudent={true}
        />
      </div>
      
      <div className={styles.skills}>
        <h2 className={styles.skillsTitle}>Key Skills Developed</h2>
        <div className={styles.skillsGrid}>
          {['Leadership', 'Project Management', 'Financial Management', 'Team Collaboration', 'Customer Service', 'Problem Solving'].map((skill, index) => (
            <div key={index} className={styles.skillItem}>
              <svg className={styles.skillIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                <polyline points="22 4 12 14.01 9 11.01"/>
              </svg>
              <span>{skill}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;