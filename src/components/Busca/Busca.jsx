import styles from './Busca.module.css';
import { Button } from '../Button/Button';
import { initializeApp } from "firebase/app";
import { collection, getDocs, getFirestore } from "firebase/firestore";
import { useEffect, useState } from 'react';

const firebaseApp = initializeApp({
  apiKey: "import.meta.env.VITE_API_KEY",
  authDomain: "projeto-akue.firebaseapp.com",
  projectId: "projeto-akue",
});

export function Busca() {
  const [professionals, setProfessionals] = useState([]);
  const [filteredProfessionals, setFilteredProfessionals] = useState([]);
  const [cidades, setCidades] = useState([]);
  const [cidade, setCidade] = useState("");

  const db = getFirestore(firebaseApp);
  const userCollectionRef = collection(db, "professionals");

  useEffect(() => {
    const getUsers = async () => {
      const data = await getDocs(userCollectionRef);
      const professionalsData = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));

      setProfessionals(professionalsData);
      
      const cidadesUnicas = [...new Set(professionalsData.map(profissional => profissional.cidade))]
        .map(cidade => ({ value: cidade, name: cidade }));
      
      setCidades(cidadesUnicas);
    };

    getUsers();
  }, []);

  const handleBuscar = (e) => {
    e.preventDefault();
    if (cidade !== "") {
      const profissionaisFiltrados = professionals.filter(profissional => profissional.cidade === cidade);
      setFilteredProfessionals(profissionaisFiltrados);
    } else {
      setFilteredProfessionals([]);
    }
  };

  const renderField = (field) => {
    return typeof field === 'string' ? field : "N/A"; 
  };

  return (
    <div className={styles.buscaContainer}>
        <h2>Selecione a cidade que deseja buscar: </h2>
      <form onSubmit={handleBuscar}>
        <div className={styles.buscaInputs}>
          <select value={cidade} onChange={e => setCidade(e.target.value)} className={styles.selectCidade} >
            <option value="">Selecione a cidade</option>
            {cidades.map(cidade => (
              <option key={cidade.value} value={cidade.value}>{cidade.name}</option>
            ))}
          </select>
        </div>
        <Button text="Buscar" color="button-purple" width='20%' />
      </form>
      <div className={styles.resultados}>
        {filteredProfessionals.length > 0 ? (
          filteredProfessionals.map(profissional => (
            <div key={profissional.id} className={styles.card}>
              <h3>{renderField(profissional.nome)}</h3>
              <p>Contato: {renderField(profissional.contato)}</p>
              <p>Email: {renderField(profissional.email)}</p>
              <p>Portfólio: {renderField(profissional.portfolio)}</p>
              <p>Cidade: {renderField(profissional.cidade)}</p>
              <p>Bairro: {renderField(profissional.bairro)}</p>
            </div>
          ))
        ) : (
          <p>Nenhum profissional encontrado.</p>
        )}
      </div>
    </div>
  );
}






