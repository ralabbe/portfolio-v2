'use client';

import React from 'react';
import Link from 'next/link';
import styles from './Button.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'

library.add(fab, fas);

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
  iconType = 'fas',
  onClick = null,
}) => {
  ariaLabel = ariaLabel !== '' ? ariaLabel : text;
  disabled = disabled === true ? disabled : false;
  var colorClass = color.toLocaleLowerCase() === 'red' ? styles.buttonRed : styles.buttonWhite;
    colorClass = color.toLocaleLowerCase() === 'grey' ? styles.buttonGrey : colorClass;
    colorClass = disabled === true ? styles.buttonDisabled : colorClass;
    
  iconType = ['fab', 'fas'].includes(iconType) ? iconType : 'fas';
  icon = icon != '' ? <span className={styles.icon}><FontAwesomeIcon icon={[iconType, icon]} fixedWidth /></span> : '';
  
  if (typeof onClick === 'function' || buttonType === 'submit'){
    return (
      <div className={`${styles.buttonWrapper} ${disabled === true ? styles.disabledButtonWrapper : ''}`}>
        <button className={`${styles.button} ${colorClass}`} aria-label={ariaLabel} disabled={disabled} tabIndex={0} type={buttonType} onClick={() => { if (typeof onClick === 'function') { onClick(); } }} rel={rel}>
          {icon}{text}
        </button>
      </div>
    );
  } else {
    return (
      <div className={`${styles.buttonWrapper} ${disabled === true ? styles.disabledButtonWrapper : ''}`}>
        <Link href={href} target={target} className={`${styles.button} ${colorClass}`} aria-label={ariaLabel} tabIndex={0} disabled={disabled} onClick={() => { if (typeof onClick === 'function') { onClick(); } }} rel={rel} >
          {icon}{text}
        </Link>
      </div>
    );
  }
};

export default Button;