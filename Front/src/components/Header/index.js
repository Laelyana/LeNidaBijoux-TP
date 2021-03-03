import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from './logo.png';

import './header.scss';

const Header = () => (
  <div className="navigation">
    <ul className="navigation__ul">
      <NavLink to="/" activeClassName="selected" exact><li className="navigation__li">Accueil</li></NavLink>
      <NavLink to="/l-atelier" activeClassName="selected" exact><li className="navigation__li">L'atelier</li></NavLink>
      <NavLink to="/"><img src={logo} alt="logo" className="navigation__logo" /></NavLink>
      <NavLink to="/Categories" activeClassName="selected" exact><li className="navigation__li">Catégories</li></NavLink>
      <NavLink to="/Collections" activeClassName="selected" exact><li className="navigation__li">Collections</li></NavLink>
    </ul>
  </div>
);

export default Header;
