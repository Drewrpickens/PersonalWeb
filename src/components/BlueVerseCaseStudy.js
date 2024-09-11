import React from 'react';
import styles from './BlueVerseCaseStudy.module.css';
import { RiceBusinessPlan, TTUAccelorator, BlueVerseLaunch } from '../ImageRepository/ImageRepository';

const TimelineItem = ({ date, title, content, image, caption }) => (
  <div className={styles.timelineItem}>
    <div className={styles.timelineContent}>
      <div className={styles.date}>{date}</div>
      <h2>{title}</h2>
      {content}
      {image && (
        <div className={styles.imageContainer}>
          <img src={image} alt={title} className={styles.image} />
          <p className={styles.imageCaption}>{caption}</p>
        </div>
      )}
    </div>
  </div>
);

const BlueVerseCaseStudy = () => {
  return (
    <div className={styles.caseStudy}>
      <div className={styles.header}>
        <h1 className={styles.title}>BlueVerse: A Journey of Innovation and Growth</h1>
        <div className={styles.subtitle}>From University Project to Thriving Startup</div>
      </div>
      
      <section className={styles.timeline}>
        <TimelineItem 
          date="November 2021"
          title="The Genesis"
          content={
            <>
              <p>BlueVerse was founded with a vision to revolutionize how local businesses connect with university communities. We began raising capital to bring our innovative product to life.</p>
              <ul className={styles.featureList}>
                <li>Conceptualized the BlueVerse platform</li>
                <li>Initiated fundraising efforts</li>
                <li>Formed the founding team</li>
              </ul>
            </>
          }
        />

        <TimelineItem 
          date="February 4, 2022"
          title="Product Launch"
          content={
            <p>We successfully launched the BlueVerse platform in our first market: Lubbock, TX. This marked the beginning of our journey to transform local business operations and student engagement.</p>
          }
          image={BlueVerseLaunch}
          caption="One of our partnered businesses using BlueVerse to sell Skip the Line Passes"
        />

        <TimelineItem 
          date="March 2022"
          title="TTU Accelerator Program"
          content={
            <>
              <p>BlueVerse competed in the Texas Tech University Accelerator program, securing valuable resources for our growth:</p>
              <ul className={styles.featureList}>
                <li>Won $25,000 in funding</li>
                <li>Gained access to industry-leading mentors</li>
                <li>Received guidance crucial for our startup journey</li>
              </ul>
            </>
          }
          image={TTUAccelorator}
          caption="BlueVerse team at the TTU Accelerator Program"
        />

        <TimelineItem 
          date="April 2022"
          title="Rice Business Plan Competition"
          content={
            <>
              <p>BlueVerse gained significant recognition by placing highly in the prestigious Rice Business Plan Competition, one of the world's largest and richest graduate student startup competitions.</p>
              <p>Our innovative business model and growth potential earned us a total of $145,000 in funding, providing a significant boost to our expansion plans.</p>
            </>
          }
          image={RiceBusinessPlan}
          caption="BlueVerse founders with the $145,000 check from the Rice Business Plan Competition"
        />

        <TimelineItem 
          date="Summer 2022 - Spring 2023"
          title="Expansion and Feature Development"
          content={
            <>
              <p>Following our early successes, we focused on expanding into new markets and enhancing our platform based on user feedback:</p>
              <ul className={styles.featureList}>
                <li>Added more businesses and users across multiple university towns</li>
                <li>Developed new operational features to better serve our business clients</li>
                <li>Implemented NFC-enabled table tech and digital menus</li>
                <li>Launched loyalty programs and personalized push notifications</li>
                <li>Integrated with major POS systems like Toast, Clover, and Square</li>
              </ul>
            </>
          }
        />

        <TimelineItem 
          date="Fall 2023"
          title="Seed Funding Success"
          content={
            <>
              <p>Our continuous growth and innovation caught the attention of investors, leading to a successful seed funding round:</p>
              <ul className={styles.featureList}>
                <li>Raised $500,000 in seed funding</li>
                <li>Achieved a pre-money valuation of $8 million</li>
                <li>Accelerated growth, expanded team, and further developed technology</li>
              </ul>
            </>
          }
        />

        <TimelineItem 
          date="Present Day"
          title="Continuing to Innovate"
          content={
            <>
              <p>Today, BlueVerse continues to thrive:</p>
              <ul className={styles.featureList}>
                <li>Over 17,000 downloads across App Store and Google Play</li>
                <li>Raised a total of $1.6+ million in funding</li>
                <li>Expanded to multiple university towns</li>
                <li>Achieved a remarkably low 4.76% churn rate for businesses using our table-tech hardware</li>
              </ul>
              <p>We remain committed to our mission of transforming the landscape of local business operations and student engagement in university communities across the nation.</p>
            </>
          }
        />
      </section>
    </div>
  );
};

export default BlueVerseCaseStudy;