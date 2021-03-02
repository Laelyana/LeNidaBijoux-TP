import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import Field from './Field';

import './userdata.scss';

const UserData = ({
  firstname,
  lastname,
  email,
  phoneNumber,
  manageLoad,
  handleEditUser,
  changeField,
}) => {
  useEffect(
    manageLoad,
    [],
  );
  const handleDataSubmit = (evt) => {
    evt.preventDefault();
    handleEditUser();
  };
  return (
    <div className="userdata">
      <h2 className="userdata--title">Vos données personnelles</h2>
      <form className="userdata__form" onSubmit={handleDataSubmit}>
        <Field
          name="lastname"
          placeholder="Votre nom"
          value={lastname}
          onChange={changeField}
        />
        <Field
          name="firstname"
          placeholder="Votre prénom"
          value={firstname}
          onChange={changeField}
        />
        <Field
          name="phoneNumber"
          placeholder="Votre téléphone"
          value={phoneNumber}
          onChange={changeField}
        />
        <Field
          name="email"
          placeholder="Votre email"
          value={email}
          onChange={changeField}
        />
        <button type="submit" className="userdata__form--button"><span>Mettre à jour mon profil</span></button>
      </form>
      <a href="/mon-compte" className="userdata__back">Revenir au tableau de bord</a>

    </div>
  );
};

UserData.propTypes = {
  manageLoad: PropTypes.func.isRequired,
  lastname: PropTypes.string.isRequired,
  firstname: PropTypes.string.isRequired,
  phoneNumber: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
};

export default UserData;
