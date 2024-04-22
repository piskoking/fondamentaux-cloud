import React from 'react';
import { GoogleMap, LoadScript } from '@react-google-maps/api';
import './App.css'; // Assurez-vous d'avoir un fichier App.css pour le style

const mapStyles = {
  width: '50vw', 
  height: '50vh', 
  margin: 'auto' 
};

function App() {
  const latitude = 48.8566; // Exemple de latitude
  const longitude = 2.3522; // Exemple de longitude

  return (
    <div className="App">
      <header className="App-header">
        <h1>Bienvenue sur notre page d'atterrissage</h1>
        <p>Utilisez Google Maps pour explorer notre emplacement.</p>
      </header>
      <LoadScript
        googleMapsApiKey="" // Remplacez par votre clé API Google Maps
      >
        <GoogleMap
          mapContainerStyle={mapStyles}
          zoom={15} // Niveau de zoom par défaut
          center={{ lat: latitude, lng: longitude }} // Utilisation des variables pour le centre de la carte
        >
          { /* Contenu supplémentaire de la carte, comme les marqueurs, peut être ajouté ici */ }
        </GoogleMap>
      </LoadScript>
    </div>
  );
}

export default App;
