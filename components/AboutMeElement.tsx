'use client'

import React, { useState } from 'react';
import styles from "./AboutMeElement.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library, findIconDefinition, IconLookup, IconDefinition } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'
import Button from './Button';
import ContactFormButton from '@/components/ContactFormButton';

library.add(fab, fas);

const iconMap: Record<string, IconLookup> = {
    idbadge: { prefix: "fas", iconName: "id-badge" },
    crown: { prefix: "fas", iconName: "crown" },
};

const AboutMeElement = () => {
    const [currentPage, setCurrentPage] = useState('About');

    const pages = [
        {
            name: 'About',
            icon: 'idbadge',
            header: 'A little about me'
        },
        {
            name: 'Achievements',
            icon: 'crown',
            header: 'My Achievements'
        },
        // {
        //     name: 'Interests',
        //     icon: 'heart',
        //     header: 'What I like'
        // },
    ];

    function renderPage(page : String){
        if (page === 'Achievements'){
            return(
                <React.Fragment>
                Over the past 8 years I&apos;ve been mastering languages and libraries to constantly improve my career such as <strong>HTML</strong>, <strong>CSS</strong>, <strong>JavaScript</strong>, <strong>React</strong>, <strong>Next.JS</strong>, <strong>PHP</strong>, and <strong>SQL</strong>. While also learning important tools and technologies like <strong>Git</strong>, <strong>WordPress</strong>, <strong>Jira</strong>, <strong>MySQL</strong>, <strong>WooCommerce</strong>, and much much more. <br/><br/>
                Check back soon to see more of my many achievements.
                </React.Fragment>
            );
        } else if (page === 'Interests'){
            return(
                <React.Fragment>
                ...
                </React.Fragment>
            );
        } else {
            return(
                <React.Fragment>
                I&apos;m Rafael a Front End Web Engineer with over 8 years of professional experience. My goal in life is to constantly seek ways to improve myself. With that, I challenge myself to learn something new or improve upon my current knowledge with every project. I apply this mindset into my personal life as well and aim to constantly grow in one way or another.
                </React.Fragment>
            );
        }
    }

    const currentPageData = pages[pages.findIndex(i => i.name === currentPage)];
  
    return (
        <div>
            <nav className={styles.pageButtonGroup}>
                {pages.map((page, key) => {
                return <Button key={`aboutbutton-${key}`} onClick={() => { setCurrentPage(page.name); }} color={currentPage === page.name ? 'red' : 'white'} text={page.name} icon={page.icon} />
                })}
            </nav>
            <div className={styles.pageWrapper}>
                <div className={styles.headerWrapper}><h2 className={`styledTextLarge styledRedBackground ${styles.header}`}>
                    <span className={styles.headerIconWrapper}><FontAwesomeIcon icon={iconMap[currentPageData.icon]} fixedWidth /></span>
                    {currentPageData.header}
                    </h2>
                </div>
                <div className={styles.aboutCard}>
                    <p className={styles.content}>{renderPage(currentPage)}</p>
                    <div className={styles.footer}>
                        <div className={`styledWhiteBackground ${styles.footerTop}`}>
                            <span className={styles.footerText}>Contact</span>
                            <div className={styles.footerButtonWrapper}>
                                <Button text="Linkedin" icon="linkedin" href="https://www.linkedin.com/in/ralabbe" target="_blank" color="red" />
                                <ContactFormButton text="Email Me" color="red" />
                                {/* <Button text="Call me" icon="phone" color="red" href="tel:9546017186" /> */}
                            </div>
                        </div>
                        
                        <div className={`styledRedBackground ${styles.footerBottom}`}>
                            <span className={`styledTextLarge ${styles.footerText}`}>View More</span>
                            <div className={styles.footerButtonWrapper}>
                                <Button text="Resume" icon="file" href="https://www.ralabbe.com/files/RafaelLabbe_Resume.pdf" target="_blank" />
                                <Button href="https://github.com/ralabbe" text="GitHub" ariaLabel="View my Github repo" target="_blank" icon="github" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutMeElement;