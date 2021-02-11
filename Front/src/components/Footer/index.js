import React from 'react';

import PropTypes from 'prop-types';

import './footer.scss';

const Footer = () => (
  <footer className="footer">
    <div className="footer__legals">
      <ul className="footer__legals--ul">
        <li className="footer__legals--li">Mentions légales</li>
        <li className="footer__legals--li">Conditions générales de vente</li>
      </ul>
    </div>
    <div className="footer__social">
      <div className="footer__social--img">
        <img  src="#" alt="logo FB" />
        <img  src="#" alt="logo Insta" />
      </div>
    </div>
    <div className="footer__contact">
      <ul className="footer__contact--ul">
        <li className="footer_contact--li">Adresse</li>
        <li className="footer_contact--li">Tel</li>
        <li className="footer_contact--li">Lien vers formulaire de contact</li>
      </ul>
    </div>
  </footer>
)

export default Footer;
