import React from 'react';
import styles from './Hobbies.module.css';
import { HockeyImage, GolfImage, FishingImage } from '../ImageRepository/ImageRepository';

const Hobbies = () => {
  return (
    <div className={styles.hobbies}>
      <h1 className={styles.title}>My Hobbies & Interests</h1>
      <p className={styles.intro}>
        When I'm not innovating in the tech world, you can find me pursuing these passions:
      </p>
      
      <div className={styles.hobbyGrid}>
        <div className={styles.hobbyItem}>
          <img src={HockeyImage} alt="Playing hockey in college" className={styles.hobbyImage} />
          <div className={styles.hobbyContent}>
            <h2>Ice Hockey</h2>
            <p>My love for hockey began in college and continues today. I played for the Texas Tech Ice Hockey team and now enjoy competing in an adult league. The teamwork, strategy, and fast-paced nature of the game keep me coming back to the ice.</p>
          </div>
        </div>
        
        <div className={styles.hobbyItem}>
          <img src={GolfImage} alt="Golfing with family" className={styles.hobbyImage} />
          <div className={styles.hobbyContent}>
            <h2>Golfing</h2>
            <p>Golf is more than just a sport for me—it's a way to connect with family. Some of my favorite moments are spent on the green with my brother and father, combining friendly competition with quality family time.</p>
          </div>
        </div>
        
        <div className={styles.hobbyItem}>
          <img src={FishingImage} alt="Fishing adventure" className={styles.hobbyImage} />
          <div className={styles.hobbyContent}>
            <h2>Fishing</h2>
            <p>There's something uniquely peaceful about fishing. Whether it's the challenge of the catch or the tranquility of being out on the water, fishing provides me with a perfect balance to my fast-paced tech career.</p>
          </div>
        </div>
      </div>
      
      <div className={styles.conclusion}>
        <p>These hobbies not only provide a welcome break from my professional life but also contribute to my personal growth. They teach me valuable lessons about patience, strategy, and the importance of balancing work with play—skills that I bring back to my role as an entrepreneur and developer.</p>
      </div>
    </div>
  );
};

export default Hobbies;