import React from 'react';
import logo from './logo.png';

import './header.scss';

const Header = () => (
  
    <div className="navigation">
      <ul className="navigation__ul">
        <a href="/"><li className="navigation__li">Accueil</li></a>
        <a href="/l-atelier"><li className="navigation__li">L'atelier</li></a>
        <a href="/"><img  src={logo} alt="logo" className="navigation__logo"/></a>  
        <a href="/Categories"><li className="navigation__li">Catégories</li></a>
        <a href="/Collections"><li className="navigation__li">Collections</li></a>
      </ul>
    </div>

);

export default Header;
