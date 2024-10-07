import React from 'react';
import styles from "./IdentificacaoSelect.module.css"
import { Button } from '../../components/Button/Button'
import { useNavigate } from 'react-router-dom';


export function Identificacao() {

    const navigate = useNavigate();

    const goToFormCadastroConsumidor = () => {
        navigate('/FormCadastroConsumidor');
    }

    const goToFormCadastroEstabelecimento = () => {
        navigate('/FormCadastroEstabelecimento');
    }

    const goToFormCadastroPrestador = () => {
        navigate('/FormCadastroPrestador');
    }

    return (
        <div className={styles.container}>
            <h1>Quem é você?</h1>
            <div className={styles.boxButtons}>
                <Button text="Prestador de Serviço" color='button-purple' 
                onClick={goToFormCadastroPrestador} />
                <Button text="Estabelecimento" color='button-green' 
                onClick={goToFormCadastroEstabelecimento} />
                <Button text="Pessoa Consumidora" color='button-yellow' 
                onClick={goToFormCadastroConsumidor} />
            </div>
        </div>
    );
};

