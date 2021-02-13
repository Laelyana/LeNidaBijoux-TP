import React from 'react';

import './userorder.scss';

const UserOrder = () => (
  <div className="userorder">
    <h2>Mes commandes</h2>
    <a href="#" className="userorder__back">Revenir au tableau de bord</a>
    <div className="userorder__list">
      <div className="userorder__list--item">
        <h5 className="userorder__list--item--name">Commande n°1</h5>
        <button className="userorder__list--item--button">Consulter</button>
      </div>
      <div className="userorder__list--item">
        <h5 className="userorder__list--item--name">Commande n°2</h5>
        <button className="userorder__list--item--button">Consulter</button>
      </div>
      <div className="userorder__list--item">
        <h5 className="userorder__list--item--name">Commande n°3</h5>
        <button className="userorder__list--item--button">Consulter</button>
      </div>
    </div>
  </div>
)

export default UserOrder;
