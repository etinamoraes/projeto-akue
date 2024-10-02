import React from 'react';
import styles from "./IdentificacaoSelect.module.css"
import { Button } from '../../components/Button/Button'



export function Identificacao() {
    return (
        <div className={styles.container}>
            <h1>Quem é você?</h1>
            <div className={styles.boxButtons}>
                <Button text="Prestador de Serviço" color='button-purple' />
                <Button text="Estabelecimento" color='button-green' />
                <Button text="Pessoa Consumidora" color='button-yellow' />
            </div>
        </div>
    );
};

