import React from 'react';
import Image from "next/image";
import Link from "next/link";
import styles from "./Footer.module.css";
import Button from './Button';
import ContactFormButton from '@/components/ContactFormButton';

const Footer = () => {
    return (
        <footer id="footer" className={styles.wrapper}>
            <Link href="#hero" className={styles.scrollToTop}>Scroll to Top </Link>
            <div className={styles.footerWrapper}>
                <div className={styles.footerLeftWrapper}>
                    <div className={styles.logoWrapper}><Image src="/img/logos/ralabbe-logo.svg" alt="Ralabbe logo" width={100} height={100} /></div>
                    <p>
                        <span className={'styledTextMedium'}>Rafael Labbe</span><br/>
                        <Link href="mailto:rafael.r.labbe@gmail.com">rafael.r.labbe@gmail.com</Link><br/>
                        <Link href="tel:954-601-7186">954-601-7186</Link>
                    </p>
                </div>
                <div className={styles.footerRightWrapper}>
                    <div><Button text="Resume" icon="file" href="https://www.ralabbe.com/files/RafaelLabbe_Resume.pdf" target="_blank" /></div>
                    <div><Button href="https://github.com/ralabbe" text="GitHub" ariaLabel="View my Github repo" target="_blank" icon="github" /></div>
                    <div><Button text="Linkedin" icon="linkedin" href="https://www.linkedin.com/in/ralabbe" target="_blank" /></div>
                    <div><ContactFormButton text="Email me" /></div>
                    
                    {/* <div><Button href="tel:954-601-7186" text="Call me" icon="phone" /></div> */}
                </div>
                <div className={styles.cardListBackground}></div>
            </div>
        </footer>
    );
};

export default Footer;