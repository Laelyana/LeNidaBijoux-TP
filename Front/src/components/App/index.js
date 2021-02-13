// == Import npm
import React from 'react';
import axios from 'axios';
import { Route } from 'react-router-dom';

// == Import
import './styles.scss';

// Import Local
import Bandeau from 'src/components/Bandeau';
import Header from 'src/components/Header';
import Slider from 'src/components/Slider';
import Main from 'src/components/Main';
import Categories from 'src/components/Categories';
import Collections from 'src/components/Collections';
import Products from 'src/components/Products';
import Footer from 'src/components/Footer';
import Login from 'src/components/Login';
import LegalsMentions from 'src/components/LegalsMentions';
import Presentation from 'src/components/Presentation';
import Contact from 'src/components/Contact';
import Cgv from 'src/components/Cgv';
import Dashboard from 'src/components/Dashboard';
import Favorites from 'src/components/Favorites';
import UserData from 'src/components/UserData';
import UserOrder from 'src/components/UserOrder';
import UserShop from 'src/components/UserShop';

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
      <Route path="/" exact>
        <Slider />
        <Main />
      </Route>
      <Route path="/categories">
        <Categories />
      </Route>
      <Route path="/collections">
        <Collections />
      </Route>
      <Route path="/collection/produits">
        <Products />
      </Route>
      <Route path="/categorie/produits">
        <Products />
      </Route>
      <Route path="/login">
        <Login />
      </Route>
      <Route path="/mentions-legales">
        <LegalsMentions />
      </Route>
      <Route path="/l-atelier">
        <Presentation />
      </Route>
      <Route path="/contactez-moi">
        <Contact />
      </Route>
      <Route path="/conditions-de-vente">
        <Cgv />
      </Route>
      <Route path="/mon-compte" exact>
        <Dashboard />
      </Route>
      <Route path="/mon-compte/mes-favoris">
        <Favorites />
      </Route>
      <Route path="/mon-compte/mes-infos">
        <UserData />
      </Route>
      <Route path="/mon-compte/mes-commandes">
        <UserOrder />
      </Route>
      <Route path="/mon-compte/mon-panier">
        <UserShop />
      </Route>
      <Footer />
    </div>
  );
}

// == Export
export default App;
