import React from 'react';
import styles from './Button.module.css'


export function Button({text, color, onClick}) {
    return (
        <button className={`${styles.button} ${styles[color]}`}
        onClick={onClick}> 
            {text}
        </button>
    );
}

