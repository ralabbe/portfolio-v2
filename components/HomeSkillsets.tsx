import React from 'react';
import styles from "./HomeSkillsets.module.css";
import SkillsetCard from "@/components/SkillsetCard";

const HomeSkillsets = () => {
    const cardList = [
        { type: 'filler' },
        { type: 'filler' },
        {
            title: `React + Next.js`,
            description: `Using the React library's component-based architecture has made web development more efficient, reusable, and organized. Adding Next.JS to incorporate server-side rendering and a built in routing system is the cherry on top. I've used them on several projects including this very site.`
        },
        {
            title: `HTML + CSS + JS`,
            description: `HTML, CSS, and JavaScript is the bread and butter for any front end web developer and I've been using all 3 languages for nearly two decades now. With these languages constantly evolving, I constantly look for new ways of improving them in my projects and personal work.`
        },
        {
            title: `PHP`,
            description: `I've used PHP as a one of my backend languages for years now. Especially when working in conjunction with projects that require it like WordPress plugin and theme development. It has been very useful for manipulating data in PHP MySQL, email sending, API connectivity, and more.`
        },
        { type: 'filler' },
        { type: 'filler' },
        { type: 'filler' },
        { type: 'filler' },
        { type: 'filler' },
        {
            title: `Database Management`,
            description: `Information architecture and database management has been a staple in my projects for years. I've used it in various types of projects, personal and professional, and understand the importance of properly organizing information for efficiency.`,
        },
        {
            title: `ADA Compliance`,
            description: `As developers, it's crucial that we cater our work to every person no matter their hardships. Extensive testing is vital to make sure site functionality is accessible to all. I am proud to have learned this from the UCF Recreation and Wellness center where I worked as a marketing assistant.`
        },
        { type: 'filler' },
        { type: 'filler' },
        { type: 'filler' },
        { type: 'filler' },
        { type: 'filler' },
        {
            title: `Agile Development`,
            description: `The key to any successful project is how it is managed. Agile takes this to a whole other level by scheduling and planning everything with set deadlines. Planning isn't done without taking outside noise like tickets and bug fixes into account. Using the right tools is just as important.`
        },
        {
            title: `API Implementation`,
            description: `I have incorporated support for several APIs throughout my career. This includes well known tools like the Google suite of RESTful APIs, Payment Gateways such as Paypal and Stripe, and even private APIs specific to a project I may be working on.`
        },
        {
            title: `Payment Gateway`,
            description: `No E-Commerce setup is complete without a way for clients to accept payment! I've worked with popular payment gateways to handle just that. From simple setups like adding a quick PayPal button to more complicated implementations such as using the Paypal SDK or Stripe.`
        },
        { type: 'filler' },
        { type: 'filler' },
    ];

    return (
        <section id="myskillsets" className={styles.wrapper}>
            <div className={styles.bannerWrapper}><h2 className={`styledTextLarge ${styles.banner}`}>Skillsets</h2></div>
            <div className={styles.cardList}>
                <div className={styles.cardListGrid}>
                    {cardList.map((cardInfo, key) => {
                        return <SkillsetCard key={key} title={cardInfo.title} description={cardInfo.description} type={cardInfo.type} />
                    })}
                </div>
                <div className={styles.cardListBackground}></div>
            </div>
        </section>
    );
};

export default HomeSkillsets;