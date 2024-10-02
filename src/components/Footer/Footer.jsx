import React from 'react';
import { FacebookLogo, XLogo, InstagramLogo, LinkedinLogo, GithubLogo  } from "@phosphor-icons/react";
import styles from "./Footer.module.css"


export function Footer (){
    return (
        <footer className={styles.container}>
            <div className={styles.linkContent}>
                <div className={styles.links}>
                    <a href="#"><FacebookLogo size={28} /></a>
                    <a href="#"><XLogo size={28} /></a>
                    <a href="#"><InstagramLogo size={28} /></a>
                    <a href="#"><LinkedinLogo size={28} /></a>
                    <a href="#"><GithubLogo size={28} /></a>
                </div>
                <div className={styles.subscribe}>
                    <h2>Inscreva-se para novidades</h2>
                    <input type="email" placeholder='Insira seu melhor e-mail'/>
                    <button type='submit'>Enviar</button>
                </div>
            </div>
            <div className={styles.paragraph}>
                <p>© Produzido por Valentina Hastenreiter</p>
            </div>
            <div className={styles.footerLine}>
                <img src="" alt="" />
            </div>
        </footer>

    );
};

