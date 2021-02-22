// == Import npm
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';

// == Import
import './styles.scss';

// Import Local
import Bandeau from 'src/containers/Bandeau';
import Header from 'src/components/Header';
import Slider from 'src/containers/Slider';
import Main from 'src/components/Main';
import Categories from 'src/containers/Categories';
import Collections from 'src/containers/Collections';
import Products from 'src/components/Products';
import Product from 'src/components/Product';
import Footer from 'src/components/Footer';
import LoginPage from 'src/components/LoginPage';
import LegalsMentions from 'src/components/LegalsMentions';
import Presentation from 'src/components/Presentation';
import Contact from 'src/components/Contact';
import Cgv from 'src/components/Cgv';
import Dashboard from 'src/components/Dashboard';
import Favorites from 'src/containers/Favorites';
import UserData from 'src/containers/UserData';
import UserOrders from 'src/containers/UserOrders';
import UserShop from 'src/components/UserShop';
import PrivateRoute from 'src/components/PrivateRoute';

// == Composant
const App = ({ isLogged }) => (
  <div className="app">
    <Bandeau />
    <Header />
    <Switch>
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
      <Route path="/:name/produits">
        <Products />
      </Route>
      <Route path="/produit">
        <Product />
      </Route>
      <Route path="/login">
        <LoginPage />
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
      <PrivateRoute path="/mon-compte" isLogged={isLogged} component={Dashboard} exact />
      <PrivateRoute path="/mon-compte/mes-favoris" isLogged={isLogged} component={Favorites} exact />
      <PrivateRoute path="/mon-compte/mes-infos" isLogged={isLogged} component={UserData} exact />
      <PrivateRoute path="/mon-compte/mes-commandes" isLogged={isLogged} component={UserOrders} exact />
      <PrivateRoute path="/mon-compte/mon-panier" isLogged={isLogged} component={UserShop} exact />
    </Switch>
    <Footer />
  </div>
);
App.propTypes = {
  isLogged: PropTypes.bool.isRequired,
};

// == Export
export default App;
