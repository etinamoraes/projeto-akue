import React from 'react';
import styles from "./Header.module.css"
import acueLogo from "../../assets/logo.png"


export function Header() {
    return (
        <header>
            <div className={styles.container}>
            <img src={acueLogo} alt="Logotipo do site" />
            <p>Apoie a Comunidade <br/>LGBTQIAPN+</p>  
            </div>
        </header>
    );
};

