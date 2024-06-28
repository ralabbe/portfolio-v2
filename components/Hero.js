'use client';

import Image from "next/image";
import styles from "./Hero.module.css";
import Button from "@/components/Button";
import ContactFormButton from '@/components/ContactFormButton';

const Hero = () => {
  var imagesRowOne = [
    { url: 'hero_7', alt: 'Card game website home screen', size: 'full' },
    { url: 'html5-badge', alt: 'HTML5 badge icon', size: 'logo' },
    { url: 'hero_5', alt: 'Wide Open Throttle reviews section', size: 'full' },
  ];

  var imagesRowTwo = [
    { url: 'js-badge', alt: 'Javascript badge icon', size: 'logo' },
    { url: 'hero_1', alt: 'Wide Open Throttle home page', size: 'full' },
    { url: 'react', alt: 'React logo', size: 'logo' },
  ];

  var imagesRowThree = [
    { url: 'hero_6', alt: 'Wide Open Throttle contact us page', size: 'full' },
    { url: 'css3-badge', alt: 'CSS badge icon', size: 'logo' },
    { url: 'hero_9', alt: 'Game key storage project', size: 'full' },
  ];

  const allImageRows = [imagesRowOne, imagesRowTwo, imagesRowThree];

  return (
    <section id="hero" className={`${styles.heroSection}`}>
      <div className={`${styles.contentWrapper} container`}>
        <div className={styles.infoWrapper}>
          <div className={styles.logoWrapper}><Image src={`/img/logos/ralabbe-logo_r.svg`} alt="Ralabbe logo"  width={80} height={80} /></div>
          <h1 className={styles.heading} aria-label="Rafael Labbe">RAFAEL<br/>LABBE</h1>
          <p className={styles.subheading}>Front End<br/>Web Engineer</p>
          <nav className={styles.buttonGroup}>
            <Button href="#mywork" text="Work" ariaLabel="View my work" icon="laptop" />
            <Button href="#aboutme" text="About" ariaLabel="Learn about me" icon="id-badge" />
            <Button href="https://github.com/ralabbe" text="GitHub" ariaLabel="View my Github repo" target="_blank" icon="github" iconType="fab" />
            <ContactFormButton />
          </nav>
        </div>
        <div className={styles.imagesCircleWrapper}>
          <div className={styles.imagesWrapper}>
            <div className={`${styles.imagesRowsWrapper}`}>
              {allImageRows.map((row, key) => { // Cycle through all rows
                return(
                  <div key={`heroimgrow-${key}`} className={`${styles.imagesRow}`}>
                    {row.map((img, key) => { // Cycle through individual row
                      let srcBase = img.size === 'logo' ? '/img/logos/' : '/img/hero/';
                      if (img.size === 'logo'){
                        return (
                          <picture key={`heroimg-${key}`}>
                            <img src={`${srcBase}${img.url}.svg`} alt={img.alt} loading="eager" />
                          </picture>
                        )
                      } else {
                        return(
                        <picture key={`heroimg-${key}`}>
                          <source media="(max-width: 767px)" srcSet={`${srcBase}mobile/${img.url}_mobile.webp`} />
                          <source media="(min-width: 768px)" srcSet={`${srcBase}${img.url}.webp`} />
                          <img src={`${srcBase}${img.url}.webp`} alt={img.alt} loading="eager" />
                        </picture>
                        )
                      }
                    })}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;