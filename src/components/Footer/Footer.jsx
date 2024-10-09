import React from 'react';
import { FacebookLogo, XLogo, InstagramLogo, LinkedinLogo, GithubLogo } from "@phosphor-icons/react";
import styles from "./Footer.module.css"
import { Button } from '../Button/Button'


export function Footer() {
    return (
        <>
            <footer className={styles.container}>
                <div className={styles.linkContent}>
                    <div className={styles.links}>
                        <a href="#"><FacebookLogo size={28} /></a>
                        <a href="#"><XLogo size={28} /></a>
                        <a href="#"><InstagramLogo size={28} /></a>
                        <a href="https://www.linkedin.com/in/valentina-hastenreiter-moraes-a5191b331/"><LinkedinLogo size={28} /></a>
                        <a href="https://github.com/etinamoraes"><GithubLogo size={28} /></a>
                    </div>
                    <div className={styles.subscribe}>
                        <h2>Inscreva-se para novidades</h2>
                        <input type="email" placeholder='Insira seu melhor e-mail' />
                        <Button text='Enviar' color='button-magenta' />
                    </div>
                </div>
                <div className={styles.paragraph}>
                    <p>© Produzido por Valentina Hastenreiter</p>
                </div>
                <div className={styles.footerLine}>
                    <img src="" alt="" />
                </div>
            </footer>
        </>
    );
};

