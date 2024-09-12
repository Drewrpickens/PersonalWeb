import React from 'react';
import styles from './EducationAccomplishments.module.css';
import { TTULogo, RiceBusinessPlan, TTUAccelorator, PhiKappaPsiLogo, Logo, LCL } from '../ImageRepository/ImageRepository';

const AccomplishmentCard = ({ logo, title, details }) => (
  <div className={styles.accomplishmentCard}>
    <img src={logo} alt={`${title} Logo`} className={styles.logo} />
    <div className={styles.cardContent}>
      <h3>{title}</h3>
      <ul>
        {details.map((detail, index) => (
          <li key={index}>{detail}</li>
        ))}
      </ul>
    </div>
  </div>
);

const SkillItem = ({ skill, icon }) => (
  <div className={styles.skillItem}>
    <div className={styles.skillIcon}>{icon}</div>
    <span className={styles.skillName}>{skill}</span>
  </div>
);

const EducationAccomplishments = () => {
  const accomplishments = [
    {
      logo: Logo,
      title: "BlueVerse Co-Founder",
      details: [
        "Led development of innovative platform",
        "Grew to 17,000+ app downloads",
        "Raised $1.6+ million in total funding"
      ]
    },
    {
      logo: RiceBusinessPlan,
      title: "Rice Business Plan Competition",
      details: [
        "Secured $145,000 in funding",
        "Validated innovative business model",
        "Competed against top startups globally"
      ]
    },
    {
      logo: TTUAccelorator,
      title: "TTU Accelerator Program",
      details: [
        "Won $25,000 in funding",
        "Gained access to industry-leading mentors",
        "Refined business strategy and pitch"
      ]
    },
    {
      logo: PhiKappaPsiLogo,
      title: "Phi Kappa Psi Fraternity",
      details: [
        "Served as Chapter President",
        "Led a team of 158 fraternity brothers",
        "Managed chapter operations and events"
      ]
    },
    {
      logo: LCL,
      title: "Lubbock City Limits Event",
      details: [
        "Organized major university and city event",
        "Generated over $100,000 in ticket sales",
        "Managed logistics for 1000+ attendees"
      ]
    }
  ];

  const skills = [
    { name: 'React', icon: '⚛️' },
    { name: 'React Native', icon: '📱' },
    { name: 'JavaScript', icon: '🟨' },
    { name: 'Python', icon: '🐍' },
    { name: 'SQL', icon: '🗃️' },
    { name: 'Project Management', icon: '📊' },
    { name: 'Leadership', icon: '🚀' },
    { name: 'Problem Solving', icon: '🧩' },
    { name: 'UI/UX Design', icon: '🎨' }
  ];

  return (
    <div className={styles.container}>
      <h1 className={styles.mainTitle}>Education & Accomplishments</h1>
      
      <section className={styles.education}>
        <h2 className={styles.sectionTitle}>Education</h2>
        <div className={styles.educationCard}>
          <img src={TTULogo} alt="Texas Tech University Logo" className={styles.eduLogo} />
          <div className={styles.educationDetails}>
            <h3>Texas Tech University</h3>
            <p>Bachelor of Science in Computer Science</p>
            <p>Minor in Mathematics</p>
            <p className={styles.graduationDate}>Graduated: May 2023</p>
          </div>
        </div>
      </section>
      
      <section className={styles.accomplishments}>
        <h2 className={styles.sectionTitle}>Key Accomplishments</h2>
        <div className={styles.accomplishmentGrid}>
          {accomplishments.map((accomplishment, index) => (
            <AccomplishmentCard key={index} {...accomplishment} />
          ))}
        </div>
      </section>
      
      <section className={styles.skills}>
        <h2 className={styles.sectionTitle}>Skills Snapshot</h2>
        <div className={styles.skillsContainer}>
          {skills.map((skill, index) => (
            <SkillItem key={index} skill={skill.name} icon={skill.icon} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default EducationAccomplishments;