import React, { useEffect } from 'react';
import Field from './Field';

import './userdata.scss';

const UserData = ({
  data,
  manageLoad,
}) => {
  useEffect(
    manageLoad,
    [],
  );
  return (
    <div className="userdata">
      <h2>Vos données personnelles</h2>
      <a href="/mon-compte" className="userdata__back">Revenir au tableau de bord</a>
      <form className="userdata__form">
        <Field
          name="lastname"
          placeholder="Votre nom"
          value={data.lastname}
        />
        <Field
          name="firstname"
          placeholder="Votre prénom"
          value={data.firstname}
        />
        <Field
          name="phoneNumber"
          placeholder="Votre téléphone"
          value={data.phoneNumber}
        />
        <Field
          name="email"
          placeholder="Votre email"
          value={data.email}
        />
        <button type="submit" className="userdata__form--button">Mettre à jour mon profil</button>
      </form>
    </div>
  );
};

export default UserData;
