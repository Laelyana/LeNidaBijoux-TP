import React from 'react';

import PropTypes from 'prop-types';

import './footer.scss';

import faecebookLogo from './facebook.png';
import instagramLogo from './instagram.png';

const Footer = () => (
  <footer className="footer">
    <div className="footer__legals">
      <ul className="footer__legals--ul">
        <li className="footer__legals--li"><a href="/mentions-legales">Mentions légales</a></li>
        <li className="footer__legals--li"><a href="conditions-de-vente">Conditions générales de vente</a></li>
      </ul>
    </div>
    <div className="footer__social">
    <div><a href="https://www.facebook.com/lenidabijoux"><img className="footer__social--logo" src={faecebookLogo} alt="logo FB" /></a></div>    
    <div><a href="https://www.instagram.com/le_nid_a_bijoux/"><img className="footer__social--logo" src={instagramLogo} alt="logo Insta" /></a></div>
    </div>
    <div className="footer__contact">
      <ul className="footer__contact--ul">
        <li className="footer__contact--li">1 rue par ici 31000 Parla</li>
        <li className="footer__contact--li">0123456789</li>
        <li className="footer__contact--li-form"><a href="/contactez-moi">Contactez moi</a></li>
      </ul>
    </div>
  </footer>
)

export default Footer;
