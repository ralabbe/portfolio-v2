import React from 'react';
import styles from "./SkillsetCard.module.css";

const SkillsetCard = ({
    type = '',
    title = '\u00A0', // Defaults to an empty space
    description = ''
}) => {
    return (
        <div className={`${styles.card} ${type === 'filler' ? styles.fillerCard : ''}`}>
            <div className={`styledTextMedium styledRedBackground ${styles.title}`}>{title}</div>
            <p className={styles.description}>{description}</p>
        </div>
    );
};

export default SkillsetCard;