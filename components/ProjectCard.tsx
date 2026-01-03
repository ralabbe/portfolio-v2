"use client"

import { useState } from 'react';
import Image from "next/image";
import styles from "./ProjectCard.module.css";
import Button from "@/components/Button";
import Modal from "@/components/Modal";

const stringArray: string[] = [];

const ProjectCard = ({
    work = { modal: <></>, description: '', title: '', image: '', alt: '', tools: stringArray },
}) => {
    const [isModalActive, setIsModalActive] = useState(false);

    function checkActiveModal(){
        const content = work.modal ? work.modal : <>work.description</>;
        return isModalActive === true ? <Modal title={work.title} content={content} image={`img/projects/modal-${work.image}`} tools={work.tools} alt={work.alt} onClose={() => { setIsModalActive(false); }} /> : '';
    }

    return (
        <>
            <div className={styles.card}>
                <div className={styles.imageWrapper}>
                    <Image src={`img/projects/${work.image}`} alt={work.alt} width={340} height={269} />
                </div>
                <div className={`styledRedBackground ${styles.nameWrapper}`}><h2 className={`styledTextMedium`}>{work.title}</h2></div>
                    <p className={styles.description}>{work.description}</p>
                    <div className={styles.footer}>
                    <Button text="Learn More" icon="location-arrow" onClick={() => {setIsModalActive(true)}} />
                </div>
            </div>
            {checkActiveModal()}
        </>
    );
};

export default ProjectCard;