import React from 'react';
import styles from './FormCadastroPrestador.module.css';
import { MapPin, Circle } from "@phosphor-icons/react";
import { Button } from '../Button/Button';
import { useNavigate } from 'react-router-dom';

export function FormCadastroPrestador() {

    const navigate = useNavigate();

    const goToBusca = () => {
        navigate('/Busca');
    }   
    
    return (
        <div className={styles.container}>
            <form action="">
            <div className={styles.dadosDireita} >
                <Circle size={150} className={styles.circlePin} />
                <input className={styles.inputName} type="text" placeholder="Digite o seu nome" />
                <div className={styles.inputBoxCep}>
                    <img src="" alt="" />
                    <MapPin size={32} />
                    <input className={styles.cep} type="text" id="CEP" aria-label="CEP" placeholder="Digite seu cep" />
                </div>
            </div>
            <div className={styles.dadosEsquerda}>
                <div className={styles.inputBoxCelular}>
                    <label htmlFor="celular">Celular:</label>
                    <input className={styles.celular} type="tel" id="celular" placeholder="(XX) XXXXX-XXXX" />
                </div>
                <div className={styles.inputBoxEmail}>
                    <label htmlFor="email">Email:</label>
                    <input className={styles.email} type="email" id="email" placeholder="seuemail@examplo.com" />
                </div>
                <div className={styles.inputBoxRua}>
                    <label htmlFor="rua">Rua:</label>
                    <input className={styles.rua} type="text" id="rua" placeholder="Digite sua rua" />
                </div>
                <div className={styles.inputBoxBairro}>
                    <label htmlFor="bairro">Bairro:</label>
                    <input className={styles.bairro} type="text" id="bairro" placeholder="Digite o seu bairro" />
                </div>
                <div className={styles.inputBoxCidade}>
                    <label htmlFor="cidade">Cidade:</label>
                    <input className={styles.cidade} type="text" id="cidade" placeholder="Digite sua Cidade" />
                </div>
                <div className={styles.inputBoxEstado}>
                    <label htmlFor="estado">Estado:</label>
                    <input className={styles.estado} type="text" id="estado" placeholder="Digite seu Estado" />
                </div>
                <div className={styles.inputBoxProfissao}>
                    <label htmlFor="">Profissão/Serviço:</label>
                    <input className={styles.profissao} type="text" id="profissao" placeholder="Digite sua Profissão/Serviço" />
                </div>
                <div className={styles.inputBoxExperiencia}>
                    <label htmlFor="">Experiência:</label>
                    <input className={styles.experiencia} type="number" id="experiencia" placeholder="Tempo de experiência" />
                </div>
                <div className={styles.inputBoxPortfolio}>
                    <label htmlFor="">Portfólio/Site:</label>
                    <input className={styles.portfolio} type="url" id="website" placeholder="https://www.seusite.com.br" />
                </div>
                <Button text="Cadastrar" color="button-magenta" onClick={goToBusca}/>
            </div>
            </form>
        </div>
    );
};

