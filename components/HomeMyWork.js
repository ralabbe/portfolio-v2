import React from 'react';
import styles from "./HomeMyWork.module.css";
import ProjectCard from "@/components/ProjectCard";
import Button from './Button';

const HomeMyWork = () => {
  const works = [
    {
      title: 'Wide Open Throttle',
      image: 'wot.webp',
      description: 'Using React and Next.js, I developed a website for the auto service company, Wide Open Throttle. It features a sleek dark design, window tint examples and information, customer reviews, social media links, and a contact form set up with Google reCaptcha v3.',
      alt: 'Wide Open Throttle home page',
      tools: ['HTML', 'CSS', 'JavaScript', 'React', 'Next.js', 'Node.js', 'Nodemailer', 'reCAPTCHA v3', 'Responsive Web Design'],
      development: false,
      modal: [
        <>
        <p>
          Wide Open Throttle was looking to start their web presence with a brand new website. I took the liberty to plan, design, and build a one page site featuring a hero section with a call to action, several sections full of information about their services, an image gallery with a custom made lightbox, a reviews carousel, and a contact form.
        </p>
        <p>
          Using <strong>React</strong> and <strong>Next.js</strong>, I created several components for reusable elements such as a button, navbar, footer, and the contact form which also used on a secondary contact page. I also used the components system to separate the more complicated sections like the image gallery so it&apos;s easier to develop.
        </p>
        <p>
          The form was created using a Next.js API route which runs a check with <strong>reCaptcha v3</strong> before sending an email using the <strong>Nodemailer</strong> package. Once the email is sent to the client successfully, the user on the front end receives a success message notifying them of a successful form submission.
        </p>
        <div style={{display: 'flex', justifyContent: 'center', gap: '5px', flexWrap: 'wrap'}}>
          <Button href="https://www.wotautogarage.com" target="_blank" text="View Site" ariaLabel="Visit the Wide Open Throttle site" color="red" />
          <Button href="https://github.com/ralabbe/wideopenthrottle" target="_blank" text="View Git Repo"  ariaLabel="View git repo for the Wide Open Throttle project" color="white" />
        </div>
        </>
      ]
    },
    {
      title: 'React Card Game',
      image: 'cah.webp',
      description: 'Wanting to take my love of gaming to a new level, I started currently working on a React game based on the popular card game Cards Against Humanity. This will feature websockets connecting to a .NET back-end using SignalR to handle room data and game logic.',
      alt: 'React card game home screen',
      tools: ['HTML', 'CSS', 'JavaScript', 'React', 'Socket.IO', '.NET', 'SignalR', 'Responsive Web Design'],
      development: true,
      modal: [
        <>
        <p>
          I&apos;ve seen a few sites try to incorporate a web version of the popular game Cards Against Humanity. But I was never a huge fan of the usability and visual aesthetic of those sites. I decided to take it upon myself to design and ceate a better web version of the card game.
        </p>
        <p>
          I used <strong>Figma</strong> to design and plan the aesthetics of the web game then started coding it using <strong>React</strong>. I used this as an opportunity to also learn a bit of <strong>.NET</strong> and <strong>SignalR</strong> for the backend for the room system and game mechanics. I hooked on to the backend using websocks via <strong>Socket.IO</strong>.
        </p>
        <p><strong>This project is still under development.</strong></p>
        </>
      ]
    },
    {
      title: 'Game Key Storage',
      image: 'steamkey.webp',
      description: `As a gamer, I've been collected many keys for the popular game client, Steam. I decided to turn my list of keys into a web app using React. With custom SQL queries, I connect to mySQL to create, store, and gather user account data to save and store Steam keys.`,
      alt: 'Game key storage project home page',
      tools: ['HTML', 'CSS', 'JavaScript', 'React', 'PHP', 'MySQL', 'Responsive Web Design'],
      development: true,
      modal: [
        <>
        <p>
          With <strong>React</strong>, I started developing a web app designed to save and manage my extra Steam keys (keys used to unlock games on the pouplar game client, Steam) utilizing an account system.
        </p>
        <p>
          I used the <strong>Axios</strong> package to connect to a <strong>PHP</strong> backend where I created custom queries using <strong>SQL</strong>. These queries were used to add, edit, and delete entries on a <strong>MySQL</strong> database including account information and steam key data tied to accounts. I also gathered a full list of steam games using their own <strong>API</strong> to generate a list of Steam games in a dropdown for users to select which is associated with a key.
        </p>
        <p><strong>This project is still under development.</strong></p>
        <div style={{display: 'flex', justifyContent: 'center', gap: '5px', flexWrap: 'wrap'}}>
          <Button href="/vid/steamkey-demo.mp4" target="_blank" text="View a demo" ariaLabel="Watch a video demo of the steam key storage project" color="red" />
          <Button href="https://github.com/ralabbe/steamkeystorage" target="_blank" text="View Git Repo" ariaLabel="View git repo for the steam key storage project" color="white" />
        </div>
        </>
      ]
    },
    {
      title: 'WordPress Development',
      image: 'wordpress.webp',
      description: `I've been working with highly custom WordPress themes, subthemes, and plugins for many years now. Each built to fit a clients needs aesthetically and efficiently. With custom post types, WordPress hooks, admin settings pages with custom settings, and much more.`,
      alt: 'Image of Wordpress icons',
      tools: ['HTML', 'CSS', 'JavaScript', 'PHP', 'WordPress', 'SQL', 'MySQL', 'Responsive Web Design'],
      development: false,
      modal: [
        <>
          <p>
            I have worked with Wordpress theme and plugin development for years. This includes themes, child themes, and custom plugins. With them I have created highly custom template files, generated custom post types, created custom Wordpress hooks, reach out the APIs to gather and update data, create custom Wordpress admin settings pages with custom settings, manage multi-network Wordpress instances, and more.
          </p>
          <p>
            Along with custom plugins, I&apos;ve worked with popular plugins such as Advance Custom Fields, Yoast, Hummingbird, and more. Although, I&apos;ve mainly worked with custom themes, I&apos;ve also worked with well known themes and page builders such as Divi and Elementor.
          </p>
          <p>
            I&apos;ve had to migrate WordPress instances between servers in the past which involves exporting and importing database tables and downloading server files. I have also had to manually make edits to WordPress databases for several different reasons such as the server migrations mentioned before, manually resetting passwords, troubleshooting site issues, and more.
          </p>
          <p>
            Check out my GitHub repo for several projects related to a few WordPress projects.
          </p>
          <div style={{display: 'flex', justifyContent: 'center', gap: '5px', flexWrap: 'wrap'}}>
            <Button href="https://github.com/ralabbe?tab=repositories&q=wordpress" target="_blank" text="View WordPress Git Repos" ariaLabel="View my github for several project repos" color="red" />
          </div>
        </>
      ]
    }
  ];

  return (
    <section id="mywork" className={styles.wrapper}>
      <div className={styles.banner}>
        <h2 className={"styledTextLarge"}>My Work</h2>
        <div role="presentation" className={styles.bannerBackgroundText}>My Work My Work My Work My Work My Work My Work My Work My Work My Work My Work My Work My Work My Work My Work My Work My Work My Work My Work My Work My Work My Work</div>
      </div>
      <div className={`container ${styles.cardList}`}>
        {
          works.map((work, key) => {
            return <div key={`projectcards-${key}`} className={styles.cardWrapper}><ProjectCard work={work} /></div>
          })
        }
      </div>
    </section>
  );
};

export default HomeMyWork;