import React, { useEffect, useState } from 'react';
import styles from './Busca.module.css'
import { Button } from '../Button/Button';
import { initializeApp } from "firebase/app";
import { collection, getDocs, getFirestore } from "firebase/firestore";

const firebaseApp = initializeApp({
  apiKey: "AIzaSyC1L304EbCP0K7LDyCF5RAuOUojHeXO960",
  authDomain: "projeto-akue.firebaseapp.com",
  projectId: "projeto-akue",
});

export function Busca() {

  const [professionals, setProfessionals] = useState([]);
  const [filteredProfessionals, setFilteredProfessionals] = useState([]); 
  const [cidades, setCidades] = useState([{
    value:"", name: ""
  }]);
  const [cidade, setCidade] = useState("");

  const db = getFirestore(firebaseApp);
  const userCollectionRef = collection(db, "professionals");

//  Funçao que busca profissionais do Firebase 
  useEffect(() => {
    const getUsers = async () => {
      const data = await getDocs(userCollectionRef)
      setProfessionals(data.docs.map((doc) => ({...doc.data(), id: doc.id})))
    };

    getUsers();
  }, [])
  
  useEffect(() => {
    const cidadesUnicas = [...new Set(professionals.map(profissional => profissional.cidade))].map((cidade, index) => ({
      value: index,
      name: cidade,
    }));
    
    setCidades(cidadesUnicas);
  }, [professionals]);

  const handleBuscar = (e) => {
    e.preventDefault(); 
    if (cidade !== "") {
      const profissionaisFiltrados = professionals.filter(profissional => profissional.cidade === cidade);
      setFilteredProfessionals(profissionaisFiltrados);
    }
  };


  return (
    <div className={styles.buscaContainer}>
      {console.log(professionals)}
      {console.log(cidades)}
      <form onSubmit={handleBuscar}>
        <div className={styles.buscaInputs}>
          <select value={cidades} onChange={e => setCidade(e.target.value)} >
            <option value="">Selecione a cidade</option>
            {cidades.map(cidade => (
              <option key={cidade.value} value={cidade.value}>{cidade.name}</option>
            ))}
          </select>

        </div>
        <Button text="Buscar" color="button-purple" />
      </form>
      <div className={styles.resultados}>
        {filteredProfessionals > 0 ? (
          filteredProfessionals.map(profissional => (
            <div key={profissional.id} className={styles.card}>
              <h3>{profissional.nome}</h3>
              <p>Contato: {profissional.contato}</p>
              <p>Email: {profissional.email}</p>
              <p>Portfólio: {profissional.portfolio}</p>
              <p>Cidade: {profissional.cidade}</p>
              <p>Bairro: {profissional.bairro}</p>
            </div>
          ))
        ) : (
          <p>Nenhum profissional encontrado.</p>
        )}
      </div>
    </div>
  );
};
