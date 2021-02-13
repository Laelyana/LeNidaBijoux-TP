import React from 'react';

import PropTypes from 'prop-types';

import reactLogo from './img.jpg';

import './header.scss';

const Header = () => (
  <header className="header">
    <a href="/"><img src={reactLogo} alt="react logo" /></a>
    <nav className="header__nav">
      <ul className="header__ul">
        <a href="/"><li className="header__ul--li">Accueil</li></a>
        <a href="/l-atelier"><li className="header__ul--li">L'atelier</li></a>
        <a href="/categories"><li className="header__ul--li">Catégories</li></a>
        <a href="/collections"><li className="header__ul--li">Collections</li></a>
      </ul>
    </nav>
  </header>
)

export default Header;
