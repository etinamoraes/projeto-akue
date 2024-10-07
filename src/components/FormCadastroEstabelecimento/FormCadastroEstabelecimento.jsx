import React from 'react';
import styles from './FormCadastroEstabelecimento.module.css'
import { MapPin, Circle } from "@phosphor-icons/react";
import { Button } from '../Button/Button';

export function FormCadastroEstabelecimento() {
    return (
        <div className={styles.container}>
            <form action="">
                <div className={styles.dadosDireita} >
                <Circle size={150} className={styles.circlePin}/>
                <input className={styles.inputName} type="text" placeholder="Estabelecimento"/>
                    <div className={styles.inputBoxCep}>
                        <MapPin size={32}/>
                        <input className={styles.cep} type="text" id="CEP" aria-label="CEP" placeholder="Digite seu cep" />
                    </div>
                </div>
                <div className={styles.dadosEsquerda}>
                    <div className={styles.inputBoxCelular}>
                        <label htmlFor="celular">Celular:</label>
                        <input className={styles.celular} type="tel" id="celular" placeholder="(XX) XXXXX-XXXX" />
                    </div>
                    <div className={styles.inputBoxProprietarie}>
                        <label htmlFor="">Proprietárie:</label>
                        <input className={styles.proprietarie} type="text" id="proprietarie" placeholder="Proprietárie" />
                    </div>
                    <div className={styles.inputBoxEmail}>
                        <label htmlFor="email">Email:</label>
                        <input className={styles.email} type="email" id="email" placeholder="youremail@example.com" />
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
                    <div className={styles.inputBoxCnae}>
                        <label htmlFor="">Atividade Econônomica(CNAE):</label>
                        <input className={styles.cnae} type="text" id="cnae" placeholder="Selecione seu CNAE" />
                    </div>
                    <div className={styles.inputBoxhorario}>
                        <label htmlFor="">Horário de Funcionamento:</label>
                        <input className={styles.funcionamento} type="text" placeholder="indique o horário de funcionamento" />
                    </div>
                    <Button text="Cadastrar" color="button-magenta" />
                </div>
                </form>
        </div>
    );
};

