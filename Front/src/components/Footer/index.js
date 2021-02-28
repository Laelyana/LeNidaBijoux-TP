import React from 'react';

import './footer.scss';

import faecebookLogo from './facebook.png';
import instagramLogo from './instagram.png';

const Footer = () => (
  <footer className="footer">

  <div className="footer__left">
      <h5 className="footer__left--title">Politique Client</h5>
      <ul>
        <li className="footer__left--legals-li"><a href="/mentions-legales">Mentions légales</a></li>
        <li className="footer__left--legals-li"><a href="conditions-de-vente">Conditions générales de vente</a></li>
      </ul>
    </div>

    <div className="footer__right">
    <div className="footer__right--social">
   <div> <a href="https://www.facebook.com/lenidabijoux"><img  src={faecebookLogo} alt="logo FB" className="footer__right--social-logo"/></a>  </div> 
   <div> <a href="https://www.instagram.com/le_nid_a_bijoux/"><img  src={instagramLogo} alt="logo Insta" className="footer__right--social-logo" /></a></div>
   </div>
      <ul className="footer__contact--ul">
        <li className="footer__contact--li">1 rue par ici 31000 Parla</li>
        <li className="footer__contact--li">0123456789</li>
        <li className="footer__contact--li-form"><a href="/contactez-moi">Contactez moi</a></li>
      </ul>
   
    </div>
  </footer>
);

export default Footer;
