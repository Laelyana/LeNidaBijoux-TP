import React from 'react';

import './footer.scss';

import faecebookLogo from './facebook.png';
import instagramLogo from './instagram.png';

const Footer = () => (
  <footer className="footer">
    <div className="footer__legals">
      <ul className="footer__legals--ul">
        <a href="/mentions-legales"><li className="footer__legals--li">Mentions légales</li></a>
        <a href="conditions-de-vente"><li className="footer__legals--li">Conditions générales de vente</li></a>
      </ul>
    </div>
    <div className="footer__social">
      <div className="footer__social--img">
        <a href="https://www.facebook.com/lenidabijoux"><img className="socialLogo" src={faecebookLogo} alt="logo FB" /></a>
        <a href="https://www.instagram.com/le_nid_a_bijoux/"><img className="socialLogo" src={instagramLogo} alt="logo Insta" /></a>
      </div>
    </div>
    <div className="footer__contact">
      <ul className="footer__contact--ul">
        <li className="footer_contact--li">1 rue par ici 31000 Parla</li>
        <li className="footer_contact--li">0123456789</li>
        <a href="/contactez-moi"><li className="footer_contact--li">Contactez moi</li></a>
      </ul>
    </div>
  </footer>
);

export default Footer;
