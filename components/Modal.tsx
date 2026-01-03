"use client"
import { useEffect, useCallback } from 'react';
import Image from 'next/image';
import styles from "./Modal.module.css";

const stringArray: string[] = [];

const Modal = ({
    onClose = () => {},
    image = '',
    alt = '',
    title = '',
    content = <></>,
    tools = stringArray,
}) => {
	const handleClickOpen = useCallback(() => {
        document.getElementsByTagName('html')[0].classList.remove('modalActive');
        onClose();
    }, [onClose])

    useEffect(() => {
        document.getElementsByTagName('html')[0].classList.add('modalActive');
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape'){
                handleClickOpen();
                window.removeEventListener("keydown", handleKeyDown);
            }
        }

        window.addEventListener("keydown", handleKeyDown);
    }, [handleClickOpen]);
  
    return (
        <>
            <div className={styles.modalWrapper}>
                <div className={styles.modal} aria-modal="true" aria-labelledby="modaltitle" aria-describedby="modaldescription">
                    <button className={`${styles.close}`} onClick={handleClickOpen} aria-label="Close popup" >X</button>
                    <div className={styles.contentWrapper}>
                        {image !== '' ? <div className={styles.imgWrapper}><Image src={image} alt={alt} fill /></div> : ''}
                        {title !== '' ? <div className={`styledRedBackground ${styles.titleWrapper}`}><h3 id="modaltitle" className={`styledTextMedium ${styles.title}`}>{title}</h3></div> : ''}
                        <div id="modaldescription" className={`${styles.content} ${!image && !title ? styles.fullContent : ''}`}>
                        <div className={styles.toolsWrapper}>
                            {tools.map((tool, key) => {
                                return <div key={`projectmodal-tool-${key}`} className={styles.tool}>{tool}</div>;
                            })}
                        </div>  
                        {<>{content}</>}
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.overlay} onClick={() => { handleClickOpen(); }}></div>
        </>
    );
};

export default Modal;