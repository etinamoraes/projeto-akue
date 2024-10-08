import React from 'react';
import styles from './Button.module.css'


export function Button({text, color, onClick, width}) {
    return (
        <button className={`${styles.button} ${styles[color]}`}
        onClick={onClick}
        style={{ width: width }}
        > 
            {text}
        </button>
    );
}

