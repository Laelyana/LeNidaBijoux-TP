// == Import npm
import React from 'react';

// == Import
import './styles.scss';

// Import Local
import Bandeau from 'src/components/Bandeau';
import Header from 'src/components/Header';
import Slider from 'src/components/Slider';
import Footer from 'src/components/Footer';

// == Composant
const App = () => (
  <div className="app">
    <Bandeau />
    <Header />
    <Slider />
    <Footer />
  </div>
);

// == Export
export default App;
