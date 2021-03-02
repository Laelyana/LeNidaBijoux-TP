import React from 'react';

import './contact.scss';

const Contact = () => (
  <form className="contact__form">
    <h3>Formulaire de contact</h3>
    <input className="contact__form--input" placeholder="Nom / Prénom" />
    <input className="contact__form--input" placeholder="Sujet" />
    <textarea className="contact__form--textarea" placeholder="Descriptif de votre demande" />
    <button type="submit" className="contact__form--button">Envoyer</button>
  </form>
);

export default Contact;
