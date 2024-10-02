import React from 'react';
import styles from './Button.module.css'


export function Button({text, color}) {
    return (
        <button className={`${styles.button} ${styles[color]}`}> 
            {text}
        </button>
    );
}

