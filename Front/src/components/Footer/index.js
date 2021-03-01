import React from 'react';

import './footer.scss';

import faecebookLogo from './facebook.png';
import instagramLogo from './instagram.png';
import logo from './logo.png';

const Footer = () => (
  <footer className="footer">
<div className="footer__left">
<div> <a href="/"><img  src={logo} alt="logo" className="footer__left__logo"/></a>  </div> </div>

<div className="footer__center">
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

  <div className="footer__right">
      <ul>
        <li className="footer__left--legals-li"><a href="/mentions-legales">Mentions légales</a></li>
        <li className="footer__left--legals-li"><a href="conditions-de-vente">Conditions générales de vente</a></li>
      </ul>
    </div>

   
  </footer>
);

export default Footer;
