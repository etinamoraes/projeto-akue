import React from 'react';
import styles from "./FormAutenticacao.module.css"


export function FormAutenticacao(){
    return (
        <div className={styles.container}>
            <div className={styles.cadastroContainer}>
            <form action="" className={styles.formCadastro}>
                <h2>Crie sua conta!</h2>
                <div>
                    <label htmlFor="">Nome:</label>
                    <input type="text" name="" id="" placeholder="Digite seu nome" />
                </div>
                <div>
                    <label htmlFor="">Email:</label>
                    <input type="email" placeholder="Digite seu e-mail" />
                </div>
                <div>
                    <label htmlFor="">Senha:</label>
                    <input type="password" placeholder="Digite sua senha" />
                </div>
            </form>
            </div>
            <div className={styles.autenticacaoContainer}>
            <form action="" className={styles.formAutenticacao} >
                <h2>Bem vinde de volta!</h2>
                <div>
                    <label htmlFor="">E-mail:</label>
                    <input type="email" placeholder='Digite seu e-mail'/>
                </div>
                <div className={styles.inputSenha} >
                    <label htmlFor="">Senha:</label>
                    <input type="password" placeholder='Digite sua senha'/> 
                    <a>Esqueci minha senha</a>
                </div>
            </form>
            </div>
        </div>
    );
};

