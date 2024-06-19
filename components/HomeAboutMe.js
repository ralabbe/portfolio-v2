import React from 'react';
import styles from "./HomeAboutMe.module.css";
import Image from 'next/image';
import AboutMeElement from './AboutMeElement';

const HomeAboutMe = () => {
  return (
    <section id="aboutme">
      <div className={`container ${styles.wrapper}`}>
        <div className={styles.profileWrapper}><Image src="/img/profile-bg.svg" aria-hidden="true" className={styles.profileBG} width={961} height={765} alt="Backgound image" /><Image src="/img/profile-image.webp" className={styles.profileImg} alt="Image of me, Rafael" fill /></div>
        <div className={styles.aboutMeWrapper}><AboutMeElement /></div>
      </div>
    </section>
  );
};

export default HomeAboutMe;