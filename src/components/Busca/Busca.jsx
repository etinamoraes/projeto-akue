import React, { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import styles from './Busca.module.css'
import { Button } from '../Button/Button';


const professionals = [
  { id: 1, name: 'João - Professor', lat: -23.55052, lon: -46.633308 },
  { id: 2, name: 'Maria - Contadora', lat: -23.556927, lon: -46.65823 }
];

export function Busca() {
  const [cep, setCep] = useState('');
  const [service, setService] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();

    console.log(`Buscando ${service} perto do CEP ${cep}`);
  };

  return (
    <div className={styles.buscaContainer}>
      <form onSubmit={handleSearch}>
        <div className={styles.buscaInputs}>
        <input
          type="text"
          placeholder="Digite o tipo de serviço"
          value={service}
          onChange={(e) => setService(e.target.value)}
        />
        <input
          type="text"
          placeholder="Digite o CEP"
          value={cep}
          onChange={(e) => setCep(e.target.value)}
        />

        </div>
        <Button text="Buscar" color="button-purple" />

      </form>

      <div className={styles.mapaContainer}>
        <MapContainer center={[-23.55052, -46.633308]} zoom={13} style={{ height: '400px', width: '100%' }}>
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
          {professionals.map((pro) => (
            <Marker
              key={pro.id}
              position={[pro.lat, pro.lon]}
              icon={L.icon({
                iconUrl: 'https://cdn-icons-png.flaticon.com/512/61/61168.png',
                iconSize: [25, 41],
                iconAnchor: [12, 41],
              })}
            >
              <Popup>{pro.name}</Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>
    </div>
  );
};


