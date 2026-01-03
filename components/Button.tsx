'use client';

import React from 'react';
import Link from 'next/link';
import styles from './Button.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library, findIconDefinition, IconLookup, IconDefinition } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'

library.add(fab, fas);

const iconMap: Record<string, IconLookup> = {
    laptop: { prefix: "fas", iconName: "laptop" },
    idbadge: { prefix: "fas", iconName: "id-badge" },
    locationarrow: { prefix: "fas", iconName: "location-arrow" },
    envelope: { prefix: "fas", iconName: "envelope" },
    file: { prefix: "fas", iconName: "file" },
    crown: { prefix: "fas", iconName: "crown" },
    github: { prefix: "fab", iconName: "github" },
    linkedin: { prefix: "fab", iconName: "linkedin" },
};

let fn: () => void = () => {};

const Button = ({
    href = '/',
    text = 'Submit',
    color = '',
    disabled = false,
    buttonType = 'button',
    ariaLabel = '',
    target = '',
    rel = '',
    icon = '',
    onClick = fn,
}) => {
    ariaLabel = ariaLabel !== '' ? ariaLabel : text;
    disabled = disabled === true ? disabled : false;
    var colorClass = color.toLocaleLowerCase() === 'red' ? styles.buttonRed : styles.buttonWhite;
        colorClass = color.toLocaleLowerCase() === 'grey' ? styles.buttonGrey : colorClass;
        colorClass = disabled === true ? styles.buttonDisabled : colorClass;
    
    let iconElement = <></>;
        
    if (icon !== ''){
        const iconKey = icon.replace(/[^a-z0-9]/gi, "");
        
        if (iconMap[iconKey]){
            const iconDef: IconDefinition = findIconDefinition(iconMap[iconKey]);
            iconElement = <span className={styles.icon}><FontAwesomeIcon icon={iconDef} fixedWidth /></span>;
        }
    }
    
    const onClickEvent = onClick.toString() !== '()=>{}' ? true : false;
    if (onClickEvent === true || buttonType === 'submit'){
        return (
            <div className={`${styles.buttonWrapper} ${disabled === true ? styles.disabledButtonWrapper : ''}`}>
                <button className={`${styles.button} ${colorClass}`} aria-label={ariaLabel} disabled={disabled} tabIndex={0} type={buttonType === 'submit' ? 'submit' : 'button'} onClick={() => { if (onClickEvent === true) { onClick(); } }} rel={rel}>
                    {iconElement}{text}
                </button>
            </div>
        );
    } else {
        return (
            <div className={`${styles.buttonWrapper} ${disabled === true ? styles.disabledButtonWrapper : ''}`}>
                <Link href={href} target={target} className={`${styles.button} ${colorClass}`} aria-label={ariaLabel} tabIndex={0} rel={rel} >
                    {iconElement}{text}
                </Link>
            </div>
        );
    }
};

export default Button;