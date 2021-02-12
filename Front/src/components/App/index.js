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
import Categories from 'src/components/Categories';
import Collections from 'src/components/Collections';
import Produit from 'src/components/Produit';
import Footer from 'src/components/Footer';
import Login from 'src/components/Login';
import LegalsMentions from 'src/components/LegalsMentions';
import Presentation from 'src/components/Presentation';
import Contact from 'src/components/Contact';
import Cgv from 'src/components/Cgv';

// == Composant
const App = () => {

  const testApi = () => {
    axios.get("/api/test")
      .then((response) => {
        return console.log(response)
      }
      )
  };
  testApi();


  return (
    <div className="app">
      <Bandeau />
      <Header />
      <Slider />
      <Main />
      <Categories />
      <Collections />
      <Produit />
      <Login />
      <LegalsMentions />
      <Presentation />
      <Contact />
      <Cgv />
      <Footer />
    </div>
  );
}

// == Export
export default App;
