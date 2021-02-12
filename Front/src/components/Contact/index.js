import React from 'react';

import './contact.scss'

const Contact = () => (
    <form className="contact__form">
      <h3>Formulaire de contact</h3>
      <img src="#" alt="#"/>
      <input className="contact__form--input" placeholder="Nom / Prénom"></input>
      <input className="contact__form--input" placeholder="Sujet"></input>
      <textarea className="contact__form--textarea" placeholder="Descriptif de votre demande"></textarea>
    </form>
)

export default Contact;
