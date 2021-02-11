// == Import npm
import React from 'react';
import axios from 'axios';

// == Import
import './styles.scss';

// Import Local
import Bandeau from 'src/components/Bandeau';
import Header from 'src/components/Header';
import Slider from 'src/components/Slider';
import Main from 'src/components/Main';
import Footer from 'src/components/Footer';

// == Composant
const App = () => {
    
    axios.get("http://0.0.0.0:8000/api/test")
    .then((response) => {
      console.log(response.data)
    }
    )

  return (
    <div className="app">
      <Bandeau />
      <Header />
      <Slider />
      <Main />
      <Footer />
    </div>
  );
}

// == Export
export default App;
