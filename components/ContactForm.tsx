"use client";
import React, { useState } from 'react';
import { useReCaptcha } from "next-recaptcha-v3";
import Button from './Button';
import styles from "./ContactForm.module.css";
import { sendContactForm } from "@/lib/api.js";

const ContactForm = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const [sending, setSending] = useState(false);
    const [formSent, setFormSent] = useState(false);
    const [formSendError, setFormSendError] = useState(false);

    const { executeRecaptcha } = useReCaptcha();

    async function formSubmit(){
        const token = await executeRecaptcha("form_submit");

        setSending(true);
        setFormSendError(false);
        
        const response = await sendContactForm({
            name: name,
            email: email,
            message: message,
            token: token,
        });

        if (typeof response === 'object' && response.success === true){
            setFormSent(true)
        } else {
            setFormSendError(true);
        }

        setSending(false);
    }
    
    if (formSent === true){
        return (
            <div className={styles.formSentMessageWrapper}>
                <p className={styles.formHeaderWrapper}><span className={`styledTextMedium ${styles.formHeader}`}>Your message has been sent!</span></p>
                <p>Thanks for getting in touch! I&quot;ll email back as soon as I get the chance. In the meantime feel free to check out more of my portfolio.</p>
            </div>
        );
    } else {
        return (
            <>
                <p className={styles.formHeaderWrapper}><span className={`styledTextMedium ${styles.formHeader}`}>Have a question?</span></p>
                <p>Fill out the form below to get in touch about any of my projects, skillsets, would like to collaborate, or whatever you have on your mind.</p>
                <form className={styles.formWrapper} onSubmit={(e) => { e.preventDefault(); formSubmit(); }}>
                    <div className={styles.inputWrapperDuo}>
                        <div className={styles.inputWrapper}>
                            <label htmlFor="contactName" className={styles.requiredLabel} aria-label="Name - required">Name</label>
                            <input type="text" id="contactName" name="contactName" value={name} onChange={(e) => { setName(e.target.value) }} placeholder="First and last name" required />
                        </div>
                        <div className={styles.inputWrapper}>
                            <label htmlFor="contactEmail" className={styles.requiredLabel} aria-label="Email - required">Email</label>
                            <input type="email" id="contactEmail" name="contactEmail" value={email} onChange={(e) => { setEmail(e.target.value) }} placeholder="Your email" required />
                        </div>
                    </div>
                    <div className={styles.inputWrapper}>
                        <label htmlFor="contactQuestion" className={styles.requiredLabel}>Message</label>
                        <textarea id="contactQuestion" name="contactQuestion" value={message} onChange={(e) => { setMessage(e.target.value) }} placeholder="Enter your question or request." rows={5} required />
                    </div>
                    <div style={{ padding: 5 }}>
                        <Button color="red" buttonType="submit" text={sending === true ? 'Sending...' : 'Submit'} disabled={sending === true ? true : false} />
                        {formSendError === true ? <p className={styles.formErr}>An error occurred. Please try again.</p> : ''}
                    </div>
                </form>
            </>
        );
    }
};

export default ContactForm;