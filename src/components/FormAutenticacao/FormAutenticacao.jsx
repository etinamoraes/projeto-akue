import React from 'react';
import styles from "./FormAutenticacao.module.css"
import { Button } from '../Button/Button';
import { useNavigate } from 'react-router-dom';



export function FormAutenticacao(){
    
        const navigate = useNavigate();
    
        const goToIdentificacao = () => {
            navigate('/Identificacao');
        } 

        const goToBusca = () => {
            navigate('/Busca');
        }

       
    return (
        <div className={styles.container}>
            <div className={styles.cadastroContainer}>
                <h2>Crie sua conta!</h2>
            <form action="" className={styles.formCadastro}>
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
                <Button text="Cadastre-se" color="button-dark-red" onClick={goToIdentificacao}/> 
            </form>
            </div>
            <div className={styles.autenticacaoContainer}>
                <h2>Bem vinde de volta!</h2>
            <form action="" className={styles.formAutenticacao} >
                <div>
                    <label htmlFor="">E-mail:</label>
                    <input type="email" placeholder='Digite seu e-mail'/>
                </div>
                <div className={styles.inputSenha} >
                    <label htmlFor="">Senha:</label>
                    <input type="password" placeholder='Digite sua senha'/> 
                </div>
                    <a>Esqueci minha senha</a>
                <Button text="Entrar" color="button-red" onClick={goToBusca} /> 
            </form>
            </div>
        </div>
    );
};

