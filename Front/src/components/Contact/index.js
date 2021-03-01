import React from 'react';
import Field from './Field';

import './contact.scss';

const Contact = ({
  firstname,
  lastname,
  email,
  message,
  changeField,
  handleContact,
}) => {
  const handleFormContactSubmit = (evt) => {
    evt.preventDefault();
    handleContact();
  };
  return (
    <>
      <div className="title__contact"><h3>Formulaire de contact</h3></div>
      <hr className="style-two"></hr>
      <form className="contact__form" onSubmit={handleFormContactSubmit}>
 
        <Field
          name="lastname"
          placeholder="Votre nom"
          onChange={changeField}
          value={lastname}
        />
       
        <Field
          name="firstname"
          placeholder="Votre prénom"
          onChange={changeField}
          value={firstname}
        />
        <Field
          name="email"
          placeholder="Votre email"
          onChange={changeField}
          value={email}
        />
         <textarea>
        <Field
          name="message"
          placeholder="Votre message"
          onChange={changeField}
          value={message}
          type="textarea"
        /></textarea>
        <button type="submit" className="contact__form--button">Envoyer</button>
      </form>
    </>
  );
};
export default Contact;
