import React from 'react';
import styles from "./IdentificacaoSelect.module.css"

export function Identificacao() {
    return (
        <div className={styles.container}>
            <h1>Quem é você</h1>
            <div>
                <Button text="Estabelecimento / Prestador" color="--purple100" />
                <Button text="Consumidor" color="--yellow100" />
            </div>
        </div>
    );
};

