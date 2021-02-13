import React from 'react';

import './userdata.scss';

const UserData = () => (
<div  className="userdata">
  <h2>Vos données personnelles</h2>
  <a href="/mon-compte" className="userdata__back">Revenir au tableau de bord</a>
  <form className="userdata__form">
    <input className="userdata__form--input" placeholder="Nom"></input>
    <input className="userdata__form--input" placeholder="Prénom"></input>
    <input className="userdata__form--input" placeholder="Téléphone"></input>
    <input className="userdata__form--input" placeholder="Email"></input>
    <input className="userdata__form--input" placeholder="Ancien mot de passe"></input>
    <input className="userdata__form--input" placeholder="Nouveau mot de passe"></input>
    <input className="userdata__form--input" placeholder="Confirmer le nouveau de passe"></input>
    <button className="userdata__form--button">Mettre à jour mon profil</button>
  </form>
</div>
);

export default UserData;
