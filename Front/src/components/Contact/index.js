import React from 'react';
import Field from './Field';
import Textarea from './Textarea';

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
      <hr className="style-two" />
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

        <Textarea
          name="message"
          placeholder="Votre message"
          onChange={changeField}
          value={message}
        />
        <button type="submit" className="contact__form--button"><span>Envoyer</span></button>
      </form>
    </>
  );
};
export default Contact;
