import React from 'react';

import PropTypes from 'prop-types';

import './footer.scss';

import faecebookLogo from './facebook.png';
import instagramLogo from './instagram.png';

const Footer = () => (
  <footer className="footer">
    <div className="footer__legals">
      <ul className="footer__legals--ul">
        <a href="#"><li className="footer__legals--li">Mentions légales</li></a>
        <a href="#"><li className="footer__legals--li">Conditions générales de vente</li></a>
      </ul>
    </div>
    <div className="footer__social">
      <div className="footer__social--img">
        <a href="#"><img className="socialLogo" src={faecebookLogo} alt="logo FB" /></a>
        <a href="#"><img className="socialLogo" src={instagramLogo} alt="logo Insta" /></a>
      </div>
    </div>
    <div className="footer__contact">
      <ul className="footer__contact--ul">
        <li className="footer_contact--li">1 rue par ici 31000 Parla</li>
        <li className="footer_contact--li">0123456789</li>
        <a href="#"><li className="footer_contact--li">Contactez nous</li></a>
      </ul>
    </div>
  </footer>
)

export default Footer;
