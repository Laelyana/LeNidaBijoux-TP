// == Import npm
import React, { useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';

// == Import
import './styles.scss';

// Import Local
import Header from 'src/components/Header';
import Bandeau from 'src/containers/Bandeau';
import Slider from 'src/containers/Slider';
import Main from 'src/components/Main';
import Categories from 'src/containers/Categories';
import Collections from 'src/containers/Collections';
import Products from 'src/containers/Products';
import Product from 'src/containers/Product';
import Footer from 'src/components/Footer';
import LoginPage from 'src/components/LoginPage';
import LegalsMentions from 'src/components/LegalsMentions';
import Presentation from 'src/components/Presentation';
import Contact from 'src/containers/Contact';
import Cgv from 'src/components/Cgv';
import Dashboard from 'src/components/Dashboard';
import Favorites from 'src/containers/Favorites';
import UserData from 'src/containers/UserData';
import UserOrders from 'src/containers/UserOrders';
import UserShop from 'src/containers/UserShop';
import PrivateRoute from 'src/components/PrivateRoute';
import NotFound from 'src/components/404';

import getProductsByCategory, { getProductsByCollections } from '../../utils/products';

// == Composant
const App = ({
  isLogged, status, manageLoad, categories, products, collections,
}) => {
  useEffect(
    manageLoad,
    [],
    [],
    [],
  );
  return (
    <div className="app">
      <Bandeau status={status} />
      <Header />
      <Switch>
        <Route path="/" exact>
          <Slider />
          <Main />
        </Route>
        <Route path="/Categories">
          <Categories />
        </Route>
        <Route path="/Collections">
          <Collections />
        </Route>
        {
          categories.map(
            (category) => {
              const filteredProducts = getProductsByCategory(products, category.id);
              const pathUrl = `/${category.name}`;
              return (
                <Route key={category.name} path={pathUrl} exact>
                  <Products products={filteredProducts} />
                </Route>
              );
            },
          )
        }
        {
          collections.map(
            (collection) => {
              const filteredProducts = getProductsByCollections(products, collection.id);
              const pathUrl = `/${collection.name}`;
              return (
                <Route key={collection.name} path={pathUrl} exact>
                  <Products products={filteredProducts} />
                </Route>
              );
            },
          )
        }
        {
          products.map(
            (product) => {
              const pathUrl = `/${product.name}`;
              return (
                <Route key={product.name} path={pathUrl} exact>
                  <Product product={product} />
                </Route>
              );
            },
          )
        }
        {!isLogged
          && (
          <Route path="/login">
            <LoginPage />
          </Route>
          )}
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
        <NotFound />
      </Switch>
      <Footer />
    </div>
  );
};
App.propTypes = {
  isLogged: PropTypes.bool.isRequired,
  status: PropTypes.bool.isRequired,
  manageLoad: PropTypes.func.isRequired,
  categories: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
  collections: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
  products: PropTypes.arrayOf(
    PropTypes.shape(
    ).isRequired,
  ).isRequired,
};

// == Export
export default App;
