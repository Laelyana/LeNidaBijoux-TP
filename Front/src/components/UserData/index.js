import React from 'react';
import Field from './Field';

import './userdata.scss';

const UserData = ({
  firstname,
  lastname,
  phoneNumber,
  email,
  changeField,
  handleEditUser,
}) => {
  const handleEditSubmit = (evt) => {
    evt.preventDefault();
    handleEditUser();
  };
  return (
    <div className="userdata">
      <h2>Vos données personnelles</h2>
      <a href="/mon-compte" className="userdata__back">Revenir au tableau de bord</a>
      <form className="userdata__form" onSubmit={handleEditSubmit}>
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
          value={lastname}
        />
        <Field
          name="phoneNumber"
          placeholder="Votre téléphone"
          onChange={changeField}
          value={lastname}
        />
        <Field
          name="email"
          placeholder="Votre email"
          onChange={changeField}
          value={lastname}
        />
        <button type="submit" className="userdata__form--button">Mettre à jour mon profil</button>
      </form>
    </div>
  );
};

export default UserData;
