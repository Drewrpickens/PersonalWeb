import React from 'react';
import styles from './Skills.module.css';

const SkillBar = ({ skill, level }) => (
  <div className={styles.skillBar}>
    <div className={styles.skillInfo}>
      <span>{skill}</span>
      <span>{level}%</span>
    </div>
    <div className={styles.skillProgress}>
      <div className={styles.skillLevel} style={{ width: `${level}%` }}></div>
    </div>
  </div>
);

const Skills = () => {
  const technicalSkills = [
    { skill: 'React / React Native', level: 90 },
    { skill: 'JavaScript (ES6+)', level: 95 },
    { skill: 'HTML5 & CSS3', level: 90 },
    { skill: 'Python', level: 85 },
    { skill: 'SQL', level: 80 },
    { skill: 'Git / Version Control', level: 85 },
  ];

  const professionalSkills = [
    { skill: 'Project Management', level: 90 },
    { skill: 'Team Leadership', level: 95 },
    { skill: 'Problem Solving', level: 85 },
    { skill: 'Communication', level: 100 },
    { skill: 'Entrepreneurship', level: 85 },
  ];

  return (
    <div className={styles.skillsContainer}>
      <h1 className={styles.title}>My Skills</h1>
      <p className={styles.subtitle}>A combination of technical expertise and professional acumen</p>
      
      <div className={styles.skillsGrid}>
        <div className={styles.skillsColumn}>
          <h2 className={styles.skillsTitle}>
            <svg className={styles.icon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 20V10M12 20V4M6 20v-6"/>
            </svg>
            Technical Skills
          </h2>
          {technicalSkills.map((skill, index) => (
            <SkillBar key={index} skill={skill.skill} level={skill.level} />
          ))}
        </div>
        
        <div className={styles.skillsColumn}>
          <h2 className={styles.skillsTitle}>
            <svg className={styles.icon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
              <circle cx="9" cy="7" r="4"/>
              <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/>
            </svg>
            Professional Skills
          </h2>
          {professionalSkills.map((skill, index) => (
            <SkillBar key={index} skill={skill.skill} level={skill.level} />
          ))}
        </div>
      </div>
      
      <div className={styles.additionalSkills}>
        <h2 className={styles.skillsTitle}>
          <svg className={styles.icon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polygon points="12 2 2 7 12 12 22 7 12 2"/>
            <polyline points="2 17 12 22 22 17"/>
            <polyline points="2 12 12 17 22 12"/>
          </svg>
          Additional Competencies
        </h2>
        <ul className={styles.skillsList}>
          <li>Agile Methodologies</li>
          <li>UI/UX Design Principles</li>
          <li>API Integration</li>
          <li>Cross-functional Collaboration</li>
          <li>Data Analysis</li>
          <li>Continuous Learning</li>
        </ul>
      </div>
      
      <div className={styles.quote}>
        <blockquote>
          "The capacity to learn is a gift; the ability to learn is a skill; the willingness to learn is a choice."
        </blockquote>
        - Brian Herbert
      </div>
    </div>
  );
};

export default Skills;