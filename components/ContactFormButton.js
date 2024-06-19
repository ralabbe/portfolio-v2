"use client";
import { useState } from 'react';
import Button from "./Button";
import ContactForm from "./ContactForm";
import Modal from "@/components/Modal";

const ContactFormButton = ({
    color = 'white',
    text = 'Contact',
    icon = 'envelope'
}) => {
    const [isModalActive, setIsModalActive] = useState(false);

    function checkActiveModal(){
        return isModalActive === true ? <Modal content={<ContactForm />} onClose={() => { setIsModalActive(false); }} /> : '';
    }

    return (
        <>
            <Button color={color} text={text} icon={icon} onClick={() => { setIsModalActive(true); }} />
            {checkActiveModal()}
        </>
    );
};

export default ContactFormButton;