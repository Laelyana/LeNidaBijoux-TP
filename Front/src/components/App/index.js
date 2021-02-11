// == Import npm
import React from 'react';

// == Import
import reactLogo from './img.jpg';
import './styles.scss';

// Import Local
import Bandeau from 'src/components/Bandeau';

// == Composant
const App = () => (
  <div className="app">
    <Bandeau />
    <img src={reactLogo} alt="react logo" />
    <h1>Projet VP Bijoux Front Power</h1>
  </div>
);

// == Export
export default App;
